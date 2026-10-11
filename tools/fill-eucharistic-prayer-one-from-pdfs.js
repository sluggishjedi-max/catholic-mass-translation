const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'missa_data.js');
const textDir = path.join(root, 'tmp', 'pdfs');
const languages = ['vn', 'la', 'jp'];

const sourceFiles = {
  vn: { pdf: '참고자료/미사/미사통상문/베트남어.pdf', text: 'missal-vn.txt' },
  la: { pdf: '참고자료/미사/미사통상문/라틴어.pdf', text: 'missal-la.txt' },
  jp: { pdf: '참고자료/미사/미사통상문/일본어.pdf', text: 'missal-jp.txt' }
};

// Official prayer text transcribed from the PDFs above. Rubrics are excluded because
// the existing data model already stores them in dedicated rubric_* fields.
const blocks = {
  vn: {
    intro: [
      'Lạy Cha rất nhân từ,',
      'Nhờ Đức Giêsu Kitô, Con Cha, Chúa chúng con,',
      'chúng con khẩn khoản nài xin Cha thương nhận',
      'và ban phúc ✠ cho những của lễ hiến dâng, của lễ thượng tiến,',
      'của lễ hy sinh tinh tuyền và thánh thiện này.',
      'Chúng con dâng lên Cha để cầu cách riêng cho Hội Thánh của Cha,',
      'xin Cha thương ban bình an, giữ gìn, hợp nhất',
      'và cai quản Hội Thánh Công giáo khắp hoàn cầu:',
      'đồng thời cũng cầu cho tôi tớ của Cha là Đức Giáo Hoàng [Tên GH.], Đức Giám Mục [Tên GM.] chúng con',
      'và mọi đấng trung thành gìn giữ đức tin công giáo và tông truyền.',
      'Lạy Chúa xin nhớ đến (những) tôi tớ của Chúa là [Tên Thánh] (và [Tên Thánh])',
      'và mọi người đang sum họp nơi đây, mà Chúa biết rõ lòng tin kính và sùng mộ.',
      'Chúng con dâng thay hoặc chính họ dâng lên Chúa hy lễ ca tụng này',
      'cầu cho mình và cho mọi người thân thuộc:',
      'hầu linh hồn được cứu chuộc, thân xác được an lành mạnh khỏe như lòng mong ước:',
      'như vậy, họ được tôn vinh Chúa là Thiên Chúa thật, hằng hữu và hằng sống.'
    ],
    common: [
      'Hiệp thông cùng Hội Thánh, chúng con kính nhớ',
      'trước hết Đức Maria vinh hiển trọn đời đồng trinh,',
      'Mẹ của Đức Giêsu Kitô, là Thiên Chúa và là Chúa chúng con:',
      'sau là Thánh Giuse, bạn Đức Trinh Nữ,',
      'các Thánh Tông Đồ và Tử Đạo: Thánh Phêrô và Phaolô, Anrê,',
      '(Giacôbê, Gioan, Tôma, Giacôbê, Philipphê,',
      'Bartôlômêô, Matthêô, Simon và Tađêô,',
      'Linô, Clêtô, Clementê, Xistô, Cornêliô, Cyprianô,',
      'Laurensô, Crisôgônô, Gioan và Phaolô, Cosma và Đamianô)',
      'cùng toàn thể các Thánh,',
      'vì công nghiệp và lời cầu khẩn của các ngài,',
      'xin Chúa phù hộ chúng con trong mọi sự.',
      '(Nhờ Đức Kitô, Chúa chúng con. Amen.)'
    ],
    hanc: [
      'Vì vậy, lạy Chúa, xin vui lòng chấp nhận lễ vật của chúng con,',
      'là tôi tớ Chúa, và của toàn thể gia đình Chúa,',
      'xin an bài cho đời chúng con được sống trong bình an của Chúa,',
      'cứu chúng con thoát khỏi án phạt đời đời',
      'và nhận chúng con vào đoàn những người Chúa chọn.',
      '(Nhờ Đức Kitô, Chúa chúng con. Amen.)'
    ],
    christmas: [
      'Hiệp thông cùng Hội Thánh, chúng con mừng ngày (đêm) cực thánh,',
      'là ngày (đêm) Đức Maria đã sinh Đấng Cứu Thế cho trần gian,',
      'mà vẫn trinh khiết vẹn tuyền, và chúng con kính nhớ'
    ],
    epiphany: [
      'Hiệp thông cùng Hội Thánh chúng con mừng ngày cực thánh',
      'là ngày Con Một Chúa, đồng hằng hữu với Chúa trong vinh quang,',
      'đã xuất hiện hữu hình, mang xác phàm thực sự như chúng con,',
      'và chúng con kính nhớ'
    ],
    easter: [
      'Hiệp thông cùng Hội Thánh, chúng con mừng đêm (ngày) cực thánh,',
      'là đêm (ngày) Đức Giêsu Kitô, Chúa chúng con đã sống lại về phần xác,',
      'và chúng con kính nhớ'
    ],
    ascension: [
      'Hiệp thông cùng Hội Thánh chúng con mừng ngày cực thánh,',
      'là ngày Con Một Chúa, Chúa chúng con,',
      'đem thân thể yếu hèn của chúng con, đã được kết hợp với Người,',
      'về ngự bên hữu Chúa vinh quang, và chúng con kính nhớ'
    ],
    pentecost: [
      'Hiệp thông cùng Hội Thánh, chúng con mừng ngày cực thánh,',
      'là ngày Chúa Thánh Thần lấy hình lưỡi lửa hiện xuống trên các Tông Đồ,',
      'và chúng con kính nhớ'
    ],
    easterHanc: [
      'Vì vậy, lạy Chúa, xin vui lòng chấp nhận lễ vật của chúng con,',
      'là tôi tớ Chúa, và của toàn thể gia đình Chúa,',
      'chúng con dâng lên Chúa lễ vật này',
      'cũng để cầu cho những người Chúa đã thương tái sinh bởi nước và Thánh Thần,',
      'tha thứ mọi tội lỗi cho họ,',
      'xin an bài cho đời chúng con được sống trong bình an của Chúa,',
      'cứu chúng con thoát khỏi án phạt đời đời',
      'và nhận chúng con vào đoàn những người Chúa chọn.',
      '(Nhờ Đức Kitô, Chúa chúng con. Amen.)'
    ],
    main: [
      'Lạy Chúa, xin thương ban phúc, chấp nhận, chuẩn y,',
      'làm cho những lễ vật này được hoàn hảo và đẹp lòng Chúa,',
      'hầu trở nên cho chúng con Mình và Máu Con chí ái của Chúa',
      'là Đức Giêsu Kitô, Chúa chúng con.',
      'Hôm trước ngày chịu khổ hình,',
      'Người cầm bánh trong tay thánh thiện khả kính,',
      'ngước mắt lên trời',
      'hướng về Chúa là Cha toàn năng của Người,',
      'tạ ơn Chúa, dâng lời chúc tụng,',
      'bẻ ra và trao cho các môn đệ mà nói:',
      'TẤT CẢ CÁC CON HÃY NHẬN LẤY MÀ ĂN:',
      'VÌ NÀY LÀ MÌNH THẦY',
      'SẼ BỊ NỘP VÌ CÁC CON.',
      'Cùng một thể thức ấy, sau bữa ăn tối,',
      'Người cầm chén quý trọng này trong tay thánh thiện khả kính,',
      'cũng tạ ơn Chúa, dâng lời chúc tụng,',
      'và trao cho các môn đệ mà nói:',
      'TẤT CẢ CÁC CON HÃY NHẬN LẤY MÀ UỐNG:',
      'VÌ NÀY LÀ CHÉN MÁU THẦY,',
      'MÁU GIAO ƯỚC MỚI VÀ VĨNH CỬU,',
      'SẼ ĐỔ RA CHO CÁC CON',
      'VÀ NHIỀU NGƯỜI ĐƯỢC THA TỘI',
      'CÁC CON HÃY LÀM VIỆC NÀY MÀ NHỚ ĐẾN THẦY.',
      'Đây là mầu nhiệm đức tin.',
      'Lạy Chúa, chúng con loan truyền Chúa chết và tuyên xưng Chúa sống lại, cho tới khi Chúa đến.',
      '<span class="rubric">Hoặc: </span>Lạy Chúa, mỗi lần ăn bánh và uống chén này, chúng con loan truyền Chúa chịu chết, cho tới khi Chúa đến.',
      '<span class="rubric">Hoặc: </span>Lạy Chúa Cứu Thế, Chúa đã dùng Thánh giá và sự Phục Sinh của Chúa để giải thoát chúng con, xin cứu độ chúng con.',
      'Vì vậy, lạy Chúa, chúng con là tôi tớ Chúa, và toàn thể dân Thánh Chúa,',
      'kính nhớ cuộc khổ hình hồng phúc, sự sống lại từ cõi chết',
      'và lên trời vinh hiển của Đức Kitô, Con Chúa, Chúa chúng con,',
      'chúng con lựa chọn trong những của Chúa đã ban',
      'mà dâng lên trước tôn nhan uy linh Chúa:',
      'lễ vật thanh khiết, lễ vật thánh thiện, lễ vật tinh tuyền,',
      'bánh Thánh ban sự sống vĩnh cửu và chén cứu độ muôn đời.',
      'Xin Chúa ghé mắt nhân từ và khoan hậu nhìn đến những lễ vật này',
      'và thương nhận như đã nhận lễ vật của Abel tôi trung của Chúa,',
      'hy lễ của Abraham tổ phụ chúng con,',
      'hy lễ thánh thiện',
      'và lễ vật tinh tuyền của Melkisêđê, Thượng tế của Chúa.',
      'Lạy Chúa toàn năng, chúng con nài xin Chúa',
      'sai Sứ Thần dâng lễ vật này lên bàn thờ cao sang,',
      'trước tôn nhan uy linh Chúa,',
      'để hết thảy khi tham dự bàn tiệc này, là rước Mình và Máu cực Thánh Con Chúa,',
      'chúng con được ✠ tràn đầy ân phúc bởi trời.',
      '(Nhờ Đức Kitô, Chúa chúng con. Amen.)',
      'Lạy Chúa, xin cũng nhớ đến (những) tôi tớ Chúa là [Tên Thánh] (và [Tên Thánh])',
      'được ghi dấu đức tin, đã ra đi trước chúng con và đang nghỉ giấc bình an.',
      'Lạy Chúa, chúng con xin Chúa thương ban cho các tín hữu ấy, và tất cả mọi người,',
      'đặc biệt các bậc tổ tiên, ông bà, cha mẹ và thân bằng quyến thuộc chúng con,',
      'đã an nghỉ trong Đức Kitô được vào nơi hạnh phúc sáng láng và bình an.',
      '(Nhờ Đức Kitô, Chúa chúng con. Amen.)',
      'Xin cũng cho chúng con, là tôi tớ tội lỗi,',
      'đang hy vọng vào lượng từ bi hải hà của Chúa',
      'được thông phần với cộng đoàn các Thánh Tông Đồ và các Thánh Tử Đạo:',
      'Thánh Gioan, Têphanô, Matthia, Barnaba,',
      '(Inhaxiô, Alexanđrô, Marcellinô, Phêrô,',
      'Phêlixita, Perpetua, Agata, Luxia, Anê, Xêxilia, Anastasia)',
      'và toàn thể các Thánh,',
      'xin Chúa đừng xét theo công nghiệp chúng con,',
      'nhưng rộng lòng tha thứ',
      'mà cho chúng con được đồng phận với các ngài.',
      'Nhờ Đức Kitô, Chúa chúng con.',
      'Lạy Chúa, nhờ Người,',
      'Chúa hằng sáng tạo, thánh hóa, ban sinh lực, giáng phúc',
      'và phân phát cho chúng con tất cả những lễ vật này.'
    ]
  },
  la: {
    intro: [
      'TE ÍGETUR, clementíssime Pater,',
      'per Iesum Christum, Fílium tuum, Dóminum nostrum,',
      'súpplices rogámus ac pétimus, uti accépta hábeas',
      'et benedícas ✠ hæc dona, hæc múnera,',
      'hæc sancta sacrifícia illibáta,',
      'in primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica:',
      'quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum:',
      'una cum fámulo tuo Papa nostro [Nomen Papae]',
      'et Antístite nostro [Nomen Episcopi]',
      'et ómnibus orthodóxis atque cathólicæ et apostólicæ fídei cultóribus.',
      'Meménto, Dómine, famulórum famularúmque tuárum [Nomen baptismale] et [Nomen baptismale],',
      'et ómnium circumstántium, quorum tibi fides cógnita est et nota devótio,',
      'pro quibus tibi offérimus: vel qui tibi ófferunt hoc sacrifícium laudis,',
      'pro se suísque ómnibus: pro redemptióne animárum suárum,',
      'pro spe salútis et incolumitátis suæ:',
      'tibíque reddunt vota sua ætérno Deo, vivo et vero.'
    ],
    common: [
      'Communicántes, et memóriam venerántes,',
      'in primis gloriósæ semper Vírginis Maríæ,',
      'Genetrícis Dei et Dómini nostri Iesu Christi:',
      'sed et beáti Ioseph, eiúsdem Vírginis Sponsi,',
      'et beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli, Andréæ,',
      '(Iacóbi, Ioánnis, Thomæ, Iacóbi, Philíppi,',
      'Bartholomǽi, Matthǽi, Simónis et Thaddǽi:',
      'Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriáni,',
      'Lauréntii, Chrysógoni, Ioánnis et Pauli, Cosmæ et Damiáni)',
      'et ómnium Sanctórum tuórum;',
      'quorum méritis precibúsque concédas,',
      'ut in ómnibus protectiónis tuæ muniámur auxílio.',
      '(Per Christum Dóminum nostrum. Amen.)'
    ],
    hanc: [
      'Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ,',
      'quǽsumus, Dómine, ut placátus accípias:',
      'diésque nostros in tua pace dispónas,',
      'atque ab ætérna damnatióne nos éripi',
      'et in electórum tuórum iúbeas grege numerári.',
      '(Per Christum Dóminum nostrum. Amen.)'
    ],
    christmas: [
      'Communicántes, et (noctem sacratíssimam) diem sacratíssimum celebrántes,',
      '(qua) quo beátæ Maríæ intemeráta virgínitas huic mundo édidit Salvatórem:',
      'sed et memóriam venerántes'
    ],
    epiphany: [
      'Communicántes, et diem sacratíssimum celebrántes,',
      'quo Unigénitus tuus, in tua tecum glória coætérnus,',
      'in veritáte carnis nostræ visibíliter corporális appáruit:',
      'sed et memóriam venerántes'
    ],
    easter: [
      'Communicántes, et (noctem sacratíssimam) diem sacratíssimum celebrántes',
      'Resurrectiónis Dómini nostri Iesu Christi secúndum carnem:',
      'sed et memóriam venerántes'
    ],
    ascension: [
      'Communicántes, et diem sacratíssimum celebrántes,',
      'quo Dóminus noster, unigénitus Fílius tuus,',
      'unítam sibi fragilitátis nostræ substántiam in glóriæ tuæ déxtera collocávit:',
      'sed et memóriam venerántes'
    ],
    pentecost: [
      'Communicántes, et diem sacratíssimum Pentecóstes celebrántes,',
      'quo Spíritus Sanctus Apóstolis in ígneis linguis appáruit:',
      'sed et memóriam venerántes'
    ],
    easterHanc: [
      'Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ,',
      'quam tibi offérimus',
      'pro his quoque, quos regeneráre dignátus es ex aqua et Spíritu Sancto,',
      'tríbuens eis remissiónem ómnium peccatórum,',
      'quǽsumus, Dómine, ut placátus accípias:',
      'diésque nostros in tua pace dispónas,',
      'atque ab ætérna damnatióne nos éripi',
      'et in electórum tuórum iúbeas grege numerári.',
      '(Per Christum Dóminum nostrum. Amen.)'
    ],
    main: [
      'Quam oblatiónem tu, Deus, in ómnibus, quǽsumus,',
      'benedíctam, adscríptam, ratam,',
      'rationábilem, acceptabilémque fácere dignéris:',
      'ut nobis Corpus et Sanguis fiat dilectíssimi Fílii tui, Dómini nostri Iesu Christi.',
      'Qui, prídie quam paterétur,',
      'accépit panem in sanctas ac venerábiles manus suas,',
      'et elevátis óculis in cælum',
      'ad te Deum Patrem suum omnipoténtem,',
      'tibi grátias agens benedíxit, fregit,',
      'dedítque discípulis suis, dicens:',
      'ACCÍPITE ET MANDUCÁTE EX HOC OMNES:',
      'HOC EST ENIM CORPUS MEUM,',
      'QUOD PRO VOBIS TRADÉTUR.',
      'Símili modo, postquam cenátum est,',
      'accípiens et hunc præclárum cálicem in sanctas ac venerábiles manus suas,',
      'item tibi grátias agens benedíxit,',
      'dedítque discípulis suis, dicens:',
      'ACCÍPITE ET BÍBITE EX EO OMNES:',
      'HIC EST ENIM CALIX SÁNGUINIS MEI',
      'NOVI ET ÆTÉRNI TESTAMÉNTI,',
      'QUI PRO VOBIS ET PRO MULTIS EFFUNDÉTUR',
      'IN REMISSIÓNEM PECCATÓRUM.',
      'HOC FÁCITE IN MEAM COMMEMORATIÓNEM.',
      'Mystérium fídei.',
      'Mortem tuam annuntiámus, Dómine, et tuam resurrectiónem confitémur, donec vénias.',
      '<span class="rubric">Vel: </span>Quotiescúmque manducámus panem hunc et cálicem bíbimus, mortem tuam annuntiámus, Dómine, donec vénias.',
      '<span class="rubric">Vel: </span>Salvátor mundi, salva nos, qui per crucem et resurrectiónem tuam liberásti nos.',
      'Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta,',
      'eiúsdem Christi, Fílii tui, Dómini nostri, tam beátæ passiónis,',
      'necnon et ab ínferis resurrectiónis,',
      'sed et in cælos gloriósæ ascensiónis:',
      'offérimus præcláræ maiestáti tuæ de tuis donis ac datis',
      'hóstiam puram, hóstiam sanctam, hóstiam immaculátam,',
      'Panem sanctum vitæ ætérnæ et Cálicem salútis perpétuæ.',
      'Supra quæ propítio ac seréno vultu respícere dignéris:',
      'et accépta habére, sícuti accépta habére dignátus es',
      'múnera púeri tui iusti Abel, et sacrifícium Patriárchæ nostri Abrahæ,',
      'et quod tibi óbtulit summus sacérdos tuus',
      'Melchísedech, sanctum sacrifícium, immaculátam hóstiam.',
      'Súpplices te rogámus, omnípotens Deus:',
      'iube hæc perférri per manus sancti Angeli tui in sublíme altáre tuum,',
      'in conspéctu divínæ maiestátis tuæ;',
      'ut, quotquot ex hac altáris participatióne sacrosánctum Fílii tui Corpus et Sánguinem sumpsérimus,',
      'omni benedictióne cælésti et grátia repleámur.',
      '(Per Christum Dóminum nostrum. Amen.)',
      'Meménto étiam, Dómine, famulórum famularúmque',
      'tuárum [Nomen baptismale] et [Nomen baptismale],',
      'qui nos præcessérunt cum signo fídei, et dórmiunt in somno pacis.',
      'Ipsis, Dómine, et ómnibus in Christo quiescéntibus,',
      'locum refrigérii, lucis et pacis, ut indúlgeas, deprecámur.',
      '(Per Christum Dóminum nostrum. Amen.)',
      'Nobis quoque peccatóribus fámulis tuis, de',
      'multitúdine miseratiónum tuárum sperántibus,',
      'partem áliquam et societátem donáre dignéris',
      'cum tuis sanctis Apóstolis et Martýribus:',
      'cum Ioánne, Stéphano, Matthía, Bárnaba,',
      '(Ignátio, Alexándro, Marcellíno, Petro,',
      'Felicitáte, Perpétua, Agatha, Lúcia, Agnéte, Cæcília, Anastásia)',
      'et ómnibus Sanctis tuis:',
      'intra quorum nos consórtium, non æstimátor mériti,',
      'sed véniæ, quǽsumus, largítor',
      'admítte. Per Christum Dóminum nostrum.',
      'Per quem hæc ómnia, Dómine,',
      'semper bona creas, sanctíficas, vivíficas, benedícis,',
      'et præstas nobis.'
    ]
  },
  jp: {
    intro: [
      'いつくしみ深い父よ、',
      '御子わたしたちの主イエス・キリストによって、',
      'いまつつしんでお願いいたします。',
      'この汚れのない聖なるささげものを受け入れ、✠ 祝福してください。',
      'わたしたちは、まず聖なる普遍の教会のために、これをあなたにささげます。',
      '全世界に広がる教会に平和を与え、これを守り、一つに集め、治めてください。',
      '教皇 [教皇名]、わたしたちの司教 [司教名]、',
      'また、使徒からの普遍の信仰を正しく伝えるすべての人のためにこの供えものをささげます。',
      '聖なる父よ、あなたに信頼する人々（[洗礼名]）を心に留めてください。',
      'また、ここに集うすべての人を心に留めてください。',
      'その信仰と敬虔な心をあなたはご存じです。',
      'わたしたちとすべての親しい人々のためにこの賛美のいけにえをささげ、',
      'あがないと救いと平穏を願って、',
      '永遠のまことの神、あなたに祈ります。'
    ],
    common: [
      '全教会の交わりの中で、',
      'わたしたちはまず、神である主イエス・キリストの母、',
      '栄光に満ちた終生おとめマリアを思い起こし、',
      '聖ヨセフ、使徒と殉教者、',
      'ペトロとパウロ、アンデレ、',
      '（ヤコブ、ヨハネ、トマス、ヤコブ、フィリポ、',
      'バルトロマイ、マタイ、シモンとタダイ、',
      'リノ、クレト、クレメンス、シスト、',
      'コルネリオ、チプリアノ、ラウレンチオ、クリソゴノ、',
      'ヨハネとパウロ、コスマとダミアノ）',
      'そして、すべての聖人を思い起こします。',
      '彼らのいさおしと取り次ぎによって、わたしたちをいつも守り強めてください。',
      '（わたしたちの主イエス・キリストによって。アーメン。）'
    ],
    hanc: [
      '聖なる父よ、',
      'わたしたち奉仕者とあなたの家族の',
      'この奉献を受け入れてください。',
      'あなたの平和を日々わたしたちに与え、',
      '永遠の滅びから救い、選ばれた者の集いに加えてください。',
      '（わたしたちの主イエス・キリストによって。アーメン。）'
    ],
    christmas: [
      '全教会の交わりの中で、わたしたちは、',
      '汚れのないおとめマリアによって世に救い主が与えられたこの聖なる夜（日）を祝います。',
      'わたしたちはまず、神である主イエス・キリストの母を思い起こします。'
    ],
    epiphany: [
      '全教会の交わりの中で、わたしたちは、',
      '栄光のうちにあなたとともに永遠の神であるひとり子が、',
      'まことの人間として、見えるからだをもって現れたこの聖なる日を祝います。',
      'わたしたちはまず、神である主イエス・キリストの母を思い起こします。'
    ],
    easter: [
      '全教会の交わりの中で、わたしたちは、',
      '主イエス・キリストが、まことに復活されたこの聖なる夜（日）を祝います。',
      'わたしたちはまず、神である主イエス・キリストの母を思い起こします。'
    ],
    ascension: [
      '全教会の交わりの中で、わたしたちは、',
      '御ひとり子が人となり、わたしたちの弱さを身に受けて、',
      'あなたの栄光の右の座に高めてくださったこの聖なる日を祝います。',
      'わたしたちはまず、神である主イエス・キリストの母を思い起こします。'
    ],
    pentecost: [
      '全教会の交わりの中で、わたしたちは、',
      '聖霊が使徒たちの上に炎の舌のような形で現れたこの聖なる日を祝います。',
      'わたしたちはまず、神である主イエス・キリストの母を思い起こします。'
    ],
    easterHanc: [
      '聖なる父よ、',
      'わたしたち奉仕者とあなたの家族の',
      'この奉献を受け入れてください。',
      '水と聖霊によって新しく生まれ、',
      'すべての罪のゆるしを受けた人々のためにもこれをささげます。',
      'あなたの平和を日々わたしたちに与え、',
      '永遠の滅びから救い、選ばれた者の集いに加えてください。',
      '（わたしたちの主イエス・キリストによって。アーメン。）'
    ],
    main: [
      '神よ、この供えものを祝福し、受け入れ、',
      'み心にかなうまことのいけにえとしてください。',
      'わたしたちのために、最愛のひとり子、',
      '主イエス・キリストの御からだと御血になりますように。',
      '主イエスは受難の前夜、',
      '聖なる手にパンを取り、',
      '全能の父、',
      '神であるあなたを仰ぎ、',
      '賛美と感謝をささげ、裂いて、',
      '弟子に与えて仰せになりました。',
      '「皆、これを取って食べなさい。',
      'これはあなたがたのために渡される',
      'わたしのからだ（である）。」',
      '食事の後に同じように、',
      '聖なる手に、このとうとい杯を取り、',
      '賛美と感謝をささげ、',
      '弟子に与えて仰せになりました。',
      '「皆、これを受けて飲みなさい。',
      'これはわたしの血の杯、',
      'あなたがたと多くの人のために流されて',
      '罪のゆるしとなる新しい永遠の契約の血（である）。',
      'これをわたしの記念として行いなさい。」',
      '信仰の神秘。',
      '主よ、あなたの死を告げ知らせ、復活をほめたたえます。再び来られるときまで。',
      '<span class="rubric">または </span>主よ、このパンを食べ、この杯を飲むたびに、あなたの死を告げ知らせます。再び来られるときまで。',
      '<span class="rubric">または </span>十字架と復活によってわたしたちを解放された世の救い主、わたしたちをお救いください。',
      '聖なる父よ、わたしたち奉仕者と聖なる民も、',
      'いま、御子わたしたちの主キリストのとうとい受難、',
      '死者のうちからの復活、栄光に満ちた昇天を記念し、',
      'あなたが与えてくださったたまものの中から、',
      '清く、聖なる、汚れのないいけにえ、',
      '永遠のいのちのパンと救いの杯を、',
      '栄光の神、あなたにささげます。',
      'このささげものをいつくしみ深く顧み、快く受け入れてください。',
      '義人アベルの供えもの、',
      '太祖アブラハムのいけにえ、',
      'また、大祭司メルキセデクが供えた聖なるささげもの、',
      '汚れのないいけにえを受け入れてくださったように。',
      '全能の神よ、つつしんでお願いいたします。',
      'このささげものをみ使いによって、',
      'あなたの栄光に輝く祭壇に運ばせてください。',
      'いま、この祭壇で、御子の聖なるからだと血にあずかるわたしたちが、',
      '天の祝福と恵みで満たされますように。',
      '（わたしたちの主イエス・キリストによって。アーメン。）',
      '聖なる父よ、信仰をもってわたしたちに先だち、',
      '安らかに眠る人々（[洗礼名]）を心に留めてください。',
      '神よ、',
      'この人々とキリストのうちに眠りについたすべての人に、',
      '慰めと光と安らぎをお与えください。',
      '（わたしたちの主イエス・キリストによって。アーメン。）',
      'あなたの豊かなあわれみに信頼する',
      '罪深いわたしたちを、',
      '使徒と殉教者の集いに受け入れてください。',
      '洗礼者ヨハネ、ステファノ、マチア、バルナバ、',
      '（イグナチオ、アレキサンドロ、',
      'マルチェリノとペトロ、',
      'フェリチタス、ペルペトゥア、アガタ、ルチア、',
      'アグネス、セシリア、アナスタシア）',
      'そして、すべての聖人にならう恵みを、',
      'わたしたちの行いによるのではなく、',
      'あなたのあわれみによってお与えください。',
      '聖なる父よ、キリストによって、あなたは常にこのよいものを造り、',
      '聖なるものとし、これにいのちを与え、祝福し、',
      'わたしたちに与えてくださいます。'
    ]
  }
};

