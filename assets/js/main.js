import songs from './songs.js';
import { normalizeVietnamese } from './utils.js';

const $ = document.querySelector.bind(document);

const PLAYER_STORAGE_KEY = 'MUSIC_PLAER';

const playList = $('.playlist');
const cd = $('.cd');
const cdBgs = $('.cd-bgs');
const player = $('.player');
const titleName = $('.title-name');
const titleSinger = $('.title-singer');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const repeatBtn = $('.btn-repeat');
const randomBtn = $('.btn-random');

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: songs(),

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },

  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song-group"> 
      <div class="song${index === this.currentIndex ? ' active' : ' '}" data-song="${index}">
        <div class="thumb" style="background-image: url('${song.image}')">
        </div>
        <div class="body">
          <h3 class="song-title">${song.name}</h3>
          <p class="song-author">${song.singer}</p>
        </div>
        <div class="option">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </div>
        <div id="lyrics" class="lyrics">
          <p class="lyrics-title">Lời Bài Hát</p>
          <h3 class="lyrics-name">${song.name}</h3>
          <div class="lyrics-text">
          <p>${song.lyrics}</p>
        </div>
          <button class="lyrics-close">Đóng</button>
          <button class="lyrics-screen"> 
            <i class="fa-solid fa-expand icon-fullscreen"></i>
            <i class="fa-solid fa-compress icon-out-fullscreen"></i>
          </button>
        </div>
      
      </div>
    `;
    });

    playList.innerHTML = htmls.join('');
  },

  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Save playback time periodically
    setInterval(function () {
      if (_this.isPlaying) {
        _this.setConfig('currentTime', audio.currentTime);
      }
    }, 1000);

    const cdThumbAnimate = cdThumb.animate(
      [
        {
          transform: 'rotate(360deg)',
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );

    const cdBgsAnimate = cdBgs.animate(
      [
        {
          transform: 'rotate(-360deg)',
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    cdThumbAnimate.pause();
    cdBgsAnimate.pause();

    // Handle Scroll CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cd.style.opacity = newCdWidth / cdWidth;

      // const cdBgElements = document.querySelectorAll('.cd-bg');
      // cdBgElements.forEach(function (cdBg) {
      //   document.documentElement.style.setProperty('--scroll-top', scrollTop + 'px');

      //   console.log(newCdWidth);
      //   if (newCdWidth > 0) {
      //     cdBg.classList.add('change-size');
      //   }
      // });
    };

    // Handle Play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add('playing');

      cdThumbAnimate.play();
      cdBgsAnimate.play();

      const song = _this.songs[_this.currentIndex];

      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.name,
          artist: song.singer,
          artwork: [{ src: song.image }],
        });

        navigator.mediaSession.setActionHandler('previoustrack', function () {
          prevBtn.onclick();
        });
        navigator.mediaSession.setActionHandler('nexttrack', function () {
          nextBtn.onclick();
        });
      }
    };

    // Pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove('playing');

      cdThumbAnimate.pause();
      cdBgsAnimate.pause();
    };

    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = ((audio.currentTime / audio.duration) * 100).toFixed(1);
        progress.value = progressPercent;

        const color =
          'linear-gradient(90deg, rgb(245, 135, 10)' +
          progress.value +
          '%, rgba(255, 255, 255, 0.2)' +
          progress.value +
          '%)';

        progress.style.background = color;
      }
    };

    // Tua audio
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;

      _this.setConfig('currentTime', audio.currentTime);
    };

    // Next audio
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();

      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong();
    };

    // Prev audio
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Random audio
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig('isRandom', _this.isRandom);
      randomBtn.classList.toggle('active', _this.isRandom); // Nếu true thì add class còn false thì remove class
    };

    // Repeat audio
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig('isRepeat', _this.isRepeat);
      repeatBtn.classList.toggle('active', _this.isRepeat);
      audio.loop = _this.isRepeat;
    };

    // Auto chuyển tiếp music
    audio.onended = function () {
      nextBtn.click();
    };

    playList.onclick = function (e) {
      const songGroupClick = e.target.closest('.song-group');
      const songClick = e.target.closest('.song:not(.active)');
      const optionClick = e.target.closest('.option');
      const lyricsClick = e.target.closest('.lyrics');
      const lyricsClickClose = e.target.closest('.lyrics-close');
      const lyricsClickScreen = e.target.closest('.lyrics-screen');

      if (songClick || optionClick) {
        // Handle click song
        if (songClick) {
          _this.currentIndex = Number(songClick.getAttribute('data-song')); // Chuyển chuỗi thành number
          _this.config.currentTime  = 0;
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Handle click option display lyrics
        if (optionClick) {
          optionClick.classList.toggle('active');
        }

        if (songGroupClick) {
          songGroupClick.children[1].classList.toggle('active');
        }
      }

      if (lyricsClickClose) {
        lyricsClick.children[3].offsetParent.classList.remove('active');

        songGroupClick.firstElementChild.lastElementChild.classList.remove('active');
      }

      if (lyricsClickScreen) {
        const lyricsActiveScreen = lyricsClick.lastElementChild;
        lyricsActiveScreen.classList.toggle('active');
        lyricsActiveScreen.offsetParent.classList.toggle('fullscreen');
      }
    };

    // Search music
    document.onkeydown = function (e) {
      const key = normalizeVietnamese(e.key).toUpperCase();

      // Check if the key is an alphabet character
      if (key >= 'A' && key <= 'Z') {
        const songElements = document.querySelectorAll('.song');
        for (const songElement of songElements) {
          const songTitle = normalizeVietnamese(
            songElement.querySelector('.song-title').textContent.trim()
          ).toUpperCase();
          if (songTitle.startsWith(key)) {
            songElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
            break;
          }
        }
      }
    };

    this.sort(this.songs);
  },

  loadCurrentSong: function () {
    titleName.textContent = this.currentSong.name;
    titleSinger.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.src = this.currentSong.path;

    randomBtn.classList.toggle('active', this.isRandom || false);
    repeatBtn.classList.toggle('active', this.isRepeat || false);

    this.setConfig('currentIndex', this.currentIndex);

    // Restore saved playback time
    const savedTime = this.config.currentTime || 0;
    audio.currentTime = savedTime;
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
    this.currentIndex = this.config.currentIndex || 0;
    this.currentTime = this.config.currentTime || 0;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
      this.config.currentTime = 0;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
      this.config.currentTime = 0;
    }
    this.loadCurrentSong();
  },

  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  scrollToActiveSong: function () {
    // const songActive = $(".song.active");
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }, 300);
  },

  lyricsSong: function () {
    this.loadCurrentSong();
  },

  sort: function (obj) {
    obj.sort((a, b) => a.name.localeCompare(b.name));
  },

  start: function () {
    this.loadConfig();

    this.defineProperties();

    this.handleEvent();

    this.loadCurrentSong();

    this.render();
  },
};

app.start();
