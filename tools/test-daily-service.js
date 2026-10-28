const assert=require('node:assert/strict');
const {createStore}=require('../functions/daily-store');
const {createDailyHttpHandler}=require('../functions/daily-http');
const {dayId,datesFrom}=require('../functions/daily-schema');
function memoryFirestore(){
  const data=new Map();
  const snapshot=ref=>({id:ref.id,ref,exists:data.has(ref.path),data:()=>data.has(ref.path)?structuredClone(data.get(ref.path)):undefined});
  function reference(path){return {path,id:path.split('/').at(-1),get parent(){return collection(path.split('/').slice(0,-1).join('/'));},collection:name=>collection(path+'/'+name),get:async()=>snapshot(reference(path)),set:async(value,options)=>{const old=data.get(path)||{};data.set(path,options?.merge?merge(old,value):structuredClone(value));},delete:async()=>data.delete(path)};}
  function merge(a,b){const result=structuredClone(a);for(const [key,value]of Object.entries(b))result[key]=value&&typeof value==='object'&&!Array.isArray(value)?merge(result[key]||{},value):structuredClone(value);return result;}
  function collection(path){return {path,get parent(){return reference(path.split('/').slice(0,-1).join('/'));},doc:id=>reference(path+'/'+id),orderBy(field,direction){return {limit(){return {async get(){return {docs:[...data.keys()].filter(key=>key.startsWith(path+'/')&&!key.slice(path.length+1).includes('/')).map(reference).map(snapshot).sort((a,b)=>(a.data()[field]>b.data()[field]?1:-1)*(direction==='desc'?-1:1))};}};}};}};}
  return {data,collection,getAll:async(...refs)=>refs.map(snapshot),async runTransaction(action){const writes=[];const result=await action({get:async ref=>snapshot(ref),create(ref,value){writes.push(['create',ref,value]);},set(ref,value,options){writes.push(['set',ref,value,options]);}});for(const [kind,ref]of writes)if(kind==='create')assert(!data.has(ref.path),'Immutable version was overwritten');for(const [kind,ref,value,options]of writes){if(kind==='create')data.set(ref.path,structuredClone(value));else await ref.set(value,options);}return result;}};
}
const request={country:'VN',date:'2026-11-01',sourceId:'hanoi',source:'hanoi',variant:'day'};
const parsed=text=>({title:'Synthetic Mass',color:'#fff',data:{reading1:{text},gospel:{text:'Synthetic Gospel'}}});
async function main(){
  assert.equal(dayId('VN','2026-11-01'),'베트남_2026-11-01');assert.equal(datesFrom('2026-11-20').at(-1),'2026-12-19');
  const db=memoryFirestore(),store=createStore(db);
  let result=await store.appendCollected(request,{parsed:parsed('Original one'),fingerprint:'source-one',snapshots:[{url:'https://example.test',status:200,body:'Original one'},{url:'https://verification.test',status:200,verification:true,body:'Comparison sample'},{url:'javascript:alert(1)',status:200,body:''},{url:'https://failed.test',status:404,body:''}]});assert.equal(result.latestVersion,1);
  result=await store.appendEdited(request,parsed('Edited two'),{baseVersion:1,expectedLatestVersion:1,authorUid:'administrator'});assert.equal(result.latestVersion,2);
  result=await store.appendCollected(request,{parsed:parsed('Original one'),fingerprint:'source-one'});assert.equal(result.changed,false);assert.equal(result.latestVersion,2);
  result=await store.appendCollected(request,{parsed:parsed('Updated original three'),fingerprint:'source-three'});assert.equal(result.latestVersion,3);assert.equal(result.publishedVersion,2);assert.equal(result.protectedEdit,true);
  assert.equal((await store.get(request)).parsed.data.reading1.text,'Edited two');
  assert.equal((await store.version(request,1)).parsed.data.reading1.text,'Original one');assert.equal((await store.version(request,2)).parsed.data.reading1.text,'Edited two');assert.equal((await store.version(request,3)).kind,'collected');
  await assert.rejects(()=>store.appendEdited(request,parsed('Stale overwrite'),{baseVersion:2,expectedLatestVersion:2}),error=>error.status===409&&error.latestVersion===3);
  result=await store.appendEdited(request,parsed('Approved four'),{baseVersion:2,expectedLatestVersion:3,authorUid:'administrator'});assert.equal(result.latestVersion,4);assert.equal(result.publishedVersion,4);
  assert.deepEqual((await store.versions(request)).map(version=>[version.number,version.kind]),[[4,'edited'],[3,'collected'],[2,'edited'],[1,'collected']]);
  assert([...db.data.keys()].some(path=>path.includes('/v000001/raw/')),'Original response was not retained');
  assert.equal((await store.raw(request,2)).snapshots[0].body,'Original one');
  const unchangedVersion=JSON.stringify(await store.version(request,2));
  const provenance=await store.provenance(request,await store.version(request,2));assert.equal(provenance.originCollectedVersion,1);assert.equal(provenance.sourceId,'hanoi');assert.deepEqual(provenance.urls,[{url:'https://example.test/',kind:'response'}]);assert.equal(JSON.stringify(await store.version(request,2)),unchangedVersion,'Provenance lookup modified an immutable edited version');
  const handler=createDailyHttpHandler({admin:true,getService:()=>({store,requestIdentity:value=>value,read:()=>store.get(request)}),configuredEmails:()=>'admin@example.test',allowedOrigin:()=>'',rateLimit:()=>true,verifyIdToken:async token=>({uid:'admin',email:token==='good'?'admin@example.test':'other@example.test',email_verified:true,firebase:{sign_in_provider:'google.com'}})});
  async function call(token,action='record',extra={}){const response={headers:{},set(key,value){this.headers[key]=value;return this;},status(code){this.code=code;return this;},json(body){this.body=body;return this;}};await handler({method:'GET',query:{...request,action,...extra},get:name=>name==='authorization'&&token?'Bearer '+token:''},response);return response;}
  assert.equal((await call()).code,401);assert.equal((await call('wrong')).code,403);assert.equal((await call('good')).body.record.publishedVersion,4);
  const versionResponse=await call('good','version',{version:2});assert.equal(versionResponse.code,200);assert.deepEqual(versionResponse.body.provenance.urls,provenance.urls);assert(!versionResponse.body.provenance.urls.some(item=>Object.hasOwn(item,'body')),'Raw page bodies were downloaded for source labels');
  const partialRequest={...request,country:'JP',sourceId:'official',source:'official'};
  await store.registerVariants(partialRequest,[{id:'day',label:'당일 미사'},{id:'vigil',label:'전야 미사'}]);
  const partial=await store.appendCollected(partialRequest,{parsed:parsed('Partial original'),fingerprint:'partial-one',validation:{complete:false,missing:['psalm']}});
  assert.equal(partial.publishedVersion,0);assert.equal((await store.get(partialRequest)).collectionStatus,'partial');assert(!(await store.get(partialRequest)).parsed,'Incomplete readings were automatically published');
  assert.equal((await store.version(partialRequest,1)).parsed.data.reading1.text,'Partial original');
  await store.appendCollected(partialRequest,{parsed:parsed('Complete original'),fingerprint:'complete-two',validation:{complete:true,missing:[]}});
  await store.appendCollected(partialRequest,{parsed:parsed('New partial'),fingerprint:'partial-three',validation:{complete:false,missing:['psalm']}});
  assert.equal((await store.get(partialRequest)).publishedVersion,2);assert.equal((await store.get(partialRequest)).parsed.data.reading1.text,'Complete original');
  const day=db.data.get('daily_mass/'+dayId('JP',request.date));assert.equal(day.availableVariants.official.length,2);assert.equal(day.records.official__day.latestVersion,3);
  console.log('Daily Mass: immutable v1/v2/v3/v4 history, unchanged-source deduplication, manual-edit preservation, optimistic conflict and administrator access passed.');
}
if(require.main===module)main().catch(error=>{console.error(error);process.exitCode=1;});
module.exports={memoryFirestore};
