const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..'),tool=require('./mass-data-editor');
const registry=tool.runCountryMassSources(tool.readCountryMassSources()).registry;
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(e,data)=>e?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));console.log('Reading frame check: launching browser');const browser=await chromium.launch({headless:true});
 try{for(const viewport of [{width:1280,height:900},{width:390,height:844}]){
  const page=await browser.newPage({viewport}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.setDefaultNavigationTimeout(90000);
  page.on('console',message=>{if(message.text().startsWith('Reading frame check:'))console.log(message.text());});
  await page.addInitScript(registry=>{globalThis.uploadedCountryMassData=globalThis.countryMassData=registry;globalThis.ordoPrayerEditorPreview=true;},registry);
  await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
  await page.goto(`http://127.0.0.1:${server.address().port}/V30.html`);
  console.log('Reading frame check: page loaded at '+viewport.width);
await page.evaluate(async()=>{if(window.ordoDataLoader)await Promise.all([ordoDataLoader.ensure('special',Object.keys(ordoDataLoader.manifest.special)),ordoDataLoader.ensure('missal',Object.keys(ordoDataLoader.manifest.missal))]);});
  const result=await page.evaluate(()=>{
   const check=(ok,message)=>{if(!ok)throw Error(message)};
   document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending');startupNoticeDecision=true;
   state.useGps=false;state.selectedLocationCode=state.currentLoc='KR';state.targetLocationCode=state.targetLang='VN';
   const date=new Date(2026,10,2);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});
   state.liturgicalDateContext=null;state.allSoulsNavChoice='first';rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);
   const entry=countrySpecialMassRecord(date,'VN');
   console.log('Reading frame check: parsing Vietnamese first Mass');
   const vn=strictParseDailyMass('VN',entry.sourceTextFallbacks.VN,date,'VN');
   const psalmOptions=splitParsedAlternatives(vn.data.psalm.lines);
   check(psalmOptions.length===2,'Printed Vietnamese refrain alternatives were not preserved');
   for(const option of psalmOptions){check(option.filter(l=>l.sp==='Đáp').length===1,'Repeated refrain leaked');check(option.filter(l=>l.sp==='Xướng').length===4,'Numbered Psalm stanza missing');check(option.some(l=>l.sp==='Xướng'&&l.text.includes('lâu dài')),'Wrapped Psalm stanza tail lost');}
   check(psalmOptions[1][0].text.includes('không lo mắc nạn'),'Wrapped alternate refrain truncated');
   const normal=parseVietnamesePsalmLines(['Đáp: Một điệp khúc.','Xướng: Khổ thứ nhất.','Xướng: Khổ thứ hai.']);
   check(normal.lines.length===3&&normal.lines[2].text.includes('thứ hai'),'Ordinary marked Psalm regressed');
   let cases=0;
   console.log('Reading frame check: checking multilingual frames');
   for(const lang of SUPPORTED_LANGS)for(const id of ['reading1','reading2','gospel'])for(const stacked of [false,true]){
    const other=lang==='KR'?'VN':'KR';state.currentLoc=other;state.targetLang=lang;state.layoutStacked=stacked;
    const locations={KR:'KR',VN:'VN',EN:'US',JP:'JP',LA:'VA',ZH:'TW',IT:'IT',PT:'PT',ES:'MX',DE:'DE'};
    state.selectedLocationCode=locations[other];state.targetLocationCode=locations[lang];
    const lower=lang.toLowerCase(),book=id==='gospel'?'JHN':'ROM',citation=bibleCitation.format(id==='gospel'?'요한 6,37-40':'로마 5,5-11','KR',lang);
    const body='Original body '+lang+' '+id+' first paragraph.\nSecond paragraph remains intact.';
    const lines=[parsedLine('',localizedReadingIntroText(id,lang,book),'intro'),parsedLine('',body,'body')];
    const input={[id]:{['cit_'+lower]:citation,[lower]:parsedLinesToText(lines),[lower+'_lines']:lines}};
    resetMassDataFrom(getStartupOrdinaryMassData());applyDailyReadingsToMassData(input);
    const item=massData.find(p=>getBaseId(p.id)===id);massData.splice(0,massData.length,item);render();
    const section=document.querySelector('[data-part-id="'+id+'"]');check(section,lang+' '+id+' section missing');
    const rows=[...section.querySelectorAll('.source-only-reading-whole')];
    const intro=rows.find(row=>row.textContent.includes(localizedReadingIntroText(id,lang,book)));
    const bodyRow=section.querySelector('.source-only-reading-body-row');
    check(intro&&bodyRow&&intro!==bodyRow,lang+' '+id+' intro is bundled with body');
    check(intro.querySelectorAll('.pair-line').length===2,lang+' '+id+' intro lacks its translated counterpart');
    check(bodyRow.textContent.includes('Original body')&&bodyRow.textContent.includes('Second paragraph'),lang+' '+id+' body lost');
    check(bodyRow.querySelectorAll('.btn-ai-trans').length===1,lang+' '+id+' should have one body translation button');
    if(id==='gospel'){
     const dialogueRows=rows.slice(0,rows.indexOf(bodyRow)).filter(row=>row!==intro);
     check(dialogueRows.length===3&&dialogueRows.every(row=>row.querySelectorAll('.pair-line').length===2),lang+' Gospel greeting/glory is not paired before the body: '+JSON.stringify(dialogueRows.map(row=>[row.querySelectorAll('.pair-line').length,row.textContent])));
    }
    const endingRows=rows.slice(rows.indexOf(bodyRow)+1);
    check(endingRows.length===2&&endingRows.every(row=>row.querySelectorAll('.pair-line').length===2),lang+' '+id+' proclamation/response not paired: '+JSON.stringify(endingRows.map(row=>[row.querySelectorAll('.pair-line').length,row.textContent])));
    check(!endingRows.some(row=>row.textContent.includes('Original body')),lang+' '+id+' body bundled into ending');
    if(stacked||innerWidth<600)check(rows.every(row=>row.classList.contains('pair-block')),'Stacked display uses whole-language columns');
    cases++;
   }
   state.currentLoc='KR';state.targetLang='VN';state.selectedLocationCode='KR';state.targetLocationCode='VN';state.layoutStacked=false;
   const different={gospel:{cit_kr:'마태 5,1-12',cit_vn:'Ga 6,37-40',kr_lines:[parsedLine('','한국어 복음 원문','body')],vn_lines:[parsedLine('','Bản văn Tin Mừng riêng.','body')]}};
   resetMassDataFrom(getStartupOrdinaryMassData());applyCachedVariantAlignments(different,date);finalizeDailyReadingsData(different);
   const item=massData.find(p=>getBaseId(p.id)==='gospel');
   for(const key of Object.keys(item.variants)){state.options.gospel=key;render();check(document.querySelector('[data-part-id="gospel"] .source-only-reading-body-row .btn-ai-trans'),'Different Gospel choice lost body translation');}
   state.dailySourceProvenance={VN:{date:formatDateIso(date),source:{translation:'UBPT'}}};state.dailyReadingLanguageStatus={VN:'error'};
   for(const lang of SUPPORTED_LANGS){state.targetLang=lang==='VN'?'KR':'VN';state.currentLoc=lang;render();const group=document.querySelector('[data-legend-lang="'+lang+'"]');check(group.querySelector('[data-notice-id="fixed-formulary:VN"]'),lang+' fixed formulary notice missing');check(!document.querySelector('#missal-root .daily-source-provenance'),'Warning remains in Mass body');}
   state.currentLoc='KR';state.targetLang='VN';render();
   return {cases,psalmOptions:psalmOptions.length,stanzas:4,pairedFrames:true,sharedNotices:true};
  });
  assert.deepEqual(errors,[]);fs.mkdirSync(path.join(root,'tmp/reading-fixes'),{recursive:true});await page.screenshot({path:path.join(root,'tmp/reading-fixes/'+viewport.width+'.png')});console.log(JSON.stringify({viewport,...result}));await page.close();
 }}catch(error){console.error(error);throw error;}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1});
