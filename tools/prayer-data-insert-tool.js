const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');
const { buildFirebaseUploadPayload, serveFirebaseUploadClient } = require('./firebase-upload-support');

const root = path.resolve(__dirname, '..');
const defaultPrayerDataPath = path.join(root, 'JS file', 'prayer_data.js');
const prayerDataPath = process.env.PRAYER_DATA_PATH
  ? path.resolve(process.env.PRAYER_DATA_PATH)
  : defaultPrayerDataPath;
const usesCountryModules = path.normalize(prayerDataPath).toLowerCase()
  === path.normalize(defaultPrayerDataPath).toLowerCase();
const LANGUAGES = ['KR', 'VN', 'EN', 'JP', 'LA', 'ZH', 'IT', 'PT', 'ES', 'DE'];
const SEARCH_RESULT_LANGUAGE_ORDER = ['KR', 'VN', 'EN', 'LA', 'JP', 'ZH', 'IT', 'PT', 'ES', 'DE'];
const DEFAULT_PORT = 5217;
const PRAYER_ID_COLLATOR = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
const CATEGORY_ORDER = [
  'common',
  'rosary',
  'stations_of_cross',
  'litany',
  'Various',
  'sacrament',
  'blessing_household',
  'funeral',
  'monthly'
];
const LANGUAGE_NAMES = {
  KR: '한국어', VN: 'Tiếng Việt', EN: 'English', JP: '日本語', LA: 'Latina',
  ZH: '繁體中文', IT: 'Italiano', PT: 'Português', ES: 'Español', DE: 'Deutsch'
};
const JURISDICTION_NAMES = {
  KR: '대한민국', VN: '베트남', US: '미국', JP: '일본', VA: '바티칸', TW: '대만',
  IT: '이탈리아', PT: '포르투갈', MX: '멕시코', DE: '독일', BR: '브라질',
  AU: '호주', NZ: '뉴질랜드', PH: '필리핀', IE: '아일랜드',
  'GB-EW': '잉글랜드·웨일스', 'GB-SCT': '스코틀랜드'
};
const JURISDICTION_LANGUAGES = {
  KR: 'KR', VN: 'VN', US: 'EN', JP: 'JP', VA: 'LA', TW: 'ZH', IT: 'IT', PT: 'PT',
  MX: 'ES', DE: 'DE', BR: 'PT', AU: 'EN', NZ: 'EN', PH: 'EN', IE: 'EN',
  'GB-EW': 'EN', 'GB-SCT': 'EN'
};

function discoverCountryPrayerModules() {
  const indexPath = path.join(root, 'index.html');
  const indexSource = fs.readFileSync(indexPath, 'utf8');
  const modules = [];
  const seen = new Set();
  const scriptPattern = /JS%20file\/countries\/([^/"?]+)\/([^/"?]+_prayers\.js)(?:\?[^"']*)?/gu;

  for (const match of indexSource.matchAll(scriptPattern)) {
    const modulePath = path.join(root, 'JS file', 'countries', decodeURIComponent(match[1]), decodeURIComponent(match[2]));
    const normalizedPath = path.normalize(modulePath).toLowerCase();
    if (seen.has(normalizedPath)) continue;
    seen.add(normalizedPath);

    const source = fs.readFileSync(modulePath, 'utf8');
    const jurisdictionMatch = source.match(/\bjurisdiction\s*:\s*["']([^"']+)["']/u);
    if (!jurisdictionMatch) {
      throw new Error(`Could not find the jurisdiction in ${modulePath}`);
    }
    modules.push({ jurisdiction: jurisdictionMatch[1], path: modulePath });
  }

  if (!modules.length) {
    throw new Error(`No country prayer modules were found in ${indexPath}`);
  }
  return modules;
}

const countryPrayerModules = usesCountryModules ? discoverCountryPrayerModules() : [];
const prayerDataDisplayPath = usesCountryModules
  ? path.join(root, 'JS file', 'countries', '*', '*_prayers.js')
  : prayerDataPath;
const prayerEditorHtmlPath = path.join(__dirname, 'prayer-data-editor.html');

function parseArgs(argv) {
  const args = {
    check: false,
    port: Number(process.env.PORT || DEFAULT_PORT),
    host: '127.0.0.1'
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

function runPrayerDataCode(code, filename = prayerDataPath) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename });

  if (!Array.isArray(sandbox.prayerData)) {
    throw new Error('globalThis.prayerData was not loaded from prayer_data.js');
  }

  return {
    categoryLabels: sandbox.prayerCategoryLabels || {},
    prayers: sandbox.prayerData
  };
}

function readCountryModuleSources() {
  return countryPrayerModules.map(module => ({
    ...module,
    code: fs.readFileSync(module.path, 'utf8')
  }));
}

function runCountryModuleSources(sources) {
  const sandbox = {};
  vm.createContext(sandbox);
  for (const source of sources) {
    vm.runInContext(source.code, sandbox, { filename: source.path });
  }

  const registeredCountries = sandbox.countryPrayerData || {};
  const countries = {};
  const categoryLabels = {};
  const mergedEntries = new Map();
  const countryOwners = { entries: {}, textEntries: {}, fields: {} };

  for (const source of sources) {
    const countryModule = registeredCountries[source.jurisdiction]
      || Object.values(registeredCountries).find(module => module && module.jurisdiction === source.jurisdiction);
    if (!countryModule || !Array.isArray(countryModule.entries)) {
      throw new Error(`Country prayer module ${source.path} did not register ${source.jurisdiction}`);
    }
    countries[source.jurisdiction] = countryModule;

    Object.entries(countryModule.categoryLabels || {}).forEach(([category, translations]) => {
      categoryLabels[category] = Object.assign(categoryLabels[category] || {}, translations || {});
    });
    countryModule.entries.forEach(entry => {
      const id = String(entry.id || '');
      countryOwners.entries[id] = unique([].concat(countryOwners.entries[id] || [], source.jurisdiction));
      if (Object.values(entry.texts || {}).some(value => Boolean(String(value || '').trim()))) {
        countryOwners.textEntries[id] = unique([].concat(countryOwners.textEntries[id] || [], source.jurisdiction));
      }
      countryOwners.fields[id] = countryOwners.fields[id] || {};
      for (const field of ['titles', 'texts', 'sourceCategory']) {
        countryOwners.fields[id][field] = countryOwners.fields[id][field] || {};
        Object.keys(entry[field] || {}).forEach(language => {
          countryOwners.fields[id][field][language] = source.jurisdiction;
        });
      }
      const current = mergedEntries.get(entry.id) || {};
      mergedEntries.set(entry.id, Object.assign({}, current, entry, {
        titles: Object.assign({}, current.titles || {}, entry.titles || {}),
        texts: Object.assign({}, current.texts || {}, entry.texts || {}),
        sourceCategory: Object.assign({}, current.sourceCategory || {}, entry.sourceCategory || {}),
        tags: unique([].concat(current.tags || [], entry.tags || []))
      }));
    });
  }

  return {
    data: {
      categoryLabels,
      prayers: Array.from(mergedEntries.values()),
      countryOwners
    },
    countries
  };
}

function loadPrayerData() {
  if (usesCountryModules) {
    return runCountryModuleSources(readCountryModuleSources()).data;
  }
  return runPrayerDataCode(fs.readFileSync(prayerDataPath, 'utf8'));
}

function prayerModuleLanguage(module, jurisdiction) {
  const direct = String(module && module.language || '').trim().toUpperCase();
  if (LANGUAGES.includes(direct)) return direct;
  const counts = {};
  for (const entry of module && Array.isArray(module.entries) ? module.entries : []) {
    for (const field of ['titles', 'texts', 'sourceCategory']) {
      Object.keys(entry[field] || {}).forEach(language => {
        const code = String(language).toUpperCase();
        if (LANGUAGES.includes(code)) counts[code] = (counts[code] || 0) + 1;
      });
    }
  }
  return Object.entries(counts).sort((left, right) => right[1] - left[1])[0]?.[0]
    || JURISDICTION_LANGUAGES[jurisdiction]
    || 'EN';
}

function prayerEditorState(sources = readCountryModuleSources()) {
  if (!usesCountryModules) {
    const data = loadPrayerData();
    return {
      data,
      runtime: null,
      countries: [{
        jurisdiction: 'INTL',
        name: '다국어 통합 파일',
        language: LANGUAGES[0],
        languageName: LANGUAGE_NAMES[LANGUAGES[0]],
        languages: LANGUAGES.slice(),
        entries: data.prayers.length,
        status: 'available'
      }]
    };
  }
  const runtime = runCountryModuleSources(sources);
  const countries = sources.map(source => {
    const module = runtime.countries[source.jurisdiction];
    const language = prayerModuleLanguage(module, source.jurisdiction);
    const languages = unique([
      language,
      ...(module.entries || []).flatMap(entry => ['titles', 'texts', 'sourceCategory']
        .flatMap(field => Object.keys(entry[field] || {}).map(code => String(code).toUpperCase())))
    ]).filter(code => LANGUAGES.includes(code));
    return {
      jurisdiction: source.jurisdiction,
      name: module.jurisdictionName || module.name || JURISDICTION_NAMES[source.jurisdiction] || source.jurisdiction,
      language,
      languageName: LANGUAGE_NAMES[language] || language,
      languages,
      entries: module.entries.length,
      status: module.status || (module.entries.length ? 'available' : 'under-development'),
      file: source.path
    };
  });
  return { data: runtime.data, runtime, countries };
}

function firebasePrayerItems() {
  const loaded = prayerEditorState();
  if (!loaded.runtime) return loaded.data.prayers;
  return loaded.countries.flatMap(country => (
    loaded.runtime.countries[country.jurisdiction].entries || []
  ).map(entry => ({
    ...cloneSerializable(entry),
    jurisdiction: country.jurisdiction,
    __firebaseDocId: `${country.jurisdiction}__${entry.id}`
  })));
}

function prayerEntryForCountry(loaded, jurisdiction, id) {
  if (!loaded.runtime) return loaded.data.prayers.find(entry => entry.id === id) || null;
  const module = loaded.runtime.countries[jurisdiction];
  if (!module) throw Object.assign(new Error(`Unknown jurisdiction: ${jurisdiction}`), { statusCode: 404 });
  return module.entries.find(entry => entry.id === id) || null;
}

function prayersForCountry(loaded, jurisdiction, requestedLanguage) {
  const country = loaded.countries.find(item => item.jurisdiction === jurisdiction) || loaded.countries[0];
  if (!country) return [];
  const language = ensureLanguage(requestedLanguage) || country.language;
  const entries = loaded.runtime
    ? loaded.runtime.countries[country.jurisdiction].entries
    : loaded.data.prayers;
  return entries
    .filter(entry => (entry.titles || {})[language] || (entry.texts || {})[language])
    .map(entry => ({
      id: entry.id,
      lang: language,
      title: (entry.titles || {})[language] || bestTitle(entry, language),
      category: entry.category,
      categoryLabel: (loaded.data.categoryLabels[entry.category] || {})[language] || entry.category,
      sourceCategory: (entry.sourceCategory || {})[language] || '',
      hasText: Boolean((entry.texts || {})[language]),
      textLength: String((entry.texts || {})[language] || '').length,
      textLanguages: SEARCH_RESULT_LANGUAGE_ORDER.filter(code => Boolean((entry.texts || {})[code])),
      jurisdictions: loaded.data.countryOwners
        ? unique([].concat(loaded.data.countryOwners.textEntries[entry.id] || []))
        : (Object.values(entry.texts || {}).some(value => Boolean(String(value || '').trim()))
          ? [country.jurisdiction]
          : [])
    }))
    .sort((left, right) => comparePrayerIds(left.id, right.id)
      || left.title.localeCompare(right.title));
}

function prayerDetailForCountry(loaded, jurisdiction, id, requestedLanguage) {
  const country = loaded.countries.find(item => item.jurisdiction === jurisdiction) || loaded.countries[0];
  if (!country) throw Object.assign(new Error('No country prayer modules are available'), { statusCode: 404 });
  const entry = prayerEntryForCountry(loaded, country.jurisdiction, id);
  const mergedEntry = loaded.data.prayers.find(prayer => prayer.id === id);
  if (!entry && !mergedEntry) throw Object.assign(new Error(`Prayer id not found: ${id}`), { statusCode: 404 });
  const lang = ensureLanguage(requestedLanguage) || country.language;
  const detail = entry || mergedEntry;
  return {
    id: detail.id,
    lang,
    jurisdiction: country.jurisdiction,
    existsInCountry: Boolean(entry),
    category: detail.category,
    categoryLabel: (loaded.data.categoryLabels[detail.category] || {})[lang] || detail.category,
    titles: entry ? (entry.titles || {}) : {},
    title: entry ? ((entry.titles || {})[lang] || '') : '',
    sourceCategory: entry ? (entry.sourceCategory || {}) : {},
    sourceCategoryText: entry ? ((entry.sourceCategory || {})[lang] || '') : '',
    text: entry ? ((entry.texts || {})[lang] || '') : '',
    textLength: entry ? String((entry.texts || {})[lang] || '').length : 0
  };
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/\\n/g, '\n')
    .normalize('NFC');
}

function normalizeStoredText(value) {
  return String(value || '').trim().normalize('NFC');
}

function normalizeSearch(value) {
  return String(value || '')
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
    if (!value || seen.has(value)) continue;
    seen.add(value);
    output.push(value);
  }
  return output;
}

function comparePrayerIds(leftValue, rightValue) {
  const left = String(leftValue || '');
  const right = String(rightValue || '');
  const leftMatch = left.match(/^(\d+)(.*)$/u);
  const rightMatch = right.match(/^(\d+)(.*)$/u);
  if (leftMatch && rightMatch) {
    const numberDifference = Number(leftMatch[1]) - Number(rightMatch[1]);
    if (numberDifference) return numberDifference;
    const variantRank = suffix => suffix.startsWith('.') ? 0 : suffix.startsWith('-') ? 1 : 2;
    const rankDifference = variantRank(leftMatch[2]) - variantRank(rightMatch[2]);
    if (rankDifference) return rankDifference;
    return PRAYER_ID_COLLATOR.compare(leftMatch[2], rightMatch[2]);
  }
  if (leftMatch) return -1;
  if (rightMatch) return 1;
  return PRAYER_ID_COLLATOR.compare(left, right);
}

