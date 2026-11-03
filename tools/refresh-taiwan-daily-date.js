// Import one date from the CRBC's official date lookup, preserving the rest of
// the generated corpus and retaining its source index for future full builds.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('acorn');
const { officialTaiwanFiles } = require('../functions/daily-taiwan');
const { downloadPdf } = require('../functions/daily-pdf');
const { createRuntime } = require('../functions/daily-runtime');
const root = path.resolve(__dirname, '..');
const corpusPath = path.join(root, 'JS file/countries/taiwan/taiwan_daily_mass_data.js');
const supplementPath = path.join(__dirname, 'taiwan-daily-source-updates.json');

function corpusObject(node) {
  if (!node || typeof node !== 'object') return null;
  if (node.type === 'ObjectExpression' && node.properties.some(p => p.key?.value === 'byDate')
      && node.properties.some(p => p.key?.value === 'records')) return node;
  for (const value of Object.values(node)) {
    for (const child of Array.isArray(value) ? value : [value]) {
      const result = corpusObject(child);
      if (result) return result;
    }
  }
  return null;
}
const property = (object, key) => object.properties.find(item => item.key.value === key);

async function refresh(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(date).toISOString().slice(0, 10) !== date) throw Error('Expected --date=YYYY-MM-DD');
  const ymd = date.replaceAll('-', '');
  const entries = await officialTaiwanFiles(date);
  const original = fs.readFileSync(corpusPath, 'utf8');
  const context = {}; vm.runInNewContext(original, context);
  const data = context.taiwanDailyMassTextData;
  const cache = path.join(root, 'tmp/taiwan-daily-pdfs'); fs.mkdirSync(cache, { recursive:true });
  for (const entry of entries) {
    const pdf = await downloadPdf('https://drive.usercontent.google.com/download?id=' + entry.id + '&export=download&confirm=t');
    const text = pdf.pages.join('\n\n');
    fs.writeFileSync(path.join(cache, entry.id + '.pdf'), pdf.bytes);
    fs.writeFileSync(path.join(cache, entry.id + '.txt'), text);
    data.records[entry.id] = { canonicalDate:ymd, sourceSet:'daily-sheet', sourceUrl:entry.url, text, title:entry.title };
  }
  data.byDate[ymd] = entries.map(entry => entry.id);
  const runtime = createRuntime({ country:'TW', date, source:'official' });
  let cycle;
  try {
    runtime.window.taiwanDailyMassTextData = data;
    cycle = JSON.parse(runtime.run(`JSON.stringify((() => {
      const date=getActiveLiturgicalSourceDate(),parsed=strictParseDailyMass('ZH',fetchTraditionalChineseDailyStaticSource(date),date,'TW');
      if(!hasCompleteTraditionalChineseDailyMass(parsed,'TW'))throw Error('Official Taiwan PDF is incomplete');
      return {kind:date.getDay()===0?'sundays':'weekdays',cycle:date.getDay()===0?getSundayCycle(date):getWeekdayCycle(date),sections:Object.keys(parsed.data)};
    })())`));
  } finally { runtime.close(); }
  const cycleIds = data.cycles[cycle.kind][cycle.cycle];
  entries.forEach(entry => { if (!cycleIds.includes(entry.id)) cycleIds.push(entry.id); });
  Object.assign(data.coverage, { dateStart:Object.keys(data.byDate).sort()[0], dateEnd:Object.keys(data.byDate).sort().at(-1), dateCount:Object.keys(data.byDate).length, pdfCount:Object.keys(data.records).length });
  data.coverage[cycle.kind === 'sundays' ? 'sundayCycles' : 'weekdayCycles'][cycle.cycle] = cycleIds.length;

  // Patch AST value ranges so existing PDF text and formatting stay untouched.
  const object = corpusObject(parse(original, { ecmaVersion:'latest' }));
  if (!object) throw Error('Taiwan corpus object was not found');
  const edits = [];
  function set(object, key, value) {
    const found = property(object, key);
    if (found) {
      const indent = original.slice(original.lastIndexOf('\n', found.start) + 1, found.start);
      const text = value && typeof value === 'object' && !Array.isArray(value)
        ? JSON.stringify(value, null, 2).replaceAll('\n', '\n' + indent) : JSON.stringify(value);
      edits.push({ start:found.value.start, end:found.value.end, text });
    }
    else {
      const last = object.properties.at(-1);
      const indent = original.slice(original.lastIndexOf('\n', last.start) + 1, last.start);
      const text = JSON.stringify(value, null, 2).replaceAll('\n', '\n' + indent);
      edits.push({ start:last.end, end:last.end, text:',\n' + indent + JSON.stringify(key) + ': ' + text });
    }
  }
  set(property(object, 'byDate').value, ymd, data.byDate[ymd]);
  entries.forEach(entry => set(property(object, 'records').value, entry.id, data.records[entry.id]));
  set(property(property(object, 'cycles').value, cycle.kind).value, cycle.cycle, cycleIds);
  for (const key of ['dateStart', 'dateEnd', 'dateCount', 'pdfCount']) set(property(object, 'coverage').value, key, data.coverage[key]);
  set(property(property(object, 'coverage').value, cycle.kind === 'sundays' ? 'sundayCycles' : 'weekdayCycles').value, cycle.cycle, cycleIds.length);
  let output = original;
  edits.sort((a, b) => b.start - a.start).forEach(edit => { output = output.slice(0, edit.start) + edit.text + output.slice(edit.end); });
  const check = {}; vm.runInNewContext(output, check);
  if (JSON.stringify(check.taiwanDailyMassTextData) !== JSON.stringify(data)) throw Error('Taiwan corpus patch did not preserve the data');
  const supplemental = fs.existsSync(supplementPath) ? JSON.parse(fs.readFileSync(supplementPath, 'utf8')) : { schemaVersion:1, dates:{} };
  supplemental.dates[ymd] = entries;
  fs.writeFileSync(corpusPath, output);
  fs.writeFileSync(supplementPath, JSON.stringify(supplemental, null, 2) + '\n');
  console.log(JSON.stringify({date,files:entries,sections:cycle.sections}));
}
if (require.main === module) refresh(process.argv.find(arg => arg.startsWith('--date='))?.slice(7) || '').catch(error => { console.error(error.message); process.exitCode=1; });
module.exports = { refresh };
