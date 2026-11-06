'use strict';
// One-time data authoring. The application never invokes these edition profiles
// or fills text from reference files while rendering an edited ordinary.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),mass=require('./mass-data-editor'),alignment=require('../JS file/ordinary_alignment'),repairs=require('../JS file/ordinary_source_repairs'),storage=require('./mass-storage-schema'),{replaceDataBlocks}=require('./ordinary-data-blocks');
const root=path.resolve(__dirname,'..'),copy=value=>JSON.parse(JSON.stringify(value)),seasons={ordinary:[14,33],christmas:[33,54],epiphany:[54,76],easter:[76,99],ascension:[99,121],pentecost:[121,142]},hanc={ordinary:27,christmas:48,epiphany:70,easter:91,ascension:115,pentecost:136};
const labels={kr:['연중 시기','성탄','주님 공현','부활','주님 승천','성령 강림'],vn:['Thường niên','Giáng Sinh','Hiển Linh','Phục Sinh','Thăng Thiên','Hiện Xuống'],en:['Ordinary Time','Christmas','Epiphany','Easter','Ascension','Pentecost'],jp:['年間','主の降誕','主の公現','復活','主の昇天','聖霊降臨'],la:['Per annum','Nativitas Domini','Epiphania','Pascha','Ascensio Domini','Pentecostes'],zh:['常年期','聖誕','主顯節','復活','耶穌升天','聖神降臨'],it:['Tempo ordinario','Natale','Epifania','Pasqua','Ascensione','Pentecoste'],pt:['Tempo Comum','Natal','Epifania','Páscoa','Ascensão','Pentecostes'],es:['Tiempo Ordinario','Navidad','Epifanía','Pascua','Ascensión','Pentecostés'],de:['Im Jahreskreis','Weihnachten','Erscheinung des Herrn','Ostern','Christi Himmelfahrt','Pfingsten']};
const plain=value=>String(value||'').replace(/<[^>]*>/gu,' ').replace(/\s+/gu,' ').trim(),normalized=value=>plain(value).normalize('NFKC').replace(/[^\p{L}\p{N}]/gu,'').toLowerCase(),text=(row,lower)=>storage.lineParts(row,lower).map(part=>part.text).join(' ');
function tag(rows,lower,stage){return rows.map((original,index)=>{const row=copy(original);row.__ordinaryStage=stage;row.__massEditorPairKeys=Object.fromEntries(storage.lineParts(row,lower).map(part=>[part.field,'canon:'+stage+':'+index+':'+part.kind]));return row;});}
function proper(options,lower,control=true){return{type:'optionBlock',pairKey:'canon:'+(control?'communicantes':'hanc_igitur')+':choice',optionKey:'roman_canon_season',defaultOption:'ordinary',showControl:control,label:{[lower]:labels[lower][0]},options:Object.fromEntries(Object.keys(seasons).map((key,index)=>[key,{label:{[lower]:labels[lower][index]},lines:options[key]}]))};}
function legacyBoundaries(rows,lower,reference){
 if(rows.length===207||rows.length===209)return index=>index;
 const offsets=source=>{let total=0;return[0,...source.map(row=>total+=normalized(text(row,lower)).length)];},a=offsets(reference),b=offsets(rows);
 assert.equal(a.at(-1),b.at(-1),'A changed national Canon needs its own source profile');
 assert.equal(normalized(reference.map(row=>text(row,lower)).join(' ')),normalized(rows.map(row=>text(row,lower)).join(' ')),'A changed national Canon cannot inherit another edition');
 return index=>{const result=b.indexOf(a[index]);assert(result>=0,'A source sentence crosses a proper boundary');return result;};
}
function canon(rows,lower,country,reference){
 const profile=alignment.CANON_PROFILES[country];
 if(!profile){
  const boundary=legacyBoundaries(rows,lower,reference),options={},hancOptions={};for(const[key,[start,end]]of Object.entries(seasons)){options[key]=tag(rows.slice(boundary(start),boundary(hanc[key])),lower,'communicantes');hancOptions[key]=tag(rows.slice(boundary(hanc[key]),boundary(end)),lower,'hanc_igitur');}
  const before=tag(rows.slice(0,boundary(8)),lower,'te_igitur').concat(tag(rows.slice(boundary(8),boundary(14)),lower,'living'));
  const starts=[142,145,155,165,166,167,168,169,176,181,187,193,203],stages=['quam_oblationem','bread','cup','mystery_invitation','mystery_a','mystery_b','mystery_c','anamnesis','supra_quae','supplices','departed','nobis_quoque','per_quem'],after=[];
  for(let i=0;i<starts.length;i++){const from=starts[i],to=starts[i+1]??reference.length;after.push(...tag(rows.slice(boundary(from),to>=reference.length?rows.length:boundary(to)),lower,stages[i]));}
  return before.concat(proper(options,lower),proper(hancOptions,lower,false),after);
 }
 const slice=range=>{const pieces=Array.isArray(range[0])?range:[range];return pieces.flatMap(([start,end])=>rows.slice(start,end));},output=[];
 for(let index=0;index<profile.stages.length;index++){
  const stage=alignment.CANON_STAGES[index],base=profile.stages[index];
  if(index===2||index===3){const options={};for(const key of Object.keys(seasons)){let range=base;if(index===2&&profile.proper?.[key])range=[...(profile.prefix?[profile.prefix]:[]),profile.proper[key],...(profile.common?[profile.common]:[])];if(index===3&&profile.hanc?.[key])range=profile.hanc[key];if(index===3&&key==='easter'&&profile.easterHanc)range=profile.easterHanc;options[key]=tag(slice(range),lower,stage);}output.push(proper(options,lower,index===2));}
  else output.push(...tag(slice(base),lower,stage));
 }
 return output;
}
function responseRow(row,lower){return /^(?:아멘|Amen|Amém|阿們|アーメン)[.!。\s]*$/iu.test(plain(row?.['text_'+lower]));}
function ending(rows,lower,entry){const last=rows.findIndex(row=>responseRow(row,lower));if(last>=0)return rows.slice(0,last+1);const response=(Array.isArray(entry.amen)?entry.amen:[]).find(row=>responseRow(row,lower));return response?rows.concat(copy(response)):rows;}
function blessingData(){const sandbox={};sandbox.globalThis=sandbox;vm.createContext(sandbox);for(const file of ['korean_blessing_data.js','english_blessing_data.js','multilingual_blessing_data.js'])vm.runInContext(fs.readFileSync(path.join(root,'JS file',file),'utf8'),sandbox);return{KR:sandbox.koreanBlessingData,EN:sandbox.englishBlessingData,...sandbox.missalBlessingData};}
function storedBlessings(module,data){const lower=(module.ordinaryLanguage||module.language).toLowerCase(),source=data[lower.toUpperCase()],entry=module.ordinary.find(item=>item.id.endsWith(' blessing'));if(!entry?.variants?.C||!source)return[];const titles={kr:'장엄강복',vn:'Phép lành trọng thể',en:'Solemn Blessing',jp:'荘厳な祝福',la:'Benedictio sollemnis',zh:'隆重祝福',it:'Benedizione solenne',pt:'Bênção solene',es:'Bendición solemne',de:'Feierlicher Schlusssegen'},changes=[];
 for(const[key,value]of Object.entries(source.solemnBlessings||{})){if(entry.variants['solemn_'+key])continue;const lines=copy(entry.variants.C.lines.slice(0,3));for(const[at,raw]of value.lines.entries()){const response=/^(?:[◎○]|R\.)/u.test(raw),part=at>=value.lines.length-2?'ending:'+(value.lines.length-at):'petition:'+at;lines.push({['text_'+lower]:raw.replace(/^(?:[╋＋✚◎○]\s*|R\.\s*)/u,''),['sp_'+lower]:lower==='kr'?(response?'◎':'✚'):(response?{vn:'CĐ.',en:'ALL',jp:'会衆',la:'P.',it:'T.',pt:'T.',es:'R.',de:'A.',zh:'眾'}[lower]:{vn:'LM.',en:'P.',jp:'司祭',la:'S.',it:'S.',pt:'P.',es:'S.',de:'P.',zh:'主祭'}[lower]),__massEditorPairKeys:{['text_'+lower]:'blessing:'+key+':'+part+':text'}});}changes.push({entryId:entry.id,relativePath:['variants','solemn_'+key],value:{label:{[lower]:(titles[lower]||titles.en)+' - '+(value.label||key)},lines}});}
 if(lower==='kr')for(const[key,value]of Object.entries(source.lentenPrayers||{})){if(entry.variants['people_'+key])continue;const lines=copy(entry.variants.C.lines.slice(0,3)).concat((value.lines||[]).map(text=>({text_kr:text,sp_kr:'✚'})),[{text_kr:'아멘.',sp_kr:'◎'}],copy(entry.variants.C.lines.slice(4)));changes.push({entryId:entry.id,relativePath:['variants','people_'+key],value:{label:{kr:'백성을 위한 기도 - '+(value.title||key)},lines}});}
 return changes;
}
function repairRubricTypes(value,lower,country){
 if(!value||typeof value!=='object'||['kr','vn'].includes(lower))return 0;
 if(Array.isArray(value))return value.reduce((sum,item)=>sum+repairRubricTypes(item,lower,country),0);
 let count=0;const key='text_'+lower,raw=value[key];
 if(typeof raw==='string'&&raw.trim()){
  const cleaned=alignment.cleanSpoken(alignment.nationalSpoken(raw,country,-1),lower);
  if(cleaned!==raw.trim()){
   if(!cleaned.trim()){
    value['rubric_'+lower]=[value['rubric_'+lower],raw].filter(Boolean).join('\n');delete value[key];delete value['sp_'+lower];
    const pair=value.__massEditorPairKeys?.[key];if(pair){delete value.__massEditorPairKeys[key];value.__massEditorPairKeys['rubric_'+lower]=pair.replace(/:text$/u,':rubric');}count++;
   }else{const at=raw.indexOf(cleaned);if(at>=0){const prefix=raw.slice(0,at),suffix=raw.slice(at+cleaned.length);value[key]=(prefix.trim()?'<span class="rubric">'+prefix+'</span>':'')+cleaned+(suffix.trim()?'<span class="rubric">'+suffix+'</span>':'');storage.canonicalLine(value);count++;}}
  }
 }
 for(const[key,child]of Object.entries(value))if(!key.startsWith('__')&&child&&typeof child==='object')count+=repairRubricTypes(child,lower,country);
 return count;
}
function prepare(sources=mass.readCountryMassSources()){
 const loaded=mass.runCountryMassSources(sources),reference=loaded.countries.US.ordinary.find(item=>item.forms).forms['1'],data=blessingData(),changes=[];
 for(const source of sources){const module=loaded.countries[source.jurisdiction],original=module.ordinary.find(item=>item.forms);if(original.ordinarySourceLayoutVersion===1){if(!original.isEucharist)changes.push({country:source.jurisdiction,blocks:[{entryId:original.id,relativePath:['isEucharist'],value:true}]});continue;}const entry=copy(original),lower=(module.ordinaryLanguage||module.language).toLowerCase();repairs.repair(entry,lower);const blocks=[],endings={},frames={};
  for(const key of ['1','2','3','4']){const raw=entry.forms[key],base=['2','3'].includes(key)?alignment.baseFormRows(raw,lower,source.jurisdiction,key):raw,body=alignment.trimDoxology(base,lower,source.jurisdiction);if(body.length<base.length)endings[key]=ending(base.slice(body.length),lower,entry);const rows=key==='1'?canon(body,lower,source.jurisdiction,reference):body;blocks.push({entryId:entry.id,relativePath:['forms',key],value:rows});frames[key]={sections:key==='4'?['dialogue','form','ending']:['dialogue','preface','sanctus','form','ending']};}
  blocks.push({entryId:entry.id,relativePath:['formEndings'],value:endings},{entryId:entry.id,relativePath:['formFrames'],value:frames},{entryId:entry.id,relativePath:['isEucharist'],value:true},{entryId:entry.id,relativePath:['ordinarySourceLayoutVersion'],value:1});
  if(!Array.isArray(entry.amen)||!entry.amen.length){const common=endings['1']||[];if(common.length)blocks.push({entryId:entry.id,relativePath:['amen'],value:common});}
  blocks.push(...storedBlessings(module,data));const typedInstructionsCorrected=blocks.reduce((sum,block)=>sum+repairRubricTypes(block.value,lower,source.jurisdiction),0);changes.push({country:source.jurisdiction,blocks,typedInstructionsCorrected});
 }
 const next=sources.map(source=>{const change=changes.find(item=>item.country===source.jurisdiction);return change?replaceDataBlocks(source,change.blocks):source;});mass.runCountryMassSources(next);return{sources:next,changes};
}
function main(){const original=mass.readCountryMassSources(),result=prepare(original);if(process.argv.includes('--check')){assert.equal(result.changes.length,0,'Ordinary source choices must be materialized in JS datasets');console.log('All ordinary choices are stored in editable country JS data.');return;}if(!process.argv.includes('--write')){console.log(JSON.stringify(result.changes.map(item=>({country:item.country,blocks:item.blocks.length})),null,2));return;}const backup=path.join(root,'tmp','ordinary-source-layout-backup-20261106');fs.mkdirSync(backup,{recursive:true});for(const[at,source]of result.sources.entries()){if(source.code===original[at].code)continue;assert.equal(fs.readFileSync(source.path,'utf8'),original[at].code,'Concurrent source edit: '+source.path);const target=path.join(backup,path.relative(root,source.path));fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,original[at].code);fs.writeFileSync(source.path,source.code);}fs.writeFileSync(path.join(root,'tmp','ordinary-source-data-changes-20261106.json'),JSON.stringify(result.changes,null,2));console.log(JSON.stringify({countries:result.changes.length,backup,changesSaved:true}));}
if(require.main===module)try{main();}catch(error){console.error(error.stack);process.exitCode=1;}
module.exports={prepare,canon,storedBlessings};
