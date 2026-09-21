const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const DEFAULT_HOST = '127.0.0.1';
const DEFAULT_PORT = 5237;
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const OVERRIDES_START = '// MASS_DATA_EDITOR_OVERRIDES_START';
const OVERRIDES_END = '// MASS_DATA_EDITOR_OVERRIDES_END';
const GEMINI_PROXY_ENDPOINT = process.env.GEMINI_PROXY_ENDPOINT
  || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/geminiProxy';
const LANGUAGE_NAMES = {
  KR: '한국어', VN: 'Tiếng Việt', EN: 'English', JP: '日本語', LA: 'Latina',
  ZH: '繁體中文', IT: 'Italiano', PT: 'Português', ES: 'Español', DE: 'Deutsch'
};
const TRANSLATION_CODES = {
  KR: 'ko', VN: 'vi', EN: 'en', JP: 'ja', LA: 'la', ZH: 'zh-tw',
  IT: 'it', PT: 'pt', ES: 'es', DE: 'de'
};

function parseArgs(argv) {
  const args = {
    check: false,
    host: DEFAULT_HOST,
    port: Number(process.env.PORT || DEFAULT_PORT)
  };
  argv.forEach(arg => {
    if (arg === '--check') args.check = true;
    if (arg.startsWith('--host=')) args.host = arg.slice('--host='.length);
    if (arg.startsWith('--port=')) args.port = Number(arg.slice('--port='.length));
  });
  if (!Number.isInteger(args.port) || args.port < 0 || args.port > 65535) {
    throw new Error('Use --port=0..65535');
  }
  return args;
}

