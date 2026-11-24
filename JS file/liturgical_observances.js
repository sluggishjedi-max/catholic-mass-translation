/* One observance ID can have several spellings in each publisher's language. */
(function registerLiturgicalObservances(global) {
    'use strict';

    const curatedTitles = {
        "roman-11-01-allsaints": {
            KR: ["모든 성인"],
            VN: ["Các Thánh Nam Nữ"],
            EN: ["All Saints","All Saints’ Day"],
            JP: ["諸聖人"],
            ZH: ["諸聖節","諸聖"],
            IT: ["Tutti i Santi","Ognissanti"],
            PT: ["Todos os Santos"],
            ES: ["Todos los Santos"],
            DE: ["Allerheiligen"],
            LA: ["Omnium Sanctorum"]
        },
        "roman-11-02-allsouls": {
            KR: ["위령의 날"],
            VN: ["Cầu cho các tín hữu đã qua đời","Các Đẳng"],
            EN: ["All Souls","All Souls’ Day","The Commemoration of All the Faithful Departed"],
            JP: ["死者の日"],
            ZH: ["追思已亡諸信者","追思亡者"],
            IT: ["Commemorazione di tutti i fedeli defunti","Commemorazione dei fedeli defunti"],
            PT: ["Comemoração de Todos os Fiéis Defuntos"],
            ES: ["Conmemoración de Todos los Fieles Difuntos"],
            DE: ["Allerseelen"],
            LA: ["Commemoratio Omnium Fidelium Defunctorum"]
        },
        "roman-11-09-laterandedication": {
            KR: ["라테라노 대성전 봉헌"],
            VN: ["Cung hiến Đền thờ Latêranô","Cung hiến Thánh đường Latêranô"],
            EN: ["Dedication of the Lateran Basilica","Dedication of St John Lateran"],
            JP: ["ラテラン教会の献堂"],
            ZH: ["拉特朗大殿奉獻日","拉特朗大殿奉獻"],
            IT: ["Dedicazione della Basilica Lateranense"],
            PT: ["Dedicação da Basílica de Latrão"],
            ES: ["Dedicación de la Basílica de Letrán"],
            DE: ["Weihetag der Lateranbasilika"],
            LA: ["In Dedicatione Basilicae Lateranensis"]
        },
        "roman-11-21-presentationmary": {
            KR: ["복되신 동정 마리아의 자헌"],
            VN: ["Đức Mẹ Dâng Mình Trong Đền Thờ","Đức Trinh Nữ Ma-ri-a dâng mình trong đền thờ"],
            EN: ["Presentation of the Blessed Virgin Mary","Presentation of Mary"],
            JP: ["聖マリアの奉献"],
            ZH: ["獻聖母於聖殿","聖母獻於聖殿"],
            IT: ["Presentazione della Beata Vergine Maria"],
            PT: ["Apresentação da Virgem Santa Maria"],
            ES: ["Presentación de la Bienaventurada Virgen María"],
            DE: ["Gedenktag Unserer Lieben Frau in Jerusalem","Mariä Tempelgang"],
            LA: ["Praesentatio Beatae Mariae Virginis"]
        },
        "roman-00-00-christking": {
            KR: ["그리스도왕","온 누리의 임금이신 우리 주 예수 그리스도왕"],
            VN: ["Chúa Ki-tô Vua","Chúa Ki-tô Vua Vũ Trụ","Chúa Giê-su Ki-tô Vua Vũ Trụ","Chúa Nhật Lễ Chúa Giêsu Kitô Vua Vũ Trụ","CN XXXIV TN Năm A – Chúa Ki-tô Vua vũ trụ"],
            EN: ["Christ the King","Our Lord Jesus Christ, King of the Universe"],
            JP: ["王であるキリスト"],
            ZH: ["基督君王","基督普世君王節","基督普世君王節主日"],
            IT: ["Nostro Signore Gesù Cristo Re dell’Universo","Cristo Re"],
            PT: ["Nosso Senhor Jesus Cristo, Rei do Universo","Cristo Rei","Domingo XXXIV do Tempo Comum"],
            ES: ["Nuestro Señor Jesucristo, Rey del Universo","Cristo Rey"],
            DE: ["Christkönig","Christkönigssonntag"],
            LA: ["Domini Nostri Iesu Christi Universorum Regis","Christi Regis"]
        },
        "roman-11-24-vietnammartyrs": {
            KR: ["성 안드레아 둥락 사제와 동료 순교자들"],
            VN: ["Các Thánh Tử Đạo Việt Nam","Thánh An-rê Dũng Lạc và các bạn tử đạo","Thánh Anrê Dũng Lạc, Linh mục, và các bạn tử đạo"],
            EN: ["Vietnamese Martyrs","Saint Andrew Dung-Lac, Priest, and Companions, Martyrs"],
            JP: ["聖アンデレ・ジュン・ラック司祭と同志殉教者"],
            ZH: ["聖安德肋奉樂司鐸及同伴殉道","聖永樂司鐸及同伴殉道"],
            IT: ["Sant’Andrea Dung-Lac e compagni","Santi Andrea Dung-Lac, presbitero, e compagni, martiri"],
            PT: ["Santos André Dung-Lac e companheiros","Santos André Dung-Lac, João Teófanes Venard e companheiros","Santos André Dung-Lac e companheiros, mártires","Santo André Dung-Lac, Presbítero e Companheiros Mártires"],
            ES: ["San Andrés Dung-Lac y compañeros mártires","Santos Andrés Dung-Lac, presbítero, y compañeros, mártires","Santos Andrés Dung-Lac y compañeros, mártires"],
            DE: ["Andreas Dung-Lac und Gefährten"],
            LA: ["Sanctorum Andreae Dung-Lac et sociorum"]
        },
        "roman-11-30-andrewapostle": {
            KR: ["성 안드레아 사도"],
            VN: ["Thánh An-rê, Tông đồ"],
            EN: ["Saint Andrew","Saint Andrew, Apostle","Saint Andrew the Apostle"],
            JP: ["聖アンデレ使徒"],
            ZH: ["聖安德肋宗徒"],
            IT: ["Sant’Andrea, apostolo"],
            PT: ["Santo André, Apóstolo"],
            ES: ["San Andrés, Apóstol"],
            DE: ["Andreas, Apostel"],
            LA: ["Sancti Andreae, Apostoli"]
        },
        "roman-12-03-francisxavier": {
            KR: ["성 프란치스코 하비에르 사제"],
            VN: ["Thánh Phanxicô Xaviê, Linh mục"],
            EN: ["Saint Francis Xavier, Priest"],
            JP: ["聖フランシスコ・ザビエル司祭","日本宣教の保護者聖フランシスコ・ザビエル司祭"],
            ZH: ["聖方濟各沙勿略司鐸","聖方濟．薩威司鐸慶日"],
            IT: ["San Francesco Saverio, presbitero"],
            PT: ["São Francisco Xavier, Presbítero"],
            ES: ["San Francisco Javier, Presbítero"],
            DE: ["Franz Xaver, Priester","Hl. Franz Xaver Ordenspriester, Glaubensbote"],
            LA: ["Sancti Francisci Xavier, presbyteri"]
        },
        "roman-12-08-immaculateconception": {
            KR: ["복되신 동정 마리아의 원죄 없으신 잉태","원죄 없으신 잉태"],
            VN: ["Đức Mẹ Vô Nhiễm Nguyên Tội"],
            EN: ["Immaculate Conception","Immaculate Conception of the Blessed Virgin Mary"],
            JP: ["無原罪の聖マリア"],
            ZH: ["聖母無原罪始胎","聖母始胎無染原罪","聖母始胎無原罪節"],
            IT: ["Immacolata Concezione della Beata Vergine Maria"],
            PT: ["Imaculada Conceição da Virgem Santa Maria","Imaculada Conceição","Imaculada Conceição da Bem-aventurada Virgem Maria"],
            ES: ["Inmaculada Concepción de la Virgen María","Inmaculada Concepción"],
            DE: ["Mariä Empfängnis","Hochfest der ohne Erbsünde empfangenen Jungfrau und Gottesmutter Maria"],
            LA: ["In Conceptione Immaculata Beatae Mariae Virginis"]
        },
        "roman-12-12-guadalupe": {
            KR: ["과달루페의 복되신 동정 마리아"],
            VN: ["Đức Mẹ Guadalupe","Đức Trinh Nữ Ma-ri-a Goa-đa-lu-pê"],
            EN: ["Our Lady of Guadalupe","Our Lady of Guadalupe, Heavenly Patroness of the Philippines"],
            JP: ["グアダルペの聖母マリア"],
            ZH: ["瓜達盧佩聖母"],
            IT: ["Beata Vergine Maria di Guadalupe"],
            PT: ["Nossa Senhora de Guadalupe"],
            ES: ["Nuestra Señora de Guadalupe","Santa María de Guadalupe"],
            DE: ["Unsere Liebe Frau von Guadalupe"],
            LA: ["Beatae Mariae Virginis de Guadalupe"]
        },
        "roman-10-28-simonjude": {
            KR: ["성 시몬과 성 유다 사도"],
            VN: ["Thánh Simon và Thánh Giuđa, Tông đồ","Thánh Si-môn và Thánh Giu-đa, Tông đồ"],
            EN: ["Saints Simon and Jude, Apostles","Saint Simon and Saint Jude, Apostles"],
            JP: ["聖シモン 聖ユダ使徒"],
            ZH: ["聖西滿及聖達德宗徒慶日"],
            IT: ["Santi Simone e Giuda, Apostoli"],
            PT: ["Santos Simão e Judas, Apóstolos","São Simão e São Judas"],
            ES: ["Santos Simón y Judas, apóstoles"],
            DE: ["Hl. Simon und Hl. Judas Apostel","Simon und Judas, Apostel"],
            LA: ["Sanctorum Simonis et Iudae"]
        },
        "roman-11-04-charlesborromeo": {
            KR: ["성 가롤로 보로메오 주교"],
            VN: ["Thánh Carôlô Bôrômêô, Giám mục"],
            EN: ["Saint Charles Borromeo, Bishop"],
            JP: ["聖カロロ・ボロメオ司教"],
            ZH: ["聖嘉祿．鮑榮茂主教紀念日"],
            IT: ["San Carlo Borromeo, vescovo"],
            PT: ["São Carlos Borromeu","São Carlos Borromeu, Bispo"],
            ES: ["San Carlos Borromeo, obispo"],
            DE: ["Karl Borromäus, Bischof"],
            LA: ["Sancti Caroli Borromaei, episcopi"]
        },
        "roman-11-10-leothegreat": {
            KR: ["성 대 레오 교황 학자"],
            VN: ["Thánh Lêô Cả, Giáo hoàng, Tiến sĩ Hội Thánh"],
            EN: ["Saint Leo the Great, Pope and Doctor of the Church"],
            JP: ["聖レオ一世教皇教会博士"],
            ZH: ["聖良一世教宗聖師紀念日"],
            IT: ["San Leone Magno, papa e dottore della Chiesa"],
            PT: ["São Leão Magno","São Leão Magno, papa e doutor da Igreja"],
            ES: ["San León Magno, papa y doctor de la Iglesia"],
            DE: ["Leo der Große, Papst und Kirchenlehrer"],
            LA: ["Sancti Leonis Magni, papae et Ecclesiae doctoris"]
        },
        "roman-11-11-martinoftours": {
            KR: ["투르의 성 마르티노 주교"],
            VN: ["Thánh Martinô thành Tours, Giám mục"],
            EN: ["Saint Martin of Tours, Bishop"],
            JP: ["聖マルチノ（ツール）司教"],
            ZH: ["聖瑪定．都爾主教紀念日"],
            IT: ["San Martino di Tours, vescovo"],
            PT: ["São Martinho de Tours","São Martinho de Tours, bispo"],
            ES: ["San Martín de Tours, obispo"],
            DE: ["Martin von Tours, Bischof","Hl. Martin Bischof"],
            LA: ["Sancti Martini Turonensis, episcopi"]
        },
        "roman-11-12-josaphat": {
            KR: ["성 요사팟 주교 순교자"],
            VN: ["Thánh Giôsaphát, Giám mục, Tử đạo"],
            EN: ["Saint Josaphat, Bishop and Martyr"],
            JP: ["聖ヨサファト司教殉教者"],
            ZH: ["聖樂山主教殉道紀念日"],
            IT: ["San Giosafat, vescovo e martire"],
            PT: ["São Josafat, bispo e mártir"],
            ES: ["San Josafat, obispo y mártir"],
            DE: ["Josaphat, Bischof und Märtyrer"],
            LA: ["Sancti Iosaphat, episcopi et martyris"]
        },
        "roman-11-17-elizabethofhungary": {
            KR: ["헝가리의 성녀 엘리사벳 수도자"],
            VN: ["Thánh nữ Ê-li-sa-bét Hung-ga-ri","Thánh Êlisabét Hungari"],
            EN: ["Saint Elizabeth of Hungary, Religious"],
            JP: ["ハンガリーの聖エリザベト修道女"],
            ZH: ["聖麗莎‧匈牙利聖婦會士紀念日"],
            IT: ["Santa Elisabetta d'Ungheria, religiosa"],
            PT: ["Santa Isabel da Hungria, religiosa","Santa Isabel da Hungria"],
            ES: ["Santa Isabel de Hungría, religiosa"],
            DE: ["Hl. Elisabeth von Ungarn, Ordensfrau"],
            LA: ["Sanctae Elisabeth Hungariae, religiosae"]
        },
        "roman-12-07-ambrose": {
            KR: ["성 암브로시오 주교 학자"],
            VN: ["Thánh Ambrôsiô, Giám mục, Tiến sĩ Hội Thánh","Thánh Am-rô-xi-ô"],
            EN: ["Saint Ambrose, Bishop and Doctor of the Church"],
            JP: ["聖アンブロジオ司教教会博士"],
            ZH: ["聖安博主教聖師紀念日"],
            IT: ["Sant'Ambrogio, vescovo e dottore della Chiesa"],
            PT: ["Santo Ambrósio, Bispo e Doutor da Igreja"],
            ES: ["San Ambrosio, obispo y doctor de la Iglesia"],
            DE: ["Ambrosius, Bischof und Kirchenlehrer"],
            LA: ["Sancti Ambrosii, episcopi et Ecclesiae doctoris"]
        },
        "roman-12-14-johnofthecross": {
            KR: ["십자가의 성 요한 사제 학자"],
            VN: ["Thánh Gioan Thánh Giá, Linh mục, Tiến sĩ Hội Thánh","Thánh Gio-an Thánh Giá"],
            EN: ["Saint John of the Cross, Priest and Doctor of the Church"],
            JP: ["十字架の聖ヨハネ司祭教会博士"],
            ZH: ["聖十字若望司鐸聖師紀念日"],
            IT: ["San Giovanni della Croce, sacerdote e dottore della Chiesa"],
            PT: ["São João da Cruz, presbítero e doutor da Igreja"],
            ES: ["San Juan de la Cruz, presbítero y doctor de la Iglesia"],
            DE: ["Johannes vom Kreuz, Ordenspriester und Kirchenlehrer","Hl. Johannes vom Kreuz Ordenspriester, Kirchenlehrer"],
            LA: ["Sancti Ioannis a Cruce"]
        },
        "particular-11-06-irelandallsaints": {
            EN: ["All Saints of Ireland","All the Saints of Ireland","The Saints of Ireland"]
        },
        "particular-00-00-thanksgiving": {
            KR: ["미국 추수감사절"],
            VN: ["Ngày Tạ Ơn"],
            EN: ["Thanksgiving Day","Mass for Thanksgiving Day"]
        }
    };
    const titles = new Map();
    for (const [id, , , names] of global.ordoAnnualObservanceCatalog || []) titles.set(id, names);
    for (const [id, names] of Object.entries(curatedTitles)) {
        const combined = { ...titles.get(id) };
        for (const [lang, spellings] of Object.entries(names)) combined[lang] = [...spellings, ...(combined[lang] || [])];
        titles.set(id, combined);
    }

    const rank = {
        KR: [/(?:\s+(?:선택|의무))?\s*(?:대축일|축일|기념일)\s*$/u],
        VN: [/^(?:(?:thánh\s+)?lễ(?:\s+(?:trọng|kính|nhớ))?|kính)\s+/iu, /[,\s-]+lễ\s+(?:trọng|kính|nhớ)\s*$/iu],
        EN: [/^(?:the\s+)?(?:(?:optional\s+|obligatory\s+)?(?:solemnity|feast|memorial)(?:\s+of)?\s+|the\s+)/iu],
        JP: [/(?:の)?(?:大祝日|祭日|祝日|記念日|記念)\s*$/u],
        ZH: [/(?:隆重節日|大節|慶日|紀念日|紀念)\s*$/u],
        IT: [/^(?:solennità|festa|memoria)\s+(?:di\s+)?/iu],
        PT: [/^(?:solenidade|festa|memória)\s+(?:de\s+)?/iu],
        ES: [/^(?:solemnidad|fiesta|memoria)\s+(?:de\s+)?/iu],
        DE: [/^(?:hochfest|fest|(?:gebotener|nicht gebotener)\s+gedenktag|gedenktag)\s+/iu],
        LA: [/^in\s+(?:sollemnitate\s+)?/iu]
    };
    const rankLabel = /^(?:대|축|기|선|백|홍|자|녹|대축일|축일|기념일|선택 기념일|祭|祝|記|任|祭日|祝日|記念|記念日|任意|節|慶|紀|自|慶日|紀念日|solemnity|feast|memorial|optional memorial|memoria(?:\s+facoltativa|\s+libre)?|memória(?:\s+facultativa)?|fiesta|festa|solenidade|solennità|gedenktag|hochfest|lễ\s+(?:trọng|nhớ|kính)|đ|k|nh|mo|mf|m|f|s)$/iu;
    const saintForms = {
        EN:/\b(?:saints?\s+|sts?\.\s*|sts?\s+)/giu, IT:/\b(?:sant['’]|san\s+|santi?\s+|santo\s+|santa\s+|s\.)\s*/giu,
        PT:/\b(?:santos?\s+|santa\s+|são\s+|s\.)\s*/giu,
        ES:/\b(?:san\s+|santos?\s+|santas?\s+|s\.)\s*/giu,
        DE:/\b(?:hl\.|hll\.|heilige[rn]?\s+)\s*/giu
    };
    const alternateRanks = /\s*[,–—-]\s*((?:memoria|memória|feast|festa|fiesta|solennità|solenidade|memorial|gedenktag)[^,–—-]*)$/iu;
    const brackets = /[\[(【〖（]\s*([^\])】〗）]+?)\s*[\])】〗）]/gu;

    function cleanTitle(value, lang) {
        let name = String(value || '').normalize('NFKC').replace(brackets, (text,label)=>rankLabel.test(label) ? ' ' : text).trim();
        for (const wrapper of rank[lang] || []) name = name.replace(wrapper, '');
        name = name.replace(alternateRanks, (text,label)=>rankLabel.test(label.trim()) ? '' : text);
        return name.trim().replace(/^the\s+/iu, lang === 'EN' ? '' : '$&');
    }

    function compact(value) {
        return value.normalize('NFD').toLowerCase().replace(/\p{M}/gu, '').replace(/đ/gu, 'd').replace(/[^\p{L}\p{N}]/gu, '');
    }

    function titleKey(value, lang) {
        return compact(cleanTitle(value, lang));
    }

    function abbreviatedKey(value, lang) {
        const title = cleanTitle(value, lang);
        return compact(saintForms[lang] ? title.replace(saintForms[lang], '') : title);
    }

    const full = new Map(), abbreviated = new Map();
    function register(index, lang, key, id) {
        if (!key || rankLabel.test(key)) return;
        const slot = lang + ':' + key;
        index.set(slot, index.has(slot) && index.get(slot) !== id ? '' : id);
    }
    for (const [id, spellings] of titles) {
        for (const [lang, values] of Object.entries(spellings)) for (const spelling of values) {
            register(full, lang, titleKey(spelling, lang), id);
            register(abbreviated, lang, abbreviatedKey(spelling, lang), id);
        }
    }

    const vietnameseSunday = /^cn\s*(?:tu[aâ]n\s*)?(\d{1,2}|[ivxl]+)\s*(tn|mv|mc|ps)(?:\s*n[aă]m\s*[abc])?$/iu;
    function sundayAbbreviation(value, lang) {
        if (lang !== 'VN') return '';
        const match = cleanTitle(value, lang).match(vietnameseSunday);
        if (!match) return '';
        const token = match[1].toUpperCase();
        const number = /^\d+$/.test(token) ? Number(token)
            : Array.from({length:34},(_,i)=>i+1).find(n=>roman(n)===token);
        const prefix = {tn:'ordsunday',mv:'advent',mc:'lent',ps:'easter'}[match[2].toLowerCase()];
        // Week 34's Christ the King is equivalent to the abbreviated Sunday.
        const suffix = prefix==='ordsunday' && number===34 ? 'christking' : prefix + number;
        const id = 'roman-00-00-'+suffix;
        return titles.has(id) ? id : '';
    }

    function roman(number) {
        let result = '';
        for (const [n,token] of [[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]) {
            while (number >= n) { result += token; number -= n; }
        }
        return result;
    }

    global.ordoLiturgicalObservances = Object.freeze({
        identify(value, lang) {
            const exact = lang + ':' + titleKey(value, lang);
            if (full.has(exact)) return full.get(exact);
            return abbreviated.get(lang + ':' + abbreviatedKey(value, lang)) || sundayAbbreviation(value, lang);
        },
        titleKey,
        namesFor(id) { return Object.fromEntries(Object.entries(titles.get(id) || {}).map(([lang, spellings]) => [lang, spellings[0]])); }
    });
})(globalThis);
