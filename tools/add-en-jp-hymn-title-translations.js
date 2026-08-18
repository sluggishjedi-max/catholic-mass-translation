const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'hymn_data.js');
const cachePath = path.join(root, 'tmp', 'en-jp-hymn-title-translation-cache.json');
const batchSize = 20;
const sourceLanguages = { EN: 'en', JP: 'ja' };
const targetLanguages = { KR: 'ko', VN: 'vi', EN: 'en', JP: 'ja', LA: 'la' };
const bingSessions = new Map();
const bingHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9'
};

const canonical = Object.freeze({
  EN: {
    Amen: { KR: '아멘', VN: 'Amen', EN: 'Amen', JP: 'アーメン', LA: 'Amen' },
    Alleluia: { KR: '알렐루야', VN: 'Alleluia', EN: 'Alleluia', JP: 'アレルヤ', LA: 'Alleluia' },
    'Lord, Have Mercy': { KR: '주님, 자비를 베푸소서', VN: 'Xin Chúa thương xót', EN: 'Lord, Have Mercy', JP: '主よ、あわれみたまえ', LA: 'Kyrie eleison' },
    'Lamb of God': { KR: '하느님의 어린양', VN: 'Chiên Thiên Chúa', EN: 'Lamb of God', JP: '神の小羊', LA: 'Agnus Dei' },
    'Glory to God': { KR: '하느님께 영광', VN: 'Vinh danh Thiên Chúa', EN: 'Glory to God', JP: '神に栄光', LA: 'Gloria in excelsis Deo' }
  },
  JP: {
    'アーメン': { KR: '아멘', VN: 'Amen', EN: 'Amen', JP: 'アーメン', LA: 'Amen' },
    'アレルヤ': { KR: '알렐루야', VN: 'Alleluia', EN: 'Alleluia', JP: 'アレルヤ', LA: 'Alleluia' },
    '朝早く週の初めに': { EN: 'Early in the Morning on the First Day of the Week', KR: '한 주가 시작되는 이른 아침' },
    'あかつきと ともに めざめ': { EN: 'Awake with the Dawn', KR: '새벽과 함께 깨어나라' },
    '新しい歌を主にうたえ': { EN: 'Sing a New Song to the Lord', KR: '주님께 새 노래를 불러라' },
    'あたらしい こひつじ': { EN: 'The New Lamb', KR: '새로운 어린양' },
    'あなたの いきを': { EN: 'Your Breath', KR: '당신의 숨결' },
    '栄光は世界におよび': { EN: 'Glory Extends throughout the World', KR: '영광은 온 세상에 미치고' },
    '神の注がれる目は': { EN: 'God’s Gaze Is upon Us', KR: '하느님의 눈길이 우리에게 머무르고' },
    '神のそそがれる目は (2)': { EN: 'God’s Gaze Is upon Us (2)', KR: '하느님의 눈길이 우리에게 머무르고 (2)' },
    '神のはからいは': { EN: 'God’s Providence', KR: '하느님의 섭리는' },
    '神のわざ とわに留まれ': { EN: 'God’s Works Endure Forever', KR: '하느님의 업적은 영원하리라' },
    '神は残された 不思議なわざの記念を': { EN: 'God Has Left a Memorial of His Wondrous Deeds', KR: '하느님은 놀라운 업적의 기념을 남기셨다' },
    '主は のぼられた': { EN: 'The Lord Has Ascended', KR: '주님께서 승천하셨다' },
    '主は豊かな あがないに満ち': { EN: 'The Lord Is Rich in Redemption', KR: '주님은 풍성한 구원으로 가득하시다' },
    '主は ゆたかな あがないに満ち': { EN: 'The Lord Is Rich in Redemption', KR: '주님은 풍성한 구원으로 가득하시다' },
    'たてエルサレム': { EN: 'Arise, Jerusalem', KR: '일어나라, 예루살렘' },
    'とこしえに': { EN: 'Forever', KR: '영원히' },
    'めざめよエルサレム': { EN: 'Awake, Jerusalem', KR: '깨어나라, 예루살렘' },
    'めぐみのパン': { EN: 'Bread of Grace', KR: '은총의 빵' },
    'よろこびに': { EN: 'With Joy', KR: '기쁨으로' },
    'わが子よ': { EN: 'My Child', KR: '내 아이야' },
    '復活の続唱': { EN: 'Easter Sequence', KR: '부활 부속가' },
    'よろこびうたえアレルヤ': { EN: 'Sing Joyfully, Alleluia', KR: '기뻐 노래하여라, 알렐루야' }
  }
});

function loadHymnData(source) {
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: dataPath });
  return Array.isArray(sandbox.ordoHymnData) ? sandbox.ordoHymnData : [];
}

