'use strict';
const assert=require('node:assert/strict'),{createRuntime}=require('../functions/daily-runtime');
const metadata=Object.fromEntries(require('./country-metadata-upload-tool').countryMetadataItems().map(item=>[item.jurisdiction,item]));
const root='https://bible.usccb.org/bible/readings/112626',calls=[];
const links='<a href="'+root+'-Ordinary">Ordinary Mass</a><a href="'+root+'-Thanksgiving">[In the Dioceses of the United States]</a><a href="'+root+'-Thanksgiving">Thanksgiving Day</a>';
const page=(name)=>'<html><body><h1>'+name+'</h1>'+links+'<h3>Reading</h3><p>Revelation 18:1-2</p><p>'+name+' original first reading. This original passage is provided for a deterministic source regression.</p><h3>Responsorial Psalm</h3><p>Psalm 100:1-2</p><p>R. Give thanks to the Lord.</p><p>Sing joyfully and serve the Lord with gladness.</p><h3>Alleluia</h3><p>Luke 21:28</p><p>Alleluia.</p><p>Stand erect and raise your heads because your redemption is at hand.</p><p>Alleluia.</p><h3>Gospel</h3><p>Luke 21:20-28</p><p>'+name+' original Gospel. Jesus spoke these words to his disciples and to the people who were gathered.</p></body></html>';
(async()=>{
 const runtime=createRuntime({country:'US',date:'2026-11-26'},{metadata,fetchImpl:async(url,options)=>{
  calls.push({url:String(url),html:new Headers(options.headers).get('x-respond-with')});
  if(String(url).startsWith('https://bible.usccb.org'))return new Response('<html><body>Daily readings are temporarily loading.</body></html>',{status:200});
  assert.equal(new Headers(options.headers).get('x-respond-with'),'html','Rich source fallback lost its HTML request header');
  if(String(url).includes('-Thanksgiving'))return new Response(page('Thanksgiving'),{status:200});
  if(String(url).includes('-Ordinary'))return new Response(page('Ordinary'),{status:200});
  return new Response('<html><body><h1>Dated Mass choices</h1>'+links+'</body></html>',{status:200});
 }});
 try{
  const ordinary=await runtime.collect('day');assert(ordinary.validation.complete,JSON.stringify(ordinary.validation));
  assert(ordinary.parsed.data.reading1.text.includes('Ordinary original'));
  const choices=runtime.refreshVariantChoices();assert.equal(choices.find(choice=>choice.id==='thanksgiving')?.label,'Thanksgiving Day');
  const thanksgiving=await runtime.collect('thanksgiving');assert(thanksgiving.validation.complete);
  assert(thanksgiving.parsed.data.reading1.text.includes('Thanksgiving original'),'Explicit national Mass was replaced by the ordinary Mass');
  assert(!thanksgiving.parsed.data.reading1.text.includes('Ordinary original'));
  assert.equal(runtime.refreshVariantChoices().filter(choice=>choice.id==='thanksgiving').length,1);
  assert(calls.some(call=>call.html==='html'&&call.url.includes('r.jina.ai')));
  console.log('Daily source variants: incomplete HTTP 200 response retry, rich HTML fallback, unnumbered Reading, dated ordinary/Thanksgiving choices, native titles and explicit-source preservation passed.');
 }finally{runtime.close();}
 let emptyResponses=0,richResponses=0;
 const italian=createRuntime({country:'IT',date:'2026-11-17'},{metadata,fetchImpl:async(url)=>{
  if(!String(url).includes('r.jina.ai')){emptyResponses++;return new Response('<html><body>Liturgia del giorno is loading.</body></html>');}
  richResponses++;return new Response(page('Italian approved text').replaceAll('Reading','Prima Lettura').replaceAll('Responsorial Psalm','Salmo Responsoriale').replaceAll('Gospel','Vangelo').replaceAll('<h3>Alleluia</h3>','<h3>Acclamazione al Vangelo</h3>'));
 }});
 try{italian.run("countrySpecialMassRecord=()=>({names:{IT:'Approved memorial'},sourceUrls:{IT:'https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=20261117'}})");const result=await italian.collect();assert(result.validation.complete,JSON.stringify(result.validation));assert(emptyResponses>0&&richResponses>0,'An empty successful HTML response prevented the real source retry');console.log('Italian proper source: incomplete HTTP 200 shell retries the rich official source and preserves all readings.');}finally{italian.close();}
 let cemShells=0,cemOriginals=0;
 const mexican=createRuntime({country:'MX',date:'2026-11-08'},{metadata,fetchImpl:async(url)=>{
  if(!String(url).includes('r.jina.ai')){cemShells++;return new Response('<html><body>Misal loading.</body></html>');}
  cemOriginals++;return new Response('2026-11-08 00:00:00'+page('Approved Mexican text').replaceAll('Reading','PRIMERA LECTURA').replaceAll('Responsorial Psalm','SALMO RESPONSORIAL').replaceAll('Gospel','EVANGELIO').replaceAll('<h3>Alleluia</h3>','<h3>ACLAMACIÓN ANTES DEL EVANGELIO</h3>'));
 }});
 try{const result=await mexican.collect();assert(result.validation.complete,JSON.stringify(result.validation));assert(cemShells>0&&cemOriginals>0,'CEM loading shell hid its published dated rows');console.log('Mexican source: a successful loading shell cannot hide the dated official readings.');}finally{mexican.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
