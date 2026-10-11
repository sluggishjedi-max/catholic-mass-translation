const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'hymn_data.js');
const cachePath = path.join(root, 'tmp', 'vn-hymn-korean-title-cache.json');
const batchSize = 18;
const manualTitles = new Map([
  ['Cà Lên Đi 2', '모든 민족들아, 노래하여라 2']
]);

function loadHymnData(source) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: dataPath });
  return Array.isArray(sandbox.ordoHymnData) ? sandbox.ordoHymnData : [];
}

function translatedText(payload) {
  return Array.isArray(payload && payload[0])
    ? payload[0].map(part => Array.isArray(part) ? (part[0] || '') : '').join('')
    : '';
}

async function requestTranslations(rows) {
  const query = rows.map(row => `${row.marker} ${row.source}`).join('\n');
  const body = new URLSearchParams({ client: 'gtx', sl: 'vi', tl: 'ko', dt: 't', q: query });
  const response = await fetch('https://translate.googleapis.com/translate_a/single', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body
  });
  if (!response.ok) throw new Error(`title translation HTTP ${response.status}`);
  const output = translatedText(await response.json());
  const found = new Map();
  output.split(/\r?\n/).forEach(line => {
    const match = line.match(/HT\d{4}/u);
    if (!match) return;
    const title = line.replace(match[0], '').replace(/^[\s:|.,-]+|[\s:|.,-]+$/g, '').trim();
    if (title) found.set(match[0], title);
  });
  return found;
}

async function translateBatch(rows) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const found = await requestTranslations(rows);
      if (rows.every(row => found.get(row.marker))) return found;
    } catch (error) {
      if (attempt === 3) throw error;
    }
    await new Promise(resolve => setTimeout(resolve, attempt * 700));
  }
  const found = new Map();
  for (const row of rows) {
    const single = await requestTranslations([row]);
    const title = single.get(row.marker);
    if (!title) throw new Error(`missing translated title for ${row.marker}: ${row.source}`);
    found.set(row.marker, title);
  }
  return found;
}

function insertKoreanTitle(source, id, title) {
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const idLine = `    "id": ${JSON.stringify(id)},`;
  const start = source.indexOf(idLine);
  if (start < 0) throw new Error(`entry not found: ${id}`);
  const next = source.indexOf(`${newline}  {${newline}    "id": `, start + idLine.length);
  const end = next >= 0 ? next : source.length;
  const block = source.slice(start, end);
  const marker = `    "translations": {${newline}`;
  const translationsAt = block.indexOf(marker);
  if (translationsAt < 0) throw new Error(`translations object not found: ${id}`);
  const translationBlock = block.slice(translationsAt);
  if (/^\s*"KR"\s*:/mu.test(translationBlock)) return source;
  const insertion = [
    marker,
    '        "KR": {\n',
    `            "title": ${JSON.stringify(title)}\n`,
    '        },\n'
  ].join('');
  const updatedBlock = block.replace(marker, insertion);
  return source.slice(0, start) + updatedBlock + source.slice(end);
}

function normalizeInsertedKoreanTitleNewlines(source) {
  return source.replace(/\r\n(        "KR": \{\r\n            "title": [^\r\n]+\r\n        \},)\r\n/g, (match, block) => `\r\n${block.replace(/\r\n/g, '\n')}\n`);
}

async function main() {
  const original = fs.readFileSync(dataPath, 'utf8');
  const data = loadHymnData(original);
  const pending = data.filter(entry => entry.country === 'VN' && !(entry.translations && entry.translations.KR && entry.translations.KR.title));
  if (!pending.length) {
    const normalized = normalizeInsertedKoreanTitleNewlines(original);
    if (normalized !== original) fs.writeFileSync(dataPath, normalized, 'utf8');
    console.log(JSON.stringify({ updated: 0, normalizedNewlines: normalized !== original, vietnamese: data.filter(entry => entry.country === 'VN').length }));
    return;
  }

  const uniqueSources = Array.from(new Set(pending.map(entry => String(entry.translations?.VN?.title || entry.title || '').trim()).filter(Boolean)));
  const sourceRows = uniqueSources.map((source, index) => ({ source, marker: `HT${String(index).padStart(4, '0')}` }));
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  const cached = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  const translatedBySource = new Map(Object.entries(cached));
  manualTitles.forEach((title, source) => translatedBySource.set(source, title));
  for (let i = 0; i < sourceRows.length; i += batchSize) {
    const batch = sourceRows.slice(i, i + batchSize).filter(row => !translatedBySource.has(row.source));
    if (batch.length) {
      const translated = await translateBatch(batch);
      batch.forEach(row => translatedBySource.set(row.source, translated.get(row.marker)));
      fs.writeFileSync(cachePath, JSON.stringify(Object.fromEntries(translatedBySource), null, 2), 'utf8');
    }
    console.log(`translated ${Math.min(i + batchSize, sourceRows.length)}/${sourceRows.length}`);
    await new Promise(resolve => setTimeout(resolve, 180));
  }

  let updated = original;
  pending.forEach(entry => {
    const sourceTitle = String(entry.translations?.VN?.title || entry.title || '').trim();
    const koreanTitle = String(translatedBySource.get(sourceTitle) || '').trim();
    if (!koreanTitle) throw new Error(`empty Korean title: ${entry.id}`);
    updated = insertKoreanTitle(updated, entry.id, koreanTitle);
  });

  const verified = loadHymnData(updated);
  const vietnamese = verified.filter(entry => entry.country === 'VN');
  const missing = vietnamese.filter(entry => !(entry.translations && entry.translations.KR && entry.translations.KR.title));
  if (missing.length) throw new Error(`verification failed: ${missing.length} Vietnamese titles still missing Korean`);

  const backupDir = path.join(root, 'tmp');
  fs.mkdirSync(backupDir, { recursive: true });
  const backupPath = path.join(backupDir, `hymn_data.backup-vn-ko-${Date.now()}.js`);
  fs.writeFileSync(backupPath, original, 'utf8');
  fs.writeFileSync(dataPath, updated, 'utf8');
  console.log(JSON.stringify({ updated: pending.length, vietnamese: vietnamese.length, uniqueTitles: uniqueSources.length, backupPath }, null, 2));
}

main().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
