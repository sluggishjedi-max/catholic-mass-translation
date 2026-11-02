'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright');
const mass=require('./mass-data-editor');
const root=path.resolve(__dirname,'..');
const live=process.env.ORDO_LIVE_RECORDS?JSON.parse(fs.readFileSync(process.env.ORDO_LIVE_RECORDS,'utf8')).filter(record=>record.parsed):[];
(async()=>{
 const registry=mass.runCountryMassSources(mass.readCountryMassSources()).registry;
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();fs.readFile(file,(error,data)=>error?res.writeHead(404).end():res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html;charset=utf-8').end(data));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});
 try{for(const width of [1280,390]){
  const page=await browser.newPage({viewport:{width,height:900}});
  await page.addInitScript(registry=>{window.ordoPrayerEditorPreview=true;window.uploadedCountryMassData=window.countryMassData=registry;},registry);
  await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
  await page.goto('http://127.0.0.1:'+server.address().port+'/V31.1.html');
  const result=await page.evaluate(async live=>{
   const check=(value,message)=>{if(!value)throw Error(message);};
   const label=document.querySelector('#consent-other-label');
   for(const span of label.querySelectorAll('span')){const css=getComputedStyle(span);check(css.color==='rgb(229, 32, 32)'&&Number(css.fontWeight)>=700,'Notice language prompt is not bold red');}
   document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending');startupNoticeDecision=true;
   const date=new Date(2026,10,2,12),locations={KR:'KR',VN:'VN',EN:'US',JP:'JP',LA:'VA',ZH:'TW',IT:'IT',PT:'PT',ES:'MX',DE:'DE'};
   const connectors={KR:'과',VN:' và ',EN:' and ',JP:'と',ZH:'及',IT:' e ',PT:' e ',ES:' y ',DE:' und ',LA:' et '};
   const keys=['reading1','psalm','reading2','gospel_accl','gospel'];
   getStrictDateBase=()=>({localDay:cloneDateOnly(date),hour:12,timeZone:'Asia/Seoul'});getActiveLiturgicalSourceDate=()=>date;
   state.useGps=false;state.allSoulsNavChoice='first';state.liturgicalDateContext={date,localDate:date,navSlot:'day',allSoulsChoice:'first'};
   await ordoDataLoader.ensure('special',Object.keys(ordoDataLoader.manifest.special));await ordoDataLoader.ensure('missal',Object.keys(ordoDataLoader.manifest.missal));
   const reference=(lang,key,different=false)=>{
    const id=key==='psalm'?'PSA':key==='reading1'?'JOB':key==='reading2'?'ROM':'JHN';
    const table=globalThis.bibleLanguageTables[lang],book=table.books[id].aliases.find(alias=>bibleCitation.resolve(alias,lang));
    const chapter=id==='PSA'?(bibleCitation.psalmNumbering[lang]==='greek'?26:27):5;
    return book+' '+chapter+','+(different?'20-22':'1'+connectors[lang]+'3-4')+(key==='psalm'&&lang==='EN'?' ℟1 or 3':'');
   };
   const sectionFor=(key,left,right,different=false,multiple=false)=>{
    const section={};for(const lang of [left,right]){const lower=lang.toLowerCase();section['cit_'+lower]=reference(lang,key,different&&lang===right);section[lower+'_lines']=[parsedLine('','Source body '+lang+' '+key+'.','body')];
     if(multiple&&lang===right){section[lower+'_lines']=[parsedLine('','A separate passage.','body'),parsedLine('','Or:'),...section[lower+'_lines']];section['optionCits_'+lower]=[{['cit_'+lower]:reference(lang,key,true)},{['cit_'+lower]:reference(lang,key)}];section['cit_'+lower]=reference(lang,key,true);}
    }return section;
   };
   let paired=0,separated=0,alternatives=0,rendered=0,liveMatches=0,ambiguousReferences=0;
   for(const left of SUPPORTED_LANGS)for(const right of SUPPORTED_LANGS.filter(lang=>lang!==left)){
    state.currentLoc=left;state.targetLang=right;state.selectedLocationCode=locations[left];state.targetLocationCode=locations[right];state.liturgyInfo=buildGeneratedLiturgyInfo(date);
    for(const key of keys){
     let section=sectionFor(key,left,right),map=selectableOptionMapFromData(section,key).optionMap;
     let alignment=buildDeterministicDailyVariantAlignment(key,section,map).alignment;
     check(alignment.some(group=>group[left.toLowerCase()]===0&&group[right.toLowerCase()]===0),left+'/'+right+' '+key+': same passage split');paired++;
     section=sectionFor(key,left,right,true);map=selectableOptionMapFromData(section,key).optionMap;alignment=buildDeterministicDailyVariantAlignment(key,section,map).alignment;
     check(!alignment.some(group=>Number.isInteger(group[left.toLowerCase()])&&Number.isInteger(group[right.toLowerCase()])),left+'/'+right+' '+key+': different passages merged');separated++;
     section=sectionFor(key,left,right,false,true);map=selectableOptionMapFromData(section,key).optionMap;alignment=buildDeterministicDailyVariantAlignment(key,section,map).alignment;
     check(alignment.some(group=>group[left.toLowerCase()]===0&&group[right.toLowerCase()]===1),left+'/'+right+' '+key+': matching alternative lost');alternatives++;
     if(right===(left==='KR'?'VN':'KR')){
      section=sectionFor(key,left,right);resetMassDataFrom(getStartupOrdinaryMassData());const data={[key]:section};applyCachedVariantAlignments(data,date);applyDailyReadingsToMassData(data);render();
      const item=massData.find(item=>getBaseId(item.id)===key),variants=Object.values(item.variants||{});
      check(variants.length<=1,left+'/'+right+' '+key+': rendered language-only choices remain');
      const lines=variants[0]?.lines||item.lines;
      for(const lang of [left,right])check(lines.some(line=>line['text_'+lang.toLowerCase()]?.includes('Source body')),left+'/'+right+' '+key+': paired source body missing');
      check(![...document.querySelectorAll('[data-part-id="'+key+'"] option')].some(option=>/원문| source/.test(option.textContent)),key+': same passage is labeled as a language source');rendered++;
     }
    }
   }
   const pericope={cit_kr:'마태 11,25-30',cit_en:'Mt 11:25-30',kr_lines:[parsedLine('','나에게 오너라. 안식을 주리라.','body')],en_lines:[parsedLine('','Father, Lord of heaven and earth, you reveal these things to little ones.','body')]};
   const pericopeMap=selectableOptionMapFromData(pericope,'gospel').optionMap;
   check(variantSemanticKey('gospel',pericope.kr_lines[0].text)!==variantSemanticKey('gospel',pericope.en_lines[0].text),'Keyword-conflict fixture is ineffective');
   check(buildDeterministicDailyVariantAlignment('gospel',pericope,pericopeMap).alignment.some(group=>group.kr===0&&group.en===0),'A keyword from one sentence overrode an exact full-pericope match');
   const langs={KR:'KR',VN:'VN',US:'EN',IE:'EN','GB-ENG':'EN','GB-WLS':'EN','GB-SCT':'EN',PH:'EN',TW:'ZH',AU:'EN',NZ:'EN',JP:'JP',IT:'IT',PT:'PT',MX:'ES',DE:'DE',BR:'PT',VA:'LA'};
   for(let a=0;a<live.length;a++)for(let b=a+1;b<live.length;b++){
    const left=langs[live[a].request.country],right=langs[live[b].request.country];if(left===right||live[a].request.variant!==live[b].request.variant)continue;
    state.currentLoc=left;state.targetLang=right;state.selectedLocationCode=locations[left];state.targetLocationCode=locations[right];state.liturgyInfo=buildGeneratedLiturgyInfo(date);
    const data={};mergeSourceData(data,structuredClone(live[a].parsed),left,{suppressTitle:true});mergeSourceData(data,structuredClone(live[b].parsed),right,{suppressTitle:true});
    for(const key of keys){const section=data[key];if(!section)continue;const map=selectableOptionMapFromData(section,key).optionMap;if(!map[left.toLowerCase()]||!map[right.toLowerCase()])continue;const alignment=buildDeterministicDailyVariantAlignment(key,section,map).alignment;
     for(const [i] of map[left.toLowerCase()].entries())for(const [j] of map[right.toLowerCase()].entries()){
      if(!passageCitationsEquivalent(key,strictReadingOptionCitation(section,left.toLowerCase(),i),strictReadingOptionCitation(section,right.toLowerCase(),j),left,right))continue;
      const duplicates=(lang,index)=>map[lang.toLowerCase()].filter((_,other)=>passageCitationsEquivalent(key,strictReadingOptionCitation(section,lang.toLowerCase(),index),strictReadingOptionCitation(section,lang.toLowerCase(),other),lang,lang)).length;
      if(duplicates(left,i)>1||duplicates(right,j)>1){ambiguousReferences++;continue;}
      // A publisher may provide two alternate refrains of the same Psalm;
      // either shared pairing must survive without coalescing its own choices.
      check(alignment.some(group=>Number.isInteger(group[left.toLowerCase()])&&Number.isInteger(group[right.toLowerCase()])&&passageCitationsEquivalent(key,strictReadingOptionCitation(section,left.toLowerCase(),group[left.toLowerCase()]),strictReadingOptionCitation(section,right.toLowerCase(),group[right.toLowerCase()]),left,right)),live[a].request.country+'/'+live[b].request.country+' '+live[a].request.variant+' '+key+': real matching passage split '+JSON.stringify({alignment,options:Object.fromEntries(Object.entries(map).map(([lower,options])=>[lower,options.map((_,index)=>strictReadingOptionCitation(section,lower,index))]))}));liveMatches++;
     }
    }
   }
   return {languages:SUPPORTED_LANGS.length,paired,separated,alternatives,rendered,liveRecords:live.length,liveMatches,ambiguousReferences,noticeBoldRed:true};
  },live);
  console.log(JSON.stringify({width,...result}));await page.close();
 }}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1});
