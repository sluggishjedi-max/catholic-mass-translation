'use strict';
const {digest}=require('./daily-schema');
const OLD='https://ktcgkpv.org/readings/mass-reading';
const NEW='https://kpv.vn/api/liturgical/mass-readings';
const slots=['introit','reading1','reading2','gospel','communion'];
const verifiedSamples=new Map();
function normalized(value,runtime,html=false){
  if(value===null||value===undefined)return '';
  let text=String(value);
  if(html){const node=runtime.window.document.createElement('div');node.innerHTML=text;node.querySelectorAll('sup,script,style').forEach(item=>item.remove());text=node.textContent;}
  return text.normalize('NFKC').toLocaleLowerCase('vi').replace(/[^\p{L}\p{N}]/gu,'');
}
function canonicalChoice(choice,runtime){
  return Object.fromEntries(slots.map(slot=>[slot,(choice[slot]||[]).map(entry=>({
    ref:normalized(entry.INDEXING,runtime),ref2:normalized(slot==='reading1'?String(entry.INDEXING_2||'').split('(')[0].replace(/[Đđ]\s*\..*$/u,''):entry.INDEXING_2,runtime),
    text:normalized(entry.CONTENT,runtime,true),text2:slot==='reading1'?canonicalPsalm(entry.CONTENT_2,runtime):normalized(entry.CONTENT_2,runtime,true)
  }))]));
}
function canonicalPsalm(value,runtime){
  const node=runtime.window.document.createElement('div');node.innerHTML=value||'';
  const responses=[...node.querySelectorAll('.response')].map(element=>{
    element.querySelectorAll('.pre').forEach(label=>label.remove());
    const text=normalized(element.textContent,runtime);element.remove();return text;
  });
  node.querySelectorAll('sup').forEach(element=>element.remove());
  return {response:[...new Set(responses)],verses:normalized(node.textContent,runtime)};
}
function compareChoices(current,old,runtime){
  const a=canonicalChoice(current,runtime),b=canonicalChoice(old,runtime);
  const differences=slots.filter(slot=>digest(a[slot])!==digest(b[slot]));
  return {equal:differences.length===0,differentSlots:differences};
}
async function jsonResponse(response){if(!response.ok)throw Error('source-http-'+response.status);const body=await response.json();if(body.success===false)throw Error('source-unavailable');return body;}
async function resolveKtcg(date,profile,runtime,{equivalence}={}){
  const [year,month,day]=date.split('-');
  const results=await Promise.allSettled([
    runtime.fetch(NEW+'?'+new URLSearchParams({date,profile})).then(jsonResponse),
    runtime.fetch(OLD,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'},body:new URLSearchParams({day:String(+day),month:String(+month),year,seldate:date})}).then(jsonResponse)
  ]);
  const modern=results[0].status==='fulfilled'?results[0].value:null;
  const legacy=results[1].status==='fulfilled'?results[1].value?.data:null;
  if(modern?.date&&modern.date!==date)throw Error('KTCG-current-returned-another-date');
  const oldChoices=legacy?.mass_reading || [];
  if(modern?.primary){
    const selected=runtime.normalizeLegacy(modern);
    const selectedChoices=selected.mass_reading || [];
    const matches=selectedChoices.map(choice=>oldChoices.find(old=>compareChoices(choice,old,runtime).equal));
    const equal=selectedChoices.length>0&&matches.every(Boolean);
    runtime.ktcgComparison={status:equal?'same-content':'different-content',date,profile,currentUrl:NEW,legacyUrl:OLD,selectedProvider:equal?'ktcgkpv.org':'kpv.vn',differentSlots:equal?[]:(oldChoices.length?compareChoices(selectedChoices[0],oldChoices[0],runtime).differentSlots:['missing-legacy'])};
    if(equal){
      const mass=matches.map((choice,index)=>({...choice,kpvVia:selectedChoices[index].kpvVia,kpvCelebrationCode:selectedChoices[index].kpvCelebrationCode}));
      return {...selected,mass_reading:mass,liturgy_reading:[mass[0]],legacyPreferred:true};
    }
    return modern;
  }
  // The current UI limits guest dates. For the legacy site's default southern
  // calendar only, establish equivalence using a same-day, per-section sample.
  // Keep the distinction between a verified source and a per-day comparison.
  if(oldChoices.length&&profile==='VIETNAM_SOUTH'){
    const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
    if(date!==today){
      const cacheKey=today+':'+profile;
      if(!verifiedSamples.has(cacheKey))verifiedSamples.set(cacheKey,(async()=>{
        const before=runtime.snapshots.length;
        try{
          const [y,m,d]=today.split('-');
          const [currentSample,oldSample]=await Promise.all([
            runtime.fetch(NEW+'?'+new URLSearchParams({date:today,profile})).then(jsonResponse),
            runtime.fetch(OLD,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'},body:new URLSearchParams({day:String(+d),month:String(+m),year:y,seldate:today})}).then(jsonResponse)
          ]);
          const converted=runtime.legacyChoice(currentSample.primary);
          return !!oldSample.data?.mass_reading?.some(choice=>compareChoices(converted,choice,runtime).equal);
        }catch{return false;}
        finally{runtime.snapshots.slice(before).forEach(snapshot=>snapshot.verification=true);}
      })());
      const verified=await verifiedSamples.get(cacheKey);
      if(!verified)verifiedSamples.delete(cacheKey);
      if(verified){
        const choice=oldChoices[0],via=choice.date_info?.daily_title?'temporal':'celebration';
        runtime.ktcgComparison={status:'same-source-verified-sample',date,profile,sampleDate:today,currentDateUnavailable:true,currentUrl:NEW,legacyUrl:OLD,selectedProvider:'ktcgkpv.org',perDateCompared:false};
        return {...legacy,kpvProfile:profile,kpvSelectedVia:via,kpvSelectedCelebrationCode:'',legacyPreferred:true};
      }
    }
  }
  // Never infer per-day content equivalence from the publisher name alone.
  runtime.ktcgComparison={status:'current-unavailable',date,profile,currentUrl:NEW,legacyUrl:OLD,legacyAvailable:oldChoices.length>0};
  throw Error('KTCG-current-unavailable-for-comparison');
}
module.exports={resolveKtcg,canonicalChoice,compareChoices};