function discoverCountryMassModules() {
  const indexPath = path.join(root, 'index.html');
  const indexSource = fs.readFileSync(indexPath, 'utf8');
  const modules = [];
  const seen = new Set();
  const scriptPattern = /JS%20file\/countries\/([^/"?]+)\/([^/"?]+_mass\.js)(?:\?[^"']*)?/gu;
  for (const match of indexSource.matchAll(scriptPattern)) {
    const modulePath = path.join(root, 'JS file', 'countries', decodeURIComponent(match[1]), decodeURIComponent(match[2]));
    const normalized = path.normalize(modulePath).toLowerCase();
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    const source = fs.readFileSync(modulePath, 'utf8');
    const jurisdictionMatch = source.match(/\bjurisdiction\s*:\s*["']([^"']+)["']/u);
    if (!jurisdictionMatch) throw new Error(`Could not find jurisdiction in ${modulePath}`);
    modules.push({ jurisdiction: jurisdictionMatch[1], path: modulePath });
  }
  if (!modules.length) throw new Error(`No country Mass modules were found in ${indexPath}`);
  return modules;
}

const countryMassModules = discoverCountryMassModules();

function readCountryMassSources() {
  return countryMassModules.map(module => ({
    ...module,
    code: fs.readFileSync(module.path, 'utf8')
  }));
}

function registeredModule(registry, jurisdiction) {
  return registry[jurisdiction]
    || Object.values(registry).find(module => module && module.jurisdiction === jurisdiction);
}

function runCountryMassSources(sources) {
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  sources.forEach(source => vm.runInContext(source.code, sandbox, { filename: source.path }));
  const registry = sandbox.countryMassData || {};
  const countries = {};
  sources.forEach(source => {
    const module = registeredModule(registry, source.jurisdiction);
    if (!module || !Array.isArray(module.ordinary)) {
      throw new Error(`Country Mass module ${source.path} did not register ${source.jurisdiction}`);
    }
    countries[source.jurisdiction] = module;
  });
  return { countries, registry };
}

function cleanText(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/\r\n?/g, '\n')
    .normalize('NFC');
}

function languageForModule(module) {
  const direct = String(module.ordinaryLanguage || module.language || '').trim().toUpperCase();
  if (direct) return direct;
  const counts = {};
  (module.ordinary || []).forEach(entry => {
    JSON.stringify(entry).replace(/(?:text|rubric|sp|cit)_([a-z]{2})/giu, (_, lang) => {
      const code = lang.toUpperCase();
      counts[code] = (counts[code] || 0) + 1;
      return _;
    });
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'EN';
}

function localizedValue(value, language) {
  if (typeof value === 'string') return value;
  if (!value || typeof value !== 'object') return '';
  const lower = language.toLowerCase();
  return cleanText(value[lower] || value[language] || Object.values(value).find(item => typeof item === 'string') || '');
}

function rowContentFields(row, language) {
  if (!row || typeof row !== 'object' || Array.isArray(row)) return [];
  const suffix = `_${language.toLowerCase()}`;
  const preferred = ['text', 'rubric', 'cit'];
  return preferred.flatMap(kind => {
    const field = `${kind}${suffix}`;
    return Object.prototype.hasOwnProperty.call(row, field) ? [{ field, kind }] : [];
  });
}

function speakerFieldForRow(row, language) {
  const field = `sp_${language.toLowerCase()}`;
  return row && Object.prototype.hasOwnProperty.call(row, field) ? field : '';
}

function blockKey(entryId, relativePath) {
  return JSON.stringify([String(entryId || ''), relativePath]);
}

function humanizePath(relativePath) {
  const ignored = new Set(['lines', 'content']);
  return relativePath
    .filter(part => typeof part === 'string' && !ignored.has(part))
    .map(part => String(part).replace(/_/g, ' '))
    .join(' › ');
}

function blockTitle(entry, language, relativePath) {
  const header = localizedValue(entry.header, language);
  const localTitle = cleanText(entry[language.toLowerCase()] || '');
  const pathLabel = humanizePath(relativePath);
  return [entry.id, header || localTitle, pathLabel].filter(Boolean).join(' · ');
}

function collectMassBlocks(ordinary, language) {
  const blocks = [];
  (ordinary || []).forEach((entry, entryIndex) => {
    function walk(value, relativePath) {
      if (Array.isArray(value)) {
        const containsRows = value.some(row => rowContentFields(row, language).length > 0);
        if (containsRows) {
          const rows = [];
          value.forEach((row, rowIndex) => {
            const speakerField = speakerFieldForRow(row, language);
            rowContentFields(row, language).forEach(({ field, kind }) => {
              rows.push({
                key: `${rowIndex}:${kind}`,
                rowIndex,
                kind,
                text: cleanText(row[field]),
                speaker: speakerField ? cleanText(row[speakerField]) : '',
                textPath: [entryIndex, ...relativePath, rowIndex, field],
                speakerPath: speakerField ? [entryIndex, ...relativePath, rowIndex, speakerField] : null
              });
            });
          });
          blocks.push({
            key: blockKey(entry.id, relativePath),
            entryId: String(entry.id || ''),
            title: blockTitle(entry, language, relativePath),
            entryIndex,
            relativePath,
            rows
          });
          return;
        }
        value.forEach((item, index) => walk(item, relativePath.concat(index)));
        return;
      }
      if (!value || typeof value !== 'object') return;
      Object.entries(value).forEach(([key, child]) => {
        if (key === 'header' || key === 'label') return;
        walk(child, relativePath.concat(key));
      });
    }
    walk(entry, []);
  });
  return blocks;
}

function findOrdinaryArrayStart(source) {
  const frozen = /\bconst\s+ordinary\s*=\s*Object\.freeze\s*\(/gu.exec(source);
  if (frozen) {
    const start = source.indexOf('[', frozen.index + frozen[0].length);
    if (start !== -1) return start;
  }
  const property = /\bordinary\s*:\s*\[/gu.exec(source);
  return property ? source.indexOf('[', property.index) : -1;
}

function skipWhitespaceAndComments(source, initial) {
  let index = initial;
  while (index < source.length) {
    if (/\s/u.test(source[index])) {
      index += 1;
      continue;
    }
    if (source[index] === '/' && source[index + 1] === '/') {
      index = source.indexOf('\n', index + 2);
      if (index === -1) return source.length;
      continue;
    }
    if (source[index] === '/' && source[index + 1] === '*') {
      index = source.indexOf('*/', index + 2);
      if (index === -1) throw new Error('Unterminated block comment while parsing Mass data');
      index += 2;
      continue;
    }
    break;
  }
  return index;
}

function scanString(source, initial) {
  const quote = source[initial];
  let escaped = false;
  for (let index = initial + 1; index < source.length; index += 1) {
    const character = source[index];
    if (escaped) escaped = false;
    else if (character === '\\') escaped = true;
    else if (character === quote) return index + 1;
  }
  throw new Error('Unterminated string while parsing Mass data');
}

function scanScalar(source, initial) {
  let index = initial;
  const stack = [];
  while (index < source.length) {
    const character = source[index];
    if (character === '"' || character === "'" || character === '`') {
      index = scanString(source, index);
      continue;
    }
    if (character === '/' && source[index + 1] === '/') {
      index = skipWhitespaceAndComments(source, index);
      continue;
    }
    if (character === '/' && source[index + 1] === '*') {
      index = skipWhitespaceAndComments(source, index);
      continue;
    }
    if (character === '(') stack.push(')');
    else if (character === '[') stack.push(']');
    else if (character === '{') stack.push('}');
    else if (stack.length && character === stack[stack.length - 1]) stack.pop();
    else if (!stack.length && (character === ',' || character === ']' || character === '}')) break;
    index += 1;
  }
  let end = index;
  while (end > initial && /\s/u.test(source[end - 1])) end -= 1;
  return { type: 'scalar', start: initial, end };
}

function parsePropertyKey(source, initial) {
  let index = skipWhitespaceAndComments(source, initial);
  if (source[index] === '"' || source[index] === "'") {
    const end = scanString(source, index);
    const literal = source.slice(index, end);
    const key = vm.runInNewContext(literal);
    return { key: String(key), end };
  }
  const match = /^[A-Za-z_$][\w$-]*/u.exec(source.slice(index));
  if (!match) throw new Error(`Unsupported object key near ${source.slice(index, index + 40)}`);
  return { key: match[0], end: index + match[0].length };
}

function parseValueNode(source, initial) {
  const index = skipWhitespaceAndComments(source, initial);
  if (source[index] === '[') return parseArrayNode(source, index);
  if (source[index] === '{') return parseObjectNode(source, index);
  return scanScalar(source, index);
}

function parseArrayNode(source, initial) {
  const items = [];
  let index = initial + 1;
  while (index < source.length) {
    index = skipWhitespaceAndComments(source, index);
    if (source[index] === ']') return { type: 'array', start: initial, end: index + 1, items };
    const node = parseValueNode(source, index);
    items.push(node);
    index = skipWhitespaceAndComments(source, node.end);
    if (source[index] === ',') index += 1;
    else if (source[index] !== ']') throw new Error(`Expected comma or ] near ${source.slice(index, index + 40)}`);
  }
  throw new Error('Unterminated array while parsing Mass data');
}

function parseObjectNode(source, initial) {
  const properties = new Map();
  let index = initial + 1;
  while (index < source.length) {
    index = skipWhitespaceAndComments(source, index);
    if (source[index] === '}') return { type: 'object', start: initial, end: index + 1, properties };
    const property = parsePropertyKey(source, index);
    index = skipWhitespaceAndComments(source, property.end);
    if (source[index] !== ':') throw new Error(`Expected colon after ${property.key}`);
    const node = parseValueNode(source, index + 1);
    properties.set(property.key, node);
    index = skipWhitespaceAndComments(source, node.end);
    if (source[index] === ',') index += 1;
    else if (source[index] !== '}') throw new Error(`Expected comma or } near ${source.slice(index, index + 40)}`);
  }
  throw new Error('Unterminated object while parsing Mass data');
}

function nodeAtPath(rootNode, dataPath) {
  let node = rootNode;
  for (const part of dataPath) {
    if (node.type === 'array' && Number.isInteger(part)) node = node.items[part];
    else if (node.type === 'object' && typeof part === 'string') node = node.properties.get(part);
    else node = null;
    if (!node) throw new Error(`Could not locate Mass data path ${JSON.stringify(dataPath)}`);
  }
  return node;
}

function replaceSourceRanges(source, replacements) {
  let output = source;
  replacements.sort((a, b) => b.start - a.start).forEach(replacement => {
    output = `${output.slice(0, replacement.start)}${JSON.stringify(replacement.value)}${output.slice(replacement.end)}`;
  });
  return output;
}

function valuesAtPath(value, dataPath) {
  return dataPath.reduce((current, part) => current && current[part], value);
}

function ordinaryOverrideBlock(source) {
  const markerStart = source.indexOf(OVERRIDES_START);
  if (markerStart === -1) return null;
  const markerEnd = source.indexOf(OVERRIDES_END, markerStart + OVERRIDES_START.length);
  if (markerEnd === -1) throw new Error('Mass editor override end marker is missing');
  const region = source.slice(markerStart, markerEnd);
  const assignment = /\bconst\s+ordinaryEditorOverrides\s*=\s*/u.exec(region);
  if (!assignment) throw new Error('Mass editor override array is missing');
  const arrayStart = source.indexOf('[', markerStart + assignment.index + assignment[0].length);
  if (arrayStart === -1 || arrayStart > markerEnd) throw new Error('Mass editor override array is invalid');
  const arrayNode = parseArrayNode(source, arrayStart);
  if (arrayNode.end > markerEnd) throw new Error('Mass editor override array crosses its end marker');
  const entries = vm.runInNewContext(source.slice(arrayStart, arrayNode.end));
  if (!Array.isArray(entries) || entries.some(entry => !entry || !Array.isArray(entry.path))) {
    throw new Error('Mass editor overrides must contain path arrays');
  }
  return { start: arrayStart, end: arrayNode.end, entries: Array.from(entries, entry => ({ path: Array.from(entry.path), value: cleanText(entry.value) })) };
}

function setOrdinaryOverride(entries, dataPath, value) {
  const pathKey = JSON.stringify(dataPath);
  const existing = entries.find(entry => JSON.stringify(entry.path) === pathKey);
  if (existing) existing.value = value;
  else entries.push({ path: Array.from(dataPath), value });
}

function formatOrdinaryOverrides(entries) {
  return JSON.stringify(entries, null, 2).replace(/\n/gu, '\n  ');
}

const editabilityCache = new Map();

function sourceEditability(source) {
  const cached = editabilityCache.get(source.path);
  if (cached && cached.code === source.code) return cached.result;
  let result;
  const ordinaryStart = findOrdinaryArrayStart(source.code);
  if (ordinaryOverrideBlock(source.code)) {
    result = { editable: true, reason: '' };
  } else if (ordinaryStart === -1) {
    result = { editable: false, reason: '공통 데이터에서 파생되는 모듈입니다.' };
  } else if (/\bordinary\.find\s*\(/u.test(source.code.slice(ordinaryStart))) {
    result = { editable: false, reason: '실행 중 재구성되는 데이터이므로 원본 보호를 위해 읽기 전용입니다.' };
  } else {
    result = { editable: true, reason: '' };
  }
  editabilityCache.set(source.path, { code: source.code, result });
  return result;
}

function getLoadedState(sources = readCountryMassSources()) {
  const runtime = runCountryMassSources(sources);
  const countries = sources.map(source => {
    const module = runtime.countries[source.jurisdiction];
    const language = languageForModule(module);
    const blocks = collectMassBlocks(module.ordinary, language);
    const editability = sourceEditability(source);
    return {
      jurisdiction: source.jurisdiction,
      name: module.jurisdictionName || module.name || source.jurisdiction,
      language,
      languageName: LANGUAGE_NAMES[language] || language,
      editable: editability.editable,
      editReason: editability.reason,
      file: source.path,
      blocks: blocks.length
    };
  });
  return { sources, runtime, countries };
}

function blocksForCountry(loaded, jurisdiction) {
  const country = loaded.countries.find(item => item.jurisdiction === jurisdiction);
  if (!country) throw Object.assign(new Error(`Unknown jurisdiction: ${jurisdiction}`), { statusCode: 404 });
  const module = loaded.runtime.countries[jurisdiction];
  return collectMassBlocks(module.ordinary, country.language);
}

function blockPair(loaded, leftJurisdiction, rightJurisdiction, key) {
  const leftCountry = loaded.countries.find(item => item.jurisdiction === leftJurisdiction);
  const rightCountry = loaded.countries.find(item => item.jurisdiction === rightJurisdiction);
  if (!leftCountry || !rightCountry) throw Object.assign(new Error('Choose both countries'), { statusCode: 400 });
  const leftBlock = blocksForCountry(loaded, leftJurisdiction).find(block => block.key === key);
  const rightBlock = blocksForCountry(loaded, rightJurisdiction).find(block => block.key === key);
  if (!leftBlock && !rightBlock) throw Object.assign(new Error('The selected Mass passage was not found'), { statusCode: 404 });
  const rowKeys = [];
  [...(leftBlock?.rows || []), ...(rightBlock?.rows || [])].forEach(row => {
    if (!rowKeys.includes(row.key)) rowKeys.push(row.key);
  });
  const leftRows = new Map((leftBlock?.rows || []).map(row => [row.key, row]));
  const rightRows = new Map((rightBlock?.rows || []).map(row => [row.key, row]));
  return {
    key,
    title: leftBlock?.title || rightBlock?.title || key,
    leftCountry,
    rightCountry,
    leftExists: Boolean(leftBlock),
    rightExists: Boolean(rightBlock),
    rows: rowKeys.map(rowKey => ({ key: rowKey, left: leftRows.get(rowKey) || null, right: rightRows.get(rowKey) || null }))
  };
}

function prepareMassSourceEdit({ jurisdiction, blockKey: selectedBlockKey, updates }, sources = readCountryMassSources()) {
  const loaded = getLoadedState(sources);
  const country = loaded.countries.find(item => item.jurisdiction === jurisdiction);
  if (!country) throw Object.assign(new Error(`Unknown jurisdiction: ${jurisdiction}`), { statusCode: 404 });
  if (!country.editable) throw Object.assign(new Error(`${jurisdiction} Mass data is derived from another module and is read-only`), { statusCode: 409 });
  const sourceIndex = sources.findIndex(source => source.jurisdiction === jurisdiction);
  const source = sources[sourceIndex];
  const module = loaded.runtime.countries[jurisdiction];
  const block = collectMassBlocks(module.ordinary, country.language).find(item => item.key === selectedBlockKey);
  if (!block) throw Object.assign(new Error('The selected Mass passage was not found in this country'), { statusCode: 404 });

  const overrideBlock = ordinaryOverrideBlock(source.code);
  const ordinaryStart = findOrdinaryArrayStart(source.code);
  const ordinaryNode = overrideBlock ? null : parseArrayNode(source.code, ordinaryStart);
  const overrideEntries = overrideBlock ? overrideBlock.entries : [];
  const rowsByKey = new Map(block.rows.map(row => [row.key, row]));
  const replacements = [];
  const changed = [];

  (Array.isArray(updates) ? updates : []).forEach(update => {
    const row = rowsByKey.get(String(update.key || ''));
    if (!row) throw Object.assign(new Error(`Unknown row: ${update.key}`), { statusCode: 400 });
    const nextText = cleanText(update.text);
    const expectedText = cleanText(update.expectedText);
    if (row.text !== expectedText) {
      throw Object.assign(new Error(`The text changed after it was loaded: ${update.key}`), { statusCode: 409 });
    }
    if (row.text !== nextText) {
      if (overrideBlock) setOrdinaryOverride(overrideEntries, row.textPath, nextText);
      else {
        const textNode = nodeAtPath(ordinaryNode, row.textPath);
        replacements.push({ start: textNode.start, end: textNode.end, value: nextText });
      }
      changed.push({ path: row.textPath, value: nextText, key: row.key, field: 'text' });
    }

    if (row.speakerPath) {
      const nextSpeaker = cleanText(update.speaker);
      const expectedSpeaker = cleanText(update.expectedSpeaker);
      if (row.speaker !== expectedSpeaker) {
        throw Object.assign(new Error(`The speaker changed after it was loaded: ${update.key}`), { statusCode: 409 });
      }
      if (row.speaker !== nextSpeaker) {
        if (overrideBlock) setOrdinaryOverride(overrideEntries, row.speakerPath, nextSpeaker);
        else {
          const speakerNode = nodeAtPath(ordinaryNode, row.speakerPath);
          replacements.push({ start: speakerNode.start, end: speakerNode.end, value: nextSpeaker });
        }
        changed.push({ path: row.speakerPath, value: nextSpeaker, key: row.key, field: 'speaker' });
      }
    }
  });

  if (!changed.length) return { sources, sourceIndex, changed: [], nextCode: source.code, country, block };
  const nextCode = overrideBlock
    ? `${source.code.slice(0, overrideBlock.start)}${formatOrdinaryOverrides(overrideEntries)}${source.code.slice(overrideBlock.end)}`
    : replaceSourceRanges(source.code, replacements);
  const nextSources = sources.map((item, index) => index === sourceIndex ? { ...item, code: nextCode } : item);
  const nextRuntime = runCountryMassSources(nextSources);
  const nextOrdinary = nextRuntime.countries[jurisdiction].ordinary;
  changed.forEach(change => {
    if (cleanText(valuesAtPath(nextOrdinary, change.path)) !== change.value) {
      throw new Error(`Saved Mass data did not round-trip at ${JSON.stringify(change.path)}`);
    }
  });
  if (nextOrdinary.length !== module.ordinary.length) throw new Error('Mass data item count changed during save');
  return { sources: nextSources, sourceIndex, changed, nextCode, country, block };
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
}

function saveMassSourceEdit(payload) {
  const prepared = prepareMassSourceEdit(payload);
  if (!prepared.changed.length) return { changed: [], backup: '', file: prepared.country.file };
  const source = prepared.sources[prepared.sourceIndex];
  const backupRoot = path.join(root, 'tmp', `mass-data-backup-${timestamp()}`);
  const relativePath = path.relative(root, source.path);
  const backup = path.join(backupRoot, relativePath);
  const nextPath = `${source.path}.next-${process.pid}`;
  fs.mkdirSync(path.dirname(backup), { recursive: true });
  fs.copyFileSync(source.path, backup);
  try {
    fs.writeFileSync(nextPath, prepared.nextCode, 'utf8');
    fs.renameSync(nextPath, source.path);
    getLoadedState();
  } catch (error) {
    if (fs.existsSync(nextPath)) fs.rmSync(nextPath, { force: true });
    fs.copyFileSync(backup, source.path);
    throw error;
  }
  return { changed: prepared.changed, backup: backupRoot, file: source.path };
}

function translationPrompt(text, sourceLanguage, targetLanguage) {
  const sourceName = LANGUAGE_NAMES[sourceLanguage] || sourceLanguage;
  const targetName = LANGUAGE_NAMES[targetLanguage] || targetLanguage;
  return [
    'Translate the following Roman Catholic Order of Mass text.',
    `Source language: ${sourceName}. Target language: ${targetName}.`,
    'Use official Catholic liturgical terminology. Preserve ✚, ◎, ✠, brackets, HTML tags, placeholders, and line breaks.',
    'Return only the translated text, without explanations or quotation marks.',
    '',
    text
  ].join('\n');
}

async function readFetchJson(response) {
  const text = await response.text();
  let payload;
  try { payload = text ? JSON.parse(text) : {}; } catch { payload = {}; }
  if (!response.ok) throw Object.assign(new Error(payload.error || `Translation HTTP ${response.status}`), { statusCode: 502 });
  return payload;
}

function geminiText(payload) {
  return cleanText(payload?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('') || '').trim();
}

async function translateText({ text, sourceLanguage, targetLanguage, mode }) {
  const source = cleanText(text).trim();
  if (!source) throw Object.assign(new Error('번역할 원문을 입력하세요.'), { statusCode: 400 });
  if (!TRANSLATION_CODES[targetLanguage]) throw Object.assign(new Error(`지원하지 않는 번역 언어: ${targetLanguage}`), { statusCode: 400 });
  const body = mode === 'google'
    ? {
        kind: 'translateFallback',
        sourceLang: TRANSLATION_CODES[sourceLanguage] || 'auto',
        targetLang: TRANSLATION_CODES[targetLanguage],
        text: source
      }
    : {
        kind: 'translate',
        promptConfig: {
          contents: [{ parts: [{ text: translationPrompt(source, sourceLanguage, targetLanguage) }] }],
          generationConfig: { temperature: 0.1 }
        }
      };
  const response = await fetch(GEMINI_PROXY_ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60000)
  });
  const payload = await readFetchJson(response);
  const translated = mode === 'google' ? cleanText(payload.text).trim() : geminiText(payload);
  if (!translated) throw Object.assign(new Error('번역 결과가 비어 있습니다.'), { statusCode: 502 });
  return translated;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('Request body is too large'), { statusCode: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); }
      catch { reject(Object.assign(new Error('Invalid JSON body'), { statusCode: 400 })); }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(payload));
}

function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${DEFAULT_HOST}`);
      if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
        res.end(INDEX_HTML);
        return;
      }
      if (req.method === 'GET' && url.pathname === '/api/state') {
        const loaded = getLoadedState();
        sendJson(res, 200, { ok: true, countries: loaded.countries, translationEndpoint: GEMINI_PROXY_ENDPOINT });
        return;
      }
      if (req.method === 'GET' && url.pathname === '/api/blocks') {
        const loaded = getLoadedState();
        const blocks = blocksForCountry(loaded, url.searchParams.get('country') || 'KR');
        sendJson(res, 200, { ok: true, blocks: blocks.map(block => ({ key: block.key, title: block.title, rows: block.rows.length })) });
        return;
      }
      if (req.method === 'GET' && url.pathname === '/api/block') {
        const loaded = getLoadedState();
        sendJson(res, 200, { ok: true, block: blockPair(
          loaded,
          url.searchParams.get('left') || 'KR',
          url.searchParams.get('right') || 'VN',
          url.searchParams.get('key') || ''
        ) });
        return;
      }
      if (req.method === 'POST' && url.pathname === '/api/save') {
        const body = await readJson(req);
        sendJson(res, 200, { ok: true, ...saveMassSourceEdit(body) });
        return;
      }
      if (req.method === 'POST' && url.pathname === '/api/translate') {
        const body = await readJson(req);
        sendJson(res, 200, { ok: true, text: await translateText(body) });
        return;
      }
      sendJson(res, 404, { ok: false, error: 'Not found' });
    } catch (error) {
      sendJson(res, error.statusCode || 500, { ok: false, error: error.message || String(error) });
    }
  });
}

function listen(server, host, port) {
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, host, () => resolve(server.address()));
  });
}

async function listenWithFallback(server, host, port) {
  try { return await listen(server, host, port); }
  catch (error) {
    if (error.code !== 'EADDRINUSE' || port === 0) throw error;
    return listen(server, host, 0);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const loaded = getLoadedState();
  const report = {
    ok: true,
    countries: loaded.countries.length,
    editableCountries: loaded.countries.filter(country => country.editable).length,
    blocks: loaded.countries.reduce((sum, country) => sum + country.blocks, 0),
    rows: loaded.countries.reduce((sum, country) => {
      return sum + blocksForCountry(loaded, country.jurisdiction).reduce((count, block) => count + block.rows.length, 0);
    }, 0)
  };
  if (args.check) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  const server = createServer();
  const address = await listenWithFallback(server, args.host, args.port);
  console.log(`Mass Data Editor: http://${address.address}:${address.port}/`);
}

module.exports = {
  blockPair,
  blocksForCountry,
  collectMassBlocks,
  countryMassModules,
  findOrdinaryArrayStart,
  getLoadedState,
  prepareMassSourceEdit,
  readCountryMassSources,
  runCountryMassSources
};

if (require.main === module) {
  main().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exit(1);
  });
}

