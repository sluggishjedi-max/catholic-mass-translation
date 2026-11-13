const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');
const { buildFirebaseUploadPayload, serveFirebaseUploadClient } = require('./firebase-upload-support');
const { serveEditorLayout } = require('./editor-layout-support');
const { serveHymnPreview } = require('./hymn-editor-preview');

const root = path.resolve(__dirname, '..');
const defaultHymnDataPath = path.join(root, 'JS file', 'hymn_data.js');
const hymnDataPath = process.env.HYMN_DATA_PATH
  ? path.resolve(process.env.HYMN_DATA_PATH)
  : defaultHymnDataPath;
const usesCountryModules = path.normalize(hymnDataPath).toLowerCase()
  === path.normalize(defaultHymnDataPath).toLowerCase();

function discoverCountryHymnModules() {
  return require('./country-aux-sources').discoverCountryAuxModules('hymns');
}

const countryHymnModules = usesCountryModules ? discoverCountryHymnModules() : [];
const hymnDataDisplayPath = usesCountryModules
  ? path.join(root, 'JS file', 'countries', '*', '*_hymns.js')
  : hymnDataPath;
const DEFAULT_PORT = 5227;
const DEFAULT_HOST = '127.0.0.1';
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const VOICE_TYPES = ['단성', '화성', '2성부', '3성부', '4성부'];
const REFRAIN_HEADING_RE = /^(?:\[\s*(?:후렴구?|후렴|반복|응송|refrain|chorus|ref\.?|antiphona|antiphon|antífona|ant\.?|[đdð]\.?|[đdð]k\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?)\s*\]\s*|(?:후렴구?|후렴|반복|응송|refrain|chorus|ref\.?|antiphona|antiphon|antífona|ant\.?|[đdð]\.?|[đdð]k\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?|[r℟])(?=\s|[:：.)\]-]|$)\s*[:：.)\]-]?\s*)(.*)$/iu;

function parseArgs(argv) {
  const args = {
    check: false,
    port: Number(process.env.PORT || DEFAULT_PORT),
    host: DEFAULT_HOST
  };

  for (const arg of argv) {
    if (arg === '--check') args.check = true;
    if (arg.startsWith('--port=')) args.port = Number(arg.slice('--port='.length));
    if (arg.startsWith('--host=')) args.host = arg.slice('--host='.length);
  }

  if (!Number.isInteger(args.port) || args.port < 0 || args.port > 65535) {
    throw new Error('Use --port=0..65535');
  }

  return args;
}

function runHymnDataCode(code, filename = hymnDataPath) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename });
  const data = sandbox.hymnData || sandbox.ordoHymnData;
  if (!Array.isArray(data)) {
    throw new Error('globalThis.hymnData was not loaded from hymn_data.js');
  }
  return data;
}

function runCountryModuleSources(sources) {
  const sandbox = {};
  vm.createContext(sandbox);
  for (const source of sources) {
    vm.runInContext(source.code, sandbox, { filename: source.path });
  }
  const registeredCountries = sandbox.countryHymnData || {};
  const countries = {};
  const data = sources.flatMap(source => {
    const countryModule = registeredCountries[source.jurisdiction]
      || Object.values(registeredCountries).find(module => module && module.jurisdiction === source.jurisdiction);
    if (!countryModule || !Array.isArray(countryModule.entries)) {
      throw new Error(`Country hymn module ${source.path} did not register ${source.jurisdiction}`);
    }
    countries[source.jurisdiction] = countryModule;
    return countryModule.entries;
  });
  return {
    data,
    countries
  };
}

function readCountryModuleSources() {
  return countryHymnModules.map(module => ({
    ...module,
    code: fs.readFileSync(module.path, 'utf8')
  }));
}

function loadHymnData() {
  if (usesCountryModules) {
    return runCountryModuleSources(readCountryModuleSources()).data;
  }
  return runHymnDataCode(fs.readFileSync(hymnDataPath, 'utf8'));
}

function firebaseHymnItems() {
  if (!usesCountryModules) return loadHymnData();
  const runtime = runCountryModuleSources(readCountryModuleSources());
  return countryHymnModules.flatMap(module => (
    runtime.countries[module.jurisdiction].entries || []
  ).map(entry => ({
    ...JSON.parse(JSON.stringify(entry)),
    jurisdiction: module.jurisdiction,
    __firebaseDocId: `${module.jurisdiction}__${entry.id}`
  })));
}

function cleanText(value) {
  return String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/\u00a0/g, ' ')
    .normalize('NFC')
    .trim();
}

function cleanLine(value) {
  return cleanText(value).replace(/\s+/g, ' ');
}

function normalizeSearch(value) {
  return cleanLine(value)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[()[\]{}<>.,;:!?'"`~*_+=/\\|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function unique(values) {
  const seen = new Set();
  const output = [];
  for (const value of values) {
    const clean = cleanLine(value);
    if (!clean || seen.has(clean)) continue;
    seen.add(clean);
    output.push(clean);
  }
  return output;
}

function parseTagList(value) {
  if (Array.isArray(value)) return unique(value);
  return unique(String(value || '').split(/[,;\n]+/u));
}

function normalizeVoiceType(value) {
  const text = cleanLine(value);
  return VOICE_TYPES.includes(text) ? text : '';
}

function numericValue(value) {
  const match = String(value || '').match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function formatNumber(value, width = 3) {
  const number = Number(value) || 1;
  return number < 1000 ? String(number).padStart(width, '0') : String(number);
}

function firstLyricsLine(lyrics) {
  return cleanText(lyrics).split('\n').map(cleanLine).find(Boolean) || '';
}

function headingComparableText(line) {
  return String(line || '')
    .trim()
    .replace(/&lt;(\/?)(b|strong)&gt;/gi, '<$1$2>')
    .replace(/<\/?(?:b|strong)>/gi, ' ')
    .replace(/\*\*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseVerseHeading(line) {
  const value = headingComparableText(line);
  if (!value) return null;

  const responsorial = value.match(/^(?:\[\s*[đdð]x\s*\]|[đdð]x\s*[:：.)])\s*(.*)$/iu);
  if (responsorial) return { label: '후렴', rest: responsorial[1] || '' };

  const qualifiedSection = value.match(/^\[\s*(도입|간주|마침|intro|introduction|bridge|coda|outro)\s*(\([^)]+\))\s*\]\s*(.*)$/iu);
  if (qualifiedSection) return { label: `${qualifiedSection[1]} ${qualifiedSection[2]}`, rest: qualifiedSection[3] || '' };

  const variantRefrain = value.match(/^(?:\[\s*)?(?:후렴|refrain|chorus|[đdð]k)\s*(?:\(([^)]+)\)|([2-4]\s*bè))\s*\]?\s*[:：.)-]?\s*(.*)$/iu);
  if (variantRefrain) {
    return { label: `후렴 (${variantRefrain[1] || variantRefrain[2]})`, rest: variantRefrain[3] || '' };
  }

  const section = value.match(/^(?:\[\s*(가사|도입|간주|마침|영광송|栄唱|intro|introduction|bridge|coda|outro|doxology)\s*\]|(가사|도입|간주|마침|영광송|栄唱|intro|introduction|bridge|coda|outro|doxology)(?=\s*[:：.]|\s*$)\s*[:：.]?)\s*(.*)$/iu);
  if (section) return { label: section[1] || section[2], rest: section[3] || '' };

  let match = value.match(/^(\d+)\s*절\s*[:：.)\]-]?\s*(.*)$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

  match = value.match(/^第\s*(\d+)\s*節\s*[:：.)-]?\s*(.*)$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

  match = value.match(/^(\d{1,2})$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: '' };

  match = value.match(/^(\d+)\s*[.)]\s*(.*)$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

  match = value.match(/^\((\d+)\)\s*(.*)$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

  match = value.match(/^(?:verse|v)\s*(\d+)\s*[:：.)\]-]?\s*(.*)$/iu);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

  match = value.match(REFRAIN_HEADING_RE);
  if (match) return { label: '후렴', rest: match[1] || '' };

  return null;
}

