(function(root){
  'use strict';
  const plain=value=>String(value||'').replace(/<br\s*\/?>/giu,'\n').replace(/<[^>]+>/gu,' ').replace(/&nbsp;|&#160;/giu,' ');
  const normalize=value=>plain(value).normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/gu,'').normalize('NFC').replace(/[^\p{L}\p{N}]/gu,'');
  function ordinal(value){
    const text=String(value||'').normalize('NFKC').trim();if(/^\d+$/u.test(text))return Number(text);
    if(/^[ivxlcdm]+$/iu.test(text)){const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000},chars=[...text.toUpperCase()];return chars.reduce((sum,char,index)=>sum+(map[char]<map[chars[index+1]]?-map[char]:map[char]),0);}
    const digits='〇一二三四五六七八九',expanded=text.replace(/零/gu,'〇').replace(/廿/gu,'二十').replace(/卅/gu,'三十');
    if(!/^[〇一二三四五六七八九十百]+$/u.test(expanded))return 0;
    if(!/[十百]/u.test(expanded))return Number([...expanded].map(char=>digits.indexOf(char)).join(''));
    let total=0,current=0;for(const char of expanded){if(/[十百]/u.test(char)){total+=(current||1)*(char==='十'?10:100);current=0;}else current=digits.indexOf(char);}return total+current;
  }
  // Source titles attested in the CRBC daily PDFs, keyed to the shared Missal
  // catalogue. Numbers alone are never used without a category or title.
  const aliases={
    common_2:['藉基督獲救恩'],common_3:['天主是人的創造者與再造者','天主藉人的創造者與再造者'],common_4:['讚頌天主是天主的恩賜'],common_5:['我們宣報基督的奧蹟'],common_6:['基督帶給我們救恩'],
    ordinary_1:['逾越奧蹟與天主子民'],ordinary_2:['救恩的奧蹟'],ordinary_3:['藉人而拯救人'],ordinary_4:['救恩史'],ordinary_5:['創造的目的'],ordinary_6:['復活的保證'],ordinary_7:['藉基督之服從而得救'],ordinary_8:['教會在聖三奧蹟中團結在一起'],
    easter_1:['真逾越節羔羊'],easter_2:['在基督內的新生命'],easter_3:['基督永遠生活並常為我們代禱'],easter_4:['萬物藉逾越奧蹟除舊更新'],easter_5:['基督是司祭又是犧牲'],
    advent_1:['基督的兩次來臨'],advent_2:['對基督的雙重期待'],nativity_2:['降生的聖子重整萬有'],nativity_3:['天人間奇妙的交換'],
    lent_1:['四旬期的精神意義'],lent_2:['藉齋戒革新生活'],lent_3:['自制的效益'],lent_4:['齋戒的效益'],
    dead_1:['復活的希望'],dead_2:['基督死了，為使我們生活'],dead_3:['基督是生命與復活'],
    mary_1:['救主之母'],mary_2:['教會藉瑪利亞的口讚美天主'],apostles_1:['宗徒為天主子民的牧者'],apostles_2:['教會以宗徒為基礎和見證'],saints_2:['聖者的活動'],pastors:['天主藉牧者聖人照顧教會']
  };
  const families={
    common:/通用|共通|공통|common|chung|commun|comum|comun|comune|allgemein/iu,
    ordinary:/常年期|年間|연중|ordinary time|thuong nien|per annum|tempo ordinario|tempo comum|tiempo ordinario|jahreskreis/iu,
    advent:/將臨|待降|대림|advent|mua vong|avvento|advento|adviento/iu,
    nativity:/聖誕|降誕|성탄|주님 탄생|nativity|christmas|nativitate|giang sinh|natale|natal|navidad|weihnacht/iu,
    lent:/四旬|사순|lent|quadragesima|mua chay|quaresima|quaresma|cuaresma|fastenzeit/iu,
    easter:/復活|부활|easter|paschal|phuc sinh|pasqua|pascoa|pascua|ostern/iu,
    dead:/亡者|追思|死者|위령|for the dead|defunct|qua doi|defunti|defuntos|difuntos|verstorbene/iu,
    mary:/瑪利亞|聖母|동정 마리아|virgin mary|maria virgine|duc me|vergine maria|virgem maria|virgen maria|jungfrau maria/iu,
    apostles:/宗徒|使徒|사도|apostles|apostol|tong do|apostel/iu,
    saints:/聖人|聖者|성인|saints|sanctorum|cac thanh|santi|santos|heiligen/iu,
    eucharist:/聖體|성찬|성체|eucharist|thanh the|eucarist|eucharistie/iu
  };
  function reference(text){
    const value=plain(text).trim();
    return /^(?:[（(]\s*)?(?:另有|其他|其它|다른|그 밖의|For other|Other|See other|Altr[ei]|Ali(?:ae|a)|Autres|D['’]autres|Outr[oa]s?|Otr[oa]s?|Weitere|Andere|他の|Các|Xem)/iu.test(value)
      && /頌謝詞|감사송|prefa|pr[éeæ]fa|叙唱|tien tung/iu.test(value.normalize('NFD').replace(/[\u0300-\u036f]/gu,'').normalize('NFC'))
      && /參|参|請看|請見|참조|보세요|보라|see|cf\.?|refer|ved|vide|voir|veja|véase|vease|siehe|ver|xem/iu.test(value);
  }
  function heading(text){
    const value=plain(text).trim();if(!value||value.length>210)return false;
    // A prayer sentence can mention a preface. Terminal sentence punctuation
    // is body text unless it simply closes a numbered heading (Preface II.).
    if(/[.!?。！？][)）»”"’']?$/u.test(value)&&!/(?:\b[IVXLCDM]+|\d+)\.$/u.test(value))return false;
    return /^(?:[（(]\s*[〇零一二三四五六七八九十廿卅IVX\d]+\s*[）)]\s*[（(]|[^。.!?\n]{0,45}(?:頌謝詞|叙唱|감사송|preface|praefatio|præfatio|prefazio|prefacio|prafation|kinh tien tung|loi tien tung))/iu.test(value.normalize('NFD').replace(/[\u0300-\u036f]/gu,'').normalize('NFC'));
  }
  function extract(section,catalog={}){
    const object=typeof section==='string'?{text:section}:section||{};
    const source=Array.isArray(object.lines)&&object.lines.length?object.lines:String(object.text||'').split(/\r?\n/u);
    const rows=source.map(line=>typeof line==='string'?{text:line,role:''}:{text:String(line.text||line.rubric||''),role:line.role||line.kind||''});
    const values=value=>typeof value==='object'?Object.values(value||{}):[value];
    const titles=[...values(object.title),...values(object.label),...values(object.prefaceTitle)].filter(Boolean),body=[];
    const knownTitles=new Set(Object.values(catalog).flatMap(entry=>values(entry.title)).filter(Boolean).map(normalize));
    for(const {text,role}of rows){if(['reference','source_note','preface_reference'].includes(role)||reference(text))continue;const leadingSubtitle=!body.length&&plain(text).trim().length<=180&&/^[（(][^。.!?\n]+[）)]$/u.test(plain(text).trim());if(['title','heading','preface_title'].includes(role)||heading(text)||leadingSubtitle||knownTitles.has(normalize(text))){titles.push(plain(text).trim());continue;}if(plain(text).trim())body.push(text);}
    return{heading:titles.join(' '),body:body.join('\n\n'),section:object};
  }
  function numberInTitle(title){
    const match=plain(title).match(/[（(]\s*([〇零一二三四五六七八九十廿卅\d]+)\s*[）)]|\b([IVX]{1,8})\b|(?:감사송|頌謝詞|叙唱)\s*([\d〇零一二三四五六七八九十廿卅]+)|\b(\d+)\b/iu);
    return match?ordinal(match.slice(1).find(Boolean)):0;
  }
  function match(section,lower,catalog){
    const extracted=extract(section,catalog),title=normalize(extracted.heading),body=normalize(extracted.body),number=numberInTitle(extracted.heading);
    const explicit=extracted.section.canonicalPrefaceKey||extracted.section.prefaceKey;
    if(explicit&&catalog[explicit])return{...extracted,key:explicit};
    const exact=[];
    for(const[key,entry]of Object.entries(catalog)){
      const text=normalize((entry.content||[]).map(line=>line['text_'+lower]||'').join(' '));
      if(body.length>80&&text===body)exact.push(key);
    }
    if(exact.length===1)return{...extracted,key:exact[0]};
    const named=Object.entries(aliases).filter(([key,values])=>catalog[key]&&values.some(alias=>title.includes(normalize(alias)))).map(([key])=>key);
    for(const[key,entry]of Object.entries(catalog))for(const label of typeof entry.title==='object'?Object.values(entry.title):[entry.title]){
      const parts=String(label||'').split(/\s+[-–—]\s+|\s*[:：]\s*/u),subtitle=normalize(parts.slice(1).join(' '));
      if(subtitle.length>12&&title.includes(subtitle)&&!named.includes(key))named.push(key);
    }
    if(named.length){const valid=named.filter(key=>!number||Number(key.match(/_(\d+)$/u)?.[1])===number);return{...extracted,key:valid.length===1?valid[0]:''};}
    const titled=[];
    for(const[key,entry]of Object.entries(catalog)){
      const names=typeof entry.title==='object'?Object.values(entry.title):[entry.title];
      if(title&&names.some(name=>{const label=normalize(name);return label&&(title===label||title.includes(label)||title.length>16&&label.includes(title));}))titled.push(key);
    }
    if(titled.length===1)return{...extracted,key:titled[0]};
    const folded=plain(extracted.heading).normalize('NFD').replace(/[\u0300-\u036f]/gu,'').normalize('NFC');
    const candidates=Object.entries(families).filter(([,pattern])=>pattern.test(folded)).map(([family])=>family+'_'+number).filter(key=>number&&catalog[key]);
    return{...extracted,key:candidates.length===1?candidates[0]:''};
  }
  function displayTitle(key,title,lower){
    const labels={common:'通用',ordinary:'常年期主日',advent:'將臨期',nativity:'聖誕期',lent:'四旬期',easter:'復活期',dead:'亡者',mary:'聖母',apostles:'宗徒',saints:'聖人',eucharist:'聖體',pastors:'牧者聖人'};
    if(lower==='zh'&&labels[key?.split('_')[0]]&&/^[（(]/u.test(title.trim()))return labels[key.split('_')[0]]+'頌謝詞'+title.trim();
    return title.trim();
  }
  const api=Object.freeze({extract,match,ordinal,aliases,displayTitle});
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ordoPrefaceMatcher=api;
})(globalThis);
