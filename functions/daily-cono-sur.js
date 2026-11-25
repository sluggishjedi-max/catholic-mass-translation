'use strict';

const {createHash}=require('node:crypto');
const {gunzipSync}=require('node:zlib');
const collection='cono_sur_source_documents';
const countries=new Set(['AR','BO','CL','PY','UY']);

function archivedSourcePath(value) {
  const url=new URL(value);
  return url.protocol==='https:' && ['curas.com.ar','www.curas.com.ar'].includes(url.hostname)
    && /^\/(?:Leccionarios|Misal3)\/.+\.html?$/iu.test(url.pathname) ? url.pathname : '';
}

function documentId(path) {
  return createHash('sha256').update(path).digest('hex');
}

function archivedConoSurFetch(db,fetchSource) {
  return async (url,options) => {
    const path=archivedSourcePath(url);
    if(path){
      const document=await db.collection(collection).doc(documentId(path)).get();
      const data=document.data();
      if(data?.path===path && data.htmlGzip) {
        const html=gunzipSync(Buffer.from(data.htmlGzip,'base64')).toString('utf8');
        return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8'}});
      }
    }
    return fetchSource(url,options);
  };
}

module.exports={collection,countries,documentId,archivedSourcePath,archivedConoSurFetch};
