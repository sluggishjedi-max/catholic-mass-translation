'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require('playwright'),mass=require('./mass-data-editor'),metadata=require('./country-metadata-upload-tool');
const root=path.resolve(__dirname,'..'),registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const countries=Object.fromEntries(metadata.countryMetadataItems().map(item=>[item.jurisdiction,item]));
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(({registry,countries})=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=window.countryMassData=registry;window.uploadedCountryMassMetadata=countries;},{registry,countries});
  await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
  await page.goto('http://127.0.0.1:'+server.address().port+'/V31.2.html');
  const result=await page.evaluate(()=>{
   const check=(ok,message)=>{if(!ok)throw Error(message)};
   startupNoticeDecision=true;document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending','startup-loading');
   const date=new Date(2026,10,5,12);getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});getActiveLiturgicalSourceDate=()=>cloneDateOnly(date);state.liturgicalDateContext=null;rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);state.useGps=false;
   check(localizedChoiceLabel({label:{en:'Fallback'},title:{ZH:'本地頌謝詞'}},'ZH')==='本地頌謝詞','Native title lost to a fallback label');
   const languages={VN:'VN',US:'EN',IE:'EN','GB-ENG':'EN','GB-WLS':'EN','GB-SCT':'EN',PH:'EN',TW:'ZH',AU:'EN',NZ:'EN',JP:'JP',IT:'IT',PT:'PT',MX:'ES',DE:'DE',BR:'PT',VA:'LA'};
   let cases=0;const timings=[],nodes=[];
   for(const[country,language]of Object.entries(languages))for(const reverse of [false,true]){
    state.currentLoc=reverse?language:'KR';state.selectedLocationCode=reverse?country:'KR';state.targetLang=reverse?'KR':language;state.targetLocationCode=reverse?'KR':country;state.options.eucharist3_intercession='ordinary';
    const start=performance.now();resetMassDataFrom(getStartupOrdinaryMassData());timings.push(performance.now()-start);
    for(const form of ['1','2','3','4']){
     state.options.eucharist=form;render();
     const part=document.querySelector('[data-part-id="eucharist"]');check(part,country+' '+form+' missing rendered prayer');
     const phases=[...part.querySelectorAll('[data-ordinary-stage]')];
     const expected=form==='1'?['te_igitur','living','communicantes','hanc_igitur','quam_oblationem','bread','cup','mystery_invitation','mystery_a','anamnesis','supra_quae','supplices','departed','nobis_quoque','per_quem']
       :form==='4'?['preface','sanctus','salvation_history','institution','mystery','offering_intercessions']
       :['opening_epiclesis','bread','cup','mystery_invitation','mystery_response','anamnesis_intercessions'];
     let previous=-1;
     for(const phase of expected){
      const index=phases.findIndex(row=>row.dataset.ordinaryStage===phase);check(index>previous,country+' '+form+' order: '+phase);previous=index;
      const row=phases[index];
      check(row.querySelectorAll('.text-content').length>=2,country+' '+form+' unpaired paragraph '+phase);
     }
     check(!phases.some(row=>row.dataset.ordinaryStage==='unprofiled'),country+' '+form+' fell back to unaligned source');
     const text=phases.map(row=>row.textContent).join(' ');
     check(!/He raises his eyes|O sacerdote, de braços abertos|Junta las manos|主祭伸手|雙手舉起/u.test(text),country+' '+form+' retained a priest action');
     if(country==='TW'&&form==='1'){
      const supra=phases.find(row=>row.dataset.ordinaryStage==='supra_quae');check(supra.textContent.includes('亞伯爾')&&supra.textContent.includes('아벨'), 'TW Abel offering is paired with a different Canon paragraph');
     }
     if(country==='MX'&&form==='3')check(text.includes('santifiques')&&text.includes('sean Cuerpo'),'Spanish priest directions consumed the epiclesis');
     if(country==='TW'&&form==='3')check(text.includes('使成為')&&text.includes('聖體'),'Chinese priest directions consumed spoken prayer');
     if(form==='3'&&['EN','JP','LA'].includes(language))check(!phases.find(row=>row.dataset.ordinaryStage==='anamnesis_intercessions').querySelector('.btn-ai-trans'),'A recovered approved EP III paragraph still offers AI translation');
     nodes.push(part.querySelectorAll('*').length);cases++;
    }
   }
   // National additional prayers include their own dialogue and Sanctus.
   state.currentLoc='PT';state.selectedLocationCode='BR';state.targetLang=state.targetLocationCode='KR';resetMassDataFrom(getStartupOrdinaryMassData());
   const entry=massData.find(item=>getBaseId(item.id)==='eucharist');let national=0;
   for(const form of Object.keys(entry.forms).filter(key=>!['1','2','3','4'].includes(key))){state.options.eucharist=form;render();check(document.querySelector('[data-part-id="eucharist"] .text-content'),'BR '+form+' empty');national++;}
   timings.sort((a,b)=>a-b);return{cases,national,medianMergeMs:+timings[Math.floor(timings.length/2)].toFixed(1),maxPrayerNodes:Math.max(...nodes),nativeTitles:true,sourceParagraphsRecovered:true};
  });
  assert.deepEqual(errors,[]);console.log(JSON.stringify({width,...result,errors}));
  await page.evaluate(()=>{state.currentLoc='KR';state.selectedLocationCode='KR';state.targetLang='ZH';state.targetLocationCode='TW';state.options.eucharist='1';resetMassDataFrom(getStartupOrdinaryMassData());render();document.querySelector('[data-ordinary-stage="supra_quae"]').scrollIntoView({block:'center'});for(const node of document.querySelectorAll('body *'))if(getComputedStyle(node).position==='fixed')node.style.visibility='hidden';});
  await page.screenshot({path:path.join(root,'tmp','v31-2-canon-'+width+'.png')});await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
 process.exit(0);
})().catch(error=>{console.error(error);process.exit(1);});