const ranges = {
  intro: range(0, 13),
  common: range(14, 26),
  hanc: range(27, 32),
  christmas: range(33, 35),
  epiphany: range(54, 57),
  easter: range(76, 78),
  easterHanc: range(91, 98),
  ascension: range(99, 102),
  pentecost: range(121, 123)
};

const mainRanges = [
  range(142, 144),
  range(145, 150),
  range(151, 153),
  range(155, 158),
  range(159, 163),
  [165],
  range(166, 168),
  range(169, 175),
  range(176, 180),
  range(181, 186),
  range(187, 192),
  range(193, 203),
  range(204, 206)
];

const mainSlices = {
  vn: [[0, 4], [4, 10], [10, 13], [13, 17], [17, 23], [23, 24], [24, 27], [27, 34], [34, 39], [39, 45], [45, 51], [51, 62], [62, 65]],
  la: [[0, 4], [4, 10], [10, 13], [13, 17], [17, 23], [23, 24], [24, 27], [27, 34], [34, 39], [39, 45], [45, 51], [51, 62], [62, 65]],
  jp: [[0, 4], [4, 10], [10, 13], [13, 17], [17, 22], [22, 23], [23, 26], [26, 33], [33, 38], [38, 44], [44, 50], [50, 61], [61, 64]]
};

