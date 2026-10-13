const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const mass=require('./mass-data-editor'),metadataTool=require('./country-metadata-upload-tool');
const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const metadata=Object.fromEntries(metadataTool.countryMetadataItems().map(item=>[item.jurisdiction,item]));
const heading=(name,body)=>`<h4>${name}</h4>`+body.split('\n').map(line=>`<p>${line}</p>`).join('');
const kr=heading('제1독서','▥ 지혜서의 말씀입니다.\n3,1-9\n의인들의 영혼은 하느님의 손안에 있다.\n주님의 말씀입니다.')+heading('화답송 시편 23(22),1-3.4.5.6','◎ 주님은 나의 목자.\n○ 나 아쉬울 것 없어라.')+heading('제2독서','▥ 로마서의 말씀입니다.\n6,3-9\n그리스도와 함께 살리라.\n주님의 말씀입니다.')+heading('복음 환호송','◎ 알렐루야.\n○ 나는 부활이요 생명이다.')+heading('복음','✠ 요한이 전한 거룩한 복음입니다.\n6,37-40\n주님께서 그들을 살리실 것이다.\n주님의 말씀입니다.');
const en=heading('Reading 1','Wis 3:1-9\nThe souls of the just are in the hand of God.')+heading('Responsorial Psalm','Psalm 23:1-3a, 3b-4, 5, 6\nR. (1) The Lord is my shepherd.\nor:\nR. (4) Though I walk in the valley of darkness.\nThe LORD is my shepherd; I shall not want.\nR. The Lord is my shepherd.\nor:\nR. Though I walk in the valley of darkness.\nYou spread the table before me.\nR. The Lord is my shepherd.')+heading('Reading 2','Rom 6:3-9\nWe shall also live with him.')+heading('Alleluia','R. Alleluia, alleluia.\nI am the resurrection and the life.')+heading('Gospel','Jn 6:37-40\nI will raise him on the last day.');
(async()=>{
 const fixtures={kr1:kr,kr2:kr.replace('요한이 전한','마태오가 전한').replace('6,37-40','11,25-30'),kr3:kr.replace('3,1-9','4,7-15').replace('요한이 전한','마태오가 전한').replace('6,37-40','25,1-13'),en,xmas:'<a href="/DailyMissa/20261224/16523">12월 24일</a><a href="/DailyMissa/20261224/16524">주님 성탄 대축일 - 전야 미사</a>'};
 if(process.env.ORDO_LIVE_FIXTURES)for(const key of Object.keys(fixtures)){const file=path.join(process.env.ORDO_LIVE_FIXTURES,key==='xmas'?'kr-xmas.html':key+'.html');if(fs.existsSync(file))fixtures[key]=fs.readFileSync(file,'utf8');}
 if(process.env.ORDO_LIVE_FIXTURES)for(const key of ['kr-index-markdown','kr1-markdown','kr2-markdown','kr3-markdown']){const file=path.join(process.env.ORDO_LIVE_FIXTURES,key+'.txt');if(fs.existsSync(file))fixtures[key]=fs.readFileSync(file,'utf8');}
 if(process.env.ORDO_LIVE_FIXTURES)for(const [key,name]of [['christmas-kr','christmas-vigil-2.txt'],['christmas-en','enChristmas-respond.txt']]){const file=path.join(process.env.ORDO_LIVE_FIXTURES,name);if(fs.existsSync(file))fixtures[key]=fs.readFileSync(file,'utf8');}
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{const page=await browser.newPage();await page.addInitScript(({registry,metadata})=>{globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;globalThis.uploadedCountryMassMetadata=metadata;globalThis.ordoPrayerEditorPreview=true;},{registry,metadata});await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());await page.goto('http://127.0.0.1:'+server.address().port+'/V29.html');
 const result=await page.evaluate(async fixtures=>{
  const check=(value,message)=>{if(!value)throw Error(message)};
  const heading=(name,body)=>'<h4>'+name+'</h4>'+body.split('\n').map(line=>'<p>'+line+'</p>').join('');
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
  state.targetLang='EN';state.targetLocationCode='US';
  const both=createDailyReadingData();
  mergeSourceData(both,strictParseDailyMass('KR',fixtures.kr3,date,'KR'),'KR');
  mergeSourceData(both,strictParseDailyMass('EN',fixtures.en,date,'US'),'EN');
  finalizeDailyReadingsData(both);
  for(const id of ['reading1','reading2','psalm','gospel_accl','gospel']){
   const item=massData.find(item=>getBaseId(item.id)===id);
   for(const key of Object.keys(item.variants||{})){
    state.options[id]=key;render();
    check(document.querySelectorAll('[data-part-id="'+id+'"] .pc-header-row .citation').length===2,'Both columns need a selected citation: '+id+' '+key);
   }
  }
  const psalm=massData.find(item=>getBaseId(item.id)==='psalm');
  const sharedPsalm=Object.values(psalm.variants||{}).find(v=>Number.isInteger(v.__dailySourceIndexes?.kr)&&Number.isInteger(v.__dailySourceIndexes?.en));
  check(sharedPsalm?.label.kr==='공통 화답송','Shared Psalm mislabeled as a Korean source');
  const synthetic=createDailyReadingData();
  synthetic.reading2={kr_lines:[parsedLine('','우리는 그리스도와 함께 죽었습니다. 그리스도와 함께 죽었다면 우리는 그분과 함께 살리라. 하느님을 위하여 살아라.','body'),parsedLine('','또는:'),parsedLine('','그리스도와 함께 죽었다면 우리는 그분과 함께 살리라.','body')],en_lines:[parsedLine('','We have died with Christ, so that we may also live with him.','body')],cit_kr:'로마 6,3-9',cit_en:'Romans 6:3-9',optionCits_kr:[{cit_kr:'로마 6,3-9'},{cit_kr:'로마 6,3-4.8-9'}]};
  finalizeDailyReadingsData(synthetic);
  const variants=Object.values(massData.find(item=>getBaseId(item.id)==='reading2').variants);
  check(variants.length===2,'Identical authorized readings duplicated');
  check(variants.some(v=>v.__dailyLengthKind==='long')&&variants.some(v=>v.__dailyLengthKind==='short'),'Long and short reading labels lost: '+JSON.stringify(variants.map(v=>({label:v.label?.kr,kind:v.__dailyLengthKind,cit:v.cit,kr:dailyVariantBodyText(v,'kr')}))));
  const short=variants.find(v=>v.__dailyLengthKind==='short');
  check(!short.label.kr.includes('고유'),'Short reading mislabeled as an independent proper');
  for(const lang of SUPPORTED_LANGS){
   const cit=headerCitationFor({},short,lang);
   check(!!cit,'Missing translated citation '+lang);
   check(passageCitationsEquivalent('reading2',cit,short.cit.cit_kr,lang,'KR'),'Short citation reused the long range: '+lang+' '+cit);
  }
  check(!strictIsNightMassLabel('until her vindication shines forth like the dawn'),'Dawn in Scripture became a Mass heading');
  const body='For if we have died with Christ, we believe that we shall also live with him. So that we may walk in newness of life.';
  const paragraphs=Array.from({length:24},(_,i)=>'한국어 문장 '+i);
  const pieces=alignReadingTextToKoreanParagraphs(body,'en',paragraphs);
  check(pieces.some(part=>!part),'An indivisible sentence must leave blank rows');
  check(pieces.filter(Boolean).join(' ')===body,'Reading segmentation lost or changed words');
  check(!pieces.some(part=>/^(?:so that|for|if|then)[,.;:!?]*$/i.test(part.trim())),'Connector-only translation row');
  for(const word of ['so that','for','if','then'])check(alignReadingTextToKoreanParagraphs(word,'en',paragraphs).every(part=>!part),'Isolated connector displayed');
  const rows=splitDailyReadingBodyRowsByKorean([{role_kr:'body',text_kr:paragraphs.join('\n'),role_en:'body',text_en:body}],'reading2');
  check(rows.filter(row=>!row.text_en).every(row=>shouldSuppressAIFallbackForLine(row,'reading2','en')),'Intentional blank became an AI fragment');

  const christmas=new Date(2026,11,24);state.liturgicalDateContext={date:christmas,localDate:christmas,navSlot:'vigil',specialVigil:'christmas_vigil'};state.specialVigilNavKey='christmas_vigil';state.liturgyInfo=buildGeneratedLiturgyInfo(christmas);
  const link=strictChooseMassLink('KR',fixtures.xmas,'https://missa.cbck.or.kr/DailyMissa/20261224',christmas,getStrictMassSelector(christmas),'KR');check(link?.href.endsWith('/20261224/16524'),'Christmas selected daytime or wrong year: '+JSON.stringify(link));
  const vn=await dailySourceFetchers.VN(christmas,{locationCode:'VN'});check(vn.data.reading1?.text&&vn.data.reading2?.text&&vn.data.gospel?.text,'Christmas fallback incomplete: '+Object.keys(vn.data));check(vn.data.gospel.text.includes('Giuse'),'Christmas Vigil Gospel missing');check(liturgicalCycleLabel(christmas)==='','Fixed formulary has year cycle label');check(!strictIsVigilLabel('Thứ Năm tuần IV Mùa Vọng'),'Advent incorrectly classified as vigil');
  let rejected=false;try{strictParseDailyMass('KR','Title: 2025-11-02 위령의 날\nMarkdown Content:\n'+fixtures.kr1,date,'KR')}catch(error){rejected=true}check(rejected,'Wrong source year accepted');
  globalThis.uploadedCountrySpecialLiturgies={KR:{vigils:[{id:'christmas_vigil',names:{KR:'편집된 전야미사'}}]}};const profile=specialLiturgyProfile('KR');check(profile.vigils.find(entry=>entry.id==='christmas_vigil').names.KR==='편집된 전야미사'&&profile.vigils.some(entry=>entry.id==='easter_vigil')&&profile.celebrations.some(entry=>entry.id==='good_friday'),'Published override erased country rites');
  state.targetLang='EN';state.targetLocationCode='US';state.currentLoc='KR';state.selectedLocationCode='KR';
  getStrictDateBase=()=>({localDay:cloneDateOnly(christmas),hour:20,timeZone:'Asia/Seoul'});
  state.dayOffset=0;state.liturgyNavSlot='vigil';state.allSoulsNavChoice='';state.specialVigilNavKey='christmas_vigil';state.liturgicalDateContext=null;
  rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(christmas);
  check(state.liturgyInfo.names.KR.includes('전야')&&!state.liturgyInfo.names.KR.includes('성야'),'Christmas Vigil title');
  check(koreanBlessingDateSelection(christmas,state.liturgyInfo)?.key==='christmas','Christmas Vigil used Advent blessing');
  const enUrl=strictDailySourceEntryUrl('EN',christmas,'US');
  check(enUrl==='https://bible.usccb.org/bible/readings/122526-Vigil.cfm','English Christmas Vigil source date/form');
  check(strictDailySourceEntryUrl('EN',christmas,'FUTURE').endsWith('/122526-Vigil.cfm'),'Future USCCB-backed region used December 24');
  check(formatDateIso(specialLiturgySourceDate('EN',christmas,'GB-ENG'))==='2026-12-24','US date rule leaked into a different provider');
  const krIndexUrl=strictDailySourceEntryUrl('KR',christmas,'KR');
  const krVigilUrl=link.href;
  const krVigil=fixtures['christmas-kr']||'<h1>주님 성탄 대축일 전야 미사</h1>'+heading('제1독서','▥ 이사야서의 말씀입니다.\n62,1-5\n주님은 당신 백성을 기뻐하신다.')+heading('화답송 시편 89(88),4-5','◎ 주님의 자애를 영원히 노래하오리다.')+heading('제2독서','▥ 사도행전의 말씀입니다.\n13,16-17.22-25\n하느님께서는 구원자를 보내셨다.')+heading('복음 환호송','◎ 알렐루야.\n○ 내일 세상의 죄악이 사라지리라.')+heading('복음','✠ 마태오가 전한 거룩한 복음입니다.\n1,1-25\n예수 그리스도께서 탄생하셨다.');
  const enVigil=fixtures['christmas-en']||'<h1>The Nativity of the Lord – Vigil Mass</h1>'+heading('Reading 1','Is 62:1-5\nThe Lord delights in his people.')+heading('Responsorial Psalm','Psalm 89:4-5\nR. Forever I will sing the goodness of the Lord.')+heading('Reading 2','Acts 13:16-17, 22-25\nGod has sent a savior to his people.')+heading('Alleluia','R. Alleluia.\nTomorrow the wickedness of the earth will be destroyed.')+heading('Gospel','Mt 1:1-25\nThe book of the genealogy of Jesus Christ.');
  fetchJinaHtml=async url=>{if(url===enUrl)return enVigil;throw Error('Unexpected Vigil HTML URL: '+url)};
  fetchTextWithFallbacks=async url=>{if(url===krIndexUrl)return fixtures.xmas;if(url===krVigilUrl)return krVigil;throw Error('Unexpected Vigil URL: '+url)};
  const krFetched=await dailySourceFetchers.KR(christmas,{locationCode:'KR'}),enFetched=await dailySourceFetchers.EN(christmas,{locationCode:'US'});
  for(const [lang,parsed]of [['KR',krFetched],['EN',enFetched]])for(const key of readingKeys)check(sourceSectionHasContent(parsed.data[key]),'Christmas '+lang+' '+key+' missing');
  check(passageCitationsEquivalent('gospel',krFetched.data.gospel.cit_kr,enFetched.data.gospel.cit_en,'KR','EN'),'Christmas Gospels differ');
  check(globalThis.bibleCitation.wholeVerseCoverage(globalThis.bibleCitation.parse(enFetched.data.gospel.cit_en,'EN'))==='1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25','Christmas parsed a weekday Gospel');
  let weekdayRejected=false;try{strictParseDailyMass('EN','<h1>Thursday of the Fourth Week of Advent</h1>'+fixtures.en,christmas,'US')}catch{weekdayRejected=true}
  check(weekdayRejected,'Ordinary Advent text accepted as Christmas Vigil');
  state.liturgyNavSlot='day';state.specialVigilNavKey='';state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(christmas);
  check(state.liturgyInfo.names.KR==='12월 24일'&&!state.liturgyInfo.isSolemnity,'Daytime Mass was overwritten by the fixed Vigil calendar entry');
  check(state.liturgyInfo.prefaceKey==='advent_2'&&recommendedVestmentColor(christmas,state.liturgyInfo.color,state.liturgyInfo)===liturgyColorMap.purple,'Daytime Mass inherited the Christmas preface or vestments');
  check(localizedNavigationLabel(getStrictDateContext(),'KR')==='낮 미사','Daytime navigation label is missing');
  const christmasEntries=buildLiturgicalNavigationEntries(getStrictDateBase()).filter(entry=>entry.offset===0);
  check(christmasEntries.length===2&&christmasEntries[0].slot==='day'&&christmasEntries[1].specialVigil==='christmas_vigil','December 24 must expose daytime before Vigil');
  check(koreanBlessingDateSelection(christmas,state.liturgyInfo)?.key==='advent','December 24 daytime blessing changed');
  state.liturgyNavSlot='vigil';state.specialVigilNavKey='christmas_vigil';state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(christmas);
  globalThis.uploadedCountrySpecialLiturgies={KR:{vigils:[{id:'christmas_vigil',names:{KR:'주님 성탄 대축일 성야 미사'}}]}};
  check(buildGeneratedLiturgyInfo(christmas).names.KR==='주님 성탄 대축일 전야미사','Published legacy Christmas title was not normalized');
  globalThis.uploadedCountrySpecialLiturgies={};
  fetchJinaHtml=fetchTextWithFallbacks=async()=>{throw Error('Simulated source outage')};
  for(const year of [2026,2031]){
   getStrictDateBase=()=>({localDay:new Date(year,11,24),hour:20,timeZone:'Asia/Seoul'});state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());
   for(const [lang,locationCode]of [['KR','KR'],['EN','US']]){
    const fallback=await dailySourceFetchers[lang](new Date(year,11,24),{locationCode});
    for(const key of readingKeys)check(sourceSectionHasContent(fallback.data[key]),'Fixed Vigil fallback missing '+lang+' '+key);
    check(passageCitationsEquivalent('reading1',fallback.data.reading1['cit_'+lang.toLowerCase()],'Is 62:1-5',lang,'EN'),'Vigil fallback selected another first reading');
    check(passageCitationsEquivalent('gospel',fallback.data.gospel['cit_'+lang.toLowerCase()],'Mt 1:1-25',lang,'EN'),'Vigil fallback selected another Gospel');
    check(fallback.fallbackSource?.calendarInvariant,'Fixed source did not retain its calendar invariant provenance');
   }
  }

  return {resolvedMasses,masses:reports,pairedCitations:true,shortReadings:true,meaningfulRows:true,christmasVigil:true,christmasGospel:vn.data.gospel.cit_vn,passed:true};
 },fixtures);assert(result.passed);console.log(JSON.stringify(result,null,2));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
