const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const mass=require('./mass-data-editor'),metadataTool=require('./country-metadata-upload-tool');
const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const metadata=Object.fromEntries(metadataTool.countryMetadataItems().map(item=>[item.jurisdiction,item]));
const heading=(name,body)=>`<h4>${name}</h4>`+body.split('\n').map(line=>`<p>${line}</p>`).join('');
const kr=heading('제1독서','▥ 지혜서의 말씀입니다.\n3,1-9\n의인들의 영혼은 하느님의 손안에 있다.\n주님의 말씀입니다.')+heading('화답송 시편 23(22),1','◎ 주님은 나의 목자.\n○ 나 아쉬울 것 없어라.')+heading('제2독서','▥ 로마서의 말씀입니다.\n6,3-9\n그리스도와 함께 살리라.\n주님의 말씀입니다.')+heading('복음 환호송','◎ 알렐루야.\n○ 나는 부활이요 생명이다.')+heading('복음','✠ 요한이 전한 거룩한 복음입니다.\n6,37-40\n주님께서 그들을 살리실 것이다.\n주님의 말씀입니다.');
const en=heading('Reading 1','Wis 3:1-9\nThe souls of the just are in the hand of God.')+heading('Responsorial Psalm','Psalm 23:1-3a, 3b-4, 5, 6\nR. (1) The Lord is my shepherd.\nor:\nR. (4) Though I walk in the valley of darkness.\nThe LORD is my shepherd; I shall not want.\nR. The Lord is my shepherd.\nor:\nR. Though I walk in the valley of darkness.\nYou spread the table before me.\nR. The Lord is my shepherd.')+heading('Reading 2','Rom 6:3-9\nWe shall also live with him.')+heading('Alleluia','R. Alleluia, alleluia.\nI am the resurrection and the life.')+heading('Gospel','Jn 6:37-40\nI will raise him on the last day.');
(async()=>{
 const fixtures={kr1:kr,kr2:kr.replace('요한이 전한','마태오가 전한').replace('6,37-40','11,25-30'),kr3:kr.replace('3,1-9','4,7-15').replace('요한이 전한','마태오가 전한').replace('6,37-40','25,1-13'),en,xmas:'<a href="/DailyMissa/20261224/16523">12월 24일</a><a href="/DailyMissa/20261224/16524">주님 성탄 대축일 - 전야 미사</a>'};
 if(process.env.ORDO_LIVE_FIXTURES)for(const key of Object.keys(fixtures)){const file=path.join(process.env.ORDO_LIVE_FIXTURES,key==='xmas'?'kr-xmas.html':key+'.html');if(fs.existsSync(file))fixtures[key]=fs.readFileSync(file,'utf8');}
 if(process.env.ORDO_LIVE_FIXTURES)for(const key of ['kr-index-markdown','kr1-markdown','kr2-markdown','kr3-markdown']){const file=path.join(process.env.ORDO_LIVE_FIXTURES,key+'.txt');if(fs.existsSync(file))fixtures[key]=fs.readFileSync(file,'utf8');}
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{const page=await browser.newPage();await page.addInitScript(({registry,metadata})=>{globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;globalThis.uploadedCountryMassMetadata=metadata;globalThis.ordoPrayerEditorPreview=true;},{registry,metadata});await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());await page.goto('http://127.0.0.1:'+server.address().port+'/V29.html');
 const result=await page.evaluate(async fixtures=>{
  const check=(value,message)=>{if(!value)throw Error(message)};
  state.useGps=false;state.selectedLocationCode='KR';state.currentLoc='KR';state.targetLang='VN';state.targetLocationCode='VN';state.vnReadingSource='KPV';
  const date=new Date(2026,10,2),reports=[];
  const choices=['first','second','third'],labels=['첫째','둘째','셋째'];
  const sourceUrls=choices.map((choice,index)=>'https://missa.cbck.or.kr/DailyMissa/20261102/'+(16469+index));
  const indexUrl='https://missa.cbck.or.kr/DailyMissa/20261102';
  const indexSource=fixtures['kr-index-markdown']||'Title: 2026.11.02 [자] 죽은 모든 이를 기억하는 위령의 날 - 첫째 미사\nMarkdown Content:\n'+sourceUrls.map((url,index)=>'[[자] 죽은 모든 이를 기억하는 위령의 날 - '+labels[index]+' 미사]('+url+')').join('\n')+'\n'+strictSourceLines(fixtures.kr1).join('\n');
  const sourceBodies=sourceUrls.map((url,index)=>fixtures['kr'+(index+1)+'-markdown']||'Title: 2026.11.02 [자] 죽은 모든 이를 기억하는 위령의 날 - '+labels[index]+' 미사\nURL Source: '+url+'\nMarkdown Content:\n'+strictSourceLines(fixtures['kr'+(index+1)]).join('\n'));
  const readingKeys=['reading1','psalm','reading2','gospel_accl','gospel'];
  for(const color of ['자','백','흑','紅']){const label='['+color+'] Second Mass';check(extractSourceLinks('['+label+'](/DailyMissa/20261102/16470 "Mass")',indexUrl).some(link=>link.href===sourceUrls[1]&&link.text===label),'Bracketed link label lost: '+color);}
  const readingFetches=[];
  fetchTextWithFallbacks=async url=>{readingFetches.push(url);if(url===indexUrl)return indexSource;const index=sourceUrls.indexOf(url);if(index>=0)return sourceBodies[index];throw Error('Unexpected All Souls source: '+url)};
  fetchJinaHtml=async()=>{throw Error('The Markdown source must resolve the selected Mass')};
  const resolvedMasses=[];
  for(const [index,choice]of choices.entries()){
   state.allSoulsNavChoice=choice;state.liturgicalDateContext={date,localDate:date,navSlot:'day',allSoulsChoice:choice};state.liturgyInfo=buildGeneratedLiturgyInfo(date);
   const link=strictChooseMassLink('KR',indexSource,indexUrl,date,getStrictMassSelector(date),'KR');check(link?.href===sourceUrls[index],'Markdown menu did not resolve '+choice+' Mass');
   const parsed=await dailySourceFetchers.KR(date,{locationCode:'KR'});
   const expected=strictParseDailyMass('KR',fixtures['kr'+(index+1)],date,'KR');
   check(['reading1','reading2','gospel'].every(key=>expected.data[key]?.cit_kr),'Expected Korean citations missing');
   for(const key of readingKeys){check(sourceSectionHasContent(parsed.data[key]),'Fetched Korean '+choice+' '+key+' missing');check(parsed.data[key].cit_kr===expected.data[key].cit_kr,'Korean '+choice+' '+key+' came from another Mass');}
   check(parsed.data.gospel_accl.lines.some(line=>/알렐루야/.test(line.text)),'Korean '+choice+' Alleluia response missing');
   check(readingFetches.at(-1)===sourceUrls[index],'Wrong source fetched for '+choice);
   resolvedMasses.push({choice,reading1:parsed.data.reading1.cit_kr,gospel:parsed.data.gospel.cit_kr});
  }
  fetchWithTimeout=async()=>{throw Error('Access window exceeded')};fetchTextWithFallbacks=async()=>{throw Error('Dated source unavailable')};
  for(const [index,choice]of ['first','second','third'].entries()){
   state.allSoulsNavChoice=choice;state.liturgicalDateContext={date,localDate:date,navSlot:'day',allSoulsChoice:choice};state.liturgyInfo=buildGeneratedLiturgyInfo(date);resetMassDataFrom(getStartupOrdinaryMassData());
   const parsed=strictParseDailyMass('KR',fixtures['kr'+(index+1)],date,'KR');check(parsed.data.reading1&&parsed.data.reading2&&parsed.data.gospel,'Korean '+choice+' readings missing');
   const markdown='Title: 죽은 모든 이를 기억하는 위령의 날 - '+['첫째','둘째','셋째'][index]+' 미사\nMarkdown Content:\n'+strictSourceLines(fixtures['kr'+(index+1)]).join('\n')+'\n오늘의 묵상\n둘째 미사와 셋째 미사의 의미';
   const relay=strictParseDailyMass('KR',markdown,date,'KR');check(relay.data.reading1&&relay.data.gospel,'Metadata-only relay '+choice+' lost readings');
   check(state.liturgyInfo.names.KR.startsWith('죽은 모든 이를 위한 위령의 날'),'Full All Souls title');check(defaultPrefaceSelectionForLiturgyInfo(state.liturgyInfo,date).keys.join()==='dead_1,dead_2,dead_3,dead_4,dead_5','Dead prefaces missing');
   const section=createDailyReadingData();mergeSourceData(section,parsed,'KR');
   const english=strictParseDailyMass('EN',fixtures.en,date,'US');mergeSourceData(section,english,'EN');
   const vn=await dailySourceFetchers.VN(date,{locationCode:'VN'});check(hasCompleteVietnameseParsedMass(vn),'Vietnamese '+choice+' incomplete: '+Object.keys(vn.data));check(vn.fallbackSource?.translation==='UBPT','Fallback attribution missing');mergeSourceData(section,vn,'VN');finalizeDailyReadingsData(section);render();
   for(const lang of ['KR','EN','VN']){const proper=localMissalEntryForLanguage(lang,date);check(proper&&['entrance','collect','prayer_offerings','communion','prayer_after'].every(key=>proper.data[key]?.length>20),'Missing '+lang+' propers '+choice);}
   check(document.querySelector('[data-part-id="reading2"]'),'Weekday second reading hidden');check(document.querySelector('.daily-source-provenance')?.textContent.includes('UBPT'),'Fallback source not visible');
   const options=splitParsedAlternatives(english.data.psalm.lines);check(options.length===2,'English response alternatives lost: '+JSON.stringify(english.data.psalm));check(options[0].filter(line=>line.sp==='Versicle').length===options[1].filter(line=>line.sp==='Versicle').length,'Psalm alternatives lost common verses');check(!english.data.psalm.lines.some(line=>line.sp==='Versicle'&&/^or:/i.test(line.text)),'or: leaked into Psalm');
   reports.push({choice,vnSections:Object.keys(vn.data).length,psalmOptions:options.length});
  }
  const christmas=new Date(2026,11,24);state.liturgicalDateContext={date:christmas,localDate:christmas,navSlot:'vigil',specialVigil:'christmas_vigil'};state.specialVigilNavKey='christmas_vigil';state.liturgyInfo=buildGeneratedLiturgyInfo(christmas);
  const link=strictChooseMassLink('KR',fixtures.xmas,'https://missa.cbck.or.kr/DailyMissa/20261224',christmas,getStrictMassSelector(christmas),'KR');check(link?.href.endsWith('/20261224/16524'),'Christmas selected daytime or wrong year: '+JSON.stringify(link));
  const vn=await dailySourceFetchers.VN(christmas,{locationCode:'VN'});check(vn.data.reading1?.text&&vn.data.reading2?.text&&vn.data.gospel?.text,'Christmas fallback incomplete: '+Object.keys(vn.data));check(vn.data.gospel.text.includes('Giuse'),'Christmas Vigil Gospel missing');check(liturgicalCycleLabel(christmas)==='','Fixed formulary has year cycle label');check(!strictIsVigilLabel('Thứ Năm tuần IV Mùa Vọng'),'Advent incorrectly classified as vigil');
  let rejected=false;try{strictParseDailyMass('KR','Title: 2025-11-02 위령의 날\nMarkdown Content:\n'+fixtures.kr1,date,'KR')}catch(error){rejected=true}check(rejected,'Wrong source year accepted');
  globalThis.uploadedCountrySpecialLiturgies={KR:{vigils:[{id:'christmas_vigil',names:{KR:'편집된 전야미사'}}]}};const profile=specialLiturgyProfile('KR');check(profile.vigils.find(entry=>entry.id==='christmas_vigil').names.KR==='편집된 전야미사'&&profile.vigils.some(entry=>entry.id==='easter_vigil')&&profile.celebrations.some(entry=>entry.id==='good_friday'),'Published override erased country rites');
  return {resolvedMasses,masses:reports,christmasGospel:vn.data.gospel.cit_vn,passed:true};
 },fixtures);assert(result.passed);console.log(JSON.stringify(result,null,2));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