const commonCopies = [
  [range(15, 26), range(36, 47)],
  [range(15, 26), range(58, 69)],
  [range(15, 26), range(79, 90)],
  [range(15, 26), range(103, 114)],
  [range(15, 26), range(124, 135)]
];

const hancCopies = [
  [range(27, 32), range(48, 53)],
  [range(27, 32), range(70, 75)],
  [range(27, 32), range(115, 120)],
  [range(27, 32), range(136, 141)]
];

const pdfAssertions = {
  vn: ['Lạy Cha rất nhân từ', 'Hiệp thông cùng Hội Thánh', 'Vì vậy, lạy Chúa', 'Lạy Chúa, xin thương ban phúc'],
  la: ['TE ÍGETUR', 'Communicántes', 'Hanc ígitur', 'Quam oblatiónem'],
  jp: ['いつくしみ深い父よ', '全教会の交わりの中で', '聖なる父よ', '神よ、この供えものを祝福し']
};

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function plainLength(text) {
  return String(text || '').replace(/<[^>]+>/g, '').replace(/\s+/g, '').length || 1;
}

function splitLongest(parts) {
  let bestIndex = 0;
  let bestLength = -1;
  parts.forEach((part, index) => {
    const length = plainLength(part);
    if (length > bestLength) {
      bestLength = length;
      bestIndex = index;
    }
  });
  const source = parts[bestIndex];
  const visible = source.replace(/<[^>]+>/g, '');
  let cut = Math.floor(visible.length / 2);
  const candidates = [];
  for (let i = 1; i < source.length - 1; i += 1) {
    if (/[\s,;:、，。]/u.test(source[i])) candidates.push(i + 1);
  }
  if (candidates.length) cut = candidates.reduce((a, b) => Math.abs(b - cut) < Math.abs(a - cut) ? b : a);
  const left = source.slice(0, cut).trim();
  const right = source.slice(cut).trim();
  if (!left || !right) throw new Error(`Could not split source phrase: ${source}`);
  parts.splice(bestIndex, 1, left, right);
}

