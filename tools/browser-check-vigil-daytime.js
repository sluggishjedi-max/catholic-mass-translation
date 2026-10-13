const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const deployed=process.argv.includes('--deployed');
const mass=require('./mass-data-editor'),metadataTool=require('./country-metadata-upload-tool');
const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const metadata=Object.fromEntries(metadataTool.countryMetadataItems().map(item=>[item.jurisdiction,item]));
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage();await page.addInitScript(({registry,metadata})=>{globalThis.uploadedCountryMassData=registry;globalThis.uploadedCountryMassMetadata=metadata;globalThis.ordoPrayerEditorPreview=true;},{registry,metadata});
  if(!deployed)await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
  await page.goto(deployed?'https://sluggishjedi-max.github.io/catholic-mass-translation/?vigil-audit='+Date.now():'http://127.0.0.1:'+server.address().port+'/V29.html');
  const report=await page.evaluate(()=>{
   const failures=[],cases=[],byCountry={};
   const select=(country,date,key='')=>{state.useGps=false;state.selectedLocationCode=country;state.currentLoc=getLangFromLocation(country);state.targetLang=state.currentLoc==='KR'?'EN':'KR';state.targetLocationCode=state.currentLoc==='KR'?'US':'KR';state.gpsDiocese='';state.bishopContext=null;getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'UTC'});state.dayOffset=0;state.liturgyNavSlot=key?'vigil':'day';state.specialVigilNavKey=key;state.allSoulsNavChoice='';state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);};
   for(const country of Object.keys(countrySpecialLiturgies.countries))for(let year=2022;year<=2031;year++){
    select(country,new Date(year,0,1));const profile=specialLiturgyProfile(country);
    for(const vigil of profile.vigils){
     if(vigil.enabled===false)continue;
     let dates=[];
     if(vigil.observedFeast){const feast=observedSpecialFeastDate(vigil.observedFeast,year,country);if(feast)dates=[addDays(feast,vigil.dayOffset??-1)];}
     else if(vigil.monthDay){const [month,day]=vigil.monthDay.split('-').map(Number);dates=[new Date(year,month-1,day)];}
     else if(Number.isInteger(vigil.easterOffset))dates=[addDays(computeEasterSunday(year),vigil.easterOffset)];
     else dates=(vigil.dates||[]).filter(d=>d.startsWith(year+'-')).map(d=>new Date(d+'T12:00:00'));
     for(const date of dates){
      select(country,date);const info=state.liturgyInfo;const dayRecord=countrySpecialMassRecord(date,country);const cache=strictDailySourceCacheVariant(date);
      const entries=buildLiturgicalNavigationEntries(getStrictDateBase()).filter(e=>e.offset===0);
      const checks={dayEntry:entries.some(e=>e.slot==='day'),vigilEntry:entries.some(e=>e.specialVigil===vigil.id),daySource:formatDateIso(specialLiturgySourceDate(state.currentLoc,date,country))===formatDateIso(date),dayRecord:dayRecord?.id!==vigil.id,dayTitle:!!getLiturgyDisplayName(state.currentLoc)&&!strictIsVigilLabel(getLiturgyDisplayName(state.currentLoc)),dayPreface:!info.meta.specialPrefaceKey,dayMassFile:isHolySaturday(date)||!getSpecialMassFileEntry(date),holySaturday:isHolySaturday(date)?dayRecord?.fetchDaily===false&&recommendedVestmentColor(date,info.color,info)===liturgyColorMap.purple:true};
      select(country,date,vigil.id);checks.vigilContext=getStrictMassSelector(date).specialVigil===vigil.id;checks.distinctCache=cache!==strictDailySourceCacheVariant(date);
      select(country,date);checks.returnedDay=getStrictMassSelector(date).specialVigil===''&&JSON.stringify(state.liturgyInfo.names)===JSON.stringify(info.names);
      const row={country,date:formatDateIso(date),id:vigil.id,checks,dayTitle:info.names[state.currentLoc],dayPreface:info.prefaceKey,dayMassFile:getSpecialMassFileEntry(date),dayRecord:dayRecord?.id};
      cases.push(row);byCountry[country]=(byCountry[country]||0)+1;if(Object.values(checks).some(x=>!x))failures.push(row);
     }
    }
   }
   // A dated local Joseph Vigil must add an evening slot while preserving Lent.
   globalThis.uploadedCountrySpecialLiturgies={VN:{vigils:[{id:'saint_joseph_vigil',dates:['2026-03-18']}]}};
   const date=new Date(2026,2,18);select('VN',date);const josephDay=JSON.parse(JSON.stringify(state.liturgyInfo));const josephEntries=buildLiturgicalNavigationEntries(getStrictDateBase()).filter(e=>e.offset===0);
   select('VN',date,'saint_joseph_vigil');const josephVigil=JSON.parse(JSON.stringify(state.liturgyInfo));select('VN',date);
   const combinedFailures=[];
   for(const [lang,lines]of [
    ['EN',['Wednesday of the Fourth Week of Lent','Reading 1','Isaiah 49:8-15','Daytime reading text.','Gospel','John 5:17-30','Daytime Gospel text.','Saint Joseph – Vigil Mass','Reading 1','2 Samuel 7:4-5a,12-14a,16','Joseph Vigil reading text.','Gospel','Matthew 1:16,18-21,24a','Joseph Vigil Gospel text.']],
    ['VN',['Thứ Tư Tuần IV Mùa Chay','Bài đọc I Is 49,8-15','Bản văn buổi sáng.','Phúc Âm Ga 5,17-30','Tin Mừng buổi sáng.','Lễ vọng Thánh Giuse','Bài đọc I 2 Sm 7,4-5a.12-14a.16','Bản văn thánh Giuse.','Phúc Âm Mt 1,16.18-21.24a','Tin Mừng thánh Giuse.']]
   ]){
    const daySections=strictExtractRawSections(lines,lang,getStrictMassSelector(date));
    select('VN',date,'saint_joseph_vigil');const vigilSections=strictExtractRawSections(lines,lang,getStrictMassSelector(date));select('VN',date);
    if(/Joseph Vigil|thánh Giuse/u.test(daySections.reading1.lines.join(' ')+daySections.gospel.lines.join(' ')))combinedFailures.push(lang+' daytime contains Vigil text');
    if(/Daytime|buổi sáng/u.test(vigilSections.reading1.lines.join(' ')+vigilSections.gospel.lines.join(' ')))combinedFailures.push(lang+' Vigil contains daytime text');
   }
   const homily=strictExtractRawSections(['Wednesday of the Fourth Week of Lent','Reading 1','Isaiah 49:8-15','Daytime reading text.','Gospel','John 5:17-30','Daytime Gospel text.','At the Vigil Mass','Prayer over the Offerings','Retained daytime prayer.'],'EN',getStrictMassSelector(date));
   if(!homily.prayer_offerings?.lines.includes('Retained daytime prayer.'))combinedFailures.push('A homily mention of the Vigil removed a daytime prayer');
   const cacheFixture=label=>({title:label,data:Object.fromEntries(['entrance','collect','reading1','psalm','reading2','gospel_accl','gospel','prayer_offerings','communion','prayer_after'].map(key=>[key,{text:label,lines:[{sp:'',text:label}]}]))});
   writeCachedDailySource('VN',date,cacheFixture('Daytime cache fixture'),{locationCode:'VN'});
   select('VN',date,'saint_joseph_vigil');writeCachedDailySource('VN',date,cacheFixture('Joseph Vigil cache fixture'),{locationCode:'VN'});
   const vigilCache=readCachedDailySource('VN',date,{locationCode:'VN'});select('VN',date);const dayCache=readCachedDailySource('VN',date,{locationCode:'VN'});
   const distinctSourceData=vigilCache?.data.gospel.text==='Joseph Vigil cache fixture'&&dayCache?.data.gospel.text==='Daytime cache fixture';
   return {version:APP_VERSION,countries:Object.keys(byCountry).length,cases:cases.length,byCountry,failures,combinedFailures,distinctSourceData,joseph:{day:josephDay,vigil:josephVigil,entries:josephEntries,returned:state.liturgyInfo}};
  });
  const assert=require('node:assert/strict');assert.equal(report.failures.length,0,JSON.stringify(report.failures.slice(0,5)));assert.deepEqual(report.combinedFailures,[]);assert(report.distinctSourceData,'The evening source replaced the daytime cache');assert.equal(report.joseph.entries.length,2);assert.equal(report.joseph.entries[0].slot,'day');assert.equal(report.joseph.entries[1].specialVigil,'saint_joseph_vigil');assert.deepEqual(report.joseph.returned.names,report.joseph.day.names);assert.equal(report.joseph.returned.prefaceKey,'lent_1');assert.equal(report.joseph.vigil.prefaceKey,'saint_joseph');console.log(JSON.stringify({deployed,version:report.version,countries:report.countries,years:'2022–2031',vigilDates:report.cases,daytimePreserved:true,localJosephVigil:true,combinedSources:true,distinctSourceData:true,holySaturdayDaytime:true,passed:true}));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
