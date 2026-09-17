<div align="center">
  <a href="https://luan-thnh.github.io/music-player/">
    <img src="./assets/img/logo-music.png" alt="Sono Music Player" width="110" />
  </a>

# Sono Music Player

**Trình phát nhạc cá nhân nhẹ, đẹp và chạy hoàn toàn bằng Vanilla JavaScript.**

[🎧 Mở trình phát](https://luan-thnh.github.io/music-player/) · [📱 Tải cho Android](https://www.upload-apk.com/en/6bbEVDKDISibfqe) · [📄 MIT License](./LICENSE)

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=111)
![Songs](https://img.shields.io/badge/playlist-96%20songs-e5810e)
![License](https://img.shields.io/badge/license-MIT-64d59a)
</div>

## Giới thiệu

Sono là trình phát nhạc trên web với giao diện responsive, hỗ trợ nghe nhạc, xem lời bài hát và ghi nhớ trạng thái phát ngay trong trình duyệt. Không cần framework hoặc bước build phức tạp.

## Tính năng

- Phát, tạm dừng, chuyển bài trước/sau và tua bài hát.
- Phát ngẫu nhiên hoặc lặp lại bài hiện tại.
- Hiển thị lyrics ở chế độ thường hoặc toàn màn hình.
- Menu ba chấm cho từng bài: xem lyrics hoặc chặn bài không muốn nghe.
- Nút nổi quản lý danh sách chặn và khôi phục bài hát.
- Lưu âm lượng, bài đang phát, thời gian phát và danh sách chặn bằng `localStorage`.
- Điều khiển bằng bàn phím và hỗ trợ Media Session trên thiết bị tương thích.
- Tự động tải audio và thumbnail từ YouTube bằng công cụ Python đi kèm.

## Playlist

> Bấm vào tên bài hát để nghe trực tiếp.

<details open>
<summary><strong>Danh sách 96 bài hát</strong></summary>

<br />

| # | Bài hát | Nghệ sĩ |
|---:|---|---|
| 1 | [▶ 2002](https://luan-thnh.github.io/music-player/assets/audio/2002.mp3) | Anne Marie |
| 2 | [▶ A Thousand Years](https://luan-thnh.github.io/music-player/assets/audio/a_thousand_years.mp3) | Christina Perri |
| 3 | [▶ Ác Mộng Đẹp](https://luan-thnh.github.io/music-player/assets/audio/ac_mong_dep.mp3) | Đạt G |
| 4 | [▶ All I Want](https://luan-thnh.github.io/music-player/assets/audio/all_i_want.mp3) | Alexandra Porat |
| 5 | [▶ All of Me](https://luan-thnh.github.io/music-player/assets/audio/all_of_me.mp3) | John Legend |
| 6 | [▶ Anh Luôn Như Vậy](https://luan-thnh.github.io/music-player/assets/audio/anh-luon-nhu-vay.mp3) | B RAY |
| 7 | [▶ ANH LUÔN NHƯ VẬY](https://luan-thnh.github.io/music-player/assets/audio/anh-van-luon-nhu-vay.mp3) | B RAY feat. cậu bảo |
| 8 | [▶ Anh Tự Do Nhưng Cô Đơn](https://luan-thnh.github.io/music-player/assets/audio/anh_tu_do_nhung_co_don.mp3) | Đạt G |
| 9 | [▶ Another Love](https://luan-thnh.github.io/music-player/assets/audio/another-love.mp3) | Tom Odell |
| 10 | [▶ At My Worst](https://luan-thnh.github.io/music-player/assets/audio/at_my_worst.mp3) | Pink Sweat$ |
| 11 | [▶ Bad Liar](https://luan-thnh.github.io/music-player/assets/audio/bad-liar.mp3) | Imagine Dragons |
| 12 | [▶ Bạn đời](https://luan-thnh.github.io/music-player/assets/audio/ban-doi.mp3) | KARIK x GDUCKY |
| 13 | [▶ binh yên](https://luan-thnh.github.io/music-player/assets/audio/binh_yen.mp3) | Vu ft Binz |
| 14 | [▶ Bring Me Back](https://luan-thnh.github.io/music-player/assets/audio/miles-away.mp3) | Miles Away, ft. Claire Ridgely |
| 15 | [▶ Bước Qua Nhau](https://luan-thnh.github.io/music-player/assets/audio/buoc_qua_nhau.mp3) | Vũ |
| 16 | [▶ CAY](https://luan-thnh.github.io/music-player/assets/audio/cay.mp3) | Khắc Hưng, Jimmii Nguyễn |
| 17 | [▶ Câu Chuyện Rất Ngắn](https://luan-thnh.github.io/music-player/assets/audio/cau_chuyen_rat_ngan.mp3) | Vu Đông Nhiên |
| 18 | [▶ CHƯA YÊU LẦN NAO](https://luan-thnh.github.io/music-player/assets/audio/chua_yeu_lan_nao.mp3) | BINZ ft. KRISS NGO |
| 19 | [▶ DANCING IN THE DARK](https://luan-thnh.github.io/music-player/assets/audio/dancing-in-the-dark.mp3) | SOOBIN |
| 20 | [▶ Die With A Smile](https://luan-thnh.github.io/music-player/assets/audio/die_with_a_smile.mp3) | Lady Gaga Bruno Mars |
| 21 | [▶ Don't Watch Me Cry](https://luan-thnh.github.io/music-player/assets/audio/dont_watch_me_cry.mp3) | Alexandra Porat |
| 22 | [▶ Dynasty](https://luan-thnh.github.io/music-player/assets/audio/dynasty.mp3) | MIIA |
| 23 | [▶ Đâu Cần Một Bài Ca Tình Yêu](https://luan-thnh.github.io/music-player/assets/audio/dau_can_mot_ban_ca_tinh_yeu.mp3) | Tiên Tiên x Trang |
| 24 | [▶ ĐÊM VŨ TRƯỜNG](https://luan-thnh.github.io/music-player/assets/audio/dem_vu_truong.mp3) | BINZ ft. TRIPLE D |
| 25 | [▶ Đi Về Nhà](https://luan-thnh.github.io/music-player/assets/audio/di_ve_nha.mp3) | Đen x JustaTee |
| 26 | [▶ Đủ trải sẽ thấm](https://luan-thnh.github.io/music-player/assets/audio/du-trai-se-tham.mp3) | Mikelodic x Chiennhatlang |
| 27 | [▶ Đúng Lúc Gặp Gỡ Người](https://luan-thnh.github.io/music-player/assets/audio/dung_luc_gap_go_nguoi.mp3) | Lý Ngọc Cương |
| 28 | [▶ Đường Nhân](https://luan-thnh.github.io/music-player/assets/audio/duong_nhan.mp3) | Tôn Tử Hàm |
| 29 | [▶ Em](https://luan-thnh.github.io/music-player/assets/audio/em.mp3) | Binz (feat. SOOBIN) |
| 30 | [▶ giá như](https://luan-thnh.github.io/music-player/assets/audio/gia-nhu.mp3) | SOOBIN |
| 31 | [▶ golden hour](https://luan-thnh.github.io/music-player/assets/audio/golden_hour.mp3) | JVKE |
| 32 | [▶ Happy For You](https://luan-thnh.github.io/music-player/assets/audio/happy_for_you.mp3) | Lukas Graham feat. Vũ. |
| 33 | [▶ Head In The Clouds](https://luan-thnh.github.io/music-player/assets/audio/head_in_the_clouds.mp3) | Hayd |
| 34 | [▶ Hikaru Nara Shigatsu Wa Kimi No Uso OP](https://luan-thnh.github.io/music-player/assets/audio/your-lie-in-april.mp3) | Goose House |
| 35 | [▶ Hit Me Up](https://luan-thnh.github.io/music-player/assets/audio/hit-me-up.mp3) | Binz |
| 36 | [▶ HỒN LỠ SA VÀO](https://luan-thnh.github.io/music-player/assets/audio/hon_lo_xa_vao.mp3) | BINZ ft. TRIPLE D |
| 37 | [▶ I Love You 3000](https://luan-thnh.github.io/music-player/assets/audio/i_love_you_3000.mp3) | Stephanie Poetri |
| 38 | [▶ I Miss You](https://luan-thnh.github.io/music-player/assets/audio/i_miss_you.mp3) | Czarina |
| 39 | [▶ Inner Demons](https://luan-thnh.github.io/music-player/assets/audio/inner_demons.mp3) | Julia Brennan |
| 40 | [▶ Inochi ni Kirawarete iru](https://luan-thnh.github.io/music-player/assets/audio/inochi-ni-kirawarete-iru.mp3) | Hatsune Miku ft. Kanzaki Iori |
| 41 | [▶ Is There Still Anything That Love Can Do?](https://luan-thnh.github.io/music-player/assets/audio/is_there_still_anything_that_love_can_do.mp3) | RADWIMPS |
| 42 | [▶ Không Yêu Em Thì Yêu Ai?](https://luan-thnh.github.io/music-player/assets/audio/khong_yeu_em_thi_yeu_ai.mp3) | Vũ. ft. Low G |
| 43 | [▶ LẶNG (Mùa Thu Đi Qua)](https://luan-thnh.github.io/music-player/assets/audio/lang.mp3) | Rhymastic |
| 44 | [▶ Lemon Tree](https://luan-thnh.github.io/music-player/assets/audio/lemon_tree.mp3) | Fools Garden |
| 45 | [▶ Let Her Go](https://luan-thnh.github.io/music-player/assets/audio/let-her-go.mp3) | Passenger |
| 46 | [▶ Lift Me Up](https://luan-thnh.github.io/music-player/assets/audio/lift_me_up.mp3) | Christina Aguilera |
| 47 | [▶ Listen Before I Go](https://luan-thnh.github.io/music-player/assets/audio/listen_before_i_go.mp3) | Billie Eilish |
| 48 | [▶ Little Do You Know](https://luan-thnh.github.io/music-player/assets/audio/little_do_you_know.mp3) | Alex & Sierra |
| 49 | [▶ Love Is Gone](https://luan-thnh.github.io/music-player/assets/audio/love-is-gone.mp3) | SLANDER ft. Dylan Matthew |
| 50 | [▶ Love Me Like You Do](https://luan-thnh.github.io/music-player/assets/audio/love_me_like_you_do.mp3) | Ellie Goulding |
| 51 | [▶ Love Yourself](https://luan-thnh.github.io/music-player/assets/audio/love_yourself.mp3) | Justin Bieber |
| 52 | [▶ lovely](https://luan-thnh.github.io/music-player/assets/audio/lovely.mp3) | Billie Eilish, Khalid |
| 53 | [▶ Mở Mắt](https://luan-thnh.github.io/music-player/assets/audio/mo_mat.mp3) | Lil Wuyn ft. Đen |
| 54 | [▶ Nàng](https://luan-thnh.github.io/music-player/assets/audio/nang.mp3) | NGHI |
| 55 | [▶ NHẬT KÝ VÀO ĐỜI](https://luan-thnh.github.io/music-player/assets/audio/nhat-ky-vao-doi.mp3) | KARIK FEAT. THAI VG |
| 56 | [▶ Nhất Lộ Sinh Hoa](https://luan-thnh.github.io/music-player/assets/audio/mot_duong_sinh_hoa.mp3) | Ôn Dịch Tâm |
| 57 | [▶ Nhức Tiềm Thức](https://luan-thnh.github.io/music-player/assets/audio/nhuc_tiem_thuc.mp3) | Hà An Huy |
| 58 | [▶ One Call Away](https://luan-thnh.github.io/music-player/assets/audio/one_call_away.mp3) | Charlie Puth |
| 59 | [▶ Perfect](https://luan-thnh.github.io/music-player/assets/audio/perfect.mp3) | Ed Sheeran |
| 60 | [▶ Photograph](https://luan-thnh.github.io/music-player/assets/audio/photograph.mp3) | Ed Sheeran |
| 61 | [▶ Playlist #4 \| Ngay từ phút đầu em đã nói rồi mà, suy nghĩ kĩ chưa mà chọn em?!](https://luan-thnh.github.io/music-player/assets/audio/playlist4.mp3) | N/A |
| 62 | [▶ QUA TỪNG KHUNG HÌNH](https://luan-thnh.github.io/music-player/assets/audio/qua_tung_khung_hinh.mp3) | Robber, Ngắn |
| 63 | [▶ Querry](https://luan-thnh.github.io/music-player/assets/audio/querry.mp3) | QNT x Trung Trần ft.MCK |
| 64 | [▶ Rolling in the Deep](https://luan-thnh.github.io/music-player/assets/audio/rolling_in_the_deep.mp3) | Adele |
| 65 | [▶ RƯỢU ĐỘC](https://luan-thnh.github.io/music-player/assets/audio/ruou_doc.mp3) | BINZ ft. TRIPLE D |
| 66 | [▶ Say You Won't Let Go](https://luan-thnh.github.io/music-player/assets/audio/say_you_won_t_let_go.mp3) | James Arthur |
| 67 | [▶ See You Again](https://luan-thnh.github.io/music-player/assets/audio/see_you_again.mp3) | Wiz Khalifa & Charlie Puth |
| 68 | [▶ Shinunoga E-Wa](https://luan-thnh.github.io/music-player/assets/audio/shinunoga-e-was.mp3) | Fujii Kaze |
| 69 | [▶ Six Feet Under](https://luan-thnh.github.io/music-player/assets/audio/six_feet_under.mp3) | Billie Eilish |
| 70 | [▶ Someone To You](https://luan-thnh.github.io/music-player/assets/audio/someone_to_you.mp3) | Shalom Margaret |
| 71 | [▶ Someone You Loved](https://luan-thnh.github.io/music-player/assets/audio/someone_you_loved.mp3) | Lewis Capaldi |
| 72 | [▶ Suzume](https://luan-thnh.github.io/music-player/assets/audio/suzume.mp3) | RADWIMPS feat. Toaka |
| 73 | [▶ TẠI VÌ SAO](https://luan-thnh.github.io/music-player/assets/audio/tai_vi_sao.mp3) | RPT MCK |
| 74 | [▶ Tâm Lặng Như Nước](https://luan-thnh.github.io/music-player/assets/audio/tam_lang_nhu_nuoc.mp3) | Ice Paper |
| 75 | [▶ Thắc Mắc](https://luan-thnh.github.io/music-player/assets/audio/thac_mac.mp3) | Thịnh Suy |
| 76 | [▶ The Nights](https://luan-thnh.github.io/music-player/assets/audio/the-nights.mp3) | Avicii |
| 77 | [▶ The One That Got Away](https://luan-thnh.github.io/music-player/assets/audio/the_one_that_got_away.mp3) | Brielle Von Hugel |
| 78 | [▶ Thế Giới Này Nhiều Người Đến Vậy](https://luan-thnh.github.io/music-player/assets/audio/the_gioi_nay_nhieu_nguoi_den_vay.mp3) | Luân Tang |
| 79 | [▶ Thêm Bao Nhiêu Lâu](https://luan-thnh.github.io/music-player/assets/audio/them_bao_nhieu_lau.mp3) | Đạt G |
| 80 | [▶ Thinking Out Loud](https://luan-thnh.github.io/music-player/assets/audio/thinking_out_loud.mp3) | Ed Sheeran |
| 81 | [▶ TÌNH CỜ - Trại Tình Cờ](https://luan-thnh.github.io/music-player/assets/audio/tinh_co.mp3) | Space Jam Album Vol. 2 |
| 82 | [▶ To The Moon](https://luan-thnh.github.io/music-player/assets/audio/to_the_moon.mp3) | hooligan |
| 83 | [▶ Trạm Khí Tượng](https://luan-thnh.github.io/music-player/assets/audio/tram_khi_tuong.mp3) | Uu |
| 84 | [▶ True Love Is Violent](https://luan-thnh.github.io/music-player/assets/audio/true_love_is_violent.mp3) | Allie X |
| 85 | [▶ Từng Là](https://luan-thnh.github.io/music-player/assets/audio/tung_la.mp3) | Vũ Cát Tường |
| 86 | [▶ Vẽ](https://luan-thnh.github.io/music-player/assets/audio/ve.mp3) | Quanh |
| 87 | [▶ Vì Anh Đâu Có Biết](https://luan-thnh.github.io/music-player/assets/audio/vi_anh_dau_co_biet.mp3) | Madihu feat. Vũ. |
| 88 | [▶ W/n - id 072019](https://luan-thnh.github.io/music-player/assets/audio/072019.mp3) | 3107 ft 267 |
| 89 | [▶ Waiting For Love](https://luan-thnh.github.io/music-player/assets/audio/waiting_for_love.mp3) | Avicii |
| 90 | [▶ Wish You Were Gay](https://luan-thnh.github.io/music-player/assets/audio/wish_you_were_gay.mp3) | Billie Eilish |
| 91 | [▶ Yến Vô Hiết](https://luan-thnh.github.io/music-player/assets/audio/yen_vo_hiet.mp3) | Tưởng Tuyết Nhi |
| 92 | [▶ Yêu anh đi mẹ anh bán bánh mì](https://luan-thnh.github.io/music-player/assets/audio/yeu-anh-di-me-anh-ban-banh-mi.mp3) | Phúc Du |
| 93 | [▶ You Are The Reason](https://luan-thnh.github.io/music-player/assets/audio/you_are_the_reason.mp3) | Alexandra Porat |
| 94 | [▶ You Said You"d Grow Old With Me](https://luan-thnh.github.io/music-player/assets/audio/you_said_youd_grow_old_with_me.mp3) | Michael Schulte |
| 95 | [▶ Your Smile](https://luan-thnh.github.io/music-player/assets/audio/your-smile.mp3) | Obito x VSTRA |
| 96 | [▶ 踊り子 (Odoriko)](https://luan-thnh.github.io/music-player/assets/audio/odoriko.mp3) | Vaundy |

</details>

## Chạy dự án

### Cách nhanh nhất

```bash
git clone https://github.com/luan-thnh/music-player.git
cd music-player
python3 -m http.server 8000
```

Sau đó mở [http://localhost:8000](http://localhost:8000) trong trình duyệt.

> Nên chạy qua HTTP server thay vì mở trực tiếp `index.html`, vì ứng dụng sử dụng JavaScript modules.

## Thêm bài hát từ YouTube

Yêu cầu máy đã cài `ffmpeg` và `ffprobe`.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python tools/download_song.py
```

Script sẽ lần lượt hỏi:

1. URL video YouTube.
2. Tên bài hát.
3. Ca sĩ hoặc tác giả.
4. Lyrics — có thể bỏ trống; nhập `END` ở một dòng riêng để kết thúc phần lyrics.

Sau khi hoàn thành, audio MP3 được lưu trong `assets/audio`, thumbnail JPG được lưu trong `assets/img`, và bài hát mới được thêm vào `assets/js/songs.js`.

## Điều khiển

| Thao tác | Phím / nút |
|---|---|
| Phát hoặc tạm dừng | `Space` |
| Tua tới 10 giây | `→` |
| Tua lùi 10 giây | `←` |
| Tăng âm lượng | `↑` |
| Giảm âm lượng | `↓` |
| Tìm nhanh theo chữ cái đầu | Nhấn phím `A-Z` |
| Xem lyrics hoặc chặn bài | Menu ba chấm của bài hát |
| Quản lý bài đã chặn | Nút nổi ở góc dưới bên phải |

## Cấu trúc chính

```text
music-player/
├── assets/
│   ├── audio/          # File MP3
│   ├── img/            # Thumbnail và hình ảnh giao diện
│   ├── css/style.css   # Giao diện
│   └── js/
│       ├── main.js     # Logic trình phát
│       └── songs.js    # Dữ liệu playlist
├── tools/
│   └── download_song.py
└── index.html
```

## Bản quyền

Dự án được phát hành theo giấy phép [MIT](./LICENSE). Chỉ tải và sử dụng những nội dung mà bạn có quyền truy cập hoặc được phép sử dụng.