function formatSourcePart(part) {
  const text = String(part || '').trim();
  if (!text || text.includes('<')) return text;
  const letters = text.replace(/[^A-Za-zÀ-ỹÆŒÍÓÚÝĐ]/gu, '');
  if (letters.length > 8 && letters === letters.toUpperCase()) return `<b>${text}</b>`;
  return text;
}

function alignBlock(parts, targetIndexes, form) {
  const prepared = parts.map(formatSourcePart).filter(Boolean);
  while (prepared.length < targetIndexes.length) splitLongest(prepared);
  const sourceWeights = prepared.map(plainLength);
  const targetWeights = targetIndexes.map(index => plainLength(form[index].text_en || form[index].text_kr));
  const sourceTotal = sourceWeights.reduce((sum, value) => sum + value, 0);
  const targetTotal = targetWeights.reduce((sum, value) => sum + value, 0);
  const sourceCum = sourceWeights.reduce((out, value) => (out.push((out.at(-1) || 0) + value), out), []);
  const targetCum = targetWeights.reduce((out, value) => (out.push((out.at(-1) || 0) + value), out), []);
  const boundaries = [0];
  for (let group = 1; group < targetIndexes.length; group += 1) {
    const desired = targetCum[group - 1] / targetTotal;
    const min = boundaries.at(-1) + 1;
    const max = prepared.length - (targetIndexes.length - group);
    let best = min;
    let bestError = Infinity;
    for (let candidate = min; candidate <= max; candidate += 1) {
      const error = Math.abs(sourceCum[candidate - 1] / sourceTotal - desired);
      if (error < bestError) {
        best = candidate;
        bestError = error;
      }
    }
    boundaries.push(best);
  }
  boundaries.push(prepared.length);
  return targetIndexes.map((_, index) => prepared.slice(boundaries[index], boundaries[index + 1]).join('<br>'));
}

