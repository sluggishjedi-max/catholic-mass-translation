// Bind the notice before loading the country data and application runtime.
(function prepareStartupNotice(global) {
    'use strict';

    global.ordoStartupNoticeDecision = null;

    const warningTexts = Object.freeze({
        KR: '<미사통상문> 및 <전례독서>, 그리고 기도문과 성가에 대하여 각국 천주교 주교회의에서 발행된 공식 자료를 활용하였으나, 해당 저작물의 이용 승인을 받은 것은 아님을 알려드립니다. 또한, 미사 거행시 일부 다른 부분이 있을 수 있으니, 참고용으로만 사용하시기 바랍니다.',
        EN: "Please note that the <Order of Mass>, <Liturgical Readings>, prayers, and hymns on this site use official materials published by the Catholic Bishops' Conferences of each country, but permission to use these works has not been obtained. Some parts may also differ in the celebration of Mass; please use this site for reference only.",
        LA: 'Monemus <Ordinarium Missae>, <Lectiones liturgicas>, preces atque cantus in hoc situ positos fontibus officialibus a Conferentiis Episcoporum Catholicorum singularum nationum editis niti, sed licentiam his operibus utendi non esse obtentam. Praeterea in celebratione Missae nonnullae partes discrepare possunt; ad consultationem tantum adhibeantur.',
        ZH: '請注意，本網站的<彌撒常用經文>、<禮儀讀經>、祈禱文及聖歌雖採用了各國天主教主教團出版的官方資料，但並未取得使用這些著作的授權。此外，舉行彌撒時，部分內容可能有所不同；請僅供參考使用。',
        JP: '本サイトの<ミサ通常文>、<典礼朗読>、祈祷文および聖歌には、各国のカトリック司教協議会が発行した公式資料を使用していますが、これらの著作物の利用許諾を得たものではありません。また、ミサの挙行に際して一部異なる場合がありますので、参考用としてのみご利用ください。',
        VN: 'Xin lưu ý rằng <Nghi thức Thánh lễ>, <Bài đọc phụng vụ>, các kinh nguyện và thánh ca trên trang này sử dụng các tài liệu chính thức do Hội đồng Giám mục Công giáo của từng quốc gia xuất bản, nhưng chưa được cấp phép sử dụng các tác phẩm đó. Ngoài ra, khi cử hành Thánh lễ, một số phần có thể khác; xin chỉ dùng trang này để tham khảo.',
        IT: "Si informa che l'<Ordinario della Messa>, le <Letture liturgiche>, le preghiere e i canti presenti in questo sito utilizzano materiali ufficiali pubblicati dalle Conferenze episcopali cattoliche dei singoli Paesi, ma non è stata ottenuta l'autorizzazione a utilizzare tali opere. Inoltre, alcune parti possono differire nella celebrazione della Messa; utilizzare il sito solo come riferimento.",
        ES: 'Se informa que el <Ordinario de la Misa>, las <Lecturas litúrgicas>, las oraciones y los cantos de este sitio utilizan materiales oficiales publicados por las Conferencias Episcopales Católicas de cada país, pero no se ha obtenido autorización para utilizar dichas obras. Además, algunas partes pueden diferir en la celebración de la Misa; utilice este sitio solo como referencia.',
        PT: 'Informamos que o <Ordinário da Missa>, as <Leituras litúrgicas>, as orações e os cânticos deste site utilizam materiais oficiais publicados pelas Conferências Episcopais Católicas de cada país, mas não foi obtida autorização para utilizar essas obras. Além disso, algumas partes podem diferir na celebração da Missa; utilize este site apenas como referência.',
        DE: 'Bitte beachten Sie, dass das <Ordinarium der Messe>, die <liturgischen Lesungen>, Gebete und Gesänge auf dieser Website offizielle Materialien verwenden, die von den katholischen Bischofskonferenzen der einzelnen Länder veröffentlicht wurden. Eine Erlaubnis zur Nutzung dieser Werke wurde jedoch nicht eingeholt. Außerdem können einzelne Teile bei der Messfeier abweichen; verwenden Sie diese Website nur als Referenz.'
    });
    const languageTags = Object.freeze({ KR: 'ko', EN: 'en', LA: 'la', ZH: 'zh-Hant', JP: 'ja', VN: 'vi', IT: 'it', ES: 'es', PT: 'pt', DE: 'de' });
    let selectedLanguage = '';

    global.renderOrdoStartupNoticeWarnings = function () {
        for (const lang of ['KR', 'EN']) {
            const paragraph = document.getElementById('consent-warning-' + lang.toLowerCase());
            if (paragraph) paragraph.textContent = warningTexts[lang];
        }
        const translation = document.getElementById('consent-other-notice');
        if (!translation) return;
        translation.hidden = !selectedLanguage;
        translation.textContent = warningTexts[selectedLanguage] || '';
        translation.lang = languageTags[selectedLanguage] || '';
        translation.className = selectedLanguage ? 'consent-warning-text lang-' + selectedLanguage : 'consent-warning-text';
        document.querySelectorAll('[data-consent-language]').forEach(button => {
            const expanded = button.dataset.consentLanguage === selectedLanguage;
            button.setAttribute('aria-expanded', String(expanded));
            button.setAttribute('aria-pressed', String(expanded));
        });
    };

    global.selectStartupNoticeLanguage = function (lang) {
        if (!warningTexts[lang] || lang === 'KR' || lang === 'EN') return;
        selectedLanguage = selectedLanguage === lang ? '' : lang;
        global.renderOrdoStartupNoticeWarnings();
        if (selectedLanguage) {
            document.getElementById('consent-other-notice')?.scrollIntoView({ block: 'nearest' });
        }
    };

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
        message.textContent = '이용하지 않기로 선택하여 사이트 사용을 종료했습니다. / You chose not to use this site. Please close this page.';
        content.replaceChildren(message);
    };

    global.renderOrdoStartupNoticeWarnings();
})(window);
