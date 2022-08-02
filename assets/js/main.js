const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "MUSIC_PLAER";

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
const optionsBtn = $(".option");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Độc Tộc 2",
      singer: "Masew x Phúc Du x Pháo x Độ Mixi",
      path: "./assets/audio/do_toc_2.mp3",
      image: "./assets/img/do_toc_2.jpg",
      lyrics:
        "Ánh đèn sáng ở trên màn hình<br>Hai giờ đêm vẫn còn lung linh<br>Quen trời khuya như là bạn mình<br>Nghe tiếng nhạc còn đập rung rinh<br>Ngay bên loa, đêm nay thêm say thêm ca<br>Chỉ cần anh em ngay bên ta<br>Anh vẫn cày cuốc, hăng say như ngày trước<br>Dù không biết sau này họ sẽ nhớ đến hay quên ta (ah!)<br>Nhớ khi xưa những ngày đói<br>Khi mà động lực duy nhất là những lời cười khen (OK)<br>Giờ còn hơn ông thầy bói<br>Vì mỗi ngày ta đều có hàng vạn nghìn người xem<br>Bốn bề đều là những người anh và người em<br>Nhưng đam mê không ngủ quên ở trong căn gác nhỏ<br>Ngày, từ ngày qua đêm<br>Từ đêm qua tối<br>Cứ trôi qua ngàyNgồi một mình nơi đây<br>Giờ, ngàn vạn anh em<br>Dù ở phương xa<br>Cũng như một nhà<br>From Mixi with love!<br>Và ta thức trắng đã biết bao đêm<br>Lời động viên đó thì làm sao quên<br>Đời nhiều mặn đắng mình gạt sang bên<br>Vươn qua góc tối, mặt trời đang lên<br>Có những lời khinh, có cả lời bình<br>Có những lời yêu thế là lời nhiều<br>Ta không cần khoe, không cần nhiều lời<br>Thôi không cần care ta cứ chiều đời<br>Làm cái nghề này 10 ngày<br>Dài cứ như là 10 năm<br>Tôi sinh ra là người Tày<br>Nhưng họ nói rằng tôi là người Chăm<br>Chăm vợ, chăm con, chăm làm<br>Trăm phần trăm mỗi khi nâng chén<br>Chăm onl cho vài trăm ngàn anh em lâu lâu lại nghe tôi chém<br>Không ồn ào và cũng không ầm ĩ<br>Dân Đông Lào nhưng mà sống giờ Mỹ<br>Miễn là được chơi cùng huynh đệ<br>Thì thôi nó cứ phải gọi là hợp lý<br>Mixigaming on the mic<br>Điều tôi muốn nói không có gì đâu<br>Chỉ có tình yêu dành cho Độ tộc<br>Và khóa hết mồm mấy thằng trẻ trâu, OK<br>Ngày, từ ngày qua đêm<br>Từ đêm qua tối<br>Cứ trôi qua ngày<br>Ngồi một mình nơi đây<br>Giờ, ngàn vạn anh em<br>Dù ở phương xa<br>Cũng như một nhà<br>From Mixi with love!<br>Bao năm cày cuốc đã nhiều<br>Lương 7-8 triệu vẫn ngồi livestream<br>Bắn nhau, đá bóng, xem phim<br>Hú lên một tiếng cả team chơi cùng<br>Đêm đêm anh lại tiệc tùng<br>Âm thanh ánh sáng đã bùng lên chưa?<br>Độ này vẫn giống Độ xưa<br>Vẫn đợi donate vì chưa có tiền",
    },
    {
      name: "Stream Đến Bao Giờ",
      singer: "Độ Mixi ft. Bạn Sáng Tác",
      path: "./assets/audio/stream_den_bao_gio.mp3",
      image: "./assets/img/stream_den_bao_gio.jpg",
      lyrics:
        "Hoh hoh hoh<br>Tối đến là vô làm tính ra thì hơi nhàn<br>Nhìn màn hình stream tới khi đêm tàn<br>Lân la vài câu chuyện con game cùng nhau luyện<br>Một mình ngồi đó nói cười<br>Đấy trên stream lúc nào tôi cũng cười cười nói nói như thế đấy<br>Nhưng mà ai biết bên trong như thế nào đâu các bạn<br>Cuộc sống mà nói ra thì bảo kể khổ chứ<br>Khô gà tôi bán toàn lỗ thôi<br>Quanh năm suốt tháng bạn bè đi du lịch còn tôi thì cứ ngồi lì một chỗ ấy<br>Mặt trời vừa tỉnh giấc (tỉnh giấc)<br>Mệt nhoài tưởng sắp ngất<br>Đặt mình vào bộ chăn gối<br>Làm một mạch đến tối<br>Có khi suốt bao nhiêu ngày<br>Quẩn quanh mãi trong nơi này (nơi này)<br>Dần dần rồi thì cũng thành quen<br>Đần đần vì ngủ ngày cày đêm<br>Cũng may vì không túng thiếu<br>Nhưng cũng chỉ có bấy nhiêu<br>Vậy mà hay cuộc đời nhiều chuyện lạ thay<br>Mang tới niềm vui mà người ta không thích<br>Đành chịu thôi cố giữ nụ cười ở môi<br>Làm việc mình thôi thế nhưng vẫn có<br>Vài ba người cứ hỏi thăm<br>Làm nghề đến mấy năm<br>Rằng nhiều lắm khó khăn<br>Hay là vui mỗi ngày<br>Tiền nong thì dễ kiếm không<br>Người ta nhòm ngó cũng đông<br>Ngoài bạn bè ra thì ai ở bên lúc buồn<br>Hỏi là làm cái nghề này đến bao giờ thì làm sao mà có thể trả lời được<br>Tại vì trước khi mình bắt đầu làm cái nghề này đến bây giờ mình mới biết nó sẽ thành công đâu<br>Ôi cái nghề làm dâu trăm họ (trăm họ)<br>Sức khỏe thì ngày càng đáng lo (đáng lo)<br>Không biết cố được mấy năm nữa<br>Ta cứ làm mà chẳng cần đắn đo (đắn đo)<br>Cuối tháng vợ đưa hoá đơn tiền điện tiền nước tiền sinh hoạt chung<br>Hôm sau lại tiền bỉm sữa tiền lãi ngân hàng tiền đồ gia dụng<br>Lúc mọi người ngủ thì ta thức<br>Đến ba giờ dạ dày đau nhức<br>Cũng còn may khi mà có anh em bên cạnh an ủi thôi thế cũng mừng và<br>Không quan tâm đến chuyện gần xaKhông sân si đến chuyện nhà người ta<br>Biết thân biết phận của mình thôi<br>Dòng đời trôi chẳng cầu mong điều gì xa hoa quá<br>Chuyện gần xa cuộc đời ta nào thể biết hết nhưng vẫn có<br>Vài ba người cứ hỏi thăm làm nghề đến mấy năm<br>Rằng nhiều lắm khó khăn hay là vui mỗi ngày<br>Tiền nong thì dễ kiếm không<br>Người ta nhòm ngó cũng đông<br>Ngoài bạn bè ra thì ai ở bên lúc buồn<br>Vài ba người cứ hỏi thăm làm nghề đến mấy năm<br>Rằng nhiều lắm khó khăn hay là vui mỗi ngày<br>Tiền nong thì dễ kiếm không<br>Người ta nhòm ngó cũng đông<br>Ngoài bạn bè ra thì ai ở bên lúc buồn<br>Làm đến năm bảy mươi tuổi thôi nhá",
    },
    {
      name: "Độ Đúng Đời",
      singer: "Thiện Hưng ft. Độ Mixi",
      path: "./assets/audio/do_dung_doi.mp3",
      image: "./assets/img/do_dung_doi.jpg",
      lyrics:
        "Từng ngày cứ thế trôi qua dần dần rồi thấy cũng già<br>Người ta cứ nói ba hoa rằng tôi cuộc sống xa hoa<br>Đời người thì có mấy khi làm việc vất vả tận tụy<br>Còn trẻ cứ cố bây giờ, để về già đỡ lo sợ.<br>Nhiều người cứ hỏi tôi stream đến bao giờ<br>Thật lòng chẳng biết phải kết thúc ở đâu<br>1234 mươi năm nữa hay là làm việc hăng hái đến hết sức thì thôi<br>Qua thời gian tôi mãi cứ nghĩ vu vơ về cuộc đời<br>Vì cuộc sống là thế vốn dĩ chẳng tô vẽ nên con người ta tự lo tự lắng cho cuộc đời<br>Mong một ngày ta vẽ nên được bức tranh để tặng bản thân<br>Dù ngày mai sẽ có sóng gió bão tố vây quanh mình ta sẽ cố vượt qua bên gia đình<br>Lo sợ chi khó khăn, sống như thế mới đúng đời<br>Ba lỗ quần đùi 10 giờ tối, đến giờ stream không fan lại hối<br>Ngày nào cũng lặp đi lặp lại, vẫn ngồi một mình cười nói thế thôi<br>Trong lòng cảm thấy gì, ai biết? Vui buồn cảm thấy gì, ai biết?<br>Chẳng cần biết vui hay buồn cứ tới giờ là “Hi anh em”.<br>Bộ tộc tôi thì trùm vui tính<br>Off stream thì thành Lươn Thanh Độ<br>Hứa nhẹ cũng thành Hứa Thanh Độ<br>Mà hết muốn Độ thì lại Phùng Thanh Lịch<br>Cuộc sống ngày ngủ đêm stream nhiều lúc khiến ta mệt mỏi<br>Nhưng không sao đã có gia đình, anh em cuộc sống này đúng đời!<br>Vì cuộc sống là thế vốn dĩ chẳng tô vẽ nên con người, ta tự lo tự lắng cho cuộc đời<br>Mong một ngày ta vẽ nên được bức tranh để tặng bản thân<br>Dù ngày mai sẽ có sóng gió bão tố vây quanh mình ta sẽ cố vượt qua bên gia đình<br>Lo sợ chi khó khăn, sống như thế mới đúng đời!<br>Nhiều người cứ hỏi tôi stream đến bao giờ<br>Thật lòng chẳng biết phải kết thúc ở đâu<br>1234 mươi năm nữa hay là làm việc hăng hái đến hết sức thì thôi<br>Qua thời gian tôi mãi cứ nghĩ vu vơ về cuộc đời<br>Vì cuộc sống là thế vốn dĩ chẳng tô vẽ nên con người ta tự lo tự lắng cho cuộc đời<br>Mong một ngày ta vẽ nên được bức tranh để tặng bản thân<br>Dù ngày mai sẽ có sóng gió bão tố vây quanh mình ta sẽ cố vượt qua bên gia đình<br>Lo sợ chi khó khăn, sống như thế mới đúng đời!<br>Lo sợ chi khó khăn, sống như thế mới đúng đời!",
    },
    {
      name: "Trường Sơn Đông Trường Sơn Tây",
      singer: "Độ Mixi",
      path: "./assets/audio/truong_son_dong_truong_son_tay.mp3",
      image: "./assets/img/truong_son_dong_truong_son_tay.jpg",
      lyrics:
        "Cùng mắc võng trên rừng Trường Sơn <br>Hai đứa ở hai đầu xa thẳm<br>Đường ra trận mùa này đẹp lắm<br>Trường Sơn Đông nhớ Trường Sơn Tây.<br>Trường Sơn Tây anh đi<br>Thương em thương em bên ấy mưa nhiều<br>Con đường mà gánh gạo <br>Muỗi bay rừng già cho dài mà tay áo<br>Hết rau rồi em có lấy măng khổng<br>Còn em thương bên tây anh mùa đông <br>nước khe cạn bướm bay lèn đá<br>Biết lòng anh say miền đất lạ <br>là chắc em lo đường chắn bom thù.<br>Anh lên xe trời đổ cơn mưa <br>cái gạt nước xua đi nỗi nhớ<br>Em xuống núi nắng về rực rỡ <br>cái nhành cây gạt mối riêng tư<br>Từ nơi em đưa sang bên nơi anh <br>những binh đoàn nối nhau ra tiền tuyến<br>Như tình yêu nối lời vô tận <br>là Đông Trường Sơn nối Tây Trường Sơn.",
    },
    {
      name: "Đi Về Nhà",
      singer: "Đen x JustaTee",
      path: "./assets/audio/di_ve_nha.mp3",
      image: "./assets/img/di_ve_nha.jpg",
      lyrics:
        "… Đường về nhà là vào tim ta<br>Dẫu nắng mưa gần xa<br>Thất bát vang danh<br>Nhà vẫn luôn chờ ta<br>Đường về nhà là vào tim ta<br>Dẫu có muôn trùng qua<br>Vật đổi sao dời<br>Nhà vẫn luôn là nhà (đi về nhà)<br>… Ya lao vào đời và kiếm cơm lao vào đời tìm cơ hội<br>Những thành thị thường lấp lánh còn đêm thành thị thường trơ trọi<br>Như mọi đứa trẻ khác lớn lên muốn đi xa hoài (xa hoài)<br>Nhà thì vẫn ở yên đó đợi những đứa con đang ra ngoài<br>… Bước ra ngoài mới biết không ở đâu bằng ở nhà (ở nhà)<br>Biết có gì để mất trước khi sẵn sàng mở quà (mở quà)<br>Không phải là võ sĩ nhưng mà phải giỏi đấu đá<br>Nhiều khi kiệt sức chỉ vì gắng giữ mình không xấu xa<br>… Đôi lúc bỗng thấy đồng cảm với Mai An Tiêm<br>Bước chân ra là sóng gió chỉ có nhà mãi an yên<br>Ngoài kia phức tạp như rễ má và dây mơ (dây mơ)<br>Về nhà để có lúc cho phép mình được ngây thơ<br>… Mang theo bao náo nức lên chiếc xe này<br>Trọn một niềm thao thức xuân níu đêm ngày<br>Cùng dòng người trên phố mang sắc mai hương đào<br>Tìm về nơi ấm êm<br>… Đường về nhà là vào tim ta<br>Dẫu nắng mưa gần xa<br>Thất bát vang danh<br>Nhà vẫn luôn chờ ta<br>Đường về nhà là vào tim ta<br>Dẫu có muôn trùng qua (dẫu muôn trùng qua)<br>Vật đổi sao dời (vật đổi sao dời)<br>Nhà vẫn luôn là nhà<br>… Về ngôi nhà có góc vườn nhiều chó nhiều gà<br>Đám bạn nói con khó chiều<br>Mà lại thích gió trời hơn gió điều hoà ah<br>Về ăn cơm mẹ nấu về mặc áo mẹ may<br>Về đưa ba ra chợ mua cây đào cây mai về bày<br>… Cả năm trời làm việc nhiều khi rã rời như cái máy oh<br>Về nhà thấy áp lực nhẹ như bấc thổi cái là bay (thổi cái là bay)<br>Ấm êm hơn bếp lửa ngọt bùi hơn lúa non<br>Nhà vẫn luôn ở đó mong chờ những đứa con<br>… Dẫu cho mưa cho nắng vẫn không bao giờ nề hà<br>Hạnh phúc chỉ đơn giản là còn được về nhà oh<br>Hạnh phúc đi về nhà<br>Cô đơn đi về nhà<br>Thành công đi về nhà<br>Thất bại đi về nhà<br>… Mệt quá đi về nhà<br>Mông lung đi về nhà<br>Chênh vênh đi về nhà<br>Không có việc gì vậy thì đi về nhà<br>Không có việc gì vậy thì đi về nhà<br>Đi về nhà đi về nhà<br>… Đường về nhà là vào tim ta<br>Dẫu nắng mưa gần xa<br>Thất bát vang danh<br>Nhà vẫn luôn chờ ta<br>Đường về nhà là vào tim ta<br>Dẫu có muôn trùng qua<br>Vật đổi sao dời<br>Nhà vẫn luôn là nhà<br>… Nhà có thể lớn có thể nhỏ có thể không khang trang<br>Cha mẹ nào cũng muốn con được sống đàng hoàng<br>Lớn lên làm người mong một tương lai sáng lạng<br>Cặm cụi cả đời không bao giờ thấy than vãn<br>… Đường về nhà là vào tim ta<br>Dẫu nắng mưa gần xa<br>Thất bát vang danh<br>Nhà vẫn luôn chờ ta<br>Đường về nhà là vào tim ta<br>Dẫu có muôn trùng qua<br>Vật đổi sao dời<br>Nhà vẫn luôn là nhà",
    },
    {
      name: "Ai Mang Cô Đơn Đi",
      singer: "Huy Quần Hoa",
      path: "./assets/audio/ai_mang_co_don_di.mp3",
      image: "./assets/img/ai_mang_co_don_di.jpg",
      lyrics:
        "Ánh trăng lạc lối gieo phù hoa duyên hoá thành tro<br>Mặt hồ rung lên mang hạt mưa xuyên nát lòng ta<br>Trái tim rộng lớn thu nhân gian trong đôi mắt sầu lo<br>Bầu trời riêng ta ru lời ca nhắn ai đừng xa<br>Hah hah nhắn ai đừng xa<br>Nhìn từng chiếc lá úa phai màu rụng rời ngoài hiên<br>Hah hah mình ta với ta thôi mà<br>Tấm thân này chịu nhiều đớn đau lưu luyến<br>Gió lung lay bàn tay nâng cánh hoa tình<br>Dẫu trăm năm người thương vẫn cách xa mình<br>Thuyền mãi ra khơi đi về nơi con sóng vô hình<br>Chốn xa xăm trùng dương muôn hướng vạn lý<br>Và đêm tối bên trong tâm hồn từng dòng suy nghĩ ta xa nhau vì<br>Bình minh giấu đi cô đơn ngày dài ta mong quên đi<br>Ai ai mang cô đơn đi<br>Ai ai mang cô đơn đi<br>Ai ai mang cô đơn đi<br>Và ai uh hoh<br>Hoh nhắn ai đừng xa<br>Nhìn từng chiếc lá úa phai màu rụng rời ngoài hiên (rớt rơi qua rồi)<br>Hah hah mình ta với ta thôi mà<br>Tấm thân này chịu nhiều đớn đau lưu luyến<br>Gió lung lay bàn tay nâng cánh hoa tình (cánh hoa tình ta)<br>Dẫu trăm năm người thương vẫn cách xa mình (cách xa mình)<br>Thuyền mãi ra khơi đi về nơi con sóng vô hình<br>Chốn xa xăm trùng dương muôn hướng vạn lý<br>Hah hah<br>Hah hah<br>Hah hah<br>Hah hah",
    },
    {
      name: "Đâu Cần Một Bài Ca Tình Yêu",
      singer: "Tiên Tiên x Trang",
      path: "./assets/audio/dau_can_mot_ban_ca_tinh_yeu.mp3",
      image: "./assets/img/dau_can_mot_ban_ca_tinh_yeu.jpg",
      lyrics:
        "Pa-ra-ta-pa-ta-pa-pa<br>Pa-ra-ta-pa-ta-pa-pa<br>Pa-ra-ta-pa-ta-pa-pa-ra<br>Pa-ra-pa<br>Ta-ra-pa-ra-pa-pa<br>Ta-ta-ta-ta-ta-ta-ta<br>Ta-ta-ta-ta-ta-ta-ta<br>Đôi ba lời hát nhớ nhung<br>Tan vào theo ký ức<br>Trách sao ta đã vụng về đánh mất<br>Đôi ba lời hứa không tên<br>Mong tình yêu mãi bên<br>Biết bao lâu cho vừa?<br>Tình yêu là phố cũ ghé chơi<br>Cho mùa hè ra khơi<br>Nắng theo chân mình vấn vương<br>Tình yêu là gió mát cuốn đi<br>Hết muộn phiền âu lo<br>Sống vô tư cho đời ta vô thường<br>Đâu cần một bài ca tình yêu?<br>Cho đời ta thêm đắm say<br>Đâu cần một bài ca tình yêu<br>Cho lòng ta thêm ngất ngây<br>Chỉ cần mình cạnh nhau phút giây<br>Nhìn về phía chân trời khuất xa<br>Nơi ánh ban mai vang tên ta dịu dàng<br>Ai ơi đừng mãi lắng nghe<br>Theo bao lời buồn lê thê<br>Muốn biết yêu thương hãy đến đây<br>Theo nhau về chốn xa lạ<br>Bao giận hờn trôi xa<br>Pa-ra-ra-pa-ra-pa<br>Tình yêu là phố cũ ghé chơi<br>Cho mùa hè ra khơi<br>Nắng theo chân mình vấn vương<br>Tình yêu là gió mát cuốn đi<br>Hết muộn phiền âu lo<br>Sống vô tư cho đời ta vô thường<br>Đâu cần một bài ca tình yêu<br>Cho đời ta thêm đắm say<br>Đâu cần một bài ca tình yêu<br>Cho lòng ta thêm ngất ngây<br>Chỉ cần mình cạnh nhau phút giây<br>Nhìn về phía chân trời khuất xa<br>Nơi ánh ban mai vang tên ta dịu dàng<br>Ta-ra-ta-pa-pa-pa-pa<br>Ta-ra-ta-pa-pa-pa-pa<br>Ta-ra-ta-pa-pa-pa-pa...<br>Đâu cần một bài ca tình yêu<br>Cho đời ta thêm đắm say<br>Đâu cần một bài ca tình yêu<br>Cho lòng ta thêm ngất ngây<br>Chỉ cần mình cạnh nhau phút giây<br>Nhìn về phía chân trời khuất xa<br>Nơi ánh ban mai vang tên ta dịu dàng",
    },
    {
      name: "Cô Gái Gu Chì",
      singer: "Soái Nhi",
      path: "./assets/audio/co_gai_guicci.mp3",
      image: "./assets/img/co_gai_guicci.jpg",
      lyrics:
        "Giữa ngã tư em nhìn theo những làn khói<br>Pikachu đứng kia mà xe anh lao ầm ầm<br>Hôm nay anh đi đâu?<br>Tại sao anh không đón em?<br>Tại sao anh cứ mãi luôn cho em leo cây?<br>Này chàng trai ơi<br>Vai anh đeo cặp gucci mà chân anh đi giày đôn chề<br>Lưng thì anh dắt theo đôi ba ca-ro với áo body<br>Xe thì wave an-pha<br>Tay anh cứ vít ga<br>Đêm anh ôm cóng đá với shisha<br>Giữa ngã tư anh cũng nhìn theo những làn khói<br>Pikachu bắt anh nên chưa qua đón em được<br>Nhưng mà hôm kia anh qua<br>Tại sao em không xuống luôn?<br>Tại sao em cứ mãi luôn bắt anh trông mong<br>Này người đẹp ơi<br>Chân em đi sục Gucci mà là trông như made in China<br>Đôi quần jean xách lung tung nhưng em kêu mang thế mới ngầu<br>Xe thì anh không quan tâm<br>Vì anh luôn luôn đón em<br>Anh luôn luôn mãi mãi sẽ bên em<br>Và rồi anh cứ hát lên cho em nghe một bản tình ca<br>Li li la li la la lí la lí la<br>[Rap:]<br>Trâu già thích gặm cỏ non<br>Trẻ con thích chơi đồ cổ<br>Em là cô gái còn sắc son,<br>Còn anh là liều thuốc bổ<br>Trâu già thích gặm cỏ non<br>Trẻ con thích chơi đồ cổ<br>Em thì trông như gái một con<br>Thế mà anh vẫn cứ đổ<br>Anh em mình là cái gì nào?<br>Anh em mình là củ su hào<br>Củ su hào trồng ở đâu nào?<br>Củ su hào trồng ở Tây Lào<br>Anh em mình là cái gì đây?<br>Anh em mình là củ khoai tây<br>Củ khoai tây trồng ở đâu đây?<br>Củ khoai tây trồng ở",
    },
    {
      name: "Mơ Hồ",
      singer: "DJChip x Nhism",
      path: "./assets/audio/mo_ho.mp3",
      image: "./assets/img/mo_ho.jpg",
      lyrics:
        "Ngồi nhìn xa xôi một mình trong bóng tối<br>Chỉ một mình tôi lạnh lùng co ro buốt<br>Bỗng nước mắt rơi nhẹ đắng khoé môi<br>Rồi một ngày nữa lại trôi<br>Ngồi tìm ai đây giật mình anh chưa biết<br>Mình tìm ai đây<br>Rồi vội vàng gom lấy chút ít bóng đêm<br>Tìm phút ấm êm<br>Một ngày đong đếm tìm ai<br>Chợt về giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ mơ hồ<br>Ngồi nhìn xa xôi một mình trong bóng tối<br>Chỉ một mình tôi lạnh lùng co ro buốt<br>Bỗng nước mắt rơi nhẹ đắng khoé môi<br>Rồi một ngày nữa lại trôi<br>Ngồi tìm ai đây (tìm ai đây)<br>Giật mình anh chưa biết<br>Mình tìm ai đây (đi tìm ai đấy)<br>Rồi vội vàng gom lấy chút ít bóng đêm<br>Tìm phút ấm êm<br>Một ngày đong đếm tìm ai<br>Chợt về giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ<br>Giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai không biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần (và chỉ là giấc mơ)<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ mơ hồ<br>Lang thang một mình bơ vơ tìm nỗi nhớ mơ hồ",
    },
    {
      name: "Rap Thập Cẩm",
      singer: "Tú Lee",
      path: "./assets/audio/rap_thap_cam.mp3",
      image: "./assets/img/rap_thap_cam.jpg",
      lyrics:
        "Xe chốt và pháo là những thứ mà em tao xăm mình<br>Xe tốt quần áo là những thứ mà tao bao năm rình<br>Phường khóm công an là nơi tao đang đăng hình<br>Hẻm 48, ngay từ xưa đã không là yên bình<br>Sáng ngày hôm qua cũng giống như sáng của ngày hôm nay<br>Việc tao làm cũng như mọi ngày<br>Thằng Karik đã thấy<br>Back to my hood<br>Tao làm việc của tao<br>Khi tất cả trở thành vấn đề tao để dao làm việc của tao<br>Tao không gây hấn nhưng hễ ai đụng là đập<br>Và hàng nguội nằm trong túi làm cho quần thụng và thấp<br>Anh em khi gặp tao cầm bia cụng bay nắp<br>Còn tụi mày khi gặp tao vào 48 tao chấp<br>con đốt điếu cần để cúng cho Di Lặc<br>Cám ơn người đã ban quần áo con đang mặt<br>Chén cơm con đang ăn ....cong cần con đang cắt<br>Cuốc sống cũa con hôm nay<br>Con cám ơn người đã để mắt tới con<br>Cuộc sống này có bao nhiêu điều đẹp<br>Nhìn đâu đâu cũng đẹp....từ cây bông cho đến đôi dép , cây đẹp nhà đẹp<br>Ngoài đường các em gái đang chay xe trên đường Nguyễn Trãi e thẹn nhìn con<br>Con đang đươc bay , bay như người say<br>Quên đi hết cuộc đời này nêu như con chết đêm nay<br>Cũng fai hút cạn điếu này . Nghe một bài nhac thật hay<br>Tận hưởng đến giọt cuối cùng . Mặt kệ rượu cay<br>Một điếu , cho anh em người cùng con vào sinh ra tử<br>Một điếu , cho cha mẹ Tội bất hiếu này thật khó tha thứ<br>Một điếu , dành cho trời Một điếu dành cho đất<br>Một điếu.........Dành cho những người lạy trước bàn thờ khi con mất<br>Tụi mày chỉ biết hút, không chịu đi khám phá...<br>Đứng dậy cầm sách bút, mày đi với tao mà đánh giá<br>tao đưa mày về châu thổ xem thuyền và đánh cá<br>Còn mấy thằng nhóc mà không có thích, vui lòng mày tránh ra<br>Mời...!! Bước tới đất miền Tây, tao cho mày nghe tiếng đàn cò<br>Muôn màu của sông nước và mày sẽ thấy các đàn cò<br>Mày đi thì đừng có lo, những thứ ở đây là đáng có<br>Đói cũng * có chết tài nguyên thiên nhiên đã ban cho...<br>Tụi tao... bát ngát Đồng Sen ở Tháp Mười<br>Miệt vườn có Cái Bè - hoa quả xoài cát, bưởi<br>Còn đa dạng hải sản, lúc nào cũng phải tươi<br>Tao nói mày nghe, rừng tràm Trà Sư oxy là phải hửi<br>Còn chén cơm tụi mày đang ăn là nhờ cánh đồng của ngoại tao<br>Dân miền Tây chất phát, hòa đồng, thích ngoại giao<br>Mày qua Long Xuyên, Chợ Nổi alo cho bạn tao<br>Nó sẽ đưa mày đi thật xa và hỏi muốn chơi cái loại nào<br>Đi về Sóc Trăng quê tao mà chơi đi...<br>Tụi tao chèo tụi tao lái...Khoái!!<br>Tụi tao hái, tụi tao quấn cho tụi mày high<br>Thấy thì đừng có hú lên là sao đường còn dài<br>Okay! Tao cho mày cưỡi con dơi sải cánh 1m2<br>Uống đi!! Anh em tao nói mày uống đi!!<br>Mày cầm ly rượu mày uống đi!!<br>Mày chơi xả láng tới sáng về sớm....<br>Cho người ta kết mày.Uống đi!!<br>Rượu Xuân Thạnh mày, uống đi<br>Từ bên Trà Vinh đó, uống đi<br>Anh em ta xỉn, anh em ta tới nái luôn...Mày uống đi....<br>Và tao từng sống ở Sài Gòn như ở đợ<br>Da tụi tao đen bóng, nơi tao sinh là ở chợ<br>Mà thôi, mà thôi đi về quê tao nếu mày muốn thấy điều đáng sợ<br>Và tao có thằng bạn đang đỉnh, ở đất Châu Đốc là gangster<br>Nó cứ nhắc với tao ở biên giới có cái khu là CasinoThằng anh đang canh bên dưới...<br>Người đi vào, đi ra, đi vô<br>Nhưng tao nắm hết tỉ số<br>Thích nhâm nhi trà atisoKhi đêm xuống, phố lên đèn<br>Nó nói là đẹp như Tokyo<br>Nghe radio phát sóng đầu làng... đang tuyên dương anh Tư Đỉa<br>Thu chi của thằng đầu đàn, khi nó có tiền, anh Tư xỉa<br>Nhưng mà tụi tao tuyên bố là dân miền Tây chơi đúng nghĩa<br>Đầu có kề súng chỉa, mày kêu tao khai thì còn khuya<br>Tụi mày còn nhớ câu chuyện giết người mà không cần dùng súng hay dao<br>Nhang, đèn, tiếng lóng, kèm theo bùa chú là thầy tao<br>Ổng giao tao đi thông não mấy thằng không biết sống sao<br>Đứng dậy đi và nên động não, để ngày nào đó được giống tao",
    },
    {
      name: "At My Worst",
      singer: "Pink Sweat$",
      path: "./assets/audio/at_my_worst.mp3",
      image: "./assets/img/at_my_worst.jpg",
      lyrics:
        "Can I call you baby?<br>Can you be my friend?<br>Can you be my lover up until the very end?<br>Let me show you love, oh, I don't pretend<br>Stick by my side even when the world is givin' in, yeah<br>Oh, oh, oh, don't<br>Don't you worry<br>I'll be there, whenever you want me<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth<br>'Cause it's only you, nobody new, I put you first<br>And for you, girl, I swear I'll do the worst<br>If you stay forever, let me hold your hand<br>I can fill those places in your heart no else can<br>Let me show you love, oh, I don't pretend, yeah<br>I'll be right here, baby, you know I'll sink or swim<br>Oh, oh, oh, don't<br>Don't you worry<br>I'll be there, whenever you want me<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth, yeah<br>'Cause it's only you, nobody new, I put you first (put you first)<br>And for you, girl, I swear I'll do the worst<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth<br>'Cause it's only you, nobody new, I put you first<br>And for you, girl, I swear I'll do the worst<br>",
    },
    {
      name: "You Are The Reason",
      singer: "Alexandra Porat",
      path: "./assets/audio/you_are_the_reason.mp3",
      image: "./assets/img/you_are_the_reason.jpg",
      lyrics:
        "There goes my heart beating<br>'Cause you are the reason<br>I'm losing my sleep<br>Please come back now<br>And there goes my mind racing<br>And you are the reason<br>That I'm still breathing<br>I'm hopeless now<br>I'd climb every mountain<br>And swim every ocean<br>Just to be with you<br>And fix what I've broken<br>Oh, 'cause I need you to see<br>That you are the reason<br>There goes my hands shaking<br>And you are the reason<br>My heart keeps bleeding<br>I need you now<br>And if I could turn back the clock<br>I'd make sure the light defeated the dark<br>I'd spend every hour, of every day<br>Keeping you safe<br>And I'd climb every mountain<br>And swim every ocean<br>Just to be with you<br>And fix what I've broken<br>Oh, 'cause I need you to see<br>That you are the reason<br>I don't wanna fight no more<br>I don't wanna hide no more<br>I don't wanna cry no more<br>Come back I need you to hold me (you are the reason)<br>Be a little closer now<br>Just a little closer now<br>Come a little closer<br>I need you to hold me tonight<br>I'd climb every mountain<br>And swim every ocean<br>Just to be with you<br>And fix what I've broken<br>'Cause I need you to see<br>That you are the reason",
    },
    {
      name: "Don't Watch Me Cry",
      singer: "Alexandra Porat",
      path: "https://stream.nixcdn.com/NhacCuaTui1002/DontWatchMeCryCover-AlexandraPorat-6316751.mp3?st=eFSl5dMveqKHvljc8cnq4w&e=1659350668&t=1659264290951",
      image: "https://images-na.ssl-images-amazon.com/images/I/71vKKrtUh8L.jpg",
      lyrics:
        "Oh, it hurts the most 'cause I don't know the cause<br>Maybe I shouldn't have cried when you left and told me not to wait<br>Oh, it kills the most to say that I still care<br>Now I'm left tryna rewind the times you held and kissed me back<br>I wonder if you're thinkin' 'Is she alright all alone?'<br>I wonder if you tried to call, but couldn't find your phone<br>Have I ever crossed your thoughts because your name's all over mine<br>A moment in time, don't watch me cry<br>A moment in time, don't watch me cry<br>I'm not crying 'cause you left me on my own<br>I'm not crying 'cause you left me with no warning<br>I'm just crying 'cause I can't escape what could've been<br>Are you aware when you set me free?<br>All I can do is let my heart bleed<br>Oh, it's harder when you can't see through the thoughts<br>Not that I wanna get in, but I want to see how your mind works<br>No, it's harder when they don't know what they've done<br>Thinking it's better they leave, meaning that I'll have to move on<br>Oh, I wonder if you're thinkin' 'Is she alright all alone?'<br>I wonder if you tried to call, but couldn't find your phone<br>Have I ever crossed your thoughts because your name's all over mine<br>A moment in time, don't watch me cry<br>A moment in time, don't watch me cry<br>I'm not crying 'cause you left me on my own<br>I'm not crying 'cause you left me with no warning<br>I'm just crying 'cause I can't escape what could've been<br>Are you aware when you set me free?<br>All I can do is let my heart bleed",
    },
    {
      name: "Lift Me Up",
      singer: "Christina Aguilera",
      path: "https://play.imusicvn.com/stream/s0vGXlVRUmaw",
      image:
        "https://images.genius.com/3980ca142d4d62dcefe81a57b3102d28.1000x1000x1.jpg",
      lyrics:
        "So the pain begins<br>As the music fades<br>And I’m left here with<br>With more than I can take<br>If you lift me up<br>Just get me through this night<br>I know I'll rest tomorrow<br>And I'll be strong enough to try<br>When the sky clears<br>And all is said and done<br>I will realize<br>That we all need someone<br>If you lift me up<br>Just get me through this night<br>I know I'll rest tomorrow<br>And I’ll be strong enough to try<br>So when you see me crashing<br>And there’s nowhere left to fall<br>Will you lift me even higher<br>To rise above this all<br>If you lift me up<br>If you lift me up<br>Said if you lift me up<br>Will it be higher<br>When you see me crashing<br>Will it be higher<br>When you see me crashing<br>And there’s nowhere left to fall<br>Will you lift me even higher<br>To rise above this all<br>If you lift me up<br>Said if you lift me up<br>If you lift me up<br>Just get me through this night",
    },
    {
      name: "True Love Is Violent",
      singer: "Allie X",
      path: "https://play.imusicvn.com/stream/1XJCda2DKpNC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5jCwGif9Za6E2FOml_YGTDuG1F9m09QE416oyofeoWHsEBbKhg40oqMicd2mDP9joiY&usqp=CAU",
      lyrics:
        "The surface of the water is serene<br>But what goes on below?<br>Hungry current sucking at your feet<br>It won't let go<br>Tossed 'til we capsized<br>Battered and bruised<br>Say it's the last time<br>We know the truth<br>Don't know what you got until it's gone<br>Don't know what is right until it's wrong<br>Heaven could fall and angels swarm<br>But hell is ours to face<br>True love is violent<br>True love is violent, violent<br>Stirring in the sugar cubes of salt<br>Pollute to purify<br>Drowning in my body, mind, and thoughts<br>My mouth is dry<br>Tossed 'til we capsized<br>Battered and bruised<br>Say it's the last time<br>We know the truth<br>Don't know what you got until it's gone<br>Don't know what is right until it's wrong<br>Heaven could fall and angels swarm<br>But hell is ours to face<br>True love is violent<br>True love is violent, violent<br>After the storm<br>After the rain<br>I'm juvenile<br>I'm born again<br>Don't know what you got until it's gone<br>Don't know what is right until it's wrong<br>Heaven could fall and angels swarm<br>But hell is ours to face<br>True love is violent<br>True love is violent, violent",
    },
    {
      name: "A Thousand Years",
      singer: "Christina Perri",
      path: "https://play.imusicvn.com/stream/vZ7MQlwJbC",
      image:
        "https://images.genius.com/da9d6785d3a8d6ae3e096e5aba47c834.1000x1000x1.jpg",
      lyrics:
        "(Verse 1)<br>Heart beats fast<br>Colors and promises<br>How do be brave<br>How can I love when I'm afraid<br>To fall<br>But watching you stand alone<br>All of my doubt<br>Suddenly goes away somehow<br>(Pre-chorus)<br>One step closer<br>(Chorus)<br>I have died everyday<br>waiting for you<br>Darling, don't be afraid<br>I have loved you for a<br>Thousand years<br>I'll love you for a<br>Thousand more<br>(Verse 2)<br>Time stands still<br>Beauty in all she is<br>I will be brave<br>I will not let anything<br>Take away<br>What's standing in front of me<br>Every breath,<br>Every hour has come to this<br>(Pre-chorus)<br>One step closer<br>(Chorus)<br>I have died everyday<br>Waiting for you<br>Darling, don't be afraid<br>I have loved you for a<br>Thousand years<br>I'll love you for a<br>Thousand more<br>And all along I believed<br>I would find you<br>Time has brought<br>Your heart to me<br>I have loved you for a<br>Thousand years<br>I'll love you for a<br>Thousand more<br>(Pre-chorus x2)<br>One step closer<br>One step closer<br>(Chorus)<br>I have died everyday<br>Waiting for you<br>Darling, don't be afraid,<br>I have loved you for a<br>Thousand years<br>I'll love you for a<br>Thousand more<br>And all along I believed<br>I would find you<br>Time has brought<br>Your heart to me<br>I have loved you for a<br>Thousand years<br>I'll love you for a<br>Thousand more",
    },
    {
      name: "Six Feet Under",
      singer: "Billie Eilish",
      path: "./assets/audio/six_feet_under.mp3",
      image: "./assets/img/six_feet_under.jpg",
      lyrics:
        "Help, I lost myself again<br>But I remember you<br>Don't come back, it won't end well<br>But I wish you'd tell me to<br>Our love is six feet under<br>I can't help but wonder<br>If our grave was watered by the rain<br>Would roses bloom?<br>Could roses bloom<br>Again?<br>Retrace my lips, erase your touch<br>It's all too much for me<br>Blow away like smoke in air<br>How can you die carelessly?<br>Our love is six feet under<br>I can't help but wonder<br>If our grave was watered by the rain<br>Would roses bloom?<br>Could roses bloom?<br>They're playin' our sound<br>Layin' us down tonight<br>And all of these clouds<br>Cryin' us back to life<br>But you're cold as a night<br>Six feet under<br>I can't help but wonder<br>If our grave was watered by the rain<br>Bloom<br>Bloom<br>Again<br>Help, I lost myself again<br>But I remember you",
    },
    {
      name: "I Miss You",
      singer: "Czarina",
      path: "https://play.imusicvn.com/stream/g4d7T0YMl1ub",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/e4/71/3b/e4713b69-5b4c-39ea-9a31-d19ab93c87cb/11371.jpg/1200x1200bf-60.jpg",
      lyrics:
        "The photos on my wall remind me<br>That you were once real<br>The pictures in my head are replay<br>Weren't allow my heart to hear<br>All the emptiness i feel without you in mylife<br>It's so hard to say goodbye<br>When i keep asking why<br>Why<br>Where did you go<br>Why were you taken from me<br>I'm still waiting for you<br>To show signs of your guilty<br>I want that at sky in pray<br>Though you might appear<br>Come by to me my dear<br>I miss you<br>Could hold you once more<br>Forever it will last<br>And spend another day beside you<br>Not allowing time to past<br>Every memory we shared<br>Will not fade away<br>In my heart you always be<br>Not too far away<br>Away<br>Where did you go<br>Why were you taken from me<br>I'm still waiting for you<br>To show your signs of your guilty<br>I want that at sky in pray.<br>Though you might appear<br>Come by to me my dear<br>I miss you<br>I miss you<br>I miss you<br>Everywhere I go<br>I miss you<br>I miss you<br>I'm minded of you<br>I miss you<br>I miss you<br>Though keeps on coming back<br>I miss you<br>I miss you<br>Back to me<br>Where did you go<br>Why were you taken from me<br>I'm still waiting for you<br>To show signs of your guilty<br>I want that at sky in pray<br>Though you might appear<br>Come by to me my dear<br>I miss you<br>Come by to me my dear<br>I miss you<br>Come by to me my dear<br>I miss you",
    },
    {
      name: "Listen Before I Go",
      singer: "Billie Eilish",
      path: "https://play.imusicvn.com/stream/abdP4fdYudFG",
      image:
        "https://madnaija.com/wp-content/uploads/2021/01/Billie-Eilish-%E2%80%93-goodbye.png",
      lyrics:
        "Take me to the rooftop<br>I wanna see the world when I stop breathing, turning blue<br>Tell me love is endless, don't be so pretentious<br>Leave me like you do<br>If you need me, wanna see me<br>Better hurry 'cause I'm leaving soon<br>Sorry can't save me now<br>Sorry I don't know how<br>Sorry there's no way out (Sorry)<br>But down<br>Hmm, down<br>Taste me, these salty tears on my cheeks<br>That's what a year-long headache does to you<br>I'm not okay, I feel so scattered<br>Don't say I'm all that matters<br>Leave me, déjà vu<br>If you need me, wanna see me<br>You better hurry, I'm leaving soon<br>Sorry can't save me now (Sorry)<br>Sorry I don't know how (Sorry)<br>Sorry there's no way out (Sorry)<br>But down<br>Hmm, down<br>Call my friends and tell them that I love them<br>And I'll miss them<br>But I'm not sorry<br>Call my friends and tell them that I love them<br>And I'll miss them<br>Sorry",
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://tainhacmienphi.biz/get/song/api/3020",
      image:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/df230dd34d9894c3a0f30b9a4e6b7ebf~c5_720x720.jpeg?x-expires=1659366000&x-signature=HXCZRkuXJo%2FyH6ZToqXrKLPL6mQ%3D",
      lyrics:
        "For all the times that you rain on my parade<br>And all the clubs you get in using my name<br>You think you broke my heart, oh girl for goodness sake<br>You think I'm crying, oh my oh, well I ain't.<br>And I didn't wanna write a song<br>Cause I didn't want anyone thinking I still care<br>I don't but, you still hit my phone up<br>And baby I be movin' on and I think you should be somethin'<br>I don't wanna hold back, maybe you should know that.<br>My mama don't like you and she likes everyone<br>And I never like to admit that I was wrong<br>And I've been so caught up in my job, didn't see what's going on<br>And now I know, I'm better sleeping on my own.<br>Cause if you like the way you look that much<br>Oh baby you should go and love yourself<br>And if you think that I'm still holdin' on to somethin'<br>You should go and love yourself.<br>But when you told me that you hated my friends<br>The only problem was with you and not them<br>And every time you told me my opinion was wrong<br>And tried to make me forget where I came from.<br>And I didn't wanna write a song<br>Cause I didn't want anyone thinking I still care<br>I don't but, you still hit my phone up<br>And baby I be movin' on and I think you should be somethin'<br>I don't wanna hold back, maybe you should know that.<br>My mama don't like you and she likes everyone<br>And I never like to admit that I was wrong<br>And I've been so caught up in my job, didn't see what's going on<br>And now I know, I'm better sleeping on my own.<br>Cause if you like the way you look that much<br>Oh baby you should go and love yourself<br>And if you think that I'm still holdin' on to somethin'<br>You should go and love yourself.<br>For all the times you made me feel small<br>I fell in love, now I fear nothin' at all<br>I never felt so low when I was vulnerable<br>Was I a fool to let you break down my walls?<br>Cause if you like the way you look that much<br>Oh baby you should go and love yourself<br>And if you think that I'm still holdin' on to somethin'<br>You should go and love yourself.<br>Cause if you like the way you look that much<br>Oh baby you should go and love yourself<br>And if you think that I'm still holdin' on to somethin'<br>You should go and love yourself.",
    },
    {
      name: "The One That Got Away",
      singer: "Brielle Von Hugel",
      path: "https://play.imusicvn.com/stream/RGCpjZCccouF",
      image:
        "https://pic-bstarstatic.akamaized.net/ugc/2a2fdab8fdffa4b7f7c76c39764488dd.jpeg",
      lyrics:
        "Summer after high school, when we first met<br>We make-out in your Mustang to Radiohead<br>And on my eighteenth birthday, we got matching tattoos<br>Used to steal your parents liquor and climb to the roof<br>Talk about our future like we had a clue<br>Never planned that one day I'd be losing you<br>In another life, I would be your girl<br>We keep all our promises, be us against the world<br>In another life, I would make you stay<br>So I don't have to say you were the one that got away<br>The one that got away<br>I was June and you were my Johnny Cash<br>Never one without the other, we made a pact<br>Sometimes when I miss you, I put those records on, whoa<br>Someone said you had your tattoo removed<br>Saw you downtown, singing the blues<br>It's time to face the music, I'm no longer your muse<br>In another life, I would be your girl<br>We keep all our promises, be us against the world<br>In another life, I would make you stay<br>So I don't have to say you were the one that got away<br>The one that got away<br>The one, the one, the one<br>The one that got away<br>All this money can't buy me a time machine, no<br>Can't replace you with a million rings, no<br>I should'a told you what you meant to me, whoa<br>Cause now I pay the price<br>In another life, I would be your girl<br>We keep all our promises, be us against the world<br>In another life, I would make you stay<br>So I don't have to say you were the one that got away<br>The one that got away<br>The one (the one)<br>The one (the one)<br>The one (the one)<br>In another life, I would make you stay<br>So I don't have to say you were the one that got away<br>The one that got away",
    },
    {
      name: 'You Said You"d Grow Old With Me',
      singer: "Michael Schulte",
      path: "https://play.imusicvn.com/stream/GOW0RV4V3Dj6",
      image: "https://i.ytimg.com/vi/gb2PjJSSyso/maxresdefault.jpg",
      lyrics:
        "I'd like<br>To say<br>I'm ok<br>But I'm not<br>I try<br>But I fall<br>Close my mind<br>Turn it off<br>I can't be sober<br>I cannot sleep<br>You've got your peace now<br>What about me?<br>Thought we had the time, had our lives<br>Now you'll never get older, older<br>Didn't say goodbye, now I'm frozen in time<br>Getting colder, colder<br>One last word<br>One last moment<br>To ask you why<br>You left me here behind<br>You said you'd grow old with me<br>We had plans<br>We had visions<br>Now I can't see ahead<br>We were one<br>We were golden<br>Forever you said<br>I can't be sober<br>I cannot sleep<br>You've got your peace now<br>What about me?<br>Thought we had the time, had our lives<br>Now you'll never get older, older<br>Didn't say goodbye, now I'm frozen in time<br>Getting colder, colder<br>One last word<br>One last moment<br>To ask you why<br>You left me here behind<br>You said you'd grow old with me",
    },
    {
      name: "Bạch Nguyệt Quang Và Nốt Chu Sa",
      singer: "Min Hii",
      path: "https://stream.nixcdn.com/NhacCuaTui1009/BachNguyetQuangVaNotChuSa-DaiTuDaZi-6911991.mp3?st=1_xY5RguDCZEQIsn7MUkIA&e=1659281169",
      image:
        "https://images.chesscomfiles.com/uploads/v1/blog/502764.37e87846.5000x5000o.2328fab70671.jpeg",
      lyrics:
        "cóngqián de gēyáo<br>dōu zài zhǐ jiān rào<br>dé bùdào de měihǎo<br>zǒng zàixīn jiàn náo<br>bái fànlì wú chǔ pāo<br>wén·zi xiě yě mǒ bù diào<br>chù bùkě jí gānggāng hǎo<br>rìjiǔtiāncháng ràng rén nǎo<br>nà shí gǔntàng de xīntiào<br>yě céng wú chǔ dùntáo<br>xiàng yī tuán lièhuǒ ránshāo<br>shāo jìn kuà bùguò de qiáo<br>shíguāng cōngcōng de pǎo<br>huǒyàn huà zuò yuè yáoyáo<br>zài wú jīdàng de bōtāo<br>yě cóng bùzài mèng lǐ piāo yáo<br>bái yuèguāng zài zhàoyào<br>nǐ cái xiǎng qǐ tā de hǎo<br>zhūshā zhì jiǔ nán xiāo<br>chuāng qiān de míng yuè zhào<br>nǐ dúzì yī rén yuǎn tiào<br>bái yuèguāng shì nián shǎo<br>shì tā de xiào<br>nà shí gǔntàng de xīntiào<br>yě céng wú chǔ dùntáo<br>xiàng yī tuán lièhuǒ ránshāo<br>xeng i thoán liê hủa rán sao<br>shāo jìn kuà bùguò de qiáo<br>shíguāng cōngcōng de pǎo<br>huǒyàn huà zuò yuè yáoyáo<br>zài wú jīdàng de bōtāo<br>yě cóng bùzài mèng lǐ piāo yáo<br>bái yuèguāng zài zhàoyào<br>nǐ cái xiǎng qǐ tā de hǎo<br>zhūshā zhì jiǔ nán xiāo<br>nǐ shìfǒu néng zhīdào<br>chuāng qiān de míng yuè zhào<br>bái yuèguāng zài zhàoyào<br>nǐ cái xiǎng qǐ tā de hǎo<br>zhūshā zhì jiǔ nán xiāo<br>nǐ shìfǒu néng zhīdào<br>chuāng qiān de míng yuè zhào<br>troang tren tơ mính duê chao<br>nǐ dúzì yī rén yuǎn tiào<br>bái yuèguāng shì nián shǎo<br>shì tā de xiào",
    },
    {
      name: "Công Tử Đi Hướng Bắc",
      singer: "Lý Xuân Hoa",
      path: "https://stream.nixcdn.com/NhacCuaTui990/CongTuDiHuongBac-LyXuanHoaLiChunHua-6043504.mp3?st=Hub1WCUJJWWuDVTtWLI0UA&e=1659280486",
      image: "https://img.wattpad.com/cover/193261581-288-k496780.jpg",
      lyrics:
        "Xiǎo nǚzǐ bù cáiWèi dé gōngzǐ qīnglài<br>Rǎo gōngzǐ liángjiǔ<br>Gōngzǐ wùguài<br>Gōngzǐ xiàng běi zǒu<br>Xiǎo nǚzǐ xiàng nán qiáo<br>Cǐshēng jiùcǐ biéguòle<br>Nányǐ wànghuái<br>Yuàn nǐ sān dōng nuǎn<br>Yuàn nǐ chūn bù hán<br>Yuàn nǐ tiān hēi yǒu dēng<br>Xià yǔ yǒu sǎn<br>Yuàn nǐ shàn qí shēn<br>Yuàn nǐ yù liáng rén<br>Nuǎnsè fú yúshēng<br>Yǒu hǎorén xiāngbàn<br>Suǒyǒu àimù zhī yì<br>Zhǐ yú chúnchǐ jiān<br>Yǎn yú suìyuè<br>Nì yú jiānglái<br>Yǔ jūn jīnshēng wúyuán<br>Qǐng wúxū guàniàn<br>Yǔ dǎ bājiāo<br>Wú kě wúnài<br>Yuàn nǐ sān dōng nuǎn<br>Yuàn nǐ chūn bù hán<br>Yuàn nǐ tiān hēi yǒu dēng<br>Xià yǔ yǒu sǎn<br>Yuàn nǐ shàn qí shēn<br>Yuàn nǐ yù liáng rén<br>Nuǎnsè fú yúshēng<br>Yǒu hǎorén xiāngbàn<br>Yuàn nǐ sān dōng nuǎn<br>Yuàn nǐ chūn bù hán<br>Yuàn nǐ tiān hēi yǒu dēng<br>Xià yǔ yǒu sǎn<br>Yuàn nǐ shàn qí shēn<br>Yuàn nǐ yù liáng rén<br>Nuǎnsè fú yúshēng<br>Yǒu hǎorén xiāngbàn<br>Xiǎo nǚzǐ bù cái<br>Wèi dé gōngzǐ qīnglài<br>Rǎo gōngzǐ liángjiǔ<br>Gōngzǐ<br>Wùguài",
    },
    {
      name: "Cô Nương Xinh Đẹp Phải Đi Lấy Chồng Rồi",
      singer: "Long Mai Tử",
      path: "https://stream.nixcdn.com/NhacCuaTui928/CoNuongXinhDepPhaiDiLayChongRoi-VA-4588745.mp3?st=SosNHUjLzdj2pn6c2848Mg&e=1659281204",
      image: "https://i1.sndcdn.com/artworks-000569147624-vjuarg-t500x500.jpg",
      lyrics:
        "Gu niang gu niang wo jiu yao jia ren laKe shi wo de xin li yi ran ai zhao ta<br>Ai shang ni wo liu xia yong yuan de shang ba<br>Kan kan wo de yan li han zhao lei hua<br>Gu niang gu niang wo jiu yao jia ren la<br>Wo ye ceng jing meng xiang ni ba wo qu hui jia<br>Dang chu wo men ai de wu fa zi ba<br>Ru jin ni yi bian cheng wo yong yuan de qian gua<br>Piao liang de gu niang jiu yao jia ren la<br>Wo shuang yan de lei shui hua hua de xia<br>Mei xiang dao wo zhen de hui shi qu ta ya<br>Cong ci ta zai bie ren de huai li la<br>Piao liang de gu niang jiu yao jia ren la<br>Shen me shi hou cai neng zai kan dao ta<br>Yi xiang dao wo jiang yong jiu de shi qu ta ya<br>Wo de xin li tong de xiang dao zai gua<br>Wo xin ai de gu niang xin ai de gu niang<br>Jin tian jiu yao jia ren la<br>Shou li peng zhao xian hua shen shang chuan zhuo jie bai de hun sha<br>Wo xin ai de gu niang xin ai de gu niang<br>Jin tian jiu yao jia ren la<br>Jia gei yi ge bie de ta wo de xin li jiu xiang dao zai gua<br>Wo xin ai de gu niang xin ai de gu niang<br>Jin tian jiu yao jia ren la<br>Nan dao ta zhen de bi wo hao ma wo yan li han zhao de shi lei hua<br>Wo xin ai de gu niang xin ai de gu niang<br>Jin tian jiu yao jia ren la<br>Wo xiang da sheng de *** su ta wo yong yuan yong yuan ai zhao ta<br>Gu niang gu niang wo jiu yao jia ren la<br>Wo ye ceng jing meng xiang ni ba wo qu hui jia<br>Dang chu wo men ai de wu fa zi ba<br>Ru jin ni yi bian cheng wo yong yuan de qian gua<br>Piao liang de gu niang jiu yao jia ren la<br>Xiang dao zhe li wo jiu lei ru yu xia<br>Hen wo bu gan zao yi dian qu biao da ya<br>Zhe jiu shi wo qie nuo fu chu de dai jia<br><br>Piao liang de gu niang jiu yao jia r<br>n laWo yao xiang ge ban fa qu zu zhi ta<br>Gan jin wei ta song qu mei gui hua ya<br>Gu niang gu niang ni yao leng jing yi xia<br>Piao liang de gu niang jiu yao jia ren la<br>Wo shuang yan de lei shui hua hua de xia<br>Mei xiang dao wo zhen de hui shi qu ta ya<br>Cong ci ta zai bie ren de huai li la<br>Piao liang de gu niang jiu yao jia ren la<br>Shen me shi hou cai neng zai kan dao ta<br>Yi xiang dao wo jiang yong jiu de shi qu ta ya<br>Wo de xin li tong de xiang dao zai gua<br>Piao liang de gu niang jiu yao jia ren la<br>Xiang dao zhe li wo jiu lei ru yu xia<br>Hen wo bu gan zao yi dian qu biao da ya<br>Zhe jiu shi wo qie nuo fu chu de dai jia<br>Piao liang de gu niang jiu yao jia ren la<br>Wo yao xiang ge ban fa qu zu zhi ta<br>Gan jin wei ta song qu mei gui hua ya<br>Gu niang gu niang ni yao leng jing yi xia<br>Gan jin wei ta song qu mei gui hua ya<br>Gu niang gu niang ni yao leng jing yi xia",
    },
    {
      name: "Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh",
      singer: "Vương Thất Thất",
      path: "https://stream.nixcdn.com/NhacCuaTui980/EmBangLongLamMotNguoiBinhThuongOBenCanhAnh-VuongThatThat-5923718.mp3?st=Kv19WZc6o6rojAaPKChsww&e=1659280191",
      image: "https://i.ytimg.com/vi/O4K-xRUIQBg/maxresdefault.jpg",
      lyrics:
        "Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé shuài lǎo de kuài<br>Wǒ nìngyuàn dāng yīgè chǒubāguài<br>Jījí yòu kě'ài<br>Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé pàng rìzi wàng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Dà xīnwén yòu bàozhàle<br>Shéi yòu dēng shàng dà yǎzhī táng<br>Māmā chǎo de fàn zhēnxiāng<br>Guǎn tā chī wán huì bù huì pàng<br>Wǒ zhàn zài shānpō shàng<br>Yōuzāi yōuzāi xiàng xià wàng<br>Wǒ shì zuìdà de tàiyáng<br>Zhǐguǎn bǎ nǐ zhào liàng<br>Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé shuài lǎo de kuài<br>Wǒ nìngyuàn dāng yīgè chǒubāguài<br>Jījí yòu kě'ài<br>Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé pàng rìzi wàng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Wū dá dá dá dá dá dá dá dá dá dá<br>Wū dá dá dá dá dá dá dá dá dá dá<br>Wū dá dá dá dá dá dá dá dá dá dá<br>Wū dá dá dá dá dá dá dá dá dá dá<br>Wǒ bùshì méiyǒu mèngxiǎng<br>Zhǐshì mèngxiǎng tài kuángwàng<br>Nà jiùhuó zài dāngxià<br>Yī diǎndiǎn biàn dé qiángdà<br>Nǐ zhù zài wǒ xīn shàng<br>Zhǐ shǔyú nǐ de bìfēnggǎng<br>Nǐ shì dúyīwú'èr de rén<br>Zhēnguì qiě shànliáng<br>Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé shuài lǎo de kuài<br>Wǒ nìngyuàn dāng yīgè chǒubāguài<br>Jījí yòu kě'ài<br>Zhǎng dé chǒu huó de jiǔ<br>Zhǎng dé pàng rìzi wàng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Wǒ nìngyuàn zuò yīgè píngfán de rén<br>Péi zài nǐ shēn páng<br>Nà hū kě'ài de rén<br>Hū wū píngfán de rén<br>Hū wū dúyīwú'èr de rén<br>Hū wū ài nǐ de rén",
    },
    {
      name: "Đường Nhân",
      singer: "Tôn Tử Hàm",
      path: "https://stream.nixcdn.com/NhacCuaTui951/DuongNhan-NikoSunTonTuHam-5237437.mp3?st=7Z9ZbHYsptwtQshmTNGXyA&e=1659281763",
      image:
        "https://webqinsmoon.files.wordpress.com/2016/05/8af12bd4gw1f3bld2nclrj20qh0odgod.jpg",
      lyrics:
        "Yī rú zuó rì zhú huǒ bàn biǎn zhōu xiàng suíNǎ yǒu táng rén bú dǒng dé táo zuì<br>Wǒ gū zhōu nǐ yǎo tiǎo àn shàng yǒu yǐn huì<br>Yī tà wàn lǐ yǔ shuí xiàng suí<br>Nǐ chuān cuò le jià zhuāng zěn néng yǒu kuài lè<br>Zài shàng yī céng yān zhī yě bāo měi<br>Yī shēng jiá rán ér zhǐ tíng qián de biān pào<br>Wàng xiǎng tóng nǐ huá fā de xīn zuò fèi<br>Nǐ shuō bú yào zì zuò zì shòu zì jǐ chuàng zào shāng bēi<br>Shuí dōu kě yǐ chè dǐ wàng jì shuí<br>Nǐ shuō guò wǎng bú jí huí shǒu bié hòu huǐ le cái huì<br>Xiǎng fāng shè fǎ de bǎ nǐ zhuī huí<br>Nǐ shuō gū dú shì shī rén yīng gāi jù yǒu de tǐ huì<br>Xiě gē de rén jiù gāi yǒu shāng bēi<br>Wǒ diǎn yī sī zhú huǒ yī shí fàn làn le sī niàn<br>Xiě shǒu xiǎo diào míng zì jiào hòu huǐ<br>Nǐ chuān cuò le jià zhuāng zěn néng yǒu kuài lè<br>Zài shàng yī céng yān zhī yě bāo měi<br>Yī shēng jiá rán ér zhǐ tíng qián de biān pào<br>Wàng xiǎng tóng nǐ huá fā de xīn zuò fèi<br>Nǐ shuō bú yào zì zuò zì shòu zì jǐ chuàng zào shāng bēi<br>Shuí dōu kě yǐ chè dǐ wàng jì shuí<br>Nǐ shuō guò wǎng bú jí huí shǒu bié hòu huǐ le cái huì<br>Xiǎng fāng shè fǎ de bǎ nǐ zhuī huí<br>Nǐ shuō gū dú shì shī rén yīng gāi jù yǒu de tǐ huì<br>Xiě gē de rén jiù gāi yǒu shāng bēi<br>Wǒ diǎn yī sī zhú huǒ yī shí fàn làn le sī niàn<br>Xiě shǒu xiǎo diào míng zì jiào hòu huǐ<br>Nǐ shuō bú yào zì zuò zì shòu zì jǐ chuàng zào shāng bēi<br>Shuí dōu kě yǐ chè dǐ wàng jì shuí<br>Nǐ shuō guò wǎng bú jí huí shǒu bié hòu huǐ le cái huì<br>Xiǎng fāng shè fǎ de bǎ nǐ zhuī huí<br>Nǐ shuō gū dú shì shī rén yīng gāi jù yǒu de tǐ huì<br>Xiě gē de rén jiù gāi yǒu shāng bēi<br>Wǒ diǎn yī sī zhú huǒ yī shí fàn làn le sī niàn<br>Xiě shǒu xiǎo diào míng zì jiào hòu huǐ",
    },
    {
      name: "Nhất Lộ Sinh Hoa",
      singer: "Ôn Dịch Tâm",
      path: "https://f9-stream.nixcdn.com/NhacCuaTui2025/NhatLoSinhHoa--7613976.mp3?st=FojrJ9iagi880v2kAXKqBQ&e=1659281422",
      image:
        "https://i1.sndcdn.com/artworks-jXoil4qXpNLqzSi2-MzAkEg-t500x500.jpg",
      lyrics: "Lười Gõ Lyric!!",
    },
    {
      name: "Bài Ca Đảo Thiên Đường",
      singer: "Châu Thâm",
      path: "https://play.imusicvn.com/stream/TXkSUm7SlVqC",
      image: "https://i.ytimg.com/vi/EhdTwa_Xjj0/maxresdefault.jpg",
      lyrics:
        "Dīng dōng wǒ yǒu yīgè mìmì<br>Qiāoqiāo gàosù nǐ<br>Huānyíng nǐ lái dào tiāntáng rùkǒu<br>Dīng dōng yǒurén zài àn ménlíng<br>Shì shuí zài wàimiàn<br>Bǎ èzuòjù dāng yīzhǒng yóuxì<br>Tīng a shuí zài kūqì<br>Kàn a shuí zài qièqiè sīyǔ<br>Chuāngwài yǒu shuāng yǎnjīng<br>Tā zài shíkè zhùshìzhe nǐ<br>Dīng dōng wǒ zài zhèlǐ děng nǐ<br>Nǐ zài děng wǒ ma<br>Shì shénme yuányīn ràng nǐ hàipà<br>Dīng dōng nǐ huì cáng zài nǎlǐ<br>Bié xiǎng yào táolí<br>Xiǎng táo chū shǒuxīn yǐ láibují<br>Bèi yíwàng de jìyì<br>Bèi nǐ cáng qǐlái de mìmì<br>Bùyào dà shēng hūxī<br>Nǐ yǐ bàolùle nǐ zìjǐ<br>Knock knock wàimiàn xià qǐle yǔ<br>Fàngqì zhēngzhá ba<br>Huǎngyán shuō duōle jiù huì fāxiàn<br>Knock knock shì shuí zài zuò huàishì jiǎzhuāng chéng xìngyùn<br>Wǒ zǒng huì zhǎodào nǐ zài chuáng dǐ<br>Tīng a nǐ zài kǒngjù<br>Kàn a nǐ zài xiēsīdǐlǐ<br>Chuāngwài yǒu shuāng yǎnjīng<br>Tā zài shíkè zhùshìzhe nǐ<br>Dīng dōng yǒurén zài kàn nǐ de guòqù<br>Dīng dōng yǒurén zài kàn nǐ de mìmì<br>Dīng dōng yǒurén zài kàn nǐ de guòqù<br>(Dīng dōng) wǒ táo bù chūqù",
    },
    {
      name: "Con Đường Bình Phàm",
      singer: "Hoa Thần Vũ",
      path: "https://play.imusicvn.com/stream/xVs1XNDFpAY0",
      image:
        "https://lamhoang.vn/wp-content/uploads/2020/08/nhung-hinh-anh-buon-ve-tinh-yeu-cua-con-trai-1bai3.jpg",
      lyrics:
        "Páihuáizhe de zài lùshàng de<br>Nǐ yào zǒu ma via via<br>Yì suì de jiāo'àozhe<br>Nà yě céng shì wǒ de múyàng<br>Fèiténgzhe de bù'ānzhe de<br>Nǐ yào qù nǎ<br>Mí yīyàng de chénmòzhe de<br>Gùshì nǐ zhēn de zài tīng ma<br>Woo x3<br>Gùshì nǐ zhēn de zài tīng ma<br>Wǒ céngjīng kuàguò shān hé dàhǎi<br>Yě chuānguò rénshānrénhǎi<br>Wǒ céngjīng yǒngyǒuzhe yīqiè<br>Zhuǎnyǎn dōu piāosàn rú yān<br>Wǒ céngjīng shīluò shīwàng shīdiào suǒyǒu fāngxiàng<br>Zhídào kànjiàn píngfán cái shì wéiyī de dá'àn<br>Dāng nǐ réngrán hái zài huànxiǎng<br>Nǐ de míngtiān via via<br>Tā huì hǎo ma háishì gèng làn<br>Duì wǒ ér yán shì lìng yītiān<br>Wooo x3<br>Duì wǒ ér yán shì lìng yītiān<br>Wǒ céngjīng huǐle wǒ de yīqiè zhǐ xiǎng yǒngyuǎn dì líkāi<br>Wǒ céngjīng duò rù wúbiān hēi'àn xiǎng zhēngzhá wúfǎ zìbá<br>Wǒ céng jīng xiàng nǐ xiàng tā xiàng nà yěcǎo yěhuā<br>Juéwàngzhe yě kěwàngzhe yě kū yě xiào yě píngfánzhe<br>Woooo<br>Wǒ céngjīng kuàguò shān hé dàhǎi yě chuānguò rénshānrénhǎi<br>Wǒ céngjīng yǒngyǒuzhe yīqiè zhuǎnyǎn dōu piāosàn rú yān<br>Wǒ céngjīng shīluò shīwàng shīdiào suǒyǒu fāngxiàng<br>Zhídào kànjiàn píngfán cái shì wéiyī de dá'àn<br>Wǒ céngjīng huǐle wǒ de yīqiè zhǐ xiǎng yǒngyuǎn dì líkāi<br>Wǒ céngjīng duò rù wúbiān hēi'àn xiǎng zhēng zhá wúfǎ zìbá<br>Wǒ céngjīng xiàng nǐ xiàng tā xiàng nà yěcǎo yěhuā<br>Juéwàngzhe yě kěwàngzhe<br>Yě kū yě xiào yě píngfánzhe",
    },
    {
      name: "Đúng Lúc Gặp Gỡ Người",
      singer: "Lý Ngọc Cương",
      path: "https://play.imusicvn.com/stream/AUK8DXfIfxGQ",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2019/04/25/5/c/d/b/1556183057419_640.jpg",
      lyrics:
        "Wǒmen kūle wǒmen xìaozhe<br>Wǒmen táitóu wàng tiānkōng<br>Xīngxīng hái lìangzhe jǐ kē<br>Wǒmen chàngzhe shíjiān de gē<br>Cái dǒngde xiānghù yǒngbào<br>Dàodǐ shì wèile shénme<br>Yīnwèi wǒ gānghǎo ỳujìan nǐ<br>Líu xìa zújì cái měilì<br>Fēng chuī huā lùo lèi rú yǔ<br>Yīn wéi bùxiǎng fēnlí<br>Yīnwèi gānghǎo ỳujìan nǐ<br>Líu xìa shí nían de qíxǔ<br>Rúguǒ zài xiāngỳu<br>Wǒ xiǎng wǒ hùi jìde nǐ<br>Yīnwèi gānghǎo ỳujìan nǐ<br>Líu xìa zújì cái měilì<br>Fēng chuī huā lùo lèi rú yǔ<br>Yīn wéi bùxiǎng fēnlí<br>Yīnwèi gānghǎo ỳujìan nǐ<br>Líu xìa shí nían de qíxǔ<br>Rúguǒ zài xiāngỳu<br>Wǒ xiǎng wǒ hùi jìde nǐ<br>Yīnwèi wǒ gānghǎo ỳujìan nǐ<br>Líu xìa zújì cái měilì<br>Fēng chuī huā lùo lèi rú yǔ<br>Yīn wéi bùxiǎng fēnlí<br>Yīnwèi gāng hǎo ỳujìan nǐ<br>Líu xìa shí nían de qíxǔ<br>Rúguǒ zài xiāngỳu<br>Wǒ xiǎng wǒ hùi jìde nǐ",
    },
  ],

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },

  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song-group"> 
      <div class="song${
        index === this.currentIndex ? " active" : " "
      }" data-song="${index}">
        <div class="thumb" style="background-image: url('${song.image}')">
        </div>
        <div class="body">
          <h3 class="song-title">${song.name}</h3>
          <p class="song-author">${song.singer}</p>
        </div>
        <div class="option">
          <i class="fa-solid fa-music"></i>
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
      // _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom); // Nếu true thì add class còn false thì remove class
    };

    // Repeat audio
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      // _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
      audio.loop = _this.isRepeat;
    };

    // Auto chuyển tiếp music
    audio.onended = function () {
      nextBtn.click();
    };

    playList.onclick = function (e) {
      const songGroupClick = e.target.closest(".song-group");
      const songClick = e.target.closest(".song:not(.active)");
      const optionClick = e.target.closest(".option");
      const lyricsClick = e.target.closest(".lyrics");
      const lyricsClickClose = e.target.closest(".lyrics-close");
      const lyricsClickScreen = e.target.closest(".lyrics-screen");

      if (songClick || optionClick) {
        // Handle click song
        if (songClick) {
          _this.currentIndex = Number(songClick.getAttribute("data-song")); // Chuyển chuỗi thành number
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Handle click option display lyrics
        if (optionClick) {
          optionClick.classList.toggle("active");
        }

        if (songGroupClick) {
          songGroupClick.children[1].classList.toggle("active");
        }
      }

      if (lyricsClickClose) {
        lyricsClick.children[3].offsetParent.classList.remove("active");

        songGroupClick.firstElementChild.lastElementChild.classList.remove(
          "active"
        );
      }

      if (lyricsClickScreen) {
        const lyricsActiveScreen = lyricsClick.lastElementChild;
        lyricsActiveScreen.classList.toggle("active");
        lyricsActiveScreen.offsetParent.classList.toggle("fullscreen");
      }
    };
  },

  loadCurrentSong: function () {
    titleName.textContent = this.currentSong.name;
    titleSinger.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.src = this.currentSong.path;
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
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
    }, 300);
  },

  lyricsSong: function () {
    this.loadCurrentSong();
  },

  start: function () {
    // this.loadConfig();

    this.defineProperties();

    this.handleEvent();

    this.loadCurrentSong();

    this.render();
  },
};

app.start();
