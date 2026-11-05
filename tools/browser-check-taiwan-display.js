const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require('playwright'),mass=require('./mass-data-editor'),metadata=require('./country-metadata-upload-tool');
const november4=require('./fixtures/taiwan-20261104-display.json');
const root=path.resolve(__dirname,'..'),modules=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const registry=Object.fromEntries(Object.entries(modules).map(([code,module])=>[code,{ordinary:module.ordinary,ordinaryLanguage:module.ordinaryLanguage||module.language}]));
const countries=Object.fromEntries(metadata.countryMetadataItems().map(item=>[item.jurisdiction,item]));
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  const page=await browser.newPage({viewport:{width,height:844}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(({registry,countries})=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=window.countryMassData=registry;window.uploadedCountryMassMetadata=countries;},{registry,countries});
  await page.route('**/*',route=>{const url=new URL(route.request().url());return url.hostname==='127.0.0.1'&&!url.pathname.endsWith('/preface_matching.js')?route.continue():route.abort();});
  await page.goto('http://127.0.0.1:'+server.address().port+'/V31.2.html');
  await page.evaluate(()=>Promise.all([ordoDataLoader.ensure('special',['KR','TW']),ordoDataLoader.ensure('missal',['KR','ZH']),ordoDataLoader.ensure('daily',['TW'])]));
  const result=await page.evaluate(async november4=>{
   const check=(ok,message)=>{if(!ok)throw Error(message)},plain=plainTextFromHtml;
   check(typeof ordoPrefaceMatcher==='object'&&!document.querySelector('script[src*="preface_matching.js"]'),'Preface matching still depends on a separate network request');
   startupNoticeDecision=true;document.body.classList.remove('consent-pending');document.getElementById('consent-modal').style.display='none';
   state.useGps=false;state.currentLoc='ZH';state.selectedLocationCode='TW';state.targetLang=state.targetLocationCode='KR';
   const date=new Date(2026,10,3,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);
   const first=await refreshGpsBishopContext(37.5665,126.978,'KR');check(first?.ordinary,'Seoul GPS bishop unavailable');
   state.popeNames=popeNameLocalization('Leo');
   const fixture='我們的教宗 [某某]、我們的主教（某某）與所有主教。';
   let names=formatDynamicLineText(fixture,'zh');
   check(plain(names).includes('教宗 良')||plain(names).includes('教宗良'),'Chinese Pope name missing');
   check(plain(names).includes(localizedBishopName(first.ordinary,'zh'))&&!plain(names).includes('某某'),'GPS bishop did not consume its placeholder');
   check(!/Leo|方濟各/u.test(plain(names)),'Chinese Pope name fell back to the wrong name/language');
   check(plain(formatDynamicLineText('교황 [교황명]와(과)','kr'))==='교황 레오와','Pope name particle not resolved');
   const deceased=formatDynamicLineText('求祢垂念祢的僕人 [某某]，祢從人世將他召回。','zh');
   check(deceased.includes('data-name-role="deceased"'),'Departed soul was not highlighted as a name');
   check(formatDynamicLineText('求祢垂念祢的僕婢 [某某] 和所有參禮的人。','zh').includes('data-name-role="person"'),'Living person misclassified');
   check(formatDynamicLineText(deceased,'zh')===deceased,'Name emphasis nested on a repeated render');
   const second=await refreshGpsBishopContext(25.033,121.5654,'TW');check(second?.ordinary&&second.diocese!==first.diocese,'GPS context did not change');
   check(localizedBishopName(second.ordinary,'zh')==='多瑪斯·阿奎納'&&localizedBishopName(second.ordinary,'kr')==='토마스 아퀴나스','Taipei baptismal name was truncated or left in English');
   names=formatDynamicLineText(fixture,'zh');check(plain(names).includes(localizedBishopName(second.ordinary,'zh')),'New GPS name not applied');
   applyGpsBishopContext(null);const unresolved=formatDynamicLineText('我們的主教 [某某]','zh');check(unresolved.includes('muted-name-placeholder')&&!unresolved.includes(localizedBishopName(first.ordinary,'zh')),'Unavailable GPS retained an old bishop');
   const kr={title:'연중 제31주간 화요일',serverRecord:{kind:'source',version:2},data:{
    collect:{lines:[parsedLine('','전능하시고 자비로우신 하느님, 은총을 베푸시어 저희가 하느님을 합당히 섬기고 영원한 행복을 바라보며 거침없이 달려가게 하소서.')]},
    prayer_offerings:{lines:[parsedLine('','주님, 저희가 바치는 이 제물을 거룩한 제사로 받아들이시어 저희에게 주님의 자비를 가득히 베풀어 주소서.')]},
    prayer_after:{lines:[parsedLine('','주님, 천상의 성사로 저희를 새롭게 하셨으니 저희에게 주님의 힘찬 능력을 드러내시어 주님께서 약속하신 은혜를 얻게 하소서.')]},
    reading1:{cit_kr:'필리 2,5-11',lines:[parsedLine('▥','사도 바오로의 필리피서 말씀입니다.','intro'),parsedLine('','그리스도 예수님의 마음을 간직하십시오.\n그분께서 자신을 낮추셨습니다.','body')]}
   }};
   const zh=strictParseDailyMass('ZH',fetchTraditionalChineseDailyStaticSource(date),date,'TW');zh.serverRecord={kind:'source',version:2};
   resetMassDataFrom(getStartupOrdinaryMassData());const data={};mergeSourceData(data,zh,'ZH');mergeSourceData(data,kr,'KR');finalizeDailyReadingsData(data);
   check(state.liturgyInfo.sourceCelebrations.ZH.seasonal&&!state.liturgyInfo.sourceCelebrations.ZH.localProper,'Han weekday was mistaken for a local feast');
   check(!isGeneratedSeasonalNameForInfo('ZH','常年期第卅二周星期二',state.liturgyInfo),'Different calendar week was treated as today');
   for(const key of ['collect','prayer_offerings','prayer_after']){const item=massData.find(item=>getBaseId(item.id)===key);check(item.type!=='selectable'||Object.keys(item.variants).length<=1,key+' has duplicate language choices');const lines=item.lines||Object.values(item.variants)[0].lines;check(lines.some(line=>line.text_kr)&&lines.some(line=>line.text_zh),key+' lost an official language');}
   const reading=massData.find(item=>getBaseId(item.id)==='reading1');
   const ending=reading.lines.filter(line=>isDailyEndingLine(line));
   // Reproduce an independently edited source with a shifted response row.
   ending.forEach(line=>clearParsedLineLanguage(line,'zh'));
   ending[1].text_zh='上主的聖言。';ending[1].sp_zh='讀經員';reading.lines.push({text_zh:'感謝天主。',sp_zh:'信友'});
   ensureLocalizedReadingFrames(reading.lines,'reading1');render();
   const readingElement=document.querySelector('[data-part-id="reading1"]');check(!readingElement.querySelector('.btn-ai-trans'),'AI translation attached to a proclamation ending');
   for(const key of ['collect','prayer_offerings','prayer_after']){const element=document.querySelector('[data-part-id="'+key+'"]');check(element.querySelectorAll('select option').length<=1,key+' shows duplicate language choices');check(/[가-힣]/u.test(element.textContent)&&/天主|上主/u.test(element.textContent),key+' lost its bilingual display');}
   const fixed=reading.lines.filter(isDailyEndingLine);check(fixed.length===2&&fixed.every(line=>line.text_kr&&line.text_zh),'Proclamation/response rows not paired');
   check(!shouldRenderBlankParagraph({text_kr:'<span class="rubric">가슴을 치며 말한다.</span>',text_zh:''},'zh','penitential'),'Standalone instruction created a second blank line');
   check(shouldRenderBlankParagraph({text_kr:'Actual Korean phrase',text_zh:''},'zh','penitential'),'A real one-column paragraph gap disappeared');
   const eucharist=massData.find(item=>item.isEucharist),songs=getEucharistSongMap(eucharist);
   check(getEucharistSongHintKey(eucharist)==='common_2','Collected common preface was not mapped to common_2');
   check(!Object.keys(songs).some(key=>key.startsWith('daily_collected_preface')),'Same preface retained a separate collected option');
   const text=songs.common_2.content.map(line=>line.text_zh||'').join(' ');check(text.includes('祢以仁愛創造了人類')&&!/藉基督獲救恩|另有其他|感恩祭典/u.test(text),'Heading/footer leaked into the preface body');
   check(songs.common_2.content.some(line=>line.text_kr?.includes('자비로 구원')),'Canonical Korean preface was lost');
   for(const [key,lower,title]of [['common_4','zh','通用頌謝詞（四）（讚頌天主是天主的恩賜）'],['easter_2','en','PREFACE II OF EASTER'],['dead_1','jp','死者叙唱一'],['advent_2','pt','Prefácio do Advento II']]){
    const item={songs:eucharist.songs,__dailyServerPreface:{[lower+'_lines']:[{text:title},{text:'Retained authorized source paragraph for '+key+'.'}]}};
    const map=getEucharistSongMap(item);check(map[key]?.__dailySourceLanguages?.[lower],key+' collected preface did not join the existing catalogue entry');
    check(!Object.keys(map).some(id=>id.startsWith('daily_collected_preface')),key+' retained a duplicate source selector');
    check(map[key].content.some(line=>line['text_'+lower]?.startsWith('Retained authorized')),key+' source body lost');
    check(map[key].content.some(line=>line.text_kr),key+' other-country text lost');
    check(getEucharistSongMap(item)===map,key+' pure catalogue cache was not reused');
   }
   const unknown={songs:eucharist.songs,__dailyServerPreface:{zh_lines:[{text:'（二）（無法核實的新標題）'},{text:'另外的正文。'}]}};
   check(getEucharistSongMap(unknown).daily_collected_preface,'An unverified title was assigned to a known preface');
   for(const form of ['1','2','3','4'])for(const line of eucharist.forms[form]||[]){if(/我們的教宗|台北總教區的主教/u.test(line.text_zh||'')){const html=formatDynamicLineText(line.text_zh,'zh');check(!/方濟各|台北總教區的主教若翰/u.test(plain(html)),'Old fixed office name remains in prayer '+form);}}
   const host=document.createElement('div');host.style.cssText='position:absolute;left:-10000px;width:900px';document.body.appendChild(host);
   const heights=[];
   for(const lang of SUPPORTED_LANGS){
    const lower=lang.toLowerCase(),measure=text=>{host.innerHTML=linePairHTML('',text,lower);return host.querySelector('.text-content').getBoundingClientRect().height;};
    const rubric='<span class="rubric">Instruction</span>',body='<u>After</u>',baseline=measure('Before'+rubric+body),lineHeight=parseFloat(getComputedStyle(host.querySelector('.text-content')).lineHeight);
    for(const br of ['\n','\r\n','<br>','<br />'])check(Math.abs(measure('Before'+br+rubric+br+body)-baseline)<1,lang+' rubric added a second line break: '+br);
    check(Math.abs(measure('Before\n\n'+rubric+'\n\n'+body)-baseline-2*lineHeight)<1,lang+' intentional empty lines were lost');
    check(host.querySelectorAll('u').length===1,lang+' emphasis was lost during spacing repair');
    const one=measure('Before\nAfter'),two=measure('Before\n\nAfter');check(Math.abs(two-one-lineHeight)<1,lang+' ordinary explicit blank line changed');
    const response=gospelAcclamationAlleluiaText(lower,{count:2});check(isAlleluiaOnlyText(response),lang+' fixed Alleluia not recognized');check(gospelAcclamationAlleluiaProfile(response).count===2,lang+' Alleluia repetition was lost');
    heights.push({lang,rubricHeight:baseline,lineHeight});
   }host.remove();
   const novDate=new Date(2026,10,4,12);getStrictDateBase=()=>({localDay:cloneDateOnly(novDate),hour:12,timeZone:'Asia/Seoul'});state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(novDate);
   const parsedNovember4=strictParseDailyMass('ZH',fetchTraditionalChineseDailyStaticSource(novDate),novDate,'TW');check(parsedNovember4.data.gospel_accl.lines.length===3,'Direct Chinese PDF parser retained a physical wrap as a fourth row');
   resetMassDataFrom(getStartupOrdinaryMassData());const novemberData={};
   for(const [country,source]of Object.entries(november4.sources))mergeSourceData(novemberData,{...source,serverRecord:{kind:'source',version:2}},country==='TW'?'ZH':'KR');
   finalizeDailyReadingsData(novemberData);state.isSunday=true;state.options.penitential='A';state.options.creed='A';state.options.eucharist='2';state.options.eucharist_song='';render();
   const accl=document.querySelector('[data-part-id="gospel_accl"]');check(!accl.querySelector('.btn-ai-trans'),'November 4 Alleluia still has a spurious AI button');
   for(const lower of ['zh','kr']){const rows=accl.querySelectorAll('.pair-line.line-'+lower);check(rows.length===3,lower+' November 4 acclamation has '+rows.length+' rows');check(isAlleluiaOnlyText(rows[2].textContent.replace(/^(?:答|◎)\s*/u,'')),lower+' final response is misaligned');}
   check(accl.textContent.includes('身上。')&&!accl.textContent.includes('身 上。'),'Chinese PDF wrap was retained in the verse');
   const currentEucharist=massData.find(item=>item.isEucharist),novSongs=getEucharistSongMap(currentEucharist);
   check(state.options.eucharist_song==='pastors'&&novSongs.pastors.__dailySourceLanguages.zh,'Unnumbered November 4 preface did not join the canonical Pastors preface');
   const prefaceDom=[...document.querySelectorAll('[data-part-id="eucharist"] .text-content')].map(node=>node.textContent).join(' ');
   check(!prefaceDom.includes('天主藉牧者聖人照顧教會')&&prefaceDom.includes('祢藉聖人善行的榜樣鼓勵我們'),'Unnumbered preface title remains in the actual prayer DOM');
   check(novSongs.pastors.content.some(line=>line.text_kr)&&novSongs.pastors.content.some(line=>line.text_zh),'Pastors preface lost an official language');
   if(innerWidth<600)for(const key of ['penitential','creed'])check(!document.querySelector('[data-part-id="'+key+'"] .blank-line'),key+' has an inferred empty translation row in stacked display');
   const repeated=JSON.stringify(massData);render();check(JSON.stringify(massData)===repeated,'Repeated rendering changed source line breaks');
   return{gpsContexts:[first.diocese,second.diocese],nameHighlighting:true,readingFramesPaired:true,noTrailingAi:true,pairedPrayers:['collect','prayer_offerings','prayer_after'],prefaceKey:'common_2',cleanPrefaceBody:true,november4:{acclamationRows:3,aiButtons:0,prefaceKey:'pastors',noBodyTitle:true},spacing:heights};
  },november4);
  assert.deepEqual(errors,[]);console.log(JSON.stringify({width,...result,errors}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
