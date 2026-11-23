'use strict';
const assert=require('node:assert/strict'),fixture=require('./fixtures/daily-multilingual-gaps-20261116.json'),{createRuntime}=require('../functions/daily-runtime');
const cases=[
 ['reading1','묵시 1,1-4.5ㄴ;2,1-5ㄱ','Apocalypse 1:1-4,2:1-5','EN'],
 ['reading1','묵시 1,1-4.5ㄴ;2,1-5ㄱ','Ap 1,1-5a;2,1-5a','IT'],
 ['reading1','묵시 20,1-4.11―21,2','Kh 20,1-4.11-21,2','VN'],
 ['reading1','묵시 20,1-4.11―21,2','黙示録20・1-4、11-21・2','JP'],
 ['reading1','이사 63,16ㄹ-17.19ㄷㄹ;64,2ㄴ-7','Jes 63,16b–17.19b;64,3–7','DE'],
 ['reading1','즈카 2,14-17','Zechariah 2:10-13','EN'],
 ['gospel_accl','시편 95(94),7.8','Psalm 95:8','EN']
];
const runtime=createRuntime({country:'KR',date:'2026-11-16',source:'official'});
try{
 runtime.window.__cases=cases;assert(runtime.run("__cases.every(([key,a,b,lang])=>passageCitationsEquivalent(key,a,b,'KR',lang))"));
 assert(!runtime.run("passageCitationsEquivalent('reading1','묵시 1,1-4.5ㄴ;2,1-5ㄱ','Revelation 1:1-8','KR','EN')"));
 assert(!runtime.run("passageCitationsEquivalent('reading1','즈카 2,14-17','Zechariah 2:1-13','KR','EN')"));
 for(const [language,citation,id]of [['VN','Tv 1,1-2.3.4 và 6 Đ. Kh 2,7b','PSA'],['EN','cf.Jn15:16','JHN'],['ZH','若壹四 10','1JN'],['JP','①コリント15・20-26、28','1CO'],['LA','Ap 1,1-4;2,1-5a','REV'],['IT','Dal Sal 150','PSA'],['ES','Del salmo 14','PSA']]){
  runtime.window.__citation=citation;runtime.window.__language=language;assert.equal(runtime.run('bibleCitation.parse(__citation,__language)?.id'),id,citation);
 }
 runtime.window.__html=fixture.japaneseHtml;
 assert.equal(runtime.run("sourceMetadataTitle('Title: Chúa Nhật I Mùa Vọng – Năm B\\n\\nMarkdown Content:\\nNghe MP3 Lời Chúa','VN')"),'Chúa Nhật I Mùa Vọng – Năm B');
 assert(runtime.run("isMassTitleNoise('Nghe MP3 Lời Chúa','VN')"));
 assert.equal(runtime.run("strictFindLiturgyTitle(['17 de noviembre. Martes','SANTA ISABEL DE HUNGRÍA, religiosa','Memoria. Blanco','ANTÍFONA DE ENTRADA. Sal 111, 9'],'ES')"),'SANTA ISABEL DE HUNGRÍA, religiosa');
 assert.throws(()=>runtime.run("strictParseDailyMass('VN','Title: Chúa Nhật I Mùa Vọng – Năm A\\n\\nMarkdown Content:\\nBài Đọc I',new Date(2026,10,29,12),'VN')"),/different Sunday lectionary cycle/);
 const jp=runtime.run("strictParseDailyMass('JP',__html,getActiveLiturgicalSourceDate(),'JP')");
 assert.equal(jp.data.reading1.lines.find(x=>x.role==='intro').text,'ヨハネの黙示');assert(jp.data.reading1.lines.find(x=>x.role==='body').text.includes('朗読する'));
 assert(!/ORDO-|18・35|(?:^|\s)37(?=\s|[一-龯])/u.test(jp.data.gospel.text));assert.equal(jp.data.gospel_accl.lines.length,3);
 const en=runtime.run("strictFormatSection('EN','gospel_accl',{heading:'Alleluia',lines:['cf.Jn15:16','R. Alleluia, alleluia.','I have chosen you to bear lasting fruit.','R. Alleluia, alleluia.']})");
 assert(en.cit_en.includes('Jn15:16'));assert.equal(en.lines[0].sp,'R.');assert(!en.lines.some(x=>/^R\./u.test(x.text)));
 runtime.window.__edited={serverRecord:{kind:'edited'},data:{gospel_accl:{text:'R. Literal editor text',lines:[{sp:'R.',text:'R. Literal editor text'}]}}};
 assert(runtime.run('sanitizeDailyAcclamationReferences(__edited,"EN")===__edited'),'Edited literal text was normalized');
 const mx=runtime.run("strictParseReadingSection('ES','reading1',{heading:'PRIMERA LECTURA',lines:['Del libro del Apocalipsis del apóstol san Juan: 3, 1-6. 14-22','Texto original.']})");assert(mx.cit_es.startsWith('Apocalipsis '),'The author was mistaken for the biblical book');
 const zh=runtime.run("strictParseReadingSection('ZH','reading1',{heading:'讀經一',lines:['恭讀依撒意亞先知書 六三 16b-17, 六四 1, 3b-8','保留原文的內容。']})");assert.equal(zh.lines.find(line=>line.role==='intro').text,'恭讀依撒意亞先知書');assert(zh.text.includes('保留原文的內容。'));
 runtime.window.__restricted='<h1>Daily Readings</h1><p>Thanksgiving Day [In the Dioceses of the United States]</p><h3>Reading 1</h3><p>Original source text.</p>';
 assert.throws(()=>runtime.run("strictAssertSourceRegion('EN',__restricted,'PH')"),/source-region-restricted:US/);runtime.run("strictAssertSourceRegion('EN',__restricted,'US');strictAssertSourceRegion('EN',__restricted,'PH',{sourceChoice:'thanksgiving'});");
 runtime.window.__loadServerModule('JS file/lazy/missal-VN.js');
 const common=runtime.run("(()=>{const d=localMissalLanguageData('VN'),e=d.calendar['11-17'].find(e=>e.page===1190);return {original:e,resolved:localMissalDeclaredCommon(e,d),common:d.catalog.find(e=>e.kind==='common'&&e.page===1267)};})()");
 for(const key of ['entrance','collect','prayer_offerings','communion','prayer_after'])assert(common.resolved.data[key],key+' was not resolved from the declared Common');
 assert.equal(common.resolved.data.collect,common.original.data.collect);assert.equal(common.resolved.data.prayer_after,common.common.data.prayer_after);
 runtime.window.__saintSource={title:'Thánh nữ Ê-li-sa-bét Hung-ga-ri',calendarForm:'celebration',data:{collect:{text:'Existing publisher collect.',lines:[{sp:'',text:'Existing publisher collect.'}]}}};
 const collected=runtime.run("completeMissingDailyProperSections(__saintSource,'VN',new Date(2026,10,17,12))");
 assert.equal(collected.data.collect.text,'Existing publisher collect.');for(const key of ['entrance','prayer_offerings','communion','prayer_after']){assert(collected.data[key]?.text,key+' missing in server collection supplement');assert.equal(collected.properSources[key].page,1267);}
}finally{runtime.close();}
let checked=0;
for(const scenario of fixture.scenarios){const r=createRuntime({country:'KR',date:scenario.date,source:'official'});try{
 try{r.window.__loadServerModule('JS file/lazy/missal-'+scenario.lang+'.js');}catch(error){assert.match(error.message,/server-module-not-packaged/);}r.window.__loadServerModule('JS file/lazy/special-'+scenario.country+'.js');r.window.__scenario=scenario;
 const result=JSON.parse(JSON.stringify(r.run(`(()=>{const row=__scenario;state.currentLoc=state.selectedLocationCode='KR';state.targetLang=row.lang;state.targetLocationCode=row.country;state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());const data={};mergeSourceData(data,row.original,'KR');mergeSourceData(data,row.translated,row.lang);return {data,info:state.liturgyInfo};})()`)));
 for(const key of scenario.required)assert(result.data[key]?.[scenario.lang.toLowerCase()],scenario.date+' '+scenario.country+' '+key);
 if(scenario.date==='2026-11-24'&&scenario.country==='VN')assert(!result.data.reading2,'A regional solemnity must not add a second reading to the Korean memorial');
 if(scenario.regional.length){assert(result.info.nativeSourceCelebrations[scenario.lang].sameObservance,scenario.date+' '+scenario.country+' Same observance was not recognized');for(const key of scenario.regional){const section=result.data[key];r.window.__section=section;r.window.__key=key;const map=r.run('selectableOptionMapFromData(__section,__key).optionMap');assert(map.kr?.length&&map[scenario.lang.toLowerCase()]?.length,'Regional scripture was discarded');r.window.__map=map;const alignment=r.run('buildDeterministicDailyVariantAlignment(__key,__section,__map).alignment');assert(alignment.some(group=>Number.isInteger(group[scenario.lang.toLowerCase()])&&!Number.isInteger(group.kr)),scenario.date+' '+key+' has no regional language option');}}
 if(scenario.country==='TW'&&scenario.date==='2026-11-17')assert.match(result.info.names.ZH,/聖麗莎/u);
 checked++;
 }finally{r.close();global.gc?.();}}
console.log(JSON.stringify({realSourceScenarios:checked,reviewedReferencePairs:cases.length,japaneseHtml:true,regionalScripturePreserved:true,editedLiteralPreserved:true,declaredCommonResolved:true}));
