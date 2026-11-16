'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict'),{chromium}=require('playwright');
const fixture=require('./fixtures/daily-source-masses-20261115.json'),root=path.resolve(__dirname,'..'),index=process.argv.indexOf('--base'),remote=index>=0?process.argv[index+1]:'',mass=require('./mass-data-editor');
(async()=>{
 let server;if(!remote){server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));}
 const base=remote||'http://127.0.0.1:'+server.address().port+'/',browser=await chromium.launch({headless:true}),reports=[];
 try{for(const width of [1280,390,320]){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  if(!remote){const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;await page.addInitScript(registry=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=window.countryMassData=registry;},registry);await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());}
  await page.goto(base+'V31.2.html?source-inventory='+Date.now(),{waitUntil:'domcontentloaded',timeout:90000});await page.waitForFunction(()=>typeof render==='function'&&typeof state==='object',null,{timeout:90000});
  const report=await page.evaluate(async({fixture,remote})=>{
   const check=(value,message)=>{if(!value)throw Error(message);};startupNoticeDecision=true;document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending','startup-loading');state.useGps=false;state.vnReadingSource='ktcg';state.vnReadingSourceConfirmed=true;validateLoadedDailyLiturgy=async()=>{};
   const date=new Date(2026,10,15,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});getActiveLiturgicalSourceDate=()=>date;const profiles=[];
   for(const profile of ['VIETNAM_SOUTH','VIETNAM_NORTH']){
    currentVietnameseKpvProfile=()=>profile;state.currentLoc=state.selectedLocationCode='KR';state.targetLang=state.targetLocationCode='VN';state.liturgicalDateContext=null;state.liturgyInfo=buildGeneratedLiturgyInfo(date);
    let native;if(remote){native=await ordoDailyServer.read({country:'VN',date:'2026-11-15',source:'ktcg',profile,variant:'day'},{force:true});check(native,'Published Vietnamese record missing');}
    else{fetchKtcgkpvMassReadingJson=async()=>({...fixture.kpv,profile});state.currentLoc=state.selectedLocationCode='VN';native=await fetchVietnameseKtcgDailyMass(date);state.currentLoc=state.selectedLocationCode='KR';state.liturgyInfo=buildGeneratedLiturgyInfo(date);fetchParsedDailyMass=async lang=>structuredClone(lang==='KR'?fixture.korean:native);}
    check(/Tử Đạo/u.test(native.title),'Native Vietnamese feast changed');check(native.sourceMasses.some(mass=>/XXXIII/u.test(mass.title)),'Stored temporal alternative missing');
    await ensureActiveMassData({force:remote});resetMassDataFrom(getStartupOrdinaryMassData());check(await fetchDailyReadings({date,sources:['KR','VN'],shouldApply:()=>true}),'Normal daily loading failed');
    for(const key of ['reading1','psalm','reading2','gospel_accl','gospel']){
     const part=document.querySelector('[data-part-id="'+key+'"]');check(part,'Missing part '+key);const text=[...part.querySelectorAll('.line-vn .text-content')].map(node=>node.textContent).join(' ');check(text.length>30,key+' translated text missing');
    }
    const gospelText=[...document.querySelectorAll('[data-part-id=gospel] .line-vn .text-content')].map(node=>node.textContent).join(' ').replace(/\s+/gu,' ');
    const expected=native.sourceMasses.find(mass=>/XXXIII/u.test(mass.title)).data.gospel.lines.find(line=>line.role==='body'&&line.text)?.text;
    check(expected&&gospelText.includes(expected.replace(/\s+/gu,' ').slice(0,50)),'Stored temporal Gospel did not reach the screen');
    check(state.liturgyInfo.nativeSourceCelebrations.VN.unavailable.length===0,'Available translation marked unavailable');check(document.documentElement.scrollWidth<=innerWidth+2,'Horizontal overflow');
    profiles.push({profile,nativeTitle:native.title,translatedTitle:getLiturgyDisplayName('VN'),sourceMass:state.liturgyInfo.nativeSourceCelebrations.VN.selectedSourceMass,restoredSections:5});
   }
   return {version:APP_VERSION,profiles};
  },{fixture,remote:!!remote});assert.deepEqual(errors,[]);reports.push({width,...report});console.log(JSON.stringify({width,...report}));await page.close();
 }}finally{await browser.close();if(server){server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}}
 if(process.env.ORDO_VERIFICATION_REPORT)fs.writeFileSync(process.env.ORDO_VERIFICATION_REPORT,JSON.stringify({remote:!!remote,reports},null,2));
})().catch(error=>{console.error(error.stack);process.exitCode=1;});
