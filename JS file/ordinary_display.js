(function(root){
  'use strict';
  const copy=value=>value===undefined?undefined:JSON.parse(JSON.stringify(value));
  const storage=()=>root.ordoMassStorage||(typeof require==='function'?require('./mass_storage_schema'):null);
  const languageField=/^(?:text|rubric|rubricLayout|rubricInset|sp|cit)_[a-z]{2}(?:_ai)?$/u;
  function rows(source,lower){
    const occurrences=new Map();
    return (source||[]).flatMap((row,index)=>{
      if(!row||typeof row!=='object')return [];
      const parts=storage().lineParts(row,lower);
      const metadata=Object.fromEntries(Object.entries(row).filter(([key])=>!languageField.test(key)&&!key.startsWith('__massEditor')&&key!=='__ordinaryPairKey'));
      if(!parts.length){
        if(!row.type&&!row.isDivider)return [];
        return [{...prepare(metadata,lower),__ordinaryPairKey:row.pairKey||(row.optionKey?'option:'+row.optionKey:'structure:'+index),__ordinarySource:true}];
      }
      return parts.map(part=>{
        const saved=row.__massEditorPairKeys?.[part.field]||index+':'+part.kind;
        const segmentKey=part.segment&&row.__massEditorPairKeys?.[part.field+':segment:'+part.segmentIndex];
        const identity=segmentKey||saved.replace(/:(?:text|rubric|cit)$/u,':'+part.kind)+(part.segment?':segment:'+part.segmentIndex:'');
        const count=occurrences.get(identity)||0;occurrences.set(identity,count+1);
        const result={...prepare(metadata,lower),[part.field]:part.text,__ordinarySource:true,__ordinaryPairKey:identity+(count?':occurrence:'+count:''),__ordinaryKinds:{[lower]:part.kind}};
        const inset=row['rubricInset_'+lower];
        if(part.kind==='rubric'&&(inset===true||Array.isArray(inset)&&inset.includes(part.segmentIndex)))result['rubricInset_'+lower]=true;
        if(part.speaker)result['sp_'+lower]=part.speaker;
        return result;
      });
    });
  }
  function prepare(value,lower){
    if(Array.isArray(value))return value.some(row=>row&&Object.keys(row).some(key=>/^(?:text|rubric|cit)_[a-z]{2}$/u.test(key)))?rows(value,lower):value.map(item=>prepare(item,lower));
    if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,child])=>[key,prepare(child,lower)]));
    return value;
  }
  // Pair only anchors which occur in the same order in both edited sources.
  // Conflicting anchors remain separate rows; neither language is reordered.
  function mergeRows(left,right){
    const a=left||[],b=right||[],table=Array.from({length:a.length+1},()=>new Uint16Array(b.length+1));
    for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)table[i][j]=a[i].__ordinaryPairKey===b[j].__ordinaryPairKey?table[i+1][j+1]+1:Math.max(table[i+1][j],table[i][j+1]);
    const output=[];let i=0,j=0;
    while(i<a.length||j<b.length){
      if(i<a.length&&j<b.length&&a[i].__ordinaryPairKey===b[j].__ordinaryPairKey){output.push(merge(a[i],b[j]));i++;j++;}
      else if(i<a.length&&(j>=b.length||table[i+1][j]>=table[i][j+1]))output.push(copy(a[i++]));
      else output.push(copy(b[j++]));
    }
    return output;
  }
  function merge(left,right){
    if(Array.isArray(left)||Array.isArray(right)){
      const a=Array.isArray(left)?left:[],b=Array.isArray(right)?right:[];
      if(a.some(row=>row?.id)||b.some(row=>row?.id)){const output=a.map(copy);for(const item of b){const at=output.findIndex(row=>row.id===item.id);if(at<0)output.push(copy(item));else output[at]=merge(output[at],item);}return output;}
      if([...a,...b].some(row=>row?.__ordinaryPairKey))return mergeRows(a,b);
      return Array.from({length:Math.max(a.length,b.length)},(_,index)=>merge(a[index],b[index]));
    }
    if((left&&typeof left==='object')||(right&&typeof right==='object')){const output=copy(left)||{};for(const[key,value]of Object.entries(right||{}))output[key]=key in output?merge(output[key],value):copy(value);return output;}
    return right===undefined?left:right;
  }
  const api=Object.freeze({prepare,rows,mergeRows,merge});
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ordoOrdinaryDisplay=api;
})(globalThis);