function parseLyricsVerses(lyrics) {
  const lines = cleanText(lyrics).split('\n');
  const verses = [];
  let current = null;
  let foundHeading = false;

  function pushCurrent() {
    if (!current) return;
    const text = cleanText(current.lines.join('\n'));
    if (current.label || text) {
      verses.push({ label: current.label, text });
    }
    current = null;
  }

  for (const line of lines) {
    const heading = parseVerseHeading(line);
    if (heading) {
      foundHeading = true;
      pushCurrent();
      current = { label: heading.label, lines: [] };
      if (heading.rest) current.lines.push(heading.rest);
      continue;
    }
    if (!current) current = { label: '', lines: [] };
    current.lines.push(line);
  }

  pushCurrent();
  return foundHeading
    ? verses.filter(verse => verse.label || verse.text)
    : [];
}

function bookPrefix(book, country) {
  const normalized = normalizeSearch(book);
  if (normalized.includes('가톨릭성가')) return 'kr-catholic';
  if (normalized.includes('야훼이레')) return 'kr-yj';
  if (normalized.includes('thanh ca viet nam quyen 1') || normalized.includes('thánh ca việt nam quyển 1')) return 'vn-tcvn1';
  if (normalized.includes('thanh ca viet nam quyen 2') || normalized.includes('thánh ca việt nam quyển 2')) return 'vn-tcvn2';
  const hash = crypto.createHash('sha1').update(cleanLine(book) || 'custom').digest('hex').slice(0, 8);
  return `${String(country || 'KR').toLowerCase()}-book-${hash}`;
}

function countryForBook(book) {
  const normalized = normalizeSearch(book);
  if (normalized.includes('thanh ca') || normalized.includes('thánh ca') || normalized.includes('viet nam') || normalized.includes('việt nam')) {
    return 'VN';
  }
  return 'KR';
}

function nextNumberForBook(data, book) {
  const rows = data.filter(entry => cleanLine(entry.book) === cleanLine(book));
  const max = rows.reduce((value, entry) => Math.max(value, numericValue(entry.number)), 0);
  return formatNumber(max + 1);
}

function nextIdForBook(data, book, country) {
  const prefix = bookPrefix(book, country);
  const max = data.reduce((value, entry) => {
    const id = String(entry.id || '');
    if (!id.startsWith(`${prefix}-`)) return value;
    return Math.max(value, numericValue(id.slice(prefix.length + 1)));
  }, 0);
  return `${prefix}-${formatNumber(max + 1)}`;
}

function displayTitle(number, title) {
  const cleanNumber = cleanLine(number);
  const cleanTitle = cleanLine(title);
  return [cleanNumber, cleanTitle].filter(Boolean).join('. ');
}

function seasonForEntry(entry) {
  const book = cleanLine(entry && entry.book);
  const tags = Array.isArray(entry && entry.tags) ? entry.tags.map(cleanLine).filter(Boolean) : [];
  return tags.find(tag => normalizeSearch(tag) !== normalizeSearch(book)) || '';
}

function extraTagsForEntry(entry) {
  const book = cleanLine(entry && entry.book);
  const season = seasonForEntry(entry);
  return unique(Array.isArray(entry && entry.tags) ? entry.tags.filter(tag => {
    const normalized = normalizeSearch(tag);
    return normalized
      && normalized !== normalizeSearch(book)
      && normalized !== normalizeSearch(season);
  }) : []);
}

function aliasesForEntry(entry) {
  const number = cleanLine(entry.number);
  const numberInt = numericValue(number);
  const unpaddedNumber = numberInt ? String(numberInt) : number;
  return unique([
    entry.title,
    entry.firstLine,
    entry.book && entry.title && `${entry.book} ${entry.title}`,
    entry.book && number && `${entry.book} ${number}`,
    entry.book && unpaddedNumber && `${entry.book} ${unpaddedNumber}`,
    entry.book && number && `${entry.book} ${number}번`,
    entry.book && unpaddedNumber && `${entry.book} ${unpaddedNumber}번`,
    entry.tags && entry.tags[1] && entry.title && `${entry.tags[1]} ${entry.title}`
  ]);
}

function normalizePayload(body, { draft = false } = {}) {
  const book = cleanLine(body.book);
  const season = cleanLine(body.season);
  const number = cleanLine(body.number);
  const title = cleanLine(body.title);
  const lyricist = cleanLine(body.lyricist);
  const composer = cleanLine(body.composer);
  const arranger = cleanLine(body.arranger);
  const selector = cleanLine(body.selector);
  const scripture = cleanLine(body.scripture);
  const copyright = cleanLine(body.copyright);
  const lyrics = cleanText(body.lyrics);
  const targetId = cleanLine(body.targetId);
  const extraTags = parseTagList(body.extraTags);
  const voiceType = normalizeVoiceType(body.voiceType);

  if (!draft && !book) throw Object.assign(new Error('책이름을 입력하세요.'), { statusCode: 400 });
  if (!draft && !season) throw Object.assign(new Error('시기를 입력하세요.'), { statusCode: 400 });
  if (!draft && !title) throw Object.assign(new Error('제목을 입력하세요.'), { statusCode: 400 });
  if (!draft && !lyrics) throw Object.assign(new Error('가사를 입력하세요.'), { statusCode: 400 });

  return {
    book,
    season,
    number,
    title,
    lyricist,
    composer,
    arranger,
    selector,
    scripture,
    copyright,
    lyrics,
    extraTags,
    voiceType,
    targetId
  };
}

function entryMatchesPayload(entry, payload) {
  const tags = Array.isArray(entry.tags) ? entry.tags.map(cleanLine) : [];
  return normalizeSearch(entry.book) === normalizeSearch(payload.book)
    && normalizeSearch(entry.title) === normalizeSearch(payload.title)
    && tags.some(tag => normalizeSearch(tag) === normalizeSearch(payload.season));
}

function findTargetIndex(data, payload) {
  if (payload.targetId) {
    const index = data.findIndex(entry => cleanLine(entry.id) === payload.targetId);
    if (index === -1) {
      throw Object.assign(new Error(`선택한 성가를 찾을 수 없습니다: ${payload.targetId}`), { statusCode: 404 });
    }
    return index;
  }

  const matches = data
    .map((entry, index) => ({ entry, index }))
    .filter(item => entryMatchesPayload(item.entry, payload));

  if (matches.length > 1) {
    throw Object.assign(new Error('같은 책/시기/제목의 성가가 여러 개 있습니다. 하나를 선택하세요.'), {
      statusCode: 409,
      payload: { suggestions: matches.map(item => publicEntry(item.entry)) }
    });
  }

  return matches.length === 1 ? matches[0].index : -1;
}

