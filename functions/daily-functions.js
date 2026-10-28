'use strict';
const {onRequest}=require('firebase-functions/v2/https');
const {onSchedule}=require('firebase-functions/v2/scheduler');
const {onTaskDispatched}=require('firebase-functions/v2/tasks');
const {getApps,initializeApp}=require('firebase-admin/app');
const {getFirestore}=require('firebase-admin/firestore');
const {getAuth}=require('firebase-admin/auth');
const {getFunctions}=require('firebase-admin/functions');
const logger=require('firebase-functions/logger');
const {createDailyService}=require('./daily-service');
const {createDailyHttpHandler}=require('./daily-http');
const {koreaToday}=require('./daily-schema');
const REGION='asia-northeast3';
let service;
function getService(){
  if(!getApps().length)initializeApp();
  if(!service)service=createDailyService({db:getFirestore(),logger,enqueue:input=>getFunctions().taskQueue('locations/'+REGION+'/functions/'+(input.onDemand?'collectDailyMassOnDemandTask':'collectDailyMassTask')).enqueue(input,{dispatchDeadlineSeconds:540})});
  return service;
}
function dailyFunctions({adminSecret,allowedOrigin,rateLimit}){
  const common={getService,allowedOrigin,rateLimit,verifyIdToken:(token,revoked)=>{if(!getApps().length)initializeApp();return getAuth().verifyIdToken(token,revoked);},configuredEmails:()=>adminSecret.value()};
  return {
    dailyMassData:onRequest({region:REGION,timeoutSeconds:60,memory:'256MiB',maxInstances:5},createDailyHttpHandler(common)),
    dailyMassAdmin:onRequest({region:REGION,timeoutSeconds:540,memory:'512MiB',maxInstances:2,secrets:[adminSecret]},createDailyHttpHandler({...common,admin:true})),
    collectDailyMassTask:onTaskDispatched({region:REGION,timeoutSeconds:540,memory:'1GiB',cpu:1,concurrency:1,maxInstances:2,retryConfig:{maxAttempts:2,minBackoffSeconds:90,maxBackoffSeconds:600},rateLimits:{maxConcurrentDispatches:2,maxDispatchesPerSecond:1}},request=>getService().collect(request.data)),
    collectDailyMassOnDemandTask:onTaskDispatched({region:REGION,timeoutSeconds:540,memory:'1GiB',cpu:1,concurrency:1,maxInstances:1,retryConfig:{maxAttempts:2,minBackoffSeconds:90,maxBackoffSeconds:600},rateLimits:{maxConcurrentDispatches:1,maxDispatchesPerSecond:1}},request=>getService().collect(request.data)),
    scheduleDailyMassCollection:onSchedule({region:REGION,schedule:'0 4 10,20,30 * *',timeZone:'Asia/Seoul',timeoutSeconds:540,memory:'512MiB',retryCount:2},async event=>{
      const start=koreaToday(new Date(event.scheduleTime||Date.now()));
      const result=await getService().queueRange({start,days:30,runId:'schedule-'+start});
      logger.info('Daily Mass 30-day collection queued',result);
    })
  };
}
module.exports={dailyFunctions,getService,REGION};
