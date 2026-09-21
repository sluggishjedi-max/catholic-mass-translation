const assert = require('assert');

const hymnTool = require('./hymn-data-entry-tool');
const prayerTool = require('./prayer-data-insert-tool');

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function changedJurisdictions(before, after) {
  return after
    .filter((source, index) => source.code !== before[index].code)
    .map(source => source.jurisdiction);
}

function verifyHymnEditor() {
  const sources = hymnTool.readCountryModuleSources();
  const original = hymnTool.loadHymnData();
  const unchanged = hymnTool.prepareCountryModuleSources(original, sources);
  assert.deepStrictEqual(changedJurisdictions(sources, unchanged), []);

  const edited = clone(original);
  const target = edited.find(entry => entry.country === 'KR' && entry.title);
  assert(target, 'A Korean hymn is required for the editor check');
  target.title = `${target.title} [편집 검증]`;

  const prepared = hymnTool.prepareCountryModuleSources(edited, sources);
  assert.deepStrictEqual(changedJurisdictions(sources, prepared), ['KR']);
  const roundTrip = hymnTool.runCountryModuleSources(prepared).data;
  assert.strictEqual(roundTrip.find(entry => entry.id === target.id).title, target.title);
  assert.strictEqual(roundTrip.length, original.length);
}

function verifyPrayerEditor() {
  const sources = prayerTool.readCountryModuleSources();
  const original = prayerTool.loadPrayerData();
  const unchanged = prayerTool.prepareCountryModuleSources(original, sources);
  assert.deepStrictEqual(changedJurisdictions(sources, unchanged), []);

  const edited = clone(original);
  const target = edited.prayers.find(prayer => prayer.titles && prayer.titles.KR);
  assert(target, 'A Korean prayer is required for the editor check');
  const editedTitle = `${target.titles.KR} [편집 검증]`;
  prayerTool.updatePrayerDetail(edited, {
    originalId: target.id,
    id: target.id,
    lang: 'KR',
    category: target.category,
    title: editedTitle,
    text: target.texts.KR || '',
    sourceCategory: target.sourceCategory.KR || ''
  });

  const prepared = prayerTool.prepareCountryModuleSources(edited, sources);
  const changed = changedJurisdictions(sources, prepared);
  assert(changed.includes('KR'), 'The Korean prayer module must be updated');
  assert(changed.every(jurisdiction => ['KR', 'VN', 'US', 'JP', 'VA'].includes(jurisdiction)),
    `Only modules that own the shared prayer may change: ${changed.join(', ')}`);
  const roundTrip = prayerTool.runCountryModuleSources(prepared).data;
  assert.strictEqual(roundTrip.prayers.find(prayer => prayer.id === target.id).titles.KR, editedTitle);
  assert.strictEqual(roundTrip.prayers.length, original.prayers.length);

  const inserted = clone(original);
  inserted.prayers.push({
    id: 'codex.editor.structure.check',
    category: 'common',
    titles: { KR: '구조 검증 기도' },
    texts: { KR: '아멘.' },
    sourceCategory: { KR: '검증' },
    tags: ['codex.editor.structure.check', 'common', '구조 검증 기도', '검증']
  });
  const insertedSources = prayerTool.prepareCountryModuleSources(inserted, sources);
  assert.deepStrictEqual(changedJurisdictions(sources, insertedSources), ['KR']);
  const insertedRoundTrip = prayerTool.runCountryModuleSources(insertedSources).data;
  assert(insertedRoundTrip.prayers.some(prayer => prayer.id === 'codex.editor.structure.check'));

  const newLanguageOwners = { ZH: 'TW', IT: 'IT', PT: 'PT', ES: 'MX', DE: 'DE' };
  const multilingualInsert = clone(original);
  Object.keys(newLanguageOwners).forEach(language => {
    multilingualInsert.prayers.push({
      id: `codex.editor.${language.toLowerCase()}.check`,
      category: 'national',
      titles: { [language]: `${language} structure check` },
      texts: { [language]: 'Amen.' },
      sourceCategory: { [language]: 'Check' },
      tags: [`codex.editor.${language.toLowerCase()}.check`, 'national']
    });
  });
  const multilingualSources = prayerTool.prepareCountryModuleSources(multilingualInsert, sources);
  assert.deepStrictEqual(
    new Set(changedJurisdictions(sources, multilingualSources)),
    new Set(Object.values(newLanguageOwners))
  );
  const multilingualRoundTrip = prayerTool.runCountryModuleSources(multilingualSources).data;
  Object.keys(newLanguageOwners).forEach(language => {
    assert(multilingualRoundTrip.prayers.some(prayer => prayer.id === `codex.editor.${language.toLowerCase()}.check`));
  });
}

verifyHymnEditor();
verifyPrayerEditor();
console.log('Country data editor checks passed.');
