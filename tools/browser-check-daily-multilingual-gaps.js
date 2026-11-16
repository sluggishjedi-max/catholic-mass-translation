'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict'),{chromium}=require('playwright'),mass=require('./mass-data-editor');
const root=path.resolve(__dirname,'..'),fixture=require('./fixtures/daily-multilingual-gaps-20261116.json'),index=process.argv.indexOf('--base'),remote=index>=0?process.argv[index+1]:'',reports=[];
(async()=>{let server;if(!remote){server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));}
 const widthIndex=process.argv.indexOf('--width'),widths=widthIndex>=0?[Number(process.argv[widthIndex+1])]:[1280,390,320];
 const base=remote||'http://127.0.0.1:'+server.address().port+'/',browser=await chromium.launch({headless:true});try{for(const width of widths){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  if(!remote){const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;await page.addInitScript(registry=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=window.countryMassData=registry;},registry);await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());}
  await page.goto(base+'V31.2.html?multilingual-gaps='+Date.now(),{waitUntil:'domcontentloaded',timeout:90000});await page.waitForFunction(()=>typeof render==='function'&&typeof state==='object',null,{timeout:90000});
  const report=await page.evaluate(async({scenarios,remote})=>{
   const check=(ok,message)=>{if(!ok)throw Error(message);},normalize=value=>String(value||'').replace(/[\s\p{P}\p{S}]/gu,'');let rendered=0,regional=0,options=0;
   startupNoticeDecision=true;document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending','startup-loading');state.useGps=false;
   for(const sample of scenarios){const [year,month,day]=sample.date.split('-').map(Number),date=new Date(year,month-1,day,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});getActiveLiturgicalSourceDate=()=>date;
    state.currentLoc=state.selectedLocationCode='KR';state.targetLang=sample.lang;state.targetLocationCode=sample.country;state.liturgicalDateContext=null;state.liturgyInfo=buildGeneratedLiturgyInfo(date);state.options={};
    await ensureActiveMassData({force:remote});await ordoDataLoader.ensure('special',['KR',sample.country]);try{await ordoDataLoader.ensure('missal',['KR',sample.lang]);}catch{}
    let original=sample.original,translated=sample.translated;
    if(remote){const source=sample.country==='VN'?'ktcg':'official',profile=sample.profile||'VIETNAM_SOUTH';original=await ordoDailyServer.read({country:'KR',date:sample.date,source:'official',variant:'day'},{force:true});translated=await ordoDailyServer.read({country:sample.country,date:sample.date,source,profile,variant:'day'},{force:true});check(original&&translated,'Published source missing '+sample.country+' '+sample.date);}
    resetMassDataFrom(getStartupOrdinaryMassData());const data={};mergeSourceData(data,original,'KR');mergeSourceData(data,translated,sample.lang);finalizeDailyReadingsData(data);render();
    for(const key of sample.required){const lower=sample.lang.toLowerCase(),item=massData.find(item=>getBaseId(item.id)===key);check(item,'Part missing '+key);const map=selectableOptionMapFromData(data[key],key).optionMap,targets=map[lower]||[];check(targets.length,'Translated option missing '+sample.date+' '+sample.country+' '+key);
     for(const target of targets){const rows=Array.isArray(target)?target:target.lines||[],anchor=rows.map(line=>line.text||'').sort((a,b)=>b.length-a.length)[0]||target.text||'';if(!anchor)continue;let found=false;for(const option of item.type==='selectable'?Object.keys(item.variants||{}):['']){if(option)state.options[key]=option;render();const part=document.querySelector('[data-part-id="'+key+'"]'),text=[...part.querySelectorAll('.line-'+lower+' .text-content')].map(node=>node.textContent).join(' ');if(normalize(text).includes(normalize(anchor).slice(0,70))){found=true;break;}}check(found,'Stored target text was not rendered '+sample.date+' '+sample.country+' '+key);options++;}
    }
    if(sample.regional.length){regional++;check(state.liturgyInfo.nativeSourceCelebrations[sample.lang].sameObservance,'Regional observance discarded');}
    check(document.documentElement.scrollWidth<=innerWidth+2,'Horizontal overflow '+sample.country);rendered++;
   }
   return {version:APP_VERSION,rendered,regional,options};
  },{scenarios:remote?fixture.scenarios.filter((row,index)=>index<=1||index===8||index===9||index===11||index===12||row.regional.length):fixture.scenarios,remote:!!remote});assert.deepEqual(errors,[]);reports.push({width,...report});console.log(JSON.stringify(reports.at(-1)));await page.close();
 }}finally{await browser.close();if(server){server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}}
 if(process.env.ORDO_VERIFICATION_REPORT)fs.writeFileSync(process.env.ORDO_VERIFICATION_REPORT,JSON.stringify({remote:!!remote,reports},null,2));
})().catch(error=>{console.error(error.stack);process.exitCode=1;});
