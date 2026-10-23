const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium, devices } = require('@playwright/test');
const root = path.resolve(__dirname,'..');
const home = 'https://sluggishjedi-max.github.io/catholic-mass-translation/';
const login = 'https://ordinary-mass-app.firebaseapp.com/admin-login.html';
const appSource = fs.readFileSync(path.join(root,'JS file/admin_date_review.js'),'utf8');
const bridgeSource = fs.readFileSync(path.join(root,'auth-hosting/admin-login.js'),'utf8');
const bridgeHtml = fs.readFileSync(path.join(root,'auth-hosting/admin-login.html'),'utf8');
const csp = JSON.parse(fs.readFileSync(path.join(root,'firebase.json'),'utf8')).hosting.headers[0].headers.find(h=>h.key==='Content-Security-Policy').value;
function sdk(accepted) {
  return `(() => {
    const returned = location.search === '?fixture-returned=1';
    let callback;
    const auth = {currentUser:null,setPersistence:async()=>{},onIdTokenChanged:cb=>{callback=cb;queueMicrotask(()=>cb(null));},
      getRedirectResult:async()=>returned?{credential:{idToken:'fixture-google-token'}}:{},
      signInWithRedirect:async()=>{sessionStorage.setItem('fixture:redirect-domain',location.hostname);location.assign('/admin-login.html?fixture-returned=1');},
      signInWithCredential:async credential=>{if(credential.idToken!=='fixture-google-token')throw new Error('invalid credential');await Promise.resolve();
        auth.currentUser={uid:'${accepted?'administrator':'visitor'}',getIdToken:async()=>'${accepted?'administrator':'visitor'}-token'};callback(auth.currentUser);},
      signInWithPopup:async()=>{throw new Error('Mobile must use the login page');},
      signOut:async()=>{auth.currentUser=null;callback?.(null);}};
    const factory=()=>auth;factory.Auth={Persistence:{SESSION:'session',NONE:'none'}};
    factory.GoogleAuthProvider=class{setCustomParameters(){}static credential(idToken,accessToken){return {idToken,accessToken};}};
    globalThis.firebase={apps:[{}],auth:factory,initializeApp:config=>{if(config.authDomain!==location.hostname)throw new Error('cross-origin auth helper');}};
  })();`;
}
(async()=>{
  const browser=await chromium.launch({headless:true});
  try {
    if(process.argv.includes('--live')) {
      const context=await browser.newContext({...devices['Pixel 7']});
      const page=await context.newPage();const errors=[];
      page.on('pageerror',error=>errors.push(error.message));
      const request=new URLSearchParams({nonce:'ab'.repeat(32),returnTo:home,language:'KR'});
      await page.goto(login+'#'+request,{waitUntil:'domcontentloaded'});
      await page.waitForURL(url=>url.hostname==='accounts.google.com',{timeout:45000});
      assert(!await page.locator('body').innerText().then(text=>text.includes('missing initial state')));
      assert.deepEqual(errors,[]);
      console.log('Live Android browser: first-party Firebase redirect reached Google account sign-in without missing initial state. No account credentials were entered.');
      await context.close();return;
    }
    for(const [device,accepted,native] of [['Pixel 7',true,false],['iPhone 13',true,false],['Pixel 7',false,false],['Pixel 7',true,true],['Pixel 7',false,true]]) {
      const context=await browser.newContext({...devices[device]});
      const page=await context.newPage();const errors=[];const origins=[];
      page.on('pageerror',error=>errors.push(error.message));
      page.on('framenavigated',frame=>{if(frame===page.mainFrame())origins.push(new URL(frame.url()).origin);});
      if(native)await page.addInitScript(()=>{globalThis.OrdoAndroid={isAppRuntime:()=>true,openAdminSignIn:url=>{globalThis.fixtureExternalLoginUrl=url;}};});
      await context.route('**/*',async route=>{
        const url=new URL(route.request().url());
        if(url.origin===new URL(home).origin && url.pathname==='/catholic-mass-translation/') {
          return route.fulfill({contentType:'text/html; charset=utf-8',body:`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><div class="admin-review-settings"><button id="admin-review-login">Login</button><button id="admin-review-logout">Logout</button><p id="admin-review-status"></p><form id="admin-review-controls"><input id="admin-review-date" type="date"><button id="admin-review-submit">Review</button></form></div><script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script><script src="admin-review.js"></script><script src="settings.js"></script>`});
        }
        if(url.origin===new URL(home).origin && url.pathname.endsWith('/admin-review.js')) return route.fulfill({contentType:'application/javascript',body:appSource});
        if(url.origin===new URL(home).origin && url.pathname.endsWith('/settings.js')) return route.fulfill({contentType:'application/javascript',body:"globalThis.openSettings=()=>document.body.dataset.settings='open';ordoAdminReview.syncChrome('KR','2026-10-12');"});
        if(url.origin===new URL(login).origin && url.pathname==='/admin-login.html') return route.fulfill({contentType:'text/html',headers:{'Content-Security-Policy':csp,'Referrer-Policy':'no-referrer'},body:bridgeHtml});
        if(url.origin===new URL(login).origin && url.pathname==='/admin-login.js') return route.fulfill({contentType:'application/javascript',body:bridgeSource});
        if(url.hostname==='www.gstatic.com') return route.fulfill({contentType:'application/javascript',body:sdk(accepted)});
        if(url.pathname.endsWith('/adminReviewAccess')) {
          if(route.request().method()==='OPTIONS') return route.fulfill({status:204,headers:{'Access-Control-Allow-Origin':new URL(home).origin,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Authorization'}});
          const permitted=route.request().headers().authorization==='Bearer administrator-token';
          return route.fulfill({status:permitted?200:403,contentType:'application/json',headers:{'Access-Control-Allow-Origin':new URL(home).origin},body:JSON.stringify(permitted?{administrator:true,uid:'administrator',validForSeconds:300}:{error:'administrator-required'})});
        }
        return route.abort();
      });
      await page.goto(home);await page.waitForFunction(()=>!document.getElementById('admin-review-login').disabled);
      await page.locator('#admin-review-login').click();
      if(native){
        const externalUrl=await page.evaluate(()=>globalThis.fixtureExternalLoginUrl);
        const external=await context.newPage();await external.goto(externalUrl);
        await external.waitForFunction(()=>document.getElementById('return')?.getAttribute('href')?.startsWith('intent://admin-login?ordoAdminNonce='));
        // The completed login has a token; the initial cancel link has none.
        await external.waitForFunction(()=>document.getElementById('return')?.getAttribute('href')?.includes('ordoAdminIdToken='));
        const intent=await external.locator('#return').getAttribute('href');
        const payload=intent.slice('intent://admin-login?'.length,intent.indexOf('#Intent'));
        assert.equal(await page.evaluate(()=>!!sessionStorage.getItem('ordo:admin-login-request')),true);
        assert.equal(await external.evaluate(()=>sessionStorage.getItem('ordo:admin-login-request')),null);
        await page.evaluate(payload=>ordoAdminReview.acceptAppSignInResult(payload),payload);
        await external.close();
      }
      await page.waitForFunction(()=>document.body.dataset.settings==='open').catch(async error=>{
        console.error({device,accepted,origin:new URL(page.url()).origin,path:new URL(page.url()).pathname,body:await page.locator('body').innerText(),errors,origins});throw error;
      });
      await page.waitForFunction(expected=>expected?ordoAdminReview.isVerified():document.getElementById('admin-review-status').textContent.includes('권한이 없는'),accepted).catch(async error=>{
        console.error({origin:new URL(page.url()).origin,path:new URL(page.url()).pathname,status:await page.locator('#admin-review-status').textContent(),errors,origins});throw error;
      });
      assert.equal(page.url(),home);assert.equal(origins.includes(new URL(login).origin),!native);
      assert.equal(await page.locator('#admin-review-controls').isVisible(),accepted);
      assert.equal(await page.evaluate(()=>sessionStorage.getItem('ordo:admin-login-request')),null);
      assert.equal(await page.evaluate(()=>Object.keys(sessionStorage).some(key=>sessionStorage.getItem(key).includes('fixture-google-token'))),false);
      if(accepted) {
        assert(await page.evaluate(()=>ordoAdminReview.selectDate('2030-11-02')));
        await page.locator('#admin-review-logout').click();
        assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'');
        assert.equal(await page.locator('#admin-review-controls').isVisible(),false);
      }
      assert.deepEqual(errors,[]);
      console.log(JSON.stringify({device,accepted,native:!!native,originalAppReturn:true,nonceConsumed:true,credentialRemoved:true,settingsRestored:true}));
      await context.close();
    }
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
