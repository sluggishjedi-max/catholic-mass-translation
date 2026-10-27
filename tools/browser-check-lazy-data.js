const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require('playwright');
const mass = require('./mass-data-editor');
const metadata = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname,'..');
const massRegistry = mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const fixtures = {
  order_of_mass:Object.entries(massRegistry).flatMap(([jurisdiction,module])=>module.ordinary.map((entry,index)=>({...entry,jurisdiction,order:index*10}))), country_mass_metadata:metadata.countryMetadataItems(),
  country_special_liturgies:[], prayer_data:[], hymn_data:[]
};
const files = [];
let browser;
const server = http.createServer((req,res)=>{
  const file = path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if (!file.startsWith(root+path.sep)) return res.writeHead(403).end();
  fs.readFile(file,(error,data)=>{
    if (error) return res.writeHead(404).end();
    res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':file.endsWith('.svg')?'image/svg+xml':'text/html;charset=utf-8');
    res.end(data);
  });
});
async function cloudFixture(page) {
  await page.addInitScript(fixtures=>{
    window.__queries = [];
    Object.defineProperty(navigator,'geolocation',{value:{getCurrentPosition(){}}});
    window.firebase = {
      apps:[], initializeApp(){this.apps.push({});},
      firestore(){
        return {collection(name){
          return {where(field,operator,code){
            if (field !== 'jurisdiction' || operator !== '==') throw Error('Unscoped Firestore query');
            return {async get(){
              window.__queries.push([name,code]);
              return {docs:(fixtures[name] || []).filter(item=>item.jurisdiction === code).map(item=>({data:()=>item}))};
            }};
          }};
        }};
      }
    };
  },fixtures);
}
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  browser = await chromium.launch({headless:true});
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const width of [1280,390]) {
    const context = await browser.newContext({viewport:{width,height:844}});
    const page = await context.newPage();
    const requests = [], errors = [];
    let failChurch = true;
    page.on('pageerror',error=>errors.push(error.message));
    page.on('request',request=>{if(new URL(request.url()).hostname==='127.0.0.1') requests.push(decodeURIComponent(new URL(request.url()).pathname));});
    await cloudFixture(page);
    await page.route('**/*',async route=>{
      const url = new URL(route.request().url());
      if (url.hostname !== '127.0.0.1') return route.abort();
      if (url.pathname.endsWith('/korea_churches.js') && failChurch) {failChurch=false;return route.abort();}
      if (url.pathname.endsWith('/vietnam_hymns.js')) await new Promise(resolve=>setTimeout(resolve,350));
      return route.continue();
    });
    try {
      await page.goto(base+'/'+(width===1280?'V30.html':'index.html'),{waitUntil:'load'});
      await page.waitForFunction(()=>window.ordoFirebaseDataStatus?.massCount>0 && countrySpecialLiturgies.countries.KR && localMissalPrayerData.languages.EN);
      assert.equal(await page.evaluate(()=>document.documentElement.dataset.appVersion),'V30');
      assert(!requests.some(file=>/_(hymns|prayers|churches)\.js$/.test(file)),'First screen downloaded auxiliary country data');
      assert(!requests.some(file=>/taiwan_daily_mass|special-IT|missal-LA/.test(file)),'First screen downloaded unselected countries/languages');
      assert.deepEqual(await page.evaluate(()=>[...new Set(__queries.map(item=>item[1]))].sort()),['KR','US']);
      await page.evaluate(()=>{
        refreshDailyReadingsForLoad=async()=>true;
        refreshPopeNamesFromVatican=async()=>false;
      });
      await page.locator('#consent-accept').click();
      await page.waitForFunction(()=>document.querySelectorAll('#missal-root .part-container').length>5);
      await page.evaluate(()=>showAppTab('prayers'));
      await page.waitForFunction(()=>document.querySelectorAll('#prayer-results details').length>0);
      assert(requests.some(file=>file.endsWith('/korea_prayers.js')));
      assert(requests.some(file=>file.endsWith('/united_states_prayers.js')));
      assert(requests.some(file=>file.endsWith('/vatican_prayers.js')));
      assert(!requests.some(file=>file.endsWith('/italy_prayers.js')));
      await page.evaluate(()=>showAppTab('hymns'));
      await page.waitForFunction(()=>document.querySelectorAll('#hymn-results .hymn-list-item').length>0);
      const koreanHymnRequests = requests.filter(file=>file.endsWith('/korea_hymns.js')).length;
      await page.evaluate(()=>{showAppTab('mass');showAppTab('hymns');});
      assert.equal(requests.filter(file=>file.endsWith('/korea_hymns.js')).length,koreanHymnRequests,'Reopening downloaded data twice');
      await page.selectOption('#hymn-country','VN');
      await page.selectOption('#hymn-country','EN');
      await page.waitForFunction(()=>document.querySelectorAll('#hymn-results .hymn-list-item').length>0 && !!countryHymnData.US && !!countryHymnData.VN);
      assert.equal(await page.locator('#hymn-country').inputValue(),'EN','A stale request changed the selected language');
      assert(await page.evaluate(()=>getHymnData().some(item=>item.country === 'EN')),'Selected hymn corpus is missing');
      await page.evaluate(()=>showAppTab('churches'));
      await page.locator('#church-map-status button').waitFor();
      await page.locator('#church-map-status button').click();
      await page.waitForFunction(()=>churchLocalSearchDiagnostics.totalRecordCount>0);
      assert(!requests.some(file=>file.endsWith('/italy_churches.js')),'Church tab downloaded another country');
      await page.evaluate(async()=>{
        state.selectedLocationCode='IT';state.currentLoc='IT';state.targetLocationCode='TW';state.targetLang='ZH';
        await ensureActiveMassData();
      });
      assert(requests.some(file=>file.endsWith('/special-IT.js')));
      assert(requests.some(file=>file.endsWith('/taiwan_daily_mass_data.js')));
      assert(!requests.some(file=>file.endsWith('/italy_churches.js')),'Mass country change downloaded its church corpus');
      // New page in the same origin uses the persisted, country-scoped cache.
      const warm = await context.newPage();
      await cloudFixture(warm);
      await warm.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
      await warm.goto(base+'/index.html',{waitUntil:'load'});
      await warm.waitForFunction(()=>window.ordoFirebaseDataStatus?.massCount>0);
      assert.equal(await warm.evaluate(()=>__queries.length),0,'Warm startup queried Firestore again');
      await warm.close();
      assert.deepEqual(errors,[]);
      files.push({width,firstScreenCountryCodes:['KR','US'],countryQueries:await page.evaluate(()=>__queries.length),auxiliaryLoads:'on demand',retry:'passed',staleSelection:'passed',persistentCache:'passed'});
    } finally {await context.close();}
  }
  const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('https:')).map(s=>decodeURIComponent(s.split('?')[0]));
  const bytes = scripts.reduce((sum,file)=>sum+fs.statSync(path.join(root,file)).size,0);
  assert(bytes<2200000,'Initial scripts exceeded the startup budget');
  console.log(JSON.stringify({initialScriptBytes:bytes,initialScriptCount:scripts.length,cases:files},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{
  if(browser)await browser.close();
  await new Promise(resolve=>server.close(resolve));
});
