const assert = require('node:assert/strict');
const { isReviewAdministrator, createAdminReviewHandler } = require('../functions/admin-review-auth');
const identity = { uid:'administrator', email:'reviewer@example.test', email_verified:true, firebase:{sign_in_provider:'google.com'} };
assert(isReviewAdministrator(identity, ' REVIEWER@example.test '));
for (const denied of [null, {...identity,email:'someone@example.test'}, {...identity,email_verified:false}, {...identity,firebase:{sign_in_provider:'password'}}, {...identity,uid:''}]) {
  assert.equal(isReviewAdministrator(denied, 'reviewer@example.test'), false);
}
assert.equal(isReviewAdministrator(identity, ''), false);
(async () => {
  let verified = 0;
  const handler = createAdminReviewHandler({
    verifyIdToken:async (token, revoked) => { assert.equal(revoked,true); verified++; if (token !== 'real-token') throw new Error('invalid'); return identity; },
    configuredEmails:()=>'reviewer@example.test', allowedOrigin:origin=>origin === 'https://example.test' ? origin : '', rateLimit:()=>true
  });
  const call = async (method, token, origin='https://example.test') => {
    const headers={origin, authorization:token ? 'Bearer ' + token : ''};
    const result={headers:{}};
    const res={set:(name,value)=>{result.headers[name]=value;return res;},status:code=>{result.code=code;return res;},json:body=>{result.body=body;return res;},send:body=>{result.body=body;return res;}};
    await handler({method,get:name=>headers[name]},res); return result;
  };
  assert.equal((await call('POST')).code,401);
  assert.equal((await call('POST','forged-token')).code,401);
  assert.equal((await call('POST','real-token','https://untrusted.test')).code,403);
  const preflight=await call('OPTIONS'); assert.equal(preflight.code,204); assert(preflight.headers['Access-Control-Allow-Headers'].includes('Authorization'));
  const accepted=await call('POST','real-token'); assert.deepEqual(accepted.body,{administrator:true,uid:'administrator',validForSeconds:300});
  assert(accepted.headers['Cache-Control'].includes('no-store')); assert.equal(verified,2);
  console.log('Administrator authentication: verified Google account, allow list, revocation, forged token and CORS checks passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
