(function(global){
  'use strict';
  const endpoint=global.ORDO_DAILY_MASS_ENDPOINT||'https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassData';
  const pending=new Map();
  async function administratorRead(request){
    const user=global.firebase?.auth().currentUser;if(!user)throw Error('administrator-session-required');
    const adminEndpoint=global.ORDO_DAILY_ADMIN_ENDPOINT||'https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassAdmin';
    async function api(value,method='GET'){
      const response=await fetch(adminEndpoint+(method==='GET'?'?'+new URLSearchParams(value):''),{method,headers:{Authorization:'Bearer '+await user.getIdToken(),...(method==='POST'?{'Content-Type':'application/json'}:{})},body:method==='POST'?JSON.stringify(value):undefined,cache:'no-store',signal:AbortSignal.timeout(30000)});
      if(!response.ok)throw Error('administrator-collection-request-failed');return response.json();
    }
    const published=record=>record?.parsed&&record.publishedVersion?{key:record.countryName+'_'+record.date,version:record.publishedVersion,kind:record.publishedKind,parsed:record.parsed,lastCheckedAt:record.lastCheckedAt}:null;
    const existing=published((await api({...request,action:'record'})).record);if(existing)return existing;
    const queued=await api({action:'collect',country:request.country,start:request.date,days:1,priority:true},'POST');
    while(true){
      const job=await api({...request,action:'collection',runId:queued.runId});
      if(['completed','completed-with-errors','failed'].includes(job.status)){
        const result=published((await api({...request,action:'record'})).record);
        if(!result)throw Error('요청한 날짜의 서버 수집에 실패했습니다. 매일미사 편집기에서 수집 사유를 확인해 주세요.');
        return result;
      }
      if(job.status==='not-found')throw Error('administrator-collection-not-found');
      await new Promise(resolve=>setTimeout(resolve,5000));
    }
  }
  async function read(request,{force=false}={}){
    if(global.ordoServerCollector||global.ordoPrayerEditorPreview)return null;
    const query=new URLSearchParams(request),key=query.toString();
    if(!force&&pending.has(key))return pending.get(key);
    const operation=(async()=>{
      try{
        let value;
        if(global.ordoAdminReview?.isVerified())value=await administratorRead(request);
        else{
          const response=await fetch(endpoint+'?'+query,{cache:force?'reload':'default',signal:AbortSignal.timeout(5000)});
          if(!response.ok)return null;value=await response.json();
        }
        if(!value)return null;
        if(!value.parsed?.data||typeof value.parsed.title!=='string')return null;
        return Object.assign({},value.parsed,{serverRecord:{key:value.key,version:value.version,kind:value.kind,lastCheckedAt:value.lastCheckedAt}});
      }catch(error){if(global.ordoAdminReview?.isVerified())throw error;return null;}
    })().finally(()=>pending.delete(key));
    pending.set(key,operation);return operation;
  }
  global.ordoDailyServer=Object.freeze({read});
})(globalThis);
