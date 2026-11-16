'use strict';
const assert=require('node:assert/strict');
const {createRuntime}=require('../functions/daily-runtime');
const {createStore}=require('../functions/daily-store');
const {createDailyService}=require('../functions/daily-service');
const {COUNTRIES,providers,sourceId,PARSER_REVISION}=require('../functions/daily-schema');
const {datedMassUrl}=require('../functions/daily-source-inventory');
const {memoryFirestore}=require('./test-daily-service');
const fixture=require('./fixtures/daily-source-masses-20261115.json');
const plain=value=>JSON.parse(JSON.stringify(value));
async function main(){
 const {collectQueuedDailyMass}=require('../functions/daily-functions');
 for(const status of ['partial','unavailable'])await assert.rejects(()=>collectQueuedDailyMass({collect:async()=>({results:[{status}]})},{country:'IT',date:'2026-11-17'}),/queued-source-incomplete/u);
 assert((await collectQueuedDailyMass({collect:async()=>({duplicate:true})},{})).duplicate);
 assert.equal((await collectQueuedDailyMass({collect:async()=>({results:[{status:'ready'}]})},{})).results[0].status,'ready');
 for(const profile of ['VIETNAM_SOUTH','VIETNAM_NORTH']){
  const runtime=createRuntime({country:'VN',date:'2026-11-15',source:'ktcg',profile},{ktcgProvider:async()=>({...fixture.kpv,profile})});
  try{
   runtime.run('applyVietnameseKtcgDiocesanPrayers=async()=>{};');
   const native=await runtime.collect();assert(native.validation.complete);assert.match(native.parsed.title,/Tử Đạo/u);
   const choices=runtime.refreshVariantChoices();assert(choices.some(choice=>choice.id==='alternative-0'),'Temporal Mass was discarded');
   const alternative=await runtime.collect('alternative-0');assert(alternative.validation.complete);assert.match(alternative.parsed.title,/XXXIII/u);
   assert.match(alternative.parsed.data.reading1.cit_vn,/Cn 31/u);assert.equal(alternative.parsed.data.gospel.optionCits.length,2,'Long/short Gospel must stay within its Mass');
   assert(!alternative.parsed.sourceMasses,'A stored alternative recursively contains its siblings');
   runtime.window.__native=native.parsed;runtime.window.__kr=fixture.korean;
   const result=plain(runtime.run(`(()=>{const date=getActiveLiturgicalSourceDate();state.currentLoc=state.selectedLocationCode='KR';state.targetLang=state.targetLocationCode='VN';state.liturgyInfo=buildGeneratedLiturgyInfo(date);const data={};mergeSourceData(data,__kr,'KR');mergeSourceData(data,__native,'VN');return {data,selection:state.liturgyInfo.nativeSourceCelebrations.VN};})()`));
   assert.equal(result.selection.selectedSourceMass.id,'alternative-0');assert.deepEqual(result.selection.unavailable,[]);
   for(const key of ['reading1','psalm','reading2','gospel_accl','gospel'])assert(result.data[key].vn.length>20,key+' missing Vietnamese text');
   assert.match(result.data.gospel.cit_vn,/Mt 25/u);assert.match(native.parsed.data.gospel.cit_vn,/Lc 9/u,'Native national feast was overwritten');
   const original=JSON.stringify(native.parsed);runtime.run("__native.serverRecord={kind:'edited'}");
   assert.equal(runtime.run("dailySourceMassForPrimary(__native,__kr.data,'KR','VN')===__native"),true,'Editor snapshot was rematched');
   delete native.parsed.serverRecord;assert.equal(JSON.stringify(native.parsed),original);
  }finally{runtime.close();}
 }
 const date='2026-11-16',url='https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=20261116';
 if(fixture.hanoi){
  const hanoi=createRuntime({country:'VN',date:'2026-11-15',source:'hanoi'});
  try{const incomplete=structuredClone(fixture.hanoi);delete incomplete.data.entrance;delete incomplete.properSources;hanoi.window.__hanoi=incomplete;hanoi.run(`resolveVietnameseDailyUrls=async()=>['https://source.example/2026-11-15'];fetchTextWithFallbacks=async()=>'<html>Hanoi dated fixture</html>';strictParseDailyMass=()=>JSON.parse(JSON.stringify(__hanoi));applyKtcgkpvCitationSource=async parsed=>parsed;`);const parsed=plain(await hanoi.run("fetchStrictDailyMass('VN',getActiveLiturgicalSourceDate(),{locationCode:'VN'})"));assert(parsed.data.entrance.text.includes('Ý định'),'A matching Missal antiphon was rejected before source validation');assert.deepEqual(parsed.data.reading1,incomplete.data.reading1,'Hanoi source reading was rewritten');assert(parsed.properSources.entrance);}finally{hanoi.close();}
 }
 const sections=(name)=>'<h2>Prima Lettura</h2><p>Ap 1,1-4</p><p>'+name+' first approved passage is preserved exactly as supplied by the publisher.</p><h2>Salmo Responsoriale</h2><p>Sal 1,1-2</p><p>R. Beato chi cammina nella legge del Signore.</p><h2>Acclamazione al Vangelo</h2><p>Gv 8,12</p><p>Alleluia, alleluia. Io sono la luce del mondo. Alleluia.</p><h2>Vangelo</h2><p>Lc 18,35-43</p><p>'+name+' approved Gospel passage is preserved exactly as supplied by the publisher.</p>';
 const titles=['LUNEDÌ DELLA XXXIII SETTIMANA DEL TEMPO ORDINARIO','SANTA MARGHERITA DI SCOZIA - MEMORIA FACOLTATIVA','SANTA GERTRUDE - MEMORIA FACOLTATIVA'];
 const html='<html><body>'+titles.map((title,index)=>'<h3 data-bs-target="#m'+index+'">'+title+'</h3><div id="m'+index+'">'+sections('Form '+index)+'</div>').join('')+'</body></html>';
 const metadata=Object.fromEntries(require('./country-metadata-upload-tool').countryMetadataItems().map(item=>[item.jurisdiction,item]));
 const it=createRuntime({country:'IT',date,source:'official'},{metadata,fetchImpl:async()=>new Response(html)});
 try{const native=await it.collect(),choices=it.refreshVariantChoices();assert(native.validation.complete);assert.equal(choices.length,3,JSON.stringify({title:native.parsed.title,choices,last:it.run("strictParseDailyMass('IT',__inventoryHtml,getActiveLiturgicalSourceDate(),'IT')"),snapshots:it.snapshots.map(s=>s.url),discovered:require('../functions/daily-source-inventory').discoverSourceMasses({window:it.window,source:html,url,date,parse:()=>({data:{reading1:{},gospel:{}}})}).masses.map(m=>m.title)}));assert(!native.parsed.data.reading1.text.includes('Form 1'),'Independent memorials were merged into native reading options');for(const choice of choices.filter(c=>c.id!=='day')){const result=await it.collect(choice.id);assert(result.validation.complete);assert.notEqual(result.parsed.title,native.parsed.title);assert.equal(result.parsed.data.reading1.optionCits?.length||1,1);}}finally{it.close();}
 assert(datedMassUrl('https://bible.usccb.org/bible/readings/112626-Thanksgiving','https://bible.usccb.org/bible/readings/112626.cfm','2026-11-26'));
 assert(!datedMassUrl('https://bible.usccb.org/bible/readings/112726.cfm','https://bible.usccb.org/bible/readings/112626.cfm','2026-11-26'));
 assert(!datedMassUrl('https://universalis.com/L/europe.england/20261116/lauds.htm','https://universalis.com/L/europe.england/20261116/mass.htm',date));
 assert(!datedMassUrl('https://universalis.com/L/europe.scotland/20261116/mass.htm','https://universalis.com/L/europe.england/20261116/mass.htm',date));
 assert(!datedMassUrl(url.replace('liturgia-del-giorno','santo-del-giorno'),url,date));
 assert(!datedMassUrl('https://unrelated.example/mass?date='+date,url,date));
 const pdfText=['첫째','둘째','셋째'].map((name,index)=>'위령의 날 '+name+' 미사\n제1독서 욥 19,1.23-27\n하느님의 말씀을 그대로 간직합니다.\n화답송 시편 23,1-2\n◎ 주님은 나의 목자.\n제2독서 로마 5,5-11\n형제 여러분, 주님의 사랑은 영원합니다.\n복음 환호송\n◎ 알렐루야.\n○ 주님께서 말씀하신다.\n◎ 알렐루야.\n복음 요한 6,37-40\n하느님의 아드님께서 영원한 생명을 주신다.').join('\n');
 const pdf=createRuntime({country:'KR',date:'2026-11-02',source:'official'},{sourceDocuments:[{id:'day',label:'위령의 날',sourceUrl:'https://source.example/2026-11-02.pdf',text:pdfText,file:{id:'fixture'}}]});
 try{assert.deepEqual(pdf.variantChoices().map(choice=>choice.id),['first','second','third']);assert((await pdf.collect('second')).validation.complete);}finally{pdf.close();}
 const shared=createRuntime({country:'KR',date,source:'official'});
 try{const selected=plain(shared.run(`SUPPORTED_LANGS.map(lang=>{const primary={reading1:{text:'Original reading',cit_kr:'창세 1,1-5'},gospel:{text:'Original Gospel',cit_kr:'요한 1,1-5'}},book=id=>bibleLanguageTables[lang].books[id].aliases[0],candidate={id:'matching-form',title:'Publisher temporal Mass',data:{reading1:{text:'Translated reading',['cit_'+lang.toLowerCase()]:book('GEN')+' 1,1-5'},gospel:{text:'Translated Gospel',['cit_'+lang.toLowerCase()]:book('JHN')+' 1,1-5'}}},native={title:'National feast',data:{},sourceMasses:[candidate]};return {lang,id:dailySourceMassForPrimary(native,primary,'KR',lang).id};})`));for(const row of selected)assert.equal(row.id,'matching-form',row.lang+' source matching was not shared');}finally{shared.close();}
 const db=memoryFirestore(),store=createStore(db),parsed=title=>({title,data:{reading1:{text:title+' reading'},gospel:{text:title+' Gospel'}}});let sources=0;
 for(const country of Object.keys(COUNTRIES))for(const provider of providers(country)){
  const request={country,date,...provider,sourceId:sourceId(country,provider.source,provider.profile),variant:'day'};sources++;
  await store.registerVariants(request,[{id:'day',label:'Native'},{id:'publisher-alternative',label:'Alternative'}]);
  await store.appendCollected(request,{parsed:parsed('Native '+country),fingerprint:'native',validation:{complete:true,missing:[]}});
  await store.appendCollected({...request,variant:'publisher-alternative'},{parsed:parsed('Alternative '+country),fingerprint:'alternative',validation:{complete:true,missing:[]}});
  const masses=await store.publishedSourceMasses(request);assert.equal(masses.length,1);assert.equal(masses[0].id,'publisher-alternative');assert.equal(masses[0].serverRecord.version,1);
  assert.equal((await store.version({...request,variant:'publisher-alternative'},1)).parsed.title,'Alternative '+country);
 }
 const service=createDailyService({db,enqueue:async()=>{},runtimeFactory(){let collected=0;return {variantChoices:()=>[{id:'day',label:'Native'},...(collected?[{id:'extra',label:'Extra'}]:[]),...(collected>1?[{id:'last',label:'Last'}]:[])],variants:()=>['day'],refreshVariantChoices(){return this.variantChoices();},async collect(variant){collected++;return {parsed:parsed('Discovery '+variant),validation:{complete:true,missing:[]},fingerprint:variant,parserRevision:PARSER_REVISION,snapshots:[{url:'https://source.example/'+variant,status:200,body:'Original '+variant}]};},close(){}};}});
 const request={country:'US',date:'2026-11-17',source:'official',sourceId:'official',variant:'day'};
 const result=await service.collect({...request,jobId:'inventory-fixture',runId:'inventory-fixture'});assert.deepEqual(result.results.map(row=>row.variant),['day','extra','last'],'Discovery stopped before all source Masses were stored');
 const native=await service.read(request),publicRecord=await service.read(request,{queueMissing:true});assert(!native.parsed.sourceMasses,'Editor snapshot was supplemented');assert.equal(publicRecord.parsed.sourceMasses.length,2);
 await store.appendEdited(request,parsed('Edited literal snapshot'),{baseVersion:1,expectedLatestVersion:1});assert(!((await service.read(request,{queueMissing:true})).parsed.sourceMasses),'Edited native record was rematched');
 console.log(JSON.stringify({countries:Object.keys(COUNTRIES).length,sources,independentImmutableMassRecords:sources*2,kpvProfiles:2,restoredScriptureSections:5,italianMasses:3,recursiveDiscovery:true,editorPreserved:true}));
}
main().catch(error=>{console.error(error.stack);process.exitCode=1;});
