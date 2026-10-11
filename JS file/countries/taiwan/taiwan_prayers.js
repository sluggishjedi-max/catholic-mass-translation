// Taiwan prayer module placeholder.
(function registerTaiwanPrayers(global) {
  'use strict';

  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData.TW = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'TW',
    jurisdictions: Object.freeze(['TW']),
    status: 'under-development',
    statusLabels: Object.freeze({
      KR: '(제작중)',
      ZH: '(製作中)',
      EN: '(Under development)'
    }),
    entries: Object.freeze([
      {
        id: "335.WYD_2027",
        category: "national",
        titles: {
          ZH: "2027年首爾世界青年節官方祈禱文"
        },
        texts: {
          ZH: "關愛青年的主，\n祢懷著無限的愛與仁慈召叫了我們，\n我們為此向祢獻上感激之情。\n\n天父，我們將自己託付於祢，\n願全世界的青年都能在祢教會的懷抱內得到安慰，\n同享共融與合一的喜悅。\n\n基督，祢已經永遠戰勝了世界，\n但願世上每一個人都從祢說過的「放心」這句話中發現希望，\n並且明白愛與寬恕的十字架就是戰勝世界。\n\n聖神，祢是愛的火焰，\n藉著祢奧妙的手，\n祢在韓國撒下了福音的種子，\n求祢使韓國諸位殉道聖人的信德也在我們的心中燃起，\n讓我們成為那活出和平、愛與真理的福音的門徒。\n\n主啊，藉著這次世界青年節的朝聖旅途，\n願我們所有人聆聽彼此的聲音，\n在那其中尋求祢的旨意，\n並成為全體天主子民並肩前進的同道偕行教會。阿們。\n\n○ 仁慈與和平之后，\n◎ 請為我們祈禱。\n○ 首爾世界青年節主保聖人們，\n◎ 請為所有年輕人祈禱。"
        },
        sourceCategory: {},
        tags: [
          "335.WYD_2027",
          "national",
          "국가별 고유 기도문",
          "Kinh Nguyện Riêng Từng Nước",
          "Local Prayers",
          "各国の祈り",
          "Preces locales",
          "2027年首爾世界青年節官方祈禱文"
        ]
      }
    ])
  });
})(globalThis);
