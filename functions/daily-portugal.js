'use strict';
const {JSDOM}=require('jsdom');
const {downloadPdf,archivePdf}=require('./daily-pdf');
const ROOT='https://liturgia.pt/leccionarios/';
const INDEXES=['lec_dom_a.php','lec_dom_b.php','lec_dom_c.php','lec_IV.php','lec_V.php','lec_VI.php','lec_Santoral.php'];
const MONTHS=['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const WEEKDAYS=['domingo','segunda-feira','terca-feira','quarta-feira','quinta-feira','sexta-feira','sabado'];
const normalize=value=>String(value).normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/\s+/g,' ').trim();
const cache=new Map();
function roman(number){const tokens=[[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];let result='';for(const [value,text]of tokens)while(number>=value){result+=text;number-=value;}return result;}
function pdfLinks(html,base){const doc=new JSDOM(html).window.document;return Array.from(doc.querySelectorAll('a[href]')).flatMap(node=>{try{const url=new URL(node.getAttribute('href'),base);return /^(?:www\.)?liturgia\.pt$/.test(url.hostname)&&url.pathname.startsWith('/leccionarios/')&&/\.pdf$/i.test(url.pathname)?[{url:url.href,label:node.textContent.trim()}]:[];}catch{return [];}});}
async function discover(index,fetchImpl){const url=ROOT+index,response=await fetchImpl(url,{signal:AbortSignal.timeout(30000)});if(!response.ok)throw Error('portugal-lectionary-index-http-'+response.status+':'+index);const links=pdfLinks(await response.text(),url);if(!links.length)throw Error('portugal-lectionary-index-has-no-pdfs:'+index);return links;}
async function book(link,{db,fetchImpl}){let item=cache.get(link.url);if(!item||item.expires<Date.now()){item={expires:Date.now()+600000,promise:(async()=>{const pdf=await downloadPdf(link.url,{fetchImpl});if(db)await archivePdf(db,{...pdf,country:'PT',name:'포르투갈_독서집_'+new URL(link.url).pathname.split('/').pop(),url:link.url});return pdf;})()};cache.set(link.url,item);item.promise.catch(()=>cache.delete(link.url));}return item.promise;}
function dateSection(pages,date){const [year,month,day]=date.split('-').map(Number),lines=pages.join('\n').split(/\r?\n/).map(line=>line.trim()).filter(line=>line&&!/^\d+$/.test(line));
  const wanted=new RegExp('^'+day+' de '+MONTHS[month-1]+'$');const start=lines.findIndex(line=>wanted.test(normalize(line)));if(start<0)return null;
  const next=lines.findIndex((line,index)=>index>start&&/^\d{1,2} de [a-z]+$/.test(normalize(line)));const section=lines.slice(start+1,next<0?lines.length:next);
  if(!section.some(line=>/^LEITURA\s+I\b|^EVANGELHO\b/iu.test(line)))return null;
  const reading=section.findIndex(line=>/^LEITURA\s+I\b|^EVANGELHO\b/iu.test(line));
  return {title:section.slice(0,reading).filter(line=>!/^(?:Comum|LEITURA|SALMO|EVANGELHO|Em Portugal|pp?\.)/iu.test(line)).join(' '),text:section.join('\n'),proper:section.slice(0,reading).some(line=>/^(?:Festa|Solenidade)$/iu.test(line)),date:year+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0')};
}
function temporalSection(pages,context){const lines=pages.join('\n').split(/\r?\n/).map(line=>line.trim()).filter(line=>line&&!/^\d+$/.test(line)),week=roman(context.week),weekday=WEEKDAYS[context.day];let activeWeek=false,start=-1,end=lines.length;
  for(let i=0;i<lines.length;i++){
    const value=normalize(lines[i]);
    const weekHeading=value.match(/^(?:semana\s+([ivxlcdm]+)|([ivxlcdm]+)\s+semana|domingo\s+([ivxlcdm]+)|([ivxlcdm]+)\s+domingo)(?:\s|$)/);
    if(weekHeading){const same=weekHeading.slice(1).find(Boolean)===week.toLowerCase();if(start>=0&&!same){end=i;break;}activeWeek=same;if(context.day===0&&same&&/domingo/.test(value)&&start<0)start=i;}
    if(context.day!==0&&activeWeek&&new RegExp('^'+weekday+'(?:\\s|$)').test(value)){if(start<0)start=i;}
    else if(start>=0&&context.day!==0&&/^(?:segunda-feira|terca-feira|quarta-feira|quinta-feira|sexta-feira|sabado)(?:\s|$)/.test(value)){end=i;break;}
  }
  if(start<0)return null;const text=lines.slice(start,end).join('\n');if(!/^LEITURA\s+I\b/mu.test(text)||!/^EVANGELHO\b/mu.test(text))return null;return {title:context.title||lines[start],text};
}
async function collectPortugalDocuments({date,context,db,fetchImpl=fetch}){
  const month=Number(date.slice(5,7)),index=context.day===0?'lec_dom_'+context.cycle.toLowerCase()+'.php':context.season==='ordinary'?(Number(date.slice(0,4))%2?'lec_V.php':'lec_VI.php'):'lec_IV.php';
  const errors=[];let selected;
  // A fixed feast's own readings take precedence when the date's approved
  // calendar observes it. Memorials otherwise retain the ferial readings.
  try{const links=await discover('lec_Santoral.php',fetchImpl);for(const link of links.filter(link=>normalize(link.label).includes(MONTHS[month-1]))){const pdf=await book(link,{db,fetchImpl}),section=dateSection(pdf.pages,date);if(section&&(section.proper&&context.day!==0||context.rank==='solemnity'||date.endsWith('-11-02'))){selected={...section,pdf,link};break;}}}catch(error){errors.push(error.message);}
  if(date.endsWith('-11-02')&&!selected)throw Error(errors[0]||'portugal-all-souls-pdf-not-resolved');
  if(!selected&&context.day!==0&&['feast','solemnity'].includes(context.rank))throw Error(errors[0]||'portugal-proper-lectionary-not-resolved:'+date);
  if(!selected){const links=await discover(index,fetchImpl);for(const link of links){const name=normalize(link.label);if(context.season==='ordinary'&&/advento|natal|quaresma|pascal/.test(name))continue;if(context.season!=='ordinary'&&/tempo comum/.test(name))continue;const pdf=await book(link,{db,fetchImpl}),section=temporalSection(pdf.pages,context);if(section){selected={...section,pdf,link};break;}}}
  if(!selected)throw Error('portugal-lectionary-date-not-resolved:'+date+(errors.length?':'+errors.join(';'):''));
  const {pdf,link}=selected,base={sourceUrl:link.url,sourcePage:ROOT+index,file:{id:pdf.sha256,name:'포르투갈_'+date+'.pdf',url:link.url,pages:pdf.pages.length,bytes:pdf.bytes.length}};
  if(date.endsWith('-11-02')){
    const markers=[...selected.text.matchAll(/^(?:MISSA\s+(III|II|I)|(?:(PRIMEIRA|SEGUNDA|TERCEIRA)\s+MISSA))\s*$/gmi)];
    const ids={I:'first',II:'second',III:'third',PRIMEIRA:'first',SEGUNDA:'second',TERCEIRA:'third'};
    if(markers.length!==3||new Set(markers.map(match=>ids[(match[1]||match[2]).toUpperCase()])).size!==3)throw Error('portugal-all-souls-pdf-formularies-not-resolved');
    return markers.map((match,i)=>({...base,id:ids[(match[1]||match[2]).toUpperCase()],label:selected.title+' · '+match[0].trim(),text:selected.text.slice(match.index,markers[i+1]?.index||selected.text.length)}));
  }
  return [{...base,id:'day',label:selected.title,text:selected.text}];
}
module.exports={ROOT,INDEXES,pdfLinks,dateSection,temporalSection,collectPortugalDocuments};
