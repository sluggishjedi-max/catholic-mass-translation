const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname,'..');
const massTool = require('./mass-data-editor');
const registry = massTool.runCountryMassSources(massTool.readCountryMassSources()).registry;
(async () => {
  const server=http.createServer((req,res)=>{
    const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if(!file.startsWith(root+path.sep)) return res.writeHead(403).end();
    fs.readFile(file,(error,data)=>{if(error)return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8');res.end(data);});
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({headless:true});
  try {
    for(const viewport of [{width:1280,height:900},{width:390,height:844}]) {
      const page=await browser.newPage({viewport});
      const errors=[];page.on('pageerror',error=>errors.push(error.message));
      let permitted=true;
      await page.addInitScript(registry=>{
        globalThis.countryMassData=registry;globalThis.uploadedCountryMassData=registry;
        let callback;
        const user=uid=>({uid,getIdToken:async()=>uid+'-token'});
        const auth={currentUser:null,setPersistence:async()=>{},onIdTokenChanged:cb=>{callback=cb;queueMicrotask(()=>cb(null));},
          signInWithPopup:async()=>{auth.currentUser=user(globalThis.fixtureAccount || 'administrator');callback(auth.currentUser);},
          signOut:async()=>{auth.currentUser=null;callback(null);}};
        const authFactory=()=>auth;
        authFactory.Auth={Persistence:{SESSION:'session'}};
        authFactory.GoogleAuthProvider=class{setCustomParameters(){}};
        globalThis.firebase={apps:[{}],auth:authFactory};
        globalThis.fixtureRefreshToken=()=>callback(auth.currentUser);
        localStorage.setItem('isAdmin','true');localStorage.setItem('reviewDate','2030-11-02');
      },registry);
      await page.route('**/*',route=>{
        const url=new URL(route.request().url());
        if(url.pathname.endsWith('/adminReviewAccess')) {
          const accepted=permitted && route.request().headers().authorization === 'Bearer administrator-token';
          return route.fulfill({status:accepted?200:403,contentType:'application/json',body:JSON.stringify(accepted?{administrator:true,uid:'administrator',validForSeconds:300}:{error:'administrator-required'})});
        }
        return url.hostname==='127.0.0.1'?route.continue():route.abort();
      });
      await page.goto(`http://127.0.0.1:${server.address().port}/${process.env.ORDO_CHECK_HTML || 'V28.html'}?reviewDate=2030-11-02`,{waitUntil:'load'});
      await page.waitForFunction(()=>typeof getStrictDateBase==='function' && !document.getElementById('admin-review-login').disabled);
      await page.evaluate(()=>{
        document.getElementById('consent-modal').style.display='none';document.body.classList.remove('consent-pending');
        state.useGps=false;state.currentLoc='KR';state.selectedLocationCode='KR';state.uiLang='KR';
        fetchMassData=()=>{const date=getTargetDate();rememberLiturgicalDateContext(getStrictDateContext());state.liturgyInfo=buildGeneratedLiturgyInfo(date);render();};
        resetMassDataFrom(getStartupOrdinaryMassData());fetchMassData();openSettings();
      });
      assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'');
      assert.equal(await page.locator('#admin-review-controls').isVisible(),false);
      assert.equal(await page.evaluate(()=>ordoAdminReview.selectDate('2030-11-02')),false);
      await page.evaluate(()=>{globalThis.fixtureAccount='visitor';});
      await page.locator('#admin-review-login').click();
      await page.waitForFunction(()=>document.getElementById('admin-review-status').textContent.includes('권한이 없는'));
      assert.equal(await page.locator('#admin-review-controls').isVisible(),false);
      await page.locator('#admin-review-logout').click();
      await page.evaluate(()=>{globalThis.fixtureAccount='administrator';});
      await page.locator('#admin-review-login').click();
      await page.waitForFunction(()=>ordoAdminReview.isVerified());
      await page.locator('#admin-review-date').fill('2030-11-02');
      await page.locator('#admin-review-submit').click();
      await page.waitForFunction(()=>ordoAdminReview.getReviewDate()==='2030-11-02');
      const selected=await page.evaluate(()=>({anchor:formatDateIso(getStrictDateBase().localDay),day:formatDateIso(getTargetDate()),title:state.liturgyInfo.names.KR,offset:state.dayOffset,choice:getStrictDateContext().allSoulsChoice}));
      assert.deepEqual(selected,{anchor:'2030-11-02',day:'2030-11-02',title:'위령의날 첫째미사',offset:0,choice:'first'});
      await page.locator('#lbl-close-btn').click();
      for(const expected of ['second','third']) {
        await page.locator('.liturgy-nav-next').click();assert.equal(await page.evaluate(()=>getStrictDateContext().allSoulsChoice),expected);
      }
      await page.locator('.liturgy-nav-next').click();assert.equal(await page.evaluate(()=>formatDateIso(getTargetDate())),'2030-11-03');
      assert.equal(await page.locator('#admin-review-banner').isVisible(),true);
      await page.evaluate(()=>fixtureRefreshToken());await page.waitForFunction(()=>ordoAdminReview.isVerified());
      assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'2030-11-02');
      assert.equal(await page.evaluate(()=>ordoAdminReview.selectDate('2030-02-29')),false);
      assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'2030-11-02');
      assert.equal(await page.evaluate(()=>ordoAdminReview.selectDate('2028-02-29')),true);
      assert.equal(await page.evaluate(()=>formatDateIso(getTargetDate())),'2028-02-29');
      const navigation=await page.evaluate(async()=>{
        const check=(value,message)=>{if(!value)throw new Error(message);};
        for(const [country,lang] of Object.entries({KR:'KR',VN:'VN',US:'EN',JP:'JP',VA:'LA',TW:'ZH',IT:'IT',PT:'PT',MX:'ES',DE:'DE',BR:'PT'})) {
          state.selectedLocationCode=country;state.currentLoc=lang;
          check(formatDateIso(getStrictDateBase(new Date('2040-12-31T23:59:00Z')).localDay)==='2028-02-29','Timezone or midnight changed review anchor');
        }
        for(const language of ['KR','VN','EN','JP','LA','ZH','IT','PT','ES','DE']) {state.uiLang=language;syncLocalizedChromeAndSettings();check(document.getElementById('admin-review-title').textContent.length>5,'Missing translation');}
        state.selectedLocationCode='KR';state.currentLoc='KR';state.uiLang='KR';
        for(const iso of ['2031-12-24',formatDateIso(addDays(computeEasterSunday(2031),-1))]) {
          await ordoAdminReview.selectDate(iso);check(getStrictDateContext().navSlot==='day','Review must start with day Mass');
          changeLiturgicalDay(1);check(!!getStrictDateContext().specialVigil,'Vigil missing');
        }
        await ordoAdminReview.selectDate('2031-01-01');
        check(formatDateIso(addDays(getStrictDateBase().localDay,-7))==='2030-12-25','Year boundary');
        const entries=buildLiturgicalNavigationEntries(getStrictDateBase());
        check(new Set(entries.map(entry=>entry.offset)).size===15,'Review range');
        state.dayOffset=7;state.liturgyNavSlot='day';const before=formatDateIso(getTargetDate());
        let alerts=0;const savedAlert=globalThis.alert;globalThis.alert=()=>alerts++;changeLiturgicalDay(1);globalThis.alert=savedAlert;
        check(alerts===1 && formatDateIso(getTargetDate())===before,'Review edge exceeded');
        return {countries:11,languages:10};
      });
      await page.locator('#admin-review-header-today').click();assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'');
      await page.evaluate(()=>ordoAdminReview.selectDate('2030-11-02'));
      permitted=false;await page.evaluate(()=>globalThis.dispatchEvent(new Event('focus')));
      await page.waitForFunction(()=>!ordoAdminReview.isVerified());
      assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'');
      assert.equal(await page.locator('#admin-review-banner').isVisible(),false);
      permitted=true;await page.evaluate(()=>globalThis.dispatchEvent(new Event('focus')));await page.waitForFunction(()=>ordoAdminReview.isVerified());
      await page.evaluate(()=>ordoAdminReview.selectDate('2030-11-02'));
      await page.evaluate(()=>openSettings());await page.locator('#admin-review-logout').click();
      assert.equal(await page.evaluate(()=>ordoAdminReview.getReviewDate()),'');
      assert.equal(await page.evaluate(()=>state.dayOffset),0);
      assert.equal(await page.evaluate(()=>formatDateIso(getStrictDateBase().localDay)),await page.evaluate(()=>formatDateIso(dateFromZonedParts(zonedDateParts(new Date(),activeLiturgicalTimeZone())))));
      assert.deepEqual(errors,[]);
      console.log(JSON.stringify({viewport,...navigation,guestRestricted:true,allSouls:true,vigils:true,tokenRefresh:true,revocation:true,signOut:true}));
      await page.close();
    }
  } finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
