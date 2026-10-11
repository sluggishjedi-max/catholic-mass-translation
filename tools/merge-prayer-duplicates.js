const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'JS file', 'prayer_data.js');
const source = fs.readFileSync(dataPath, 'utf8');
const context = { globalThis: {} };
vm.runInNewContext(source, context, { filename: dataPath });
const prayers = context.globalThis.prayerData;

const normalizeTitle = value => String(value || '')
  .normalize('NFKC')
  .toLocaleLowerCase()
  .replace(/[\p{P}\p{S}\s]+/gu, '')
  .trim();
const normalizeBody = value => String(value || '')
  .normalize('NFKC')
  .toLocaleLowerCase()
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const hasText = value => !!String(value || '').trim();

const parents = prayers.map((_, index) => index);
function find(index) {
  if (parents[index] !== index) parents[index] = find(parents[index]);
  return parents[index];
}
function union(left, right) {
  const a = find(left);
  const b = find(right);
  if (a !== b) parents[b] = a;
}

const aliases = new Map();
prayers.forEach((prayer, index) => {
  Object.values(prayer.titles || {}).forEach(title => {
    const alias = normalizeTitle(title);
    if (!alias) return;
    if (!aliases.has(alias)) aliases.set(alias, []);
    aliases.get(alias).push(index);
  });
});
aliases.forEach(indexes => {
  const unique = [...new Set(indexes)];
  for (let index = 1; index < unique.length; index += 1) union(unique[0], unique[index]);
});

const groups = new Map();
prayers.forEach((_, index) => {
  const root = find(index);
  if (!groups.has(root)) groups.set(root, []);
  groups.get(root).push(index);
});

function conflictingBodyLanguages(indexes) {
  return ['KR', 'VN', 'EN', 'JP', 'LA'].filter(lang => {
    const values = indexes
      .map(index => normalizeBody(prayers[index].texts?.[lang]))
      .filter(Boolean);
    return new Set(values).size > 1;
  });
}

function canonicalScore(prayer, index) {
  const texts = Object.values(prayer.texts || {}).filter(hasText);
  const titles = Object.values(prayer.titles || {}).filter(hasText);
  return texts.length * 1000000
    + texts.reduce((sum, value) => sum + String(value).length, 0) * 100
    + titles.length * 10
    - index / 100000;
}

function mergeLocalizedMap(target, sourceMap) {
  const out = Object.assign({}, target || {});
  Object.entries(sourceMap || {}).forEach(([lang, value]) => {
    if (!hasText(out[lang]) && hasText(value)) out[lang] = value;
  });
  return out;
}

function mergePrayer(target, sourcePrayer) {
  const merged = Object.assign({}, target);
  ['titles', 'texts', 'sourceCategory', 'source', 'sourceUrl'].forEach(field => {
    if (sourcePrayer[field] && typeof sourcePrayer[field] === 'object' && !Array.isArray(sourcePrayer[field])) {
      merged[field] = mergeLocalizedMap(merged[field], sourcePrayer[field]);
    }
  });
  merged.tags = [...new Set([...(merged.tags || []), ...(sourcePrayer.tags || [])].filter(hasText))];
  Object.entries(sourcePrayer).forEach(([key, value]) => {
    if (['titles', 'texts', 'sourceCategory', 'source', 'sourceUrl', 'tags'].includes(key)) return;
    if (!hasText(merged[key]) && hasText(value)) merged[key] = value;
  });
  return merged;
}

const replacements = new Map();
const removed = new Set();
const report = { merged: [], skippedConflicts: [] };
for (const indexes of groups.values()) {
  if (indexes.length < 2) continue;
  const conflicts = conflictingBodyLanguages(indexes);
  if (conflicts.length) {
    report.skippedConflicts.push({ ids: indexes.map(index => prayers[index].id), conflicts });
    continue;
  }
  const canonicalIndex = indexes
    .slice()
    .sort((a, b) => canonicalScore(prayers[b], b) - canonicalScore(prayers[a], a))[0];
  let merged = prayers[canonicalIndex];
  indexes.filter(index => index !== canonicalIndex).forEach(index => {
    merged = mergePrayer(merged, prayers[index]);
    removed.add(index);
  });
  replacements.set(canonicalIndex, merged);
  report.merged.push({
    kept: prayers[canonicalIndex].id,
    removed: indexes.filter(index => index !== canonicalIndex).map(index => prayers[index].id),
    titles: merged.titles,
    textLanguages: Object.entries(merged.texts || {}).filter(([, value]) => hasText(value)).map(([lang]) => lang)
  });
}

const mergedPrayers = prayers
  .map((prayer, index) => replacements.get(index) || prayer)
  .filter((_, index) => !removed.has(index));

const arrayLabelIndex = source.indexOf('const prayers =');
const arrayOpenIndex = source.indexOf('[', arrayLabelIndex);
let arrayCloseIndex = -1;
let depth = 0;
let quote = '';
let escaped = false;
for (let index = arrayOpenIndex; index < source.length; index += 1) {
  const char = source[index];
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
  if (char === '[') depth += 1;
  else if (char === ']') {
    depth -= 1;
    if (depth === 0) {
      arrayCloseIndex = index;
      break;
    }
  }
}
if (arrayLabelIndex < 0 || arrayOpenIndex < 0 || arrayCloseIndex < 0) {
  throw new Error('Cannot find prayer array in prayer_data.js.');
}

const serialized = JSON.stringify(mergedPrayers, null, 2).replace(/\n/g, '\n  ');
const updatedSource = source.slice(0, arrayOpenIndex) + serialized + source.slice(arrayCloseIndex + 1);
fs.writeFileSync(dataPath, updatedSource, 'utf8');
fs.mkdirSync(path.join(repoRoot, 'tmp'), { recursive: true });
fs.writeFileSync(path.join(repoRoot, 'tmp', 'prayer-merge-report.json'), JSON.stringify(report, null, 2), 'utf8');

console.log(`Merged ${report.merged.length} duplicate groups; removed ${removed.size} duplicate records; preserved ${report.skippedConflicts.length} conflicting groups.`);
