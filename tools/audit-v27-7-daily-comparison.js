// Optional live-source check; no AI requests and no project writes.
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
const root=path.resolve(__dirname,'..');
(async()=>{
 const server=http.createServer((req,res)=>{
  const f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(!f.startsWith(root+path.sep))return res.writeHead(403).end();
  fs.readFile(f,(e,b)=>{if(e)return res.writeHead(404).end();res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':'text/html; charset=utf-8');res.end(b)});
 });
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage();
  await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
  await page.goto('http://127.0.0.1:'+server.address().port+'/V27.7.html',{waitUntil:'load'});
  const response=await fetch('https://missa.cbck.or.kr/DailyMissa/20260911',{signal:AbortSignal.timeout(30000)});
  if(!response.ok)throw Error(response.status);
  const result=await page.evaluate(async html=>{
   const date=new Date(2026,8,11,12);
   state.currentLoc='KR';state.selectedLocationCode='KR';state.targetLang='ZH';state.targetLocationCode='TW';
   state.liturgicalDateContext={date,localDate:date};state.liturgyInfo=buildGeneratedLiturgyInfo(date);state.liturgyInfo.localCalendar=null;
   const kr=strictParseDailyMass('KR',html,date),zh=await fetchParsedDailyMass('ZH',date,{locationCode:'TW',forceRemote:true});
   const merged={};mergeSourceData(merged,kr,'KR');mergeSourceData(merged,zh,'ZH');applyCachedVariantAlignments(merged,date);
   resetMassDataFrom(getStartupOrdinaryMassData());applyDailyReadingsToMassData(merged);render();
   return Object.fromEntries(['entrance','reading1','psalm','gospel_accl','gospel','communion'].map(id=>{
    const section=merged[id]||{},element=document.querySelector('section[data-part-id="'+id+'"]');
    return [id,{kr:section.cit_kr,zh:section.cit_zh,alignment:section.variantAlignment,
     options:[...(element?.querySelectorAll('select.select-inline option')||[])].map(n=>n.textContent),
     krText:kr.data?.[id]?.lines?.map(l=>l.text).join(' '),
     zhText:zh.data?.[id]?.lines?.map(l=>l.text).join(' '),
     rendered:element?.textContent}];
   }));
  },await response.text());
  console.log(JSON.stringify(result,null,2));
  for(const id of ['entrance','reading1','psalm','gospel_accl','gospel']) assert.equal(result[id].options.length,0,id+' has unnecessary source choices');
  assert.equal(result.communion.alignment.length,2,'Communion must retain two official options');
  assert(result.communion.alignment.every(group=>Number.isInteger(group.kr)&&Number.isInteger(group.zh)),'Communion translations not paired');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
