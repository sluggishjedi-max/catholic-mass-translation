const http = require('http');
const { URL } = require('url');
const {
  buildFirebaseUploadPayload,
  serveFirebaseUploadClient
} = require('./firebase-upload-support');
const massTool = require('./mass-data-editor');

const COLLECTION_NAME = 'country_mass_metadata';
const DYNAMIC_CALENDAR_START_YEAR = 2020;
const DYNAMIC_CALENDAR_END_YEAR = 2045;
const DAILY_READING_STRATEGIES = Object.freeze({
  IE: 'universalis-ireland',
  'GB-ENG': 'universalis-england',
  'GB-WLS': 'universalis-wales',
  'GB-SCT': 'universalis-scotland',
  PH: 'cbcp-philippines',
  TW: 'taiwan-manifest',
  AU: 'universalis-australia',
  NZ: 'universalis-new-zealand',
  IT: 'cei-italy',
  PT: 'liturgia-portugal',
  MX: 'cem-mexico',
  DE: 'schott-germany',
  BR: 'pocketterco-brazil'
});

function cloneSerializable(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

function computeEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day, 12);
}

function isoDate(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function dynamicCalendarByDate(module) {
  if (!module || typeof module.dynamicCalendar !== 'function') return {};
  const output = {};
  for (let year = DYNAMIC_CALENDAR_START_YEAR; year <= DYNAMIC_CALENDAR_END_YEAR; year += 1) {
    const easter = computeEasterSunday(year);
    for (let date = new Date(year, 0, 1, 12); date.getFullYear() === year; date.setDate(date.getDate() + 1)) {
      const entries = module.dynamicCalendar(new Date(date), { easter });
      const normalized = Array.isArray(entries) ? entries : (entries ? [entries] : []);
      if (normalized.length) output[isoDate(date)] = cloneSerializable(normalized);
    }
  }
  return output;
}

function countryMetadataItems() {
  const runtime = massTool.runCountryMassSources(massTool.readCountryMassSources());
  return Object.entries(runtime.registry).map(([jurisdiction, module]) => {
    const metadata = cloneSerializable(module);
    delete metadata.ordinary;
    metadata.jurisdiction = jurisdiction;
    const dynamicCalendar = dynamicCalendarByDate(module);
    if (Object.keys(dynamicCalendar).length) {
      metadata.dynamicCalendarByDate = dynamicCalendar;
      metadata.dynamicCalendarRange = [DYNAMIC_CALENDAR_START_YEAR, DYNAMIC_CALENDAR_END_YEAR];
    }
    if (metadata.dailyReadings && DAILY_READING_STRATEGIES[jurisdiction]) {
      metadata.dailyReadings.urlStrategy = DAILY_READING_STRATEGIES[jurisdiction];
      if (jurisdiction === 'PH') metadata.dailyReadings.fallbackUrlStrategy = 'usccb';
    }
    metadata.__firebaseDocId = `${jurisdiction}__metadata`;
    return metadata;
  }).sort((left, right) => left.jurisdiction.localeCompare(right.jurisdiction, 'en'));
}

function statePayload() {
  const items = countryMetadataItems();
  return {
    ok: true,
    collectionName: COLLECTION_NAME,
    countries: items.map(item => ({
      jurisdiction: item.jurisdiction,
      name: item.countryName || item.jurisdictionName || item.name || item.jurisdiction,
      language: item.ordinaryLanguage || item.language || '',
      calendarEntries: Object.keys(item.calendar || {}).length + Object.keys(item.dynamicCalendarByDate || {}).length,
      metadataFields: Object.keys(item).filter(key => !['calendar', '__firebaseDocId'].includes(key)).length,
      bytes: Buffer.byteLength(JSON.stringify(item))
    }))
  };
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store'
  });
  response.end(JSON.stringify(body));
}

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    try {
      if (request.method === 'GET' && url.pathname === '/') {
        response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        response.end(INDEX_HTML);
        return;
      }
      if (request.method === 'GET' && url.pathname === '/api/state') {
        sendJson(response, 200, statePayload());
        return;
      }
      if (request.method === 'GET' && url.pathname === '/api/firebase-export') {
        sendJson(response, 200, buildFirebaseUploadPayload({
          collectionName: COLLECTION_NAME,
          label: '국가별 전례력·메타데이터',
          items: countryMetadataItems(),
          idPrefix: 'country'
        }));
        return;
      }
      if (request.method === 'GET' && url.pathname === '/firebase-upload-client.js') {
        serveFirebaseUploadClient(response);
        return;
      }
      sendJson(response, 404, { ok: false, error: 'Not found' });
    } catch (error) {
      sendJson(response, 500, { ok: false, error: error.message || String(error) });
    }
  });
}

