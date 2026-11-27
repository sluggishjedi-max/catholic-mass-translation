'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http'),{chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..'),mass=require('./mass-data-editor'),registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390,320]){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(registry=>{window.ordoPrayerEditorPreview=true;window.countryMassData=window.uploadedCountryMassData=registry;},registry);
  const url=new URL(process.env.ORDO_NOTICE_CHECK_URL||'http://127.0.0.1:'+server.address().port+'/V31.4.html');
  await page.route('**/*',route=>new URL(route.request().url()).origin===url.origin?route.continue():route.abort());await page.goto(url.href);
  const result=await page.evaluate(()=>{
   const check=(ok,message)=>{if(!ok)throw Error(message)};startupNoticeDecision=true;state.useGps=false;document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending','startup-loading');
   massData.splice(0,massData.length,{id:'1.1 entrance',type:'part',lines:[Object.fromEntries(SUPPORTED_LANGS.map(lang=>['text_'+lang.toLowerCase(),'Verification '+lang]))]});
   const countries={KR:'KR',VN:'VN',EN:'US',JP:'JP',ZH:'TW',IT:'IT',PT:'PT',ES:'MX',DE:'DE'};let cases=0;
   for(const [lang,country]of Object.entries(countries))for(const reverse of [false,true]){
    state.currentLoc=reverse?lang:'LA';state.selectedLocationCode=reverse?country:'VA';state.targetLang=reverse?'LA':lang;state.targetLocationCode=reverse?'VA':country;
    state.dailyReadingLanguageStatus.LA=reverse?'error':'ready';render();render();
    const visible=[...document.querySelectorAll('[data-legend-lang]')].filter(node=>!node.hidden);
    check(visible.length===2,'Expected both language columns');check(document.querySelectorAll('[data-notice-id="vatican-midnight"]').length===2,'A rerender duplicated or lost the Vatican notice');
    for(const group of visible){const key=group.dataset.legendLang,note=group.querySelector('[data-notice-id="vatican-midnight"]');check(note?.textContent==='※ '+vaticanMidnightNoticeText[key],key+' notice is missing or in the wrong language');check(note.getAttribute('role')==='note','Notice lacks its semantic role');check(!getComputedStyle(note,'::before').content.includes('/'),'A decorative separator was added before the requested notice');if(innerWidth<600)check(getComputedStyle(note).display==='block','Mobile notice is not on its own line');}
    if(lang==='KR')check(visible.find(group=>group.dataset.legendLang==='KR').querySelector('[data-notice-id="vatican-midnight"]').textContent==='※ 바티칸 원문은 로마시간 자정 이후부터 제공됩니다.','Requested Korean wording changed');
    check(document.documentElement.scrollWidth<=innerWidth+2,'Notice overflows the viewport');cases++;
   }
   const noticeSelector='[data-notice-id="japanese-daily-propers"]';
   const translations=new Map();
   let japaneseCases=0;
   for(const lang of SUPPORTED_LANGS.filter(key=>key!=='JP'))for(const reverse of [false,true]){
    const location=lang==='LA'?'VA':countries[lang];
    state.currentLoc=reverse?lang:'JP';state.selectedLocationCode=reverse?location:'JP';
    state.targetLang=reverse?'JP':lang;state.targetLocationCode=reverse?'JP':location;
    render();render();
    check(document.querySelectorAll(noticeSelector).length===2,'Expected one Japanese-source notice per active language');
    for(const key of [lang,'JP']){
     const note=document.querySelector('[data-legend-lang="'+key+'"] '+noticeSelector);
     check(note?.getBoundingClientRect().height>0,key+' Japanese-source notice is hidden');
     check(note.previousElementSibling?.matches('.psalm-song-note'),key+' Japanese-source notice must immediately follow the sung-psalm notice');
     check(note.textContent==='※ '+japaneseDailyPropersNoticeText[key],key+' Japanese-source notice is untranslated');
     translations.set(key,note.textContent);
    }
    check(document.documentElement.scrollWidth<=innerWidth+2,'Japanese-source notice overflows the viewport');
    japaneseCases++;
   }
   check(new Set(translations.values()).size===SUPPORTED_LANGS.length,'A supported language lacks a distinct Japanese-source notice');
   check(translations.get('KR')==='※ 일본어 입당송, 본기도, 예물기도, 영성체송, 영성체후기도는 원문출처 사정상 제공되지 않습니다.','Requested Korean wording changed');
   check(translations.get('JP')?.includes('入祭唱、集会祈願、奉納祈願、拝領唱、拝領祈願'),'Japanese liturgical terms are missing');
   state.currentLoc=state.selectedLocationCode='KR';state.targetLang='EN';state.targetLocationCode='US';render();
   check(!document.querySelector('[data-notice-id="vatican-midnight"]'),'Notice remained after leaving the Vatican');
   check(!document.querySelector(noticeSelector),'Japanese-source notice remained after leaving Japan');
   state.currentLoc='LA';state.selectedLocationCode='VA';state.targetLang=state.targetLocationCode='KR';render();
   return{cases,japaneseCases,bothColumns:true,nativeLanguages:translations.size,exactKoreanWording:true,noDuplicates:true,clearsOnCountryChange:true};
  });
  assert.deepEqual(errors,[]);await page.locator('#role-legend').screenshot({path:path.join(root,'tmp','vatican-notice-'+width+'.png')});console.log(JSON.stringify({width,...result,errors}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
