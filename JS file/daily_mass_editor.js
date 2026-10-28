(function(global){
  'use strict';
  const endpoint=global.ORDO_DAILY_ADMIN_ENDPOINT||'https://asia-northeast3-ordinary-mass-app.cloudfunctions.net/dailyMassAdmin';
  const $=id=>document.getElementById(id),copy=value=>JSON.parse(JSON.stringify(value));
  const sectionNames={entrance:'입당송',collect:'본기도',reading1:'제1독서',psalm:'화답송',reading2:'제2독서',gospel_accl:'복음 환호송',gospel:'복음',prayer_offerings:'예물 기도',preface:'감사송',communion:'영성체송',prayer_after:'영성체 후 기도'};
  const state={verified:false,identity:null,record:null,parsed:null,loadedVersion:0,latestVersion:0,offeredVersion:0,section:'',dirty:false,busy:false,generation:0,days:[],versions:[],cancelWait:false};
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
    const previous=state.parsed.data[state.section],body=$('section-body').value;
    const previousText=typeof previous==='string'?previous:Array.isArray(previous?.lines)?previous.lines.map(line=>line.text||'').join('\n'):previous?.text||'';
    if(typeof previous==='string'&&!$('citation').value)state.parsed.data[state.section]=body;
    else{
      const value=previous&&typeof previous==='object'?copy(previous):{};
      if(body!==previousText){value.text=body;if(Array.isArray(value.lines))value.lines=body.split('\n').map((text,index)=>({...value.lines[index]||{sp:'',kind:'body'},text}));}
      if($('citation').value||value.citation||value.cit)value[Object.hasOwn(value,'cit')?'cit':'citation']=$('citation').value;
      state.parsed.data[state.section]=value;
    }
    state.parsed.title=$('liturgy-title').value;state.parsed.color=$('liturgy-color').value;
  }
  function sectionFields(){
    const value=state.parsed?.data[state.section];
    $('section-body').value=typeof value==='string'?value:Array.isArray(value?.lines)?value.lines.map(line=>line.text||'').join('\n'):value?.text||'';
    $('citation').value=value&&typeof value==='object'?(value.cit||value.citation||''):'';
  }
  function renderParsed(){
    const parsed=state.parsed;$('content-fields').disabled=!parsed||state.busy;
    $('liturgy-title').value=parsed?.title||'';$('liturgy-color').value=parsed?.color||'';
    const sections=[...new Set([...Object.keys(parsed?.data||{}),...Object.keys(sectionNames)])];
    $('section').replaceChildren(...sections.map(value=>new Option(sectionNames[value]||value,value)));
    if(!sections.includes(state.section))state.section=sections[0]||'';
    $('section').value=state.section;sectionFields();
    $('advanced-json').value=parsed?JSON.stringify(parsed,null,2):'';
    $('draft-state').textContent=state.dirty?'편집 중 · 이 브라우저에 임시 저장됩니다.':'';
  }
  function saveDraft(){
    if(!state.parsed||!state.dirty)return true;
    captureSection();
    try{localStorage.setItem(draftKey(),JSON.stringify({identity:state.identity,parsed:state.parsed,baseVersion:state.loadedVersion,savedAt:new Date().toISOString()}));$('draft-state').textContent='임시 저장됨 · v'+state.loadedVersion+'에서 편집 중';return true;}
    catch{message('임시 저장 공간이 부족합니다. 현재 편집본을 다운로드한 후 다른 버전을 불러와 주세요.',true);return false;}
  }
  function changed(){state.dirty=true;saveDraft();$('advanced-json').value=JSON.stringify(state.parsed,null,2);}
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
    state.parsed=copy(version.parsed);state.loadedVersion=version.number;state.dirty=false;state.section='';
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
    state.generation++;state.identity=inputs();state.parsed=null;state.record=null;state.loadedVersion=0;state.latestVersion=0;state.offeredVersion=0;state.dirty=false;state.section='';state.versions=[];renderParsed();
    const result=await refreshRecord({offer:false});
    if(result?.record?.publishedVersion){await loadVersion(result.record.publishedVersion);await offerNewer();}
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
          if(result?.record?.publishedVersion){await loadVersion(result.record.publishedVersion);await offerNewer();}
          else{
            const reason=result?.record?.lastError||job.lastError||job.results?.find(item=>item.variant===identity.variant)?.error||'';
            const explanation=/only serves its current/.test(reason)?'이 출처는 요청한 날짜의 자료를 아직 제공하지 않습니다.':/incomplete-source/.test(reason)?'출처에서 필요한 독서 본문을 확인하지 못했습니다.':'출처에 자료가 아직 없거나 일시적으로 연결할 수 없습니다.';
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
    const options=$('country').value==='VN'?[['hanoi','하노이 대교구'],['ktcg_south','KTCG · 남부'],['ktcg_north','KTCG · 북부']]:[['official','국가 공식 출처']];
    $('source').replaceChildren(...options.map(([value,label])=>new Option(label,value)));
    if(options.some(([value])=>value===previous))$('source').value=previous;
  }
  function updateVariants(){
    const day=state.days.find(item=>item.date===$('date').value),source=$('source').value;
    const variants=[...new Set([$('date').value.endsWith('-11-02')?'first':'day',...Object.keys(day?.records||{}).filter(id=>id.startsWith(source+'__')).map(id=>id.split('__')[1])])];
    const labels={day:'당일 미사',first:'위령의 날 첫째 미사',second:'위령의 날 둘째 미사',third:'위령의 날 셋째 미사'};
    if($('date').value.endsWith('-11-02'))variants.push(...['second','third'].filter(value=>!variants.includes(value)));
    const previous=$('variant').value;$('variant').replaceChildren(...variants.map(value=>new Option(labels[value]||value,value)));
    if(variants.includes(previous))$('variant').value=previous;
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
    finally{state.busy=false;controls.forEach(element=>element.disabled=false);$('content-fields').disabled=!state.parsed;}
  }
  $('load').onclick=()=>guard(loadRecord);$('load-version').onclick=()=>guard(()=>loadVersion(Number($('version-history').value)));
  $('cancel-collection').onclick=()=>{state.cancelWait=true;$('cancel-collection').disabled=true;};
  $('load-newer').onclick=()=>guard(()=>loadVersion(state.latestVersion));$('save').onclick=()=>guard(save);$('publish-version').onclick=()=>guard(publish);
  $('older-versions').onclick=()=>guard(async()=>{const before=Math.min(...state.versions.map(version=>version.number));const result=await api({...state.identity,action:'versions',before});versionOptions(result.versions);$('older-versions').hidden=!result.hasMore;});
  $('collect-one').onclick=()=>guard(()=>collect(1));$('collect-range').onclick=()=>guard(()=>collect(30));$('refresh-list').onclick=()=>guard(list);$('refresh-runs').onclick=()=>guard(runs);
  $('section').onchange=()=>{captureSection();state.section=$('section').value;sectionFields();$('advanced-json').value=JSON.stringify(state.parsed,null,2);};
  for(const id of ['section-body','citation','liturgy-title','liturgy-color'])$(id).addEventListener('input',changed);
  $('apply-json').onclick=()=>guard(async()=>{const parsed=JSON.parse($('advanced-json').value);if(typeof parsed.title!=='string'||!parsed.data||typeof parsed.data!=='object')throw Error('전례명과 data 항목을 확인해 주세요.');state.parsed=parsed;state.section='';state.dirty=true;renderParsed();saveDraft();});
  $('country').onchange=()=>guard(async()=>{if(!saveDraft())return;updateSource();await list();await loadRecord();});
  $('source').onchange=()=>guard(async()=>{updateVariants();await loadRecord();});$('date').onchange=()=>guard(async()=>{await list();await loadRecord();});$('variant').onchange=()=>guard(loadRecord);
  $('restore-draft').onclick=()=>guard(async()=>{const value=JSON.parse(localStorage.getItem(draftKey())||'null');if(!value)throw Error('저장된 임시 편집이 없습니다.');state.parsed=value.parsed;state.loadedVersion=value.baseVersion;state.dirty=true;state.section='';renderParsed();message('임시 편집을 복원했습니다.');});
  $('export').onclick=()=>{captureSection();const url=URL.createObjectURL(new Blob([JSON.stringify(state.parsed,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=($('country').selectedOptions[0]?.textContent||'국가')+'_'+$('date').value+'_'+$('source').value+'_v'+state.loadedVersion+'_편집.json';link.click();URL.revokeObjectURL(url);};
  $('export-original').onclick=()=>guard(async()=>{const raw=await api({...state.identity,action:'raw',version:state.loadedVersion});const url=URL.createObjectURL(new Blob([JSON.stringify(raw,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=($('country').selectedOptions[0]?.textContent||'국가')+'_'+$('date').value+'_v'+(raw.version||state.loadedVersion)+'_수집원문.json';link.click();URL.revokeObjectURL(url);});
  global.addEventListener('beforeunload',saveDraft);
  async function authState(){
    const approved=!!global.ordoAdminReview?.isVerified();
    $('editor-gate').hidden=approved;$('editor-workspace').hidden=!approved;
    if(approved&&!state.verified){state.verified=true;const catalog=await api({action:'catalog'});$('country').replaceChildren(...Object.entries(catalog.countries).map(([code,entry])=>new Option(entry[0],code)));$('date').value=catalog.today;updateSource();await list();await loadRecord();await runs();}
    if(!approved){state.verified=false;state.generation++;}
  }
  setInterval(()=>guard(authState),1000);
  setInterval(()=>{if(state.verified&&!state.busy&&state.identity)guard(async()=>{const head=await api({...state.identity,action:'head'});if(head.latestVersion!==state.latestVersion||head.publishedVersion!==state.record?.publishedVersion)await refreshRecord();});},20000);
  global.ordoDailyEditor=Object.freeze({state,loadRecord,refreshRecord,loadVersion,save,saveDraft});
  guard(authState);
})(globalThis);
