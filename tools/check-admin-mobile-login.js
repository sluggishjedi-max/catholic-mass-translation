const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const appSource = fs.readFileSync(path.join(root, 'JS file/admin_date_review.js'), 'utf8');
const bridgeSource = fs.readFileSync(path.join(root, 'auth-hosting/admin-login.js'), 'utf8');
const home = 'https://sluggishjedi-max.github.io/catholic-mass-translation/';
const login = 'https://ordinary-mass-app.firebaseapp.com/admin-login.html';
const nonce = 'ab'.repeat(32);
const settle = async () => { for (let i=0;i<12;i++) await new Promise(resolve => setImmediate(resolve)); };
function fixture(url, options = {}) {
  const dom = new JSDOM('<div class="admin-review-settings"><button id="admin-review-login"></button><button id="admin-review-logout"></button><p id="admin-review-status"></p><form id="admin-review-controls"></form></div><h1 id="title"></h1><p id="status"></p><button id="retry"></button><a id="return" href="'+home+'"></a>', {url});
  const calls = {popup:0,redirect:0,credential:[],navigation:[],persistence:[],verification:0};
  let current = new URL(url), callback;
  const location = {
    get origin(){return current.origin;},get hostname(){return current.hostname;},get pathname(){return current.pathname;},
    get search(){return current.search;},get hash(){return current.hash;},get href(){return current.href;},
    assign:value=>calls.navigation.push(value),replace:value=>calls.navigation.push(value)
  };
  const history = {state:null,replaceState:(_,unused,value)=>{current = new URL(value,current);}};
  const storage = options.storage || dom.window.sessionStorage;
  const auth = {
    currentUser:null,
    setPersistence:async value=>{calls.persistence.push(value);if(options.persistenceBlocked && value==='session') throw new Error('storage');},
    onIdTokenChanged:cb=>{callback=cb;queueMicrotask(()=>cb(auth.currentUser));},
    signInWithPopup:async()=>{calls.popup++;if(options.popupError) throw {code:options.popupError};},
    signInWithRedirect:async()=>{calls.redirect++;if(options.redirectError) throw new Error('redirect');},
    getRedirectResult:async()=>options.result || {},
    signInWithCredential:async credential=>{calls.credential.push(credential);if(options.invalidCredential) throw new Error('invalid');auth.currentUser={uid:'admin',getIdToken:async()=>'firebase-id-token'};callback(auth.currentUser);},
    signOut:async()=>{auth.currentUser=null;callback?.(null);}
  };
  const authFactory=()=>auth;
  authFactory.Auth={Persistence:{SESSION:'session',NONE:'none'}};
  authFactory.GoogleAuthProvider=class{setCustomParameters(value){assert.equal(value.prompt,'select_account');}static credential(idToken,accessToken){return {idToken,accessToken};}};
  const firebase={apps:[{}],auth:authFactory,initializeApp:config=>{assert.equal(config.authDomain,location.hostname);}};
  const context={document:dom.window.document,location,history,sessionStorage:storage,navigator:{userAgent:options.mobile?'Mozilla/5.0 (Linux; Android 14) Chrome/145 Mobile':'Desktop',platform:'Win32'},
    crypto:webcrypto,firebase,URL,URLSearchParams,Uint8Array,Date,CustomEvent:dom.window.CustomEvent,AbortSignal,
    setInterval:()=>{},addEventListener:()=>{},dispatchEvent:()=>{},
    fetch:async()=>{calls.verification++;return {ok:true,status:200,json:async()=>({administrator:true,uid:'admin',validForSeconds:300})};}
  };
  vm.createContext(context);
  return {context,dom,calls,location,storage,run:source=>vm.runInContext(source,context)};
}
function pending(f, changes={}) {
  f.storage.setItem('ordo:admin-login-request',JSON.stringify({nonce,returnTo:home,hash:'#settings',createdAt:Date.now(),...changes}));
}
(async()=>{
  for(const mobile of [true,false]) {
    const f=fixture(home,{mobile});f.run(appSource);await settle();
    f.context.ordoAdminReview.syncChrome('KR','2026-10-12');
    f.dom.window.document.getElementById('admin-review-login').click();await settle();
    assert.equal(f.calls.popup,mobile?0:1);
    if(mobile) {
      const target=new URL(f.calls.navigation[0]);assert.equal(target.origin,new URL(login).origin);assert.equal(target.pathname,'/admin-login.html');
      const request=JSON.parse(f.storage.getItem('ordo:admin-login-request'));
      assert(/^[a-f0-9]{64}$/.test(request.nonce));assert.equal(request.returnTo,home);
      assert.equal(new URLSearchParams(target.hash.slice(1)).get('nonce'),request.nonce);
    }
    f.dom.window.close();
  }
  for(const popupError of ['auth/popup-blocked','auth/web-storage-unsupported','auth/popup-closed-by-user','auth/cancelled-popup-request']) {
    const f=fixture(home,{popupError});f.run(appSource);await settle();f.dom.window.document.getElementById('admin-review-login').click();await settle();
    assert.equal(f.calls.navigation.length,popupError.includes('blocked') || popupError.includes('storage') ? 1 : 0);f.dom.window.close();
  }
  for(const changes of [{},{nonce:'cd'.repeat(32)},{createdAt:Date.now()-11*60*1000},{returnTo:home+'V29.html'}]) {
    const f=fixture(home+'#'+new URLSearchParams({ordoAdminNonce:nonce,ordoAdminIdToken:'google-id-token'}),{persistenceBlocked:true});pending(f,changes);
    f.run(appSource);assert(!f.location.href.includes('Token'));await settle();
    assert.deepEqual(f.calls.persistence,['session','none']);
    const accepted=Object.keys(changes).length===0;
    assert.equal(f.calls.credential.length,accepted?1:0);assert.equal(f.context.ordoAdminReview.isVerified(),accepted);
    assert.equal(f.storage.getItem('ordo:admin-login-request'),null);
    if(accepted) {assert.equal(f.location.hash,'#settings');assert(f.calls.verification>=1);}
    else assert(f.dom.window.document.getElementById('admin-review-status').textContent.includes('다시 로그인'));
    f.dom.window.close();
  }
  for(const result of [{ordoAdminError:'cancelled'},{ordoAdminIdToken:'google-id-token'}]) {
    const f=fixture(home+'#'+new URLSearchParams({ordoAdminNonce:nonce,...result}),{invalidCredential:true});pending(f);f.run(appSource);await settle();
    assert(!f.location.href.includes('Token'));assert(!f.context.ordoAdminReview.isVerified());assert.equal(f.calls.verification,0);f.dom.window.close();
  }
  const blocked={getItem:()=>{throw new Error('storage');},setItem:()=>{throw new Error('storage');},removeItem:()=>{throw new Error('storage');}};
  const noStorage=fixture(home,{mobile:true,storage:blocked,persistenceBlocked:true});noStorage.run(appSource);await settle();
  noStorage.dom.window.document.getElementById('admin-review-login').click();await settle();
  assert.equal(noStorage.calls.navigation.length,0);assert(noStorage.dom.window.document.getElementById('admin-review-status').textContent.includes('저장소'));noStorage.dom.window.close();
  const request={nonce,returnTo:home,language:'KR',createdAt:Date.now()};
  const initial=fixture(login+'#'+new URLSearchParams(request));await initial.run(bridgeSource);await settle();
  assert.equal(initial.location.hash,'');assert.equal(initial.calls.redirect,1);assert.equal(initial.calls.popup,0);
  assert(initial.storage.getItem('ordo:admin-login-page-request'));initial.dom.window.close();
  for(const credential of [{idToken:'google-id-token'},{accessToken:'google-access-token'}]) {
    const f=fixture(login,{result:{credential}});f.storage.setItem('ordo:admin-login-page-request',JSON.stringify(request));
    await f.run(bridgeSource);await settle();assert.equal(f.calls.redirect,0);
    const destination=new URL(f.calls.navigation[0]);assert.equal(destination.origin,new URL(home).origin);assert.equal(destination.search,'');
    assert.equal(new URLSearchParams(destination.hash.slice(1)).get('ordoAdminNonce'),nonce);
    assert.equal(f.storage.getItem('ordo:admin-login-page-request'),null);f.dom.window.close();
  }
  for(const returnTo of ['https://evil.example/','https://sluggishjedi-max.github.io/other/','https://sluggishjedi-max.github.io/catholic-mass-translation/../../other/',home+'#token']) {
    const f=fixture(login+'#'+new URLSearchParams({...request,returnTo}));await f.run(bridgeSource);await settle();
    assert.equal(f.calls.navigation.length,0);assert.equal(f.calls.redirect,0);assert.equal(f.dom.window.document.getElementById('return').href,home);f.dom.window.close();
  }
  for(const options of [{storage:blocked},{result:{}},{redirectError:true}]) {
    const fresh=options.redirectError || options.storage;
    const f=fixture(login+(fresh?'#'+new URLSearchParams(request):''),options);
    if(!fresh)f.storage.setItem('ordo:admin-login-page-request',JSON.stringify(request));
    await f.run(bridgeSource);await settle();assert.equal(f.calls.navigation.length,0);assert(f.dom.window.document.getElementById('status').textContent.includes('완료할 수 없습니다'));f.dom.window.close();
  }
  const config=JSON.parse(fs.readFileSync(path.join(root,'firebase.json'),'utf8'));
  assert.equal(config.hosting.site,'ordinary-mass-app');assert.equal(config.hosting.public,'auth-hosting');
  assert.deepEqual(fs.readdirSync(path.join(root,'auth-hosting')).sort(),['admin-login.html','admin-login.js']);
  console.log('Mobile administrator login: same-origin redirect, popup fallback/cancellation, credentials, nonce/expiry, storage restrictions, unsafe returns and isolated Hosting checks passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