function findEntryIndexById(data, targetId) {
  const id = cleanLine(targetId);
  if (!id) {
    throw Object.assign(new Error('수정할 성가를 먼저 선택하세요.'), { statusCode: 400 });
  }
  const index = data.findIndex(entry => cleanLine(entry.id) === id);
  if (index === -1) {
    throw Object.assign(new Error(`수정할 성가를 찾을 수 없습니다: ${id}`), { statusCode: 404 });
  }
  return index;
}

function buildStoredEntry(data, payload, existing) {
  const bookEntry = data.find(entry => cleanLine(entry.book) === payload.book);
  const country = cleanLine(existing && (existing.country || existing.language))
    || cleanLine(bookEntry && (bookEntry.country || bookEntry.language)) || countryForBook(payload.book);
  const number = payload.number || cleanLine(existing && existing.number) || nextNumberForBook(data, payload.book);
  const id = cleanLine(existing && existing.id) || nextIdForBook(data, payload.book, country);
  const tags = unique([payload.book, payload.season, ...payload.extraTags]);
  const firstLine = firstLyricsLine(payload.lyrics) || payload.title;
  const entry = {
    ...(existing || {}),
    id,
    country,
    language: country,
    number,
    title: payload.title,
    displayTitle: displayTitle(number, payload.title),
    book: payload.book,
    tags,
    category: tags.join(' / '),
    lyrics: payload.lyrics,
    translations: (existing && existing.translations && typeof existing.translations === 'object') ? existing.translations : {},
    firstLine,
    composer: payload.composer,
    lyricist: payload.lyricist,
    arranger: payload.arranger,
    selector: payload.selector,
    scripture: payload.scripture,
    copyright: payload.copyright,
    text: payload.lyrics
  };

  if (payload.voiceType) {
    entry.voiceType = payload.voiceType;
  } else {
    delete entry.voiceType;
  }

  // Unchanged lyrics retain the stored section labels and ordering shown in the app.
  entry.verses = existing && cleanText(existing.text || existing.lyrics) === payload.lyrics && Array.isArray(existing.verses)
    ? structuredClone(existing.verses) : parseLyricsVerses(payload.lyrics);
  entry.searchAliases = unique([
    ...aliasesForEntry(entry),
    ...((existing && Array.isArray(existing.searchAliases)) ? existing.searchAliases : [])
  ]);

  if (!Array.isArray(entry.scoreImages)) entry.scoreImages = [];
  if (!entry.scoreImages.length && !cleanLine(entry.scoreNote)) {
    entry.scoreNote = '악보 이미지는 아직 연결되지 않았습니다.';
  }
  if (entry.copyright === undefined) entry.copyright = '';

  return entry;
}

function publicEntry(entry) {
  return {
    id: cleanLine(entry.id),
    country: cleanLine(entry.country || entry.language || 'KR'),
    number: cleanLine(entry.number),
    title: cleanLine(entry.title),
    displayTitle: cleanLine(entry.displayTitle || displayTitle(entry.number, entry.title)),
    book: cleanLine(entry.book),
    tags: Array.isArray(entry.tags) ? entry.tags.map(cleanLine).filter(Boolean) : [],
    category: cleanLine(entry.category),
    season: seasonForEntry(entry),
    extraTags: extraTagsForEntry(entry),
    voiceType: normalizeVoiceType(entry.voiceType),
    lyricist: cleanLine(entry.lyricist),
    composer: cleanLine(entry.composer),
    arranger: cleanLine(entry.arranger),
    selector: cleanLine(entry.selector || entry.selectedBy),
    scripture: cleanLine(entry.scripture || entry.bibleVerse || entry.scriptureReference),
    copyright: cleanLine(entry.copyright),
    lyrics: cleanText(entry.text || entry.lyrics),
    verses: Array.isArray(entry.verses)
      ? entry.verses.map(verse => ({ label: cleanLine(verse && verse.label), text: cleanText(verse && verse.text) })).filter(verse => verse.label || verse.text)
      : [],
    firstLine: cleanLine(entry.firstLine),
    hasScore: Array.isArray(entry.scoreImages) && entry.scoreImages.length > 0
  };
}

function bookRows(data) {
  const groups = new Map();
  for (const entry of data) {
    const book = cleanLine(entry.book);
    if (!book) continue;
    const item = groups.get(book) || { book, count: 0, maxNumber: 0 };
    item.count += 1;
    item.maxNumber = Math.max(item.maxNumber, numericValue(entry.number));
    groups.set(book, item);
  }
  return [...groups.values()]
    .map(item => ({ ...item, nextNumber: formatNumber(item.maxNumber + 1) }))
    .sort((a, b) => a.book.localeCompare(b.book, 'ko'));
}

function seasonRows(data) {
  return unique(data.map(seasonForEntry)).sort((a, b) => a.localeCompare(b, 'ko'));
}

function statePayload(data) {
  return {
    file: hymnDataDisplayPath,
    ...(usesCountryModules ? { countryModules: countryHymnModules.length } : {}),
    count: data.length,
    books: bookRows(data),
    seasons: seasonRows(data),
    recent: data.slice(-20).reverse().map(publicEntry)
  };
}

function scoreSuggestion(entry, query) {
  if (!query) return 10;

  const id = normalizeSearch(entry.id);
  const number = normalizeSearch(entry.number);
  const title = normalizeSearch(entry.title);
  const displayTitle = normalizeSearch(entry.displayTitle);
  const queryIsNumber = /^\d+$/.test(query);
  const unpaddedNumber = numericValue(entry.number) ? String(numericValue(entry.number)) : number;
  const aliases = Array.isArray(entry.searchAliases) ? entry.searchAliases.map(normalizeSearch).filter(Boolean) : [];

  if (title === query) return 1000;
  if (id === query) return 990;
  if (number && number === query) return 980;
  if (queryIsNumber && unpaddedNumber === String(Number(query))) return 975;
  if (displayTitle === query) return 970;
  if (aliases.some(alias => alias === query)) return 960;
  if (id.includes(query)) return Math.max(900, 940 - Math.abs(id.length - query.length));
  if (number && (number.includes(query) || query.includes(number))) {
    return Math.max(880, 930 - Math.abs(number.length - query.length));
  }
  if (displayTitle.startsWith(query) || title.startsWith(query)) {
    return 860 - Math.min(Math.abs((displayTitle || title).length - query.length), 120);
  }

  const searchable = [
    entry.id,
    entry.number,
    entry.title,
    entry.displayTitle,
    entry.book,
    entry.category,
    ...(Array.isArray(entry.tags) ? entry.tags : []),
    ...(Array.isArray(entry.searchAliases) ? entry.searchAliases : []),
    entry.firstLine,
    entry.composer,
    entry.lyricist,
    entry.arranger,
    entry.selector,
    entry.selectedBy,
    entry.scripture,
    entry.bibleVerse,
    entry.scriptureReference,
    entry.copyright,
    entry.voiceType,
    entry.text,
    entry.lyrics
  ].join(' ');
  const target = normalizeSearch(searchable);

  if (target.includes(query)) {
    return Math.max(80, 720 - Math.min(Math.abs(target.length - query.length), 640));
  }

  const parts = query.split(' ').filter(Boolean);
  return parts.reduce((sum, part) => sum + (target.includes(part) ? Math.min(part.length, 12) * 12 : 0), 0);
}

