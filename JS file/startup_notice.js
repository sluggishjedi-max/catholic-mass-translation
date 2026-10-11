// Bind the notice before loading the country data and application runtime.
(function prepareStartupNotice(global) {
    'use strict';

    global.ordoStartupNoticeDecision = null;

    global.acceptStartupNotice = function () {
        global.ordoStartupNoticeDecision = true;
        const modal = document.getElementById('consent-modal');
        if (modal) modal.style.display = 'none';
        document.body.classList.remove('consent-pending');
    };

    global.declineStartupNotice = function () {
        global.ordoStartupNoticeDecision = false;
        global.close();
        const content = document.querySelector('#consent-modal .consent-content');
        if (!content) return;
        const message = document.createElement('p');
        message.textContent = '동의하지 않아 사이트 사용을 종료했습니다. / You declined the notice. Please close this page.';
        content.replaceChildren(message);
    };
})(window);
