const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const original=number=>({title:'전례명 v'+number,color:'#27ae60',sourceUrl:'https://www.tonggiaophanhanoi.org/daily-v'+number+'/',data:{gospel:{text:'복음 본문'},prayer_after:{text:'영성체 후 기도 본문'},reading2:{citation:'성경 구절만 있음'},psalm:{lines:[{sp:'R.',text:'   '}]},reading1:{text:'본문 v'+number,lines:[{sp:'',text:'본문 v'+number,kind:'body'}]},collect:{text:''},Sequence:{text:'부속가 본문'}}});
const provenance=number=>({country:'VN',sourceId:'hanoi',originCollectedVersion:1,urls:[{url:'https://r.jina.ai/https://www.tonggiaophanhanoi.org/daily-v'+number+'/',kind:'response'},{url:'https://ktcgkpv.org/readings',kind:'response'},{url:'javascript:alert(1)',kind:'response'}]});
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':file.endsWith('.svg')?'image/svg+xml':'text/html;charset=utf-8');res.end(data);});});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  console.log('Checking daily Mass editor at '+width+'px.');
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[],requests=[];
  const versions=[1,2].map(number=>({number,kind:number===1?'collected':'edited',createdAt:'2026-11-01T00:00:00Z',parsed:original(number),provenance:provenance(number)}));
  let latest=2,published=2,missing=false,collectionChecks=0,collectionRequested=false;
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{window.firebase={apps:[],auth:()=>({currentUser:{getIdToken:async()=>'fixture-administrator-token'}})};});
  await page.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(url.pathname.endsWith('/admin_date_review.js'))return route.fulfill({contentType:'application/javascript',body:'window.ordoAdminReview={isVerified:()=>true};'});
   if(url.pathname.endsWith('/dailyMassAdmin')){
    assert.equal(route.request().headers().authorization,'Bearer fixture-administrator-token');
    const data=route.request().method()==='GET'?Object.fromEntries(url.searchParams):route.request().postDataJSON();requests.push(data);
    const record=()=>({country:'VN',date:'2026-11-01',sourceId:'hanoi',variant:'day',latestVersion:latest,publishedVersion:published,publishedKind:'edited',parsed:versions.find(version=>version.number===published).parsed});
    let response;
    if(data.action==='catalog')response={countries:{VN:['베트남','VN'],KR:['대한민국','KR']},today:'2026-11-01'};
    else if(data.action==='list')response={days:[{date:'2026-11-01',records:{hanoi__day:{latestVersion:latest,publishedVersion:published}}}]};
    else if(data.action==='runs')response={runs:[]};
    else if(data.action==='head')response={latestVersion:latest,publishedVersion:published};
    else if(data.action==='record')response={record:missing?null:record(),versions:missing?[]:versions.toReversed().map(({parsed,...metadata})=>metadata)};
    else if(data.action==='collect'){assert.equal(data.priority,true);assert.equal(data.start,'2026-11-02');assert.equal(data.days,1);collectionRequested=true;response={runId:'auto-missing-date',queued:3};}
    else if(data.action==='collection'){
     assert(collectionRequested);assert.equal(data.runId,'auto-missing-date');collectionChecks++;
     if(collectionChecks===1)response={status:'queued'};
     else{missing=false;latest=published=1;versions.splice(0,versions.length,{number:1,kind:'collected',createdAt:'2026-11-02T00:00:00Z',parsed:original(1),provenance:provenance(1)});response={status:'completed'};}
    }
    else if(data.action==='version')response=versions.find(version=>version.number===Number(data.version));
    else if(data.action==='save'){
     assert.equal(data.expectedLatestVersion,latest);assert.equal(data.baseVersion,2);latest++;published=latest;versions.push({number:latest,kind:'edited',createdAt:'2026-11-01T01:00:00Z',parsed:data.parsed,provenance:provenance(2)});response={latestVersion:latest,publishedVersion:published};
    }else throw Error('Unexpected editor action '+data.action);
    return route.fulfill({contentType:'application/json',body:JSON.stringify(response)});
   }
   if(url.hostname!=='127.0.0.1')return route.fulfill({contentType:'application/javascript',body:''});
   return route.continue();
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/daily-mass-editor.html`,{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForFunction(()=>window.ordoDailyEditor?.state.loadedVersion===2&&!ordoDailyEditor.state.busy);
  const order=await page.locator('#section option').evaluateAll(options=>options.map(option=>option.value));assert.deepEqual(order,['entrance','collect','reading1','psalm','reading2','Sequence','gospel_accl','gospel','prayer_offerings','preface','communion','meditation_after_communion','prayer_after']);
  assert.equal(await page.locator('#liturgy-color option:checked').textContent(),'녹색');assert(!(await page.locator('#liturgy-color').textContent()).includes('#'));
  assert.equal(await page.locator('[data-section="reading1"] .collection-badge').textContent(),'수집');assert.equal(await page.locator('[data-section="reading2"] .collection-badge').textContent(),'미수집');assert.equal(await page.locator('[data-section="psalm"] .collection-badge').textContent(),'미수집');
  assert((await page.locator('#source-code').textContent()).includes('VN / hanoi'));assert((await page.locator('#source-websites').textContent()).includes('하노이 대교구 · HANOI'));
  assert.equal(await page.locator('#source-websites a[href="https://www.tonggiaophanhanoi.org/daily-v2/"]').count(),1);assert.equal(await page.locator('#source-websites a[href^="javascript:"]').count(),0);assert.equal(await page.locator('#source-websites a[href*="r.jina.ai"]').count(),0);
  await page.fill('#section-body','   ');assert.equal(await page.locator('[data-section="reading1"] .collection-badge').textContent(),'미수집');
  await page.fill('#section-body','수정 중인 편집본을 보존합니다.');
  await page.selectOption('#liturgy-color','purple');assert.equal(await page.locator('#liturgy-color option:checked').textContent(),'자색');
  versions.push({number:3,kind:'collected',createdAt:'2026-11-01T00:30:00Z',parsed:original(3),provenance:provenance(3)});latest=3;
  let prompt;
  page.once('dialog',async dialog=>{prompt=dialog.message();await dialog.dismiss();});
  await page.evaluate(()=>ordoDailyEditor.refreshRecord());
  assert.equal(prompt,'더 높은 버전의 파일이 있습니다. 해당 파일을 불러올까요?');
  assert.equal(await page.inputValue('#section-body'),'수정 중인 편집본을 보존합니다.');
  assert.equal(await page.locator('#liturgy-color option:checked').textContent(),'자색');
  assert.equal(published,2,'New collection overwrote the published edit');
  await page.click('#load-newer');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===3&&!ordoDailyEditor.state.busy);
  assert.equal(await page.inputValue('#section-body'),'본문 v3');
  await page.click('#restore-draft');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===2&&!ordoDailyEditor.state.busy);
  assert.equal(await page.inputValue('#section-body'),'수정 중인 편집본을 보존합니다.');
  await page.click('#save');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===4&&!ordoDailyEditor.state.busy);
  assert.equal(versions[3].parsed.data.reading1.text,'수정 중인 편집본을 보존합니다.');assert.equal(published,4);assert.equal(versions.length,4);
  assert.equal(versions[3].parsed.color,'#8e44ad');
  await page.evaluate(()=>document.getElementById('advanced-json').closest('details').open=true);
  for(const [color,label]of [['#fff','백색'],['#123456','기타 색상']]){const json=JSON.parse(await page.inputValue('#advanced-json'));json.color=color;await page.fill('#advanced-json',JSON.stringify(json));await page.click('#apply-json');await page.waitForFunction(()=>!ordoDailyEditor.state.busy);assert.equal(await page.locator('#liturgy-color option:checked').textContent(),label);await page.fill('#liturgy-title','색상 보존 확인');assert.equal(await page.evaluate(()=>ordoDailyEditor.state.parsed.color),color,'Merely editing the title changed the stored color code');}
  await page.evaluate(()=>ordoDailyEditor.loadVersion(4));await page.evaluate(()=>document.getElementById('advanced-json').closest('details').open=false);
  assert.equal(await page.locator('#version-history option').count(),4);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Editor has horizontal overflow');
  assert.deepEqual(errors,[]);
  fs.mkdirSync(path.join(root,'tmp/v31-editor'),{recursive:true});await page.screenshot({path:path.join(root,'tmp/v31-editor',width+'.png'),fullPage:true,animations:'disabled',timeout:30000});
  console.log(JSON.stringify({width,versions:[1,2,3,4],higherVersionPrompt:true,draftPreserved:true,conflictSafeSave:true,publishedVersion:published,pageErrors:errors}));
  missing=true;
  await page.evaluate(()=>{const date=document.getElementById('date');date.value='2026-11-02';date.dispatchEvent(new Event('change'));});
  await page.waitForFunction(()=>ordoDailyEditor.state.identity?.date==='2026-11-02'&&ordoDailyEditor.state.loadedVersion===1&&!ordoDailyEditor.state.busy,{timeout:60000});
  assert(collectionRequested);assert(collectionChecks>=2);assert.equal(await page.inputValue('#section-body'),'본문 v1');
  assert(await page.locator('#cancel-collection').isHidden());assert.deepEqual(errors,[]);
  console.log(JSON.stringify({width,missingDate:'2026-11-02',automaticServerCollection:true,waitedForCompletion:true,loadedVersion:1}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
