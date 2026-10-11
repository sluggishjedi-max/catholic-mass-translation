const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'JS file', 'missa_data.js');
const baselinePath = path.join(repoRoot, 'tmp', 'publish-catholic-mass-translation', 'JS file', 'missa_data.js');

const damagedSource = fs.readFileSync(dataPath, 'utf8');
if (damagedSource.includes('},,')) {
  fs.writeFileSync(dataPath, damagedSource.replace(/},,/g, '},'), 'utf8');
}

function loadMissaData(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const context = { globalThis: {} };
  vm.runInNewContext(source, context, { filename: filePath });
  return context.globalThis.missaData;
}

function eucharistSongs(data) {
  const item = data.find(entry => entry && entry.id === '3.3 eucharist');
  if (!item || !item.songs) throw new Error('Cannot find Eucharistic Prayer prefaces.');
  return item.songs;
}

const currentSongs = eucharistSongs(loadMissaData(dataPath));
const baselineSongs = fs.existsSync(baselinePath) ? eucharistSongs(loadMissaData(baselinePath)) : {};
const overrides = {};
const put = (key, title) => { overrides[key] = title; };
const merge = (key, title) => { overrides[key] = Object.assign({}, overrides[key] || {}, title); };

put('advent_1', {
  kr: '대림 감사송 1 : 그리스도의 두 차례 오심',
  vn: 'KINH TIỀN TỤNG MÙA VỌNG I - Hai lần Đức Kitô đến',
  en: 'PREFACE I OF ADVENT - The two comings of Christ',
  jp: '待降節叙唱一「キリストの二つの来臨」',
  la: 'PRÆFATIO I DE ADVENTU - De duobus adventibus Christi'
});
put('advent_2', {
  kr: '대림 감사송 2 : 그리스도를 기다리는 두 가지 의미',
  vn: 'KINH TIỀN TỤNG MÙA VỌNG II - Hai lần mong đợi Đức Kitô',
  en: 'PREFACE II OF ADVENT - The twofold expectation of Christ',
  jp: '待降節叙唱二「キリストを待ち望む二重の意味」',
  la: 'PRÆFATIO II DE ADVENTU - De duplici exspectatione Christi'
});

const nativity = [
  {
    kr: '주님 성탄 감사송 1 : 빛이신 그리스도',
    vn: 'KINH TIỀN TỤNG GIÁNG SINH I - Đức Kitô là ánh sáng',
    en: 'PREFACE I OF THE NATIVITY OF THE LORD - Christ the Light',
    jp: '主の降誕叙唱一',
    la: 'PRÆFATIO I DE NATIVITATE DOMINI - De Christo luce'
  },
  {
    kr: '주님 성탄 감사송 2 : 강생으로 온 세상이 새로워짐',
    vn: 'KINH TIỀN TỤNG GIÁNG SINH II - Canh tân vạn vật trong mầu nhiệm Nhập Thể',
    en: 'PREFACE II OF THE NATIVITY OF THE LORD - The restoration of all things in the Incarnation',
    jp: '主の降誕叙唱二',
    la: 'PRÆFATIO II DE NATIVITATE DOMINI - De restauratione universa in Incarnatione'
  },
  {
    kr: '주님 성탄 감사송 3 : 말씀의 강생으로 이루어진 거룩한 교환',
    vn: 'KINH TIỀN TỤNG GIÁNG SINH III - Cuộc trao đổi trong mầu nhiệm Ngôi Lời Nhập Thể',
    en: 'PREFACE III OF THE NATIVITY OF THE LORD - The exchange in the Incarnation of the Word',
    jp: '主の降誕叙唱三',
    la: 'PRÆFATIO III DE NATIVITATE DOMINI - De commercio in Incarnatione Verbi'
  }
];
nativity.forEach((title, index) => put(`nativity_${index + 1}`, title));

put('epiphany', {
  kr: '주님 공현 감사송 : 인류의 빛이신 그리스도',
  vn: 'KINH TIỀN TỤNG LỄ HIỂN LINH - Đức Kitô là ánh sáng muôn dân',
  en: 'PREFACE OF THE EPIPHANY OF THE LORD - Christ the light of the nations',
  jp: '主の公現叙唱「諸国民の光であるキリスト」',
  la: 'PRÆFATIO DE EPIPHANIA DOMINI - De Christo lumine gentium'
});

merge('lent_1', { kr: '사순 감사송 1 : 사순 시기의 영성적 의미' });
merge('lent_3', {
  kr: '사순 감사송 3 : 절제',
  vn: 'KINH TIỀN TỤNG MÙA CHAY III - Hiệu quả của việc hãm mình',
  en: 'PREFACE III OF LENT - The fruits of abstinence',
  la: 'PRÆFATIO III DE QUADRAGESIMA'
});
merge('lent_4', {
  kr: '사순 감사송 4 : 단식',
  vn: 'KINH TIỀN TỤNG MÙA CHAY IV - Hiệu quả của chay tịnh',
  en: 'PREFACE IV OF LENT - The fruits of fasting',
  la: 'PRÆFATIO IV DE QUADRAGESIMA - De fructibus ieiunii'
});