function findSuggestions(data, body) {
  const query = normalizeSearch(body.query || body.title || '');
  const book = normalizeSearch(body.book || '');
  const season = normalizeSearch(body.season || '');
  const rows = data
    .filter(entry => !book || normalizeSearch(entry.book) === book)
    .filter(entry => !/^\d+$/.test(query) || (/^\d+$/.test(cleanLine(entry.number)) && Number(entry.number) === Number(query)))
    .filter(entry => {
      if (!season) return true;
      const tags = Array.isArray(entry.tags) ? entry.tags : [];
      return tags.some(tag => normalizeSearch(tag) === season);
    })
    .map(entry => {
      return { entry, score: scoreSuggestion(entry, query) };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || cleanLine(a.entry.title).localeCompare(cleanLine(b.entry.title), 'ko'));

  return rows.map(item => publicEntry(item.entry));
}

function saveHymn(data, body) {
  const payload = normalizePayload(body);
  const index = findTargetIndex(data, payload);
  const action = index >= 0 ? 'updated' : 'created';
  const entry = buildStoredEntry(data, payload, index >= 0 ? data[index] : null);
  if (index >= 0) data[index] = entry;
  else data.push(entry);
  const backup = saveHymnData(data);
  return { action, backup, entry: publicEntry(entry), count: data.length };
}

function updateHymnNumber(data, body) {
  const index = findEntryIndexById(data, body.targetId);
  const number = cleanLine(body.number);
  if (!number) {
    throw Object.assign(new Error('성가번호를 입력하세요.'), { statusCode: 400 });
  }

  const entry = data[index];
  entry.number = number;
  entry.displayTitle = displayTitle(entry.number, entry.title);
  entry.searchAliases = unique([
    ...aliasesForEntry(entry),
    ...(Array.isArray(entry.searchAliases) ? entry.searchAliases : [])
  ]);

  const backup = saveHymnData(data);
  return { action: 'number-updated', backup, entry: publicEntry(entry), count: data.length };
}

function updateHymnTags(data, body) {
  const index = findEntryIndexById(data, body.targetId);
  const entry = data[index];
  const season = cleanLine(body.season) || seasonForEntry(entry);
  const extraTags = parseTagList(body.extraTags);
  if (!season) {
    throw Object.assign(new Error('시기를 입력하세요.'), { statusCode: 400 });
  }

  entry.tags = unique([entry.book, season, ...extraTags]);
  entry.category = entry.tags.join(' / ');
  entry.searchAliases = unique([
    ...aliasesForEntry(entry),
    ...(Array.isArray(entry.searchAliases) ? entry.searchAliases : [])
  ]);

  const backup = saveHymnData(data);
  return { action: 'tags-updated', backup, entry: publicEntry(entry), count: data.length };
}

function updateHymnVoiceType(data, body) {
  const index = findEntryIndexById(data, body.targetId);
  const voiceType = normalizeVoiceType(body.voiceType);
  const entry = data[index];

  if (voiceType) {
    entry.voiceType = voiceType;
  } else {
    delete entry.voiceType;
  }

  const backup = saveHymnData(data);
  return { action: 'voice-type-updated', backup, entry: publicEntry(entry), count: data.length };
}

function deleteHymn(data, body) {
  const targetId = cleanLine(body.targetId);
  if (!targetId) {
    throw Object.assign(new Error('삭제할 성가를 먼저 선택하세요.'), { statusCode: 400 });
  }
  const index = data.findIndex(entry => cleanLine(entry.id) === targetId);
  if (index === -1) {
    throw Object.assign(new Error(`삭제할 성가를 찾을 수 없습니다: ${targetId}`), { statusCode: 404 });
  }

  const deleted = data.splice(index, 1)[0];
  const backup = saveHymnData(data);
  return { action: 'deleted', backup, deleted: publicEntry(deleted), count: data.length };
}

function validateData(data) {
  const ids = new Set();
  const duplicateIds = [];
  for (const entry of data) {
    const id = cleanLine(entry.id);
    if (!id) throw new Error('Every hymn entry must have an id');
    if (ids.has(id)) duplicateIds.push(id);
    ids.add(id);
  }
  if (duplicateIds.length) {
    throw new Error(`Duplicate hymn ids: ${duplicateIds.slice(0, 10).join(', ')}`);
  }
  return {
    count: data.length,
    books: bookRows(data).length,
    seasons: seasonRows(data).length
  };
}

function serializeHymnData(data) {
  const json = JSON.stringify(data, null, 2)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return [
    '// Hymn index and compressed per-song score images for V22.1.',
    '// Generated by tools/generate_hymn_assets.py; manual entries can be updated with tools/hymn-data-entry-tool.js.',
    '(function attachHymnData(global) {',
    `  const hymnData = ${json};`,
    '  global.hymnData = Array.isArray(global.hymnData) && global.hymnData.length',
    '    ? global.hymnData',
    '    : hymnData;',
    '  global.ordoHymnData = hymnData;',
    "})(typeof window !== 'undefined' ? window : globalThis);",
    ''
  ].join('\n');
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.(\d{3})Z$/, '$1Z');
}

function findEntriesArrayBounds(source, filename) {
  const match = /\bentries\s*:/.exec(source);
  if (!match) throw new Error(`Could not find the entries array in ${filename}`);
  const start = source.indexOf('[', match.index + match[0].length);
  if (start === -1) throw new Error(`Could not find the entries array start in ${filename}`);

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
    if (character === '"') {
      inString = true;
    } else if (character === '[') {
      depth += 1;
    } else if (character === ']') {
      depth -= 1;
      if (depth === 0) return { start, end: index + 1 };
    }
  }
  throw new Error(`Could not find the entries array end in ${filename}`);
}

