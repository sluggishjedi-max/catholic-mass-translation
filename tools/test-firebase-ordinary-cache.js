'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{
 const records=new Map(),reads={};let offline=false,revision='published edit';
 const entry=text=>({id:'1.4 kyrie',jurisdiction:'KR',type:'part',order:0,lines:[{text_kr:text}]});
 records.set('order_of_mass:KR:source-layout-v1',{savedAt:Date.now(),items:[entry('stale cached edit')]});records.set('prayer_data:KR',{savedAt:Date.now(),items:[{id:'cached-prayer',jurisdiction:'KR'}]});
 const request=result=>{const value={result};queueMicrotask(()=>value.onsuccess?.());return value;};
 const database={
  transaction(){
   return{objectStore(){
    return{get:key=>request(records.get(key)),put:(value,key)=>{records.set(key,value);return request(key);}};
   }};
  }
 };
 const db={collection(name){return{where(){return{async get(){reads[name]=(reads[name]||0)+1;if(offline)throw Error('offline');return{docs:(name==='order_of_mass'?[entry(revision)]:[]).map(data=>({data:()=>data}))};}};}};}};
 const sandbox={console:{warn(){}},setTimeout,clearTimeout,indexedDB:{open:()=>request(database)},CustomEvent:class{constructor(name,init){this.name=name;this.detail=init?.detail;}},dispatchEvent(){},firebase:{apps:[{}],initializeApp(){},firestore:()=>db}};sandbox.globalThis=sandbox;vm.createContext(sandbox);vm.runInContext(fs.readFileSync('JS file/firebase_data_loader.js','utf8'),sandbox);
 await sandbox.ordoFirebaseDataApi.ensure('mass',['KR']);assert.equal(reads.order_of_mass,1);assert.equal(sandbox.uploadedCountryMassData.KR.ordinary[0].lines[0].text_kr,'published edit','A fresh local cache hid an editor publication');
 revision='second published edit';await sandbox.ordoFirebaseDataApi.ensure('mass',['KR'],{force:true});assert.equal(reads.order_of_mass,2);assert.equal(sandbox.uploadedCountryMassData.KR.ordinary[0].lines[0].text_kr,revision);
 offline=true;await sandbox.ordoFirebaseDataApi.ensure('mass',['KR'],{force:true});assert.equal(sandbox.uploadedCountryMassData.KR.ordinary[0].lines[0].text_kr,revision,'The last published ordinary was unavailable offline');
 await sandbox.ordoFirebaseDataApi.ensure('prayers',['KR']);assert.equal(reads.prayer_data||0,0,'Auxiliary data lost its existing fast-cache behavior');
 console.log('Ordinary publication: reload revalidates a fresh cache, explicit refresh sees the next edit, offline fallback retains the last publication, and auxiliary caches stay fast.');
})().catch(error=>{console.error(error);process.exitCode=1});
