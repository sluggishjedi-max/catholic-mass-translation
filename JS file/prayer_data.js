(function(global) {
  const prayers = [
    {
      id: 'sign_of_cross',
      category: 'basic',
      titles: {
        KR: '성호경',
        VN: 'Dấu Thánh Giá',
        EN: 'Sign of the Cross',
        JP: '十字架のしるし',
        LA: 'Signum Crucis'
      },
      texts: {
        KR: '성부와 성자와 성령의 이름으로. 아멘.',
        VN: 'Nhân danh Cha và Con và Thánh Thần. Amen.',
        EN: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
        JP: '父と子と聖霊のみ名によって。アーメン。',
        LA: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.'
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'lords_prayer',
      category: 'basic',
      titles: {
        KR: '주님의 기도',
        VN: 'Kinh Lạy Cha',
        EN: 'Our Father',
        JP: '主の祈り',
        LA: 'Pater noster'
      },
      texts: {
        KR: [
          '하늘에 계신 우리 아버지,',
          '아버지의 이름이 거룩히 빛나시며',
          '아버지의 나라가 오시며',
          '아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지소서.',
          '오늘 저희에게 일용할 양식을 주시고',
          '저희에게 잘못한 이를 저희가 용서하오니',
          '저희 죄를 용서하시고',
          '저희를 유혹에 빠지지 않게 하시고',
          '악에서 구하소서. 아멘.'
        ].join('\n'),
        VN: [
          'Lạy Cha chúng con ở trên trời,',
          'chúng con nguyện danh Cha cả sáng,',
          'nước Cha trị đến,',
          'ý Cha thể hiện dưới đất cũng như trên trời.',
          'Xin Cha cho chúng con hôm nay lương thực hằng ngày,',
          'và tha nợ chúng con,',
          'như chúng con cũng tha kẻ có nợ chúng con,',
          'xin chớ để chúng con sa chước cám dỗ,',
          'nhưng cứu chúng con cho khỏi sự dữ. Amen.'
        ].join('\n'),
        EN: [
          'Our Father, who art in heaven, hallowed be thy name;',
          'thy kingdom come; thy will be done on earth as it is in heaven.',
          'Give us this day our daily bread;',
          'and forgive us our trespasses, as we forgive those who trespass against us;',
          'and lead us not into temptation, but deliver us from evil. Amen.'
        ].join('\n'),
        JP: [
          '天におられるわたしたちの父よ、み名が聖とされますように。',
          'み国が来ますように。',
          'みこころが天に行われるとおり地にも行われますように。',
          'わたしたちの日ごとの糧を今日もお与えください。',
          'わたしたちの罪をおゆるしください。',
          'わたしたちも人をゆるします。',
          'わたしたちを誘惑におちいらせず、悪からお救いください。アーメン。'
        ].join('\n'),
        LA: [
          'Pater noster, qui es in caelis, sanctificetur nomen tuum;',
          'adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra.',
          'Panem nostrum quotidianum da nobis hodie;',
          'et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris;',
          'et ne nos inducas in tentationem, sed libera nos a malo. Amen.'
        ].join('\n')
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'hail_mary',
      category: 'basic',
      titles: {
        KR: '성모송',
        VN: 'Kinh Kính Mừng',
        EN: 'Hail Mary',
        JP: 'アヴェ・マリアの祈り',
        LA: 'Ave Maria'
      },
      texts: {
        KR: [
          '은총이 가득하신 마리아님, 기뻐하소서.',
          '주님께서 함께 계시니 여인 중에 복되시며',
          '태중의 아들 예수님 또한 복되시나이다.',
          '천주의 성모 마리아님,',
          '이제와 저희 죽을 때에 저희 죄인을 위하여 빌어주소서. 아멘.'
        ].join('\n'),
        VN: [
          'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà,',
          'Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ.',
          'Thánh Maria, Đức Mẹ Chúa Trời,',
          'cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. Amen.'
        ].join('\n'),
        EN: [
          'Hail Mary, full of grace, the Lord is with thee;',
          'blessed art thou among women, and blessed is the fruit of thy womb, Jesus.',
          'Holy Mary, Mother of God, pray for us sinners,',
          'now and at the hour of our death. Amen.'
        ].join('\n'),
        JP: [
          'アヴェ・マリア、恵みに満ちた方、主はあなたとともにおられます。',
          'あなたは女のうちで祝福され、ご胎内の御子イエスも祝福されています。',
          '神の母聖マリア、罪深いわたしたちのために、',
          '今も死を迎える時もお祈りください。アーメン。'
        ].join('\n'),
        LA: [
          'Ave Maria, gratia plena, Dominus tecum;',
          'benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.',
          'Sancta Maria, Mater Dei, ora pro nobis peccatoribus,',
          'nunc et in hora mortis nostrae. Amen.'
        ].join('\n')
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'glory_be',
      category: 'basic',
      titles: {
        KR: '영광송',
        VN: 'Kinh Sáng Danh',
        EN: 'Glory Be',
        JP: '栄唱',
        LA: 'Gloria Patri'
      },
      texts: {
        KR: '영광이 성부와 성자와 성령께 처음과 같이 이제와 항상 영원히. 아멘.',
        VN: 'Sáng danh Đức Chúa Cha và Đức Chúa Con và Đức Chúa Thánh Thần. Như đã có trước vô cùng và bây giờ và hằng có và đời đời chẳng cùng. Amen.',
        EN: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
        JP: '栄光は父と子と聖霊に。初めのように、今もいつも世々に。アーメン。',
        LA: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.'
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'apostles_creed',
      category: 'basic',
      titles: {
        KR: '사도 신경',
        VN: 'Kinh Tin Kính Các Thánh Tông Đồ',
        EN: 'Apostles’ Creed',
        JP: '使徒信条',
        LA: 'Symbolum Apostolorum'
      },
      texts: {
        KR: [
          '전능하신 천주 성부, 천지의 창조주를 저는 믿나이다.',
          '그 외아들 우리 주 예수 그리스도님',
          '성령으로 인하여 동정 마리아께 잉태되어 나시고',
          '본시오 빌라도 통치 아래서 고난을 받으시고',
          '십자가에 못박혀 돌아가시고 묻히셨으며',
          '저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고',
          '하늘에 올라 전능하신 천주 성부 오른편에 앉으시며',
          '그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다.',
          '성령을 믿으며',
          '거룩하고 보편된 교회와 모든 성인의 통공을 믿으며',
          '죄의 용서와 육신의 부활을 믿으며',
          '영원한 삶을 믿나이다. 아멘.'
        ].join('\n'),
        VN: [
          'Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất.',
          'Tôi tin kính Đức Chúa Giêsu Kitô là Con Một Đức Chúa Cha cùng là Chúa chúng tôi;',
          'bởi phép Đức Chúa Thánh Thần mà Người xuống thai, sinh bởi Bà Maria Đồng Trinh;',
          'chịu nạn đời quan Phongxiô Philatô, chịu đóng đinh trên cây Thánh Giá, chết và táng xác;',
          'xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết mà sống lại;',
          'lên trời, ngự bên hữu Đức Chúa Cha phép tắc vô cùng;',
          'ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết.',
          'Tôi tin kính Đức Chúa Thánh Thần.',
          'Tôi tin có Hội Thánh hằng có ở khắp thế này, các thánh thông công.',
          'Tôi tin phép tha tội. Tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy. Amen.'
        ].join('\n'),
        EN: [
          'I believe in God, the Father almighty, Creator of heaven and earth,',
          'and in Jesus Christ, his only Son, our Lord,',
          'who was conceived by the Holy Spirit, born of the Virgin Mary,',
          'suffered under Pontius Pilate, was crucified, died and was buried;',
          'he descended into hell; on the third day he rose again from the dead;',
          'he ascended into heaven, and is seated at the right hand of God the Father almighty;',
          'from there he will come to judge the living and the dead.',
          'I believe in the Holy Spirit, the holy catholic Church,',
          'the communion of saints, the forgiveness of sins,',
          'the resurrection of the body, and life everlasting. Amen.'
        ].join('\n'),
        JP: [
          '天地の創造主、全能の父である神を信じます。',
          '父のひとり子、わたしたちの主イエス・キリストを信じます。',
          '主は聖霊によってやどり、おとめマリアから生まれ、',
          'ポンティオ・ピラトのもとで苦しみを受け、十字架につけられて死に、葬られ、',
          '陰府に下り、三日目に死者のうちから復活し、',
          '天に昇って、全能の父である神の右の座に着き、',
          '生者と死者を裁くために来られます。',
          '聖霊を信じ、聖なる普遍の教会、聖徒の交わり、罪のゆるし、',
          'からだの復活、永遠のいのちを信じます。アーメン。'
        ].join('\n'),
        LA: [
          'Credo in Deum, Patrem omnipotentem, Creatorem caeli et terrae,',
          'et in Iesum Christum, Filium eius unicum, Dominum nostrum,',
          'qui conceptus est de Spiritu Sancto, natus ex Maria Virgine,',
          'passus sub Pontio Pilato, crucifixus, mortuus, et sepultus;',
          'descendit ad inferos; tertia die resurrexit a mortuis;',
          'ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis;',
          'inde venturus est iudicare vivos et mortuos.',
          'Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam,',
          'sanctorum communionem, remissionem peccatorum,',
          'carnis resurrectionem, vitam aeternam. Amen.'
        ].join('\n')
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'guardian_angel',
      category: 'devotion',
      titles: {
        KR: '수호천사에게 바치는 기도',
        VN: 'Kinh Thiên Thần Bản Mệnh',
        EN: 'Guardian Angel Prayer',
        JP: '守護の天使への祈り',
        LA: 'Angele Dei'
      },
      texts: {
        KR: '저를 지켜 주시는 수호천사여, 하느님께서 당신께 맡기신 저를 오늘 비추고 지켜 주시며 다스리고 이끌어 주소서. 아멘.',
        VN: 'Lạy Thiên Thần Chúa là Đấng gìn giữ con, xin soi sáng, gìn giữ, cai quản và hướng dẫn con trong ngày hôm nay. Amen.',
        EN: 'Angel of God, my guardian dear, to whom God’s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
        JP: '神の天使、わたしの守護者よ、神の愛によってあなたにゆだねられたわたしを、今日も照らし、守り、導いてください。アーメン。',
        LA: 'Angele Dei, qui custos es mei, me tibi commissum pietate superna illumina, custodi, rege et guberna. Amen.'
      },
      source: '기본 다국어 기도문'
    },
    {
      id: 'eternal_rest',
      category: 'devotion',
      titles: {
        KR: '위령 기도',
        VN: 'Nghỉ yên muôn đời',
        EN: 'Eternal Rest',
        JP: '永遠の安息を願う祈り',
        LA: 'Requiem aeternam'
      },
      texts: {
        KR: '주님, 세상을 떠난 이들에게 영원한 안식을 주소서. 영원한 빛을 그들에게 비추소서. 세상을 떠난 이들이 하느님의 자비로 평화의 안식을 얻게 하소서. 아멘.',
        VN: 'Lạy Chúa, xin cho các linh hồn được nghỉ yên muôn đời, và cho ánh sáng ngàn thu chiếu soi trên các linh hồn ấy. Xin cho các linh hồn được nghỉ yên muôn đời. Amen.',
        EN: 'Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.',
        JP: '主よ、亡くなった人々に永遠の安息を与え、絶えざる光で照らしてください。神のいつくしみによって、安らかに憩うことができますように。アーメン。',
        LA: 'Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen.'
      },
      source: '기본 다국어 기도문'
    }
  ];

  global.prayerData = prayers;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = prayers;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
