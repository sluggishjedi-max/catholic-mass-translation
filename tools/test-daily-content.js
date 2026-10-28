'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context=vm.createContext({});vm.runInContext(fs.readFileSync('JS file/daily_mass_content.js','utf8'),context);const content=context.ordoDailyContent;
for(const marker of ['또는','Or:','Ou;','或：','Hoặc:','Oppure','または','Oder']){
 const parsed=content.normalizeParsed({title:'Fixture',data:{entrance:{lines:[{text:''},{text:'First option.'},{text:marker},{text:'Second option.'}],optionCits:[{cit_en:'Ps 1:1'},{cit_en:'Ps 2:2'}]}}});
 assert.equal(parsed.data.entrance.options.length,2,marker);assert.equal(parsed.data.entrance.text,'First option.');assert.equal(parsed.data.entrance.options[1].cit_en,'Ps 2:2');
 const changed=content.replaceOption(parsed.data.entrance,1,{text:'Edited second.',lines:[{text:'Edited second.'}],cit_en:'Ps 3:3'});assert.equal(changed.options[0].text,'First option.');assert.equal(changed.options[1].text,'Edited second.');
}
assert.equal(content.normalizeParsed({data:{gospel:{lines:[{text:'',role:'summary',ai:'Missing'},{text:'Original body.'}]}}}).data.gospel.lines[0].text,'Original body.');
assert.equal(content.normalizeSection({lines:[{text:'Ou;'}]}).text,'');
const {pdfLinks,dateSection,temporalSection}=require('../functions/daily-portugal');
assert.equal(pdfLinks('<a href="domA/1_02_A_Natal.pdf">Natal</a><a href="https://other.example/file.pdf">Other</a>','https://liturgia.pt/leccionarios/lec_dom_a.php').length,1);
const pages=['OUTUBRO\n27 de outubro\nOutro Santo\n28 de outubro\nSANTOS SIMÃO E JUDAS\nFesta\nLEITURA I\nEf 2,19-22\nTexto original.\nEVANGELHO\nLc 6,12-16\nTexto original.\n29 de outubro\nOutro Santo'];
const fixed=dateSection(pages,'2026-10-28');assert(fixed.proper);assert(fixed.title.includes('SIMÃO'));assert(!fixed.text.includes('Outro Santo'));assert.equal(dateSection(pages,'2026-10-30'),null);
const ferial=temporalSection(['SEMANA XXX\nQUARTA-FEIRA\nLEITURA I\nUma leitura.\nEVANGELHO\nUm evangelho.\nQUINTA-FEIRA\nOutro dia.'],{week:30,day:3,season:'ordinary'});assert(ferial.text.includes('Uma leitura.'));assert(!ferial.text.includes('Outro dia'));
console.log('Daily content: structured multilingual alternatives, independent option edits, leading empty summaries and Portuguese calendar/PDF selection passed.');
