const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
const mass=require('./mass-data-editor'),metadataTool=require('./country-metadata-upload-tool');
const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const metadata=Object.fromEntries(metadataTool.countryMetadataItems().map(item=>[item.jurisdiction,item]));
(async()=>{
  const server=http.createServer((req,res)=>{
    const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if(!file.startsWith(root+path.sep))return res.writeHead(403).end();
    fs.readFile(file,(err,data)=>err?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({headless:true});
  try{
    const fixtureDir=path.join(root,'tmp/all-souls-20261013');
    const expected=require('./fixtures/v29-2-all-souls-citations.json').audit;
    const live=process.argv.includes('--live-sources');
    const currentSources=process.argv.includes('--reviewed-current-sources')?Object.fromEntries(['kr','krToday','vn','la'].map(key=>[key,fs.readFileSync(path.join(root,'tmp/source-audit',key+'.html'),'utf8')])):null;
    const fixture=(readings,lang)=>Object.entries(readings).map(([key,citations])=>{
      const heading=({KR:{reading1:'제1독서',psalm:'화답송',reading2:'제2독서',gospel_accl:'복음 환호송',gospel:'복음'},EN:{reading1:'Reading 1',psalm:'Responsorial Psalm',reading2:'Reading 2',gospel_accl:'Alleluia',gospel:'Gospel'}})[lang][key];
      const body=key==='psalm'||key==='gospel_accl'?(lang==='KR'?'◎ 알렐루야.\n○ 검증용 본문입니다.':'R. Alleluia.\nA synthetic passage for testing.'):(lang==='KR'?'자동 검증을 위한 합성 본문입니다.':'A synthetic passage for automated tests.');
      return '<h4>'+heading+'</h4><p>'+citations[lang]+'</p>'+body.split('\n').map(text=>'<p>'+text+'</p>').join('');
    }).join('');
    const fixtures=live?Object.fromEntries(['kr1','kr2','kr3','en'].map(key=>[key,fs.readFileSync(path.join(fixtureDir,key+'.html'),'utf8')])):
      {kr1:fixture(expected[0].readings,'KR'),kr2:fixture(expected[1].readings,'KR'),kr3:fixture(expected[2].readings,'KR'),en:fixture(expected[0].readings,'EN')};
    for(const viewport of [{width:1280,height:900},{width:390,height:844}]){
      const page=await browser.newPage({viewport});
      const errors=[];page.on('pageerror',error=>{errors.push(error.message);console.error('PAGE ERROR:',error.message)});
      await page.addInitScript(({registry,metadata})=>{globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;globalThis.uploadedCountryMassMetadata=metadata;globalThis.ordoPrayerEditorPreview=true;},{registry,metadata});
      await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
      await page.goto(`http://127.0.0.1:${server.address().port}/V29.html`);
      const result=await page.evaluate(async ({fixtures,expected,currentSources})=>{
        const check=(ok,message)=>{if(!ok)throw Error(message)};
        const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
        startupNoticeDecision=true;
        document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending');
        state.useGps=false;state.currentLoc=state.selectedLocationCode='KR';state.targetLang='EN';state.targetLocationCode='US';
        const select=(date,vigil='')=>{
          getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});
          state.dayOffset=0;state.allSoulsNavChoice='';state.liturgyNavSlot=vigil?'vigil':'day';state.specialVigilNavKey=vigil;
          state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);
          state.autoBlessingSignature='';resetMassDataFrom(getStartupOrdinaryMassData());
          const ordered=ordoSpecialOrder.build(date,massData);if(ordered)massData.splice(0,massData.length,...ordered);render();
        };
        // Citation mismatches are a hard boundary even for AI/cached proposals.
        const section={cit_kr:'시편 27(26),1.4.7-9.13-14',cit_en:'Ps 23:1-3a,3b-4,5,6',kr_lines:[parsedLine('◎','주님은 나의 빛, 나의 구원.')],en_lines:[parsedLine('R.','The Lord is my shepherd.')]};
        const {optionMap}=selectableOptionMapFromData(section,'psalm');
        const safe=normalizeSafeVariantAlignmentGroups('psalm',optionMap,[{kr:0,en:0}],section);
        check(!safe.some(group=>Number.isInteger(group.kr)&&Number.isInteger(group.en)),'Different Psalms merged by an AI proposal');
        const differentVerses={...section,cit_kr:'마태 1,1-25',cit_en:'Mt 1:1-23'};
        check(!normalizeSafeVariantAlignmentGroups('gospel',optionMap,[{kr:0,en:0}],differentVerses).some(g=>Number.isInteger(g.kr)&&Number.isInteger(g.en)),'Different Gospel lengths merged');
        let alignmentRequests=0;const realRequest=requestVariantAlignmentWithGemini;
        requestVariantAlignmentWithGemini=async()=>{alignmentRequests++;return[{kr:0,en:0}]};
        const data=createDailyReadingData();data.psalm=section;
        applyCachedVariantAlignments(data,new Date(2026,10,2));await alignDailySelectableVariantsWithAI(data,new Date(2026,10,2));
        check(alignmentRequests===0,'Known incompatible Scripture sent to AI');
        check(!data.psalm.variantAlignment.some(g=>Number.isInteger(g.kr)&&Number.isInteger(g.en)),'Different Psalms merged in final choices');
        requestVariantAlignmentWithGemini=realRequest;
        // Audit every reading against the actual saved conference pages.
        const audit=[];
        for(const [index,choice] of ['first','second','third'].entries()){
          const date=new Date(2026,10,2);select(date);state.allSoulsNavChoice=choice;
          state.liturgicalDateContext={date,localDate:date,navSlot:'day',allSoulsChoice:choice};state.liturgyInfo=buildGeneratedLiturgyInfo(date);
          const kr=strictParseDailyMass('KR',fixtures['kr'+(index+1)],date,'KR');
          const en=strictParseDailyMass('EN',fixtures.en,date,'US');
          const readings={};
          for(const key of ['reading1','psalm','reading2','gospel_accl','gospel']){
            check(sourceSectionHasContent(kr.data[key])&&sourceSectionHasContent(en.data[key]),choice+' '+key+' lost source text');
            readings[key]={KR:kr.data[key].cit_kr||'',EN:en.data[key].cit_en||''};
            for(const lang of ['KR','EN'])check(bibleCitation.equivalent(readings[key][lang],lang,expected[index].readings[key][lang],lang,{ignoreSubverses:true}),choice+' '+lang+' '+key+' disagrees with the reviewed source: '+readings[key][lang]);
          }
          audit.push({choice,readings});
          if(choice==='first'){
            check(bibleCitation.parse(readings.reading1.KR,'KR')?.id==='JOB','Korean first Mass uses Job');
            check(bibleCitation.parse(readings.psalm.KR,'KR')?.chapter===27,'Korean first Mass Psalm must be 27');
            check(bibleCitation.parse(readings.psalm.EN,'EN')?.chapter===23,'US published Psalm must be 23');
            const merged=createDailyReadingData();mergeSourceData(merged,kr,'KR');mergeSourceData(merged,en,'EN');applyCachedVariantAlignments(merged,date);finalizeDailyReadingsData(merged);render();
            const item=massData.find(item=>getBaseId(item.id)==='psalm');
            check(!Object.values(item.variants).some(v=>Number.isInteger(v.__dailySourceIndexes?.kr)&&Number.isInteger(v.__dailySourceIndexes?.en)),'Real first-Mass different Psalms labeled common');
          }
        }
        // Every verified language is available; Advent opens with ordinary A.
        select(new Date(2026,11,24));
        check(state.options.blessing==='A','Advent does not default to the ordinary blessing');
        const blessing=massData.find(item=>getBaseId(item.id)==='blessing');
        for(const lang of ['KR','EN','LA','VN','IT','PT','JP']){
          const lower=lang.toLowerCase();
          check(blessing.variants.C.lines.filter(line=>line['text_'+lower]).length>=8,lang+' Advent blessing missing');
          check(blessing.variants.solemn_for_the_dead.lines.some(line=>(line['text_'+lower]||'').length>30),lang+' Dead blessing missing');
        }
        state.options.blessing='C';render();check(state.options.blessing==='C','Manual solemn blessing choice was reset');
        select(new Date(2026,11,24),'christmas_vigil');
        const crib=()=>document.querySelector('[data-part-id="christmas_crib"]');
        check(crib(),'Crib rite missing');
        check(!crib().querySelector('details'),'Outside-Mass rite remains');
        check(!crib().querySelector('.special-rite-original'),'Crib still spans both language columns');
        check(!crib().querySelector('.ai-btn,.ai-button'),'Crib offers an unverified translation');
        const stacked=!!crib().querySelector('.pair-block');
        const left=[...crib().querySelectorAll(stacked?'.pair-block > :not(.translation)':'.pc-line-row:not(.pc-header-row) > .pc-col:first-child')].map(n=>n.textContent).join('');
        const right=[...crib().querySelectorAll(stacked?'.pair-block .translation':'.pc-line-row:not(.pc-header-row) > .pc-col-sub')].map(n=>n.textContent).join('');
        check(!left.includes('God of every nation'),'English crib text covers Korean');
        check(right.includes('God of every nation')&&right.includes('forever and ever'),'Complete prayer absent from English column');
        state.targetLang='VN';state.targetLocationCode='VN';render();check(!crib().textContent.includes('God of every nation'),'English visible without an English column');
        state.targetLang='EN';state.targetLocationCode='US';render();
        // Fixed Korean readings remain complete without fetching their source.
        for(const year of [2024,2025,2026]){
          select(addDays(computeEasterSunday(year),-7));
          const record=countrySpecialMassRecord(getTargetDate(),'KR');
          const part=record.riteData.KR.palm_gospel.byCycle[getSundayCycle(getTargetDate())];
          check(part.lines.some(line=>(line.text||'').length>300),'Fixed Palm entrance Gospel missing '+year);
          check(bibleCitation.parse(part.citation,'KR'),'Invalid Palm Gospel citation '+year+': '+part.citation);
          check(!part.lines.some(line=>/복음입니다\.[,\d]|<또는\s*요한/.test(line.text||'')),'Palm citation leaked into the spoken Gospel '+year);
          if(year===2024){
            check(part.variants.B.citation==='요한 12,12-16','Optional Johannine entrance Gospel missing');
            check(part.variants.B.lines.some(line=>(line.text||'').includes('그분께 그대로 해 드렸다는')),'Optional Johannine Gospel incomplete');
          }
          check(!record.sourceParts.KR.palm_gospel,'Palm Gospel still depends on source parsing');
          select(addDays(computeEasterSunday(year),-1),'easter_vigil');
          for(let i=1;i<=7;i++){
            const r=countrySpecialMassRecord(getTargetDate(),'KR');
            check(r.riteData.KR['vigil_reading_'+i].lines.some(line=>(line.text||'').length>250),'Fixed Vigil reading '+i+' missing');
            check(!r.sourceParts.KR['vigil_reading_'+i],'Fixed reading still parsed');
          }
        }
        const vn=specialLiturgyProfile('VN');
        const palm=vn.celebrations.find(e=>e.id==='palm_sunday');
        check(palm.prefaceText.VN.lines.some(l=>l.sp&&l.text.includes('Ðấng vô tội')),'Vietnamese Palm preface missing');
        const vigil=vn.vigils.find(e=>e.id==='easter_vigil').riteData.VN;
        for(const key of ['vigil_reading_1','vigil_psalm_1','fire_blessing','baptism_renewal'])check(vigil[key].lines.some(l=>l.sp&&l.text),'Vietnamese speaker missing '+key);
        check(vigil.light_procession.lines.some(l=>l.sp==='PT.'&&l.text.includes('Ánh sáng')),'Procession deacon label missing');
        check(vigil.light_procession.lines.some(l=>l.sp==='CĐ.'&&l.text.includes('Tạ ơn')),'Procession assembly label missing');
        // Popup lives through async checks and an old completion cannot hide it.
        const original={align:alignDailySelectableVariantsWithAI,compare:compareLocalMissalPrayersWithAI,semantic:alignDailyTextEquivalenceWithAI,finalize:finalizeDailyReadingsData,render};
        const pending=[];alignDailySelectableVariantsWithAI=()=>new Promise(resolve=>pending.push(resolve));
        compareLocalMissalPrayersWithAI=alignDailyTextEquivalenceWithAI=async()=>false;finalizeDailyReadingsData=render=()=>{};
        const first=validateLoadedDailyLiturgy({},new Date(2026,10,2));
        check(document.querySelector('#liturgy-status-bar.is-visible.is-loading')?.textContent==='불러온 전례를 확인하고 있습니다','Validation toast missing');
        check(!document.getElementById('liturgy-checking-popup'),'Separate validation popup remains');
        cancelDailyLiturgyValidation();const second=validateLoadedDailyLiturgy({},new Date(2026,11,24));
        pending.shift()();await first;check(document.querySelector('#liturgy-status-bar.is-visible'),'Stale validation hid current toast');
        pending.shift()();await second;check(!document.querySelector('#liturgy-status-bar.is-visible'),'Completed validation toast remains');
        alignDailySelectableVariantsWithAI=original.align;compareLocalMissalPrayersWithAI=original.compare;alignDailyTextEquivalenceWithAI=original.semantic;finalizeDailyReadingsData=original.finalize;render=original.render;
        // Source titles and actual formularies override generated temporal labels.
        const missionDate=new Date(2026,9,18);
        select(missionDate);
        check(state.liturgyInfo.names.KR.includes('민족들의 복음화'),'Korean Mission Sunday missing before source load');
        const missionHtml='<h3>[녹] 연중 제29주일</h3><p>[녹] 민족들의 복음화를 위한 미사 <small>(전교 주일)</small></p><h4>입당송 시편 67(66),2-3 참조</h4><p>하느님은 자비를 베푸소서.</p><h4>본기도</h4><p>민족들의 복음화를 위한 검증용 본기도.</p><h4>제1독서</h4><p>이사 2,1-5</p><p>검증용 독서 본문.</p><h4>화답송 시편 98(97),1.2-3ㄱㄴ.3ㄷㄹ-4.5-6(◎ 2 참조 또는 3ㄷㄹ)</h4><p>◎ 주님은 민족들의 눈앞에 당신 정의를 드러내셨네.</p><p>○ 주님께 노래하여라.</p>';
        const mission=strictParseDailyMass('KR',missionHtml,missionDate,'KR');
        check(mission.title.includes('민족들의 복음화')&&!mission.title.includes('연중 제29'),'CBCK second formulary title lost');
        const ordinary={title:'Twenty-ninth Sunday in Ordinary Time',data:{collect:{text:'Synthetic ordinary Sunday collect.',lines:[parsedLine('','Synthetic ordinary Sunday collect.')]},reading1:{cit_en:'Ex 17:8-13',text:'Synthetic Exodus passage.',lines:[parsedLine('','Synthetic Exodus passage.')]}}};
        for(const reverse of [false,true]){
          select(missionDate);const combined=createDailyReadingData();
          for(const lang of reverse?['EN','KR']:['KR','EN'])mergeSourceData(combined,lang==='KR'?mission:ordinary,lang);
          applyCachedVariantAlignments(combined,missionDate);
          check(getLiturgyDisplayName('KR').includes('민족들의 복음화'),'Primary official title not displayed');
          check(getLiturgyDisplayName('EN').includes('Twenty-ninth Sunday'),'Counterpart title replaced by primary proper');
          for(const key of ['collect','reading1'])check(!combined[key].variantAlignment.some(g=>Number.isInteger(g.kr)&&Number.isInteger(g.en)),'Different national formularies bound: '+key);
        }
        select(new Date(2026,9,24));
        const alternative=strictParseDailyMass('KR','<h3>[녹] 연중 제29주간 토요일 <small>또는</small></h3><p>[백] 성 안토니오 마리아 클라렛 주교 또는</p><h4>제1독서</h4><p>에페 4,7-16</p><p>검증 본문</p>',getTargetDate(),'KR');
        check(alternative.title.includes('연중 제29주간'),'Optional memorial replaced temporal source');
        check(strictFindLiturgyTitle(['[녹] 연중 제29주간 토요일','또는','[백] 복되신 동정 마리아','제1독서'],'KR').includes('연중 제29주간'),'Separate alternative marker ignored');
        const localColor=state.liturgyInfo.color;
        mergeSourceData(createDailyReadingData(),{title:'A national solemnity',color:'#ff0000',calendarContext:{confirmed:true,priority:true,rankKey:'solemnity'},data:{}},'EN');
        check(state.liturgyInfo.color===localColor&&!state.liturgyInfo.meta.vietnameseCalendarConfirmed,'Counterpart calendar overwrote the primary calendar');
        select(new Date(2027,9,24));check(state.liturgyInfo.names.KR.includes('민족들의'),'Moving Mission Sunday used a fixed third-Sunday rule');
        state.selectedLocationCode='US';state.currentLoc='EN';state.liturgyInfo=buildGeneratedLiturgyInfo(new Date(2026,9,18));
        check(!state.liturgyInfo.names.EN.includes('Evangelization'),'Korean proper leaked into US calendar');
        select(new Date(2026,9,24));state.targetLang='VN';state.targetLocationCode='VN';
        const commonPsalm={cit_kr:'시편 122(121),1-2.3-4ㄱㄴ.4ㄷㄹ-5(◎ 1 참조)',cit_vn:'Tv 121,1-2.3-4ab.4cd-5 Đ. c.1',kr_lines:[parsedLine('◎','기뻐하며 주님의 집으로 가리라.')],vn_lines:[parsedLine('Đ.','Ta vui mừng trẩy lên đền thánh Chúa.')]};
        const psalmOptions=selectableOptionMapFromData(commonPsalm,'psalm').optionMap;
        check(buildDeterministicDailyVariantAlignment('psalm',commonPsalm,psalmOptions).alignment.some(g=>g.kr===0&&g.vn===0),'Equivalent Korean/Vietnamese Psalm separated');
        check(passageCitationsConflict('psalm',commonPsalm.cit_kr,'Ps 121:1-2','KR','EN'),'Different adjacent Psalms merged through an alternate number');
        check(passageCitationsConflict('psalm','시편 116,1-2','Tv 115,1-2','KR','VN'),'Disjoint parts of a split Psalm merged');
        if(currentSources){
          select(missionDate);
          const actual=strictParseDailyMass('KR',currentSources.kr,missionDate,'KR');
          check(actual.title.includes('민족들의 복음화'),'Actual CBCK proper title lost: '+actual.title);
          check(bibleCitation.parse(actual.data.reading1.cit_kr,'KR')?.id==='ISA','Actual Mission Sunday reading missing');
          select(new Date(2026,9,24));
          const today=strictParseDailyMass('KR',currentSources.krToday,getTargetDate(),'KR');
          check(today.title.includes('연중 제29주간 토요일'),'Actual CBCK optional memorial replaced weekday');
          const vnReference=JSON.stringify(JSON.parse(currentSources.vn)).match(/"ref":"(Tv 121,[^"]+)"/)?.[1];
          check(vnReference&&bibleCitation.equivalent(today.data.psalm.cit_kr,'KR',vnReference,'VN',{ignoreSubverses:true}),'Actual Korean/Vietnamese Psalm failed comparison');
        }
        // Network comparison pool performs independent work three at a time.
        let running=0,maximum=0,finished=0;const start=performance.now();
        await runLimitedTasks(Array.from({length:9}),3,async()=>{running++;maximum=Math.max(maximum,running);await sleep(60);running--;finished++});
        const poolMs=performance.now()-start;
        check(maximum===3&&finished===9,'Comparison pool concurrency is not bounded at three');
        check(publicAppVersionLabel()==='V29.2','Public version is not V29.2');
        return {version:APP_VERSION,audit,blessings:['KR','EN','LA','VN','IT','PT','JP'],poolMs,maximum,passed:true};
      },{fixtures,expected,currentSources});
      if(errors.length)throw Error(errors.join('\n'));
      fs.mkdirSync(path.join(root,'tmp/v29-2-check'),{recursive:true});
      fs.writeFileSync(path.join(root,'tmp/v29-2-check',viewport.width+'.json'),JSON.stringify(result,null,2));
      await page.screenshot({path:path.join(root,'tmp/v29-2-check',viewport.width+'.png')});
      console.log(JSON.stringify({viewport,sourceMode:live?'conference-html':'synthetic-reference-fixtures',...result}));await page.close();
    }
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
