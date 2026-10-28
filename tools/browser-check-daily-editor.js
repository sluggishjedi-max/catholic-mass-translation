const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const original=number=>({title:'전례명 v'+number,color:'#27ae60',data:{reading1:{text:'본문 v'+number,lines:[{sp:'',text:'본문 v'+number,kind:'body'}]},gospel:{text:'복음 본문'}}});
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':file.endsWith('.svg')?'image/svg+xml':'text/html;charset=utf-8');res.end(data);});});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  console.log('Checking daily Mass editor at '+width+'px.');
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[],requests=[];
  const versions=[1,2].map(number=>({number,kind:number===1?'collected':'edited',createdAt:'2026-11-01T00:00:00Z',parsed:original(number)}));
  let latest=2,published=2;
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
    else if(data.action==='record')response={record:record(),versions:versions.toReversed().map(({parsed,...metadata})=>metadata)};
    else if(data.action==='version')response=versions.find(version=>version.number===Number(data.version));
    else if(data.action==='save'){
     assert.equal(data.expectedLatestVersion,latest);assert.equal(data.baseVersion,2);latest++;published=latest;versions.push({number:latest,kind:'edited',createdAt:'2026-11-01T01:00:00Z',parsed:data.parsed});response={latestVersion:latest,publishedVersion:published};
    }else throw Error('Unexpected editor action '+data.action);
    return route.fulfill({contentType:'application/json',body:JSON.stringify(response)});
   }
   if(url.hostname!=='127.0.0.1')return route.fulfill({contentType:'application/javascript',body:''});
   return route.continue();
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/daily-mass-editor.html`,{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForFunction(()=>window.ordoDailyEditor?.state.loadedVersion===2&&!ordoDailyEditor.state.busy);
  await page.fill('#section-body','수정 중인 편집본을 보존합니다.');
  versions.push({number:3,kind:'collected',createdAt:'2026-11-01T00:30:00Z',parsed:original(3)});latest=3;
  let prompt;
  page.once('dialog',async dialog=>{prompt=dialog.message();await dialog.dismiss();});
  await page.evaluate(()=>ordoDailyEditor.refreshRecord());
  assert.equal(prompt,'더 높은 버전의 파일이 있습니다. 해당 파일을 불러올까요?');
  assert.equal(await page.inputValue('#section-body'),'수정 중인 편집본을 보존합니다.');
  assert.equal(published,2,'New collection overwrote the published edit');
  await page.click('#load-newer');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===3&&!ordoDailyEditor.state.busy);
  assert.equal(await page.inputValue('#section-body'),'본문 v3');
  await page.click('#restore-draft');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===2&&!ordoDailyEditor.state.busy);
  assert.equal(await page.inputValue('#section-body'),'수정 중인 편집본을 보존합니다.');
  await page.click('#save');await page.waitForFunction(()=>ordoDailyEditor.state.loadedVersion===4&&!ordoDailyEditor.state.busy);
  assert.equal(versions[3].parsed.data.reading1.text,'수정 중인 편집본을 보존합니다.');assert.equal(published,4);assert.equal(versions.length,4);
  assert.equal(await page.locator('#version-history option').count(),4);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Editor has horizontal overflow');
  assert.deepEqual(errors,[]);
  fs.mkdirSync(path.join(root,'tmp/v31-editor'),{recursive:true});await page.screenshot({path:path.join(root,'tmp/v31-editor',width+'.png'),fullPage:true,animations:'disabled',timeout:30000});
  console.log(JSON.stringify({width,versions:[1,2,3,4],higherVersionPrompt:true,draftPreserved:true,conflictSafeSave:true,publishedVersion:published,pageErrors:errors}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
