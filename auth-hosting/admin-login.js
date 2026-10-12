(async function adminLoginPage(global) {
  'use strict';
  const requestKey = 'ordo:admin-login-page-request';
  const appHome = 'https://sluggishjedi-max.github.io/catholic-mass-translation/';
  const messages = {
    KR:['관리자 로그인','Google 로그인을 진행하고 있습니다…','로그인을 완료할 수 없습니다. 앱으로 돌아가 다시 로그인해 주세요.','다시 로그인','앱으로 돌아가기'],
    EN:['Administrator sign-in','Signing in with Google…','Unable to complete sign-in. Return to the app and try again.','Try sign-in again','Return to the app'],
    VN:['Đăng nhập quản trị viên','Đang đăng nhập bằng Google…','Không thể hoàn tất đăng nhập. Quay lại ứng dụng và thử lại.','Đăng nhập lại','Quay lại ứng dụng'],
    JP:['管理者ログイン','Googleでログインしています…','ログインを完了できません。アプリに戻って再度お試しください。','再度ログイン','アプリに戻る'],
    LA:['Ingressus administratoris','Ingressus per Google agitur…','Ingressus compleri non potest. Ad applicationem redi et iterum tenta.','Iterum intra','Ad applicationem redire'],
    ZH:['管理員登入','正在使用 Google 登入…','無法完成登入，請返回應用程式並重試。','重新登入','返回應用程式'],
    IT:['Accesso amministratore','Accesso con Google in corso…','Impossibile completare l’accesso. Torna all’app e riprova.','Accedi di nuovo','Torna all’app'],
    PT:['Acesso de administrador','A entrar com Google…','Não foi possível concluir o acesso. Volte à aplicação e tente novamente.','Entrar novamente','Voltar à aplicação'],
    ES:['Acceso de administrador','Iniciando sesión con Google…','No se puede completar el acceso. Vuelva a la aplicación e inténtelo de nuevo.','Iniciar sesión de nuevo','Volver a la aplicación'],
    DE:['Administratoranmeldung','Anmeldung mit Google…','Die Anmeldung konnte nicht abgeschlossen werden. Kehren Sie zur App zurück und versuchen Sie es erneut.','Erneut anmelden','Zurück zur App']
  };
  let request, auth;
  const byId = id => document.getElementById(id);
  function allowedReturn(value) {
    try {
      const url = new URL(value);
      return url.origin === new URL(appHome).origin && !url.username && !url.password && !url.hash
        && /^\/catholic-mass-translation\/(?:index\.html|V29\.html)?$/.test(url.pathname);
    } catch (error) { return false; }
  }
  function validRequest(value) {
    const age = value && Date.now() - value.createdAt;
    return !!(value && /^[a-f0-9]{64}$/.test(value.nonce) && allowedReturn(value.returnTo) && age >= 0 && age <= 10 * 60 * 1000);
  }
  function render(failed = false) {
    const words = messages[request?.language] || messages.EN;
    document.documentElement.lang = ({KR:'ko',EN:'en',VN:'vi',JP:'ja',LA:'la',ZH:'zh-Hant',IT:'it',PT:'pt',ES:'es',DE:'de'})[request?.language] || 'en';
    byId('title').textContent = words[0]; byId('status').textContent = words[failed ? 2 : 1];
    byId('retry').textContent = words[3]; byId('return').textContent = words[4];
    byId('retry').hidden = !failed || !auth || !validRequest(request);
    if (validRequest(request)) {
      byId('return').href = request.returnTo + '#' + new URLSearchParams({ordoAdminNonce:request.nonce,ordoAdminError:'cancelled'});
    }
  }
  async function start() {
    render();
    try {
      if (!validRequest(request)) throw new Error('expired-request');
      const provider = new global.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      await auth.signInWithRedirect(provider);
    } catch (error) { render(true); }
  }
  byId('retry').addEventListener('click', start);
  try {
    const params = new URLSearchParams(global.location.hash.slice(1));
    const fresh = params.has('nonce') || params.has('returnTo');
    global.history.replaceState(global.history.state, '', global.location.pathname);
    if (fresh) {
      request = {nonce:params.get('nonce'),returnTo:params.get('returnTo'),language:params.get('language'),createdAt:Date.now()};
      if (!validRequest(request)) throw new Error('invalid-request');
      global.sessionStorage.setItem(requestKey, JSON.stringify(request));
    } else {
      request = JSON.parse(global.sessionStorage.getItem(requestKey));
      if (!validRequest(request)) throw new Error('missing-request');
    }
    render();
    // The app, helper iframe and redirect callback all use this first-party domain.
    if (global.location.hostname !== 'ordinary-mass-app.firebaseapp.com') throw new Error('unexpected-domain');
    global.firebase.initializeApp({
      apiKey:'AIzaSyA3yXeo3I3bnhRuUsQT7TymnaDYr32oCUg', authDomain:'ordinary-mass-app.firebaseapp.com',
      projectId:'ordinary-mass-app', appId:'1:314851403029:web:babc9ee9d5f7b5543cf51c'
    });
    auth = global.firebase.auth();
    await auth.setPersistence(global.firebase.auth.Auth.Persistence.SESSION);
    const result = await auth.getRedirectResult();
    if (fresh) { await start(); return; }
    const credential = result && result.credential;
    if (!credential || (!credential.idToken && !credential.accessToken)) throw new Error('missing-credential');
    const response = new URLSearchParams({ordoAdminNonce:request.nonce});
    if (credential.idToken) response.set('ordoAdminIdToken', credential.idToken);
    else response.set('ordoAdminAccessToken', credential.accessToken);
    global.sessionStorage.removeItem(requestKey);
    // Fragments are not sent to servers or included in Referer headers. The app
    // consumes this once, removes it from history, and verifies admin access.
    global.location.replace(request.returnTo + '#' + response);
  } catch (error) { render(true); }
})(globalThis);