const lentSundays = [
  ['lent_1st_sunday', '사순 감사송 5 : 주님께서 받으신 유혹(사순 제1주일)', 'KINH TIỀN TỤNG CHÚA NHẬT I MÙA CHAY - Chúa chịu cám dỗ', 'PREFACE OF THE FIRST SUNDAY OF LENT - The Temptation of the Lord', '四旬節叙唱五「主の誘惑」', 'PRÆFATIO DE PRIMA DOMINICA QUADRAGESIMÆ - De tentatione Domini'],
  ['lent_2nd_sunday', '사순 감사송 6 : 주님의 거룩한 변모(사순 제2주일)', 'KINH TIỀN TỤNG CHÚA NHẬT II MÙA CHAY - Chúa hiển dung', 'PREFACE OF THE SECOND SUNDAY OF LENT - The Transfiguration of the Lord', '四旬節叙唱六「主の変容」', 'PRÆFATIO DE SECUNDA DOMINICA QUADRAGESIMÆ - De transfiguratione Domini'],
  ['lent_3rd_sunday', '사순 감사송 7 : 사마리아 여인(사순 제3주일)', 'KINH TIỀN TỤNG CHÚA NHẬT III MÙA CHAY - Người phụ nữ Samari', 'PREFACE OF THE THIRD SUNDAY OF LENT - The Samaritan Woman', '四旬節叙唱七「サマリアの女」', 'PRÆFATIO DE TERTIA DOMINICA QUADRAGESIMÆ - De Samaritana'],
  ['lent_4th_sunday', '사순 감사송 8 : 태어나면서부터 눈먼 사람(사순 제4주일)', 'KINH TIỀN TỤNG CHÚA NHẬT IV MÙA CHAY - Người mù từ thuở mới sinh', 'PREFACE OF THE FOURTH SUNDAY OF LENT - The Man Born Blind', '四旬節叙唱八「生まれつきの盲人」', 'PRÆFATIO DE QUARTA DOMINICA QUADRAGESIMÆ - De cæco nato'],
  ['lent_5th_sunday', '사순 감사송 9 : 라자로(사순 제5주일)', 'KINH TIỀN TỤNG CHÚA NHẬT V MÙA CHAY - Ông Ladarô', 'PREFACE OF THE FIFTH SUNDAY OF LENT - Lazarus', '四旬節叙唱九「ラザロ」', 'PRÆFATIO DE QUINTA DOMINICA QUADRAGESIMÆ - De Lazaro']
];
for (const [key, kr, vn, en, jp, la] of lentSundays) put(key, { kr, vn, en, jp, la });

put('passion_1', {
  kr: '주님 수난 감사송 1 : 십자가의 힘',
  vn: 'KINH TIỀN TỤNG THƯƠNG KHÓ I - Quyền lực của Thập giá',
  en: 'PREFACE I OF THE PASSION OF THE LORD - The power of the Cross',
  jp: '主の受難叙唱一「十字架の力」',
  la: 'PRÆFATIO I DE PASSIONE DOMINI - De virtute Crucis'
});
put('passion_2', {
  kr: '주님 수난 감사송 2 : 수난의 승리',
  vn: 'KINH TIỀN TỤNG THƯƠNG KHÓ II - Chiến thắng của cuộc Khổ Nạn',
  en: 'PREFACE II OF THE PASSION OF THE LORD - The victory of the Passion',
  jp: '主の受難叙唱二「受難の勝利」',
  la: 'PRÆFATIO II DE PASSIONE DOMINI - De victoria passionis'
});

const easterKr = [
  '부활 감사송 1 : 파스카의 신비',
  '부활 감사송 2 : 그리스도 안의 새 생명',
  '부활 감사송 3 : 살아 계시며 언제나 우리를 위하여 빌어 주시는 그리스도',
  '부활 감사송 4 : 파스카 신비로 온 세상이 새로워짐',
  '부활 감사송 5 : 사제이시며 제물이신 그리스도'
];
const easterVn = [
  'KINH TIỀN TỤNG PHỤC SINH I - Mầu nhiệm Vượt qua',
  'KINH TIỀN TỤNG PHỤC SINH II - Cuộc sống mới trong Đức Kitô',
  'KINH TIỀN TỤNG PHỤC SINH III - Đức Kitô hằng sống và luôn chuyển cầu cho chúng ta',
  'KINH TIỀN TỤNG PHỤC SINH IV - Tái tạo vũ trụ nhờ mầu nhiệm Vượt Qua',
  'KINH TIỀN TỤNG PHỤC SINH V - Đức Kitô là Linh mục và là của lễ'
];
const easterEn = [
  'PREFACE I OF EASTER - The Paschal Mystery',
  'PREFACE II OF EASTER - New life in Christ',
  'PREFACE III OF EASTER - Christ living and always interceding for us',
  'PREFACE IV OF EASTER - The restoration of the universe through the Paschal Mystery',
  'PREFACE V OF EASTER - Christ, Priest and Victim'
];
const easterLa = [
  'PRÆFATIO PASCHALIS I - De mysterio paschali',
  'PRÆFATIO PASCHALIS II',
  'PRÆFATIO PASCHALIS III - De Christo vivente et semper interpellante pro nobis',
  'PRÆFATIO PASCHALIS IV - De restauratione universi per mysterium paschale',
  'PRÆFATIO PASCHALIS V - De Christo sacerdote et victima'
];
for (let index = 0; index < 5; index += 1) {
  put(`easter_${index + 1}`, { kr: easterKr[index], vn: easterVn[index], en: easterEn[index], jp: `復活叙唱${['一', '二', '三', '四', '五'][index]}${index === 0 ? '「過越の神秘」' : ''}`, la: easterLa[index] });
}