function parseArgs(argv) {
  const output = { host: '127.0.0.1', port: 4316, check: false };
  argv.forEach((value, index) => {
    if (value === '--check') output.check = true;
    if (value === '--host' && argv[index + 1]) output.host = argv[index + 1];
    if (value === '--port' && argv[index + 1]) output.port = Number(argv[index + 1]);
  });
  return output;
}

async function listenWithFallback(server, host, startPort) {
  for (let port = startPort; port < startPort + 20; port += 1) {
    try {
      await new Promise((resolve, reject) => {
        const onError = error => { server.off('listening', onListening); reject(error); };
        const onListening = () => { server.off('error', onError); resolve(); };
        server.once('error', onError);
        server.once('listening', onListening);
        server.listen(port, host);
      });
      return server.address();
    } catch (error) {
      if (error.code !== 'EADDRINUSE') throw error;
    }
  }
  throw new Error('사용 가능한 포트를 찾지 못했습니다.');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.check) {
    const state = statePayload();
    console.log(JSON.stringify({
      ok: true,
      collectionName: state.collectionName,
      countries: state.countries.length,
      calendarEntries: state.countries.reduce((sum, country) => sum + country.calendarEntries, 0),
      bytes: state.countries.reduce((sum, country) => sum + country.bytes, 0)
    }, null, 2));
    return;
  }
  const server = createServer();
  const address = await listenWithFallback(server, args.host, args.port);
  console.log(`Country Metadata Upload Tool: http://${address.address}:${address.port}/`);
}

