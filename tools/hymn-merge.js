const clean = value => typeof value === 'string' ? value.normalize('NFKC').trim() : '';
const normalized = value => clean(value).toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
const country = entry => clean(entry.jurisdiction || entry.country || entry.language || entry.lang).toUpperCase();
const book = entry => normalized(entry.book || entry.sourceBook);
const number = entry => {
  const value = clean(String(entry.number || entry.no || entry.num || ''));
  return /^\d+$/.test(value) ? String(Number(value)) : value.toLowerCase();
};
const title = entry => normalized(entry.title || entry.name);
const body = entry => normalized(entry.text || entry.lyrics || entry.body
  || (entry.verses || []).map(verse => verse.text || '').join(' '));
const copy = value => JSON.parse(JSON.stringify(value));
const empty = value => value == null || value === '' || (Array.isArray(value) && !value.length);

function mergeMissing(base, incoming, field = '') {
  if (empty(base)) return copy(incoming);
  if (empty(incoming)) return copy(base);
  if (Array.isArray(base) && Array.isArray(incoming)) {
    // A partial lyric excerpt must not append another copy of its verses.
    if (field === 'verses') return copy(base);
    const key = value => field === 'scoreImages'
      ? clean(typeof value === 'string' ? value : value.src || value.url || value.path)
      : JSON.stringify(value);
    const output = copy(base);
    const seen = new Set(output.map(key));
    incoming.forEach(value => {
      if (!seen.has(key(value))) { output.push(copy(value)); seen.add(key(value)); }
    });
    return output;
  }
  if (base && incoming && typeof base === 'object' && typeof incoming === 'object'
      && !Array.isArray(base) && !Array.isArray(incoming)) {
    const output = copy(base);
    Object.entries(incoming).forEach(([key, value]) => {
      output[key] = key in output ? mergeMissing(output[key], value, key) : copy(value);
    });
    return output;
  }
  return copy(base);
}

function compatible(base, incoming) {
  const baseVoice = normalized(base.voiceType);
  const incomingVoice = normalized(incoming.voiceType);
  if (baseVoice && incomingVoice && baseVoice !== incomingVoice) return false;
  const incomingBody = body(incoming);
  return !incomingBody || body(base).includes(incomingBody);
}

function richness(entry) {
  return body(entry).length * 1000 + (entry.scoreImages || []).length * 10
    + Object.keys(entry).length;
}

function mergeHymnDuplicates(entries) {
  const identities = new Map();
  entries.forEach((entry, index) => {
    if (!country(entry) || !number(entry) || !title(entry)) return;
    const key = [country(entry), number(entry), title(entry)].join('\u0000');
    if (!identities.has(key)) identities.set(key, []);
    identities.get(key).push(index);
  });
  const merges = [];
  const replacements = new Map();
  const removed = new Set();
  identities.forEach(indexes => {
    const knownBooks = new Set(indexes.map(index => book(entries[index])).filter(Boolean));
    const groups = new Map();
    indexes.forEach(index => {
      const sourceBook = book(entries[index]);
      // An unlabelled old index can join only one unambiguous hymnal.
      const key = sourceBook || (knownBooks.size === 1 ? [...knownBooks][0] : `unknown:${index}`);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(index);
    });
    groups.forEach(group => {
      if (group.length < 2) return;
      const ranked = group.slice().sort((a, b) => richness(entries[b]) - richness(entries[a])
        || Number(!!book(entries[b])) - Number(!!book(entries[a])) || a - b);
      while (ranked.length) {
        const keepIndex = ranked.shift();
        const duplicates = ranked.filter(index => compatible(entries[keepIndex], entries[index]));
        if (!duplicates.length) continue;
        let merged = copy(entries[keepIndex]);
        duplicates.forEach(index => {
          merged = mergeMissing(merged, entries[index]);
          removed.add(index);
          ranked.splice(ranked.indexOf(index), 1);
        });
        merged.id = entries[keepIndex].id;
        merged.mergedIds = [...new Set([
          ...(merged.mergedIds || []), ...duplicates.flatMap(index => [entries[index].id, ...(entries[index].mergedIds || [])])
        ].filter(id => id && id !== merged.id))];
        replacements.set(keepIndex, merged);
        merges.push({ keepIndex, removedIndexes: duplicates, entry: merged });
      }
    });
  });
  return { entries: entries.flatMap((entry, index) => removed.has(index) ? [] : [replacements.get(index) || copy(entry)]), merges };
}

module.exports = { mergeHymnDuplicates, mergeMissing };
