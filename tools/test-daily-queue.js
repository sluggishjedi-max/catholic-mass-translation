const assert=require('node:assert/strict');
const {memoryFirestore}=require('./test-daily-service');
const {createDailyService}=require('../functions/daily-service');
const {dailyFunctions}=require('../functions/daily-functions');
(async()=>{
 const db=memoryFirestore(),tasks=[];
 const service=createDailyService({db,enqueue:async task=>tasks.push(task)});
 const first=await service.queueRange({start:'2026-11-10',days:30,runId:'schedule-2026-11-10'});
 assert.equal(first.queued,600);assert.equal(tasks.length,600);
 assert.equal(tasks.filter(task=>task.country==='VN'&&task.source==='hanoi').length,30);
 assert.equal(tasks.filter(task=>task.country==='VN'&&task.source==='ktcg'&&task.profile==='VIETNAM_SOUTH').length,30);
 assert.equal(tasks.filter(task=>task.country==='VN'&&task.source==='ktcg'&&task.profile==='VIETNAM_NORTH').length,30);
 assert.equal(tasks.at(-1).date,'2026-12-09');assert.equal(new Set(tasks.map(task=>task.jobId)).size,600);
 const again=await service.queueRange({start:'2026-11-10',days:30,runId:'schedule-2026-11-10'});assert.equal(again.queued,0);assert.equal(tasks.length,600);
 const definitions=dailyFunctions({adminSecret:{value:()=>''},allowedOrigin:()=>'',rateLimit:()=>true});
 const schedule=definitions.scheduleDailyMassCollection.__endpoint.scheduleTrigger;
 assert.equal(schedule.schedule,'0 4 10,20,30 * *');assert.equal(schedule.timeZone,'Asia/Seoul');
 console.log('Daily Mass queue: 600 source tasks, both Vietnamese providers/profiles, 30-day boundary, idempotent scheduled run and monthly Korean-time schedule passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
