const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('JS file/daily_server_loader.js','utf8');
(async()=>{
 const calls=[];let ready=false,polls=0;
 const record=()=>({countryName:'대한민국',date:'2026-10-28',publishedVersion:1,publishedKind:'collected',parsed:{title:'수집한 전례명',data:{reading1:{text:'서버 수집 본문'}}}});
 const context={URLSearchParams,AbortSignal,setTimeout:callback=>setTimeout(callback,0),ordoAdminReview:{isVerified:()=>true},firebase:{auth:()=>({currentUser:{getIdToken:async()=>'fixture-admin-token'}})},fetch:async(url,options)=>{
  assert(url.includes('dailyMassAdmin'),'Administrator fell back before server collection');assert.equal(options.headers.Authorization,'Bearer fixture-admin-token');
  const data=options.method==='POST'?JSON.parse(options.body):Object.fromEntries(new URL(url).searchParams);calls.push(data);
  let result;if(data.action==='record')result={record:ready?record():null};
  else if(data.action==='collect'){assert.equal(data.priority,true);result={runId:'missing-date',queued:1};}
  else if(data.action==='collection'){polls++;ready=polls>1;result={status:ready?'completed':'queued'};}
  else throw Error('Unexpected action');return {ok:true,json:async()=>result};
 }};
 vm.runInNewContext(source,context);
 const request={country:'KR',date:'2026-10-28',source:'official',variant:'day'};
 const [first,second]=await Promise.all([context.ordoDailyServer.read(request),context.ordoDailyServer.read(request)]);
 assert.equal(first.serverRecord.version,1);assert.equal(second.title,'수집한 전례명');assert.equal(polls,2);assert.equal(calls.filter(c=>c.action==='collect').length,1);
 const before=calls.length;await context.ordoDailyServer.read(request);assert.equal(calls.length,before+1,'Existing record was unnecessarily recollected');
 context.ordoAdminReview.isVerified=()=>false;context.fetch=async()=>({ok:false,status:404});assert.equal(await context.ordoDailyServer.read(request),null);
 // A cold function response after the former five-second deadline must still
 // be used, including when two consumers share the same pending request.
 let slowRequests=0;
 context.fetch=async(url,options)=>{
  slowRequests++;
  await new Promise((resolve,reject)=>{
   const onAbort=()=>{clearTimeout(timer);reject(options.signal.reason);};
   const timer=setTimeout(()=>{options.signal.removeEventListener('abort',onAbort);resolve();},5500);
   options.signal.addEventListener('abort',onAbort,{once:true});
  });
  return {ok:true,json:async()=>({key:'TW_2026-11-03',version:1,parsed:{title:'Delayed server Mass',data:{reading1:{text:'The approved server passage'}}}})};
 };
 const [slowFirst,slowSecond]=await Promise.all([context.ordoDailyServer.read({...request,country:'TW'}),context.ordoDailyServer.read({...request,country:'TW'})]);
 assert.equal(slowFirst?.title,'Delayed server Mass','A response after five seconds was discarded');
 assert.equal(slowSecond?.title,'Delayed server Mass');assert.equal(slowRequests,1);
 console.log('Delayed server response: a 5.5-second request survives the former deadline and is shared by both consumers.');
 console.log('Daily Mass loader: administrator missing-date collection waits for completion, coalesces requests, uses the saved server version, and preserves guest fallback.');
})().catch(e=>{console.error(e);process.exitCode=1;});
