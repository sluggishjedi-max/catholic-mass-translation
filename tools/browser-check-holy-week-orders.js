const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const massTool=require('./mass-data-editor');
const metadataTool=require('./country-metadata-upload-tool');
const registry=massTool.runCountryMassSources(massTool.readCountryMassSources()).registry;
const metadata=Object.fromEntries(metadataTool.countryMetadataItems().map(item=>[item.jurisdiction,item]));
const heading=(name,text='')=>`<h4>${name}</h4><p>${text}</p>`;
const reading=(i)=>heading(`제${i}독서`,`▥ 창세기의 말씀입니다. 1,1\n${i} 하느님께서 검증을 위한 말씀 ${i}을 들려주십니다.\n주님의 말씀입니다.\n◎ 하느님, 감사합니다.`);
const psalm=(i)=>heading('화답송 시편 104(103),1','◎ 하느님, 주님의 말씀을 기억합니다.\n○ 화답송의 검증 구절 '+i+'.');
const ordinary=(title)=>`<h3>${title}</h3>`+heading('본기도','하느님, 저희를 지켜 주소서.')+reading(1)+psalm(1)+reading(2)+heading('복음 환호송','◎ 그리스도님, 찬미와 영광 받으소서.')+heading('복음','✠ 요한이 전한 우리 주 예수 그리스도의 수난기입니다. 18,1-19,42\n1 예수님께서 제자들과 함께 길을 나서셨습니다.\n주님의 말씀입니다.\n◎ 그리스도님, 찬미합니다.')+heading('예물 기도','주님, 이 예물을 받아 주소서.')+heading('영성체 후 기도','주님, 저희에게 생명을 주소서.');
const fixture={
  palm:heading('주님의 예루살렘 입성 기념')+heading('복음 <주님의 이름으로 오시는 분은 복되시어라.>','✠ 마태오가 전한 거룩한 복음입니다. 21,1-11\n1 군중이 주님을 맞으러 예루살렘에서 나왔습니다.\n주님의 말씀입니다.\n◎ 그리스도님, 찬미합니다.')+heading('행렬 시작 권고')+ordinary('주님 수난 성지 주일'),
  thursdayMenu:'<a href="/DailyMissa/20260402/1">성유 축성 미사</a><a href="/DailyMissa/20260402/2">주님 만찬 성목요일</a>'+ordinary('성유 축성 미사'),
  thursday:ordinary('주님 만찬 성목요일'),
  friday:ordinary('주님 수난 성금요일'),
  vigil:'<h3>주님 부활 대축일 파스카 성야</h3>'+Array.from({length:7},(_,i)=>reading(i+1)+psalm(i+1)+heading('기도','기도합시다. 독서 후 기도를 바칩니다.')).join('')+heading('대영광송')+heading('본기도','하느님, 이 거룩한 밤을 비추소서.')+'<h4>서간</h4><p>▥ 사도 바오로의 로마서 말씀입니다.</p><h5>6,3-11</h5><p>3 우리는 그리스도와 함께 새로운 삶을 살아갑니다.</p><p>주님의 말씀입니다.</p>'+heading('복음 환호송 시편 118(117),1','◎ 알렐루야, 알렐루야.\n○ 주님을 찬미하여라. 영원하신 사랑을.')+heading('복음','✠ 마태오가 전한 거룩한 복음입니다. 28,1-10\n1 예수님께서 부활하셨습니다.\n주님의 말씀입니다.')+heading('예물 기도','주님, 이 제물을 받아 주소서.')+heading('영성체 후 기도','주님, 사랑의 성령을 부어 주소서.')
};
if(process.env.ORDO_HOLY_WEEK_SOURCE_ROOT){
  fixture.liveVigil=fs.readFileSync(path.join(process.env.ORDO_HOLY_WEEK_SOURCE_ROOT,'easter-vigil.html'),'utf8');
  fixture.liveThursday=fs.readFileSync(path.join(process.env.ORDO_HOLY_WEEK_SOURCE_ROOT,'holy-thursday.html'),'utf8');
  fixture.livePalm=fs.readFileSync(path.join(process.env.ORDO_HOLY_WEEK_SOURCE_ROOT,'palm-sunday.html'),'utf8');
  fixture.liveFriday=fs.readFileSync(path.join(process.env.ORDO_HOLY_WEEK_SOURCE_ROOT,'good-friday.html'),'utf8');
}
(async()=>{
  const server=http.createServer((req,res)=>{
    const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if(!file.startsWith(root+path.sep))return res.writeHead(403).end();
    fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8');res.end(data);});
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({headless:true});
  try{
    for(const viewport of [{width:1280,height:900},{width:390,height:844}]){
      const page=await browser.newPage({viewport});
      const errors=[];page.on('pageerror',error=>errors.push(error.message));
      page.on('console',msg=>{if(msg.text().startsWith('Holy Week check:'))console.log(msg.text());});
      await page.addInitScript(({registry,metadata})=>{globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;globalThis.uploadedCountryMassMetadata=metadata;},{registry,metadata});
      await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
      await page.goto(`http://127.0.0.1:${server.address().port}/V29.html`,{waitUntil:'load'});
      await page.waitForFunction(()=>typeof countrySpecialMassRecord==='function');
      const result=await page.evaluate(async fixture=>{
        const check=(value,message)=>{if(!value)throw new Error(message);};
        state.useGps=false;state.selectedLocationCode='KR';state.currentLoc='KR';state.targetLang='EN';state.targetLocationCode='US';
        startupNoticeDecision=true;document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending');
        let selectedDate=new Date(2026,2,29), source='palm';const fetched=[];
        getStrictDateBase=()=>({localDay:cloneDateOnly(selectedDate),hour:12,timeZone:'Asia/Seoul'});
        fetchTextWithFallbacks=async url=>{
          fetched.push(url);
          if(!url.includes('missa.cbck.or.kr'))throw new Error('Test keeps other sources offline');
          if(source.startsWith('live'))return fixture[source];
          if(source==='thursday') return /\/2$/.test(url)?fixture.thursday:fixture.thursdayMenu.replaceAll('20260402',formatDateYmd(selectedDate));
          if(source==='vigil')return '<a href="'+url+'/3">주님 부활 대축일 - 파스카 성야</a><a href="'+url+'/4">주님 부활 대축일 - 낮 미사</a>'+fixture.vigil;
          return fixture[source];
        };
        const select=async(offset,kind,slot='day',forceRemote=false)=>{
          selectedDate=addDays(computeEasterSunday(2026),offset);source=kind;
          state.dayOffset=0;state.liturgyNavSlot=slot;state.specialVigilNavKey=slot==='vigil'?'easter_vigil':'';state.allSoulsNavChoice='';state.liturgicalDateContext=null;
          console.log('Holy Week check: '+kind+' '+slot);
          await Promise.race([fetchMassData({skipStartupPrompts:true,forceRemote}),new Promise((_,reject)=>setTimeout(()=>reject(Error('Mass load timed out: '+kind+' '+slot)),60000))]);
        };
        const ids=()=>Array.from(document.querySelectorAll('#missal-root .part-container')).map(item=>item.dataset.partId);
        await select(-7,'palm');
        check(ids().includes('palm_blessing') && ids().includes('palm_gospel'),'Procession missing');
        check(!ids().includes('gloria') && !ids().includes('penitential'),'Palm procession has ordinary opening rites');
        check(document.querySelector('[data-part-id="eucharist"]').textContent.includes('罪')===false,'Unexpected foreign placeholder');
        check(document.querySelector('[data-part-id="eucharist"]').textContent.includes('저희 죄인을 위하여 수난하시고'),'Palm proper preface missing');
        check(!document.querySelector('[data-part-id="gospel"]').textContent.includes('주님께서 여러분과 함께'),'Passion has ordinary Gospel greeting');
        state.options.palm_form='C';render();check(ids().includes('penitential') && !ids().includes('palm_blessing'),'Simple entrance branch');
        state.options.palm_form='B';render();check(ids().includes('palm_blessing'),'Solemn entrance branch');
        await select(-3,'thursday');
        check(ids().includes('gloria') && ids().includes('reading2'),'Thursday lacks Gloria or second reading');
        check(ids().includes('washing_feet') && ids().includes('reposition'),'Thursday special rites missing');
        check(!ids().includes('creed') && !ids().includes('blessing') && !ids().includes('dismissal'),'Thursday ends as ordinary Mass');
        check(fetched.some(url=>url.endsWith('/2')),'Chrism Mass selected instead of Supper');
        state.options.eucharist='1';render();check(document.querySelector('[data-part-id="eucharist"]').textContent.includes('바로 오늘 저녁에'),'Thursday institution narrative missing');
        check(document.querySelector('[data-part-id="eucharist"]').textContent.includes('이 거룩한 날을 특별히 기념하나이다'),'Thursday Communicantes missing');
        state.options.thursday_end_form='B';render();check(ids().includes('blessing') && ids().includes('dismissal') && !ids().includes('reposition'),'Thursday exception branch');
        state.options.thursday_end_form='A';
        await select(-2,'friday');
        check(ids().filter(id=>id.startsWith('friday_intercession_')).length===10,'Solemn intentions missing');
        check(ids().includes('cross_showing') && ids().includes('friday_people_prayer'),'Friday order missing');
        for(const excluded of ['greeting','penitential','kyrie','gloria','creed','offertory','prayer_offerings','eucharist','peace','lamb','blessing','dismissal'])check(!ids().includes(excluded),'Friday contains '+excluded);
        check(!document.querySelector('[data-part-id="friday_opening"]').textContent.includes('╋ 기도합시다.'),'Friday opening adds invitation');
        check(!document.querySelector('[data-part-id="gospel"]').textContent.includes('주님께서 여러분과 함께'),'Friday ordinary Gospel greeting');
        state.options.cross_showing='B';render();check(document.querySelector('[data-part-id="cross_showing"]').textContent.includes('성당 문, 중앙, 제단 앞'),'Second cross form');
        await select(-1,'vigil','vigil');
        const list=ids();check(list.filter(id=>/^vigil_reading_\d$/.test(id)).length===7,'Seven readings lost');
        check(list.filter(id=>/^vigil_prayer_\d$/.test(id)).length===7,'Seven prayers lost');
        check(list.indexOf('gloria')>list.indexOf('vigil_prayer_7') && list.indexOf('collect')>list.indexOf('gloria') && list.indexOf('vigil_epistle')>list.indexOf('collect'),'Vigil readings/Gloria/collect/epistle order');
        check(!list.includes('creed') && !list.includes('penitential') && !list.includes('entrance'),'Vigil has ordinary introduction or duplicate Creed');
        check(list.includes('water_blessing') && !list.includes('litany'),'No-baptism branch');
        const parsed=strictParseDailyMass('KR',fixture.vigil,selectedDate,'KR');
        for(let i=1;i<=7;i++)check(parsed.data['vigil_reading_'+i]?.text.includes('말씀 '+i+'을'),'Reading '+i+' merged or missing');
        check(parsed.data.vigil_epistle?.cit_kr?.includes('6,3-11'),'Epistle source missing: '+JSON.stringify(parsed.data.vigil_epistle));
        check(document.querySelector('[data-part-id="vigil_reading_7"]').textContent.includes('말씀 7을'),'Vigil reading was parsed but not rendered');
        check(!parsed.data.vigil_reading_3.lines.some(line=>line.text==='주님의 말씀입니다.'),'Exodus ends with the omitted proclamation');
        check(document.querySelector('[data-part-id="eucharist"]').textContent.includes('이 밤에 더욱 성대하게'),'Easter preface does not use the Holy Night formula');
        check(fetched.some(url=>url.includes('/20260405')),'Vigil queried Saturday rather than Easter entry');
        if(fixture.liveVigil){
          const real=strictParseDailyMass('KR',fixture.liveVigil,selectedDate,'KR');
          for(let i=1;i<=7;i++)check(real.data['vigil_reading_'+i]?.text.length>150,'CBCK reading '+i+' missing: '+JSON.stringify({keys:Object.keys(real.data),head:strictSourceLines(fixture.liveVigil).slice(0,25)}));
          for(let i=1;i<=7;i++)check(real.data['vigil_psalm_'+i]?.text.length>30,'CBCK Psalm '+i+' missing');
          check(real.data.vigil_epistle?.text.length>150,'CBCK epistle missing');
          check(real.data.gospel?.text.length>150,'CBCK Gospel missing');
          check(!real.data.gospel.text.includes('세례수'),'Baptism text leaked into the Gospel');
          const supper=strictParseDailyMass('KR',fixture.liveThursday,addDays(computeEasterSunday(2026),-3),'KR');
          check(supper.data.reading1?.cit_kr?.includes('12,1') && supper.data.reading2?.cit_kr?.includes('11,23'),'CBCK Supper readings missing');
          const palm=strictParseDailyMass('KR',fixture.livePalm,addDays(computeEasterSunday(2026),-7),'KR');
          check(palm.data.gospel?.text.length>1000 && palm.data.reading2?.text.length>100,'CBCK Palm Sunday Passion/readings missing');
          check(palm.data.palm_gospel?.text.length>150,'CBCK entry Gospel missing');
          const friday=strictParseDailyMass('KR',fixture.liveFriday,addDays(computeEasterSunday(2026),-2),'KR');
          check(friday.data.gospel?.text.length>1000 && friday.data.reading2?.text.length>100,'CBCK Good Friday Passion/readings missing');
        }
        state.options.baptism_form='A';render();check(ids().includes('litany') && ids().includes('baptism_water') && ids().includes('baptism') && !ids().includes('water_blessing'),'Baptism branch');
        state.options.baptism_form='B';render();check(ids().includes('litany') && ids().includes('baptism_water') && !ids().includes('baptism'),'Font-only branch');
        const rendered={sections:document.querySelectorAll('#missal-root .section-bar').length,readings:7};
        await select(-1,'vigil','day');check(ids().join()==='holy_saturday_rest','Holy Saturday daytime presents a Mass');
        await select(1,'palm');check(ids().includes('penitential') && ids().includes('eucharist') && !ids().includes('cross_showing'),'Special order leaked to Monday');
        const future={...countrySpecialLiturgies.countries.KR,jurisdiction:'TEST'};
        countrySpecialLiturgies.countries.TEST=future;
        const originalJurisdiction=dataJurisdictionForLocation;dataJurisdictionForLocation=code=>code==='TEST'?'TEST':originalJurisdiction(code);
        check(specialLiturgyProfile('TEST').celebrations.some(item=>item.id==='good_friday' && item.riteData.KR.friday_opening),'Future country profile not merged');
        dataJurisdictionForLocation=originalJurisdiction;delete countrySpecialLiturgies.countries.TEST;
        if(fixture.liveVigil){
          await select(-7,'livePalm','day',true);
          check(document.querySelector('[data-part-id="palm_gospel"]').textContent.includes('벳파게'),'Actual procession Gospel not rendered');
          await select(-3,'liveThursday','day',true);
          check(document.querySelector('[data-part-id="reading2"]').textContent.includes('빵을'),'Actual Supper second reading not rendered');
          await select(-2,'liveFriday','day',true);
          check(!ids().includes('eucharist') && document.querySelector('[data-part-id="gospel"]').textContent.includes('빌라도'),'Actual Good Friday not rendered');
          await select(-1,'liveVigil','vigil',true);
          const real=strictParseDailyMass('KR',fixture.liveVigil,selectedDate,'KR');
          for(let i=1;i<=7;i++){
            const sample=real.data['vigil_reading_'+i].lines.find(line=>line.role==='body' && line.text.length>25)?.text.split('\n')[0];
            const content=document.querySelector('[data-part-id="vigil_reading_'+i+'"]').textContent;
            check(sample && content.includes(sample),'Actual Vigil reading '+i+' not rendered');
            const item=massData.find(item=>item.id==='vigil_reading_'+i);
            const selected=item.variants?.[state.options[item.id]] || item;
            check(selected.lines.filter(line=>line.text_kr==='주님의 말씀입니다.').length===(i===3?0:1),'Vigil reading '+i+' has incorrect ending');
          }
        }else await select(-1,'vigil','vigil');
        return {palmForms:3,fridayIntentions:10,baptismForms:3,...rendered};
      },fixture);
      assert.deepEqual(errors,[]);
      await page.locator('[data-part-id="baptism_form"] select').first().selectOption('A');
      assert.equal(await page.locator('[data-part-id="baptism"]').count(),1);
      await page.locator('[data-part-id="baptism_form"] select').first().selectOption('C');
      assert.equal(await page.locator('[data-part-id="water_blessing"]').count(),1);
      console.log(JSON.stringify({viewport,...result}));
      fs.mkdirSync(path.join(root,'tmp/holy-week-check'),{recursive:true});
      await page.screenshot({path:path.join(root,`tmp/holy-week-check/${viewport.width}.png`),fullPage:false});
      await page.close();
    }
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
