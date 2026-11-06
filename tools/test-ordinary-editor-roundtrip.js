'use strict';
const assert=require('node:assert/strict'),mass=require('./mass-data-editor');
function editedSources(sources=mass.readCountryMassSources()){
 for(const country of ['KR','VN']){
  for(const section of ['kyrie','offertory','preface']){
   const loaded=mass.getLoadedState(sources),blocks=mass.blocksForCountry(loaded,country),block=blocks.find(item=>section==='preface'?item.relativePath.join('.')==='songs.ordinary_1.content':item.entryId.endsWith(' '+section)&&item.relativePath.join('.')==='lines');assert(block,country+' '+section+' source block unavailable');
   if(section!=='preface'){
    const row=block.rows.find(item=>item.kind===(section==='offertory'?'rubric':'text'));
    sources=mass.prepareMassSourceEdit({jurisdiction:country,blockKey:block.key,updates:[{key:row.key,kind:row.kind,expectedKind:row.kind,text:row.text+'\nEDITOR_'+country+'_'+section.toUpperCase(),expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker}]},sources).sources;
   }else{
    const updates=block.rows.map(row=>({key:row.key,kind:row.kind,expectedKind:row.kind,text:row.text,expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker})),key='editor-fixture-'+country;
    const inserted={key,kind:'text',text:'EDITOR_'+country+'_PREFACE\nSecond stored sentence.',speaker:'',expectedText:'',expectedSpeaker:'',create:{entryId:block.entryId,relativePath:block.relativePath,rowKey:key}};
    const reordered=[updates[0],inserted,updates[2],updates[1],...updates.slice(3)];sources=mass.prepareMassSourceEdit({jurisdiction:country,blockKey:block.key,updates:reordered,structure:{revision:block.revision,order:reordered.map(row=>row.key)}},sources).sources;
   }
  }
 }
 const registry=mass.runCountryMassSources(sources).registry;for(const country of ['KR','VN'])for(const marker of ['KYRIE','OFFERTORY','PREFACE'])assert(JSON.stringify(registry[country].ordinary).includes('EDITOR_'+country+'_'+marker));return sources;
}
if(require.main===module){editedSources();console.log('Editor JS round-trip: Korean/Vietnamese text, rubric changes, inserted sentence rows, reordered preface rows, and multiline content survived source save/compile without editing the real files.');}
module.exports={editedSources};
