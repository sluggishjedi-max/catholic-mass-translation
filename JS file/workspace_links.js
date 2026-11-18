(function(global){'use strict';
const workspace='https://mass-progress-hub.sluggishjedi.chatgpt.site/';
let siteSession=false;
function sync(){const approved=global.ordoWorkspacePreview===true?siteSession:!!global.ordoAdminReview?.isVerified();for(const e of document.querySelectorAll('[data-admin-workspace]'))e.hidden=!approved;for(const e of document.querySelectorAll('[data-workspace-link]')){e.href=workspace+(e.dataset.workspaceLink==='daily'?'?view=daily':'');e.target='_blank';e.rel='noopener noreferrer';}}
global.addEventListener('ordo:admin-auth-changed',sync);global.addEventListener('focus',sync);setInterval(sync,1000);sync();
if(global.ordoWorkspacePreview===true)fetch('/api/session',{cache:'no-store',credentials:'same-origin'}).then(r=>r.ok?r.json():null).then(a=>{siteSession=!!a?.signedIn;sync()}).catch(()=>{siteSession=false;sync()});
})(globalThis);
