'use strict';
const crypto=require('node:crypto');
const path=require('node:path');
const FILES='daily_mass_files';
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
let pdfModule;
async function extractPdf(bytes){
  pdfModule ||= import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjs=await pdfModule;
  const base=path.dirname(require.resolve('pdfjs-dist/package.json'));
  const task=pdfjs.getDocument({data:new Uint8Array(bytes),isEvalSupported:false,useSystemFonts:false,disableFontFace:true,cMapUrl:path.join(base,'cmaps').replaceAll('\\','/')+'/',cMapPacked:true,standardFontDataUrl:path.join(base,'standard_fonts').replaceAll('\\','/')+'/',verbosity:0});
  let pdf;
  try{
    pdf=await task.promise;if(pdf.numPages>1200)throw Error('pdf-page-budget-exceeded');
    const pages=[];
    for(let number=1;number<=pdf.numPages;number++){
      const page=await pdf.getPage(number),text=await page.getTextContent();
      let previousY=null,previousRight=null,line='',rows=[];
      for(const item of text.items){
        if(!('str' in item))continue;
        const y=item.transform[5],x=item.transform[4];
        if(previousY!==null&&Math.abs(y-previousY)>3&&line.trim()){rows.push(line.trim());line='';previousRight=null;}
        if(previousRight!==null&&x-previousRight>1&&/[\p{L}\p{N}]$/u.test(line)&&/^[\p{Script=Latin}\p{N}]/u.test(item.str))line+=' ';
        line+=item.str;
        if(item.hasEOL){rows.push(line.trim());line='';previousRight=null;}else previousRight=x+item.width;
        previousY=y;
      }
      if(line.trim())rows.push(line.trim());pages.push(rows.join('\n'));page.cleanup();
    }
    if(!pages.join('').trim())throw Error('pdf-has-no-extractable-text');
    return pages;
  }finally{if(pdf)await pdf.destroy();else await task.destroy();}
}
async function downloadPdf(url,{fetchImpl=fetch,maxBytes=18*1024*1024}={}){
  const target=new URL(url);if(target.protocol!=='https:'||target.username||target.password)throw Error('invalid-pdf-url');
  const response=await fetchImpl(target.href,{signal:AbortSignal.timeout(60000)});if(!response.ok)throw Error('pdf-download-http-'+response.status);
  const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.length;if(size>maxBytes)throw Error('pdf-file-too-large');chunks.push(Buffer.from(chunk));}
  const bytes=Buffer.concat(chunks);if(!bytes.subarray(0,5).equals(Buffer.from('%PDF-')))throw Error('pdf-response-is-not-pdf');
  return {bytes,sha256:hash(bytes),pages:await extractPdf(bytes)};
}
async function archivePdf(db,file){
  const ref=db.collection(FILES).doc(file.sha256),existing=await ref.get();
  if(existing.exists)return file.sha256;
  const chunks=file.bytes.toString('base64').match(/.{1,400000}/g)||[];
  // Large books use bounded batches. The ready flag is written only after every
  // chunk exists; retries may safely replace identical content-addressed chunks.
  for(let start=0;start<chunks.length;start+=15){const batch=db.batch();chunks.slice(start,start+15).forEach((data,i)=>batch.set(ref.collection('chunks').doc(String(start+i).padStart(5,'0')),{index:start+i,data}));await batch.commit();}
  await ref.set({sha256:file.sha256,country:file.country,date:file.date||'',name:file.name,url:file.url,bytes:file.bytes.length,pages:file.pages.length,chunks:chunks.length,ready:true,createdAt:new Date().toISOString()});return file.sha256;
}
async function readPdf(db,id){if(!/^[a-f0-9]{64}$/.test(id))throw Error('invalid-file-id');const ref=db.collection(FILES).doc(id),snapshot=await ref.get();if(!snapshot.exists||!snapshot.data().ready)return null;const metadata=snapshot.data(),chunks=await ref.collection('chunks').orderBy('index','asc').get();if(chunks.size!==metadata.chunks&&chunks.docs.length!==metadata.chunks)throw Error('incomplete-pdf-archive');const bytes=Buffer.from(chunks.docs.map(doc=>doc.data().data).join(''),'base64');if(hash(bytes)!==id)throw Error('pdf-archive-hash-mismatch');return {metadata,bytes};}
module.exports={FILES,extractPdf,downloadPdf,archivePdf,readPdf};
