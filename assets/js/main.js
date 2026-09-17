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
const blockedFab = $('.blocked-fab');
const blockedCount = $('.blocked-count');
const blockedModal = $('.blocked-modal');
const blockedClose = $('.blocked-close');
const blockedList = $('.blocked-list');

function getStoredConfig() {
  try {
    return JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};
  } catch (error) {
    console.warn('Không thể đọc cấu hình đã lưu:', error);
    return {};
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
  config: getStoredConfig(),
  allSongs: songs(),
  songs: [],
  blockedSongIds: new Set(),

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },

  render: function () {
    if (!this.songs.length) {
      playList.innerHTML = `
        <div class="playlist-empty">
          <i class="fa-solid fa-music"></i>
          <p>Không còn bài hát để phát.</p>
          <button type="button" class="open-blocked-list">Xem danh sách chặn</button>
        </div>
      `;
      return;
    }

    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song-group"> 
      <div class="song${index === this.currentIndex ? ' active' : ' '}" data-song="${index}">
        <div class="thumb" style="background-image: url('${song.image}')">
        </div>
        <div class="body">
          <h3 class="song-title">${escapeHtml(song.name)}</h3>
          <p class="song-author">${escapeHtml(song.singer)}</p>
        </div>
        <div class="option-wrap">
          <button class="option" type="button" aria-label="Tùy chọn cho ${escapeHtml(
            song.name
          )}" aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div class="song-menu" role="menu">
            <button type="button" data-action="lyrics" role="menuitem">
              <i class="fa-solid fa-align-left"></i>
              Xem lời bài hát
            </button>
            <button type="button" data-action="block" role="menuitem" class="danger">
              <i class="fa-solid fa-ban"></i>
              Không nghe bài này
            </button>
          </div>
        </div>
        </div>
        <div class="lyrics" role="dialog" aria-modal="true" aria-label="Lời bài hát ${escapeHtml(
          song.name
        )}">
          <p class="lyrics-title">Lời Bài Hát</p>
          <h3 class="lyrics-name">${escapeHtml(song.name)}</h3>
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

  renderBlockedSongs: function () {
    const blockedSongs = this.allSongs.filter((song) =>
      this.blockedSongIds.has(this.getSongId(song))
    );

    blockedCount.textContent = blockedSongs.length;
    blockedCount.hidden = blockedSongs.length === 0;

    if (!blockedSongs.length) {
      blockedList.innerHTML = `
        <div class="blocked-empty">
          <i class="fa-regular fa-circle-check"></i>
          <p>Chưa có bài hát nào bị chặn.</p>
        </div>
      `;
      return;
    }

    blockedList.innerHTML = blockedSongs
      .map((song) => {
        const songIndex = this.allSongs.indexOf(song);
        return `
          <article class="blocked-item">
            <div class="blocked-thumb" style="background-image: url('${song.image}')"></div>
            <div class="blocked-info">
              <h3>${escapeHtml(song.name)}</h3>
              <p>${escapeHtml(song.singer)}</p>
            </div>
            <button type="button" class="unblock-song" data-song="${songIndex}">
              <i class="fa-solid fa-rotate-left"></i>
              <span>Bỏ chặn</span>
            </button>
          </article>
        `;
      })
      .join('');
  },

  getSongId: function (song) {
    return song.path;
  },

  saveBlockedSongs: function () {
    this.setConfig('blockedSongs', Array.from(this.blockedSongIds));
  },

  refreshSongs: function (preferredSongId, fallbackIndex = 0) {
    this.songs = this.allSongs.filter(
      (song) => !this.blockedSongIds.has(this.getSongId(song))
    );

    if (!this.songs.length) {
      this.currentIndex = -1;
      return;
    }

    const preferredIndex = this.songs.findIndex(
      (song) => this.getSongId(song) === preferredSongId
    );
    this.currentIndex =
      preferredIndex >= 0
        ? preferredIndex
        : Math.min(Math.max(fallbackIndex, 0), this.songs.length - 1);
  },

  openBlockedModal: function () {
    this.renderBlockedSongs();
    blockedModal.classList.add('active');
    blockedModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    blockedClose.focus();
  },

  closeBlockedModal: function () {
    blockedModal.classList.remove('active');
    blockedModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  },

  closeSongMenus: function () {
    document.querySelectorAll('.option-wrap.open').forEach((optionWrap) => {
      optionWrap.classList.remove('open');
      optionWrap.querySelector('.option').setAttribute('aria-expanded', 'false');
    });
  },

  clearPlayer: function () {
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    document.title = 'Sono';
    titleName.textContent = 'Không còn bài hát';
    titleSinger.textContent = 'Mở danh sách chặn để khôi phục';
    cdThumb.style.backgroundImage = '';
    this.setConfig('currentIndex', 0);
    this.setConfig('currentSongPath', null);
    this.setConfig('currentTime', 0);
  },

  blockSong: function (songIndex) {
    const song = this.songs[songIndex];
    if (!song) return;

    const currentSongId = this.currentSong ? this.getSongId(this.currentSong) : null;
    const blockedSongId = this.getSongId(song);
    const isCurrentSong = blockedSongId === currentSongId;
    const shouldResume = isCurrentSong && this.isPlaying;

    this.blockedSongIds.add(blockedSongId);
    this.saveBlockedSongs();
    this.refreshSongs(isCurrentSong ? null : currentSongId, songIndex);
    this.playedSongs = new Set();

    if (!this.songs.length) {
      this.clearPlayer();
    } else if (isCurrentSong) {
      this.setConfig('currentTime', 0);
      this.loadCurrentSong();
      if (shouldResume) audio.play();
    } else {
      this.setConfig('currentIndex', this.currentIndex);
    }

    this.render();
    this.renderBlockedSongs();
  },

  unblockSong: function (songIndex) {
    const song = this.allSongs[songIndex];
    if (!song) return;

    const currentSongId = this.currentSong ? this.getSongId(this.currentSong) : null;
    this.blockedSongIds.delete(this.getSongId(song));
    this.saveBlockedSongs();
    this.refreshSongs(currentSongId, 0);

    if (!currentSongId && this.songs.length) {
      this.loadCurrentSong();
    } else {
      this.setConfig('currentIndex', this.currentIndex);
    }

    this.render();
    this.renderBlockedSongs();
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
      if (!_this.songs.length) {
        _this.openBlockedModal();
        return;
      }
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

    document.addEventListener('keydown', function (e) {
      if (e.target.matches('input')) return;

      const VOLUME_STEP = 0.1;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          if (!_this.songs.length) {
            _this.openBlockedModal();
            break;
          }
          if (_this.isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
          break;

        case 'ArrowUp':
          e.preventDefault();

          if (audio.volume + VOLUME_STEP <= 1) {
            audio.volume = Math.min(1, audio.volume + VOLUME_STEP);
          } else {
            audio.volume = 1;
          }
          _this.setConfig('volume', audio.volume);

          _this.showVolumeToast(Math.round(audio.volume * 100));
          break;

        case 'ArrowDown':
          e.preventDefault();

          if (audio.volume - VOLUME_STEP >= 0) {
            audio.volume = Math.max(0, audio.volume - VOLUME_STEP);
          } else {
            audio.volume = 0;
          }
          _this.setConfig('volume', audio.volume);

          _this.showVolumeToast(Math.round(audio.volume * 100));
          break;

        case 'ArrowRight':
          e.preventDefault();
          if (audio.currentTime + 10 < audio.duration) {
            audio.currentTime += 10;
          } else {
            if (_this.isRandom) {
              _this.randomSong();
            } else {
              _this.nextSong();
            }
          }
          _this.setConfig('currentTime', audio.currentTime);
          break;

        case 'ArrowLeft':
          e.preventDefault();
          if (audio.currentTime - 10 > 0) {
            audio.currentTime -= 10;
          } else {
            if (_this.isRandom) {
              _this.randomSong();
            } else {
              _this.prevSong();
            }
          }
          _this.setConfig('currentTime', audio.currentTime);
          break;
      }
    });

    this.showVolumeToast = function (volumePercent) {
      let toast = document.querySelector('.volume-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'volume-toast';
        document.body.appendChild(toast);

        const style = document.createElement('style');
        style.textContent = `
              .volume-toast {
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background: rgba(195, 178, 253, 0.2);
                  color: white;
                  padding: 8px 15px;
                  border-radius: 8px;
                  z-index: 9999;
                  transition: opacity 0.3s;
                  opacity: 0;
              }
              .volume-toast.show {
                  opacity: 1;
              }
          `;
        document.head.appendChild(style);
      }

      toast.textContent = `Volumn: ${volumePercent}%`;
      toast.classList.add('show');

      clearTimeout(this.volumeToastTimeout);
      this.volumeToastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 1500);
    };

    audio.volume = this.config.volume !== undefined ? this.config.volume : 1;

    // Next audio
    nextBtn.onclick = function () {
      if (!_this.songs.length) return;
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
    };

    // Prev audio
    prevBtn.onclick = function () {
      if (!_this.songs.length) return;
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
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
      // _this.nextSong();
    };

    playList.onclick = function (e) {
      const songGroupClick = e.target.closest('.song-group');
      const optionClick = e.target.closest('.option');
      const menuAction = e.target.closest('[data-action]');
      const songClick = e.target.closest('.song:not(.active)');
      const lyricsClick = e.target.closest('.lyrics');
      const lyricsClickClose = e.target.closest('.lyrics-close');
      const lyricsClickScreen = e.target.closest('.lyrics-screen');
      const openBlockedList = e.target.closest('.open-blocked-list');

      if (openBlockedList) {
        _this.openBlockedModal();
        return;
      }

      if (menuAction) {
        const songElement = menuAction.closest('.song');
        const songIndex = Number(songElement.dataset.song);

        if (menuAction.dataset.action === 'lyrics') {
          songGroupClick.querySelector('.lyrics').classList.add('active');
          _this.closeSongMenus();
        }

        if (menuAction.dataset.action === 'block') {
          _this.blockSong(songIndex);
        }

        return;
      }

      if (optionClick) {
        const optionWrap = optionClick.closest('.option-wrap');
        const shouldOpen = !optionWrap.classList.contains('open');
        _this.closeSongMenus();
        optionWrap.classList.toggle('open', shouldOpen);
        optionClick.setAttribute('aria-expanded', String(shouldOpen));
        return;
      }

      if (songClick) {
        _this.currentIndex = Number(songClick.dataset.song);
        _this.setConfig('currentTime', 0);
        _this.loadCurrentSong();
        _this.render();
        audio.play();
        return;
      }

      if (lyricsClickClose) {
        lyricsClick.classList.remove('active', 'fullscreen');
        lyricsClick.querySelector('.lyrics-screen').classList.remove('active');
        return;
      }

      if (lyricsClickScreen) {
        const lyricsActiveScreen = lyricsClick.lastElementChild;
        lyricsActiveScreen.classList.toggle('active');
        lyricsActiveScreen.offsetParent.classList.toggle('fullscreen');
      }
    };

    blockedFab.onclick = function () {
      _this.openBlockedModal();
    };

    blockedClose.onclick = function () {
      _this.closeBlockedModal();
    };

    blockedModal.onclick = function (e) {
      if (e.target === blockedModal) {
        _this.closeBlockedModal();
      }
    };

    blockedList.onclick = function (e) {
      const unblockButton = e.target.closest('.unblock-song');
      if (!unblockButton) return;
      _this.unblockSong(Number(unblockButton.dataset.song));
    };

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.option-wrap')) {
        _this.closeSongMenus();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      _this.closeSongMenus();
      _this.closeBlockedModal();
      document.querySelectorAll('.lyrics.active').forEach((lyrics) => {
        lyrics.classList.remove('active', 'fullscreen');
      });
    });

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

  },

  loadCurrentSong: function () {
    if (!this.currentSong) {
      this.clearPlayer();
      return;
    }

    document.title = `${this.currentSong.name} - Sono`;

    titleName.textContent = this.currentSong.name;
    titleSinger.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.src = this.currentSong.path;
    audio.loop = this.isRepeat;

    randomBtn.classList.toggle('active', this.isRandom || false);
    repeatBtn.classList.toggle('active', this.isRepeat || false);

    this.setConfig('currentIndex', this.currentIndex);
    this.setConfig('currentSongPath', this.getSongId(this.currentSong));

    // Restore saved playback time
    const savedTime = this.config.currentTime || 0;
    audio.currentTime = savedTime;
  },

  loadConfig: function () {
    this.isRandom = Boolean(this.config.isRandom);
    this.isRepeat = Boolean(this.config.isRepeat);
    this.currentTime = this.config.currentTime || 0;

    const savedBlockedSongs = Array.isArray(this.config.blockedSongs)
      ? this.config.blockedSongs
      : [];
    const defaultBlockedSongs = this.allSongs
      .filter((song) => song.blocked)
      .map((song) => this.getSongId(song));
    this.blockedSongIds = new Set([...defaultBlockedSongs, ...savedBlockedSongs]);

    this.sort(this.allSongs);
    this.refreshSongs(this.config.currentSongPath, this.config.currentIndex || 0);
  },

  updateAndPlayCurrentSong: function () {
    if (!this.currentSong) return;
    this.loadCurrentSong();
    audio.currentTime = 0;
    this.setConfig('currentTime', 0);
    audio.play();
    this.render();
    this.scrollToActiveSong();
  },

  nextSong: function () {
    if (!this.songs.length) return;
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.updateAndPlayCurrentSong();
  },

  prevSong: function () {
    if (!this.songs.length) return;
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.updateAndPlayCurrentSong();
  },

  randomSong: function () {
    if (this.songs.length <= 1) {
      if (this.songs.length === 1) this.updateAndPlayCurrentSong();
      return;
    }

    if (!this.playedSongs || this.playedSongs.size === this.songs.length) {
      this.playedSongs = new Set([this.currentIndex]);
    }

    const remainingIndexes = Array.from(Array(this.songs.length).keys()).filter(
      (index) => !this.playedSongs.has(index)
    );

    const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
    const newIndex = remainingIndexes[randomIndex];

    this.playedSongs.add(newIndex);
    this.currentIndex = newIndex;

    this.updateAndPlayCurrentSong();

    console.log({ random: this.playedSongs });
  },

  scrollToActiveSong: function () {
    setTimeout(() => {
      const activeSong = $('.song.active');
      if (!activeSong) return;
      activeSong.scrollIntoView({
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

    if (this.songs.length) {
      this.loadCurrentSong();
    } else {
      this.clearPlayer();
    }

    this.render();
    this.renderBlockedSongs();
  },
};

app.start();
