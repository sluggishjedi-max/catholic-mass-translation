const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'hymn_data.js');

const titles = Object.freeze({
  '자비송': { VN: 'Kinh Thương Xót', EN: 'Kyrie (Lord, Have Mercy)', LA: 'Kyrie eleison', JP: 'あわれみの賛歌（キリエ）' },
  '대영광송': { VN: 'Kinh Vinh Danh', EN: 'Gloria', LA: 'Gloria', JP: '栄光の賛歌（グロリア）' },
  '거룩하시도다': { VN: 'Thánh, Thánh, Thánh', EN: 'Sanctus (Holy, Holy, Holy)', LA: 'Sanctus', JP: '感謝の賛歌（サンクトゥス）' },
  '하느님의 어린양': { VN: 'Kinh Chiên Thiên Chúa', EN: 'Agnus Dei (Lamb of God)', LA: 'Agnus Dei', JP: '平和の賛歌（アニュス・デイ）' },
  '신앙의 신비여': { VN: 'Mầu nhiệm đức tin', EN: 'The Mystery of Faith', LA: 'Mysterium fidei', JP: '信仰の神秘' },
  '주님의 기도': { VN: 'Kinh Lạy Cha', EN: 'The Lord’s Prayer', LA: 'Pater noster', JP: '主の祈り' },
  '주님의 기도 – 주님께 나라와': { VN: 'Kinh Lạy Cha – Vì vương quyền, uy lực và vinh quang là của Chúa', EN: 'The Lord’s Prayer – For the Kingdom, the Power and the Glory Are Yours', LA: 'Pater noster – Quia tuum est regnum et potestas et gloria', JP: '主の祈り－国と力と栄光は限りなくあなたのもの' },
  '미사시작': { VN: 'Mở đầu Thánh lễ', EN: 'Beginning of Mass', LA: 'Initium Missae', JP: 'ミサの開祭' },
  '미사 시작': { VN: 'Mở đầu Thánh lễ', EN: 'Beginning of Mass', LA: 'Initium Missae', JP: 'ミサの開祭' },
  '영광송': { VN: 'Kinh Sáng Danh', EN: 'Doxology', LA: 'Doxologia', JP: '栄唱' },
  '복음 환호송': { VN: 'Tung hô Tin Mừng', EN: 'Gospel Acclamation', LA: 'Acclamatio ante Evangelium', JP: '福音朗読前のアレルヤ唱' },
  '복음환호송': { VN: 'Tung hô Tin Mừng', EN: 'Gospel Acclamation', LA: 'Acclamatio ante Evangelium', JP: '福音朗読前のアレルヤ唱' },
  '봉헌': { VN: 'Dâng lễ', EN: 'Offertory', LA: 'Offertorium', JP: '奉納' },
  '마침 성가': { VN: 'Ca kết lễ', EN: 'Recessional Hymn', LA: 'Cantus ad recessum', JP: '閉祭の歌' },
  '미사 끝': { VN: 'Kết lễ', EN: 'Conclusion of Mass', LA: 'Conclusio Missae', JP: 'ミサの閉祭' },
  '입당송': { VN: 'Ca nhập lễ', EN: 'Entrance Antiphon', LA: 'Antiphona ad introitum', JP: '入祭唱' },
  '화답송': { VN: 'Thánh vịnh đáp ca', EN: 'Responsorial Psalm', LA: 'Psalmus responsorius', JP: '答唱詩編' },
  '연송': { VN: 'Thánh ca liên xướng', EN: 'Tract', LA: 'Tractus', JP: '詠唱' },
  '영성체': { VN: 'Hiệp lễ', EN: 'Holy Communion', LA: 'Communio', JP: '聖体拝領' },
  '영성체송': { VN: 'Ca hiệp lễ', EN: 'Communion Antiphon', LA: 'Antiphona ad communionem', JP: '拝領唱' },
  '보편 지향 기도 응답': { VN: 'Đáp lời nguyện tín hữu', EN: 'Response to the Universal Prayer', LA: 'Responsum orationis universalis', JP: '共同祈願の応答' },
  '보편지향기도 응답': { VN: 'Đáp lời nguyện tín hữu', EN: 'Response to the Universal Prayer', LA: 'Responsum orationis universalis', JP: '共同祈願の応答' },
  '아멘': { VN: 'Amen', EN: 'Amen', LA: 'Amen', JP: 'アーメン' },
  '알렐루야': { VN: 'Alleluia', EN: 'Alleluia', LA: 'Alleluia', JP: 'アレルヤ' },
  '사도신경': { VN: 'Kinh Tin Kính các Tông đồ', EN: 'The Apostles’ Creed', LA: 'Symbolum Apostolorum', JP: '使徒信条' },
  '성모송': { VN: 'Kinh Kính Mừng', EN: 'Hail Mary', LA: 'Ave Maria', JP: 'アヴェ・マリアの祈り' },
  '평화의 인사': { VN: 'Chúc bình an', EN: 'Sign of Peace', LA: 'Pax Domini', JP: '平和のあいさつ' },
  '마침영광송 - 아멘': { VN: 'Vinh tụng ca kết thúc – Amen', EN: 'Concluding Doxology – Amen', LA: 'Doxologia finalis – Amen', JP: '結びの栄唱－アーメン' },
  '마침영광송 – 아멘': { VN: 'Vinh tụng ca kết thúc – Amen', EN: 'Concluding Doxology – Amen', LA: 'Doxologia finalis – Amen', JP: '結びの栄唱－アーメン' },
  '주님의 몸 주님의 피': { VN: 'Mình và Máu Chúa', EN: 'The Body and Blood of the Lord', LA: 'Corpus et Sanguis Domini', JP: '主の御からだと御血' },
  '나의 주님 나의 하느님': { VN: 'Lạy Chúa của con, lạy Thiên Chúa của con', EN: 'My Lord and My God', LA: 'Dominus meus et Deus meus', JP: 'わたしの主、わたしの神' },
  '주님께 나라와 권능과': { VN: 'Vì vương quyền, uy lực và vinh quang là của Chúa', EN: 'For the Kingdom, the Power and the Glory Are Yours', LA: 'Quia tuum est regnum et potestas et gloria', JP: '国と力と栄光は限りなくあなたのもの' },
  '병인 순교자 노래': { VN: 'Thánh ca các vị tử đạo Bính Dần', EN: 'Hymn of the Byeongin Martyrs', LA: 'Canticum Martyrum Byeongin', JP: '丙寅迫害の殉教者の歌' },
  '순교자 믿음': { VN: 'Đức tin của các vị tử đạo', EN: 'Faith of the Martyrs', LA: 'Fides martyrum', JP: '殉教者の信仰' },
  '글로리아 높으신 이의 탄생': { JP: 'グロリア、いと高き方の誕生' },
  '거룩한 주의 십자가': { JP: '主の聖なる十字架' },
  '주의 승천 찬미하네': { JP: '主の昇天をたたえよう' },
  '주의 얼이': { JP: '主の霊が' },
  '주의 잔치': { JP: '主の宴' },
  '주의 성심 홀로': { JP: '主の聖心だけが' },
  '간절한 주의 사랑': { JP: '主の切なる愛' },
  '주의 영광': { JP: '主の栄光' },
  '부드러운 주의 손이': { JP: '主の優しい御手が' },
  '주의 나라 임하면': { JP: '主の国が来るとき' },
  '우리는 주의 사랑을': { JP: 'わたしたちは主の愛を' },
  '주의 말씀 듣고': { JP: '主のみことばを聞いて' },
  '주의 빵을 서로 나누세': { JP: '主のパンを分かち合おう' },
  '오 나의 자비로운 주여 Spirit song': { JP: 'ああ、慈しみ深い主よ · Spirit Song' },
  '주의 거룩하심 생각할 때 When I look into Your holiness': { JP: '主の聖性を仰ぐとき · When I Look into Your Holiness' },
  '주의 길을 버리고': { JP: '主の道を離れて' },
  '주의 사랑으로 사랑합니다 I love you with the love of the Lord': { JP: '主の愛で愛します · I Love You with the Love of the Lord' },
  '주의 이름 높이며 Lord I lift Your name on high': { JP: '主のみ名を掲げて · Lord, I Lift Your Name on High' },
  '주의 인자는 끝이 없고 The steadfast love': { JP: '主の慈しみは尽きることなく · The Steadfast Love' },
  '주의 자비가 내려와 Mercy is falling': { JP: '主の慈しみが降り注ぐ · Mercy Is Falling' },
  '주의 정결한 피로': { JP: '主の清い御血によって' },
  '어둠도 La ténèbre': { JP: '闇も · La ténèbre' },
  '우리 모일 때 주 성령 As we gather may Your Spirit work': { JP: 'わたしたちが集うとき、主の霊が · As We Gather, May Your Spirit Work' },
  '경배하리 내 온 맘 다해 You’re worthy of my praise': { JP: '心を尽くして礼拝します · You’re Worthy of My Praise' },
  '오라 우리가 Come and let us go': { JP: 'さあ、共に行こう · Come and Let Us Go' },
  '온 맘 다해 With all my heart': { JP: '心を尽くして · With All My Heart' }
});