const ascension = [
  ['주님 승천 감사송 1 : 승천의 신비', 'KINH TIỀN TỤNG THĂNG THIÊN I - Mầu nhiệm Thăng Thiên', 'PREFACE I OF THE ASCENSION OF THE LORD - The mystery of the Ascension', '主の昇天叙唱一「昇天の神秘」', 'PRÆFATIO I DE ASCENSIONE DOMINI - De mysterio Ascensionis'],
  ['주님 승천 감사송 2 : 승천의 신비', 'KINH TIỀN TỤNG THĂNG THIÊN II - Mầu nhiệm Thăng Thiên', 'PREFACE II OF THE ASCENSION OF THE LORD - The mystery of the Ascension', '主の昇天叙唱二「昇天の神秘」', 'PRÆFATIO II DE ASCENSIONE DOMINI - De mysterio Ascensionis']
];
ascension.forEach(([kr, vn, en, jp, la], index) => put(`ascension_${index + 1}`, { kr, vn, en, jp, la }));
put('pentecost', {
  kr: '성령 강림 감사송 : 성령 강림의 신비',
  vn: 'KINH TIỀN TỤNG LỄ HIỆN XUỐNG - Mầu nhiệm Chúa Thánh Thần hiện xuống',
  en: 'PREFACE OF PENTECOST - The mystery of Pentecost',
  jp: '聖霊降臨叙唱「聖霊降臨の神秘」',
  la: 'PRÆFATIO DE PENTECOSTE - De mysterio Pentecostes'
});

const ordinaryKr = [
  '연중 주일 감사송 1 : 파스카 신비와 하느님 백성',
  '연중 주일 감사송 2 : 구원의 신비',
  '연중 주일 감사송 3 : 사람이신 그리스도를 통한 인류 구원',
  '연중 주일 감사송 4 : 구원의 역사',
  '연중 주일 감사송 5 : 창조',
  '연중 주일 감사송 6 : 영원한 파스카의 보증',
  '연중 주일 감사송 7 : 그리스도의 순종과 우리의 구원',
  '연중 주일 감사송 8 : 삼위의 일치와 교회의 일치'
];
const ordinaryVn = [
  'Mầu nhiệm Vượt qua và Dân Thiên Chúa', 'Mầu nhiệm cứu độ', 'Việc cứu độ loài người do một người', 'Lịch sử cứu độ', 'Việc sáng tạo', 'Bảo chứng của sự Phục Sinh muôn đời', 'Ơn cứu độ nhờ sự vâng phục của Đức Kitô', 'Hội Thánh được liên kết nhờ sự duy nhất của Ba Ngôi'
];
const ordinaryEn = ['The Paschal Mystery and the People of God', 'The mystery of salvation', 'The salvation of man by a man', 'The history of salvation', 'Creation', 'The pledge of the eternal Passover', 'Salvation through the obedience of Christ', 'The Church united by the unity of the Trinity'];
const ordinaryLa = ['De mysterio paschali et de populo Dei', 'De mysterio salutis', 'De salvatione hominis per hominem', 'De historia salutis', '', 'De pignore æterni Paschatis', 'De salute per obœdientiam Christi', 'De Ecclesia adunata ex unitate Trinitatis'];
for (let index = 0; index < 8; index += 1) {
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][index];
  put(`ordinary_${index + 1}`, {
    kr: ordinaryKr[index],
    vn: `KINH TIỀN TỤNG CHÚA NHẬT THƯỜNG NIÊN ${roman} - ${ordinaryVn[index]}`,
    en: `PREFACE ${roman} OF THE SUNDAYS IN ORDINARY TIME - ${ordinaryEn[index]}`,
    jp: `年間主日叙唱${['一', '二', '三', '四', '五', '六', '七', '八'][index]}${index === 0 ? '「過越の神秘と神の民」' : ''}`,
    la: `PRÆFATIO ${roman} DE DOMINICIS “PER ANNUM”${ordinaryLa[index] ? ` - ${ordinaryLa[index]}` : ''}`
  });
}