function hymnArrayBounds(source) {
  const start = source.indexOf('[', source.indexOf('const hymnData'));
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === '[') depth += 1;
    else if (character === ']') {
      depth -= 1;
      if (depth === 0) return [start, index + 1];
    }
  }
  throw new Error('Could not locate hymnData');
}

async function createBingSession(sourceLanguage, targetLanguage) {
  const referer = `https://www.bing.com/translator?from=${sourceLanguage}&to=${targetLanguage}&setlang=en`;
  const response = await fetch(referer, { headers: bingHeaders });
  if (!response.ok) throw new Error(`Bing session HTTP ${response.status}`);
  const setCookie = response.headers.get('set-cookie') || '';
  const cookie = [setCookie.match(/MUID=[^;]+/)?.[0], setCookie.match(/MUIDB=[^;]+/)?.[0]].filter(Boolean).join('; ');
  const html = await response.text();
  const ig = html.match(/IG:"([^"]+)/)?.[1];
  const abuse = html.match(/params_AbusePreventionHelper\s*=\s*(\[[^;]+\])/u)?.[1];
  const iid = html.match(/data-iid="([^"]*translator[^"]*)/iu)?.[1];
  if (!ig || !abuse || !iid) throw new Error('Bing translator session data is missing');
  const [key, token] = JSON.parse(abuse);
  return { ig, iid, key, token, cookie, referer, requestNumber: 0 };
}

async function bingTranslateText(text, sourceLanguage, targetLanguage) {
  const sessionKey = `${sourceLanguage}:${targetLanguage}`;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    let session = bingSessions.get(sessionKey);
    if (!session) {
      session = await createBingSession(sourceLanguage, targetLanguage);
      bingSessions.set(sessionKey, session);
    }
    session.requestNumber += 1;
    const body = new URLSearchParams({
      fromLang: sourceLanguage,
      text,
      to: targetLanguage,
      token: session.token,
      key: String(session.key),
      tryFetchingGenderDebiasedTranslations: 'true'
    });
    const response = await fetch(`https://www.bing.com/ttranslatev3?isVertical=1&&IG=${session.ig}&IID=${session.iid}.${session.requestNumber}`, {
      method: 'POST',
      headers: {
        ...bingHeaders,
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Origin: 'https://www.bing.com',
        Referer: session.referer,
        'X-Requested-With': 'XMLHttpRequest',
        Cookie: session.cookie
      },
      body
    });
    if (response.ok) {
      const payload = await response.json();
      const translated = String(payload?.[0]?.translations?.[0]?.text || '').trim();
      if (translated) return translated;
    }
    bingSessions.delete(sessionKey);
    if (attempt === 4) throw new Error(`Bing title translation ${targetLanguage} HTTP ${response.status}`);
    await new Promise(resolve => setTimeout(resolve, attempt * 1200));
  }
  return '';
}

