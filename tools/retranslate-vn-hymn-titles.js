const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'hymn_data.js');
const cachePath = path.join(root, 'tmp', 'vn-hymn-title-translation-cache.json');
const batchSize = 24;
const targetLanguages = { EN: 'en', LA: 'la', JP: 'ja' };
const bingSessions = new Map();
const bingHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9'
};

function loadHymnData(source) {
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: dataPath });
  return Array.isArray(sandbox.ordoHymnData) ? sandbox.ordoHymnData : [];
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
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Origin': 'https://www.bing.com',
        'Referer': session.referer,
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': session.cookie
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
    await new Promise(resolve => setTimeout(resolve, attempt * 1800));
  }
  return '';
}

async function requestTranslations(rows, sourceLanguage, targetLanguage) {
  const query = rows.map(row => row.source).join(' ||| ');
  const output = await bingTranslateText(query, sourceLanguage, targetLanguage);
  const segments = output.split(/\s*\|{2,3}\s*/).map(value => value.trim()).filter(Boolean);
  if (segments.length !== rows.length) {
    throw new Error(`Bing batch count mismatch for ${targetLanguage}: ${segments.length}/${rows.length}`);
  }
  const found = new Map();
  rows.forEach((row, index) => found.set(row.marker, segments[index]));
  return found;
}

async function translateBatch(rows, sourceLanguage, targetLanguage) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const found = await requestTranslations(rows, sourceLanguage, targetLanguage);
      if (rows.every(row => found.get(row.marker))) return found;
    } catch (error) {
      if (attempt === 3) throw error;
    }
    await new Promise(resolve => setTimeout(resolve, attempt * 800));
  }
  const found = new Map();
  for (const row of rows) {
    const title = await translateSingleSource(row.source, sourceLanguage, targetLanguage);
    if (!title) throw new Error(`missing ${targetLanguage} title for ${row.source}`);
    found.set(row.marker, title);
  }
  return found;
}

async function translateSingleSource(source, sourceLanguage, targetLanguage) {
  return bingTranslateText(source, sourceLanguage, targetLanguage);
}

function replaceTranslationTitle(source, id, lang, title) {
  const idLine = `    "id": ${JSON.stringify(id)},`;
  const start = source.indexOf(idLine);
  if (start < 0) throw new Error(`entry not found: ${id}`);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const next = source.indexOf(`${newline}  {${newline}    "id": `, start + idLine.length);
  const end = next >= 0 ? next : source.length;
  const block = source.slice(start, end);
  const pattern = new RegExp(`("${lang}"\\s*:\\s*\\{\\s*\\r?\\n\\s*"title"\\s*:\\s*)"(?:\\\\.|[^"\\\\])*"`);
  if (!pattern.test(block)) throw new Error(`${lang} translation title not found: ${id}`);
  const updatedBlock = block.replace(pattern, `$1${JSON.stringify(title)}`);
  return source.slice(0, start) + updatedBlock + source.slice(end);
}

function validateTitle(title, lang, source) {
  const text = String(title || '').trim();
  if (!text) throw new Error(`empty ${lang} title for ${source}`);
  if (/\?{2,}|i'?m sorry|paenitet|ごめんなさい/i.test(text)) throw new Error(`suspicious ${lang} title for ${source}: ${text}`);
  if (/[가-힣]/u.test(text)) throw new Error(`untranslated ${lang} title for ${source}: ${text}`);
  return text.replace(/\s+/g, ' ').trim();
}

async function main() {
  const original = fs.readFileSync(dataPath, 'utf8');
  const data = loadHymnData(original);
  const vietnamese = data.filter(entry => entry.country === 'VN');
  const uniqueSources = Array.from(new Set(vietnamese
    .map(entry => String(entry.translations?.KR?.title || '').trim())
    .filter(Boolean)));
  if (uniqueSources.length < vietnamese.length * 0.75) {
    throw new Error(`Too many Vietnamese hymns lack Korean title bases: ${uniqueSources.length}/${vietnamese.length}`);
  }
  const rows = uniqueSources.map((source, index) => ({ source, marker: `VH${String(index).padStart(4, '0')}` }));
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  Object.keys(targetLanguages).forEach(lang => { if (!cache[lang]) cache[lang] = {}; });
  if (process.env.REBUILD_SECONDARY === '1') {
    cache.LA = {};
    cache.JP = {};
  }
  for (const lang of Object.keys(targetLanguages)) {
    for (const [source, title] of Object.entries(cache[lang])) {
      try { validateTitle(title, lang, source); }
      catch (error) { delete cache[lang][source]; }
    }
  }

  for (const [lang, targetLanguage] of Object.entries(targetLanguages)) {
    for (let index = 0; index < rows.length; index += batchSize) {
      const batch = rows.slice(index, index + batchSize).filter(row => !cache[lang][row.source]);
      if (!batch.length) continue;
      const sourceLanguage = 'ko';
      const translationBatch = batch;
      const translated = await translateBatch(translationBatch, sourceLanguage, targetLanguage);
      for (const row of batch) {
        let title = translated.get(row.marker);
        try {
          title = validateTitle(title, lang, row.source);
        } catch (error) {
          title = validateTitle(await translateSingleSource(row.source, sourceLanguage, targetLanguage), lang, row.source);
        }
        cache[lang][row.source] = title;
      }
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
      console.log(`${lang} ${Math.min(index + batchSize, rows.length)}/${rows.length}`);
      await new Promise(resolve => setTimeout(resolve, 650));
    }
  }

  let updated = original;
  const changed = { EN: 0, LA: 0, JP: 0 };
  vietnamese.forEach(entry => {
    const koreanTitle = String(entry.translations?.KR?.title || '').trim();
    if (!koreanTitle) return;
    for (const lang of Object.keys(targetLanguages)) {
      const translated = validateTitle(cache[lang][koreanTitle], lang, koreanTitle);
      if (String(entry.translations?.[lang]?.title || '') !== translated) changed[lang] += 1;
      updated = replaceTranslationTitle(updated, entry.id, lang, translated);
    }
  });

  const verified = loadHymnData(updated).filter(entry => entry.country === 'VN');
  for (const entry of verified) {
    for (const lang of Object.keys(targetLanguages)) {
      validateTitle(entry.translations?.[lang]?.title, lang, entry.title);
    }
  }
  const backupPath = path.join(root, 'tmp', `hymn_data.backup-vn-multilingual-${Date.now()}.js`);
  fs.writeFileSync(backupPath, original, 'utf8');
  fs.writeFileSync(dataPath, updated, 'utf8');
  console.log(JSON.stringify({ vietnamese: verified.length, uniqueSources: rows.length, changed, backupPath }, null, 2));
}

main().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
