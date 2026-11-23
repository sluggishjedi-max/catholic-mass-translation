'use strict';
const assert=require('assert/strict'),fixture=require('./fixtures/daily-proper-options-20261117.json'),{createRuntime}=require('../functions/daily-runtime'),{datedMassUrl}=require('../functions/daily-source-inventory');
const r=createRuntime({country:'KR',date:'2026-11-17',source:'official'});
try{
 r.window.__source="O Lord, it is you who are my portion and cup; you yourself who secure my portion&#x20; (E.T. alleluia). Or, for a Woman Religious: Cf. Hos 2: 21-22 The Lord has taken her as his bride for ever in faithfulness and mercy&#x20; (E.T. alleluia).";
 const parsed=r.run("ordoDailyContent.normalizeSection(strictFormatSection('EN','entrance',{lines:[__source]}))");
 assert.equal(parsed.options.length,2);assert(!/E\.T\.|alleluia|Or,|Hos|&#/u.test(parsed.options[0].text));assert(parsed.options[0].text.includes('my portion'));assert(parsed.options[1].text.includes('his bride'));assert(!parsed.options[1].text.includes('Hos'));assert.equal(parsed.options[1].cit_en,'Cf. Hos 2: 21-22');assert(!parsed.cit_en,'Citation from the second option leaked into the first');
 assert.equal(r.run("bibleCitation.format('See 2 Timothy 1:10','EN','EN')"),'cf. 2Tm 1:10');assert.equal(r.run("bibleCitation.format('See 2 Timothy 1:10','EN','KR')"),'2티모 1,10 참조');
 r.run("getActiveLiturgicalSourceDate=()=>new Date(2026,3,12,12)");const easter=r.run("strictFormatSection('EN','entrance',{lines:[__source]})");assert(easter.text.includes('alleluia'));assert(!easter.text.includes('E.T.'));
 const url='https://bible.usccb.org/bible/readings/1121-memorial-presentation-virgin-mary.cfm',base='https://bible.usccb.org/bible/readings/112126.cfm';assert(datedMassUrl(url,base,'2026-11-21'));assert(!datedMassUrl(url,base,'2026-11-20'));assert(!datedMassUrl(url.replace('bible.usccb.org','other.example'),base,'2026-11-21'));
 for(const key of ['entrance','communion','prayer_after'])for(const lower of r.run('SUPPORTED_LANGS.map(x=>x.toLowerCase())')){r.window.__line={__sourceChoiceOriginal:true,text_kr:lower==='kr'?'':'원문',text_en:lower==='kr'?'Source':''};r.window.__lower=lower;r.window.__key=key;assert.equal(r.run('shouldSuppressAIFallbackForLine(__line,__key,__lower)'),false,key+' '+lower);}
}finally{r.close();}
const s=createRuntime({country:'KR',date:'2026-11-21',source:'official'});
try{for(const lang of ['KR','EN'])s.window.__loadServerModule('JS file/lazy/missal-'+lang+'.js');s.window.__loadServerModule('JS file/lazy/special-US.js');s.window.__html=fixture.properHtml;s.window.__original=fixture.records.find(x=>x.country==='KR'&&x.date==='2026-11-21').parsed;s.window.__native=fixture.records.find(x=>x.country==='US'&&x.date==='2026-11-21').parsed;
 const out=s.run(`(()=>{const proper=strictParseDailyMass('EN',__html,getActiveLiturgicalSourceDate(),'US');proper.id='memorial-presentation-virgin-mary';__native.sourceMasses=[proper];state.currentLoc=state.selectedLocationCode='KR';state.targetLang='EN';state.targetLocationCode='US';state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());const data={};mergeSourceData(data,__original,'KR');mergeSourceData(data,__native,'EN');return {data,proper};})()`);
 assert(out.proper.data.reading1.cit_en.includes('Zechariah'));assert(out.data.reading1.en_options[0].lines.some(line=>line.text.includes('Sing and rejoice')));assert(out.data.gospel.en_options[0].lines.some(line=>line.text.includes('While Jesus was speaking')));assert(out.data.reading1.en_options.some(option=>option.lines.some(line=>line.text.includes('two prophets'))),'Other published Scripture was discarded');
}finally{s.close();}
const king=createRuntime({country:'KR',date:'2026-11-22',source:'official'});
try{
 const result=king.run(`(()=>{const date=getActiveLiturgicalSourceDate();state.targetLang='VN';state.targetLocationCode='VN';
 const original={data:{entrance:{text:'Korean antiphon'}}};
 const translated={title:'Lễ Chúa Ki‑tô Vua',kpvSelectedCelebrationCode:'christ-king',calendarForm:'celebration',data:{entrance:{text:'KPV antiphon'},prayer_offerings:{text:'Diocesan prayer'}}};
 const actual=projectDailySourceToPrimaryCalendar(translated,'VN',original,date,buildGeneratedLiturgyInfo(date));
 const other=new Date(2026,10,15,12),wrongDay=projectDailySourceToPrimaryCalendar(translated,'VN',original,other,buildGeneratedLiturgyInfo(other));
 return {actual,wrongDay};})()`);
 assert.equal(result.actual.data.entrance.text,'KPV antiphon');
 assert.equal(result.actual.data.prayer_offerings.text,'Diocesan prayer');
 assert.equal(result.wrongDay.primaryCalendarProjection.sameCelebration,false);
}finally{king.close();}
console.log(JSON.stringify({conditionalAntiphons:true,easterOnlyAlleluia:true,optionCitations:true,allLanguageSourceChoiceAI:true,annualMemorialDiscovery:true,originalCalendarCounterpartPreferred:true}));