module.exports = {
  COLLECTION_NAME,
  countryMetadataItems,
  createServer,
  dynamicCalendarByDate,
  statePayload
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
  <title>국가별 전례력·메타데이터 업로드</title>
  <style>
    :root { --blue:#315ee8; --navy:#233d78; --line:#d8dfec; --bg:#f3f6fb; --muted:#69758d; --green:#16865e; --red:#b62d3f; }
    * { box-sizing:border-box; }
    body { margin:0; color:#15213a; background:var(--bg); font-family:Arial,"Noto Sans KR",sans-serif; }
    header { padding:24px; color:white; background:linear-gradient(110deg,var(--navy),var(--blue)); }
    h1 { margin:0 0 8px; font-size:24px; }
    header p { margin:0; opacity:.88; }
    main { max-width:1120px; margin:20px auto; padding:0 18px 36px; }
    .panel { overflow:hidden; border:1px solid var(--line); border-radius:16px; background:white; box-shadow:0 8px 24px rgba(35,61,120,.06); }
    .summary { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px; border-bottom:1px solid var(--line); }
    .summary strong { display:block; margin-bottom:5px; font-size:18px; }
    .summary span { color:var(--muted); font-size:13px; }
    button { border:0; border-radius:10px; padding:12px 18px; color:white; background:var(--blue); font-weight:900; cursor:pointer; }
    button:disabled { opacity:.5; cursor:not-allowed; }
    .note { margin:16px 18px; padding:13px 15px; border-radius:12px; color:#245842; background:#eef9f4; line-height:1.55; }
    table { width:100%; border-collapse:collapse; }
    th,td { padding:11px 14px; border-top:1px solid var(--line); text-align:left; font-size:13px; }
    th { color:#41506c; background:#f8faff; }
    td.num { text-align:right; font-variant-numeric:tabular-nums; }
    .empty { padding:36px; color:var(--muted); text-align:center; }
    .toast { position:fixed; left:50%; bottom:24px; z-index:1000; width:max-content; max-width:min(640px,calc(100vw - 32px)); padding:12px 18px; border:1px solid #263451; border-radius:12px; color:white; background:#263451; font-size:13px; font-weight:900; text-align:center; pointer-events:none; opacity:0; visibility:hidden; transform:translate(-50%,18px); transition:opacity .18s ease,transform .18s ease,visibility .18s; box-shadow:0 10px 30px rgba(19,30,54,.2); }
    .toast.show { opacity:1; visibility:visible; transform:translate(-50%,0); }
    .toast.ok { color:var(--green); border-color:#bce4d4; background:#f1fbf7; }
    .toast.error { color:var(--red); border-color:#f0c3c8; background:#fff5f6; }
    @media (max-width:700px) { .summary { align-items:stretch; flex-direction:column; } button { width:100%; } th:nth-child(3),td:nth-child(3),th:nth-child(5),td:nth-child(5) { display:none; } }
  </style>
</head>
<body>
  <header>
    <h1>국가별 전례력·메타데이터 업로드</h1>
    <p>통상문 본문은 제외하고 국가 정보, 전례력, 출처와 일일 독서 설정을 Firebase에 게시합니다.</p>
  </header>
  <main>
    <section class="panel">
      <div class="summary">
        <div><strong id="summary">데이터를 확인하는 중입니다.</strong><span id="collection"></span></div>
        <button id="upload" type="button" disabled>Firebase에 수동 업로드</button>
      </div>
      <div class="note">업로드가 끝나면 V28 홈페이지가 이 컬렉션의 국가 메타데이터와 전례력을 사용합니다. 로컬 통상문 본문은 이 업로드에 포함되지 않습니다.</div>
      <table>
        <thead><tr><th>국가</th><th>표시 이름</th><th>언어</th><th>전례력 항목</th><th>데이터 크기</th></tr></thead>
        <tbody id="rows"><tr><td class="empty" colspan="5">불러오는 중…</td></tr></tbody>
      </table>
    </section>
  </main>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <script>
    const el = { summary:document.getElementById('summary'), collection:document.getElementById('collection'), upload:document.getElementById('upload'), rows:document.getElementById('rows'), toast:document.getElementById('toast') };
    let toastTimer = null;
    function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
    function setStatus(message, kind='') { clearTimeout(toastTimer); el.toast.textContent=message; el.toast.className='toast show'+(kind?' '+kind:''); toastTimer=setTimeout(()=>{ el.toast.className='toast'; },kind==='error'?6000:3600); }
    async function loadState() {
      const response=await fetch('/api/state',{cache:'no-store'}); const state=await response.json(); if(!response.ok||!state.ok) throw new Error(state.error||('HTTP '+response.status));
      const calendarCount=state.countries.reduce((sum,country)=>sum+country.calendarEntries,0);
      el.summary.textContent=state.countries.length+'개 국가·관할권 · 전례력 '+calendarCount+'개 항목';
      el.collection.textContent='Firebase 컬렉션: '+state.collectionName;
      el.rows.innerHTML=state.countries.map(country=>'<tr><td><strong>'+escapeHtml(country.jurisdiction)+'</strong></td><td>'+escapeHtml(country.name)+'</td><td>'+escapeHtml(country.language||'—')+'</td><td class="num">'+country.calendarEntries.toLocaleString()+'</td><td class="num">'+Math.round(country.bytes/1024).toLocaleString()+' KB</td></tr>').join('');
      el.upload.disabled=false; setStatus('업로드할 국가별 전례력·메타데이터를 준비했습니다.','ok');
    }
    el.upload.addEventListener('click',()=>window.ordoFirebaseUploader.upload({button:el.upload,setStatus}).catch(error=>setStatus(error.message,'error')));
    loadState().catch(error=>setStatus(error.message,'error'));
  </script>
  <script src="/firebase-upload-client.js"></script>
</body>
</html>`;