function serializeCountryEntries(entries) {
  return JSON.stringify(entries)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function replaceCountryEntries(source, entries, filename) {
  const bounds = findEntriesArrayBounds(source, filename);
  return `${source.slice(0, bounds.start)}${serializeCountryEntries(entries)}${source.slice(bounds.end)}`;
}

function jurisdictionForEntry(entry, existingOwners) {
  const id = cleanLine(entry && entry.id);
  if (id && existingOwners.has(id)) return existingOwners.get(id);
  const code = cleanLine(entry && (entry.jurisdiction || entry.country || entry.language)).toUpperCase();
  const languageJurisdiction = {
    KR: 'KR',
    VN: 'VN',
    US: 'US',
    EN: 'US',
    JP: 'JP',
    VA: 'VA',
    LA: 'VA'
  }[code];
  const knownJurisdictions = new Set(countryHymnModules.map(module => module.jurisdiction));
  const jurisdiction = knownJurisdictions.has(code) ? code : languageJurisdiction;
  if (!jurisdiction) {
    throw new Error(`Cannot choose a country hymn module for ${id || '(entry without id)'} (${code || 'no country'})`);
  }
  return jurisdiction;
}

function prepareCountryModuleSources(data, sources = readCountryModuleSources()) {
  const current = runCountryModuleSources(sources);
  const existingOwners = new Map();
  for (const module of countryHymnModules) {
    const entries = current.countries[module.jurisdiction]
      && current.countries[module.jurisdiction].entries;
    for (const entry of Array.isArray(entries) ? entries : []) {
      const id = cleanLine(entry && entry.id);
      if (id) existingOwners.set(id, module.jurisdiction);
    }
  }

  const grouped = new Map(countryHymnModules.map(module => [module.jurisdiction, []]));
  for (const entry of data) {
    grouped.get(jurisdictionForEntry(entry, existingOwners)).push(entry);
  }

  const nextSources = sources.map(source => {
    const entries = grouped.get(source.jurisdiction);
    const currentEntries = current.countries[source.jurisdiction].entries;
    return {
      ...source,
      code: JSON.stringify(entries) === JSON.stringify(currentEntries)
        ? source.code
        : replaceCountryEntries(source.code, entries, source.path)
    };
  });
  const roundTrip = runCountryModuleSources(nextSources).data;
  validateData(roundTrip);
  if (roundTrip.length !== data.length) {
    throw new Error(`Country module round-trip changed the hymn count (${data.length} -> ${roundTrip.length})`);
  }
  return nextSources;
}

function saveLegacyHymnData(data) {
  validateData(data);
  const serialized = serializeHymnData(data);
  const loaded = runHymnDataCode(serialized, `${hymnDataPath}.next`);
  validateData(loaded);

  const backupDir = path.join(root, 'tmp');
  fs.mkdirSync(backupDir, { recursive: true });
  const backup = path.join(backupDir, `hymn_data.backup-${timestamp()}.js`);
  fs.copyFileSync(hymnDataPath, backup);

  const tempPath = `${hymnDataPath}.tmp-${process.pid}`;
  fs.writeFileSync(tempPath, serialized, 'utf8');
  fs.renameSync(tempPath, hymnDataPath);
  validateData(loadHymnData());
  return backup;
}

function saveCountryHymnData(data) {
  validateData(data);
  const sources = readCountryModuleSources();
  const nextSources = prepareCountryModuleSources(data, sources);
  const changed = nextSources.filter((source, index) => source.code !== sources[index].code);
  if (!changed.length) return '';

  const backupRoot = path.join(root, 'tmp', `hymn-data-backup-${timestamp()}`);
  const backups = [];
  fs.mkdirSync(backupRoot, { recursive: true });
  try {
    for (const source of changed) {
      const relativePath = path.relative(root, source.path);
      const backup = path.join(backupRoot, relativePath);
      fs.mkdirSync(path.dirname(backup), { recursive: true });
      fs.copyFileSync(source.path, backup);
      backups.push({ target: source.path, backup });

      const tempPath = `${source.path}.tmp-${process.pid}`;
      fs.writeFileSync(tempPath, source.code, 'utf8');
      fs.renameSync(tempPath, source.path);
    }
    const saved = loadHymnData();
    validateData(saved);
    if (saved.length !== data.length) {
      throw new Error(`Saved country modules changed the hymn count (${data.length} -> ${saved.length})`);
    }
    return backupRoot;
  } catch (error) {
    for (const item of backups.reverse()) fs.copyFileSync(item.backup, item.target);
    throw error;
  }
}

function saveHymnData(data) {
  return usesCountryModules ? saveCountryHymnData(data) : saveLegacyHymnData(data);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('입력 내용이 너무 큽니다.'), { statusCode: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      const text = Buffer.concat(chunks).toString('utf8');
      if (!text.trim()) return resolve({});
      try {
        resolve(JSON.parse(text));
      } catch (error) {
        reject(Object.assign(new Error('JSON 요청을 읽을 수 없습니다.'), { statusCode: 400 }));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload, null, 2));
}

function handleError(res, error) {
  const statusCode = error.statusCode || 500;
  sendJson(res, statusCode, {
    ok: false,
    error: error.message || String(error),
    ...(error.payload || {})
  });
}

function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      if (serveEditorLayout(req, res, url) || serveHymnPreview(req, res, url)) return;
      if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
        res.end(INDEX_HTML);
        return;
      }

      if (req.method === 'GET' && url.pathname === '/firebase-upload-client.js') {
        serveFirebaseUploadClient(res);
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/state') {
        sendJson(res, 200, { ok: true, ...statePayload(loadHymnData()) });
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/firebase-export') {
        sendJson(res, 200, buildFirebaseUploadPayload({
          collectionName: 'hymn_data',
          label: '성가 데이터',
          items: firebaseHymnItems(),
          idPrefix: 'hymn'
        }));
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/preview') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        const payload = normalizePayload(body, { draft: true });
        const existing = data.find(entry => cleanLine(entry.id) === payload.targetId);
        sendJson(res, 200, { ok: true, entry: buildStoredEntry(data, payload, existing) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/suggest') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, suggestions: findSuggestions(data, body) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/save') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, ...saveHymn(data, body) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/number') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, ...updateHymnNumber(data, body) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/tags') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, ...updateHymnTags(data, body) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/voice-type') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, ...updateHymnVoiceType(data, body) });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/delete') {
        const body = await readJsonBody(req);
        const data = loadHymnData();
        sendJson(res, 200, { ok: true, ...deleteHymn(data, body) });
        return;
      }

      sendJson(res, 404, { ok: false, error: 'Not found' });
    } catch (error) {
      handleError(res, error);
    }
  });
}

function listenWithFallback(server, host, port, attempts = 20) {
  return new Promise((resolve, reject) => {
    let currentPort = port;

    function tryListen() {
      const desiredPort = currentPort;
      server.once('error', error => {
        if (error.code === 'EADDRINUSE' && attempts > 0) {
          attempts -= 1;
          currentPort += 1;
          tryListen();
          return;
        }
        reject(error);
      });
      server.listen(desiredPort, host, () => resolve(server.address()));
    }

    tryListen();
  });
}

