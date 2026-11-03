const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const acorn=require('acorn'),mass=require('./mass-data-editor'),{canonicalMassEntry}=require('./mass-storage-schema');
function patches(source,ordinary){
 const edits=[];
 const literal=node=>node.type==='Literal'||node.type==='BinaryExpression'&&node.operator==='+'&&literal(node.left)&&literal(node.right)||node.type==='TemplateLiteral'&&!node.expressions.length;
 const walk=node=>{
  if(!node||typeof node!=='object')return;
  if(node.type==='VariableDeclarator'&&node.id?.name==='ordinaryEditorOverrides'&&node.init?.type==='ArrayExpression'){
   let entries=vm.runInNewContext(source.slice(node.init.start,node.init.end));const blocks=new Map();
   for(const entry of entries){
    if(!entry.path||!/^text_[a-z]{2}$/u.test(entry.path.at(-1))||typeof entry.value!=='string')continue;
    const probe={[entry.path.at(-1)]:entry.value};if(JSON.stringify(canonicalMassEntry(probe))===JSON.stringify(probe))continue;
    const index=entry.path[0],relativePath=entry.path.slice(1,-2),prefix=entry.path.slice(0,-2),item=canonicalMassEntry(ordinary[index]);
    const rows=relativePath.reduce((value,key)=>value[key],item);assert(Array.isArray(rows));
    const key=JSON.stringify(prefix),block=blocks.get(key)||{prefix,entryId:item.id,relativePath,rows,rowPrefixes:[]};
    block.rowPrefixes.push(entry.path.slice(0,-1));blocks.set(key,block);
   }
   entries=entries.filter(entry=>!Array.from(blocks.values()).some(block=>entry.path&&block.rowPrefixes.some(prefix=>prefix.every((part,index)=>entry.path[index]===part))||entry.replace?.entryId===block.entryId&&JSON.stringify(entry.replace.relativePath)===JSON.stringify(block.relativePath)));
   for(const {entryId,relativePath,rows}of blocks.values())entries.push({replace:{entryId,relativePath,rows}});
   entries=canonicalMassEntry(entries);
   const original=vm.runInNewContext(source.slice(node.init.start,node.init.end));
   if(JSON.stringify(entries)!==JSON.stringify(original))edits.push({start:node.init.start,end:node.init.end,text:JSON.stringify(entries,null,2),replacement:true});
   return;
  }
  if(node.type==='ObjectExpression'){
   const props=Object.fromEntries(node.properties.filter(item=>item.type==='Property').map(item=>[item.key.name||item.key.value,item.value]));
   const legacy=props.id&&props.variants?.type==='ObjectExpression'&&props.variants.properties.some(item=>(item.key.name||item.key.value)==='lines'&&item.value.type==='ArrayExpression');
   const marked=!props.source&&!props.pageRange&&Object.entries(props).some(([key,value])=>/^text_[a-z]{2}$/u.test(key)&&literal(value)&&source.slice(value.start,value.end).includes('rubric'));
   if(legacy||marked){
    const entry=vm.runInNewContext('('+source.slice(node.start,node.end)+')');
    const canonical=canonicalMassEntry(entry);if(JSON.stringify(entry)===JSON.stringify(canonical))return;
    const indent=/^\s*/u.exec(source.slice(source.lastIndexOf('\n',node.start)+1,node.start))[0];
    const text=JSON.stringify(canonical,null,2).split('\n').map((line,index)=>index?indent+line:line).join('\n');
    edits.push({start:node.start,end:node.end,text});return;
   }
  }
  for(const value of Object.values(node))if(Array.isArray(value))value.forEach(walk);else if(value&&typeof value==='object')walk(value);
 };
 walk(acorn.parse(source,{ecmaVersion:'latest'}));return edits;
}
async function firebaseMigration(check){
 const base='https://firestore.googleapis.com/v1/projects/ordinary-mass-app/databases/(default)/documents';
 const request=async(url,body)=>{
  const response=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(65000)});
  const result=await response.json();if(!response.ok)throw Error(JSON.stringify(result));return result;
 };
 const decode=value=>{
  if(value.mapValue)return Object.fromEntries(Object.entries(value.mapValue.fields||{}).map(([key,item])=>[key,decode(item)]));
  if(value.arrayValue)return(value.arrayValue.values||[]).map(decode);
  if('stringValue'in value)return value.stringValue;if('booleanValue'in value)return value.booleanValue;
  if('nullValue'in value)return null;if('integerValue'in value)return Number(value.integerValue);if('doubleValue'in value)return value.doubleValue;
  return {__firestoreTypedValue:value};
 };
 const encode=value=>{
  if(value===null)return {nullValue:null};if(typeof value==='string')return {stringValue:value};if(typeof value==='boolean')return {booleanValue:value};
  if(typeof value==='number')return Number.isInteger(value)?{integerValue:String(value)}:{doubleValue:value};
  if(Array.isArray(value))return{arrayValue:{values:value.map(encode)}};if(value.__firestoreTypedValue)return value.__firestoreTypedValue;
  return{mapValue:{fields:Object.fromEntries(Object.entries(value).map(([key,item])=>[key,encode(item)]))}};
 };
 const results=await request(base+':runQuery',{structuredQuery:{from:[{collectionId:'order_of_mass'}]}});
 const docs=results.filter(item=>item.document).map(item=>item.document);
 const countries=new Set(docs.map(doc=>doc.fields.jurisdiction?.stringValue));assert(countries.size>=17,'The query returned an incomplete country corpus');
 const changed=[],writes=[];
 for(const doc of docs){
  const before=decode({mapValue:{fields:doc.fields}}),after=canonicalMassEntry(before);
  const keys=[...new Set([...Object.keys(before),...Object.keys(after)])].filter(key=>JSON.stringify(before[key])!==JSON.stringify(after[key]));
  if(!keys.length)continue;changed.push(doc);
  writes.push({update:{name:doc.name,fields:Object.fromEntries(keys.filter(key=>key in after).map(key=>[key,encode(after[key])]))},updateMask:{fieldPaths:keys},currentDocument:{updateTime:doc.updateTime}});
 }
 if(check){assert.equal(changed.length,0,'Firestore still contains noncanonical instruction storage');console.log(JSON.stringify({firebaseCountries:countries.size,documents:docs.length,noncanonical:0}));return;}
 if(writes.length){
  const backup=path.resolve(__dirname,'../tmp/ordinary-storage-'+Date.now()+'.json');fs.mkdirSync(path.dirname(backup),{recursive:true});fs.writeFileSync(backup,JSON.stringify(changed,null,2));
  for(let start=0;start<writes.length;start+=400)await request(base+':commit',{writes:writes.slice(start,start+400)});
 }
 console.log(JSON.stringify({firebaseCountries:countries.size,documents:docs.length,migrated:writes.length}));
 await firebaseMigration(true);
}
async function main(){
 const check=process.argv.includes('--check'),sources=mass.readCountryMassSources();
 const before=mass.runCountryMassSources(sources).registry;
 const next=sources.map(source=>{
  const edits=patches(source.code,before[source.jurisdiction].ordinary);if(check)assert.equal(edits.length,0,source.jurisdiction+' still has legacy instruction storage');
  let code=source.code;for(const edit of edits.sort((a,b)=>b.start-a.start))code=code.slice(0,edit.start)+edit.text+code.slice(edit.end);
  if(edits.some(edit=>edit.replacement))code=mass.ensureBlockReplacementSupport(code);
  return {...source,code,changes:edits.length};
 });
 const after=mass.runCountryMassSources(next).registry;
 for(const [country,module] of Object.entries(before))assert.deepEqual(JSON.parse(JSON.stringify(after[country].ordinary)),JSON.parse(JSON.stringify(module.ordinary.map(entry=>canonicalMassEntry(entry)))),country+' migration changed content');
 if(!check)for(const source of next)if(source.changes)fs.writeFileSync(source.path,source.code);
 console.log(JSON.stringify({countries:Object.keys(after).length,sourceFilesChanged:next.filter(source=>source.changes).length,canonicalInstructions:true}));
 if(process.argv.includes('--firebase'))await firebaseMigration(check);
}
if(require.main===module)main().catch(error=>{console.error(error);process.exitCode=1;});
module.exports={patches};
