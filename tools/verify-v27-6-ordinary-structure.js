const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const ROOT = process.cwd();

function load(files) {
  const global = {};
  global.globalThis = global;
  vm.createContext(global);
  files.forEach(file => vm.runInContext(
    fs.readFileSync(`${ROOT}/JS file/countries/${file}`, 'utf8'),
    global,
    { filename: file }
  ));
  return global.countryMassData;
}

function lineGroups(item) {
  const groups = [];
  ['lines', 'common_dialogue', 'sanctus', 'amen'].forEach(key => {
    if (Array.isArray(item[key])) groups.push(item[key]);
  });
  Object.values(item.variants || {}).forEach(variant => {
    if (variant && Array.isArray(variant.lines)) groups.push(variant.lines);
  });
  Object.values(item.forms || {}).forEach(lines => {
    if (Array.isArray(lines)) groups.push(lines);
  });
  Object.values(item.songs || {}).forEach(song => {
    if (song && Array.isArray(song.content)) groups.push(song.content);
  });
  return groups;
}

const korea = load(['korea/korea_mass.js']).KR;
const expectedIds = Array.from(korea.ordinary, item => item.id);
assert.strictEqual(expectedIds.length, 32, 'Korean reference ordinary must contain 32 items');

const modules = load([
  'united_states/united_states_mass.js',
  'ireland/ireland_mass.js',
  'england_wales/england_wales_mass.js',
  'australia/australia_mass.js',
  'new_zealand/new_zealand_mass.js',
  'italy/italy_mass.js',
  'mexico/mexico_mass.js',
  'portugal/portugal_mass.js',
  'germany/germany_mass.js',
  'brazil/brazil_mass.js'
]);

const countries = ['AU', 'NZ', 'IT', 'MX', 'PT', 'DE', 'BR'];
const language = { AU: 'en', NZ: 'en', IT: 'it', MX: 'es', PT: 'pt', DE: 'de', BR: 'pt' };
const minimumChoices = {
  AU: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 2, dismissal: 4 },
  NZ: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 2, dismissal: 4 },
  IT: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 2, dismissal: 4 },
  MX: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 2, dismissal: 4 },
  PT: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 2, dismissal: 4 },
  DE: { greeting: 2, penitential: 3, creed: 2, eucharist: 4, blessing: 1, dismissal: 1 },
  BR: { greeting: 8, penitential: 3, creed: 2, eucharist: 14, blessing: 3, dismissal: 5 }
};

const report = {};
countries.forEach(code => {
  const module = modules[code];
  assert(module, `${code} module is missing`);
  assert.strictEqual(module.ordinaryStructure, 'paragraph-rubric-choices-v1', `${code} structure marker`);
  assert.deepStrictEqual(Array.from(module.ordinary, item => item.id), expectedIds, `${code} item order`);

  let rows = 0;
  let rubrics = 0;
  let speakers = 0;
  let maxText = 0;
  module.ordinary.forEach(item => {
    lineGroups(item).forEach(lines => lines.forEach(line => {
      rows += 1;
      Object.entries(line).forEach(([key, value]) => {
        if (key.startsWith('rubric_') && String(value || '').trim()) rubrics += 1;
        if (key.startsWith('sp_') && String(value || '').trim()) speakers += 1;
        if (key.startsWith('text_') && typeof value === 'string') {
          assert(!/<br\s*\/?\s*>/i.test(value), `${code} retained a packed <br> paragraph in ${item.id}`);
          assert(!/^Abrir(?:\s|$)/i.test(value.trim()), `${code} retained a source-site UI label in ${item.id}`);
          maxText = Math.max(maxText, value.length);
        }
      });
    }));
  });
  assert(rubrics > 0, `${code} has no rubric rows`);
  assert(speakers > 0, `${code} has no speaker rows`);
  assert(maxText <= 520, `${code} has an oversized packed paragraph (${maxText})`);

  Object.entries(minimumChoices[code]).forEach(([baseId, minimum]) => {
    const item = module.ordinary.find(entry => entry.id.endsWith(baseId));
    assert(item, `${code} ${baseId} is missing`);
    assert.strictEqual(item.type, 'selectable', `${code} ${baseId} must be selectable`);
    assert(Object.keys(item.variants || {}).length >= minimum, `${code} ${baseId} choice count`);
  });

  report[code] = { rows, rubrics, speakers, maxText, language: language[code] };
});

assert(modules.BR.officialOrderCorpus.text_pt.length > 100000, 'Brazil complete ordinary corpus is too short');
assert.strictEqual(Object.keys(modules.BR.ordinary.find(item => item.id.endsWith('eucharist')).forms).length, 14);

console.log(JSON.stringify({ ok: true, countries: report }, null, 2));
