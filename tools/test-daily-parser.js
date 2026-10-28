const assert=require('node:assert/strict');
const {createRuntime}=require('../functions/daily-runtime');
const runtime=createRuntime({country:'DE',date:'2026-10-30',source:'official'});
try{
 runtime.window.__source=`<html><body><h1>Erzabtei navigation</h1><div id="schott"><h1>FREITAG</h1><h2>TAGESgebet</h2><p>Gebet für diesen Tag.</p>
 <h4>Jahr I</h4><h2>ERSTE Lesung<span class="lb_right">Röm 9, 1–5</span></h2><p>Lesung aus dem Brief an die Römer.</p><p>Nur im ungeraden Jahr zu verwenden.</p><h2>ANTWORTPSALM<span class="lb_right">Ps 147, 12–13</span></h2><p>Kv Lobt den Herrn. – Kv</p>
 <h4>Jahr II</h4><h2>ERSTE Lesung<span class="lb_right">Phil 1, 1–11</span></h2><p>Lesung aus dem Brief an die Philipper.</p><p>Dies ist der Lesungstext für das gerade Jahr.</p><h2>ANTWORTPSALM<span class="lb_right">Ps 111 (110), 1–2.3–4</span></h2><p>Kv Groß sind die Werke des Herrn. – Kv</p><p>Ich danke dem Herrn von ganzem Herzen.</p>
 <h4>Jahr I und II</h4><h2>RUF VOR DEM EVANGELIUM<span class="lb_right">Vers: Joh 10, 27</span></h2><p>Halleluja. Halleluja.</p><p>Meine Schafe hören auf meine Stimme.</p><h2>Evangelium<span class="lb_right">Lk 14, 1–6</span></h2><p>Aus dem heiligen Evangelium nach Lukas.</p><p>Der Herr sprach zu seinen Jüngern.</p></div></body></html>`;
 const parsed=JSON.parse(JSON.stringify(runtime.run("strictParseDailyMass('DE',__source,getActiveLiturgicalSourceDate(),'DE')")));
 for(const key of ['reading1','psalm','gospel_accl','gospel'])assert(parsed.data[key],key+' was lost when citation touched the section heading');
 assert(JSON.stringify(parsed.data.reading1).includes('Phil'));assert(!JSON.stringify(parsed.data.reading1).includes('Röm'));
 assert(!parsed.title.includes('Erzabtei'));
 runtime.window.__published={...parsed,serverRecord:{version:1,kind:'collected'}};
 assert(runtime.run("hasCompleteGermanDailyMass(__published,'DE')"),'Published server readings were blocked by optional Missal prayers');
 assert(!runtime.run("hasCompleteGermanDailyMass({...__published,serverRecord:null},'DE')"),'Direct-source proper validation was bypassed');
 runtime.run('loadAllSoulsMassConfigIfNeeded(new Date(2026,10,2))');
 assert(runtime.window.allSoulsMassConfig,'All Souls collection waited forever for a browser script element');
 assert.throws(()=>runtime.run("loadScriptOnce('JS%20file/not-packaged.js')"),/server-module-not-packaged/);
 console.log('Daily Mass parser: inline German HTML citations retain every reading section and select the requested year cycle.');
}finally{runtime.close();}