const commonKr = [
  '공통 감사송 1 : 그리스도 안에서 만물이 새로워짐',
  '공통 감사송 2 : 그리스도를 통한 구원',
  '공통 감사송 3 : 인간의 창조와 회복에 대한 하느님 찬미',
  '공통 감사송 4 : 하느님의 선물인 찬미',
  '공통 감사송 5 : 그리스도의 신비 선포',
  '공통 감사송 6 : 그리스도 안에서의 구원 신비'
];
const commonVn = ['Canh tân vạn vật trong Đức Kitô', 'Ơn cứu độ nhờ Đức Kitô', 'Ca ngợi Thiên Chúa tạo dựng và canh tân loài người', 'Được ca ngợi Chúa là một hồng ân', 'Công bố mầu nhiệm của Đức Kitô', 'Mầu nhiệm cứu độ trong Đức Kitô'];
const commonEn = ['The renewal of all things in Christ', 'Salvation through Christ', 'Praise to God for the creation and restoration of the human race', 'Praise, the gift of God', 'The proclamation of the mystery of Christ', 'The mystery of salvation in Christ'];
const commonJp = ['キリストにおける万物の刷新', 'キリストによる救い', '人間の創造と回復に対する神への賛美', '神のたまものである賛美', 'キリストの神秘の宣言', 'キリストにおける救いの神秘'];
const commonLa = ['', 'De salute per Christum', 'Laudes Deo pro creatione et reformatione hominis', 'De laude, dono Dei', 'Proclamatio mysterii Christi', 'De mysterio salutis in Christo'];
for (let index = 0; index < 6; index += 1) {
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'][index];
  put(`common_${index + 1}`, {
    kr: commonKr[index],
    vn: `KINH TIỀN TỤNG CHUNG ${roman} - ${commonVn[index]}`,
    en: `COMMON PREFACE ${roman} - ${commonEn[index]}`,
    jp: `共通叙唱${['一', '二', '三', '四', '五', '六'][index]}「${commonJp[index]}」`,
    la: `PRÆFATIO COMMUNIS ${roman}${commonLa[index] ? ` - ${commonLa[index]}` : ''}`
  });
}

const deadKr = ['그리스도 안에서의 부활 희망', '그리스도께서 돌아가시어 우리가 살게 됨', '구원이시며 생명이신 그리스도', '지상 생활에서 천상 영광으로', '그리스도의 승리를 통한 우리의 부활'];
const deadEn = ['The hope of resurrection in Christ', 'Christ died so that we might live', 'Christ, the salvation and the life', 'From earthly life to heavenly glory', 'Our resurrection through the victory of Christ'];
const deadLa = ['De spe resurrectionis in Christo', 'Christus mortuus est pro vita nostra', 'Christus, salus et vita', 'De vita terrena ad gloriam cælestem', 'De resurrectione nostra per victoriam Christi'];
for (let index = 0; index < 5; index += 1) {
  const roman = ['I', 'II', 'III', 'IV', 'V'][index];
  put(`dead_${index + 1}`, {
    kr: `위령 감사송 ${index + 1} : ${deadKr[index]}`,
    vn: `KINH TIỀN TỤNG ${roman} - CẦU CHO NHỮNG NGƯỜI ĐÃ QUA ĐỜI`,
    en: `PREFACE ${roman} FOR THE DEAD - ${deadEn[index]}`,
    jp: `死者叙唱${['一', '二', '三', '四', '五'][index]}`,
    la: `PRÆFATIO ${roman} DE DEFUNCTIS - ${deadLa[index]}`
  });
}

put('mary_1', {
  kr: '복되신 동정 마리아 감사송 1 : 어머니이신 마리아',
  vn: 'KINH TIỀN TỤNG ĐỨC MẸ I - Thiên chức làm Mẹ của Đức Trinh Nữ Maria',
  en: 'PREFACE I OF THE BLESSED VIRGIN MARY - The Motherhood of the Blessed Virgin Mary',
  jp: '聖母マリア叙唱一',
  la: 'PRÆFATIO I DE BEATA MARIA VIRGINE - De Maternitate beatæ Mariæ Virginis'
});
put('mary_2', {
  kr: '복되신 동정 마리아 감사송 2 : 마리아의 노래로 하느님을 찬미하는 교회',
  vn: 'KINH TIỀN TỤNG ĐỨC MẸ II - Hội Thánh dùng lời Đức Trinh Nữ Maria',
  en: 'PREFACE II OF THE BLESSED VIRGIN MARY - The Church praises God with the words of Mary',
  jp: '聖母マリア叙唱二',
  la: 'PRÆFATIO II DE BEATA MARIA VIRGINE - Ecclesia, verbis Mariæ, laudes Deo persolvit'
});

