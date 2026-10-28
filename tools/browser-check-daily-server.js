const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('playwright'),mass=require('./mass-data-editor'),metadata=require('./country-metadata-upload-tool');
const root=path.resolve(__dirname,'..'),registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8');res.end(data);});});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{const page=await browser.newPage();await page.addInitScript(({registry,countries})=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=registry;window.uploadedCountryMassMetadata=countries;},{registry,countries:Object.fromEntries(metadata.countryMetadataItems().map(item=>[item.jurisdiction,item]))});
 await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());await page.goto(`http://127.0.0.1:${server.address().port}/V31.html`);
 const result=await page.evaluate(async()=>{
  const check=(condition,message)=>{if(!condition)throw Error(message);};
  state.selectedLocationCode=state.currentLoc='KR';state.targetLang='EN';state.targetLocationCode='US';state.useGps=false;
  await ensureActiveMassData();
  const date=new Date(2026,9,28,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});state.liturgicalDateContext=null;state.liturgyInfo=buildGeneratedLiturgyInfo(date);
  const response=version=>({title:'성 시몬과 성 유다(타대오) 사도 축일',color:'#d32f2f',data:Object.fromEntries(['entrance','collect','reading1','psalm','gospel_accl','gospel','communion','prayer_offerings','prayer_after'].map(key=>[key,{text:key==='collect'?'관리자 편집 본기도 v'+version:'Synthetic '+key+' passage.',lines:[parsedLine('',key==='collect'?'관리자 편집 본기도 v'+version:'Synthetic '+key+' passage.','body')]}])),serverRecord:{key:'대한민국_2026-10-28',version,kind:'edited'}});
  let version=2,reads=0;window.ordoDailyServer={read:async request=>{reads++;check(request.country==='KR'&&request.date==='2026-10-28','Wrong server identity');const parsed=response(version);parsed.data.gospel_accl.lines.unshift(parsedLine('Versicle','See Te Deum','body'));parsed.data.gospel_accl.text=parsedLinesToText(parsed.data.gospel_accl.lines);return parsed;}};
  const original=dailySourceFetchers.KR;dailySourceFetchers.KR=async()=>{throw Error('Server hit should not download the original source');};
  startupNoticeDecision=true;document.body.classList.remove('consent-pending');document.getElementById('consent-modal').style.display='none';
  for(const current of [2,4]){version=current;const parsed=await fetchParsedDailyMass('KR',date,{locationCode:'KR',forceRemote:true});check(parsed.serverRecord.version===current,'Published revision did not update');check(!/See Te Deum/i.test(JSON.stringify(parsed.data.gospel_accl)),'Cached reference label was retained');resetMassDataFrom(getStartupOrdinaryMassData());const merged={};mergeSourceData(merged,parsed,'KR');finalizeDailyReadingsData(merged);render();check(document.querySelector('[data-part-id="collect"]').textContent.includes('관리자 편집 본기도 v'+current),'Local Missal overlay replaced the edited server prayer');check(!/See Te Deum/i.test(document.querySelector('[data-part-id="gospel_accl"]').textContent),'Reference label appeared in rendered acclamation');}
  // Exact collected and edited prefaces must survive Missal overlays and render.
  for(const kind of ['collected','edited']){
   resetMassDataFrom(getStartupOrdinaryMassData());const parsed=response(4);parsed.serverRecord.kind=kind;
   parsed.data.preface={options:[{text:'수집된 감사송의 정확한 첫 본문.',lines:[parsedLine('','수집된 감사송의 정확한 첫 본문.')]},{text:'수집된 감사송의 정확한 둘째 본문.',lines:[parsedLine('','수집된 감사송의 정확한 둘째 본문.')]}]};
   const merged={};mergeSourceData(merged,parsed,'KR');finalizeDailyReadingsData(merged);
   const eucharist=massData.find(item=>item.isEucharist||getBaseId(item.id)==='eucharist'),songs=getEucharistSongMap(eucharist);
   check(songs.daily_collected_preface.content[0].text_kr==='수집된 감사송의 정확한 첫 본문.','Server preface changed');check(songs.daily_collected_preface_2.content[0].text_kr==='수집된 감사송의 정확한 둘째 본문.','Preface alternative lost');
   state.options.eucharist_song='';state.options.eucharist_form='2';render();check(getSelectedEucharistSongKey(eucharist)==='daily_collected_preface','Collected preface was not selected');check(document.body.textContent.includes('수집된 감사송의 정확한 첫 본문.'),'Collected preface missing from Mass screen');
  }
  // Canonical JS sequence comparison is exact after typographic normalization.
  const canonical='A canonical sequence with enough meaningful words to verify an exact source comparison without matching a placeholder.';
  const item={lines:[{sp_en:'ALL',text_en:canonical},{rubric_en:'Approved rubric'}]};
  let data={en_lines:[parsedLine('',canonical.toUpperCase())]};preferMatchingJsSequence(item,data);check(item.__dailySequenceJsLanguages.en,'Matching JS sequence not used');check(data.en_lines[0].sp==='ALL','JS speaker was discarded');
  data={en_lines:[parsedLine('',canonical+' Additional source words.')]};preferMatchingJsSequence(item,data);check(!item.__dailySequenceJsLanguages.en,'Different sequence replaced by JS');check(data.en_lines[0].text.endsWith('Additional source words.'),'Different source sequence lost');
  // A feast outside the requested seasons keeps the simple blessing on load.
  const blessing=massData.find(item=>getBaseId(item.id)==='blessing');check(blessing,'Blessing template unavailable');state.autoBlessingSignature='';prepareKoreanBlessingForActiveDate(blessing,'blessing');check(state.options.blessing==='A','Ordinary apostle feast auto-selected solemn blessing');
  const realDate=getActiveLiturgicalSourceDate;getActiveLiturgicalSourceDate=()=>new Date(2026,11,25,12);state.autoBlessingSignature='';state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());prepareKoreanBlessingForActiveDate(blessing,'blessing');check(state.options.blessing==='C','Christmas did not load solemn blessing');
  getActiveLiturgicalSourceDate=()=>new Date(2026,1,25,12);state.autoBlessingSignature='';state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());prepareKoreanBlessingForActiveDate(blessing,'blessing');check(state.options.blessing==='C','Lent did not load prayer over people');getActiveLiturgicalSourceDate=realDate;
  getActiveLiturgicalSourceDate=()=>new Date(2026,3,5,12);state.autoBlessingSignature='';state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());prepareKoreanBlessingForActiveDate(blessing,'blessing');check(state.options.blessing==='C','Easter did not load solemn blessing');
  getActiveLiturgicalSourceDate=()=>new Date(2026,10,24,12);state.autoBlessingSignature='';state.liturgyInfo={names:{KR:'지역 고유 순교 성인 대축일'},meta:{rank:'solemnity'},isSolemnity:true};prepareKoreanBlessingForActiveDate(blessing,'blessing');check(state.options.blessing==='C','Local solemnity did not load an approved solemn blessing');getActiveLiturgicalSourceDate=realDate;
  dailySourceFetchers.KR=original;return {serverReads:reads,publishedVersions:[2,4],originalFetches:0,editedPrayerPreserved:true,collectedPrefaceExact:true,prefaceOptions:2,sequenceJsMatch:true,blessingDefaults:true};
 });assert.equal(result.serverReads,2);console.log(JSON.stringify(result));await page.close();
 }finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
