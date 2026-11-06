'use strict';
const assert=require('node:assert/strict'),mass=require('./mass-data-editor');
for(const key of ['"text_kr"',"'text_kr'",'"text\\x5fkr"',"'text\\u005fkr'"]){
 const code=`(function(){const ordinary=Object.freeze([{id:'1.4 kyrie',type:'part',header:{kr:'자비송'},lines:[{${key}:'Original sentence',sp_kr:'✚'}]}]);globalThis.countryMassData=globalThis.countryMassData||{};globalThis.countryMassData.KR={jurisdiction:'KR',language:'KR',ordinary};})();`;
 const sources=[{jurisdiction:'KR',path:'virtual-editor-literals-'+key.length+'.js',code}],loaded=mass.getLoadedState(sources),block=mass.blocksForCountry(loaded,'KR')[0],row=block.rows[0],edited='Edited "quoted" sentence\n다음 줄';const result=mass.prepareMassSourceEdit({jurisdiction:'KR',blockKey:block.key,updates:[{key:row.key,kind:row.kind,text:edited,expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker}]},sources);
 assert.equal(mass.runCountryMassSources(result.sources).countries.KR.ordinary[0].lines[0].text_kr,edited);
}
for(const literal of [JSON.stringify([{path:[0,'lines',0,'text_kr'],value:'따옴표 "와" 줄\n다음'}]),"[{path:[0,'lines',0,'text_kr'],value:'legacy\\x20value'}]"]){const block=mass.ordinaryOverrideBlock('// MASS_DATA_EDITOR_OVERRIDES_START\nconst ordinaryEditorOverrides = '+literal+';\n// MASS_DATA_EDITOR_OVERRIDES_END');assert.equal(block.entries.length,1);assert.equal(block.entries[0].path.at(-1),'text_kr');}
console.log('Mass editor literals: fast JSON keys/override snapshots and legacy single-quoted, hexadecimal, Unicode-escaped JavaScript keys preserve edited text and line breaks.');
