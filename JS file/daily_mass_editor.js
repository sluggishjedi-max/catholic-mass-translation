(function(global){
  'use strict';
  const endpoint=global.ORDO_DAILY_ADMIN_ENDPOINT||'https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassAdmin';
  const $=id=>document.getElementById(id),copy=value=>JSON.parse(JSON.stringify(value));
  const sectionNames={entrance:'입당송',collect:'본기도',reading1:'제1독서',psalm:'화답송',reading2:'제2독서',Sequence:'부속가',gospel_accl:'복음 환호송',gospel:'복음',prayer_offerings:'예물 기도',preface:'감사송',communion:'영성체송',prayer_after:'영성체 후 기도'};
  const standardSections=Object.keys(sectionNames);
  const colors=[['white','백색','#f7f8fa',['#fff','#ffffff','흰색']],['green','녹색','#27ae60',['#008000','#00ff00']],['purple','자색','#8e44ad',['#800080','보라색']],['red','홍색','#c0392b',['#d32f2f','#ff0000','빨간색']],['rose','장미색','#e67ab1',['#ffc0cb','pink']],['black','흑색','#2c3e50',['#000','#000000','검정색']],['gold','금색','#d4af37',['#ffd700']],['none','미지정','',[]],['other','기타 색상',null,[]]];
  const state={verified:false,identity:null,record:null,parsed:null,loadedVersion:0,latestVersion:0,offeredVersion:0,section:'',optionIndex:0,languages:{},dirty:false,busy:false,generation:0,days:[],versions:[],cancelWait:false,colorOriginal:'',colorChoice:'none',provenance:null};
  function hasBody(value){return typeof value==='string'?!!value.trim():!!(value&&typeof value==='object'&&(typeof value.text==='string'&&value.text.trim()||Array.isArray(value.lines)&&value.lines.some(line=>typeof line.text==='string'&&line.text.trim())));}
  function sectionLabel(id){return sectionNames[id]||sectionNames[standardSections.find(key=>key.toLowerCase()===id.toLowerCase())]||id;}
  function orderedSections(data={}){const keys=Object.keys(data).filter(id=>id!=='meditation_after_communion'),order=standardSections.map(id=>id.toLowerCase()),all=[...keys,...standardSections.filter(id=>!keys.some(key=>key.toLowerCase()===id.toLowerCase()))];return all.sort((a,b)=>{const ai=order.indexOf(a.toLowerCase()),bi=order.indexOf(b.toLowerCase());return (ai<0?order.length:ai)-(bi<0?order.length:bi);});}
  const content=global.ordoDailyContent;
  function renderSectionStatuses(){
    const sections=orderedSections(state.parsed?.data);let count=0;
    $('section-statuses').replaceChildren(...sections.map(id=>{const ready=hasBody(state.parsed?.data?.[id]);if(ready)count++;const item=document.createElement('li');item.dataset.section=id;item.dataset.collected=String(ready);const label=document.createElement('span');label.textContent=sectionLabel(id);const badge=document.createElement('span');badge.className='collection-badge';badge.textContent=ready?'수집':'미수집';const button=document.createElement('button');button.type='button';button.dataset.selectSection=id;button.setAttribute('aria-pressed',String(state.section===id));button.append(label,badge);button.onclick=()=>{captureSection();state.section=id;state.optionIndex=0;sectionFields();renderSectionStatuses();$('section-body').focus({preventScroll:true});};item.append(button);return item;}));
    $('section-count').textContent=count+'/'+sections.length+'개 항목에 본문 있음';
  }
  function colorChoice(value){const normalized=String(value||'').trim().toLowerCase();return colors.find(([id,name,code,aliases])=>[id,name,code,...aliases].includes(normalized))?.[0]||'other';}
  function renderColor(){state.colorOriginal=state.parsed?.color||'';state.colorChoice=colorChoice(state.colorOriginal);$('liturgy-color').replaceChildren(...colors.map(([id,name])=>new Option(name,id)));$('liturgy-color').value=state.colorChoice;renderColorPreview();}
  function renderColorPreview(){const selected=colors.find(item=>item[0]===$('liturgy-color').value);$('color-preview').style.backgroundColor=selected?.[2]||state.colorOriginal||'transparent';}
  function selectedColor(){const choice=$('liturgy-color').value;return choice===state.colorChoice||choice==='other'?state.colorOriginal:colors.find(item=>item[0]===choice)?.[2]||'';}
  const sourceSites=[['missa.cbck.or.kr','CBCK','한국천주교주교회의 매일미사'],['bible.usccb.org','USCCB','미국 주교회의'],['tonggiaophanhanoi.org','HANOI','하노이 대교구'],['ktcgkpv.org','KTCG-LEGACY','KTCG 구 홈페이지'],['kpv.vn','KPV','KTCG 현 홈페이지'],['gpbanmethuot.net','BANMETHUOT','반메투옷 교구'],['universalis.com','UNIVERSALIS','Universalis'],['ibreviary.com','IBREVIARY','iBreviary'],['higotonofukuin.org','HIGOTONOFUKUIN','일본 매일의 복음'],['chiesacattolica.it','CEI','이탈리아 주교회의'],['liturgia.pt','LITURGIA-PT','Liturgia.pt'],['cem.org.mx','CEM','멕시코 주교회의'],['erzabtei-beuron.de','SCHOTT','Schott-Messbuch'],['pocketterco.com.br','POCKETTERCO','Pocket Terço'],['catholic.org.tw','CRBC','대만 주교회의'],['drive.google.com','GOOGLE-DRIVE','Google Drive 문서']];
  function sourceUrl(value){
    try{let url=new URL(value);for(let i=0;i<5&&url.hostname==='r.jina.ai';i++){const nested=url.pathname.slice(1)+url.search;if(!/^https?:\/\//i.test(nested))break;url=new URL(nested);}return ['https:','http:'].includes(url.protocol)&&!url.username&&!url.password?url:null;}catch{return null;}
  }
  function sourceLink(url,label){const link=document.createElement('a');link.href=url;link.textContent=label;link.target='_blank';link.rel='noopener noreferrer';return link;}
  function renderSources(){
    const identity=state.identity||inputs(),id=state.provenance?.sourceId||(identity.source==='ktcg'?(identity.profile==='VIETNAM_NORTH'?'ktcg_north':'ktcg_south'):identity.source||'official');
    $('source-code').textContent='출처 코드: '+(identity.country||'—')+' / '+id;
    const entries=[...(state.provenance?.urls||[]),...(state.parsed?.sourceUrl?[{url:state.parsed.sourceUrl,kind:'source'}]:[]),...(state.parsed?.prayerSourceUrl?[{url:state.parsed.prayerSourceUrl,kind:'prayer'}]:[])],groups=new Map();
    for(const entry of entries){const url=sourceUrl(entry.url||entry);if(!url)continue;const host=url.hostname.replace(/^www\./,'');const known=sourceSites.find(([suffix])=>host===suffix||host.endsWith('.'+suffix));if(!groups.has(url.origin))groups.set(url.origin,{origin:url.origin,code:known?.[1]||host.toUpperCase(),name:known?.[2]||host,urls:new Set(),kinds:new Set()});const group=groups.get(url.origin);group.urls.add(url.href);group.kinds.add(({source:'자료에 기록된 출처',prayer:'보조 기도문 출처',title:'전례명 출처',response:'수집·대조 응답'})[entry.kind]||'자료에 기록된 출처');}
    const nodes=[...groups.values()].map(site=>{const card=document.createElement('div');card.className='source-site';const heading=document.createElement('strong');heading.textContent=site.name+' · '+site.code;const host=document.createElement('div');host.className='muted';host.textContent=site.origin+' · '+[...site.kinds].join(' / ');const links=document.createElement('div');links.className='source-links';links.append(sourceLink(site.origin+'/','홈페이지'),sourceLink([...site.urls][0],'수집 주소'));card.append(heading,host,links);if(site.urls.size>1){const details=document.createElement('details'),summary=document.createElement('summary'),list=document.createElement('ul');summary.textContent='관련 수집 주소 '+site.urls.size+'개';for(const url of site.urls){const item=document.createElement('li');item.append(sourceLink(url,url));list.append(item);}details.append(summary,list);card.append(details);}return card;});
    if(state.provenance?.compiled){const note=document.createElement('p');note.textContent='APP-BUNDLE · 앱에 포함된 국가별 전례 자료';nodes.push(note);}
    if(!nodes.length){const note=document.createElement('p');note.className='muted';note.textContent=state.parsed?'이 버전에는 홈페이지 주소가 저장되어 있지 않습니다.':'자료를 불러오면 수집한 홈페이지와 링크가 표시됩니다.';nodes.push(note);}
    for(const file of state.provenance?.files||[]){const row=document.createElement('div');row.className='source-site';const name=document.createElement('span');name.textContent=file.name+' · '+file.pages+'쪽 ';const download=document.createElement('button');download.textContent='보관된 PDF 다운로드';download.type='button';download.onclick=()=>guard(async()=>{const result=await api({...state.identity,action:'file',version:state.loadedVersion,file:file.id});const url=URL.createObjectURL(new Blob([Uint8Array.from(atob(result.data),c=>c.charCodeAt(0))],{type:result.type})),link=document.createElement('a');link.href=url;link.download=result.name;link.click();URL.revokeObjectURL(url);});row.append(name,download);nodes.push(row);}
    $('source-websites').replaceChildren(...nodes);
  }
  function message(value,error=false){$('status').textContent=value;$('status').classList.toggle('error',error);}
  function inputs(){const country=$('country').value,source=$('source').value;return {country,date:$('date').value,source:source==='hanoi'?'hanoi':source.startsWith('ktcg')?'ktcg':'official',profile:source==='ktcg_north'?'VIETNAM_NORTH':source==='ktcg_south'?'VIETNAM_SOUTH':'',variant:$('variant').value||'day'};}
  function key(identity=state.identity){return identity?JSON.stringify(identity):'';}
  function draftKey(){return 'ordo:daily-editor-draft:'+key();}
  async function api(value,method='GET'){
    const user=global.firebase?.auth().currentUser;if(!user)throw Error('관리자 로그인이 필요합니다.');
    const token=await user.getIdToken();
    const response=await fetch(endpoint+(method==='GET'?'?'+new URLSearchParams(value):''),{method,headers:{Authorization:'Bearer '+token,...(method==='POST'?{'Content-Type':'application/json'}:{})},body:method==='POST'?JSON.stringify(value):undefined,cache:'no-store',signal:AbortSignal.timeout(method==='POST'&&value.action==='collect'?530000:30000)});
    const result=await response.json();
    if(!response.ok){const error=Error(result.error||'서버 요청에 실패했습니다.');error.status=response.status;error.latestVersion=result.latestVersion;throw error;}
    return result;
  }
  function captureSection(){
    if(!state.parsed||!state.section)return;
    const previous=state.parsed.data[state.section],option=content.options(previous)[state.optionIndex]||{},value=typeof option==='object'?copy(option):{text:option};
    const body=$('section-body').value;
    if(body!==content.body(option)){value.text=body;value.lines=body.split('\n').map((text,index)=>({...value.lines?.[index]||{sp:'',kind:'body'},text}));}
    const citationKey=Object.keys(value).find(key=>/^cit_/i.test(key))||(Object.hasOwn(value,'cit')?'cit':Object.hasOwn(value,'citation')?'citation':'cit_'+(state.languages[state.identity?.country]||'KR').toLowerCase());
    if($('citation').value||value[citationKey])value[citationKey]=$('citation').value;
    state.parsed.data[state.section]=content.replaceOption(previous,state.optionIndex,value);
    state.parsed.title=$('liturgy-title').value;state.parsed.color=selectedColor();
  }
  function sectionFields(){
    const options=content.options(state.parsed?.data[state.section]);state.optionIndex=Math.min(state.optionIndex,Math.max(0,options.length-1));
    const value=options[state.optionIndex];
    $('section-body').value=content.body(value);$('body-heading').textContent=sectionLabel(state.section)+' 본문';
    $('citation').value=value&&typeof value==='object'?(value.cit||value.citation||Object.entries(value).find(([key])=>/^cit_/i.test(key))?.[1]||''):'';
    $('section-options').hidden=options.length<2;
    $('section-options').replaceChildren(...options.map((option,index)=>{const button=document.createElement('button');button.type='button';button.textContent=option?.label||'선택지 '+(index+1);button.setAttribute('aria-pressed',String(index===state.optionIndex));button.onclick=()=>{captureSection();state.optionIndex=index;sectionFields();};return button;}));
  }
  function renderParsed(){
    const parsed=state.parsed;$('content-fields').disabled=!parsed||state.busy;
    $('liturgy-title').value=parsed?.title||'';renderColor();
    const sections=orderedSections(parsed?.data);

    if(!sections.includes(state.section))state.section=sections.find(id=>hasBody(parsed?.data?.[id]))||sections[0]||'';
    sectionFields();renderSectionStatuses();
    $('advanced-json').value=parsed?JSON.stringify(parsed,null,2):'';
    $('draft-state').textContent=state.dirty?'편집 중 · 이 브라우저에 임시 저장됩니다.':'';
  }
  function saveDraft(){
    if(!state.parsed||!state.dirty)return true;
    captureSection();
    try{localStorage.setItem(draftKey(),JSON.stringify({identity:state.identity,parsed:state.parsed,baseVersion:state.loadedVersion,savedAt:new Date().toISOString()}));$('draft-state').textContent='임시 저장됨 · v'+state.loadedVersion+'에서 편집 중';return true;}
    catch{message('임시 저장 공간이 부족합니다. 현재 편집본을 다운로드한 후 다른 버전을 불러와 주세요.',true);return false;}
  }
  function changed(){state.dirty=true;saveDraft();renderSectionStatuses();renderColorPreview();$('advanced-json').value=JSON.stringify(state.parsed,null,2);}
  function versionOptions(versions){
    state.versions=[...new Map([...state.versions,...versions].map(item=>[item.number,item])).values()].sort((a,b)=>b.number-a.number);
    $('version-history').replaceChildren(...state.versions.map(item=>new Option('v'+item.number+' · '+(item.kind==='collected'?'수집본':'편집본')+' · '+item.createdAt.replace('T',' ').slice(0,16),String(item.number))));
    $('version-history').value=String(state.loadedVersion);
  }
  async function loadVersion(number){
    if(!saveDraft())return;
    const generation=state.generation,identity=copy(state.identity);
    const version=await api({...identity,action:'version',version:number});
    if(generation!==state.generation||key(identity)!==key())return;
    state.parsed=content.normalizeParsed(copy(version.parsed));state.optionIndex=0;state.loadedVersion=version.number;state.dirty=false;state.section='';
    state.provenance=version.provenance||null;renderSources();
    $('version-history').value=String(version.number);$('newer-version').hidden=state.latestVersion<=version.number;
    $('provenance').textContent=JSON.stringify({kind:version.kind,createdAt:version.createdAt,parserRevision:version.parserRevision,comparison:version.comparison,sourceUrl:version.parsed.sourceUrl,prayerSourceUrl:version.parsed.prayerSourceUrl},null,2);
    renderParsed();message('v'+version.number+' '+(version.kind==='collected'?'수집본':'편집본')+'을 불러왔습니다.');
  }
  async function offerNewer(){
    const higher=state.latestVersion>state.loadedVersion;
    $('newer-version').hidden=!higher;
    if(!higher||state.offeredVersion>=state.latestVersion)return;
    if(!saveDraft())return;
    state.offeredVersion=state.latestVersion;
    if(global.confirm('더 높은 버전의 파일이 있습니다. 해당 파일을 불러올까요?'))await loadVersion(state.latestVersion);
  }
  async function refreshRecord({offer=true}={}){
    if(!state.identity)return;
    const generation=state.generation,identity=copy(state.identity),result=await api({...identity,action:'record'});
    if(generation!==state.generation||key(identity)!==key())return;
    state.record=result.record;state.latestVersion=result.record?.latestVersion||0;
    versionOptions(result.versions||[]);
    if((result.versions||[]).length>=100)$('older-versions').hidden=false;
    $('published-state').textContent=result.record?'앱 적용: v'+(result.record.publishedVersion||0)+' · 최신: v'+state.latestVersion+' · 현재 열람: v'+state.loadedVersion:'아직 수집된 버전이 없습니다.';
    $('record-key').textContent=($('country').selectedOptions[0]?.textContent||identity.country)+'_'+identity.date+' / '+$('source').selectedOptions[0]?.textContent+' / '+identity.variant;
    if(offer&&state.loadedVersion)await offerNewer();
    return result;
  }
  async function loadRecord(){
    if(!saveDraft())return;
    state.generation++;state.identity=inputs();state.parsed=null;state.record=null;state.loadedVersion=0;state.latestVersion=0;state.offeredVersion=0;state.dirty=false;state.section='';state.versions=[];state.provenance=null;renderParsed();renderSources();
    const result=await refreshRecord({offer:false});
    if(result?.record?.latestVersion){await loadVersion(result.record.publishedVersion||result.record.latestVersion);await offerNewer();}
    else await collectMissing();
  }
  async function collectMissing(){
    const generation=state.generation,identity=copy(state.identity),started=Date.now();state.cancelWait=false;
    message('저장된 자료가 없어 해당 날짜의 매일독서를 서버에서 수집하고 있습니다. 완료되면 자동으로 불러옵니다.');
    const button=$('cancel-collection');button.hidden=false;button.disabled=false;
    try{
      const queued=await api({action:'collect',country:identity.country,start:identity.date,days:1,priority:true},'POST');
      while(generation===state.generation&&!state.cancelWait){
        const job=await api({...identity,action:'collection',runId:queued.runId});
        if(['completed','completed-with-errors','failed'].includes(job.status)){
          const result=await refreshRecord({offer:false});
          if(result?.record?.latestVersion){await loadVersion(result.record.publishedVersion||result.record.latestVersion);await offerNewer();}
          else{
            const reason=result?.record?.lastError||job.lastError||job.results?.find(item=>item.variant===identity.variant)?.error||'';
            const explanation=/only serves its current/.test(reason)?'이 출처는 요청한 날짜의 자료를 아직 제공하지 않습니다.':/http-403/.test(reason)?'출처 홈페이지가 자동 수집 요청을 차단하고 있습니다(HTTP 403).':/incomplete-source/.test(reason)?'출처에서 필요한 독서 본문을 확인하지 못했습니다.':'출처에 자료가 아직 없거나 일시적으로 연결할 수 없습니다.';
            message('해당 날짜의 서버 수집을 시도했지만 자료를 가져오지 못했습니다. '+explanation,true);
          }
          await list();await runs();return;
        }
        if(job.status==='not-found')throw Error('수집 작업을 확인하지 못했습니다. 다시 불러와 주세요.');
        message((job.status==='running'?'해당 날짜의 매일독서를 서버에서 수집하고 있습니다.':'해당 날짜의 서버 수집을 기다리고 있습니다.')+' 완료되면 자동으로 불러옵니다. ('+Math.floor((Date.now()-started)/1000)+'초 경과)');
        await new Promise(resolve=>setTimeout(resolve,5000));
      }
      message('불러오기 대기를 취소했습니다. 서버 수집은 계속되며, 나중에 다시 불러올 수 있습니다.');
    }finally{button.hidden=true;}
  }
  async function save(){
    if(!state.parsed)return;captureSection();saveDraft();
    try{
      const result=await api({...state.identity,action:'save',parsed:state.parsed,baseVersion:state.loadedVersion,expectedLatestVersion:state.latestVersion},'POST');
      localStorage.removeItem(draftKey());state.dirty=false;state.loadedVersion=result.latestVersion;
      await refreshRecord({offer:false});await loadVersion(result.latestVersion);message('편집본 v'+result.latestVersion+'을 저장하고 앱에 적용했습니다.');
    }catch(error){if(error.status===409){await refreshRecord();message('새 버전이 추가됐습니다. 편집 내용은 임시 저장돼 있습니다.',true);}else throw error;}
  }
  async function publish(){
    if(!state.loadedVersion||!global.confirm('현재 불러온 v'+state.loadedVersion+' 내용을 새 편집 버전으로 저장하고 앱에 적용할까요?'))return;
    if(state.dirty){message('편집 중인 내용은 “편집 저장 및 앱 적용”으로 저장해 주세요.',true);return;}
    const result=await api({...state.identity,action:'publish',version:state.loadedVersion,expectedLatestVersion:state.latestVersion},'POST');
    await refreshRecord({offer:false});await loadVersion(result.latestVersion);
  }
  function updateSource(){
    const previous=$('source').value;
    const options=$('country').value==='VN'?[['hanoi','hanoi · 하노이 대교구'],['ktcg_south','ktcg_south · KTCG 남부'],['ktcg_north','ktcg_north · KTCG 북부']]:[['official','official · 국가 출처']];
    $('source').replaceChildren(...options.map(([value,label])=>new Option(label,value)));
    if(options.some(([value])=>value===previous))$('source').value=previous;
  }
  function updateVariants(){
    const day=state.days.find(item=>item.date===$('date').value),source=$('source').value;
    const labels={day:'당일 미사',first:'위령의 날 첫째 미사',second:'위령의 날 둘째 미사',third:'위령의 날 셋째 미사'};
    const choices=day?.availableVariants?.[source]||[];
    const variants=[...new Set([...(choices.length?choices.map(item=>item.id):[$('date').value.endsWith('-11-02')?'first':'day']),...Object.keys(day?.records||{}).filter(id=>id.startsWith(source+'__')).map(id=>id.split('__')[1])])];
    if($('date').value.endsWith('-11-02'))variants.push(...['second','third'].filter(value=>!variants.includes(value)));
    if(!variants.includes($('variant').value))$('variant').value=variants[0]||'day';
    $('mass-choices').replaceChildren(...variants.map(value=>{const record=day?.records?.[source+'__'+value],button=document.createElement('button');button.type='button';button.dataset.variant=value;button.setAttribute('aria-pressed',String($('variant').value===value));button.textContent=(choices.find(item=>item.id===value)?.label||labels[value]||record?.title||value)+' · '+(record?.latestVersion?'수집':'미수집');button.onclick=()=>guard(async()=>{if(!saveDraft())return;$('variant').value=value;updateVariants();await loadRecord();});return button;}));
  }
  async function list(){
    const result=await api({action:'list',country:$('country').value,start:$('date').value,days:30});
    state.days=result.days;$('days').replaceChildren(...result.days.map(day=>{
      const button=document.createElement('button');button.className='day';button.type='button';button.setAttribute('aria-current',String(day.date===$('date').value));
      const records=Object.values(day.records||{});button.textContent=day.date+' · '+(records.length?records.length+'개 미사'+(records.some(record=>record.reviewNeeded)?' · 검토 필요':''):'미수집');
      button.onclick=()=>guard(async()=>{if(!saveDraft())return;$('date').value=day.date;updateVariants();await loadRecord();});return button;
    }));updateVariants();
  }
  async function collect(days){
    if(!global.confirm($('country').selectedOptions[0].textContent+' '+$('date').value+'부터 '+days+'일분을 재수집할까요? 기존 버전과 편집본은 유지됩니다.'))return;
    message('수집 작업을 등록하고 있습니다…');const result=await api({action:'collect',country:$('country').value,start:$('date').value,days},'POST');message(result.queued+'개 수집 작업을 등록했습니다. 수집이 끝나면 새 버전을 확인할 수 있습니다.');await runs();
  }
  async function runs(){const result=await api({action:'runs'});const labels={queuing:'등록 중',queued:'대기 중',running:'수집 중',completed:'완료','completed-with-errors':'완료 · 일부 미수집'};$('runs').textContent=result.runs.map(run=>run.start+'부터 '+run.days+'일 · '+(run.done||0)+'/'+(run.planned||run.queued||0)+'개 완료 · '+(labels[run.status]||run.status)+(run.failed?' · 미수집 '+run.failed+'개':'')).join('\n')||'등록된 수집 작업이 없습니다.';}
  async function guard(action){
    if(state.busy)return;
    state.busy=true;$('content-fields').disabled=true;
    const controls=[...document.querySelectorAll('#editor-workspace button,#editor-workspace select,#editor-workspace input')];
    controls.forEach(element=>element.disabled=true);
    try{await action();}catch(error){message(error.message,true);}
    finally{state.busy=false;document.querySelectorAll('#editor-workspace button,#editor-workspace select,#editor-workspace input').forEach(element=>element.disabled=false);$('content-fields').disabled=!state.parsed;}
  }
  $('load').onclick=()=>guard(loadRecord);$('load-version').onclick=()=>guard(()=>loadVersion(Number($('version-history').value)));
  $('cancel-collection').onclick=()=>{state.cancelWait=true;$('cancel-collection').disabled=true;};
  $('load-newer').onclick=()=>guard(()=>loadVersion(state.latestVersion));$('save').onclick=()=>guard(save);$('publish-version').onclick=()=>guard(publish);
  $('older-versions').onclick=()=>guard(async()=>{const before=Math.min(...state.versions.map(version=>version.number));const result=await api({...state.identity,action:'versions',before});versionOptions(result.versions);$('older-versions').hidden=!result.hasMore;});
  $('collect-one').onclick=()=>guard(()=>collect(1));$('collect-range').onclick=()=>guard(()=>collect(30));$('refresh-list').onclick=()=>guard(list);$('refresh-runs').onclick=()=>guard(runs);
  for(const id of ['section-body','citation','liturgy-title'])$(id).addEventListener('input',changed);
  $('liturgy-color').onchange=changed;
  $('apply-json').onclick=()=>guard(async()=>{const parsed=JSON.parse($('advanced-json').value);if(typeof parsed.title!=='string'||!parsed.data||typeof parsed.data!=='object')throw Error('전례명과 data 항목을 확인해 주세요.');state.parsed=content.normalizeParsed(parsed);state.section='';state.dirty=true;renderParsed();renderSources();saveDraft();});
  $('country').onchange=()=>guard(async()=>{if(!saveDraft())return;updateSource();await list();await loadRecord();});
  $('source').onchange=()=>guard(async()=>{updateVariants();await loadRecord();});$('date').onchange=()=>guard(async()=>{await list();await loadRecord();});$('variant').onchange=()=>guard(loadRecord);
  $('restore-draft').onclick=()=>guard(async()=>{const value=JSON.parse(localStorage.getItem(draftKey())||'null');if(!value)throw Error('저장된 임시 편집이 없습니다.');const version=value.baseVersion?await api({...state.identity,action:'version',version:value.baseVersion}):null;state.parsed=content.normalizeParsed(value.parsed);state.loadedVersion=value.baseVersion;state.provenance=version?.provenance||null;state.dirty=true;state.section='';renderParsed();renderSources();message('임시 편집을 복원했습니다.');});
  $('export').onclick=()=>{captureSection();const url=URL.createObjectURL(new Blob([JSON.stringify(state.parsed,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=($('country').selectedOptions[0]?.textContent||'국가')+'_'+$('date').value+'_'+$('source').value+'_v'+state.loadedVersion+'_편집.json';link.click();URL.revokeObjectURL(url);};
  $('export-original').onclick=()=>guard(async()=>{const raw=await api({...state.identity,action:'raw',version:state.loadedVersion});const url=URL.createObjectURL(new Blob([JSON.stringify(raw,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=($('country').selectedOptions[0]?.textContent||'국가')+'_'+$('date').value+'_v'+(raw.version||state.loadedVersion)+'_수집원문.json';link.click();URL.revokeObjectURL(url);});
  global.addEventListener('beforeunload',saveDraft);
  async function authState(){
    const approved=!!global.ordoAdminReview?.isVerified();
    $('editor-gate').hidden=approved;$('editor-workspace').hidden=!approved;
    if(approved&&!state.verified){state.verified=true;const catalog=await api({action:'catalog'});state.languages=Object.fromEntries(Object.entries(catalog.countries).map(([code,entry])=>[code,entry[1]]));$('country').replaceChildren(...Object.entries(catalog.countries).map(([code,entry])=>new Option(entry[0],code)));$('date').value=catalog.today;updateSource();await list();await loadRecord();await runs();}
    if(!approved){state.verified=false;state.generation++;}
  }
  setInterval(()=>guard(authState),1000);
  setInterval(()=>{if(state.verified&&!state.busy&&state.identity)guard(async()=>{const head=await api({...state.identity,action:'head'});if(head.latestVersion!==state.latestVersion||head.publishedVersion!==state.record?.publishedVersion)await refreshRecord();});},20000);
  global.ordoDailyEditor=Object.freeze({state,loadRecord,refreshRecord,loadVersion,save,saveDraft});
  guard(authState);
})(globalThis);