function ensureLanguage(value) {
  const lang = String(value || '').trim().toUpperCase();
  if (!lang) return '';
  if (!LANGUAGES.includes(lang)) {
    throw Object.assign(new Error(`Unsupported language: ${lang}`), { statusCode: 400 });
  }
  return lang;
}

function allCategories(categoryLabels, prayers) {
  const categories = unique([
    ...Object.keys(categoryLabels || {}),
    ...prayers.map(prayer => prayer.category)
  ]);
  const ranks = new Map(CATEGORY_ORDER.map((category, index) => [category, index]));
  return categories.sort((left, right) => {
    const leftRank = ranks.has(left) ? ranks.get(left) : CATEGORY_ORDER.length;
    const rightRank = ranks.has(right) ? ranks.get(right) : CATEGORY_ORDER.length;
    return leftRank - rightRank || left.localeCompare(right);
  });
}

function publicPrayer(prayer, categoryLabels, countryOwners) {
  const owners = countryOwners || { entries: {}, textEntries: {} };
  return {
    id: prayer.id,
    category: prayer.category,
    categoryLabel: categoryLabels[prayer.category] || {},
    titles: prayer.titles || {},
    sourceCategory: prayer.sourceCategory || {},
    hasText: Object.fromEntries(LANGUAGES.map(lang => [lang, Boolean((prayer.texts || {})[lang])])),
    textLength: Object.fromEntries(LANGUAGES.map(lang => [lang, String((prayer.texts || {})[lang] || '').length])),
    countryEntries: unique([].concat(owners.entries && owners.entries[prayer.id] || [])),
    countryTextEntries: unique([].concat(owners.textEntries && owners.textEntries[prayer.id] || []))
  };
}

function bestTitle(prayer, preferredLang) {
  const titles = prayer.titles || {};
  return titles[preferredLang] || titles.KR || titles.EN || titles.VN || titles.JP || titles.LA || prayer.id;
}

function buildSearchRows(prayers, categoryLabels) {
  const rows = [];

  prayers.forEach((prayer, index) => {
    for (const lang of LANGUAGES) {
      const title = (prayer.titles || {})[lang] || '';
      if (!title) continue;
      rows.push({
        index,
        id: prayer.id,
        lang,
        title,
        category: prayer.category,
        categoryLabel: (categoryLabels[prayer.category] || {})[lang] || prayer.category
      });
    }
  });

  return rows;
}

function scoreCandidate(query, row) {
  const target = normalizeSearch(row.title);
  if (!query || !target) return 0;
  if (target === query) return 1000;
  if (target.startsWith(query)) return 850 - Math.abs(target.length - query.length);
  if (target.includes(query)) return 720 - Math.abs(target.length - query.length);
  if (query.includes(target)) return 650 - Math.abs(target.length - query.length);

  const queryParts = query.split(' ').filter(Boolean);
  const targetParts = target.split(' ').filter(Boolean);
  let overlap = 0;
  for (const part of queryParts) {
    if (part.length > 1 && targetParts.some(targetPart => targetPart.includes(part) || part.includes(targetPart))) {
      overlap += Math.min(part.length, 10);
    }
  }

  return overlap * 18 - Math.abs(target.length - query.length);
}

