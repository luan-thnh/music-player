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
const optionsBtn = $(".option");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
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
      name: "At My Worst",
      singer: "Pink Sweat$",
      path: "./assets/audio/at_my_worst.mp3",
      image: "./assets/img/at_my_worst.jpg",
      lyrics:
        "Can I call you baby?<br>Can you be my friend?<br>Can you be my lover up until the very end?<br>Let me show you love, oh, I don't pretend<br>Stick by my side even when the world is givin' in, yeah<br>Oh, oh, oh, don't<br>Don't you worry<br>I'll be there, whenever you want me<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth<br>'Cause it's only you, nobody new, I put you first<br>And for you, girl, I swear I'll do the worst<br>If you stay forever, let me hold your hand<br>I can fill those places in your heart no else can<br>Let me show you love, oh, I don't pretend, yeah<br>I'll be right here, baby, you know I'll sink or swim<br>Oh, oh, oh, don't<br>Don't you worry<br>I'll be there, whenever you want me<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth, yeah<br>'Cause it's only you, nobody new, I put you first (put you first)<br>And for you, girl, I swear I'll do the worst<br>I need somebody who can love me at my worst<br>No, I'm not perfect, but I hope you see my worth<br>'Cause it's only you, nobody new, I put you first<br>And for you, girl, I swear I'll do the worst<br>",
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
      name: "Rap Thập Cẩm",
      singer: "Tú Lee",
      path: "./assets/audio/rap_thap_cam.mp3",
      image: "./assets/img/rap_thap_cam.jpg",
      lyrics:
        "Xe chốt và pháo là những thứ mà em tao xăm mình<br>Xe tốt quần áo là những thứ mà tao bao năm rình<br>Phường khóm công an là nơi tao đang đăng hình<br>Hẻm 48, ngay từ xưa đã không là yên bình<br>Sáng ngày hôm qua cũng giống như sáng của ngày hôm nay<br>Việc tao làm cũng như mọi ngày<br>Thằng Karik đã thấy<br>Back to my hood<br>Tao làm việc của tao<br>Khi tất cả trở thành vấn đề tao để dao làm việc của tao<br>Tao không gây hấn nhưng hễ ai đụng là đập<br>Và hàng nguội nằm trong túi làm cho quần thụng và thấp<br>Anh em khi gặp tao cầm bia cụng bay nắp<br>Còn tụi mày khi gặp tao vào 48 tao chấp<br>con đốt điếu cần để cúng cho Di Lặc<br>Cám ơn người đã ban quần áo con đang mặt<br>Chén cơm con đang ăn ....cong cần con đang cắt<br>Cuốc sống cũa con hôm nay<br>Con cám ơn người đã để mắt tới con<br>Cuộc sống này có bao nhiêu điều đẹp<br>Nhìn đâu đâu cũng đẹp....từ cây bông cho đến đôi dép , cây đẹp nhà đẹp<br>Ngoài đường các em gái đang chay xe trên đường Nguyễn Trãi e thẹn nhìn con<br>Con đang đươc bay , bay như người say<br>Quên đi hết cuộc đời này nêu như con chết đêm nay<br>Cũng fai hút cạn điếu này . Nghe một bài nhac thật hay<br>Tận hưởng đến giọt cuối cùng . Mặt kệ rượu cay<br>Một điếu , cho anh em người cùng con vào sinh ra tử<br>Một điếu , cho cha mẹ Tội bất hiếu này thật khó tha thứ<br>Một điếu , dành cho trời Một điếu dành cho đất<br>Một điếu.........Dành cho những người lạy trước bàn thờ khi con mất<br>Tụi mày chỉ biết hút, không chịu đi khám phá...<br>Đứng dậy cầm sách bút, mày đi với tao mà đánh giá<br>tao đưa mày về châu thổ xem thuyền và đánh cá<br>Còn mấy thằng nhóc mà không có thích, vui lòng mày tránh ra<br>Mời...!! Bước tới đất miền Tây, tao cho mày nghe tiếng đàn cò<br>Muôn màu của sông nước và mày sẽ thấy các đàn cò<br>Mày đi thì đừng có lo, những thứ ở đây là đáng có<br>Đói cũng * có chết tài nguyên thiên nhiên đã ban cho...<br>Tụi tao... bát ngát Đồng Sen ở Tháp Mười<br>Miệt vườn có Cái Bè - hoa quả xoài cát, bưởi<br>Còn đa dạng hải sản, lúc nào cũng phải tươi<br>Tao nói mày nghe, rừng tràm Trà Sư oxy là phải hửi<br>Còn chén cơm tụi mày đang ăn là nhờ cánh đồng của ngoại tao<br>Dân miền Tây chất phát, hòa đồng, thích ngoại giao<br>Mày qua Long Xuyên, Chợ Nổi alo cho bạn tao<br>Nó sẽ đưa mày đi thật xa và hỏi muốn chơi cái loại nào<br>Đi về Sóc Trăng quê tao mà chơi đi...<br>Tụi tao chèo tụi tao lái...Khoái!!<br>Tụi tao hái, tụi tao quấn cho tụi mày high<br>Thấy thì đừng có hú lên là sao đường còn dài<br>Okay! Tao cho mày cưỡi con dơi sải cánh 1m2<br>Uống đi!! Anh em tao nói mày uống đi!!<br>Mày cầm ly rượu mày uống đi!!<br>Mày chơi xả láng tới sáng về sớm....<br>Cho người ta kết mày.Uống đi!!<br>Rượu Xuân Thạnh mày, uống đi<br>Từ bên Trà Vinh đó, uống đi<br>Anh em ta xỉn, anh em ta tới nái luôn...Mày uống đi....<br>Và tao từng sống ở Sài Gòn như ở đợ<br>Da tụi tao đen bóng, nơi tao sinh là ở chợ<br>Mà thôi, mà thôi đi về quê tao nếu mày muốn thấy điều đáng sợ<br>Và tao có thằng bạn đang đỉnh, ở đất Châu Đốc là gangster<br>Nó cứ nhắc với tao ở biên giới có cái khu là CasinoThằng anh đang canh bên dưới...<br>Người đi vào, đi ra, đi vô<br>Nhưng tao nắm hết tỉ số<br>Thích nhâm nhi trà atisoKhi đêm xuống, phố lên đèn<br>Nó nói là đẹp như Tokyo<br>Nghe radio phát sóng đầu làng... đang tuyên dương anh Tư Đỉa<br>Thu chi của thằng đầu đàn, khi nó có tiền, anh Tư xỉa<br>Nhưng mà tụi tao tuyên bố là dân miền Tây chơi đúng nghĩa<br>Đầu có kề súng chỉa, mày kêu tao khai thì còn khuya<br>Tụi mày còn nhớ câu chuyện giết người mà không cần dùng súng hay dao<br>Nhang, đèn, tiếng lóng, kèm theo bùa chú là thầy tao<br>Ổng giao tao đi thông não mấy thằng không biết sống sao<br>Đứng dậy đi và nên động não, để ngày nào đó được giống tao",
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
      name: "Mơ Hồ",
      singer: "DJChip x Nhism",
      path: "./assets/audio/mo_ho.mp3",
      image: "./assets/img/mo_ho.jpg",
      lyrics:
        "Ngồi nhìn xa xôi một mình trong bóng tối<br>Chỉ một mình tôi lạnh lùng co ro buốt<br>Bỗng nước mắt rơi nhẹ đắng khoé môi<br>Rồi một ngày nữa lại trôi<br>Ngồi tìm ai đây giật mình anh chưa biết<br>Mình tìm ai đây<br>Rồi vội vàng gom lấy chút ít bóng đêm<br>Tìm phút ấm êm<br>Một ngày đong đếm tìm ai<br>Chợt về giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ mơ hồ<br>Ngồi nhìn xa xôi một mình trong bóng tối<br>Chỉ một mình tôi lạnh lùng co ro buốt<br>Bỗng nước mắt rơi nhẹ đắng khoé môi<br>Rồi một ngày nữa lại trôi<br>Ngồi tìm ai đây (tìm ai đây)<br>Giật mình anh chưa biết<br>Mình tìm ai đây (đi tìm ai đấy)<br>Rồi vội vàng gom lấy chút ít bóng đêm<br>Tìm phút ấm êm<br>Một ngày đong đếm tìm ai<br>Chợt về giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ<br>Giữa sương mờ<br>Loay hoay anh ngỡ như đang mơ em<br>Ngày nào vẫn hoang sơ<br>Ai biết cứ mong chờ (ai không biết cứ mong chờ)<br>Rồi khi bóng đêm tàn<br>Hoang mang giữ lấy giấc mơ đang tan dần (và chỉ là giấc mơ)<br>Khi anh lang thang một mình bơ vơ<br>Tìm nỗi nhớ mơ hồ<br>Lang thang một mình bơ vơ tìm nỗi nhớ mơ hồ",
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
      lyrics: "Lười Gõ Lyric!!",
    },
    {
      name: "Cô Nương Xinh Đẹp Phải Đi Lấy Chồng Rồi",
      singer: "Long Mai Tử",
      path: "https://stream.nixcdn.com/NhacCuaTui928/CoNuongXinhDepPhaiDiLayChongRoi-VA-4588745.mp3?st=SosNHUjLzdj2pn6c2848Mg&e=1659281204",
      image: "https://i1.sndcdn.com/artworks-000569147624-vjuarg-t500x500.jpg",
      lyrics: "Lười Gõ Lyric!!",
    },
    {
      name: "Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh",
      singer: "Hoàng Y Nhung",
      path: "https://stream.nixcdn.com/NhacCuaTui980/EmBangLongLamMotNguoiBinhThuongOBenCanhAnh-VuongThatThat-5923718.mp3?st=Kv19WZc6o6rojAaPKChsww&e=1659280191",
      image: "https://i.ytimg.com/vi/O4K-xRUIQBg/maxresdefault.jpg",
      lyrics: "Lười Gõ Lyric!!",
    },
    {
      name: "Đường Nhân",
      singer: "Tôn Tử Hàm",
      path: "https://stream.nixcdn.com/NhacCuaTui951/DuongNhan-NikoSunTonTuHam-5237437.mp3?st=7Z9ZbHYsptwtQshmTNGXyA&e=1659281763",
      image:
        "https://webqinsmoon.files.wordpress.com/2016/05/8af12bd4gw1f3bld2nclrj20qh0odgod.jpg",
      lyrics: "Lười Gõ Lyric!!",
    },
    {
      name: "Nhất Lộ Sinh Hoa",
      singer: "Ôn Dịch Tâm",
      path: "https://f9-stream.nixcdn.com/NhacCuaTui2025/NhatLoSinhHoa--7613976.mp3?st=FojrJ9iagi880v2kAXKqBQ&e=1659281422",
      image:
        "https://i1.sndcdn.com/artworks-jXoil4qXpNLqzSi2-MzAkEg-t500x500.jpg",
      lyrics: "Lười Gõ Lyric!!",
    },
  ],

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
          <button class="lyrics-btn">Đóng</button>
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

    // Tiến độ audio
    // audio.ontimeupdate = function () {
    //   const { duration, currentTime } = audio;
    //   progress.max = duration;
    //   progress.value = currentTime;

    //   console.log(progress.value);
    //   // const progressPercent = Math.floor(
    //   //   (audio.currentTime / audio.duration) * 100
    //   // );
    //   // progress.value = progressPercent;
    //   // const color =
    //   //   "linear-gradient(90deg, rgb(245, 135, 10)" +
    //   //   progress.value +
    //   //   "%, rgba(255, 255, 255, 0.2)" +
    //   //   progress.value +
    //   //   "%)";

    //   // progress.style.background = color;
    //   // }
    // };

    // Tua audio
    // progress.onchange = function (e) {

    //   audio.currentTime = progress.value;
    // };

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
      const songGroupClick = e.target.closest(".song-group");
      const lyricsClick = e.target.closest(".lyrics");

      if (songClick || optionClick) {
        // Handle click song
        if (songClick) {
          _this.currentIndex = Number(songClick.getAttribute("data-song")); // Chuyển chuỗi thành number
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Handle click option display lyrics
        optionClick.classList.toggle("active");
        songGroupClick.children[1].classList.toggle("active");
      }

      // Note: Làm không đúm chuẩn
      const lyricsClickBtn = lyricsClick.children[3];
      lyricsClickBtn.onclick = function () {
        lyricsClickBtn.offsetParent.classList.remove("active");
      };
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

    console.log(newIndex, this.currentIndex);
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
    this.defineProperties();

    this.handleEvent();

    this.loadCurrentSong();

    this.render();
  },
};

app.start();
