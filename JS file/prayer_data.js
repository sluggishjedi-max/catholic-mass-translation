(function(global) {
  const prayerCategoryLabels = {
    "common": {
      "KR": "공통기도문",
      "VN": "Kinh nguyện chung",
      "EN": "Common Prayers",
      "JP": "共通の祈り",
      "LA": "Preces communes"
    },
    "rosary": {
      "KR": "묵주기도",
      "VN": "Kinh Mân Côi",
      "EN": "Rosary",
      "JP": "ロザリオ",
      "LA": "Rosarium"
    },
    "stations_of_cross": {
      "KR": "십자가의 길",
      "VN": "Đàng Thánh Giá",
      "EN": "Stations of the Cross",
      "JP": "十字架の道行き",
      "LA": "Via Crucis"
    },
    "litany": {
      "KR": "호칭기도",
      "VN": "Kinh cầu",
      "EN": "Litanies",
      "JP": "連祷",
      "LA": "Litaniae"
    },
    "sacrament": {
      "KR": "성사·예식",
      "VN": "Bí tích và nghi thức",
      "EN": "Sacraments and Rites",
      "JP": "秘跡・式次第",
      "LA": "Sacramenta et ritus"
    },
    "Various": {
      "KR": "여러가지 기도",
      "VN": "Các Kinh Nguyện Khá",
      "EN": "Various Prayers",
      "JP": "種々の祈り",
      "LA": "Preces Variae"
    },
    "national": {
      "KR": "국가별 고유 기도문",
      "VN": "Kinh Nguyện Riêng Từng Nước",
      "EN": "Local Prayers",
      "JP": "各国の祈り",
      "LA": "Preces locales"
    }
  };
  const prayers = [
    {
      "id": "001.sign_of_cross",
      "category": "common",
      "titles": {
        "KR": "성호경",
        "VN": "Dấu Thánh Giá (đơn)",
        "EN": "Sign of the Cross",
        "JP": "十字架のしるし",
        "LA": "Signum Crucis"
      },
      "texts": {
        "KR": "<rubric>십자성호를 그으며</rubric>성부와 성자와 성령의 이름으로. 아멘.",
        "VN": "Nhân danh Cha\nvà Con\nvà Thánh Thần. A-men.",
        "EN": "<rubric>Making the Sign of the Cross</rubric>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
        "JP": "<rubric>十字架のしるしをしながら</rubric>父と子と聖霊のみ名によって。アーメン。",
        "LA": "<rubric>Signans se signo crucis</rubric>In nomine Patris, et Filii, et Spiritus Sancti. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "001.sign_of_cross",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성호경",
        "Dấu Thánh Giá",
        "Sign of the Cross",
        "十字架のしるし",
        "Signum Crucis",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Generalia",
        "Dấu Thánh Giá (đơn)"
      ]
    },
    {
      "id": "001-1.sign_of_cross_double",
      "category": "common",
      "titles": {
        "KR": "성호경 (이중십자)",
        "VN": "Dấu Thánh Giá (kép)",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa con, vì dấu thánh giá, xin chữa chúng con\ncho khỏi kẻ thù. Nhân danh Cha\nvà Con\nvà Thánh Thần. A-men. L",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "001-1.sign_of_cross_double",
        "common",
        "Kinh nguyện chung",
        "Dấu Thánh Giá (kép)",
        "Kinh Hằng Ngày",
        "공통기도문",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성호경 (이중십자)"
      ]
    },
    {
      "id": "002.lords_prayer",
      "category": "common",
      "titles": {
        "KR": "주님의 기도",
        "VN": "Kinh Lạy Cha",
        "EN": "Our Father",
        "JP": "主の祈り",
        "LA": "Pater Noster"
      },
      "texts": {
        "KR": "하늘에 계신 우리 아버지,\n아버지의 이름이 거룩히 빛나시며\n아버지의 나라가 오시며\n아버지의 뜻이 하늘에서와 같이\n땅에서도 이루어지소서!\n오늘 저희에게 일용할 양식을 주시고\n저희에게 잘못한 이를 저희가 용서하오니\n저희 죄를 용서하시고\n저희를 유혹에 빠지지 않게 하시고\n악에서 구하소서.\n아멘.",
        "VN": "Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. A-men.",
        "EN": "Our Father, who art in heaven,\nhallowed be thy name;\nthy kingdom come,\nthy will be done\non earth as it is in heaven.\nGive us this day our daily bread,\nand forgive us our trespasses,\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil.\nAmen.",
        "JP": "天におられるわたしたちの父よ、\nみ名が聖とされますように。\nみ国が来ますように。\nみこころが天に行われるとおり地にも行われますように。\nわたしたちの日ごとの糧を今日も お与えください。\nわたしたちの罪をおゆるしください。わたしたちも人をゆるします。\nわたしたちを誘惑におちいらせず、\n悪からお救いください。\nアーメン",
        "LA": "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum.\nFiat voluntas tua, sicut in caelo et in terra.\nPanem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris.\nEt ne nos inducas in tentationem, sed libera nos a malo.\nAmen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "002.lords_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "주님의 기도",
        "Kinh Lạy Cha",
        "Our Father",
        "主の祈り",
        "Pater Noster",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      "id": "003.hail_mary",
      "category": "common",
      "titles": {
        "KR": "성모송",
        "VN": "Kinh Kính Mừng",
        "EN": "Hail Mary",
        "JP": "アヴェ・マリアの祈り",
        "LA": "Ave Maria"
      },
      "texts": {
        "KR": "은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 계시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.",
        "VN": "Kính mừng Ma-ri-â, đầy ơn phúc, Đức Chúa Trời, ở cùng Bà, Bà có phúc lạ hơn mọi người nữ và Giê-su con lòng Bà gồm phúc lạ. Thánh Ma-ri-a, Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. A-men.",
        "EN": "Hail, Mary, full of grace,\nthe Lord is with thee.\nBlessed art thou among women\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death.\nAmen.",
        "JP": "アヴェ、マリア、恵みに満ちた方、\n主はあなたとともにおられます。\nあなたは女のうちで祝福され、\nご胎内の御子イエスも祝福されています。\n神の母聖マリア、\nわたしたち罪びとのために、\n今も、死を迎える時も、お祈りください。\nアーメン。",
        "LA": "Ave Maria, gratia plena, Dominus tecum.\nBenedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.\nSancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae.\nAmen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "003.hail_mary",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성모송",
        "Kinh Kính Mừng",
        "Hail Mary",
        "アヴェ・マリアの祈り",
        "Ave Maria",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      "id": "004.glory_be",
      "category": "common",
      "titles": {
        "KR": "영광송",
        "VN": "Kinh Sáng Danh",
        "EN": "Glory Be",
        "JP": "栄唱",
        "LA": "Gloria Patri"
      },
      "texts": {
        "KR": "<rubric>밑줄 부분에서 고개를 숙이며</rubric><U>영광이 성부와 성자와 성령께</U>\n처음과 같이\n이제와 항상 영원히.\n아멘.",
        "VN": "Sáng danh Đức Chúa Cha\nvà Đức Chúa Con\nvà Đức Chúa Thánh Thần. Như đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. A-men.",
        "EN": "<rubric>Bowing the head at the underlined part</rubric>\n<U>Glory be to the Father, and to the Son, and to the Holy Spirit,</u>\nas it was in the beginning, is now,\nand ever shall be, world without end.\nAmen.",
        "JP": "<rubric>下線部で頭を下げながら</rubric><U>栄光は父と子と聖霊に。</U>\n初めのように、今もいつも世々に。\nアーメン。",
        "LA": "<rubric>Caput inclinans ad verba sublineata</rubric><U>Gloria Patri, et Filio, et Spiritui Sancto.</U>\nSicut erat in principio, et nunc, et semper,\net in saecula saeculorum.\nAmen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "004.glory_be",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "영광송",
        "Kinh Sáng Danh",
        "Glory Be",
        "栄唱",
        "Gloria Patri",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      "id": "005.apostles_creed",
      "category": "common",
      "titles": {
        "KR": "사도 신경",
        "VN": "Kinh Tin Kính",
        "EN": "Apostles' Creed",
        "JP": "使徒信条",
        "LA": "Symbolum Apostolorum"
      },
      "texts": {
        "KR": "전능하신 천주 성부\n천지의 창조주를 저는 믿나이다.\n그 외아들 우리 주 예수 그리스도님\n<rubric>밑줄 부분에서 모두 깊은 절을 한다.</rubric><U>성령으로 인하여 동정 마리아께 잉태되어 나시고</U>\n본시오 빌라도 통치 아래서 고난을 받으시고\n십자가에 못 박혀 돌아가시고 묻히셨으며\n저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고\n하늘에 올라 전능하신 천주 성부 오른편에 앉으시며\n그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다.\n성령을 믿으며\n거룩하고 보편된 교회와 모든 성인의 통공을 믿으며\n죄의 용서와 육신의 부활을 믿으며\n영원한 삶을 믿나이다.\n아멘.",
        "VN": "Tôi tin kính Đức Chúa Trời\nlà Cha phép tắc vô cùng\ndựng nên trời đất.\nTôi tin kính Đức Chúa Giê-su Ki-tô\nlà Con Một Đức Chúa Cha\ncùng là Chúa chúng tôi.\nBởi phép Đức Chúa Thánh Thần\nmà Người xuống thai, sinh bởi bà Ma-ri-a đồng trình,\nchịu nạn đời quan Phong-xi-ô Phi-la-tô, chịu đóng đinh trên cây thánh giá, chết và táng xác,\nxuống ngục tổ tông,\nngày thứ ba bởi trong kẻ chết mà sống lại,\nlên trời\nngự bên hữu Đức Chúa Cha phép tắc vô cùng,\nngày sau bởi trời lại xuống phán xét kẻ sống và kể chết.\nTôi tin kính Đức Chúa Thánh Thần.\nTôi tin có Hội Thánh hằng có ở khắp thế này,\ncác thánh thông công.\nTôi tin phép tha tội. J\nTôi tin xác loài người ngày sau sống lại.\nTôi tin hằng sống vậy. A-emn.",
        "EN": "I believe in God,\nthe Father almighty,\nCreator of heaven and earth,\nand in Jesus Christ, his only Son, our Lord,\n<rubric>All bow deeply at the underlined part</rubric><u>who was conceived by the Holy Spirit,\nborn of the Virgin Mary,</u>\nsuffered under Pontius Pilate,\nwas crucified, died and was buried;\nhe descended into hell;\non the third day he rose again from the dead;\nhe ascended into heaven,\nand is seated at the right hand of God the Father almighty;\nfrom there he will come to judge the living and the dead.\nI believe in the Holy Spirit,\nthe holy catholic Church,\nthe communion of saints,\nthe forgiveness of sins,\nthe resurrection of the body,\nand life everlasting.\nAmen.",
        "JP": "天地の創造主、\n全能の父である神を信じます。\n父のひとり子、わたしたちの主\nイエス・キリストを信じます。\n<rubric>下線部で皆で深く礼をする</rubric><u>主は聖霊によってやどり、\nおとめマリアから生まれ、</u>\nポンティオ・ピラトのもとで苦しみを受け、\n十字架につけられて死に、葬られ、\n陰府（よみ）に下り、\n三日目に死者のうちから復活し、\n天に昇って、\n全能の父である神の右の座に着き、\n生者（せいしゃ）と死者を裁くために来られます。\n聖霊を信じ、\n聖なる普遍の教会、\n聖徒の交わり、\n罪のゆるし、\nからだの復活、\n永遠のいのちを信じます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### ニケア・コンスタンチノープル信条\nこの「ニケア・コンスタンチノープル信条」は、第1回コンスタンチノーブル公会議（381年）後に作られた。\nわたしは信じます。唯一の神、\n全能の父、\n天と地、\n見えるもの、見えないもの、すべてのものの造り主を。\nわたしは信じます。唯一の主イエス・キリストを。\n主は神のひとり子、\nすべてに先立って父より生まれ、\n神よりの神、光よりの光、まことの神よりのまことの神、\n造られることなく生まれ、父と一体。\nすべては主によって造られました。\n主は、わたしたち人類のため、\nわたしたちの救いのために天からくだり、\n聖霊によって、おとめマリアよりからだを受け、\n人となられました。\nポンティオ・ピラトのもとで、わたしたちのために十字架につけられ、\n苦しみを受け、葬られ、\n聖書にあるとおり三日目に復活し、\n天に昇り、父の右の座に着いておられます。\n主は、生者（せいしゃ）と死者を裁くために栄光のうちに再び来られます。\nその国は終わることがありません。\nわたしは信じます。主であり、いのちの与え主である聖霊を。\n聖霊は、父と子から出て、\n父と子とともに礼拝され、栄光を受け、\nまた預言者をとおして語られました。\nわたしは、聖なる、普遍の、使徒的、唯一の教会を信じます。\n罪のゆるしをもたらす唯一の洗礼を認め、\n死者の復活と\n来世のいのちを待ち望みます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### 洗礼式の信仰宣言\n天地の創造主、\n全能の、神である父を信じます。\n父のひとり子、おとめマリアから生まれ、\n苦しみを受けて葬られ、\n死者のうちから復活して、\n父の右におられる主イエス・キリストを信じます。\n聖霊を信じ、聖なる普遍の教会、\n聖徒の交わり、罪のゆるし、\nからだの復活、永遠のいのちを信じます。",
        "LA": "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae.\nEt in Iesum Christum, Filium eius unicum, Dominum nostrum,\n<rubric>Omnes profunde se inclinant ad verba sublineata</rubric><u>qui conceptus est de Spiritu Sancto, natus ex Maria Virgine</u>,\npassus sub Pontio Pilato, crucifixus, mortuus,\net sepultus, descendit ad infernos, tertia die resurrexit a mortuis,\nascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.\nCredo in Spiritum Sanctum,\nsanctam Ecclesiam catholicam, sanctorum communionem, \nremissionem peccatorum, carnis resurrectionem,\nvitam aeternam.\nAmen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Symbolum fidei"
      },
      "tags": [
        "005.apostles_creed",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "사도 신경",
        "Kinh Tin Kính Các Thánh Tông Đồ",
        "Apostles' Creed",
        "使徒信条",
        "Symbolum Apostolorum",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Symbolum fidei",
        "Kinh Tin Kính"
      ]
    },
    {
      "id": "006.nicene_creed",
      "category": "common",
      "titles": {
        "KR": "니케아-콘스탄티노폴리스 신경",
        "VN": "Kinh Tin Kính (đọc trong thánh lễ)",
        "EN": "Nicene Creed",
        "JP": "ニケア・コンスタンチノープル信条",
        "LA": "Symbolum Nicaenum"
      },
      "texts": {
        "KR": "한 분이신 하느님을\n저는 믿나이다.\n전능하신 아버지,\n하늘과 땅과 유형무형한 만물의 창조주를 믿나이다.\n또한 한 분이신 주 예수 그리스도, 하느님의 외아들\n영원으로부터 성부에게서 나신 분을 믿나이다.\n하느님에게서 나신 하느님, 빛에서 나신 빛\n참 하느님에게서 나신 참 하느님으로서,\n창조되지 않고 나시어\n성부와 한 본체로서 만물을 창조하셨음을 믿나이다.\n성자께서는 저희 인간을 위하여, 저희 구원을 위하여\n하늘에서 내려오셨음을 믿나이다.\n(밑줄 부분에서 모두 고개를 깊이 숙인다.)\n또한 성령으로 인하여 동정 마리아에게서 육신을 취하시어 사람이 되셨음을 믿나이다.\n본시오 빌라도 통치 아래서 저희를 위하여\n십자가에 못박혀 수난하고 묻히셨으며\n성서 말씀대로 사흗날에 부활하시어\n하늘에 올라 성부 오른편에 앉아계심을 믿나이다.\n그분께서는 산 이와 죽은 이를 심판하러\n영광 속에 다시 오시리니\n그분의 나라는 끝이 없으리이다.\n또한 주님이시며 생명을 주시는 성령을 믿나이다.\n성령께서는 성부와 성자에게서 발하시고\n성부와 성자와 더불어 영광과 흠숭을 받으시며\n예언자들을 통하여 말씀하셨나이다.\n하나이고 거룩하고 보편되며\n사도로부터 이어오는 교회를 믿나이다.\n죄를 씻는 유일한 세례를 믿으며\n죽은 이들의 부활과 내세의 삶을 기다리나이다.\n아멘.",
        "VN": "Tôi tin kính một Thiên Chúa, là cha toàn năng, Đấng tạo thành trời đất muôn vật hữu hình và vô hinh. ° Tôi tin kính một Chúa Giê-su Kitô, Con Một Thiên Chúa, - sinh bởi Đức Chúa Cha từ trước muôn đời. ~ Người là Thiên Chúa bởi Thiên Chúa, Ánh sáng bởi ánh sánh, - Thiên Chúa bởi Thiên Chúa thật, ~ được sinh ra mà không phải tạo thành, đồng bản tính với Đức Chúa Cha, - nhờ Người mà muôn vật được tạo thành. - Vì loài người chúng tôi, về để cứu rỗi chúng tôi. - Người đã từ trời xuống thế (từ «Bởi bhéb” đến «uà đã làm người” mọi người cúi mình). Bởi phép Đức Chúa Thánh Thần, - Người đã nhậtp thể trong lòng Trinh Nữ Ma-ri-a, và đã làm người. = Người chịu đóng đinh vào thập giá vì chúng tôi, = chịu khổ hình và mai táng thời Phongxiô Philatô. - Ngày thứ ba Người sống lại như lời Thánh Kinh, - Người lên trời, ngự bên hữu Đức Chúa Cha. Và Người sẽ trở lại trong vinh quang, để phán xét kẻ sống và kẻ chết, - Nước Người sẽ không bao giờ cùng.",
        "EN": "I believe in one God,\nthe Father almighty,\nmaker of heaven and earth,\nof all things visible and invisible.\nI believe in one Lord Jesus Christ,\nthe Only Begotten Son of God,\nborn of the Father before all ages.\nGod from God, Light from Light,\ntrue God from true God,\nbegotten, not made, consubstantial with the Father;\nthrough him all things were made.\nFor us men and for our salvation\nhe came down from heaven,\nand by the Holy Spirit was incarnate of the Virgin Mary,\nand became man.\nFor our sake he was crucified under Pontius Pilate,\nhe suffered death and was buried,\nand rose again on the third day\nin accordance with the Scriptures.\nHe ascended into heaven\nand is seated at the right hand of the Father.\nHe will come again in glory\nto judge the living and the dead\nand his kingdom will have no end.\nI believe in the Holy Spirit, the Lord, the giver of life,\nwho proceeds from the Father and the Son,\nwho with the Father and the Son is adored and glorified,\nwho has spoken through the prophets.\nI believe in one, holy, catholic and apostolic Church.\nI confess one Baptism for the forgiveness of sins\nand I look forward to the resurrection of the dead\nand the life of the world to come.\nAmen.",
        "JP": "わたしは信じます。唯一の神、\n全能の父、\n天と地、\n見えるもの、見えないもの、すべてのものの造り主を。\nわたしは信じます。唯一の主イエス・キリストを。\n主は神のひとり子、\nすべてに先立って父より生まれ、\n神よりの神、光よりの光、まことの神よりのまことの神、\n造られることなく生まれ、父と一体。\nすべては主によって造られました。\n主は、わたしたち人類のため、\nわたしたちの救いのために天からくだり、\n聖霊によって、おとめマリアよりからだを受け、\n人となられました。\nポンティオ・ピラトのもとで、わたしたちのために十字架につけられ、\n苦しみを受け、葬られ、\n聖書にあるとおり三日目に復活し、\n天に昇り、父の右の座に着いておられます。\n主は、生者（せいしゃ）と死者を裁くために栄光のうちに再び来られます。\nその国は終わることがありません。\nわたしは信じます。主であり、いのちの与え主である聖霊を。\n聖霊は、父と子から出て、\n父と子とともに礼拝され、栄光を受け、\nまた預言者をとおして語られました。\nわたしは、聖なる、普遍の、使徒的、唯一の教会を信じます。\n罪のゆるしをもたらす唯一の洗礼を認め、\n死者の復活と\n来世のいのちを待ち望みます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### 洗礼式の信仰宣言\n天地の創造主、\n全能の、神である父を信じます。\n父のひとり子、おとめマリアから生まれ、\n苦しみを受けて葬られ、\n死者のうちから復活して、\n父の右におられる主イエス・キリストを信じます。\n聖霊を信じ、聖なる普遍の教会、\n聖徒の交わり、罪のゆるし、\nからだの復活、永遠のいのちを信じます。",
        "LA": "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium.\nEt in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula. Deum de Deo, Lumen de Lumine, Deum verum de Deo vero, genitum non factum, consubstantialem Patri; per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis. [kneel] Et incarnatus est de Spiritu Sancto ex Maria Virgine, et homo factus est. [stand] Crucifixus etiam pro nobis sub Pontio Pilato, passus et sepultus est, et resurrexit tertia die, secundum Scripturas, et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria, iudicare vivos et mortuos, cuius regni non erit finis.\nEt in Spiritum Sanctum, Dominum et vivificantem, qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur: qui locutus est per prophetas.\nEt unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et expecto resurrectionem mortuorum, et vitam venturi saeculi. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Symbolum fidei"
      },
      "tags": [
        "006.nicene_creed",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "니케아-콘스탄티노폴리스 신경",
        "Nicene Creed",
        "ニケア・コンスタンチノープル信条",
        "Symbolum Nicaenum",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Symbolum fidei",
        "Kinh Tin Kính (đọc trong thánh lễ)",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "008.ten_commandments",
      "category": "common",
      "titles": {
        "KR": "십계명",
        "VN": "Kinh Mười Điều Răn",
        "EN": "Ten Commandments",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "일. 한 분이신 하느님을 흠숭하여라.\n이. 하느님의 이름을 함부로 부르지 마라.\n삼. 주일을 거룩히 지내라.\n사. 부모에게 효도하여라.\n오. 사람을 죽이지 마라.\n육. 간음하지 마라.\n칠. 도둑질을 하지 마라.\n팔. 거짓 증언을 하지 마라.\n구. 남의 아내를 탐내지 마라.\n십. 남의 재물을 탐내지 마라.",
        "VN": "Đạo Đức Chúa Trời có mười điều răn Thứ nhất: Thờ phượng Đức Chúa Trời và kính mến Ngài trên hết mọi sự. Thứ hai `: Chớ kêu tên Đức Chúa Trời vô cớ. Thứ ba. . : Giữ ngày Chúa nhật, Thứ bốn. : Thảo kính cha mẹ, Thứ năm: Chớ giết người, Thứ sáu. : Chớ làm sự dâm dục, Thứ bảy: : Chớ lấy của người, Thứ tám. : Chớ làm chứng dối, Thứ chín. : Chớ muốn vợ chồng người, Thứ mười: Chớ tham của người. Mười điều răn ấy tóm về hai này mà chớ trước kính mến một Đức Chúa Trời trên hết mọi sự, sau lại yêu người như mình ta vậy. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "008.ten_commandments",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "십계명",
        "Ten Commandments",
        "주요 기도",
        "Kinh Mười Điều Răn",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "007.examination_of_conscience",
      "category": "common",
      "titles": {
        "KR": "반성 기도",
        "VN": "Kinh Trước Khi Xét Mình",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "주님, 오늘 생각과 말과 행위로 지은 죄와\n의무를 소홀히 한 죄를 자세히 살피고\n그 가운데 버릇이 된 죄를 깨닫게 하소서.\n아멘.",
        "VN": "Lạy Chúa là sự sáng linh hồn con, xin soi sáng cho con\nđược biét mọi tội con đã phạm\ntrong ngày hôm nay (hoặc: trong những ngày vừa qua): hoặc lo, hoặc nói, hoặc làm điều gì lỗi nghĩa cùng Chúa, con lại xin Chúa vì công nghiệp Đức Chúa Giê-su, ban ơn cho con được ăn năn ghét tội, cùng dốc lòng chừa thật. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "007.examination_of_conscience",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "반성 기도",
        "주요 기도",
        "Kinh Trước Khi Xét Mình",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "009.confiteor",
      "category": "common",
      "titles": {
        "KR": "고백 기도",
        "VN": "Kinh Thú Nhận",
        "EN": "Confiteor",
        "JP": "",
        "LA": "Confiteor"
      },
      "texts": {
        "KR": "전능하신 하느님과 형제들에게 고백하오니\n생각과 말과 행위로 죄를 많이 지었으며\n자주 의무를 소홀히 하였나이다.\n가슴을 치며 제 탓이요\n가슴을 치며 제 탓이요\n가슴을 치며 저의 큰 탓이옵니다.\n그러므로 간절히 바라오니\n평생 동정이신 성모 마리아와\n모든 천사와 성인과 형제들은\n저를 위하여 하느님께 빌어 주소서.\n(┼전능하신 하느님, 저희에게 자비를 베푸시어\n죄를 용서하시고\n영원한 생명으로 이끌어 주소서.)\n아멘.",
        "VN": "Tôi thú nhận cùng Thiên Chúa toàn năng\nvà cùng anh chị em: Tôi đã phạm tội nhiều\ntrong tư tưởng, lời nói, việc làm\nvà những điều thiếu sót. Lỗi tại tôi, lỗi tại tôi, lỗi tại tôi mọi đàng. Vì vậy tôi xin Đức Bà Ma-ri-a trọn đời đồng trinh, các thiên thần, các thánh và anh chị em\nkhẩn cầu cho tôi trước toà Thiên Chúa, Chúa chúng ta. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "009.confiteor",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "고백 기도",
        "Kinh Thú Nhận",
        "Confiteor",
        "주요 기도",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "010.act_of_contrition",
      "category": "common",
      "titles": {
        "KR": "통회 기도",
        "VN": "Kinh Ăn Năn Tội",
        "EN": "Act of Contrition",
        "JP": "痛悔の祈り",
        "LA": "Actus Contritionis"
      },
      "texts": {
        "KR": "하느님,\n제가 죄를 지어\n참으로 사랑받으셔야 할 하느님의 마음을 아프게 하였기에\n악을 저지르고 선을 멀리한 모든 잘못을\n진심으로 뉘우치나이다.\n하느님의 은총으로 속죄하고\n다시는 죄를 짓지 않으며\n죄지을 기회를 피하기로 굳게 다짐하오니\n우리 구세주 예수 그리스도의 수난 공로를 보시고\n저에게 자비를 베풀어 주소서.\n아멘.",
        "VN": "Lạy Chúa (con), Chúa là Đấng trọn tốt trọn lành vô cùng, Chúa đã dựng nên con, và cho Con Chúa ra đời\nchịu nạn\nchịu chết vì con, mà con đã cả lòng phần nghịch lỗi nghĩa cùng Chúa, thì con lo buồn đau đớn\ncùng chê ghét mọi tội con trên hết mọi sự. Con dốc lòng chừa cải, và nhờ ơn Chúa, thì con sẽ lánh xa dịp tội\ncùng làm việc đền tội cho xứng. A-men.",
        "EN": "O my God,\nI am heartily sorry for having offended you,\nand I detest all my sins because of your just punishments,\nbut most of all because they offend you, my God,\nwho are all good and deserving of all my love.\nI firmly resolve, with the help of your grace,\nto sin no more\nand to avoid the near occasions of sin.\nAmen.\n<rubric>Or:</rubric>O my God,\nI am sorry and repent with all my heart\nfor all the wrong I have done\nand for the good I have failed to do,\nbecause by sinning I have offended you,\nwho are all good and worthy to be loved above all things.\nI firmly resolve, with the help of your grace,\nto do penance,\nto sin no more,\nand to avoid the occasions of sin.\nThrough the merits of the Passion of our Savior Jesus Christ,\nLord, have mercy.\n<rubric>Or:</rubric>Lord Jesus, Son of God,\nhave mercy on me, a sinner.",
        "JP": "いつくしみ深いイエスよ、あなたの尊いみ足のもとにひれ伏して、\n心の底から罪のゆるしを願います。\n特に自分の罪を、あなたの限りない愛に背くものとして悔やみ憎みます。\n再び罪を犯してあなたに背くより、むしろ死ぬことを望み、\n生涯、すべてに超えてあなたを愛することを決心します。",
        "LA": "Deus meus,\nex toto corde poenitet me omnium meorum peccatorum, eaque detestor, quia peccando, non solum poenas a Te iuste statutas promeritus sum,\nsed praesertim quia offendi Te, summum bonum, ac dignum qui super omnia diligaris.\nIdeo firmiter propono, adiuvante gratia Tua,\nde cetero me non peccaturum peccandique occasiones proximas fugiturum.\nAmen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "010.act_of_contrition",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "통회 기도",
        "Act of Contrition",
        "Kinh Ăn Năn Tội",
        "Actus Contritionis",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Basic Prayers",
        "日々の祈り",
        "Generalia",
        "痛悔の祈り"
      ]
    },
    {
      "id": "011a.act_of_faith",
      "category": "common",
      "titles": {
        "KR": "신덕송",
        "VN": "Kinh Tin",
        "EN": "Act of Faith",
        "JP": "",
        "LA": "Actus Fidei"
      },
      "texts": {
        "KR": "하느님, 하느님께서는 진리의 근원이시며\n그르침이 없으시므로\n계시하신 진리를\n교회가 가르치는 대로 굳게 믿나이다.",
        "VN": "Lạy Chúa (con), con tin thật có một Đức Chúa Trời\nlà Đấng thưởng phạt vô cùng. Con lại tin thật Đức Chúa Trời có Ba Ngôi, mà Ngôi Thứ Hai đã xuống thế làm người\nchịu nạn chịu chết mà chuộc tội cho thiên hạ. Bấy nhiêu điều ấy\ncùng các điều Hội Thánh dạy, thì con tin vững vàng, vì Chúa là Đấng thông minh\nvà chân thật vô cùng\nđã phán truyền cho Hội Thánh. A-men.",
        "EN": "O my God, I firmly believe that you are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that your divine Son became man and died for our sins and that he will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches because you have revealed them who are eternal truth and wisdom, who can neither deceive nor be deceived. In this faith I intend to live and die. Amen.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "011a.act_of_faith",
        "011.acts_of_faith_hope_love",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "삼덕송",
        "신덕송",
        "Kinh Tin",
        "Act of Faith",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Actus Fidei",
        "Basic Prayers"
      ]
    },
    {
      "id": "011b.act_of_hope",
      "category": "common",
      "titles": {
        "KR": "망덕송",
        "VN": "Kinh Cậy",
        "EN": "Act of Hope",
        "JP": "",
        "LA": "Actus Spei"
      },
      "texts": {
        "KR": "하느님, 하느님께서는 자비의 근원이시며\n저버림이 없으시므로\n예수 그리스도의 공로를 통하여 주실\n구원의 은총과 영원한 생명을 바라나이다.",
        "VN": "Lạy Chúa (con), con trông cậy vững vàng, vì công nghiệp Đức Chúa Giê-su, thì Chúa sẽ ban ơn cho con\ngiữ đạo nên ở đời này, cho. ngày sau được lên thiên đàng\nxem thấy mặt Đức Chúa Trời\nhưởng phúc đời đời, vì Chúa là Đấng phép tắc\nvà lòng lành vô cùng\nđã phán hứa sự ấy, chẳng có lẽ nào sai được. A-men.",
        "EN": "O Lord God, I hope by your grace for the pardon of all my sins and after life here to gain eternal happiness because you have promised it who are infinitely powerful, faithful, kind, and merciful. In this hope I intend to live and die. Amen.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "011b.act_of_hope",
        "011.acts_of_faith_hope_love",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "삼덕송",
        "망덕송",
        "Kinh Cậy",
        "Act of Hope",
        "주요 기도",
        "Kinh Hằng Ngày",
        "Actus Spei",
        "Basic Prayers"
      ]
    },
    {
      "id": "011c.act_of_love",
      "category": "common",
      "titles": {
        "KR": "애덕송",
        "VN": "Kinh Kính Mến",
        "EN": "Act of Love",
        "JP": "",
        "LA": "Actus Caritatis"
      },
      "texts": {
        "KR": "하느님, 하느님께서는 사랑의 근원이시며\n한없이 좋으시므로\n마음을 다하여 주님을 사랑하며\n이웃을 제 몸같이 사랑하나이다.",
        "VN": "Lạy Chúa (con), con kính mến Chúa hết lòng hết sức\ntrên hết mọi sự, vì Chúa là Đấng trọn tốt trọn lành vô cùng, lại vì Chúa\nthì con thương yêu người ta\nnhư mình con vậy. A-men.",
        "EN": "O Lord God, I love you above all things and I love my neighbor for your sake because you are the highest, infinite and perfect good, worthy of all my love. In this love I intend to live and die. Amen.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "Basic Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "011c.act_of_love",
        "011.acts_of_faith_hope_love",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "삼덕송",
        "애덕송",
        "Kinh Mến",
        "Act of Love",
        "주요 기도",
        "Kinh Kính Mến",
        "Actus Caritatis",
        "Kinh Hằng Ngày",
        "Basic Prayers"
      ]
    },
    {
      "id": "012.offering_prayer",
      "category": "common",
      "titles": {
        "KR": "봉헌 기도",
        "VN": "Kinh Phú Dâng",
        "EN": "Morning Offering",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "하느님, 저를 사랑으로 내시고\n저에게 영혼 육신을 주시어\n주님만을 섬기고 사람을 도우라 하셨나이다.\n저는 비록 죄가 많사오나\n주님께 받은 몸과 마음을 오롯이 도로 바쳐\n찬미와 봉사의 제물로 드리오니\n어여삐 여기시어 받아 주소서.\n아멘.",
        "VN": "Lạy Chúa (con), con xin phú dâng linh hồn và xác con ở trong tay Chúa (con). Chúa đã phù hộ con ban ngày\nthì xin Chúa cũng gìn giữ con ban đêm, kẻo sa phạm tội gì mất lòng Chúa, hay là chết tươi ăn năn tội chẳng kịp. Chớ chỉ (dù) sống (dù) chết, con được giữ một lòng kinh mến Chúa luôn. A-men. \"He\" lÍ",
        "EN": "O Jesus, through the Immaculate Heart of Mary,\nI offer you my prayers, works, joys and sufferings of this day\nfor all the intentions of your Sacred Heart,\nin union with the Holy Sacrifice of the Mass throughout the world,\nfor the salvation of souls, the reparation for sins, the reunion of all Christians,\nand in particular for the intentions of the Holy Father this month.\nAmen.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "012.offering_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "봉헌 기도",
        "Offering Prayer",
        "주요 기도",
        "Kinh Phú Dâng",
        "Morning Offering",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "013.angelus",
      "category": "common",
      "titles": {
        "KR": "삼종 기도",
        "VN": "Kinh Truyền Tin",
        "EN": "Angelus",
        "JP": "お告げの祈り",
        "LA": "Angelus"
      },
      "texts": {
        "KR": "<b>○</b> 주님의 천사가 마리아께 아뢰니\n<b>●</b> 성령으로 잉태하셨나이다.\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> “주님의 종이오니\n<b>●</b> 그대로 제게 이루어지소서!”\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> 이에 말씀이 사람이 되시어\n<b>●</b> 저희 가운데 계시나이다.\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> 천주의 성모님, 저희를 위하여 빌어주시어\n<b>●</b> 그리스도께서 약속하신 영원한 생명을 얻게 하소서.\n<b>✚</b> 기도합시다.\n하느님, 천사의 아룀으로\n성자께서 사람이 되심을 알았으니\n성자의 수난과 십자가로\n부활의 영광에 이르는 은총을\n저희에게 내려 주소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        "VN": "(Kinh này thường đọc ba lần: sáng sớm, giữa trưa, chập tối) X. Đức Chúa Trời sai thánh thiên thần truyền tin cho Rất thánh Đức Bà Ma-ri-a. Ð. Và Rất thánh Đức Bà chịu thai bởi phép Đức Chúa Thánh Thần (Kinh mừng Ma-ri-a. . . ) X. Này tôi là tôi tá Đức Chúa Trời. Ð. Tôi xin vâng như lời thánh thiên thần truyền (Kính mừng Ma-ri-a. . . ) X. Chốc ấy Ngôi Thứ Hai xuống thế làm người. Ð. Và ở cùng chúng con (Kính mừng Ma-ri-a. . ) X. Lạy Rất thánh Đức Mẹ Chúa Trời, xin cầu cho chúng con. Ð. Đáng chịu lấy những sự Chúa Ki-tô đã hứa. Lời nguyện Lạy Chúa, chúng con xin Chúa ban ơn xuống trong linh hồn chúng con, là kể đã nhờ lời thánh thiên thần truyền, mà biết thật Chúa Ki-tô là Con Chúa đã xuống thế làm người, thì xin vì công ơn Con Chúa chịu nạn chịu chết trên cây thánh giá cho chúng con ngày sau khi sống lại, được đến nơi vinh hiển, cũng vì công nghiệp Chúa Ki-tô là Chúa chúng con. A-men. 1⁄4 SÀN Đại K Ôn Ñ i",
        "EN": "<b>V.</b> The Angel of the Lord declared unto Mary,\n<b>R.</b> And she conceived of the Holy Spirit.\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> Behold the handmaid of the Lord,\n<b>R.</b> Be it done unto me according to your Word.\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> And the Word was made flesh,\n<b>R.</b> And dwelt among us.\n\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> Pray for us, O holy Mother of God,\n<b>R.</b> That we may be made worthy of the promises of Christ.\n<b>Let us pray.</b>\nPour forth, we beseech you, O Lord, your grace into our hearts: that we, to whom the Incarnation of Christ your Son was made known by the message of an Angel, may by his Passion and Cross be brought to the glory of his Resurrection. Through the same Christ our Lord. Amen.",
        "JP": "主のみ使いのお告げを受けて、\nマリアは聖霊によって神の御子を宿された。\n〔アヴェ･マリアの祈り〕\nアヴェ、マリア、恵みに満ちた方、\n主はあなたとともにおられます。\nあなたは女のうちで祝福され、\nご胎内の御子イエスも祝福されています。\n神の母聖マリア、\nわたしたち罪びとのために、\n今も、死を迎える時も、お祈りください。\nアーメン。\nわたしは主のはしため、\nおことばどおりになりますように。\n（引き続き、上記の〔アヴェ･マリアの祈り〕を唱えます。）\nみことばは人となり、\nわたしたちのうちに住まわれた。\n（ここでも〔アヴェ･マリアの祈り〕を唱えます。）\n神の母聖マリア、わたしたちのために祈ってください。\nキリストの約束にかなうものとなりますように。\n祈願\n神よ、み使いのお告げによって、御子が人となられたことを\n知ったわたしたちが、キリストの受難と十字架をとおして、\n復活の栄光に達することができるよう、恵みを注いでください。\nわたしたちの主イエス・キリストによって。 アーメン。",
        "LA": "Alma Redemptoris Mater, quae pervia caeli Porta manes, et stella maris, succurre cadenti, Surgere qui curat, populo: tu quae genuisti, Natura mirante, tuum sanctum Genitorem Virgo prius ac posterius, Gabrielis ab ore Sumens illud Ave, peccatorum miserere.\nTempus Adventus:\nV. Angelus Domini nuntiavit Mariae.\nR. Et concepit de Spiritu Sancto.\nOremus:\nGratiam tuam, quaesumus, Domine, mentibus nostris infunde: ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus; per passionem eius et crucem, ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen.\nDonec Purificatio:\nV. Post partum, Virgo, inviolata permansisti.\nR. Dei Genetrix, intercede pro nobis.\nOremus:\nDeus, qui salutis aeternae, beatae Mariae virginitate fecunda, humano generi praemia praestitisti: tribue, quaesumus; ut ipsam pro nobis intercedere sentiamus, per quam meruimus auctorem vitae suscipere, Dominum nostrum Iesum Christum, Filium tuum. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Các Kinh Cầu",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Maria"
      },
      "tags": [
        "013.angelus",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "삼종 기도",
        "Angelus",
        "Kinh Truyền Tin",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Maria",
        "お告げの祈り",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "014.regina_caeli",
      "category": "common",
      "titles": {
        "KR": "부활 삼종 기도",
        "VN": "Kinh Nữ Vương Thiên Đàng",
        "EN": "Regina Caeli",
        "JP": "アレルヤの祈り",
        "LA": "Regina Caeli"
      },
      "texts": {
        "KR": "<rubric>주님 부활 대축일부터 성령 강림 대축일까지</rubric>\n<b>○</b> 하늘의 모후님, 기뻐하소서. 알렐루야.\n<b>●</b> 태중에 모시던 아드님께서, 알렐루야.\n<b>○</b> 말씀하신 대로 부활하셨나이다. 알렐루야.\n<b>●</b> 저희를 위하여 하느님께 빌어 주소서. 알렐루야.\n<b>○</b> 동정 마리아님, 기뻐하시며 즐거워하소서. 알렐루야.\n<b>●</b> 주님께서 참으로 부활하셨나이다. 알렐루야.\n✚ 기도합시다.\n하느님, 성자 우리 주 예수 그리스도의 부활로\n온 세상을 기쁘게 하셨으니\n성자의 어머니 동정 마리아의 도움으로\n영생의 즐거움을 얻게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        "VN": "(Đọc trong Mùa Phục Sinh, thay kinh Truyền Tin) X. Lạy Nữ vương thiên đàng hãy vui mừng, Al-lê-lui-a. Ð. Vì Đấng Mẹ đã đáng cưu mang trong lòng, Al-lê-lui-a. X. Người đã sống lại thật như lời đã phán hứa, Al-lê-lui-a. Ð. Xin cầu cùng Chúa cho chúng con, Al-lê lui-a. X. Lạy Đức Nữ đồng trinh Ma-ri-a hãy hỷ hoan khoái lạc, Al-lê-lui-a. Ð. Vì Chúa đã sống lại thật, Al-lê-lui-a. Lời nguyện Lạy Chúa là Đấng đã làm cho thiên hạ được vui mừng quá bội, bởi Đức Chúa Giê-su Kitô, là Con Chúa cùng là Chúa chúng con đã sống lại, xin gì Đức Nữ Đồng Trinh Ma-ri-a là Thánh Mẫu Người nguyện cầu, cho chúng con được hưởng phúc vui về hằng sống đời đời: vì công nghiệp Chúa Ki-tô là Chúa chúng con. A-men. H CHƯƠNG TRÌNH GIỜ KINH SÁNG TỔI CỦA THIẾU NHI",
        "EN": "V. Queen of heaven, rejoice, alleluia.\nR. The Son whom you merited to bear, alleluia,\nV. has risen as he said, alleluia.\nR. Pray for us to God, alleluia.\nV. Rejoice and be glad, O Virgin Mary, alleluia.\nR. For the Lord has truly risen, alleluia.\nV. Let us pray.\nALL. O God, who have been pleased to gladden the world\nby the Resurrection of your Son our Lord Jesus Christ,\ngrant, we pray,\nthat through his Mother, the Virgin Mary,\nwe may receive the joys of everlasting life.\nThrough Christ our Lord. Amen.",
        "JP": "神の母聖マリア、お喜びください。アレルヤ。\nあなたに宿られた方は。アレルヤ。\nおことばどおりに復活されました。アレルヤ。\nわたしたちのためにお祈りください。アレルヤ。\n聖マリア、お喜びください。アレルヤ。\n主はまことに復活されました。アレルヤ。\n祈願\n神よ、あなたは御子キリストの復活によって、\n世界に喜びをお与えになりました。\nキリストの母、聖マリアにならい、\nわたしたちも永遠のいのちの喜びを得ることができますように。\nわたしたちの主イエス・キリストによって。アーメン。",
        "LA": "Regina coeli, laetare, alleluia: Quia quem meruisti portare, alleluia. Resurrexit sicut dixit, alleluia. Ora pro nobis Deum, alleluia.\nV. Gaude et laetare, Virgo Maria, alleluia.\nR. Quia surrexit Dominus vere, alleluia.\nOremus:\nDeus qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus, ut per eius Genetricem Virginem Mariam, perpetuae capiamus gaudia vitae. Per eundem Christum Dominum nostrum.\nR. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "Các Kinh Cầu",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Maria"
      },
      "tags": [
        "014.regina_caeli",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "부활 삼종 기도",
        "레지나 첼리",
        "Regina Caeli",
        "Kinh Lạy Nữ Vương Thiên Đàng",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Maria",
        "Kinh Nữ Vương Thiên Đàng",
        "アレルヤの祈り",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "015.fatima_prayer",
      "category": "common",
      "titles": {
        "KR": "구원을 비는 기도",
        "VN": "",
        "EN": "Fatima Prayer",
        "JP": "",
        "LA": "Oratio Fatimae"
      },
      "texts": {
        "KR": "예수님, 저희 죄를 용서하시며\n저희를 지옥 불에서 구하시고\n연옥 영혼을 돌보시며\n가장 버림받은 영혼을 돌보소서.",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praeseritim illas quae maxime indigent misericordia tua."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Rosarium"
      },
      "tags": [
        "015.fatima_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "구원을 비는 기도",
        "Fatima Prayer",
        "Oratio Fatimae",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Rosarium"
      ]
    },
    {
      "id": "016.prayer_before_meals",
      "category": "common",
      "titles": {
        "KR": "식사 전 기도",
        "VN": "",
        "EN": "Prayer Before Meals",
        "JP": "食前の祈り",
        "LA": "Benedic, Domine"
      },
      "texts": {
        "KR": "<b>✚</b> 주님, 은혜로이 내려 주신 이 음식과\n저희에게 강복하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Benedic, Domine, nos et haec tua dona quae de tua largitate sumus sumpturi, per Christum Dominum nostrum. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Preces ad mensam"
      },
      "tags": [
        "016.prayer_before_meals",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "식사 전 기도",
        "Prayer Before Meals",
        "Kinh Trước Bữa Ăn",
        "Benedic, Domine",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Preces ad mensam"
      ]
    },
    {
      "id": "017.prayer_after_meals",
      "category": "common",
      "titles": {
        "KR": "식사 후 기도",
        "VN": "",
        "EN": "Prayer After Meals",
        "JP": "食後の祈り",
        "LA": "Agimus Tibi Gratias"
      },
      "texts": {
        "KR": "<b>✚</b> 전능하신 하느님,\n저희에게 베풀어 주신\n모든 은혜에 감사하나이다.\n<b>◎</b> 아멘.\n<b>✚</b> 주님의 이름은 찬미를 받으소서.\n<b>◎</b> 이제와 영원히 받으소서.\n<b>✚</b> 세상을 떠난 모든 이가\n하느님의 자비로 평화의 안식을 얻게 하소서.\n<b>◎</b> 아멘.",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Agimus tibi gratias, omnipotens Deus, pro universis beneficiis tuis, qui vivis et regnas in saecula saeculorum. Fidelium animae, per misericordiam Dei, requiescant in pace. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Preces ad mensam"
      },
      "tags": [
        "017.prayer_after_meals",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "식사 후 기도",
        "Prayer After Meals",
        "Kinh Sau Bữa Ăn",
        "Agimus Tibi Gratias",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Preces ad mensam"
      ]
    },
    {
      "id": "018.prayer_before_work",
      "category": "common",
      "titles": {
        "KR": "일을 시작하며 바치는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "<b>○</b> 오소서, 성령님.\n저희 마음을 성령으로 가득 채우시어\n저희 안에 사랑의 불이 타오르게 하소서.\n<b>●</b> 주님의 성령을 보내소서. 저희가 새로워지리이다.\n또한 온 누리가 새롭게 되리이다.\n<b>✚</b> 기도합시다.\n하느님, 성령의 빛으로 저희 마음을 이끄시어\n바르게 생각하고\n언제나 성령의 위로를 받아 누리게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "018.prayer_before_work",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "일을 시작하며 바치는 기도",
        "주요 기도"
      ]
    },
    {
      "id": "019.prayer_after_work",
      "category": "common",
      "titles": {
        "KR": "일을 마치고 바치는 기도 (성모님께 보호를 철하는 기도)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "천주의 성모님, 당신의 보호에 저희를 맡기오니\n어려울 때에 저희의 간절한 기도를 외면하지 마시고\n항상 모든 위험에서 저희를 구하소서.\n영화롭고 복되신 동정녀시여.",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "019.prayer_after_work",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "일을 마치고 바치는 기도",
        "성모님께 보호를 청하는 기도",
        "주요 기도"
      ]
    },
    {
      "id": "020.morning_prayer",
      "category": "common",
      "titles": {
        "KR": "아침 기도",
        "VN": "",
        "EN": "Morning Prayer",
        "JP": "朝の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "십자 성호를 그으며\n<b>✚</b> 성부와 성자와 성령의 이름으로.\n<b>◎</b> 아멘.\n<b>○</b> 하늘에 계신 우리 아버지,\n아버지의 이름이 거룩히 빛나시며\n아버지의 나라가 오시며\n아버지의 뜻이 하늘에서와 같이\n땅에서도 이루어지소서!\n<b>●</b> 오늘 저희에게 일용할 양식을 주시고\n저희에게 잘못한 이를 저희가 용서하오니\n저희 죄를 용서하시고\n저희를 유혹에 빠지지 않게 하시고\n악에서 구하소서.\n<b>◎</b> 아멘.\n<b>◎</b> 하느님, 저를 사랑으로 내시고\n저에게 영혼 육신을 주시어\n주님만을 섬기고 사람을 도우라 하셨나이다.\n저는 비록 죄가 많사오나\n주님께 받은 몸과 마음을 오롯이 도로 바쳐\n찬미와 봉사의 제물로 드리오니\n어여삐 여기시어 받아 주소서.\n아멘.\n<b>✚</b> 우리 주 하느님께 권능과 영광\n지혜와 굳셈이 있사오니\n찬미와 감사와 흠숭을 영원히 받으소서.\n<b>◎</b> 아멘.\n<b>✚</b> 전능하신 하느님,\n오늘도 저희 생각과 말과 행위를\n주님의 평화로 이끌어 주소서.\n<b>◎</b> 아멘.",
        "VN": "",
        "EN": "",
        "JP": "「神よ、あなたを礼拝します」\n神よ、あなたを礼拝し、心を尽くして愛します。\nわたしを造り、キリスト者とし、（パウロ家族に導いて、）\n昨夜も守ってくださった恵みに感謝します。\nきょうの働きをあなたにささげます。\nすべてがみ心にかない、より大いなるみ栄えとなりますように。\nわたしを罪と悪から守ってください。\nあなたの恵みが、常に、わたしと、\nわたしの愛するすべての人の上にありますように。アーメン。",
        "LA": "Domine Iesu Christe, in unione illius divinae intentionis, quia in terris, per sanctissimum Cor tuum, laudes Deo persolvisti, et nunc in Eucharistiae Sacramento ubique terrarum persolvis, usque ad consummationem saeculi: ego, per hanc diem integram, ad imitationem sanctissimi Cordis beatae Mariae semper Virginis immaculatae, tibi libentissime offero meos intentiones et cogitationes, omnes meos affectus et desideria, omnia mea opera et verba. Amen."
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "020.morning_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "아침 기도",
        "Morning Prayer",
        "Kinh Sáng",
        "주요 기도"
      ]
    },
    {
      "id": "021.evening_prayer",
      "category": "common",
      "titles": {
        "KR": "저녁 기도",
        "VN": "",
        "EN": "Evening Prayer",
        "JP": "晩の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "십자 성호를 그으며\n<b>✚</b> 성부와 성자와 성령의 이름으로.\n<b>◎</b> 아멘.\n<b>✚</b> 주님, 오늘 생각과 말과 행위로 지은 죄와\n의무를 소홀히 한 죄를 자세히 살피고\n그 가운데 버릇이 된 죄를 깨닫게 하소서.\n잠깐 반성한다.\n<b>◎</b> 하느님,\n제가 죄를 지어\n참으로 사랑받으셔야 할\n하느님의 마음을 아프게 하였기에\n악을 저지르고 선을 멀리한 모든 잘못을\n진심으로 뉘우치나이다.\n하느님의 은총으로 속죄하고\n다시는 죄를 짓지 않으며\n죄지을 기회를 피하기로 굳게 다짐하오니\n우리 구세주 예수 그리스도의 수난 공로를 보시고\n저에게 자비를 베풀어 주소서.\n아멘.\n<b>○</b> 하느님, 하느님께서는 진리의 근원이시며\n그르침이 없으시므로\n계시하신 진리를\n교회가 가르치는 대로 굳게 믿나이다.\n<b>●</b> 하느님, 하느님께서는 자비의 근원이시며\n저버림이 없으시므로\n예수 그리스도의 공로를 통하여 주실\n구원의 은총과 영원한 생명을 바라나이다.\n<b>○</b> 하느님, 하느님께서는 사랑의 근원이시며\n한없이 좋으시므로\n마음을 다하여 주님을 사랑하며\n이웃을 제 몸같이 사랑하나이다.\n<b>✚</b> 하늘에 계신 우리 아버지,\n오늘 하루도 이미 저물었나이다.\n이제 저희는 구세주 예수 그리스도를 통하여\n모든 천사와 성인과 함께 주님을 흠숭하며\n지금 이 순간까지 베풀어 주신\n주님의 사랑에 감사하나이다.\n<b>◎</b> 아멘.\n<b>✚</b> 전능하신 천주\n십자 성호를 그으며\n성부와 성자와 성령께서는\n저희에게 강복하시고 지켜 주소서.\n<b>◎</b> 아멘.",
        "VN": "",
        "EN": "",
        "JP": "「神よ、あなたを礼拝します」\n神よ、あなたを礼拝し、心を尽くして愛します。\nわたしを造り、キリスト者とし、\nきょうも守ってくださった恵みに感謝します。\nきょう犯したわたしの過ちをゆるし、行った善を受け入れてください。\n眠っている間もわたしを守り、危険から救ってください。\nあなたの恵みが、常に、わたしと、\nわたしの愛するすべての人の上にありますように。アーメン。",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "주요 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "021.evening_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "저녁 기도",
        "Evening Prayer",
        "Kinh Tối",
        "주요 기도"
      ]
    },
    {
      "id": "anima_christi",
      "category": "common",
      "titles": {
        "KR": "",
        "VN": "Kinh Lạy Linh Hồn Chúa Kitô",
        "EN": "Anima Christi",
        "JP": "キリストの魂",
        "LA": "Anima Christi"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Christus"
      },
      "tags": [
        "anima_christi",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "Kinh Lạy Linh Hồn Chúa Kitô",
        "Anima Christi",
        "キリストの魂",
        "Basic Prayers",
        "日々の祈り",
        "Christus"
      ]
    },
    {
      "id": "come_holy_spirit",
      "category": "common",
      "titles": {
        "KR": "",
        "VN": "Lạy Chúa Thánh Thần, xin Ngài ngự đến",
        "EN": "",
        "JP": "聖霊への祈り",
        "LA": "Veni Sancte Spiritus (long version)"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": "Spiritus Sanctus"
      },
      "tags": [
        "come_holy_spirit",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "Lạy Chúa Thánh Thần, xin Ngài ngự đến",
        "聖霊への祈り",
        "Veni Sancte Spiritus (long version)",
        "日々の祈り",
        "Spiritus Sanctus"
      ]
    },
    {
      "id": "la_professio_fidei_tridentina",
      "category": "common",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Professio Fidei Tridentina"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Symbolum fidei"
      },
      "tags": [
        "la_professio_fidei_tridentina",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "Professio Fidei Tridentina",
        "Symbolum fidei"
      ]
    },
    {
      "id": "la_quicunque_vult",
      "category": "common",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Quicunque Vult"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Symbolum fidei"
      },
      "tags": [
        "la_quicunque_vult",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "Quicunque Vult",
        "Symbolum fidei"
      ]
    },
    {
      "id": "000.guardian_angel",
      "category": "common",
      "titles": {
        "KR": "수호천사에게 바치는 기도",
        "VN": "Kinh Thiên Thần Bản Mệnh",
        "EN": "Prayer to Your Guardian Angel",
        "JP": "守護の天使への祈り",
        "LA": "Angele Dei"
      },
      "texts": {
        "KR": "저를 지켜 주시는 수호천사여, 하느님께서 당신께 맡기신 저를 오늘 비추고 지켜 주시며 다스리고 이끌어 주소서. 아멘.",
        "VN": "Lạy Thiên Thần Chúa là Đấng gìn giữ con, xin soi sáng, gìn giữ, cai quản và hướng dẫn con trong ngày hôm nay. Amen.",
        "EN": "Angel of God, my guardian dear,\nto whom God’s love commits me here,\never this day be at my side,\nto light and guard, to rule and guide.\nAmen.",
        "JP": "神の天使、わたしの守護者よ、神の愛によってあなたにゆだねられたわたしを、今日も照らし、守り、導いてください。アーメン。",
        "LA": "Angele Dei, qui custos es mei, me tibi commissum pietate superna illumina, custodi, rege et guberna. Amen."
      },
      "sourceCategory": {
        "KR": "민간전승",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Angeli"
      },
      "tags": [
        "guardian_angel",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "수호천사에게 바치는 기도",
        "Kinh Thiên Thần Bản Mệnh",
        "Guardian Angel Prayer",
        "守護の天使への祈り",
        "Angele Dei",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Angeli"
      ]
    },
    {
      "id": "en_a_rosary_for_life_the_glorious_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Rosary for Life: The Glorious Mysteries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_rosary_for_life_the_glorious_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "A Rosary for Life: The Glorious Mysteries"
      ]
    },
    {
      "id": "en_a_rosary_for_life_the_luminous_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Rosary for Life: The Luminous Mysteries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_rosary_for_life_the_luminous_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "A Rosary for Life: The Luminous Mysteries"
      ]
    },
    {
      "id": "en_a_rosary_for_life_the_sorrowful_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Rosary for Life: The Sorrowful Mysteries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_rosary_for_life_the_sorrowful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "A Rosary for Life: The Sorrowful Mysteries"
      ]
    },
    {
      "id": "la_oratio_fatima",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Fatima"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Rosarium"
      },
      "tags": [
        "la_oratio_fatima",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "Oratio Fatima"
      ]
    },
    {
      "id": "la_oratio_ad_finem_rosarii_dicenda",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio ad Finem Rosarii Dicenda"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Rosarium"
      },
      "tags": [
        "la_oratio_ad_finem_rosarii_dicenda",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "Oratio ad Finem Rosarii Dicenda"
      ]
    },
    {
      "id": "en_prayer_to_st_joseph_after_the_rosary",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to St. Joseph after the Rosary",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_st_joseph_after_the_rosary",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "Prayer to St. Joseph after the Rosary"
      ]
    },
    {
      "id": "en_pro_life_rosary_prayer_intentions",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pro-Life Rosary Prayer Intentions",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pro_life_rosary_prayer_intentions",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "Pro-Life Rosary Prayer Intentions"
      ]
    },
    {
      "id": "en_scriptural_rosary_the_sorrowful_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Scriptural Rosary: The Sorrowful Mysteries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_scriptural_rosary_the_sorrowful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "Scriptural Rosary: The Sorrowful Mysteries"
      ]
    },
    {
      "id": "jp_ロサリオの祈り_https_inoruhana_com_ja_rosary_pray",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "[ロザリオの祈り](https://inoruhana.com/ja/rosary-pray/)",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ロサリオの祈り_https_inoruhana_com_ja_rosary_pray",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "[ロザリオの祈り](https://inoruhana.com/ja/rosary-pray/)",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_ロサリオ",
      "category": "rosary",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ロザリオ",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ロサリオ",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "日々の祈り"
      ]
    },
    {
      "id": "000. rosary_the_joyful_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "환희의 신비",
        "VN": "Năm Sự Vui",
        "EN": "The Joyful Mysteries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "<rubric>월·토요일에 바친다.</rubric>\n1단 마리아께서 예수님을 잉태하심을 묵상합시다.\n2단 마리아께서 엘리사벳을 찾아보심을 묵상합시다.\n3단 마리아께서 예수님을 낳으심을 묵상합시다.\n4단 마리아께서 예수님을 성전에 바치심을 묵상합시다.\n5단 마리아께서 잃으셨던 예수님을 성전에서 찾으심을 묵상합시다.",
        "VN": "Thứ nhất Thiên thần truyền tin cho Đức Bà chịu thai Ta hãy xin cho được ở khiêm nhường. Thứ hai Đức Bà đi viếng bà thánh l-sa-ve — Ta hãy xin cho được lòng yêu người. Thứ ba Đức Bà sinh Đức Chúa Giê-su nơi hang đá Ta hãy xin cho được lòng khó khăn. Thứ bốn Đức Bà dâng Đức Chúa Giê-su trong đền thánh ~ Ta hãy xin cho được vâng lời chịu luy. Thứ năm Đức Bà tìm được Đức Chúa Giê-su trong đền thánh - Ta hãy xin cho được giữ nghĩa cùng Chúa luôn.",
        "EN": "<rubric>traditionally prayed on Mondays, Saturdays, and, during the season of Advent, on Sundays.</rubric>\n1. The Annunciation\n<i>“In the sixth month, the angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Joseph, of the house of David, and the virgin’s name was Mary.” - Luke 1:26-27</i>\n2. The Visitation\n<i>“During those days Mary set out and traveled to the hill country in haste to a town of Judah, where she entered the house of Zechariah and greeted Elizabeth. When Elizabeth heard Mary’s greeting, the infant leaped in her womb, and Elizabeth, filled with the holy Spirit, cried out in a loud voice and said, 'Most blessed are you among women, and blessed is the fruit of your womb.'” - Luke 1:39-42,</i>\n3. The Nativity\n<i>“In those days a decree went out from Caesar Augustus that the whole world should be enrolled. This was the first enrollment, when Quirinius was governor of Syria. So all went to be enrolled, each to his own town. And Joseph too went up from Galilee from the town of Nazareth to Judea, to the city of David that is called Bethlehem, because he was of the house and family of David, to be enrolled with Mary, his betrothed, who was with child. While they were there, the time came for her to have her child, and she gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger, because there was no room for them in the inn.” - Luke 2:1-7</i>\n4. The Presentation in the Temple\n<i>“When eight days were completed for his circumcision, he was named Jesus, the name given him by the angel before he was conceived in the womb. When the days were completed for their purification according to the law of Moses, they took him up to Jerusalem to present him to the Lord, just as it is written in the law of the Lord, 'Every male that opens the womb shall be consecrated to the Lord,' and to offer the sacrifice of 'a pair of turtledoves or two young pigeons,' in accordance with the dictate in the law of the Lord.” - Luke 2:21-24</i>\n5. The Finding in the Temple\n<i>“Each year his parents went to Jerusalem for the feast of Passover,  and when he was twelve years old, they went up according to festival custom. After they had completed its days, as they were returning, the boy Jesus remained behind in Jerusalem, but his parents did not know it. Thinking that he was in the caravan, they journeyed for a day and looked for him among their relatives and acquaintances, but not finding him, they returned to Jerusalem to look for him. After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions, and all who heard him were astounded at his understanding and his answers.” - Luke 2:41-47</i> ",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "묵주기도",
        "VN": "Chuỗi Mân Côi",
        "EN": "The Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "000. rosary_the_joyful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "환희의 신비",
        "The Joyful Mysteries",
        "The Rosary",
        "Năm Sự Vui",
        "Chuỗi Mân Côi"
      ]
    },
    {
      "id": "kr_30_213",
      "category": "rosary",
      "titles": {
        "KR": "묵주 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_213",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "묵주 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_8_70",
      "category": "rosary",
      "titles": {
        "KR": "묵주기도 바치는 방법",
        "VN": "",
        "EN": "How to Pray the Rosary",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "1. 묵주에 달린 십자가를 잡은 채 십자성호(성호경)를 이마, 가슴, 양 어깨 순으로 긋고 십자가 발 부분에 친구(입맞춤)한 다음, 사도신경을 바칩니다.\n2. 큰 알(또는 간격이 넓은 알)에서 주님의 기도 1번, 작은 알 3개에서 성모송 각 1번씩, 그리고 맨 마지막 알에서 영광송을 바칩니다. 이어서 구원을 위한 기도(구원송)를 바칠 수 있습니다.\n3. 그리고 같은 자리에서 신비 제1단(환희의 신비, 빛의 신비, 고통의 신비, 영광의 신비 중에서 하나를 선택)을 묵상한 후 주님의 기도를 1번 드립니다.\n4. 이어서 다음의 작은 묵주 알에서 각각 1번씩 성모송 10번을 바칩니다.\n5. 10개의 작은 묵주 알을 지나 하나의 큰 묵주 알(또는 간격이 넓은 알)에서 영광송을 바칩니다. 이어서 구원을 위한 기도(구원송)를 바칠 수 있습니다. 그리고 다시 전과 같이 신비 제2단을 묵상한 후 주님의 기도를 1번 드립니다.\n6. 이와 같이 매 단마다 그 신비를 묵상하면서 제3단, 제4단, 제5단을 계속 바칩니다.\n7. 마지막 제5단의 묵주기도가 끝나면 마침 성호경을 하기 전에 묵주기도성월 기도인 성모찬송을 바칠 수도 있습니다.\n8. 한 바퀴를 돌아 다시 돌아온 십자가를 잡고 성호경으로 끝을 맺습니다. 이때 십자가에 친구(입맞춤)하며 마칠 수 있습니다.",
        "VN": "",
        "EN": "1. Make the Sign of the Cross.\n2. Holding the Crucifix, say the Apostles' Creed.\n3. On the first bead, say an Our Father.\n4. Say one Hail Mary on each of the next three beads.\n5. Say the Glory Be\n6. For each of the five decades, announce the Mystery (perhaps followed by a brief reading from Scripture) then say the Our Father.\n7. While fingering each of the ten beads of the decade, next say ten Hail Marys while meditating on the Mystery. Then say a Glory Be.\n8. After finishing each decade, some say the following prayer requested by the Blessed Virgin Mary at Fatima.\n9. After saying the five decades, say the Hail, Holy Queen. (A prayer to St. Joseph may also follow.)\\10. Conclude the Rosary with the Sign of the Cross.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "묵주기도",
        "VN": "",
        "EN": "Rosary",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_8_70",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "묵주기도 바치는 방법",
        "How to Pray the Rosary"
      ]
    },
    {
      "id": "kr_5_30",
      "category": "litany",
      "titles": {
        "KR": "103위 한국 성인 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_30",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "103위 한국 성인 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "kr_5_128",
      "category": "litany",
      "titles": {
        "KR": "124위 한국 순교 복자 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_128",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "124위 한국 순교 복자 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "en_a_litany_for_life",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Litany for Life",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_litany_for_life",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "A Litany for Life"
      ]
    },
    {
      "id": "la_litaniae_lauretanae",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae Lauretanae"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_litaniae_lauretanae",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litaniae Lauretanae",
        "Maria"
      ]
    },
    {
      "id": "la_litaniae_pretiosissimi_sanguinis_domini_nostri_iesu_christi",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae Pretiosissimi Sanguinis Domini Nostri Iesu Christi"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae"
      },
      "tags": [
        "la_litaniae_pretiosissimi_sanguinis_domini_nostri_iesu_christi",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litaniae Pretiosissimi Sanguinis Domini Nostri Iesu Christi"
      ]
    },
    {
      "id": "la_litaniae_sancti_ioseph",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae Sancti Ioseph"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_litaniae_sancti_ioseph",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litaniae Sancti Ioseph",
        "Ioseph"
      ]
    },
    {
      "id": "la_litaniae_sanctissimi_nominis_iesu",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae Sanctissimi Nominis Iesu"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae"
      },
      "tags": [
        "la_litaniae_sanctissimi_nominis_iesu",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litaniae Sanctissimi Nominis Iesu"
      ]
    },
    {
      "id": "la_litaniae_de_sacro_corde_iesu",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae de Sacro Corde Iesu"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Litaniae"
      },
      "tags": [
        "la_litaniae_de_sacro_corde_iesu",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litaniae de Sacro Corde Iesu"
      ]
    },
    {
      "id": "en_litany_for_liberty",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany for Liberty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_for_liberty",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany for Liberty"
      ]
    },
    {
      "id": "en_litany_of_saint_joseph",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of Saint Joseph",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_saint_joseph",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of Saint Joseph"
      ]
    },
    {
      "id": "en_litany_of_the_blessed_virgin_mary_mother_of_life",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of the Blessed Virgin Mary, Mother of Life",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_the_blessed_virgin_mary_mother_of_life",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of the Blessed Virgin Mary, Mother of Life"
      ]
    },
    {
      "id": "en_litany_of_the_holy_name_of_jesus",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of the Holy Name of Jesus",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_the_holy_name_of_jesus",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of the Holy Name of Jesus"
      ]
    },
    {
      "id": "en_litany_of_the_most_precious_blood",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of the Most Precious Blood",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_the_most_precious_blood",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of the Most Precious Blood"
      ]
    },
    {
      "id": "en_litany_of_the_sacred_heart_of_jesus",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of the Sacred Heart of Jesus",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_the_sacred_heart_of_jesus",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of the Sacred Heart of Jesus"
      ]
    },
    {
      "id": "en_litany_of_the_way_prayer_for_the_journey",
      "category": "litany",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Litany of the Way, Prayer for the Journey",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Litanies",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_litany_of_the_way_prayer_for_the_journey",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "Litany of the Way, Prayer for the Journey"
      ]
    },
    {
      "id": "kr_5_29",
      "category": "litany",
      "titles": {
        "KR": "복되신 동정 마리아의 배필 성 요셉 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_29",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "복되신 동정 마리아의 배필 성 요셉 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "kr_5_28",
      "category": "litany",
      "titles": {
        "KR": "성모 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_28",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "성모 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "kr_5_27",
      "category": "litany",
      "titles": {
        "KR": "예수 성심 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_27",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "예수 성심 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "kr_5_31",
      "category": "litany",
      "titles": {
        "KR": "일상적으로 바치는 성인 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_5_31",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "일상적으로 바치는 성인 호칭 기도",
        "호칭 기도"
      ]
    },
    {
      "id": "kr_4_21",
      "category": "monthly",
      "titles": {
        "KR": "성 요셉 성월",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "성월 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_4_21",
        "monthly",
        "성월기도",
        "Kinh theo tháng kính",
        "Monthly Devotions",
        "信心月の祈り",
        "Preces mensium",
        "성 요셉 성월",
        "성월 기도"
      ]
    },
    {
      "id": "kr_4_22",
      "category": "monthly",
      "titles": {
        "KR": "성모 성월",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "성월 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_4_22",
        "monthly",
        "성월기도",
        "Kinh theo tháng kính",
        "Monthly Devotions",
        "信心月の祈り",
        "Preces mensium",
        "성모 성월",
        "성월 기도"
      ]
    },
    {
      "id": "kr_4_24",
      "category": "monthly",
      "titles": {
        "KR": "순교자 성월",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "성월 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_4_24",
        "monthly",
        "성월기도",
        "Kinh theo tháng kính",
        "Monthly Devotions",
        "信心月の祈り",
        "Preces mensium",
        "순교자 성월",
        "성월 기도"
      ]
    },
    {
      "id": "kr_4_23",
      "category": "monthly",
      "titles": {
        "KR": "예수 성심 성월",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "성월 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_4_23",
        "monthly",
        "성월기도",
        "Kinh theo tháng kính",
        "Monthly Devotions",
        "信心月の祈り",
        "Preces mensium",
        "예수 성심 성월",
        "성월 기도"
      ]
    },
    {
      "id": "kr_4_26",
      "category": "monthly",
      "titles": {
        "KR": "위령 성월",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "성월 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_4_26",
        "monthly",
        "성월기도",
        "Kinh theo tháng kính",
        "Monthly Devotions",
        "信心月の祈り",
        "Preces mensium",
        "위령 성월",
        "성월 기도"
      ]
    },
    {
      "id": "en_may_the_sacraments_move_us_to_love_and_serve",
      "category": "sacrament",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "May the Sacraments Move Us to Love and Serve",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_may_the_sacraments_move_us_to_love_and_serve",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "May the Sacraments Move Us to Love and Serve"
      ]
    },
    {
      "id": "kr_29_214",
      "category": "sacrament",
      "titles": {
        "KR": "THE RITE OF PENANCE",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_214",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "THE RITE OF PENANCE",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "jp_赦しの秘跡",
      "category": "sacrament",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "赦しの秘跡",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_赦しの秘跡",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "赦しの秘跡",
        "日々の祈り"
      ]
    },
    {
      "id": "kr_7_20",
      "category": "sacrament",
      "titles": {
        "KR": "고해 성사",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "고해성사",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_7_20",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "고해 성사",
        "고해성사"
      ]
    },
    {
      "id": "kr_29_185",
      "category": "sacrament",
      "titles": {
        "KR": "고해성사",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_185",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "고해성사",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_11_68",
      "category": "sacrament",
      "titles": {
        "KR": "공소 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "공소 예절",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_11_68",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "공소 예식",
        "공소 예절"
      ]
    },
    {
      "id": "kr_29_186",
      "category": "sacrament",
      "titles": {
        "KR": "병자 영성체 짧은 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_186",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "병자 영성체 짧은 예식",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_29_187",
      "category": "sacrament",
      "titles": {
        "KR": "병자 영성체 통상 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_187",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "병자 영성체 통상 예식",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_29_189",
      "category": "sacrament",
      "titles": {
        "KR": "병자도유 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_189",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "병자도유 예식",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_29_188",
      "category": "sacrament",
      "titles": {
        "KR": "죽을 위험에 놓인 병자에게 거행하는 견진예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_188",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "죽을 위험에 놓인 병자에게 거행하는 견진예식",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_29_184",
      "category": "sacrament",
      "titles": {
        "KR": "죽을 위험에 있거나 죽음이 임박한 때에 사용하는 짧은 어른 입교 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_184",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "죽을 위험에 있거나 죽음이 임박한 때에 사용하는 짧은 어른 입교 예식",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_22_166",
      "category": "blessing_household",
      "titles": {
        "KR": "(어린 자녀) 선생님을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_166",
        "blessing_household",
        "(어린 자녀) 선생님을 위한 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_22_164",
      "category": "blessing_household",
      "titles": {
        "KR": "(어린 자녀) 아빠를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_164",
        "blessing_household",
        "(어린 자녀) 아빠를 위한 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_22_165",
      "category": "blessing_household",
      "titles": {
        "KR": "(어린 자녀) 엄마를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_165",
        "blessing_household",
        "(어린 자녀) 엄마를 위한 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_22_163",
      "category": "blessing_household",
      "titles": {
        "KR": "(어린 자녀) 할머니, 할아버지를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_163",
        "blessing_household",
        "(어린 자녀) 할머니, 할아버지를 위한 기도",
        "자녀"
      ]
    },
    {
      "id": "en_blessing_of_grandparents",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of Grandparents",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_grandparents",
        "blessing_household",
        "Blessing of Grandparents",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_of_parents_after_a_miscarriage_or_stillbirth",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of Parents after a Miscarriage or Stillbirth",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_parents_after_a_miscarriage_or_stillbirth",
        "blessing_household",
        "Blessing of Parents after a Miscarriage or Stillbirth",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_of_a_christmas_manger_or_nativity_scene",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of a Christmas Manger or Nativity Scene",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_a_christmas_manger_or_nativity_scene",
        "blessing_household",
        "Blessing of a Christmas Manger or Nativity Scene",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_of_a_christmas_tree",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of a Christmas Tree",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_a_christmas_tree",
        "blessing_household",
        "Blessing of a Christmas Tree",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_of_an_advent_wreath",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of an Advent Wreath",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_an_advent_wreath",
        "blessing_household",
        "Blessing of an Advent Wreath",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_of_the_home_and_household_on_epiphany",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing of the Home and Household on Epiphany",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_of_the_home_and_household_on_epiphany",
        "blessing_household",
        "Blessing of the Home and Household on Epiphany",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_on_a_child_s_birthday",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing on a Child's Birthday",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_on_a_child_s_birthday",
        "blessing_household",
        "Blessing on a Child's Birthday",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_blessing_on_a_child_s_name_day",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Blessing on a Child's Name Day",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_blessing_on_a_child_s_name_day",
        "blessing_household",
        "Blessing on a Child's Name Day",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_children_of_the_world_photo_slides",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Children of the World Photo Slides",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_children_of_the_world_photo_slides",
        "blessing_household",
        "Children of the World Photo Slides",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "la_commemoratio_sancti_ioseph",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Ioseph"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_commemoratio_sancti_ioseph",
        "blessing_household",
        "Commemoratio Sancti Ioseph",
        "Ioseph"
      ]
    },
    {
      "id": "en_daily_blessing_of_a_child",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Daily Blessing of a Child",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_daily_blessing_of_a_child",
        "blessing_household",
        "Daily Blessing of a Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_gracious_lord_child_of_bethlehem",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Gracious Lord, Child of Bethlehem",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_gracious_lord_child_of_bethlehem",
        "blessing_household",
        "Gracious Lord, Child of Bethlehem",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "la_invocatio_sancti_iosephi",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Invocatio Sancti Iosephi"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_invocatio_sancti_iosephi",
        "blessing_household",
        "Invocatio Sancti Iosephi",
        "Ioseph"
      ]
    },
    {
      "id": "la_ioseph_virgo_pater_iesu",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph, Virgo Pater Iesu"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_ioseph_virgo_pater_iesu",
        "blessing_household",
        "Ioseph, Virgo Pater Iesu",
        "Ioseph"
      ]
    },
    {
      "id": "la_memento_nostri_beate_ioseph",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Memento Nostri, Beate Ioseph"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_memento_nostri_beate_ioseph",
        "blessing_household",
        "Memento Nostri, Beate Ioseph",
        "Ioseph"
      ]
    },
    {
      "id": "la_memorare_sancti_ioseph",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Memorare Sancti Ioseph"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_memorare_sancti_ioseph",
        "blessing_household",
        "Memorare Sancti Ioseph",
        "Ioseph"
      ]
    },
    {
      "id": "la_oratio_ad_sanctum_iosephum",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio ad Sanctum Iosephum"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_oratio_ad_sanctum_iosephum",
        "blessing_household",
        "Oratio ad Sanctum Iosephum",
        "Ioseph"
      ]
    },
    {
      "id": "en_order_for_the_blessing_of_organizations_concerned_with_public_need",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Order for the Blessing of Organizations Concerned with Public Need",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_order_for_the_blessing_of_organizations_concerned_with_public_need",
        "blessing_household",
        "Order for the Blessing of Organizations Concerned with Public Need",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_order_for_the_blessing_of_a_victim_of_crime_or_oppression",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Order for the Blessing of a Victim of Crime or Oppression",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_order_for_the_blessing_of_a_victim_of_crime_or_oppression",
        "blessing_household",
        "Order for the Blessing of a Victim of Crime or Oppression",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_order_for_the_blessing_of_the_sick",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Order for the Blessing of the Sick",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_order_for_the_blessing_of_the_sick",
        "blessing_household",
        "Order for the Blessing of the Sick",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_parents_prayer_for_vocations",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Parents Prayer for Vocations",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_parents_prayer_for_vocations",
        "blessing_household",
        "Parents Prayer for Vocations",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_parents_thanksgiving",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Parents' Thanksgiving",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_parents_thanksgiving",
        "blessing_household",
        "Parents' Thanksgiving",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_those_who_have_died_after_leaving_their_homela",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis' Prayer for Those Who Have Died After Leaving Their Homelands in Search of a Better Life",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_those_who_have_died_after_leaving_their_homela",
        "blessing_household",
        "Pope Francis' Prayer for Those Who Have Died After Leaving Their Homelands in Search of a Better Life",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_card_for_the_75th_anniversary_of_hiroshima_and_nagasaki_spanish",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Card for the 75th Anniversary of Hiroshima and Nagasaki - Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_card_for_the_75th_anniversary_of_hiroshima_and_nagasaki_spanish",
        "blessing_household",
        "Prayer Card for the 75th Anniversary of Hiroshima and Nagasaki - Spanish",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_for_married_couples",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Married Couples",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_married_couples",
        "blessing_household",
        "Prayer for Married Couples",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_for_migrant_children",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Migrant Children",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_migrant_children",
        "blessing_household",
        "Prayer for Migrant Children",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_for_those_hoping_to_conceive_or_adopt_a_child",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Those Hoping to Conceive or Adopt a Child",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_those_hoping_to_conceive_or_adopt_a_child",
        "blessing_household",
        "Prayer for Those Hoping to Conceive or Adopt a Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_in_defense_of_marriage",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer in Defense of Marriage",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_in_defense_of_marriage",
        "blessing_household",
        "Prayer in Defense of Marriage",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_of_a_couple_on_the_anniversary_of_marriage",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer of a Couple on the Anniversary of Marriage",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_of_a_couple_on_the_anniversary_of_marriage",
        "blessing_household",
        "Prayer of a Couple on the Anniversary of Marriage",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_on_bringing_a_child_into_the_home",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer on Bringing a Child into the Home",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_on_bringing_a_child_into_the_home",
        "blessing_household",
        "Prayer on Bringing a Child into the Home",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_prayer_to_care_for_our_common_home",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Care for Our Common Home",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_care_for_our_common_home",
        "blessing_household",
        "Prayer to Care for Our Common Home",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_thank_you_for_creating_the_children_of_the_world",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Thank You for Creating the Children of the World",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_thank_you_for_creating_the_children_of_the_world",
        "blessing_household",
        "Thank You for Creating the Children of the World",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_thank_you_for_creating_the_children_of_the_world_spanish",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Thank You for Creating the Children of the World - Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_thank_you_for_creating_the_children_of_the_world_spanish",
        "blessing_household",
        "Thank You for Creating the Children of the World - Spanish",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "en_thanksgiving_for_a_newborn_or_newly_adopted_young_child",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Thanksgiving for a Newborn or Newly Adopted Young Child",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Household Blessings and Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_thanksgiving_for_a_newborn_or_newly_adopted_young_child",
        "blessing_household",
        "Thanksgiving for a Newborn or Newly Adopted Young Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      "id": "la_virginum_custos",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Virginum Custos"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ioseph"
      },
      "tags": [
        "la_virginum_custos",
        "blessing_household",
        "Virginum Custos",
        "Ioseph"
      ]
    },
    {
      "id": "jp_子とものための祈り",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "子どものための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_子とものための祈り",
        "blessing_household",
        "子どものための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_家族の祈り",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "家族の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_家族の祈り",
        "blessing_household",
        "家族の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_父母のための祈り",
      "category": "blessing_household",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "父母のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_父母のための祈り",
        "blessing_household",
        "父母のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "kr_30_194",
      "category": "blessing_household",
      "titles": {
        "KR": "가정 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_194",
        "blessing_household",
        "가정 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_25_174",
      "category": "blessing_household",
      "titles": {
        "KR": "가정을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "가정",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_25_174",
        "blessing_household",
        "가정을 위한 기도",
        "가정"
      ]
    },
    {
      "id": "kr_6_54",
      "category": "blessing_household",
      "titles": {
        "KR": "가정을 위한 기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_54",
        "blessing_household",
        "가정을 위한 기도 1",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_55",
      "category": "blessing_household",
      "titles": {
        "KR": "가정을 위한 기도 2",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_55",
        "blessing_household",
        "가정을 위한 기도 2",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_25_175",
      "category": "blessing_household",
      "titles": {
        "KR": "가족의 안전을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "가정",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_25_175",
        "blessing_household",
        "가족의 안전을 위한 기도",
        "가정"
      ]
    },
    {
      "id": "kr_20_151",
      "category": "blessing_household",
      "titles": {
        "KR": "갈등을 겪고 있는 부부의(부부를 위한) 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부부",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_20_151",
        "blessing_household",
        "갈등을 겪고 있는 부부의(부부를 위한) 기도",
        "부부"
      ]
    },
    {
      "id": "kr_30_208",
      "category": "blessing_household",
      "titles": {
        "KR": "거동하지 못하는 노인 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_208",
        "blessing_household",
        "거동하지 못하는 노인 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_20_149",
      "category": "blessing_household",
      "titles": {
        "KR": "결혼기념일에 바치는 부부의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부부",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_20_149",
        "blessing_household",
        "결혼기념일에 바치는 부부의 기도",
        "부부"
      ]
    },
    {
      "id": "kr_30_198",
      "category": "blessing_household",
      "titles": {
        "KR": "공장, 사무실, 상점 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_198",
        "blessing_household",
        "공장, 사무실, 상점 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_210",
      "category": "blessing_household",
      "titles": {
        "KR": "교리 교사 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_210",
        "blessing_household",
        "교리 교사 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_211",
      "category": "blessing_household",
      "titles": {
        "KR": "교리 교육이나 기도 모임 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_211",
        "blessing_household",
        "교리 교육이나 기도 모임 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_199",
      "category": "blessing_household",
      "titles": {
        "KR": "교통수단 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_199",
        "blessing_household",
        "교통수단 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_29_193",
      "category": "blessing_household",
      "titles": {
        "KR": "무덤 축복",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_193",
        "blessing_household",
        "무덤 축복",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_19_144",
      "category": "blessing_household",
      "titles": {
        "KR": "미래의 배우자를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "혼인",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_19_144",
        "blessing_household",
        "미래의 배우자를 위한 기도",
        "혼인"
      ]
    },
    {
      "id": "kr_30_201",
      "category": "blessing_household",
      "titles": {
        "KR": "미사 밖에서 거행하는 성수 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_201",
        "blessing_household",
        "미사 밖에서 거행하는 성수 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_23_168",
      "category": "blessing_household",
      "titles": {
        "KR": "부모를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부모",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_23_168",
        "blessing_household",
        "부모를 위한 기도",
        "부모"
      ]
    },
    {
      "id": "kr_6_56",
      "category": "blessing_household",
      "titles": {
        "KR": "부모를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_56",
        "blessing_household",
        "부모를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_30_203",
      "category": "blessing_household",
      "titles": {
        "KR": "부부 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_203",
        "blessing_household",
        "부부 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_20_150",
      "category": "blessing_household",
      "titles": {
        "KR": "부부가 하는 매일의 축복",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부부",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_20_150",
        "blessing_household",
        "부부가 하는 매일의 축복",
        "부부"
      ]
    },
    {
      "id": "kr_6_58",
      "category": "blessing_household",
      "titles": {
        "KR": "부부의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_58",
        "blessing_household",
        "부부의 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_30_209",
      "category": "blessing_household",
      "titles": {
        "KR": "부활 계란 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_209",
        "blessing_household",
        "부활 계란 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_197",
      "category": "blessing_household",
      "titles": {
        "KR": "새 집 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_197",
        "blessing_household",
        "새 집 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_21_156",
      "category": "blessing_household",
      "titles": {
        "KR": "새로 맞이하는 자녀를 위한 축복 (출산/입양)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "임신,출산,입양",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_21_156",
        "blessing_household",
        "새로 맞이하는 자녀를 위한 축복 (출산/입양)",
        "임신,출산,입양"
      ]
    },
    {
      "id": "kr_30_200",
      "category": "blessing_household",
      "titles": {
        "KR": "생업 관련 기기 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_200",
        "blessing_household",
        "생업 관련 기기 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_22_162",
      "category": "blessing_household",
      "titles": {
        "KR": "성인이 되는 자녀를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_162",
        "blessing_household",
        "성인이 되는 자녀를 위한 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_6_63",
      "category": "blessing_household",
      "titles": {
        "KR": "세상을 떠난 부모를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_63",
        "blessing_household",
        "세상을 떠난 부모를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_30_202",
      "category": "blessing_household",
      "titles": {
        "KR": "신심 증진을 위한 성물 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_202",
        "blessing_household",
        "신심 증진을 위한 성물 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_19_146",
      "category": "blessing_household",
      "titles": {
        "KR": "신혼부부의 기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "혼인",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_19_146",
        "blessing_household",
        "신혼부부의 기도 1",
        "혼인"
      ]
    },
    {
      "id": "kr_19_147",
      "category": "blessing_household",
      "titles": {
        "KR": "신혼부부의 기도 2",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "혼인",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_19_147",
        "blessing_household",
        "신혼부부의 기도 2",
        "혼인"
      ]
    },
    {
      "id": "kr_30_205",
      "category": "blessing_household",
      "titles": {
        "KR": "아직 세례 받지 못한 어린이 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_205",
        "blessing_household",
        "아직 세례 받지 못한 어린이 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_25_176",
      "category": "blessing_household",
      "titles": {
        "KR": "아픈 가족을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "가정",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_25_176",
        "blessing_household",
        "아픈 가족을 위한 기도",
        "가정"
      ]
    },
    {
      "id": "kr_30_195",
      "category": "blessing_household",
      "titles": {
        "KR": "어른 병자 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_195",
        "blessing_household",
        "어른 병자 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_196",
      "category": "blessing_household",
      "titles": {
        "KR": "어린이 병자 축복 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_196",
        "blessing_household",
        "어린이 병자 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_22_167",
      "category": "blessing_household",
      "titles": {
        "KR": "어린이 봉사자의 기도 (복사단, 전례단, 성가대 등)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_167",
        "blessing_household",
        "어린이 봉사자의 기도 (복사단, 전례단, 성가대 등)",
        "자녀"
      ]
    },
    {
      "id": "kr_20_152",
      "category": "blessing_household",
      "titles": {
        "KR": "영명 축일에 바치는 부부의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부부",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_20_152",
        "blessing_household",
        "영명 축일에 바치는 부부의 기도",
        "부부"
      ]
    },
    {
      "id": "kr_25_177",
      "category": "blessing_household",
      "titles": {
        "KR": "위기를 겪고 있는 가정의(가정을 위한) 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "가정",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_25_177",
        "blessing_household",
        "위기를 겪고 있는 가정의(가정을 위한) 기도",
        "가정"
      ]
    },
    {
      "id": "kr_30_204",
      "category": "blessing_household",
      "titles": {
        "KR": "이미 세례 받은 어린이 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_204",
        "blessing_household",
        "이미 세례 받은 어린이 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_21_155",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 낳은 가정의 감사기도 (출산/입양)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "임신,출산,입양",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_21_155",
        "blessing_household",
        "자녀를 낳은 가정의 감사기도 (출산/입양)",
        "임신,출산,입양"
      ]
    },
    {
      "id": "kr_21_153",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 바라는 기도 (임신/입양)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "임신,출산,입양",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_21_153",
        "blessing_household",
        "자녀를 바라는 기도 (임신/입양)",
        "임신,출산,입양"
      ]
    },
    {
      "id": "kr_6_57",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_57",
        "blessing_household",
        "자녀를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_22_157",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 위한 기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_157",
        "blessing_household",
        "자녀를 위한 기도 1",
        "자녀"
      ]
    },
    {
      "id": "kr_22_158",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 위한 기도 2",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_158",
        "blessing_household",
        "자녀를 위한 기도 2",
        "자녀"
      ]
    },
    {
      "id": "kr_24_171",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀를 잃은 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "슬퍼하는 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_24_171",
        "blessing_household",
        "자녀를 잃은 이들을 위한 기도",
        "슬퍼하는 이들을 위한 기도"
      ]
    },
    {
      "id": "kr_22_159",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀에게 하는 매일의 축복",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_159",
        "blessing_household",
        "자녀에게 하는 매일의 축복",
        "자녀"
      ]
    },
    {
      "id": "kr_22_160",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀의 생일에 하는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_160",
        "blessing_household",
        "자녀의 생일에 하는 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_22_161",
      "category": "blessing_household",
      "titles": {
        "KR": "자녀의 영명 축일에 하는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "자녀",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_22_161",
        "blessing_household",
        "자녀의 영명 축일에 하는 기도",
        "자녀"
      ]
    },
    {
      "id": "kr_23_169",
      "category": "blessing_household",
      "titles": {
        "KR": "조부모를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "부모",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_23_169",
        "blessing_household",
        "조부모를 위한 기도",
        "부모"
      ]
    },
    {
      "id": "kr_30_212",
      "category": "blessing_household",
      "titles": {
        "KR": "출발하는 순례자 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_212",
        "blessing_household",
        "출발하는 순례자 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_206",
      "category": "blessing_household",
      "titles": {
        "KR": "출산 전 어머니 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_206",
        "blessing_household",
        "출산 전 어머니 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_30_207",
      "category": "blessing_household",
      "titles": {
        "KR": "출산 후 어머니 축복 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅳ. 축복 예식과 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_30_207",
        "blessing_household",
        "출산 후 어머니 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      "id": "kr_21_154",
      "category": "blessing_household",
      "titles": {
        "KR": "태아를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "임신,출산,입양",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_21_154",
        "blessing_household",
        "태아를 위한 기도",
        "임신,출산,입양"
      ]
    },
    {
      "id": "kr_19_145",
      "category": "blessing_household",
      "titles": {
        "KR": "혼인을 준비하며 바치는 기도(약혼자의 기도)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "혼인",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_19_145",
        "blessing_household",
        "혼인을 준비하며 바치는 기도(약혼자의 기도)",
        "혼인"
      ]
    },
    {
      "id": "kr_19_148",
      "category": "blessing_household",
      "titles": {
        "KR": "혼인하는 이들(가족, 지인 등)을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "혼인",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_19_148",
        "blessing_household",
        "혼인하는 이들(가족, 지인 등)을 위한 기도",
        "혼인"
      ]
    },
    {
      "id": "kr_10_99",
      "category": "funeral",
      "titles": {
        "KR": "- 납골 또는 자연장(세상을 떠난 이들)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_99",
        "funeral",
        "- 납골 또는 자연장(세상을 떠난 이들)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_74",
      "category": "funeral",
      "titles": {
        "KR": "- 성인 호칭 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_74",
        "funeral",
        "- 성인 호칭 기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_98",
      "category": "funeral",
      "titles": {
        "KR": "- 쇄골 또는 습골(욥의 기도)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_98",
        "funeral",
        "- 쇄골 또는 습골(욥의 기도)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_80",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 113 / 마침기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_80",
        "funeral",
        "- 시편 113 / 마침기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_86",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 117",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_86",
        "funeral",
        "- 시편 117",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_90",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 118/마침기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_90",
        "funeral",
        "- 시편 118/마침기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_72",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 129(130)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_72",
        "funeral",
        "- 시편 129(130)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_77",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 129(130)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_77",
        "funeral",
        "- 시편 129(130)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_83",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 22(23) / 마침기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_83",
        "funeral",
        "- 시편 22(23) / 마침기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_89",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 24",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_89",
        "funeral",
        "- 시편 24",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_87",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 41",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_87",
        "funeral",
        "- 시편 41",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_73",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 50(51),3-21",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_73",
        "funeral",
        "- 시편 50(51),3-21",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_71",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 62(63),2-8",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_71",
        "funeral",
        "- 시편 62(63),2-8",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_84",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 83(84)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_84",
        "funeral",
        "- 시편 83(84)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_88",
      "category": "funeral",
      "titles": {
        "KR": "- 시편 92",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_88",
        "funeral",
        "- 시편 92",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_82",
      "category": "funeral",
      "titles": {
        "KR": "- 시편41(42),2-3.5;42(43),3-5",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_82",
        "funeral",
        "- 시편41(42),2-3.5;42(43),3-5",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_78",
      "category": "funeral",
      "titles": {
        "KR": "- 시편50(51),3-21",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_78",
        "funeral",
        "- 시편50(51),3-21",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_94",
      "category": "funeral",
      "titles": {
        "KR": "- 유가족을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_94",
        "funeral",
        "- 유가족을 위한 기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_92",
      "category": "funeral",
      "titles": {
        "KR": "- 자비송",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_92",
        "funeral",
        "- 자비송",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_76",
      "category": "funeral",
      "titles": {
        "KR": "- 주님의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_76",
        "funeral",
        "- 주님의 기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_95",
      "category": "funeral",
      "titles": {
        "KR": "- 즈카르야의 노래",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_95",
        "funeral",
        "- 즈카르야의 노래",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_75",
      "category": "funeral",
      "titles": {
        "KR": "- 찬미가",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_75",
        "funeral",
        "- 찬미가",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_93",
      "category": "funeral",
      "titles": {
        "KR": "- 청원기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_93",
        "funeral",
        "- 청원기도",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_97",
      "category": "funeral",
      "titles": {
        "KR": "- 화답송",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_97",
        "funeral",
        "- 화답송",
        "상장 예식"
      ]
    },
    {
      "id": "la_in_paradiso",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "In Paradiso"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_in_paradiso",
        "funeral",
        "In Paradiso",
        "Angeli"
      ]
    },
    {
      "id": "en_prayer_to_end_the_use_of_the_death_penalty",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to End the Use of the Death Penalty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Death and Dying",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_end_the_use_of_the_death_penalty",
        "funeral",
        "Prayer to End the Use of the Death Penalty",
        "Prayers for Death and Dying"
      ]
    },
    {
      "id": "en_prayers_at_the_death_of_a_baptized_child",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers at the Death of a Baptized Child",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Death and Dying",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_at_the_death_of_a_baptized_child",
        "funeral",
        "Prayers at the Death of a Baptized Child",
        "Prayers for Death and Dying"
      ]
    },
    {
      "id": "en_prayers_for_death_and_dying",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Death and Dying",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Death and Dying",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_death_and_dying",
        "funeral",
        "Prayers for Death and Dying"
      ]
    },
    {
      "id": "en_prayers_for_mourners",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Mourners",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Death and Dying",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_mourners",
        "funeral",
        "Prayers for Mourners",
        "Prayers for Death and Dying"
      ]
    },
    {
      "id": "jp_病人のための祈り",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "病人のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_病人のための祈り",
        "funeral",
        "病人のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_病気_怪我をした時",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "病気・怪我をした時",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_病気_怪我をした時",
        "funeral",
        "病気・怪我をした時",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_病気_怪我をした時の祈り",
      "category": "funeral",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "病気・怪我をした時の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_病気_怪我をした時の祈り",
        "funeral",
        "病気・怪我をした時の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "kr_10_79",
      "category": "funeral",
      "titles": {
        "KR": "염습과 입관",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_79",
        "funeral",
        "염습과 입관",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_218",
      "category": "funeral",
      "titles": {
        "KR": "우제",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_218",
        "funeral",
        "우제",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_85",
      "category": "funeral",
      "titles": {
        "KR": "운구",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_85",
        "funeral",
        "운구",
        "상장 예식"
      ]
    },
    {
      "id": "eternal_rest",
      "category": "funeral",
      "titles": {
        "KR": "위령 기도",
        "VN": "Nghỉ yên muôn đời",
        "EN": "Eternal Rest",
        "JP": "死者のための祈り",
        "LA": "Requiem Aeternam"
      },
      "texts": {
        "KR": "주님, 세상을 떠난 이들에게 영원한 안식을 주소서. 영원한 빛을 그들에게 비추소서. 세상을 떠난 이들이 하느님의 자비로 평화의 안식을 얻게 하소서. 아멘.",
        "VN": "Lạy Chúa, xin cho các linh hồn được nghỉ yên muôn đời, và cho ánh sáng ngàn thu chiếu soi trên các linh hồn ấy. Xin cho các linh hồn được nghỉ yên muôn đời. Amen.",
        "EN": "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.",
        "JP": "主よ、亡くなった人々に永遠の安息を与え、絶えざる光で照らしてください。神のいつくしみによって、安らかに憩うことができますように。アーメン。",
        "LA": "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen."
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "eternal_rest",
        "funeral",
        "위령 기도",
        "Nghỉ yên muôn đời",
        "Eternal Rest",
        "死者のための祈り",
        "Requiem Aeternam",
        "상장 예식",
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      "id": "kr_6_138",
      "category": "funeral",
      "titles": {
        "KR": "위령 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_138",
        "funeral",
        "위령 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_10_33",
      "category": "funeral",
      "titles": {
        "KR": "위령기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_33",
        "funeral",
        "위령기도 1",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_69",
      "category": "funeral",
      "titles": {
        "KR": "위령기도 2(짧은 위령 기도)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_69",
        "funeral",
        "위령기도 2(짧은 위령 기도)",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_215",
      "category": "funeral",
      "titles": {
        "KR": "임종과 운명",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_215",
        "funeral",
        "임종과 운명",
        "상장 예식"
      ]
    },
    {
      "id": "kr_29_191",
      "category": "funeral",
      "titles": {
        "KR": "임종과 운명",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_191",
        "funeral",
        "임종과 운명",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_10_81",
      "category": "funeral",
      "titles": {
        "KR": "출관",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_81",
        "funeral",
        "출관",
        "상장 예식"
      ]
    },
    {
      "id": "kr_10_91",
      "category": "funeral",
      "titles": {
        "KR": "하관",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_91",
        "funeral",
        "하관",
        "상장 예식"
      ]
    },
    {
      "id": "kr_29_190",
      "category": "funeral",
      "titles": {
        "KR": "하관",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_190",
        "funeral",
        "하관",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_10_96",
      "category": "funeral",
      "titles": {
        "KR": "화장",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "상장 예식",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_10_96",
        "funeral",
        "화장",
        "상장 예식"
      ]
    },
    {
      "id": "kr_29_192",
      "category": "funeral",
      "titles": {
        "KR": "화장",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "Ⅲ. 성사(예식)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_29_192",
        "funeral",
        "화장",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      "id": "kr_6_183",
      "category": "national",
      "titles": {
        "KR": "2025년 희년 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_183",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "2025년 희년 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_216",
      "category": "national",
      "titles": {
        "KR": "2027 서울 세계청년대회 공식기도문",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_216",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "2027 서울 세계청년대회 공식기도문",
        "여러 가지 기도"
      ]
    },
    {
      "id": "en_a_concluding_prayer_go_and_make_disciples",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Concluding Prayer - Go and Make Disciples",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_concluding_prayer_go_and_make_disciples",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Concluding Prayer - Go and Make Disciples"
      ]
    },
    {
      "id": "en_a_prayer_for_life",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Prayer for Life",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_prayer_for_life",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Prayer for Life"
      ]
    },
    {
      "id": "en_a_prayer_for_the_people_of_syria",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Prayer for the People of Syria",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_prayer_for_the_people_of_syria",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Prayer for the People of Syria"
      ]
    },
    {
      "id": "en_a_prayer_to_our_lady_of_guadalupe",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Prayer to Our Lady of Guadalupe",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_prayer_to_our_lady_of_guadalupe",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Prayer to Our Lady of Guadalupe"
      ]
    },
    {
      "id": "en_a_prayer_to_st_juan_diego",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Prayer to St. Juan Diego",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_prayer_to_st_juan_diego",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Prayer to St. Juan Diego"
      ]
    },
    {
      "id": "en_a_prayer_to_the_creator",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Prayer to the Creator",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_prayer_to_the_creator",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Prayer to the Creator"
      ]
    },
    {
      "id": "en_a_soldier_s_prayers",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "A Soldier's Prayers",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_a_soldier_s_prayers",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "A Soldier's Prayers"
      ]
    },
    {
      "id": "en_act_of_consecration_to_the_immaculate_heart_of_mary_for_russia_and_ukr",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Act of Consecration to the Immaculate Heart of Mary for Russia and Ukraine",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_act_of_consecration_to_the_immaculate_heart_of_mary_for_russia_and_ukr",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Act of Consecration to the Immaculate Heart of Mary for Russia and Ukraine"
      ]
    },
    {
      "id": "en_act_of_faith_hope_and_love",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Act of Faith, Hope, and Love",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_act_of_faith_hope_and_love",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Act of Faith, Hope, and Love"
      ]
    },
    {
      "id": "la_actus_caritatis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Actus Caritatis"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_actus_caritatis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Actus Caritatis",
        "Generalia"
      ]
    },
    {
      "id": "la_actus_fidei",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Actus Fidei"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_actus_fidei",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Actus Fidei",
        "Generalia"
      ]
    },
    {
      "id": "la_actus_reparationis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Actus Reparationis"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_actus_reparationis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Actus Reparationis",
        "Christus"
      ]
    },
    {
      "id": "la_actus_spei",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Actus Spei"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_actus_spei",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Actus Spei",
        "Generalia"
      ]
    },
    {
      "id": "la_ad_sanctum_raphaelem_archangelum",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ad Sanctum Raphaelem Archangelum"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_ad_sanctum_raphaelem_archangelum",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Ad Sanctum Raphaelem Archangelum",
        "Angeli"
      ]
    },
    {
      "id": "la_alma_redemptoris_mater",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Alma Redemptoris Mater"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_alma_redemptoris_mater",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Alma Redemptoris Mater",
        "Maria"
      ]
    },
    {
      "id": "la_ave_maris_stella",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ave Maris Stella"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_ave_maris_stella",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Ave Maris Stella",
        "Maria"
      ]
    },
    {
      "id": "la_ave_regina_caelorum",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Ave Regina Caelorum"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_ave_regina_caelorum",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Ave Regina Caelorum",
        "Maria"
      ]
    },
    {
      "id": "en_cchd_2016_prayer_card",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "CCHD 2016 Prayer Card",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_cchd_2016_prayer_card",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "CCHD 2016 Prayer Card"
      ]
    },
    {
      "id": "en_cchd_2016_prayer_card_in_spanish",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "CCHD 2016 Prayer Card in Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_cchd_2016_prayer_card_in_spanish",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "CCHD 2016 Prayer Card in Spanish"
      ]
    },
    {
      "id": "en_covid_19_prayer_card",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "COVID-19 Prayer Card",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_covid_19_prayer_card",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "COVID-19 Prayer Card"
      ]
    },
    {
      "id": "en_care_for_god_s_creation_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Care for God’s Creation Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_care_for_god_s_creation_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Care for God’s Creation Prayer"
      ]
    },
    {
      "id": "en_catechist_s_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Catechist’s Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_catechist_s_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Catechist’s Prayer"
      ]
    },
    {
      "id": "en_chaplet_of_divine_mercy",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Chaplet of Divine Mercy",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_chaplet_of_divine_mercy",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Chaplet of Divine Mercy"
      ]
    },
    {
      "id": "en_civilize_it_advent_prayer_to_be_like_mary",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Civilize It: Advent Prayer to be like Mary",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_civilize_it_advent_prayer_to_be_like_mary",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Civilize It: Advent Prayer to be like Mary"
      ]
    },
    {
      "id": "en_civilize_it_an_advent_prayer_to_see_jesus_in_others",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Civilize It: An Advent Prayer to See Jesus in Others",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_civilize_it_an_advent_prayer_to_see_jesus_in_others",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Civilize It: An Advent Prayer to See Jesus in Others"
      ]
    },
    {
      "id": "la_commemoratio_archangelorm",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Archangelorm"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_commemoratio_archangelorm",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Archangelorm",
        "Angeli"
      ]
    },
    {
      "id": "la_commemoratio_sancti_antonii",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Antonii"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_commemoratio_sancti_antonii",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Antonii",
        "Sancti"
      ]
    },
    {
      "id": "la_commemoratio_sancti_benedicti",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Benedicti"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_commemoratio_sancti_benedicti",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Benedicti",
        "Sancti"
      ]
    },
    {
      "id": "la_commemoratio_sancti_francisci_assisiensis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Francisci Assisiensis"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_commemoratio_sancti_francisci_assisiensis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Francisci Assisiensis",
        "Sancti"
      ]
    },
    {
      "id": "la_commemoratio_sancti_gabrielis_archangeli",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Gabrielis Archangeli"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_commemoratio_sancti_gabrielis_archangeli",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Gabrielis Archangeli",
        "Angeli"
      ]
    },
    {
      "id": "la_commemoratio_sancti_michaelis_archangeli",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Michaelis Archangeli"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_commemoratio_sancti_michaelis_archangeli",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Michaelis Archangeli",
        "Angeli"
      ]
    },
    {
      "id": "la_commemoratio_sancti_raphaelis_archangeli",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Commemoratio Sancti Raphaelis Archangeli"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_commemoratio_sancti_raphaelis_archangeli",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Commemoratio Sancti Raphaelis Archangeli",
        "Angeli"
      ]
    },
    {
      "id": "en_covid_19_a_prayer_of_solidarity",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Covid-19: A Prayer of Solidarity",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_covid_19_a_prayer_of_solidarity",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Covid-19: A Prayer of Solidarity"
      ]
    },
    {
      "id": "en_create_in_me_a_love_ever_more_open",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Create in me a Love ever more open",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_create_in_me_a_love_ever_more_open",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Create in me a Love ever more open"
      ]
    },
    {
      "id": "la_deus_protector_noster",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Deus, Protector Noster"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_deus_protector_noster",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Deus, Protector Noster",
        "Generalia"
      ]
    },
    {
      "id": "la_deus_in_adjutorium_meum_intende",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Deus, in Adjutorium Meum Intende"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_deus_in_adjutorium_meum_intende",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Deus, in Adjutorium Meum Intende",
        "Generalia"
      ]
    },
    {
      "id": "en_dignity_of_work_and_the_rights_of_workers",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Dignity of Work and the Rights of Workers",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_dignity_of_work_and_the_rights_of_workers",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Dignity of Work and the Rights of Workers"
      ]
    },
    {
      "id": "en_divine_praises",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Divine Praises",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "Blessed be God.\nBlessed be his holy Name. \nBlessed be Jesus Christ, true God and true man.\nBlessed be the Name of Jesus.\nBlessed be his most Sacred Heart.\nBlessed be his most Precious Blood.\nBlessed be Jesus in the most holy Sacrament of the altar.\nBlessed be the Holy Spirit, the Paraclete.\nBlessed be the great Mother of God, Mary most holy.\nBlessed be her holy and Immaculate Conception.\nBlessed be her glorious Assumption.\nBlessed be the name of Mary, Virgin and Mother.\nBlessed be Saint Joseph, her most chaste Spouse. \nBlessed be God in his Angels and in his Saints.",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_divine_praises",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Divine Praises",
        "Basic Prayers"
      ]
    },
    {
      "id": "la_domine_iesu_christe_in_unione",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Domine Iesu Christe, In Unione"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_domine_iesu_christe_in_unione",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Domine Iesu Christe, In Unione",
        "Generalia"
      ]
    },
    {
      "id": "la_domine_iesu_christe_qui_mariae_et_ioseph_subditus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Domine Iesu Christe, qui Mariae et Ioseph subditus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_domine_iesu_christe_qui_mariae_et_ioseph_subditus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Domine Iesu Christe, qui Mariae et Ioseph subditus",
        "Christus"
      ]
    },
    {
      "id": "la_flos_carmeli",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Flos Carmeli"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_flos_carmeli",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Flos Carmeli",
        "Maria"
      ]
    },
    {
      "id": "en_for_deceased_veterans",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "For Deceased Veterans",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_for_deceased_veterans",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "For Deceased Veterans"
      ]
    },
    {
      "id": "000.the_salve_regina",
      "category": "common",
      "titles": {
        "KR": "성모 찬송 (묵주 기도 성월)",
        "VN": "Kinh Lạy Nữ Vương",
        "EN": "Hail, Holy Queen (The Salve Regina)",
        "JP": "元后あわれみの母（Salve Regina）",
        "LA": "Salve Regina"
      },
      "texts": {
        "KR": "<b>○</b> 모후이시며 사랑이 넘친 어머니,\n우리의 생명, 기쁨, 희망이시여,\n<b>●</b> 당신 우러러 하와의 그 자손들이\n눈물을 흘리며 부르짖나이다,\n슬픔의 골짜기에서.\n<b>○</b> 우리들의 보호자 성모님,\n불쌍한 저희를\n인자로운 눈으로 굽어보소서.\n<b>●</b> 귀양살이 끝날 때에\n당신의 아들 우리 주 예수님 뵙게 하소서.\n너그러우시고, 자애로우시며\n오! 아름다우신 동정 마리아님.\n<b>○</b> 천주의 성모님, 저희를 위하여 빌어 주시어\n<b>●</b> 그리스도께서 약속하신 영원한 생명을 얻게 하소서.\n ✚ 기도합시다.\n하느님,\n외아드님께서 삶과 죽음과 부활로\n저희에게 영원한 구원을 마련해 주셨나이다.\n복되신 동정 마리아와 함께 이 신비를 묵상하며\n묵주 기도를 바치오니\n저희가 그 가르침을 따라\n영원한 생명을 얻게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        "VN": "Lạy Nữ Vương Mẹ nhân lành làm cho chúng con được sống\nđược vui\nđược cậy\nThân lạy Mẹ\nchúng con con cháu Evà ở chốn khách đây kêu đến cùng Bà\nchúng con ở nơi khóc lóc than thở kêu khẩn Bà thương\nHỡi ơi! Bà là chủ bầu chúng con\nxin ghé mắt thương xem chúng con\nĐến sau khỏi đày\nxin cho chúng con được thấy Đức Chúa Giê-su con lòng Bà gồm phước lạ\nÔi! khoan thay\nnhân thay\ndịu thay\nThánh Ma-ri-a trọn đời đồng trinh. A-men.",
        "EN": "Hail, Holy Queen, Mother of Mercy,\nour life, our sweetness and our hope.\nTo thee do we cry, \npoor banished children of Eve.\nTo thee do we send up our sighs,\nmourning and weeping in this valley of tears.\nTurn then, most gracious advocate,\nthine eyes of mercy toward us,\nand after this our exile\nshow unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving,\nO sweet Virgin Mary.",
        "JP": "元后、あわれみの母、\nわれらのいのち、喜び、希望。\n旅路からあなたに叫ぶエバの子、\nなげきながら、泣きながらも、\n涙の谷にあなたを慕う。\nわれらのためにとりなす方、\nあわれみの目をわれらに注ぎ、\n尊いあなたの子イエスを\n旅路の果てに示してください。\nおお、いつくしみ、恵み溢れる、\n喜びのおとめマリア。",
        "LA": "Salve, Regina, Mater misericordiae,\nvita, dulcedo, et spes nostra, salve.\nad te clamamus\nexsules filii Hevae,\nad te suspiramus, gementes et flentes\nin hac lacrimarum valle.\nEia, ergo, advocata nostra, illos tuos\nmisericordes oculos ad nos converte;\net Jesum, benedictum fructum ventris tui,\nnobis post hoc exsilium ostende.\nO clemens, O pia, O dulcis Virgo Maria.\n(Ora pro nobis sancta Dei Genetrix.\nUt digni efficiamur promissionibus Christi.\nOremus.\nOmnipotens sempiterne Deus,\nqui gloriosae Virginis Matris Mariae corpus et animam,\nut dignum Filii tui habitaculum effici mereretur,\nSpiritu Sancto  cooperante praeparasti:\nda, ut cuius commemoratione laetamur;\neius pia intercessione,\nab instantibus malis,\net a morte perpetua liberemur.\nPer eundem Christum Dominum nostrum.\nAmen.)"
      },
      "sourceCategory": {
        "KR": "성월기도; 묵주기도",
        "VN": "Các Kinh Cầu",
        "EN": "Basic Prayers",
        "JP": "日々の祈り",
        "LA": "Generalia"
      },
      "tags": [
        "000.the_salve_regina",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성모 찬송 (묵주 기도 성월)",
        "Kinh Lạy Nữ Vương",
        "Hail, Holy Queen (The Salve Regina)",
        "元后あわれみの母（Salve Regina）",
        "Salve Regina",
        "성월기도",
        "묵주기도",
        "Lần Hạt Mân Côi",
        "Basic Prayers",
        "日々の祈り",
        "성월기도; 묵주기도",
        "Các Kinh Cầu",
        "Generalia"
      ]
    },
    {
      "id": "en_health_care_pulpit_announcement_and_prayer_pdf",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Health Care Pulpit Announcement and Prayer PDF",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_health_care_pulpit_announcement_and_prayer_pdf",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Health Care Pulpit Announcement and Prayer PDF"
      ]
    },
    {
      "id": "en_health_care_pulpit_announcement_and_prayer_pdf_in_spanish",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Health Care Pulpit Announcement and Prayer PDF in Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_health_care_pulpit_announcement_and_prayer_pdf_in_spanish",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Health Care Pulpit Announcement and Prayer PDF in Spanish"
      ]
    },
    {
      "id": "en_hear_us_o_god",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Hear Us, O God",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_hear_us_o_god",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Hear Us, O God"
      ]
    },
    {
      "id": "en_help_me_to_listen_to_the_voice_of_creation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Help Me to Listen to the Voice of Creation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_help_me_to_listen_to_the_voice_of_creation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Help Me to Listen to the Voice of Creation"
      ]
    },
    {
      "id": "en_help_us_build_communities_in_god_s_vision_of_justice",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Help Us Build Communities in God's Vision of Justice",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_help_us_build_communities_in_god_s_vision_of_justice",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Help Us Build Communities in God's Vision of Justice"
      ]
    },
    {
      "id": "en_help_us_to_love_like_the_good_samaritan",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Help Us to Love Like the Good Samaritan",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_help_us_to_love_like_the_good_samaritan",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Help Us to Love Like the Good Samaritan"
      ]
    },
    {
      "id": "en_hope_amidst_dark_clouds",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Hope Amidst Dark Clouds",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_hope_amidst_dark_clouds",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Hope Amidst Dark Clouds"
      ]
    },
    {
      "id": "en_how_to_pray_the_chaplet_of_divine_mercy",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "How To Pray the Chaplet of Divine Mercy",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_how_to_pray_the_chaplet_of_divine_mercy",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "How To Pray the Chaplet of Divine Mercy"
      ]
    },
    {
      "id": "la_iesu_dulcis_memoria",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Iesu Dulcis Memoria"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_iesu_dulcis_memoria",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Iesu Dulcis Memoria",
        "Christus"
      ]
    },
    {
      "id": "la_iesu_meus_miserere",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Iesu Meus, Miserere"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_iesu_meus_miserere",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Iesu Meus, Miserere",
        "Generalia"
      ]
    },
    {
      "id": "en_intercessions_for_the_marginalized",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Intercessions for the Marginalized",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_intercessions_for_the_marginalized",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Intercessions for the Marginalized"
      ]
    },
    {
      "id": "en_intercessory_prayers_the_marginalized",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Intercessory Prayers: The Marginalized",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_intercessory_prayers_the_marginalized",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Intercessory Prayers: The Marginalized"
      ]
    },
    {
      "id": "la_inviolata",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Inviolata"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_inviolata",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Inviolata",
        "Maria"
      ]
    },
    {
      "id": "vn_kinh_tin_cay_men",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "Kinh Tin - Cậy - Mến",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_kinh_tin_cay_men",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Kinh Tin - Cậy - Mến"
      ]
    },
    {
      "id": "en_lenten_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Lenten Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_lenten_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Lenten Prayer"
      ]
    },
    {
      "id": "en_lenten_prayer_for_civility",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Lenten Prayer for Civility",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_lenten_prayer_for_civility",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Lenten Prayer for Civility"
      ]
    },
    {
      "id": "en_lenten_prayers_unemployment_and_poverty",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Lenten Prayers - Unemployment and Poverty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_lenten_prayers_unemployment_and_poverty",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Lenten Prayers - Unemployment and Poverty"
      ]
    },
    {
      "id": "en_letania_por_la_libertad",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Letanía por la Libertad",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_letania_por_la_libertad",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Letanía por la Libertad"
      ]
    },
    {
      "id": "en_life_and_dignity_of_the_human_person_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Life and Dignity of the Human Person Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_life_and_dignity_of_the_human_person_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Life and Dignity of the Human Person Prayer"
      ]
    },
    {
      "id": "la_magnificat",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Magnificat"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_magnificat",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Magnificat",
        "Maria"
      ]
    },
    {
      "id": "en_memorare",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Memorare",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_memorare",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Memorare"
      ]
    },
    {
      "id": "la_memorare",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Memorare"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_memorare",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Memorare",
        "Maria"
      ]
    },
    {
      "id": "en_morning_offering",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Morning Offering",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "Basic Prayers",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_morning_offering",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Morning Offering",
        "Basic Prayers"
      ]
    },
    {
      "id": "en_national_migration_week_a_collected_book_of_prayers_for_migrants",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "National Migration Week: A Collected Book of Prayers for Migrants",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_national_migration_week_a_collected_book_of_prayers_for_migrants",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "National Migration Week: A Collected Book of Prayers for Migrants"
      ]
    },
    {
      "id": "la_nativitas_christi_novena_sancti_andreae",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Nativitas Christi Novena Sancti Andreae"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_nativitas_christi_novena_sancti_andreae",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Nativitas Christi Novena Sancti Andreae",
        "Sancti"
      ]
    },
    {
      "id": "en_novena_for_faithful_citizenship",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Novena for Faithful Citizenship",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_novena_for_faithful_citizenship",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Novena for Faithful Citizenship"
      ]
    },
    {
      "id": "en_novena_for_the_solemnity_of_saint_joseph",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Novena for the Solemnity of Saint Joseph",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_novena_for_the_solemnity_of_saint_joseph",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Novena for the Solemnity of Saint Joseph"
      ]
    },
    {
      "id": "la_nunc_dimittis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Nunc Dimittis"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_nunc_dimittis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Nunc Dimittis",
        "Christus"
      ]
    },
    {
      "id": "la_o_bone_iesu",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Bone Iesu"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_o_bone_iesu",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Bone Iesu",
        "Christus"
      ]
    },
    {
      "id": "la_o_caelestis_medice",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Caelestis Medice"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_o_caelestis_medice",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Caelestis Medice",
        "Angeli"
      ]
    },
    {
      "id": "la_o_creator_sancte_spiritus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Creator Sancte Spiritus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Spiritus Sanctus"
      },
      "tags": [
        "la_o_creator_sancte_spiritus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Creator Sancte Spiritus",
        "Spiritus Sanctus"
      ]
    },
    {
      "id": "la_o_divi_amoris_victima",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Divi Amoris Victima"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_o_divi_amoris_victima",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Divi Amoris Victima",
        "Christus"
      ]
    },
    {
      "id": "la_o_fortitudo_dei",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Fortitudo Dei"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_o_fortitudo_dei",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Fortitudo Dei",
        "Angeli"
      ]
    },
    {
      "id": "la_o_princeps_caelestis_militiae",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Princeps Caelestis Militiae"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_o_princeps_caelestis_militiae",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Princeps Caelestis Militiae",
        "Angeli"
      ]
    },
    {
      "id": "en_o_sacrum_convivium",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "O Sacrum Convivium",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_o_sacrum_convivium",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Sacrum Convivium"
      ]
    },
    {
      "id": "la_o_sancte_spiritus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "O Sancte Spiritus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Spiritus Sanctus"
      },
      "tags": [
        "la_o_sancte_spiritus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "O Sancte Spiritus",
        "Spiritus Sanctus"
      ]
    },
    {
      "id": "la_obsecro_te_angelice_spiritus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Obsecro Te, Angelice Spiritus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_obsecro_te_angelice_spiritus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Obsecro Te, Angelice Spiritus",
        "Angeli"
      ]
    },
    {
      "id": "en_oracion_para_ciudadanos_fieles",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oracion Para Ciudadanos Fieles",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_ciudadanos_fieles",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oracion Para Ciudadanos Fieles"
      ]
    },
    {
      "id": "en_oracion_de_los_fieles_por_la_jornada_de_oracion_por_la_paz_en_nuestras",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración De Los Fieles Por La Jornada De Oración Por La Paz En Nuestras Comunidades",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_de_los_fieles_por_la_jornada_de_oracion_por_la_paz_en_nuestras",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración De Los Fieles Por La Jornada De Oración Por La Paz En Nuestras Comunidades"
      ]
    },
    {
      "id": "en_oracion_despues_de_un_dia_de_elecciones",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración despues de un día de elecciones",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_despues_de_un_dia_de_elecciones",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración despues de un día de elecciones"
      ]
    },
    {
      "id": "en_oracion_para_antes_de_unas_elecciones",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración para Antes de Unas Elecciones",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_antes_de_unas_elecciones",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración para Antes de Unas Elecciones"
      ]
    },
    {
      "id": "en_oracion_para_abordar_el_pecado_del_racismo",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración para abordar el pecado del racismo",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_abordar_el_pecado_del_racismo",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración para abordar el pecado del racismo"
      ]
    },
    {
      "id": "en_oracion_para_cuidar_de_nuestra_casa_comun",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración para cuidar de nuestra casa común",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_cuidar_de_nuestra_casa_comun",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración para cuidar de nuestra casa común"
      ]
    },
    {
      "id": "en_oracion_para_llegar_a_ser_buenos_mayordomos_de_la_creacion_de_dios",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración para llegar a ser buenos mayordomos de la creación de Dios",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_llegar_a_ser_buenos_mayordomos_de_la_creacion_de_dios",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración para llegar a ser buenos mayordomos de la creación de Dios"
      ]
    },
    {
      "id": "en_oracion_para_sanar_la_division_racial",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración para sanar la división racial",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_para_sanar_la_division_racial",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración para sanar la división racial"
      ]
    },
    {
      "id": "en_oracion_por_el_papa_benedicto_xvi",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración por el Papa Benedicto XVI",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_por_el_papa_benedicto_xvi",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración por el Papa Benedicto XVI"
      ]
    },
    {
      "id": "en_oracion_por_el_sinodo_sobre_la_sinodalidad",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración por el Sínodo sobre la Sinodalidad",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_por_el_sinodo_sobre_la_sinodalidad",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración por el Sínodo sobre la Sinodalidad"
      ]
    },
    {
      "id": "en_oracion_por_la_unidad_para_superar_las_divisiones",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Oración por la unidad, para superar las divisiones",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_oracion_por_la_unidad_para_superar_las_divisiones",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oración por la unidad, para superar las divisiones"
      ]
    },
    {
      "id": "en_orando_como_un_ciudadano_fiel",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Orando Como Un Ciudadano Fiel",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_orando_como_un_ciudadano_fiel",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Orando Como Un Ciudadano Fiel"
      ]
    },
    {
      "id": "la_oratio_ad_angelum_custodem",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Ad Angelum Custodem"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_oratio_ad_angelum_custodem",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Ad Angelum Custodem",
        "Angeli"
      ]
    },
    {
      "id": "la_oratio_finalis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Finalis"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Coronula Divinae Misericordiae"
      },
      "tags": [
        "la_oratio_finalis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Finalis",
        "Coronula Divinae Misericordiae"
      ]
    },
    {
      "id": "la_oratio_iesu",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Iesu"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_oratio_iesu",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Iesu",
        "Christus"
      ]
    },
    {
      "id": "la_oratio_incipiens",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Incipiens"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Coronula Divinae Misericordiae"
      },
      "tags": [
        "la_oratio_incipiens",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Incipiens",
        "Coronula Divinae Misericordiae"
      ]
    },
    {
      "id": "la_oratio_pro_propagatione_fidei",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Pro Propagatione Fidei"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Spiritus Sanctus"
      },
      "tags": [
        "la_oratio_pro_propagatione_fidei",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Pro Propagatione Fidei",
        "Spiritus Sanctus"
      ]
    },
    {
      "id": "la_oratio_sagittae_aureae",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Sagittae Aureae"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_oratio_sagittae_aureae",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Sagittae Aureae",
        "Generalia"
      ]
    },
    {
      "id": "la_oratio_sancti_augustini",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Sancti Augustini"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_oratio_sancti_augustini",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Sancti Augustini",
        "Sancti"
      ]
    },
    {
      "id": "la_oratio_sancti_benedicti",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio Sancti Benedicti"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_oratio_sancti_benedicti",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio Sancti Benedicti",
        "Sancti"
      ]
    },
    {
      "id": "la_oratio_ad_dominum_nostrum_in_cruce",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Oratio ad Dominum Nostrum in Cruce"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_oratio_ad_dominum_nostrum_in_cruce",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Oratio ad Dominum Nostrum in Cruce",
        "Christus"
      ]
    },
    {
      "id": "la_pater_aeterne",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Pater Aeterne"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Coronula Divinae Misericordiae"
      },
      "tags": [
        "la_pater_aeterne",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pater Aeterne",
        "Coronula Divinae Misericordiae"
      ]
    },
    {
      "id": "la_petitiones_sancti_augustini",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Petitiones Sancti Augustini"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_petitiones_sancti_augustini",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Petitiones Sancti Augustini",
        "Christus"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_mercy",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis' Prayer for Mercy",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_mercy",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis' Prayer for Mercy"
      ]
    },
    {
      "id": "en_pope_francis_prayer_at_the_way_of_the_cross",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer at the Way of the Cross",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_at_the_way_of_the_cross",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer at the Way of the Cross"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_peace",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer for Peace",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_peace",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer for Peace"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_peace_and_protection_from_violence_and_from_te",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer for Peace and Protection from Violence and from Terrorism",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_peace_and_protection_from_violence_and_from_te",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer for Peace and Protection from Violence and from Terrorism"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_workers",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer for Workers",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_workers",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer for Workers"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_the_immaculate_conception",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer for the Immaculate Conception",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_the_immaculate_conception",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer for the Immaculate Conception"
      ]
    },
    {
      "id": "en_pope_francis_prayer_for_the_joy_of_the_gospel",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pope Francis’ Prayer for the Joy of the Gospel",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pope_francis_prayer_for_the_joy_of_the_gospel",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pope Francis’ Prayer for the Joy of the Gospel"
      ]
    },
    {
      "id": "en_prayer_after_an_election",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer After an Election",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_after_an_election",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer After an Election"
      ]
    },
    {
      "id": "en_prayer_against_racism",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Against Racism",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_against_racism",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Against Racism"
      ]
    },
    {
      "id": "en_prayer_against_racism_prayer_card_english",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Against Racism Prayer Card (English)",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_against_racism_prayer_card_english",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Against Racism Prayer Card (English)"
      ]
    },
    {
      "id": "en_prayer_against_racism_prayer_card_spanish",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Against Racism Prayer Card (Spanish)",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_against_racism_prayer_card_spanish",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Against Racism Prayer Card (Spanish)"
      ]
    },
    {
      "id": "en_prayer_before_an_election",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Before an Election",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_before_an_election",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Before an Election"
      ]
    },
    {
      "id": "en_prayer_card_for_day_of_prayer_for_persecuted_christians_november_26_20",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Card for Day of Prayer for Persecuted Christians, November 26 2017",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_card_for_day_of_prayer_for_persecuted_christians_november_26_20",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Card for Day of Prayer for Persecuted Christians, November 26 2017"
      ]
    },
    {
      "id": "en_prayer_card_for_the_anniversaries_of_hiroshima_and_nagasaki",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Card for the Anniversaries of Hiroshima and Nagasaki",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_card_for_the_anniversaries_of_hiroshima_and_nagasaki",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Card for the Anniversaries of Hiroshima and Nagasaki"
      ]
    },
    {
      "id": "en_prayer_card_of_syria_commemorating_visit_from_his_beatitude_gregorios_",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Card of Syria Commemorating Visit from His Beatitude Gregorios III",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_card_of_syria_commemorating_visit_from_his_beatitude_gregorios_",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Card of Syria Commemorating Visit from His Beatitude Gregorios III"
      ]
    },
    {
      "id": "en_prayer_during_difficult_economic_times",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer During Difficult Economic Times",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_during_difficult_economic_times",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer During Difficult Economic Times"
      ]
    },
    {
      "id": "en_prayer_from_a_canticle_by_saint_john_of_the_cross",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer From a Canticle by Saint John of the Cross",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_from_a_canticle_by_saint_john_of_the_cross",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer From a Canticle by Saint John of the Cross"
      ]
    },
    {
      "id": "en_prayer_inspired_by_pope_francis_laudate_deum_praise_god",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Inspired by Pope Francis' Laudate Deum (Praise God)",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_inspired_by_pope_francis_laudate_deum_praise_god",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Inspired by Pope Francis' Laudate Deum (Praise God)"
      ]
    },
    {
      "id": "en_prayer_service_for_national_day_of_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Service for National Day of Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_service_for_national_day_of_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Service for National Day of Prayer"
      ]
    },
    {
      "id": "en_prayer_service_to_put_two_feet_of_love_in_action",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Service to Put Two Feet of Love in Action",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_service_to_put_two_feet_of_love_in_action",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Service to Put Two Feet of Love in Action"
      ]
    },
    {
      "id": "en_prayer_service_to_be_disciples_on_mission",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer Service to be Disciples on Mission",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_service_to_be_disciples_on_mission",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer Service to be Disciples on Mission"
      ]
    },
    {
      "id": "en_prayer_when_gathering_to_meet_or_study",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer When Gathering to Meet or Study",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_when_gathering_to_meet_or_study",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer When Gathering to Meet or Study"
      ]
    },
    {
      "id": "en_prayer_for_basic_rights",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Basic Rights",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_basic_rights",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Basic Rights"
      ]
    },
    {
      "id": "en_prayer_for_charity_in_truth",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Charity in Truth",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_charity_in_truth",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Charity in Truth"
      ]
    },
    {
      "id": "en_prayer_for_civic_leaders",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Civic Leaders",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_civic_leaders",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Civic Leaders"
      ]
    },
    {
      "id": "en_prayer_for_community",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Community",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_community",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Community"
      ]
    },
    {
      "id": "en_prayer_for_end_of_nuclear_weapons",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for End of Nuclear Weapons",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_end_of_nuclear_weapons",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for End of Nuclear Weapons"
      ]
    },
    {
      "id": "en_prayer_for_families",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Families",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_families",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Families"
      ]
    },
    {
      "id": "en_prayer_for_healing_victims_of_abuse",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Healing Victims of Abuse",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_healing_victims_of_abuse",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Healing Victims of Abuse"
      ]
    },
    {
      "id": "en_prayer_for_justice",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Justice",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_justice",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Justice"
      ]
    },
    {
      "id": "en_prayer_for_labor_day",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Labor Day",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_labor_day",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Labor Day"
      ]
    },
    {
      "id": "en_prayer_for_life_and_dignity",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Life and Dignity",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_life_and_dignity",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Life and Dignity"
      ]
    },
    {
      "id": "en_prayer_for_memorial_day_last_monday_in_may",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Memorial Day (Last Monday in May)",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_memorial_day_last_monday_in_may",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Memorial Day (Last Monday in May)"
      ]
    },
    {
      "id": "en_prayer_for_migrant_families",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Migrant Families",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_migrant_families",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Migrant Families"
      ]
    },
    {
      "id": "en_prayer_for_migrants",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Migrants",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_migrants",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Migrants"
      ]
    },
    {
      "id": "en_prayer_for_migrants_and_refugees",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Migrants and Refugees",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_migrants_and_refugees",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Migrants and Refugees"
      ]
    },
    {
      "id": "en_prayer_for_our_troops",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Our Troops",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_our_troops",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Our Troops"
      ]
    },
    {
      "id": "en_prayer_for_peace_in_iraq",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Peace in Iraq",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_peace_in_iraq",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Peace in Iraq"
      ]
    },
    {
      "id": "en_prayer_for_peace_in_our_communities_prayer_card_in_english",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Peace in Our Communities Prayer Card in English",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_peace_in_our_communities_prayer_card_in_english",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Peace in Our Communities Prayer Card in English"
      ]
    },
    {
      "id": "en_prayer_for_peace_in_our_communities_prayer_card_in_spanish",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Peace in Our Communities Prayer Card in Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_peace_in_our_communities_prayer_card_in_spanish",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Peace in Our Communities Prayer Card in Spanish"
      ]
    },
    {
      "id": "en_prayer_for_peace_of_pope_francis",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Peace of Pope Francis",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_peace_of_pope_francis",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Peace of Pope Francis"
      ]
    },
    {
      "id": "en_prayer_for_pope_benedict_xvi",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Pope Benedict XVI",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_pope_benedict_xvi",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Pope Benedict XVI"
      ]
    },
    {
      "id": "en_prayer_for_pope_leo_xiv",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Pope Leo XIV",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_pope_leo_xiv",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Pope Leo XIV"
      ]
    },
    {
      "id": "en_prayer_for_priests",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Priests",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_priests",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Priests"
      ]
    },
    {
      "id": "en_prayer_for_protection_of_conscience_rights_in_health_care",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Protection of Conscience Rights in Health Care",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_protection_of_conscience_rights_in_health_care",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Protection of Conscience Rights in Health Care"
      ]
    },
    {
      "id": "en_prayer_for_safety",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Safety",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_safety",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Safety"
      ]
    },
    {
      "id": "en_prayer_for_solidarity",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Solidarity",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_solidarity",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Solidarity"
      ]
    },
    {
      "id": "en_prayer_for_students",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Students",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_students",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Students"
      ]
    },
    {
      "id": "en_prayer_for_teachers",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Teachers",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_teachers",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Teachers"
      ]
    },
    {
      "id": "en_prayer_for_those_in_poverty",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Those in Poverty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_those_in_poverty",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Those in Poverty"
      ]
    },
    {
      "id": "en_prayer_for_unity_to_overcome_division",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Unity, to Overcome Division",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_unity_to_overcome_division",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Unity, to Overcome Division"
      ]
    },
    {
      "id": "en_prayer_for_vocations",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Vocations",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_vocations",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Vocations"
      ]
    },
    {
      "id": "en_prayer_for_work",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Work",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_work",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Work"
      ]
    },
    {
      "id": "en_prayer_for_youth",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for Youth",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_youth",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for Youth"
      ]
    },
    {
      "id": "en_prayer_for_a_victim_of_accident_or_violence",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for a Victim of Accident or Violence",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_a_victim_of_accident_or_violence",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for a Victim of Accident or Violence"
      ]
    },
    {
      "id": "en_prayer_for_the_election_of_a_new_pope",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the Election of a New Pope",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_election_of_a_new_pope",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the Election of a New Pope"
      ]
    },
    {
      "id": "en_prayer_for_the_new_evangelization",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the New Evangelization",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_new_evangelization",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the New Evangelization"
      ]
    },
    {
      "id": "en_prayer_for_the_new_year",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the New Year",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_new_year",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the New Year"
      ]
    },
    {
      "id": "en_prayer_for_the_poor",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the Poor",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_poor",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the Poor"
      ]
    },
    {
      "id": "en_prayer_for_the_protection_of_religious_liberty",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the Protection of Religious Liberty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_protection_of_religious_liberty",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the Protection of Religious Liberty"
      ]
    },
    {
      "id": "en_prayer_for_the_synod_on_synodality",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer for the Synod on Synodality",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_for_the_synod_on_synodality",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer for the Synod on Synodality"
      ]
    },
    {
      "id": "en_prayer_from_a_canticle_by_st_john_of_the_cross",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer from a Canticle by St. John of the Cross",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_from_a_canticle_by_st_john_of_the_cross",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer from a Canticle by St. John of the Cross"
      ]
    },
    {
      "id": "en_prayer_in_time_of_financial_difficulties",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer in Time of Financial Difficulties",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_in_time_of_financial_difficulties",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer in Time of Financial Difficulties"
      ]
    },
    {
      "id": "en_prayer_in_times_of_seeking_god_s_will",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer in Times of Seeking God's Will",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_in_times_of_seeking_god_s_will",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer in Times of Seeking God's Will"
      ]
    },
    {
      "id": "en_prayer_in_times_of_suffering_and_need",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer in Times of Suffering and Need",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_in_times_of_suffering_and_need",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer in Times of Suffering and Need"
      ]
    },
    {
      "id": "en_prayer_of_the_elderly_pope_saint_john_paul_ii",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer of the Elderly, Pope Saint John Paul II",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_of_the_elderly_pope_saint_john_paul_ii",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer of the Elderly, Pope Saint John Paul II"
      ]
    },
    {
      "id": "en_prayer_of_the_faithful_for_the_day_of_prayer_for_peace_in_our_communit",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer of the Faithful for the Day of Prayer for Peace in Our Communities",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_of_the_faithful_for_the_day_of_prayer_for_peace_in_our_communit",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer of the Faithful for the Day of Prayer for Peace in Our Communities"
      ]
    },
    {
      "id": "en_prayer_on_the_solemnity_of_the_immaculate_conception",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer on the Solemnity of the Immaculate Conception",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_on_the_solemnity_of_the_immaculate_conception",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer on the Solemnity of the Immaculate Conception"
      ]
    },
    {
      "id": "en_prayer_to_address_the_sin_of_racism",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Address the Sin of Racism",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_address_the_sin_of_racism",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Address the Sin of Racism"
      ]
    },
    {
      "id": "en_prayer_to_be_disciples_and_missionaries",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Be Disciples and Missionaries",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_be_disciples_and_missionaries",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Be Disciples and Missionaries"
      ]
    },
    {
      "id": "en_prayer_to_become_stewards_of_god_s_creation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Become Stewards of God's Creation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_become_stewards_of_god_s_creation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Become Stewards of God's Creation"
      ]
    },
    {
      "id": "en_prayer_to_confront_global_poverty",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Confront Global Poverty",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_confront_global_poverty",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Confront Global Poverty"
      ]
    },
    {
      "id": "en_prayer_to_discern_a_vocation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Discern a Vocation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_discern_a_vocation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Discern a Vocation"
      ]
    },
    {
      "id": "en_prayer_to_end_trafficking",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to End Trafficking",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_end_trafficking",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to End Trafficking"
      ]
    },
    {
      "id": "en_prayer_to_heal_racial_division",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Heal Racial Division",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_heal_racial_division",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Heal Racial Division"
      ]
    },
    {
      "id": "en_prayer_to_listen_heal_and_respond",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Listen, Heal and Respond",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_listen_heal_and_respond",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Listen, Heal and Respond"
      ]
    },
    {
      "id": "en_prayer_to_live_the_gospel_be_disciples",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Live the Gospel, Be Disciples",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_live_the_gospel_be_disciples",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Live the Gospel, Be Disciples"
      ]
    },
    {
      "id": "en_prayer_to_overcome_indifference",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Overcome Indifference",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_overcome_indifference",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Overcome Indifference"
      ]
    },
    {
      "id": "en_prayer_to_saint_juan_diego",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Saint Juan Diego",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_saint_juan_diego",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Saint Juan Diego"
      ]
    },
    {
      "id": "en_prayer_to_your_guardian_angel",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to Your Guardian Angel",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_your_guardian_angel",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to Your Guardian Angel"
      ]
    },
    {
      "id": "en_prayer_to_our_lord_jesus_christ_crucified",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to our Lord Jesus Christ Crucified",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_our_lord_jesus_christ_crucified",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to our Lord Jesus Christ Crucified"
      ]
    },
    {
      "id": "en_prayer_to_the_holy_spirit",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to the Holy Spirit",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_the_holy_spirit",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to the Holy Spirit"
      ]
    },
    {
      "id": "en_prayer_to_the_sacred_heart_of_jesus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayer to the Sacred Heart of Jesus",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_the_sacred_heart_of_jesus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayer to the Sacred Heart of Jesus"
      ]
    },
    {
      "id": "en_prayers_for_peace_in_the_middle_east_2008",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Peace in the Middle East, 2008",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_peace_in_the_middle_east_2008",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers for Peace in the Middle East, 2008"
      ]
    },
    {
      "id": "en_prayers_for_times_of_trouble",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Times of Trouble",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_times_of_trouble",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers for Times of Trouble"
      ]
    },
    {
      "id": "en_prayers_for_vocations",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for Vocations",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_vocations",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers for Vocations"
      ]
    },
    {
      "id": "en_prayers_for_the_health_and_dignity_of_the_sick",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers for the Health and Dignity of the Sick",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_for_the_health_and_dignity_of_the_sick",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers for the Health and Dignity of the Sick"
      ]
    },
    {
      "id": "en_prayers_in_times_of_seeking_the_will_of_god",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers in Times of Seeking the Will of God",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_in_times_of_seeking_the_will_of_god",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers in Times of Seeking the Will of God"
      ]
    },
    {
      "id": "en_prayers_in_a_time_of_war",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers in a Time of War",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_in_a_time_of_war",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers in a Time of War"
      ]
    },
    {
      "id": "en_prayers_on_the_care_of_creation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers on the Care of Creation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_on_the_care_of_creation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers on the Care of Creation"
      ]
    },
    {
      "id": "en_prayers_to_care_for_creation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Prayers to Care for Creation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayers_to_care_for_creation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Prayers to Care for Creation"
      ]
    },
    {
      "id": "en_praying_like_a_faithful_citizen",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Praying Like a Faithful Citizen",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_praying_like_a_faithful_citizen",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Praying Like a Faithful Citizen"
      ]
    },
    {
      "id": "en_praying_like_a_faithful_citizen_pdf",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Praying Like a Faithful Citizen PDF",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_praying_like_a_faithful_citizen_pdf",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Praying Like a Faithful Citizen PDF"
      ]
    },
    {
      "id": "la_princeps_gloriosissime",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Princeps Gloriosissime"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_princeps_gloriosissime",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Princeps Gloriosissime",
        "Angeli"
      ]
    },
    {
      "id": "la_pro_dolorosa",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Pro Dolorosa"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Coronula Divinae Misericordiae"
      },
      "tags": [
        "la_pro_dolorosa",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pro Dolorosa",
        "Coronula Divinae Misericordiae"
      ]
    },
    {
      "id": "en_pro_life_prayers",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Pro-Life Prayers",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_pro_life_prayers",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Pro-Life Prayers"
      ]
    },
    {
      "id": "la_quinque_orationes_chapleti_sanctae_faciei",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Quinque Orationes Chapleti Sanctae Faciei"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_quinque_orationes_chapleti_sanctae_faciei",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Quinque Orationes Chapleti Sanctae Faciei",
        "Generalia"
      ]
    },
    {
      "id": "la_responsorium_pressi_malorum",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Responsorium Pressi Malorum"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_responsorium_pressi_malorum",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Responsorium Pressi Malorum",
        "Sancti"
      ]
    },
    {
      "id": "la_responsorium_si_vis_patronum",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Responsorium Si Vis Patronum"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_responsorium_si_vis_patronum",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Responsorium Si Vis Patronum",
        "Sancti"
      ]
    },
    {
      "id": "en_sample_prayers_for_sudan",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Sample Prayers for Sudan",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_sample_prayers_for_sudan",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Sample Prayers for Sudan"
      ]
    },
    {
      "id": "la_sancte_deus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancte Deus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Coronula Divinae Misericordiae"
      },
      "tags": [
        "la_sancte_deus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Sancte Deus",
        "Coronula Divinae Misericordiae"
      ]
    },
    {
      "id": "la_sancte_michael_archangele",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancte Michael Archangele"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Angeli"
      },
      "tags": [
        "la_sancte_michael_archangele",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Sancte Michael Archangele",
        "Angeli"
      ]
    },
    {
      "id": "en_scriptural_stations_of_the_cross",
      "category": "stations_of_cross",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Scriptural Stations of the Cross",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_scriptural_stations_of_the_cross",
        "stations_of_cross",
        "십자가의 길",
        "Đàng Thánh Giá",
        "Stations of the Cross",
        "十字架の道行き",
        "Via Crucis",
        "Scriptural Stations of the Cross"
      ]
    },
    {
      "id": "en_share_the_journey_prayer_service_in_solidarity_with_dreamers_and_migra",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Share the Journey: Prayer Service in Solidarity with Dreamers and Migrants",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_share_the_journey_prayer_service_in_solidarity_with_dreamers_and_migra",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Share the Journey: Prayer Service in Solidarity with Dreamers and Migrants"
      ]
    },
    {
      "id": "en_short_prayer_for_vocations",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Short Prayer for Vocations",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_short_prayer_for_vocations",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Short Prayer for Vocations"
      ]
    },
    {
      "id": "en_show_us_your_face",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Show Us Your Face",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_show_us_your_face",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Show Us Your Face"
      ]
    },
    {
      "id": "la_si_quaeris_miracula_ite_ad_antonio",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Si Quaeris Miracula, Ite Ad Antonio"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sancti"
      },
      "tags": [
        "la_si_quaeris_miracula_ite_ad_antonio",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Si Quaeris Miracula, Ite Ad Antonio",
        "Sancti"
      ]
    },
    {
      "id": "en_st_peter_claver_prayer_service",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "St. Peter Claver Prayer Service",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_st_peter_claver_prayer_service",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "St. Peter Claver Prayer Service"
      ]
    },
    {
      "id": "en_stations_of_the_cross_for_life",
      "category": "stations_of_cross",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Stations of the Cross for Life",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_stations_of_the_cross_for_life",
        "stations_of_cross",
        "십자가의 길",
        "Đàng Thánh Giá",
        "Stations of the Cross",
        "十字架の道行き",
        "Via Crucis",
        "Stations of the Cross for Life"
      ]
    },
    {
      "id": "la_sub_tuum_praesidium",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Sub Tuum Praesidium"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_sub_tuum_praesidium",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Sub Tuum Praesidium",
        "Maria"
      ]
    },
    {
      "id": "la_surge_domine",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Surge Domine"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Generalia"
      },
      "tags": [
        "la_surge_domine",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Surge Domine",
        "Generalia"
      ]
    },
    {
      "id": "la_suscipe_domine",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Suscipe Domine"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Christus"
      },
      "tags": [
        "la_suscipe_domine",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Suscipe Domine",
        "Christus"
      ]
    },
    {
      "id": "en_synod_prayer_for_unity",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Synod Prayer for Unity",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_synod_prayer_for_unity",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Synod Prayer for Unity"
      ]
    },
    {
      "id": "en_tantum_ergo",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Tantum Ergo",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_tantum_ergo",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Tantum Ergo"
      ]
    },
    {
      "id": "en_thanksgiving_day_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Thanksgiving Day Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_thanksgiving_day_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Thanksgiving Day Prayer"
      ]
    },
    {
      "id": "en_the_o_antiphons_of_advent",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "The 'O Antiphons' of Advent",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_the_o_antiphons_of_advent",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "The 'O Antiphons' of Advent"
      ]
    },
    {
      "id": "en_the_jubilee_prayer",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "The Jubilee Prayer",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_the_jubilee_prayer",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "The Jubilee Prayer"
      ]
    },
    {
      "id": "en_the_pope_s_monthly_intentions_for_2026",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "The Pope's Monthly Intentions for 2026",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_the_pope_s_monthly_intentions_for_2026",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "The Pope's Monthly Intentions for 2026"
      ]
    },
    {
      "id": "la_tota_pulchra_es_maria",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Tota Pulchra Es Maria"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Maria"
      },
      "tags": [
        "la_tota_pulchra_es_maria",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Tota Pulchra Es Maria",
        "Maria"
      ]
    },
    {
      "id": "la_veni_creator_spiritus",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Veni Creator Spiritus"
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": "Spiritus Sanctus"
      },
      "tags": [
        "la_veni_creator_spiritus",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Veni Creator Spiritus",
        "Spiritus Sanctus"
      ]
    },
    {
      "id": "en_veterans_day",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Veterans Day",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_veterans_day",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Veterans Day"
      ]
    },
    {
      "id": "en_via_crucis_oraciones_de_los_fieles",
      "category": "stations_of_cross",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Vía Crucis Oraciones de los Fieles",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_via_crucis_oraciones_de_los_fieles",
        "stations_of_cross",
        "십자가의 길",
        "Đàng Thánh Giá",
        "Stations of the Cross",
        "十字架の道行き",
        "Via Crucis",
        "Vía Crucis Oraciones de los Fieles"
      ]
    },
    {
      "id": "en_we_are_all_in_god_s_image",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "We Are All in God's Image",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_we_are_all_in_god_s_image",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "We Are All in God's Image"
      ]
    },
    {
      "id": "en_we_are_all_in_god_s_image_spanish",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "We Are All in God's Image - Spanish",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_we_are_all_in_god_s_image_spanish",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "We Are All in God's Image - Spanish"
      ]
    },
    {
      "id": "en_while_trouble_is_near_give_them_strength_and_consolation",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "While Trouble is Near, Give Them Strength and Consolation",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_while_trouble_is_near_give_them_strength_and_consolation",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "While Trouble is Near, Give Them Strength and Consolation"
      ]
    },
    {
      "id": "en_world_youth_day_prayer_for_the_united_states",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "World Youth Day Prayer for the United States",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_world_youth_day_prayer_for_the_united_states",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "World Youth Day Prayer for the United States"
      ]
    },
    {
      "id": "en_your_gaze_is_upon_us",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "Your Gaze is Upon Us",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_your_gaze_is_upon_us",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "Your Gaze is Upon Us"
      ]
    },
    {
      "id": "en_prayer_to_the_sacred_heart_of_jesus_for_love_and_mercy",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "​Prayer to the Sacred Heart of Jesus for Love and Mercy",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "en_prayer_to_the_sacred_heart_of_jesus_for_love_and_mercy",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "​Prayer to the Sacred Heart of Jesus for Love and Mercy"
      ]
    },
    {
      "id": "jp_平和の使徒_となるための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "「平和の使徒」となるための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_平和の使徒_となるための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "「平和の使徒」となるための祈り",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_津和野の証し人",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "「津和野の証し人」",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_津和野の証し人",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "「津和野の証し人」",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_津和野の証し人_の列聖を求める祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "「津和野の証し人」の列聖を求める祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_津和野の証し人_の列聖を求める祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "「津和野の証し人」の列聖を求める祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_あたたかさのある教会を願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "あたたかさのある教会を願う祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_あたたかさのある教会を願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "あたたかさのある教会を願う祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_お告けの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "お告げの祈り**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_お告けの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "お告げの祈り**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_すへてのいのちを守るための_キリスト者の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "すべてのいのちを守るための キリスト者の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_すへてのいのちを守るための_キリスト者の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "すべてのいのちを守るための キリスト者の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_すへてのいのちを守るためのキリスト者の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "すべてのいのちを守るためのキリスト者の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_すへてのいのちを守るためのキリスト者の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "すべてのいのちを守るためのキリスト者の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_ともに歩む",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ともに歩む",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ともに歩む",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ともに歩む",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_ともに歩むあたたかさのある教会を願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ともに歩むあたたかさのある教会を願う祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ともに歩むあたたかさのある教会を願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ともに歩むあたたかさのある教会を願う祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_の列聖を求める祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "の列聖を求める祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_の列聖を求める祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "の列聖を求める祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_ゆるしの秘跡の受け方",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ゆるしの秘跡の受け方",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ゆるしの秘跡の受け方",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ゆるしの秘跡の受け方",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_アレルヤの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "アレルヤの祈り**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_アレルヤの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "アレルヤの祈り**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_アウエ_マリアの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "アヴエ・マリアの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_アウエ_マリアの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "アヴエ・マリアの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_イエスのみ心",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "イエスのみ心",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_イエスのみ心",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "イエスのみ心",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_イエスのみ心への祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "イエスのみ心への祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_イエスのみ心への祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "イエスのみ心への祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_キリストの魂",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "キリストの魂**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_キリストの魂",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "キリストの魂**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_コミュニティのための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "コミュニティのための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_コミュニティのための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "コミュニティのための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_サカリアの賛歌",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ザカリアの賛歌",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_サカリアの賛歌",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ザカリアの賛歌",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_サカリアの賛歌_ルカ1_68_79",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ザカリアの賛歌**ルカ1：68－79",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_サカリアの賛歌_ルカ1_68_79",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ザカリアの賛歌**ルカ1：68－79",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_シノトスのための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "シノドスのための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_シノトスのための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "シノドスのための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_ニケア_コンスタンチノ一フル信条",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "ニケア，コンスタンチノ一プル信条",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_ニケア_コンスタンチノ一フル信条",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "ニケア，コンスタンチノ一プル信条",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_マリアの賛歌",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "マリアの賛歌",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_マリアの賛歌",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "マリアの賛歌",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_マリアの賛歌_ルカ1_46_55",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "マリアの賛歌**ルカ1：46－55",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_マリアの賛歌_ルカ1_46_55",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "マリアの賛歌**ルカ1：46－55",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_三姉妹教区のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "三姉妹教区のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_三姉妹教区のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "三姉妹教区のための祈り",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_主の十戒",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "主の十戒",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_主の十戒",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "主の十戒",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_主よ_わたしをお使いくたさい",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "主よ、わたしをお使いください",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_主よ_わたしをお使いくたさい",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "主よ、わたしをお使いください",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_信徳唱",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "信徳唱",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_信徳唱",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "信徳唱",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_元后あわれみの母",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "元后あわれみの母**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_元后あわれみの母",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "元后あわれみの母**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_初めの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "初めの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_初めの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "初めの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_取り次きを願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "取り次ぎを願う祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_取り次きを願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "取り次ぎを願う祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_召命のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "召命のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_召命のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "召命のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_召命を求める祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "召命を求める祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_召命を求める祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "召命を求める祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_司祭のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "司祭のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_司祭のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "司祭のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_司祭のための祈り集",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "司祭のための祈り集",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_司祭のための祈り集",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "司祭のための祈り集",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_司祭のための祈り_日本の教会のために",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "司祭のための祈り（日本の教会のために）",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_司祭のための祈り_日本の教会のために",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "司祭のための祈り（日本の教会のために）",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_困難の時の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "困難の時の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_困難の時の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "困難の時の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_夕の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "夕の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_夕の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "夕の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_大天使聖ミカエルへ",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "大天使聖ミカエルへ",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_大天使聖ミカエルへ",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "大天使聖ミカエルへ",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_大天使聖ミカエルへの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "大天使聖ミカエルへの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_大天使聖ミカエルへの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "大天使聖ミカエルへの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_子供のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "子供のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_子供のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "子供のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_小教区のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "小教区のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_小教区のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "小教区のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_平和を願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "平和を願う祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_平和を願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "平和を願う祈り",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_愛徳唱",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "愛徳唱",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_愛徳唱",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "愛徳唱",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_感謝の歌",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "感謝の歌**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_感謝の歌",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "感謝の歌**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_教会の五つの掟",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "教会の五つの掟",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_教会の五つの掟",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "教会の五つの掟",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_望徳唱",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "望徳唱",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_望徳唱",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "望徳唱",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_朝の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "朝の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_朝の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "朝の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_神に希望をおく人の祈り_望徳唱",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "神に希望をおく人の祈り(望徳唱）",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_神に希望をおく人の祈り_望徳唱",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "神に希望をおく人の祈り(望徳唱）",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_神を信しる人の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "神を信じる人の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_神を信しる人の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "神を信じる人の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_神を愛する人の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "神を愛する人の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_神を愛する人の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "神を愛する人の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_福者ヘトロ岐部と187殉教者に",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "福者ペトロ岐部と187殉教者に",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "広島教区の祈り",
        "LA": ""
      },
      "tags": [
        "jp_福者ヘトロ岐部と187殉教者に",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "福者ペトロ岐部と187殉教者に",
        "広島教区の祈り"
      ]
    },
    {
      "id": "jp_福者ヘトロ岐部と187殉教者に取り次きを願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "福者ペトロ岐部と187殉教者に取り次ぎを願う祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_福者ヘトロ岐部と187殉教者に取り次きを願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "福者ペトロ岐部と187殉教者に取り次ぎを願う祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_福音宣教の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "福音宣教の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_福音宣教の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "福音宣教の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_終わりの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "終わりの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_終わりの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "終わりの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖イクナチオの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖イグナチオの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖イクナチオの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖イグナチオの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖イクナチオ_ロヨラの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖イグナチオ・ロヨラの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖イクナチオ_ロヨラの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖イグナチオ・ロヨラの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖ヨセフの七つの_悲しみと喜ひ",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖ヨセフの七つの「悲しみと喜び」",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖ヨセフの七つの_悲しみと喜ひ",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖ヨセフの七つの「悲しみと喜び」",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖ヨセフへの九日間の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖ヨセフへの九日間の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖ヨセフへの九日間の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖ヨセフへの九日間の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖ヨセフへの祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖ヨセフへの祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖ヨセフへの祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖ヨセフへの祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖体拝領のため",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖体拝領のため",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖体拝領のため",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖体拝領のため",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖体拝領のための祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖体拝領のための祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖体拝領のための祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖体拝領のための祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖霊の助けを願う",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖霊の助けを願う",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖霊の助けを願う",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖霊の助けを願う",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_聖霊の助けを願う祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "聖霊の助けを願う祈り**",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_聖霊の助けを願う祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "聖霊の助けを願う祈り**",
        "日々の祈り"
      ]
    },
    {
      "id": "jp_霊的な聖体拝領の祈り",
      "category": "national",
      "titles": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "霊的な聖体拝領の祈り",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "日々の祈り",
        "LA": ""
      },
      "tags": [
        "jp_霊的な聖体拝領の祈り",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "霊的な聖体拝領の祈り",
        "日々の祈り"
      ]
    },
    {
      "id": "kr_6_66",
      "category": "national",
      "titles": {
        "KR": "가뭄과 장마 때에 바치는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_66",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "가뭄과 장마 때에 바치는 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_40",
      "category": "national",
      "titles": {
        "KR": "교황이나 주교를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_40",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "교황이나 주교를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_60",
      "category": "national",
      "titles": {
        "KR": "군인을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_60",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "군인을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_59",
      "category": "national",
      "titles": {
        "KR": "군인의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_59",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "군인의 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_48",
      "category": "national",
      "titles": {
        "KR": "그리스도교 일치를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_48",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "그리스도교 일치를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_24_172",
      "category": "national",
      "titles": {
        "KR": "낙태로 아파하는 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "슬퍼하는 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_24_172",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "낙태로 아파하는 이들을 위한 기도",
        "슬퍼하는 이들을 위한 기도"
      ]
    },
    {
      "id": "kr_6_129",
      "category": "national",
      "titles": {
        "KR": "농민을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_129",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "농민을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_52",
      "category": "national",
      "titles": {
        "KR": "대중 매체 선용을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_52",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "대중 매체 선용을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_142",
      "category": "national",
      "titles": {
        "KR": "레지오 마리애 기도문",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_142",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "레지오 마리애 기도문",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_49",
      "category": "national",
      "titles": {
        "KR": "민족의 화해와 일치를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_49",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "민족의 화해와 일치를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_24_173",
      "category": "national",
      "titles": {
        "KR": "반려동물을 떠나보낸 가족의 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "슬퍼하는 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_24_173",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "반려동물을 떠나보낸 가족의 기도",
        "슬퍼하는 이들을 위한 기도"
      ]
    },
    {
      "id": "kr_6_61",
      "category": "national",
      "titles": {
        "KR": "병자를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_61",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "병자를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_51",
      "category": "national",
      "titles": {
        "KR": "복음화를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_51",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "복음화를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_46",
      "category": "national",
      "titles": {
        "KR": "비신자들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_46",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "비신자들을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_41",
      "category": "national",
      "titles": {
        "KR": "사제들을 위한 기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_41",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "사제들을 위한 기도 1",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_42",
      "category": "national",
      "titles": {
        "KR": "사제들을 위한 기도 2",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_42",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "사제들을 위한 기도 2",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_65",
      "category": "national",
      "titles": {
        "KR": "새해를 맞이하며 바치는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_65",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "새해를 맞이하며 바치는 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_178",
      "category": "national",
      "titles": {
        "KR": "생명을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_178",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "생명을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_62",
      "category": "national",
      "titles": {
        "KR": "선종을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_62",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "선종을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_39",
      "category": "national",
      "titles": {
        "KR": "성 암브로시오의 사은 찬미가 (Te Deum)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_39",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성 암브로시오의 사은 찬미가 (Te Deum)",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_38",
      "category": "national",
      "titles": {
        "KR": "성 토마스의 성체 찬미가",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_38",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성 토마스의 성체 찬미가",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_102",
      "category": "national",
      "titles": {
        "KR": "성령 송가",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_102",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성령 송가",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_36",
      "category": "national",
      "titles": {
        "KR": "성모 성심께 바치는 봉헌 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_36",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성모 성심께 바치는 봉헌 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_37",
      "category": "national",
      "titles": {
        "KR": "성모님께 자기를 바치는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_37",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성모님께 자기를 바치는 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_50",
      "category": "national",
      "titles": {
        "KR": "성서 사도직을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_50",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성서 사도직을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_47",
      "category": "national",
      "titles": {
        "KR": "성소를 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_47",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성소를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_34",
      "category": "national",
      "titles": {
        "KR": "성수 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_34",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성수 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_53",
      "category": "national",
      "titles": {
        "KR": "성전 건립 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_53",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "성전 건립 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_24_170",
      "category": "national",
      "titles": {
        "KR": "세상을 떠난 가족을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "슬퍼하는 이들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_24_170",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "세상을 떠난 가족을 위한 기도",
        "슬퍼하는 이들을 위한 기도"
      ]
    },
    {
      "id": "kr_6_64",
      "category": "national",
      "titles": {
        "KR": "세상을 떠난 형제, 친척, 친구, 은인을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_64",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "세상을 떠난 형제, 친척, 친구, 은인을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_43",
      "category": "national",
      "titles": {
        "KR": "수도자들을 위한 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_43",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "수도자들을 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_217",
      "category": "national",
      "titles": {
        "KR": "시노드 기도문",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_217",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "시노드 기도문",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_9_32",
      "category": "stations_of_cross",
      "titles": {
        "KR": "십자가의 길",
        "VN": "Ngắm Đàng Thánh Giá",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Đức Chúa Giê-su, chúng con ước ao ngắm mười bốn nơi thương khó Đức Chúa Giê-su trong. đàng Thánh Giá này, cho được kinh mến trả nghĩa s4 to Đức Chúa Giê-su. Chớ gì chúng con được đến viếng những nơi thương khó ấy, như bổn đạo thành Giêrusalem, cho được ăn mày các ơn bởi đàng Thánh giá mà ra. Song le chúng con là con chiên lạc xa đàng, thì xin dâng lòng chúng con làm đàng Thánh giá mà ngắm, cùng in vào lòng những sự thương khó Đức Chúa Giê-su đã chịu, để mà yên ủi chúng con ở chốn khách đày này, cho ngày sau được trông cậy mười bốn nơi thương khó ấy, như bậc thang đem chúng con về Thiên đàng, mà hát mừng tạ ơn Đức Chúa Giê-su đời đời chẳng cùng. A-men. + Nơi thứ nhất Quan Philatô luận giết Đức Chúa Ciêsw. Lạy Đức Chúa Giê-su, là Vua cả trên trời dưới đất, là Đấng thiên hạ ước ao lâu đời, mà Philatô luận giết Chúa con cách xấu hổ nhuốc nha dường ấy. Xin ban ơn cho con ăn năn đền tội, cho đáng Chúa con cứu lấy con nơi tòa phán xét sau này. ® Nơi thứ hai Đức Chúa Giê-su bác Thánh giá. Lạy Đức Chúa Giê-su, chịu đánh nát cả và mình ra, cùng vác Thánh giá nặng vì tội chúng con. Xin ban ơn cho con chịu các sự khốn khó trong bậc con, như Thánh giá Đức Chúa Trời đã định cho con phải chịu, mà theo chân Đức Chúa Giê-su cho trọn. + Nơi thứ ba Đức Chúa Giê-su ngũ xuống đất lân thứ nhất. Lạy ơn Đức Chúa Giê-su, chịu nhiều sự khốn khó cùng nhịn đói vác Thánh giá nặng yếu nhọc hết sức thì ngã xuống đất. Xin ban ơn cho con giữ mình cho đến chết, chớ để con phạm tội lỗi gì mất lòng Chúa con. Nơi thứ bốn Đức Mẹ gặp Đức Chúa Giê-su vác Thánh giá. Lạy Đức Mẹ, khi trước thấy Con ra đời thì Thiên Thần hát mừng, mà rày thấy Con nát cả và mình ra trong tay quân dữ đem đi giết, thì lòng Đức Mẹ đau đớn như phải dao sắc thâu qua lòng vậy. Xin Đức Mẹ cầu cho chúng con được lòng ăn năn đau đớn, và cầu cho kẻ có tội được trở lại cùng Đức Chúa Trời. ® Nơi thứ năm Ông Simon uác Thánh giá đỡ Đức Chúa Giê-su. ị Khi quân dữ thấy Đức Chúa Giê-su yếu nhọc hầu chết, thì nó bắt ông Simon vác Thánh giá đỡ Đức Chủa Giê-su. Thương ôi! nào con chiên Chúa tôi đâu hết, mà để Thánh giá nặng cho kẻ ngoại vác làm vậy? Xin ban ơn giúp sức cho con, cùng những kẻ thuộc về con được chịu mọi sự khó bằng lòng, như vác đỡ Thánh giá Đức Chúa Giê-su vậy. ® Nơi thứ sáu Bà Veronica trao khăn cho Đức Chúa Ciêsu lọi ' mặt. Tôi khen lòng mạnh bạo bà Veronica chẳng sợ quân dữ, một mến Đức Chúa Giê-su, mà thấy cả và mình máu chảy ra, thì trao khăn cho Người lọt mặt đi. Xin in hình tượng Đức Chúa Giê-su vào lòng con, như in vào khăn bà Veronica, cho con được lòng Mến Đức Chúa Giê-su cho trọn. b1 ® Nơi thứ bảy Đức Chúa Giê-su ngõ xuống đất lần thứ hai. Các sự khốn khó Đức Chúa Giê-su chịu một. ngày một hơn, gượng đi chẳng được, thì ngã xuống đất lần nữa, quân dữ đạp dậy giuc đi cho chóng. Xin Đức Chúa Giê-su ban ơn cho con được lòng vững -. vàng đi đàng nhân đức một ngày một hơn. ® Nơi thứ tám Đức Chúa Giê-su đứng lại yên ửi con thành Giậrusalem. Lạy ơn Đức Chúa Giê-su, chẳng nể chịu trăm. nghìn sự thương khó, cho được đứng lại yên ủi con thành Giêrusalem, như Cha yên ủi con trong cơn khóc lóc. Xin Đức Chúa Giê-su yên ủi linh hồn con, cùng các con chiên nước này, như yên ủi con thành Giêrusalem vậy, chớ bỏ chúng con mồ côi làm chỉ. ị ® Nơi thứ chín Đức Chúa Giê-su ngũ xuống đất lần thứ ba. Lạy Đức Chúa Giê-su, đã gần đến núi Canvariô, chẳng còn ai nhìn, máu đã chảy ra hết, thì ngã xuống đất một lần nữa. Ở con cháu Adong! hãy xem Chúa mình ngã xuống đất nhiều lần làm vậy vì ai? Xin Đức Chúa Giê-su thương chúng con cho đến sau hết, chớ bỏ con mọn yếu đuối dại dột làm chỉ. ® Nơi thứ mười Quân dữ lột áo Đức Chúa Ciêsu. Lạy ơn Đức Chúa Giê-su, khi quân dữ toan đóng đinh Đức Chúa Giê-su, thì nó lột áo ra hết, để cho xấu hổ cùng đau đớn. Xin ban ơn cho con giữ mình cho khỏi chước ma qui cám dỗ. + Nơi thứ miời một Quân dữ đóng đình Đức Chúa Giê-su. Lạy ơn Đức Chúa Giê-su, chịu đóng đinh vào thập giá vì tội con. Xin ban ơn cho con đóng đinh xác thịt con vào Thánh giá Chúa con, kẻo còn phạm tội lỗi nữa. ® Nơi thứ mười hai Đức Chúa Giê-su sinh thì trên Thánh giá. Lạy ơn Đức Chúa Giê-su, chịu mọi sự khốn khó cho đến gần hết hơi, thì gục đầu xuống giã Đức mẹ 5ọ mà sinh thì. Xin ban ơn cho con giữ đạo cho đến giờ sau hết, được phó linh hồn trong tay Chúa con. ® Nơi thứ mười ba Tháo đỉnh Đức Chúa Giê-su xuống mà bhó ở tay Đức mẹ. Ai xem thấy hai ông thánh tháo đinh Đức Chúa Giê-su mà đem xác xuống, cách thảm thiết làm vậy mà cầm nước mắt được ru? Xin ban ơn cho con gỡ mình cho khỏi các tội, như tháo đinh Đức Chúa Giê-su vậy. + Nơi thứ mười bốn Táng xác Đức Chúa Ciêsu trong hang đá. Ông thánh Giuse, ông thánh Nicôđêmô, ông thánh Gioan tắm xác Đức Chúa Giê-su cho sạch các ị đấu, lấy thuốc thơm mà xức, lấy khăn sạch mà bọc, . cùng táng trong hang đá. Mọi sự khốn khó Đức ị Chúa Giê-su chịu, nào có khi nào khó khăn thiếu thốn cho bằng khi táng xác ru? Xin ban lòng mến cho con như thuốc thơm, và lòng sạch sẽ như khăn sạch, cùng lòng vững vàng như hang đá, và các ơn bởi sự thương khó Đức Chúa Giê-su. Cho con dọn ì mình chịu Mình Thánh Đức Chúa Giê-su vào lòng như táng niệm ở đời này, cho ngày sau được xem thấy tỏ tường Đức Chúa Giê-su hằng sống hằng trị cùng Đức Chúa Cha, và Đức Chúa Thánh Thần đời đời chẳng cùng. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "십자가의 길",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_9_32",
        "stations_of_cross",
        "십자가의 길",
        "Đàng Thánh Giá",
        "Stations of the Cross",
        "十字架の道行き",
        "Via Crucis",
        "Ngắm Đàng Thánh Giá",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "kr_6_35",
      "category": "national",
      "titles": {
        "KR": "예수 성심께 바치는 봉헌 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_35",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "예수 성심께 바치는 봉헌 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_179",
      "category": "national",
      "titles": {
        "KR": "젊은이를 위한 기도(WYD 기도문)",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_179",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "젊은이를 위한 기도(WYD 기도문)",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_44",
      "category": "national",
      "titles": {
        "KR": "평신도 사도직을 위한 기도 1",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_44",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "평신도 사도직을 위한 기도 1",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_45",
      "category": "national",
      "titles": {
        "KR": "평신도 사도직을 위한 기도 2",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_45",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "평신도 사도직을 위한 기도 2",
        "여러 가지 기도"
      ]
    },
    {
      "id": "kr_6_143",
      "category": "national",
      "titles": {
        "KR": "하느님 자비를 구하는 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "여러 가지 기도",
        "VN": "",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "kr_6_143",
        "national",
        "국가별·기타 기도문",
        "Kinh theo từng nước và kinh khác",
        "Local and Other Prayers",
        "各国・その他の祈り",
        "Preces locales et aliae",
        "하느님 자비를 구하는 기도",
        "여러 가지 기도"
      ]
    },
    {
      "id": "000. rosary_the_luminous_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "빛의 신비",
        "EN": "The Luminous Mysteries",
        "VN": "Năm Sự Sáng"
      },
      "texts": {
        "KR": "<rubric>목요일에 바친다.</rubric>\n1단 예수님께서 세례 받으심을 묵상합시다.\n2단 예수님께서 카나에서 첫 기적을 행하심을 묵상합시다.\n3단 예수님께서 하느님 나라를 선포하심을 묵상합시다.\n4단 예수님께서 거룩하게 변모하심을 묵상합시다.\n5단 예수님께서 성체성사를 세우심을 묵상합시다.",
        "EN": "<rubric>The Five Luminous Mysteries are traditionally prayed on Thursdays</rubric>\n1. The Baptism of Christ in the Jordan\n<i>“After Jesus was baptized, he came up from the water and behold, the heavens were opened [for him], and he saw the Spirit of God descending like a dove [and] coming upon him. And a voice came from the heavens, saying, 'This is my beloved Son, with whom I am well pleased.'” - Matthew 3:16-17</i>\n2. The Wedding Feast at Cana\n<i>“On the third day there was a wedding in Cana in Galilee, and the mother of Jesus was there. Jesus and his disciples were also invited to the wedding. When the wine ran short, the mother of Jesus said to him, 'They have no wine.' [And] Jesus said to her, 'Woman, how does your concern affect me? My hour has not yet come.' His mother said to the servers, 'Do whatever he tells you.'” - John 2:1-5</i>\n3. Jesus' Proclamation of the Coming of the Kingdom of God\n<i>“'This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel.'” - Mark 1:15</i>\n4. The Transfiguration\n<i>“After six days Jesus took Peter, James, and John his brother, and led them up a high mountain by themselves. And he was transfigured before them; his face shone like the sun and his clothes became white as light.” - Matthew 17:1-2</i>\n5. The Institution of the Eucharist\n<i>“While they were eating, Jesus took bread, said the blessing, broke it, and giving it to his disciples said, 'Take and eat; this is my body.'” - Matthew 26:26</i> ",
        "VN": "Thứ nhất Đức Chúa Giê-su chịu phép Rửa tại sông Gio-đan - Ta hãy xin cho được sống xứng đáng là con cái Chúa. Thứ hai Đức Chúa Giê-su dự tiệc cưới Ca-na ~ Ta hãy xin cho được vững tin vào quyền năng của Ngài. Thứ ba Đức Chúa Giê-su rao giảng Nước Trời và kêu gọi sám hối - Ta hãy xin cho được hoán cải và đón nhận Tin Mừng. Thứ bốn Đức Chúa Giê-su biến hình trên núi — 7a hãy xin cho được lắng nghe và thực hành Lời Chúa. Thứ năm Đức Chúa Giê-su lập Bí Tích Thánh Thể Ta hãy xin cho được năng kết hợp cùng Chúa Giê-su Thánh Thể."
      },
      "sourceCategory": {
        "KR": "묵주기도",
        "EN": "The Rosary",
        "VN": "Chuỗi Mân Côi"
      },
      "tags": [
        "000. rosary_the_luminous_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "빛의 신비",
        "The Luminous Mysteries",
        "The Rosary",
        "Năm Sự Sáng",
        "Chuỗi Mân Côi"
      ]
    },
    {
      "id": "000. rosary_the_glorious_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "영광의 신비",
        "EN": "The Glorious Mysteries",
        "VN": "Năm Sự Mừng"
      },
      "texts": {
        "KR": "<rubric>수·일요일에 바친다.</rubric>\n1단 예수님께서 부활하심을 묵상합시다.\n2단 예수님께서 승천하심을 묵상합시다.\n3단 예수님께서 성령을 보내심을 묵상합시다.\n4단 예수님께서 마리아를 하늘에 불러올리심을 묵상합시다.\n5단 예수님께서 마리아께 천상 모후의 관을 씌우심을 묵상합시다.",
        "EN": "<rubric>The Five Glorious Mysteries are traditionally prayed on Wednesdays and, outside the seasons of Advent and Lent, on Sundays:</rubric>\n1. The Resurrection\n<i>“But at daybreak on the first day of the week they took the spices they had prepared and went to the tomb.They found the stone rolled away from the tomb; but when they entered, they did not find the body of the Lord Jesus. While they were puzzling over this, behold, two men in dazzling garments appeared to them. They were terrified and bowed their faces to the ground. They said to them, 'Why do you seek the living one among the dead? He is not here, but he has been raised.'” - Luke 24:1-5</i>\n2. The Ascension\n<i>“So then the Lord Jesus, after he spoke to them, was taken up into heaven and took his seat at the right hand of God.” - Mark 16:19</i>\n3. The Descent of the Holy Spirit\n<i>“When the time for Pentecost was fulfilled, they were all in one place together. And suddenly there came from the sky a noise like a strong driving wind, and it filled the entire house in which they were. Then there appeared to them tongues as of fire, which parted and came to rest on each one of them. And they were all filled with the holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim.” - Acts 2:1-4</i>\n4. The Assumption\n<i>“Behold, from now on will all ages call me blessed. The Mighty One has done great things for me, and holy is his name.” - Luke 1:48-49</i>\n5. The Coronation of Mary\n<i>“A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.” - Revelation 12:1</i> ",
        "VN": "Thứ nhất Đức Chúa Giê-su sống lại - Ta hãy xin cho được sống lại thật về phần linh hồn. Thứ hai Đức Chúa Giê-su lên trời ~ Ta hãy xin cho được lòng ái mộ những sự trên trời. Thứ ba Đức Chúa Thánh Thần hiện xuống - Ta hãy xin cho được lòng đầy dẫy mọi ơn Đức Chúa Thánh Thần. Thứ bốn Đức Chúa Trời cho Đức Bà lên trời - 7a ' hãy xin ơn chết lành trong tay Đức Mẹ. Thứ năm Đức Chúa Trời thưởng Đức Mẹ trên trời Ta hãy xin Đức Mẹ phù hộ cho ta được thưởng cùng Đức Mẹ trên nước thiên đàng. h xen\""
      },
      "sourceCategory": {
        "KR": "묵주기도",
        "EN": "The Rosary",
        "VN": "Chuỗi Mân Côi"
      },
      "tags": [
        "000. rosary_the_glorious_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "영광의 신비",
        "The Glorious Mysteries",
        "The Rosary",
        "Năm Sự Mừng",
        "Chuỗi Mân Côi"
      ]
    },
    {
      "id": "000. rosary_the_sorrowful_mysteries",
      "category": "rosary",
      "titles": {
        "KR": "고통의 신비",
        "EN": "The Sorrowful Mysteries",
        "VN": "Năm Sự Thương"
      },
      "texts": {
        "KR": "<rubric>화·금요일에 바친다.</rubric>\n1단 예수님께서 우리를 위하여 피땀 흘리심을 묵상합시다.\n2단 예수님께서 우리를 위하여 매 맞으심을 묵상합시다.\n3단 예수님께서 우리를 위하여 가시관 쓰심을 묵상합시다.\n4단 예수님께서 우리를 위하여 십자가 지심을 묵상합시다.\n5단 예수님께서 우리를 위하여 십자가에 못 박혀 돌아가심을 묵상합시다.",
        "EN": "<rubric>The Five Sorrowful Mysteries are traditionally prayed on Tuesdays, Fridays, and, during the season of Lent, on Sundays:</rubric>\n1. The Agony in the Garden\n<i>“Then Jesus came with them to a place called Gethsemane, and he said to his disciples, 'Sit here while I go over there and pray.' He took along Peter and the two sons of Zebedee, and began to feel sorrow and distress. Then he said to them, 'My soul is sorrowful even to death. Remain here and keep watch with me.' He advanced a little and fell prostrate in prayer, saying, 'My Father, if it is possible, let this cup pass from me; yet, not as I will, but as you will.'” - Matthew 26:36-39</i>\n2. The Scourging at the Pillar\n<i>\nThe Scourging at the Pillar\n“Then he released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified.” - Matthew 27:26</i>\n3. The Crowning with Thorns\n<i>“Then the soldiers of the governor took Jesus inside the praetorium and gathered the whole cohort around him. They stripped off his clothes and threw a scarlet military cloak about him. Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, 'Hail, King of the Jews!'” - Matthew 27:27-29</i>\n4. The Carrying of the Cross\n<i\nThe Carrying of the Cross\n“They pressed into service a passer-by, Simon, a Cyrenian, who was coming in from the country, the father of Alexander and Rufus, to carry his cross. They brought him to the place of Golgotha (which is translated Place of the Skull).” - Mark 15:21-22</i>\n5. The Crucifixion and Death\n<i>“When they came to the place called the Skull, they crucified him and the criminals there, one on his right, the other on his left. [Then Jesus said, 'Father, forgive them, they know not what they do.'] They divided his garments by casting lots. The people stood by and watched; the rulers, meanwhile, sneered at him and said, 'He saved others, let him save himself if he is the chosen one, the Messiah of God.' Even the soldiers jeered at him. As they approached to offer him wine they called out, 'If you are King of the Jews, save yourself.' Above him there was an inscription that read, 'This is the King of the Jews.' Now one of the criminals hanging there reviled Jesus, saying, 'Are you not the Messiah? Save yourself and us.' The other, however, rebuking him, said in reply, 'Have you no fear of God, for you are subject to the same condemnation? And indeed, we have been condemned justly, for the sentence we received corresponds to our crimes, but this man has done nothing criminal.' Then he said, 'Jesus, remember me when you come into your kingdom.' He replied to him, 'Amen, I say to you, today you will be with me in Paradise.' It was now about noon and darkness came over the whole land until three in the afternoon because of an eclipse of the sun. Then the veil of the temple was torn down the middle. Jesus cried out in a loud voice, 'Father, into your hands I commend my spirit'; and when he had said this he breathed his last.” - Luke 23:33-46</i> ",
        "VN": "Thứ nhất Đức Chúa Giê-su lo buồn đổ mồ hôi máu Ta hãy xin cho được ăn năn tội nên. Thứ hai Đức Chúa Giê-su chịu đánh đòn ~ Ta hãy Xin cho được hãm mình chịu khó bằng lòng. Thứ ba Đức Chúa Giê-su chịu đội mũ gai — Ta hãy xin cho được chịu mọi sự sỉ nhục bằng lòng. Thứ bốn Đức Chúa Giê-su vác cây Thánh Giá — Ta hãy xin cho được vác Thánh Giá theo chân Chúa. Thứ năm Đức Chúa Giê-su chịu chết trên cây Thánh Giá - Ta hãy xin cho được đóng định tính xác thịt vào Thánh Giá Chúa."
      },
      "sourceCategory": {
        "KR": "묵주기도",
        "EN": "The Rosary",
        "VN": "Chuỗi Mân Côi"
      },
      "tags": [
        "000. rosary_the_sorrowful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "고통의 신비",
        "The Sorrowful Mysteries",
        "The Rosary",
        "Năm Sự Thương",
        "Chuỗi Mân Côi"
      ]
    },
    {
      "id": "vn_ocr_003_kinh_sang_soi",
      "category": "common",
      "titles": {
        "KR": "하느님의 빛을 위한 기도",
        "VN": "Kinh Sáng Soi",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Cúi xin Chúa sáng soi\ncho chúng con được biết việc phải làm, cùng khi làm xin Chúa giúp đỡ: cho mỗi kinh mỗi việc chúng con, từ khởi sự cho đến hoàn thành, đều nhờ bởi ơn Chúa. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_003_kinh_sang_soi",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "하느님의 빛을 위한 기도",
        "Kinh Sáng Soi",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_004_kinh_duc_chua_thanh_than",
      "category": "common",
      "titles": {
        "KR": "성령께 드리는 기도",
        "VN": "Kinh Đức Chúa Thánh Thần",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Chúng con lạy ơn Đức Chúa Thánh Thần\nthiêng liêng sáng láng vô cùng. Chúng con xin Đức Chúa Thánh Thần xuống\nđầy lòng chúng con, là kẻ tin cậy Đức Chúa Trời, và đốt lửa kính mến Đức Chúa Trời trong lòng chúng con. Xướng: Chúng con xin Đức Chúa Trời\ncho Đức Chúa Thánh Thần xuống, Đáp: Sửa lại mọi sự trong ngoài chúng con. Lời nguyện: Chúng con cầu cùng Đúc Chúa Trời, xưa đã cho Đúc Chúa Thánh Thần xuống\nsoi lòng dạy dỗ các thánh tông đồ, thì nay chúng con cũng xin Đức Chúa Trời\ncho Đức Chúa Thánh Thần lại xuống\nan ủi dạy dỗ chúng con\nlàm những việc lành. Vì công nghiệp vô cùng Đức Chúa Giê-su Ki-tô là Chúa chúng con. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_004_kinh_duc_chua_thanh_than",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성령께 드리는 기도",
        "Kinh Đức Chúa Thánh Thần",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_016_kinh_cam_on",
      "category": "common",
      "titles": {
        "KR": "감사기도",
        "VN": "Kinh Cám Ơn",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Con cám ơn Đức Chúa Trời, là Chúa lòng lành vô cùng, (vì Chúa đã) chẳng bỏ con, chẳng để con không đời đời”,\nmà lại sinh ra con, cho con được làm người, cùng hằng gìn giữ con, hằng che chở con; lại cho Ngôi Hai xuống thế làm người\nchuộc tội, chịu chết trên cây thánh giá vì con, lại cho con được đạo thánh Đức Chúa Trời, cùng chịu nhiều ơn nhiều phép Hội Thánh nữa, và đã cho phần xác con đêm nay (nếu đọc ban tối thì: con phần xác con ngày hôm nay)\nđược mọi sự lành, lại cứu lấy con\nkẻo phải chết tươi ăn năn tội chẳng kịp. Vậy các thánh ở trên nước thiên đàng\ncám ơn Đức Chúa Trời thế nào, thì con cũng hiệp cùng các thánh\nmà dâng cho Chúa con\ncùng cám ơn như vậy. A-men. ˆ “Chẳng để con không đời đời. . . ” có nghĩa là: trước kia không hề có ta, nhưng Thiên Chúa thương dựng nên fa, làm cho ta có mặt. Nếu Thiên Chúa không dựng nên ta thì sẽ không bao giờ có ta, và cho đến đời đời vẫn chỉ là không không.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_016_kinh_cam_on",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "감사기도",
        "Kinh Cám Ơn",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_017_kinh_trong_cay",
      "category": "common",
      "titles": {
        "KR": "희망의 기도",
        "VN": "Kinh Trông Cậy",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Chúng con trông cậy Rất Thánh Đức Mẹ Chúa Trời, xin chớ chê, chớ bỏ lời chúng con nguyện\ntrong cơn gian nan thiếu thốn\nĐức Nữ Đồng Trình hiển vinh sáng láng\nhằng chữa chúng con cho khỏi mọi sự dữ. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_017_kinh_trong_cay",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "희망의 기도",
        "Kinh Trông Cậy",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_018_ba_cau_lay",
      "category": "common",
      "titles": {
        "KR": "삼주기도문",
        "VN": "Ba Câu Lạy",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "X. Lạy Rất Thánh Trái Tim Đức Chúa Giê-su Ð. Thương xót chúng con. X. Lạy Trái Tim cực thánh cực tịnh Rất Thánh Đức Bà Ma-ri-a. Ð. Cầu cho chúng con. X. Lạy ông thánh Giu-se\nlà bạn thanh sạch Đức Bà Ma-ri-a trọn đời đồng trinh. Ð. Cầu cho chúng con.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_018_ba_cau_lay",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "삼주기도문",
        "Ba Câu Lạy",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_019_kinh_dang_ngay_cua_thieu_nhi",
      "category": "common",
      "titles": {
        "KR": "어린이날 기도",
        "VN": "Kinh Dâng Ngày Của Thiếu Nhi",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su, con cám ơn Chúa đã cho con được sống đến sớm mai này. Con xin dâng ngày hôm nay cho Chúa. Xin Chúa chúc lành cho mọi việc con làm\nvà mọi người con gặp hôm nay. Xin Chúa ban Thánh Thần Chúa xuống trong lòng con\nvà trong me lòng mọi người, để chúng con biết làm mọi việc theo ý Chúa Cha. Lạy Chúa Giê-su, con yêu mến Chúa. Con quyết tâm nghe theo lời Chúa dạy\nvà sống hiền lành khiêm nhường\nnhư Chúa đã sống ngày xưa. Lạy Chúa Thánh Thần, xin làm cho con biết\nluôn cố gắng là người con ngoan của Cha trên trời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_019_kinh_dang_ngay_cua_thieu_nhi",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "어린이날 기도",
        "Kinh Dâng Ngày Của Thiếu Nhi",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_020_kinh_dang_minh_cua_nhi_dong",
      "category": "common",
      "titles": {
        "KR": "어린이 봉헌기도",
        "VN": "Kinh Dâng Mình Của Nhi Đồng",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su Hài Đồng. Con xin dâng trái tim con cho Chúa, xin Chúa đổ tràn đầy nhân đức của Chúa vào đó, và dạy dỗ chúng con nên người giống như Chúa, và nhờ Mẹ Ma-ri-a nhân từ của chúng con, chúng con càng thêm tuổi\ncàng thêm khôn lớn và nhân đức. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_020_kinh_dang_minh_cua_nhi_dong",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "어린이 봉헌기도",
        "Kinh Dâng Mình Của Nhi Đồng",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_021_kinh_dang_minh_cua_thieu_nhi_nam",
      "category": "common",
      "titles": {
        "KR": "어린이 봉헌기도 (남아)",
        "VN": "Kinh Dâng Mình Của Thiếu Nhi Nam",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su, Chúa yêu hết mọi thiếu nhiị, xin ban phép lành cho thiếu nhiỉ Việt Nam\nvà thiếu nhi khắp hoàn cầu. Xin Chúa thương đến những người không được biết Chúa, hay không muốn nhìn nhận Chúa. Xin Chúa ban cho con\nơn lúc nào cũng tươi cười và không sợ hy sinh. Xin Chúa dạy con\ncách làm cho đời con nên cao đẹp\nvà ban cho con\nvinh dự được cùng Chúa cứu rỗi thế gian. Lạy Đức Nữ Đồng Trinh Ma-ri-a, Mẹ hiền của thiếu nhi, xin Mẹ luôn gìn giữ trái tim con trong trắng\nvà trung thành với Chúa Giê-su. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_021_kinh_dang_minh_cua_thieu_nhi_nam",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "어린이 봉헌기도 (남아)",
        "Kinh Dâng Mình Của Thiếu Nhi Nam",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_022_kinh_dang_minh_cua_thieu_nhi_nu",
      "category": "common",
      "titles": {
        "KR": "어린이 봉헌기도 (여아)",
        "VN": "Kinh Dâng Mình Của Thiếu Nhi Nữ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su, Chúa muốn con giúp Chúa cứu các linh hồn. Xin cho linh hồn con\ntrong mọi hoàn cảnh ở đời, lúc nào cũng hùng dũng vui tươi. Xin Chúa ban cho con can đảm, không từ chối Chúa một việc gì, lại luôn luôn vâng theo ý Chúa. Xin Chúa ban cho con\nơn biết làm cho những người chung quanh con được hạnh phúc\nvà suốt đời con chỉ biết làm vui lòng Chúa\nvà làm cho người ta yêu mến Chúa. Lạy Đức Nữ Đồng Trinh Ma-ri-a, Mẹ hiền của thiếu nhiỉ, xin Mẹ luôn gìn giữ trái tim con trong trắng\nvà trung thành với Chúa Giê-su. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_022_kinh_dang_minh_cua_thieu_nhi_nu",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "어린이 봉헌기도 (여아)",
        "Kinh Dâng Mình Của Thiếu Nhi Nữ",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_023_kinh_thieu_nhi_cau_cho_cha_me",
      "category": "common",
      "titles": {
        "KR": "부모님을 위한 어린이 기도",
        "VN": "Kinh Thiếu Nhi Cầu Cho Cha Mẹ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Cha trên trời\nlà Cha chúng con. Cha luôn luôn lắng nghe các con cái Cha. Xin Cha hãy nghe\nlời chúng con cầu nguyện cho cha mẹ chúng con. Cha đã nhờ các ngài\nmà ban cho chúng con tất cả, xin Cha trả cho các ngài\ntất cả những điều tốt đẹp\ncác ngài đã làm cho chúng con. Các ngài đã truyền lại sự sống cho chúng con, xin Cha gìn giữ các ngài được khoẻ mạnh. Các ngài đã nuôi sống chúng con, xin Cha ban cho các ngài\nđược mọi sự dùng đủ hằng ngày. Các ngài đã lo cho chúng con có quần áo mặc, xin Cha cho tâm hồn các ngài\nluôn được mặc ơn thánh của Cha. Xin cho các ngài, ngay ở đời này\nđã tìm thấy niềm hạnh phúc được phục vụ Cha và yêu mến Cha. Và xin cho chúng con\nmột ngày kia được sum họp với nhau trên Nước Trời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_023_kinh_thieu_nhi_cau_cho_cha_me",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "부모님을 위한 어린이 기도",
        "Kinh Thiếu Nhi Cầu Cho Cha Mẹ",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_024_kinh_thieu_nhi_don_minh_ruoc_le",
      "category": "common",
      "titles": {
        "KR": "성체성사 준비를 위한 어린이 기도",
        "VN": "Kinh Thiếu Nhi Dọn Mình Rước Lễ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su, con tin thật\nChúa đang ngự trong tấm bánh bé nhổ trên bàn thờ, Chúa là Thiên Chúa thật và là người thật, đã trở nên lương thực nuôi sống chúng con\ntrên đường về quê trời. Chúa muốn ở lại trong con\nvà con cũng ước ao rước Chúa vào lòng\nđể được ở lại trong Chúa. Nhưng con biết\nmình còn nhiều tội lỗi, chẳng đáng Chúa đến thăm. Xin Chúa tẩy sạch quả tim con, để con nên trong trắng. Xin Chúa mở rộng tâm hồn con, để con đừng từ chối Chúa sự gì. Lạy Chúa Giê-su, con yêu mến Chúa lắm, xin Chúa mau đến với con. Lạy Mẹ Ma-ri-a, xin giúp con xứng đáng đón rước Chúa Giê-su. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_024_kinh_thieu_nhi_don_minh_ruoc_le",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성체성사 준비를 위한 어린이 기도",
        "Kinh Thiếu Nhi Dọn Mình Rước Lễ",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_025_kinh_thieu_nhi_cam_on_sau_ruoc_le",
      "category": "common",
      "titles": {
        "KR": "성체성사 후 감사 기도",
        "VN": "Kinh Thiếu Nhi Cám Ơn Sau Rước Lễ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su, con tin Chúa đang ngự trong lòng con. Con cung kính thờ lạy Chúa\nlà Thiên Chúa uy nghỉ cao cả. Con sung sướng vì Chúa đến thăm con, dù con không xứng đáng. Lạy Chúa Giê-su, xin ở với con mãi mãi, trong suốt cuộc đời con. Xin làm cho con nên giống Chúa, hiền hậu và khiêm nhường, chăm chỉ và bác ái, hiếu thảo và vui tươi. Xin cho con nhớ rằng: Chúa đang ngự trong con\nvà con có bổn phận đem Chúa đến mọi nơi Ổ nhà và ở trường, trong khu xóm và ngoài đường phố, để tất cả những người bạn của con\nnhận biết Chúa và sống yêu thương nhau. Lạy Chúa Giê-su, con quyết tâm sống theo lời Chúa dạy\nđể đáp lại tình Chúa yêu con. Có Chúa, con không sợ hy sinh. Có Chúa, con đủ sức tránh xa tội lỗi\nvà sống trung thành với Chúa suốt đời con. Lạy Chúa Giê-su, con yêu mến Chúa. Lạy Chúa Giê-su, con yêu mến Chúa biết bao.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_025_kinh_thieu_nhi_cam_on_sau_ruoc_le",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성체성사 후 감사 기도",
        "Kinh Thiếu Nhi Cám Ơn Sau Rước Lễ",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_026_chuc_lanh",
      "category": "common",
      "titles": {
        "KR": "축복",
        "VN": "Chúc Lành",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Xin Thiên Chúa toàn năng\nban phúc lành cho tất cả chúng con. Xin Chúa che chở chúng con khỏi mọi sự dữ\nvà dẫn đưa chúng con đến nguồn sống muôn đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_026_chuc_lanh",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "축복",
        "Chúc Lành",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_027_kinh_nghia_duc_tin",
      "category": "common",
      "titles": {
        "KR": "신앙의 의미에 대한 기도",
        "VN": "Kinh Nghĩa Đức Tin",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Ngày Chúa nhật (nếu nhằm ngày lễ trọng thì đọc: Ngày lễ cả) hôm nay chúng con hiệp nhau kính lạy thờ phượng Chúa, không khen cầm tạ ơn Chúa về mọi ơn lành Chúa đã ban cho chúng con, và phạt tạ Chúa vì những tội lỗi chúng con đã phạm mất lòng Chúa; thì chúng con dám xin Chúa hãy khấng ban những ơn cần kíp, cho chúng con được rỗi linh hồn. Nên chúng con cả lòng tin vững vàng mọi điều đạo thánh Chúa dạy, nhất là những điều cần kíp này là: có một Đức Chúa Trời, phép tắc vô cùng, dựng nên trời đất mà Người có Ba Ngôi; Ngôi thứ nhất là Cha, Ngôi thứ hai là Con, Ngôi thứ ba là Thánh Thần; Ba Ngôi cùng một tính một phép, cho nên Ba Ngôi cùng một Chúa mà thôi. Chúng con tin Ngôi thứ Hai ra đời làm người sinh bởi bà Ma-ri-a đồng trinh; đặt tên là Giê-su, ở thế gian ba mươi ba năm, đoạn chịu chết trên cây thánh giá mà chuộc tội cho thiên hạ; đến ngày thứ ba Người sống lại; khỏi bốn mươi ngày lên trời; đủ mười ngày lại cho Đức k”\" Chúa Thánh Thần xuống trên các thánh Tông Đổ và Hội Thánh mới lập: ai chẳng thông công cùng Hội Thánh ấy, thì chẳng được rỗi linh hồn; mà linh hồn là giống thiêng liêng chẳng hề chết được; và đến ngày tận thế xác loài người ta sẽ sống lại mà chịu phán xét: kể lành lên thiên đàng hưởng phước đời đời; kẻ dữ sa hoả ngục chịu phạt Vô cùng. Mà chúng con tin các sự ấy mà thôi thì chưa đủ cho được lên thiên đàng, song phải giữ mười điều răn Đức Chúa Trời cùng năm luật điều Hội Thánh, và làm những việc lành phước đức. Nhân vì sự ấy chúng con hằng phải sợ hãi và trốn lánh các tội lỗi, nhất là bảy mối tội đầu là căn nguyên mọi tội lỗi khác. Vậy chúng con phải ân cần lo lắng, mà năng chịu các phép bí tích Đức Chúa Giê-su đã truyền, là những phương linh nghiệm cho chúng con được nên thánh. Có bảy phép bí tích mà thôi, song phép Rửa Tội, phép Mình Thánh Chúa cùng phép Giải Tội, là ba phép cần kíp hơn cho chúng con được rỗi. Ấy vậy chúng con phải ra sức lo lắng thế nào, mà chịu các phép trọng ấy cho nên cùng tin thật vững vàng, mà giữ cẩn thận các điều trước nay, thì mới được hưởng phúc thanh nhàn đời đời kiếp kiếp. A-men. mm nen",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_027_kinh_nghia_duc_tin",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "신앙의 의미에 대한 기도",
        "Kinh Nghĩa Đức Tin",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_029_kinh_sau_dieu_ran_hoi_thanh",
      "category": "common",
      "titles": {
        "KR": "교회의 여섯 가르침",
        "VN": "Kinh Sáu Điều Răn Hội Thánh",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Hội Thánh có sáu điều răn Thứ nhất: Xem lễ ngày Chúa nhật cùng các ngày lễ buộc. Thứ hai: Chớ làm việc xác ngày Chúa nhật cùng các ngày lễ buộc. Thứ ba: Xưng tội trong một năm ít là một lần. Thứ bốn. : Chịu Mình Thánh Đức Chúa Giê-su trong Mùa Phục Sinh. Thứ năm: Giữ chay những ngày Hội Thánh buộc. Thứ sáu: Kiêng thịt ngày thứ sáu cùng những ngày khác Hội Thánh dạy. Lưu ý: Kinh Sáu Điều Răn Hội Thánh đã có lâu đời trong các sách kinh và sách giáo lý của Hội Thánh Công Giáo. Riêng sách giáo lý của Hội Thánh Công Giáo được ban hành vào năm 1992 thì nội dung Kinh Sáu Điều Răn Hội Thánh vẫn giữ nguyên và còn thêm một bổn phận nữa là góp phần tài chánh cho Hội Thánh, nhưng thay vì sáu điều thì sách giáo lý của Hội Thánh tóm lại còn năm điều. (GLCG. Số 2041 ~ 2049). Trong lần tái bản Sách Kinh Nhỏ này, - } chúng tôi cho in cả hai kinh để tuỳ nghỉ sử dụng.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_029_kinh_sau_dieu_ran_hoi_thanh",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "교회의 여섯 가르침",
        "Kinh Sáu Điều Răn Hội Thánh",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_030_kinh_nam_dieu_ran_hoi_thanh",
      "category": "common",
      "titles": {
        "KR": "교회의 다섯 가르침",
        "VN": "Kinh Năm Điều Răn Hội Thánh",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Hội Thánh có năm điều răn Thứ nhất: Dự Thánh Lễ và kiêng việc xác ngày Chúa nhật cùng các ngày lễ buộc. Thứ hai. : Xưng tội trong một năm ít là một lần. Thứ ba. . : Chịu Mình Thánh Đức Chúa Giê-su trong Mùa Phục Sinh. Thứ bốn: Kiêng thịt và giữ chay những ngày Hội Thánh buộc. Thứ năm: Đóng góp theo khả năng cho nhu cầu vật chất của Hội Thánh.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_030_kinh_nam_dieu_ran_hoi_thanh",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "교회의 다섯 가르침",
        "Kinh Năm Điều Răn Hội Thánh",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_031_kinh_cai_toi_bay_moi",
      "category": "common",
      "titles": {
        "KR": "일곱가지 대죄",
        "VN": "Kinh Cải Tội Bảy Mối",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Cải tội bảy mối có bảy đức Thứ nhất: Khiêm nhượng, chớ kiêu ngạo. Thứ hai. . : Rộng rãi chớ hà tiện. Thứ ba: Giữ mình sạch sẽ, chớ mê dâm dục. Thứ bốn. : Hay nhịn chớ hờn giận. Thứ năm: Kiêng bớt, chớ mê ăn uống. Thứ sáu. : Yêu người, chớ ghen ghét. Thứ bảy. : Siêng năng việc Đức Chúa Trời, chớ làm biếng.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_031_kinh_cai_toi_bay_moi",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "일곱가지 대죄",
        "Kinh Cải Tội Bảy Mối",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_032_kinh_muoi_bon_moi_thuong_nguoi",
      "category": "common",
      "titles": {
        "KR": "자비에 대한 기도 (열네가지 자비의 행위)",
        "VN": "Kinh Mười Bốn Mối Thương Người",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Thương người có mười bốn mối. Thương xác bảy mối Thứ nhất. : Cho kẻ đói ăn. Thứ hai. : Cho kẻ khát uống. Thứ ba. . : Cho kẻ rách rưới ăn mặc. Thứ bốn. : Cho khách trọ nhà. Thứ năm: Thăm viếng bệnh nhân. Thứ sáu. : Thăm viếng kể bị cầm tù. Thứ bảy -: An táng kẻ chết. Thương linh hồn bảy mối Thứ nhất: Lấy lời lành mà khuyên người. Thứ hai. . : Mở dạy kẻ mê muội. Thứ ba: An ủi kẻ âu lo. Thứ bốn. : Răn bảo kề có tội. Thứ năm: Tha kể dể ta. Thứ sáu. : Nhịn kẻ mất lòng ta. Thứ bảy. : Cầu cho kề sống và kẻ chết.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_032_kinh_muoi_bon_moi_thuong_nguoi",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "자비에 대한 기도 (열네가지 자비의 행위)",
        "Kinh Mười Bốn Mối Thương Người",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_033_kinh_tam_moi_phuc_that",
      "category": "common",
      "titles": {
        "KR": "팔복선언",
        "VN": "Kinh Tám Mối Phúc Thật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Thứ nhất: Phúc thay ai có tâm hồn nghèo ì khó, vì Nước Trời là của họ. Thứ hai. : Phúc thay ai hiền lành, vì họ sẽ được Đất Hứa làm gia nghiệp. Thứ ba: Phúc thay ai sầu khổ, vì họ sẽ được ủi an. Thứ bốn. : Phúc thay ai khao khát sự công chính, vì họ sẽ được thoả lòng. Thứ năm: Phúc thay ai xót thương người, vì họ sẽ được xót thương. Thứ sáu: Phúc thay ai có tâm hồn trong sạch, vì họ sẽ được nhìn thấy Thiên Chúa. Thứ bảy. : Phúc thay ai xây dựng hoà bình, vì họ sẽ được gọi là con Thiên Chúa. Thứ tám: Phúc thay ai bị bách hại vì sự công chính, vì Nước Trời là của họ. Phúc cho anh em khi vì Thầy mà bị người †a sỉ vả, bách hại và vu khống đủ điều xấu xa. Anh em hãy vui mừng hớn hở, vì phần thưởng cho anh em ở trên trời thật lớn lao.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_033_kinh_tam_moi_phuc_that",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "팔복선언",
        "Kinh Tám Mối Phúc Thật",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_038_kinh_cau_ten_rat_thanh_duc_chua_gie_su",
      "category": "litany",
      "titles": {
        "KR": "예수님의 거룩한 이름에 드리는 기도",
        "VN": "Kinh Cầu Tên Rất Thánh Đức Chúa Giê-su",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Rất Thánh Đức Chúa Giê-su (3 cầu dưới đọc mỗi câu 2 lần) Xin Chúa thương xót chúng con. Xin Chúa Ki-tô thương xót chúng con. Xin Chúa thương xót chúng con. Chúa Giê-su nghe cho chúng con. Chúa Giê-su nhậm lời chúng con. Đức Chúa Cha ngự trên trời là Đức Chúa Trời thật. Thưa: Thương xót chúng con (Câu nào cũng thư như vậy) { Đức Chúa Con chuộc tội cứu thế là Đức Chúa Trời thật. Đức Chúa Thánh Thần là Đức Chúa Trời thật. Ba Ngôi cũng là một Đức Chúa Trời. Chúa Giê-su là Con Đức Chúa Trời hằng sống. Chúa Giê-su là ánh sáng Đức Chúa Cha. u y=—eeeeoÓ Chúa Giê-su là ánh thanh sạch Chúa sáng láng đời đời. Chúa Giê-su là Vua vinh hiển. Chúa Giê-su là mặt trời soi đàng công chính. Chúa Giê-su là Con Đức Bà Ma-ri-a đồng trinh. Chúa Giê-su rất đáng yêu mến. Chúa Giê-su cực mầu cực nhiệm. Chúa Giê-su là Chúa mạnh mẽ Chúa Giê-su là Cha thật đời sau. Chúa Giê-su là sứ Đức Chúa Trời Ba Ngôi. Chúa Giê-su phép tắt vô cùng. Chúa Giê-su nhịn nhục vô ngần. Chúa Giê-su chịu luy mọi đàng. Chúa Giê-su hiển lành và khiêm nhượng trong lòng. Chúa Giê-su yêu chuộng sự sạch sẽ. Chúa Giê-su yêu mến chúng con. Chúa Giê-su là Chúa sự bình an. Chúa Giê-su là căn nguyên sự sống. Chúa Giê-su là gương mọi nhân đức. Chúa Giê-su sốt sắng thương yêu linh hồn người ta. Chúa Giê-su là Chúa thật chúng con. Chúa Giê-su là chốn chúng con ẩn dật. Chúa Giê-su là Cha kẻ khó khăn. Chúa Giê-su là kho tàng các giáo nhân. Chúa Giê-su là Đấng chăn chiên lành. ị Chúa Giê-su là sự sáng thật. Chúa Giê-su là Đấng khôn ngoan hằng có đời đời. Chúa Giê-su là Đấng lòng lành vô cùng. Chúa Giê-su là đàng cùng là sự sống chúng con. Chúa Giê-su là sự vui mừng các thánh thiên thần. Chúa Giê-su là Vua các thánh tổ tông. Chúa Giê-su là Thầy các thánh tông đồ. Chúa Giê-su là Đấng dạy dỗ các thánh sử. Chúa Giê-su là sức mạnh các thánh tử vì đạo. Chúa Giê-su là sự sáng soi các thánh hiển tu. Chúa Giê-su là sự thanh sạch các thánh đồng trinh. Chúa Giê-su là triểu thiên các thánh nam cùng các thánh nữ. Chúa Giê-su hằng có lòng lành. Thưa: Chúa Giê-su tha tội chúng con. Chúa Giê-su hằng có lòng lành. Thưa: Chúa Giê-su nhậm lời chúng con. Kẻo phải sự dữ. Thưa: Chúa Giê-su chữa chúng con. (Câu nào cũng thư như vậy) Kẻo phải tội lỗi. Kẻo phải cơn Chúa giận. Kẻo phải chước ma quỹ cám dỗ. Kẻo phải lòng mê tà dâm. Kẻo phải chết khốn nạn đời đời. Kẻo trễ bồ ơn Chúa soi sáng. Vì phép mầu nhiệm Đức Chúa Giê-su xuống thế làm người. Vì Đức Chúa Giê-su sinh ra. Vì Đức Chúa Giê-su Hài Đồng. Vì Đức Chúa Giê-su trót đời ăn ở xứng đáng Đức Chúa Trời thật. Vì Đức Chúa Giê-su chịu khó nhọc. Vì Đức Chúa Giê-su lo buồn đổ mồ hôi máu ra, cùng chịu nạn. Vì Đức Chúa Giê-su chịu đóng đinh cùng bỏ tất tưởi trên cây thánh giá. Vì Đức Chúa Giê-su chịu yếu nhược rũ liệt. Vì Đức Chúa Giê-su chịu chết và chịu táng xác. Vì Đức Chúa Giê-su sống lại. Vì Đức Chúa Giê-su lên trời. ' Vì Đức Chúa Giê-su truyền phép Thánh Thể. Vì Đức Chúa Giê-su vui mừng khoái lạc. Vì Đức Chúa Giê-su vinh hiển sáng láng. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su tha tội chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su nhậm lời chúng con. Chúa Giê-su chuộc tọi cứu thế. Thưa: Chúa Giê-su thương xót chúng con. Chúa Giê-su nghe cho chúng con. Chúa Giê-su nhậm lời chúng con. Lời nguyện Chúng con lạy ơn Đức Chúa Giê-su là Chúa chúng con; các thánh ở trên trời, các người ở dưới thế, các quỷ ở trong hoả ngục, cũng kính sợ danh Đức Chúa Giê-su cực cao cực trọng cực mầu cực nhiệm, phép tắc vô cùng. Đức Chúa Giê-su là đàng cực chính cực thật; ai mà theo đàng này thì được sống lâu vui về chẳng cùng. Chúng con xin hằng theo chân Đức Chúa Giê-su, kẻo lạc đàng sa hoả ngục khốn nạn vô cùng, lại xin Đức Chúa cha chớ chấp tội lỗi chúng con. Ấy Con Đức Chúa Cha là Đức Chúa Giê-su\nđã ra đời làm người vì chúng con; ấy máu thánh Đức Chúa Giê-su\nđã chảy ra hết vì tội thiên hạ. Xin Đức Chúa Cha\nhãy xem Con xuống thế\nliều mình chịu nạn chịu chết cho hết cả và loài người ta, mà tha tội tha vạ cho chúng con. Chúng con cám ơn Đức Chúa Giê-su chẳng có khi khuây, hằng trông cho thấy mặt Đức Chúa Giê-su cực ltốt cực lành, cực vui cực sáng, mà thờ phượng ngợi khen Đức Chúa Giê-su\ncùng Đức Chúa Cha và Đức Chúa Thánh Thần\nchẳng hay hết chẳng hay cùng. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_038_kinh_cau_ten_rat_thanh_duc_chua_gie_su",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "예수님의 거룩한 이름에 드리는 기도",
        "Kinh Cầu Tên Rất Thánh Đức Chúa Giê-su",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_039_kinh_cau_trai_tim_duc_chua_gie_su",
      "category": "litany",
      "titles": {
        "KR": "예수성심호칭기도",
        "VN": "Kinh Cầu Trái Tim Đức Chúa Giê-su",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "(3 cầu dưới đọc mỗi câu 2 lần) Xin Chúa thương xót chúng con. Xin Chúa Ki-tô thương xót chúng con. Xin Chúa thương xót chúng con. Chúa Ki-tô nghe cho chúng con. Chúa Ki-tô nhậm lời chúng con. Đức Chúa Cha ngự trên trời là Đức Chúa Trời thật. Thưa: Thương xót chúng con. (Câu nào cũng thư như vậy) Đức Chúa Con chuộc tội cứu thế là Đức Chúa Trời thật. Đức Chúa Thánh Thần là Đức Chúa Trời thật. Ba Ngôi cũng là một Đức Chúa Trời. Rất thánh Trái tim Đức Chúa Giê-su là Con Đức Chúa Cha hằng có đời đời. R. th. Tr. tim ĐCG đã tượng sinh trong lòng Thánh Mẫu đồng trình bởi phép Đức Chúa Thánh Thần ban xuống. R. th. Tr. tim ĐCG đã hiệp thành một thể cùng Con Đức Chúa Trời. R. . th. Tr. tim ĐCG rất oai nghỉ vô cùng. R. th. Tr. tim ĐCG là đền thánh Đức Chúa Trời ngự. R. th. Tr. tim ĐCG là ngai Chúa chí tôn vô đối. R. th. Tr. tim ĐCG là toà Thiên Chúa cùng là cửa thiên đàng. mm man aoooNNPi R. th. Tr. tim ĐCG là lò lửa hằng hừng sự kính mến Chúa. R. th. Tr. tim ĐCG gồm trọn đức công bình và đức mến yêu. R. th. Tr. tim ĐCG rất nhân lành và đầy dẫy sự nhân ái. R. th. Tr. tim ĐCG gồm no mọi nhân đức. R. th. Tr. tim ĐCG rất đáng kinh thờ tôn trọng mọi đàng. R. th. Tr. tim ĐCG là Vua cai trị cùng là căn bổn lòng mọi đấng. R. th. Tr. tim ĐCG là kho tàng tích để mọi sự khôn ngoan duệ trí. R. th. Tr. tim ĐCG là toà trót tính Đức Chúa Trời ngự. R. th. Tr. tim ĐCG rất đẹp lòng Đức Chúa Cha. R. th. Tr. tim ĐCG là mạch tràn trề thông cho chúng con mọi ơn phước. R. th. Tr. tim ĐCG là thiên đàng muôn đời trông ước. R. th. Tr. tim ĐCG hay nhịn nhục và hay thương xót vô cùng. R. th. Tr. tim ĐCG hằng ban bố cho kẻ khẩn cầu. R. th. Tr. tim ĐCG là mạch trường sinh và căn bổn mọi đức trọn lành. R. th. Tr. tim ĐCG là phần đền vì tội chúng con. R. th. Tr. tim ĐCG đã phải trăm bề sỉ báng. R. th. Tr. tim ĐCG đã phải ngàn nỗi ưu phiền vì tội chúng con. R. th. Tr. tim ĐCG hằng sẵn sàng vâng theo ý Đức Chúa Cha cho đến chết. R. th. Tr. tim ĐCG đã chịu lưỡi đòng đam thấu cạnh nương long. R. th. Tr. tim ĐCG là nơi kể âu lo được nhờ mọi bể an nhàn. R. th. Tr. tim ĐCG là sự sống thật cùng hay làm cho chúng con được sống lại. R. th. Tr. tim ĐCG là sự bình an cùng đem chúng con lại làm lành cùng Chúa. R. th. Tr. tim ĐCG là lễ tiến dâng đến tội chúng con. R. th. Tr. tim ĐCG hay cứu vớt kẻ cậy trông. R. th. Tr. tim ĐCG là nơi cậy cho kể mong sinh thì. R. th. Tr. tim ĐCG làm cho các thánh vui mừng khoái lạc. eeeeeeo Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su tha tội chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su nhậm lời chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su thương xót chúng con. Xướng: Lạy Đức Chúa Giê-su hiền lành và khiêm nhượng trong lòng. Đáp: Xin uống lòng chúng con nên giống như Rất thánh Trái tim Chúa. Lời nguyện Lạy Chúa là Đấng phép tắc vô cùng hằng có đời đời, xin Chúa đoái xem trái tim Con Chúa rất yêu dấu\nđã tán tụng ngợi khen, cùng phạt tạ thánh danh Chúa, cho kẻ có tội được nhờ phần rỗi. Cúi xin Chúa giảm cơn thịnh nộ\nmà tha thứ cho những kẻ ấy đang gắn bó nài xin lòng nhân lành Chúa, khoả lấp mọi tiền khiên; cũng vì thánh danh Con Chúa là Đức Chúa Giê-su Ki-tô, là Đấng hằng sống hằng trị cùng Đức Chúa Cha và Đức Chúa Thánh Thần đời đời chẳng cùng. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_039_kinh_cau_trai_tim_duc_chua_gie_su",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "예수성심호칭기도",
        "Kinh Cầu Trái Tim Đức Chúa Giê-su",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_040_kinh_cau_duc_ba",
      "category": "litany",
      "titles": {
        "KR": "복되신 동정 마리아께 드리는 기도",
        "VN": "Kinh Cầu Đức Bà",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "(3 câu dưới đọc mỗi câu 2 lần) Xin Chúa thương xót chúng con. Xin Chúa Ki-tô thương xót chúng con. Xin Chúa thương xót chúng con. Chúa Ki-tô nghe cho chúng con. Chúa Ki-tô nhậm lời chúng con. Đức Chúa Cha ngự trên trời là Đức Chúa Trời thật. Thưa: Thương xót chúng con. (3 câu sau cũng thư như vậy) Đức Chúa Con chuộc tội cứu thế là Đức Chúa Trời thật. Đức Chúa Thánh Thần là Đức Chúa Trời thật. Ba Ngôi cũng là một Đức Chúa Trời. Rất thánh Đức Bà Ma-ri-a. Thưa: Cầu cho chúng con. (Câu nào cũng thưa như vậy) Rất thánh Đức Mẹ Chúa Trời. Rất thánh nữ đồng trinh trên hết các kẻ đồng trinh. Đức Mẹ Chúa Ki-tô. Đức Mẹ là Mẹ Hội Thánh. Đức Mẹ thông ơn Thiên Chúa. Đức Mẹ cực thanh cực tịnh. Đức Mẹ tuyển vẹn mọi đàng. Đức Mẹ chẳng nhuốm bợn nhơ. Đức Mẹ rất đáng yêu mến. Đức Mẹ cực mầu cực nhiệm. Đức Mẹ chỉ bào đàng lành. Đức Mẹ sinh Chúa tạo thiên lập địa. Đức Mẹ sinh Chúa cứu thế. Đức Nữ cực khôn cực ngoan. Đức Nữ rất đáng kính chuộng. Đức Nữ rất đáng ngợi khen. Đức Nữ có tài có phép. Đức Nữ có lòng khoan nhân. Đức Nữ trung tín thật thà. Đức Bà là gương nhân đức. Đức Bà là toà Đấng khôn ngoan. Đức Bà làm cho chúng con vui mừng. Đức Bà là Đấng trọng thiêng. Đức Bà là Đấng đáng tôn trọng. Đức Bà là Đấng sốt mến lạ lùng. non Đức Bà như hoa hường mầu nhiệm vậy. Đức Bà như lâu đài Đa-vít vậy. Đức Bà như tháp ngà báu vậy. Đức bà như đền vàng vậy. Đức Bà như hòm bia Thiên Chúa vậy. Đức Bà là cửa thiên đàng. Đức Bà như sao mai sáng vậy. Đức Bà cứu kể liệt kẻ khốn. Đức Bà bầu chữa kẻ có tội. Đức Bà an ủi kẻ âu lo. Đức Bà phù hộ các giáo hữu. Nữ vương các thánh Thiên thần. Nữ vương các thánh Tổ tông. Nữ vương các thánh Tiên tri. Nữ vương các thánh Tông đồ. Nữ vương các thánh Tử vì đạo. Nữ vương các thánh Hiển tu. Nữ vương các thánh Đôgnf trinh. Nữ vương các thánh nam cùng các thánh nữ. Nữ vương chẳng hề mắc tội tổ tông. Nữ vương linh hồn và xác lên trời. Nữ vương truyền phép rất thánh Mân Côi. Nữ vương ban sự bằng an. Chúa Giê-su chuộc tọi cứu thế. Thưa: Chúa Giê-su tha tội chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su nhậm lời chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su thương xót chúng con. Xướng: Lạy rất thánh Đức Mẹ Chúa Trời, xin cầu cho chúng con. Đáp: Đáng chịu lấy những sự Chúa Ki-tô đã hứa. Lời nguyện Chúng con lạy ơn Rất thánh Đức Mẹ Chúa Trời, chúng con trông cậy Đức Bà là Chúa bầu chúng con; xin cho chúng con biết lòng Đức Mẹ\nyêu dấu con mọi này còn ở dưới thế cách xa mặt Mẹ. Đức Chúa Giê-su xưa xuống thế gian chẳng bồ loài kẻ có tội, lại liều mình chịu nạn chịu chết vì hết cả và loài người ta Đức Mẹ cũng một lòng theo con như vậy. Mẹ 44 F ôi Ï Khoan thay! Nhân thay! Chớ trở mặt ì mà chẳng nhìn chúng con, xin Đức Mẹ thương xem dạy dỗ an ủi chúng con, con cậy Mẹ ðÏ phép tắc nhiều trên hết thiên thần cùng trổ hết các thánh. Chúng con còn ở đưới thế nà, như kẻ đi biển cả vậy; Đức Mẹ là nhự nh Sao chính ngự ở trời bên bắc Vậy. Xin Đức dẫn đàng cho chúng con được theo, kệo ph, Xiêu chìm sa hoả ngục vô cùng; chúng có trông Đức Mẹ cho chúng con\nngày sau đuờ, vào cửa thiên đàng\nxem thấy mặt Đức Chỉ Giê-su cùng mặt Đức Mẹ, được chịu muận muôn sự phúc, gồm hết mọi sự lốt làn chẳng hay hết chẳng hay cùng. A-men. . . ⁄ ầ BAO Ạ lệ kia lx x B sa à 45 kinh Cầu Thánh Giu-se câu dưới đọc mỗi câu 2 lần) ˆ Chúa thương xót chúng con. ậ ' Chúa Ki-tô thương xót chúng con. lì Chúa thương xót chúng con. Đa Ki-tô nghe cho chúng con. Chúa Ki-tô nhậm lời chúng con. Đ° Chúa Cha ngự trên trời là Đức Chúa Trời thật. Thu a: Thương xót chúng con. ⁄ ` (Câu nào cũng thưa như vậy) Đức Chúa Con chuộc tội cứu thế là Đức hữa Trời thật. Đức Chúa Thánh Thần là Đức Chúa Trời thật. Bổ Ngôi cũng là một Đức Chúa Trời. Bấi hánh Đức Bà Ma-ri-a. 'Thữa: Cầu cho chúng con. xi Câu nào cũng thưa như vậy) Ông \"thánh Giu-se. Ông thánh Gìu-se là đấng sang trọng bởi lg Ða-vit. Bộ hánh Giu-se là sự sáng láng các thánh Pa Ông thánh Giu-se là bạn Đức Mẹ Chúa Trời. Ông thánh Giu-se là đấng thanh sạch giữ gìn đức Nữ đồng trinh. Ông thánh Giu-se là đấng dưỡng nuôi con Đức Chúa Trời. Ông thánh Giu-se là đấng ân cần gìn giữ Chúa Ki-tô. Ông thánh Giu-se là đấng cai quản Thánh Gia Thất xưa. Ông thánh Giu-se gồm no mọi nhân đức. Ông thánh Giu-se cực thanh cực tịnh. Ông thánh Giu-se cực khôn cực ngoan. Ông thánh Giu-se là đấng vững vàng mạnh mẽ. Ông thánh Giu-se chịu luy mọi đàng. Ông thánh Giu-se rất ngay chính thật thà. Ông thánh Giu-se làm gương nhân đức nhịn nhục. Ông thánh Giu-se là kiểu thức các tài công noi theo. Ông thánh Giu-se là đấng làm cho sáng danh gia đạo. Ông thánh Giu-se che chở kẻ giữ mình đồng trinh. Ông thánh Giu-se là đấng nâng đỡ gia thất chúng con. Ông thánh Giu-se là đấng an ủi kẻ mắc gian nan. Ông thánh Giu-se là nơi cậy cho kẻ liệt lào. Ông thánh Giu-se là bổn mạng kẻ mong sinh thì. Ông thánh Giu-se làm cho quỷ thần kinh khiếp. Ông thánh Giu-se là quan thầy bầu chữa Hội Thánh. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su tha tội chúng con. Chúa Giê-su chuộc tội cứu thế. Thưa: Chúa Giê-su nhậm lời chúng con. Chúa Giê-su chuộc fội cứu thế. Thưa: Chúa Giê-su thương xót chúng con. Xướng: Chúa đã đặt ông thánh Giu-se làm chủ nhà Chúa. Đáp: . . Cùng cai quần gia nghiệp Chúa. Lời nguyện Lạy Đức Chúa Giê-su là Chúa chúng con, Chúa đã khấng toan liệu cách khôn ngoan, lưỡi khen chẳng xiết mà chọn ông thánh Giu se làm bạn thanh sạch Đức Mẹ thân sinh Chúa, xin Chúa hãy khâng ban cho chúng con\nnhư đã cung kính ông thánh Giu-se làm quan thầy bàu chữa dưới đất, thì cũng được nhờ người cầu thay nguyện giúp trên trời, vì Chúa là Đấng hằng sống hằng trị đời đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_040_kinh_cau_duc_ba",
        "litany",
        "호칭기도",
        "Kinh cầu",
        "Litanies",
        "連祷",
        "Litaniae",
        "복되신 동정 마리아께 드리는 기도",
        "Kinh Cầu Đức Bà",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_043_kinh_vuc_sau",
      "category": "common",
      "titles": {
        "KR": "심연에 드리는 기도",
        "VN": "Kinh Vực Sâu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa\ncon ở dưới vực sâu kêu lên Chúa\nxin Chúa hãy thẩm nhận lời con kêu van\nhãy lắng nghe tiếng con cầu xin\nNếu Chúa chấp tội nào ai rỗi được\nbởi Chúa hằng có lòng lành\ncùng vì Lời Chúa phán hứa\nCon đã trông cậy Chúa\nLinh hồn con cậy vì lời hứa ấy\nvì đã trông cậy Chúa\nNhững kẻ làm dân Đức Chúa Trời đêm ngày hãy trông cậy Người cho liên\nVì Người rất nhân lành hay thương vô cùng\nsẽ tha hết mọi tội lỗi kẻ làm dân Người thay thảy\nLạy Chúa\nxin ban cho các linh hồn được nghỉ ngơi đời đời\nvà được sáng soi vô cùng\nLạy Chúa, xin cứu lấy các linh hồn cho khỏi tù ngục mà được nghỉ yên. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_043_kinh_vuc_sau",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "심연에 드리는 기도",
        "Kinh Vực Sâu",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_044_cac_cau_lay",
      "category": "common",
      "titles": {
        "KR": "성모송",
        "VN": "Các Câu Lạy",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "X. Lạy Rất Thánh Trái Tim Đức Chúa Giê-su. Ð. Thương xót chúng con. X. . Lạy Trái Tim cực thanh cực tịnh Rất Thánh Đức Bà Ma-ri-a. Đ. Cầu cho chúng con. X. Lạy ông Thánh Giuse\nlà bạn thanh sạch Đức Bà Ma-ri-a trọn đời đồng trinh. Ð. Câu cho chúng con. X. Lạy các thánh Tử đạo Việt Nam. Ð. Cầu cho chúng con.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Hằng Ngày",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_044_cac_cau_lay",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "성모송",
        "Các Câu Lạy",
        "Kinh Hằng Ngày"
      ]
    },
    {
      "id": "vn_ocr_045_kinh_bay_phep_bi_tich",
      "category": "sacrament",
      "titles": {
        "KR": "칠성사에 드리는 기도",
        "VN": "Kinh Bảy Phép Bí Tích",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Đạo Đức Chúa Trời có bảy phép Bí tích Thứ nhất: là phép Rửa tội. Thứ hai -: là phép thêm sức. Thứ ba -: là phép Mình Thánh Chúa. Thứ bốn _: là phép Giải tội. Thứ năm: là phép Xức dầu thánh. Thứ sáu _: là phép Truyền Chức Thánh. Thứ bảy _: là phép Hôn phối.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Kinh Ngày Chúa Nhật",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_045_kinh_bay_phep_bi_tich",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "칠성사에 드리는 기도",
        "Kinh Bảy Phép Bí Tích",
        "Kinh Ngày Chúa Nhật"
      ]
    },
    {
      "id": "vn_ocr_047_kinh_den_ta_trai_tim_cuc_trong_duc_chua_gie_su",
      "category": "Various",
      "titles": {
        "KR": "예수 성심께 드리는 보속 기도",
        "VN": "Kinh Đền Tạ Trái Tim Cực Trọng Đức Chúa Giê-su",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Trái Tim cực trọng Đức Chúa Giê-su đã thương chúng con vô cùng\nAi kể cho xiết được những ơn Trái Tim Cực Thánh đã ban cho chúng con; từ khi Đức Chúa Giê-su mới sinh ra\nthì Trái Tim Người đã nghĩ đến chúng con là kẻ hèn mọn\nmọi việc Người làm thì đã làm vì chúng con\nNgười đã chịu đau đớn\nđã chịu nạn\nđã chịu chết\nTrái Tim Người đã chịu cực khổ vì chúng con\nchúng con mê muội bấy lâu nay\nchưa suy ơn Đức Chúa Trời nên\nxin Đức Chúa Trời tha tội tha vạ cho kẻ có tội\nChúng con là kẻ khốn khó\nchẳng biết làm thế nào mà đội ơn cho xứng đáng\nnay ơn trên trời soi sáng\nthì chúng con mới biết Đức Chúa Giê-su muốn cho người ta kính mến Trái Tim Người cách riêng\nThật là chúng con thiếu thốn mọi đàng\ntrong mình những tội lỗi\nchẳng có sự gì là đáng dâng cho Trái im Cực Thánh\nChúng con xấu hổ lắm\nsấp mình dưới chân Đấng Nhân Lành vô cùng\nchúng con hợp một ý cùng Bẻ Trên mà dâng mình cho Trái Tim cực trọng Đức Chúa Giê-su: chúng con dâng linh hồn\nxin Trái Tim gìn giữ cho sạch mọi tội\nchúng con dâng xác\nxin Trái Tim ban ơn cho được làm tôi Đức Chúa Trời\nmọi sự bề trong bề ngoài\nmọi việc chúng con làm\nsự sống sự chết\ntài trí, của cải hết mọi sự, chúng con dâng cho Trái Tim thay thảy\ndù khi chúng con được sự gì lành\ndù khi phải sự gì khốn khó thì xin chịu bằng lòng cho sáng danh Trái Tim Đức Chúa Giê-su\nChúng con dâng cả anh em họ hàng\nxin Trái Tim gìn giữ cùng ban mọi ơn lành\nỚ Trái Tim Cực Thánh\nhãy cai trị trong lòng chúng con\nxin che chở chúng con cho khỏi chước ma quỷ\nxin thêm lòng tin cậy kính mến cho chúng con đẹp lòng Đức Chúa Trời; xin phá những sự dữ hay vây bọc tư bề; xin cứu lấy chúng con trong giờ sau hết; xin ban mọi ơn lành cho Đức Giám Mục chăn giữ con chiên Đức Chúa Giê-su; xin phù hộ cho các Thầy cả được đẹp lòng Đức Chúa Trời\ncùng xin giúp các Đấng các bậc được dạy dỗ chúng con cho nên\nỚ Trái Tim hay thương vô cùng\nhãy chịu lấy trái tim hèn mọn chúng con\nhãy ban lòng kính mến một ngày một hơn ở đời này\nhãy đưa chúng con lên thiên đàng hưởng Trái tim Đức Chúa Giê-su đời đời chẳng cùng. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_047_kinh_den_ta_trai_tim_cuc_trong_duc_chua_gie_su",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "예수 성심께 드리는 보속 기도",
        "Kinh Đền Tạ Trái Tim Cực Trọng Đức Chúa Giê-su",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_048_kinh_dang_moi_nguoi_nuoc_viet_nam_cho_duc_ba",
      "category": "national",
      "titles": {
        "KR": "베트남 모든 백성을 복되신 동정 마리아께 봉헌하는 기도",
        "VN": "Kinh Dâng Mọi Người Nước Việt Nam Cho Đức Bà",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "cho Đức Bà Ma-ri-a Lạy Rất Thánh Đức Bà Mẹ Đức Chúa Trời và Mẹ chúng con\nnay chúng con sấp mình xin dâng cho Mẹ rất nhân từ\ntrót mình chúng con là thân sức sự sống\ncác việc làm\nmọi sự thuộc về chúng con\nnay chúng con cũng lấy lòng con cái mà dâng cho Đức Mẹ mọi miền trong dân nước Việt Nam này. Trước là xin Đức Bà là Mẹ các Thầy cả\ncùng các kẻ giúp việc giảng đạo thánh\nđể mọi đấng bậc được lòng sốt sắng làm gương sáng và chịu khó lập công cho bền lòng. Lại xin làm Mẹ các giáo hữu\nvà phù hộ cho các con cái hằng được thêm nhiều và tấn tới đi đàng nhân đức một ngày một hơn\nSau hết\nxin làm Mẹ các kẻ còn đi đàng lạc\nmà đưa vẻ sự sáng thật là đạo thánh Đức Chúa Trời\nChớ gì hết mọi người trong nước Việt nam này\nnhờ Máu Cực Châu Báu Con Đức Mẹ đã đổ ra mà cứu chuộc\nvà nhờ công nghiệp Đức Mẹ cầu bầu mà được tìm đến cùng Trái im Cực Trọng Đấng Cứu Thế\nlà cội rễ sự nên lành nên thánh\nđể sau nên một đoàn chiên theo một Chúa chiên. Đức Bà phù hộ kẻ có đạo\ncầu cho chúng con\nĐức Mẹ thông ơn Thiên Chúa\ncầu cho chúng con\nNữ Vương nước Việt Nam ngự trên trời\ncầu cho chúng con.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_048_kinh_dang_moi_nguoi_nuoc_viet_nam_cho_duc_ba",
        "national",
        "국가별 고유 기도문",
        "Kinh Nguyện Riêng Từng Nước",
        "Local Prayers",
        "各国の祈り",
        "Preces locales",
        "베트남 모든 백성을 복되신 동정 마리아께 봉헌하는 기도",
        "Kinh Dâng Mọi Người Nước Việt Nam Cho Đức Bà",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_050_kinh_trai_tim_vo_nhiem_me",
      "category": "Various",
      "titles": {
        "KR": "성모 마리아의 티 없는 성심에 드리는 기도",
        "VN": "Kinh Trái Tim Vô Nhiễm Mẹ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Trái Tim Vô Nhiễm nguyên tội Đức Mẹ Đồng Trinh Ma-ri-a\nngày hôm nay con xin dâng mình con\ndâng sự sống con\ndâng các việc lành con làm\ndâng hết mọi sự thuộc về con\nNhất là con xin bằng lòng chịu mọi sự khó Chúa định\ncó ý đền tạ Trái Tim Vô Nhiễm nguyên tội và đau đớn Mẹ\nbù lại những tội lỗi con\nvà tội lỗi mọi người xúc phạm đến Trái Tim Mẹ\ncùng Trải Tìm Chúa Giê-su Con Mẹ\ncũng là như chính Trái Tim Mẹ vậy\nCon xin hợp ý cùng những kẻ dâng mình đền tạ liên tiếp Trái Tim Vô Nhiễm nguyên tội Mẹ\nnguyện xin Mẹ cho chúng con được vào ẩn náu trong Trái Tim Mẹ\nvà nhờ Trái Tim Mẹ mà đến cùng Trái Tim Cực Thánh Chúa Giê-su Con Mẹ\nlại xin Mẹ bầu cử cùng Chúa đổ ơn tha thứ và ơn thương xót xuống cho mọi người trên thế gian\ncùng làm cho mọi người nhận biết và kính mến Trái Tim Mẹ ở đời này\nđể ngày Sau được cùng Trái Tim Mẹ\nhát mừng tạ ơn Chúa Ba Ngôi trên nơi vĩnh phúc đời đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_050_kinh_trai_tim_vo_nhiem_me",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "성모 마리아의 티 없는 성심에 드리는 기도",
        "Kinh Trái Tim Vô Nhiễm Mẹ",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_051_kinh_thanh_giu_se",
      "category": "Various",
      "titles": {
        "KR": "성 요셉께 드리는 기도",
        "VN": "Kinh Thánh Giu-se",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "quan thầy giáo phận Xuân Lộc Lạy Chúa Ba Ngôi cực thánh\nchúng con cảm tạ lòng thương vô biên Chúa\ntrong việc chọn Thánh Giuse làm cha nuôi Con Một Chúa\nvà làm bạn cùng Đức Trinh Nữ Ma-ri-a rất thánh\nMẹ Chúa Giê-su. Chúng con cùng với Giáo Hội\nca tụng và kính mừng Thánh Giuse là Đấng công chính và trung tín\nNgười hằng luôn sẵn sàng và mau mắn thi hành trọn ý Chúa\ndù giữa những gian nguy và thử thách\nNgười đã can đảm và trung thành bảo vệ Thánh Gia\ntận tụy yêu mến\nphục vụ Đức Mẹ và Chúa Giê-su\nSuốt cuộc đời\nNgười đã âm thẩm và -. tận lực lao động\nđể nuôi dưỡng và kiến tạo hạnh phúc cho gia đình thánh\nmà Chúa Cha đã trao phó cho Người. Hôm nay\nhợp cùng cộng đồng giáo phận\nchúng con dâng bản thân\ngia đình và giáo phận chúng con cho Thánh Giuse\nNhờ lời cầu bầu của Người\nxin Chúa thánh hóa các Đức Giám mục\ncác linh mục\ntu sĩ nam nữ\nđể mọi người được đầy lòng mến Chúa\ncan đảm sống đời trong sạch\nvâng lời và khó nghèo\nnhiệt thành và khôn ngoan làm chứng cho Chúa trong đời sống tông đồ\nXin tăng thêm số các linh mục và tông đổ\nđể đoàn chiên Chúa được thêm nhiều vị chủ chăn nhiệt thành\nkhôn ngoan và thánh thiện. Xin hướng dẫn và an ủi các bậc làm cha mẹ\nbiết tôn trọng luật Chúa và Giáo Hội\ntrung thành yêu thương nhau\nbiết cách giáo dục con cái\nvà thánh hóa đời sống lao động vất vả hằng ngày\nđể mọi tổ ấm gia đình trở thành trường dạy cầu nguyện và sông đức tin\nXin cho các thanh niên thiếu nữ được can đảm giữ tâm hồn trong trắng\ncác thiểu nhỉ được giáo dục trong đức tin và đức mến\ncác người già yếu bệnh tật được an ủi và giúp đỡ. Sau hết\nxin ban cho tất cả chúng con\nđược trung thành yêu mến Chúa và Giáo Hội\nđoản kết yêu thương nhau\nthực hành công bình và bác ái\nthánh hóa cuộc sống lao động hằng ngày\nvà đưa dân mọi người về với Chúa\nđể ngày sau được hợp cùng Đức Mẹ\nThánh cả Giuse và các thánh\nmà vui hưởng hạnh phúc và chúc tụng Chúa muôn đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_051_kinh_thanh_giu_se",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "성 요셉께 드리는 기도",
        "Kinh Thánh Giu-se",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_052_kinh_thanh_giu_se_bau_cu",
      "category": "Various",
      "titles": {
        "KR": "성 요셉께 전구를 청하는 기도",
        "VN": "Kinh Thánh Giu-se Bầu Cử",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy ông Thánh Giuse\nchúng con chạy đến cùng người trong cơn gian nan chúng con mắc phải\nchúng con đã kêu van cùng Rất Thánh Đức Bà là đấng đã làm bạn cùng Người\nphù hộ gìn giữ chúng con\nthì chúng con cũng lấy lòng trông cậy cho vững vàng\nmà xin ông Thánh Giuse bầu cử cho. chúng con như vậy, Chúng con xin vì nhân đức kinh mến mà Người lam bạn cùng Rất Thánh đỏng trinh là Xie Chúa Troi\nvà là Đấng chäng mắc phải tội tổ tông truyền\ncùng vì lòng thương\nngười đã ăm lấy Đức Chúa Giê-su\nthì chúng con xin ông -. Thánh Giuse ghé mặt lại mà thương đến Hội Thánh là phẩn sản nghiệp Đức Chúa Giê-su đã lấy Máu Thánh mình mà chuộc\nlại xin Người dùng sức mạnh thiêng liêng\nvà quyền thế Người mà giúp đỡ những sự chúng con còn thiếu thốn\nlạy Đấng đã, coi sóc Đức Chúa Giê-su cùng Đức Bà cho cẩn thận\nthì chúng con xin Người bênh vực con cái Đức Chúa Giê-su đã chọn\nLạy cha rất thương yêu\nchúng con xin Người cất mọi sự dối trá cùng mọi tội lỗi\ncho chúng con khỏi mắc phải những sự ấy\nLạy Đấng rất, mạnh đang ở trên trời hãy gìn giữ chúng con\nxin Người rủ lòng thương mà che chở chúng con\nđang khi chiến trận cùng kẻ thù tối tăm là các ma quỉ\nnhư xưa Người đã gìn giữ Đức Chúa Giê-su cho khỏi cơn hiểm nghèo thế nào\nthì rầy chúng con cũng xin Người cứu chữa lấy Hội Thánh cho khỏi các mưu kế giặc thù\nvà các sự gian nan khốn khó như vậy\ncùng xin Người hằng bầu cử cho chúng con được bắt chước Người\nvà trông cậy vì quyển thế Người\ncho được giữ đạo cho trọn\ncùng được chết lành\nvà được hưởng phúc vô cùng trên Thiên đàng. A-men: \\",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_052_kinh_thanh_giu_se_bau_cu",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "성 요셉께 전구를 청하는 기도",
        "Kinh Thánh Giu-se Bầu Cử",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_053_kinh_cac_thanh_tu_dao_viet_nam",
      "category": "national",
      "titles": {
        "KR": "베트남 순교자들을 위한 기도",
        "VN": "Kinh Các Thánh Tử Đạo Việt Nam",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy các thánh Tử đạo Việt Nam\nlà con thảo của Cha trên trời\nlà chứng nhân anh dũng của Đức Kitô\nlà thành phần trung kiên của Hội Thánh. Nay chúng con xin hợp với các ngài\nvà với Đức Trinh Nữ Ma-ri-a\nlà Nữ Vương các Thánh Tử đạo\n-' mà ca tụng Chúa muôn trùng cao cả\nXưa Chúa đã. ban cho các ngài được vững tin vào Lời Chúa\nvà đẩy sức mạnh của Thánh Thần\nnên các ngài đã kiên tâm chịu gian lao đau khổ\nquyết một lòng theo Đức Kitô trên con đường thập giá\nvà hy sinh đến giọt máu cuối cùng\nCác ngài đã chấp nhận nên hạt lúa gieo vào lòng đất\nđể Hội Thánh Việt Nam thu lượm được mùa lúa dồi dào\nNay Hội Thánh lại dâng các ngài lên Chúa\nnhư hoa quả đầu mùa để cảm tạ tri ân\nCác ngài đã yêu mến quê hương\nxin cầu cho đất nước được an vui hạnh phúc\nvà góp phần xây dựng một thế giới hòa bình\nCác ngài đã cam lòng chịu chết mà không oán hận\nxin cầu cho đồng bào mọi giới\nbiết yêu thương đùm bọc lẫn nhau\nCác ngài đã hy sinh tất cả vì đức tin\nxin cầu cho mọi Kitô hữu biết sống và chia sẻ niềm tin của mình. Lạy các Thánh Tử đạo Việt Nam\nlà những bậc tiền nhân đã hoàn thành sứ mạng\nxin chuyển cầu cho chúng con là con cháu\nđược noi gương các -. ngài\nbiết đem lòng bác ái mà dấn thân phục vụ\nđể một ngày kia trên thiên quốc\nchúng con được hợp tiếng với các ngài\nca ngợi tạ ơn Chúa muôn đời vinh hiển. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_053_kinh_cac_thanh_tu_dao_viet_nam",
        "national",
        "국가별 고유 기도문",
        "Kinh Nguyện Riêng Từng Nước",
        "Local Prayers",
        "各国の祈り",
        "Preces locales",
        "베트남 순교자들을 위한 기도",
        "Kinh Các Thánh Tử Đạo Việt Nam",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_054_kinh_cau_xin_cho_duoc_binh_an",
      "category": "Various",
      "titles": {
        "KR": "평화를 위한 기도",
        "VN": "Kinh Cầu Xin Cho Được Bình An",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Đức Chúa Trời\nxin ban bình an trong đời chúng con\nvì ngoài Chúa ra\nchẳng ai cứu giúp bênh vực chúng con\nChúng con xin nhờ quyển phép Chúa cho được bình an\nvà cho đền đài Chúa được dư của lành. Chúng con cầu xin cùng Đức Chúa Trời\nlà Đấng hay ban lòng muốn thanh sạch\ntrí luận ngay chính\ncùng sức làm việc công bằng\nxin dủ lòng thương ban cho chúng con được sự bình an\nthế gian chẳng thể ban được\nCó Chúa che chở\nchúng con sẽ hưởng thời tiết thuận hòa\nkhỏi lo sợ kẻ thù làm hại\nthì lòng chúng con mới dễ hướng vẻ đàng lành\nmà giữ cho nên các điều Chúa răn dạy\nBấy nhiêu sự chúng con xin\nnhờ Đức Giê-su Kitô là Chúa chúng con. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_054_kinh_cau_xin_cho_duoc_binh_an",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "평화를 위한 기도",
        "Kinh Cầu Xin Cho Được Bình An",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_055_kinh_cam_on_sau_ruoc_le",
      "category": "Various",
      "titles": {
        "KR": "영성체 후 감사 기도",
        "VN": "Kinh Cám Ơn Sau Rước Lễ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Con cám ơn Chúa Rất Thánh\nlà Cha có phép ì vô cùng hằng có vậy\nvì con là kẻ có tội chẳng có công gì cho đáng chịu ơn cực trọng Mình cùng Máu Thánh Con Đức Chúa Cha là Đức Chúa Giê-su\nCon xin Mình Thánh này chớ để cho con phải phạt\nlại được ích về phản linh hồn\ncùng xin gìn giữ kẻo phải chước ma quỉ cám dỗ được con\ncùng cất hết nết xấu\nvà cho con bỏ lòng mê sự thể gian\nLại xin cho được lòng kính mến Đức Chúa Trời cùng yêu người\nvà thêm sức chịu khó bằng lòng ở khiêm nhường chịu lụy\ncùng xuống mọi phúc đức\nXin Mình Thánh này giữ mình con\nkẻo phải chước những kẻ thù con thấy và xem chẳng thấy\ncùng sửa sang mọi tính trong ngoài con cho bình tĩnh\ncậy một Đức Chúa Trời cho vững\nCùng xin đem con đến tiệc cực trọng nói ra chẳng hết\nấy là thấy Đức Chúa Cha cùng Đức Chúa Con\nvà Đức Chúa Thánh Thần\ncho các thánh sáng thật no đẩy mừng rỡ chảng cùng vui vẻ trọn thanh nhản liên\nBấy nhiêu sự con xin\nvì Đức Chúa Giê-su Kiỏ là Chúa chúng con. Âmen.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_055_kinh_cam_on_sau_ruoc_le",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "영성체 후 감사 기도",
        "Kinh Cám Ơn Sau Rước Lễ",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_056_kinh_dang_minh_khi_thuc_day",
      "category": "Various",
      "titles": {
        "KR": "기상 시 봉헌 기도",
        "VN": "Kinh Dâng Mình Khi Thức Dậy",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Trái Tim Cực Thánh Đức Chúa Giê-su\ncon nhờ Trái Tim cực sạch Đức Bà Ma-ri-a\nmà dâng cho Trái Tim Chúa: mọi lời con cầu xin\nmọi việc con làm\nmọi sự khó con chịu trong ngày hôm nay\ncho được đền vì tội lỗi con\nmả cầu nguyện theo ý Chúa\nKhi dâng mình lễ tế trên bàn thờ\ncon lại dâng cho Trái Tim Chúa\ncó ý cầu nguyện cách Tiêng theo ý Đức Giáo Hoàng (đã chỉ trong tháng này. . . . . ).",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_056_kinh_dang_minh_khi_thuc_day",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "기상 시 봉헌 기도",
        "Kinh Dâng Mình Khi Thức Dậy",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_057_kinh_dang_minh_khi_ngu_dem",
      "category": "Various",
      "titles": {
        "KR": "잠자기 전 봉헌 기도",
        "VN": "Kinh Dâng Mình Khi Ngủ Đêm",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa\ncon xin phó dâng linh hồn và xác con ở trong tay Chúa; Chúa đã phù hộ con ban i ngày\nthì xin Chúa cũng gìn giữ con ban đêm\nkẻo sa phạm tội gì mất lòng Chúa\nhay là chết tươi ăn năn tội chẳng kịp\nChớ gì sống chết\ncon được giữ một lòng kính mến Chúa luôn. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_057_kinh_dang_minh_khi_ngu_dem",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "잠자기 전 봉헌 기도",
        "Kinh Dâng Mình Khi Ngủ Đêm",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_058_kinh_cau_cho_linh_muc",
      "category": "Various",
      "titles": {
        "KR": "사제들을 위한 기도",
        "VN": "Kinh Cầu Cho Linh Mục",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su Kitô\nlà Đấng cứu chuộc và là i Linh mục đời đời\nXưa trên đồi Gôngôta\nChúa đã chết để thiết lập một giao ước mới\nvả cho toàn thể tín hữu\nđược tham dự vào chức Linh mục vương giả của Chúa\nđể mỗi người chúng con\nbằng đời sống cầu nguyện và hy sinh\nbiết thi hành chức năng tư tế\nbằng đời sống bác ái và tông đồ\ntrở thành các sứ ngôn\nbằng đời sống phục vụ\ntham gia vào công việc cai quản theo tinh thần của Chúa. ] Hơn nữa\ntại phòng tiệc ly\nvà dưới chân Thánh giá\nChúa đã thiết lập chức Linh mục thừa tác\nđể kén chọn một số người\ntham gia cách đặc biệt vào chức tư tế của Chúa\nChúa đã khắc ghi trên họ một dấu ấn không gì xóa tẩy được\nNhờ đó\nhọ có khả năng dâng lên Chúa Cha\nhy lễ của Chúa cũng như của toàn dân\nmột hy lễ hòa giải\ntrong đó\nChúa liên lỷ hiến dâng chính mình và toàn thể nhân loại cho Chúa Cha\nChúa đặt để họ làm thừa tác viên của Bí tích Thánh Thể và ơn tha thứ\nđược tham gia vào sứ mạng Phúc Âm hóa của Chúa\nvà làm người tôi tớ phục vụ dân tộc mới\nmà Chúa đã cứu chuộc. Hôm nay\nchúng con cảm tạ Chúa\nvà tha thiết cầu xin Chúa ban cho các Linh mục\nđược trọn đời yêu mến Chúa thiết tha\nluôn luôn là phản ánh sự trong sạch\nthánh thiện và tình thương của Chúa\nchớ gì lòng trung thành với Hội Thánh của các ngài\nlà mẫu gương và củng cố niềm tin cho dân Chúa\nˆ Xin cho các ngài tận tụy săn sóc\nhy sinh\nvà khiêm tốn phục vụ đoàn chiên\nnhư người mục tử tốt lành và khôn ngoan\nhầu Nước Tình Thương của Chúa\nđược mở rộng nơi mọi tâm hồn. ] Lạy Đức Trinh Nữ Ma-ri-a\nMẹ Chúa Giê-su Linh mục và là Mẹ chúng con\nXin Mẹ bầu cử cùng Chúa cho tất cả chúng con\nnhất là cho các Linh mục\nđược mãi mãi trung thành với Chúa và Hội Thánh. sống xứng bậc mình\nnhiệt thành lo cho mọi người\nnhận biết yêu mến và phụng sự Chúa muôn đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_058_kinh_cau_cho_linh_muc",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "사제들을 위한 기도",
        "Kinh Cầu Cho Linh Mục",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_059_kinh_hon_nhan_gia_dinh",
      "category": "sacrament",
      "titles": {
        "KR": "혼인과 가정을 위한 기도",
        "VN": "Kinh Hôn Nhân Gia Đình",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Thánh Gia\nxưa thánh cả Giuse đã dẫn đưa Mẹ Ma-ri-a\nvà Chúa Giê-su trốn sang Ai Cập\nThánh. Gia đã chia sẻ những tân toan trong đời sống gian Xin cho gia đình chúng con\nbiết cảm thông và sống theo Lời Chua dạy trong Thánh Kinh\nbiết lắng nghe và kính trọng nhau\nlúc vui cũng như lúc buồn\nbiết nhẫn nhục và hòa giải\nkhi tính dinh và cách cư xử khác nhau\nbiết hiểu nghĩa và chung thủy\ntừ trong gia đình cho đến ngoài xã hội\nbiết. lấy gương lành mà dưỡng dục con cái\nGiê-su Ma-ri-a Giuse\nđời chúng con sóng gió ba đào\nxin Thần Linh Chúa ban ơn can đảm, kiên trì\nGia đình chúng con trẻ già xung khắc\nxin ban ơn quảng đại tha thứ\nđể chúng con an vui chấp nhận lẫn nhau\nGiáo Hội cẩn nhiều tín hữu nhiệt thành sốt mến\nxin cho chúng con biết phụng sự\ntin yêu\nđể cùng nhau xây dựng Nước Chúa muôn đời. A-men. . .",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_059_kinh_hon_nhan_gia_dinh",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "혼인과 가정을 위한 기도",
        "Kinh Hôn Nhân Gia Đình",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_060_kinh_cau_nguyen_cho_gia_dinh",
      "category": "Various",
      "titles": {
        "KR": "가정을 위한 기도",
        "VN": "Kinh Cầu Nguyện Cho Gia Đình",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "(Có thể đọc bhân A, phân B, hoặc cả hai) A. Lạy Chúa Giê-su\nchúng con xác tín rằng\nhôn nhân và gia đình\nlà công trình sáng tạo của Thiên Chúa\ncông trình của yêu thương\nkhôn ngoan và thánh thiện\nChúng con tin rằng\nChúa muốn và Chúa luôn ban ơn\nđể hôn nhân được hạnh phúc trong sự duy nhất và bên bi\ntrong việc truyền sinh và phát huy sự sống. Lạy Chúa\nChúa đã yêu thương và nâng hôn nhân lên hàng Bí tích\nXin Chúa giúp cho những đôi vợ chồng sống trung thành với nhau\ncho cha mẹ biết ý thức giáo dục con cái\ncho con cái biết vâng phục và yêu mến cha mẹ\nXin Chúa làm cho các thế hệ trẻ\ntìm được nơi gia đình sự nâng đỡ chắc chắn cho giá trị làm người của họ\nvà được trưởng thành trong chân lý và tình thương. hieu B. Lạy Thánh Gia Nagiarét\nlà gương mẫu của đời sống thánh thiện\ncông bình và yêu thương\nxin cho các gia đình chúng con trở nên nơi đào tạo nhân đức\ntrong hiển hòa, phục vụ và cầu nguyện\nXin cho chúng con xây dựng gia đình\nthành mối an ủi cho cuộc đời đầy thử thách\nXin cho chúng con biết làm cho mọi người trong gia đình\nđều được thăng tiến để được góp phần vào việc phát triển xã hội\nvà cộng tác trong việc xây dựng Giáo Hội. Xin ba Đấng luôn hiện diện trong gia đình chúng con\nkhi vui cũng như lúc buồn\nkhi làm việc cũng như lúc nghỉ ngơi\nkhi lo âu cũng như lúc hy vọng\nkhi sinh còn cũng như lúc có kẻ qua đời\nđể khi trải qua mọi thăng trầm của cuộc sống\nchúng con luôn luôn chúc tụng Chúa\ncho đến ngày được xum họp với ba Đấng trên Nước Trời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_060_kinh_cau_nguyen_cho_gia_dinh",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "가정을 위한 기도",
        "Kinh Cầu Nguyện Cho Gia Đình",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_061_kinh_dang_con",
      "category": "Various",
      "titles": {
        "KR": "봉헌 기도 어린이들을 위한 기도",
        "VN": "Kinh Dâng Con",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Đức Trinh Nữ Ma-ri-a\nchúng con khẩn cầu Mẹ là Mẹ chúng con\nxưa kia Mẹ đã hiến dâng Con Mẹ trong đền Thánh\nthì hôm nay đây\nchúng con cũng đem dâng lên Thiên Chúa Ba Ngôi\nqua bàn tay dịu hiển của Mẹ\nnhững người con mà Chúa nhân ái đã ban cho chúng con. Vậy giờ đây\nchúng con xin hiến dâng các con của chúng con\nchúng con xin trao phó con cái chúng con cho Chúa và Mẹ\nxin Chúa và Mẹ săn sóc\nâu yếm\nvà giữ gìn\nXin bảo vệ thân xác các em mạnh khỏe\nlinh hồn các em trong sạch\nvà nếu sau này các em sa ngã lạc đường\nxin Chúa và Mẹ thương theo đuổi\nvà dẫn dắt các em về\nđể các em lại được ơn tha thứ\nvà sống trong ơn nghĩa Chúa. Và giờ đây\nchúng con cũng nài xin Chúa và Mẹ\ngiúp chúng con là những người làm cha mẹ\nđược chu toàn nhiệm vụ đối với con cái\nBiết dẫn đắt chúng trên đường đức tin\nbiết dạy chúng sống theo luật Chúa\nđể gia đình chúng con được nên giống gia đình Nagiarét xựa\nmong sau nảy được cùng nhau xum họp trong nhà Chúa\nvới tình yêu thương của Chúa Con\nvà niềm hoan lạc của Chúa Thánh Thần. A-men",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_061_kinh_dang_con",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "봉헌 기도 어린이들을 위한 기도",
        "Kinh Dâng Con",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_062_kinh_lap_lai_loi_hon_uoc",
      "category": "sacrament",
      "titles": {
        "KR": "혼인 서약 갱신 기도",
        "VN": "Kinh Lập Lại Lời Hôn Ước",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Thiên Chúa Toàn Năng\nchúng con xin cảm tạ Chúa\nvì muôn hồng ân Chúa đã ban cho chúng con\nnhất là ơn được nên nghĩa vợ chồng trong Hội Thánh Chúa\nmà hôm nay chúng con mừng kỷ niệm giáp năm (25, 50 năm). Lạy Chúa\ntrong niểm vui hồng phúc này\nchúng con xin lặp lại lời hôn ước\nmà chính chúng con đã ký kết cùng nhau trước tôn nhan Chúa\nXin Chúa ban cho chúng con luôn biết trung thành yêu mến Chúa và Hội Thánh\nbiết yêu thương nhau đến trọn đời\nbiết can đảm và tin tưởng vào ơn Chúa trước mọi khó khăn\nbiết đón nhận yêu thương và giáo dục con cái Chúa trao phó cho chúng con. Sau hết\nchúng con xin Mẹ Ma-ri-a và Thánh cả Giuse là mẫu gương các gia đình\ncầu bầu cho gia đình chúng con trước Tòa Chúa\nđể sau này\ngia đình chúng con được đoàn tụ trong nhà Chúa Cha\nChúa Con\ncùng với Chúa Thánh Thần muôn đời. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_062_kinh_lap_lai_loi_hon_uoc",
        "sacrament",
        "성사·예식",
        "Bí tích và nghi thức",
        "Sacraments and Rites",
        "秘跡・式次第",
        "Sacramenta et ritus",
        "혼인 서약 갱신 기도",
        "Kinh Lập Lại Lời Hôn Ước",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_063_kinh_cua_nguoi_tre",
      "category": "Various",
      "titles": {
        "KR": "청소년들을 위한 기도",
        "VN": "Kinh Của Người Trẻ",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su Kitô\nChúa đã sống tuổi trẻ như chúng con\nvà đã gọi ngay nhiều người trẻ đến với Chúa khi Chúa vào đời\nChúa cùng họ rảo hết khắp xóm làng\ntrèo lên những ngọn núi cao\nmg0Đc EM hà nhiều lần gặp sóng gió trên biển hổ\nChúa dạy họ cầu nguyện, để đón nhận mặc khải của Chúa Cha\nvà sai họ đem bình an đến cho mọi nhà\nRồi tuôn đổ Thánh Thần xuống trên họ\nChúa đã sai nhóm trẻ đi xây dựng Giáo Hội và thế giới mới, trên nền tảng Tin Mừng và Tình Yêu của Chúa\nXin cho người trẻ chúng con hôm nay\nbiết đón nhận ánh mắt yêu thương của Chúa\nbảo nhau đến với Chúa\nẳ và trở thành người môn đệ Chúa yêu. Xin thuật lại cho chúng con các dụ ngôn vể người trẻ\nđể chúng con không bỏ nhà, khiến cha già phải nhớ thương\nNhưng chúng con phải xử dụng tài năng với tinh thản thức tỉnh và khôn ngoan\nXin đào tạo chúng con như nhóm trẻ ban đầu của Chúa\nđể các đôi bạn trẻ luôn hân hoan vì rượu mới Chúa ban\nVà để nhiều người trẻ khác tiếp tục sứ mạng cứu thế\nvới sức mạnh của Chúa Thánh Thần\nhầu nhiều người được sống, và được sống dồi dào. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_063_kinh_cua_nguoi_tre",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "청소년들을 위한 기도",
        "Kinh Của Người Trẻ",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_064_kinh_cua_giao_ly_vien",
      "category": "Various",
      "titles": {
        "KR": "교리교사들을 위한 기도",
        "VN": "Kinh Của Giáo Lý Viên",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Lạy Chúa Giê-su là Con Một Chúa Cha\nChúa là Thầy duy nhất giảng dạy cho mọi người\nvẻ Chúa Cha và tình yêu thương cửu độ của Người\nChúa đã thương ban cho chúng con được thông phần sứ vụ giảng dạy của Chúa. Xin ban cho chúng con Thánh Thần tình yêu và sự thật\nđể chúng con luôn kết hợp với Chúa và được Chúa giảng dạy. Xin cho chúng con biết quảng đại thực hành điều chúng con giảng dạy\nvà trung thành giảng dạy giáo lý của Chúa. Xin cho chúng con ánh sáng và tình yêu\nđể chúng con trình bày Lời Chúa thật sáng sủa và sống động. Xin cho chúng con biết quan tâm đến từng học viên Chúa trao phó\nđể chúng con luôn luôn yêu mến\ncẩu nguyện và dẫn đưa các em đến cùng Chúa. Lạy Mẹ Ma-ri-a là Giáo lý viên gương mẫu và là Mẹ chúng con\nxin bầu cử cho chúng con những đức tính và những ơn cần thiết\nđể chu toàn sứ mệnh giảng dạy giáo lý Chúa đã ủy thác cho chúng con. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_064_kinh_cua_giao_ly_vien",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "교리교사들을 위한 기도",
        "Kinh Của Giáo Lý Viên",
        "Các Kinh Cầu"
      ]
    },
    {
      "id": "vn_ocr_065_ngam_bay_su_dau_don_duc_ba",
      "category": "Various",
      "titles": {
        "KR": "복되신 동정 마리아의 일곱 가지 슬픔 묵상",
        "VN": "Ngắm Bảy Sự Đau Đớn Đức Bà",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "texts": {
        "KR": "",
        "VN": "Ngắm bảy sự đau đớn Đức Bà, bảy kinh Kính Mừng, chia ra làm bảy phần. Thứ nhất thì ngắm Khi ông thánh Simêon ẵm kính Đức Chúa Giê-su thì nói cùng Đức Mẹ rằng: “Con Đức Mẹ ngày sau nên như bia bắn, cùng như dao sắc thâu qua lòng Đức Mẹ”. Đức Mẹ nghe lời làm vậy thì trọn đời những nhớ liên, và lo buồn đau đớn như phải dao sắc thâu qua lòng vậy. Khi ngắm sự ấy, thì nguyện một kinh Kính Mừng. Xin Đức Mẹ cầu cho chúng con được nhớ những sự thương khó Đức Chúa Giê-su như Đức Mẹ thuở xưa. A-men. Thứ hai thì ngắm Khi Thánh Thiên Thần báo tin cho Đức Mẹ rằng: Vua Hêrôđê đi tìm Đức Chúa Giê-su mà giết, thì Đức Mẹ đem con sang nước Ixitô, mà người thương con còn non nớt mới sinh, và lo buồn đau đớn như phải dao sắc thâu qua lòng vậy. Khi ngắm sự ấy, thì nguyện một binh Kính Mừng. Xin Đức Mẹ cầu cho chúng con chớ làm sự gì trái nghịch cùng mất lòng Đức Chúa Giê-su nữa. An. Thứ ba thì ngắm Khi Đức Mẹ đem con đi lễ đến thờ thành Giêrusalem, mà khi về lạc mất con, thì Đức Mẹ những thức thâu đêm than thở khóc lóc, và lo buồn đau đớn như phải dao sắc thâu qua lòng vậy. Khi ngắm sự ấy, thì nguyện một kinh Kính Mừng. Xin Đức Mẹ cầu cho chúng con chớ còn đi \\. . . đàng tội lỗi, mà bỏ mất nghĩa cùng Đức Chúa Giê-su nữa. A-men. Thứ tư thì ngắm Khi Đức Mẹ theo con khi đi chịu chết, thì thấy con vác Thánh giá lên núi Canvariô, nhiều lần ngã xuống đất, mà quân dữ đạp dậy giục đi cho chóng, thì hai con mắt Đức Mẹ nên như hai suối nước chảy xuống, đau đớn trong lòng như dao sắc thâu qua lòng vậy. NN y NEEENGSG Khi ngắm sự ấy, thì nguyện một kinh Kính Mừng. Xin Đức Mẹ cầu cho chúng con được vác Thánh giá theo Đức Chúa Giê-su, ấy là chớ theo ý mình, một theo ý Đức Chúa Giê-su liên. A-men. Thứ năm thì ngắm Khi Đức Mẹ thấy con treo trên cây Thánh giá phán ra bảy lời, như trối của trọng để cho Mẹ, đoạn thì gục đầu xuống giã Đức Mẹ mà sinh thì, thì lòng Đức Mẹ đau đớn như dao sắc thâu qua lòng vậy. Khi ngắm sự ấy, thì nguyện một kinh Kính Mừng. Xin Đức Mẹ cầu cho chúng con được nhớ bảy lời trọng ấy, như của châu báu Cha trối cho con, mà giữ trong lòng chúng con cho đến trọn đời. A-men. Thứ sáu thì ngắm Khi ông thánh Giuse cùng ông thánh Nicôđêmô tháo đanh mà đem xác Đức Chúa Giê-su xuống mà phó ở tay Đức Mẹ, khi ấy Đức Mẹ giơ hai tay lên toan đỡ lấy xác con, đến khi đã được thì ăm vào lòng, đoạn áp mặt xuống trên đầu con. Chẳng quản những gai nhọn ở đầu con thâu vào mặt Mẹ, mà mặt Mẹ thì chan chứa-những máu con dính vào, mặt Con thì đầm đìa những nước mắt Mẹ chảy xuống. Ai suy cho được sự trong lòng Đức Mẹ bấy giờ, thương xót khóc lóc thảm thiết, đau đớn khốn cực là thể nào đoạn lấy khăn trắng mà liệm xác con, thì lòng Đức Mẹ đau đớn như dao sắc thâu qua lòng đứt ruột ra vậy. Khi ngắm sự ấy thì nguyện một kinh Kính Mừng. Xin Đức Mẹ cầu cho chúng con được ăn năn lo buôn ghét tội, uì làm cho Đức Chúa Giê-su chịu chết làm Đậy. A#men. Thứ bảy thì ngắm Khi tắm xác Đức Chúa Giê-su mà táng trong hang đá, đoạn lấy hòn đá lớn mà che ngoài cửa hang, thì lòng Đức Mẹ rất đau đớn như đã chết mà chôn một mổ cùng Con vậy, vì khi trước còn xem thấy xác Con, mà còn đau đớn khốn cực dường ấy, Song le bây giờ chẳng còn xem thấy xác con nữa, thì biết đau đớn khốn cực là thể nào? như dao sắc thâu qua lòng vậy. Khi ngắm sự ấy, thì nguyện một kinh Kính \"Mừng. Xin Đức Mẹ câu cho chúng con được ăn năm lo buôn mọi lội, uì làm cho mất nghĩa cùng Đức Chúa Giê-su, cùng xin in những sự thương khó Đức Chúa Giê-su bào lòng chúng con cho đến trọn đời. A-men. * Chúng con cám ơn Đức Chúa Giê-su, xưa đã chịu nạn chịu chết vì chúng con, thì đã hợp như lời ông thánh Simêon nói mà Đức Mẹ nhớ liên. Vậy chúng con dốc lòng kính nhớ bảy sự đau đớn Đức Mẹ cho liên, và xin Đức Mẹ hằng cứu giúp chúng con cho khỏi sa ngã phạm tội mất lòng Đức Chúa Giê-su cùng Đức Mẹ, nhất là khi mong sinh thì, cho được chịu các phép Bí tích mà khỏi chết tươi, cùng những sự khốn khó hiểm nghèo vể phần xác, và được trông ơn Đức Mẹ hằng cứu giúp chúng con cho khỏi. Vậy chúng con chỉ một lòng cậy Rất Thánh Đức mẹ là quan thầy, là Chúa bầu, là Sao Mai dẫn đàng cho chúng con đang còn vượt biển thế gian này cho khỏi lạc, cho ngày sau được vào Nước Thiên đàng, chầu chực Đức Chúa Giê-su cùng Rất Thánh Đức Mẹ đời đời chẳng cùng. A-men.",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "sourceCategory": {
        "KR": "",
        "VN": "Các Kinh Cầu",
        "EN": "",
        "JP": "",
        "LA": ""
      },
      "tags": [
        "vn_ocr_065_ngam_bay_su_dau_don_duc_ba",
        "Various",
        "여러가지 기도",
        "Các Kinh Nguyện Khá",
        "Various Prayers",
        "種々の祈り",
        "Preces Variae",
        "복되신 동정 마리아의 일곱 가지 슬픔 묵상",
        "Ngắm Bảy Sự Đau Đớn Đức Bà",
        "Các Kinh Cầu"
      ]
    }
  ];

  global.prayerCategoryLabels = prayerCategoryLabels;
  global.prayerData = prayers;
})(globalThis);
