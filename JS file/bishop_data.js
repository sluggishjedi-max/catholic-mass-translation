// Current diocesan bishops used for GPS-based Eucharistic Prayer placeholders.
// Names are baptismal names only. Official-source checks: 2026-07-23.
(function () {
  'use strict';

  const names = {
    simon: { kr: '시몬', vn: 'Simôn', en: 'Simon', jp: 'シモン', la: 'Simon' },
    matthias: { kr: '마티아', vn: 'Mátthia', en: 'Matthias', jp: 'マティア', la: 'Matthias' },
    germanus: { kr: '제르마노', vn: 'Germanô', en: 'Germanus', jp: 'ゲルマノ', la: 'Germanus' },
    peter: { kr: '베드로', vn: 'Phêrô', en: 'Peter', jp: 'ペトロ', la: 'Petrus' },
    job: { kr: '욥', vn: 'Gióp', en: 'Job', jp: 'ヨブ', la: 'Iob' },
    paul: { kr: '바오로', vn: 'Phaolô', en: 'Paul', jp: 'パウロ', la: 'Paulus' },
    augustine: { kr: '아우구스티노', vn: 'Augustinô', en: 'Augustine', jp: 'アウグスティノ', la: 'Augustinus' },
    stephen: { kr: '스테파노', vn: 'Stêphanô', en: 'Stephen', jp: 'ステファノ', la: 'Stephanus' },
    thaddeus: { kr: '타대오', vn: 'Tađêô', en: 'Thaddeus', jp: 'タデオ', la: 'Thaddaeus' },
    johnBosco: { kr: '요한 보스코', vn: 'Gioan Bosco', en: 'John Bosco', jp: 'ヨハネ・ボスコ', la: 'Ioannes Bosco' },
    joseph: { kr: '요셉', vn: 'Giuse', en: 'Joseph', jp: 'ヨセフ', la: 'Ioseph' },
    pius: { kr: '비오', vn: 'Piô', en: 'Pius', jp: 'ピオ', la: 'Pius' },
    johnChrysostom: { kr: '요한 크리소스토모', vn: 'Gioan Kim Khẩu', en: 'John Chrysostom', jp: 'ヨハネ・クリゾストモ', la: 'Ioannes Chrysostomus' },
    linus: { kr: '리노', vn: 'Linô', en: 'Linus', jp: 'リノ', la: 'Linus' },
    johnBaptist: { kr: '요한 세례자', vn: 'Gioan Tẩy Giả', en: 'John Baptist', jp: '洗礼者ヨハネ', la: 'Ioannes Baptista' },
    benedict: { kr: '베네딕토', vn: 'Bênêđictô', en: 'Benedict', jp: 'ベネディクト', la: 'Benedictus' },
    titus: { kr: '티토', vn: 'Titô', en: 'Titus', jp: 'ティト', la: 'Titus' },
    john: { kr: '요한', vn: 'Gioan', en: 'John', jp: 'ヨハネ', la: 'Ioannes' },
    basil: { kr: '바실리오', vn: 'Basiliô', en: 'Basil', jp: 'バジリオ', la: 'Basilius' },
    emmanuel: { kr: '임마누엘', vn: 'Emmanuel', en: 'Emmanuel', jp: 'エマヌエル', la: 'Emmanuel' },
    tarcisius: { kr: '타르치시오', vn: 'Tarcisiô', en: 'Tarcisius', jp: 'タルチシオ', la: 'Tarcisius' },
    andrea: { kr: '안드레아', vn: 'Anrê', en: 'Andrea', jp: 'アンドレア', la: 'Andreas' },
    thomasAquinas: { kr: '토마스 아퀴나스', vn: 'Tôma Aquinô', en: 'Thomas Aquinas', jp: 'トマス・アクィナス', la: 'Thomas Aquinas' },
    michael: { kr: '미카엘', vn: 'Micae', en: 'Michael', jp: 'ミカエル', la: 'Michael' },
    josepMaria: { kr: '요셉 마리아', vn: 'Giuse Maria', en: 'Josep Maria', jp: 'ヨゼフ・マリア', la: 'Ioseph Maria' },
    bernard: { kr: '베르나르도', vn: 'Bênađô', en: 'Bernard', jp: 'ベルナルド', la: 'Bernardus' },
    dominic: { kr: '도미니코', vn: 'Đaminh', en: 'Dominic', jp: 'ドミニコ', la: 'Dominicus' },
    vincent: { kr: '빈첸시오', vn: 'Vinh Sơn', en: 'Vincent', jp: 'ヴィンセンシオ', la: 'Vincentius' },
    alphonse: { kr: '알폰소', vn: 'Alphongsô', en: 'Alphonse', jp: 'アルフォンソ', la: 'Alphonsus' },
    louis: { kr: '루도비코', vn: 'Louis', en: 'Louis', jp: 'ルイ', la: 'Ludovicus' },
    matthew: { kr: '마태오', vn: 'Matthêô', en: 'Matthew', jp: 'マタイ', la: 'Matthaeus' },
    aloysius: { kr: '알로이시오', vn: 'Aloisiô', en: 'Aloysius', jp: 'アロイシオ', la: 'Aloysius' }
  };

  const cbck = code => `https://directory.cbck.or.kr/m/catholicInfo.asp?code=${code}&gubun=1`;
  const entry = (ordinary, auxiliaries, sourceUrls, options = {}) => ({
    ordinary: names[ordinary],
    auxiliaries: (auxiliaries || []).map(key => names[key]),
    sourceUrls: Array.isArray(sourceUrls) ? sourceUrls : [sourceUrls],
    collaboratorSummary: !!options.collaboratorSummary
  });

  globalThis.diocesanBishopData = {
    updatedAt: '2026-07-23',
    entries: {
      '청주교구': entry('simon', [], cbck('201000023')),
      '수원교구': entry('matthias', ['john', 'germanus'], cbck('201000018')),
      '서울대교구': entry('peter', ['job', 'paul'], cbck('201000011'), { collaboratorSummary: true }),
      '춘천교구': entry('simon', [], cbck('201000013')),
      '대전교구': entry('augustine', ['stephen'], cbck('201000016')),
      '대구대교구': entry('thaddeus', ['johnBosco', 'simon'], cbck('201000021'), { collaboratorSummary: true }),
      '부산교구': entry('joseph', ['pius'], cbck('201000022')),
      '안동교구': entry('johnChrysostom', [], cbck('201000025')),
      '마산교구': entry('linus', [], cbck('201000024')),
      '인천교구': entry('johnBaptist', [], cbck('201000017')),
      '의정부교구': entry('benedict', [], cbck('201000020')),
      '광주대교구': entry('simon', [], cbck('201000026')),
      '군종교구': entry('titus', [], cbck('201000029')),
      '전주교구': entry('john', [], cbck('201000027')),
      '제주교구': entry('pius', [], cbck('201000028')),
      '원주교구': entry('basil', [], cbck('201000019')),
      'Giáo phận Lạng Sơn – Cao Bằng': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Hưng Hóa': entry('dominic', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Bắc Ninh': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Tổng Giáo phận Hà Nội': entry('joseph', ['joseph'], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165',
        'https://www.tonggiaophanhanoi.org/cac-uy-ban-muc-vu-tong-giao-phan-ha-noi-hop-tong-ket-2025/'
      ]),
      'Giáo phận Hải Phòng': entry('vincent', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Thái Bình': entry('dominic', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Bùi Chu': entry('thomasAquinas', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Phát Diệm': entry('peter', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Thanh Hóa': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Vinh': entry('alphonse', ['peter'], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Hà Tĩnh': entry('louis', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Tổng Giáo phận Huế': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/duc-cha-giuse-dang-duc-ngan-tong-giam-muc-chinh-toa-tong-giao-phan-hue'
      ]),
      'Giáo phận Đà Nẵng': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/duc-cha-giuse-dang-duc-ngan-tong-giam-muc-chinh-toa-tong-giao-phan-hue'
      ]),
      'Giáo phận Qui Nhơn': entry('matthew', ['johnBaptist'], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165',
        'https://hdgmvietnam.com/chi-tiet/thanh-le-truyen-chuc-giam-muc-pho-cho-duc-cha-gioan-baotixita-nguyen-quoc-hung'
      ]),
      'Giáo phận Kontum': entry('aloysius', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Nha Trang': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Ban Mê Thuột': entry('johnBaptist', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Đà Lạt': entry('dominic', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Phan Thiết': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Phú Cường': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Xuân Lộc': entry('john', ['dominic'], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Bà Rịa': entry('emmanuel', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165',
        'https://www.giaophanbaria.org/sinh-hoat-giao-xu/binh-gia/2026/07/07/gx-xuan-son-thanh-le-ban-bi-tich-them-suc-ngay-06-7-2026.html'
      ]),
      'Tổng Giáo phận Sài Gòn': entry('joseph', ['joseph', 'johnBaptist'], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165',
        'https://hdgmvietnam.com/chi-tiet/thanh-le-truyen-chuc-giam-muc-cho-duc-cha-tan-cu-gioan-baotixita-nguyen-quang-tuyen-vao-luc-08g30-ngay-2362026'
      ], { collaboratorSummary: true }),
      'Giáo phận Mỹ Tho': entry('peter', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Vĩnh Long': entry('peter', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Long Xuyên': entry('joseph', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165'
      ]),
      'Giáo phận Cần Thơ': entry('peter', [], [
        'https://hdgmvietnam.com/chi-tiet/cac-giam-muc-va-giao-phan-viet-nam-nam-2017-31165',
        'https://gpcantho.com/giao-phan-can-tho-quyet-dinh-thuc-hanh-muc-vu-nam-2026/'
      ]),
      '東京大司教区': entry('tarcisius', ['andrea'], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/tokyo/'
      ]),
      '大阪高松大司教区': entry('thomasAquinas', ['paul'], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/ostk/'
      ]),
      '京都司教区': entry('paul', [], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/kyoto/'
      ]),
      '名古屋司教区': entry('michael', [], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/nagoya/'
      ]),
      '福岡司教区': entry('josepMaria', [], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/fukuoka/'
      ]),
      '札幌司教区': entry('bernard', [], [
        'https://www.cbcj.catholic.jp/english/japan/diocese/sapporo/'
      ])
    }
  };
})();
