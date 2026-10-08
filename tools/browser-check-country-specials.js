const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const tool=require('./mass-data-editor');
const registry=tool.runCountryMassSources(tool.readCountryMassSources()).registry;
(async()=>{
  const server=http.createServer((req,res)=>{
    const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if(!file.startsWith(root+path.sep))return res.writeHead(403).end();
    fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8');res.end(data);});
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({headless:true});
  try{
    const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.addInitScript(registry=>{globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;},registry);
    await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/V29.html`,{waitUntil:'load'});
    await page.waitForFunction(()=>typeof specialVigilsForDay==='function');
    const result=await page.evaluate(async()=>{
      const check=(ok,message)=>{if(!ok)throw Error(message)};
      const select=(country,date,key='')=>{
        state.selectedLocationCode=country;state.currentLoc=locationMeta[country]?.lang||country;
        state.targetLang='KR';state.targetLocationCode='KR';state.useGps=false;state.gpsDiocese='';state.bishopContext=null;
        getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'UTC'});
        state.dayOffset=0;state.liturgyNavSlot=key?'vigil':'day';state.specialVigilNavKey=key;state.allSoulsNavChoice='';state.liturgicalDateContext=null;
        rememberLiturgicalDateContext(getStrictDateContext());
      };
      const iso=d=>formatDateIso(d);
      check(countrySpecialLiturgies.schemaVersion===3,'Registry schema');
      const cases=[['KR','2026-01-03','epiphany'],['IT','2026-01-05','epiphany'],['GB-ENG','2018-01-06','epiphany'],['GB-ENG','2026-05-13','ascension'],['US','2026-05-16','ascension'],['US','2026-05-23','pentecost'],['KR','2026-08-14','assumption'],['GB-ENG','2026-08-15','assumption'],['TW','2023-08-12','assumption'],['BR','2023-08-19','assumption'],['GB-ENG','2026-06-27','peter_paul'],['NZ','2026-07-04','peter_paul'],['KR','2022-06-22','john_baptist']];
      for(const [country,key,feast] of cases){
        const date=new Date(key+'T12:00:00');select(country,date,feast+'_vigil');
        check(specialVigilsForDay(date,country).some(v=>v.id===feast+'_vigil'),country+' '+key+' vigil missing');
        check(iso(specialLiturgySourceDate(locationMeta[country]?.lang||country,date,country))===iso(addDays(date,1)),country+' source date');
        check(getStrictDateContext().specialVigil===feast+'_vigil',country+' selected context');
        const expectedPreface=countrySpecialMassRecord(date,country).prefaceKey;
        check(buildGeneratedLiturgyInfo(date).prefaceKey===expectedPreface,country+' Vigil proper preface');
        const entries=buildLiturgicalNavigationEntries(getStrictDateBase());
        check(new Set(entries.map(v=>v.offset)).size===15,'Seven-day window changed');
      }
      select('US',new Date(2026,4,13),'ascension_vigil');state.gpsDiocese='Archdiocese of Boston';
      check(iso(observedSpecialFeastDate('ascension',2026,'US'))==='2026-05-14','Boston Ascension');
      state.gpsDiocese='Archdiocese of Los Angeles';
      check(iso(observedSpecialFeastDate('ascension',2026,'US'))==='2026-05-17','Los Angeles Ascension');
      select('GB-ENG',new Date(2026,7,15),'assumption_vigil');state.targetLang='KR';state.targetLocationCode='KR';
      check(strictDailySourceEntryUrl('KR',getTargetDate(),'KR').endsWith('/20260815'),'Paired Korean source must follow Korea’s date');
      check(iso(specialLiturgySourceDate('EN',getTargetDate(),'GB-ENG'))==='2026-08-16','Paired English source date');
      const languages=[['US','EN'],['GB-ENG','EN'],['GB-WLS','EN'],['GB-SCT','EN'],['IE','EN'],['AU','EN'],['NZ','EN'],['PH','EN'],['IT','IT'],['VN','VN'],['VA','LA'],['INTL','LA']];
      for(const [country,lang] of languages){
        for(const [offset,id] of [[-7,'palm_sunday'],[-3,'holy_thursday'],[-2,'good_friday'],[-1,'holy_saturday']]){
          const date=addDays(computeEasterSunday(2026),offset);select(country,date);
          const record=countrySpecialMassRecord(date,country);check(record.id===id,country+' '+id);
          check(Object.keys(record.riteData?.[lang]||{}).length>0,country+' missing Missal text '+id);
          if(id==='good_friday')check(Array.from({length:10},(_,i)=>record.riteData[lang]['friday_intercession_'+(i+1)]).every(Boolean),country+' ten intercessions');
          if(id==='holy_thursday')check(record.data[lang].prayer_after.text.length>80,country+' Communion prayer');
        }
        const date=addDays(computeEasterSunday(2026),-1);select(country,date,'easter_vigil');
        const record=countrySpecialMassRecord(date,country);
        check(record.data[lang].collect.text.length>90,country+' Vigil collect');
        check(Array.from({length:7},(_,i)=>record.riteData[lang]['vigil_prayer_'+(i+1)]).every(Boolean),country+' seven Vigil prayers');
        check(record.riteData[lang].exsultet,country+' Exsultet');
        const items=ordoSpecialOrder.build(date,getStartupOrdinaryMassData());
        check(!items.some(x=>['penitential','kyrie','creed','blessing','dismissal'].includes(x.id)),country+' ordinary rites leaked into Vigil');
      }
      select('US',new Date(2026,4,23),'pentecost_vigil');
      let rejected=false;try{strictParseDailyMass('EN','<h1>Pentecost Sunday – Mass during the Day</h1><h3>Reading 1</h3><p>Acts 2:1-11</p>',getTargetDate(),'US')}catch{rejected=true}
      check(rejected,'Day readings accepted for a proper Vigil');
      let koreanVigilRejected=false;try{await dailySourceFetchers.KR(getTargetDate(),{locationCode:'KR'})}catch(error){koreanVigilRejected=/does not observe/.test(error.message)}
      check(koreanVigilRejected,'Unobserved paired Korean Vigil used an ordinary Mass');
      select('KR',new Date(2026,4,23));
      check(!specialVigilsForDay(getTargetDate(),'KR').some(v=>v.id==='pentecost_vigil'),'Korean Pentecost Vigil remains visible');
      check(!buildLiturgicalNavigationEntries(getStrictDateBase()).some(v=>v.specialVigil==='pentecost_vigil'),'Korean navigation contains Pentecost Vigil');
      check(buildGeneratedLiturgyInfo(getTargetDate()).prefaceKey==='ascension_1','Korean Easter Week 7 preface was replaced by Pentecost');
      select('KR',new Date(2026,3,2));state.targetLang='EN';state.targetLocationCode='US';
      ordoSpecialOrder.build(getTargetDate(),getStartupOrdinaryMassData());
      const adjusted=ordoSpecialOrder.eucharistLines([{text_en:'On the day before he was to suffer,',__eucharistSection:'form'}],'1')[0];
      check(adjusted.text_en.includes('that is today'),'Paired country Roman Canon edits');
      select('KR',new Date(2026,3,6));ordoSpecialOrder.build(getTargetDate(),getStartupOrdinaryMassData());
      check(ordoSpecialOrder.eucharistLines([{text_en:'On the day before he was to suffer,',__eucharistSection:'form'}],'1')[0].text_en==='On the day before he was to suffer,','Special Roman Canon leaked into ordinary Mass');
      return {vigilDates:cases.length,countryMissals:languages.length,pairedDates:true,properVigilGuard:true,koreanEasterWeek7:true,pairedCanon:true};
    });
    assert.deepEqual(errors,[]);console.log(JSON.stringify(result));
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
