#!/usr/bin/env python3
"""Download a YouTube song and add it to this project's playlist."""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import shutil
import sys
import tempfile
import unicodedata
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]
AUDIO_DIR = PROJECT_ROOT / "assets" / "audio"
IMAGE_DIR = PROJECT_ROOT / "assets" / "img"
SONGS_FILE = PROJECT_ROOT / "assets" / "js" / "songs.js"
YOUTUBE_HOSTS = {
    "youtube.com",
    "www.youtube.com",
    "m.youtube.com",
    "music.youtube.com",
    "youtu.be",
    "youtube-nocookie.com",
    "www.youtube-nocookie.com",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Tải audio + thumbnail từ YouTube và thêm bài vào playlist."
    )
    parser.add_argument("--url", help="URL video YouTube")
    parser.add_argument("--name", help="Tên bài hát")
    parser.add_argument("--artist", help="Tên ca sĩ/tác giả")
    parser.add_argument(
        "--lyrics-file",
        type=Path,
        help="File lyrics UTF-8 (nếu bỏ qua, chương trình sẽ hỏi khi chạy)",
    )
    return parser.parse_args()


def required_input(label: str, current_value: str | None = None) -> str:
    value = (current_value or "").strip()
    while not value:
        value = input(f"{label}: ").strip()
        if not value:
            print("  Không được để trống.")
    return value


def read_lyrics(lyrics_file: Path | None) -> str:
    if lyrics_file:
        try:
            return lyrics_file.expanduser().read_text(encoding="utf-8").strip()
        except OSError as error:
            raise RuntimeError(f"Không đọc được file lyrics: {error}") from error

    print(
        "Lyrics (không bắt buộc): dán nhiều dòng rồi nhập END ở một dòng riêng.\n"
        "Nhấn Enter ngay để bỏ qua."
    )
    lines: list[str] = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        if line == "END":
            break
        if not lines and not line:
            break
        lines.append(line)
    return "\n".join(lines).strip()


def validate_youtube_url(url: str) -> None:
    parsed = urlparse(url)
    host = (parsed.hostname or "").lower()
    if parsed.scheme not in {"http", "https"} or host not in YOUTUBE_HOSTS:
        raise ValueError(
            "URL phải là link video YouTube hợp lệ (youtube.com hoặc youtu.be)."
        )


def slugify(value: str) -> str:
    value = value.replace("Đ", "D").replace("đ", "d")
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "_", value).strip("_")
    return value or "song"


def available_slug(name: str) -> str:
    base = slugify(name)
    candidate = base
    number = 2
    while (AUDIO_DIR / f"{candidate}.mp3").exists() or (
        IMAGE_DIR / f"{candidate}.jpg"
    ).exists():
        candidate = f"{base}_{number}"
        number += 1
    return candidate


def lyrics_to_html(lyrics: str) -> str:
    if not lyrics:
        return "Đang update..."
    return "<br>".join(html.escape(line, quote=False) for line in lyrics.splitlines())


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def build_song_entry(
    name: str, artist: str, slug: str, lyrics: str, newline: str
) -> str:
    values = {
        "name": name,
        "artist": artist,
        "path": f"./assets/audio/{slug}.mp3",
        "image": f"./assets/img/{slug}.jpg",
        "lyrics": lyrics_to_html(lyrics),
    }
    lines = [
        "    {",
        f"      name: {js_string(values['name'])},",
        f"      singer: {js_string(values['artist'])},",
        f"      path: {js_string(values['path'])},",
        f"      image: {js_string(values['image'])},",
        f"      lyrics: {js_string(values['lyrics'])},",
        "      blocked: false,",
        "    },",
    ]
    return newline.join(lines) + newline


