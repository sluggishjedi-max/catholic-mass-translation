'use strict';
const {downloadPdf,archivePdf}=require('./daily-pdf');
const PAGE='https://sliturgy.catholic.org.tw/禮儀及聖事/禮儀經文/每日彌撒';
const DEFAULT_APP='https://script.google.com/macros/s/AKfycbzI_GhQxCC6WB-cGEoczxr2IHaTvpn6UIAgeWEWRr_7TuEWjt7EmJJnrW7TZT0FYhvPvQ';
async function officialTaiwanFiles(date,fetchImpl=fetch){
  let base=DEFAULT_APP;
  const page=await fetchImpl(encodeURI(PAGE),{signal:AbortSignal.timeout(30000)});
  if(page.ok){const html=await page.text(),match=html.match(/https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec/);if(match)base=match[0].replace(/\/exec$/,'');}
  const response=await fetchImpl(base+'/callback?nocache_id='+Date.now(),{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','X-Same-Domain':'1',Referer:base+'/exec'},body:new URLSearchParams({request:JSON.stringify(['getDataByDate',JSON.stringify([date]),null,[0],null,null,1,0])}),signal:AbortSignal.timeout(60000)});
  if(!response.ok)throw Error('taiwan-date-query-http-'+response.status);
  const body=await response.text(),payload=JSON.parse(body.replace(/^\)\]\}'\s*/,'')),row=payload.find(item=>item[0]==='op.exec');
  if(!row||row[1]?.[0]!==0)throw Error('taiwan-date-query-invalid-response');
  const entries=JSON.parse(row[1][1]);
  const files=[...new Map(entries.filter(item=>item.link).map(item=>{const url=new URL(item.link);if(url.hostname!=='drive.google.com')throw Error('taiwan-unexpected-file-host');const id=url.pathname.match(/\/d\/([\w-]+)/)?.[1]||url.searchParams.get('id');if(!id||!/^[\w-]{10,100}$/.test(id))throw Error('taiwan-invalid-file-id');return [id,{id,title:String(item.text||''),url:url.href}];})).values()];
  if(!files.length)throw Error('taiwan-date-files-not-published');if(files.length>12)throw Error('taiwan-file-count-exceeded');return files;
}
function documentVariant(file,index,date){const title=file.title;if(/追思|諸靈/.test(title)&&date.endsWith('-11-02'))return /第三|三台/.test(title)?'third':/第二|二台/.test(title)?'second':'first';if(/前夕|守夜/.test(title))return 'pdf-'+file.id.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,45);return index===0?'day':'pdf-'+file.id.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,45);}
async function collectTaiwanDocuments({date,db,fetchImpl=fetch}){
  const entries=await officialTaiwanFiles(date,fetchImpl),documents=[];
  for(let index=0;index<entries.length;index++){
    const entry=entries[index];
    try{
    const pdf=await downloadPdf('https://drive.usercontent.google.com/download?id='+entry.id+'&export=download&confirm=t',{fetchImpl});
    const file={...pdf,country:'TW',date,name:'대만_'+date+'_'+(index+1)+'.pdf',url:entry.url};
    if(db)await archivePdf(db,file);
    documents.push({id:documentVariant(entry,index,date),label:entry.title||'彌撒 '+(index+1),sourceUrl:entry.url,sourcePage:PAGE,file:{id:pdf.sha256,name:file.name,url:entry.url,pages:pdf.pages.length,bytes:pdf.bytes.length},text:pdf.pages.join('\n\n')});
    }catch(error){documents.push({id:documentVariant(entry,index,date),label:entry.title||'彌撒 '+(index+1),sourceUrl:entry.url,error:String(error.message)});}
  }
  return documents;
}
module.exports={PAGE,officialTaiwanFiles,collectTaiwanDocuments};
