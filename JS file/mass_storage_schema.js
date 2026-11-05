(function(root){
  'use strict';
  const clone=value=>JSON.parse(JSON.stringify(value));
  const inline=()=>/<span\b[^>]*\bclass=["'][^"']*\brubric\b[^"']*["'][^>]*>([\s\S]*?)<\/span>/giu;
  const chineseActions=new Set(['合掌','伸手','舉目向上','在祭餅和聖爵上劃十字','合掌默禱片刻,伸手','雙手拿祭餅,略舉起','雙手拿聖爵,略舉起','合掌為求主垂念的人默禱片刻,然後,伸手','合掌,對祭餅及聖爵劃十字','合掌,對祭餅及聖爵畫十字']);
  function merge(left,right){
    if(Array.isArray(left)||Array.isArray(right))return Array.from({length:Math.max(left?.length||0,right?.length||0)},(_,index)=>merge(left?.[index],right?.[index]));
    const l=left&&typeof left==='object',r=right&&typeof right==='object';
    if(l||r){const result={...(l?left:{})};for(const[key,value]of Object.entries(r?right:{}))result[key]=merge(result[key],value);return result;}
    return right===undefined?left:right;
  }
  function visit(value,operation){
    if(!value||typeof value!=='object')return;
    operation(value);
    for(const child of Object.values(value))if(Array.isArray(child))child.forEach(item=>visit(item,operation));else if(child&&typeof child==='object')visit(child,operation);
  }
  function canonicalLine(line){
    for(const[key,sourceText]of Object.entries(line)){
      const match=/^text(_[a-z]{2})?$/u.exec(key);if(!match||typeof sourceText!=='string')continue;
      let text=sourceText;
      if(key==='text_zh')text=text.replace(/<span\b[^>]*\bclass=["'][^"']*\brubric\b[^"']*["'][^>]*>[\s\S]*?<\/span>|[（(]([^()（）]+)[）)]/giu,(whole,action)=>action&&chineseActions.has(action.replace(/\s/gu,'').replace(/，/gu,','))?'<span class="rubric">'+whole+'</span>':whole);
      const spans=[...text.matchAll(inline())];if(!spans.length)continue;
      const suffix=match[1]||'',rubricKey='rubric'+suffix,layoutKey='rubricLayout'+suffix;
      let body='',last=0,rubric=String(line[rubricKey]||'');const blockEnd=rubric.length,pieces=[];
      for(const span of spans){
        body+=text.slice(last,span.index);if(rubric)rubric+='\n';
        pieces.push({at:body.length,from:rubric.length,to:rubric.length+span[1].length});
        rubric+=span[1];last=span.index+span[0].length;
      }
      body+=text.slice(last);
      pieces.forEach(piece=>{piece.left=body.slice(Math.max(0,piece.at-32),piece.at);piece.right=body.slice(piece.at,piece.at+32);});
      line[key]=body;line[rubricKey]=rubric;line[layoutKey]={blockEnd,pieces};
    }
    // Sentence moves can leave a layout on the body row after its instruction
    // has moved elsewhere. Keep anchors attached only to their current text.
    for(const[key,layout]of Object.entries(line)){
      const match=/^rubricLayout(_[a-z]{2})?$/u.exec(key);if(!match)continue;
      const suffix=match[1]||'',rubricKey='rubric'+suffix,textKey='text'+suffix;
      if(!line[rubricKey]){delete line[key];continue;}
      const body=String(line[textKey]||'');line[textKey]=body;
      layout.pieces=layout.pieces.map(piece=>{
        const at=anchor(body,piece);
        return {...piece,at,left:body.slice(Math.max(0,at-32),at),right:body.slice(at,at+32)};
      });
    }
  }
  function canonicalMassEntry(entry){
    const result=clone(entry);
    visit(result,item=>{
      if(Array.isArray(item.variants?.lines)){
        if(Object.keys(item.variants).some(key=>!['header','lines'].includes(key)))throw Error('Cannot flatten a template with additional choices: '+item.id);
        item.type='part';item.cit={...(item.variants.header?.[0]||{}),...(item.cit||{})};
        item.lines=merge(item.variants.lines,item.lines||[]);delete item.variants;
      }
      canonicalLine(item);
    });
    return result;
  }
  function anchor(body,piece){
    const at=Math.min(piece.at,body.length),left=piece.left||'',right=piece.right||'';
    if(!piece.at||(body.slice(Math.max(0,at-left.length),at)===left&&body.slice(at,at+right.length)===right))return at;
    const candidates=[];
    for(const [text,shift]of [[right,0],[left,left.length]])if(text){let start=0,index;while((index=body.indexOf(text,start))>=0){candidates.push(index+shift);start=index+1;}}
    return candidates.sort((a,b)=>Math.abs(a-piece.at)-Math.abs(b-piece.at))[0]??at;
  }
  function hydrateMassEntry(entry){
    const result=clone(entry);
    visit(result,line=>{
      for(const[key,layout]of Object.entries(line)){
        const match=/^rubricLayout(_[a-z]{2})?$/u.exec(key);if(!match)continue;
        const suffix=match[1]||'',rubricKey='rubric'+suffix,textKey='text'+suffix,rubric=String(line[rubricKey]||'');
        if(!rubric){delete line[key];continue;}
        let body=String(line[textKey]||'');
        const pieces=layout.pieces.map(piece=>({...piece,at:anchor(body,piece)})).sort((a,b)=>b.at-a.at||b.from-a.from);
        for(const piece of pieces){
          const content=pieces.length===1&&!layout.blockEnd?rubric:rubric.slice(piece.from,piece.to);
          body=body.slice(0,piece.at)+'<span class="rubric">'+content+'</span>'+body.slice(piece.at);
        }
        line[textKey]=body;
        if(layout.blockEnd)line[rubricKey]=rubric.slice(0,layout.blockEnd);else delete line[rubricKey];
        delete line[key];
      }
    });
    return result;
  }
  // Describe the actual reading order, rather than the order of object fields.
  // Editors save these parts as independent rows, so an instruction can never
  // inherit an obsolete inline offset from the sentence it used to accompany.
  function lineParts(source,language){
    const suffix='_'+String(language).toLowerCase();
    // Array discovery also visits large Mass entries and option catalogues.
    // Copy only this row's language fields, never its entire prayer subtree.
    const line={};for(const kind of ['text','rubric','rubricLayout','sp','cit']){const field=kind+suffix;if(Object.hasOwn(source||{},field))line[field]=copyField(source[field]);}
    if(!Object.keys(line).length)return [];
    canonicalLine(line);
    const body=String(line['text'+suffix]||''),rubric=String(line['rubric'+suffix]||''),layout=line['rubricLayout'+suffix];
    const result=[];
    function add(kind,text){if(text)result.push({kind,field:kind+suffix,text});}
    if(layout&&rubric){
      if(layout.blockEnd)add('rubric',rubric.slice(0,layout.blockEnd));
      let cursor=0;
      for(const piece of [...layout.pieces].sort((a,b)=>anchor(body,a)-anchor(body,b)||a.from-b.from)){
        const at=anchor(body,piece);add('text',balancedFragment(body,cursor,at));
        add('rubric',layout.pieces.length===1&&!layout.blockEnd?rubric:rubric.slice(piece.from,piece.to));cursor=at;
      }
      add('text',balancedFragment(body,cursor,body.length));
    }else{add('rubric',rubric);add('text',body);}
    add('cit',String(line['cit'+suffix]||''));
    if(!result.length)for(const kind of ['rubric','text','cit'])if(Object.hasOwn(line,kind+suffix))result.push({kind,field:kind+suffix,text:String(line[kind+suffix]||'')});
    const counts={};for(const part of result)counts[part.field]=(counts[part.field]||0)+1;
    const positions={};let speakerUsed=false;
    return result.map(part=>{
      const index=positions[part.field]||0;positions[part.field]=index+1;
      const speaker=part.kind==='text'&&!speakerUsed?String(line['sp'+suffix]||''):'';
      if(part.kind==='text')speakerUsed=true;
      return {...part,speaker,segment:counts[part.field]>1,segmentIndex:index};
    });
  }
  function copyField(value){return value&&typeof value==='object'?clone(value):value;}
  function balancedFragment(body,start,end){
    if(start===end)return '';
    const stackAt=limit=>{
      const stack=[];
      for(const match of body.slice(0,limit).matchAll(/<\/?([a-z][\w:-]*)\b[^>]*>/giu)){
        const tag=match[1].toLowerCase();if(/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/u.test(tag)||/\/\s*>$/u.test(match[0]))continue;
        if(match[0].startsWith('</')){const index=stack.findLastIndex(item=>item.tag===tag);if(index>=0)stack.splice(index);}
        else stack.push({tag,html:match[0]});
      }
      return stack;
    };
    const fragment=body.slice(start,end);
    if(!fragment.replace(/<[^>]*>/gu,'').trim())return fragment.includes('<br')?fragment:'';
    return stackAt(start).map(item=>item.html).join('')+fragment+stackAt(end).reverse().map(item=>'</'+item.tag+'>').join('');
  }
  const api=Object.freeze({canonicalMassEntry,hydrateMassEntry,canonicalLine,lineParts});
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ordoMassStorage=api;
})(globalThis);