put('apostles_1', {
  kr: '사도 감사송 1 : 하느님 백성의 목자인 사도',
  vn: 'KINH TIỀN TỤNG CÁC THÁNH TÔNG ĐỒ I - Các Tông Đồ là mục tử của Dân Thiên Chúa',
  en: 'PREFACE I OF APOSTLES - The Apostles, shepherds of God’s people',
  jp: '使徒叙唱一',
  la: 'PRÆFATIO I DE APOSTOLIS - De Apostolis pastoribus populi Dei'
});
put('apostles_2', {
  kr: '사도 감사송 2 : 교회의 기초이며 증거자인 사도',
  vn: 'KINH TIỀN TỤNG THÁNH TÔNG ĐỒ II - Các Tông Đồ là nền tảng và chứng nhân',
  en: 'PREFACE II OF APOSTLES - The apostolic foundation and witness',
  jp: '使徒叙唱二',
  la: 'PRÆFATIO II DE APOSTOLIS - De apostolico fundamento et testimonio'
});
put('martyrs', {
  kr: '순교자 감사송 1 : 순교자들의 증거와 모범',
  vn: 'KINH TIỀN TỤNG THÁNH TỬ ĐẠO I - Dấu chỉ và gương sáng của các vị Tử Đạo',
  en: 'PREFACE I OF HOLY MARTYRS - The sign and example of martyrdom',
  jp: '殉教者叙唱一',
  la: 'PRÆFATIO I DE SANCTIS MARTYRIBUS - De signo et exemplo martyrii'
});
put('pastors', {
  kr: '목자 감사송 : 교회 안에 계신 거룩한 목자',
  vn: 'KINH TIỀN TỤNG THÁNH MỤC TỬ - Sự hiện diện của các Thánh Mục Tử trong Hội Thánh',
  en: 'PREFACE OF HOLY PASTORS - The presence of holy Pastors in the Church',
  jp: '聖なる牧者叙唱「教会における聖なる牧者の現存」',
  la: 'PRÆFATIO DE SANCTIS PASTORIBUS - De præsentia sanctorum Pastorum in Ecclesia'
});
put('virgins_and_religious', {
  kr: '동정녀와 수도자 감사송 : 하느님께 봉헌된 삶의 표지',
  vn: 'KINH TIỀN TỤNG THÁNH TRINH NỮ – TU SĨ - Dấu chỉ của đời tận hiến cho Thiên Chúa',
  en: 'PREFACE OF HOLY VIRGINS AND RELIGIOUS - The sign of a life consecrated to God',
  jp: '聖なるおとめと修道者叙唱「神に奉献された生活のしるし」',
  la: 'PRÆFATIO DE SANCTIS VIRGINIBUS ET RELIGIOSIS - De signo vitæ Deo consecratæ'
});
put('saints_1', {
  kr: '성인 감사송 1 : 성인들의 영광',
  vn: 'KINH TIỀN TỤNG CÁC THÁNH I - Vinh quang của các Thánh',
  en: 'PREFACE I OF SAINTS - The glory of the Saints',
  jp: '諸聖人叙唱一「聖人の栄光」',
  la: 'PRÆFATIO I DE SANCTIS - De gloria Sanctorum'
});
put('saints_2', {
  kr: '성인 감사송 2 : 성인들 안에서 이루어진 하느님의 일',
  vn: 'KINH TIỀN TỤNG CÁC THÁNH II - Hoạt động của các Thánh',
  en: 'PREFACE II OF SAINTS - The action of the Saints',
  jp: '諸聖人叙唱二',
  la: 'PRÆFATIO II DE SANCTIS - De actione Sanctorum'
});

