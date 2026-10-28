'use strict';
const {isReviewAdministrator}=require('./admin-review-auth');
const {COUNTRIES,COLLECTION,dayId,datesFrom,koreaToday}=require('./daily-schema');
function createDailyHttpHandler({getService,verifyIdToken,configuredEmails,allowedOrigin,rateLimit,admin=false}){
  return async(req,res)=>{
    const origin=req.get('origin')||'',permitted=allowedOrigin(origin);
    res.set('Vary','Origin');res.set('Access-Control-Allow-Methods',admin?'GET, POST, OPTIONS':'GET, OPTIONS');
    res.set('Access-Control-Allow-Headers','Authorization, Content-Type');
    res.set('Cache-Control',admin?'private, no-store':'public, max-age=30, s-maxage=30');
    if(permitted)res.set('Access-Control-Allow-Origin',permitted);
    if(origin&&!permitted)return res.status(403).json({error:'origin-not-allowed'});
    if(req.method==='OPTIONS')return res.status(204).send('');
    if(!['GET',...(admin?['POST']:[])].includes(req.method))return res.status(405).json({error:'method-not-allowed'});
    if(!rateLimit(req))return res.status(429).json({error:'too-many-requests'});
    let identity;
    if(admin){
      const match=/^Bearer ([^\s]+)$/.exec(req.get('authorization')||'');
      if(!match||match[1].length>8192)return res.status(401).json({error:'sign-in-required'});
      try{identity=await verifyIdToken(match[1],true);}catch{return res.status(401).json({error:'invalid-session'});}
      if(!isReviewAdministrator(identity,configuredEmails()))return res.status(403).json({error:'administrator-required'});
    }
    try{
      const service=getService(),value=req.method==='GET'?req.query:req.body;
      if(!value||typeof value!=='object')return res.status(400).json({error:'invalid-request'});
      if(!admin){
        const request=service.requestIdentity(value),record=await service.read(request,{queueMissing:true});
        if(!record?.parsed)return res.status(404).json({error:'not-collected',pending:true});
        return res.status(200).json({key:dayId(request.country,request.date),version:record.publishedVersion,latestVersion:record.latestVersion,kind:record.publishedKind,parsed:record.parsed,lastCheckedAt:record.lastCheckedAt,collectionStatus:record.collectionStatus});
      }
      const action=value.action||'record';
      if(req.method==='GET'){
        if(action==='catalog')return res.status(200).json({countries:COUNTRIES,schedule:{days:[10,20,30],hour:4,timeZone:'Asia/Seoul',horizonDays:30},today:koreaToday()});
        if(action==='runs')return res.status(200).json({runs:await service.runs()});
        if(action==='list')return res.status(200).json({days:await service.list({country:value.country,start:value.start||koreaToday(),days:Number(value.days||30)})});
        const request=service.requestIdentity(value);
        if(action==='versions'){const versions=await service.store.versions(request,{before:Number(value.before)});return res.status(200).json({versions,hasMore:versions.length===100});}
        if(action==='head'){const record=await service.read(request);return res.status(200).json({latestVersion:record?.latestVersion||0,publishedVersion:record?.publishedVersion||0});}
        if(action==='raw'){const raw=await service.store.raw(request,Number(value.version));return res.status(raw?200:404).json(raw||{error:'version-not-found'});}
        if(action==='version'){
          const version=await service.store.version(request,Number(value.version));
          return res.status(version?200:404).json(version||{error:'version-not-found'});
        }
        const record=await service.read(request);
        return res.status(200).json({record,versions:record?await service.store.versions(request):[]});
      }
      if(action==='collect'){
        const result=await service.queueRange({start:value.start||value.date||koreaToday(),days:Number(value.days||1),countries:value.countries||[value.country]});
        return res.status(202).json(result);
      }
      const request=service.requestIdentity(value);
      if(action==='save')return res.status(200).json(await service.store.appendEdited(request,value.parsed,{expectedLatestVersion:Number(value.expectedLatestVersion),baseVersion:Number(value.baseVersion),authorUid:identity.uid}));
      if(action==='publish'){
        const selected=await service.store.version(request,Number(value.version));
        if(!selected)return res.status(404).json({error:'version-not-found'});
        return res.status(200).json(await service.store.appendEdited(request,selected.parsed,{expectedLatestVersion:Number(value.expectedLatestVersion),baseVersion:selected.number,authorUid:identity.uid}));
      }
      return res.status(400).json({error:'unknown-action'});
    }catch(error){
      const status=error.status||(/^(?:invalid-|unsupported-|daily-record-too-large)/.test(error.message)?400:500);
      return res.status(status).json({error:status===500?'daily-mass-service-error':error.message,...(error.latestVersion?{latestVersion:error.latestVersion}:{})});
    }
  };
}
module.exports={createDailyHttpHandler};
