(function(global){
  'use strict';
  const endpoint=global.ORDO_DAILY_MASS_ENDPOINT||'https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassData';
  const pending=new Map();
  async function read(request,{force=false}={}){
    if(global.ordoServerCollector||global.ordoPrayerEditorPreview)return null;
    const query=new URLSearchParams(request),key=query.toString();
    if(!force&&pending.has(key))return pending.get(key);
    const operation=(async()=>{
      try{
        const response=await fetch(endpoint+'?'+query,{cache:force?'reload':'default',signal:AbortSignal.timeout(5000)});
        if(!response.ok)return null;
        const value=await response.json();
        if(!value.parsed?.data||typeof value.parsed.title!=='string')return null;
        return Object.assign({},value.parsed,{serverRecord:{key:value.key,version:value.version,kind:value.kind,lastCheckedAt:value.lastCheckedAt}});
      }catch{return null;}
    })().finally(()=>pending.delete(key));
    pending.set(key,operation);return operation;
  }
  global.ordoDailyServer=Object.freeze({read});
})(globalThis);