function findMatching(text, start, open, close) {
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === "'" || char === '"' || char === '`') quote = char;
    else if (char === open) depth += 1;
    else if (char === close && --depth === 0) return index;
  }
  throw new Error(`Unmatched ${open} at ${start}`);
}

function formOneArrayBounds(js) {
  const eucharist = js.indexOf("id: '3.3 eucharist'");
  const forms = js.indexOf('forms: {', eucharist);
  const token = js.indexOf("'1': [", forms);
  const start = js.indexOf('[', token);
  return [start, findMatching(js, start, '[', ']')];
}

function rowObjectBounds(arrayText) {
  const rows = [];
  let index = 1;
  while (index < arrayText.length - 1) {
    if (arrayText[index] === '{') {
      const end = findMatching(arrayText, index, '{', '}');
      rows.push([index, end]);
      index = end + 1;
    } else index += 1;
  }
  return rows;
}

function replaceProperty(rowText, property, value) {
  const pattern = new RegExp(`(${property}\\s*:\\s*)(?:'(?:\\\\.|[^'\\\\])*'|"(?:\\\\.|[^"\\\\])*")`);
  if (!pattern.test(rowText)) throw new Error(`Missing ${property} in row`);
  return rowText.replace(pattern, `$1${JSON.stringify(value)}`);
}

