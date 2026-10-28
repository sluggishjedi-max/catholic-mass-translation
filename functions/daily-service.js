'use strict';
const crypto=require('node:crypto');
const {createStore}=require('./daily-store');
const {resolveKtcg}=require('./daily-ktcg');
const {COUNTRIES,COLLECTION,JOBS,RUNS,countryCode,isoDate,sourceId,recordId,datesFrom,koreaToday,providers,PARSER_REVISION}=require('./daily-schema');
function requestIdentity(value){
  const country=countryCode(value.country),date=isoDate(value.date);
  const source=country==='VN'?(value.source||'hanoi'):'official';
  const profile=source==='ktcg'?(value.profile==='VIETNAM_NORTH'?'VIETNAM_NORTH':'VIETNAM_SOUTH'):'';
  const variant=String(value.variant||'day');
  const id=sourceId(country,source,profile);recordId(id,variant);
  return {country,date,source,profile,variant,sourceId:id};
}
function createDailyService({db,enqueue,logger=console,fetchImpl=fetch}){
  const store=createStore(db),metadataCache=new Map();
  async function metadata(country){
    const existing=metadataCache.get(country);if(existing&&Date.now()-existing.savedAt<600000)return existing.value;
    const codes=[...new Set([country,'KR',country==='GB-WLS'?'GB-ENG':country])];
    const snapshots=await Promise.all(codes.map(code=>db.collection('country_mass_metadata').where('jurisdiction','==',code).get()));
    const value=Object.fromEntries(snapshots.flatMap(snapshot=>snapshot.docs.map(doc=>{const data=doc.data();return [data.jurisdiction,data];})));
    metadataCache.set(country,{value,savedAt:Date.now()});return value;
  }
  async function queueOne(identity,runId,{onDemand=false}={}){
    const input=requestIdentity(identity),id=runId+'__'+input.country+'_'+input.date+'_'+input.sourceId;
    const reference=db.collection(JOBS).doc(id);
    const shouldEnqueue=await db.runTransaction(async tx=>{
      const snapshot=await tx.get(reference);
      if(snapshot.exists)return false;
      tx.create(reference,{...input,runId,status:'queued',createdAt:new Date().toISOString(),onDemand});return true;
    });
    if(shouldEnqueue){
      try{await enqueue({...input,jobId:id,runId});}
      catch(error){await reference.delete();throw error;}
    }
    return shouldEnqueue;
  }
  async function queueRange({start=koreaToday(),days=30,countries=Object.keys(COUNTRIES),runId='manual-'+crypto.randomUUID()}={}){
    countries=[...new Set(countries.map(countryCode))];
    const dates=datesFrom(isoDate(start),Number(days));
    const ref=db.collection(RUNS).doc(runId);
    const planned=dates.length*countries.reduce((total,country)=>total+providers(country).length,0);
    await ref.set({start,days:dates.length,countries,planned,status:'queuing',createdAt:new Date().toISOString(),parserRevision:PARSER_REVISION},{merge:true});
    let queued=0;
    // Interleave countries so one source host is not hammered with 30 dates at once.
    for(const date of dates)for(const country of countries)for(const provider of providers(country)){
      if(await queueOne({country,date,...provider},runId))queued++;
    }
    await ref.set({status:'queued',queued:planned,newlyQueued:queued,finishedQueuingAt:new Date().toISOString()},{merge:true});
    return {runId,queued,start,days:dates.length,countries};
  }
  async function collect(input){
    const request=requestIdentity(input),job=db.collection(JOBS).doc(input.jobId);
    const claimed=await db.runTransaction(async tx=>{
      const snapshot=await tx.get(job),previous=snapshot.exists?snapshot.data():{};
      if(previous.status==='completed')return false;
      if(previous.leaseUntil>Date.now())throw Error('collection-already-running');
      tx.set(job,{status:'running',leaseUntil:Date.now()+500000,startedAt:new Date().toISOString()},{merge:true});return true;
    });
    if(!claimed)return {duplicate:true};
    let runtime;
    const results=[];
    async function finish(status,extra={}){
      const runRef=db.collection(RUNS).doc(input.runId);
      await db.runTransaction(async tx=>{
        const [jobSnapshot,runSnapshot]=await Promise.all([tx.get(job),tx.get(runRef)]);
        const previous=jobSnapshot.exists?jobSnapshot.data():{},failed=status!=='completed';
        tx.set(job,{status,leaseUntil:0,results,finishedAt:new Date().toISOString(),counted:true,failedCounted:failed,...extra},{merge:true});
        if(runSnapshot.exists){
          const run=runSnapshot.data(),done=Number(run.done||0)+(previous.counted?0:1),failures=Number(run.failed||0)+(failed?1:0)-(previous.counted&&previous.failedCounted?1:0);
          tx.set(runRef,{done,failed:failures,status:done>=run.planned?(failures?'completed-with-errors':'completed'):'running',updatedAt:new Date().toISOString()},{merge:true});
        }
      });
    }
    try{
      const {createRuntime}=require('./daily-runtime');
      runtime=createRuntime(request,{metadata:await metadata(request.country),fetchImpl,ktcgProvider:(date,profile,instance)=>resolveKtcg(date,profile,instance)});
      const variants=runtime.variants();
      for(const variant of variants){
        const scoped={...request,variant};
        try{
          const result=await runtime.collect(variant);
          result.comparison=runtime.ktcgComparison||null;
          const saved=await store.appendCollected(scoped,result);
          results.push({variant,status:'ready',...saved});
        }catch(error){
          await store.status(scoped,error);results.push({variant,status:'unavailable',error:String(error.message).slice(0,400)});
          logger.warn('Daily Mass source unavailable',{country:request.country,date:request.date,source:request.sourceId,variant,error:error.message});
        }
      }
      await finish(results.every(result=>result.status==='ready')?'completed':'completed-with-errors');
      return {country:request.country,date:request.date,source:request.sourceId,results};
    }catch(error){await finish('failed',{lastError:String(error.message).slice(0,400)});throw error;}
    finally{runtime?.close();}
  }
  async function read(value,{queueMissing=false}={}){
    const request=requestIdentity(value),record=await store.get(request);
    if(!record?.parsed&&queueMissing){
      const date=new Date(request.date+'T12:00:00Z'),today=new Date(koreaToday()+'T12:00:00Z');
      const offset=(date-today)/86400000;
      if(offset>=-7&&offset<30)await queueOne(request,'demand-'+koreaToday(),{onDemand:true});
    }
    return record;
  }
  return {store,queueOne,queueRange,collect,read,requestIdentity,
    async list({country,start,days=30}){
      country=countryCode(country);
      const dates=datesFrom(start,days);
      const snapshots=await db.getAll(...dates.map(date=>db.collection(COLLECTION).doc(require('./daily-schema').dayId(country,date))));
      return snapshots.map((snapshot,index)=>({key:snapshot.id,date:dates[index],...(snapshot.exists?snapshot.data():{country,status:'not-collected'})}));
    },
    async runs(){const data=await db.collection(RUNS).orderBy('createdAt','desc').limit(10).get();return data.docs.map(doc=>({id:doc.id,...doc.data()}));}
  };
}
module.exports={createDailyService,requestIdentity};
