const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $(".playlist");
const cd = $(".cd");
const cdBgs = $(".cd-bgs");
const player = $(".player");
const titleName = $(".title-name");
const titleSinger = $(".title-singer");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const repeatBtn = $(".btn-repeat");
const randomBtn = $(".btn-random");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
  songs: [
    {
      name: "Độc Tộc 2",
      singer: "Maseww x Phúc Du x Pháo x Độ Mixi",
      path: "./assets/audio/do_toc_2.mp3",
      image: "./assets/img/do_toc_2.jpg",
    },
    {
      name: "Độ Đúng Đời",
      singer: "Thiện Hưng x Độ Mixi",
      path: "./assets/audio/do_dung_doi.mp3",
      image: "./assets/img/do_dung_doi.jpg",
    },
    {
      name: "Đi Về Nhà",
      singer: "Đen x JustaTee",
      path: "./assets/audio/di_ve_nha.mp3",
      image: "./assets/img/di_ve_nha.jpg",
    },
    {
      name: "Ai Mang Cô Đơn Đi",
      singer: "Huy Quần Hoa",
      path: "./assets/audio/ai_mang_co_don_di.mp3",
      image: "./assets/img/ai_mang_co_don_di.png",
    },
    {
      name: "At My Worst",
      singer: "Pink Sweat$",
      path: "./assets/audio/at_my_worst.mp3",
      image: "./assets/img/at_my_worst.jpg",
    },
    {
      name: "Cô Gái Gu Chì",
      singer: "Soái Nhi",
      path: "./assets/audio/co_gai_guicci.mp3",
      image: "./assets/img/co_gai_guicci.jpg",
    },
    {
      name: "Rap Thập Cẩm",
      singer: "Tú Lee",
      path: "./assets/audio/rap_thap_cam.mp3",
      image: "./assets/img/rap_thap_cam.png",
    },
    {
      name: "Mơ Hồ",
      singer: "DJChip x Nhism",
      path: "./assets/audio/mo_ho.mp3",
      image: "./assets/img/mo_ho.jpg",
    },
  ],

  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
     <div class="song ${
       index === this.currentIndex ? "active" : ""
     }" data-index="${index}">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="song-title ">${song.name}</h3>
            <p class="song-author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
    `;
    });

    playList.innerHTML = htmls.join("");
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    const cdThumbAnimete = cdThumb.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );

    const cdBgsAnimete = cdBgs.animate(
      [
        {
          transform: "rotate(-360deg)",
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );

    cdThumbAnimete.pause();
    cdBgsAnimete.pause();

    // Handle Scroll CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
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
      player.classList.add("playing");

      cdThumbAnimete.play();
      cdBgsAnimete.play();
    };

    // Pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");

      cdThumbAnimete.pause();
      cdBgsAnimete.pause();
    };

    // Tiến độ audio
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;

        const color =
          "linear-gradient(90deg, rgb(245, 135, 10)" +
          progress.value +
          "%, rgba(255, 255, 255, 0.2)" +
          progress.value +
          "%)";

        progress.style.background = color;
      }
    };

    // Tua audio
    progress.onchange = function (e) {
      const seekTime = Math.floor((audio.duration / 100) * e.target.value);
      audio.currentTime = seekTime;
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
      randomBtn.classList.toggle("active", _this.isRandom); // Nếu true thì add class còn false thì remove class
    };

    // Repeat audio
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle("active", _this.isRepeat);
      audio.loop = _this.isRepeat;
    };

    // Auto chuyển tiếp music
    audio.onended = function () {
      nextBtn.click();
    };

    playList.onclick = function (e) {
      const songClick = e.target.closest(".song:not(.active)");
      const optionClick = e.target.closest(".option");

      if (songClick || optionClick) {
        // Handle click song
        if (songClick) {
          _this.currentIndex = Number(songClick.getAttribute("data-index")); // Chuyển chuỗi thành number
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Handle click option
        if (optionClick) {
        }
      }
    };
  },

  loadCurrentSong: function () {
    titleName.textContent = this.currentSong.name;
    titleSinger.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.src = this.currentSong.path;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    console.log(newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  scrollToActiveSong: function () {
    // const songActive = $(".song.active");
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });

      console.log($(".song.active"));
    }, 300);
  },

  start: function () {
    this.defineProperties();

    this.handleEvent();

    this.loadCurrentSong();

    this.render();
  },
};

app.start();
