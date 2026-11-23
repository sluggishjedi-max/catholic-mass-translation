/* One observance ID can have several spellings in each publisher's language. */
(function registerLiturgicalObservances(global) {
    'use strict';

    const titles = {
        "all-saints": {
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
        "all-souls": {
            KR: ["위령의 날"],
            VN: ["Cầu cho các tín hữu đã qua đời","Các Đẳng"],
            EN: ["All Souls","All Souls’ Day","The Commemoration of All the Faithful Departed"],
            JP: ["死者の日"],
            ZH: ["追思已亡諸信者","追思亡者"],
            IT: ["Commemorazione di tutti i fedeli defunti"],
            PT: ["Comemoração de Todos os Fiéis Defuntos"],
            ES: ["Conmemoración de Todos los Fieles Difuntos"],
            DE: ["Allerseelen"],
            LA: ["Commemoratio Omnium Fidelium Defunctorum"]
        },
        "lateran-dedication": {
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
        "presentation-mary": {
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
        "christ-king": {
            KR: ["그리스도왕","온 누리의 임금이신 우리 주 예수 그리스도왕"],
            VN: ["Chúa Ki-tô Vua","Chúa Ki-tô Vua Vũ Trụ","Chúa Giê-su Ki-tô Vua Vũ Trụ","Chúa Nhật Lễ Chúa Giêsu Kitô Vua Vũ Trụ","CN XXXIV TN Năm A – Chúa Ki-tô Vua vũ trụ"],
            EN: ["Christ the King","Our Lord Jesus Christ, King of the Universe"],
            JP: ["王であるキリスト"],
            ZH: ["基督君王","基督普世君王節"],
            IT: ["Nostro Signore Gesù Cristo Re dell’Universo","Cristo Re"],
            PT: ["Nosso Senhor Jesus Cristo, Rei do Universo","Cristo Rei"],
            ES: ["Nuestro Señor Jesucristo, Rey del Universo","Cristo Rey"],
            DE: ["Christkönig","Christkönigssonntag"],
            LA: ["Domini Nostri Iesu Christi Universorum Regis","Christi Regis"]
        },
        "vietnam-martyrs": {
            KR: ["성 안드레아 둥락 사제와 동료 순교자들"],
            VN: ["Các Thánh Tử Đạo Việt Nam","Thánh An-rê Dũng Lạc và các bạn tử đạo"],
            EN: ["Vietnamese Martyrs","Saint Andrew Dung-Lac, Priest, and Companions, Martyrs"],
            JP: ["聖アンデレ・ジュン・ラック司祭と同志殉教者"],
            ZH: ["聖安德肋奉樂司鐸及同伴殉道"],
            IT: ["Sant’Andrea Dung-Lac e compagni","Santi Andrea Dung-Lac, presbitero, e compagni, martiri"],
            PT: ["Santos André Dung-Lac e companheiros","Santos André Dung-Lac, João Teófanes Venard e companheiros"],
            ES: ["San Andrés Dung-Lac y compañeros mártires"],
            DE: ["Andreas Dung-Lac und Gefährten"],
            LA: ["Sanctorum Andreae Dung-Lac et sociorum"]
        },
        "andrew-apostle": {
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
        "francis-xavier": {
            KR: ["성 프란치스코 하비에르 사제"],
            VN: ["Thánh Phanxicô Xaviê, Linh mục"],
            EN: ["Saint Francis Xavier, Priest"],
            JP: ["聖フランシスコ・ザビエル司祭","日本宣教の保護者聖フランシスコ・ザビエル司祭"],
            ZH: ["聖方濟各沙勿略司鐸"],
            IT: ["San Francesco Saverio, presbitero"],
            PT: ["São Francisco Xavier, Presbítero"],
            ES: ["San Francisco Javier, Presbítero"],
            DE: ["Franz Xaver, Priester"],
            LA: ["Sancti Francisci Xavier, presbyteri"]
        },
        "immaculate-conception": {
            KR: ["복되신 동정 마리아의 원죄 없으신 잉태","원죄 없으신 잉태"],
            VN: ["Đức Mẹ Vô Nhiễm Nguyên Tội"],
            EN: ["Immaculate Conception","Immaculate Conception of the Blessed Virgin Mary"],
            JP: ["無原罪の聖マリア"],
            ZH: ["聖母無原罪始胎","聖母始胎無染原罪"],
            IT: ["Immacolata Concezione della Beata Vergine Maria"],
            PT: ["Imaculada Conceição da Virgem Santa Maria","Imaculada Conceição"],
            ES: ["Inmaculada Concepción de la Virgen María","Inmaculada Concepción"],
            DE: ["Mariä Empfängnis","Hochfest der ohne Erbsünde empfangenen Jungfrau und Gottesmutter Maria"],
            LA: ["In Conceptione Immaculata Beatae Mariae Virginis"]
        },
        "guadalupe": {
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
        "ireland-all-saints": {
            EN: ["All Saints of Ireland","All the Saints of Ireland","The Saints of Ireland"]
        },
        "us-thanksgiving": {
            KR: ["미국 추수감사절"],
            VN: ["Ngày Tạ Ơn"],
            EN: ["Thanksgiving Day","Mass for Thanksgiving Day"]
        }
    };
    const rank = {
        KR: /(?:대축일|축일|기념일)\s*$/u, VN: /^(?:lễ(?:\s+(?:trọng|kính|nhớ))?|kính)\s+/iu,
        EN: /^(?:(?:the\s+)?(?:solemnity|feast|memorial)(?:\s+of)?|the)\s+/iu,
        JP: /(?:の)?(?:大祝日|祝日|記念日)\s*$/u, ZH: /(?:隆重節日|大節|慶日|紀念日)\s*$/u,
        IT: /^(?:solennità|festa|memoria)\s+(?:di\s+)?/iu, PT: /^(?:solenidade|festa|memória)\s+(?:de\s+)?/iu,
        ES: /^(?:solemnidad|fiesta|memoria)\s+(?:de\s+)?/iu, DE: /^(?:hochfest|fest|gedenktag)\s*/iu,
        LA: /^in\s+(?:sollemnitate\s+)?/iu
    };
    const shortSaint = { EN:[/\bsts?\.?\s+/giu,'saint '], IT:[/\bs\.\s*/giu,'san '],
        PT:[/\bs\.\s*/giu,'são '], ES:[/\bs\.\s*/giu,'san '], DE:[/\bhl\.\s*/giu,'heiliger '] };

    function titleKey(value, lang) {
        let name = String(value || '').normalize('NFKC').replace(/^[\[(][^\])]{1,5}[\])]\s*/u, '').trim();
        if (rank[lang]) name = name.replace(rank[lang], '');
        if (shortSaint[lang]) name = name.replace(...shortSaint[lang]);
        return name.replace(/\s*[–—-]\s*(?:memoria(?:\s+facoltativa)?|memória|memorial|feast|festa|solennità|solenidade)\s*$/iu, '')
            .replace(/\((?:memória|memoria|memorial|feast|festa|solenidade)\)\s*$/iu, '')
            .normalize('NFD').toLowerCase().replace(/\p{M}/gu, '').replace(/đ/gu, 'd').replace(/[^\p{L}\p{N}]/gu, '');
    }

    const index = new Map();
    for (const [id, spellings] of Object.entries(titles)) {
        for (const [lang, values] of Object.entries(spellings)) for (const spelling of values) {
            const key = lang + ':' + titleKey(spelling, lang);
            index.set(key, index.has(key) && index.get(key) !== id ? '' : id);
        }
    }

    global.ordoLiturgicalObservances = Object.freeze({
        identify(value, lang) { return index.get(lang + ':' + titleKey(value, lang)) || ''; },
        titleKey,
        namesFor(id) { return Object.fromEntries(Object.entries(titles[id] || {}).map(([lang, spellings]) => [lang, spellings[0]])); }
    });
})(globalThis);