function findCandidates({ prayers, categoryLabels, language, prayerName, category, limit = 8 }) {
  const lang = ensureLanguage(language);
  const query = normalizeSearch(prayerName);
  const rows = buildSearchRows(prayers, categoryLabels).filter(row => {
    if (lang && row.lang !== lang) return false;
    if (category && row.category !== category) return false;
    return true;
  });

  const exactRows = rows.filter(row => normalizeSearch(row.title) === query);
  const exactByPrayer = mergeRows(exactRows, prayers, categoryLabels, lang);
  if (exactByPrayer.length) {
    return {
      exact: exactByPrayer,
      suggestions: exactByPrayer
    };
  }

  const scored = rows
    .map(row => ({ row, score: scoreCandidate(query, row) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.row.title.localeCompare(b.row.title));

  return {
    exact: [],
    suggestions: mergeRows(scored.map(item => item.row), prayers, categoryLabels, lang).slice(0, limit)
  };
}

function mergeRows(rows, prayers, categoryLabels, preferredLang) {
  const seen = new Set();
  const merged = [];

  for (const row of rows) {
    const key = `${row.id}:${row.lang}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const prayer = prayers[row.index];
    merged.push({
      id: prayer.id,
      lang: row.lang,
      title: row.title,
      displayTitle: bestTitle(prayer, preferredLang || row.lang),
      category: prayer.category,
      categoryLabel: row.categoryLabel,
      sourceCategory: (prayer.sourceCategory || {})[row.lang] || '',
      hasText: Boolean((prayer.texts || {})[row.lang]),
      textLength: String((prayer.texts || {})[row.lang] || '').length,
      textLanguages: SEARCH_RESULT_LANGUAGE_ORDER.filter(lang => Boolean((prayer.texts || {})[lang])),
      allTitles: prayer.titles || {}
    });
  }

  return merged;
}

function findPrayerIndexById(data, id) {
  const index = data.prayers.findIndex(prayer => prayer.id === id);
  if (index === -1) {
    throw Object.assign(new Error(`Prayer id not found: ${id}`), { statusCode: 404 });
  }
  return index;
}

function preferredPrayerLanguage(prayer, requestedLang) {
  const lang = ensureLanguage(requestedLang);
  if (lang) return lang;

  const titles = prayer.titles || {};
  const texts = prayer.texts || {};
  return LANGUAGES.find(code => titles[code] || texts[code]) || LANGUAGES[0];
}

function prayerDetail(data, id, requestedLang) {
  const prayerId = String(id || '').trim();
  if (!prayerId) {
    throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  }

  const prayer = data.prayers[findPrayerIndexById(data, prayerId)];
  const lang = preferredPrayerLanguage(prayer, requestedLang);
  const titles = prayer.titles || {};
  const texts = prayer.texts || {};
  const sourceCategory = prayer.sourceCategory || {};

  return {
    id: prayer.id,
    lang,
    category: prayer.category,
    categoryLabel: (data.categoryLabels[prayer.category] || {})[lang] || prayer.category,
    titles,
    title: titles[lang] || '',
    sourceCategory,
    sourceCategoryText: sourceCategory[lang] || '',
    text: texts[lang] || '',
    textLength: String(texts[lang] || '').length
  };
}

function inferSingleTarget(data, body) {
  const language = ensureLanguage(body.language);
  const prayerName = String(body.prayerName || '').trim();
  const category = String(body.category || '').trim();
  const requestedId = String(body.targetId || '').trim();
  const requestedLang = ensureLanguage(body.targetLang || language);

  if (!prayerName && !requestedId) {
    throw Object.assign(new Error('Prayer name is required'), { statusCode: 400 });
  }

  if (requestedId) {
    const index = data.prayers.findIndex(prayer => prayer.id === requestedId);
    if (index === -1) {
      throw Object.assign(new Error(`Prayer id not found: ${requestedId}`), { statusCode: 404 });
    }
    const lang = requestedLang || language || firstMatchingLanguage(data.prayers[index], prayerName);
    if (!lang) {
      throw Object.assign(new Error('Choose a language for this target'), { statusCode: 409 });
    }
    return { index, lang };
  }

  const candidates = findCandidates({
    prayers: data.prayers,
    categoryLabels: data.categoryLabels,
    language,
    prayerName,
    category
  });

  if (candidates.exact.length !== 1) {
    throw Object.assign(new Error('Choose one matching prayer'), {
      statusCode: 409,
      payload: {
        reason: candidates.exact.length > 1 ? 'multiple_exact_matches' : 'no_exact_match',
        suggestions: candidates.suggestions
      }
    });
  }

  const exact = candidates.exact[0];
  const index = data.prayers.findIndex(prayer => prayer.id === exact.id);
  return { index, lang: language || exact.lang };
}

function firstMatchingLanguage(prayer, prayerName) {
  const query = normalizeSearch(prayerName);
  if (!query) return '';
  for (const lang of LANGUAGES) {
    if (normalizeSearch((prayer.titles || {})[lang]) === query) return lang;
  }
  return '';
}

function buildTags(prayer, categoryLabels) {
  return unique([
    prayer.id,
    prayer.category,
    ...Object.values(categoryLabels[prayer.category] || {}),
    ...Object.values(prayer.titles || {}),
    ...Object.values(prayer.sourceCategory || {})
  ]);
}

function ensureCountryOwners(data) {
  data.countryOwners = data.countryOwners || { entries: {}, textEntries: {}, fields: {} };
  data.countryOwners.entries = data.countryOwners.entries || {};
  data.countryOwners.textEntries = data.countryOwners.textEntries || {};
  data.countryOwners.fields = data.countryOwners.fields || {};
  return data.countryOwners;
}

function ensureKnownJurisdiction(jurisdiction) {
  const value = String(jurisdiction || '').trim();
  if (!value || !usesCountryModules) return '';
  if (!countryPrayerModules.some(module => module.jurisdiction === value)) {
    throw Object.assign(new Error(`Unknown jurisdiction: ${value}`), { statusCode: 400 });
  }
  return value;
}

function setPrayerFieldOwner(data, id, field, language, jurisdiction) {
  const owner = ensureKnownJurisdiction(jurisdiction);
  if (!owner) return;
  const owners = ensureCountryOwners(data);
  owners.entries[id] = unique([].concat(owners.entries[id] || [], owner));
  owners.fields[id] = owners.fields[id] || {};
  owners.fields[id][field] = owners.fields[id][field] || {};
  owners.fields[id][field][language] = owner;
  if (field === 'texts') owners.textEntries[id] = unique([].concat(owners.textEntries[id] || [], owner));
}

function renamePrayerOwners(data, previousId, nextId) {
  if (!previousId || previousId === nextId || !data.countryOwners) return;
  const owners = ensureCountryOwners(data);
  if (owners.entries[previousId]) owners.entries[nextId] = owners.entries[previousId];
  if (owners.textEntries[previousId]) owners.textEntries[nextId] = owners.textEntries[previousId];
  if (owners.fields[previousId]) owners.fields[nextId] = owners.fields[previousId];
  delete owners.entries[previousId];
  delete owners.textEntries[previousId];
  delete owners.fields[previousId];
}

function deletePrayerOwners(data, id) {
  if (!data.countryOwners) return;
  const owners = ensureCountryOwners(data);
  delete owners.entries[id];
  delete owners.textEntries[id];
  delete owners.fields[id];
}

function deletePrayerFieldOwner(data, id, language) {
  if (!data.countryOwners || !data.countryOwners.fields[id]) return;
  const owners = ensureCountryOwners(data);
  const fields = data.countryOwners.fields[id];
  const removedTextOwner = fields.texts && fields.texts[language];
  for (const field of ['titles', 'texts', 'sourceCategory']) {
    if (fields[field]) delete fields[field][language];
  }
  if (removedTextOwner && !Object.values(fields.texts || {}).includes(removedTextOwner)) {
    owners.textEntries[id] = (owners.textEntries[id] || []).filter(owner => owner !== removedTextOwner);
  }
}

function copyPrayerFieldOwner(data, targetId, sourceId, field, targetLang, sourceLang, fallbackJurisdiction) {
  const sourceOwner = data.countryOwners && data.countryOwners.fields[sourceId]
    && data.countryOwners.fields[sourceId][field]
    && data.countryOwners.fields[sourceId][field][sourceLang];
  setPrayerFieldOwner(data, targetId, field, targetLang, fallbackJurisdiction || sourceOwner);
}

function upsertPrayerText(data, body) {
  const text = normalizeText(body.text);
  const category = String(body.category || '').trim();
  const sourceCategory = normalizeStoredText(body.sourceCategory);
  const { index, lang } = inferSingleTarget(data, body);
  const prayer = data.prayers[index];

  prayer.titles = prayer.titles || {};
  prayer.texts = prayer.texts || {};
  prayer.sourceCategory = prayer.sourceCategory || {};

  if (category && prayer.category !== category) {
    prayer.category = category;
  }

  if (body.prayerName) {
    prayer.titles[lang] = normalizeStoredText(body.prayerName);
  }

  prayer.texts[lang] = text;
  if (sourceCategory) {
    prayer.sourceCategory[lang] = sourceCategory;
  }
  prayer.tags = buildTags(prayer, data.categoryLabels);

  return {
    id: prayer.id,
    lang,
    title: prayer.titles[lang],
    category: prayer.category,
    textLength: text.length
  };
}

function updatePrayerDetail(data, body) {
  const originalId = String(body.originalId || body.targetId || '').trim();
  const nextId = String(body.id || originalId).trim();
  const lang = ensureLanguage(body.lang || body.targetLang || body.language);
  const category = String(body.category || '').trim();
  const title = normalizeStoredText(body.title || body.prayerName);
  const text = normalizeText(body.text);
  const sourceCategory = normalizeStoredText(body.sourceCategory);

  if (!nextId) {
    throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  }
  if (!lang) {
    throw Object.assign(new Error('Choose a language'), { statusCode: 400 });
  }
  if (!category) {
    throw Object.assign(new Error('Choose a category'), { statusCode: 400 });
  }
  if (!title) {
    throw Object.assign(new Error('Prayer title is required'), { statusCode: 400 });
  }

  let prayer;
  let previousId = null;

  if (originalId) {
    const index = findPrayerIndexById(data, originalId);
    if (nextId !== originalId && data.prayers.some(prayer => prayer.id === nextId)) {
      throw Object.assign(new Error(`Prayer id already exists: ${nextId}`), { statusCode: 409 });
    }
    prayer = data.prayers[index];
    previousId = prayer.id;
  } else {
    if (data.prayers.some(prayer => prayer.id === nextId)) {
      throw Object.assign(new Error(`Prayer id already exists: ${nextId}`), { statusCode: 409 });
    }
    prayer = { id: nextId, category: '', titles: {}, texts: {}, sourceCategory: {} };
    data.prayers.push(prayer);
  }

  prayer.id = nextId;
  renamePrayerOwners(data, previousId, nextId);
  prayer.category = category;
  prayer.titles = prayer.titles || {};
  prayer.texts = prayer.texts || {};
  prayer.sourceCategory = prayer.sourceCategory || {};
  prayer.titles[lang] = title;
  prayer.texts[lang] = text;
  setPrayerFieldOwner(data, nextId, 'titles', lang, body.jurisdiction);
  setPrayerFieldOwner(data, nextId, 'texts', lang, body.jurisdiction);

  if (sourceCategory) {
    prayer.sourceCategory[lang] = sourceCategory;
    setPrayerFieldOwner(data, nextId, 'sourceCategory', lang, body.jurisdiction);
  } else {
    delete prayer.sourceCategory[lang];
  }

  prayer.tags = buildTags(prayer, data.categoryLabels);

  return {
    previousId,
    id: prayer.id,
    lang,
    title: prayer.titles[lang],
    category: prayer.category,
    sourceCategory: prayer.sourceCategory[lang] || '',
    textLength: text.length
  };
}

function deletePrayerLanguage(data, body) {
  const id = String(body.originalId || body.id || body.targetId || '').trim();
  const lang = ensureLanguage(body.lang || body.targetLang || body.language);

  if (!id) {
    throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  }
  if (!lang) {
    throw Object.assign(new Error('Choose a language'), { statusCode: 400 });
  }

  const prayer = data.prayers[findPrayerIndexById(data, id)];
  prayer.titles = prayer.titles || {};
  prayer.texts = prayer.texts || {};
  prayer.sourceCategory = prayer.sourceCategory || {};

  const removed = [];
  if (prayer.titles[lang]) {
    delete prayer.titles[lang];
    removed.push(`titles.${lang}`);
  }
  if (prayer.texts[lang]) {
    delete prayer.texts[lang];
    removed.push(`texts.${lang}`);
  }
  if (prayer.sourceCategory[lang]) {
    delete prayer.sourceCategory[lang];
    removed.push(`sourceCategory.${lang}`);
  }

  if (!removed.length) {
    throw Object.assign(new Error('Nothing to delete for the selected language'), { statusCode: 409 });
  }

  prayer.tags = buildTags(prayer, data.categoryLabels);
  deletePrayerFieldOwner(data, prayer.id, lang);

  return {
    id: prayer.id,
    lang,
    category: prayer.category,
    removed
  };
}

function deletePrayerEntry(data, body) {
  const id = String(body.originalId || body.id || body.targetId || '').trim();
  const lang = ensureLanguage(body.lang || body.targetLang || body.language);

  if (!id) {
    throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  }

  const index = findPrayerIndexById(data, id);
  const [removedPrayer] = data.prayers.splice(index, 1);
  deletePrayerOwners(data, removedPrayer.id);

  return {
    id: removedPrayer.id,
    lang,
    title: bestTitle(removedPrayer, lang || 'KR'),
    category: removedPrayer.category
  };
}

function updatePrayerTitle(data, body) {
  const title = normalizeStoredText(body.title || body.prayerName);
  if (!title) {
    throw Object.assign(new Error('Prayer title is required'), { statusCode: 400 });
  }

  const { index, lang } = inferSingleTarget(data, body);
  const prayer = data.prayers[index];
  prayer.titles = prayer.titles || {};
  const previousTitle = prayer.titles[lang] || '';
  prayer.titles[lang] = title;
  prayer.tags = buildTags(prayer, data.categoryLabels);

  return {
    id: prayer.id,
    lang,
    previousTitle,
    title
  };
}

function updatePrayerCategory(data, body) {
  const category = String(body.category || '').trim();
  if (!category) {
    throw Object.assign(new Error('Choose a category'), { statusCode: 400 });
  }

  const { index, lang } = inferSingleTarget(data, body);
  const prayer = data.prayers[index];
  const previousCategory = prayer.category;
  prayer.category = category;
  prayer.tags = buildTags(prayer, data.categoryLabels);

  return {
    id: prayer.id,
    lang,
    title: (prayer.titles || {})[lang] || bestTitle(prayer, lang),
    previousCategory,
    category: prayer.category
  };
}

function mergePrayerEntries(data, body) {
  const targetId = String(body.targetId || '').trim();
  const sourceId = String(body.sourceId || '').trim();
  const sourceLang = ensureLanguage(body.sourceLang);
  const targetLang = ensureLanguage(body.targetLang || sourceLang);
  const overwrite = Boolean(body.overwrite);
  const removeSource = body.removeSource !== false;

  if (!targetId || !sourceId) {
    throw Object.assign(new Error('Target and source ids are required'), { statusCode: 400 });
  }
  if (targetId === sourceId) {
    throw Object.assign(new Error('Target and source must be different'), { statusCode: 400 });
  }

  const targetIndex = data.prayers.findIndex(prayer => prayer.id === targetId);
  const sourceIndex = data.prayers.findIndex(prayer => prayer.id === sourceId);
  if (targetIndex === -1) {
    throw Object.assign(new Error(`Target id not found: ${targetId}`), { statusCode: 404 });
  }
  if (sourceIndex === -1) {
    throw Object.assign(new Error(`Source id not found: ${sourceId}`), { statusCode: 404 });
  }

  const target = data.prayers[targetIndex];
  const source = data.prayers[sourceIndex];
  target.titles = target.titles || {};
  target.texts = target.texts || {};
  target.sourceCategory = target.sourceCategory || {};

  // Collect all languages that have data in source
  const sourceLangs = new Set();
  for (const field of ['titles', 'texts', 'sourceCategory']) {
    if (source[field]) {
      for (const lang of Object.keys(source[field])) {
        if (source[field][lang]) sourceLangs.add(lang);
      }
    }
  }

  const copied = [];
  function copyOwnedField(fieldName, nextTargetLang, nextSourceLang, fallbackJurisdiction) {
    const before = copied.length;
    copyField(fieldName, target, source, nextTargetLang, nextSourceLang, overwrite, copied);
    if (copied.length > before) {
      copyPrayerFieldOwner(
        data,
        targetId,
        sourceId,
        fieldName,
        nextTargetLang,
        nextSourceLang,
        fallbackJurisdiction
      );
    }
  }

  // First, if user maps across languages (e.g. EN -> KR), try to copy that specific mapping
  if (sourceLang !== targetLang) {
    copyOwnedField('titles', targetLang, sourceLang, body.targetJurisdiction);
    copyOwnedField('texts', targetLang, sourceLang, body.targetJurisdiction);
    copyOwnedField('sourceCategory', targetLang, sourceLang, body.targetJurisdiction);
  }

  // Then, always copy all languages from source to target (same lang→same lang)
  for (const lang of sourceLangs) {
    copyOwnedField('titles', lang, lang, '');
    copyOwnedField('texts', lang, lang, '');
    copyOwnedField('sourceCategory', lang, lang, '');
  }

  if (!copied.length && !removeSource) {
    throw Object.assign(new Error('Nothing to merge: target already has all data from source (enable overwrite to replace)'), { statusCode: 409 });
  }

  target.tags = buildTags(target, data.categoryLabels);

  if (removeSource) {
    data.prayers.splice(sourceIndex, 1);
    deletePrayerOwners(data, sourceId);
  } else {
    source.tags = buildTags(source, data.categoryLabels);
  }

  return {
    targetId,
    sourceId,
    sourceLang,
    targetLang,
    copied,
    removedSource: removeSource
  };
}

function copyField(fieldName, target, source, targetLang, sourceLang, overwrite, copied) {
  const sourceValue = source[fieldName] && source[fieldName][sourceLang];
  if (!sourceValue) return;

  target[fieldName] = target[fieldName] || {};
  if (!overwrite && target[fieldName][targetLang]) return;

  target[fieldName][targetLang] = sourceValue;
  copied.push(`${fieldName}.${sourceLang}->${targetLang}`);
}

function validateData(data) {
  const duplicateIds = [];
  const seen = new Set();
  for (const prayer of data.prayers) {
    if (seen.has(prayer.id)) duplicateIds.push(prayer.id);
    seen.add(prayer.id);
  }

  const emptyIds = data.prayers.filter(prayer => !prayer.id).length;
  if (duplicateIds.length || emptyIds) {
    throw new Error(`Invalid prayer data: duplicateIds=${duplicateIds.join(',')} emptyIds=${emptyIds}`);
  }

  return {
    count: data.prayers.length,
    languages: LANGUAGES,
    categories: allCategories(data.categoryLabels, data.prayers),
    duplicateIds
  };
}

function saveLegacyPrayerData(data) {
  validateData(data);
  const output = [
    '(function(global) {',
    `  const prayerCategoryLabels = ${formatValue(data.categoryLabels, 1)};`,
    `  const prayers = ${formatValue(data.prayers, 1)};`,
    '',
    '  global.prayerCategoryLabels = prayerCategoryLabels;',
    '  global.prayerData = prayers;',
    '})(globalThis);',
    ''
  ].join('\n');

  validateGeneratedOutput(output);

  const backupPath = path.join(root, 'tmp', `prayer_data.backup-${timestamp()}.js`);
  const nextPath = `${prayerDataPath}.next-${process.pid}`;
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(prayerDataPath, backupPath);
  fs.writeFileSync(nextPath, output, 'utf8');
  fs.renameSync(nextPath, prayerDataPath);
  return backupPath;
}

function findEntriesArrayBounds(source, filename) {
  const match = /\bentries\s*:/.exec(source);
  if (!match) throw new Error(`Could not find the entries array in ${filename}`);
  const start = source.indexOf('[', match.index + match[0].length);
  if (start === -1) throw new Error(`Could not find the entries array start in ${filename}`);

  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '"' || character === "'" || character === '`') {
      quote = character;
    } else if (character === '[') {
      depth += 1;
    } else if (character === ']') {
      depth -= 1;
      if (depth === 0) return { start, end: index + 1 };
    }
  }
  throw new Error(`Could not find the entries array end in ${filename}`);
}

function replaceCountryEntries(source, entries, filename) {
  const bounds = findEntriesArrayBounds(source, filename);
  return `${source.slice(0, bounds.start)}${formatValue(entries, 2)}${source.slice(bounds.end)}`;
}

function defaultJurisdictionForLanguage(language) {
  const jurisdiction = {
    KR: 'KR',
    VN: 'VN',
    EN: 'US',
    JP: 'JP',
    LA: 'VA',
    ZH: 'TW',
    IT: 'IT',
    PT: 'PT',
    ES: 'MX',
    DE: 'DE'
  }[String(language || '').toUpperCase()];
  const knownJurisdictions = new Set(countryPrayerModules.map(module => module.jurisdiction));
  return jurisdiction && knownJurisdictions.has(jurisdiction) ? jurisdiction : '';
}

function sameStringSet(left, right) {
  const leftSet = new Set(Array.isArray(left) ? left : []);
  const rightSet = new Set(Array.isArray(right) ? right : []);
  return leftSet.size === rightSet.size && [...leftSet].every(value => rightSet.has(value));
}

function prepareCountryModuleSources(data, sources = readCountryModuleSources()) {
  validateData(data);
  const current = runCountryModuleSources(sources);
  const localizedFields = ['titles', 'texts', 'sourceCategory'];
  const existingEntries = new Map();
  const existingJurisdictionsById = new Map();
  const fieldOwners = new Map();

  for (const source of sources) {
    const entries = current.countries[source.jurisdiction].entries;
    existingEntries.set(source.jurisdiction, new Map(entries.map(entry => [String(entry.id || ''), entry])));
    for (const entry of entries) {
      const id = String(entry.id || '');
      if (!id) continue;
      if (!existingJurisdictionsById.has(id)) existingJurisdictionsById.set(id, []);
      existingJurisdictionsById.get(id).push(source.jurisdiction);
      for (const field of localizedFields) {
        Object.keys(entry[field] || {}).forEach(language => {
          fieldOwners.set(`${id}\u0000${field}\u0000${language}`, source.jurisdiction);
        });
      }
    }
  }

  const assignments = new Map(countryPrayerModules.map(module => [module.jurisdiction, new Map()]));
  function assignmentFor(jurisdiction, prayer) {
    const jurisdictionAssignments = assignments.get(jurisdiction);
    if (!jurisdictionAssignments.has(prayer.id)) {
      jurisdictionAssignments.set(prayer.id, {
        prayer,
        titles: {},
        texts: {},
        sourceCategory: {}
      });
    }
    return jurisdictionAssignments.get(prayer.id);
  }

  for (const prayer of data.prayers) {
    let assigned = false;
    for (const field of localizedFields) {
      for (const [language, value] of Object.entries(prayer[field] || {})) {
        const ownerKey = `${prayer.id}\u0000${field}\u0000${language}`;
        const requestedOwner = data.countryOwners && data.countryOwners.fields
          && data.countryOwners.fields[prayer.id]
          && data.countryOwners.fields[prayer.id][field]
          && data.countryOwners.fields[prayer.id][field][language];
        const jurisdiction = requestedOwner || fieldOwners.get(ownerKey) || defaultJurisdictionForLanguage(language);
        if (!jurisdiction || !assignments.has(jurisdiction)) {
          throw new Error(`Cannot choose a country prayer module for ${prayer.id} ${field}.${language}`);
        }
        assignmentFor(jurisdiction, prayer)[field][language] = value;
        assigned = true;
      }
    }

    if (!assigned) {
      const jurisdictions = existingJurisdictionsById.get(prayer.id) || [];
      const jurisdiction = jurisdictions[0];
      if (!jurisdiction) {
        throw new Error(`Cannot choose a country prayer module for ${prayer.id}`);
      }
      assignmentFor(jurisdiction, prayer);
    }
  }

  const nextSources = sources.map(source => {
    const entriesById = existingEntries.get(source.jurisdiction);
    const assignedById = assignments.get(source.jurisdiction);
    const prayersById = new Map(data.prayers.map(prayer => [prayer.id, prayer]));
    const existingOrder = Array.from(entriesById.keys()).filter(id => assignedById.has(id));
    const appendedOrder = data.prayers.map(prayer => prayer.id)
      .filter(id => assignedById.has(id) && !entriesById.has(id));
    const entries = existingOrder.concat(appendedOrder).flatMap(id => {
      const prayer = prayersById.get(id);
      const assignment = assignedById.get(prayer.id);
      if (!assignment) return [];
      const existing = entriesById.get(prayer.id) || {};
      return [{
        ...existing,
        id: prayer.id,
        category: prayer.category,
        titles: assignment.titles,
        texts: assignment.texts,
        sourceCategory: assignment.sourceCategory,
        tags: sameStringSet(existing.tags, prayer.tags)
          ? existing.tags
          : (Array.isArray(prayer.tags) ? prayer.tags.slice() : [])
      }];
    });
    return {
      ...source,
      code: JSON.stringify(entries) === JSON.stringify(current.countries[source.jurisdiction].entries)
        ? source.code
        : replaceCountryEntries(source.code, entries, source.path)
    };
  });

  const roundTrip = runCountryModuleSources(nextSources).data;
  validateData(roundTrip);
  if (roundTrip.prayers.length !== data.prayers.length) {
    throw new Error(`Country module round-trip changed the prayer count (${data.prayers.length} -> ${roundTrip.prayers.length})`);
  }
  for (const prayer of data.prayers) {
    const saved = roundTrip.prayers.find(candidate => candidate.id === prayer.id);
    if (!saved || saved.category !== prayer.category) {
      throw new Error(`Country module round-trip changed prayer ${prayer.id}`);
    }
    for (const field of localizedFields) {
      const before = JSON.stringify(prayer[field] || {});
      const after = JSON.stringify(saved[field] || {});
      if (before !== after) {
        throw new Error(`Country module round-trip changed ${prayer.id} ${field}`);
      }
    }
  }
  return nextSources;
}

function cloneSerializable(value) {
  return JSON.parse(JSON.stringify(value));
}

function prepareCountrySourceMutation(sources, mutate) {
  const current = runCountryModuleSources(sources);
  const entriesByJurisdiction = new Map(sources.map(source => [
    source.jurisdiction,
    cloneSerializable(current.countries[source.jurisdiction].entries || [])
  ]));
  const updated = mutate({ current, entriesByJurisdiction });
  const nextSources = sources.map(source => {
    const entries = entriesByJurisdiction.get(source.jurisdiction) || [];
    const ids = entries.map(entry => String(entry.id || ''));
    if (ids.some((id, index) => !id || ids.indexOf(id) !== index)) {
      throw new Error(`Country mutation produced an empty or duplicate prayer id in ${source.jurisdiction}`);
    }
    return {
      ...source,
      code: JSON.stringify(entries) === JSON.stringify(current.countries[source.jurisdiction].entries)
        ? source.code
        : replaceCountryEntries(source.code, entries, source.path)
    };
  });
  validateData(runCountryModuleSources(nextSources).data);
  return { sources, nextSources, updated };
}

function countryMutationLanguage(current, jurisdiction) {
  const module = current.countries[jurisdiction];
  if (!module) throw Object.assign(new Error(`Unknown jurisdiction: ${jurisdiction}`), { statusCode: 400 });
  return prayerModuleLanguage(module, jurisdiction);
}

function updateCountryEntryTags(entry, categoryLabels) {
  entry.tags = buildTags(entry, categoryLabels);
}

function prepareCountryPrayerUpdate(body, sources = readCountryModuleSources()) {
  const jurisdiction = ensureKnownJurisdiction(body.jurisdiction);
  if (!jurisdiction) throw Object.assign(new Error('Choose a country'), { statusCode: 400 });
  const originalId = String(body.originalId || body.targetId || '').trim();
  const nextId = String(body.id || originalId).trim();
  const category = String(body.category || '').trim();
  const title = normalizeStoredText(body.title || body.prayerName);
  const text = normalizeText(body.text);
  const sourceCategory = normalizeStoredText(body.sourceCategory);
  if (!nextId) throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  if (!category) throw Object.assign(new Error('Choose a category'), { statusCode: 400 });
  if (!title) throw Object.assign(new Error('Prayer title is required'), { statusCode: 400 });

  return prepareCountrySourceMutation(sources, ({ current, entriesByJurisdiction }) => {
    const allEntries = Array.from(entriesByJurisdiction.values()).flat();
    const touchedEntries = new Set();
    const existingOriginal = originalId && allEntries.some(entry => entry.id === originalId);
    if (originalId && !existingOriginal) {
      throw Object.assign(new Error(`Prayer id not found: ${originalId}`), { statusCode: 404 });
    }
    if (!originalId && allEntries.some(entry => entry.id === nextId)) {
      throw Object.assign(new Error(`Prayer id already exists: ${nextId}`), { statusCode: 409 });
    }
    if (originalId && nextId !== originalId && allEntries.some(entry => entry.id === nextId)) {
      throw Object.assign(new Error(`Prayer id already exists: ${nextId}`), { statusCode: 409 });
    }

    if (originalId && nextId !== originalId) {
      for (const entries of entriesByJurisdiction.values()) {
        entries.filter(entry => entry.id === originalId).forEach(entry => {
          entry.id = nextId;
          touchedEntries.add(entry);
        });
      }
    }

    const language = countryMutationLanguage(current, jurisdiction);
    const selectedEntries = entriesByJurisdiction.get(jurisdiction);
    let entry = selectedEntries.find(candidate => candidate.id === nextId);
    if (!entry) {
      entry = { id: nextId, category, titles: {}, texts: {}, sourceCategory: {}, tags: [] };
      selectedEntries.push(entry);
      touchedEntries.add(entry);
    }

    for (const entries of entriesByJurisdiction.values()) {
      entries.filter(candidate => candidate.id === nextId).forEach(candidate => {
        if (candidate.category !== category) {
          candidate.category = category;
          touchedEntries.add(candidate);
        }
        candidate.titles = candidate.titles || {};
        candidate.texts = candidate.texts || {};
        candidate.sourceCategory = candidate.sourceCategory || {};
      });
    }
    entry.titles[language] = title;
    entry.texts[language] = text;
    if (sourceCategory) entry.sourceCategory[language] = sourceCategory;
    else delete entry.sourceCategory[language];
    touchedEntries.add(entry);

    touchedEntries.forEach(candidate => updateCountryEntryTags(candidate, current.data.categoryLabels));
    return {
      previousId: originalId || null,
      id: nextId,
      lang: language,
      jurisdiction,
      title,
      category,
      sourceCategory,
      textLength: text.length
    };
  });
}

function prepareCountryPrayerLanguageDelete(body, sources = readCountryModuleSources()) {
  const jurisdiction = ensureKnownJurisdiction(body.jurisdiction);
  const id = String(body.originalId || body.id || body.targetId || '').trim();
  if (!jurisdiction) throw Object.assign(new Error('Choose a country'), { statusCode: 400 });
  if (!id) throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  return prepareCountrySourceMutation(sources, ({ current, entriesByJurisdiction }) => {
    const language = countryMutationLanguage(current, jurisdiction);
    const entries = entriesByJurisdiction.get(jurisdiction);
    const index = entries.findIndex(entry => entry.id === id);
    if (index === -1) throw Object.assign(new Error(`Prayer id not found in ${jurisdiction}: ${id}`), { statusCode: 404 });
    const entry = entries[index];
    const removed = [];
    for (const field of ['titles', 'texts', 'sourceCategory']) {
      entry[field] = entry[field] || {};
      if (entry[field][language]) {
        delete entry[field][language];
        removed.push(`${field}.${language}`);
      }
    }
    if (!removed.length) throw Object.assign(new Error('Nothing to delete for the selected country'), { statusCode: 409 });
    const hasLocalizedData = ['titles', 'texts', 'sourceCategory']
      .some(field => Object.values(entry[field] || {}).some(value => Boolean(String(value || '').trim())));
    if (hasLocalizedData) updateCountryEntryTags(entry, current.data.categoryLabels);
    else entries.splice(index, 1);
    return { id, lang: language, jurisdiction, category: entry.category, removed };
  });
}

function prepareCountryPrayerEntryDelete(body, sources = readCountryModuleSources()) {
  const id = String(body.originalId || body.id || body.targetId || '').trim();
  if (!id) throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  return prepareCountrySourceMutation(sources, ({ current, entriesByJurisdiction }) => {
    const prayer = current.data.prayers.find(entry => entry.id === id);
    if (!prayer) throw Object.assign(new Error(`Prayer id not found: ${id}`), { statusCode: 404 });
    let removedCountries = 0;
    for (const entries of entriesByJurisdiction.values()) {
      const nextEntries = entries.filter(entry => entry.id !== id);
      removedCountries += entries.length - nextEntries.length;
      entries.splice(0, entries.length, ...nextEntries);
    }
    return {
      id,
      title: bestTitle(prayer, body.lang || 'KR'),
      category: prayer.category,
      removedCountries
    };
  });
}

function prepareCountryPrayerCategoryUpdate(body, sources = readCountryModuleSources()) {
  const id = String(body.originalId || body.id || body.targetId || '').trim();
  const category = String(body.category || '').trim();
  if (!id) throw Object.assign(new Error('Prayer id is required'), { statusCode: 400 });
  if (!category) throw Object.assign(new Error('Choose a category'), { statusCode: 400 });
  return prepareCountrySourceMutation(sources, ({ current, entriesByJurisdiction }) => {
    let previousCategory = '';
    let changedCountries = 0;
    for (const entries of entriesByJurisdiction.values()) {
      entries.filter(entry => entry.id === id).forEach(entry => {
        previousCategory = previousCategory || entry.category;
        entry.category = category;
        updateCountryEntryTags(entry, current.data.categoryLabels);
        changedCountries += 1;
      });
    }
    if (!changedCountries) throw Object.assign(new Error(`Prayer id not found: ${id}`), { statusCode: 404 });
    return { id, previousCategory, category, changedCountries };
  });
}

function prepareCountryPrayerMerge(body, sources = readCountryModuleSources()) {
  const targetId = String(body.targetId || '').trim();
  const sourceId = String(body.sourceId || '').trim();
  const overwrite = Boolean(body.overwrite);
  const removeSource = body.removeSource !== false;
  if (!targetId || !sourceId) throw Object.assign(new Error('Target and source ids are required'), { statusCode: 400 });
  if (targetId === sourceId) throw Object.assign(new Error('Target and source must be different'), { statusCode: 400 });
  return prepareCountrySourceMutation(sources, ({ current, entriesByJurisdiction }) => {
    const targetPrayer = current.data.prayers.find(prayer => prayer.id === targetId);
    const sourcePrayer = current.data.prayers.find(prayer => prayer.id === sourceId);
    if (!targetPrayer) throw Object.assign(new Error(`Target id not found: ${targetId}`), { statusCode: 404 });
    if (!sourcePrayer) throw Object.assign(new Error(`Source id not found: ${sourceId}`), { statusCode: 404 });
    const copied = [];
    for (const [jurisdiction, entries] of entriesByJurisdiction) {
      const source = entries.find(entry => entry.id === sourceId);
      if (!source) continue;
      let target = entries.find(entry => entry.id === targetId);
      if (!target) {
        target = { id: targetId, category: targetPrayer.category, titles: {}, texts: {}, sourceCategory: {}, tags: [] };
        entries.push(target);
      }
      for (const field of ['titles', 'texts', 'sourceCategory']) {
        target[field] = target[field] || {};
        for (const [language, value] of Object.entries(source[field] || {})) {
          if (!value || (!overwrite && target[field][language])) continue;
          target[field][language] = value;
          copied.push(`${jurisdiction}:${field}.${language}`);
        }
      }
      updateCountryEntryTags(target, current.data.categoryLabels);
      if (removeSource) entries.splice(entries.indexOf(source), 1);
    }
    if (!copied.length && !removeSource) {
      throw Object.assign(new Error('Nothing to merge: target already has all data from source'), { statusCode: 409 });
    }
    return { targetId, sourceId, copied, removedSource: removeSource };
  });
}

function savePreparedCountryMutation(prepared) {
  const changed = prepared.nextSources.filter((source, index) => source.code !== prepared.sources[index].code);
  if (!changed.length) return '';
  const backupRoot = path.join(root, 'tmp', `prayer-data-backup-${timestamp()}`);
  const backups = [];
  fs.mkdirSync(backupRoot, { recursive: true });
  try {
    for (const source of changed) {
      const relativePath = path.relative(root, source.path);
      const backup = path.join(backupRoot, relativePath);
      fs.mkdirSync(path.dirname(backup), { recursive: true });
      fs.copyFileSync(source.path, backup);
      backups.push({ target: source.path, backup });
      const nextPath = `${source.path}.next-${process.pid}`;
      fs.writeFileSync(nextPath, source.code, 'utf8');
      fs.renameSync(nextPath, source.path);
    }
    validateData(runCountryModuleSources(readCountryModuleSources()).data);
    return backupRoot;
  } catch (error) {
    for (const item of backups.reverse()) fs.copyFileSync(item.backup, item.target);
    throw error;
  }
}

function saveCountryPrayerData(data) {
  const sources = readCountryModuleSources();
  const nextSources = prepareCountryModuleSources(data, sources);
  const changed = nextSources.filter((source, index) => source.code !== sources[index].code);
  if (!changed.length) return '';

  const backupRoot = path.join(root, 'tmp', `prayer-data-backup-${timestamp()}`);
  const backups = [];
  fs.mkdirSync(backupRoot, { recursive: true });
  try {
    for (const source of changed) {
      const relativePath = path.relative(root, source.path);
      const backup = path.join(backupRoot, relativePath);
      fs.mkdirSync(path.dirname(backup), { recursive: true });
      fs.copyFileSync(source.path, backup);
      backups.push({ target: source.path, backup });

      const nextPath = `${source.path}.next-${process.pid}`;
      fs.writeFileSync(nextPath, source.code, 'utf8');
      fs.renameSync(nextPath, source.path);
    }
    const saved = loadPrayerData();
    validateData(saved);
    if (saved.prayers.length !== data.prayers.length) {
      throw new Error(`Saved country modules changed the prayer count (${data.prayers.length} -> ${saved.prayers.length})`);
    }
    return backupRoot;
  } catch (error) {
    for (const item of backups.reverse()) fs.copyFileSync(item.backup, item.target);
    throw error;
  }
}

function savePrayerData(data) {
  return usesCountryModules ? saveCountryPrayerData(data) : saveLegacyPrayerData(data);
}

function validateGeneratedOutput(output) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(output, sandbox, { filename: 'generated prayer_data.js' });
  validateData({
    categoryLabels: sandbox.prayerCategoryLabels || {},
    prayers: sandbox.prayerData || []
  });
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
}