async function googleTranslateText(text, sourceLanguage, targetLanguage) {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: sourceLanguage,
    tl: targetLanguage,
    dt: 't',
    q: text
  });
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`, { headers: bingHeaders });
    if (response.ok) {
      const payload = await response.json();
      const translated = Array.isArray(payload?.[0])
        ? payload[0].map(segment => String(segment?.[0] || '')).join('').trim()
        : '';
      if (translated) return translated;
    }
    if (attempt === 4) throw new Error(`Google title translation ${targetLanguage} HTTP ${response.status}`);
    await new Promise(resolve => setTimeout(resolve, attempt * 1000));
  }
  return '';
}

function validateTitle(value, target, source) {
  let title = String(value || '').replace(/\s+/g, ' ').trim();
  if (!title) throw new Error(`Empty ${target} title for ${source}`);
  if (/\?{2,}|undefined|i'?m sorry/iu.test(title)) throw new Error(`Suspicious ${target} title for ${source}: ${title}`);
  if (target === 'KR') {
    title = title
      .replace(/하나님/gu, '하느님')
      .replace(/여호와/gu, '주님')
      .replace(/신의/gu, '하느님의')
      .replace(/신을/gu, '하느님을')
      .replace(/신에게/gu, '하느님께')
      .replace(/신께/gu, '하느님께')
      .replace(/신은/gu, '하느님은')
      .replace(/신이/gu, '하느님이')
      .replace(/신과/gu, '하느님과')
      .replace(/신 안/gu, '하느님 안')
      .replace(/은혜/gu, '은총')
      .replace(/구속/gu, '구원')
      .replace(/칭찬/gu, '찬미')
      .replace(/알레르야/gu, '알렐루야');
  }
  return title;
}

function japaneseTranslationInput(title) {
  return String(title || '')
    .replace(/さぃ/gu, 'さい')
    .replace(/あかつき/gu, '暁')
    .replace(/こひつじ/gu, '子羊')
    .replace(/いぶき/gu, '息吹')
    .replace(/いつくしみ/gu, '慈しみ')
    .replace(/あがない/gu, '贖い')
    .replace(/とこしえ/gu, '永遠')
    .replace(/めぐみ/gu, '恵み')
    .replace(/めざめ/gu, '目覚め');
}

async function translateRows(rows, sourceLanguage, targetLanguage) {
  const query = rows.map(row => row.title).join(' ||| ');
  const output = await googleTranslateText(query, sourceLanguage, targetLanguage);
  const segments = output.split(/\s*\|{2,3}\s*/).map(value => value.trim());
  if (segments.length === rows.length) {
    await Promise.all(segments.map(async (segment, index) => {
      if (!segment) segments[index] = await googleTranslateText(rows[index].title, sourceLanguage, targetLanguage);
    }));
    return segments;
  }
  return Promise.all(rows.map(row => googleTranslateText(row.title, sourceLanguage, targetLanguage)));
}

async function main() {
  const checkOnly = process.argv.includes('--check');
  const rebuildJapanese = process.argv.includes('--rebuild-jp');
  const original = fs.readFileSync(dataPath, 'utf8');
  const data = loadHymnData(original);
  const targets = data.filter(entry => entry.language === 'EN' || entry.language === 'JP');
  if (checkOnly) {
    const bad = targets.filter(entry => ['KR', 'VN', 'EN', 'JP', 'LA'].some(lang => !String(entry.translations?.[lang]?.title || '').trim()));
    if (bad.length) throw new Error(`${bad.length} English/Japanese hymns lack multilingual titles`);
    console.log(JSON.stringify({ entries: targets.length, complete: targets.length }, null, 2));
    return;
  }

  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  if (rebuildJapanese) cache.JP = {};
  for (const sourceCode of Object.keys(sourceLanguages)) {
    cache[sourceCode] ||= {};
    const uniqueTitles = Array.from(new Set(targets.filter(entry => entry.language === sourceCode).map(entry => String(entry.title || '').trim()).filter(Boolean)));
    const orderedTargetCodes = sourceCode === 'JP' ? ['EN', 'KR', 'VN', 'LA', 'JP'] : Object.keys(targetLanguages);
    for (const targetCode of orderedTargetCodes) {
      cache[sourceCode][targetCode] ||= {};
      if (targetCode === sourceCode) {
        uniqueTitles.forEach(title => { cache[sourceCode][targetCode][title] = title; });
        continue;
      }
      const pending = uniqueTitles.filter(title => !cache[sourceCode][targetCode][title] && !canonical[sourceCode]?.[title]?.[targetCode]);
      const concurrency = 4;
      for (let index = 0; index < pending.length; index += batchSize * concurrency) {
        const windows = [];
        for (let offset = 0; offset < batchSize * concurrency; offset += batchSize) {
          const titles = pending.slice(index + offset, index + offset + batchSize).map(title => {
            const englishBase = canonical.JP?.[title]?.EN || cache.JP?.EN?.[title];
            const useEnglishBase = sourceCode === 'JP' && !['JP', 'EN'].includes(targetCode) && englishBase;
            return {
              title: useEnglishBase ? englishBase : (sourceCode === 'JP' ? japaneseTranslationInput(title) : title),
              sourceTitle: title,
              sourceLanguage: useEnglishBase ? 'en' : sourceLanguages[sourceCode]
            };
          });
          if (titles.length) windows.push(titles);
        }
        const results = await Promise.all(windows.map(titles => translateRows(titles, titles[0].sourceLanguage, targetLanguages[targetCode])));
        windows.forEach((titles, windowIndex) => titles.forEach((row, offset) => {
          cache[sourceCode][targetCode][row.sourceTitle] = validateTitle(results[windowIndex][offset], targetCode, row.sourceTitle);
        }));
        fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
        console.log(`[${sourceCode}->${targetCode}] ${Math.min(index + batchSize * concurrency, pending.length)}/${pending.length}`);
        await new Promise(resolve => setTimeout(resolve, 450));
      }
    }
  }

  for (const entry of targets) {
    const sourceCode = entry.language;
    const title = String(entry.title || '').trim();
    entry.translations = {};
    for (const targetCode of Object.keys(targetLanguages)) {
      const translated = canonical[sourceCode]?.[title]?.[targetCode] || cache[sourceCode]?.[targetCode]?.[title];
      entry.translations[targetCode] = { title: validateTitle(translated, targetCode, title) };
    }
  }
  const [start, end] = hymnArrayBounds(original);
  const updated = original.slice(0, start) + JSON.stringify(data, null, 2) + original.slice(end);
  fs.writeFileSync(dataPath, updated, 'utf8');
  console.log(JSON.stringify({ english: targets.filter(entry => entry.language === 'EN').length, japanese: targets.filter(entry => entry.language === 'JP').length }, null, 2));
}

main().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
