'use strict';
const {digest}=require('./daily-schema');
const titleText=value=>String(value||'').replace(/\s+/gu,' ').trim();
function originalUrl(value){
  try{const url=new URL(value);return url.hostname==='r.jina.ai'?new URL(url.pathname.replace(/^\//u,'')):url;}catch{return null;}
}
function datedMassUrl(value,base,date){
  try{
    const url=new URL(value,base),origin=originalUrl(base);
    if(!origin||url.protocol!=='https:'||url.hostname!==origin.hostname||url.username||url.password)return null;
    const compact=date.replaceAll('-',''),us=date.slice(5,7)+date.slice(8,10)+date.slice(2,4),text=decodeURIComponent(url.href);
    if(url.hostname==='bible.usccb.org')return new RegExp('/bible/readings/(?:'+us+'(?:[-.][a-z0-9.-]+)?|'+us.slice(0,4)+'-[a-z][a-z-]+(?:\\.cfm)?)$','iu').test(url.pathname)?url:null;
    if(url.hostname==='universalis.com'){
      const prefix=origin.pathname.split('/'+compact+'/')[0];
      return url.pathname===prefix+'/'+compact+'/mass.htm'?url:null;
    }
    if(/missa\.cbck\.or\.kr$/u.test(url.hostname))return url.pathname.startsWith('/DailyMissa/'+compact)&&new RegExp('/DailyMissa/'+compact+'(?:/\\d+)?/?$','u').test(url.pathname)?url:null;
    if(/chiesacattolica\.it$/u.test(url.hostname)&&url.pathname!=='/liturgia-del-giorno/')return null;
    if(/pocketterco\.com\.br$/u.test(url.hostname))return url.pathname.startsWith('/liturgia/'+Number(date.slice(8))+'/'+Number(date.slice(5,7))+'/'+date.slice(0,4))?url:null;
    if(url.pathname!==origin.pathname)return null;
    const dated=text.includes(date)||text.includes(compact);
    if(!dated)return null;
    // A choice must retain the requested date; calendar navigation is not a Mass.
    for(const key of ['date','datum','data-liturgia'])if(origin.searchParams.has(key)&&url.searchParams.get(key)!==origin.searchParams.get(key))return null;
    return url;
  }catch{return null;}
}
function choiceId(kind,value){return kind+'-'+digest(value).slice(0,20);}
function sourceLinks(document,base,date){
  const links=[...document.querySelectorAll('a[href]')].map(node=>({value:node.getAttribute('href'),label:titleText(node.textContent)}));
  for(const select of document.querySelectorAll('select[name]')){
    if(!/mass|missa|messa|messe|misa|liturg|celebr|미사|彌撒|ミサ/iu.test(select.name+' '+select.id))continue;
    for(const option of select.options){
      if(!option.value)continue;
      const url=new URL(base);url.searchParams.set(select.name,option.value);
      links.push({value:/^(?:https?:|\/)/u.test(option.value)?option.value:url.href,label:titleText(option.textContent)});
    }
  }
  const choices=new Map(),origin=originalUrl(base);if(!origin)return [];
  for(const link of links){
    const url=datedMassUrl(link.value,origin.href,date);if(!url)continue;
    url.hash='';const original=new URL(origin);original.hash='';
    if(url.href===original.href)continue;
    const suffix=url.hostname==='bible.usccb.org'?url.pathname.match(/-([a-z-]+)(?:\.cfm)?$/iu)?.[1]?.toLowerCase():'';
    const id=suffix||choiceId('source',url.href);
    const previous=choices.get(id),label=link.label||id;
    if(!previous||/in the dioceses|readings for/iu.test(previous.label))choices.set(id,{id,label,sourceUrl:url.href});
  }
  return [...choices.values()];
}
function discoverSourceMasses({window,source,url,date,parse}){
  const base=originalUrl(url);if(!base||!/<[a-z][\s\S]*>/iu.test(source))return {links:[],masses:[]};
  const document=new window.DOMParser().parseFromString(source,'text/html'),links=sourceLinks(document,base.href,date);
  document.querySelectorAll('script,style,nav,footer,aside').forEach(node=>node.remove());
  const headings=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')],candidates=[];
  const controlled=[];
  for(const heading of headings){
    const target=heading.getAttribute('data-bs-target')||heading.getAttribute('data-target')||(heading.getAttribute('aria-controls')?'#'+heading.getAttribute('aria-controls'):'');
    if(!/^#[a-z0-9_-]+$/iu.test(target))continue;
    const container=document.getElementById(target.slice(1));if(!container)continue;
    controlled.push({index:headings.indexOf(heading),label:titleText(heading.textContent),html:heading.outerHTML+container.outerHTML});
  }
  for(let index=0;index<headings.length;index++){
    const heading=headings[index],label=titleText(heading.textContent);if(!label||label.length>240)continue;
    const level=Number(heading.tagName.slice(1)),next=headings.slice(index+1).find(node=>Number(node.tagName.slice(1))<=level);
    const control=controlled.find(candidate=>candidate.index===index);
    const range=document.createRange();range.setStartBefore(heading);if(next)range.setEndBefore(next);else range.setEndAfter(document.body.lastChild||heading);
    const fragment=range.cloneContents(),holder=document.createElement('div');holder.append(fragment);
    if(control)holder.innerHTML=control.html;
    // Requiring both structural scripture headings prevents summaries, biography,
    // year-I/year-II blocks and long/short readings from becoming whole Masses.
    const sectionHeadings=[...holder.querySelectorAll('h1,h2,h3,h4,h5,h6')].slice(1).map(node=>titleText(node.textContent));
    const first=/^(?:제\s*1\s*독서|第一朗読|讀經一|读经一|Reading(?:\s*[1I])?\b|First reading\b|Bài đọc\s*(?:1|I)\b|Prima Lettura\b|LEITURA\s*I\b|PRIMERA LECTURA\b|ERSTE\s*Lesung\b)/iu;
    const gospel=/^(?:복음(?:\s|$)|福音(?:朗読)?|Gospel(?:\s|$)|Tin Mừng|Vangelo|EVANGELHO|EVANGELIO|Evangelium)/iu;
    if(sectionHeadings.some(text=>first.test(text))&&sectionHeadings.some(text=>gospel.test(text)))candidates.push({index,end:next?headings.indexOf(next):headings.length,label,html:holder.innerHTML,controlled:!!control});
  }
  const leaves=candidates.filter(candidate=>candidate.controlled||!candidates.some(child=>child.index>candidate.index&&child.index<candidate.end));
  const masses=[];
  for(const candidate of leaves){
    const parsed=parse('<html><head><title>'+candidate.label.replaceAll('&','&amp;').replaceAll('<','&lt;')+'</title></head><body>'+candidate.html+'</body></html>');
    if(!parsed?.data?.reading1||!parsed.data.gospel)continue;
    masses.push({...parsed,id:choiceId('inline',candidate.label),title:candidate.label,sourceUrl:base.href,sourceMode:'publisher-inline-formulary'});
  }
  // Universalis also publishes complete ferial/proper sets separated by prose
  // labels rather than headings. Keep only independently parseable whole sets.
  const body=document.body.innerHTML,markers=[...body.matchAll(/These are the readings for the\s+([^<]+)(?:<[^>]+>)*[.:]?/giu)];
  if(markers.length>1)for(let index=0;index<markers.length;index++){
    const marker=markers[index],label=titleText(marker[1]).replace(/[.:]$/u,''),parsed=parse('<html><head><title>'+label+'</title></head><body>'+body.slice(marker.index,markers[index+1]?.index||body.length)+'</body></html>');
    if(parsed?.data?.reading1&&parsed.data.gospel)masses.push({...parsed,id:choiceId('inline',label),title:label,sourceUrl:base.href,sourceMode:'publisher-inline-formulary'});
  }
  return {links,masses:masses.length>1?masses:[]};
}
module.exports={originalUrl,datedMassUrl,sourceLinks,choiceId,discoverSourceMasses};
