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
  AUTO: '자동 감지',
  KR: '한국어', VN: 'Tiếng Việt', EN: 'English', JP: '日本語', LA: 'Latina',
  ZH: '繁體中文', IT: 'Italiano', PT: 'Português', ES: 'Español', DE: 'Deutsch'
};
const TRANSLATION_CODES = {
  AUTO: 'auto',
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
              const pairedKey = row.__massEditorPairKeys && row.__massEditorPairKeys[field];
              rows.push({
                key: pairedKey || `${rowIndex}:${kind}`,
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
  if (!Array.isArray(entries) || entries.some(entry => !entry || (!Array.isArray(entry.path) && !entry.create && !entry.rename))) {
    throw new Error('Mass editor overrides must contain a path, create, or rename descriptor');
  }
  return { start: arrayStart, end: arrayNode.end, entries: JSON.parse(JSON.stringify(entries)) };
}

function setOrdinaryOverride(entries, dataPath, value) {
  const pathKey = JSON.stringify(dataPath);
  const existing = entries.find(entry => JSON.stringify(entry.path) === pathKey);
  if (existing) existing.value = value;
  else entries.push({ path: Array.from(dataPath), value });
}

function setCreationOverride(entries, create, value, speaker, language) {
  const field = `${create.kind}_${language.toLowerCase()}`;
  const descriptor = {
    entryId: create.entryId,
    relativePath: Array.from(create.relativePath),
    rowKey: create.rowKey,
    preferredIndex: create.preferredIndex,
    field,
    speakerField: `sp_${language.toLowerCase()}`
  };
  const descriptorKey = JSON.stringify([descriptor.entryId, descriptor.relativePath, descriptor.rowKey, descriptor.field]);
  const existing = entries.find(entry => entry.create && JSON.stringify([
    entry.create.entryId,
    entry.create.relativePath,
    entry.create.rowKey,
    entry.create.field
  ]) === descriptorKey);
  if (existing) {
    existing.value = value;
    existing.speaker = speaker;
  } else {
    entries.push({ create: descriptor, value, speaker });
  }
}

function setRenameOverride(entries, row, kind, value, language) {
  const rowPath = row.textPath.slice(0, -1);
  const currentField = row.textPath[row.textPath.length - 1];
  const targetField = `${kind}_${language.toLowerCase()}`;
  const existing = entries.find(entry => entry.rename
    && entry.rename.rowKey === row.key
    && JSON.stringify(entry.rename.rowPath) === JSON.stringify(rowPath));
  if (existing) {
    existing.rename.toField = targetField;
    existing.value = value;
    return;
  }
  entries.push({
    rename: {
      rowPath: Array.from(rowPath),
      rowKey: row.key,
      fromField: currentField,
      toField: targetField
    },
    value
  });
}

function formatOrdinaryOverrides(entries) {
  return JSON.stringify(entries, null, 2).replace(/\n/gu, '\n  ');
}

function injectedOverrideSection(jurisdiction, applyToOrdinary = true) {
  const label = JSON.stringify(jurisdiction);
  const applyLine = applyToOrdinary ? '  applyOrdinaryEditorOverrides(ordinary);\n' : '';
  return `  ${OVERRIDES_START}\n  const ordinaryEditorOverrides = [];\n  ${OVERRIDES_END}\n  function applyOrdinaryEditorOverrides(target) {\n    ordinaryEditorOverrides.forEach(override => {\n      if (override.create) {\n        const entry = target.find(item => item && item.id === override.create.entryId);\n        if (!entry) throw new Error(${label} + ' Mass editor entry is missing: ' + override.create.entryId);\n        let rows = entry;\n        for (const part of override.create.relativePath) {\n          if (rows[part] === undefined) rows[part] = part === 'lines' || part === 'content' ? [] : {};\n          rows = rows[part];\n        }\n        if (!Array.isArray(rows)) throw new Error(${label} + ' Mass editor block is invalid: ' + override.create.entryId);\n        let row = rows.find(item => item && item.__massEditorPairKeys && item.__massEditorPairKeys[override.create.field] === override.create.rowKey);\n        if (!row && rows[override.create.preferredIndex] && !Object.prototype.hasOwnProperty.call(rows[override.create.preferredIndex], override.create.field)) row = rows[override.create.preferredIndex];\n        if (!row) { row = {}; rows.push(row); }\n        row.__massEditorPairKeys = Object.assign({}, row.__massEditorPairKeys, { [override.create.field]: override.create.rowKey });\n        row[override.create.field] = String(override.value ?? '');\n        if (override.create.speakerField) row[override.create.speakerField] = String(override.speaker ?? '');\n        return;\n      }\n      if (override.rename) {\n        let row = target;\n        for (const part of override.rename.rowPath) row = row && row[part];\n        if (!row || typeof row !== 'object') throw new Error(${label} + ' Mass editor rename path is stale: ' + JSON.stringify(override.rename.rowPath));\n        const fromField = override.rename.fromField;\n        const toField = override.rename.toField;\n        if (!Object.prototype.hasOwnProperty.call(row, fromField) && !Object.prototype.hasOwnProperty.call(row, toField)) throw new Error(${label} + ' Mass editor rename field is stale: ' + fromField);\n        if (fromField !== toField) delete row[fromField];\n        row[toField] = String(override.value ?? '');\n        const keys = Object.assign({}, row.__massEditorPairKeys);\n        delete keys[fromField];\n        keys[toField] = override.rename.rowKey;\n        row.__massEditorPairKeys = keys;\n        return;\n      }\n      const editPath = Array.isArray(override.path) ? override.path : [];\n      let parent = target;\n      for (const part of editPath.slice(0, -1)) parent = parent && parent[part];\n      const field = editPath[editPath.length - 1];\n      if (!parent || !Object.prototype.hasOwnProperty.call(parent, field)) throw new Error(${label} + ' Mass editor override path is stale: ' + JSON.stringify(editPath));\n      parent[field] = String(override.value ?? '');\n    });\n    return target;\n  }\n${applyLine}`;
}

function ensureOrdinaryOverrideSection(source, jurisdiction) {
  if (ordinaryOverrideBlock(source)) return source;
  const ordinaryStart = findOrdinaryArrayStart(source);
  const directProperty = ordinaryStart !== -1 && /\bordinary\s*:\s*$/u.test(source.slice(Math.max(0, ordinaryStart - 80), ordinaryStart));
  const registrations = Array.from(source.matchAll(/\n[ \t]*global\.countryMassData(?:\[[^\r\n]+\]|\.[A-Za-z0-9_$-]+)\s*=/gu));
  if (!registrations.length) throw new Error(`Could not locate ${jurisdiction} Mass module registration`);
  const insertAt = registrations[0].index + 1;
  let output = `${source.slice(0, insertAt)}${injectedOverrideSection(jurisdiction, !directProperty)}${source.slice(insertAt)}`;
  if (directProperty) {
    const nextStart = findOrdinaryArrayStart(output);
    const arrayNode = parseArrayNode(output, nextStart);
    output = `${output.slice(0, nextStart)}applyOrdinaryEditorOverrides(${output.slice(nextStart, arrayNode.end)})${output.slice(arrayNode.end)}`;
  }
  return output;
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

function pathTokens(relativePath) {
  const ignored = new Set(['lines', 'content', 'variants', 'forms', 'songs']);
  return relativePath.filter(part => typeof part === 'string' && !ignored.has(part));
}

function counterpartBlock(reference, candidates) {
  if (!reference) return null;
  const exact = candidates.find(block => block.key === reference.key);
  if (exact) return exact;
  const sameEntry = candidates.filter(block => block.entryId === reference.entryId);
  if (sameEntry.length === 1) return sameEntry[0];
  const referenceTokens = pathTokens(reference.relativePath);
  const ranked = sameEntry.map(block => ({
    block,
    score: pathTokens(block.relativePath).filter(token => referenceTokens.includes(token)).length
  })).sort((left, right) => right.score - left.score);
  if (!ranked.length || ranked[0].score < 1 || (ranked[1] && ranked[0].score === ranked[1].score)) return null;
  return ranked[0].block;
}

function virtualBlockFor(reference, module, language) {
  if (!reference) return null;
  const entryIndex = module.ordinary.findIndex(entry => entry && String(entry.id || '') === reference.entryId);
  if (entryIndex === -1) return null;
  const entry = module.ordinary[entryIndex];
  return {
    key: blockKey(reference.entryId, reference.relativePath),
    entryId: reference.entryId,
    title: blockTitle(entry, language, reference.relativePath),
    entryIndex,
    relativePath: Array.from(reference.relativePath),
    rows: [],
    virtual: true
  };
}

function virtualRowFor(template, block) {
  if (!template || !block) return null;
  return {
    key: template.key,
    rowIndex: template.rowIndex,
    kind: template.kind,
    text: '',
    speaker: '',
    textPath: null,
    speakerPath: null,
    virtual: true,
    create: {
      entryId: block.entryId,
      relativePath: Array.from(block.relativePath),
      rowKey: template.key,
      preferredIndex: template.rowIndex,
      kind: template.kind
    }
  };
}

function blockPair(loaded, leftJurisdiction, rightJurisdiction, key) {
  const leftCountry = loaded.countries.find(item => item.jurisdiction === leftJurisdiction);
  const rightCountry = loaded.countries.find(item => item.jurisdiction === rightJurisdiction);
  if (!leftCountry || !rightCountry) throw Object.assign(new Error('Choose both countries'), { statusCode: 400 });
  const leftBlocks = blocksForCountry(loaded, leftJurisdiction);
  const rightBlocks = blocksForCountry(loaded, rightJurisdiction);
  const leftBlock = leftBlocks.find(block => block.key === key);
  let rightBlock = counterpartBlock(leftBlock, rightBlocks);
  if (!rightBlock) rightBlock = virtualBlockFor(leftBlock, loaded.runtime.countries[rightJurisdiction], rightCountry.language);
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
    leftBlockKey: leftBlock?.key || '',
    rightBlockKey: rightBlock?.key || '',
    leftCreateBase: leftBlock ? {
      entryId: leftBlock.entryId,
      relativePath: Array.from(leftBlock.relativePath)
    } : null,
    rightCreateBase: rightBlock ? {
      entryId: rightBlock.entryId,
      relativePath: Array.from(rightBlock.relativePath)
    } : null,
    rows: rowKeys.map(rowKey => {
      const left = leftRows.get(rowKey) || null;
      const right = rightRows.get(rowKey) || null;
      return {
        key: rowKey,
        left: left || virtualRowFor(right, leftBlock),
        right: right || virtualRowFor(left, rightBlock)
      };
    })
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
  let block = collectMassBlocks(module.ordinary, country.language).find(item => item.key === selectedBlockKey);
  if (!block) {
    let parsedKey;
    try { parsedKey = JSON.parse(selectedBlockKey); } catch { parsedKey = null; }
    if (Array.isArray(parsedKey) && Array.isArray(parsedKey[1])) {
      block = virtualBlockFor({ entryId: String(parsedKey[0] || ''), relativePath: parsedKey[1] }, module, country.language);
    }
  }
  if (!block) throw Object.assign(new Error('The selected Mass passage was not found in this country'), { statusCode: 404 });

  const requestedUpdates = Array.isArray(updates) ? updates : [];
  const currentRowsByKey = new Map(block.rows.map(row => [row.key, row]));
  const validKinds = new Set(['text', 'rubric', 'cit']);
  const needsOverride = requestedUpdates.some(update => {
    const row = currentRowsByKey.get(String(update.key || ''));
    const requestedKind = String(update.kind || row?.kind || update.create?.kind || '');
    return Boolean(update.create && (
      update.create.forceCreate
      || cleanText(update.text) !== cleanText(update.expectedText)
      || cleanText(update.speaker) !== cleanText(update.expectedSpeaker)
    )) || Boolean(row && validKinds.has(requestedKind) && requestedKind !== row.kind);
  });
  const workingCode = needsOverride ? ensureOrdinaryOverrideSection(source.code, jurisdiction) : source.code;
  const overrideBlock = ordinaryOverrideBlock(workingCode);
  const ordinaryStart = findOrdinaryArrayStart(workingCode);
  const ordinaryNode = overrideBlock ? null : parseArrayNode(workingCode, ordinaryStart);
  const overrideEntries = overrideBlock ? overrideBlock.entries : [];
  const rowsByKey = currentRowsByKey;
  const replacements = [];
  const changed = [];

  requestedUpdates.forEach(update => {
    const row = rowsByKey.get(String(update.key || ''));
    const nextText = cleanText(update.text);
    const expectedText = cleanText(update.expectedText);
    const nextSpeaker = cleanText(update.speaker);
    const expectedSpeaker = cleanText(update.expectedSpeaker);
    const nextKind = String(update.kind || row?.kind || update.create?.kind || '');
    if (!validKinds.has(nextKind)) {
      throw Object.assign(new Error(`Unknown row type: ${nextKind || '(empty)'}`), { statusCode: 400 });
    }

    if (!row) {
      const create = update.create ? { ...update.create, kind: nextKind } : null;
      if (!create || create.entryId !== block.entryId || JSON.stringify(create.relativePath) !== JSON.stringify(block.relativePath)
        || create.rowKey !== String(update.key || '') || !validKinds.has(create.kind)
        || !Number.isInteger(create.preferredIndex) || create.preferredIndex < 0) {
        throw Object.assign(new Error(`Unknown row: ${update.key}`), { statusCode: 400 });
      }
      if (expectedText || expectedSpeaker) {
        throw Object.assign(new Error(`The empty translation row changed after it was loaded: ${update.key}`), { statusCode: 409 });
      }
      if (nextText || nextSpeaker || create.forceCreate) {
        if (!overrideBlock) throw new Error('Mass editor override initialization failed');
        setCreationOverride(overrideEntries, create, nextText, nextSpeaker, country.language);
        changed.push({ blockKey: block.key, rowKey: create.rowKey, value: nextText, key: create.rowKey, field: 'text', kind: nextKind, virtual: true });
        if (nextSpeaker) changed.push({ blockKey: block.key, rowKey: create.rowKey, value: nextSpeaker, key: create.rowKey, field: 'speaker', virtual: true });
      }
      return;
    }

    const expectedKind = String(update.expectedKind || row.kind);
    if (row.kind !== expectedKind) {
      throw Object.assign(new Error(`The row type changed after it was loaded: ${update.key}`), { statusCode: 409 });
    }

    if (row.text !== expectedText) {
      throw Object.assign(new Error(`The text changed after it was loaded: ${update.key}`), { statusCode: 409 });
    }
    if (row.kind !== nextKind) {
      if (!overrideBlock) throw new Error('Mass editor override initialization failed');
      setRenameOverride(overrideEntries, row, nextKind, nextText, country.language);
      changed.push({ blockKey: block.key, rowKey: row.key, value: nextText, key: row.key, field: 'text', kind: nextKind, virtual: true });
    } else if (row.text !== nextText) {
      if (overrideBlock) setOrdinaryOverride(overrideEntries, row.textPath, nextText);
      else {
        const textNode = nodeAtPath(ordinaryNode, row.textPath);
        replacements.push({ start: textNode.start, end: textNode.end, value: nextText });
      }
      changed.push({ path: row.textPath, value: nextText, key: row.key, field: 'text' });
    }

    if (row.speakerPath) {
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
    ? `${workingCode.slice(0, overrideBlock.start)}${formatOrdinaryOverrides(overrideEntries)}${workingCode.slice(overrideBlock.end)}`
    : replaceSourceRanges(workingCode, replacements);
  const nextSources = sources.map((item, index) => index === sourceIndex ? { ...item, code: nextCode } : item);
  const nextRuntime = runCountryMassSources(nextSources);
  const nextOrdinary = nextRuntime.countries[jurisdiction].ordinary;
  changed.forEach(change => {
    if (change.virtual) {
      const nextBlock = collectMassBlocks(nextOrdinary, country.language).find(item => item.key === change.blockKey);
      const nextRow = nextBlock && nextBlock.rows.find(row => row.key === change.rowKey);
      const actual = change.field === 'speaker' ? nextRow?.speaker : nextRow?.text;
      if (cleanText(actual) !== change.value) throw new Error(`Saved Mass data did not create translation row ${change.rowKey}`);
      if (change.kind && nextRow?.kind !== change.kind) throw new Error(`Saved Mass data did not preserve row type ${change.rowKey}`);
    } else if (cleanText(valuesAtPath(nextOrdinary, change.path)) !== change.value) {
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
    .controls,.status,.row-card,.translator { background:var(--panel); border:1px solid var(--line); border-radius:16px; box-shadow:0 8px 24px #1720330b; }
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
    .kind { width:auto; min-width:82px; padding:7px 30px 7px 10px; border-radius:999px; color:#43506a; background:#eef1f6; border:1px solid #d8deea; font-size:12px; font-weight:800; }
    .speaker { max-width:110px; padding:7px 9px !important; font-weight:800; text-align:center; }
    .speak { margin-left:auto; padding:7px 10px; white-space:nowrap; }
    .editor.virtual textarea { border-style:dashed; background:#fffdf2; }
    .editor.virtual .kind { color:#8a5c00; background:#fff6d9; }
    textarea { min-height:116px; resize:vertical; line-height:1.65; }
    .missing { min-height:154px; display:grid; place-items:center; border:1px dashed #ccd3df; border-radius:12px; color:#8a93a7; background:#fafbfc; }
    .translate-stack { display:flex; flex-direction:column; justify-content:center; gap:7px; }
    .addbar { display:grid; grid-template-columns:1fr 118px 1fr; gap:12px; margin:12px 0 4px; }
    .addbar button { border:1px dashed #aeb9cd; background:#f9fbff; color:#315078; }
    .savebar { position:sticky; bottom:12px; z-index:4; display:grid; grid-template-columns:1fr 118px 1fr; gap:12px; margin:18px 0; }
    .savebar button { box-shadow:0 8px 20px #17203320; }
    .translator { padding:18px; margin-top:18px; }
    .translator h2 { margin:0; font-size:18px; }
    .translator-head { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:14px; }
    .translator-head p { margin:4px 0 0; color:var(--muted); font-size:12px; }
    .translator-languages { display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:end; margin-bottom:10px; }
    .swap { min-width:44px; padding:10px; }
    .translator-boxes { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .translator textarea { min-height:150px; background:#fbfcff; }
    .translator textarea[readonly] { background:#f4f7fd; }
    .translator-foot { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:10px; color:var(--muted); font-size:12px; }
    .empty { padding:50px 20px; text-align:center; color:var(--muted); }
    @media (max-width:850px) {
      .controls { grid-template-columns:1fr; }
      .section-tools { grid-template-columns:1fr; }
      .columns-head { grid-template-columns:1fr 1fr; }
      .columns-head span:nth-child(2) { display:none; }
      .row-card { grid-template-columns:1fr; }
      .translate-stack { flex-direction:row; flex-wrap:wrap; }
      .addbar { grid-template-columns:1fr 1fr; }
      .addbar span { display:none; }
      .savebar { grid-template-columns:1fr 1fr; }
      .savebar span { display:none; }
      .translator-boxes { grid-template-columns:1fr; }
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
    <div class="addbar">
      <button id="add-left" class="secondary" type="button">＋ 왼쪽 줄 추가</button><span></span>
      <button id="add-right" class="secondary" type="button">＋ 오른쪽 줄 추가</button>
    </div>
    <div class="savebar">
      <button id="save-left" class="primary" type="button">왼쪽 원문 저장</button><span></span>
      <button id="save-right" class="primary" type="button">오른쪽 번역문 저장</button>
    </div>
    <section class="translator" aria-label="자동 번역기">
      <div class="translator-head"><div><h2>자동 번역기</h2><p>문장을 입력하면 언어를 자동으로 감지해 선택한 언어로 번역합니다.</p></div><button id="translator-ai" class="translate" type="button">AI로 다시 번역</button></div>
      <div class="translator-languages">
        <label>원문 언어<select id="translator-source-language"></select></label>
        <button id="translator-swap" class="secondary swap" type="button" title="언어와 문장 바꾸기">⇄</button>
        <label>번역 언어<select id="translator-target-language"></select></label>
      </div>
      <div class="translator-boxes">
        <textarea id="translator-source" aria-label="번역할 원문" placeholder="번역할 문장을 입력하세요."></textarea>
        <textarea id="translator-output" aria-label="번역 결과" placeholder="번역 결과" readonly></textarea>
      </div>
      <div class="translator-foot"><span id="translator-status">원문 언어는 자동으로 감지됩니다.</span><button id="translator-copy" class="secondary" type="button">결과 복사</button></div>
    </section>
  </main>
  <script>
    const state = { countries:[], blocks:[], visibleBlocks:[], block:null, rowSequence:0, translationSequence:0, translationTimer:null };
    const el = Object.fromEntries(['left-country','right-country','search','block','reload','status','rows','add-left','add-right','save-left','save-right','left-title','right-title','translator-source-language','translator-target-language','translator-source','translator-output','translator-swap','translator-status','translator-ai','translator-copy'].map(id => [id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()), document.getElementById(id)]));
    function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
    async function api(url, options) { const response=await fetch(url,options); const body=await response.json(); if(!response.ok||!body.ok) throw new Error(body.error||('HTTP '+response.status)); return body; }
    function setStatus(message, kind='') { el.status.textContent=message; el.status.className='status '+kind; }
    function countryLabel(country) { return country.name+' · '+country.languageName+' ('+country.jurisdiction+')'+(country.editable?'':' · 읽기 전용'); }
    function selectedCountry(side) { return state.countries.find(c=>c.jurisdiction===el[side+'Country'].value); }
    function countryOptions(selected) { return state.countries.map(c=>'<option value="'+escapeHtml(c.jurisdiction)+'" '+(c.jurisdiction===selected?'selected':'')+'>'+escapeHtml(countryLabel(c))+'</option>').join(''); }
    function languageOptions(selected,allowAuto=false) {
      const languages=[]; state.countries.forEach(country=>{ if(!languages.some(item=>item.code===country.language)) languages.push({code:country.language,name:country.languageName}); });
      if(allowAuto) languages.unshift({code:'AUTO',name:'자동 감지'});
      return languages.map(item=>'<option value="'+escapeHtml(item.code)+'" '+(item.code===selected?'selected':'')+'>'+escapeHtml(item.name)+'</option>').join('');
    }
    function syncTranslatorLanguages(forceTarget=false) {
      const source=el.translatorSourceLanguage.value||'AUTO';
      const target=forceTarget?(selectedCountry('right')?.language||'EN'):(el.translatorTargetLanguage.value||selectedCountry('right')?.language||'EN');
      el.translatorSourceLanguage.innerHTML=languageOptions(source,true);
      el.translatorTargetLanguage.innerHTML=languageOptions(target,false);
      if(!el.translatorSourceLanguage.value) el.translatorSourceLanguage.value='AUTO';
      if(!el.translatorTargetLanguage.value) el.translatorTargetLanguage.value=selectedCountry('right')?.language||'EN';
    }
    async function loadState() {
      const body=await api('/api/state'); state.countries=body.countries;
      el.leftCountry.innerHTML=countryOptions(state.countries.some(c=>c.jurisdiction==='KR')?'KR':state.countries[0].jurisdiction);
      el.rightCountry.innerHTML=countryOptions(state.countries.some(c=>c.jurisdiction==='VN')?'VN':state.countries[1].jurisdiction);
      syncTranslatorLanguages(true);
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
    function kindOptions(selected) { return ['text','rubric','cit'].map(kind=>'<option value="'+kind+'" '+(kind===selected?'selected':'')+'>'+kindLabel(kind)+'</option>').join(''); }
    function editorHtml(side,row) {
      if(!row) return '<div class="missing">해당 언어에 대응 구절이 없습니다.</div>';
      const disabled=row.speakerPath||row.virtual?'':'disabled'; const placeholder=row.virtual?'비어 있는 번역 구문을 입력하세요.':'';
      return '<div class="editor-meta"><select class="kind" data-side="'+side+'" data-role="kind" data-row="'+escapeHtml(row.key)+'" title="본문 또는 지시문 선택">'+kindOptions(row.kind)+'</select><input class="speaker" data-side="'+side+'" data-role="speaker" data-row="'+escapeHtml(row.key)+'" value="'+escapeHtml(row.speaker)+'" '+disabled+' title="화자"><button class="speak secondary" type="button" data-speak-side="'+side+'" data-row="'+escapeHtml(row.key)+'" title="이 문장 읽어주기">🔊 듣기</button></div>'+
        '<textarea data-side="'+side+'" data-role="text" data-row="'+escapeHtml(row.key)+'" placeholder="'+placeholder+'">'+escapeHtml(row.text)+'</textarea>';
    }
    function rowHtml(pair,index) {
      const leftButtons=pair.left&&pair.right?'<button class="translate" data-mode="ai" data-direction="right" data-row="'+escapeHtml(pair.key)+'">AI →</button><button class="translate" data-mode="google" data-direction="right" data-row="'+escapeHtml(pair.key)+'">Google →</button>':'';
      const rightButtons=pair.left&&pair.right?'<button class="translate" data-mode="ai" data-direction="left" data-row="'+escapeHtml(pair.key)+'">← AI</button><button class="translate" data-mode="google" data-direction="left" data-row="'+escapeHtml(pair.key)+'">← Google</button>':'';
      return '<article class="row-card" data-row-card="'+escapeHtml(pair.key)+'"><div class="editor '+(pair.left&&pair.left.virtual?'virtual':'')+'">'+editorHtml('left',pair.left)+'</div><div class="translate-stack">'+leftButtons+rightButtons+'</div><div class="editor '+(pair.right&&pair.right.virtual?'virtual':'')+'">'+editorHtml('right',pair.right)+'</div></article>';
    }
    function renderRows() {
      el.rows.innerHTML=state.block.rows.map(rowHtml).join('')||'<div class="empty">편집 가능한 본문이 없습니다.</div>';
      document.querySelectorAll('button.translate').forEach(button=>button.addEventListener('click',()=>translateRow(button).catch(error=>setStatus(error.message,'error'))));
      document.querySelectorAll('button.speak').forEach(button=>button.addEventListener('click',()=>speakRow(button)));
    }
    function addRow(side) {
      if(!state.block)return;
      const base=state.block[side+'CreateBase']; const country=selectedCountry(side);
      if(!base||!country?.editable){ setStatus('선택한 쪽에는 줄을 추가할 수 없습니다.','error'); return; }
      const indices=state.block.rows.map(pair=>pair[side]?.rowIndex).filter(Number.isInteger);
      const rowIndex=indices.length?Math.max(...indices)+1:0;
      const key='editor-'+Date.now()+'-'+(++state.rowSequence)+':text';
      const row={key,rowIndex,kind:'text',text:'',speaker:'',textPath:null,speakerPath:null,virtual:true,create:{entryId:base.entryId,relativePath:Array.from(base.relativePath),rowKey:key,preferredIndex:rowIndex,kind:'text',forceCreate:true}};
      state.block.rows.push({key,left:side==='left'?row:null,right:side==='right'?row:null});
      renderRows();
      const input=inputFor(side,'text',key); if(input)input.focus();
      setStatus((side==='left'?'왼쪽':'오른쪽')+'에 새 줄을 추가했습니다. 유형과 내용을 선택한 뒤 저장하세요.','ok');
    }
    async function loadBlock() {
      if(!el.block.value) return; setStatus('선택한 구절을 불러오는 중입니다.');
      const url='/api/block?left='+encodeURIComponent(el.leftCountry.value)+'&right='+encodeURIComponent(el.rightCountry.value)+'&key='+encodeURIComponent(el.block.value);
      state.block=(await api(url)).block; renderRows();
      el.leftTitle.textContent=countryLabel(state.block.leftCountry); el.rightTitle.textContent=countryLabel(state.block.rightCountry);
      el.saveLeft.disabled=!state.block.leftCountry.editable||!state.block.leftCreateBase; el.saveRight.disabled=!state.block.rightCountry.editable||!state.block.rightCreateBase;
      el.addLeft.disabled=el.saveLeft.disabled; el.addRight.disabled=el.saveRight.disabled;
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
      try { const body=await api('/api/translate',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({mode:button.dataset.mode,text:source.value,sourceLanguage:sourceCountry.language,targetLanguage:targetCountry.language})}); target.value=body.text; el.translatorSource.value=source.value; el.translatorOutput.value=body.text; el.translatorSourceLanguage.value=sourceCountry.language; el.translatorTargetLanguage.value=targetCountry.language; setStatus('번역 초안을 반대쪽 편집창에 넣었습니다. 저장 전 반드시 전례문과 대조하세요.','ok'); }
      finally { button.disabled=false; }
    }
    function updatesFor(side) {
      const sourceRows=new Map(state.block.rows.map(pair=>[pair.key,pair[side]])); const updates=[];
      sourceRows.forEach((row,key)=>{ if(!row)return; const text=inputFor(side,'text',key); const speaker=inputFor(side,'speaker',key); const kind=inputFor(side,'kind',key); const create=row.create?Object.assign({},row.create,{kind:kind.value}):null; updates.push({key,text:text.value,expectedText:row.text,speaker:speaker?speaker.value:row.speaker,expectedSpeaker:row.speaker,kind:kind.value,expectedKind:row.kind,create}); }); return updates;
    }
    async function saveSide(side) {
      if(!state.block)return; const country=selectedCountry(side); if(!country.editable)throw new Error('이 국가는 다른 모듈에서 파생되어 읽기 전용입니다.');
      setStatus(countryLabel(country)+' 저장 중…'); const body=await api('/api/save',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({jurisdiction:country.jurisdiction,blockKey:state.block[side+'BlockKey']||state.block.key,updates:updatesFor(side)})});
      setStatus(body.changed.length?body.changed.length+'개 필드를 저장했습니다. 백업: '+body.backup:'변경된 내용이 없습니다.','ok'); await loadBlock();
    }
    async function runTranslator(mode='google') {
      const text=el.translatorSource.value.trim(); const sequence=++state.translationSequence;
      if(!text){ el.translatorOutput.value=''; el.translatorStatus.textContent='원문 언어는 자동으로 감지됩니다.'; return; }
      const sourceLanguage=el.translatorSourceLanguage.value||'AUTO'; const targetLanguage=el.translatorTargetLanguage.value;
      el.translatorStatus.textContent=(mode==='ai'?'AI':'자동')+' 번역 중…';
      try {
        const body=await api('/api/translate',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({mode,text,sourceLanguage,targetLanguage})});
        if(sequence!==state.translationSequence)return;
        el.translatorOutput.value=body.text; el.translatorStatus.textContent=(sourceLanguage==='AUTO'?'원문 언어 자동 감지 · ':'')+(mode==='ai'?'AI':'Google')+' 번역 완료';
      } catch(error) {
        if(sequence!==state.translationSequence)return;
        el.translatorStatus.textContent='번역 실패: '+error.message;
      }
    }
    function scheduleTranslation() { clearTimeout(state.translationTimer); state.translationTimer=setTimeout(()=>runTranslator('google'),700); }
    function swapTranslator() {
      const oldSource=el.translatorSource.value; const oldOutput=el.translatorOutput.value; const oldSourceLanguage=el.translatorSourceLanguage.value; const oldTargetLanguage=el.translatorTargetLanguage.value;
      el.translatorSource.value=oldOutput; el.translatorOutput.value=oldSource;
      el.translatorSourceLanguage.value=oldTargetLanguage;
      if(oldSourceLanguage!=='AUTO'&&Array.from(el.translatorTargetLanguage.options).some(option=>option.value===oldSourceLanguage)) el.translatorTargetLanguage.value=oldSourceLanguage;
      scheduleTranslation();
    }
    el.leftCountry.addEventListener('change',()=>loadBlocks().catch(e=>setStatus(e.message,'error')));
    el.rightCountry.addEventListener('change',()=>{ syncTranslatorLanguages(true); loadBlock().catch(e=>setStatus(e.message,'error')); });
    el.search.addEventListener('input',()=>filterBlocks()); el.block.addEventListener('change',()=>loadBlock().catch(e=>setStatus(e.message,'error')));
    el.reload.addEventListener('click',()=>loadBlocks(el.block.value).catch(e=>setStatus(e.message,'error')));
    el.addLeft.addEventListener('click',()=>addRow('left')); el.addRight.addEventListener('click',()=>addRow('right'));
    el.saveLeft.addEventListener('click',()=>saveSide('left').catch(e=>setStatus(e.message,'error'))); el.saveRight.addEventListener('click',()=>saveSide('right').catch(e=>setStatus(e.message,'error')));
    el.translatorSource.addEventListener('input',scheduleTranslation); el.translatorSourceLanguage.addEventListener('change',scheduleTranslation); el.translatorTargetLanguage.addEventListener('change',scheduleTranslation);
    el.translatorSwap.addEventListener('click',swapTranslator); el.translatorAi.addEventListener('click',()=>runTranslator('ai')); el.translatorCopy.addEventListener('click',async()=>{ if(!el.translatorOutput.value)return; await navigator.clipboard.writeText(el.translatorOutput.value); el.translatorStatus.textContent='번역 결과를 복사했습니다.'; });
    loadState().catch(error=>setStatus(error.message,'error'));
  </script>
</body>
</html>`;
