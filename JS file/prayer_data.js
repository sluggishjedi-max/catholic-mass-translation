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
  "litany": {
    "KR": "호칭기도",
    "VN": "Kinh cầu",
    "EN": "Litanies",
    "JP": "連祷",
    "LA": "Litaniae"
  },
  "monthly": {
    "KR": "성월기도",
    "VN": "Kinh theo tháng kính",
    "EN": "Monthly Devotions",
    "JP": "信心月の祈り",
    "LA": "Preces mensium"
  },
  "sacrament": {
    "KR": "성사·예식",
    "VN": "Bí tích và nghi thức",
    "EN": "Sacraments and Rites",
    "JP": "秘跡・式次第",
    "LA": "Sacramenta et ritus"
  },
  "blessing_household": {
    "KR": "축복·가정기도",
    "VN": "Lời chúc lành và gia đình",
    "EN": "Blessings and Household Prayers",
    "JP": "祝福と家庭の祈り",
    "LA": "Benedictiones et familia"
  },
  "funeral": {
    "KR": "위령·장례기도",
    "VN": "Kinh cầu cho người qua đời",
    "EN": "Funeral and Prayers for the Dead",
    "JP": "死者・葬儀の祈り",
    "LA": "Preces pro defunctis"
  },
  "national": {
    "KR": "국가별·기타 기도문",
    "VN": "Kinh theo từng nước và kinh khác",
    "EN": "Local and Other Prayers",
    "JP": "各国・その他の祈り",
    "LA": "Preces locales et aliae"
  }
};

  const prayers = [
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/the-anima-christi.html",
      "EN": "https://www.usccb.org/prayers/anima-christi",
      "JP": "https://inoruhana.com/ja/daily-prayers/#11",
      "LA": "https://prayoremus.com/prayers#anima-christi"
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
      "christ",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
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
      "LA": "holy spirit"
    },
    "source": {
      "KR": "",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/come--holy-spirit.html",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#9",
      "LA": "https://prayoremus.com/prayers#veni-sancte-spiritus-long"
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
      "holy spirit",
      "Vatican News - Kinh nguyện",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
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
      "LA": "creed"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#professio-fidei-tridentina"
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
      "creed",
      "Pray Orémus"
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
      "LA": "creed"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#quicunque-vult"
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
      "creed",
      "Pray Orémus"
    ]
  },
  {
    "id": "kr_3_8",
    "category": "common",
    "titles": {
      "KR": "고백 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=8&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_8",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "고백 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_3_127",
    "category": "common",
    "titles": {
      "KR": "구원을 비는 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=127&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_127",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "구원을 비는 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "nicene_creed",
    "category": "common",
    "titles": {
      "KR": "니케아-콘스탄티노폴리스 신경",
      "VN": "",
      "EN": "Nicene Creed",
      "JP": "ニケア信条",
      "LA": "Symbolum Nicaenum"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "creed"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=126&sgubun=w",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/nicene-creed",
      "JP": "https://inoruhana.com/ja/daily-prayers/#4",
      "LA": "https://prayoremus.com/prayers#symbolum-nicaenum"
    },
    "tags": [
      "nicene_creed",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "니케아-콘스탄티노폴리스 신경",
      "Nicene Creed",
      "ニケア信条",
      "Symbolum Nicaenum",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "creed",
      "가톨릭 기도서",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "kr_3_6",
    "category": "common",
    "titles": {
      "KR": "반성 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=6&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_6",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "반성 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_3_11",
    "category": "common",
    "titles": {
      "KR": "봉헌 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=11&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_11",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "봉헌 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "regina_caeli",
    "category": "common",
    "titles": {
      "KR": "부활 삼종 기도",
      "VN": "",
      "EN": "Regina Caeli",
      "JP": "アレルヤの祈り",
      "LA": "Regina Caeli"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "mary"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=13&sgubun=w",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/regina-caeli",
      "JP": "https://inoruhana.com/ja/daily-prayers/#7",
      "LA": "https://prayoremus.com/prayers#regina-caeli"
    },
    "tags": [
      "regina_caeli",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "부활 삼종 기도",
      "Regina Caeli",
      "アレルヤの祈り",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "mary",
      "가톨릭 기도서",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "apostles_creed",
    "category": "common",
    "titles": {
      "KR": "사도 신경",
      "VN": "Kinh Tin Kính Các Thánh Tông Đồ",
      "EN": "Apostles' Creed",
      "JP": "使徒信条",
      "LA": "Symbolum Apostolorum"
    },
    "texts": {
      "KR": "전능하신 천주 성부, 천지의 창조주를 저는 믿나이다. 그 외아들 우리 주 예수 그리스도님 성령으로 인하여 동정 마리아께 잉태되어 나시고 본시오 빌라도 통치 아래서 고난을 받으시고 십자가에 못박혀 돌아가시고 묻히셨으며 저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고 하늘에 올라 전능하신 천주 성부 오른편에 앉으시며 그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다. 성령을 믿으며 거룩하고 보편된 교회와 모든 성인의 통공을 믿으며 죄의 용서와 육신의 부활을 믿으며 영원한 삶을 믿나이다. 아멘.",
      "VN": "Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Đức Chúa Giêsu Kitô là Con Một Đức Chúa Cha cùng là Chúa chúng tôi; bởi phép Đức Chúa Thánh Thần mà Người xuống thai, sinh bởi Bà Maria Đồng Trinh; chịu nạn đời quan Phongxiô Philatô, chịu đóng đinh trên cây Thánh Giá, chết và táng xác; xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết mà sống lại; lên trời, ngự bên hữu Đức Chúa Cha phép tắc vô cùng; ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết. Tôi tin kính Đức Chúa Thánh Thần. Tôi tin có Hội Thánh hằng có ở khắp thế này, các thánh thông công. Tôi tin phép tha tội. Tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy. Amen.",
      "EN": "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
      "JP": "天地の創造主、全能の父である神を信じます。 父のひとり子、わたしたちの主イエス・キリストを信じます。 主は聖霊によってやどり、おとめマリアから生まれ、 ポンティオ・ピラトのもとで苦しみを受け、十字架につけられて死に、葬られ、 陰府に下り、三日目に死者のうちから復活し、 天に昇って、全能の父である神の右の座に着き、 生者と死者を裁くために来られます。 聖霊を信じ、聖なる普遍の教会、聖徒の交わり、罪のゆるし、 からだの復活、永遠のいのちを信じます。アーメン。",
      "LA": "Credo in Deum, Patrem omnipotentem, Creatorem caeli et terrae, et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus; descendit ad inferos; tertia die resurrexit a mortuis; ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis; inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "rosary, creed, general, divine mercy chaplet"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=5&sgubun=w",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/the-apostles_-creed.html",
      "EN": "https://www.usccb.org/prayers/apostles-creed",
      "JP": "https://inoruhana.com/ja/daily-prayers/#5",
      "LA": "https://prayoremus.com/prayers#symbolum-apostolorum"
    },
    "tags": [
      "apostles_creed",
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
      "rosary, creed, general, divine mercy chaplet",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "kr_3_10",
    "category": "common",
    "titles": {
      "KR": "삼덕송",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=10&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_10",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "삼덕송",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "angelus",
    "category": "common",
    "titles": {
      "KR": "삼종 기도",
      "VN": "",
      "EN": "Angelus",
      "JP": "お告げの祈り",
      "LA": "Angelus"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "mary, general"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=12&sgubun=w",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/angelus",
      "JP": "https://inoruhana.com/ja/daily-prayers/#6",
      "LA": "https://prayoremus.com/prayers#angelus"
    },
    "tags": [
      "angelus",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "삼종 기도",
      "Angelus",
      "お告げの祈り",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "mary, general",
      "가톨릭 기도서",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "hail_mary",
    "category": "common",
    "titles": {
      "KR": "성모송",
      "VN": "Kinh Kính Mừng",
      "EN": "Hail Mary",
      "JP": "アヴェ・マリア",
      "LA": "Ave Maria"
    },
    "texts": {
      "KR": "은총이 가득하신 마리아님, 기뻐하소서. 주님께서 함께 계시니 여인 중에 복되시며 태중의 아들 예수님 또한 복되시나이다. 천주의 성모 마리아님, 이제와 저희 죽을 때에 저희 죄인을 위하여 빌어주소서. 아멘.",
      "VN": "Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria, Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. Amen.",
      "EN": "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      "JP": "アヴェ・マリア、恵みに満ちた方、主はあなたとともにおられます。 あなたは女のうちで祝福され、ご胎内の御子イエスも祝福されています。 神の母聖マリア、罪深いわたしたちのために、 今も死を迎える時もお祈りください。アーメン。",
      "LA": "Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "rosary, mary, general, divine mercy chaplet"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=3&sgubun=w",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/the-hail-mary.html",
      "EN": "https://www.usccb.org/prayers/hail-mary",
      "JP": "https://inoruhana.com/ja/daily-prayers/#2",
      "LA": "https://prayoremus.com/prayers#ave-maria"
    },
    "tags": [
      "hail_mary",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "성모송",
      "Kinh Kính Mừng",
      "Hail Mary",
      "アヴェ・マリア",
      "Ave Maria",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "rosary, mary, general, divine mercy chaplet",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "sign_of_cross",
    "category": "common",
    "titles": {
      "KR": "성호경",
      "VN": "Dấu Thánh Giá",
      "EN": "Sign of the Cross",
      "JP": "十字架のしるし",
      "LA": "Signum Crucis"
    },
    "texts": {
      "KR": "성부와 성자와 성령의 이름으로. 아멘.",
      "VN": "Nhân danh Cha và Con và Thánh Thần. Amen.",
      "EN": "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      "JP": "父と子と聖霊のみ名によって。アーメン。",
      "LA": "In nomine Patris, et Filii, et Spiritus Sancti. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "general, rosary, divine mercy chaplet"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=1&sgubun=w",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen.html",
      "EN": "https://www.usccb.org/prayers",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
      "LA": "https://prayoremus.com/prayers#signum-crucis"
    },
    "tags": [
      "sign_of_cross",
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
      "general, rosary, divine mercy chaplet",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "guardian_angel",
    "category": "common",
    "titles": {
      "KR": "수호천사에게 바치는 기도",
      "VN": "Kinh Thiên Thần Bản Mệnh",
      "EN": "Guardian Angel Prayer",
      "JP": "守護の天使への祈り",
      "LA": "Angele Dei"
    },
    "texts": {
      "KR": "저를 지켜 주시는 수호천사여, 하느님께서 당신께 맡기신 저를 오늘 비추고 지켜 주시며 다스리고 이끌어 주소서. 아멘.",
      "VN": "Lạy Thiên Thần Chúa là Đấng gìn giữ con, xin soi sáng, gìn giữ, cai quản và hướng dẫn con trong ngày hôm nay. Amen.",
      "EN": "Angel of God, my guardian dear, to whom God’s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.",
      "JP": "神の天使、わたしの守護者よ、神の愛によってあなたにゆだねられたわたしを、今日も照らし、守り、導いてください。アーメン。",
      "LA": "Angele Dei, qui custos es mei, me tibi commissum pietate superna illumina, custodi, rege et guberna. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "angel, general"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/angel-of-god.html",
      "EN": "https://www.usccb.org/prayers",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
      "LA": "https://prayoremus.com/prayers#angele-dei"
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
      "angel, general",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "prayer_before_meals",
    "category": "common",
    "titles": {
      "KR": "식사 전 기도",
      "VN": "",
      "EN": "",
      "JP": "食前の祈り",
      "LA": "Benedic, Domine"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "日々の祈り",
      "LA": "meal"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=14&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#16",
      "LA": "https://prayoremus.com/prayers#benedic-domine"
    },
    "tags": [
      "prayer_before_meals",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "식사 전 기도",
      "食前の祈り",
      "Benedic, Domine",
      "주요 기도",
      "日々の祈り",
      "meal",
      "가톨릭 기도서",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "prayer_after_meals",
    "category": "common",
    "titles": {
      "KR": "식사 후 기도",
      "VN": "",
      "EN": "",
      "JP": "食後の祈り",
      "LA": "Agimus Tibi Gratias"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "日々の祈り",
      "LA": "meal"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=15&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#17",
      "LA": "https://prayoremus.com/prayers#agimus-tibi-gratias"
    },
    "tags": [
      "prayer_after_meals",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "식사 후 기도",
      "食後の祈り",
      "Agimus Tibi Gratias",
      "주요 기도",
      "日々の祈り",
      "meal",
      "가톨릭 기도서",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "kr_3_7",
    "category": "common",
    "titles": {
      "KR": "십계명",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=7&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_7",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "십계명",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_3_18",
    "category": "common",
    "titles": {
      "KR": "아침 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=18&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_18",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "아침 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "glory_be",
    "category": "common",
    "titles": {
      "KR": "영광송",
      "VN": "Kinh Sáng Danh",
      "EN": "Glory Be (Doxology)",
      "JP": "栄唱",
      "LA": "Gloria Patri"
    },
    "texts": {
      "KR": "영광이 성부와 성자와 성령께 처음과 같이 이제와 항상 영원히. 아멘.",
      "VN": "Sáng danh Đức Chúa Cha và Đức Chúa Con và Đức Chúa Thánh Thần. Như đã có trước vô cùng và bây giờ và hằng có và đời đời chẳng cùng. Amen.",
      "EN": "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
      "JP": "栄光は父と子と聖霊に。初めのように、今もいつも世々に。アーメン。",
      "LA": "Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "rosary, general"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=4&sgubun=w",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/glory-be-to-the-father.html",
      "EN": "https://www.usccb.org/prayers/glory-be-doxology",
      "JP": "https://inoruhana.com/ja/daily-prayers/#3",
      "LA": "https://prayoremus.com/prayers#gloria-patri"
    },
    "tags": [
      "glory_be",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "영광송",
      "Kinh Sáng Danh",
      "Glory Be (Doxology)",
      "栄唱",
      "Gloria Patri",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "rosary, general",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "kr_3_17",
    "category": "common",
    "titles": {
      "KR": "일을 마치고 바치는 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=17&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_17",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "일을 마치고 바치는 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_3_16",
    "category": "common",
    "titles": {
      "KR": "일을 시작하며 바치는 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=16&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_16",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "일을 시작하며 바치는 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_3_19",
    "category": "common",
    "titles": {
      "KR": "저녁 기도",
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
      "KR": "주요 기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=19&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_3_19",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "저녁 기도",
      "주요 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "lords_prayer",
    "category": "common",
    "titles": {
      "KR": "주님의 기도",
      "VN": "Kinh Lạy Cha",
      "EN": "Our Father",
      "JP": "主の祈り",
      "LA": "Pater Noster"
    },
    "texts": {
      "KR": "하늘에 계신 우리 아버지, 아버지의 이름이 거룩히 빛나시며 아버지의 나라가 오시며 아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지소서. 오늘 저희에게 일용할 양식을 주시고 저희에게 잘못한 이를 저희가 용서하오니 저희 죄를 용서하시고 저희를 유혹에 빠지지 않게 하시고 악에서 구하소서. 아멘.",
      "VN": "Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con, xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. Amen.",
      "EN": "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      "JP": "天におられるわたしたちの父よ、み名が聖とされますように。 み国が来ますように。 みこころが天に行われるとおり地にも行われますように。 わたしたちの日ごとの糧を今日もお与えください。 わたしたちの罪をおゆるしください。 わたしたちも人をゆるします。 わたしたちを誘惑におちいらせず、悪からお救いください。アーメン。",
      "LA": "Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem, sed libera nos a malo. Amen."
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "rosary, general, divine mercy chaplet"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=2&sgubun=w",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/our-father.html",
      "EN": "https://www.usccb.org/prayers/our-father",
      "JP": "https://inoruhana.com/ja/daily-prayers/#1",
      "LA": "https://prayoremus.com/prayers#pater-noster"
    },
    "tags": [
      "lords_prayer",
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
      "Basic Prayers",
      "日々の祈り",
      "rosary, general, divine mercy chaplet",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
    ]
  },
  {
    "id": "act_of_contrition",
    "category": "common",
    "titles": {
      "KR": "통회 기도",
      "VN": "",
      "EN": "Act of Contrition",
      "JP": "悔い改めの祈り",
      "LA": "Actus Contritionis"
    },
    "texts": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceCategory": {
      "KR": "주요 기도",
      "VN": "",
      "EN": "Basic Prayers",
      "JP": "日々の祈り",
      "LA": "general"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=3&ingId=9&sgubun=w",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/act-contrition",
      "JP": "https://inoruhana.com/ja/daily-prayers/#38",
      "LA": "https://prayoremus.com/prayers#actus-contritionis"
    },
    "tags": [
      "act_of_contrition",
      "common",
      "공통기도문",
      "Kinh nguyện chung",
      "Common Prayers",
      "共通の祈り",
      "Preces communes",
      "통회 기도",
      "Act of Contrition",
      "悔い改めの祈り",
      "Actus Contritionis",
      "주요 기도",
      "Basic Prayers",
      "日々の祈り",
      "general",
      "가톨릭 기도서",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/rosary-life-glorious-mysteries",
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
      "A Rosary for Life: The Glorious Mysteries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_a_rosary_for_life_the_joyful_mysteries",
    "category": "rosary",
    "titles": {
      "KR": "",
      "VN": "",
      "EN": "A Rosary for Life: The Joyful Mysteries",
      "JP": "",
      "LA": ""
    },
    "texts": {
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/rosary-life-joyful-mysteries",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_a_rosary_for_life_the_joyful_mysteries",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "A Rosary for Life: The Joyful Mysteries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/rosary-life-luminous-mysteries",
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
      "A Rosary for Life: The Luminous Mysteries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/rosary-life-sorrowful-mysteries",
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
      "A Rosary for Life: The Sorrowful Mysteries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "rosary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-fatima"
    },
    "tags": [
      "la_oratio_fatima",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "Oratio Fatima",
      "Pray Orémus"
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
      "LA": "rosary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-ad-finem-rosarii-dicenda"
    },
    "tags": [
      "la_oratio_ad_finem_rosarii_dicenda",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "Oratio ad Finem Rosarii Dicenda",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-st-joseph-after-rosary",
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
      "Prayer to St. Joseph after the Rosary",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_prayers_of_the_rosary",
    "category": "rosary",
    "titles": {
      "KR": "",
      "VN": "",
      "EN": "Prayers of the Rosary",
      "JP": "",
      "LA": ""
    },
    "texts": {
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-rosary",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayers_of_the_rosary",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "Prayers of the Rosary",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pro-life-rosary-prayer-intentions",
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
      "Pro-Life Rosary Prayer Intentions",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "la_salve_regina",
    "category": "rosary",
    "titles": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Salve Regina"
    },
    "texts": {
      "KR": "",
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
      "LA": "rosary, mary, general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#salve-regina"
    },
    "tags": [
      "la_salve_regina",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "Salve Regina",
      "rosary, mary, general",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/scriptural-rosary-sorrowful-mysteries",
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
      "Scriptural Rosary: The Sorrowful Mysteries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#42",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
    ]
  },
  {
    "id": "kr_8_67",
    "category": "rosary",
    "titles": {
      "KR": "묵주 기도",
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
      "KR": "묵주기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=8&ingId=67&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_8_67",
      "rosary",
      "묵주기도",
      "Kinh Mân Côi",
      "Rosary",
      "ロザリオ",
      "Rosarium",
      "묵주 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=213&sgubun=w",
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
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_8_70",
    "category": "rosary",
    "titles": {
      "KR": "묵주기도 바치는 방법",
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
      "KR": "묵주기도",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=8&ingId=70&sgubun=w",
      "VN": "",
      "EN": "",
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
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=30&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=128&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-life",
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
      "A Litany for Life",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#litaniae-lauretanae"
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
      "mary",
      "Pray Orémus"
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
      "LA": "christ, litany"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#litaniae-pretiosissimi-sanguinis-domini-nostri-iesu-christi"
    },
    "tags": [
      "la_litaniae_pretiosissimi_sanguinis_domini_nostri_iesu_christi",
      "litany",
      "호칭기도",
      "Kinh cầu",
      "Litanies",
      "連祷",
      "Litaniae",
      "Litaniae Pretiosissimi Sanguinis Domini Nostri Iesu Christi",
      "christ, litany",
      "Pray Orémus"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#litaniae-sancti-ioseph"
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
      "joseph",
      "Pray Orémus"
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
      "LA": "christ, litany"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#litaniae-sanctissimi-nominis-iesu"
    },
    "tags": [
      "la_litaniae_sanctissimi_nominis_iesu",
      "litany",
      "호칭기도",
      "Kinh cầu",
      "Litanies",
      "連祷",
      "Litaniae",
      "Litaniae Sanctissimi Nominis Iesu",
      "christ, litany",
      "Pray Orémus"
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
      "LA": "christ, litany"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#litaniae-de-sacro-corde-iesu"
    },
    "tags": [
      "la_litaniae_de_sacro_corde_iesu",
      "litany",
      "호칭기도",
      "Kinh cầu",
      "Litanies",
      "連祷",
      "Litaniae",
      "Litaniae de Sacro Corde Iesu",
      "christ, litany",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-liberty",
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
      "Litany for Liberty",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-saint-joseph",
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
      "Litany of Saint Joseph",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-blessed-virgin-mary-mother-life",
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
      "Litany of the Blessed Virgin Mary, Mother of Life",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-holy-name-jesus",
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
      "Litany of the Holy Name of Jesus",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-most-precious-blood",
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
      "Litany of the Most Precious Blood",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-sacred-heart-jesus",
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
      "Litany of the Sacred Heart of Jesus",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/litany-way-prayer-journey",
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
      "Litany of the Way, Prayer for the Journey",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=29&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=28&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=27&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=5&ingId=31&sgubun=w",
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
      "호칭 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_4_25",
    "category": "monthly",
    "titles": {
      "KR": "묵주 기도 성월",
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=25&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_4_25",
      "monthly",
      "성월기도",
      "Kinh theo tháng kính",
      "Monthly Devotions",
      "信心月の祈り",
      "Preces mensium",
      "묵주 기도 성월",
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=21&sgubun=w",
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
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=22&sgubun=w",
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
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=24&sgubun=w",
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
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=23&sgubun=w",
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
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=4&ingId=26&sgubun=w",
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
      "성월 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/may-sacraments-move-us-love-and-serve",
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
      "May the Sacraments Move Us to Love and Serve",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=214&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#43",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=7&ingId=20&sgubun=w",
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
      "고해성사",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=185&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=11&ingId=68&sgubun=w",
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
      "공소 예절",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=186&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=187&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=189&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=188&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=184&sgubun=w",
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
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=166&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_166",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "(어린 자녀) 선생님을 위한 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=164&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_164",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "(어린 자녀) 아빠를 위한 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=165&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_165",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "(어린 자녀) 엄마를 위한 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=163&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_163",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "(어린 자녀) 할머니, 할아버지를 위한 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-grandparents",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_grandparents",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of Grandparents",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-parents-after-miscarriage-or-stillbirth",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_parents_after_a_miscarriage_or_stillbirth",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of Parents after a Miscarriage or Stillbirth",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-christmas-manger-or-nativity-scene",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_a_christmas_manger_or_nativity_scene",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of a Christmas Manger or Nativity Scene",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-christmas-tree",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_a_christmas_tree",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of a Christmas Tree",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-advent-wreath",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_an_advent_wreath",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of an Advent Wreath",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-home-and-household-epiphany",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_of_the_home_and_household_on_epiphany",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing of the Home and Household on Epiphany",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-childs-birthday",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_on_a_child_s_birthday",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing on a Child's Birthday",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/blessing-childs-name-day",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_blessing_on_a_child_s_name_day",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Blessing on a Child's Name Day",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/children-world-photo-slides",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_children_of_the_world_photo_slides",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Children of the World Photo Slides",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-ioseph"
    },
    "tags": [
      "la_commemoratio_sancti_ioseph",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Commemoratio Sancti Ioseph",
      "joseph",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/daily-blessing-child",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_daily_blessing_of_a_child",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Daily Blessing of a Child",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/gracious-lord-child-bethlehem",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_gracious_lord_child_of_bethlehem",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Gracious Lord, Child of Bethlehem",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#invocatio-sancti-iosephi"
    },
    "tags": [
      "la_invocatio_sancti_iosephi",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Invocatio Sancti Iosephi",
      "joseph",
      "Pray Orémus"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#ioseph-virgo-pater-iesu"
    },
    "tags": [
      "la_ioseph_virgo_pater_iesu",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Ioseph, Virgo Pater Iesu",
      "joseph",
      "Pray Orémus"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#memento-nostri-beate-ioseph"
    },
    "tags": [
      "la_memento_nostri_beate_ioseph",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Memento Nostri, Beate Ioseph",
      "joseph",
      "Pray Orémus"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#memorare-sancti-ioseph"
    },
    "tags": [
      "la_memorare_sancti_ioseph",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Memorare Sancti Ioseph",
      "joseph",
      "Pray Orémus"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-ad-sanctum-iosephum"
    },
    "tags": [
      "la_oratio_ad_sanctum_iosephum",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Oratio ad Sanctum Iosephum",
      "joseph",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/order-blessing-organizations-concerned-public-need",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_order_for_the_blessing_of_organizations_concerned_with_public_need",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Order for the Blessing of Organizations Concerned with Public Need",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/order-blessing-victim-crime-or-oppression",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_order_for_the_blessing_of_a_victim_of_crime_or_oppression",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Order for the Blessing of a Victim of Crime or Oppression",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/order-blessing-sick",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_order_for_the_blessing_of_the_sick",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Order for the Blessing of the Sick",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/parents-prayer-vocations",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_parents_prayer_for_vocations",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Parents Prayer for Vocations",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/parents-thanksgiving",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_parents_thanksgiving",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Parents' Thanksgiving",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-those-who-have-died-after-leaving-their-homelands-search-better-life-0",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_pope_francis_prayer_for_those_who_have_died_after_leaving_their_homela",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Pope Francis' Prayer for Those Who Have Died After Leaving Their Homelands in Search of a Better Life",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-card-75th-anniversary-hiroshima-and-nagasaki-spanish",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_card_for_the_75th_anniversary_of_hiroshima_and_nagasaki_spanish",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer Card for the 75th Anniversary of Hiroshima and Nagasaki - Spanish",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-married-couples",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_for_married_couples",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer for Married Couples",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-migrant-children",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_for_migrant_children",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer for Migrant Children",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-those-hoping-conceive-or-adopt-child",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_for_those_hoping_to_conceive_or_adopt_a_child",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer for Those Hoping to Conceive or Adopt a Child",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-defense-marriage",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_in_defense_of_marriage",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer in Defense of Marriage",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-couple-anniversary-marriage",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_of_a_couple_on_the_anniversary_of_marriage",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer of a Couple on the Anniversary of Marriage",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-bringing-child-home",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_on_bringing_a_child_into_the_home",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer on Bringing a Child into the Home",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-care-our-common-home",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_to_care_for_our_common_home",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Prayer to Care for Our Common Home",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/thank-you-creating-children-world",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_thank_you_for_creating_the_children_of_the_world",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Thank You for Creating the Children of the World",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/thank-you-creating-children-world-spanish",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_thank_you_for_creating_the_children_of_the_world_spanish",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Thank You for Creating the Children of the World - Spanish",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/thanksgiving-newborn-or-newly-adopted-young-child",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_thanksgiving_for_a_newborn_or_newly_adopted_young_child",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Thanksgiving for a Newborn or Newly Adopted Young Child",
      "Household Blessings and Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "joseph"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#virginum-custos"
    },
    "tags": [
      "la_virginum_custos",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "Virginum Custos",
      "joseph",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
      "LA": ""
    },
    "tags": [
      "jp_子とものための祈り",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "子どものための祈り",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#24",
      "LA": ""
    },
    "tags": [
      "jp_家族の祈り",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "家族の祈り",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#25",
      "LA": ""
    },
    "tags": [
      "jp_父母のための祈り",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "父母のための祈り",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=194&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_194",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "가정 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=25&ingId=174&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_25_174",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "가정을 위한 기도",
      "가정",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=54&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_54",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "가정을 위한 기도 1",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=55&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_55",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "가정을 위한 기도 2",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=25&ingId=175&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_25_175",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "가족의 안전을 위한 기도",
      "가정",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=20&ingId=151&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_20_151",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "갈등을 겪고 있는 부부의(부부를 위한) 기도",
      "부부",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=208&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_208",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "거동하지 못하는 노인 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=20&ingId=149&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_20_149",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "결혼기념일에 바치는 부부의 기도",
      "부부",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=198&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_198",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "공장, 사무실, 상점 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=210&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_210",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "교리 교사 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=211&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_211",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "교리 교육이나 기도 모임 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=199&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_199",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "교통수단 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=193&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_29_193",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "무덤 축복",
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=19&ingId=144&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_19_144",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "미래의 배우자를 위한 기도",
      "혼인",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=201&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_201",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "미사 밖에서 거행하는 성수 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=23&ingId=168&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_23_168",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부모를 위한 기도",
      "부모",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=56&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_56",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부모를 위한 기도",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=203&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_203",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부부 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=20&ingId=150&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_20_150",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부부가 하는 매일의 축복",
      "부부",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=58&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_58",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부부의 기도",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=209&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_209",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "부활 계란 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=197&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_197",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "새 집 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=21&ingId=156&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_21_156",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "새로 맞이하는 자녀를 위한 축복 (출산/입양)",
      "임신,출산,입양",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=200&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_200",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "생업 관련 기기 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=162&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_162",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "성인이 되는 자녀를 위한 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=63&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_63",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "세상을 떠난 부모를 위한 기도",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=202&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_202",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "신심 증진을 위한 성물 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=19&ingId=146&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_19_146",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "신혼부부의 기도 1",
      "혼인",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=19&ingId=147&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_19_147",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "신혼부부의 기도 2",
      "혼인",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=205&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_205",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "아직 세례 받지 못한 어린이 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=25&ingId=176&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_25_176",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "아픈 가족을 위한 기도",
      "가정",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=195&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_195",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "어른 병자 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=196&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_196",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "어린이 병자 축복 예식",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=167&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_167",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "어린이 봉사자의 기도 (복사단, 전례단, 성가대 등)",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=20&ingId=152&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_20_152",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "영명 축일에 바치는 부부의 기도",
      "부부",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=25&ingId=177&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_25_177",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "위기를 겪고 있는 가정의(가정을 위한) 기도",
      "가정",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=204&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_204",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "이미 세례 받은 어린이 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=21&ingId=155&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_21_155",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 낳은 가정의 감사기도 (출산/입양)",
      "임신,출산,입양",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=21&ingId=153&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_21_153",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 바라는 기도 (임신/입양)",
      "임신,출산,입양",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=57&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_57",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 위한 기도",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=157&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_157",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 위한 기도 1",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=158&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_158",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 위한 기도 2",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=24&ingId=171&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_24_171",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀를 잃은 이들을 위한 기도",
      "슬퍼하는 이들을 위한 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=159&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_159",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀에게 하는 매일의 축복",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=160&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_160",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀의 생일에 하는 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=22&ingId=161&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_22_161",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "자녀의 영명 축일에 하는 기도",
      "자녀",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=23&ingId=169&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_23_169",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "조부모를 위한 기도",
      "부모",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=212&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_212",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "출발하는 순례자 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=206&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_206",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "출산 전 어머니 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=30&ingId=207&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_30_207",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "출산 후 어머니 축복 기도",
      "Ⅳ. 축복 예식과 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=21&ingId=154&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_21_154",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "태아를 위한 기도",
      "임신,출산,입양",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=19&ingId=145&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_19_145",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "혼인을 준비하며 바치는 기도(약혼자의 기도)",
      "혼인",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=19&ingId=148&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_19_148",
      "blessing_household",
      "축복·가정기도",
      "Lời chúc lành và gia đình",
      "Blessings and Household Prayers",
      "祝福と家庭の祈り",
      "Benedictiones et familia",
      "혼인하는 이들(가족, 지인 등)을 위한 기도",
      "혼인",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=99&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_99",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 납골 또는 자연장(세상을 떠난 이들)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=74&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_74",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 성인 호칭 기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=98&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_98",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 쇄골 또는 습골(욥의 기도)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=80&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_80",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 113 / 마침기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=86&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_86",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 117",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=90&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_90",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 118/마침기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=72&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_72",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 129(130)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=77&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_77",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 129(130)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=83&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_83",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 22(23) / 마침기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=89&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_89",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 24",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=87&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_87",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 41",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=73&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_73",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 50(51),3-21",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=71&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_71",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 62(63),2-8",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=84&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_84",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 83(84)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=88&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_88",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편 92",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=82&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_82",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편41(42),2-3.5;42(43),3-5",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=78&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_78",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 시편50(51),3-21",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=94&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_94",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 유가족을 위한 기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=92&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_92",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 자비송",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=76&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_76",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 주님의 기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=95&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_95",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 즈카르야의 노래",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=75&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_75",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 찬미가",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=93&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_93",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 청원기도",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=97&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_97",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "- 화답송",
      "상장 예식",
      "가톨릭 기도서"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#in-paradiso"
    },
    "tags": [
      "la_in_paradiso",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "In Paradiso",
      "angel",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-end-use-death-penalty",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayer_to_end_the_use_of_the_death_penalty",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "Prayer to End the Use of the Death Penalty",
      "Prayers for Death and Dying",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-death-baptized-child",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayers_at_the_death_of_a_baptized_child",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "Prayers at the Death of a Baptized Child",
      "Prayers for Death and Dying",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-death-and-dying",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayers_for_death_and_dying",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "Prayers for Death and Dying",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-mourners",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_prayers_for_mourners",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "Prayers for Mourners",
      "Prayers for Death and Dying",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#27",
      "LA": ""
    },
    "tags": [
      "jp_病人のための祈り",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "病人のための祈り",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#34",
      "LA": ""
    },
    "tags": [
      "jp_病気_怪我をした時",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "病気・怪我をした時",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
      "LA": ""
    },
    "tags": [
      "jp_病気_怪我をした時の祈り",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "病気・怪我をした時の祈り",
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=79&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_79",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "염습과 입관",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=218&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_218",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "우제",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=85&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_85",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "운구",
      "상장 예식",
      "가톨릭 기도서"
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
      "LA": "general"
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/eternal-rest.html",
      "EN": "https://www.usccb.org/prayers",
      "JP": "https://inoruhana.com/ja/daily-prayers/#28",
      "LA": "https://prayoremus.com/prayers#requiem-aeternam"
    },
    "tags": [
      "eternal_rest",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "위령 기도",
      "Nghỉ yên muôn đời",
      "Eternal Rest",
      "死者のための祈り",
      "Requiem Aeternam",
      "상장 예식",
      "Basic Prayers",
      "日々の祈り",
      "general",
      "가톨릭 기도서",
      "Vatican News - Kinh nguyện",
      "Catholic Household Blessings and Prayers / USCCB Prayers",
      "カトリック祈祷書 祈りの友",
      "Pray Orémus"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=138&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_6_138",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "위령 기도",
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=33&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_33",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "위령기도 1",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=69&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_69",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "위령기도 2(짧은 위령 기도)",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=215&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_215",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "임종과 운명",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=191&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_29_191",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "임종과 운명",
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=81&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_81",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "출관",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=91&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_91",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "하관",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=190&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_29_190",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "하관",
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=10&ingId=96&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_10_96",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "화장",
      "상장 예식",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=29&ingId=192&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_29_192",
      "funeral",
      "위령·장례기도",
      "Kinh cầu cho người qua đời",
      "Funeral and Prayers for the Dead",
      "死者・葬儀の祈り",
      "Preces pro defunctis",
      "화장",
      "Ⅲ. 성사(예식)",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=183&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=216&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/concluding-prayer-go-and-make-disciples",
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
      "A Concluding Prayer - Go and Make Disciples",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-life",
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
      "A Prayer for Life",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-people-syria",
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
      "A Prayer for the People of Syria",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-our-lady-guadalupe",
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
      "A Prayer to Our Lady of Guadalupe",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-st-juan-diego",
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
      "A Prayer to St. Juan Diego",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-creator",
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
      "A Prayer to the Creator",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/soldiers-prayers",
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
      "A Soldier's Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/act-consecration-immaculate-heart-mary-russia-and-ukraine",
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
      "Act of Consecration to the Immaculate Heart of Mary for Russia and Ukraine",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/act-faith-hope-and-love",
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
      "Act of Faith, Hope, and Love",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#actus-caritatis"
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
      "general",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#actus-fidei"
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
      "general",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#actus-reparationis"
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
      "christ",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#actus-spei"
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
      "general",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#ad-sanctum-raphaelem-archangelum"
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
      "angel",
      "Pray Orémus"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#alma-redemptoris-mater"
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
      "mary",
      "Pray Orémus"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#ave-maris-stella"
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
      "mary",
      "Pray Orémus"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#ave-regina-caelorum"
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
      "mary",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/cchd-2016-prayer-card",
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
      "CCHD 2016 Prayer Card",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/cchd-2016-prayer-card-spanish",
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
      "CCHD 2016 Prayer Card in Spanish",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/covid-19-prayer-card",
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
      "COVID-19 Prayer Card",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/care-gods-creation-prayer",
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
      "Care for God’s Creation Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/catechists-prayer",
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
      "Catechist’s Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/chaplet-divine-mercy",
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
      "Chaplet of Divine Mercy",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/civilize-it-advent-prayer-be-mary",
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
      "Civilize It: Advent Prayer to be like Mary",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/civilize-it-advent-prayer-see-jesus-others",
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
      "Civilize It: An Advent Prayer to See Jesus in Others",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-archangelorm"
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
      "angel",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-antonii"
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
      "saint",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-benedicti"
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
      "saint",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-francisci-assisiensis"
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
      "saint",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-gabrielis-archangeli"
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
      "angel",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-michaelis-archangeli"
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
      "angel",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#commemoratio-sancti-raphaelis-archangeli"
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
      "angel",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/covid-19-prayer-solidarity",
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
      "Covid-19: A Prayer of Solidarity",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/create-me-love-ever-more-open",
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
      "Create in me a Love ever more open",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#deus-protector-noster"
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
      "general",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#deus-in-adjutorium-meum-intende"
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
      "general",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/dignity-work-and-rights-workers",
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
      "Dignity of Work and the Rights of Workers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/divine-praises",
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
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#domine-iesu-christe-in-unione"
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
      "general",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#domine-iesu-christe-qui-mariae-et-ioseph-subditus"
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
      "christ",
      "Pray Orémus"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#flos-carmeli"
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
      "mary",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/deceased-veterans",
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
      "For Deceased Veterans",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_hail_holy_queen_the_salve_regina",
    "category": "national",
    "titles": {
      "KR": "",
      "VN": "",
      "EN": "Hail, Holy Queen (The Salve Regina)",
      "JP": "",
      "LA": ""
    },
    "texts": {
      "KR": "",
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/hail-holy-queen-salve-regina",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_hail_holy_queen_the_salve_regina",
      "national",
      "국가별·기타 기도문",
      "Kinh theo từng nước và kinh khác",
      "Local and Other Prayers",
      "各国・その他の祈り",
      "Preces locales et aliae",
      "Hail, Holy Queen (The Salve Regina)",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/health-care-pulpit-announcement-and-prayer-pdf",
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
      "Health Care Pulpit Announcement and Prayer PDF",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/health-care-pulpit-announcement-and-prayer-pdf-spanish",
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
      "Health Care Pulpit Announcement and Prayer PDF in Spanish",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/hear-us-o-god",
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
      "Hear Us, O God",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/help-me-listen-voice-creation",
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
      "Help Me to Listen to the Voice of Creation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/help-us-build-communities-gods-vision-justice",
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
      "Help Us Build Communities in God's Vision of Justice",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/help-us-love-good-samaritan",
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
      "Help Us to Love Like the Good Samaritan",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/hope-amidst-dark-clouds",
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
      "Hope Amidst Dark Clouds",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/how-pray-chaplet-divine-mercy",
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
      "How To Pray the Chaplet of Divine Mercy",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#iesu-dulcis-memoria"
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
      "christ",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#iesu-meus-miserere"
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
      "general",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/intercessions-marginalized",
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
      "Intercessions for the Marginalized",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/intercessory-prayers-marginalized",
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
      "Intercessory Prayers: The Marginalized",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#inviolata"
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
      "mary",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "Vatican News - Kinh nguyện",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "https://www.vaticannews.va/vi/kinh-nguyen/act-of-love.html",
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
      "Kinh Tin - Cậy - Mến",
      "Vatican News - Kinh nguyện"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/lenten-prayer",
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
      "Lenten Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/lenten-prayer-civility",
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
      "Lenten Prayer for Civility",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/lenten-prayers-unemployment-and-poverty",
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
      "Lenten Prayers - Unemployment and Poverty",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/letania-por-la-libertad",
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
      "Letanía por la Libertad",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/life-and-dignity-human-person-prayer",
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
      "Life and Dignity of the Human Person Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#magnificat"
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
      "mary",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/memorare",
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
      "Memorare",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary, general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#memorare"
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
      "mary, general",
      "Pray Orémus"
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
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/morning-offering",
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
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/national-migration-week-collected-book-prayers-migrants",
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
      "National Migration Week: A Collected Book of Prayers for Migrants",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#nativitas-christi-novena-sancti-andreae"
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
      "saint",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/novena-faithful-citizenship",
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
      "Novena for Faithful Citizenship",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/novena-solemnity-saint-joseph",
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
      "Novena for the Solemnity of Saint Joseph",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#nunc-dimittis"
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
      "christ",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-bone-iesu"
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
      "christ",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-caelestis-medice"
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
      "angel",
      "Pray Orémus"
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
      "LA": "holy spirit"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-creator-sancte-spiritus"
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
      "holy spirit",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-divi-amoris-victima"
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
      "christ",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-fortitudo-dei"
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
      "angel",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-princeps-caelestis-militiae"
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
      "angel",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/o-sacrum-convivium",
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
      "O Sacrum Convivium",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "holy spirit"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#o-sancte-spiritus"
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
      "holy spirit",
      "Pray Orémus"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#obsecro-te-angelice-spiritus"
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
      "angel",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-ciudadanos-fieles",
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
      "Oracion Para Ciudadanos Fieles",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-de-los-fieles-por-la-jornada-de-oracion-por-la-paz-en-nuestras-comunidades-0",
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
      "Oración De Los Fieles Por La Jornada De Oración Por La Paz En Nuestras Comunidades",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-despues-de-un-dia-de-elecciones-0",
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
      "Oración despues de un día de elecciones",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-antes-de-unas-elecciones",
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
      "Oración para Antes de Unas Elecciones",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-abordar-el-pecado-del-racismo",
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
      "Oración para abordar el pecado del racismo",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-cuidar-de-nuestra-casa-comun",
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
      "Oración para cuidar de nuestra casa común",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-llegar-ser-buenos-mayordomos-de-la-creacion-de-dios",
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
      "Oración para llegar a ser buenos mayordomos de la creación de Dios",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-para-sanar-la-division-racial",
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
      "Oración para sanar la división racial",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-por-el-papa-benedicto-xvi",
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
      "Oración por el Papa Benedicto XVI",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-por-el-sinodo-sobre-la-sinodalidad",
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
      "Oración por el Sínodo sobre la Sinodalidad",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/oracion-por-la-unidad-para-superar-las-divisiones",
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
      "Oración por la unidad, para superar las divisiones",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/orando-como-un-ciudadano-fiel",
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
      "Orando Como Un Ciudadano Fiel",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-ad-angelum-custodem"
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
      "angel",
      "Pray Orémus"
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
      "LA": "divine mercy chaplet"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-finalis"
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
      "divine mercy chaplet",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-iesu"
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
      "christ",
      "Pray Orémus"
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
      "LA": "divine mercy chaplet"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-incipiens"
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
      "divine mercy chaplet",
      "Pray Orémus"
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
      "LA": "holy spirit"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-pro-propagatione-fidei"
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
      "holy spirit",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-sagittae-aureae"
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
      "general",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-sancti-augustini"
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
      "saint",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-sancti-benedicti"
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
      "saint",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#oratio-ad-dominum-nostrum-in-cruce"
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
      "christ",
      "Pray Orémus"
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
      "LA": "divine mercy chaplet"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#pater-aeterne"
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
      "divine mercy chaplet",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#petitiones-sancti-augustini"
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
      "christ",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-mercy",
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
      "Pope Francis' Prayer for Mercy",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-way-cross",
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
      "Pope Francis’ Prayer at the Way of the Cross",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-peace",
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
      "Pope Francis’ Prayer for Peace",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-peace-and-protection-violence-and-terrorism",
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
      "Pope Francis’ Prayer for Peace and Protection from Violence and from Terrorism",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-workers",
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
      "Pope Francis’ Prayer for Workers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-immaculate-conception",
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
      "Pope Francis’ Prayer for the Immaculate Conception",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pope-francis-prayer-joy-gospel",
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
      "Pope Francis’ Prayer for the Joy of the Gospel",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-after-election",
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
      "Prayer After an Election",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-against-racism",
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
      "Prayer Against Racism",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-against-racism-prayer-card-english",
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
      "Prayer Against Racism Prayer Card (English)",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-against-racism-prayer-card-spanish",
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
      "Prayer Against Racism Prayer Card (Spanish)",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-election",
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
      "Prayer Before an Election",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-card-day-prayer-persecuted-christians-november-26-2017",
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
      "Prayer Card for Day of Prayer for Persecuted Christians, November 26 2017",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-card-anniversaries-hiroshima-and-nagasaki",
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
      "Prayer Card for the Anniversaries of Hiroshima and Nagasaki",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-card-syria-commemorating-visit-his-beatitude-gregorios-iii",
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
      "Prayer Card of Syria Commemorating Visit from His Beatitude Gregorios III",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-during-difficult-economic-times",
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
      "Prayer During Difficult Economic Times",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-canticle-saint-john-cross",
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
      "Prayer From a Canticle by Saint John of the Cross",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-inspired-pope-francis-laudate-deum-praise-god",
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
      "Prayer Inspired by Pope Francis' Laudate Deum (Praise God)",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-service-national-day-prayer",
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
      "Prayer Service for National Day of Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-service-put-two-feet-love-action",
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
      "Prayer Service to Put Two Feet of Love in Action",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-service-be-disciples-mission",
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
      "Prayer Service to be Disciples on Mission",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-when-gathering-meet-or-study",
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
      "Prayer When Gathering to Meet or Study",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-basic-rights",
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
      "Prayer for Basic Rights",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-charity-truth",
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
      "Prayer for Charity in Truth",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-civic-leaders",
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
      "Prayer for Civic Leaders",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-community",
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
      "Prayer for Community",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-end-nuclear-weapons",
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
      "Prayer for End of Nuclear Weapons",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-families",
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
      "Prayer for Families",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-healing-victims-abuse",
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
      "Prayer for Healing Victims of Abuse",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-justice",
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
      "Prayer for Justice",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-labor-day",
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
      "Prayer for Labor Day",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-life-and-dignity",
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
      "Prayer for Life and Dignity",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-memorial-day-last-monday-may",
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
      "Prayer for Memorial Day (Last Monday in May)",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-migrant-families",
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
      "Prayer for Migrant Families",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-migrants",
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
      "Prayer for Migrants",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-migrants-and-refugees",
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
      "Prayer for Migrants and Refugees",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-our-troops",
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
      "Prayer for Our Troops",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-peace-iraq",
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
      "Prayer for Peace in Iraq",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-peace-our-communities-prayer-card-english",
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
      "Prayer for Peace in Our Communities Prayer Card in English",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-peace-our-communities-prayer-card-spanish",
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
      "Prayer for Peace in Our Communities Prayer Card in Spanish",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-peace-pope-francis",
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
      "Prayer for Peace of Pope Francis",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-pope-benedict-xvi",
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
      "Prayer for Pope Benedict XVI",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-pope-leo-xiv",
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
      "Prayer for Pope Leo XIV",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-priests",
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
      "Prayer for Priests",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-protection-conscience-rights-health-care",
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
      "Prayer for Protection of Conscience Rights in Health Care",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-safety",
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
      "Prayer for Safety",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-solidarity",
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
      "Prayer for Solidarity",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-students",
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
      "Prayer for Students",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-teachers",
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
      "Prayer for Teachers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-those-poverty",
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
      "Prayer for Those in Poverty",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-unity-overcome-division",
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
      "Prayer for Unity, to Overcome Division",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-vocations",
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
      "Prayer for Vocations",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-work",
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
      "Prayer for Work",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-youth",
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
      "Prayer for Youth",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-victim-accident-or-violence",
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
      "Prayer for a Victim of Accident or Violence",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-election-new-pope",
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
      "Prayer for the Election of a New Pope",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-new-evangelization",
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
      "Prayer for the New Evangelization",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-new-year",
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
      "Prayer for the New Year",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-poor",
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
      "Prayer for the Poor",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-protection-religious-liberty",
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
      "Prayer for the Protection of Religious Liberty",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-synod-synodality",
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
      "Prayer for the Synod on Synodality",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-canticle-st-john-cross",
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
      "Prayer from a Canticle by St. John of the Cross",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-time-financial-difficulties",
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
      "Prayer in Time of Financial Difficulties",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-times-seeking-gods-will",
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
      "Prayer in Times of Seeking God's Will",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-times-suffering-and-need",
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
      "Prayer in Times of Suffering and Need",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-elderly-pope-saint-john-paul-ii",
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
      "Prayer of the Elderly, Pope Saint John Paul II",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-faithful-day-prayer-peace-our-communities",
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
      "Prayer of the Faithful for the Day of Prayer for Peace in Our Communities",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-solemnity-immaculate-conception",
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
      "Prayer on the Solemnity of the Immaculate Conception",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-address-sin-racism",
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
      "Prayer to Address the Sin of Racism",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-be-disciples-and-missionaries",
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
      "Prayer to Be Disciples and Missionaries",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-become-stewards-gods-creation",
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
      "Prayer to Become Stewards of God's Creation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-confront-global-poverty",
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
      "Prayer to Confront Global Poverty",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-discern-vocation",
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
      "Prayer to Discern a Vocation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-end-trafficking",
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
      "Prayer to End Trafficking",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-heal-racial-division",
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
      "Prayer to Heal Racial Division",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-listen-heal-and-respond",
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
      "Prayer to Listen, Heal and Respond",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-live-gospel-be-disciples",
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
      "Prayer to Live the Gospel, Be Disciples",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-overcome-indifference",
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
      "Prayer to Overcome Indifference",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-saint-juan-diego",
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
      "Prayer to Saint Juan Diego",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-your-guardian-angel",
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
      "Prayer to Your Guardian Angel",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-our-lord-jesus-christ-crucified",
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
      "Prayer to our Lord Jesus Christ Crucified",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-holy-spirit",
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
      "Prayer to the Holy Spirit",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-sacred-heart-jesus",
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
      "Prayer to the Sacred Heart of Jesus",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-peace-middle-east-2008",
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
      "Prayers for Peace in the Middle East, 2008",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-times-trouble",
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
      "Prayers for Times of Trouble",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-vocations",
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
      "Prayers for Vocations",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-health-and-dignity-sick",
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
      "Prayers for the Health and Dignity of the Sick",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-times-seeking-will-god",
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
      "Prayers in Times of Seeking the Will of God",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-time-war",
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
      "Prayers in a Time of War",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-care-creation-0",
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
      "Prayers on the Care of Creation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayers-care-creation",
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
      "Prayers to Care for Creation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/praying-faithful-citizen",
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
      "Praying Like a Faithful Citizen",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/praying-faithful-citizen-pdf",
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
      "Praying Like a Faithful Citizen PDF",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "angel"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#princeps-gloriosissime"
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
      "angel",
      "Pray Orémus"
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
      "LA": "divine mercy chaplet"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#pro-dolorosa"
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
      "divine mercy chaplet",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/pro-life-prayers",
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
      "Pro-Life Prayers",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#quinque-orationes-chapleti-sanctae-faciei"
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
      "general",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#responsorium-pressi-malorum"
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
      "saint",
      "Pray Orémus"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#responsorium-si-vis-patronum"
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
      "saint",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/sample-prayers-sudan",
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
      "Sample Prayers for Sudan",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "divine mercy chaplet"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#sancte-deus"
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
      "divine mercy chaplet",
      "Pray Orémus"
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
      "LA": "angel, general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#sancte-michael-archangele"
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
      "angel, general",
      "Pray Orémus"
    ]
  },
  {
    "id": "en_scriptural_stations_of_the_cross",
    "category": "national",
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/scriptural-stations-cross",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_scriptural_stations_of_the_cross",
      "national",
      "국가별·기타 기도문",
      "Kinh theo từng nước và kinh khác",
      "Local and Other Prayers",
      "各国・その他の祈り",
      "Preces locales et aliae",
      "Scriptural Stations of the Cross",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/share-journey-prayer-service-solidarity-dreamers-and-migrants",
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
      "Share the Journey: Prayer Service in Solidarity with Dreamers and Migrants",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/short-prayer-vocations",
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
      "Short Prayer for Vocations",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/show-us-your-face",
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
      "Show Us Your Face",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "saint"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#si-quaeris-miracula-ite-ad-antonio"
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
      "saint",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/st-peter-claver-prayer-service",
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
      "St. Peter Claver Prayer Service",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_stations_of_the_cross_for_life",
    "category": "national",
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/stations-cross-life",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_stations_of_the_cross_for_life",
      "national",
      "국가별·기타 기도문",
      "Kinh theo từng nước và kinh khác",
      "Local and Other Prayers",
      "各国・その他の祈り",
      "Preces locales et aliae",
      "Stations of the Cross for Life",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#sub-tuum-praesidium"
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
      "mary",
      "Pray Orémus"
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
      "LA": "general"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#surge-domine"
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
      "general",
      "Pray Orémus"
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
      "LA": "christ"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#suscipe-domine"
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
      "christ",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/synod-prayer-unity",
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
      "Synod Prayer for Unity",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/tantum-ergo",
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
      "Tantum Ergo",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/thanksgiving-day-prayer",
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
      "Thanksgiving Day Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_the_o_antiphons_of_advent",
    "category": "national",
    "titles": {
      "KR": "",
      "VN": "",
      "EN": "The \"O Antiphons\" of Advent",
      "JP": "",
      "LA": ""
    },
    "texts": {
      "KR": "",
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/o-antiphons-advent",
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
      "The \"O Antiphons\" of Advent",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/jubilee-prayer",
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
      "The Jubilee Prayer",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/popes-monthly-intentions-2026",
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
      "The Pope's Monthly Intentions for 2026",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
      "LA": "mary"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#tota-pulchra-es-maria"
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
      "mary",
      "Pray Orémus"
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
      "LA": "holy spirit"
    },
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "Pray Orémus"
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": "https://prayoremus.com/prayers#veni-creator-spiritus"
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
      "holy spirit",
      "Pray Orémus"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/veterans-day",
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
      "Veterans Day",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
    ]
  },
  {
    "id": "en_via_crucis_oraciones_de_los_fieles",
    "category": "national",
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/crucis-oraciones-de-los-fieles",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "en_via_crucis_oraciones_de_los_fieles",
      "national",
      "국가별·기타 기도문",
      "Kinh theo từng nước và kinh khác",
      "Local and Other Prayers",
      "各国・その他の祈り",
      "Preces locales et aliae",
      "Vía Crucis Oraciones de los Fieles",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/we-are-all-gods-image",
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
      "We Are All in God's Image",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/we-are-all-gods-image-spanish",
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
      "We Are All in God's Image - Spanish",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/while-trouble-near-give-them-strength-and-consolation",
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
      "While Trouble is Near, Give Them Strength and Consolation",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/world-youth-day-prayer-united-states",
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
      "World Youth Day Prayer for the United States",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/your-gaze-upon-us",
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
      "Your Gaze is Upon Us",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "Catholic Household Blessings and Prayers / USCCB Prayers",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "https://www.usccb.org/prayers/prayer-sacred-heart-jesus-love-and-mercy",
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
      "​Prayer to the Sacred Heart of Jesus for Love and Mercy",
      "Catholic Household Blessings and Prayers / USCCB Prayers"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#51",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#50",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#47",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#46",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#47",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#50",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#12",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://shimonosekicatholic.org/pray-for-community/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#40",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#48",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#39",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#52",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#44",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#54",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#35",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#14",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#49",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#53",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#30",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#29",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://shimonosekicatholic.org/pray-for-priest/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://shimonosekicatholic.org/pray-for-japan-priest/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#33",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#19",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#21",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#26",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://shimonosekicatholic.org/pray-for-parish/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#31",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#37",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#45",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#36",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#18",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#49",
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
      "広島教区の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#32",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#15",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#23",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://opusdei.org/ja-jp/article/sei-yosefu-7-nichiyoubi/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://shimonosekicatholic.org/novena-to-saint-joseph/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#22",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#13",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/#10",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://inoruhana.com/ja/daily-prayers/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "カトリック祈祷書 祈りの友",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "",
      "VN": "",
      "EN": "",
      "JP": "https://tokyo.catholic.jp/info/diocese/37978/",
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
      "日々の祈り",
      "カトリック祈祷書 祈りの友"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=66&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=40&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=60&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=59&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=48&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=24&ingId=172&sgubun=w",
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
      "슬퍼하는 이들을 위한 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=129&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=52&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=142&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=49&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=24&ingId=173&sgubun=w",
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
      "슬퍼하는 이들을 위한 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=61&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=51&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=46&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=41&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=42&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=65&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=178&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=62&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=39&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=38&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=102&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=36&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=37&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=50&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=47&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=34&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=53&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=24&ingId=170&sgubun=w",
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
      "슬퍼하는 이들을 위한 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=64&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=43&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=217&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
    ]
  },
  {
    "id": "kr_9_32",
    "category": "national",
    "titles": {
      "KR": "십자가의 길",
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
      "KR": "십자가의 길",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=9&ingId=32&sgubun=w",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "tags": [
      "kr_9_32",
      "national",
      "국가별·기타 기도문",
      "Kinh theo từng nước và kinh khác",
      "Local and Other Prayers",
      "各国・その他の祈り",
      "Preces locales et aliae",
      "십자가의 길",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=35&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=179&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=44&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=45&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
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
    "source": {
      "KR": "가톨릭 기도서",
      "VN": "",
      "EN": "",
      "JP": "",
      "LA": ""
    },
    "sourceUrl": {
      "KR": "https://maria.catholic.or.kr/mi_pr/prayer/prayer.asp?menu=prayer&pgubun=6&ingId=143&sgubun=w",
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
      "여러 가지 기도",
      "가톨릭 기도서"
    ]
  }
];

  global.prayerCategoryLabels = prayerCategoryLabels;
  global.prayerData = prayers;
})(globalThis);
