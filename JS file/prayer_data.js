(function(global) {
  const prayerCategoryLabels = {
    common: {
      KR: "공통기도문",
      VN: "Kinh nguyện chung",
      EN: "Common Prayers",
      JP: "共通の祈り",
      LA: "Preces communes"
    },
    rosary: {
      KR: "묵주기도",
      VN: "Kinh Mân Côi",
      EN: "Rosary",
      JP: "ロザリオ",
      LA: "Rosarium"
    },
    stations_of_cross: {
      KR: "십자가의 길",
      VN: "Đàng Thánh Giá",
      EN: "Stations of the Cross",
      JP: "十字架の道行き",
      LA: "Via Crucis"
    },
    litany: {
      KR: "호칭기도",
      VN: "Kinh cầu",
      EN: "Litanies",
      JP: "連祷",
      LA: "Litaniae"
    },
    sacrament: {
      KR: "성사·예식",
      VN: "Bí tích và nghi thức",
      EN: "Sacraments and Rites",
      JP: "秘跡・式次第",
      LA: "Sacramenta et ritus"
    },
    Various: {
      KR: "여러가지 기도",
      VN: "Các Kinh Nguyện Khá",
      EN: "Various Prayers",
      JP: "種々の祈り",
      LA: "Preces Variae"
    },
    national: {
      KR: "국가별 고유 기도문",
      VN: "Kinh Nguyện Riêng Từng Nước",
      EN: "Local Prayers",
      JP: "各国の祈り",
      LA: "Preces locales"
    }
  };
  const prayers = [
    {
      id: "001.sign_of_cross",
      category: "common",
      titles: {
        KR: "성호경",
        VN: "Dấu Thánh Giá",
        EN: "Sign of the Cross",
        JP: "十字架のしるし",
        LA: "Signum Crucis"
      },
      texts: {
        KR: "<rubric>십자성호를 그으며</rubric>성부와 성자와 성령의 이름으로. 아멘.",
        VN: "<rubric>Vừa làm dấu Thánh Giá</rubric>Nhân danh Cha và Con và Thánh Thần. Amen.",
        EN: "<rubric>Making the Sign of the Cross</rubric>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
        JP: "<rubric>十字架のしるしをしながら</rubric>父と子と聖霊のみ名によって。アーメン。",
        LA: "<rubric>Signans se signo crucis</rubric>In nomine Patris, et Filii, et Spiritus Sancti. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      id: "002.lords_prayer",
      category: "common",
      titles: {
        KR: "주님의 기도",
        VN: "Kinh Lạy Cha",
        EN: "Our Father",
        JP: "主の祈り",
        LA: "Pater Noster"
      },
      texts: {
        KR: "하늘에 계신 우리 아버지,\n아버지의 이름이 거룩히 빛나시며\n아버지의 나라가 오시며\n아버지의 뜻이 하늘에서와 같이\n땅에서도 이루어지소서!\n오늘 저희에게 일용할 양식을 주시고\n저희에게 잘못한 이를 저희가 용서하오니\n저희 죄를 용서하시고\n저희를 유혹에 빠지지 않게 하시고\n악에서 구하소서.\n아멘.",
        VN: "Lạy Cha chúng con ở trên trời,\nchúng con nguyện danh Cha cả sáng,\nnước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời.\nXin Cha cho chúng con hôm nay lương thực hằng ngày,\nvà tha nợ chúng con,\nnhư chúng con cũng tha kẻ có nợ chúng con,\nxin chớ để chúng con sa chước cám dỗ,\nnhưng cứu chúng con cho khỏi sự dữ.\nAmen.",
        EN: "Our Father, who art in heaven,\nhallowed be thy name;\nthy kingdom come,\nthy will be done\non earth as it is in heaven.\nGive us this day our daily bread,\nand forgive us our trespasses,\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil.\nAmen.",
        JP: "天におられるわたしたちの父よ、\nみ名が聖とされますように。\nみ国が来ますように。\nみこころが天に行われるとおり地にも行われますように。\nわたしたちの日ごとの糧を今日も お与えください。\nわたしたちの罪をおゆるしください。わたしたちも人をゆるします。\nわたしたちを誘惑におちいらせず、\n悪からお救いください。\nアーメン",
        LA: "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum.\nFiat voluntas tua, sicut in caelo et in terra.\nPanem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris.\nEt ne nos inducas in tentationem, sed libera nos a malo.\nAmen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
        "002.lords_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "주님의 기도",
        "Kinh L?y Cha",
        "Our Father",
        "主の祈り",
        "Pater Noster",
        "주요 기도",
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      id: "003.hail_mary",
      category: "common",
      titles: {
        KR: "성모송",
        VN: "Kinh Kính Mừng",
        EN: "Hail Mary",
        JP: "アヴェ・マリアの祈り",
        LA: "Ave Maria"
      },
      texts: {
        KR: "은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 계시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.",
        VN: "Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà,\nBà có phúc lạ hơn mọi người nữ,\nvà Giêsu con lòng Bà gồm phúc lạ.\nThánh Maria, Đức Mẹ Chúa Trời,\ncầu cho chúng con là kẻ có tội,\nkhi nay và trong giờ lâm tử.\nAmen.",
        EN: "Hail, Mary, full of grace,\nthe Lord is with thee.\nBlessed art thou among women\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death.\nAmen.",
        JP: "アヴェ、マリア、恵みに満ちた方、\n主はあなたとともにおられます。\nあなたは女のうちで祝福され、\nご胎内の御子イエスも祝福されています。\n神の母聖マリア、\nわたしたち罪びとのために、\n今も、死を迎える時も、お祈りください。\nアーメン。",
        LA: "Ave Maria, gratia plena, Dominus tecum.\nBenedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.\nSancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae.\nAmen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      id: "004.glory_be",
      category: "common",
      titles: {
        KR: "영광송",
        VN: "Kinh Sáng Danh",
        EN: "Glory Be",
        JP: "栄唱",
        LA: "Gloria Patri"
      },
      texts: {
        KR: "<rubric>밑줄 부분에서 고개를 숙이며</rubric><U>영광이 성부와 성자와 성령께</U>\n처음과 같이\n이제와 항상 영원히.\n아멘.",
        VN: "<rubric>Cúi đầu khi đọc phần gạch chân</rubric><U>Sáng danh Đức Chúa Cha và Đức Chúa Con và Đức Chúa Thánh Thần.</U>\nNhư đã có trước vô cùng\nvà bây giờ và hằng có\nvà đời đời chẳng cùng.\nAmen.",
        EN: "<rubric>Bowing the head at the underlined part</rubric>\n<U>Glory be to the Father, and to the Son, and to the Holy Spirit,</u>\nas it was in the beginning, is now,\nand ever shall be, world without end.\nAmen.",
        JP: "<rubric>下線部で頭を下げながら</rubric><U>栄光は父と子と聖霊に。</U>\n初めのように、今もいつも世々に。\nアーメン。",
        LA: "<rubric>Caput inclinans ad verba sublineata</rubric><U>Gloria Patri, et Filio, et Spiritui Sancto.</U>\nSicut erat in principio, et nunc, et semper,\net in saecula saeculorum.\nAmen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      id: "005.apostles_creed",
      category: "common",
      titles: {
        KR: "사도 신경",
        VN: "Kinh Tin Kính Các Thánh Tông Đồ",
        EN: "Apostles' Creed",
        JP: "使徒信条",
        LA: "Symbolum Apostolorum"
      },
      texts: {
        KR: "전능하신 천주 성부\n천지의 창조주를 저는 믿나이다.\n그 외아들 우리 주 예수 그리스도님\n<rubric>밑줄 부분에서 모두 깊은 절을 한다.</rubric><U>성령으로 인하여 동정 마리아께 잉태되어 나시고</U>\n본시오 빌라도 통치 아래서 고난을 받으시고\n십자가에 못 박혀 돌아가시고 묻히셨으며\n저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고\n하늘에 올라 전능하신 천주 성부 오른편에 앉으시며\n그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다.\n성령을 믿으며\n거룩하고 보편된 교회와 모든 성인의 통공을 믿으며\n죄의 용서와 육신의 부활을 믿으며\n영원한 삶을 믿나이다.\n아멘.",
        VN: "Tôi tin kính Đức Chúa Trời\nlà Cha phép tắc vô cùng dựng nên trời đất.\nTôi tin kính Đức Chúa Giêsu Kitô là Con Một Đức Chúa Cha cùng là Chúa chúng tôi;\n<rubric>Mọi người cúi mình sâu khi đọc phần gạch chân</rubric><U>bởi phép Đức Chúa Thánh Thần mà Người xuống thai, sinh bởi Bà Maria Đồng Trinh</u>;\nchịu nạn đời quan Phongxiô Philatô,\nchịu đóng đinh trên cây Thánh Giá,\nchết và táng xác;\nxuống ngục tổ tông,\nngày thứ ba bởi trong kẻ chết mà sống lại;\nlên trời, ngự bên hữu Đức Chúa Cha phép tắc vô cùng;\nngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết.\nTôi tin kính Đức Chúa Thánh Thần.\nTôi tin có Hội Thánh hằng có ở khắp thế này,\ncác thánh thông công.\nTôi tin phép tha tội.\nTôi tin xác loài người ngày sau sống lại.\nTôi tin hằng sống vậy.\nAmen.",
        EN: "I believe in God,\nthe Father almighty,\nCreator of heaven and earth,\nand in Jesus Christ, his only Son, our Lord,\n<rubric>All bow deeply at the underlined part</rubric><u>who was conceived by the Holy Spirit,\nborn of the Virgin Mary,</u>\nsuffered under Pontius Pilate,\nwas crucified, died and was buried;\nhe descended into hell;\non the third day he rose again from the dead;\nhe ascended into heaven,\nand is seated at the right hand of God the Father almighty;\nfrom there he will come to judge the living and the dead.\nI believe in the Holy Spirit,\nthe holy catholic Church,\nthe communion of saints,\nthe forgiveness of sins,\nthe resurrection of the body,\nand life everlasting.\nAmen.",
        JP: "天地の創造主、\n全能の父である神を信じます。\n父のひとり子、わたしたちの主\nイエス・キリストを信じます。\n<rubric>下線部で皆で深く礼をする</rubric><u>主は聖霊によってやどり、\nおとめマリアから生まれ、</u>\nポンティオ・ピラトのもとで苦しみを受け、\n十字架につけられて死に、葬られ、\n陰府（よみ）に下り、\n三日目に死者のうちから復活し、\n天に昇って、\n全能の父である神の右の座に着き、\n生者（せいしゃ）と死者を裁くために来られます。\n聖霊を信じ、\n聖なる普遍の教会、\n聖徒の交わり、\n罪のゆるし、\nからだの復活、\n永遠のいのちを信じます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### ニケア・コンスタンチノープル信条\nこの「ニケア・コンスタンチノープル信条」は、第1回コンスタンチノーブル公会議（381年）後に作られた。\nわたしは信じます。唯一の神、\n全能の父、\n天と地、\n見えるもの、見えないもの、すべてのものの造り主を。\nわたしは信じます。唯一の主イエス・キリストを。\n主は神のひとり子、\nすべてに先立って父より生まれ、\n神よりの神、光よりの光、まことの神よりのまことの神、\n造られることなく生まれ、父と一体。\nすべては主によって造られました。\n主は、わたしたち人類のため、\nわたしたちの救いのために天からくだり、\n聖霊によって、おとめマリアよりからだを受け、\n人となられました。\nポンティオ・ピラトのもとで、わたしたちのために十字架につけられ、\n苦しみを受け、葬られ、\n聖書にあるとおり三日目に復活し、\n天に昇り、父の右の座に着いておられます。\n主は、生者（せいしゃ）と死者を裁くために栄光のうちに再び来られます。\nその国は終わることがありません。\nわたしは信じます。主であり、いのちの与え主である聖霊を。\n聖霊は、父と子から出て、\n父と子とともに礼拝され、栄光を受け、\nまた預言者をとおして語られました。\nわたしは、聖なる、普遍の、使徒的、唯一の教会を信じます。\n罪のゆるしをもたらす唯一の洗礼を認め、\n死者の復活と\n来世のいのちを待ち望みます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### 洗礼式の信仰宣言\n天地の創造主、\n全能の、神である父を信じます。\n父のひとり子、おとめマリアから生まれ、\n苦しみを受けて葬られ、\n死者のうちから復活して、\n父の右におられる主イエス・キリストを信じます。\n聖霊を信じ、聖なる普遍の教会、\n聖徒の交わり、罪のゆるし、\nからだの復活、永遠のいのちを信じます。",
        LA: "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae.\nEt in Iesum Christum, Filium eius unicum, Dominum nostrum,\n<rubric>Omnes profunde se inclinant ad verba sublineata</rubric><u>qui conceptus est de Spiritu Sancto, natus ex Maria Virgine</u>,\npassus sub Pontio Pilato, crucifixus, mortuus,\net sepultus, descendit ad infernos, tertia die resurrexit a mortuis,\nascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.\nCredo in Spiritum Sanctum,\nsanctam Ecclesiam catholicam, sanctorum communionem, \nremissionem peccatorum, carnis resurrectionem,\nvitam aeternam.\nAmen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Symbolum fidei"
      },
      tags: [
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
        "Basic Prayers",
        "日々の祈り",
        "Symbolum fidei"
      ]
    },
    {
      id: "006.nicene_creed",
      category: "common",
      titles: {
        KR: "니케아-콘스탄티노폴리스 신경",
        VN: "",
        EN: "Nicene Creed",
        JP: "ニケア・コンスタンチノープル信条",
        LA: "Symbolum Nicaenum"
      },
      texts: {
        KR: "한 분이신 하느님을\n저는 믿나이다.\n전능하신 아버지,\n하늘과 땅과 유형무형한 만물의 창조주를 믿나이다.\n또한 한 분이신 주 예수 그리스도, 하느님의 외아들\n영원으로부터 성부에게서 나신 분을 믿나이다.\n하느님에게서 나신 하느님, 빛에서 나신 빛\n참 하느님에게서 나신 참 하느님으로서,\n창조되지 않고 나시어\n성부와 한 본체로서 만물을 창조하셨음을 믿나이다.\n성자께서는 저희 인간을 위하여, 저희 구원을 위하여\n하늘에서 내려오셨음을 믿나이다.\n(밑줄 부분에서 모두 고개를 깊이 숙인다.)\n또한 성령으로 인하여 동정 마리아에게서 육신을 취하시어 사람이 되셨음을 믿나이다.\n본시오 빌라도 통치 아래서 저희를 위하여\n십자가에 못박혀 수난하고 묻히셨으며\n성서 말씀대로 사흗날에 부활하시어\n하늘에 올라 성부 오른편에 앉아계심을 믿나이다.\n그분께서는 산 이와 죽은 이를 심판하러\n영광 속에 다시 오시리니\n그분의 나라는 끝이 없으리이다.\n또한 주님이시며 생명을 주시는 성령을 믿나이다.\n성령께서는 성부와 성자에게서 발하시고\n성부와 성자와 더불어 영광과 흠숭을 받으시며\n예언자들을 통하여 말씀하셨나이다.\n하나이고 거룩하고 보편되며\n사도로부터 이어오는 교회를 믿나이다.\n죄를 씻는 유일한 세례를 믿으며\n죽은 이들의 부활과 내세의 삶을 기다리나이다.\n아멘.",
        VN: "",
        EN: "I believe in one God,\nthe Father almighty,\nmaker of heaven and earth,\nof all things visible and invisible.\nI believe in one Lord Jesus Christ,\nthe Only Begotten Son of God,\nborn of the Father before all ages.\nGod from God, Light from Light,\ntrue God from true God,\nbegotten, not made, consubstantial with the Father;\nthrough him all things were made.\nFor us men and for our salvation\nhe came down from heaven,\nand by the Holy Spirit was incarnate of the Virgin Mary,\nand became man.\nFor our sake he was crucified under Pontius Pilate,\nhe suffered death and was buried,\nand rose again on the third day\nin accordance with the Scriptures.\nHe ascended into heaven\nand is seated at the right hand of the Father.\nHe will come again in glory\nto judge the living and the dead\nand his kingdom will have no end.\nI believe in the Holy Spirit, the Lord, the giver of life,\nwho proceeds from the Father and the Son,\nwho with the Father and the Son is adored and glorified,\nwho has spoken through the prophets.\nI believe in one, holy, catholic and apostolic Church.\nI confess one Baptism for the forgiveness of sins\nand I look forward to the resurrection of the dead\nand the life of the world to come.\nAmen.",
        JP: "わたしは信じます。唯一の神、\n全能の父、\n天と地、\n見えるもの、見えないもの、すべてのものの造り主を。\nわたしは信じます。唯一の主イエス・キリストを。\n主は神のひとり子、\nすべてに先立って父より生まれ、\n神よりの神、光よりの光、まことの神よりのまことの神、\n造られることなく生まれ、父と一体。\nすべては主によって造られました。\n主は、わたしたち人類のため、\nわたしたちの救いのために天からくだり、\n聖霊によって、おとめマリアよりからだを受け、\n人となられました。\nポンティオ・ピラトのもとで、わたしたちのために十字架につけられ、\n苦しみを受け、葬られ、\n聖書にあるとおり三日目に復活し、\n天に昇り、父の右の座に着いておられます。\n主は、生者（せいしゃ）と死者を裁くために栄光のうちに再び来られます。\nその国は終わることがありません。\nわたしは信じます。主であり、いのちの与え主である聖霊を。\n聖霊は、父と子から出て、\n父と子とともに礼拝され、栄光を受け、\nまた預言者をとおして語られました。\nわたしは、聖なる、普遍の、使徒的、唯一の教会を信じます。\n罪のゆるしをもたらす唯一の洗礼を認め、\n死者の復活と\n来世のいのちを待ち望みます。アーメン。\n（2004年2月18日 日本カトリック司教協議会認可）\n### 洗礼式の信仰宣言\n天地の創造主、\n全能の、神である父を信じます。\n父のひとり子、おとめマリアから生まれ、\n苦しみを受けて葬られ、\n死者のうちから復活して、\n父の右におられる主イエス・キリストを信じます。\n聖霊を信じ、聖なる普遍の教会、\n聖徒の交わり、罪のゆるし、\nからだの復活、永遠のいのちを信じます。",
        LA: "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium.\nEt in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula. Deum de Deo, Lumen de Lumine, Deum verum de Deo vero, genitum non factum, consubstantialem Patri; per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis. [kneel] Et incarnatus est de Spiritu Sancto ex Maria Virgine, et homo factus est. [stand] Crucifixus etiam pro nobis sub Pontio Pilato, passus et sepultus est, et resurrexit tertia die, secundum Scripturas, et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria, iudicare vivos et mortuos, cuius regni non erit finis.\nEt in Spiritum Sanctum, Dominum et vivificantem, qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur: qui locutus est per prophetas.\nEt unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et expecto resurrectionem mortuorum, et vitam venturi saeculi. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Symbolum fidei"
      },
      tags: [
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
        "Symbolum fidei"
      ]
    },
    {
      id: "008.ten_commandments",
      category: "common",
      titles: {
        KR: "십계명",
        VN: "10 Ðiều Răn",
        EN: "Ten Commandments",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "일. 한 분이신 하느님을 흠숭하여라.\n이. 하느님의 이름을 함부로 부르지 마라.\n삼. 주일을 거룩히 지내라.\n사. 부모에게 효도하여라.\n오. 사람을 죽이지 마라.\n육. 간음하지 마라.\n칠. 도둑질을 하지 마라.\n팔. 거짓 증언을 하지 마라.\n구. 남의 아내를 탐내지 마라.\n십. 남의 재물을 탐내지 마라.",
        VN: "Đạo Đức Chúa Trời có mười điều răn:\nThứ nhất: Thờ phượng một Đức Chúa Trời và kính mến người trên hết mọi sự.\nThư hai: Chớ kêu tên Đức Chúa Trời vô cớ.\nThứ ba: Giữ ngày Chúa Nhật.\nThứ bốn: Thảo kính cha mẹ.\nThứ năm: Chớ giết người.\nThứ sáu: Chớ làm sự dâm dục.\nThứ bảy: Chớ lấy của người.\nThứ tám: Chớ làm chứng dối.\nThứ chín: Chớ muốn vợ chồng người.\nThứ mười: Chớ tham của người.\nMười điều răn ấy tóm về hai này mà chớ: trước kính mến một Đức Chúa Trời trên hết mọi sự sau lại yêu người như mình ta vậy.\nAmen.",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "008.ten_commandments",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "십계명",
        "Ten Commandments",
        "주요 기도"
      ]
    },
    {
      id: "007.examination_of_conscience",
      category: "common",
      titles: {
        KR: "반성 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "주님, 오늘 생각과 말과 행위로 지은 죄와\n의무를 소홀히 한 죄를 자세히 살피고\n그 가운데 버릇이 된 죄를 깨닫게 하소서.\n아멘.",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "007.examination_of_conscience",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "반성 기도",
        "주요 기도"
      ]
    },
    {
      id: "009.confiteor",
      category: "common",
      titles: {
        KR: "고백 기도",
        VN: "",
        EN: "Confiteor",
        JP: "",
        LA: "Confiteor"
      },
      texts: {
        KR: "전능하신 하느님과 형제들에게 고백하오니\n생각과 말과 행위로 죄를 많이 지었으며\n자주 의무를 소홀히 하였나이다.\n가슴을 치며 제 탓이요\n가슴을 치며 제 탓이요\n가슴을 치며 저의 큰 탓이옵니다.\n그러므로 간절히 바라오니\n평생 동정이신 성모 마리아와\n모든 천사와 성인과 형제들은\n저를 위하여 하느님께 빌어 주소서.\n(┼전능하신 하느님, 저희에게 자비를 베푸시어\n죄를 용서하시고\n영원한 생명으로 이끌어 주소서.)\n아멘.",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "009.confiteor",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "고백 기도",
        "Confiteor",
        "주요 기도"
      ]
    },
    {
      id: "010.act_of_contrition",
      category: "common",
      titles: {
        KR: "통회 기도",
        VN: "Kinh Ăn Năn Tội",
        EN: "Act of Contrition",
        JP: "痛悔の祈り",
        LA: "Actus Contritionis"
      },
      texts: {
        KR: "하느님,\n제가 죄를 지어\n참으로 사랑받으셔야 할 하느님의 마음을 아프게 하였기에\n악을 저지르고 선을 멀리한 모든 잘못을\n진심으로 뉘우치나이다.\n하느님의 은총으로 속죄하고\n다시는 죄를 짓지 않으며\n죄지을 기회를 피하기로 굳게 다짐하오니\n우리 구세주 예수 그리스도의 수난 공로를 보시고\n저에게 자비를 베풀어 주소서.\n아멘.",
        VN: "Lạy Chúa,\nChúa là Đấng trọn tốt trọn lành vô cùng.\nChúa đã dựng nên con, và cho Con Chúa ra đời chịu nạn chịu chết vì con,\nmà con đã cả lòng phản nghịch lỗi nghĩa cùng Chúa,\nthì con lo buồn đau đớn,\ncùng chê ghét mọi tội con trên hết mọi sự,\ncon dốc lòng chừa cải, và nhờ ơn Chúa,\nthì con sẽ lánh xa dịp tội, cùng làm việc đền tội cho xứng.\nAmen.",
        EN: "O my God,\nI am heartily sorry for having offended you,\nand I detest all my sins because of your just punishments,\nbut most of all because they offend you, my God,\nwho are all good and deserving of all my love.\nI firmly resolve, with the help of your grace,\nto sin no more\nand to avoid the near occasions of sin.\nAmen.\n<rubric>Or:</rubric>O my God,\nI am sorry and repent with all my heart\nfor all the wrong I have done\nand for the good I have failed to do,\nbecause by sinning I have offended you,\nwho are all good and worthy to be loved above all things.\nI firmly resolve, with the help of your grace,\nto do penance,\nto sin no more,\nand to avoid the occasions of sin.\nThrough the merits of the Passion of our Savior Jesus Christ,\nLord, have mercy.\n<rubric>Or:</rubric>Lord Jesus, Son of God,\nhave mercy on me, a sinner.",
        JP: "いつくしみ深いイエスよ、あなたの尊いみ足のもとにひれ伏して、\n心の底から罪のゆるしを願います。\n特に自分の罪を、あなたの限りない愛に背くものとして悔やみ憎みます。\n再び罪を犯してあなたに背くより、むしろ死ぬことを望み、\n生涯、すべてに超えてあなたを愛することを決心します。",
        LA: "Deus meus,\nex toto corde poenitet me omnium meorum peccatorum, eaque detestor, quia peccando, non solum poenas a Te iuste statutas promeritus sum,\nsed praesertim quia offendi Te, summum bonum, ac dignum qui super omnia diligaris.\nIdeo firmiter propono, adiuvante gratia Tua,\nde cetero me non peccaturum peccandique occasiones proximas fugiturum.\nAmen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
        "Basic Prayers",
        "日々の祈り",
        "Generalia"
      ]
    },
    {
      id: "011a.act_of_faith",
      category: "common",
      titles: {
        KR: "신덕송",
        VN: "Kinh Tin",
        EN: "Act of Faith",
        JP: "",
        LA: "Actus Fidei"
      },
      texts: {
        KR: "하느님, 하느님께서는 진리의 근원이시며\n그르침이 없으시므로\n계시하신 진리를\n교회가 가르치는 대로 굳게 믿나이다.",
        VN: "Lạy Chúa, con tin thật có một Đức Chúa Trời là Đấng thưởng phạt vô cùng. Con lại tin thật Đức Chúa Trời có Ba Ngôi, mà Ngôi Thứ Hai đã xuống thế làm Người, chịu nạn chịu chết mà chuộc tội cho thiên hạ. Bấy nhiêu điều ấy cùng các điều Hội Thánh dạy thì con tin vững vàng, vì Chúa là Đấng thông minh và chân thật vô cùng đã phán truyền cho Hội Thánh. Amen.",
        EN: "O my God, I firmly believe that you are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that your divine Son became man and died for our sins and that he will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches because you have revealed them who are eternal truth and wisdom, who can neither deceive nor be deceived. In this faith I intend to live and die. Amen.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "",
        LA: ""
      },
      tags: [
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
        "주요 기도"
      ]
    },
    {
      id: "011b.act_of_hope",
      category: "common",
      titles: {
        KR: "망덕송",
        VN: "Kinh Cậy",
        EN: "Act of Hope",
        JP: "",
        LA: "Actus Spei"
      },
      texts: {
        KR: "하느님, 하느님께서는 자비의 근원이시며\n저버림이 없으시므로\n예수 그리스도의 공로를 통하여 주실\n구원의 은총과 영원한 생명을 바라나이다.",
        VN: "Lạy Chúa, con trông cậy vững vàng, vì công nghiệp Đức Chúa Giêsu thì Chúa sẽ ban ơn cho con giữ đạo nên ở đời này, cho ngày sau được lên thiên đàng xem thấy mặt Đức Chúa Trời hưởng phúc đời đời, vì Chúa là đấng phép tắc và lòng lành vô cùng đã phán hứa sự ấy chẳng có lẽ nào sai được. Amen.",
        EN: "O Lord God, I hope by your grace for the pardon of all my sins and after life here to gain eternal happiness because you have promised it who are infinitely powerful, faithful, kind, and merciful. In this hope I intend to live and die. Amen.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "",
        LA: ""
      },
      tags: [
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
        "주요 기도"
      ]
    },
    {
      id: "011c.act_of_love",
      category: "common",
      titles: {
        KR: "애덕송",
        VN: "Kinh Mến",
        EN: "Act of Love",
        JP: "",
        LA: "Actus Caritatis"
      },
      texts: {
        KR: "하느님, 하느님께서는 사랑의 근원이시며\n한없이 좋으시므로\n마음을 다하여 주님을 사랑하며\n이웃을 제 몸같이 사랑하나이다.",
        VN: "Lạy Chúa, con kính mến Chúa hết lòng hết sức trên hết mọi sự, vì Chúa là Đấng trọn tốt trọn lành vô cùng, lạy vì Chúa, thì con thương yêu người ta như mình con vậy. Amen.",
        EN: "O Lord God, I love you above all things and I love my neighbor for your sake because you are the highest, infinite and perfect good, worthy of all my love. In this love I intend to live and die. Amen.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "",
        LA: ""
      },
      tags: [
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
        "주요 기도"
      ]
    },
    {
      id: "012.offering_prayer",
      category: "common",
      titles: {
        KR: "봉헌 기도",
        VN: "",
        EN: "Morning Offering",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "하느님, 저를 사랑으로 내시고\n저에게 영혼 육신을 주시어\n주님만을 섬기고 사람을 도우라 하셨나이다.\n저는 비록 죄가 많사오나\n주님께 받은 몸과 마음을 오롯이 도로 바쳐\n찬미와 봉사의 제물로 드리오니\n어여삐 여기시어 받아 주소서.\n아멘.",
        VN: "",
        EN: "O Jesus, through the Immaculate Heart of Mary,\nI offer you my prayers, works, joys and sufferings of this day\nfor all the intentions of your Sacred Heart,\nin union with the Holy Sacrifice of the Mass throughout the world,\nfor the salvation of souls, the reparation for sins, the reunion of all Christians,\nand in particular for the intentions of the Holy Father this month.\nAmen.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "012.offering_prayer",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "봉헌 기도",
        "Offering Prayer",
        "주요 기도"
      ]
    },
    {
      id: "013.angelus",
      category: "common",
      titles: {
        KR: "삼종 기도",
        VN: "",
        EN: "Angelus",
        JP: "お告げの祈り",
        LA: "Angelus"
      },
      texts: {
        KR: "<b>○</b> 주님의 천사가 마리아께 아뢰니\n<b>●</b> 성령으로 잉태하셨나이다.\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> “주님의 종이오니\n<b>●</b> 그대로 제게 이루어지소서!”\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> 이에 말씀이 사람이 되시어\n<b>●</b> 저희 가운데 계시나이다.\n<rubric>성모송</rubric><b>○</b> 은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 하시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n<b>●</b> 천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서.\n아멘.\n<b>○</b> 천주의 성모님, 저희를 위하여 빌어주시어\n<b>●</b> 그리스도께서 약속하신 영원한 생명을 얻게 하소서.\n<b>✚</b> 기도합시다.\n하느님, 천사의 아룀으로\n성자께서 사람이 되심을 알았으니\n성자의 수난과 십자가로\n부활의 영광에 이르는 은총을\n저희에게 내려 주소서.\n우리 주 그리스도를 통하여 비나이다.\n<b><b>◎</b></b> 아멘.",
        VN: "",
        EN: "<b>V.</b> The Angel of the Lord declared unto Mary,\n<b>R.</b> And she conceived of the Holy Spirit.\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> Behold the handmaid of the Lord,\n<b>R.</b> Be it done unto me according to your Word.\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> And the Word was made flesh,\n<b>R.</b> And dwelt among us.\n\nHail Mary, full of grace, the Lord is with you;\nblessed are you among women,\nand blessed is the fruit of your womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners\nnow and at the hour of our death.\nAmen.\n<b>V.</b> Pray for us, O holy Mother of God,\n<b>R.</b> That we may be made worthy of the promises of Christ.\n<b>Let us pray.</b>\nPour forth, we beseech you, O Lord, your grace into our hearts: that we, to whom the Incarnation of Christ your Son was made known by the message of an Angel, may by his Passion and Cross be brought to the glory of his Resurrection. Through the same Christ our Lord. Amen.",
        JP: "主のみ使いのお告げを受けて、\nマリアは聖霊によって神の御子を宿された。\n〔アヴェ･マリアの祈り〕\nアヴェ、マリア、恵みに満ちた方、\n主はあなたとともにおられます。\nあなたは女のうちで祝福され、\nご胎内の御子イエスも祝福されています。\n神の母聖マリア、\nわたしたち罪びとのために、\n今も、死を迎える時も、お祈りください。\nアーメン。\nわたしは主のはしため、\nおことばどおりになりますように。\n（引き続き、上記の〔アヴェ･マリアの祈り〕を唱えます。）\nみことばは人となり、\nわたしたちのうちに住まわれた。\n（ここでも〔アヴェ･マリアの祈り〕を唱えます。）\n神の母聖マリア、わたしたちのために祈ってください。\nキリストの約束にかなうものとなりますように。\n祈願\n神よ、み使いのお告げによって、御子が人となられたことを\n知ったわたしたちが、キリストの受難と十字架をとおして、\n復活の栄光に達することができるよう、恵みを注いでください。\nわたしたちの主イエス・キリストによって。 アーメン。",
        LA: "Alma Redemptoris Mater, quae pervia caeli Porta manes, et stella maris, succurre cadenti, Surgere qui curat, populo: tu quae genuisti, Natura mirante, tuum sanctum Genitorem Virgo prius ac posterius, Gabrielis ab ore Sumens illud Ave, peccatorum miserere.\nTempus Adventus:\nV. Angelus Domini nuntiavit Mariae.\nR. Et concepit de Spiritu Sancto.\nOremus:\nGratiam tuam, quaesumus, Domine, mentibus nostris infunde: ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus; per passionem eius et crucem, ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen.\nDonec Purificatio:\nV. Post partum, Virgo, inviolata permansisti.\nR. Dei Genetrix, intercede pro nobis.\nOremus:\nDeus, qui salutis aeternae, beatae Mariae virginitate fecunda, humano generi praemia praestitisti: tribue, quaesumus; ut ipsam pro nobis intercedere sentiamus, per quam meruimus auctorem vitae suscipere, Dominum nostrum Iesum Christum, Filium tuum. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Maria"
      },
      tags: [
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
        "Maria"
      ]
    },
    {
      id: "014.regina_caeli",
      category: "common",
      titles: {
        KR: "부활 삼종 기도",
        VN: "",
        EN: "Regina Caeli",
        JP: "アレルヤの祈り",
        LA: "Regina Caeli"
      },
      texts: {
        KR: "<rubric>주님 부활 대축일부터 성령 강림 대축일까지</rubric>\n<b>○</b> 하늘의 모후님, 기뻐하소서. 알렐루야.\n<b>●</b> 태중에 모시던 아드님께서, 알렐루야.\n<b>○</b> 말씀하신 대로 부활하셨나이다. 알렐루야.\n<b>●</b> 저희를 위하여 하느님께 빌어 주소서. 알렐루야.\n<b>○</b> 동정 마리아님, 기뻐하시며 즐거워하소서. 알렐루야.\n<b>●</b> 주님께서 참으로 부활하셨나이다. 알렐루야.\n✚ 기도합시다.\n하느님, 성자 우리 주 예수 그리스도의 부활로\n온 세상을 기쁘게 하셨으니\n성자의 어머니 동정 마리아의 도움으로\n영생의 즐거움을 얻게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "V. Queen of heaven, rejoice, alleluia.\nR. The Son whom you merited to bear, alleluia,\nV. has risen as he said, alleluia.\nR. Pray for us to God, alleluia.\nV. Rejoice and be glad, O Virgin Mary, alleluia.\nR. For the Lord has truly risen, alleluia.\nV. Let us pray.\nALL. O God, who have been pleased to gladden the world\nby the Resurrection of your Son our Lord Jesus Christ,\ngrant, we pray,\nthat through his Mother, the Virgin Mary,\nwe may receive the joys of everlasting life.\nThrough Christ our Lord. Amen.",
        JP: "神の母聖マリア、お喜びください。アレルヤ。\nあなたに宿られた方は。アレルヤ。\nおことばどおりに復活されました。アレルヤ。\nわたしたちのためにお祈りください。アレルヤ。\n聖マリア、お喜びください。アレルヤ。\n主はまことに復活されました。アレルヤ。\n祈願\n神よ、あなたは御子キリストの復活によって、\n世界に喜びをお与えになりました。\nキリストの母、聖マリアにならい、\nわたしたちも永遠のいのちの喜びを得ることができますように。\nわたしたちの主イエス・キリストによって。アーメン。",
        LA: "Regina coeli, laetare, alleluia: Quia quem meruisti portare, alleluia. Resurrexit sicut dixit, alleluia. Ora pro nobis Deum, alleluia.\nV. Gaude et laetare, Virgo Maria, alleluia.\nR. Quia surrexit Dominus vere, alleluia.\nOremus:\nDeus qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus, ut per eius Genetricem Virginem Mariam, perpetuae capiamus gaudia vitae. Per eundem Christum Dominum nostrum.\nR. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Maria"
      },
      tags: [
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
        "Maria"
      ]
    },
    {
      id: "015.fatima_prayer",
      category: "common",
      titles: {
        KR: "구원을 비는 기도",
        VN: "",
        EN: "Fatima Prayer",
        JP: "",
        LA: "Oratio Fatimae"
      },
      texts: {
        KR: "예수님, 저희 죄를 용서하시며\n저희를 지옥 불에서 구하시고\n연옥 영혼을 돌보시며\n가장 버림받은 영혼을 돌보소서.",
        VN: "",
        EN: "",
        JP: "",
        LA: "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praeseritim illas quae maxime indigent misericordia tua."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Rosarium"
      },
      tags: [
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
      id: "016.prayer_before_meals",
      category: "common",
      titles: {
        KR: "식사 전 기도",
        VN: "",
        EN: "Prayer Before Meals",
        JP: "食前の祈り",
        LA: "Benedic, Domine"
      },
      texts: {
        KR: "<b>✚</b> 주님, 은혜로이 내려 주신 이 음식과\n저희에게 강복하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "",
        JP: "",
        LA: "Benedic, Domine, nos et haec tua dona quae de tua largitate sumus sumpturi, per Christum Dominum nostrum. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Preces ad mensam"
      },
      tags: [
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
      id: "017.prayer_after_meals",
      category: "common",
      titles: {
        KR: "식사 후 기도",
        VN: "",
        EN: "Prayer After Meals",
        JP: "食後の祈り",
        LA: "Agimus Tibi Gratias"
      },
      texts: {
        KR: "<b>✚</b> 전능하신 하느님,\n저희에게 베풀어 주신\n모든 은혜에 감사하나이다.\n<b>◎</b> 아멘.\n<b>✚</b> 주님의 이름은 찬미를 받으소서.\n<b>◎</b> 이제와 영원히 받으소서.\n<b>✚</b> 세상을 떠난 모든 이가\n하느님의 자비로 평화의 안식을 얻게 하소서.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "",
        JP: "",
        LA: "Agimus tibi gratias, omnipotens Deus, pro universis beneficiis tuis, qui vivis et regnas in saecula saeculorum. Fidelium animae, per misericordiam Dei, requiescant in pace. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Preces ad mensam"
      },
      tags: [
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
      id: "018.prayer_before_work",
      category: "common",
      titles: {
        KR: "일을 시작하며 바치는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "<b>○</b> 오소서, 성령님.\n저희 마음을 성령으로 가득 채우시어\n저희 안에 사랑의 불이 타오르게 하소서.\n<b>●</b> 주님의 성령을 보내소서. 저희가 새로워지리이다.\n또한 온 누리가 새롭게 되리이다.\n<b>✚</b> 기도합시다.\n하느님, 성령의 빛으로 저희 마음을 이끄시어\n바르게 생각하고\n언제나 성령의 위로를 받아 누리게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "019.prayer_after_work",
      category: "common",
      titles: {
        KR: "일을 마치고 바치는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "(성모님께 보호를 청하는 기도)\n천주의 성모님, 당신의 보호에 저희를 맡기오니\n어려울 때에 저희의 간절한 기도를 외면하지 마시고\n항상 모든 위험에서 저희를 구하소서.\n영화롭고 복되신 동정녀시여.",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "019.prayer_after_work",
        "common",
        "공통기도문",
        "Kinh nguyện chung",
        "Common Prayers",
        "共通の祈り",
        "Preces communes",
        "일을 마치고 바치는 기도",
        "주요 기도"
      ]
    },
    {
      id: "020.morning_prayer",
      category: "common",
      titles: {
        KR: "아침 기도",
        VN: "",
        EN: "Morning Prayer",
        JP: "朝の祈り",
        LA: ""
      },
      texts: {
        KR: "십자 성호를 그으며\n<b>✚</b> 성부와 성자와 성령의 이름으로.\n<b>◎</b> 아멘.\n<b>○</b> 하늘에 계신 우리 아버지,\n아버지의 이름이 거룩히 빛나시며\n아버지의 나라가 오시며\n아버지의 뜻이 하늘에서와 같이\n땅에서도 이루어지소서!\n<b>●</b> 오늘 저희에게 일용할 양식을 주시고\n저희에게 잘못한 이를 저희가 용서하오니\n저희 죄를 용서하시고\n저희를 유혹에 빠지지 않게 하시고\n악에서 구하소서.\n<b>◎</b> 아멘.\n<b>◎</b> 하느님, 저를 사랑으로 내시고\n저에게 영혼 육신을 주시어\n주님만을 섬기고 사람을 도우라 하셨나이다.\n저는 비록 죄가 많사오나\n주님께 받은 몸과 마음을 오롯이 도로 바쳐\n찬미와 봉사의 제물로 드리오니\n어여삐 여기시어 받아 주소서.\n아멘.\n<b>✚</b> 우리 주 하느님께 권능과 영광\n지혜와 굳셈이 있사오니\n찬미와 감사와 흠숭을 영원히 받으소서.\n<b>◎</b> 아멘.\n<b>✚</b> 전능하신 하느님,\n오늘도 저희 생각과 말과 행위를\n주님의 평화로 이끌어 주소서.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "",
        JP: "「神よ、あなたを礼拝します」\n神よ、あなたを礼拝し、心を尽くして愛します。\nわたしを造り、キリスト者とし、（パウロ家族に導いて、）\n昨夜も守ってくださった恵みに感謝します。\nきょうの働きをあなたにささげます。\nすべてがみ心にかない、より大いなるみ栄えとなりますように。\nわたしを罪と悪から守ってください。\nあなたの恵みが、常に、わたしと、\nわたしの愛するすべての人の上にありますように。アーメン。",
        LA: "Domine Iesu Christe, in unione illius divinae intentionis, quia in terris, per sanctissimum Cor tuum, laudes Deo persolvisti, et nunc in Eucharistiae Sacramento ubique terrarum persolvis, usque ad consummationem saeculi: ego, per hanc diem integram, ad imitationem sanctissimi Cordis beatae Mariae semper Virginis immaculatae, tibi libentissime offero meos intentiones et cogitationes, omnes meos affectus et desideria, omnia mea opera et verba. Amen."
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "021.evening_prayer",
      category: "common",
      titles: {
        KR: "저녁 기도",
        VN: "",
        EN: "Evening Prayer",
        JP: "晩の祈り",
        LA: ""
      },
      texts: {
        KR: "십자 성호를 그으며\n<b>✚</b> 성부와 성자와 성령의 이름으로.\n<b>◎</b> 아멘.\n<b>✚</b> 주님, 오늘 생각과 말과 행위로 지은 죄와\n의무를 소홀히 한 죄를 자세히 살피고\n그 가운데 버릇이 된 죄를 깨닫게 하소서.\n잠깐 반성한다.\n<b>◎</b> 하느님,\n제가 죄를 지어\n참으로 사랑받으셔야 할\n하느님의 마음을 아프게 하였기에\n악을 저지르고 선을 멀리한 모든 잘못을\n진심으로 뉘우치나이다.\n하느님의 은총으로 속죄하고\n다시는 죄를 짓지 않으며\n죄지을 기회를 피하기로 굳게 다짐하오니\n우리 구세주 예수 그리스도의 수난 공로를 보시고\n저에게 자비를 베풀어 주소서.\n아멘.\n<b>○</b> 하느님, 하느님께서는 진리의 근원이시며\n그르침이 없으시므로\n계시하신 진리를\n교회가 가르치는 대로 굳게 믿나이다.\n<b>●</b> 하느님, 하느님께서는 자비의 근원이시며\n저버림이 없으시므로\n예수 그리스도의 공로를 통하여 주실\n구원의 은총과 영원한 생명을 바라나이다.\n<b>○</b> 하느님, 하느님께서는 사랑의 근원이시며\n한없이 좋으시므로\n마음을 다하여 주님을 사랑하며\n이웃을 제 몸같이 사랑하나이다.\n<b>✚</b> 하늘에 계신 우리 아버지,\n오늘 하루도 이미 저물었나이다.\n이제 저희는 구세주 예수 그리스도를 통하여\n모든 천사와 성인과 함께 주님을 흠숭하며\n지금 이 순간까지 베풀어 주신\n주님의 사랑에 감사하나이다.\n<b>◎</b> 아멘.\n<b>✚</b> 전능하신 천주\n십자 성호를 그으며\n성부와 성자와 성령께서는\n저희에게 강복하시고 지켜 주소서.\n<b>◎</b> 아멘.",
        VN: "",
        EN: "",
        JP: "「神よ、あなたを礼拝します」\n神よ、あなたを礼拝し、心を尽くして愛します。\nわたしを造り、キリスト者とし、\nきょうも守ってくださった恵みに感謝します。\nきょう犯したわたしの過ちをゆるし、行った善を受け入れてください。\n眠っている間もわたしを守り、危険から救ってください。\nあなたの恵みが、常に、わたしと、\nわたしの愛するすべての人の上にありますように。アーメン。",
        LA: ""
      },
      sourceCategory: {
        KR: "주요 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "anima_christi",
      category: "common",
      titles: {
        KR: "",
        VN: "Kinh Lạy Linh Hồn Chúa Kitô",
        EN: "Anima Christi",
        JP: "キリストの魂",
        LA: "Anima Christi"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Christus"
      },
      tags: [
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
      id: "come_holy_spirit",
      category: "common",
      titles: {
        KR: "",
        VN: "Lạy Chúa Thánh Thần, xin Ngài ngự đến",
        EN: "",
        JP: "聖霊への祈り",
        LA: "Veni Sancte Spiritus (long version)"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: "Spiritus Sanctus"
      },
      tags: [
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
      id: "la_professio_fidei_tridentina",
      category: "common",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Professio Fidei Tridentina"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Symbolum fidei"
      },
      tags: [
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
      id: "la_quicunque_vult",
      category: "common",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Quicunque Vult"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Symbolum fidei"
      },
      tags: [
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
      id: "000.guardian_angel",
      category: "common",
      titles: {
        KR: "수호천사에게 바치는 기도",
        VN: "Kinh Thiên Thần Bản Mệnh",
        EN: "Prayer to Your Guardian Angel",
        JP: "守護の天使への祈り",
        LA: "Angele Dei"
      },
      texts: {
        KR: "저를 지켜 주시는 수호천사여, 하느님께서 당신께 맡기신 저를 오늘 비추고 지켜 주시며 다스리고 이끌어 주소서. 아멘.",
        VN: "Lạy Thiên Thần Chúa là Đấng gìn giữ con, xin soi sáng, gìn giữ, cai quản và hướng dẫn con trong ngày hôm nay. Amen.",
        EN: "Angel of God, my guardian dear,\nto whom God’s love commits me here,\never this day be at my side,\nto light and guard, to rule and guide.\nAmen.",
        JP: "神の天使、わたしの守護者よ、神の愛によってあなたにゆだねられたわたしを、今日も照らし、守り、導いてください。アーメン。",
        LA: "Angele Dei, qui custos es mei, me tibi commissum pietate superna illumina, custodi, rege et guberna. Amen."
      },
      sourceCategory: {
        KR: "민간전승",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Angeli"
      },
      tags: [
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
      id: "en_a_rosary_for_life_the_glorious_mysteries",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "A Rosary for Life: The Glorious Mysteries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_rosary_for_life_the_luminous_mysteries",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "A Rosary for Life: The Luminous Mysteries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_rosary_for_life_the_sorrowful_mysteries",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "A Rosary for Life: The Sorrowful Mysteries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_oratio_fatima",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Fatima"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Rosarium"
      },
      tags: [
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
      id: "la_oratio_ad_finem_rosarii_dicenda",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio ad Finem Rosarii Dicenda"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Rosarium"
      },
      tags: [
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
      id: "en_prayer_to_st_joseph_after_the_rosary",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to St. Joseph after the Rosary",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pro_life_rosary_prayer_intentions",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "Pro-Life Rosary Prayer Intentions",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_scriptural_rosary_the_sorrowful_mysteries",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "Scriptural Rosary: The Sorrowful Mysteries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "jp_ロサリオの祈り_https_inoruhana_com_ja_rosary_pray",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "[ロザリオの祈り](https://inoruhana.com/ja/rosary-pray/)",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_ロサリオ",
      category: "rosary",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ロザリオ",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "000. rosary_the_joyful_mysteries",
      category: "rosary",
      titles: {
        KR: "환희의 신비",
        VN: "",
        EN: "The Joyful Mysteries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "<rubic>월·토요일에 바친다.</rubric>\n1단 마리아께서 예수님을 잉태하심을 묵상합시다.\n2단 마리아께서 엘리사벳을 찾아보심을 묵상합시다.\n3단 마리아께서 예수님을 낳으심을 묵상합시다.\n4단 마리아께서 예수님을 성전에 바치심을 묵상합시다.\n5단 마리아께서 잃으셨던 예수님을 성전에서 찾으심을 묵상합시다.",
        VN: "",
        EN: "<rubic>traditionally prayed on Mondays, Saturdays, and, during the season of Advent, on Sundays.</rubric>\n1. The Annunciation\n<i>“In the sixth month, the angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Joseph, of the house of David, and the virgin’s name was Mary.” - Luke 1:26-27</i>\n2. The Visitation\n<i>“During those days Mary set out and traveled to the hill country in haste to a town of Judah, where she entered the house of Zechariah and greeted Elizabeth. When Elizabeth heard Mary’s greeting, the infant leaped in her womb, and Elizabeth, filled with the holy Spirit, cried out in a loud voice and said, 'Most blessed are you among women, and blessed is the fruit of your womb.'” - Luke 1:39-42,</i>\n3. The Nativity\n<i>“In those days a decree went out from Caesar Augustus that the whole world should be enrolled. This was the first enrollment, when Quirinius was governor of Syria. So all went to be enrolled, each to his own town. And Joseph too went up from Galilee from the town of Nazareth to Judea, to the city of David that is called Bethlehem, because he was of the house and family of David, to be enrolled with Mary, his betrothed, who was with child. While they were there, the time came for her to have her child, and she gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger, because there was no room for them in the inn.” - Luke 2:1-7</i>\n4. The Presentation in the Temple\n<i>“When eight days were completed for his circumcision, he was named Jesus, the name given him by the angel before he was conceived in the womb. When the days were completed for their purification according to the law of Moses, they took him up to Jerusalem to present him to the Lord, just as it is written in the law of the Lord, 'Every male that opens the womb shall be consecrated to the Lord,' and to offer the sacrifice of 'a pair of turtledoves or two young pigeons,' in accordance with the dictate in the law of the Lord.” - Luke 2:21-24</i>\n5. The Finding in the Temple\n<i>“Each year his parents went to Jerusalem for the feast of Passover,  and when he was twelve years old, they went up according to festival custom. After they had completed its days, as they were returning, the boy Jesus remained behind in Jerusalem, but his parents did not know it. Thinking that he was in the caravan, they journeyed for a day and looked for him among their relatives and acquaintances, but not finding him, they returned to Jerusalem to look for him. After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions, and all who heard him were astounded at his understanding and his answers.” - Luke 2:41-47</i> ",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "묵주기도",
        VN: "",
        EN: "The Rosary",
        JP: "",
        LA: ""
      },
      tags: [
        "000. rosary_the_joyful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "환희의 신비",
        "The Joyful Mysteries",
        "The Rosary"
      ]
    },
    {
      id: "kr_30_213",
      category: "rosary",
      titles: {
        KR: "묵주 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_8_70",
      category: "rosary",
      titles: {
        KR: "묵주기도 바치는 방법",
        VN: "",
        EN: "How to Pray the Rosary",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "1. 묵주에 달린 십자가를 잡은 채 십자성호(성호경)를 이마, 가슴, 양 어깨 순으로 긋고 십자가 발 부분에 친구(입맞춤)한 다음, 사도신경을 바칩니다.\n2. 큰 알(또는 간격이 넓은 알)에서 주님의 기도 1번, 작은 알 3개에서 성모송 각 1번씩, 그리고 맨 마지막 알에서 영광송을 바칩니다. 이어서 구원을 위한 기도(구원송)를 바칠 수 있습니다.\n3. 그리고 같은 자리에서 신비 제1단(환희의 신비, 빛의 신비, 고통의 신비, 영광의 신비 중에서 하나를 선택)을 묵상한 후 주님의 기도를 1번 드립니다.\n4. 이어서 다음의 작은 묵주 알에서 각각 1번씩 성모송 10번을 바칩니다.\n5. 10개의 작은 묵주 알을 지나 하나의 큰 묵주 알(또는 간격이 넓은 알)에서 영광송을 바칩니다. 이어서 구원을 위한 기도(구원송)를 바칠 수 있습니다. 그리고 다시 전과 같이 신비 제2단을 묵상한 후 주님의 기도를 1번 드립니다.\n6. 이와 같이 매 단마다 그 신비를 묵상하면서 제3단, 제4단, 제5단을 계속 바칩니다.\n7. 마지막 제5단의 묵주기도가 끝나면 마침 성호경을 하기 전에 묵주기도성월 기도인 성모찬송을 바칠 수도 있습니다.\n8. 한 바퀴를 돌아 다시 돌아온 십자가를 잡고 성호경으로 끝을 맺습니다. 이때 십자가에 친구(입맞춤)하며 마칠 수 있습니다.",
        VN: "",
        EN: "1. Make the Sign of the Cross.\n2. Holding the Crucifix, say the Apostles' Creed.\n3. On the first bead, say an Our Father.\n4. Say one Hail Mary on each of the next three beads.\n5. Say the Glory Be\n6. For each of the five decades, announce the Mystery (perhaps followed by a brief reading from Scripture) then say the Our Father.\n7. While fingering each of the ten beads of the decade, next say ten Hail Marys while meditating on the Mystery. Then say a Glory Be.\n8. After finishing each decade, some say the following prayer requested by the Blessed Virgin Mary at Fatima.\n9. After saying the five decades, say the Hail, Holy Queen. (A prayer to St. Joseph may also follow.)\\10. Conclude the Rosary with the Sign of the Cross.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "묵주기도",
        VN: "",
        EN: "Rosary",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_30",
      category: "litany",
      titles: {
        KR: "103위 한국 성인 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_128",
      category: "litany",
      titles: {
        KR: "124위 한국 순교 복자 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_litany_for_life",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "A Litany for Life",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_litaniae_lauretanae",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae Lauretanae"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "la_litaniae_pretiosissimi_sanguinis_domini_nostri_iesu_christi",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae Pretiosissimi Sanguinis Domini Nostri Iesu Christi"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae"
      },
      tags: [
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
      id: "la_litaniae_sancti_ioseph",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae Sancti Ioseph"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
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
      id: "la_litaniae_sanctissimi_nominis_iesu",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae Sanctissimi Nominis Iesu"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae"
      },
      tags: [
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
      id: "la_litaniae_de_sacro_corde_iesu",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae de Sacro Corde Iesu"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Litaniae"
      },
      tags: [
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
      id: "en_litany_for_liberty",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany for Liberty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_saint_joseph",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of Saint Joseph",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_the_blessed_virgin_mary_mother_of_life",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of the Blessed Virgin Mary, Mother of Life",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_the_holy_name_of_jesus",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of the Holy Name of Jesus",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_the_most_precious_blood",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of the Most Precious Blood",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_the_sacred_heart_of_jesus",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of the Sacred Heart of Jesus",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_litany_of_the_way_prayer_for_the_journey",
      category: "litany",
      titles: {
        KR: "",
        VN: "",
        EN: "Litany of the Way, Prayer for the Journey",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Litanies",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_29",
      category: "litany",
      titles: {
        KR: "복되신 동정 마리아의 배필 성 요셉 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_28",
      category: "litany",
      titles: {
        KR: "성모 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_27",
      category: "litany",
      titles: {
        KR: "예수 성심 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_5_31",
      category: "litany",
      titles: {
        KR: "일상적으로 바치는 성인 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_4_21",
      category: "monthly",
      titles: {
        KR: "성 요셉 성월",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "성월 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_4_22",
      category: "monthly",
      titles: {
        KR: "성모 성월",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "성월 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_4_24",
      category: "monthly",
      titles: {
        KR: "순교자 성월",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "성월 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_4_23",
      category: "monthly",
      titles: {
        KR: "예수 성심 성월",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "성월 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_4_26",
      category: "monthly",
      titles: {
        KR: "위령 성월",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "성월 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_may_the_sacraments_move_us_to_love_and_serve",
      category: "sacrament",
      titles: {
        KR: "",
        VN: "",
        EN: "May the Sacraments Move Us to Love and Serve",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_214",
      category: "sacrament",
      titles: {
        KR: "THE RITE OF PENANCE",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "jp_赦しの秘跡",
      category: "sacrament",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "赦しの秘跡",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "kr_7_20",
      category: "sacrament",
      titles: {
        KR: "고해 성사",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "고해성사",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_185",
      category: "sacrament",
      titles: {
        KR: "고해성사",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_11_68",
      category: "sacrament",
      titles: {
        KR: "공소 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "공소 예절",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_186",
      category: "sacrament",
      titles: {
        KR: "병자 영성체 짧은 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_187",
      category: "sacrament",
      titles: {
        KR: "병자 영성체 통상 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_189",
      category: "sacrament",
      titles: {
        KR: "병자도유 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_188",
      category: "sacrament",
      titles: {
        KR: "죽을 위험에 놓인 병자에게 거행하는 견진예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_29_184",
      category: "sacrament",
      titles: {
        KR: "죽을 위험에 있거나 죽음이 임박한 때에 사용하는 짧은 어른 입교 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_22_166",
      category: "blessing_household",
      titles: {
        KR: "(어린 자녀) 선생님을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_166",
        "blessing_household",
        "(어린 자녀) 선생님을 위한 기도",
        "자녀"
      ]
    },
    {
      id: "kr_22_164",
      category: "blessing_household",
      titles: {
        KR: "(어린 자녀) 아빠를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_164",
        "blessing_household",
        "(어린 자녀) 아빠를 위한 기도",
        "자녀"
      ]
    },
    {
      id: "kr_22_165",
      category: "blessing_household",
      titles: {
        KR: "(어린 자녀) 엄마를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_165",
        "blessing_household",
        "(어린 자녀) 엄마를 위한 기도",
        "자녀"
      ]
    },
    {
      id: "kr_22_163",
      category: "blessing_household",
      titles: {
        KR: "(어린 자녀) 할머니, 할아버지를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_163",
        "blessing_household",
        "(어린 자녀) 할머니, 할아버지를 위한 기도",
        "자녀"
      ]
    },
    {
      id: "en_blessing_of_grandparents",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of Grandparents",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_grandparents",
        "blessing_household",
        "Blessing of Grandparents",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_of_parents_after_a_miscarriage_or_stillbirth",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of Parents after a Miscarriage or Stillbirth",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_parents_after_a_miscarriage_or_stillbirth",
        "blessing_household",
        "Blessing of Parents after a Miscarriage or Stillbirth",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_of_a_christmas_manger_or_nativity_scene",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of a Christmas Manger or Nativity Scene",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_a_christmas_manger_or_nativity_scene",
        "blessing_household",
        "Blessing of a Christmas Manger or Nativity Scene",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_of_a_christmas_tree",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of a Christmas Tree",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_a_christmas_tree",
        "blessing_household",
        "Blessing of a Christmas Tree",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_of_an_advent_wreath",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of an Advent Wreath",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_an_advent_wreath",
        "blessing_household",
        "Blessing of an Advent Wreath",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_of_the_home_and_household_on_epiphany",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing of the Home and Household on Epiphany",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_of_the_home_and_household_on_epiphany",
        "blessing_household",
        "Blessing of the Home and Household on Epiphany",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_on_a_child_s_birthday",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing on a Child's Birthday",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_on_a_child_s_birthday",
        "blessing_household",
        "Blessing on a Child's Birthday",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_blessing_on_a_child_s_name_day",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Blessing on a Child's Name Day",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_blessing_on_a_child_s_name_day",
        "blessing_household",
        "Blessing on a Child's Name Day",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_children_of_the_world_photo_slides",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Children of the World Photo Slides",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_children_of_the_world_photo_slides",
        "blessing_household",
        "Children of the World Photo Slides",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "la_commemoratio_sancti_ioseph",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Ioseph"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_commemoratio_sancti_ioseph",
        "blessing_household",
        "Commemoratio Sancti Ioseph",
        "Ioseph"
      ]
    },
    {
      id: "en_daily_blessing_of_a_child",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Daily Blessing of a Child",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_daily_blessing_of_a_child",
        "blessing_household",
        "Daily Blessing of a Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_gracious_lord_child_of_bethlehem",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Gracious Lord, Child of Bethlehem",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_gracious_lord_child_of_bethlehem",
        "blessing_household",
        "Gracious Lord, Child of Bethlehem",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "la_invocatio_sancti_iosephi",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Invocatio Sancti Iosephi"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_invocatio_sancti_iosephi",
        "blessing_household",
        "Invocatio Sancti Iosephi",
        "Ioseph"
      ]
    },
    {
      id: "la_ioseph_virgo_pater_iesu",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph, Virgo Pater Iesu"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_ioseph_virgo_pater_iesu",
        "blessing_household",
        "Ioseph, Virgo Pater Iesu",
        "Ioseph"
      ]
    },
    {
      id: "la_memento_nostri_beate_ioseph",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Memento Nostri, Beate Ioseph"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_memento_nostri_beate_ioseph",
        "blessing_household",
        "Memento Nostri, Beate Ioseph",
        "Ioseph"
      ]
    },
    {
      id: "la_memorare_sancti_ioseph",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Memorare Sancti Ioseph"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_memorare_sancti_ioseph",
        "blessing_household",
        "Memorare Sancti Ioseph",
        "Ioseph"
      ]
    },
    {
      id: "la_oratio_ad_sanctum_iosephum",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio ad Sanctum Iosephum"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_oratio_ad_sanctum_iosephum",
        "blessing_household",
        "Oratio ad Sanctum Iosephum",
        "Ioseph"
      ]
    },
    {
      id: "en_order_for_the_blessing_of_organizations_concerned_with_public_need",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Order for the Blessing of Organizations Concerned with Public Need",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_order_for_the_blessing_of_organizations_concerned_with_public_need",
        "blessing_household",
        "Order for the Blessing of Organizations Concerned with Public Need",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_order_for_the_blessing_of_a_victim_of_crime_or_oppression",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Order for the Blessing of a Victim of Crime or Oppression",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_order_for_the_blessing_of_a_victim_of_crime_or_oppression",
        "blessing_household",
        "Order for the Blessing of a Victim of Crime or Oppression",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_order_for_the_blessing_of_the_sick",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Order for the Blessing of the Sick",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_order_for_the_blessing_of_the_sick",
        "blessing_household",
        "Order for the Blessing of the Sick",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_parents_prayer_for_vocations",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Parents Prayer for Vocations",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_parents_prayer_for_vocations",
        "blessing_household",
        "Parents Prayer for Vocations",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_parents_thanksgiving",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Parents' Thanksgiving",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_parents_thanksgiving",
        "blessing_household",
        "Parents' Thanksgiving",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_pope_francis_prayer_for_those_who_have_died_after_leaving_their_homela",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis' Prayer for Those Who Have Died After Leaving Their Homelands in Search of a Better Life",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_pope_francis_prayer_for_those_who_have_died_after_leaving_their_homela",
        "blessing_household",
        "Pope Francis' Prayer for Those Who Have Died After Leaving Their Homelands in Search of a Better Life",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_card_for_the_75th_anniversary_of_hiroshima_and_nagasaki_spanish",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Card for the 75th Anniversary of Hiroshima and Nagasaki - Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_card_for_the_75th_anniversary_of_hiroshima_and_nagasaki_spanish",
        "blessing_household",
        "Prayer Card for the 75th Anniversary of Hiroshima and Nagasaki - Spanish",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_for_married_couples",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Married Couples",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_for_married_couples",
        "blessing_household",
        "Prayer for Married Couples",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_for_migrant_children",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Migrant Children",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_for_migrant_children",
        "blessing_household",
        "Prayer for Migrant Children",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_for_those_hoping_to_conceive_or_adopt_a_child",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Those Hoping to Conceive or Adopt a Child",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_for_those_hoping_to_conceive_or_adopt_a_child",
        "blessing_household",
        "Prayer for Those Hoping to Conceive or Adopt a Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_in_defense_of_marriage",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer in Defense of Marriage",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_in_defense_of_marriage",
        "blessing_household",
        "Prayer in Defense of Marriage",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_of_a_couple_on_the_anniversary_of_marriage",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer of a Couple on the Anniversary of Marriage",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_of_a_couple_on_the_anniversary_of_marriage",
        "blessing_household",
        "Prayer of a Couple on the Anniversary of Marriage",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_on_bringing_a_child_into_the_home",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer on Bringing a Child into the Home",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_on_bringing_a_child_into_the_home",
        "blessing_household",
        "Prayer on Bringing a Child into the Home",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_prayer_to_care_for_our_common_home",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Care for Our Common Home",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_to_care_for_our_common_home",
        "blessing_household",
        "Prayer to Care for Our Common Home",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_thank_you_for_creating_the_children_of_the_world",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Thank You for Creating the Children of the World",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_thank_you_for_creating_the_children_of_the_world",
        "blessing_household",
        "Thank You for Creating the Children of the World",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_thank_you_for_creating_the_children_of_the_world_spanish",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Thank You for Creating the Children of the World - Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_thank_you_for_creating_the_children_of_the_world_spanish",
        "blessing_household",
        "Thank You for Creating the Children of the World - Spanish",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "en_thanksgiving_for_a_newborn_or_newly_adopted_young_child",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "Thanksgiving for a Newborn or Newly Adopted Young Child",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Household Blessings and Prayers",
        JP: "",
        LA: ""
      },
      tags: [
        "en_thanksgiving_for_a_newborn_or_newly_adopted_young_child",
        "blessing_household",
        "Thanksgiving for a Newborn or Newly Adopted Young Child",
        "Household Blessings and Prayers"
      ]
    },
    {
      id: "la_virginum_custos",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Virginum Custos"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ioseph"
      },
      tags: [
        "la_virginum_custos",
        "blessing_household",
        "Virginum Custos",
        "Ioseph"
      ]
    },
    {
      id: "jp_子とものための祈り",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "子どものための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_子とものための祈り",
        "blessing_household",
        "子どものための祈り",
        "日々の祈り"
      ]
    },
    {
      id: "jp_家族の祈り",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "家族の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_家族の祈り",
        "blessing_household",
        "家族の祈り",
        "日々の祈り"
      ]
    },
    {
      id: "jp_父母のための祈り",
      category: "blessing_household",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "父母のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_父母のための祈り",
        "blessing_household",
        "父母のための祈り",
        "日々の祈り"
      ]
    },
    {
      id: "kr_30_194",
      category: "blessing_household",
      titles: {
        KR: "가정 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_194",
        "blessing_household",
        "가정 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_25_174",
      category: "blessing_household",
      titles: {
        KR: "가정을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "가정",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_25_174",
        "blessing_household",
        "가정을 위한 기도",
        "가정"
      ]
    },
    {
      id: "kr_6_54",
      category: "blessing_household",
      titles: {
        KR: "가정을 위한 기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_54",
        "blessing_household",
        "가정을 위한 기도 1",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_6_55",
      category: "blessing_household",
      titles: {
        KR: "가정을 위한 기도 2",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_55",
        "blessing_household",
        "가정을 위한 기도 2",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_25_175",
      category: "blessing_household",
      titles: {
        KR: "가족의 안전을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "가정",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_25_175",
        "blessing_household",
        "가족의 안전을 위한 기도",
        "가정"
      ]
    },
    {
      id: "kr_20_151",
      category: "blessing_household",
      titles: {
        KR: "갈등을 겪고 있는 부부의(부부를 위한) 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부부",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_20_151",
        "blessing_household",
        "갈등을 겪고 있는 부부의(부부를 위한) 기도",
        "부부"
      ]
    },
    {
      id: "kr_30_208",
      category: "blessing_household",
      titles: {
        KR: "거동하지 못하는 노인 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_208",
        "blessing_household",
        "거동하지 못하는 노인 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_20_149",
      category: "blessing_household",
      titles: {
        KR: "결혼기념일에 바치는 부부의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부부",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_20_149",
        "blessing_household",
        "결혼기념일에 바치는 부부의 기도",
        "부부"
      ]
    },
    {
      id: "kr_30_198",
      category: "blessing_household",
      titles: {
        KR: "공장, 사무실, 상점 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_198",
        "blessing_household",
        "공장, 사무실, 상점 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_210",
      category: "blessing_household",
      titles: {
        KR: "교리 교사 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_210",
        "blessing_household",
        "교리 교사 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_211",
      category: "blessing_household",
      titles: {
        KR: "교리 교육이나 기도 모임 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_211",
        "blessing_household",
        "교리 교육이나 기도 모임 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_199",
      category: "blessing_household",
      titles: {
        KR: "교통수단 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_199",
        "blessing_household",
        "교통수단 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_29_193",
      category: "blessing_household",
      titles: {
        KR: "무덤 축복",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_29_193",
        "blessing_household",
        "무덤 축복",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      id: "kr_19_144",
      category: "blessing_household",
      titles: {
        KR: "미래의 배우자를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "혼인",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_19_144",
        "blessing_household",
        "미래의 배우자를 위한 기도",
        "혼인"
      ]
    },
    {
      id: "kr_30_201",
      category: "blessing_household",
      titles: {
        KR: "미사 밖에서 거행하는 성수 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_201",
        "blessing_household",
        "미사 밖에서 거행하는 성수 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_23_168",
      category: "blessing_household",
      titles: {
        KR: "부모를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부모",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_23_168",
        "blessing_household",
        "부모를 위한 기도",
        "부모"
      ]
    },
    {
      id: "kr_6_56",
      category: "blessing_household",
      titles: {
        KR: "부모를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_56",
        "blessing_household",
        "부모를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_30_203",
      category: "blessing_household",
      titles: {
        KR: "부부 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_203",
        "blessing_household",
        "부부 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_20_150",
      category: "blessing_household",
      titles: {
        KR: "부부가 하는 매일의 축복",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부부",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_20_150",
        "blessing_household",
        "부부가 하는 매일의 축복",
        "부부"
      ]
    },
    {
      id: "kr_6_58",
      category: "blessing_household",
      titles: {
        KR: "부부의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_58",
        "blessing_household",
        "부부의 기도",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_30_209",
      category: "blessing_household",
      titles: {
        KR: "부활 계란 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_209",
        "blessing_household",
        "부활 계란 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_197",
      category: "blessing_household",
      titles: {
        KR: "새 집 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_197",
        "blessing_household",
        "새 집 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_21_156",
      category: "blessing_household",
      titles: {
        KR: "새로 맞이하는 자녀를 위한 축복 (출산/입양)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "임신,출산,입양",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_21_156",
        "blessing_household",
        "새로 맞이하는 자녀를 위한 축복 (출산/입양)",
        "임신,출산,입양"
      ]
    },
    {
      id: "kr_30_200",
      category: "blessing_household",
      titles: {
        KR: "생업 관련 기기 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_200",
        "blessing_household",
        "생업 관련 기기 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_22_162",
      category: "blessing_household",
      titles: {
        KR: "성인이 되는 자녀를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_162",
        "blessing_household",
        "성인이 되는 자녀를 위한 기도",
        "자녀"
      ]
    },
    {
      id: "kr_6_63",
      category: "blessing_household",
      titles: {
        KR: "세상을 떠난 부모를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_63",
        "blessing_household",
        "세상을 떠난 부모를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_30_202",
      category: "blessing_household",
      titles: {
        KR: "신심 증진을 위한 성물 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_202",
        "blessing_household",
        "신심 증진을 위한 성물 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_19_146",
      category: "blessing_household",
      titles: {
        KR: "신혼부부의 기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "혼인",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_19_146",
        "blessing_household",
        "신혼부부의 기도 1",
        "혼인"
      ]
    },
    {
      id: "kr_19_147",
      category: "blessing_household",
      titles: {
        KR: "신혼부부의 기도 2",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "혼인",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_19_147",
        "blessing_household",
        "신혼부부의 기도 2",
        "혼인"
      ]
    },
    {
      id: "kr_30_205",
      category: "blessing_household",
      titles: {
        KR: "아직 세례 받지 못한 어린이 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_205",
        "blessing_household",
        "아직 세례 받지 못한 어린이 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_25_176",
      category: "blessing_household",
      titles: {
        KR: "아픈 가족을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "가정",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_25_176",
        "blessing_household",
        "아픈 가족을 위한 기도",
        "가정"
      ]
    },
    {
      id: "kr_30_195",
      category: "blessing_household",
      titles: {
        KR: "어른 병자 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_195",
        "blessing_household",
        "어른 병자 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_196",
      category: "blessing_household",
      titles: {
        KR: "어린이 병자 축복 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_196",
        "blessing_household",
        "어린이 병자 축복 예식",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_22_167",
      category: "blessing_household",
      titles: {
        KR: "어린이 봉사자의 기도 (복사단, 전례단, 성가대 등)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_167",
        "blessing_household",
        "어린이 봉사자의 기도 (복사단, 전례단, 성가대 등)",
        "자녀"
      ]
    },
    {
      id: "kr_20_152",
      category: "blessing_household",
      titles: {
        KR: "영명 축일에 바치는 부부의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부부",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_20_152",
        "blessing_household",
        "영명 축일에 바치는 부부의 기도",
        "부부"
      ]
    },
    {
      id: "kr_25_177",
      category: "blessing_household",
      titles: {
        KR: "위기를 겪고 있는 가정의(가정을 위한) 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "가정",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_25_177",
        "blessing_household",
        "위기를 겪고 있는 가정의(가정을 위한) 기도",
        "가정"
      ]
    },
    {
      id: "kr_30_204",
      category: "blessing_household",
      titles: {
        KR: "이미 세례 받은 어린이 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_204",
        "blessing_household",
        "이미 세례 받은 어린이 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_21_155",
      category: "blessing_household",
      titles: {
        KR: "자녀를 낳은 가정의 감사기도 (출산/입양)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "임신,출산,입양",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_21_155",
        "blessing_household",
        "자녀를 낳은 가정의 감사기도 (출산/입양)",
        "임신,출산,입양"
      ]
    },
    {
      id: "kr_21_153",
      category: "blessing_household",
      titles: {
        KR: "자녀를 바라는 기도 (임신/입양)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "임신,출산,입양",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_21_153",
        "blessing_household",
        "자녀를 바라는 기도 (임신/입양)",
        "임신,출산,입양"
      ]
    },
    {
      id: "kr_6_57",
      category: "blessing_household",
      titles: {
        KR: "자녀를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_57",
        "blessing_household",
        "자녀를 위한 기도",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_22_157",
      category: "blessing_household",
      titles: {
        KR: "자녀를 위한 기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_157",
        "blessing_household",
        "자녀를 위한 기도 1",
        "자녀"
      ]
    },
    {
      id: "kr_22_158",
      category: "blessing_household",
      titles: {
        KR: "자녀를 위한 기도 2",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_158",
        "blessing_household",
        "자녀를 위한 기도 2",
        "자녀"
      ]
    },
    {
      id: "kr_24_171",
      category: "blessing_household",
      titles: {
        KR: "자녀를 잃은 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "슬퍼하는 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_24_171",
        "blessing_household",
        "자녀를 잃은 이들을 위한 기도",
        "슬퍼하는 이들을 위한 기도"
      ]
    },
    {
      id: "kr_22_159",
      category: "blessing_household",
      titles: {
        KR: "자녀에게 하는 매일의 축복",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_159",
        "blessing_household",
        "자녀에게 하는 매일의 축복",
        "자녀"
      ]
    },
    {
      id: "kr_22_160",
      category: "blessing_household",
      titles: {
        KR: "자녀의 생일에 하는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_160",
        "blessing_household",
        "자녀의 생일에 하는 기도",
        "자녀"
      ]
    },
    {
      id: "kr_22_161",
      category: "blessing_household",
      titles: {
        KR: "자녀의 영명 축일에 하는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "자녀",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_22_161",
        "blessing_household",
        "자녀의 영명 축일에 하는 기도",
        "자녀"
      ]
    },
    {
      id: "kr_23_169",
      category: "blessing_household",
      titles: {
        KR: "조부모를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "부모",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_23_169",
        "blessing_household",
        "조부모를 위한 기도",
        "부모"
      ]
    },
    {
      id: "kr_30_212",
      category: "blessing_household",
      titles: {
        KR: "출발하는 순례자 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_212",
        "blessing_household",
        "출발하는 순례자 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_206",
      category: "blessing_household",
      titles: {
        KR: "출산 전 어머니 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_206",
        "blessing_household",
        "출산 전 어머니 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_30_207",
      category: "blessing_household",
      titles: {
        KR: "출산 후 어머니 축복 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅳ. 축복 예식과 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_30_207",
        "blessing_household",
        "출산 후 어머니 축복 기도",
        "Ⅳ. 축복 예식과 기도"
      ]
    },
    {
      id: "kr_21_154",
      category: "blessing_household",
      titles: {
        KR: "태아를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "임신,출산,입양",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_21_154",
        "blessing_household",
        "태아를 위한 기도",
        "임신,출산,입양"
      ]
    },
    {
      id: "kr_19_145",
      category: "blessing_household",
      titles: {
        KR: "혼인을 준비하며 바치는 기도(약혼자의 기도)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "혼인",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_19_145",
        "blessing_household",
        "혼인을 준비하며 바치는 기도(약혼자의 기도)",
        "혼인"
      ]
    },
    {
      id: "kr_19_148",
      category: "blessing_household",
      titles: {
        KR: "혼인하는 이들(가족, 지인 등)을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "혼인",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_19_148",
        "blessing_household",
        "혼인하는 이들(가족, 지인 등)을 위한 기도",
        "혼인"
      ]
    },
    {
      id: "kr_10_99",
      category: "funeral",
      titles: {
        KR: "- 납골 또는 자연장(세상을 떠난 이들)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_99",
        "funeral",
        "- 납골 또는 자연장(세상을 떠난 이들)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_74",
      category: "funeral",
      titles: {
        KR: "- 성인 호칭 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_74",
        "funeral",
        "- 성인 호칭 기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_98",
      category: "funeral",
      titles: {
        KR: "- 쇄골 또는 습골(욥의 기도)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_98",
        "funeral",
        "- 쇄골 또는 습골(욥의 기도)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_80",
      category: "funeral",
      titles: {
        KR: "- 시편 113 / 마침기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_80",
        "funeral",
        "- 시편 113 / 마침기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_86",
      category: "funeral",
      titles: {
        KR: "- 시편 117",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_86",
        "funeral",
        "- 시편 117",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_90",
      category: "funeral",
      titles: {
        KR: "- 시편 118/마침기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_90",
        "funeral",
        "- 시편 118/마침기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_72",
      category: "funeral",
      titles: {
        KR: "- 시편 129(130)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_72",
        "funeral",
        "- 시편 129(130)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_77",
      category: "funeral",
      titles: {
        KR: "- 시편 129(130)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_77",
        "funeral",
        "- 시편 129(130)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_83",
      category: "funeral",
      titles: {
        KR: "- 시편 22(23) / 마침기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_83",
        "funeral",
        "- 시편 22(23) / 마침기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_89",
      category: "funeral",
      titles: {
        KR: "- 시편 24",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_89",
        "funeral",
        "- 시편 24",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_87",
      category: "funeral",
      titles: {
        KR: "- 시편 41",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_87",
        "funeral",
        "- 시편 41",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_73",
      category: "funeral",
      titles: {
        KR: "- 시편 50(51),3-21",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_73",
        "funeral",
        "- 시편 50(51),3-21",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_71",
      category: "funeral",
      titles: {
        KR: "- 시편 62(63),2-8",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_71",
        "funeral",
        "- 시편 62(63),2-8",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_84",
      category: "funeral",
      titles: {
        KR: "- 시편 83(84)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_84",
        "funeral",
        "- 시편 83(84)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_88",
      category: "funeral",
      titles: {
        KR: "- 시편 92",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_88",
        "funeral",
        "- 시편 92",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_82",
      category: "funeral",
      titles: {
        KR: "- 시편41(42),2-3.5;42(43),3-5",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_82",
        "funeral",
        "- 시편41(42),2-3.5;42(43),3-5",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_78",
      category: "funeral",
      titles: {
        KR: "- 시편50(51),3-21",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_78",
        "funeral",
        "- 시편50(51),3-21",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_94",
      category: "funeral",
      titles: {
        KR: "- 유가족을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_94",
        "funeral",
        "- 유가족을 위한 기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_92",
      category: "funeral",
      titles: {
        KR: "- 자비송",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_92",
        "funeral",
        "- 자비송",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_76",
      category: "funeral",
      titles: {
        KR: "- 주님의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_76",
        "funeral",
        "- 주님의 기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_95",
      category: "funeral",
      titles: {
        KR: "- 즈카르야의 노래",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_95",
        "funeral",
        "- 즈카르야의 노래",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_75",
      category: "funeral",
      titles: {
        KR: "- 찬미가",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_75",
        "funeral",
        "- 찬미가",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_93",
      category: "funeral",
      titles: {
        KR: "- 청원기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_93",
        "funeral",
        "- 청원기도",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_97",
      category: "funeral",
      titles: {
        KR: "- 화답송",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_97",
        "funeral",
        "- 화답송",
        "상장 예식"
      ]
    },
    {
      id: "la_in_paradiso",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "In Paradiso"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
        "la_in_paradiso",
        "funeral",
        "In Paradiso",
        "Angeli"
      ]
    },
    {
      id: "en_prayer_to_end_the_use_of_the_death_penalty",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to End the Use of the Death Penalty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Prayers for Death and Dying",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayer_to_end_the_use_of_the_death_penalty",
        "funeral",
        "Prayer to End the Use of the Death Penalty",
        "Prayers for Death and Dying"
      ]
    },
    {
      id: "en_prayers_at_the_death_of_a_baptized_child",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers at the Death of a Baptized Child",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Prayers for Death and Dying",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayers_at_the_death_of_a_baptized_child",
        "funeral",
        "Prayers at the Death of a Baptized Child",
        "Prayers for Death and Dying"
      ]
    },
    {
      id: "en_prayers_for_death_and_dying",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for Death and Dying",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Prayers for Death and Dying",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayers_for_death_and_dying",
        "funeral",
        "Prayers for Death and Dying"
      ]
    },
    {
      id: "en_prayers_for_mourners",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for Mourners",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Prayers for Death and Dying",
        JP: "",
        LA: ""
      },
      tags: [
        "en_prayers_for_mourners",
        "funeral",
        "Prayers for Mourners",
        "Prayers for Death and Dying"
      ]
    },
    {
      id: "jp_病人のための祈り",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "病人のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_病人のための祈り",
        "funeral",
        "病人のための祈り",
        "日々の祈り"
      ]
    },
    {
      id: "jp_病気_怪我をした時",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "病気・怪我をした時",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_病気_怪我をした時",
        "funeral",
        "病気・怪我をした時",
        "日々の祈り"
      ]
    },
    {
      id: "jp_病気_怪我をした時の祈り",
      category: "funeral",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "病気・怪我をした時の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
        "jp_病気_怪我をした時の祈り",
        "funeral",
        "病気・怪我をした時の祈り",
        "日々の祈り"
      ]
    },
    {
      id: "kr_10_79",
      category: "funeral",
      titles: {
        KR: "염습과 입관",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_79",
        "funeral",
        "염습과 입관",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_218",
      category: "funeral",
      titles: {
        KR: "우제",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_218",
        "funeral",
        "우제",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_85",
      category: "funeral",
      titles: {
        KR: "운구",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_85",
        "funeral",
        "운구",
        "상장 예식"
      ]
    },
    {
      id: "eternal_rest",
      category: "funeral",
      titles: {
        KR: "위령 기도",
        VN: "Nghỉ yên muôn đời",
        EN: "Eternal Rest",
        JP: "死者のための祈り",
        LA: "Requiem Aeternam"
      },
      texts: {
        KR: "주님, 세상을 떠난 이들에게 영원한 안식을 주소서. 영원한 빛을 그들에게 비추소서. 세상을 떠난 이들이 하느님의 자비로 평화의 안식을 얻게 하소서. 아멘.",
        VN: "Lạy Chúa, xin cho các linh hồn được nghỉ yên muôn đời, và cho ánh sáng ngàn thu chiếu soi trên các linh hồn ấy. Xin cho các linh hồn được nghỉ yên muôn đời. Amen.",
        EN: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.",
        JP: "主よ、亡くなった人々に永遠の安息を与え、絶えざる光で照らしてください。神のいつくしみによって、安らかに憩うことができますように。アーメン。",
        LA: "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen."
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
      id: "kr_6_138",
      category: "funeral",
      titles: {
        KR: "위령 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_6_138",
        "funeral",
        "위령 기도",
        "여러 가지 기도"
      ]
    },
    {
      id: "kr_10_33",
      category: "funeral",
      titles: {
        KR: "위령기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_33",
        "funeral",
        "위령기도 1",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_69",
      category: "funeral",
      titles: {
        KR: "위령기도 2(짧은 위령 기도)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_69",
        "funeral",
        "위령기도 2(짧은 위령 기도)",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_215",
      category: "funeral",
      titles: {
        KR: "임종과 운명",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_215",
        "funeral",
        "임종과 운명",
        "상장 예식"
      ]
    },
    {
      id: "kr_29_191",
      category: "funeral",
      titles: {
        KR: "임종과 운명",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_29_191",
        "funeral",
        "임종과 운명",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      id: "kr_10_81",
      category: "funeral",
      titles: {
        KR: "출관",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_81",
        "funeral",
        "출관",
        "상장 예식"
      ]
    },
    {
      id: "kr_10_91",
      category: "funeral",
      titles: {
        KR: "하관",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_91",
        "funeral",
        "하관",
        "상장 예식"
      ]
    },
    {
      id: "kr_29_190",
      category: "funeral",
      titles: {
        KR: "하관",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_29_190",
        "funeral",
        "하관",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      id: "kr_10_96",
      category: "funeral",
      titles: {
        KR: "화장",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "상장 예식",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_10_96",
        "funeral",
        "화장",
        "상장 예식"
      ]
    },
    {
      id: "kr_29_192",
      category: "funeral",
      titles: {
        KR: "화장",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "Ⅲ. 성사(예식)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_29_192",
        "funeral",
        "화장",
        "Ⅲ. 성사(예식)"
      ]
    },
    {
      id: "kr_6_183",
      category: "national",
      titles: {
        KR: "2025년 희년 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_216",
      category: "national",
      titles: {
        KR: "2027 서울 세계청년대회 공식기도문",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_concluding_prayer_go_and_make_disciples",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Concluding Prayer - Go and Make Disciples",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_prayer_for_life",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Prayer for Life",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_prayer_for_the_people_of_syria",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Prayer for the People of Syria",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_prayer_to_our_lady_of_guadalupe",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Prayer to Our Lady of Guadalupe",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_prayer_to_st_juan_diego",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Prayer to St. Juan Diego",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_prayer_to_the_creator",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Prayer to the Creator",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_a_soldier_s_prayers",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "A Soldier's Prayers",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_act_of_consecration_to_the_immaculate_heart_of_mary_for_russia_and_ukr",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Act of Consecration to the Immaculate Heart of Mary for Russia and Ukraine",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_act_of_faith_hope_and_love",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Act of Faith, Hope, and Love",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_actus_caritatis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Actus Caritatis"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_actus_fidei",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Actus Fidei"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_actus_reparationis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Actus Reparationis"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_actus_spei",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Actus Spei"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_ad_sanctum_raphaelem_archangelum",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ad Sanctum Raphaelem Archangelum"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_alma_redemptoris_mater",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Alma Redemptoris Mater"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "la_ave_maris_stella",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ave Maris Stella"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "la_ave_regina_caelorum",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Ave Regina Caelorum"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "en_cchd_2016_prayer_card",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "CCHD 2016 Prayer Card",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_cchd_2016_prayer_card_in_spanish",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "CCHD 2016 Prayer Card in Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_covid_19_prayer_card",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "COVID-19 Prayer Card",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_care_for_god_s_creation_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Care for God’s Creation Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_catechist_s_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Catechist’s Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_chaplet_of_divine_mercy",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Chaplet of Divine Mercy",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_civilize_it_advent_prayer_to_be_like_mary",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Civilize It: Advent Prayer to be like Mary",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_civilize_it_an_advent_prayer_to_see_jesus_in_others",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Civilize It: An Advent Prayer to See Jesus in Others",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_commemoratio_archangelorm",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Archangelorm"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_commemoratio_sancti_antonii",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Antonii"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_commemoratio_sancti_benedicti",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Benedicti"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_commemoratio_sancti_francisci_assisiensis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Francisci Assisiensis"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_commemoratio_sancti_gabrielis_archangeli",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Gabrielis Archangeli"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_commemoratio_sancti_michaelis_archangeli",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Michaelis Archangeli"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_commemoratio_sancti_raphaelis_archangeli",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Commemoratio Sancti Raphaelis Archangeli"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "en_covid_19_a_prayer_of_solidarity",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Covid-19: A Prayer of Solidarity",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_create_in_me_a_love_ever_more_open",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Create in me a Love ever more open",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_deus_protector_noster",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Deus, Protector Noster"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_deus_in_adjutorium_meum_intende",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Deus, in Adjutorium Meum Intende"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "en_dignity_of_work_and_the_rights_of_workers",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Dignity of Work and the Rights of Workers",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_divine_praises",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Divine Praises",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "Blessed be God.\nBlessed be his holy Name. \nBlessed be Jesus Christ, true God and true man.\nBlessed be the Name of Jesus.\nBlessed be his most Sacred Heart.\nBlessed be his most Precious Blood.\nBlessed be Jesus in the most holy Sacrament of the altar.\nBlessed be the Holy Spirit, the Paraclete.\nBlessed be the great Mother of God, Mary most holy.\nBlessed be her holy and Immaculate Conception.\nBlessed be her glorious Assumption.\nBlessed be the name of Mary, Virgin and Mother.\nBlessed be Saint Joseph, her most chaste Spouse. \nBlessed be God in his Angels and in his Saints.",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Basic Prayers",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_domine_iesu_christe_in_unione",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Domine Iesu Christe, In Unione"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_domine_iesu_christe_qui_mariae_et_ioseph_subditus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Domine Iesu Christe, qui Mariae et Ioseph subditus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_flos_carmeli",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Flos Carmeli"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "en_for_deceased_veterans",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "For Deceased Veterans",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "000.the_salve_regina",
      category: "common",
      titles: {
        KR: "성모 찬송 (묵주 기도 성월)",
        VN: "Kinh Lạy Nữ Vương",
        EN: "Hail, Holy Queen (The Salve Regina)",
        JP: "元后あわれみの母（Salve Regina）",
        LA: "Salve Regina"
      },
      texts: {
        KR: "<b>○</b> 모후이시며 사랑이 넘친 어머니,\n우리의 생명, 기쁨, 희망이시여,\n<b>●</b> 당신 우러러 하와의 그 자손들이\n눈물을 흘리며 부르짖나이다,\n슬픔의 골짜기에서.\n<b>○</b> 우리들의 보호자 성모님,\n불쌍한 저희를\n인자로운 눈으로 굽어보소서.\n<b>●</b> 귀양살이 끝날 때에\n당신의 아들 우리 주 예수님 뵙게 하소서.\n너그러우시고, 자애로우시며\n오! 아름다우신 동정 마리아님.\n<b>○</b> 천주의 성모님, 저희를 위하여 빌어 주시어\n<b>●</b> 그리스도께서 약속하신 영원한 생명을 얻게 하소서.\n ✚ 기도합시다.\n하느님,\n외아드님께서 삶과 죽음과 부활로\n저희에게 영원한 구원을 마련해 주셨나이다.\n복되신 동정 마리아와 함께 이 신비를 묵상하며\n묵주 기도를 바치오니\n저희가 그 가르침을 따라\n영원한 생명을 얻게 하소서.\n우리 주 그리스도를 통하여 비나이다.\n<b>◎</b> 아멘.",
        VN: "Lạy Nữ Vương, Mẹ nhân lành,\nlàm cho chúng con được sống, được vui, được cậy, thân lạy Mẹ.\nChúng con, con cháu E-và,\nở chốn khách đầy, kêu đến cùng Bà,\nchúng con ở nơi khóc lóc than thở kêu khẩn Bà thương.\nHỡi ôi!\nBà là Chúa bầu chúng con,\nxin ghé mặt thương xem chúng con.\nĐến sau khỏi đày,\nxin cho chúng con được thấy Đức Chúa Giêsu,\nCon lòng Bà gồm phúc lạ.\nÔi khoan thay! Nhân thay! Dịu thay!\nThánh Maria trọn đời đồng trinh.\n Amen.",
        EN: "Hail, Holy Queen, Mother of Mercy,\nour life, our sweetness and our hope.\nTo thee do we cry, \npoor banished children of Eve.\nTo thee do we send up our sighs,\nmourning and weeping in this valley of tears.\nTurn then, most gracious advocate,\nthine eyes of mercy toward us,\nand after this our exile\nshow unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving,\nO sweet Virgin Mary.",
        JP: "元后、あわれみの母、\nわれらのいのち、喜び、希望。\n旅路からあなたに叫ぶエバの子、\nなげきながら、泣きながらも、\n涙の谷にあなたを慕う。\nわれらのためにとりなす方、\nあわれみの目をわれらに注ぎ、\n尊いあなたの子イエスを\n旅路の果てに示してください。\nおお、いつくしみ、恵み溢れる、\n喜びのおとめマリア。",
        LA: "Salve, Regina, Mater misericordiae,\nvita, dulcedo, et spes nostra, salve.\nad te clamamus\nexsules filii Hevae,\nad te suspiramus, gementes et flentes\nin hac lacrimarum valle.\nEia, ergo, advocata nostra, illos tuos\nmisericordes oculos ad nos converte;\net Jesum, benedictum fructum ventris tui,\nnobis post hoc exsilium ostende.\nO clemens, O pia, O dulcis Virgo Maria.\n(Ora pro nobis sancta Dei Genetrix.\nUt digni efficiamur promissionibus Christi.\nOremus.\nOmnipotens sempiterne Deus,\nqui gloriosae Virginis Matris Mariae corpus et animam,\nut dignum Filii tui habitaculum effici mereretur,\nSpiritu Sancto  cooperante praeparasti:\nda, ut cuius commemoratione laetamur;\neius pia intercessione,\nab instantibus malis,\net a morte perpetua liberemur.\nPer eundem Christum Dominum nostrum.\nAmen.)"
      },
      sourceCategory: {
        KR: "성월기도; 묵주기도",
        VN: "Lần Hạt Mân Côi",
        EN: "Basic Prayers",
        JP: "日々の祈り",
        LA: "Generalia"
      },
      tags: [
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
        "日々の祈り"
      ]
    },
    {
      id: "en_health_care_pulpit_announcement_and_prayer_pdf",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Health Care Pulpit Announcement and Prayer PDF",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_health_care_pulpit_announcement_and_prayer_pdf_in_spanish",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Health Care Pulpit Announcement and Prayer PDF in Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_hear_us_o_god",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Hear Us, O God",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_help_me_to_listen_to_the_voice_of_creation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Help Me to Listen to the Voice of Creation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_help_us_build_communities_in_god_s_vision_of_justice",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Help Us Build Communities in God's Vision of Justice",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_help_us_to_love_like_the_good_samaritan",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Help Us to Love Like the Good Samaritan",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_hope_amidst_dark_clouds",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Hope Amidst Dark Clouds",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_how_to_pray_the_chaplet_of_divine_mercy",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "How To Pray the Chaplet of Divine Mercy",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_iesu_dulcis_memoria",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Iesu Dulcis Memoria"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_iesu_meus_miserere",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Iesu Meus, Miserere"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "en_intercessions_for_the_marginalized",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Intercessions for the Marginalized",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_intercessory_prayers_the_marginalized",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Intercessory Prayers: The Marginalized",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_inviolata",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Inviolata"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "vn_kinh_tin_cay_men",
      category: "national",
      titles: {
        KR: "",
        VN: "Kinh Tin - Cậy - Mến",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_lenten_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Lenten Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_lenten_prayer_for_civility",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Lenten Prayer for Civility",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_lenten_prayers_unemployment_and_poverty",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Lenten Prayers - Unemployment and Poverty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_letania_por_la_libertad",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Letanía por la Libertad",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_life_and_dignity_of_the_human_person_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Life and Dignity of the Human Person Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_magnificat",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Magnificat"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "en_memorare",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Memorare",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_memorare",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Memorare"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "en_morning_offering",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Morning Offering",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "Basic Prayers",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_national_migration_week_a_collected_book_of_prayers_for_migrants",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "National Migration Week: A Collected Book of Prayers for Migrants",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_nativitas_christi_novena_sancti_andreae",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Nativitas Christi Novena Sancti Andreae"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "en_novena_for_faithful_citizenship",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Novena for Faithful Citizenship",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_novena_for_the_solemnity_of_saint_joseph",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Novena for the Solemnity of Saint Joseph",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_nunc_dimittis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Nunc Dimittis"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_o_bone_iesu",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Bone Iesu"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_o_caelestis_medice",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Caelestis Medice"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_o_creator_sancte_spiritus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Creator Sancte Spiritus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Spiritus Sanctus"
      },
      tags: [
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
      id: "la_o_divi_amoris_victima",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Divi Amoris Victima"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_o_fortitudo_dei",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Fortitudo Dei"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_o_princeps_caelestis_militiae",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Princeps Caelestis Militiae"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "en_o_sacrum_convivium",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "O Sacrum Convivium",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_o_sancte_spiritus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "O Sancte Spiritus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Spiritus Sanctus"
      },
      tags: [
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
      id: "la_obsecro_te_angelice_spiritus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Obsecro Te, Angelice Spiritus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "en_oracion_para_ciudadanos_fieles",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oracion Para Ciudadanos Fieles",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_de_los_fieles_por_la_jornada_de_oracion_por_la_paz_en_nuestras",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración De Los Fieles Por La Jornada De Oración Por La Paz En Nuestras Comunidades",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_despues_de_un_dia_de_elecciones",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración despues de un día de elecciones",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_para_antes_de_unas_elecciones",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración para Antes de Unas Elecciones",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_para_abordar_el_pecado_del_racismo",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración para abordar el pecado del racismo",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_para_cuidar_de_nuestra_casa_comun",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración para cuidar de nuestra casa común",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_para_llegar_a_ser_buenos_mayordomos_de_la_creacion_de_dios",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración para llegar a ser buenos mayordomos de la creación de Dios",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_para_sanar_la_division_racial",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración para sanar la división racial",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_por_el_papa_benedicto_xvi",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración por el Papa Benedicto XVI",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_por_el_sinodo_sobre_la_sinodalidad",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración por el Sínodo sobre la Sinodalidad",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_oracion_por_la_unidad_para_superar_las_divisiones",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Oración por la unidad, para superar las divisiones",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_orando_como_un_ciudadano_fiel",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Orando Como Un Ciudadano Fiel",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_oratio_ad_angelum_custodem",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Ad Angelum Custodem"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_oratio_finalis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Finalis"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Coronula Divinae Misericordiae"
      },
      tags: [
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
      id: "la_oratio_iesu",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Iesu"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_oratio_incipiens",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Incipiens"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Coronula Divinae Misericordiae"
      },
      tags: [
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
      id: "la_oratio_pro_propagatione_fidei",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Pro Propagatione Fidei"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Spiritus Sanctus"
      },
      tags: [
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
      id: "la_oratio_sagittae_aureae",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Sagittae Aureae"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_oratio_sancti_augustini",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Sancti Augustini"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_oratio_sancti_benedicti",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio Sancti Benedicti"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_oratio_ad_dominum_nostrum_in_cruce",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Oratio ad Dominum Nostrum in Cruce"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "la_pater_aeterne",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Pater Aeterne"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Coronula Divinae Misericordiae"
      },
      tags: [
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
      id: "la_petitiones_sancti_augustini",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Petitiones Sancti Augustini"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_mercy",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis' Prayer for Mercy",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_at_the_way_of_the_cross",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer at the Way of the Cross",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_peace",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer for Peace",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_peace_and_protection_from_violence_and_from_te",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer for Peace and Protection from Violence and from Terrorism",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_workers",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer for Workers",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_the_immaculate_conception",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer for the Immaculate Conception",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_pope_francis_prayer_for_the_joy_of_the_gospel",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pope Francis’ Prayer for the Joy of the Gospel",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_after_an_election",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer After an Election",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_against_racism",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Against Racism",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_against_racism_prayer_card_english",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Against Racism Prayer Card (English)",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_against_racism_prayer_card_spanish",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Against Racism Prayer Card (Spanish)",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_before_an_election",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Before an Election",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_card_for_day_of_prayer_for_persecuted_christians_november_26_20",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Card for Day of Prayer for Persecuted Christians, November 26 2017",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_card_for_the_anniversaries_of_hiroshima_and_nagasaki",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Card for the Anniversaries of Hiroshima and Nagasaki",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_card_of_syria_commemorating_visit_from_his_beatitude_gregorios_",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Card of Syria Commemorating Visit from His Beatitude Gregorios III",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_during_difficult_economic_times",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer During Difficult Economic Times",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_from_a_canticle_by_saint_john_of_the_cross",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer From a Canticle by Saint John of the Cross",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_inspired_by_pope_francis_laudate_deum_praise_god",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Inspired by Pope Francis' Laudate Deum (Praise God)",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_service_for_national_day_of_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Service for National Day of Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_service_to_put_two_feet_of_love_in_action",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Service to Put Two Feet of Love in Action",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_service_to_be_disciples_on_mission",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer Service to be Disciples on Mission",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_when_gathering_to_meet_or_study",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer When Gathering to Meet or Study",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_basic_rights",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Basic Rights",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_charity_in_truth",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Charity in Truth",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_civic_leaders",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Civic Leaders",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_community",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Community",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_end_of_nuclear_weapons",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for End of Nuclear Weapons",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_families",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Families",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_healing_victims_of_abuse",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Healing Victims of Abuse",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_justice",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Justice",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_labor_day",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Labor Day",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_life_and_dignity",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Life and Dignity",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_memorial_day_last_monday_in_may",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Memorial Day (Last Monday in May)",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_migrant_families",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Migrant Families",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_migrants",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Migrants",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_migrants_and_refugees",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Migrants and Refugees",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_our_troops",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Our Troops",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_peace_in_iraq",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Peace in Iraq",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_peace_in_our_communities_prayer_card_in_english",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Peace in Our Communities Prayer Card in English",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_peace_in_our_communities_prayer_card_in_spanish",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Peace in Our Communities Prayer Card in Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_peace_of_pope_francis",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Peace of Pope Francis",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_pope_benedict_xvi",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Pope Benedict XVI",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_pope_leo_xiv",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Pope Leo XIV",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_priests",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Priests",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_protection_of_conscience_rights_in_health_care",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Protection of Conscience Rights in Health Care",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_safety",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Safety",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_solidarity",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Solidarity",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_students",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Students",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_teachers",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Teachers",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_those_in_poverty",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Those in Poverty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_unity_to_overcome_division",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Unity, to Overcome Division",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_vocations",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Vocations",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_work",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Work",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_youth",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for Youth",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_a_victim_of_accident_or_violence",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for a Victim of Accident or Violence",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_election_of_a_new_pope",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the Election of a New Pope",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_new_evangelization",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the New Evangelization",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_new_year",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the New Year",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_poor",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the Poor",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_protection_of_religious_liberty",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the Protection of Religious Liberty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_for_the_synod_on_synodality",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer for the Synod on Synodality",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_from_a_canticle_by_st_john_of_the_cross",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer from a Canticle by St. John of the Cross",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_in_time_of_financial_difficulties",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer in Time of Financial Difficulties",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_in_times_of_seeking_god_s_will",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer in Times of Seeking God's Will",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_in_times_of_suffering_and_need",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer in Times of Suffering and Need",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_of_the_elderly_pope_saint_john_paul_ii",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer of the Elderly, Pope Saint John Paul II",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_of_the_faithful_for_the_day_of_prayer_for_peace_in_our_communit",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer of the Faithful for the Day of Prayer for Peace in Our Communities",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_on_the_solemnity_of_the_immaculate_conception",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer on the Solemnity of the Immaculate Conception",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_address_the_sin_of_racism",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Address the Sin of Racism",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_be_disciples_and_missionaries",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Be Disciples and Missionaries",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_become_stewards_of_god_s_creation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Become Stewards of God's Creation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_confront_global_poverty",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Confront Global Poverty",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_discern_a_vocation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Discern a Vocation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_end_trafficking",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to End Trafficking",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_heal_racial_division",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Heal Racial Division",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_listen_heal_and_respond",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Listen, Heal and Respond",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_live_the_gospel_be_disciples",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Live the Gospel, Be Disciples",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_overcome_indifference",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Overcome Indifference",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_saint_juan_diego",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Saint Juan Diego",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_your_guardian_angel",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to Your Guardian Angel",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_our_lord_jesus_christ_crucified",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to our Lord Jesus Christ Crucified",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_the_holy_spirit",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to the Holy Spirit",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_the_sacred_heart_of_jesus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayer to the Sacred Heart of Jesus",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_for_peace_in_the_middle_east_2008",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for Peace in the Middle East, 2008",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_for_times_of_trouble",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for Times of Trouble",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_for_vocations",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for Vocations",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_for_the_health_and_dignity_of_the_sick",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers for the Health and Dignity of the Sick",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_in_times_of_seeking_the_will_of_god",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers in Times of Seeking the Will of God",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_in_a_time_of_war",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers in a Time of War",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_on_the_care_of_creation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers on the Care of Creation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayers_to_care_for_creation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Prayers to Care for Creation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_praying_like_a_faithful_citizen",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Praying Like a Faithful Citizen",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_praying_like_a_faithful_citizen_pdf",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Praying Like a Faithful Citizen PDF",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_princeps_gloriosissime",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Princeps Gloriosissime"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "la_pro_dolorosa",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Pro Dolorosa"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Coronula Divinae Misericordiae"
      },
      tags: [
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
      id: "en_pro_life_prayers",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Pro-Life Prayers",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_quinque_orationes_chapleti_sanctae_faciei",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Quinque Orationes Chapleti Sanctae Faciei"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_responsorium_pressi_malorum",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Responsorium Pressi Malorum"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "la_responsorium_si_vis_patronum",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Responsorium Si Vis Patronum"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "en_sample_prayers_for_sudan",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Sample Prayers for Sudan",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_sancte_deus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancte Deus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Coronula Divinae Misericordiae"
      },
      tags: [
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
      id: "la_sancte_michael_archangele",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancte Michael Archangele"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Angeli"
      },
      tags: [
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
      id: "en_scriptural_stations_of_the_cross",
      category: "stations_of_cross",
      titles: {
        KR: "",
        VN: "",
        EN: "Scriptural Stations of the Cross",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_share_the_journey_prayer_service_in_solidarity_with_dreamers_and_migra",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Share the Journey: Prayer Service in Solidarity with Dreamers and Migrants",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_short_prayer_for_vocations",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Short Prayer for Vocations",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_show_us_your_face",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Show Us Your Face",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_si_quaeris_miracula_ite_ad_antonio",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Si Quaeris Miracula, Ite Ad Antonio"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sancti"
      },
      tags: [
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
      id: "en_st_peter_claver_prayer_service",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "St. Peter Claver Prayer Service",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_stations_of_the_cross_for_life",
      category: "stations_of_cross",
      titles: {
        KR: "",
        VN: "",
        EN: "Stations of the Cross for Life",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_sub_tuum_praesidium",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Sub Tuum Praesidium"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "la_surge_domine",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Surge Domine"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Generalia"
      },
      tags: [
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
      id: "la_suscipe_domine",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Suscipe Domine"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Christus"
      },
      tags: [
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
      id: "en_synod_prayer_for_unity",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Synod Prayer for Unity",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_tantum_ergo",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Tantum Ergo",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_thanksgiving_day_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Thanksgiving Day Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_the_o_antiphons_of_advent",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "The 'O Antiphons' of Advent",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_the_jubilee_prayer",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "The Jubilee Prayer",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_the_pope_s_monthly_intentions_for_2026",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "The Pope's Monthly Intentions for 2026",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "la_tota_pulchra_es_maria",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Tota Pulchra Es Maria"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Maria"
      },
      tags: [
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
      id: "la_veni_creator_spiritus",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Veni Creator Spiritus"
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: "Spiritus Sanctus"
      },
      tags: [
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
      id: "en_veterans_day",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Veterans Day",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_via_crucis_oraciones_de_los_fieles",
      category: "stations_of_cross",
      titles: {
        KR: "",
        VN: "",
        EN: "Vía Crucis Oraciones de los Fieles",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_we_are_all_in_god_s_image",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "We Are All in God's Image",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_we_are_all_in_god_s_image_spanish",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "We Are All in God's Image - Spanish",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_while_trouble_is_near_give_them_strength_and_consolation",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "While Trouble is Near, Give Them Strength and Consolation",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_world_youth_day_prayer_for_the_united_states",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "World Youth Day Prayer for the United States",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_your_gaze_is_upon_us",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "Your Gaze is Upon Us",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "en_prayer_to_the_sacred_heart_of_jesus_for_love_and_mercy",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "​Prayer to the Sacred Heart of Jesus for Love and Mercy",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "jp_平和の使徒_となるための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "「平和の使徒」となるための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_津和野の証し人",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "「津和野の証し人」",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_津和野の証し人_の列聖を求める祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "「津和野の証し人」の列聖を求める祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_あたたかさのある教会を願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "あたたかさのある教会を願う祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_お告けの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "お告げの祈り**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_すへてのいのちを守るための_キリスト者の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "すべてのいのちを守るための キリスト者の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_すへてのいのちを守るためのキリスト者の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "すべてのいのちを守るためのキリスト者の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_ともに歩む",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ともに歩む",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_ともに歩むあたたかさのある教会を願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ともに歩むあたたかさのある教会を願う祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_の列聖を求める祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "の列聖を求める祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_ゆるしの秘跡の受け方",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ゆるしの秘跡の受け方",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_アレルヤの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "アレルヤの祈り**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_アウエ_マリアの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "アヴエ・マリアの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_イエスのみ心",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "イエスのみ心",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_イエスのみ心への祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "イエスのみ心への祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_キリストの魂",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "キリストの魂**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_コミュニティのための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "コミュニティのための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_サカリアの賛歌",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ザカリアの賛歌",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_サカリアの賛歌_ルカ1_68_79",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ザカリアの賛歌**ルカ1：68－79",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_シノトスのための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "シノドスのための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_ニケア_コンスタンチノ一フル信条",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "ニケア，コンスタンチノ一プル信条",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_マリアの賛歌",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "マリアの賛歌",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_マリアの賛歌_ルカ1_46_55",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "マリアの賛歌**ルカ1：46－55",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_三姉妹教区のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "三姉妹教区のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_主の十戒",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "主の十戒",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_主よ_わたしをお使いくたさい",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "主よ、わたしをお使いください",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_信徳唱",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "信徳唱",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_元后あわれみの母",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "元后あわれみの母**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_初めの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "初めの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_取り次きを願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "取り次ぎを願う祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_召命のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "召命のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_召命を求める祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "召命を求める祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_司祭のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "司祭のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_司祭のための祈り集",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "司祭のための祈り集",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_司祭のための祈り_日本の教会のために",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "司祭のための祈り（日本の教会のために）",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_困難の時の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "困難の時の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_夕の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "夕の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_大天使聖ミカエルへ",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "大天使聖ミカエルへ",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_大天使聖ミカエルへの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "大天使聖ミカエルへの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_子供のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "子供のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_小教区のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "小教区のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_平和を願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "平和を願う祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_愛徳唱",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "愛徳唱",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_感謝の歌",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "感謝の歌**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_教会の五つの掟",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "教会の五つの掟",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_望徳唱",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "望徳唱",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_朝の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "朝の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_神に希望をおく人の祈り_望徳唱",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "神に希望をおく人の祈り(望徳唱）",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_神を信しる人の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "神を信じる人の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_神を愛する人の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "神を愛する人の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_福者ヘトロ岐部と187殉教者に",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "福者ペトロ岐部と187殉教者に",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "広島教区の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_福者ヘトロ岐部と187殉教者に取り次きを願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "福者ペトロ岐部と187殉教者に取り次ぎを願う祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_福音宣教の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "福音宣教の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_終わりの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "終わりの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖イクナチオの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖イグナチオの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖イクナチオ_ロヨラの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖イグナチオ・ロヨラの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖ヨセフの七つの_悲しみと喜ひ",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖ヨセフの七つの「悲しみと喜び」",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖ヨセフへの九日間の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖ヨセフへの九日間の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖ヨセフへの祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖ヨセフへの祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖体拝領のため",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖体拝領のため",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖体拝領のための祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖体拝領のための祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖霊の助けを願う",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖霊の助けを願う",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_聖霊の助けを願う祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "聖霊の助けを願う祈り**",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "jp_霊的な聖体拝領の祈り",
      category: "national",
      titles: {
        KR: "",
        VN: "",
        EN: "",
        JP: "霊的な聖体拝領の祈り",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "",
        VN: "",
        EN: "",
        JP: "日々の祈り",
        LA: ""
      },
      tags: [
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
      id: "kr_6_66",
      category: "national",
      titles: {
        KR: "가뭄과 장마 때에 바치는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_40",
      category: "national",
      titles: {
        KR: "교황이나 주교를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_60",
      category: "national",
      titles: {
        KR: "군인을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_59",
      category: "national",
      titles: {
        KR: "군인의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_48",
      category: "national",
      titles: {
        KR: "그리스도교 일치를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_24_172",
      category: "national",
      titles: {
        KR: "낙태로 아파하는 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "슬퍼하는 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_129",
      category: "national",
      titles: {
        KR: "농민을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_52",
      category: "national",
      titles: {
        KR: "대중 매체 선용을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_142",
      category: "national",
      titles: {
        KR: "레지오 마리애 기도문",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_49",
      category: "national",
      titles: {
        KR: "민족의 화해와 일치를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_24_173",
      category: "national",
      titles: {
        KR: "반려동물을 떠나보낸 가족의 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "슬퍼하는 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_61",
      category: "national",
      titles: {
        KR: "병자를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_51",
      category: "national",
      titles: {
        KR: "복음화를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_46",
      category: "national",
      titles: {
        KR: "비신자들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_41",
      category: "national",
      titles: {
        KR: "사제들을 위한 기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_42",
      category: "national",
      titles: {
        KR: "사제들을 위한 기도 2",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_65",
      category: "national",
      titles: {
        KR: "새해를 맞이하며 바치는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_178",
      category: "national",
      titles: {
        KR: "생명을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_62",
      category: "national",
      titles: {
        KR: "선종을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_39",
      category: "national",
      titles: {
        KR: "성 암브로시오의 사은 찬미가 (Te Deum)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_38",
      category: "national",
      titles: {
        KR: "성 토마스의 성체 찬미가",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_102",
      category: "national",
      titles: {
        KR: "성령 송가",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_36",
      category: "national",
      titles: {
        KR: "성모 성심께 바치는 봉헌 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_37",
      category: "national",
      titles: {
        KR: "성모님께 자기를 바치는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_50",
      category: "national",
      titles: {
        KR: "성서 사도직을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_47",
      category: "national",
      titles: {
        KR: "성소를 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_34",
      category: "national",
      titles: {
        KR: "성수 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_53",
      category: "national",
      titles: {
        KR: "성전 건립 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_24_170",
      category: "national",
      titles: {
        KR: "세상을 떠난 가족을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "슬퍼하는 이들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_64",
      category: "national",
      titles: {
        KR: "세상을 떠난 형제, 친척, 친구, 은인을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_43",
      category: "national",
      titles: {
        KR: "수도자들을 위한 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_217",
      category: "national",
      titles: {
        KR: "시노드 기도문",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_9_32",
      category: "stations_of_cross",
      titles: {
        KR: "십자가의 길",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "십자가의 길",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
        "kr_9_32",
        "stations_of_cross",
        "십자가의 길",
        "Đàng Thánh Giá",
        "Stations of the Cross",
        "十字架の道行き",
        "Via Crucis"
      ]
    },
    {
      id: "kr_6_35",
      category: "national",
      titles: {
        KR: "예수 성심께 바치는 봉헌 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_179",
      category: "national",
      titles: {
        KR: "젊은이를 위한 기도(WYD 기도문)",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_44",
      category: "national",
      titles: {
        KR: "평신도 사도직을 위한 기도 1",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_45",
      category: "national",
      titles: {
        KR: "평신도 사도직을 위한 기도 2",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "kr_6_143",
      category: "national",
      titles: {
        KR: "하느님 자비를 구하는 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      texts: {
        KR: "",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      sourceCategory: {
        KR: "여러 가지 기도",
        VN: "",
        EN: "",
        JP: "",
        LA: ""
      },
      tags: [
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
      id: "000. rosary_the_luminous_mysteries",
      category: "rosary",
      titles: {
        KR: "빛의 신비",
        EN: "The Luminous Mysteries"
      },
      texts: {
        KR: "<rubic>목요일에 바친다.</rubric>\n1단 예수님께서 세례 받으심을 묵상합시다.\n2단 예수님께서 카나에서 첫 기적을 행하심을 묵상합시다.\n3단 예수님께서 하느님 나라를 선포하심을 묵상합시다.\n4단 예수님께서 거룩하게 변모하심을 묵상합시다.\n5단 예수님께서 성체성사를 세우심을 묵상합시다.",
        EN: "<rubic>The Five Luminous Mysteries are traditionally prayed on Thursdays</rubric>\n1. The Baptism of Christ in the Jordan\n<i>“After Jesus was baptized, he came up from the water and behold, the heavens were opened [for him], and he saw the Spirit of God descending like a dove [and] coming upon him. And a voice came from the heavens, saying, 'This is my beloved Son, with whom I am well pleased.'” - Matthew 3:16-17</i>\n2. The Wedding Feast at Cana\n<i>“On the third day there was a wedding in Cana in Galilee, and the mother of Jesus was there. Jesus and his disciples were also invited to the wedding. When the wine ran short, the mother of Jesus said to him, 'They have no wine.' [And] Jesus said to her, 'Woman, how does your concern affect me? My hour has not yet come.' His mother said to the servers, 'Do whatever he tells you.'” - John 2:1-5</i>\n3. Jesus' Proclamation of the Coming of the Kingdom of God\n<i>“'This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel.'” - Mark 1:15</i>\n4. The Transfiguration\n<i>“After six days Jesus took Peter, James, and John his brother, and led them up a high mountain by themselves. And he was transfigured before them; his face shone like the sun and his clothes became white as light.” - Matthew 17:1-2</i>\n5. The Institution of the Eucharist\n<i>“While they were eating, Jesus took bread, said the blessing, broke it, and giving it to his disciples said, 'Take and eat; this is my body.'” - Matthew 26:26</i> "
      },
      sourceCategory: {
        KR: "묵주기도",
        EN: "The Rosary"
      },
      tags: [
        "000. rosary_the_luminous_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "빛의 신비",
        "The Luminous Mysteries",
        "The Rosary"
      ]
    },
    {
      id: "000. rosary_the_glorious_mysteries",
      category: "rosary",
      titles: {
        KR: "영광의 신비",
        EN: "The Glorious Mysteries"
      },
      texts: {
        KR: "<rubic>수·일요일에 바친다.</rubric>\n1단 예수님께서 부활하심을 묵상합시다.\n2단 예수님께서 승천하심을 묵상합시다.\n3단 예수님께서 성령을 보내심을 묵상합시다.\n4단 예수님께서 마리아를 하늘에 불러올리심을 묵상합시다.\n5단 예수님께서 마리아께 천상 모후의 관을 씌우심을 묵상합시다.",
        EN: "<rubic>The Five Glorious Mysteries are traditionally prayed on Wednesdays and, outside the seasons of Advent and Lent, on Sundays:</rubric>\n1. The Resurrection\n<i>“But at daybreak on the first day of the week they took the spices they had prepared and went to the tomb.They found the stone rolled away from the tomb; but when they entered, they did not find the body of the Lord Jesus. While they were puzzling over this, behold, two men in dazzling garments appeared to them. They were terrified and bowed their faces to the ground. They said to them, 'Why do you seek the living one among the dead? He is not here, but he has been raised.'” - Luke 24:1-5</i>\n2. The Ascension\n<i>“So then the Lord Jesus, after he spoke to them, was taken up into heaven and took his seat at the right hand of God.” - Mark 16:19</i>\n3. The Descent of the Holy Spirit\n<i>“When the time for Pentecost was fulfilled, they were all in one place together. And suddenly there came from the sky a noise like a strong driving wind, and it filled the entire house in which they were. Then there appeared to them tongues as of fire, which parted and came to rest on each one of them. And they were all filled with the holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim.” - Acts 2:1-4</i>\n4. The Assumption\n<i>“Behold, from now on will all ages call me blessed. The Mighty One has done great things for me, and holy is his name.” - Luke 1:48-49</i>\n5. The Coronation of Mary\n<i>“A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.” - Revelation 12:1</i> "
      },
      sourceCategory: {
        KR: "묵주기도",
        EN: "The Rosary"
      },
      tags: [
        "000. rosary_the_glorious_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "영광의 신비",
        "The Glorious Mysteries",
        "The Rosary"
      ]
    },
    {
      id: "000. rosary_the_sorrowful_mysteries",
      category: "rosary",
      titles: {
        KR: "고통의 신비",
        EN: "The Sorrowful Mysteries"
      },
      texts: {
        KR: "<rubic>화·금요일에 바친다.</rubric>\n1단 예수님께서 우리를 위하여 피땀 흘리심을 묵상합시다.\n2단 예수님께서 우리를 위하여 매 맞으심을 묵상합시다.\n3단 예수님께서 우리를 위하여 가시관 쓰심을 묵상합시다.\n4단 예수님께서 우리를 위하여 십자가 지심을 묵상합시다.\n5단 예수님께서 우리를 위하여 십자가에 못 박혀 돌아가심을 묵상합시다.",
        EN: "<rubic>The Five Sorrowful Mysteries are traditionally prayed on Tuesdays, Fridays, and, during the season of Lent, on Sundays:</rubric>\n1. The Agony in the Garden\n<i>“Then Jesus came with them to a place called Gethsemane, and he said to his disciples, 'Sit here while I go over there and pray.' He took along Peter and the two sons of Zebedee, and began to feel sorrow and distress. Then he said to them, 'My soul is sorrowful even to death. Remain here and keep watch with me.' He advanced a little and fell prostrate in prayer, saying, 'My Father, if it is possible, let this cup pass from me; yet, not as I will, but as you will.'” - Matthew 26:36-39</i>\n2. The Scourging at the Pillar\n<i>\nThe Scourging at the Pillar\n“Then he released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified.” - Matthew 27:26</i>\n3. The Crowning with Thorns\n<i>“Then the soldiers of the governor took Jesus inside the praetorium and gathered the whole cohort around him. They stripped off his clothes and threw a scarlet military cloak about him. Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, 'Hail, King of the Jews!'” - Matthew 27:27-29</i>\n4. The Carrying of the Cross\n<i\nThe Carrying of the Cross\n“They pressed into service a passer-by, Simon, a Cyrenian, who was coming in from the country, the father of Alexander and Rufus, to carry his cross. They brought him to the place of Golgotha (which is translated Place of the Skull).” - Mark 15:21-22</i>\n5. The Crucifixion and Death\n<i>“When they came to the place called the Skull, they crucified him and the criminals there, one on his right, the other on his left. [Then Jesus said, 'Father, forgive them, they know not what they do.'] They divided his garments by casting lots. The people stood by and watched; the rulers, meanwhile, sneered at him and said, 'He saved others, let him save himself if he is the chosen one, the Messiah of God.' Even the soldiers jeered at him. As they approached to offer him wine they called out, 'If you are King of the Jews, save yourself.' Above him there was an inscription that read, 'This is the King of the Jews.' Now one of the criminals hanging there reviled Jesus, saying, 'Are you not the Messiah? Save yourself and us.' The other, however, rebuking him, said in reply, 'Have you no fear of God, for you are subject to the same condemnation? And indeed, we have been condemned justly, for the sentence we received corresponds to our crimes, but this man has done nothing criminal.' Then he said, 'Jesus, remember me when you come into your kingdom.' He replied to him, 'Amen, I say to you, today you will be with me in Paradise.' It was now about noon and darkness came over the whole land until three in the afternoon because of an eclipse of the sun. Then the veil of the temple was torn down the middle. Jesus cried out in a loud voice, 'Father, into your hands I commend my spirit'; and when he had said this he breathed his last.” - Luke 23:33-46</i> "
      },
      sourceCategory: {
        KR: "묵주기도",
        EN: "The Rosary"
      },
      tags: [
        "000. rosary_the_sorrowful_mysteries",
        "rosary",
        "묵주기도",
        "Kinh Mân Côi",
        "Rosary",
        "ロザリオ",
        "Rosarium",
        "고통의 신비",
        "The Sorrowful Mysteries",
        "The Rosary"
      ]
    }
  ];

  global.prayerCategoryLabels = prayerCategoryLabels;
  global.prayerData = prayers;
})(globalThis);
