(function(global){'use strict';
const workspaceOrigin='https://mass-progress-hub.sluggishjedi.chatgpt.site';
const receiver=parent!==global?parent:global.opener;
function send(type,detail){if(receiver)receiver.postMessage({source:'ordo-daily-editor',type,...detail},workspaceOrigin)}
global.addEventListener('ordo:daily-saved',e=>send('saved',e.detail));
global.addEventListener('message',e=>{if(e.origin!==workspaceOrigin||e.source!==receiver||e.data?.source!=='ordo-manager')return;if(e.data.type==='daily-import'){try{global.ordoDailyEditor.importSource(e.data.section);send('imported',{ok:true})}catch(error){send('imported',{ok:false,error:error.message})}}if(e.data.type==='ping')send('ready',{})});
send('ready',{});
if(new URLSearchParams(location.search).get('embedded')==='1'){document.documentElement.classList.add('workspace-embedded');document.querySelector('header a').textContent='앱을 새 창으로 열기';document.querySelector('header a').target='_blank';}
})(globalThis);
