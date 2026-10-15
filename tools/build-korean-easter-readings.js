// Capture the calendar-invariant Korean Easter Vigil readings once. At runtime
// these approved originals are local; only the cycle-dependent Gospel is fetched.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require('@playwright/test');
const root = path.resolve(__dirname, '..');
const sourceFile = process.argv[2];
if (!sourceFile) throw Error('Supply the saved CBCK Easter Vigil HTML file.');
(async () => {
  const source = fs.readFileSync(sourceFile, 'utf8');
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (err, data) => err ? res.writeHead(404).end() : res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8').end(data));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({headless:true});
  try {
    const page = await browser.newPage();
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/V29.html`);
    const parts = await page.evaluate(source => {
      const date = new Date(2026, 3, 4);
      state.currentLoc = state.selectedLocationCode = 'KR';
      state.specialVigilNavKey = 'easter_vigil'; state.liturgyNavSlot = 'vigil';
      state.liturgicalDateContext = {date, localDate:date, navSlot:'vigil', specialVigil:'easter_vigil'};
      const record = countrySpecialMassRecord(date, 'KR');
      record.sourceParts = {KR:{}};
      for (let i=1;i<=7;i++) {
        const reading = `^제\\s*${i}\\s*독서(?:\\s|$)`;
        record.sourceParts.KR[`vigil_reading_${i}`] = {start:reading, stop:'^(?:화답송|찬가)(?=\\s|$|[가-힣0-9])', kind:'reading', ending:i===3 ? [] : [{sp:'╋',text:'주님의 말씀입니다.'},{sp:'◎',text:'하느님, 감사합니다.'}]};
        record.sourceParts.KR[`vigil_psalm_${i}`] = {after:reading, start:'^(?:화답송|찬가)(?=\\s|$|[가-힣0-9])', stop:`^(?:기도|<기도|제\\s*${i}\\s*독서\\s*후\\s*기도)|${i<7 ? '^제\\s*'+(i+1)+'\\s*독서' : '^(?:대영광송|본기도)'}`, kind:'psalm'};
      }
      const epistle='^(?:서간|제8독서)(?:\\s|$)', alleluia='^(?:복음\\s*환호송|알렐루야|시편\\s*118)(?=\\s|$|[가-힣0-9(])';
      record.sourceParts.KR.vigil_epistle={start:epistle,stop:alleluia,kind:'reading',ending:[{sp:'╋',text:'주님의 말씀입니다.'},{sp:'◎',text:'하느님, 감사합니다.'}]};
      record.sourceParts.KR.vigil_alleluia={after:epistle,start:alleluia,stop:'^복음(?:\\s|$)',kind:'psalm'};
      const parsed = ordoSpecialOrder.parseParts(record, 'KR', source, date);
      const keys = Array.from({length:7}, (_, i) => [`vigil_reading_${i+1}`, `vigil_psalm_${i+1}`]).flat().concat(['vigil_epistle', 'vigil_alleluia']);
      return Object.fromEntries(keys.map(key => {
        const section = parsed[key];
        if (!sourceSectionHasContent(section) || !section.cit_kr) throw Error('Missing fixed original: ' + key);
        return [key, {citation:section.cit_kr, lines:section.lines, ...(section.optionCits ? {optionCits:section.optionCits} : {})}];
      }));
    }, source);
    fs.writeFileSync(path.join(root, 'tools/special_liturgies/korean_easter_readings.json'), JSON.stringify({
      source: {authority:'한국천주교주교회의', url:'https://missa.cbck.or.kr/DailyMissa/20260405', calendarInvariant:true},
      parts
    }, null, 2) + '\n');
    console.log('Stored seven Korean readings, their Psalms, the fixed Epistle and Alleluia.');
    if (process.argv[3]) {
      const directory=process.argv[3];
      const sources={A:fs.readFileSync(path.join(root,'tmp/holy-week-sources/palm-sunday.html'),'utf8'),
        B:fs.readFileSync(path.join(directory,'kr-palm-B.html'),'utf8'),
        C:fs.readFileSync(path.join(directory,'kr-palm-C.html'),'utf8')};
      const palm=await page.evaluate(sources=>{
        return Object.fromEntries(Object.entries(sources).map(([cycle,source])=>{
          const date=addDays(computeEasterSunday({A:2026,B:2024,C:2025}[cycle]),-7);
          state.specialVigilNavKey='';state.liturgyNavSlot='day';
          state.liturgicalDateContext={date,localDate:date,navSlot:'day'};
          const record=countrySpecialMassRecord(date,'KR');
          record.sourceParts={KR:{palm_gospel:{htmlSelector:'#missa-print',after:'^주님의\\s*예루살렘\\s*입성\\s*기념',start:'^복음(?:\\s|$)',stop:'^(?:행렬|<행렬|따름\\s*노래\\s*1|제2양식)',kind:'gospel',ending:[{sp:'╋',text:'주님의 말씀입니다.'},{sp:'◎',text:'그리스도님, 찬미합니다.'}]}}};
          const section=ordoSpecialOrder.parseParts(record,'KR',source,date).palm_gospel;
          if (!sourceSectionHasContent(section)||!section.cit_kr) throw Error('Missing Korean Palm Gospel '+cycle);
          return [cycle,{citation:section.cit_kr,lines:section.lines}];
        }));
      },sources);
      fs.writeFileSync(path.join(root,'tools/special_liturgies/korean_palm_gospels.json'),JSON.stringify({source:{authority:'한국천주교주교회의',calendarInvariant:true,dates:{A:'2026-03-29',B:'2024-03-24',C:'2025-04-13'}},byCycle:palm},null,2)+'\n');
      console.log('Stored Korean Palm entrance Gospels for cycles A/B/C.');
    }
  } finally {
    await browser.close(); await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
