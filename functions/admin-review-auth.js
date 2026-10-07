'use strict';

// Only a verified Google identity explicitly configured on the server can review dates.
function isReviewAdministrator(identity, configuredEmails) {
  const emails = String(configuredEmails || '').split(',').map(value => value.trim().toLowerCase()).filter(Boolean);
  return !!(identity && identity.uid && identity.email_verified === true
    && identity.firebase && identity.firebase.sign_in_provider === 'google.com'
    && emails.includes(String(identity.email || '').toLowerCase()));
}

function createAdminReviewHandler({ verifyIdToken, configuredEmails, allowedOrigin, rateLimit }) {
  return async (req, res) => {
    const origin = req.get('origin') || '';
    const permitted = allowedOrigin(origin);
    res.set('Vary', 'Origin');
    res.set('Cache-Control', 'private, no-store, max-age=0');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    if (permitted) res.set('Access-Control-Allow-Origin', permitted);
    if (origin && !permitted) return res.status(403).json({ error:'origin-not-allowed' });
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error:'method-not-allowed' });
    if (!rateLimit(req)) return res.status(429).json({ error:'too-many-requests' });
    const match = /^Bearer ([^\s]+)$/.exec(req.get('authorization') || '');
    if (!match || match[1].length > 8192) return res.status(401).json({ error:'sign-in-required' });
    let identity;
    try { identity = await verifyIdToken(match[1], true); }
    catch (error) { return res.status(401).json({ error:'invalid-session' }); }
    if (!isReviewAdministrator(identity, configuredEmails())) return res.status(403).json({ error:'administrator-required' });
    return res.status(200).json({ administrator:true, uid:identity.uid, validForSeconds:300 });
  };
}

module.exports = { isReviewAdministrator, createAdminReviewHandler };
