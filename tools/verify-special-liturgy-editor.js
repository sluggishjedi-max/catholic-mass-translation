const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const {createServer}=require('./mass-data-editor');
const {createSpecialEditorBackend}=require('./special-liturgy-editor');
const root=path.resolve(__dirname,'..');
(async()=>{
 const fixture=fs.mkdtempSync(path.join(root,'tmp/special-editor-test-'));
 fs.mkdirSync(path.join(fixture,'JS file'),{recursive:true});fs.mkdirSync(path.join(fixture,'tools'),{recursive:true});
 fs.copyFileSync(path.join(root,'JS file/country_special_liturgies_v29.js'),path.join(fixture,'JS file/country_special_liturgies_v29.js'));
 fs.copyFileSync(path.join(root,'tools/build-special-liturgies.py'),path.join(fixture,'tools/build-special-liturgies.py'));
 fs.cpSync(path.join(root,'tools/special_liturgies'),path.join(fixture,'tools/special_liturgies'),{recursive:true});
 const backend=createSpecialEditorBackend({root:fixture});const original=backend.entries('KR').find(item=>item.id==='holy_thursday');const countryOriginal=fs.readFileSync(path.join(fixture,'tools/special_liturgies/korea.py'),'utf8');
 const candidate=structuredClone(original);candidate.entry.riteData.KR.washing_feet.lines.push({rubric:'검증용 지시문'});backend.save({country:'KR',...candidate});
 assert.equal(backend.entries('KR').find(item=>item.id==='holy_thursday').entry.riteData.KR.washing_feet.lines.at(-1).rubric,'검증용 지시문');assert.equal(fs.readFileSync(path.join(fixture,'tools/special_liturgies/korea.py'),'utf8'),countryOriginal);
 const compiledBefore=fs.readFileSync(path.join(fixture,'JS file/country_special_liturgies_v29.js'),'utf8');candidate.entry.easterOffset='bad';assert.throws(()=>backend.save({country:'KR',...candidate}));assert.equal(fs.readFileSync(path.join(fixture,'JS file/country_special_liturgies_v29.js'),'utf8'),compiledBefore);
 assert.throws(()=>backend.save({country:'../../x',...original}));assert.throws(()=>backend.save({country:'KR',...original,entry:{...original.entry,order:[{rite:'../x'}]}}));
 backend.save({country:'GB-ENG',kind:'vigils',id:'test_vigil',entry:{id:'test_vigil',monthDay:'03-18',names:{EN:'Test Vigil'},data:{}}});assert(backend.entries('GB-WLS').some(item=>item.id==='test_vigil'));
 const upload=backend.firebaseExport();assert.equal(upload.collectionName,'country_special_liturgies');assert(upload.items.some(item=>item.docId==='KR'));assert(upload.items.some(item=>item.docId==='GB-WLS'));assert(!upload.items.some(item=>item.docId==='US'));
 const server=createServer({specialRoot:fixture});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{const page=await browser.newPage();await page.goto('http://127.0.0.1:'+server.address().port+'/');assert(await page.locator('a[href="/special-liturgies"]').count());await page.locator('a[href="/special-liturgies"]').click();await page.selectOption('#country','KR');await page.waitForFunction(()=>document.querySelector('#entry').options.length>5);await page.selectOption('#entry',{label:'주님 만찬 성목요일'});await page.selectOption('#part','riteData:washing_feet');await page.locator('#rows textarea').first().fill('특수미사 편집 검증');await page.click('#save');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('저장 완료'));
 assert.equal(backend.entries('KR').find(item=>item.id==='holy_thursday').entry.riteData.KR.washing_feet.lines[0].rubric,'특수미사 편집 검증');
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(fixture,'editor-mobile.png'),fullPage:true});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 console.log(JSON.stringify({passed:true,countries:backend.state().countries.length,exportDocuments:upload.items.length,screenshot:path.join(fixture,'editor-mobile.png')},null,2));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
