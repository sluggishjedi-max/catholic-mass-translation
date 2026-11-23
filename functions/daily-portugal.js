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
const PROPER_RANKS=['feast','feastOfLord','solemnity'];
const READING_HEADING=/^LEITURA\s+I\b|^EVANGELHO\b/iu;
const FLOATING_OCTOBER_FEAST=/^(?:\d+\s*)?sabado antes do ultimo domingo de outubro\b/;
const PAGE_HEADER=new RegExp('^\\d+\\s*(?:(?:'+MONTHS.join('|')+')|ultimos dias feriais do advento|tempo comum|domingo [ivxlcdm]+|semana [ivxlcdm]+)$');
const DATED_PAGE_HEADER=/^\d{4,5}\s*de\s+[a-z]+$/;
function lectionaryLines(pages){
  return pages.join('\n').split(/\r?\n/).map(line=>line.trim())
    .filter(line=>line&&!/^\d+$/.test(line)&&!PAGE_HEADER.test(normalize(line))&&!DATED_PAGE_HEADER.test(normalize(line)));
}
function dateSection(pages,date){
  const [,month,day]=date.split('-').map(Number),lines=lectionaryLines(pages);
  const wanted=day+' de '+MONTHS[month-1];
  const start=lines.findIndex(line=>normalize(line)===wanted);
  if(start<0)return null;
  const next=lines.findIndex((line,index)=>index>start&&
    (/^\d{1,2} de [a-z]+$/.test(normalize(line))||FLOATING_OCTOBER_FEAST.test(normalize(line))));
  const section=lines.slice(start+1,next<0?lines.length:next);
  const reading=section.findIndex(line=>READING_HEADING.test(line));
  if(reading<0)return null;
  const heading=section.slice(0,reading);
  const rank=heading.findIndex(line=>/^(?:Festa|Solenidade)$/iu.test(line));
  const label=rank>=0?heading.slice(0,rank):heading;
  let text=section.join('\n');
  // The weekday rubric makes the second listed reading another first-reading option.
  const dayOfWeek=new Date(date+'T12:00:00Z').getUTCDay();
  if(dayOfWeek!==0&&/quando esta festa nao ocorre ao domingo, escolhe-se uma so/.test(normalize(heading.join(' ')))){
    text=text.replace(/^LEITURA II\b/gmu,'LEITURA I');
  }
  return {title:label.filter(line=>!/^(?:Comum|Em Portugal|pp?\.)/iu.test(line)).join(' '),text,proper:rank>=0,date};
}
function temporalSection(pages,context){const lines=lectionaryLines(pages),week=roman(context.week),weekday=WEEKDAYS[context.day];let activeWeek=false,start=-1,end=lines.length;
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
  const errors=[],available=[];let selected;
  // The portal publishes the weekday lectionary under the calendar date
  // on December 17–24, regardless of the week or Sunday cycle.
  if(context.season==='advent'&&context.day!==0&&month===12&&Number(date.slice(8))>=17){
    const link={url:ROOT+'lec4/4_01_Advento.pdf'};
    const source=await book(link,{db,fetchImpl});
    const section=dateSection(source.pages,date);
    if(!section)throw Error('portugal-advent-lectionary-date-not-resolved:'+date);
    return [{id:'day',label:context.temporalTitle,text:section.text,sourceUrl:link.url,sourcePage:ROOT+'lec_IV.php',
      file:{id:source.sha256,name:'Portugal_'+date+'.pdf',url:link.url,pages:source.pages.length,bytes:source.bytes.length}}];
  }
  // A fixed feast's own readings take precedence when the date's approved
  // calendar observes it. Memorials otherwise retain the ferial readings.
  try{let links;try{links=await discover('lec_Santoral.php',fetchImpl);}catch(error){
    const files={10:'7_10_Out.pdf',11:'7_11_Nov.pdf'};
    if(!files[month])throw error;
    links=[{url:ROOT+'santoral/'+files[month],label:MONTHS[month-1]}];
  }for(const link of links.filter(link=>normalize(link.label).includes(MONTHS[month-1]))){const pdf=await book(link,{db,fetchImpl}),section=dateSection(pdf.pages,date);if(section){const candidate={...section,pdf,link,index:'lec_Santoral.php'};available.push(candidate);if((section.proper&&PROPER_RANKS.includes(context.rank))||date.endsWith('-11-02'))selected=candidate;}}}catch(error){errors.push(error.message);}
  if(date.endsWith('-11-02')&&!selected)throw Error(errors[0]||'portugal-all-souls-pdf-not-resolved');
  if(!selected&&PROPER_RANKS.includes(context.rank))throw Error(errors[0]||'portugal-proper-lectionary-not-resolved:'+date);
  try{const links=selected?[]:await discover(index,fetchImpl);for(const link of links){const name=normalize(link.label);if(context.season==='ordinary'&&/advento|natal|quaresma|pascal/.test(name))continue;if(context.season!=='ordinary'&&/tempo comum/.test(name))continue;const pdf=await book(link,{db,fetchImpl}),section=temporalSection(pdf.pages,{...context,title:context.temporalTitle||context.title});if(section){const candidate={...section,pdf,link,index};available.push(candidate);selected||=candidate;break;}}}catch(error){errors.push(error.message);}
  if(!selected)throw Error('portugal-lectionary-date-not-resolved:'+date+(errors.length?':'+errors.join(';'):''));
  const {pdf,link}=selected,base={sourceUrl:link.url,sourcePage:ROOT+(selected.index||index),file:{id:pdf.sha256,name:'포르투갈_'+date+'.pdf',url:link.url,pages:pdf.pages.length,bytes:pdf.bytes.length}};
  if(date.endsWith('-11-02')){
    const markers=[...selected.text.matchAll(/^(?:MISSA\s+(III|II|I)|(?:(PRIMEIRA|SEGUNDA|TERCEIRA)\s+MISSA))\s*$/gmi)];
    const ids={I:'first',II:'second',III:'third',PRIMEIRA:'first',SEGUNDA:'second',TERCEIRA:'third'};
    if(markers.length!==3||new Set(markers.map(match=>ids[(match[1]||match[2]).toUpperCase()])).size!==3)throw Error('portugal-all-souls-pdf-formularies-not-resolved');
    const title=selected.title.split(/\s+As leituras\b/iu)[0];
    return markers.map((match,i)=>({...base,id:ids[(match[1]||match[2]).toUpperCase()],label:title+' · '+match[0].trim(),text:selected.text.slice(match.index,markers[i+1]?.index||selected.text.length)}));
  }
  const others=available.filter(item=>item!==selected);
  return [selected,...others].map((item,i)=>({sourceUrl:item.link.url,sourcePage:ROOT+item.index,file:{id:item.pdf.sha256,name:'포르투갈_'+date+'_'+(i+1)+'.pdf',url:item.link.url,pages:item.pdf.pages.length,bytes:item.pdf.bytes.length},id:i===0?'day':'source-'+require('./daily-schema').digest({title:item.title,text:item.text}).slice(0,20),label:item.title,text:item.text}));
}
module.exports={ROOT,INDEXES,pdfLinks,dateSection,temporalSection,collectPortugalDocuments};
