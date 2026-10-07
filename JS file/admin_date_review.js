(function setupAdminDateReview(global) {
  'use strict';
  const endpoint = 'https://us-central1-ordinary-mass-app.cloudfunctions.net/adminReviewAccess';
  const labels = {
    KR:['관리자 전례 검토','Google로 관리자 로그인','로그아웃','검토 날짜','검토하기','오늘로 돌아가기','관리자 확인 완료','관리자 권한이 없는 계정입니다.','관리자 인증을 확인할 수 없습니다. 다시 로그인해 주세요.','올바른 날짜를 선택해 주세요.','검토 기준일','선택한 날짜 전후 7일까지 조회할 수 있습니다.'],
    EN:['Administrator liturgy review','Administrator sign-in with Google','Sign out','Review date','Review','Return to today','Administrator verified','This account has no administrator permission.','Unable to verify administrator access. Please sign in again.','Select a valid date.','Review anchor','You can browse seven days before and after the selected date.'],
    VN:['Kiểm tra phụng vụ dành cho quản trị viên','Quản trị viên đăng nhập bằng Google','Đăng xuất','Ngày kiểm tra','Kiểm tra','Về hôm nay','Đã xác minh quản trị viên','Tài khoản này không có quyền quản trị.','Không thể xác minh quyền quản trị. Vui lòng đăng nhập lại.','Chọn ngày hợp lệ.','Ngày mốc kiểm tra','Có thể xem bảy ngày trước và sau ngày đã chọn.'],
    JP:['管理者の典礼確認','Googleで管理者ログイン','ログアウト','確認する日付','確認','今日に戻る','管理者を確認しました','このアカウントには管理者権限がありません。','管理者権限を確認できません。再度ログインしてください。','有効な日付を選択してください。','確認の基準日','選択した日付の前後7日を表示できます。'],
    LA:['Recognitio liturgiae ab administratore','Ingressus administratoris per Google','Exire','Dies recognoscendus','Recognoscere','Ad hodiernum diem','Administrator comprobatus','Huic rationi potestas administratoris deest.','Potestas administratoris comprobari non potest. Iterum intra.','Diem validum elige.','Dies fundamentalis','Septem dies ante et post diem electum inspici possunt.'],
    ZH:['管理員禮儀檢視','使用 Google 管理員登入','登出','檢視日期','檢視','回到今天','管理員已驗證','此帳號沒有管理員權限。','無法驗證管理員權限，請重新登入。','請選擇有效日期。','檢視基準日','可查看所選日期前後七天的禮儀。'],
    IT:['Verifica liturgica dell’amministratore','Accesso amministratore con Google','Esci','Data da verificare','Verifica','Torna a oggi','Amministratore verificato','Questo account non ha i permessi di amministratore.','Impossibile verificare i permessi. Accedi di nuovo.','Seleziona una data valida.','Data di riferimento','Puoi consultare i sette giorni prima e dopo la data scelta.'],
    PT:['Revisão litúrgica do administrador','Entrar como administrador com Google','Sair','Data de revisão','Rever','Voltar a hoje','Administrador verificado','Esta conta não tem permissão de administrador.','Não foi possível verificar a permissão. Entre novamente.','Selecione uma data válida.','Data de referência','Pode consultar os sete dias antes e depois da data escolhida.'],
    ES:['Revisión litúrgica del administrador','Acceso de administrador con Google','Cerrar sesión','Fecha de revisión','Revisar','Volver a hoy','Administrador verificado','Esta cuenta no tiene permisos de administrador.','No se pueden verificar los permisos. Inicie sesión de nuevo.','Seleccione una fecha válida.','Fecha de referencia','Puede consultar los siete días anteriores y posteriores a la fecha elegida.'],
    DE:['Liturgieprüfung für Administratoren','Administratoranmeldung mit Google','Abmelden','Prüfdatum','Prüfen','Zurück zu heute','Administrator bestätigt','Dieses Konto hat keine Administratorrechte.','Administratorrechte konnten nicht bestätigt werden. Bitte erneut anmelden.','Bitte ein gültiges Datum wählen.','Bezugsdatum','Sie können sieben Tage vor und nach dem gewählten Datum anzeigen.']
  };
  let auth, verifiedUid = '', validUntil = 0, reviewDate = '', busy = false, ready = false;
  let language = 'KR', today = '', messageIndex = -1, generation = 0;
  const text = index => (labels[language] || labels.EN)[index];
  const byId = id => document.getElementById(id);
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < '0001-01-01' || value > '9999-12-31') return false;
    const parsed = new Date(value + 'T12:00:00Z');
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0,10) === value;
  }
  function isVerified() {
    return !!(auth && auth.currentUser && auth.currentUser.uid === verifiedUid && Date.now() < validUntil);
  }
  function announceDateChange() { global.dispatchEvent(new CustomEvent('ordo:review-date-changed')); }
  function revoke(index = -1) {
    const hadReview = !!reviewDate;
    verifiedUid = ''; validUntil = 0; reviewDate = ''; messageIndex = index;
    render();
    if (hadReview) announceDateChange();
  }
  async function verify() {
    const user = auth && auth.currentUser;
    const version = generation;
    if (!user) { revoke(); return false; }
    try {
      const token = await user.getIdToken();
      const response = await fetch(endpoint, {method:'POST', headers:{Authorization:'Bearer ' + token}, cache:'no-store', signal:AbortSignal.timeout(15000)});
      const result = await response.json();
      if (version !== generation || !auth.currentUser || auth.currentUser.uid !== user.uid) return false;
      if (!response.ok || result.administrator !== true || result.uid !== user.uid) { revoke(response.status === 403 ? 7 : 8); return false; }
      verifiedUid = user.uid; validUntil = Date.now() + Math.min(300, Number(result.validForSeconds) || 0) * 1000;
      messageIndex = 6; render(); return isVerified();
    } catch (error) {
      if (version === generation) revoke(8);
      return false;
    }
  }
  async function signIn() {
    if (busy || !ready) return;
    busy = true; messageIndex = -1; render();
    try {
      const provider = new global.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      await auth.signInWithPopup(provider);
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') revoke(8);
    } finally { busy = false; render(); }
  }
  async function signOut() {
    generation++; revoke();
    if (auth) await auth.signOut();
  }
  async function selectDate(value) {
    if (!validDate(value)) { messageIndex = 9; render(); return false; }
    if (busy) return false;
    busy = true; render();
    try {
      if (!await verify()) return false;
      reviewDate = value; render(); announceDateChange(); return true;
    } finally { busy = false; render(); }
  }
  function returnToToday() {
    reviewDate = ''; render(); announceDateChange();
  }
  function render() {
    const approved = isVerified();
    const values = {'admin-review-title':0, 'admin-review-login':1, 'admin-review-logout':2, 'admin-review-date-label':3, 'admin-review-submit':4, 'admin-review-today':5, 'admin-review-header-today':5, 'admin-review-help':11};
    for (const [id,index] of Object.entries(values)) { const element = byId(id); if (element) element.textContent = text(index); }
    const login = byId('admin-review-login'), logout = byId('admin-review-logout'), controls = byId('admin-review-controls');
    if (login) { login.hidden = approved; login.disabled = busy || !ready; }
    if (logout) { logout.hidden = !auth || !auth.currentUser; logout.disabled = busy; }
    if (controls) controls.hidden = !approved;
    const input = byId('admin-review-date');
    if (input) { input.disabled = !approved || busy; if (document.activeElement !== input) input.value = reviewDate || today; }
    const submit = byId('admin-review-submit'); if (submit) submit.disabled = !approved || busy;
    const status = byId('admin-review-status'); if (status) status.textContent = messageIndex >= 0 ? text(messageIndex) : '';
    const banner = byId('admin-review-banner'); if (banner) banner.hidden = !approved || !reviewDate;
    const anchor = byId('admin-review-anchor'); if (anchor) anchor.textContent = text(10) + ': ' + reviewDate;
  }
  global.ordoAdminReview = Object.freeze({
    getReviewDate: () => isVerified() ? reviewDate : '',
    isVerified, selectDate, returnToToday,
    dateLimitMessage: () => text(11),
    syncChrome: (ui, liveDate) => { language = ui; today = liveDate; render(); }
  });
  byId('admin-review-login')?.addEventListener('click', signIn);
  byId('admin-review-logout')?.addEventListener('click', () => signOut().catch(() => revoke(8)));
  byId('admin-review-controls')?.addEventListener('submit', event => { event.preventDefault(); selectDate(byId('admin-review-date').value); });
  byId('admin-review-today')?.addEventListener('click', returnToToday);
  byId('admin-review-header-today')?.addEventListener('click', returnToToday);
  async function initialize() {
    try {
      if (!global.firebase || !global.firebase.auth) throw new Error('auth-sdk-unavailable');
      if (!global.firebase.apps.length) throw new Error('firebase-app-unavailable');
      auth = global.firebase.auth();
      await auth.setPersistence(global.firebase.auth.Auth.Persistence.SESSION);
      ready = true;
      auth.onIdTokenChanged(user => {
        generation++;
        if (!user || user.uid !== verifiedUid) revoke();
        if (user) verify();
      });
    } catch (error) { revoke(8); }
    render();
  }
  setInterval(() => { if (auth && auth.currentUser) verify(); }, 60000);
  global.addEventListener('focus', () => { if (auth && auth.currentUser) verify(); });
  initialize();
})(globalThis);