merge('john_the_baptist', {
  kr: '세례자 요한 감사송 : 선구자의 사명',
  vn: 'KINH TIỀN TỤNG SINH NHẬT THÁNH GIOAN TẨY GIẢ - Sứ mạng của vị Tiền Hô',
  en: 'PREFACE OF THE NATIVITY OF SAINT JOHN THE BAPTIST - The mission of the Precursor',
  jp: '洗礼者聖ヨハネ誕生叙唱「先駆者の使命」',
  la: 'PRÆFATIO DE NATIVITATE SANCTI IOANNIS BAPTISTÆ'
});
merge('holy_trinity', {
  kr: '주님의 축일과 신비 감사송 1 : 지극히 거룩하신 삼위일체의 신비(삼위일체 대축일)',
  vn: 'KINH TIỀN TỤNG CHÚA BA NGÔI - Mầu nhiệm Thiên Chúa Ba Ngôi',
  en: 'PREFACE OF THE MOST HOLY TRINITY - The mystery of the Most Holy Trinity',
  jp: '三位一体叙唱「三位一体の神秘」',
  la: 'PRÆFATIO DE SANCTISSIMA TRINITATE'
});
merge('transfiguration', {
  kr: '주님의 축일과 신비 감사송 9 : 변모의 신비',
  vn: 'KINH TIỀN TỤNG CHÚA HIỂN DUNG - Mầu nhiệm Chúa hiển dung',
  en: 'PREFACE OF THE TRANSFIGURATION OF THE LORD - The mystery of the Transfiguration',
  jp: '主の変容叙唱「変容の神秘」',
  la: 'PRÆFATIO DE TRANSFIGURATIONE DOMINI'
});
merge('eucharist_1', {
  kr: '성찬 감사송 1 : 그리스도의 제사와 성사',
  vn: 'KINH TIỀN TỤNG THÁNH THỂ I - Hy lễ và bí tích của Đức Kitô',
  en: 'PREFACE I OF THE MOST HOLY EUCHARIST - The Sacrifice and the Sacrament of Christ',
  la: 'PRÆFATIO I DE SS.MA EUCHARISTIA - De sacrificio et de sacramento Christi'
});
merge('eucharist_2', {
  kr: '성찬 감사송 2 : 지극히 거룩한 성찬의 열매',
  vn: 'KINH TIỀN TỤNG THÁNH THỂ II - Hiệu quả của bí tích Thánh Thể',
  en: 'PREFACE II OF THE MOST HOLY EUCHARIST - The fruits of the Most Holy Eucharist',
  la: 'PRÆFATIO II DE SS.MA EUCHARISTIA - De fructibus Sanctissimæ Eucharistiæ'
});
merge('sacred_heart', {
  kr: '주님의 축일과 신비 감사송 4 : 그리스도의 무한하신 사랑(예수 성심 대축일)',
  vn: 'KINH TIỀN TỤNG THÁNH TÂM CHÚA GIÊSU - Tình yêu vô biên của Đức Kitô',
  en: 'PREFACE OF THE MOST SACRED HEART OF JESUS - The boundless charity of Christ',
  jp: 'イエスのみ心叙唱「限りない愛」',
  la: 'PRÆFATIO DE SACRATISSIMO CORDE IESU'
});
merge('peter_and_paul', {
  kr: '성 베드로와 성 바오로 감사송 : 베드로와 바오로의 사명',
  vn: 'KINH TIỀN TỤNG THÁNH PHÊRÔ VÀ THÁNH PHAOLÔ TÔNG ĐỒ',
  en: 'PREFACE OF SAINTS PETER AND PAUL, APOSTLES',
  jp: '聖ペトロ・聖パウロ使徒叙唱',
  la: 'PRÆFATIO DE SANCTIS PETRO ET PAULO APOSTOLIS'
});
merge('saint_joseph', {
  kr: '성 요셉 감사송 : 요셉 성인의 사명',
  vn: 'KINH TIỀN TỤNG THÁNH GIUSE - Sứ mạng của thánh Giuse',
  en: 'PREFACE OF SAINT JOSEPH - The mission of Saint Joseph',
  jp: '聖ヨセフ叙唱「聖ヨセフの使命」',
  la: 'PRÆFATIO DE SANCTO IOSEPH'
});
merge('immaculate_conception', {
  kr: '복되신 동정 마리아 감사송 3 : 마리아와 교회의 신비',
  vn: 'KINH TIỀN TỤNG ĐỨC MẸ VÔ NHIỄM NGUYÊN TỘI - Mầu nhiệm Đức Maria và Hội Thánh',
  en: 'PREFACE OF THE IMMACULATE CONCEPTION OF THE BLESSED VIRGIN MARY - The mystery of Mary and the Church',
  jp: '無原罪の聖マリア叙唱「マリアと教会の神秘」',
  la: 'PRÆFATIO DE IMMACULATA CONCEPTIONE BEATÆ MARIÆ VIRGINIS'
});
merge('assumption', {
  kr: '복되신 동정 마리아 감사송 4 : 영광스러운 마리아의 승천',
  vn: 'KINH TIỀN TỤNG LỄ ĐỨC MẸ HỒN XÁC LÊN TRỜI - Đức Maria được đưa lên trời',
  en: 'PREFACE OF THE ASSUMPTION OF THE BLESSED VIRGIN MARY - Mary assumed into glory',
  jp: '聖母の被昇天叙唱「天に上げられた聖母」',
  la: 'PRÆFATIO DE ASSUMPTIONE BEATÆ MARIÆ VIRGINIS'
});
merge('dedication_of_a_church', {
  kr: '주님의 축일과 신비 감사송 10-2 : 그리스도의 배필이며 성령의 성전인 교회의 신비(성당 봉헌)',
  vn: 'KINH TIỀN TỤNG LỄ CUNG HIẾN THÁNH ĐƯỜNG - Hội Thánh là đền thờ của Thiên Chúa',
  en: 'PREFACE OF THE DEDICATION OF A CHURCH - The mystery of the Church as God’s temple',
  jp: '教会献堂叙唱「神の神殿である教会」',
  la: 'PRÆFATIO DE DEDICATIONE ECCLESIÆ'
});

