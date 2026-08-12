const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'JS file', 'hymn_data.js');

function loadData(source) {
  const sandbox = {};
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: dataPath });
  return Array.isArray(sandbox.ordoHymnData) ? sandbox.ordoHymnData : [];
}

function numberedVariant(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(.*?)\s*([1-6])$/u);
  return match ? { base: match[1].trim(), suffix: match[2] } : { base: text, suffix: '' };
}

function translationBase(value) {
  return String(value || '')
    .trim()
    .replace(/\s*(?:[1-6]|I{1,3})$/u, '')
    .trim();
}

function variantGroups(entries) {
  const grouped = new Map();
  entries.forEach((entry) => {
    const parsed = numberedVariant(entry.title);
    const key = [entry.country, entry.book, parsed.base.toLocaleLowerCase()].join('\n');
    const group = grouped.get(key) || [];
    group.push({ entry, parsed });
    grouped.set(key, group);
  });
  return [...grouped.values()].filter((group) => (
    group.length > 1
    && group.some(({ parsed }) => parsed.suffix)
    && group.every(({ parsed }) => !parsed.suffix || Number(parsed.suffix) <= 6)
  ));
}

function entryRange(source, id) {
  const idLine = `    "id": ${JSON.stringify(id)},`;
  const start = source.indexOf(idLine);
  if (start < 0) throw new Error(`Entry not found: ${id}`);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const next = source.indexOf(`${newline}  {${newline}    "id": `, start + idLine.length);
  return { start, end: next >= 0 ? next : source.length };
}

function replaceEntryField(source, id, field, value) {
  const { start, end } = entryRange(source, id);
  const block = source.slice(start, end);
  const pattern = new RegExp(`(^    "${field}": )"(?:\\\\.|[^"\\\\])*"`, 'm');
  if (!pattern.test(block)) throw new Error(`${field} not found: ${id}`);
  return source.slice(0, start) + block.replace(pattern, `$1${JSON.stringify(value)}`) + source.slice(end);
}

function replaceTranslationTitle(source, id, language, value) {
  const { start, end } = entryRange(source, id);
  const block = source.slice(start, end);
  const pattern = new RegExp(`("${language}"\\s*:\\s*\\{\\s*\\r?\\n\\s*"title"\\s*:\\s*)"(?:\\\\.|[^"\\\\])*"`);
  if (!pattern.test(block)) return source;
  return source.slice(0, start) + block.replace(pattern, `$1${JSON.stringify(value)}`) + source.slice(end);
}

function main() {
  const checkOnly = process.argv.includes('--check');
  const original = fs.readFileSync(dataPath, 'utf8');
  const entries = loadData(original);
  const groups = variantGroups(entries);
  let updated = original;
  let changed = 0;

  groups.forEach((group) => {
    const canonicalTitle = group[0].parsed.base;
    const translations = {};
    ['KR', 'VN', 'EN', 'LA', 'JP'].forEach((language) => {
      const first = group.map(({ entry }) => entry.translations?.[language]?.title).find(Boolean);
      if (first) translations[language] = translationBase(first);
    });
    group.forEach(({ entry }) => {
      const displayTitle = [String(entry.number || '').trim(), canonicalTitle].filter(Boolean).join('. ');
      if (entry.title !== canonicalTitle) {
        updated = replaceEntryField(updated, entry.id, 'title', canonicalTitle);
        changed += 1;
      }
      if (entry.displayTitle !== displayTitle) {
        updated = replaceEntryField(updated, entry.id, 'displayTitle', displayTitle);
        changed += 1;
      }
      Object.entries(translations).forEach(([language, title]) => {
        if (entry.translations?.[language]?.title === title) return;
        updated = replaceTranslationTitle(updated, entry.id, language, title);
        changed += 1;
      });
    });
  });

  if (checkOnly && changed) throw new Error(`${changed} numbered hymn-title fields require normalization.`);
  if (!checkOnly && updated !== original) fs.writeFileSync(dataPath, updated, 'utf8');
  console.log(JSON.stringify({ entries: entries.length, groups: groups.length, changed, checkOnly }, null, 2));
}

main();
