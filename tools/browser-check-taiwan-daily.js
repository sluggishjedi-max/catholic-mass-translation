const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright');
const mass=require('./mass-data-editor'),metadata=require('./country-metadata-upload-tool');
const root=path.resolve(__dirname,'..'),modules=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
// Firestore publishes ordinary rows separately from country source metadata.
const registry=Object.fromEntries(Object.entries(modules).map(([jurisdiction,module])=>[jurisdiction,{jurisdiction,ordinaryLanguage:module.ordinaryLanguage||module.language,ordinary:module.ordinary}]));
const countries=Object.fromEntries(metadata.countryMetadataItems().map(item=>[item.jurisdiction,item]));
(async()=>{
 const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(!file.startsWith(root+path.sep))return res.writeHead(403).end();
  fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`,browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  const page=await browser.newPage({viewport:{width,height:844}}),errors=[],warnings=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(message.type()==='warning')warnings.push(message.text());});
  await page.addInitScript(({registry,countries,base})=>{
   window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=registry;window.uploadedCountryMassMetadata=countries;
   window.ORDO_DAILY_MASS_ENDPOINT=base+'/fixture/daily';
  },{registry,countries,base});
  await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
  await page.goto(base+'/V31.1.html');
  const published=await page.evaluate(async()=>{
   await Promise.all([ordoDataLoader.ensure('special',['TW','KR']),ordoDataLoader.ensure('missal',['ZH','KR']),ordoDataLoader.ensure('daily',['TW'])]);
   state.selectedLocationCode='TW';state.currentLoc='ZH';state.targetLocationCode=state.targetLang='KR';state.useGps=false;
   const date=new Date(2026,10,3,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Taipei'});
   state.allSoulsNavChoice='';state.specialVigilNavKey='';state.liturgyNavSlot='day';state.liturgicalDateContext=null;
   rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);
   resetMassDataFrom(getStartupOrdinaryMassData());startupNoticeDecision=true;
   document.body.classList.remove('consent-pending');document.getElementById('consent-modal').style.display='none';
   const parsed=ordoDailyContent.normalizeParsed(strictParseDailyMass('ZH',fetchTraditionalChineseDailyStaticSource(date),date,'TW'));
   window.ordoPrayerEditorPreview=false;
   return {key:'TW_2026-11-03',version:97,kind:'collected',parsed};
  });
  let failed=false,requests=0;
  await page.route('**/fixture/daily?*',async route=>{
   requests++;
   if(failed)return route.fulfill({status:404,json:{error:'not-collected'}});
   await new Promise(resolve=>setTimeout(resolve,5500));
   await route.fulfill({json:published});
  });
  const result=await page.evaluate(async()=>{
   const date=getActiveLiturgicalSourceDate(),started=performance.now();
   const parsed=await fetchParsedDailyMass('ZH',date,{locationCode:'TW',forceRemote:true});
   const elapsed=performance.now()-started;
   if(parsed.serverRecord?.version!==97)throw Error('A delayed server response was replaced by fallback data');
   const fetched={};mergeSourceData(fetched,parsed,'ZH');finalizeDailyReadingsData(fetched);
   state.dailyReadingsLoading=false;state.dailyReadingLanguageStatus={ZH:'done'};render();
   return {elapsed,version:parsed.serverRecord.version,body:document.getElementById('missal-root').textContent};
  });
  assert.match(result.body,/斐理伯/u);assert.match(result.body,/14,15-24/u);assert(result.elapsed>=5000);
  failed=true;
  const fallback=await page.evaluate(async()=>{
   const parsed=await fetchParsedDailyMass('ZH',getActiveLiturgicalSourceDate(),{locationCode:'TW',forceRemote:true});
   return {complete:hasCompleteTraditionalChineseDailyMass(parsed,'TW'),server:!!parsed.serverRecord,sourceUrl:parsed.sourceUrl,gospel:parsed.data.gospel.cit_zh};
  });
  if(fallback.server)console.log(JSON.stringify({fallback,warnings}));
  assert(fallback.complete);assert.equal(fallback.server,false);assert.match(fallback.gospel,/14,15-24/u);
  assert.match(fallback.sourceUrl,/drive\.google\.com\/file\/d\/1OF_pbJRJb6mNCRybjVABE-WQFjxtmYmP/u);
  assert.deepEqual(errors,[]);assert.equal(requests,2);
  console.log(JSON.stringify({width,delayedServerMs:Math.round(result.elapsed),serverVersion:result.version,localNovember3Fallback:fallback,errors}));
  await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