function loadData(source) {
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: dataPath });
  return Array.isArray(sandbox.ordoHymnData) ? sandbox.ordoHymnData : [];
}

function replaceTranslationTitle(source, id, lang, title) {
  const idLine = `    "id": ${JSON.stringify(id)},`;
  const start = source.indexOf(idLine);
  if (start < 0) throw new Error(`Entry not found: ${id}`);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const next = source.indexOf(`${newline}  {${newline}    "id": `, start + idLine.length);
  const end = next >= 0 ? next : source.length;
  const block = source.slice(start, end);
  const pattern = new RegExp(`("${lang}"\\s*:\\s*\\{\\s*\\r?\\n\\s*"title"\\s*:\\s*)"(?:\\\\.|[^"\\\\])*"`);
  if (!pattern.test(block)) throw new Error(`${lang} translation title not found: ${id}`);
  return source.slice(0, start) + block.replace(pattern, `$1${JSON.stringify(title)}`) + source.slice(end);
}

function expectedTitle(entry, lang) {
  const exact = titles[String(entry.title || '').trim()];
  return exact && exact[lang] ? exact[lang] : '';
}

function main() {
  const checkStaged = process.argv.includes('--check-staged');
  const checkOnly = process.argv.includes('--check') || checkStaged;
  const fromStdin = process.argv.includes('--stdin');
  const toStdout = process.argv.includes('--stdout');
  const stageCleanHead = process.argv.includes('--stage-clean-head');
  const original = stageCleanHead || checkStaged
    ? execFileSync('git', ['show', `${checkStaged ? ':' : 'HEAD:'}JS file/hymn_data.js`], { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    : fs.readFileSync(fromStdin ? 0 : dataPath, 'utf8');
  const data = loadData(original);
  let updated = original;
  let changed = 0;
  const changedByLanguage = {};
  for (const entry of data.filter(item => item.country === 'KR')) {
    for (const lang of ['VN', 'EN', 'LA', 'JP']) {
      const expected = expectedTitle(entry, lang);
      if (!expected || entry.translations?.[lang]?.title === expected) continue;
      updated = replaceTranslationTitle(updated, entry.id, lang, expected);
      changed += 1;
      changedByLanguage[lang] = (changedByLanguage[lang] || 0) + 1;
    }
  }
  const verified = loadData(updated);
  const kyrie = verified.filter(entry => entry.country === 'KR' && entry.title === '자비송');
  if (!kyrie.length || kyrie.some(entry => entry.translations?.VN?.title !== 'Kinh Thương Xót')) {
    throw new Error('Kyrie titles were not normalized in the source data.');
  }
  if (checkOnly && changed) throw new Error(`${changed} Catholic hymn titles in the source data require normalization.`);
  if (toStdout) {
    process.stdout.write(updated);
    return;
  }
  if (stageCleanHead) {
    const blob = execFileSync('git', ['hash-object', '-w', '--stdin'], {
      cwd: root,
      encoding: 'utf8',
      input: updated,
      maxBuffer: 64 * 1024 * 1024
    }).trim();
    execFileSync('git', ['update-index', '--add', '--cacheinfo', `100644,${blob},JS file/hymn_data.js`], {
      cwd: root,
      encoding: 'utf8'
    });
    console.log(JSON.stringify({ stagedBlob: blob, changed, changedByLanguage }, null, 2));
    return;
  }
  if (!checkOnly && updated !== original) fs.writeFileSync(dataPath, updated, 'utf8');
  console.log(JSON.stringify({ entries: verified.length, kyrie: kyrie.length, changed, changedByLanguage, checkOnly }, null, 2));
}

main();