function formatValue(value, depth) {
  const indent = '  '.repeat(depth);
  const childIndent = '  '.repeat(depth + 1);

  if (typeof value === 'string') return quoteString(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (value === null || value === undefined) return 'null';

  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    return `[\n${value.map(item => `${childIndent}${formatValue(item, depth + 1)}`).join(',\n')}\n${indent}]`;
  }

  const entries = Object.entries(value);
  if (!entries.length) return '{}';
  return `{\n${entries.map(([key, item]) => `${childIndent}${formatKey(key)}: ${formatValue(item, depth + 1)}`).join(',\n')}\n${indent}}`;
}

function formatKey(key) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : quoteString(key);
}

function quoteString(value) {
  return JSON.stringify(String(value).normalize('NFC'))
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function jsonResponse(res, statusCode, body) {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString('utf8');
  if (!body.trim()) return {};
  return JSON.parse(body);
}

function handleError(res, error) {
  const statusCode = error.statusCode || 500;
  jsonResponse(res, statusCode, {
    ok: false,
    error: error.message || String(error),
    ...(error.payload || {})
  });
}

function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');

      if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(prayerEditorHtmlPath, 'utf8'));
        return;
      }

      if (req.method === 'GET' && url.pathname === '/firebase-upload-client.js') {
        serveFirebaseUploadClient(res);
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/state') {
        const loaded = prayerEditorState();
        const data = loaded.data;
        jsonResponse(res, 200, {
          ok: true,
          file: prayerDataDisplayPath,
          ...(usesCountryModules ? { countryModules: countryPrayerModules.length } : {}),
          languages: LANGUAGES,
          languageNames: LANGUAGE_NAMES,
          countries: loaded.countries,
          categories: allCategories(data.categoryLabels, data.prayers),
          categoryLabels: data.categoryLabels,
          prayers: data.prayers.map(prayer => publicPrayer(prayer, data.categoryLabels, data.countryOwners))
        });
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/prayers') {
        const loaded = prayerEditorState();
        const jurisdiction = url.searchParams.get('country') || loaded.countries[0]?.jurisdiction || '';
        jsonResponse(res, 200, {
          ok: true,
          jurisdiction,
          prayers: prayersForCountry(loaded, jurisdiction, url.searchParams.get('language'))
        });
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/firebase-export') {
        jsonResponse(res, 200, buildFirebaseUploadPayload({
          collectionName: 'prayer_data',
          label: '다국어 기도문',
          items: firebasePrayerItems(),
          idPrefix: 'prayer'
        }));
        return;
      }

      if (req.method === 'GET' && url.pathname === '/api/prayer') {
        const country = url.searchParams.get('country');
        const loaded = country ? prayerEditorState() : null;
        const data = loaded ? loaded.data : loadPrayerData();
        jsonResponse(res, 200, {
          ok: true,
          prayer: loaded
            ? prayerDetailForCountry(loaded, country, url.searchParams.get('id'), url.searchParams.get('lang'))
            : prayerDetail(data, url.searchParams.get('id'), url.searchParams.get('lang'))
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/suggest') {
        const body = await readJson(req);
        const data = loadPrayerData();
        jsonResponse(res, 200, {
          ok: true,
          ...findCandidates({
            prayers: data.prayers,
            categoryLabels: data.categoryLabels,
            language: body.language,
            prayerName: body.prayerName,
            category: body.category
          })
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/update') {
        const body = await readJson(req);
        let updated;
        let backupPath;
        if (usesCountryModules && body.jurisdiction) {
          const prepared = prepareCountryPrayerUpdate(body);
          updated = prepared.updated;
          backupPath = savePreparedCountryMutation(prepared);
        } else {
          const data = loadPrayerData();
          updated = updatePrayerDetail(data, body);
          backupPath = savePrayerData(data);
        }
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/delete-language') {
        const body = await readJson(req);
        let updated;
        let backupPath;
        if (usesCountryModules && body.jurisdiction) {
          const prepared = prepareCountryPrayerLanguageDelete(body);
          updated = prepared.updated;
          backupPath = savePreparedCountryMutation(prepared);
        } else {
          const data = loadPrayerData();
          updated = deletePrayerLanguage(data, body);
          backupPath = savePrayerData(data);
        }
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/delete-entry') {
        const body = await readJson(req);
        let updated;
        let backupPath;
        if (usesCountryModules) {
          const prepared = prepareCountryPrayerEntryDelete(body);
          updated = prepared.updated;
          backupPath = savePreparedCountryMutation(prepared);
        } else {
          const data = loadPrayerData();
          updated = deletePrayerEntry(data, body);
          backupPath = savePrayerData(data);
        }
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/insert') {
        const body = await readJson(req);
        const data = loadPrayerData();
        const updated = upsertPrayerText(data, body);
        const backupPath = savePrayerData(data);
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/title') {
        const body = await readJson(req);
        const data = loadPrayerData();
        const updated = updatePrayerTitle(data, body);
        const backupPath = savePrayerData(data);
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/category') {
        const body = await readJson(req);
        let updated;
        let backupPath;
        if (usesCountryModules) {
          const prepared = prepareCountryPrayerCategoryUpdate(body);
          updated = prepared.updated;
          backupPath = savePreparedCountryMutation(prepared);
        } else {
          const data = loadPrayerData();
          updated = updatePrayerCategory(data, body);
          backupPath = savePrayerData(data);
        }
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      if (req.method === 'POST' && url.pathname === '/api/merge') {
        const body = await readJson(req);
        let updated;
        let backupPath;
        if (usesCountryModules) {
          const prepared = prepareCountryPrayerMerge(body);
          updated = prepared.updated;
          backupPath = savePreparedCountryMutation(prepared);
        } else {
          const data = loadPrayerData();
          updated = mergePrayerEntries(data, body);
          backupPath = savePrayerData(data);
        }
        jsonResponse(res, 200, {
          ok: true,
          updated,
          backupPath,
          file: prayerDataDisplayPath
        });
        return;
      }

      jsonResponse(res, 404, { ok: false, error: 'Not found' });
    } catch (error) {
      handleError(res, error);
    }
  });
}

function listenWithFallback(server, host, port, attempts = 20) {
  return new Promise((resolve, reject) => {
    let nextPort = port;

    function tryListen() {
      const desiredPort = nextPort;
      server.once('error', error => {
        if (error.code === 'EADDRINUSE' && attempts > 0 && desiredPort !== 0) {
          attempts -= 1;
          nextPort += 1;
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
  <title>Prayer Data Insert Tool</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f6f7f9;
      --panel: #ffffff;
      --text: #1d2430;
      --muted: #637083;
      --line: #d8dde6;
      --accent: #0f766e;
      --accent-strong: #115e59;
      --danger: #b42318;
      --warning: #9a6700;
      --ok: #087443;
      --focus: rgba(15, 118, 110, 0.22);
      font-family: "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-size: 15px;
      line-height: 1.45;
    }

    header {
      border-bottom: 1px solid var(--line);
      background: #ffffff;
    }

    .topbar {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      padding: 18px 0 14px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
    }

    h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0;
    }

    .file-path {
      margin-top: 4px;
      color: var(--muted);
      font-size: 13px;
      overflow-wrap: anywhere;
    }

    main {
      width: min(1180px, calc(100% - 32px));
      margin: 22px auto 44px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 390px;
      gap: 18px;
      align-items: start;
    }

    section {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
    }

    .editor {
      padding: 18px;
    }

    .grid {
      display: grid;
      grid-template-columns: 160px minmax(0, 1fr);
      gap: 12px 14px;
      align-items: center;
    }

    label {
      color: #303b4c;
      font-weight: 650;
    }

    input,
    select,
    textarea,
    button {
      font: inherit;
    }

    input,
    select,
    textarea {
      width: 100%;
      border: 1px solid #c6ceda;
      border-radius: 6px;
      background: #fff;
      color: var(--text);
      outline: none;
    }

    input,
    select {
      min-height: 40px;
      padding: 7px 10px;
    }

    textarea {
      min-height: 360px;
      resize: vertical;
      padding: 12px;
      font-family: Consolas, "Cascadia Mono", "Malgun Gothic", monospace;
      line-height: 1.55;
      white-space: pre-wrap;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--focus);
    }

    .text-row {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 160px minmax(0, 1fr);
      gap: 12px 14px;
      align-items: start;
      margin-top: 4px;
    }

    .actions {
      margin-top: 16px;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      flex-wrap: wrap;
    }

    button {
      border: 1px solid transparent;
      border-radius: 6px;
      min-height: 38px;
      padding: 7px 13px;
      cursor: pointer;
      color: #fff;
      background: var(--accent);
      font-weight: 650;
    }

    button:hover {
      background: var(--accent-strong);
    }

    button.secondary {
      color: var(--text);
      background: #fff;
      border-color: #b8c1cf;
    }

    button.secondary:hover {
      background: #f1f4f8;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .side {
      display: grid;
      gap: 14px;
    }

    .panel-title {
      padding: 13px 14px;
      border-bottom: 1px solid var(--line);
      font-weight: 750;
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    .panel-body {
      padding: 12px;
    }

    .status {
      min-height: 42px;
      padding: 11px 12px;
      border-radius: 6px;
      background: #f3f6fa;
      color: var(--muted);
      overflow-wrap: anywhere;
    }

    .status.ok {
      background: #ecfdf3;
      color: var(--ok);
    }

    .status.warn {
      background: #fff7e6;
      color: var(--warning);
    }

    .status.error {
      background: #fff1f0;
      color: var(--danger);
    }

    .matches {
      display: grid;
      gap: 8px;
      max-height: 540px;
      overflow: auto;
    }

    .match {
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 10px;
      background: #fff;
      display: grid;
      gap: 8px;
      min-width: 0;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .match.selected {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--focus);
    }

    .match-head {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: start;
    }

    .match-title {
      font-weight: 750;
      overflow-wrap: anywhere;
    }

    .meta {
      color: var(--muted);
      font-size: 13px;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      min-height: 24px;
      border-radius: 999px;
      padding: 2px 8px;
      background: #e8f4f3;
      color: #0f5f58;
      font-size: 12px;
      font-weight: 750;
      white-space: nowrap;
    }

    .empty {
      color: var(--muted);
      padding: 4px 2px;
    }

    .merge-grid {
      display: grid;
      gap: 9px;
    }

    .merge-search-block {
      display: grid;
      gap: 7px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--line);
    }

    .merge-label-row {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: baseline;
    }

    .merge-search-row {
      display: grid;
      grid-template-columns: 78px minmax(0, 1fr) auto;
      gap: 7px;
      align-items: center;
    }

    .merge-search-row button {
      white-space: nowrap;
    }

    .merge-matches {
      display: grid;
      gap: 6px;
      max-height: 210px;
      overflow: auto;
    }

    .merge-match {
      border: 1px solid var(--line);
      border-radius: 7px;
      padding: 8px;
      background: #fff;
      color: var(--text);
      display: grid;
      gap: 6px;
      text-align: left;
      min-width: 0;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .merge-match.selected {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--focus);
    }

    .merge-pair {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .check-row {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #303b4c;
      font-weight: 650;
    }

    .check-row input {
      width: auto;
      min-height: 0;
    }

    @media (max-width: 860px) {
      main {
        grid-template-columns: 1fr;
      }

      .topbar {
        align-items: flex-start;
        flex-direction: column;
      }

      .grid,
      .text-row {
        grid-template-columns: 1fr;
      }

      .merge-search-row {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="topbar">
      <div>
        <h1>Prayer Data Insert Tool</h1>
        <div class="file-path" id="filePath"></div>
      </div>
      <button class="secondary" id="reloadButton" type="button">새로고침</button>
    </div>
  </header>

  <main>
    <section class="editor" aria-label="기도문 입력">
      <div class="grid">
        <label for="language">검색 언어</label>
        <select id="language">
          <option value="">자동</option>
        </select>

        <label for="targetLanguage">저장/수정 언어</label>
        <select id="targetLanguage">
          <option value="">자동</option>
        </select>

        <label for="category">기도문 카테고리</label>
        <select id="category"></select>

        <label for="prayerName">기도명</label>
        <input id="prayerName" autocomplete="off">

        <label for="sourceCategory">출처 분류</label>
        <input id="sourceCategory" autocomplete="off">

        <div class="text-row">
          <label for="prayerText">기도문</label>
          <textarea id="prayerText" spellcheck="false"></textarea>
        </div>
      </div>

      <div class="actions">
        <button class="secondary" id="suggestButton" type="button">후보 찾기</button>
        <button class="secondary" id="titleButton" type="button">기도명 수정</button>
        <button class="secondary" id="categoryButton" type="button">카테고리 변경</button>
        <button id="saveButton" type="button">기도명+기도문 저장</button>
      </div>
    </section>

    <div class="side">
      <section aria-label="상태">
        <div class="panel-title">상태</div>
        <div class="panel-body">
          <div class="status" id="status">대기 중</div>
        </div>
      </section>

      <section aria-label="후보">
        <div class="panel-title">
          <span>후보</span>
          <span class="meta" id="matchCount">0</span>
        </div>
        <div class="panel-body">
          <div class="matches" id="matches"></div>
        </div>
      </section>

      <section aria-label="병합">
        <div class="panel-title">병합</div>
        <div class="panel-body">
          <div class="merge-grid">
            <div class="merge-search-block">
              <div class="merge-label-row">
                <label for="mergeTargetSearch">기준 항목 검색</label>
                <span class="meta">남길 항목</span>
              </div>
              <div class="merge-search-row">
                <select id="mergeTargetSearchLang"></select>
                <input id="mergeTargetSearch" autocomplete="off" placeholder="기도명 검색">
                <button class="secondary" id="mergeTargetSearchButton" type="button">검색</button>
              </div>
              <div class="merge-matches" id="mergeTargetMatches"></div>
            </div>

            <div class="merge-search-block">
              <div class="merge-label-row">
                <label for="mergeSourceSearch">합칠 항목 검색</label>
                <span class="meta">가져올 항목</span>
              </div>
              <div class="merge-search-row">
                <select id="mergeSourceSearchLang"></select>
                <input id="mergeSourceSearch" autocomplete="off" placeholder="기도명 검색">
                <button class="secondary" id="mergeSourceSearchButton" type="button">검색</button>
              </div>
              <div class="merge-matches" id="mergeSourceMatches"></div>
            </div>

            <div class="merge-pair">
              <div>
                <label for="mergeTargetId">기준 항목 ID</label>
                <input id="mergeTargetId" autocomplete="off">
              </div>
              <div>
                <label for="mergeSourceId">합칠 항목 ID</label>
                <input id="mergeSourceId" autocomplete="off">
              </div>
            </div>

            <div class="merge-pair">
              <div>
                <label for="mergeSourceLang">가져올 언어</label>
                <select id="mergeSourceLang"></select>
              </div>
              <div>
                <label for="mergeTargetLang">저장 언어</label>
                <select id="mergeTargetLang"></select>
              </div>
            </div>

            <label class="check-row" for="mergeOverwrite">
              <input id="mergeOverwrite" type="checkbox">
              <span>덮어쓰기</span>
            </label>

            <label class="check-row" for="mergeRemoveSource">
              <input id="mergeRemoveSource" type="checkbox" checked>
              <span>원본 제거</span>
            </label>

            <button class="secondary" id="mergeButton" type="button">병합</button>
          </div>
        </div>
      </section>
    </div>
  </main>

  <script>
    const state = {
      languages: [],
      categories: [],
      categoryLabels: {},
      prayers: [],
      selected: null,
      suggestTimer: 0
    };

    const el = {
      filePath: document.getElementById('filePath'),
      reloadButton: document.getElementById('reloadButton'),
      language: document.getElementById('language'),
      targetLanguage: document.getElementById('targetLanguage'),
      category: document.getElementById('category'),
      prayerName: document.getElementById('prayerName'),
      sourceCategory: document.getElementById('sourceCategory'),
      prayerText: document.getElementById('prayerText'),
      suggestButton: document.getElementById('suggestButton'),
      titleButton: document.getElementById('titleButton'),
      categoryButton: document.getElementById('categoryButton'),
      saveButton: document.getElementById('saveButton'),
      status: document.getElementById('status'),
      matches: document.getElementById('matches'),
      matchCount: document.getElementById('matchCount'),
      mergeTargetSearchLang: document.getElementById('mergeTargetSearchLang'),
      mergeTargetSearch: document.getElementById('mergeTargetSearch'),
      mergeTargetSearchButton: document.getElementById('mergeTargetSearchButton'),
      mergeTargetMatches: document.getElementById('mergeTargetMatches'),
      mergeSourceSearchLang: document.getElementById('mergeSourceSearchLang'),
      mergeSourceSearch: document.getElementById('mergeSourceSearch'),
      mergeSourceSearchButton: document.getElementById('mergeSourceSearchButton'),
      mergeSourceMatches: document.getElementById('mergeSourceMatches'),
      mergeTargetId: document.getElementById('mergeTargetId'),
      mergeSourceId: document.getElementById('mergeSourceId'),
      mergeSourceLang: document.getElementById('mergeSourceLang'),
      mergeTargetLang: document.getElementById('mergeTargetLang'),
      mergeOverwrite: document.getElementById('mergeOverwrite'),
      mergeRemoveSource: document.getElementById('mergeRemoveSource'),
      mergeButton: document.getElementById('mergeButton')
    };

    async function api(path, options = {}) {
      const response = await fetch(path, {
        headers: { 'content-type': 'application/json' },
        ...options
      });
      const body = await response.json();
      if (!response.ok || !body.ok) {
        const error = new Error(body.error || 'Request failed');
        error.body = body;
        throw error;
      }
      return body;
    }

    function setStatus(message, tone = '') {
      el.status.textContent = message;
      el.status.className = 'status' + (tone ? ' ' + tone : '');
    }

    function categoryLabel(key, lang) {
      const labels = state.categoryLabels[key] || {};
      return labels[lang] || labels.KR || labels.EN || key;
    }

    function fillSelects() {
      const currentLang = el.language.value;
      const currentTargetLang = el.targetLanguage.value;
      const currentCategory = el.category.value;
      const currentMergeTargetSearchLang = el.mergeTargetSearchLang.value;
      const currentMergeSourceSearchLang = el.mergeSourceSearchLang.value;
      const currentMergeSourceLang = el.mergeSourceLang.value;
      const currentMergeTargetLang = el.mergeTargetLang.value;
      const autoLanguageOptions = '<option value="">자동</option>' + state.languages
        .map(lang => '<option value="' + escapeHtml(lang) + '">' + escapeHtml(lang) + '</option>')
        .join('');

      el.language.innerHTML = autoLanguageOptions;

      el.targetLanguage.innerHTML = autoLanguageOptions;

      el.mergeTargetSearchLang.innerHTML = autoLanguageOptions;

      el.mergeSourceSearchLang.innerHTML = autoLanguageOptions;

      el.mergeSourceLang.innerHTML = '<option value="">선택</option>' + state.languages
        .map(lang => '<option value="' + escapeHtml(lang) + '">' + escapeHtml(lang) + '</option>')
        .join('');

      el.mergeTargetLang.innerHTML = '<option value="">같게</option>' + state.languages
        .map(lang => '<option value="' + escapeHtml(lang) + '">' + escapeHtml(lang) + '</option>')
        .join('');

      el.category.innerHTML = '<option value="">전체</option>' + state.categories
        .map(category => '<option value="' + escapeHtml(category) + '">' + escapeHtml(categoryLabel(category, 'KR')) + ' (' + escapeHtml(category) + ')</option>')
        .join('');

      el.language.value = currentLang;
      el.targetLanguage.value = currentTargetLang;
      el.category.value = currentCategory;
      el.mergeTargetSearchLang.value = currentMergeTargetSearchLang;
      el.mergeSourceSearchLang.value = currentMergeSourceSearchLang;
      el.mergeSourceLang.value = currentMergeSourceLang;
      el.mergeTargetLang.value = currentMergeTargetLang;
    }

    function renderMatches(matches) {
      state.selected = null;
      el.matchCount.textContent = String(matches.length);

      if (!matches.length) {
        el.matches.innerHTML = '<div class="empty">일치 항목 없음</div>';
        return;
      }

      el.matches.innerHTML = matches.map((match, index) => {
        const titles = Object.entries(match.allTitles || {})
          .filter(([, value]) => value)
          .map(([lang, value]) => lang + ': ' + value)
          .join(' / ');
        return [
          '<button class="match secondary" type="button" data-index="' + index + '">',
          '  <div class="match-head">',
          '    <span class="match-title">' + escapeHtml(match.displayTitle || match.title) + '</span>',
          '    <span class="badge">' + escapeHtml(match.lang) + '</span>',
          '  </div>',
          '  <span class="meta">' + escapeHtml(match.id) + ' · ' + escapeHtml(match.categoryLabel || match.category) + ' · ' + (match.hasText ? match.textLength + '자' : '빈 자리') + '</span>',
          '  <span class="meta">' + escapeHtml(titles) + '</span>',
          '</button>'
        ].join('');
      }).join('');

      [...el.matches.querySelectorAll('.match')].forEach(button => {
        button.addEventListener('click', () => {
          clearSuggestTimer();
          [...el.matches.querySelectorAll('.match')].forEach(item => item.classList.remove('selected'));
          button.classList.add('selected');
          state.selected = matches[Number(button.dataset.index)];
          el.mergeTargetId.value = state.selected.id;
          el.category.value = state.selected.category;
          if (!el.targetLanguage.value) {
            el.targetLanguage.value = state.selected.lang;
          }
          fillTitleFromSelected();
          if (state.selected.sourceCategory && !el.sourceCategory.value.trim()) {
            el.sourceCategory.value = state.selected.sourceCategory;
          }
          setStatus(state.selected.id + ' 선택됨', 'ok');
        });
      });
    }

    function getMergeSearchParts(kind) {
      const isTarget = kind === 'target';
      return {
        label: isTarget ? '기준' : '합칠',
        searchLang: isTarget ? el.mergeTargetSearchLang : el.mergeSourceSearchLang,
        search: isTarget ? el.mergeTargetSearch : el.mergeSourceSearch,
        matches: isTarget ? el.mergeTargetMatches : el.mergeSourceMatches
      };
    }

    function renderMergeMatches(kind, matches) {
      const parts = getMergeSearchParts(kind);

      if (!matches.length) {
        parts.matches.innerHTML = '<div class="empty">검색 결과 없음</div>';
        return;
      }

      parts.matches.innerHTML = matches.map((match, index) => {
        const titles = Object.entries(match.allTitles || {})
          .filter(([, value]) => value)
          .map(([lang, value]) => lang + ': ' + value)
          .join(' / ');
        return [
          '<button class="merge-match secondary" type="button" data-index="' + index + '">',
          '  <div class="match-head">',
          '    <span class="match-title">' + escapeHtml(match.displayTitle || match.title) + '</span>',
          '    <span class="badge">' + escapeHtml(match.lang) + '</span>',
          '  </div>',
          '  <span class="meta">' + escapeHtml(match.id) + ' · ' + escapeHtml(match.categoryLabel || match.category) + ' · ' + (match.hasText ? match.textLength + '자' : '빈 자리') + '</span>',
          '  <span class="meta">' + escapeHtml(titles) + '</span>',
          '</button>'
        ].join('');
      }).join('');

      [...parts.matches.querySelectorAll('.merge-match')].forEach(button => {
        button.addEventListener('click', () => {
          const match = matches[Number(button.dataset.index)];
          [...parts.matches.querySelectorAll('.merge-match')].forEach(item => item.classList.remove('selected'));
          button.classList.add('selected');

          if (kind === 'target') {
            el.mergeTargetId.value = match.id;
            setStatus('기준 항목 선택됨: ' + match.id, 'ok');
            return;
          }

          el.mergeSourceId.value = match.id;
          el.mergeSourceLang.value = match.lang;
          if (!el.mergeTargetLang.value) {
            el.mergeTargetLang.value = match.lang;
          }
          setStatus('합칠 항목 선택됨: ' + match.id + ' / ' + match.lang, 'ok');
        });
      });
    }

    async function searchMergeCandidate(kind) {
      clearSuggestTimer();
      const parts = getMergeSearchParts(kind);
      const prayerName = parts.search.value.trim();
      if (!prayerName) {
        renderMergeMatches(kind, []);
        setStatus(parts.label + ' 항목 검색어 필요', 'warn');
        return;
      }

      const body = await api('/api/suggest', {
        method: 'POST',
        body: JSON.stringify({
          language: parts.searchLang.value,
          category: '',
          prayerName
        })
      });

      const matches = body.exact.length ? body.exact : body.suggestions;
      renderMergeMatches(kind, matches);

      if (body.exact.length === 1) {
        const first = parts.matches.querySelector('.merge-match');
        if (first) first.click();
      } else if (matches.length) {
        setStatus(parts.label + ' 항목 후보 ' + matches.length + '개', 'warn');
      } else {
        setStatus(parts.label + ' 항목 후보 없음', 'warn');
      }
    }

    function getTargetLanguage() {
      return el.targetLanguage.value || el.language.value || (state.selected && state.selected.lang) || '';
    }

    function fillTitleFromSelected() {
      if (!state.selected) return;
      const lang = getTargetLanguage();
      el.prayerName.value = (state.selected.allTitles && state.selected.allTitles[lang]) || state.selected.title || '';
    }

    async function loadState() {
      setStatus('불러오는 중');
      const body = await api('/api/state');
      state.languages = body.languages;
      state.categories = body.categories;
      state.categoryLabels = body.categoryLabels;
      state.prayers = body.prayers;
      el.filePath.textContent = body.file;
      fillSelects();
      renderMatches([]);
      renderMergeMatches('target', []);
      renderMergeMatches('source', []);
      setStatus(state.prayers.length + '개 항목 로드됨', 'ok');
    }

    async function suggest() {
      clearSuggestTimer();
      const prayerName = el.prayerName.value.trim();
      if (!prayerName) {
        renderMatches([]);
        setStatus('기도명 필요', 'warn');
        return;
      }

      const body = await api('/api/suggest', {
        method: 'POST',
        body: JSON.stringify({
          language: el.language.value,
          category: el.category.value,
          prayerName
        })
      });

      const matches = body.exact.length ? body.exact : body.suggestions;
      renderMatches(matches);
      if (body.exact.length === 1) {
        state.selected = body.exact[0];
        el.mergeTargetId.value = state.selected.id;
        if (!el.targetLanguage.value) {
          el.targetLanguage.value = state.selected.lang;
        }
        fillTitleFromSelected();
        const first = el.matches.querySelector('.match');
        if (first) first.classList.add('selected');
        setStatus(body.exact[0].id + ' 정확히 찾음', 'ok');
      } else if (matches.length) {
        setStatus(matches.length + '개 후보', 'warn');
      } else {
        setStatus('비슷한 항목 없음', 'warn');
      }
    }

    async function save() {
      clearSuggestTimer();
      const payload = {
        language: el.language.value,
        category: el.category.value,
        prayerName: el.prayerName.value.trim(),
        sourceCategory: el.sourceCategory.value.trim(),
        text: el.prayerText.value,
        targetId: state.selected && state.selected.id,
        targetLang: getTargetLanguage()
      };

      if (!payload.prayerName) {
        setStatus('기도명 필요', 'warn');
        return;
      }

      if (!payload.text.trim()) {
        setStatus('기도문 필요', 'warn');
        return;
      }

      setStatus('저장 중');
      try {
        const body = await api('/api/insert', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        await loadState();
        setStatus(body.updated.id + ' / ' + body.updated.lang + ' 저장됨', 'ok');
      } catch (error) {
        if (error.body && error.body.suggestions) {
          renderMatches(error.body.suggestions);
          setStatus(error.body.reason === 'multiple_exact_matches' ? '항목 선택 필요' : '비슷한 항목 선택 필요', 'warn');
          return;
        }
        setStatus(error.message, 'error');
      }
    }

    async function editTitle() {
      clearSuggestTimer();
      const payload = {
        language: el.language.value,
        prayerName: el.prayerName.value.trim(),
        title: el.prayerName.value.trim(),
        targetId: state.selected && state.selected.id,
        targetLang: getTargetLanguage()
      };

      if (!payload.prayerName) {
        setStatus('기도명 필요', 'warn');
        return;
      }

      setStatus('기도명 저장 중');
      try {
        const body = await api('/api/title', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        await loadState();
        setStatus(body.updated.id + ' / ' + body.updated.lang + ' 기도명 저장됨', 'ok');
      } catch (error) {
        if (error.body && error.body.suggestions) {
          renderMatches(error.body.suggestions);
          setStatus('수정할 항목 선택 필요', 'warn');
          return;
        }
        setStatus(error.message, 'error');
      }
    }

    async function changeCategory() {
      clearSuggestTimer();
      const payload = {
        language: el.language.value,
        category: el.category.value,
        prayerName: el.prayerName.value.trim(),
        targetId: state.selected && state.selected.id,
        targetLang: getTargetLanguage()
      };

      if (!payload.prayerName && !payload.targetId) {
        setStatus('기도명 또는 후보 선택 필요', 'warn');
        return;
      }

      if (!payload.category) {
        setStatus('카테고리 필요', 'warn');
        return;
      }

      setStatus('카테고리 변경 중');
      try {
        const body = await api('/api/category', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        await loadState();
        setStatus(body.updated.id + ' 카테고리 변경됨: ' + body.updated.category, 'ok');
      } catch (error) {
        if (error.body && error.body.suggestions) {
          renderMatches(error.body.suggestions);
          setStatus('변경할 항목 선택 필요', 'warn');
          return;
        }
        setStatus(error.message, 'error');
      }
    }

    async function mergeSelected() {
      clearSuggestTimer();
      const payload = {
        targetId: el.mergeTargetId.value.trim() || (state.selected && state.selected.id),
        sourceId: el.mergeSourceId.value.trim(),
        sourceLang: el.mergeSourceLang.value,
        targetLang: el.mergeTargetLang.value || el.mergeSourceLang.value,
        overwrite: el.mergeOverwrite.checked,
        removeSource: el.mergeRemoveSource.checked
      };

      if (!payload.targetId) {
        setStatus('기준 항목 필요', 'warn');
        return;
      }

      if (!payload.sourceId) {
        setStatus('합칠 항목 필요', 'warn');
        return;
      }

      if (!payload.sourceLang) {
        setStatus('가져올 언어 필요', 'warn');
        return;
      }

      setStatus('병합 중');
      try {
        const body = await api('/api/merge', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        await loadState();
        el.mergeTargetId.value = body.updated.targetId;
        el.mergeSourceId.value = '';
        setStatus(body.updated.targetId + ' 병합됨: ' + body.updated.copied.join(', '), 'ok');
      } catch (error) {
        setStatus(error.message, 'error');
      }
    }

    function insertAtCursor(input, value) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = input.value.slice(0, start) + value + input.value.slice(end);
      input.selectionStart = input.selectionEnd = start + value.length;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function escapeTextareaLineBreaks(input) {
      if (!input.value.includes('\n')) return;
      const cursor = input.selectionStart;
      const beforeCursor = input.value.slice(0, cursor);
      const escapedBeforeCursor = beforeCursor.replace(/\n/g, '\\n');
      input.value = input.value.replace(/\n/g, '\\n');
      input.selectionStart = input.selectionEnd = escapedBeforeCursor.length;
    }

    function debounceSuggest() {
      clearTimeout(state.suggestTimer);
      state.suggestTimer = setTimeout(() => {
        suggest().catch(error => setStatus(error.message, 'error'));
      }, 250);
    }

    function clearSuggestTimer() {
      clearTimeout(state.suggestTimer);
      state.suggestTimer = 0;
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

      }
    });
    el.mergeSourceSearch.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchMergeCandidate('source').catch(error => setStatus(error.message, 'error'));
      }
    });
    el.prayerName.addEventListener('input', () => {
      if (state.selected) clearSuggestTimer();
      else debounceSuggest();
    });
    el.language.addEventListener('change', () => {
      if (state.selected) clearSuggestTimer();
      else debounceSuggest();
    });
    el.targetLanguage.addEventListener('change', () => {
      clearSuggestTimer();
      fillTitleFromSelected();
    });
    el.category.addEventListener('change', () => {
      if (state.selected) clearSuggestTimer();
      else debounceSuggest();
    });
    el.prayerText.addEventListener('keydown', event => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        insertAtCursor(el.prayerText, '\\n');
      }
    });
    el.prayerText.addEventListener('input', () => escapeTextareaLineBreaks(el.prayerText));

    loadState().catch(error => setStatus(error.message, 'error'));
  </script>
</body>
</html>`;

const SPLIT_INDEX_HTML = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>기도문 데이터 편집·병합 도구</title>
  <style>
    :root {
      --bg: #f5f7fb;
      --panel: #ffffff;
      --text: #172033;
      --muted: #667085;
      --line: #d9e0ea;
      --accent: #1f6f78;
      --accent-strong: #15555c;
      --focus: rgba(31, 111, 120, 0.18);
      --danger: #b42318;
      --ok: #067647;
      --warning: #b54708;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: "Malgun Gothic", "Apple SD Gothic Neo", Segoe UI, sans-serif;
      font-size: 14px;
    }

    header {
      border-bottom: 1px solid var(--line);
      background: #fff;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .topbar {
      max-width: 1480px;
      margin: 0 auto;
      padding: 14px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    h1 {
      margin: 0;
      font-size: 19px;
      line-height: 1.25;
    }

    .file-path {
      color: var(--muted);
      font-size: 12px;
      margin-top: 4px;
      overflow-wrap: anywhere;
    }

    main {
      max-width: 1480px;
      margin: 18px auto 40px;
      padding: 0 18px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      align-items: start;
    }

    section {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow: hidden;
      min-width: 0;
    }

    .status-section,
    .merge-actions,
    .workflow-guide {
      grid-column: 1 / -1;
    }

    .workflow-guide {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      padding: 12px 14px;
      border-color: #b9d9dc;
      background: #edf8f8;
      color: var(--accent-strong);
      font-weight: 750;
    }

    .status-section {
      display: none;
    }

    .panel-title {
      padding: 13px 14px;
      border-bottom: 1px solid var(--line);
      font-weight: 750;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: baseline;
    }

    .panel-body {
      padding: 14px;
      min-width: 0;
      overflow: hidden;
    }

    .panel-stack {
      display: grid;
      gap: 12px;
      min-width: 0;
    }

    label {
      color: #303b4c;
      font-weight: 650;
    }

    input,
    select,
    textarea,
    button {
      font: inherit;
    }

    input,
    select,
    textarea {
      width: 100%;
      border: 1px solid #c6ceda;
      border-radius: 6px;
      background: #fff;
      color: var(--text);
      outline: none;
    }

    input,
    select {
      min-height: 38px;
      padding: 7px 10px;
    }

    textarea {
      min-height: 320px;
      resize: vertical;
      padding: 11px;
      font-family: Consolas, "Cascadia Mono", "Malgun Gothic", monospace;
      line-height: 1.55;
      white-space: pre-wrap;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--focus);
    }

    button {
      border: 1px solid transparent;
      border-radius: 6px;
      min-height: 38px;
      padding: 7px 13px;
      cursor: pointer;
      color: #fff;
      background: var(--accent);
      font-weight: 650;
      white-space: nowrap;
    }

    button:hover {
      background: var(--accent-strong);
    }

    button.secondary {
      color: var(--text);
      background: #fff;
      border-color: #b8c1cf;
    }

    button.secondary:hover {
      background: #f1f4f8;
    }

    button.danger {
      color: var(--danger);
      background: #fff;
      border-color: #f1b8b3;
    }

    button.danger:hover {
      background: #fff1f0;
    }

    .status {
      min-height: 42px;
      padding: 11px 12px;
      border-radius: 6px;
      background: #f3f6fa;
      color: var(--muted);
      overflow-wrap: anywhere;
    }

    .status.ok {
      background: #ecfdf3;
      color: var(--ok);
    }

    .status.warn {
      background: #fff7e6;
      color: var(--warning);
    }

    .status.error {
      background: #fff1f0;
      color: var(--danger);
    }

    .toast {
      position: fixed;
      left: 50%;
      bottom: 22px;
      z-index: 40;
      max-width: calc(100vw - 32px);
      padding: 10px 14px;
      border-radius: 8px;
      background: #172033;
      color: #fff;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.24);
      font-size: 14px;
      font-weight: 800;
      line-height: 1.38;
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, 12px);
      transition: opacity 0.18s ease, transform 0.18s ease;
    }

    .toast.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    .toast.ok {
      background: var(--accent-strong);
    }

    .toast.warn {
      background: #8a4f00;
    }

    .toast.error {
      background: var(--danger);
    }

    .search-row {
      display: grid;
      grid-template-columns: 92px minmax(0, 1fr) auto auto;
      gap: 8px;
      align-items: center;
      min-width: 0;
    }

    .matches {
      display: grid;
      gap: 7px;
      max-height: 220px;
      overflow-y: auto;
      overflow-x: hidden;
      min-width: 0;
      max-width: 100%;
    }

    .match {
      border: 1px solid var(--line);
      border-radius: 7px;
      padding: 9px;
      background: #fff;
      color: var(--text);
      display: grid;
      gap: 7px;
      text-align: left;
      min-width: 0;
      width: 100%;
      max-width: 100%;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .match.selected {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--focus);
    }

    .match-head {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: start;
      min-width: 0;
      flex-wrap: wrap;
    }

    .match-title {
      font-weight: 750;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .meta {
      color: var(--muted);
      font-size: 13px;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      min-height: 24px;
      border-radius: 999px;
      padding: 2px 8px;
      background: #e8f4f3;
      color: #0f5f58;
      font-size: 12px;
      font-weight: 750;
      white-space: nowrap;
      max-width: 100%;
    }

    .language-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: flex-end;
    }

    .empty {
      color: var(--muted);
      padding: 4px 2px;
    }

    .edit-grid {
      display: grid;
      grid-template-columns: 118px minmax(0, 1fr);
      gap: 10px 12px;
      align-items: center;
    }

    .text-row {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 118px minmax(0, 1fr);
      gap: 10px 12px;
      align-items: start;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      flex-wrap: wrap;
    }

    .merge-body {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .check-row {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #303b4c;
      font-weight: 650;
    }

    .check-row input {
      width: auto;
      min-height: 0;
    }

    @media (max-width: 980px) {
      main {
        grid-template-columns: 1fr;
      }

      .status-section,
      .merge-actions {
        grid-column: auto;
      }

      .topbar {
        align-items: flex-start;
        flex-direction: column;
      }
    }

    @media (max-width: 1180px) {
      .search-row {
        grid-template-columns: 92px minmax(0, 1fr);
      }

      .search-row button {
        width: 100%;
      }
    }

    @media (max-width: 620px) {
      .search-row,
      .edit-grid,
      .text-row {
        grid-template-columns: 1fr;
      }

      button {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="topbar">
      <div>
        <h1>기도문 데이터 편집·병합 도구</h1>
        <div class="file-path" id="filePath"></div>
      </div>
      <button class="secondary" id="reloadButton" type="button">새로고침</button>
    </div>
  </header>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>

  <main>
    <section class="workflow-guide" aria-label="작업 순서"><span>① 기도문 검색·선택</span><span>→</span><span>② 내용을 직접 수정하고 개별 저장</span><span>→</span><span>③ 필요할 때 두 언어 항목 병합</span></section>
    <section class="status-section" aria-label="상태">
      <div class="panel-body">
        <div class="status" id="status">대기 중</div>
      </div>
    </section>

    <section class="item-panel" aria-label="기준 항목">
      <div class="panel-title">
        <span>① 기준 기도문</span>
        <span class="meta">남길 항목</span>
      </div>
      <div class="panel-body panel-stack">
        <div class="search-row">
          <select id="targetSearchLang" aria-label="기준 항목 검색 언어"></select>
          <input id="targetSearch" autocomplete="off" placeholder="기도명 검색">
          <button class="secondary" id="targetSearchButton" type="button">검색</button>
          <button class="secondary" id="targetNewButton" type="button">＋ 새 기도문</button>
        </div>
        <div class="matches" id="targetMatches"></div>

        <div class="edit-grid">
          <label for="targetId">ID</label>
          <input id="targetId" autocomplete="off">

          <label for="targetLang">저장 언어</label>
          <select id="targetLang"></select>

          <label for="targetCategory">카테고리</label>
          <select id="targetCategory"></select>

          <label for="targetTitle">기도명</label>
          <input id="targetTitle" autocomplete="off">

          <label for="targetSourceCategory">출처분류</label>
          <input id="targetSourceCategory" autocomplete="off">

          <div class="text-row">
            <label for="targetText">기도문</label>
            <textarea id="targetText" spellcheck="false"></textarea>
          </div>
        </div>

        <div class="actions">
          <button class="danger" id="targetDeleteButton" type="button">ID 항목 삭제</button>
          <button class="secondary" id="targetSaveButton" type="button">이 기도문만 저장</button>
        </div>
      </div>
    </section>

    <section class="item-panel" aria-label="합칠 항목">
      <div class="panel-title">
        <span>② 가져올 기도문</span>
        <span class="meta">가져올 항목</span>
      </div>
      <div class="panel-body panel-stack">
        <div class="search-row">
          <select id="sourceSearchLang" aria-label="합칠 항목 검색 언어"></select>
          <input id="sourceSearch" autocomplete="off" placeholder="기도명 검색">
          <button class="secondary" id="sourceSearchButton" type="button">검색</button>
        </div>
        <div class="matches" id="sourceMatches"></div>

        <div class="edit-grid">
          <label for="sourceId">ID</label>
          <input id="sourceId" autocomplete="off">

          <label for="sourceLang">저장 언어</label>
          <select id="sourceLang"></select>

          <label for="sourceCategory">카테고리</label>
          <select id="sourceCategory"></select>

          <label for="sourceTitle">기도명</label>
          <input id="sourceTitle" autocomplete="off">

          <label for="sourceSourceCategory">출처분류</label>
          <input id="sourceSourceCategory" autocomplete="off">

          <div class="text-row">
            <label for="sourceText">기도문</label>
            <textarea id="sourceText" spellcheck="false"></textarea>
          </div>
        </div>

        <div class="actions">
          <button class="danger" id="sourceDeleteButton" type="button">ID 항목 삭제</button>
          <button class="secondary" id="sourceSaveButton" type="button">이 기도문만 저장</button>
        </div>
      </div>
    </section>

    <section class="merge-actions" aria-label="병합 실행">
      <div class="panel-title">③ 저장 및 병합</div>
      <div class="panel-body merge-body">
        <div>
          <label class="check-row" for="mergeOverwrite">
            <input id="mergeOverwrite" type="checkbox">
            <span>덮어쓰기</span>
          </label>
          <label class="check-row" for="mergeRemoveSource">
            <input id="mergeRemoveSource" type="checkbox" checked>
            <span>합친 뒤 합칠 항목 제거</span>
          </label>
        </div>
        <button id="mergeButton" type="button">선택한 두 기도문 병합</button>
      </div>
    </section>
  </main>

  <script>
    const state = {
      languages: [],
      categories: [],
      categoryLabels: {},
      toastTimer: 0
    };

    const el = {
      filePath: document.getElementById('filePath'),
      reloadButton: document.getElementById('reloadButton'),
      status: document.getElementById('status'),
      toast: document.getElementById('toast'),
      mergeOverwrite: document.getElementById('mergeOverwrite'),
      mergeRemoveSource: document.getElementById('mergeRemoveSource'),
      mergeButton: document.getElementById('mergeButton')
    };

    function panel(prefix, label) {
      return {
        prefix,
        label,
        originalId: '',
        searchLang: document.getElementById(prefix + 'SearchLang'),
        search: document.getElementById(prefix + 'Search'),
        searchButton: document.getElementById(prefix + 'SearchButton'),
        newButton: document.getElementById(prefix + 'NewButton'),
        matches: document.getElementById(prefix + 'Matches'),
        id: document.getElementById(prefix + 'Id'),
        lang: document.getElementById(prefix + 'Lang'),
        category: document.getElementById(prefix + 'Category'),
        title: document.getElementById(prefix + 'Title'),
        sourceCategory: document.getElementById(prefix + 'SourceCategory'),
        text: document.getElementById(prefix + 'Text'),
        deleteButton: document.getElementById(prefix + 'DeleteButton'),
        saveButton: document.getElementById(prefix + 'SaveButton')
      };
    }

    const panels = {
      target: panel('target', '기준 항목'),
      source: panel('source', '합칠 항목')
    };

    async function api(path, options = {}) {
      const response = await fetch(path, {
        headers: { 'content-type': 'application/json' },
        ...options
      });
      const body = await response.json();
      if (!response.ok || !body.ok) {
        const error = new Error(body.error || 'Request failed');
        error.body = body;
        throw error;
      }
      return body;
    }

    function showToast(message, tone = '') {
      clearTimeout(state.toastTimer);
      el.toast.textContent = message;
      el.toast.className = 'toast show' + (tone ? ' ' + tone : '');
      state.toastTimer = setTimeout(() => {
        el.toast.className = 'toast';
      }, 2600);
    }

    function setStatus(message, tone = '', toast = true) {
      el.status.textContent = message;
      el.status.className = 'status' + (tone ? ' ' + tone : '');
      if (toast && tone) showToast(message, tone);
    }

    function categoryLabel(key, lang) {
      const labels = state.categoryLabels[key] || {};
      return labels[lang] || labels.KR || labels.EN || key;
    }

    function languageOptions(emptyLabel) {
      return '<option value="">' + escapeHtml(emptyLabel) + '</option>' + state.languages
        .map(lang => '<option value="' + escapeHtml(lang) + '">' + escapeHtml(lang) + '</option>')
        .join('');
    }

    function categoryOptions() {
      return state.categories
        .map(category => '<option value="' + escapeHtml(category) + '">' + escapeHtml(categoryLabel(category, 'KR')) + ' (' + escapeHtml(category) + ')</option>')
        .join('');
    }

    function setSelect(select, html, previousValue, fallbackValue) {
      select.innerHTML = html;
      select.value = previousValue || fallbackValue || '';
      if (previousValue && select.value !== previousValue) {
        select.value = fallbackValue || '';
      }
    }

    function fillSelects() {
      const autoLangOptions = languageOptions('자동');
      const requiredLangOptions = languageOptions('선택');
      const categories = categoryOptions();

      Object.values(panels).forEach(item => {
        const currentSearchLang = item.searchLang.value;
        const currentLang = item.lang.value;
        const currentCategory = item.category.value;
        setSelect(item.searchLang, autoLangOptions, currentSearchLang, '');
        setSelect(item.lang, requiredLangOptions, currentLang, state.languages[0] || '');
        setSelect(item.category, categories, currentCategory, state.categories[0] || '');
      });
    }

    async function loadState() {
      setStatus('불러오는 중', '', false);
      const body = await api('/api/state');
      state.languages = body.languages;
      state.categories = body.categories;
      state.categoryLabels = body.categoryLabels;
      el.filePath.textContent = body.file;
      fillSelects();
      setStatus(body.prayers.length + '개 항목 로드됨', 'ok', false);
    }

    function languageBadges(match) {
      const langs = Array.isArray(match.textLanguages) && match.textLanguages.length
        ? match.textLanguages
        : (match.hasText ? [match.lang] : []);
      return langs.map(lang => '<span class="badge">' + escapeHtml(lang) + '</span>').join('');
    }

    function renderMatches(item, matches) {
      if (!matches.length) {
        item.matches.innerHTML = '<div class="empty">검색 결과 없음</div>';
        return;
      }

      item.matches.innerHTML = matches.map((match, index) => {
        return [
          '<button class="match secondary" type="button" data-index="' + index + '">',
          '  <div class="match-head">',
          '    <span class="match-title">' + escapeHtml(match.displayTitle || match.title) + '</span>',
          '    <span class="language-badges">' + languageBadges(match) + '</span>',
          '  </div>',
          '</button>'
        ].join('');
      }).join('');

      [...item.matches.querySelectorAll('.match')].forEach(button => {
        button.addEventListener('click', () => {
          const match = matches[Number(button.dataset.index)];
          [...item.matches.querySelectorAll('.match')].forEach(node => node.classList.remove('selected'));
          button.classList.add('selected');
          loadPrayerIntoPanel(item, match.id, match.lang).catch(error => setStatus(error.message, 'error'));
        });
      });
    }

    async function searchPanel(item) {
      const prayerName = item.search.value.trim();
      if (!prayerName) {
        renderMatches(item, []);
        setStatus(item.label + ' 검색어 필요', 'warn');
        return;
      }

      const body = await api('/api/suggest', {
        method: 'POST',
        body: JSON.stringify({
          language: item.searchLang.value,
          category: '',
          prayerName
        })
      });
      const matches = body.exact.length ? body.exact : body.suggestions;
      renderMatches(item, matches);

      if (body.exact.length === 1) {
        await loadPrayerIntoPanel(item, body.exact[0].id, body.exact[0].lang);
        const first = item.matches.querySelector('.match');
        if (first) first.classList.add('selected');
        setStatus(item.label + ' 선택됨: ' + body.exact[0].id, 'ok');
      } else if (matches.length) {
        setStatus(item.label + ' 후보 ' + matches.length + '개', 'warn');
      } else {
        setStatus(item.label + ' 후보 없음', 'warn');
      }
    }

    async function loadPrayerIntoPanel(item, id, lang) {
      const body = await api('/api/prayer?id=' + encodeURIComponent(id) + '&lang=' + encodeURIComponent(lang || ''));
      const prayer = body.prayer;
      item.originalId = prayer.id;
      item.id.value = prayer.id;
      item.lang.value = prayer.lang;
      item.category.value = prayer.category;
      item.title.value = prayer.title || '';
      item.sourceCategory.value = prayer.sourceCategoryText || '';
      item.text.value = String(prayer.text || '').replace(/\\n/g, '\\\\n');
      setStatus(item.label + ' 불러옴: ' + prayer.id + ' / ' + prayer.lang, 'ok');
    }

    function panelPayload(item) {
      return {
        originalId: item.originalId,
        id: item.id.value.trim(),
        lang: item.lang.value,
        category: item.category.value,
        title: item.title.value.trim(),
        sourceCategory: item.sourceCategory.value.trim(),
        text: item.text.value
      };
    }

    function validatePanelPayload(item, payload) {
      if (!payload.id) {
        throw new Error(item.label + ' ID가 필요합니다.');
      }
      if (!payload.lang) {
        throw new Error(item.label + ' 저장 언어가 필요합니다.');
      }
      if (!payload.category) {
        throw new Error(item.label + ' 카테고리가 필요합니다.');
      }
      if (!payload.title) {
        throw new Error(item.label + ' 기도명이 필요합니다.');
      }
    }

    async function savePanel(item, showMessage = true) {
      const payload = panelPayload(item);
      validatePanelPayload(item, payload);
      if (showMessage) {
        setStatus(item.label + ' 수정 중');
      }
      const body = await api('/api/update', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      item.originalId = body.updated.id;
      item.id.value = body.updated.id;
      item.lang.value = body.updated.lang;
      if (showMessage) {
        await loadState();
        setStatus(item.label + ' 수정됨: ' + body.updated.id + ' / ' + body.updated.lang, 'ok');
      }
      return body.updated;
    }

    async function saveSingle(kind) {
      await savePanel(panels[kind], true);
    }

    async function deletePanelEntry(item) {
      const id = item.originalId || item.id.value.trim();
      if (!id) {
        setStatus(item.label + '을 먼저 검색해서 선택해 주세요.', 'warn');
        return;
      }

      const title = item.title.value.trim();
      const ok = window.confirm(
        item.label + '의 ID 항목 전체를 삭제합니다.\\n\\n' +
        'ID: ' + id + (title ? '\\n기도명: ' + title : '') + '\\n\\n' +
        '모든 언어의 기도명, 기도문, 출처분류가 함께 삭제됩니다.\\n' +
        '정말로 삭제하시겠습니까?'
      );
      if (!ok) return;

      setStatus(item.label + ' ID 항목 삭제 중');
      const body = await api('/api/delete-entry', {
        method: 'POST',
        body: JSON.stringify({
          originalId: id,
          lang: item.lang.value
        })
      });

      await loadState();
      Object.values(panels).forEach(panelItem => {
        if (panelItem.originalId === body.updated.id || panelItem.id.value.trim() === body.updated.id) {
          clearPanel(panelItem);
        }
      });
      setStatus(item.label + ' ID 항목 삭제됨: ' + body.updated.id, 'ok');
    }

    async function deleteSingle(kind) {
      await deletePanelEntry(panels[kind]);
    }

    async function mergePanels() {
      setStatus('두 항목 저장 후 병합 중');
      const targetUpdated = await savePanel(panels.target, false);
      const sourceUpdated = await savePanel(panels.source, false);
      const body = await api('/api/merge', {
        method: 'POST',
        body: JSON.stringify({
          targetId: targetUpdated.id,
          sourceId: sourceUpdated.id,
          sourceLang: sourceUpdated.lang,
          targetLang: targetUpdated.lang,
          overwrite: el.mergeOverwrite.checked,
          removeSource: el.mergeRemoveSource.checked
        })
      });

      await loadState();
      await loadPrayerIntoPanel(panels.target, body.updated.targetId, body.updated.targetLang);
      if (body.updated.removedSource) {
        clearPanel(panels.source);
      } else {
        await loadPrayerIntoPanel(panels.source, body.updated.sourceId, body.updated.sourceLang);
      }
      const copiedInfo = body.updated.copied.length ? body.updated.copied.join(', ') : '(기존 데이터 유지)';
      setStatus(body.updated.targetId + ' 병합됨: ' + copiedInfo + (body.updated.removedSource ? ' / 합칠 항목 제거됨' : ''), 'ok');
    }

    function clearPanel(item) {
      item.originalId = '';
      item.id.value = '';
      item.title.value = '';
      item.sourceCategory.value = '';
      item.text.value = '';
      item.matches.innerHTML = '';
    }

    function insertAtCursor(input, value) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = input.value.slice(0, start) + value + input.value.slice(end);
      input.selectionStart = input.selectionEnd = start + value.length;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function escapeTextareaLineBreaks(input) {
      if (!input.value.includes('\\n')) return;
      const cursor = input.selectionStart;
      const beforeCursor = input.value.slice(0, cursor);
      const escapedBeforeCursor = beforeCursor.replace(/\\n/g, '\\\\n');
      input.value = input.value.replace(/\\n/g, '\\\\n');
      input.selectionStart = input.selectionEnd = escapedBeforeCursor.length;
    }

    function wirePanel(item, kind) {
      item.searchButton.addEventListener('click', () => searchPanel(item).catch(error => setStatus(error.message, 'error')));
      if (item.newButton) {
        item.newButton.addEventListener('click', () => {
          item.originalId = '';
          item.id.value = '';
          if (item.matches) item.matches.innerHTML = '';
          if (item.search) item.search.value = '';
          setStatus('새 항목을 입력할 수 있습니다. 새 ID를 입력하고 저장하세요.', 'ok');
        });
      }
      item.search.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          searchPanel(item).catch(error => setStatus(error.message, 'error'));
        }
      });
      item.saveButton.addEventListener('click', () => saveSingle(kind).catch(error => setStatus(error.message, 'error')));
      item.deleteButton.addEventListener('click', () => deleteSingle(kind).catch(error => setStatus(error.message, 'error')));
      item.lang.addEventListener('change', () => {
        const id = item.id.value.trim() || item.originalId;
        if (id) {
          loadPrayerIntoPanel(item, id, item.lang.value).catch(error => setStatus(error.message, 'error'));
        }
      });
      item.text.addEventListener('keydown', event => {
        if (event.key === 'Enter' && event.shiftKey) {
          event.preventDefault();
          insertAtCursor(item.text, '\\\\n');
        }
      });
      item.text.addEventListener('input', () => escapeTextareaLineBreaks(item.text));
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

    el.reloadButton.addEventListener('click', () => loadState().catch(error => setStatus(error.message, 'error')));
    el.mergeButton.addEventListener('click', () => mergePanels().catch(error => setStatus(error.message, 'error')));
    wirePanel(panels.target, 'target');
    wirePanel(panels.source, 'source');
    loadState().catch(error => setStatus(error.message, 'error'));
  </script>
</body>
</html>`;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const data = loadPrayerData();
  const stats = validateData(data);

  if (args.check) {
    if (usesCountryModules) prepareCountryModuleSources(data);
    console.log(JSON.stringify({
      ok: true,
      file: prayerDataDisplayPath,
      ...(usesCountryModules ? { countryModules: countryPrayerModules.length } : {}),
      ...stats
    }, null, 2));
    return;
  }

  const server = createServer();
  const address = await listenWithFallback(server, args.host, args.port);
  console.log(`Prayer Data Insert Tool: http://${address.address}:${address.port}/`);
}

module.exports = {
  comparePrayerIds,
  countryPrayerModules,
  createServer,
  loadPrayerData,
  prayerEditorState,
  prayersForCountry,
  prepareCountryModuleSources,
  prepareCountryPrayerCategoryUpdate,
  prepareCountryPrayerEntryDelete,
  prepareCountryPrayerLanguageDelete,
  prepareCountryPrayerMerge,
  prepareCountryPrayerUpdate,
  readCountryModuleSources,
  runCountryModuleSources,
  updatePrayerCategory,
  updatePrayerDetail,
  validateData
};

if (require.main === module) {
  main().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exit(1);
  });
}
