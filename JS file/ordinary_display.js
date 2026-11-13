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
        const identity=index+':'+part.kind+(part.segment?':segment:'+part.segmentIndex:'');
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
  // Sentence rows are shown in the editor's stored order. Editing IDs never
  // choose their position. Explicit option containers keep their own rows.
  function mergeRows(left,right){
    const a=left||[],b=right||[],output=[];
    const control=row=>row?.optionKey||row?.type==='optionBlock'||row?.isDivider;
    const key=row=>control(row)?row.pairKey||row.optionKey||'divider:'+row.isDivider:'';
    const append=(x,y)=>{let i=0,j=0;while(i<x.length||j<y.length){
      if(i>=x.length){output.push(copy(y[j++]));continue;}
      if(j>=y.length){output.push(copy(x[i++]));continue;}
      if(control(x[i])||control(y[j])){
        if(control(x[i])&&control(y[j])&&key(x[i])===key(y[j]))output.push(merge(x[i++],y[j++]));
        else if(control(x[i]))output.push(copy(x[i++]));
        else output.push(copy(y[j++]));
      }else output.push(merge(x[i++],y[j++]));
    }};
    let i=0,j=0;
    while(i<a.length||j<b.length){
      let ai=-1,bj=-1;
      for(let index=i;index<a.length;index++){if(!control(a[index]))continue;const match=b.findIndex((row,at)=>at>=j&&control(row)&&key(row)===key(a[index]));if(match>=0){ai=index;bj=match;break;}}
      if(ai<0){append(a.slice(i),b.slice(j));break;}
      append(a.slice(i,ai),b.slice(j,bj));output.push(merge(a[ai],b[bj]));i=ai+1;j=bj+1;
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
