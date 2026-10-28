'use strict';
const zlib=require('node:zlib');
const {COLLECTION,COUNTRIES,dayId,recordId,cleanParsed,digest,PARSER_REVISION}=require('./daily-schema');
const versionName=number=>'v'+String(number).padStart(6,'0');
function recordRef(db,request){return db.collection(COLLECTION).doc(dayId(request.country,request.date)).collection('records').doc(recordId(request.sourceId,request.variant));}
function conflict(latest){const error=Error('newer-version-available');error.status=409;error.latestVersion=latest;return error;}
function createStore(db){
  const provenanceCache=new Map();
  async function append(request,result,{kind,expectedLatestVersion,baseVersion,authorUid}={}){
    const parsed=cleanParsed(result.parsed),ref=recordRef(db,request),now=new Date().toISOString();
    const fingerprint=result.fingerprint||digest(parsed);
    const raw=result.snapshots?.length?zlib.gzipSync(Buffer.from(JSON.stringify(result.snapshots))).toString('base64'):'';
    const rawChunks=raw.match(/.{1,400000}/g)||[];
    const outcome=await db.runTransaction(async tx=>{
      const snapshot=await tx.get(ref),previous=snapshot.exists?snapshot.data():{};
      const latest=Number(previous.latestVersion||0);
      if(kind==='edited'&&latest!==Number(expectedLatestVersion))throw conflict(latest);
      let originCollectedVersion=0;
      if(kind==='edited'&&latest){
        if(!Number.isInteger(baseVersion)||baseVersion<1||baseVersion>latest)throw Error('invalid-base-version');
        const base=await tx.get(ref.collection('versions').doc(versionName(baseVersion)));
        if(!base.exists)throw Error('invalid-base-version');
        const data=base.data();originCollectedVersion=data.originCollectedVersion||(data.kind==='collected'?data.number:0);
      }
      if(kind==='collected'&&previous.lastCollectedHash===fingerprint){
        tx.set(ref,{lastCheckedAt:now,collectionStatus:'unchanged',lastError:'',comparison:result.comparison||null},{merge:true});
        return {changed:false,latestVersion:latest,publishedVersion:previous.publishedVersion};
      }
      const number=latest+1,protectedEdit=kind==='collected'&&previous.publishedKind==='edited';
      const version={number,kind,createdAt:now,parentVersion:kind==='edited'?Number(baseVersion||latest):Number(previous.latestCollectedVersion||0),originCollectedVersion:kind==='collected'?number:originCollectedVersion,parsed,sourceHash:fingerprint,parserRevision:result.parserRevision||PARSER_REVISION,comparison:result.comparison||null,validation:result.validation||null};
      if(authorUid)version.authorUid=authorUid;
      tx.create(ref.collection('versions').doc(versionName(number)),version);
      rawChunks.forEach((data,index)=>tx.create(ref.collection('versions').doc(versionName(number)).collection('raw').doc(String(index).padStart(4,'0')),{encoding:'gzip-base64',index,count:rawChunks.length,data}));
      const update={country:request.country,countryName:COUNTRIES[request.country][0],date:request.date,language:COUNTRIES[request.country][1],sourceId:request.sourceId,variant:request.variant,latestVersion:number,latestKind:kind,lastCheckedAt:now,updatedAt:now,collectionStatus:'ready',lastError:''};
      if(kind==='collected'){update.latestCollectedVersion=number;update.lastCollectedHash=fingerprint;update.comparison=result.comparison||null;}
      if(!protectedEdit)Object.assign(update,{publishedVersion:number,publishedKind:kind,parsed,publishedAt:now,reviewNeeded:false});
      else update.reviewNeeded=true;
      tx.set(ref,update,{merge:true});
      tx.set(ref.parent.parent,{country:request.country,countryName:COUNTRIES[request.country][0],date:request.date,updatedAt:now,records:{[ref.id]:{sourceId:request.sourceId,variant:request.variant,latestVersion:number,publishedVersion:protectedEdit?previous.publishedVersion:number,title:protectedEdit?previous.parsed?.title||'':parsed.title,reviewNeeded:protectedEdit}}},{merge:true});
      return {changed:true,latestVersion:number,publishedVersion:protectedEdit?previous.publishedVersion:number,protectedEdit};
    });
    return outcome;
  }
  return {
    appendCollected:(request,result)=>append(request,result,{kind:'collected'}),
    appendEdited:(request,parsed,options)=>append(request,{parsed,fingerprint:digest(parsed),validation:{edited:true}}, {...options,kind:'edited'}),
    async get(request){const snapshot=await recordRef(db,request).get();return snapshot.exists?snapshot.data():null;},
    async versions(request,{before}={}){
      let query=recordRef(db,request).collection('versions').orderBy('number','desc');
      if(Number.isInteger(before)&&before>0)query=query.where('number','<',before);
      if(typeof query.select==='function')query=query.select('number','kind','createdAt','parentVersion','sourceHash','parserRevision','comparison','validation');
      const list=await query.limit(100).get();return list.docs.map(doc=>{const {parsed,...metadata}=doc.data();return metadata;});
    },
    async version(request,number){if(!Number.isInteger(number)||number<1)throw Error('invalid-version');const snapshot=await recordRef(db,request).collection('versions').doc(versionName(number)).get();return snapshot.exists?snapshot.data():null;},
    async provenance(request,version){
      const cacheKey=recordRef(db,request).path+'/'+version.number;
      if(provenanceCache.has(cacheKey))return provenanceCache.get(cacheKey);
      const raw=await this.raw(request,version.number),urls=new Map();
      const add=(value,kind)=>{try{const url=new URL(value);if(['https:','http:'].includes(url.protocol)&&!url.username&&!url.password&&!urls.has(url.href))urls.set(url.href,{url:url.href,kind});}catch{}};
      add(version.parsed?.sourceUrl,'source');add(version.parsed?.prayerSourceUrl,'prayer');
      for(const item of raw?.snapshots||[])if(item.status>=200&&item.status<300&&!item.verification)add(item.url,'response');
      const result={country:request.country,sourceId:request.sourceId,originCollectedVersion:raw?.version||version.originCollectedVersion||0,urls:[...urls.values()],compiled:(raw?.snapshots||[]).some(item=>item.url?.startsWith('app-bundle://'))};
      if(provenanceCache.size>=200)provenanceCache.delete(provenanceCache.keys().next().value);
      provenanceCache.set(cacheKey,result);return result;
    },
    async raw(request,number){
      const visited=new Set(),ref=recordRef(db,request);
      while(Number.isInteger(number)&&number>0&&!visited.has(number)){
        visited.add(number);
        const version=await ref.collection('versions').doc(versionName(number)).get();if(!version.exists)return null;
        const chunks=await ref.collection('versions').doc(versionName(number)).collection('raw').orderBy('index','asc').limit(100).get();
        if(chunks.docs.length){const data=chunks.docs.map(doc=>doc.data()).sort((a,b)=>a.index-b.index);if(data.length!==data[0].count)throw Error('incomplete-original-response');return {version:number,snapshots:JSON.parse(zlib.gunzipSync(Buffer.from(data.map(chunk=>chunk.data).join(''),'base64')).toString('utf8'))};}
        const data=version.data();if(data.kind==='collected')return {version:number,snapshots:[]};
        number=data.originCollectedVersion||data.parentVersion;
      }
      return {snapshots:[]};
    },
    async status(request,error){
      const ref=recordRef(db,request),now=new Date().toISOString();
      await ref.set({country:request.country,date:request.date,sourceId:request.sourceId,variant:request.variant,lastCheckedAt:now,collectionStatus:'unavailable',lastError:String(error.message||error).slice(0,400)},{merge:true});
      await ref.parent.parent.set({country:request.country,countryName:COUNTRIES[request.country][0],date:request.date,updatedAt:now,collectionStatus:'has-unavailable-sources'},{merge:true});
    }
  };
}
module.exports={createStore,recordRef,versionName,conflict};