function verifySources() {
  for (const lang of languages) {
    const pdfPath = path.join(root, sourceFiles[lang].pdf);
    const textPath = path.join(textDir, sourceFiles[lang].text);
    if (!fs.existsSync(pdfPath)) throw new Error(`Missing PDF source: ${pdfPath}`);
    if (!fs.existsSync(textPath)) throw new Error(`Missing PDF text cache: ${textPath}`);
    const text = fs.readFileSync(textPath, 'utf8').normalize('NFC');
    for (const phrase of pdfAssertions[lang]) {
      if (!text.includes(phrase.normalize('NFC'))) throw new Error(`${lang} PDF text is missing: ${phrase}`);
    }
  }
}

function buildValues(form) {
  const values = Object.fromEntries(languages.map(lang => [lang, Array(form.length).fill('')]));
  for (const lang of languages) {
    for (const [name, indexes] of Object.entries(ranges)) {
      const aligned = alignBlock(blocks[lang][name], indexes, form);
      indexes.forEach((rowIndex, itemIndex) => { values[lang][rowIndex] = aligned[itemIndex]; });
    }
    mainRanges.forEach((indexes, blockIndex) => {
      const [start, explicitEnd] = mainSlices[lang][blockIndex];
      const end = explicitEnd === undefined ? blocks[lang].main.length : explicitEnd;
      const aligned = alignBlock(blocks[lang].main.slice(start, end), indexes, form);
      indexes.forEach((rowIndex, itemIndex) => { values[lang][rowIndex] = aligned[itemIndex]; });
    });
    for (const [sourceIndexes, targetIndexes] of commonCopies) {
      targetIndexes.forEach((targetIndex, index) => { values[lang][targetIndex] = values[lang][sourceIndexes[index]]; });
    }
    for (const [sourceIndexes, targetIndexes] of hancCopies) {
      targetIndexes.forEach((targetIndex, index) => { values[lang][targetIndex] = values[lang][sourceIndexes[index]]; });
    }
  }
  return values;
}