const INDEX_HTML = String.raw`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>미사통상문 원문·번역문 편집기</title>
  <style>
    :root { color-scheme: light; --ink:#172033; --muted:#687188; --line:#d8deea; --panel:#fff; --blue:#315ee8; --blue2:#eef3ff; --green:#16845b; --bg:#f3f5fa; }
    * { box-sizing:border-box; }
    body { margin:0; background:var(--bg); color:var(--ink); font-family:Inter,"Noto Sans KR","Malgun Gothic",sans-serif; }
    button,input,select,textarea { font:inherit; }
    button { cursor:pointer; }
    .top { position:sticky; top:0; z-index:5; padding:18px 22px 14px; color:white; background:linear-gradient(135deg,#18233b,#315ee8); box-shadow:0 4px 20px #18233b33; }
    .top h1 { margin:0 0 5px; font-size:21px; }
    .top p { margin:0; color:#dce5ff; font-size:13px; }
    main { max-width:1500px; margin:auto; padding:20px; }
    .controls,.status,.row-card,.draft { background:var(--panel); border:1px solid var(--line); border-radius:16px; box-shadow:0 8px 24px #1720330b; }
    .controls { padding:16px; display:grid; grid-template-columns:minmax(170px,1fr) minmax(170px,1fr) minmax(260px,2fr) auto; gap:12px; align-items:end; }
    label { display:grid; gap:6px; color:var(--muted); font-size:12px; font-weight:700; }
    select,input[type=search],input[type=text],textarea { width:100%; border:1px solid #cbd3e2; border-radius:10px; background:white; color:var(--ink); padding:10px 12px; outline:none; }
    select:focus,input:focus,textarea:focus { border-color:var(--blue); box-shadow:0 0 0 3px #315ee820; }
    .section-tools { display:grid; grid-template-columns:minmax(180px,1fr) minmax(260px,2fr); gap:10px; }
    .primary,.secondary,.translate { border:0; border-radius:10px; padding:10px 14px; font-weight:800; }
    .primary { color:white; background:var(--blue); }
    .secondary { color:#263451; background:#e9edf5; }
    .translate { color:#2349b8; background:var(--blue2); padding:7px 10px; font-size:12px; }
    button:disabled { opacity:.45; cursor:not-allowed; }
    .status { margin:12px 0; padding:11px 14px; color:var(--muted); font-size:13px; }
    .status.ok { color:var(--green); border-color:#bce4d4; background:#f1fbf7; }
    .status.error { color:#ad2434; border-color:#f0c3c8; background:#fff5f6; }
    .columns-head { display:grid; grid-template-columns:minmax(0,1fr) 118px minmax(0,1fr); gap:12px; margin:16px 0 8px; padding:0 14px; color:#39445c; font-weight:900; }
    .columns-head span:last-child { text-align:right; }
    .row-card { display:grid; grid-template-columns:minmax(0,1fr) 118px minmax(0,1fr); gap:12px; padding:14px; margin-bottom:12px; }
    .editor { min-width:0; }
    .editor-meta { display:flex; gap:8px; align-items:center; margin-bottom:8px; }
    .kind { display:inline-flex; padding:4px 8px; border-radius:999px; color:#536078; background:#eef1f6; font-size:11px; font-weight:800; }
    .speaker { max-width:110px; padding:7px 9px !important; font-weight:800; text-align:center; }
    .speak { margin-left:auto; padding:7px 10px; white-space:nowrap; }
    textarea { min-height:116px; resize:vertical; line-height:1.65; }
    .missing { min-height:154px; display:grid; place-items:center; border:1px dashed #ccd3df; border-radius:12px; color:#8a93a7; background:#fafbfc; }
    .translate-stack { display:flex; flex-direction:column; justify-content:center; gap:7px; }
    .savebar { position:sticky; bottom:12px; z-index:4; display:grid; grid-template-columns:1fr 118px 1fr; gap:12px; margin:18px 0; }
    .savebar button { box-shadow:0 8px 20px #17203320; }
    .draft { padding:15px; margin-top:18px; }
    .draft h2 { margin:0 0 8px; font-size:15px; }
    .draft textarea { min-height:90px; background:#fbfcff; }
    .empty { padding:50px 20px; text-align:center; color:var(--muted); }
    @media (max-width:850px) {
      .controls { grid-template-columns:1fr; }
      .section-tools { grid-template-columns:1fr; }
      .columns-head { grid-template-columns:1fr 1fr; }
      .columns-head span:nth-child(2) { display:none; }
      .row-card { grid-template-columns:1fr; }
      .translate-stack { flex-direction:row; flex-wrap:wrap; }
      .savebar { grid-template-columns:1fr 1fr; }
      .savebar span { display:none; }
    }
  </style>
</head>
<body>
  <header class="top">
    <h1>미사통상문 원문 · 번역문 편집기</h1>
    <p>같은 구절을 양쪽에서 비교하고 국가별 원본 파일에 직접 저장합니다.</p>
  </header>
  <main>
    <section class="controls">
      <label>원문 국가·언어<select id="left-country"></select></label>
      <label>번역문 국가·언어<select id="right-country"></select></label>
      <div class="section-tools">
        <label>구절 검색<input id="search" type="search" placeholder="예: 인사, greeting, eucharist"></label>
        <label>미사통상문 구절<select id="block"></select></label>
      </div>
      <button id="reload" class="secondary" type="button">새로고침</button>
    </section>
    <div id="status" class="status">데이터를 불러오는 중입니다.</div>
    <div class="columns-head"><span id="left-title">원문</span><span>번역</span><span id="right-title">번역문</span></div>
    <section id="rows"></section>
    <div class="savebar">
      <button id="save-left" class="primary" type="button">왼쪽 원문 저장</button><span></span>
      <button id="save-right" class="primary" type="button">오른쪽 번역문 저장</button>
    </div>
    <section class="draft">
      <h2>번역 초안 / 작업 메모</h2>
      <textarea id="draft" placeholder="AI 또는 Google 번역 결과가 여기에 함께 표시됩니다. 자유롭게 메모해도 됩니다."></textarea>
    </section>
  </main>
  <script>
    const state = { countries:[], blocks:[], visibleBlocks:[], block:null };
    const el = Object.fromEntries(['left-country','right-country','search','block','reload','status','rows','save-left','save-right','left-title','right-title','draft'].map(id => [id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()), document.getElementById(id)]));
    function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
    async function api(url, options) { const response=await fetch(url,options); const body=await response.json(); if(!response.ok||!body.ok) throw new Error(body.error||('HTTP '+response.status)); return body; }
    function setStatus(message, kind='') { el.status.textContent=message; el.status.className='status '+kind; }
    function countryLabel(country) { return country.name+' · '+country.languageName+' ('+country.jurisdiction+')'+(country.editable?'':' · 읽기 전용'); }
    function selectedCountry(side) { return state.countries.find(c=>c.jurisdiction===el[side+'Country'].value); }
    function countryOptions(selected) { return state.countries.map(c=>'<option value="'+escapeHtml(c.jurisdiction)+'" '+(c.jurisdiction===selected?'selected':'')+'>'+escapeHtml(countryLabel(c))+'</option>').join(''); }
    async function loadState() {
      const body=await api('/api/state'); state.countries=body.countries;
      el.leftCountry.innerHTML=countryOptions(state.countries.some(c=>c.jurisdiction==='KR')?'KR':state.countries[0].jurisdiction);
      el.rightCountry.innerHTML=countryOptions(state.countries.some(c=>c.jurisdiction==='VN')?'VN':state.countries[1].jurisdiction);
      await loadBlocks(); setStatus(state.countries.length+'개 국가 모듈을 불러왔습니다.','ok');
    }
    async function loadBlocks(preferredKey='') {
      const body=await api('/api/blocks?country='+encodeURIComponent(el.leftCountry.value)); state.blocks=body.blocks; filterBlocks(preferredKey);
    }
    function filterBlocks(preferredKey='') {
      const query=el.search.value.trim().toLowerCase(); state.visibleBlocks=state.blocks.filter(b=>!query||b.title.toLowerCase().includes(query));
      const current=preferredKey||el.block.value; el.block.innerHTML=state.visibleBlocks.map(b=>'<option value="'+escapeHtml(b.key)+'">'+escapeHtml(b.title)+' ('+b.rows+')</option>').join('');
      if(state.visibleBlocks.some(b=>b.key===current)) el.block.value=current;
      if(el.block.value) loadBlock().catch(error=>setStatus(error.message,'error')); else { el.rows.innerHTML='<div class="empty">검색 결과가 없습니다.</div>'; state.block=null; }
    }
    function kindLabel(kind) { return {text:'본문',rubric:'지시문',cit:'인용'}[kind]||kind; }
    function editorHtml(side,row) {
      if(!row) return '<div class="missing">해당 언어에 대응 구절이 없습니다.</div>';
      const disabled=row.speakerPath?'':'disabled';
      return '<div class="editor-meta"><span class="kind">'+escapeHtml(kindLabel(row.kind))+'</span><input class="speaker" data-side="'+side+'" data-role="speaker" data-row="'+escapeHtml(row.key)+'" value="'+escapeHtml(row.speaker)+'" '+disabled+' title="화자"><button class="speak secondary" type="button" data-speak-side="'+side+'" data-row="'+escapeHtml(row.key)+'" title="이 문장 읽어주기">🔊 듣기</button></div>'+
        '<textarea data-side="'+side+'" data-role="text" data-row="'+escapeHtml(row.key)+'">'+escapeHtml(row.text)+'</textarea>';
    }
    function rowHtml(pair,index) {
      const leftButtons=pair.left&&pair.right?'<button class="translate" data-mode="ai" data-direction="right" data-row="'+escapeHtml(pair.key)+'">AI →</button><button class="translate" data-mode="google" data-direction="right" data-row="'+escapeHtml(pair.key)+'">Google →</button>':'';
      const rightButtons=pair.left&&pair.right?'<button class="translate" data-mode="ai" data-direction="left" data-row="'+escapeHtml(pair.key)+'">← AI</button><button class="translate" data-mode="google" data-direction="left" data-row="'+escapeHtml(pair.key)+'">← Google</button>':'';
      return '<article class="row-card" data-row-card="'+escapeHtml(pair.key)+'"><div class="editor">'+editorHtml('left',pair.left)+'</div><div class="translate-stack">'+leftButtons+rightButtons+'</div><div class="editor">'+editorHtml('right',pair.right)+'</div></article>';
    }
    async function loadBlock() {
      if(!el.block.value) return; setStatus('선택한 구절을 불러오는 중입니다.');
      const url='/api/block?left='+encodeURIComponent(el.leftCountry.value)+'&right='+encodeURIComponent(el.rightCountry.value)+'&key='+encodeURIComponent(el.block.value);
      state.block=(await api(url)).block; el.rows.innerHTML=state.block.rows.map(rowHtml).join('')||'<div class="empty">편집 가능한 본문이 없습니다.</div>';
      el.leftTitle.textContent=countryLabel(state.block.leftCountry); el.rightTitle.textContent=countryLabel(state.block.rightCountry);
      el.saveLeft.disabled=!state.block.leftCountry.editable||!state.block.leftExists; el.saveRight.disabled=!state.block.rightCountry.editable||!state.block.rightExists;
      document.querySelectorAll('button.translate').forEach(button=>button.addEventListener('click',()=>translateRow(button).catch(error=>setStatus(error.message,'error'))));
      document.querySelectorAll('button.speak').forEach(button=>button.addEventListener('click',()=>speakRow(button)));
      setStatus(state.block.title,'ok');
    }
    function inputFor(side,role,rowKey) { return document.querySelector('[data-side="'+side+'"][data-role="'+role+'"][data-row="'+CSS.escape(rowKey)+'"]'); }
    function speakRow(button) {
      if(!('speechSynthesis' in window)) { setStatus('이 브라우저는 문장 읽어주기를 지원하지 않습니다.','error'); return; }
      const side=button.dataset.speakSide; const text=inputFor(side,'text',button.dataset.row); if(!text||!text.value.trim())return;
      const language=selectedCountry(side).language; const speechCodes={KR:'ko-KR',VN:'vi-VN',EN:'en-US',JP:'ja-JP',LA:'la',ZH:'zh-TW',IT:'it-IT',PT:'pt-PT',ES:'es-ES',DE:'de-DE'};
      const utterance=new SpeechSynthesisUtterance(text.value); utterance.lang=speechCodes[language]||language; speechSynthesis.cancel(); speechSynthesis.speak(utterance); setStatus('선택한 문장을 읽고 있습니다.','ok');
    }
    async function translateRow(button) {
      const direction=button.dataset.direction; const from=direction==='right'?'left':'right'; const to=direction==='right'?'right':'left'; const rowKey=button.dataset.row;
      const source=inputFor(from,'text',rowKey); const target=inputFor(to,'text',rowKey); if(!source||!target) return;
      const sourceCountry=selectedCountry(from); const targetCountry=selectedCountry(to); button.disabled=true; setStatus((button.dataset.mode==='ai'?'AI':'Google')+' 번역 중…');
      try { const body=await api('/api/translate',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({mode:button.dataset.mode,text:source.value,sourceLanguage:sourceCountry.language,targetLanguage:targetCountry.language})}); target.value=body.text; el.draft.value=body.text; setStatus('번역 초안을 반대쪽 편집창에 넣었습니다. 저장 전 반드시 전례문과 대조하세요.','ok'); }
      finally { button.disabled=false; }
    }
    function updatesFor(side) {
      const sourceRows=new Map(state.block.rows.map(pair=>[pair.key,pair[side]])); const updates=[];
      sourceRows.forEach((row,key)=>{ if(!row)return; const text=inputFor(side,'text',key); const speaker=inputFor(side,'speaker',key); updates.push({key,text:text.value,expectedText:row.text,speaker:speaker?speaker.value:row.speaker,expectedSpeaker:row.speaker}); }); return updates;
    }
    async function saveSide(side) {
      if(!state.block)return; const country=selectedCountry(side); if(!country.editable)throw new Error('이 국가는 다른 모듈에서 파생되어 읽기 전용입니다.');
      setStatus(countryLabel(country)+' 저장 중…'); const body=await api('/api/save',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({jurisdiction:country.jurisdiction,blockKey:state.block.key,updates:updatesFor(side)})});
      setStatus(body.changed.length?body.changed.length+'개 필드를 저장했습니다. 백업: '+body.backup:'변경된 내용이 없습니다.','ok'); await loadBlock();
    }
    el.leftCountry.addEventListener('change',()=>loadBlocks().catch(e=>setStatus(e.message,'error')));
    el.rightCountry.addEventListener('change',()=>loadBlock().catch(e=>setStatus(e.message,'error')));
    el.search.addEventListener('input',()=>filterBlocks()); el.block.addEventListener('change',()=>loadBlock().catch(e=>setStatus(e.message,'error')));
    el.reload.addEventListener('click',()=>loadBlocks(el.block.value).catch(e=>setStatus(e.message,'error')));
    el.saveLeft.addEventListener('click',()=>saveSide('left').catch(e=>setStatus(e.message,'error'))); el.saveRight.addEventListener('click',()=>saveSide('right').catch(e=>setStatus(e.message,'error')));
    loadState().catch(error=>setStatus(error.message,'error'));
  </script>
</body>
</html>`;