const INDEX_HTML = String.raw`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>성가 데이터 편집기</title>
  <style>
    :root { color-scheme:light; --ink:#172033; --muted:#687188; --line:#d8deea; --panel:#fff; --accent:#315ee8; --accent-dark:#2349b8; --warn:#9a5b00; --error:#b3261e; --ok:#176b48; }
    * { box-sizing:border-box; }
    body { margin:0; background:#f3f5fa; color:var(--ink); font-family:Inter,"Noto Sans KR","Malgun Gothic",sans-serif; line-height:1.5; }
    button,input,select,textarea { font:inherit; }
    button { cursor:pointer; min-height:40px; border:0; border-radius:10px; padding:10px 14px; color:#263451; background:#e9edf5; font-weight:800; }
    button.primary { background:var(--accent); color:white; }
    button.primary:hover { background:var(--accent-dark); }
    button:disabled { opacity:.45; cursor:not-allowed; }
    label { display:grid; gap:6px; min-width:0; color:var(--muted); font-size:12px; font-weight:700; }
    input,select,textarea { width:100%; min-width:0; border:1px solid #cbd3e2; border-radius:10px; background:white; color:var(--ink); padding:10px 12px; }
    input:focus,select:focus,textarea:focus { outline:0; border-color:var(--accent); box-shadow:0 0 0 3px #315ee820; }
    main { max-width:1500px; margin:auto; padding:20px; }
    .controls { display:grid; grid-template-columns:minmax(170px,1fr) minmax(200px,1.2fr) minmax(210px,1.5fr) auto; gap:12px; align-items:end; }
    .search-row { display:flex; gap:6px; }
    .search-row input { flex:1; }
    .workspace { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:18px; align-items:start; }
    .panel { min-width:0; background:white; border:1px solid var(--line); border-radius:16px; padding:18px; box-shadow:0 8px 24px #1720330b; }
    .panel h2 { margin:0 0 14px; font-size:18px; }
    .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
    .lyrics-panel { display:flex; flex-direction:column; }
    textarea { min-height:510px; resize:vertical; line-height:1.65; }
    .small { color:var(--muted); font-size:12px; overflow-wrap:anywhere; }
    .meta { display:flex; flex-wrap:wrap; gap:8px; margin-top:14px; }
    .pill { max-width:100%; border:1px solid var(--line); border-radius:999px; padding:3px 9px; color:var(--muted); font-size:12px; overflow-wrap:anywhere; }
    .entry-actions { display:flex; flex-wrap:wrap; gap:8px; margin-top:16px; }
    .entry-actions button { padding:7px 10px; font-size:12px; }
    #delete { color:#ad2434; background:#fff0f2; }
    .preview-panel { margin-top:18px; }
    .preview-heading { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px; }
    .preview-heading h2 { margin:0; }
    .preview-heading select { width:auto; max-width:100%; }
    .app-preview { display:block; width:100%; max-width:1100px; min-height:380px; margin:auto; border:1px solid var(--line); border-radius:12px; background:white; }
    .status { position:absolute; width:1px; height:1px; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; }
    .toast { position:fixed; left:50%; bottom:22px; z-index:70; max-width:calc(100vw - 32px); padding:12px 18px; border-radius:12px; background:#263451; color:white; box-shadow:0 8px 24px #17203330; font-size:13px; font-weight:800; text-align:center; pointer-events:none; opacity:0; visibility:hidden; transform:translate(-50%,12px); transition:opacity .18s,transform .18s,visibility .18s; }
    .toast.show { opacity:1; visibility:visible; transform:translate(-50%,0); }
    .toast.ok { background:#15523c; }
    .toast.warn { background:#8a4f00; }
    .toast.error { background:var(--error); }
    @media(max-width:850px) {
      main { padding:12px; }
      .controls { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .controls > label:nth-child(3) { grid-column:1 / -1; }
      .workspace { grid-template-columns:1fr; }
      .panel { padding:14px; }
      textarea { min-height:330px; }
    }
    @media(max-width:380px) { .grid { grid-template-columns:1fr; } }
  </style>
  <link rel="stylesheet" href="/editor-layout.css">
  <script defer src="/editor-layout.js"></script>
</head>
<body>
  <header class="editor-top">
    <h1>성가 데이터 편집기</h1>
    <p>성가집에서 같은 번호의 성가를 찾아 성가 정보와 가사를 편집합니다.</p>
  </header>
  <div id="status" class="status" role="status" aria-live="polite">불러오는 중</div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <main>
    <section class="controls editor-controls" aria-label="성가 선택 및 검색">
      <label>성가집<select id="filter-book" aria-label="검색할 성가집"></select></label>
      <label>검색<div class="search-row"><input id="search-query" type="search" autocomplete="off" placeholder="번호, 제목, 가사 검색"><button id="search-button" type="button">검색</button></div></label>
      <label>성가목록<select id="results" aria-label="성가목록"></select></label>
      <div class="control-actions"><button id="reload" type="button">새로고침</button><button id="firebase-upload" type="button">Firebase에 업로드</button></div>
    </section>
    <div class="workspace">
      <section class="panel form" aria-label="성가 정보">
        <h2>성가 정보</h2>
      <div class="grid">
        <label>책이름
          <input id="book" list="book-list" autocomplete="off">
          <datalist id="book-list"></datalist>
        </label>
        <label>시기
          <input id="season" list="season-list" autocomplete="off">
          <datalist id="season-list"></datalist>
        </label>
        <label>성가번호
          <input id="number" autocomplete="off" placeholder="예: 001">
        </label>
        <label>제목
          <input id="title" autocomplete="off">
        </label>
        <label>작사
          <input id="lyricist" autocomplete="off">
        </label>
        <label>작곡
          <input id="composer" autocomplete="off">
        </label>
        <label>편곡
          <input id="arranger" autocomplete="off">
        </label>
        <label>선곡
          <input id="selector" autocomplete="off">
        </label>
        <label>성경구절
          <input id="scripture" autocomplete="off">
        </label>
        <label>저작권
          <input id="copyright" autocomplete="off">
        </label>
        <label>기타 태그
          <input id="extra-tags" autocomplete="off" placeholder="쉼표로 구분">
        </label>
        <label>성부 구분
          <select id="voice-type">
            <option value="">선택 없음</option>
            <option value="단성">단성</option>
            <option value="화성">화성</option>
            <option value="2성부">2성부</option>
            <option value="3성부">3성부</option>
            <option value="4성부">4성부</option>
          </select>
        </label>
      </div>
        <div class="entry-actions" aria-label="선택한 성가 수정">
          <button id="save-number" type="button">성가번호 수정</button>
          <button id="save-tags" type="button">기타 태그 수정</button>
          <button id="save-voice-type" type="button">성부 구분 수정</button>
          <button id="delete" type="button">삭제</button>
        </div>
        <div class="meta">
          <span class="pill" id="count">0곡</span>
          <span class="pill" id="next-number">번호 자동</span>
          <span class="pill" id="file-path"></span>
        </div>
      </section>
      <section class="panel lyrics-panel" aria-label="가사 편집">
        <h2>가사 편집</h2>
        <label>가사<textarea id="lyrics" spellcheck="false" placeholder="절·후렴 표시와 가사를 입력하세요."></textarea></label>
        <p class="small">수정한 내용은 아래 앱 표시 미리보기에 반영됩니다. 로컬에 저장을 눌러 적용하세요.</p>
      </section>
    </div>
    <section class="panel preview-panel" aria-label="앱 표시 미리보기">
      <div class="preview-heading"><h2>앱 표시 미리보기</h2><label>번역 언어<select id="preview-target-language"><option value="EN">English</option><option value="KR">한국어</option><option value="VN">Tiếng Việt</option><option value="JP">日本語</option><option value="LA">Latin</option><option value="ZH">繁體中文</option><option value="IT">Italiano</option><option value="ES">Español</option><option value="PT">Português</option><option value="DE">Deutsch</option></select></label></div>
      <iframe id="app-preview-frame" class="app-preview" src="/app-preview.html" title="실제 앱 성가 표시 미리보기"></iframe>
      <p class="small">실제 앱의 표시 방식으로 확인합니다. 미리보기에서는 AI 번역을 실행하지 않습니다.</p>
    </section>
  </main>
  <footer class="editor-footer" aria-label="성가 저장 및 추가">
    <button id="save" class="primary" type="button">로컬에 저장</button>
    <button id="new" type="button">＋ 새 성가 추가</button>
  </footer>

  <script>
    const state = {
      books: [],
      seasons: [],
      selected: null,
      suggestTimer: 0,
      resultRows: [],
      toastTimer: 0,
      searchSequence: 0,
      previewSequence: 0,
      previewTimer: 0,
      previewReady: false,
      loaded: false
    };

    const el = {
      status: document.getElementById('status'),
      toast: document.getElementById('toast'),
      book: document.getElementById('book'),
      season: document.getElementById('season'),
      number: document.getElementById('number'),
      title: document.getElementById('title'),
      lyricist: document.getElementById('lyricist'),
      composer: document.getElementById('composer'),
      arranger: document.getElementById('arranger'),
      selector: document.getElementById('selector'),
      scripture: document.getElementById('scripture'),
      copyright: document.getElementById('copyright'),
      extraTags: document.getElementById('extra-tags'),
      voiceType: document.getElementById('voice-type'),
      lyrics: document.getElementById('lyrics'),
      save: document.getElementById('save'),
      firebaseUpload: document.getElementById('firebase-upload'),
      saveNumber: document.getElementById('save-number'),
      saveTags: document.getElementById('save-tags'),
      saveVoiceType: document.getElementById('save-voice-type'),
      deleteButton: document.getElementById('delete'),
      searchQuery: document.getElementById('search-query'),
      searchButton: document.getElementById('search-button'),
      reload: document.getElementById('reload'),
      fresh: document.getElementById('new'),
      results: document.getElementById('results'),
      count: document.getElementById('count'),
      nextNumber: document.getElementById('next-number'),
      filePath: document.getElementById('file-path'),
      bookList: document.getElementById('book-list'),
      seasonList: document.getElementById('season-list'),
      filterBook: document.getElementById('filter-book'),
      previewTargetLanguage: document.getElementById('preview-target-language'),
      appPreviewFrame: document.getElementById('app-preview-frame')
    };

    function setStatus(message, kind) {
      el.status.textContent = message;
      el.status.className = 'status' + (kind ? ' ' + kind : '');
      showToast(message, kind);
    }

    function showToast(message, kind) {
      clearTimeout(state.toastTimer);
      el.toast.textContent = message;
      el.toast.className = 'toast show' + (kind ? ' ' + kind : '');
      state.toastTimer = setTimeout(() => {
        el.toast.className = 'toast';
      }, kind === 'error' ? 6000 : 3600);
    }

    async function api(url, options) {
      const response = await fetch(url, {
        headers: { 'content-type': 'application/json' },
        ...(options || {})
      });
      const body = await response.json();
      if (!response.ok || body.ok === false) {
        const error = new Error(body.error || response.statusText);
        error.body = body;
        throw error;
      }
      return body;
    }

    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char]);
    }

    function fillDatalist(target, values) {
      target.innerHTML = values.map(value => '<option value="' + escapeHtml(value) + '"></option>').join('');
    }

    function clearSelected() {
      state.selected = null;
      el.results.value = '';
    }

    function currentPayload() {
      return {
        targetId: state.selected && state.selected.id,
        book: el.book.value.trim(),
        season: el.season.value.trim(),
        number: el.number.value.trim(),
        title: el.title.value.trim(),
        lyricist: el.lyricist.value.trim(),
        composer: el.composer.value.trim(),
        arranger: el.arranger.value.trim(),
        selector: el.selector.value.trim(),
        scripture: el.scripture.value.trim(),
        copyright: el.copyright.value.trim(),
        extraTags: el.extraTags.value.trim(),
        voiceType: el.voiceType.value,
        lyrics: el.lyrics.value.replace(/\r\n?/g, '\n').trim()
      };
    }

    function updateNextNumber() {
      const book = el.book.value.trim();
      const found = state.books.find(item => item.book === book);
      el.nextNumber.textContent = found ? '다음 번호 ' + found.nextNumber : '번호 자동';
    }

    function updatePreview() {
      updateNextNumber();
      clearTimeout(state.previewTimer);
      const sequence = ++state.previewSequence;
      if (!state.previewReady) return;
      const payload = currentPayload();
      state.previewTimer = setTimeout(async () => {
        try {
          const body = await api('/api/preview', { method:'POST', body:JSON.stringify(payload) });
          if (sequence !== state.previewSequence) return;
          const source = body.entry.country || 'KR';
          [...el.previewTargetLanguage.options].forEach(option => { option.disabled = option.value === source; });
          if (el.previewTargetLanguage.value === source) el.previewTargetLanguage.value = source === 'KR' ? 'EN' : 'KR';
          el.appPreviewFrame.contentWindow.postMessage({
            type:'ordo:hymn-preview', entry:body.entry, targetLanguage:el.previewTargetLanguage.value
          }, location.origin);
        } catch (error) {
          if (sequence === state.previewSequence) setStatus('미리보기: ' + error.message, 'error');
        }
      }, 150);
    }

    function renderResults(rows) {
      state.resultRows = rows || [];
      const selected = state.selected && state.selected.id;
      el.results.innerHTML = '<option value="">' + (rows.length ? rows.length + '곡 · 성가를 선택하세요' : '검색 결과 없음') + '</option>'
        + rows.map((entry,index) => '<option value="' + index + '">' + escapeHtml(entry.displayTitle || entry.title) + '</option>').join('');
      const index = rows.findIndex(entry => entry.id === selected);
      el.results.value = index < 0 ? '' : String(index);
    }

    function selectResult(index) {
      const entry = state.resultRows[Number(index)];
      if (index === '' || !entry) return;
      state.selected = entry;
      fillFromEntry(entry);
      setStatus((entry.displayTitle || entry.id) + ' 선택됨', 'ok');
    }

    function refreshSavedEntry(entry) {
      if (!entry || !entry.id) return;
      const rows = state.resultRows.slice();
      const index = rows.findIndex(row => row.id === entry.id);
      if (index < 0) rows.unshift(entry); else rows[index] = entry;
      renderResults(rows);
    }

    function applySavedEntry(entry) {
      state.selected = entry;
      refreshSavedEntry(entry);
      fillFromEntry(entry);
    }

    function fillFromEntry(entry) {
      el.book.value = entry.book || '';
      el.season.value = entry.season || (entry.tags || []).find(tag => tag !== entry.book) || '';
      el.number.value = entry.number || '';
      el.title.value = entry.title || '';
      el.lyricist.value = entry.lyricist || '';
      el.composer.value = entry.composer || '';
      el.arranger.value = entry.arranger || '';
      el.selector.value = entry.selector || '';
      el.scripture.value = entry.scripture || '';
      el.copyright.value = entry.copyright || '';
      el.extraTags.value = (entry.extraTags || []).join(', ');
      el.voiceType.value = entry.voiceType || '';
      el.lyrics.value = entry.lyrics || '';
      updatePreview();
    }

    async function loadState() {
      setStatus('불러오는 중');
      const body = await api('/api/state');
      state.books = body.books || [];
      state.seasons = body.seasons || [];
      el.count.textContent = body.count + '곡';
      el.filePath.textContent = body.file;
      fillDatalist(el.bookList, state.books.map(item => item.book));
      fillDatalist(el.seasonList, state.seasons);
      const book = state.loaded ? el.filterBook.value : '가톨릭성가';
      state.loaded = true;
      el.filterBook.innerHTML = '<option value="">전체 성가집</option>' + state.books.map(item =>
        '<option value="' + escapeHtml(item.book) + '">' + escapeHtml(item.book) + ' (' + item.count + '곡)</option>').join('');
      el.filterBook.value = state.books.some(item => item.book === book) ? book : '';
      await suggest();
      if (state.selected) {
        const refreshed = state.resultRows.find(entry => entry.id === state.selected.id);
        if (refreshed) { state.selected = refreshed; fillFromEntry(refreshed); }
      }
      updatePreview();
      setStatus(body.count + '곡 로드됨', 'ok');
    }

    async function suggest() {
      clearTimeout(state.suggestTimer);
      const sequence = ++state.searchSequence;
      const body = await api('/api/suggest', {
        method:'POST', body:JSON.stringify({ query:el.searchQuery.value.trim(), book:el.filterBook.value })
      });
      if (sequence !== state.searchSequence) return;
      const rows = body.suggestions || [];
      renderResults(rows);
      if (el.searchQuery.value.trim() && rows.length === 1) {
        el.results.value = '0';
        selectResult('0');
      }
      setStatus(rows.length + '개 결과', rows.length ? 'ok' : 'warn');
    }

    async function save() {
      const payload = currentPayload();
      if (!payload.book || !payload.season || !payload.title || !payload.lyrics) {
        setStatus('책이름, 시기, 제목, 가사를 확인하세요.', 'warn');
        return;
      }
      setStatus('저장 중');
      try {
        const body = await api('/api/save', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        el.count.textContent = body.count + '곡';
        applySavedEntry(body.entry);
        setStatus((body.action === 'created' ? '추가됨: ' : '갱신됨: ') + body.entry.id, 'ok');
        showToast('저장되었습니다.', 'ok');
      } catch (error) {
        if (error.body && error.body.suggestions) {
          renderResults(error.body.suggestions);
          setStatus('검색 결과에서 하나를 선택하세요.', 'warn');
          return;
        }
        setStatus(error.message, 'error');
      }
    }

    function requireSelected() {
      if (!state.selected || !state.selected.id) {
        setStatus('수정할 성가를 검색 결과에서 먼저 선택하세요.', 'warn');
        return false;
      }
      return true;
    }

    async function saveNumberOnly() {
      if (!requireSelected()) return;
      const number = el.number.value.trim();
      if (!number) {
        setStatus('성가번호를 입력하세요.', 'warn');
        return;
      }
      setStatus('성가번호 수정 중');
      const body = await api('/api/number', {
        method: 'POST',
        body: JSON.stringify({
          targetId: state.selected.id,
          number
        })
      });
      applySavedEntry(body.entry);
      setStatus('성가번호 수정됨: ' + body.entry.displayTitle, 'ok');
      showToast('저장되었습니다.', 'ok');
    }

    async function saveTagsOnly() {
      if (!requireSelected()) return;
      const season = el.season.value.trim();
      if (!season) {
        setStatus('시기를 입력하세요.', 'warn');
        return;
      }
      setStatus('기타 태그 수정 중');
      const body = await api('/api/tags', {
        method: 'POST',
        body: JSON.stringify({
          targetId: state.selected.id,
          season,
          extraTags: el.extraTags.value.trim()
        })
      });
      applySavedEntry(body.entry);
      setStatus('기타 태그 수정됨: ' + body.entry.tags.join(' / '), 'ok');
      showToast('저장되었습니다.', 'ok');
    }

    async function saveVoiceTypeOnly() {
      if (!requireSelected()) return;
      setStatus('성부 구분 수정 중');
      const body = await api('/api/voice-type', {
        method: 'POST',
        body: JSON.stringify({
          targetId: state.selected.id,
          voiceType: el.voiceType.value
        })
      });
      applySavedEntry(body.entry);
      setStatus('성부 구분 수정됨: ' + (body.entry.voiceType || '선택 없음'), 'ok');
      showToast('저장되었습니다.', 'ok');
    }

    async function deleteSelected() {
      if (!state.selected || !state.selected.id) {
        setStatus('삭제할 성가를 검색 결과에서 먼저 선택하세요.', 'warn');
        return;
      }
      const label = state.selected.displayTitle || state.selected.title || state.selected.id;
      if (!confirm('정말로 삭제하시겠습니까?\\n\\n' + label + '\\n' + state.selected.id)) {
        setStatus('삭제 취소됨', 'warn');
        return;
      }

      setStatus('삭제 중');
      const body = await api('/api/delete', {
        method: 'POST',
        body: JSON.stringify({ targetId: state.selected.id })
      });
      startFresh();
      await loadState();
      setStatus('삭제됨: ' + body.deleted.id, 'ok');
    }

    function startFresh() {
      clearSelected();
      el.book.value = el.filterBook.value || el.book.value;
      el.number.value = '';
      el.title.value = '';
      el.lyricist.value = '';
      el.composer.value = '';
      el.arranger.value = '';
      el.selector.value = '';
      el.scripture.value = '';
      el.copyright.value = '';
      el.extraTags.value = '';
      el.voiceType.value = '';
      el.lyrics.value = '';
      updatePreview();
      el.title.focus();
      setStatus('새 성가를 입력한 뒤 로컬에 저장하세요.', 'ok');
    }

    function debounceSuggest() {
      clearTimeout(state.suggestTimer);
      state.suggestTimer = setTimeout(() => {
        suggest().catch(error => setStatus(error.message, 'error'));
      }, 350);
    }

    [el.book, el.season, el.number, el.title, el.lyricist, el.composer, el.arranger, el.selector, el.scripture, el.copyright, el.extraTags, el.voiceType, el.lyrics].forEach(input => {
      input.addEventListener('input', () => {
        updatePreview();
      });
    });
    el.book.addEventListener('change', updateNextNumber);
    el.searchQuery.addEventListener('input', () => { ++state.searchSequence; debounceSuggest(); });
    el.searchQuery.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); suggest().catch(error => setStatus(error.message, 'error')); } });
    el.filterBook.addEventListener('change', () => suggest().catch(error => setStatus(error.message, 'error')));
    el.results.addEventListener('change', () => selectResult(el.results.value));
    el.previewTargetLanguage.addEventListener('change', updatePreview);
    window.addEventListener('message', event => {
      if (event.source !== el.appPreviewFrame.contentWindow || event.origin !== location.origin) return;
      if (event.data?.type === 'ordo:hymn-preview-ready') { state.previewReady = true; updatePreview(); }
      if (event.data?.type === 'ordo:hymn-preview-rendered') {
        el.appPreviewFrame.style.height = Math.max(380, Number(event.data.height) || 0) + 'px';
      }
    });
    el.searchButton.addEventListener('click', () => suggest().catch(error => setStatus(error.message, 'error')));
    el.save.addEventListener('click', () => save().catch(error => setStatus(error.message, 'error')));
    el.firebaseUpload.addEventListener('click', () => window.ordoFirebaseUploader.upload({
      button: el.firebaseUpload,
      setStatus: (message, kind) => setStatus(message, kind)
    }).catch(error => setStatus(error.message, 'error')));
    el.saveNumber.addEventListener('click', () => saveNumberOnly().catch(error => setStatus(error.message, 'error')));
    el.saveTags.addEventListener('click', () => saveTagsOnly().catch(error => setStatus(error.message, 'error')));
    el.saveVoiceType.addEventListener('click', () => saveVoiceTypeOnly().catch(error => setStatus(error.message, 'error')));
    el.deleteButton.addEventListener('click', () => deleteSelected().catch(error => setStatus(error.message, 'error')));
    el.reload.addEventListener('click', () => loadState().catch(error => setStatus(error.message, 'error')));
    el.fresh.addEventListener('click', startFresh);

    loadState().catch(error => setStatus(error.message, 'error'));
  </script>
  <script src="/firebase-upload-client.js"></script>
</body>
</html>`;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const data = loadHymnData();
  const stats = validateData(data);

  if (args.check) {
    if (usesCountryModules) prepareCountryModuleSources(data);
    console.log(JSON.stringify({
      ok: true,
      file: hymnDataDisplayPath,
      ...(usesCountryModules ? { countryModules: countryHymnModules.length } : {}),
      ...stats
    }, null, 2));
    return;
  }

  const server = createServer();
  const address = await listenWithFallback(server, args.host, args.port);
  console.log(`Hymn Data Entry Tool: http://${address.address}:${address.port}/`);
}

module.exports = {
  createServer,
  countryHymnModules,
  parseLyricsVerses,
  loadHymnData,
  prepareCountryModuleSources,
  readCountryModuleSources,
  runCountryModuleSources,
  validateData
};

if (require.main === module) {
  main().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exit(1);
  });
}
