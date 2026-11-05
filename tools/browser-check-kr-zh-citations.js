const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require('playwright');
const mass=require('./mass-data-editor'),metadata=require('./country-metadata-upload-tool');
const root=path.resolve(__dirname,'..'),modules=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const registry=Object.fromEntries(Object.entries(modules).map(([jurisdiction,module])=>[jurisdiction,{jurisdiction,ordinary:module.ordinary,ordinaryLanguage:module.ordinaryLanguage||module.language}]));
const countries=Object.fromEntries(metadata.countryMetadataItems().map(item=>[item.jurisdiction,item]));
const section=(text,citation,lang)=>({text,lines:[{sp:'',text,role:'body'}],['cit_'+lang]:citation});
const fixtures={
 KR:{title:'연중 제31주간 화요일',data:{
  entrance:section('주님, 저를 버리지 마소서. 저의 하느님, 저를 멀리하지 마소서. 주님, 제 구원의 힘이시여, 어서 저를 도우소서.','시편 38(37),22-23 참조','kr'),
  gospel_accl:section('주님이 말씀하신다. 고생하며 무거운 짐을 진 너희는 모두 나에게 오너라. 내가 너희에게 안식을 주리라.','마태 11,28 참조','kr'),
  reading1:section('오늘의 독서 본문입니다.','필리 2,5-11','kr'),gospel:section('오늘의 복음 본문입니다.','루카 14,15-24','kr')}},
 TW:{title:'常年期第卅一周星期二',data:{
  entrance:section('上主，求祢不要捨棄我；我的上主，求祢快來救護。','詠三七 22-23','zh'),
  gospel_accl:section('你們這些辛苦和負重擔的人，都到我這裡來吧！我要使你們得到安息。','瑪十一 28','zh'),
  reading1:section('今天的讀經原文。','聖保祿宗徒致斐理伯人書 2,5-11','zh'),gospel:section('今天的福音原文。','聖路加福音 14,15-24','zh')}}
};
(async()=>{
 let records=fixtures;
 if(process.argv.includes('--live'))records=Object.fromEntries(await Promise.all(['KR','TW'].map(async country=>{
  const response=await fetch('https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassData?country='+country+'&date=2026-11-03&source=official&variant=day',{signal:AbortSignal.timeout(65000)});
  assert(response.ok,'Live source was unavailable');return [country,(await response.json()).parsed];
 })));
 const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(!file.startsWith(root+path.sep))return res.writeHead(403).end();
  fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  const page=await browser.newPage({viewport:{width,height:844}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(({registry,countries})=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=registry;window.uploadedCountryMassMetadata=countries;},{registry,countries});
  await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
  await page.goto('http://127.0.0.1:'+server.address().port+'/V31.2.html');
  await page.evaluate(async()=>{await Promise.all([ordoDataLoader.ensure('special',['KR','TW']),ordoDataLoader.ensure('missal',['KR','ZH'])]);});
  const result=await page.evaluate(records=>{
   const check=(ok,message)=>{if(!ok)throw Error(message)};
   startupNoticeDecision=true;document.body.classList.remove('consent-pending');document.getElementById('consent-modal').style.display='none';
   const date=new Date(2026,10,3,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});
   const koreanEntrance=uploadedCountryMassData.KR.ordinary.find(item=>getBaseId(item.id)==='entrance');
   const chineseEntrance=uploadedCountryMassData.TW.ordinary.find(item=>getBaseId(item.id)==='entrance');
   const legacy={...structuredClone(koreanEntrance),type:'selectable',variants:{header:[koreanEntrance.cit],lines:koreanEntrance.lines}};
   delete legacy.lines;
   for(const type of ['part','selectable']){
    const mixed={...mergeIndependentOrdinary(legacy,chineseEntrance),type};normalizeDailySelectableTemplate(mixed);
    const lines=type==='selectable'?mixed.variants.A.lines:mixed.lines;
    for(const lower of ['kr','zh'])check(lines.some(line=>line['rubric_'+lower]),'Cached legacy template lost '+lower+' rubric');
   }
   const checkEntranceRubric=(country,lower)=>{
    const ordinary=uploadedCountryMassData[country].ordinary.find(item=>getBaseId(item.id)==='entrance');
    const rubric=(ordinary.lines||ordinary.variants.lines).find(line=>line['rubric_'+lower])?.['rubric_'+lower];
    if(!rubric)return;
    const nodes=[...document.querySelectorAll('[data-part-id="entrance"] .rubric')].filter(node=>node.textContent===rubric);
    check(nodes.length===1,'entrance lost or duplicated '+country+' ordinary rubric');
   };
   let ordinaryPairs=0;
   for(const [country,module] of Object.entries(uploadedCountryMassData)){
    const lang=module.ordinaryLanguage;if(country==='KR'||!SUPPORTED_LANGS.includes(lang))continue;
    for(const reverse of [false,true]){
     state.useGps=false;state.currentLoc=reverse?lang:'KR';state.selectedLocationCode=reverse?country:'KR';state.targetLang=reverse?'KR':lang;state.targetLocationCode=reverse?'KR':country;
     resetMassDataFrom(getStartupOrdinaryMassData());render();
     checkEntranceRubric('KR','kr');checkEntranceRubric(country,lang.toLowerCase());ordinaryPairs++;
    }
   }
   const reports=[];
   for(const primary of ['KR','ZH']){
    state.useGps=false;state.currentLoc=primary;state.selectedLocationCode=primary==='KR'?'KR':'TW';state.targetLang=primary==='KR'?'ZH':'KR';state.targetLocationCode=primary==='KR'?'TW':'KR';
    state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);
    resetMassDataFrom(getStartupOrdinaryMassData());
    const data={};mergeSourceData(data,structuredClone(records[primary==='KR'?'KR':'TW']),primary);
    mergeSourceData(data,structuredClone(records[primary==='KR'?'TW':'KR']),state.targetLang);finalizeDailyReadingsData(data);render();
    const citations={};
    for(const key of ['entrance','gospel_accl']){
     const item=massData.find(item=>getBaseId(item.id)===key),element=document.querySelector('[data-part-id="'+key+'"]');
     check(item.type!=='selectable'||Object.keys(item.variants||{}).length<=1,key+' still has language-only variants');
     check(element.querySelectorAll('select option').length<=1,key+' still has a duplicate selector');
     for(const country of ['KR','TW']){
      const source=records[country].data[key],text=source.lines.map(line=>line.text).sort((a,b)=>b.length-a.length)[0]||source.text;
      const normalize=value=>value.replace(/[\s\p{P}\p{S}]/gu,'');
      check(normalize(element.textContent).includes(normalize(text)),key+' lost '+country+' source text: '+JSON.stringify({primary,expected:text,rendered:element.textContent}));
     }
     if(key==='entrance'){checkEntranceRubric('KR','kr');checkEntranceRubric('TW','zh');}
    }
    for(const [key,chapter] of [['reading1','二'],['gospel','十四']]){
     const item=massData.find(item=>getBaseId(item.id)===key),selected=item.variants?.[state.options[key]]||item;
     citations[key]=headerCitationFor(item,selected,'ZH',key);
     check(citations[key].includes(chapter+' '),key+' did not use a Han chapter');
     check(bibleCitation.parse(citations[key],'ZH'),key+' display no longer identifies the original passage');
    }
    for(const [key,citation] of [['entrance','詠一五 11'],['gospel_accl','瑪十二 28'],['gospel_accl','未辨識書十一 28']]){
     const negative=structuredClone(data[key]);negative.cit_zh=citation;negative.optionCits_zh=[{cit_zh:citation}];
     const map=selectableOptionMapFromData(negative,key).optionMap;
     check(!buildDeterministicDailyVariantAlignment(key,negative,map).alignment.some(group=>group.kr===0&&group.zh===0),key+' merged a different or unresolved reference');
    }
    reports.push({primary,citations,pairedAntiphons:true,differentPassagesPreserved:true,ordinaryRubricsPreserved:true});
   }
   return {ordinaryPairs,cases:reports};
  },records);
  assert.deepEqual(errors,[]);console.log(JSON.stringify({width,live:process.argv.includes('--live'),...result,errors}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
