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
    emmanuel: { kr: '임마누엘', vn: 'Emmanuel', en: 'Emmanuel', jp: 'エマヌエル', la: 'Emmanuel' }
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
      '수원교구': entry('matthias', ['germanus'], cbck('201000018')),
      '서울대교구': entry('peter', ['job', 'paul'], cbck('201000011'), { collaboratorSummary: true }),
      '춘천교구': entry('simon', [], cbck('201000013')),
      '대전교구': entry('augustine', [], cbck('201000016')),
      '대구대교구': entry('thaddeus', ['johnBosco'], cbck('201000021')),
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
      'Tổng Giáo phận Hà Nội': entry('joseph', ['joseph'], [
        'https://www.tonggiaophanhanoi.org/cac-uy-ban-muc-vu-tong-giao-phan-ha-noi-hop-tong-ket-2025/'
      ]),
      'Tổng Giáo phận Sài Gòn': entry('joseph', ['joseph'], [
        'https://tgpsaigon.net/bai-viet/duc-tong-giam-muc-giuse-chuc-mung-dai-le-phat-dan-phat-lich-2570-89105',
        'https://tgpsaigon.net/bai-viet/thanh-le-be-mac-nam-thuc-tap-muc-vu-khoa-21-89104'
      ]),
      'Giáo phận Cần Thơ': entry('peter', [], [
        'https://gpcantho.com/giao-phan-can-tho-quyet-dinh-thuc-hanh-muc-vu-nam-2026/'
      ]),
      'Giáo phận Bà Rịa': entry('emmanuel', [], [
        'https://www.giaophanbaria.org/sinh-hoat-giao-xu/binh-gia/2026/07/07/gx-xuan-son-thanh-le-ban-bi-tich-them-suc-ngay-06-7-2026.html'
      ])
    }
  };
})();