merge('kr_proper_1', {
  vn: 'Kinh Tiền Tụng Riêng Hàn Quốc I: Đức tin của tổ tiên',
  en: 'Korean Proper Preface I: The faith of our ancestors',
  jp: '韓国固有叙唱一「先祖の信仰」',
  la: 'Praefatio propria Coreae I: Fides maiorum'
});
merge('kr_proper_2_lunar_new_year', {
  vn: 'Kinh Tiền Tụng Riêng Hàn Quốc II: Thiên Chúa sáng tạo và cứu độ',
  en: 'Korean Proper Preface II: God of creation and salvation',
  jp: '韓国固有叙唱二「創造と救いの神」',
  la: 'Praefatio propria Coreae II: Deus creationis et salutis'
});
merge('kr_proper_3_chuseok', {
  vn: 'Kinh Tiền Tụng Riêng Hàn Quốc III: Lịch sử cứu độ và lời ca ngợi của dân tộc Triều Tiên',
  en: 'Korean Proper Preface III: Salvation history and the praise of the Korean people',
  jp: '韓国固有叙唱三「救いの歴史と韓民族の賛美」',
  la: 'Praefatio propria Coreae III: Historia salutis et laus populi Coreani'
});
merge('kr_proper_4_unification', {
  vn: 'Kinh Tiền Tụng Riêng Hàn Quốc IV: Thiên Chúa thực hiện sự hòa hợp và thống nhất dân tộc',
  en: 'Korean Proper Preface IV: God who brings about national reconciliation and reunification',
  jp: '韓国固有叙唱四「民族の一致と統一を成し遂げる神」',
  la: 'Praefatio propria Coreae IV: Deus unitatem et reunificationem gentis perficiens'
});
merge('vn_martyrs', {
  en: 'Vietnamese Proper Preface: The Martyrs of Vietnam',
  jp: 'ベトナム固有叙唱「ベトナムの殉教者」',
  la: 'Praefatio propria Vietnamiae: De Martyribus Vietnamiae'
});
merge('us_thanksgiving', {
  vn: 'Kinh Tiền Tụng Riêng Hoa Kỳ: Lễ Tạ Ơn',
  jp: 'アメリカ合衆国固有叙唱「感謝祭」',
  la: 'Praefatio propria Civitatum Foederatarum: Pro die gratiarum actionis'
});
merge('us_independence', {
  vn: 'Kinh Tiền Tụng Riêng Hoa Kỳ: Ngày Độc Lập',
  jp: 'アメリカ合衆国固有叙唱「独立記念日」',
  la: 'Praefatio propria Civitatum Foederatarum: Pro die libertatis'
});
merge('us_guadalupe', {
  vn: 'Kinh Tiền Tụng Riêng Hoa Kỳ: Đức Mẹ Guadalupe',
  jp: 'アメリカ合衆国固有叙唱「グアダルーペの聖母」',
  la: 'Praefatio propria Civitatum Foederatarum: De Beata Maria Virgine de Guadalupe'
});
merge('jp_26_martyrs', {
  vn: 'Kinh Tiền Tụng Riêng Nhật Bản: Hai mươi sáu thánh tử đạo Nhật Bản',
  en: 'Japanese Proper Preface: The Twenty-Six Martyrs of Japan',
  la: 'Praefatio propria Iaponiae: De viginti sex Martyribus Iaponiae'
});
merge('jp_discovery_of_christians', {
  vn: 'Kinh Tiền Tụng Riêng Nhật Bản: Đức Mẹ và việc khám phá các Kitô hữu tại Nhật Bản',
  en: 'Japanese Proper Preface: Our Lady and the Discovery of the Hidden Christians',
  la: 'Praefatio propria Iaponiae: De Beata Maria Virgine et inventione Christianorum occultorum'
});

const requestedPrefaceOrder = [
  'ordinary_1', 'ordinary_2', 'ordinary_3', 'ordinary_4', 'ordinary_5', 'ordinary_6', 'ordinary_7', 'ordinary_8',
  'common_1', 'common_2', 'common_3', 'common_4', 'common_5', 'common_6',
  'advent_1', 'advent_2',
  'nativity_1', 'nativity_2', 'nativity_3', 'epiphany', 'baptism_of_the_lord',
  'lent_1', 'lent_2', 'lent_3', 'lent_4', 'lent_1st_sunday', 'lent_2nd_sunday', 'lent_3rd_sunday', 'lent_4th_sunday', 'lent_5th_sunday',
  'passion_1', 'passion_2',
  'easter_1', 'easter_2', 'easter_3', 'easter_4', 'easter_5', 'ascension_1', 'ascension_2', 'pentecost',
  'holy_trinity', 'christ_the_king', 'transfiguration', 'eucharist_1', 'eucharist_2', 'sacred_heart', 'holy_cross',
  'john_the_baptist', 'peter_and_paul', 'saint_joseph', 'annunciation', 'immaculate_conception', 'assumption', 'all_saints',
  'chrism_mass', 'dedication_of_a_church',
  'mary_1', 'mary_2', 'apostles_1', 'apostles_2', 'martyrs', 'pastors', 'virgins_and_religious', 'saints_1', 'saints_2', 'angels',
  'eucharistic_2', 'dead_1', 'dead_2', 'dead_3', 'dead_4', 'dead_5',
  'marriage_1', 'marriage_2', 'marriage_3', 'holy_orders', 'sick', 'religious_profession',
  'kr_proper_1', 'kr_proper_2_lunar_new_year', 'kr_proper_3_chuseok', 'kr_proper_4_unification',
  'vn_martyrs', 'us_thanksgiving', 'us_independence', 'us_guadalupe', 'jp_26_martyrs', 'jp_discovery_of_christians'
];

