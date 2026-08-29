const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const defaultHymnDataPath = path.join(root, 'JS file', 'hymn_data.js');
const hymnDataPath = process.env.HYMN_DATA_PATH
  ? path.resolve(process.env.HYMN_DATA_PATH)
  : defaultHymnDataPath;
const usesCountryModules = path.normalize(hymnDataPath).toLowerCase()
  === path.normalize(defaultHymnDataPath).toLowerCase();
const countryHymnModules = [
  ['KR', 'korea', 'korea_hymns.js'],
  ['VN', 'vietnam', 'vietnam_hymns.js'],
  ['US', 'united_states', 'united_states_hymns.js'],
  ['JP', 'japan', 'japan_hymns.js'],
  ['VA', 'vatican', 'vatican_hymns.js']
].map(([jurisdiction, directory, filename]) => ({
  jurisdiction,
  path: path.join(root, 'JS file', 'countries', directory, filename)
}));
const DEFAULT_PORT = 5227;
const DEFAULT_HOST = '127.0.0.1';
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const VOICE_TYPES = ['단성', '화성', '4성부'];
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
  const data = sandbox.hymnData || sandbox.ordoHymnData;
  if (!Array.isArray(data)) {
    throw new Error('globalThis.hymnData was not loaded from the country hymn modules');
  }
  return {
    data,
    countries: sandbox.countryHymnData || {}
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

  let match = value.match(/^(\d+)\s*절\s*[:：.)\]-]?\s*(.*)$/u);
  if (match) return { label: `${Number(match[1])}절`, rest: match[2] || '' };

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

