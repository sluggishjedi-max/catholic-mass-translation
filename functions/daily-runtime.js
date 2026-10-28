'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {JSDOM,VirtualConsole}=require('jsdom');
const {COUNTRIES,PARSER_REVISION,isoDate,countryCode,digest}=require('./daily-schema');
const directory=path.join(__dirname,'daily-runtime');
let bundle;
function bundleFiles(){
  if(!bundle){const manifest=JSON.parse(fs.readFileSync(path.join(directory,'manifest.json'),'utf8'));bundle={manifest,html:fs.readFileSync(path.join(directory,'index.html'),'utf8'),sources:new Map()};}
  return bundle;
}
function scriptSource(file){const files=bundleFiles();if(!files.sources.has(file))files.sources.set(file,fs.readFileSync(path.join(directory,file),'utf8'));return files.sources.get(file);}
function safeSourceUrl(value){
  const url=new URL(value);
  if(url.protocol!=='https:'||url.username||url.password||url.port||!url.hostname.includes('.')||/^(?:localhost|127\.|10\.|192\.168\.|169\.254\.|172\.(?:1[6-9]|2\d|3[01])\.)/.test(url.hostname)||url.hostname.endsWith('.internal'))throw Error('source-url-not-public');
  return url;
}
function createRuntime(input,{metadata={},fetchImpl=fetch,ktcgProvider,sourceDocuments}={}){
  const country=countryCode(input.country),date=isoDate(input.date),lang=COUNTRIES[country][1];
  const virtualConsole=new VirtualConsole();
  const dom=new JSDOM(bundleFiles().html,{url:'https://sluggishjedi-max.github.io/catholic-mass-translation/V31.html',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole});
  const window=dom.window,context=dom.getInternalVMContext();
  const snapshots=[];
  let snapshotBytes=0;
  const deadline=Date.now()+150000;
  let requests=0;
  window.ordoPrayerEditorPreview=true;window.ordoServerCollector=true;
  window.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});
  window.Headers=Headers;window.Request=Request;window.Response=Response;window.AbortController=AbortController;window.AbortSignal=AbortSignal;
  window.uploadedCountryMassMetadata=metadata;
  window.fetch=async(value,options={})=>{
    if(Date.now()>deadline||++requests>50)throw Error('source-request-budget-exceeded');
    const url=safeSourceUrl(value);
    if(/cloudfunctions\.net$/.test(url.hostname)||url.pathname.includes('geminiProxy'))throw Error('collector-does-not-call-app-or-ai-proxies');
    let target=url,response,requestOptions={...options};
    for(let redirect=0;redirect<6;redirect++){
      const headers=new Headers(requestOptions.headers||{}),cookies=dom.cookieJar.getCookieStringSync(target.href);
      if(cookies)headers.set('Cookie',cookies);
      response=await fetchImpl(target,{...requestOptions,headers,redirect:'manual',signal:AbortSignal.any([AbortSignal.timeout(Math.min(20000,Math.max(1,deadline-Date.now()))),...(options.signal?[options.signal]:[])])});
      for(const cookie of response.headers.getSetCookie?.()||[])try{dom.cookieJar.setCookieSync(cookie,target.href);}catch{}
      if(![301,302,303,307,308].includes(response.status))break;
      const location=response.headers.get('location');if(!location)break;
      target=safeSourceUrl(new URL(location,target).href);
      if(response.status===303||([301,302].includes(response.status)&&requestOptions.method==='POST'))requestOptions={method:'GET'};
      if(redirect===5)throw Error('too-many-source-redirects');
    }
    const copy=response.clone();
    const text=await copy.text();
    if(Buffer.byteLength(text)>5*1024*1024)throw Error('source-response-too-large');
    snapshotBytes+=Buffer.byteLength(text);
    if(snapshotBytes>12*1024*1024)throw Error('source-snapshot-budget-exceeded');
    snapshots.push({url:response.url||url.href,status:response.status,body:text});
    return response;
  };
  function run(code,name='daily-runtime-bridge'){return vm.runInContext(code,context,{filename:name,timeout:10000});}
  const loaded=new Set();
  function load(file){if(!loaded.has(file)){run(scriptSource(file),file);loaded.add(file);}}
  for(const file of bundleFiles().manifest.core.filter(file=>!file.endsWith('/app_v31.js')))load(file);
  const special='JS file/lazy/special-'+country+'.js';if(bundleFiles().manifest.hashes[special])load(special);
  const missal='JS file/lazy/missal-'+lang+'.js';if(bundleFiles().manifest.hashes[missal])load(missal);
  if(country==='TW')load('JS file/countries/taiwan/taiwan_daily_mass_data.js');
  load('JS file/app_v31.js');
  // jsdom does not execute dynamically inserted script elements. Resolve only
  // packaged app modules directly, and fail immediately for missing modules.
  window.__loadServerModule=src=>{
    const file=decodeURIComponent(String(src).split('?')[0]);
    if(!bundleFiles().manifest.hashes[file])throw Error('server-module-not-packaged:'+file);
    load(file);return Promise.resolve(true);
  };
  run('loadScriptOnce = src => __loadServerModule(src);');
  const [year,month,day]=date.split('-').map(Number);
  window.__collectorInput={...input,country,lang,year,month,day};
  run(`
    state.currentLoc=__collectorInput.lang;state.selectedLocationCode=__collectorInput.country;
    state.targetLang=__collectorInput.lang==='KR'?'EN':'KR';state.targetLocationCode=state.targetLang==='KR'?'KR':'US';
    state.useGps=false;state.vnReadingSource=__collectorInput.source==='ktcg'?'ktcg':'hanoi';state.vnReadingSourceConfirmed=true;
    state.gpsCoordinates=__collectorInput.profile==='VIETNAM_NORTH'?{lat:21.03,lon:105.85,lng:105.85}:{lat:10.78,lon:106.69,lng:106.69};
    getStrictDateBase=()=>({localDay:new Date(__collectorInput.year,__collectorInput.month-1,__collectorInput.day),hour:12,timeZone:'Asia/Seoul'});
    getActiveLiturgicalSourceDate=()=>new Date(__collectorInput.year,__collectorInput.month-1,__collectorInput.day,12);
    state.liturgicalDateContext=null;
    state.liturgyInfo=buildGeneratedLiturgyInfo(getActiveLiturgicalSourceDate());
    fetchGeminiViaFirebase=async()=>{throw Error('AI is disabled in server collection');};
    fetchJinaHtml=async(url,options={})=>{
      try {const response=await fetchWithTimeout(url,options);if(!response.ok)throw Error('HTTP '+response.status);return response.text();}
      catch(error){return fetchTextWithFallbacks(url,options);}
    };
    const collectorOriginalCandidates=buildFetchCandidates;
    buildFetchCandidates=url=>[...new Set([url,...collectorOriginalCandidates(url)])];
  `);
  if(ktcgProvider){
    window.__ktcgProvider=async requestedDate=>ktcgProvider(requestedDate.toISOString().slice(0,10),input.profile||'VIETNAM_SOUTH',runtime);
    run('fetchKtcgkpvMassReadingJson = date => __ktcgProvider(date);');
  }
  const runtime={
    window,run,snapshots,input:{...input,country,date,lang},
    setSourceDocuments(documents){sourceDocuments=documents;},
    portugalContext(){return JSON.parse(JSON.stringify(run(`(()=>{const date=getActiveLiturgicalSourceDate(),meta=getSeasonMeta(date),year=date.getFullYear()+(date>=getAdventStart(date.getFullYear())?1:0);return {...meta,cycle:['C','A','B'][year%3],title:state.liturgyInfo.names?.PT||'',rank:state.liturgyInfo.isSolemnity?'solemnity':state.liturgyInfo.meta?.rank||''};})()`)));},
    async fetch(url,options){return window.fetch(url,options);},
    legacyChoice(mass){window.__mass=mass;return JSON.parse(JSON.stringify(run('kpvMassCandidateAsLegacyChoice(__mass,getActiveLiturgicalSourceDate())')));},
    normalizeLegacy(payload){window.__legacy=payload;return JSON.parse(JSON.stringify(run('normalizeKpvMassReadingPayload(__legacy,getActiveLiturgicalSourceDate())')));},
    variantChoices(){return sourceDocuments?.length?sourceDocuments.map(document=>({id:document.id,label:document.label})):JSON.parse(JSON.stringify(run(`(()=>{const date=getActiveLiturgicalSourceDate(),profile=specialLiturgyProfile(__collectorInput.country);if(isAllSoulsDate(date))return ['first','second','third'].map((id,index)=>({id,label:profile.allSouls[id]?.names?.KR||'위령의 날 '+(index+1)+'미사'}));return [{id:'day',label:'당일 미사'},...profile.vigils.filter(entry=>entry.enabled!==false&&specialDefinitionMatchesDate(entry,date,__collectorInput.country)).map(entry=>({id:entry.id,label:entry.names?.KR||entry.names?.[__collectorInput.lang]||entry.id}))];})()`)));},
    variants(){return runtime.variantChoices().map(choice=>choice.id);},
    async collect(variant='day'){
      const snapshotStart=snapshots.length;
      window.__variant=variant;
      run(`getStrictMassSelector=()=>({slot:__variant==='day'||['first','second','third'].includes(__variant)?'day':'vigil',specialVigil:__variant==='day'||['first','second','third'].includes(__variant)?'':__variant,allSoulsChoice:['first','second','third'].includes(__variant)?__variant:''});state.allSoulsNavChoice=['first','second','third'].includes(__variant)?__variant:'';`);
      const document=sourceDocuments?.find(item=>item.id===variant);
      let parsed;
      if(sourceDocuments){
        if(!document)throw Error('requested-pdf-mass-not-found');
        if(document.error)throw Error(document.error);
        window.__pdfSource='Title: '+document.label+'\nURL Source: '+document.sourceUrl+'\n\nMarkdown Content:\n'+document.text;
        parsed=run('ordoDailyContent.normalizeParsed(sanitizeDailyAcclamationReferences(strictParseDailyMass(__collectorInput.lang,__pdfSource,getActiveLiturgicalSourceDate(),__collectorInput.country)))');
        parsed.title=document.label||parsed.title;parsed.sourceUrl=document.sourceUrl;parsed.sourcePage=document.sourcePage;parsed.sourceFiles=[document.file];parsed.sourceMode='official-pdf';
        snapshots.push({url:document.sourceUrl,status:200,kind:'pdf-extraction',file:document.file,body:document.text});
      }else parsed=await run('Promise.resolve(dailySourceFetchers[__collectorInput.lang](getActiveLiturgicalSourceDate(),{locationCode:__collectorInput.country})).then(sanitizeDailyAcclamationReferences).then(ordoDailyContent.normalizeParsed)');
      window.__parsed=parsed;
      const validation=run(`({missing:missingCoreDailyReadingSections(__parsed,getActiveLiturgicalSourceDate(),__collectorInput.lang,__collectorInput.country),fixed:countrySpecialMassRecord(getActiveLiturgicalSourceDate(),__collectorInput.country)?.fetchDaily===false})`);
      if(validation.missing.length&&!validation.fixed&&!Object.keys(parsed.data||{}).length)throw Error('incomplete-source:'+validation.missing.join(','));
      // Store Missal prayers when a public diocesan source supplies them; no AI is used.
      if(input.source==='ktcg')await run('applyVietnameseKtcgDiocesanPrayers(__parsed,getActiveLiturgicalSourceDate())');
      const result=JSON.parse(JSON.stringify(parsed));
      if(input.source==='ktcg'&&runtime.ktcgComparison?.selectedProvider==='ktcgkpv.org'){
        result.sourceUrl='https://ktcgkpv.org/readings/mass-reading';result.sourceName='KTCG · ktcgkpv.org';
      }
      const originals=snapshots.slice(snapshotStart);
      if(!originals.length)originals.push({url:'app-bundle://'+PARSER_REVISION+'/'+country+'/'+date+'/'+variant,status:200,kind:'compiled-data',body:JSON.stringify({parsed:result})});
      return {parsed:result,validation:{complete:!validation.missing.length||validation.fixed,missing:validation.missing,fixed:validation.fixed},parserRevision:PARSER_REVISION,snapshots:originals,fingerprint:digest({parsed:result,sources:originals.filter(s=>s.status===200&&!s.verification).map(s=>({url:s.url,body:s.body.replace(/\r\n/g,'\n').trim()})).sort((a,b)=>a.url.localeCompare(b.url))})};
    },
    close(){dom.window.close();}
  };
  return runtime;
}
module.exports={createRuntime,safeSourceUrl};
