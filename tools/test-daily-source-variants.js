'use strict';
const assert=require('node:assert/strict'),{createRuntime}=require('../functions/daily-runtime');
const metadata=Object.fromEntries(require('./country-metadata-upload-tool').countryMetadataItems().map(item=>[item.jurisdiction,item]));
const root='https://bible.usccb.org/bible/readings/112626',calls=[];
const links='<a href="'+root+'-Ordinary">Ordinary Mass</a><a href="'+root+'-Thanksgiving">[In the Dioceses of the United States]</a><a href="'+root+'-Thanksgiving">Thanksgiving Day</a>';
const page=(name)=>'<html><body><h1>'+name+'</h1>'+links+'<h3>Reading</h3><p>Revelation 18:1-2</p><p>'+name+' original first reading. This original passage is provided for a deterministic source regression.</p><h3>Responsorial Psalm</h3><p>Psalm 100:1-2</p><p>R. Give thanks to the Lord.</p><p>Sing joyfully and serve the Lord with gladness.</p><h3>Alleluia</h3><p>Luke 21:28</p><p>Alleluia.</p><p>Stand erect and raise your heads because your redemption is at hand.</p><p>Alleluia.</p><h3>Gospel</h3><p>Luke 21:20-28</p><p>'+name+' original Gospel. Jesus spoke these words to his disciples and to the people who were gathered.</p></body></html>';
(async()=>{
 const runtime=createRuntime({country:'US',date:'2026-11-26'},{metadata,fetchImpl:async(url,options)=>{
  calls.push({url:String(url),html:new Headers(options.headers).get('x-respond-with')});
  if(String(url).startsWith('https://bible.usccb.org'))return new Response('Unavailable direct connection',{status:403});
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
  console.log('Daily source variants: rich HTML fallback, unnumbered Reading, dated ordinary/Thanksgiving choices, native titles and explicit-source preservation passed.');
 }finally{runtime.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