function normalizePayload(body) {
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

  if (!book) throw Object.assign(new Error('책이름을 입력하세요.'), { statusCode: 400 });
  if (!season) throw Object.assign(new Error('시기를 입력하세요.'), { statusCode: 400 });
  if (!title) throw Object.assign(new Error('제목을 입력하세요.'), { statusCode: 400 });
  if (!lyrics) throw Object.assign(new Error('가사를 입력하세요.'), { statusCode: 400 });

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
  const country = cleanLine(existing && (existing.country || existing.language)) || countryForBook(payload.book);
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

  entry.verses = parseLyricsVerses(payload.lyrics);
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
    file: hymnDataPath,
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
    entry.voiceType
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

  return rows.slice(0, 30).map(item => publicEntry(item.entry));
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
  const code = cleanLine(entry && (entry.country || entry.language)).toUpperCase();
  const jurisdiction = {
    KR: 'KR',
    VN: 'VN',
    US: 'US',
    EN: 'US',
    JP: 'JP',
    VA: 'VA',
    LA: 'VA'
  }[code];
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

  const nextSources = sources.map(source => ({
    ...source,
    code: replaceCountryEntries(source.code, grouped.get(source.jurisdiction), source.path)
  }));
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
      if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(INDEX_HTML);
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/state') {
        sendJson(res, 200, { ok: true, ...statePayload(loadHymnData()) });
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
  <title>성가 JS 입력 도구</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #1f2933;
      --muted: #637083;
      --line: #d9e0e7;
      --panel: #f7f9fb;
      --panel-strong: #edf6f2;
      --accent: #237b5a;
      --accent-dark: #15523c;
      --warn: #9a5b00;
      --error: #b3261e;
      --ok: #176b48;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: #ffffff;
      color: var(--ink);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.5;
    }
    header {
      position: sticky;
      top: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 18px;
      border-bottom: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(10px);
    }
    h1 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 900;
    }
    main {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(380px, 1fr);
      gap: 18px;
      padding: 18px;
    }
    label {
      display: grid;
      gap: 6px;
      min-width: 0;
      font-size: 0.86rem;
      font-weight: 800;
      color: #334155;
    }
    input, select, textarea, button {
      font: inherit;
    }
    input, select, textarea {
      width: 100%;
      min-width: 0;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 9px 10px;
      background: #fff;
      color: var(--ink);
    }
    textarea {
      min-height: 390px;
      resize: vertical;
      white-space: pre-wrap;
      line-height: 1.55;
    }
    button {
      min-height: 38px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 8px 12px;
      background: #fff;
      color: var(--ink);
      font-weight: 850;
      cursor: pointer;
    }
    button:hover { border-color: #9fb1c1; }
    button.primary {
      border-color: var(--accent);
      background: var(--accent);
      color: #fff;
    }
    button.primary:hover { background: var(--accent-dark); }
    button.secondary { background: var(--panel); }
    .status {
      max-width: 55vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--muted);
      font-size: 0.88rem;
      font-weight: 800;
    }
    .status.ok { color: var(--ok); }
    .status.warn { color: var(--warn); }
    .status.error { color: var(--error); }
    .toast {
      position: fixed;
      left: 50%;
      bottom: 22px;
      z-index: 12;
      max-width: calc(100vw - 32px);
      padding: 10px 14px;
      border-radius: 8px;
      background: #1f2933;
      color: #fff;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.24);
      font-size: 0.9rem;
      font-weight: 900;
      line-height: 1.35;
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, 12px);
      transition: opacity 0.18s ease, transform 0.18s ease;
    }
    .toast.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    .toast.ok { background: var(--accent-dark); }
    .toast.warn { background: #8a4f00; }
    .toast.error { background: var(--error); }
    .form {
      display: grid;
      gap: 14px;
      align-content: start;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      color: var(--muted);
      font-size: 0.82rem;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      min-height: 26px;
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 3px 9px;
      background: var(--panel);
      overflow-wrap: anywhere;
    }
    .side {
      display: grid;
      gap: 14px;
      align-content: start;
      min-width: 0;
    }
    .panel {
      display: grid;
      gap: 10px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
      background: var(--panel);
      min-width: 0;
      overflow: hidden;
    }
    .panel h2 {
      margin: 0;
      font-size: 0.95rem;
    }
    .results {
      display: grid;
      gap: 8px;
      max-height: min(62vh, 640px);
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 4px;
      min-width: 0;
      max-width: 100%;
    }
    .search-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      min-width: 0;
    }
    .result {
      display: grid;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      height: auto;
      min-height: 66px;
      text-align: left;
      background: #fff;
      overflow: hidden;
      min-width: 0;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    .result.selected {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(35, 123, 90, 0.14);
    }
    .result-title {
      font-weight: 900;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    .small {
      color: var(--muted);
      font-size: 0.78rem;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    .preview {
      display: grid;
      gap: 8px;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      min-height: 180px;
    }
    .preview h3 {
      margin: 0;
      color: var(--accent-dark);
      font-size: 1rem;
      overflow-wrap: anywhere;
    }
    .preview-body {
      margin: 0;
      white-space: pre-wrap;
      color: #354052;
      font-size: 0.9rem;
    }
    .preview-body strong {
      color: var(--accent-dark);
      font-weight: 900;
    }
    .verse-preview {
      display: grid;
      gap: 8px;
    }
    .verse-block {
      display: grid;
      gap: 4px;
      border-top: 1px solid var(--line);
      padding-top: 8px;
    }
    .verse-label {
      color: var(--accent-dark);
      font-size: 0.82rem;
      font-weight: 900;
    }
    .file {
      overflow-wrap: anywhere;
    }
    @media (max-width: 880px) {
      header { align-items: flex-start; flex-direction: column; }
      main { grid-template-columns: minmax(0, 1fr); padding: 12px; }
      .grid { grid-template-columns: minmax(0, 1fr); }
      .search-row { grid-template-columns: minmax(0, 1fr); }
      .status { max-width: 100%; white-space: normal; }
      textarea { min-height: 300px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>성가 JS 입력 도구</h1>
    <div id="status" class="status" role="status" aria-live="polite">불러오는 중</div>
  </header>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <main>
    <section class="form" aria-label="성가 입력">
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
            <option value="4성부">4성부</option>
          </select>
        </label>
      </div>
      <label>가사
        <textarea id="lyrics" spellcheck="false"></textarea>
      </label>
      <div class="toolbar">
        <button id="save" class="primary" type="button">저장</button>
        <button id="save-number" class="secondary" type="button">성가번호 수정</button>
        <button id="save-tags" class="secondary" type="button">기타 태그 수정</button>
        <button id="save-voice-type" class="secondary" type="button">성부 구분 수정</button>
        <button id="delete" class="secondary" type="button">삭제</button>
        <button id="new" class="secondary" type="button">새 항목</button>
        <button id="reload" class="secondary" type="button">새로고침</button>
      </div>
      <div class="meta">
        <span class="pill" id="count">0곡</span>
        <span class="pill" id="next-number">번호 자동</span>
        <span class="pill file" id="file-path"></span>
      </div>
    </section>

    <aside class="side" aria-label="성가 확인">
      <section class="panel">
        <h2>검색 결과</h2>
        <div class="search-row">
          <input id="search-query" type="search" autocomplete="off" placeholder="제목, 번호, 가사, 작곡자 검색">
          <button id="search-button" class="secondary" type="button">검색</button>
        </div>
        <div id="results" class="results"></div>
      </section>
      <section class="panel">
        <h2>미리보기</h2>
        <div class="preview">
          <h3 id="preview-title"></h3>
          <div class="meta">
            <span class="pill" id="preview-book"></span>
            <span class="pill" id="preview-season"></span>
            <span class="pill" id="preview-people"></span>
            <span class="pill" id="preview-extra"></span>
            <span class="pill" id="preview-copyright"></span>
            <span class="pill" id="preview-voice-type"></span>
          </div>
          <p id="preview-body" class="preview-body"></p>
          <div id="preview-verses" class="verse-preview"></div>
        </div>
      </section>
    </aside>
  </main>

  <script>
    const state = {
      books: [],
      seasons: [],
      selected: null,
      suggestTimer: 0,
      resultRows: [],
      toastTimer: 0
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
      previewTitle: document.getElementById('preview-title'),
      previewBook: document.getElementById('preview-book'),
      previewSeason: document.getElementById('preview-season'),
      previewPeople: document.getElementById('preview-people'),
      previewExtra: document.getElementById('preview-extra'),
      previewCopyright: document.getElementById('preview-copyright'),
      previewVoiceType: document.getElementById('preview-voice-type'),
      previewBody: document.getElementById('preview-body'),
      previewVerses: document.getElementById('preview-verses')
    };

    function setStatus(message, kind) {
      el.status.textContent = message;
      el.status.className = 'status' + (kind ? ' ' + kind : '');
    }

    function showToast(message, kind) {
      clearTimeout(state.toastTimer);
      el.toast.textContent = message;
      el.toast.className = 'toast show' + (kind ? ' ' + kind : '');
      state.toastTimer = setTimeout(() => {
        el.toast.className = 'toast';
      }, 2400);
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

    const REFRAIN_HEADING_RE = /^(?:\[\s*(?:후렴구?|후렴|반복|응송|refrain|chorus|ref\.?|antiphona|antiphon|antífona|ant\.?|[đdð]\.?|[đdð]k\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?)\s*\]\s*|(?:후렴구?|후렴|반복|응송|refrain|chorus|ref\.?|antiphona|antiphon|antífona|ant\.?|[đdð]\.?|[đdð]k\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?|[r℟])(?=\s|[:：.)\]-]|$)\s*[:：.)\]-]?\s*)(.*)$/iu;
    const REFRAIN_MARKER_HTML_RE = /(^|\n)(\s*)((?:(?:ĐK|ÐK|DK|Đ|Ð|D|R|℟|Ref)\.|(?:후렴구?|후렴|コーラス|リフレイン)(?:[):：.]|\s*-)?|(?:refrain|chorus|antiphona|antiphon|antífona|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|答唱(?:詩編|詩篇)?)(?:[:：.)\]-])?))(?=\s|&nbsp;|$)/giu;
    const REFRAIN_BRACKET_HTML_RE = /\[\s*(?:(?:ĐK|ÐK|DK|Đ|Ð|D|R|℟|Ref)\.?|후렴구?|후렴|refrain|chorus|antiphona|antiphon|antífona|ant\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?)(?=\s|:|：|\.|\)|\x5d|-|$)[^\]\n]*\]/giu;

    function headingComparableText(line) {
      return String(line || '')
        .trim()
        .replace(/&lt;(\/?)(b|strong)&gt;/gi, '<$1$2>')
        .replace(/<\/?(?:b|strong)>/gi, ' ')
        .replace(/\*\*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function lyricsHtml(value) {
      let html = escapeHtml(value);
      html = html.replace(/&lt;(b|strong)&gt;([\s\S]*?)&lt;\/(?:b|strong)&gt;/gi, '<strong>$2</strong>');
      html = html.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>');
      html = html.replace(REFRAIN_BRACKET_HTML_RE, '<strong>$&</strong>');
      return html.replace(REFRAIN_MARKER_HTML_RE, '$1$2<strong>$3</strong>');
    }

    function fillDatalist(target, values) {
      target.innerHTML = values.map(value => '<option value="' + escapeHtml(value) + '"></option>').join('');
    }

    function clearSelected() {
      state.selected = null;
      [...el.results.querySelectorAll('.result')].forEach(button => button.classList.remove('selected'));
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

    function parseVerseHeading(line) {
      const value = headingComparableText(line);
      if (!value) return null;
      let match = value.match(/^(\d+)\s*절\s*[:：.)\]-]?\s*(.*)$/u);
      if (match) return { label: Number(match[1]) + '절', rest: match[2] || '' };
      match = value.match(/^(\d+)\s*[.)]\s*(.*)$/u);
      if (match) return { label: Number(match[1]) + '절', rest: match[2] || '' };
      match = value.match(/^\((\d+)\)\s*(.*)$/u);
      if (match) return { label: Number(match[1]) + '절', rest: match[2] || '' };
      match = value.match(/^(?:verse|v)\s*(\d+)\s*[:：.)\]-]?\s*(.*)$/iu);
      if (match) return { label: Number(match[1]) + '절', rest: match[2] || '' };
      match = value.match(REFRAIN_HEADING_RE);
      if (match) return { label: '후렴', rest: match[1] || '' };
      return null;
    }

    function parseLyricsVerses(lyrics) {
      const lines = String(lyrics || '').replace(/\r\n?/g, '\n').trim().split('\n');
      const verses = [];
      let current = null;
      let foundHeading = false;

      function pushCurrent() {
        if (!current) return;
        const text = current.lines.join('\n').trim();
        if (current.label || text) verses.push({ label: current.label, text });
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
      return foundHeading ? verses.filter(verse => verse.label || verse.text) : [];
    }

    function updateNextNumber() {
      const book = el.book.value.trim();
      const found = state.books.find(item => item.book === book);
      el.nextNumber.textContent = found ? '다음 번호 ' + found.nextNumber : '번호 자동';
    }

    function updatePreview() {
      const payload = currentPayload();
      const title = [payload.number, payload.title || '제목'].filter(Boolean).join('. ');
      el.previewTitle.textContent = title;
      el.previewBook.textContent = payload.book || '책이름';
      el.previewSeason.textContent = payload.season || '시기';
      const people = [
        payload.lyricist && '작사: ' + payload.lyricist,
        payload.composer && '작곡: ' + payload.composer,
        payload.arranger && '편곡: ' + payload.arranger,
        payload.selector && '선곡: ' + payload.selector
      ].filter(Boolean).join(' / ');
      el.previewPeople.textContent = people || '작사/작곡/편곡/선곡';
      el.previewExtra.textContent = payload.scripture || '성경구절';
      el.previewCopyright.textContent = payload.copyright || '저작권';
      el.previewVoiceType.textContent = payload.voiceType ? '성부: ' + payload.voiceType : '';
      el.previewVoiceType.hidden = !payload.voiceType;
      const verses = parseLyricsVerses(payload.lyrics);
      el.previewBody.innerHTML = verses.length ? '' : (payload.lyrics ? lyricsHtml(payload.lyrics) : '가사');
      el.previewVerses.innerHTML = verses.map(verse => [
        '<div class="verse-block">',
        '  <div class="verse-label">' + escapeHtml(verse.label || '가사') + '</div>',
        '  <p class="preview-body">' + lyricsHtml(verse.text || '') + '</p>',
        '</div>'
      ].join('')).join('');
      updateNextNumber();
    }

    function renderResults(rows) {
      rows = rows || [];
      state.resultRows = rows;
      if (!rows.length) {
        el.results.innerHTML = '<div class="small">검색 결과 없음</div>';
        return;
      }
      el.results.innerHTML = rows.map((entry, index) => {
        const selectedClass = state.selected && state.selected.id === entry.id ? ' selected' : '';
        const tags = (entry.tags || []).join(' / ');
        const people = [
          entry.lyricist && '작사 ' + entry.lyricist,
          entry.composer && '작곡 ' + entry.composer,
          entry.arranger && '편곡 ' + entry.arranger,
          entry.selector && '선곡 ' + entry.selector,
          entry.scripture
        ].filter(Boolean).join(' · ');
        return [
          '<button class="result' + selectedClass + '" type="button" data-index="' + index + '">',
          '  <span class="result-title">' + escapeHtml(entry.displayTitle || entry.title) + '</span>',
          '  <span class="small">' + escapeHtml(entry.id) + ' · ' + escapeHtml(tags) + '</span>',
          '  <span class="small">' + escapeHtml(people || entry.firstLine || '') + '</span>',
          '</button>'
        ].join('');
      }).join('');
      [...el.results.querySelectorAll('.result')].forEach(button => {
        button.addEventListener('click', () => {
          const entry = rows[Number(button.dataset.index)];
          state.selected = entry;
          [...el.results.querySelectorAll('.result')].forEach(item => item.classList.remove('selected'));
          button.classList.add('selected');
          fillFromEntry(entry);
          setStatus(entry.id + ' 선택됨', 'ok');
        });
      });
    }

    function refreshSavedEntry(entry) {
      if (!entry || !entry.id) return;
      const index = state.resultRows.findIndex(row => row && row.id === entry.id);
      if (index >= 0) {
        const rows = state.resultRows.slice();
        rows[index] = entry;
        renderResults(rows);
        const selectedButton = el.results.querySelector('.result.selected');
        if (selectedButton) selectedButton.scrollIntoView({ block: 'nearest' });
      }
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
      if (!el.searchQuery.value.trim()) renderResults(body.recent || []);
      updatePreview();
      setStatus(body.count + '곡 로드됨', 'ok');
    }

    async function suggest() {
      clearTimeout(state.suggestTimer);
      const body = await api('/api/suggest', {
          method: 'POST',
          body: JSON.stringify({
          query: el.searchQuery.value.trim()
        })
      });
      renderResults(body.suggestions || []);
      setStatus((body.suggestions || []).length + '개 결과', body.suggestions && body.suggestions.length ? 'ok' : 'warn');
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
      setStatus('새 항목', 'ok');
    }

    function debounceSuggest() {
      clearTimeout(state.suggestTimer);
      state.suggestTimer = setTimeout(() => {
        if (el.searchQuery.value.trim()) suggest().catch(error => setStatus(error.message, 'error'));
      }, 350);
    }

    [el.book, el.season, el.number, el.title, el.lyricist, el.composer, el.arranger, el.selector, el.scripture, el.copyright, el.extraTags, el.voiceType, el.lyrics].forEach(input => {
      input.addEventListener('input', () => {
        updatePreview();
      });
    });
    el.book.addEventListener('change', updateNextNumber);
    el.searchQuery.addEventListener('input', debounceSuggest);
    el.searchButton.addEventListener('click', () => suggest().catch(error => setStatus(error.message, 'error')));
    el.save.addEventListener('click', () => save().catch(error => setStatus(error.message, 'error')));
    el.saveNumber.addEventListener('click', () => saveNumberOnly().catch(error => setStatus(error.message, 'error')));
    el.saveTags.addEventListener('click', () => saveTagsOnly().catch(error => setStatus(error.message, 'error')));
    el.saveVoiceType.addEventListener('click', () => saveVoiceTypeOnly().catch(error => setStatus(error.message, 'error')));
    el.deleteButton.addEventListener('click', () => deleteSelected().catch(error => setStatus(error.message, 'error')));
    el.reload.addEventListener('click', () => loadState().catch(error => setStatus(error.message, 'error')));
    el.fresh.addEventListener('click', startFresh);

    loadState().catch(error => setStatus(error.message, 'error'));
  </script>
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
      file: hymnDataPath,
      ...(usesCountryModules ? { countryModules: countryHymnModules.length } : {}),
      ...stats
    }, null, 2));
    return;
  }

  const server = createServer();
  const address = await listenWithFallback(server, args.host, args.port);
  console.log(`Hymn Data Entry Tool: http://${address.address}:${address.port}/`);
}

main().catch(error => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