function main() {
  verifySources();
  delete require.cache[require.resolve(dataPath)];
  require(dataPath);
  const eucharist = globalThis.missaData.find(item => item.id === '3.3 eucharist');
  const form = eucharist && eucharist.forms && eucharist.forms['1'];
  if (!Array.isArray(form) || form.length !== 207) throw new Error(`Unexpected Eucharistic Prayer I rows: ${form && form.length}`);
  const values = buildValues(form);
  const rubricOnly = new Set([154, 164]);
  for (const lang of languages) {
    const missing = values[lang].map((value, index) => (!rubricOnly.has(index) && !value ? index : -1)).filter(index => index >= 0);
    if (missing.length) throw new Error(`${lang} generated blank rows: ${missing.join(', ')}`);
  }

  const js = fs.readFileSync(dataPath, 'utf8');
  const [arrayStart, arrayEnd] = formOneArrayBounds(js);
  const arrayText = js.slice(arrayStart, arrayEnd + 1);
  const rowBounds = rowObjectBounds(arrayText);
  if (rowBounds.length !== form.length) throw new Error(`Parsed ${rowBounds.length} row objects, expected ${form.length}`);
  let rebuilt = '';
  let cursor = 0;
  rowBounds.forEach(([start, end], rowIndex) => {
    rebuilt += arrayText.slice(cursor, start);
    let rowText = arrayText.slice(start, end + 1);
    if (!rubricOnly.has(rowIndex)) {
      for (const lang of languages) rowText = replaceProperty(rowText, `text_${lang}`, values[lang][rowIndex]);
    }
    rebuilt += rowText;
    cursor = end + 1;
  });
  rebuilt += arrayText.slice(cursor);
  rebuilt = rebuilt.replace(/[ \t]+(?=\r?$)/gm, '');
  const output = js.slice(0, arrayStart) + rebuilt + js.slice(arrayEnd + 1);
  if (process.argv.includes('--write')) {
    const backup = path.join(root, 'tmp', `missa_data.backup-ep1-pdf-${Date.now()}.js`);
    fs.copyFileSync(dataPath, backup);
    fs.writeFileSync(dataPath, output, 'utf8');
    const mirror = path.join(root, 'JS file', 'missa_data.mass-data-copy.js');
    if (fs.existsSync(mirror)) fs.writeFileSync(mirror, output, 'utf8');
    console.log(JSON.stringify({ wrote: dataPath, backup, mirror: fs.existsSync(mirror) ? mirror : null }, null, 2));
  }
  console.log(JSON.stringify({
    rows: form.length,
    filled: Object.fromEntries(languages.map(lang => [lang, values[lang].filter(Boolean).length])),
    rubricOnly: [...rubricOnly],
    sources: sourceFiles
  }, null, 2));
}

main();
