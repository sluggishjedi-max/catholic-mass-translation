(function(root){
  'use strict';
  const copy=value=>value===undefined?undefined:JSON.parse(JSON.stringify(value));
  const plain=value=>String(value||'').replace(/<[^>]*>/gu,' ').replace(/\s+/gu,' ').trim();
  const storage=()=>root.ordoMassStorage||(typeof require==='function'?require('./mass_storage_schema'):null);
  function congregationRubric(value){
    const text=plain(value);
    return !!text&&!/빵이 담긴 성반|두 손으로 성작|예물 준비가/u.test(text)
      &&/침묵|가슴을|모두|교우|신자|앉|일어서|깊은 절|무릎|고개를|합송|성가|공동체|기도 끝|또는|강론|공지|미사에서는|미사를 드릴 때|성인이나 수호자 이름/u.test(text);
  }
  function tokens(rows,lower,location){
    const used=new Map();
    return (rows||[]).flatMap((row,index)=>{
      const parts=storage().lineParts(row,lower).map(part=>{
        if(part.kind==='cit')return part;
        const cleaned=cleanSpoken(nationalSpoken(part.text,location,-1),lower);
        // Some PDF extractions put the spoken tail after a priest direction
        // in a rubric field. Recover that tail before applying the rubric rule.
        if(part.kind==='rubric'&&cleaned!==part.text&&plain(cleaned))return {...part,kind:'text',field:'text_'+lower,text:cleaned};
        return part.kind==='text'?{...part,text:cleaned}:part;
      });
      if(!parts.length)return row&&Object.keys(row).some(key=>!/^__|^(?:text|rubric|rubricLayout|sp|cit)_[a-z]{2}$/u.test(key))?[{...prepare(row,lower,location),__ordinaryPairKey:`${index}:structure`}]:[];
      return parts.map(part=>{
      let key=(row.__massEditorPairKeys?.[part.field]||`${index}:${part.kind}`).replace(/:(?:text|rubric|cit)$/u,':'+part.kind)+(part.segment?`:segment:${part.segmentIndex}`:'');
      const occurrence=used.get(key)||0;used.set(key,occurrence+1);if(occurrence)key+=':extra:'+occurrence;
      const output={};
      // Options and structural markers belong to the spoken sentence, never
      // to the instruction which happens to share its old physical row.
      if(part.kind==='text')for(const[k,v]of Object.entries(row))if(!/^(?:text|rubric|rubricLayout|sp|cit)_[a-z]{2}$/u.test(k)&&!['__massEditorPairKeys','__ordinaryPairKey'].includes(k))output[k]=prepare(v,lower,location);
      output[part.field]=part.text;if(part.speaker)output['sp_'+lower]=part.speaker;
      output.__ordinaryPairKey=key;
      return output;
    });});
  }
  function mergeRows(left,right){
    const output=left.map(copy);
    let previous=-1;
    for(let index=0;index<right.length;index++){
      const row=right[index],key=row.__ordinaryPairKey;
      const found=output.findIndex(item=>item.__ordinaryPairKey===key);
      if(found>=0){output[found]={...output[found],...copy(row)};previous=found;continue;}
      const next=right.slice(index+1).map(item=>output.findIndex(candidate=>candidate.__ordinaryPairKey===item.__ordinaryPairKey)).find(at=>at>=0);
      const at=next===undefined?Math.max(previous+1,output.length):next;
      output.splice(at,0,copy(row));previous=at;
    }
    return output;
  }
  function mergeValue(left,right,lower,path=[]){
    if(Array.isArray(left)||Array.isArray(right)){
      const a=Array.isArray(left)?left:[],b=Array.isArray(right)?right:[];
      if(a.some(row=>row?.id)||b.some(row=>row?.id)){
        const output=a.map(copy);for(const item of b){const at=output.findIndex(row=>row.id===item.id);if(at<0)output.push(copy(item));else output[at]=mergeValue(output[at],item,lower,path.concat(item.id));}return output;
      }
      const isRows=[...a,...b].some(row=>row&&Object.keys(row).some(key=>/^(?:text|rubric)_[a-z]{2}$/u.test(key)));
      if(isRows)return mergeRows(a.some(row=>row?.__ordinaryPairKey)?a:tokens(a,'kr'),b.some(row=>row?.__ordinaryPairKey)?b:tokens(b,lower));
      return Array.from({length:Math.max(a.length,b.length)},(_,i)=>mergeValue(a[i],b[i],lower,path.concat(i)));
    }
    if((left&&typeof left==='object')||(right&&typeof right==='object')){
      const output={...(left||{})};for(const[k,v]of Object.entries(right||{}))output[k]=k in output?mergeValue(output[k],v,lower,path.concat(k)):copy(v);return output;
    }
    return right===undefined?left:right;
  }
  function applyRubricPolicy(value){
    if(!value||typeof value!=='object')return;
    if(Array.isArray(value)){
      const kept=new Set(value.filter(row=>congregationRubric(row?.rubric_kr)).map(row=>row.__ordinaryPairKey));
      for(const row of value){
        if(!row||typeof row!=='object')continue;
        for(const key of Object.keys(row))if(/^rubric_[a-z]{2}$/u.test(key)&&!kept.has(row.__ordinaryPairKey))delete row[key];
        applyRubricPolicy(row);
      }
      return;
    }
    for(const [key,child]of Object.entries(value))if(!key.startsWith('__'))applyRubricPolicy(child);
  }
  // Paragraphs of the Roman Canon, in the order of Ordo Missae 84-98.
  // Original shared editions retain their editor identities when rows move.
  const CANON_STAGES=['te_igitur','living','communicantes','hanc_igitur','quam_oblationem','bread','cup','mystery','anamnesis','supra_quae','supplices','departed','nobis_quoque','per_quem'];
  const LEGACY_STARTS=[0,8,14,27,142,145,155,165,169,176,181,187,193,203];
  const SEASONS={ordinary:[14,33],christmas:[33,54],epiphany:[54,76],easter:[76,99],ascension:[99,121],pentecost:[121,142]};
  // Source paragraph coordinates belong to each independent national Missal,
  // not to the Korean rows. Editor pair keys keep these coordinates stable
  // after a local sentence is inserted or moved. Shared semantic stages are
  // the only coordinates used when national texts are put side by side.
  const CANON_PROFILES={
    TW:{count:209,stages:[[0,8],[8,14],[14,27],[27,33],[142,145],[145,155],[155,165],[165,171],[171,173],[173,183],[183,190],[190,195],[195,205],[205,209]],proper:{christmas:[33,48],epiphany:[54,70],easter:[76,91],ascension:[99,115],pentecost:[121,136]},hanc:{christmas:[48,54],epiphany:[70,76],easter:[91,99],ascension:[115,121],pentecost:[136,142]}},
    IT:{count:319,stages:[[13,37],[37,48],[48,64],[136,143],[165,173],[200,215],[215,231],[231,246],[246,258],[258,266],[266,279],[281,290],[291,306],[306,310]],proper:{christmas:[77,84],epiphany:[86,93],easter:[95,102],ascension:[105,113],pentecost:[115,122]},common:[123,135],easterHanc:[144,154]},
    PT:{count:241,stages:[[5,30],[32,44],[[46,47],[69,88]],[90,98],[107,114],[116,131],[131,147],[147,168],[168,180],[180,186],[186,196],[199,209],[211,229],[229,232]],proper:{christmas:[51,53],epiphany:[54,56],easter:[60,62],ascension:[63,66],pentecost:[67,69]},common:[69,88],prefix:[46,47],easterHanc:[99,105]},
    MX:{count:119,stages:[[16,21],[[22,23],[24,25]],[26,29],[36,39],[49,51],[53,57],[58,63],[64,78],[80,82],[83,84],[85,88],[90,95],[96,99],[100,101]],proper:{christmas:[29,30],epiphany:[30,31],easter:[32,33],ascension:[33,34],pentecost:[34,35]},common:[27,29]},
    DE:{count:180,stages:[[2,21],[23,38],[40,59],[61,67],[68,74],[74,85],[85,98],[98,103],[103,117],[117,125],[125,136],[138,149],[152,168],[168,172]]},
    BR:{count:211,stages:[[10,23],[[24,29],[35,38]],[[39,41],[69,80]],[80,85],[132,136],[137,146],[146,153],[153,166],[166,167],[167,171],[171,180],[182,193],[195,204],[205,207]],proper:{christmas:[46,52],epiphany:[53,55],easter:[56,62],ascension:[63,66],pentecost:[67,69]},common:[69,80],easterHanc:[86,92],doxology:[207,210]}
  };
  function nationalSpoken(value,location,index){
    let text=String(value||'').trim();
    if(location==='TW'){
      text=cleanSpoken(text,'zh');
      text=text.replace(/^(?:主祭|雙手|合掌|伸手)[^:：]*[:：]\s*/u,'');
      if(/^(?:感恩經第|成聖[體血]|祝聖後|第[一二三]式|聖三頌|頌謝詞|[-－]下接)/u.test(plain(text)))return '';
      if(/^[（(]?(?:主祭|雙手|合掌|伸手|稍微俯身|舉目向上)/u.test(plain(text)))return '';
    }
    if(location==='MX'){
      text=text.replace(/\b(?:Junta las manos|Con las manos|Después el sacerdote|Después, con las manos|Inclinado, con las manos|Con la mano derecha|Toma el (?:pan|cáliz)|Toma la patena|El sacerdote)[^:]*:\s*/giu,'')
        .replace(/\b(?:junta las manos|Traza)[^:]*diciendo:\s*/giu,'')
        .replace(/\bSe inclina un poco\./giu,'').replace(/\bS anto\b/u,'Santo');
      if(/^(?:En las fórmulas que siguen|Puede hacerse|El Obispo|Cuando celebra un Obispo)/iu.test(text))return '';
      if(index===19)return '';
      if(index===20)text=text.replace(/^[\s\S]*?y todos los demás/u,'y todos los demás');
      // PDF columns contain headings and alternatives on the same line.
      if([28,29,30,31,32,33,34,38].includes(index))text=text.split(/_{3,}|REUNIDOS EN COMUNIÓN PROPIOS| En (?:la |el )| Desde /u)[0];
      text=text.replace(/^(?:Conmemoración de (?:los vivos|los santos|los difuntos)\.?\s*)/iu,'')
        .replace(/(?:Junta las manos(?: y dice)?|Con las manos (?:extendidas|expendidas)(?:,? prosigue| dice)?|Después, con las manos extendidas, prosigue|Inclinado, con las manos juntas prosigue|Con la mano derecha se golpea el pecho diciendo|Y continúa|Y el pueblo prosigue, aclamando|Después prosigue|Luego dice una de las siguientes fórmulas)\s*[:.]\s*/giu,'')
        .replace(/Traza, una sola vez,[\s\S]*?diciendo:\s*/giu,'')
        .replace(/Puede hacerse mención[\s\S]*$/iu,'')
        .replace(/Toma (?:el cáliz|la patena)[\s\S]*?(?:dice|prosigue):\s*/giu,'')
        .replace(/^(?:CP|CC|C[1-4])\s+/u,'').replace(/\bP adre\b/u,'Padre');
      if(/^(?:Muestra |Se inclina|Junta las manos|Después sigue|O bien|Y el pueblo)/iu.test(text))return '';
    }
    if(location==='PT'){
      if(/^(?:(?:\d+\.\s*)?O sacerdote|distintamente)/iu.test(text))return '';
      if(index>=19&&index<=27)return '';
      if(/^(?:(?:\d+\.\s*)?(?:De braços|Junta as mãos|Estendendo as mãos|Nas fórmulas|Mostra ao povo|Bate com|Em seguida|Depois,|Toma o|Eleva os olhos|Inclina-se|Ergue-se|Celebrante|O povo)|clara e distintamente|adoração\.|Ou:)/iu.test(text))return '';
    }
    if(location==='IT'&&/^(?:Il sacerdote|congiunge|allargando|traccia|\*?\s*qui è permesso|come indicato|\d+\s*Preghiera|o Canone|Intercessione|Memoria dei santi|Communicántes|con le braccia|prende (?:il|sia)|alza gli occhi|si inchina|presenta al popolo|poi prosegue|quindi|il popolo|in posizione|con la destra|e con le braccia|Oppure:|T enendo|come è richiesto|Nelle formule)/iu.test(text))return '';
    if(location==='DE'&&/^(?:Für (?:die|anwesende)|\(?Konzelebrant|\(?Hauptzelebrant|Stilles Gedenken|Gedächtnis|Bitte um|Weitere Bitten|Abschließender)/iu.test(text))return '';
    if(location==='BR'&&/^(?:une as mãos|de braços|aqui se menciona|Memento|"Infra|Na Missa|Estendendo|O relato|toma o|eleva os olhos|inclina-se|ergue-se|Bate no peito|e, de braços|E prossegue|A assembleia aclama)/iu.test(text))return '';
    if(location==='DE'&&/^(?:Der Priester|Er (?:nimmt|erhebt|zeigt|beugt|verneigt))/iu.test(text))return '';
    if(location==='BR'&&/^(?:O sacerdote|O celebrante|O presidente|O diácono|Os concelebrantes|Ergue a |Oração eucarística|Prefácio$|Segue-se|Seguem-se)/iu.test(text))return '';
    if(/^[★☆†※Ⓑ]+$/u.test(plain(text)))return '';
    return text;
  }
  function independentCanon(source,season){
    const profile=CANON_PROFILES[source.location];if(!profile)return null;
    const rows=source.rows,lower=source.lower;
    // A source with no pairing identities must still match the reviewed
    // edition. A changed edition is not silently truncated to an old profile.
    if(rows.length!==profile.count&&!rows.some(row=>row.__massEditorPairKeys))return null;
    const ranges=copy(profile.stages),selected=profile.proper?.[season];
    if(selected)ranges[2]=[...(profile.prefix?[profile.prefix]:[]),selected,...(profile.common?[profile.common]:[])];
    if(profile.hanc?.[season])ranges[3]=profile.hanc[season];
    if(season==='easter'&&profile.easterHanc)ranges[3]=profile.easterHanc;
    const result=[];
    for(const [stageIndex,range]of ranges.entries()){
      if(stageIndex===7){
        const choices={TW:[[165,166],[166,167],[168,169],[170,171]],IT:[[231,232],[233,236],[237,241],[242,245]],PT:[[147,148],[149,152],[155,159],[162,166]],MX:[[64,65],[68,69],[71,73],[77,78]],DE:[[98,99],[99,102]],BR:[[153,154],[155,156],[159,160],[163,164]]}[source.location];
        for(const [choice,[a,b]]of choices.entries())for(const[i,row]of rows.entries()){
          const index=source.location==='TW'?i:originalIndex(row,i,lower);if(index<a||index>=b)continue;
          for(const part of storage().lineParts(row,lower)){
            const text=nationalSpoken(part.text,source.location,index);if(!plain(text))continue;
            result.push({stage:['mystery_invitation','mystery_a','mystery_b','mystery_c'][choice],kind:'text',text,speaker:part.speaker,key:'mystery_'+choice});
          }
        }
        continue;
      }
      const pieces=Array.isArray(range[0])?range:[range];
      for(const [i,row]of rows.entries()){
        const index=source.location==='TW'?i:originalIndex(row,i,lower);if(!pieces.some(([a,b])=>index>=a&&index<b))continue;
        for(const part of storage().lineParts(row,lower)){
          if(part.kind==='cit')continue;
          let text=nationalSpoken(part.text,source.location,index);if(!plain(text))continue;
          if(source.location==='MX'&&stageIndex===2&&season!=='ordinary'){
            if(index===29)text=text.replace(/^[\s\S]*?Reunidos en comunión/u,'Reunidos en comunión');
            if(index===32)text=text.replace(/^Desde[\s\S]*?:\s*/u,'');
            if(index===27)text=String(rows[26].text_es).split('la de su esposo')[1]?'la de su esposo'+String(rows[26].text_es).split('la de su esposo')[1]+' '+text:text;
          }
          result.push({stage:CANON_STAGES[stageIndex],kind:'text',text,speaker:part.speaker,key:CANON_STAGES[stageIndex]+':text'});
        }
      }
    }
    return result;
  }
  function originalIndex(row,index,lower){
    const key=row.__massEditorPairKeys?.['text_'+lower]||row.__massEditorPairKeys?.['rubric_'+lower];
    return key&&/^\d+:/u.test(key)?Number(key.split(':')[0]):index;
  }
  function cleanSpoken(text,lower){
    let value=String(text||'');
    value=value.replace(/<span\b[^>]*class=["'][^"']*\brubric\b[^"']*["'][^>]*>[\s\S]*?<\/span>/giu,'');
    if(lower==='en')value=value.replace(/^He raises his eyes\.?$/iu,'');
    if(lower==='zh')value=value.replace(/[（(](?:稍微俯身|合掌|伸手|舉目向上|雙手|主祭)[^()（）]*[）)]/gu,'').replace(/※/gu,'');
    if(lower==='zh')value=value.replace(/[（(](?:稍微俯身|合掌|伸手|舉目向上|雙手[^()（）]*|主祭[^()（）]*)[）)]/gu,'').replace(/^主祭伸手念[:：]?$/u,'');
    return value;
  }
  function legacyCanon(rows,lower,season,location){
    const range=SEASONS[season]||SEASONS.ordinary,result=[];
    for(const [i,row]of rows.entries()){
      const index=location==='TW'&&rows.length===209?(i>=171?i-2:i>=169?168:i>=167?167:i):originalIndex(row,i,lower);
      if(index>=14&&index<142&&(index<range[0]||index>=range[1]))continue;
      let normalized=index;
      if(index>=range[0]&&index<range[1]){
        // Communicantes and its following Hanc igitur are one selected proper,
        // rather than six alternatives interleaved into the prayer.
        const hanc={ordinary:27,christmas:48,epiphany:70,easter:91,ascension:115,pentecost:136}[season]??27;
        normalized=index<hanc?14:27;
      }
      let stage=CANON_STAGES[LEGACY_STARTS.findLastIndex(start=>normalized>=start)];
      if(index>=165&&index<=168)stage=['mystery_invitation','mystery_a','mystery_b','mystery_c'][index-165];
      for(const part of storage().lineParts(row,lower)){
        if(part.kind==='cit')continue;
        if(part.kind==='rubric'&&(lower==='kr'?!congregationRubric(part.text):!['154:rubric','164:rubric','167:rubric','168:rubric'].includes(row.__massEditorPairKeys?.[part.field]||`${i}:rubric`)))continue;
        const text=part.kind==='text'?cleanSpoken(part.text,lower):part.text;
        if(!plain(text))continue;
        result.push({stage,kind:part.kind,text,speaker:part.speaker,key:row.__massEditorPairKeys?.[part.field]||`${i}:${part.kind}`});
      }
    }
    return result;
  }
  function joinParts(parts,lower){
    const groups=[];
    for(const part of parts){
      const last=groups[groups.length-1];
      if(last&&last.__ordinaryStage===part.stage&&last.__ordinaryKind===part.kind){last[part.kind+'_'+lower]+='<br>'+part.text;continue;}
      groups.push({__ordinaryStage:part.stage,__ordinaryKind:part.kind,__ordinaryPairKey:part.kind==='rubric'?part.key:part.stage+':text',[part.kind+'_'+lower]:part.text,...(part.speaker?{['sp_'+lower]:part.speaker}:{})});
    }
    return groups;
  }
  function alignCanon(sources,season='ordinary'){
    let output=[];
    for(const source of sources){
      const {rows,lower}=source;
      // Independent official editions are handled by their semantic profiles;
      // never slice their rows using the Korean array's physical offsets.
      const parsed=source.legacy?legacyCanon(rows,lower,season,source.location):independentCanon(source,season);
      if(!parsed){
        // Preserve an unprofiled edition as one complete source block, rather
        // than pairing arbitrary foreign rows with Korean sentence numbers.
        const text=rows.map(row=>cleanSpoken(row['text_'+lower],lower)).filter(Boolean).join('<br>');
        output.push({__ordinaryPairKey:'unprofiled:'+source.location,['text_'+lower]:text});continue;
      }
      output=mergeRows(output,joinParts(parsed,lower));
    }
    applyRubricPolicy(output);return output;
  }
  function prepare(value,lower,location){
    if(Array.isArray(value)){
      if(value.some(row=>row&&Object.keys(row).some(key=>/^(?:text|rubric)_[a-z]{2}$/u.test(key))))return tokens(value,lower,location);
      return value.map(item=>prepare(item,lower,location));
    }
    if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,child])=>[key,prepare(child,lower,location)]));
    return value;
  }
  const FOURTH_BLOCKS={KR:[[0,3],[4,9],[10,34],[35,56],[57,60],[61,87]],TW:[[8,10],[11,14],[16,22],[23,31],[32,39],[40,47]],IT:[[9,25],[26,31],[34,68],[69,109],[110,123],[124,182]],PT:[[7,24],[25,30],[33,66],[67,106],[107,127],[128,176]],MX:[[11,13],[14,18],[21,28],[29,41],[42,52],[53,63]],DE:[null,null,[3,48],[49,80],[81,84],[85,139]],BR:[[7,13],[14,14],[17,29],[30,54],[55,67],[68,114]]};
  function isDoxology(value){
    return /^(?:그리스도를 통하여|Per Christum.{0,30}cum ipso|Through him.{0,30}with him|Chính nhờ Người|キリストによって|全能的天主聖父|Per Cristo,? con Cristo|Por Cristo,? (?:com (?:Cristo|ele)|con él)|Durch ihn und mit ihm)/iu.test(plain(value));
  }
  function trimDoxology(rows,lower,location){
    const index=(rows||[]).findIndex(row=>isDoxology(nationalSpoken(row['text_'+lower],location,-1)));
    return index<0?rows:rows.slice(0,index);
  }
  function commonAmen(entry,lower,location){
    let rows=entry.amen||[];
    if(!Array.isArray(rows))rows=[rows];
    if(!rows.length&&CANON_PROFILES[location]?.doxology){const[a,b]=CANON_PROFILES[location].doxology;rows=entry.forms['1'].slice(a,b);}
    const spoken=[],responses=[];let speaker='',responseSpeaker='';
    for(const row of rows)for(const part of storage().lineParts(row,lower)){
      if(part.kind!=='text')continue;
      const text=nationalSpoken(part.text,location,-1);if(!plain(text))continue;
      if(/^(?:아멘|Amen|Amém|阿們|アーメン)[.!。\s]*$/iu.test(plain(text))){responses.push(text);responseSpeaker||=part.speaker;}
      else{spoken.push(text);speaker||=part.speaker;}
    }
    return [spoken.length?{['text_'+lower]:spoken.join('<br>'),['sp_'+lower]:speaker,__massEditorPairKeys:{['text_'+lower]:'doxology:text'}}:null,responses.length?{['text_'+lower]:responses.join('<br>'),['sp_'+lower]:responseSpeaker,__massEditorPairKeys:{['text_'+lower]:'amen:text'}}:null].filter(Boolean);
  }
  function equivalentRows(left,right,lower){
    const text=rows=>rows.flatMap(row=>storage().lineParts(row,lower)).map(part=>part.text).join(' ');
    const normalize=value=>plain(value).normalize('NFKC').replace(/[^\p{L}\p{N}]/gu,'').toLowerCase();
    const styles=value=>(value.match(/<(?!br\b)[^>]*>/giu)||[]).map(tag=>tag.toLowerCase()).join('');
    const a=text(left),b=text(right);return normalize(a)===normalize(b)&&styles(a)===styles(b);
  }
  function alignFourth(sources){
    const phases=['preface','sanctus','salvation_history','institution','mystery','offering_intercessions'];
    const result=phases.map(phase=>({__ordinaryStage:phase,__ordinaryPairKey:'fourth:'+phase}));
    for(const {rows,location,lower}of sources){
      const blocks=rows.length===47?[[0,4],[5,10],[11,20],[21,35],[36,39],[40,46]]:location==='DE'&&rows.length===150?[[3,3],[4,4],[5,50],[51,82],[83,86],[87,141]]:FOURTH_BLOCKS[location];
      if(!blocks){result.push({__ordinaryPairKey:'fourth:unprofiled:'+location,['text_'+lower]:rows.map(row=>cleanSpoken(row['text_'+lower],lower)).filter(Boolean).join('<br>')});continue;}
      for(const [phase,range]of blocks.entries()){
        if(!range)continue;
        const parts=rows.slice(range[0],range[1]+1).flatMap(row=>storage().lineParts(row,lower));
        const texts=parts.flatMap(part=>{
          if(part.kind==='cit')return [];
          if(lower==='kr'&&part.kind==='rubric')return congregationRubric(part.text)?['<span class="rubric">'+part.text+'</span>']:[];
          if(part.kind==='rubric'&&!CANON_PROFILES[location])return [];
          let text=cleanSpoken(nationalSpoken(part.text,location,-1),lower);
          if(location==='TW'&&/^(?:成聖[體血]|祝聖後|第[一二三]式|聖三頌|主祭|合掌|雙手|[-－]下接)/u.test(plain(text)))return [];
          return plain(text)?[text]:[];
        });
        if(texts.length)result[phase]['text_'+lower]=texts.join('<br>');
        const speaker=parts.find(part=>part.kind==='text'&&part.speaker)?.speaker;if(speaker)result[phase]['sp_'+lower]=speaker;
      }
    }
    return result;
  }
  const semanticText=value=>plain(value).normalize('NFKD').replace(/\p{M}/gu,'').normalize('NFC').replace(/[đĐ]/gu,'d').replace(/[^\p{L}\p{N}]/gu,'').toLowerCase();
  const FORM_ANCHORS={
    kr:[/^(?:인자하신아버지|거룩하신아버지)/u,/^(?:스스로원하신수난|예수님께서는잡히시던날밤)/u,/^저녁을잡수시고/u,/^신앙의신비/u,/^(?:아버지저희는그리스도|아버지저희를구원)/u],
    en:[/^youareindeedholy/u,/^(?:atthetimehewasbetrayed|foronthenighthewasbetrayed)/u,/^inasimilarway/u,/^themysteryoffaith/u,/^(?:thereforeaswecelebrate|thereforeolord)/u],
    vn:[/^laychua/u,/^(?:khitun|trongdembi)/u,/^cungmotthethuc/u,/^daylamaunhiem/u,/^(?:vivaylaychua|vaylaychua|vaygiolaychua)/u],
    jp:[/^まことに聖なる/u,/^(?:主)?イエスは/u,/^(?:食事の後に|食事の終(?:わ)?りに|同しように)/u,/^信仰の神秘/u,/^(?:聖なる)?父よわたしたちは/u],
    la:[/^veresanctus/u,/^(?:quicumpassioni|ipseenim)/u,/^similimodo/u,/^mysteriumfidei/u,/^memoresigitur/u],
    zh:[/^上主祢實在/u,/^(?:祂甘|祂自願|祂在被|祂在自願)/u,/^(?:晚餐後|祂同樣)/u,/^信德的奧蹟/u,/^上主(?:因此|所以|我們紀念)/u],
    it:[/^veramentesanto/u,/^egli/u,/^allostessomodo/u,/^misterodellafede/u,/^celebrandoilmemoriale/u],
    pt:[/^(?:vossenhorsoisverdadeiramentesanto|naverdade)/u,/^(?:nahora|nanoite|nomomento|estandopara)/u,/^(?:deigualmodo|domesmomodo)/u,/^misterio(?:da|admiravel)/u,/^celebrando/u],
    es:[/^santoeresenverdad/u,/^(?:elcual|porqueel)/u,/^delmismomodo/u,/^(?:esteesel|estepuesesel)(?:misterio|sacramento)/u,/^asipuespadre/u],
    de:[/^jadubistheilig/u,/^(?:dennamabend|dennindernacht|indernacht|amabend)/u,/^ebenso/u,/^geheimnisdesglaubens/u,/^darumgutiger/u]
  };
  function formParts(source){
    return source.rows.flatMap(row=>storage().lineParts(row,source.lower)).flatMap(part=>{
      if(part.kind==='cit')return [];
      if(source.lower==='kr'&&part.kind==='rubric')return congregationRubric(part.text)?[{...part,text:'<span class="rubric">'+part.text+'</span>'}]:[];
      const text=cleanSpoken(nationalSpoken(part.text,source.location,-1),source.lower);
      if(!plain(text)||/^\d+[.]?$/u.test(plain(text)))return [];
      return [{...part,text}];
    });
  }
  const FORM_BASE_PROFILES={
    'TW:2':{count:53,omit:[[4,24]]},
    'PT:2':{count:201,omit:[[34,89]]},
    'PT:3':{count:205,omit:[[11,67]]},
    'IT:3':{count:219,omit:[[59,64]]},
    'BR:2':{count:164,omit:[[71,128]]},
    'BR:3':{count:134,omit:[[66,98]]},
    'MX:2':{count:64,omit:[[43,46],[47,49],[50,56]]},
    'MX:3':{count:72,omit:[[50,51],[52,56],[57,63],[64,66]]}
  };
  function baseFormRows(rows,lower,location,form){
    const profile=FORM_BASE_PROFILES[location+':'+form];if(!profile||rows.length!==profile.count)return rows;
    return rows.flatMap((source,index)=>{
      if(profile.omit.some(([a,b])=>index>=a&&index<b))return [];
      const row=copy(source);
      for(const key of ['text_'+lower,'rubric_'+lower])if(typeof row[key]==='string'){
        let text=row[key];
        if(location==='MX'){
          if(form==='2'&&index===13)text=text.replace(/En la Misa vespertina del Jueves Santo:\s*en esta misma noche,\s*/iu,'');
          if(form==='2'&&index===42)text=text.split(/_{3,}/u)[0];
          if(form==='2'&&index===49)text=text.split(/_{3,}/u)[1]||text;
          if(form==='3'&&index===21)text=text.replace(/_{3,}[\s\S]*?_{3,}/u,'');
          if(form==='3'&&index===51)text=text.split(/_{3,}/u)[1]||text;
          if(form==='3'&&index===56)text=text.split(/_{3,}/u)[1]||text;
          if(form==='3'&&index===63)text=text.split(/_{3,}/u)[0];
          text=text.replace(/_{3,}/gu,'');
        }
        row[key]=text;
      }
      return [row];
    });
  }
  function formRanges(source){
    const parts=formParts(source),patterns=FORM_ANCHORS[source.lower];if(!patterns)return null;
    const starts=[];let cursor=0;
    for(const pattern of patterns){const offset=parts.slice(cursor).findIndex(part=>pattern.test(semanticText(part.text)));if(offset<0)return {parts,missing:pattern.source};starts.push(cursor+offset);cursor+=offset+1;}
    const end=parts.findIndex((part,index)=>index>starts[4]&&isDoxology(part.text));
    return {parts,starts,end:end<0?parts.length:end};
  }
  function alignForm(sources){
    const stages=['opening_epiclesis','bread','cup','mystery_invitation','mystery_response','anamnesis_intercessions'];
    const result=stages.map(stage=>({__ordinaryStage:stage,__ordinaryPairKey:stage+':text'}));
    for(const source of sources){
      const range=formRanges(source);
      if(!range||range.missing){result.push({__ordinaryStage:'unprofiled',__ordinaryPairKey:'form:unprofiled:'+source.location,['text_'+source.lower]:formParts(source).map(part=>part.text).join('<br>')});continue;}
      const {parts,starts,end}=range;
      const bounds=[...starts.slice(0,4),starts[3]+1,starts[4],end];
      for(let index=0;index<stages.length;index++){
        const group=parts.slice(bounds[index],bounds[index+1]);if(!group.length)continue;
        result[index]['text_'+source.lower]=group.map(part=>part.text).join('<br>');
        const speaker=group.find(part=>part.speaker)?.speaker;if(speaker)result[index]['sp_'+source.lower]=speaker;
      }
    }
    return result;
  }
  const api=Object.freeze({tokens,prepare,mergeRows,mergeValue,applyRubricPolicy,congregationRubric,alignCanon,alignFourth,alignForm,formRanges,baseFormRows,commonAmen,trimDoxology,equivalentRows,legacyCanon,independentCanon,nationalSpoken,cleanSpoken,CANON_STAGES,CANON_PROFILES});
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ordoOrdinaryAlignment=api;
})(globalThis);