def updated_playlist(name: str, artist: str, slug: str, lyrics: str) -> bytes:
    original = SONGS_FILE.read_bytes()
    newline = "\r\n" if b"\r\n" in original else "\n"
    content = original.decode("utf-8")
    marker = f"  return [{newline}"
    if content.count(marker) != 1:
        raise RuntimeError(f"Không tìm thấy vị trí chèn playlist trong {SONGS_FILE}.")

    entry = build_song_entry(name, artist, slug, lyrics, newline)
    return content.replace(marker, marker + entry, 1).encode("utf-8")


def write_playlist_atomically(content: bytes) -> None:
    temp_file = SONGS_FILE.with_name(f".{SONGS_FILE.name}.tmp")
    try:
        temp_file.write_bytes(content)
        os.replace(temp_file, SONGS_FILE)
    finally:
        temp_file.unlink(missing_ok=True)


def download_media(url: str, temp_dir: Path) -> tuple[Path, Path]:
    if not shutil.which("ffmpeg") or not shutil.which("ffprobe"):
        raise RuntimeError("Thiếu ffmpeg/ffprobe. Hãy cài ffmpeg rồi chạy lại.")

    try:
        import yt_dlp
    except ImportError as error:
        raise RuntimeError(
            "Thiếu yt-dlp. Hãy tạo .venv và cài dependency theo hướng dẫn trong README."
        ) from error

    output_template = str(temp_dir / "source.%(ext)s")
    options = {
        "format": "bestaudio/best",
        "outtmpl": output_template,
        "noplaylist": True,
        "writethumbnail": True,
        "overwrites": True,
        "concurrent_fragment_downloads": 4,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "128",
            },
            {
                "key": "FFmpegThumbnailsConvertor",
                "format": "jpg",
            },
        ],
    }

    print("\nĐang tải audio và thumbnail...")
    with yt_dlp.YoutubeDL(options) as downloader:
        downloader.download([url])

    audio = temp_dir / "source.mp3"
    image = temp_dir / "source.jpg"
    if not audio.is_file():
        raise RuntimeError("Tải xong nhưng không tìm thấy file MP3.")
    if not image.is_file():
        raise RuntimeError(
            "Video không có thumbnail hoặc không thể chuyển thumbnail sang JPG."
        )
    return audio, image


def install_song(url: str, name: str, artist: str, lyrics: str) -> tuple[Path, Path]:
    slug = available_slug(name)
    destination_audio = AUDIO_DIR / f"{slug}.mp3"
    destination_image = IMAGE_DIR / f"{slug}.jpg"
    playlist_content = updated_playlist(name, artist, slug, lyrics)

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)

    moved_files: list[Path] = []
    try:
        with tempfile.TemporaryDirectory(prefix="music-player-") as directory:
            downloaded_audio, downloaded_image = download_media(url, Path(directory))
            shutil.move(downloaded_audio, destination_audio)
            moved_files.append(destination_audio)
            shutil.move(downloaded_image, destination_image)
            moved_files.append(destination_image)
        write_playlist_atomically(playlist_content)
    except Exception:
        for path in moved_files:
            path.unlink(missing_ok=True)
        raise

    return destination_audio, destination_image


def main() -> int:
    args = parse_args()
    try:
        url = required_input("URL YouTube", args.url)
        validate_youtube_url(url)
        name = required_input("Tên bài hát", args.name)
        artist = required_input("Ca sĩ / tác giả", args.artist)
        lyrics = read_lyrics(args.lyrics_file)
        audio_path, image_path = install_song(url, name, artist, lyrics)
    except (KeyboardInterrupt, EOFError):
        print("\nĐã hủy.")
        return 130
    except Exception as error:
        print(f"\nLỗi: {error}", file=sys.stderr)
        return 1

    print("\nĐã thêm bài hát vào playlist:")
    print(f"  Audio:     {audio_path.relative_to(PROJECT_ROOT)}")
    print(f"  Thumbnail: {image_path.relative_to(PROJECT_ROOT)}")
    print(f"  Playlist:  {SONGS_FILE.relative_to(PROJECT_ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
