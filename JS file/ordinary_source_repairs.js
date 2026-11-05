(function(root){
  'use strict';
  const data=root.ordoOrdinaryRecoveryData||(typeof require==='function'?require('../tools/fixtures/eucharistic-prayer-three-recovery.json').languages:{});
  const ranges=[[30,33],[33,38],[38,45],[45,47],[47,52],[52,55]];
  const germanPreface=root.ordoGermanFourthPreface||(typeof require==='function'?require('../tools/fixtures/german-fourth-preface.json').text:'');
  // Fill only demonstrably empty paragraphs. An editor's non-empty text takes
  // precedence over the reference PDF, including a partially edited paragraph.
  function repair(entry,lower){
    const fourth=entry?.forms?.['4'];
    if(lower==='de'&&germanPreface&&fourth?.length===148
      &&fourth[0]?.text_de==='Viertes Hochgebet'&&fourth[3]?.text_de==='Wir preisen dich, heiliger Vater,'){
      const sanctus=(entry.sanctus||[]).map(row=>row.text_de||'').filter(Boolean).join('\n');
      if(sanctus)fourth.splice(3,0,{text_de:germanPreface,sp_de:'P.'},{text_de:sanctus,sp_de:'A.'});
    }
    const source=data[lower],rows=entry?.forms?.['3'];
    if(!source||!Array.isArray(rows))return entry;
    const textKey='text_'+lower,rubricKey='rubric_'+lower;
    const empty=row=>!String(row?.[textKey]||'').trim();
    if(rows.length===56){
      ranges.forEach(([start,end],index)=>{
        if(rows.slice(start,end).every(empty))rows[start][textKey]=source.main[index];
      });
    }else if(lower==='en'&&rows.length===39&&rows[38]?.optionKey==='eucharist3_intercession'
      &&empty(rows[38])&&String(rows[37]?.text_en||'').trim()==='you have set us free.'){
      // AU/NZ's earlier import removed empty physical rows. Restore the same
      // approved English paragraphs before their retained intercession choice.
      rows.splice(38,0,...source.main.map((text,index)=>({text_en:text,...(index===0?{sp_en:'P.'}:{})})));
    }
    const options=rows.find(row=>row?.optionKey==='eucharist3_intercession')?.options;
    if(options?.ordinary?.lines?.slice(0,5).every(empty))options.ordinary.lines[0][textKey]=source.ordinary;
    if(options?.funeral?.lines?.slice(1,12).every(empty)){
      options.funeral.lines[1][textKey]=source.funeral;
      if(!String(options.funeral.lines[0]?.[rubricKey]||'').trim())options.funeral.lines[0][rubricKey]=source.condition;
    }
    return entry;
  }
  const api=Object.freeze({repair,data});
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ordoOrdinarySourceRepairs=api;
})(globalThis);