function jsString(value) {
  return JSON.stringify(String(value == null ? '' : value));
}

function titleLiteral(title) {
  return `title: { kr: ${jsString(title.kr)}, vn: ${jsString(title.vn)}, en: ${jsString(title.en)}, jp: ${jsString(title.jp)}, la: ${jsString(title.la)} }`;
}

let source = fs.readFileSync(dataPath, 'utf8');
const missingBaselineKeys = [];
const missingSourceKeys = [];
let updated = 0;

for (const key of Object.keys(currentSongs)) {
  const baselineTitle = baselineSongs[key] && baselineSongs[key].title;
  if (!baselineTitle) missingBaselineKeys.push(key);
  const repaired = Object.assign(
    {},
    (baselineTitle && typeof baselineTitle === 'object' ? baselineTitle : currentSongs[key].title || {}),
    overrides[key] || {}
  );
  for (const lang of ['kr', 'vn', 'en', 'jp', 'la']) if (repaired[lang] == null) repaired[lang] = '';

  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`("${escapedKey}"\\s*:\\s*\\{\\s*\\r?\\n\\s*)title:\\s*\\{[^\\r\\n]*\\}`);
  if (!pattern.test(source)) {
    missingSourceKeys.push(key);
    continue;
  }
  source = source.replace(pattern, `$1${titleLiteral(repaired)}`);
  updated += 1;
}

function findMatchingBrace(text, openIndex) {
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new Error('Unmatched object brace while reordering prefaces.');
}

function reorderSongsBlock(text) {
  const itemIndex = text.indexOf("id: '3.3 eucharist'");
  const songsLabelIndex = text.indexOf('songs:', itemIndex);
  const songsOpenIndex = text.indexOf('{', songsLabelIndex);
  const songsCloseIndex = findMatchingBrace(text, songsOpenIndex);
  if (itemIndex < 0 || songsLabelIndex < 0 || songsOpenIndex < 0 || songsCloseIndex < 0) {
    throw new Error('Cannot find Eucharistic Prayer preface source block.');
  }
  const block = text.slice(songsOpenIndex + 1, songsCloseIndex);
  const propertyBlocks = new Map();
  for (const key of Object.keys(currentSongs)) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = new RegExp(`(^|\\r?\\n)([ \\t]*)"${escapedKey}"\\s*:\\s*\\{`, 'm').exec(block);
    if (!match) throw new Error(`Cannot find preface object block for ${key}.`);
    const propertyStart = match.index + match[1].length;
    const objectOpen = block.indexOf('{', propertyStart);
    const objectClose = findMatchingBrace(block, objectOpen);
    let propertyEnd = objectClose + 1;
    while (/[ \\t]/.test(block[propertyEnd] || '')) propertyEnd += 1;
    if (block[propertyEnd] === ',') propertyEnd += 1;
    propertyBlocks.set(key, block.slice(propertyStart, propertyEnd).replace(/,?\s*$/, ''));
  }
  const unknownKeys = Object.keys(currentSongs).filter(key => !requestedPrefaceOrder.includes(key));
  const order = requestedPrefaceOrder.concat(unknownKeys);
  const missingKeys = order.filter(key => !propertyBlocks.has(key));
  if (missingKeys.length) throw new Error(`Requested order contains missing prefaces: ${missingKeys.join(', ')}`);
  if (order.length !== propertyBlocks.size) throw new Error('Preface order does not cover every song exactly once.');
  const reordered = `\n${order.map((key, index) => `${propertyBlocks.get(key)}${index < order.length - 1 ? ',' : ''}`).join('\n')}\n        `;
  return text.slice(0, songsOpenIndex + 1) + reordered + text.slice(songsCloseIndex);
}

source = reorderSongsBlock(source);

if (missingSourceKeys.length) throw new Error(`Could not replace titles for: ${missingSourceKeys.join(', ')}`);
fs.writeFileSync(dataPath, source, 'utf8');
console.log(`Updated ${updated} preface titles; enhanced ${Object.keys(overrides).length}; reordered ${requestedPrefaceOrder.length}.`);
if (missingBaselineKeys.length) console.warn(`No baseline title for: ${missingBaselineKeys.join(', ')}`);
