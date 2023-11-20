import songs from './songs.js';

let currentSongIndex = 0;

// Hàm để chuyển sang bài hát tiếp theo
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong();
}

// Hàm để quay lại bài hát trước đó
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong();
}

// Hàm để phát bài hát hiện tại
function playSong() {
  const song = songs[currentSongIndex];
  // Code để phát bài hát...

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.name,
      artist: song.singer,
      artwork: [{ src: song.image }],
    });

    navigator.mediaSession.setActionHandler('previoustrack', prevSong);
    navigator.mediaSession.setActionHandler('nexttrack', nextSong);
  }
}
