// Shared seasonal titles for the calendar and annual observance catalog.
(function exposeLiturgicalSeasonalNames(global) {
    'use strict';

    const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV'];
    const englishOrdinals = ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth', 'Twenty-first', 'Twenty-second', 'Twenty-third', 'Twenty-fourth', 'Twenty-fifth', 'Twenty-sixth', 'Twenty-seventh', 'Twenty-eighth', 'Twenty-ninth', 'Thirtieth', 'Thirty-first', 'Thirty-second', 'Thirty-third', 'Thirty-fourth'];
    const weekdayNames = {
        KR: ['주일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        VN: ['Chúa Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
        EN: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        JP: ['主日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        LA: ['Dominica', 'Feria secunda', 'Feria tertia', 'Feria quarta', 'Feria quinta', 'Feria sexta', 'Sabbato'],
        ZH: ['主日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        IT: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        PT: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        ES: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        DE: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    };

    function toRoman(num) {
        return romanNumerals[num] || String(num);
    }

    function ordinalEN(num) {
        return englishOrdinals[num] || `${num}th`;
    }

    function formatSeasonalName(lang, season, week, day, sundayCycle) {
        const roman = toRoman(week);
        const sunday = day === 0;
        if (season === 'ordinary') {
            if (lang === 'KR') return sunday ? `연중 제${week}주일` : `연중 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Thường Niên - Năm ${sundayCycle}` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Thường Niên`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday in Ordinary Time` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week in Ordinary Time`;
            if (lang === 'JP') return sunday ? `年間第${week}主日` : `年間第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} per annum` : `${weekdayNames.LA[day]} hebdomadae ${roman} per annum`;
            if (lang === 'ZH') return sunday ? `常年期第${week}主日` : `常年期第${week}週${weekdayNames.ZH[day]}`;
            if (lang === 'IT') return sunday ? `${roman} DOMENICA DEL TEMPO ORDINARIO` : `${weekdayNames.IT[day]} DELLA ${roman} SETTIMANA DEL TEMPO ORDINARIO`;
            if (lang === 'PT') return sunday ? `DOMINGO ${roman} DO TEMPO COMUM` : `${weekdayNames.PT[day]} DA SEMANA ${roman} DO TEMPO COMUM`;
            if (lang === 'ES') return sunday ? `DOMINGO ${roman} DEL TIEMPO ORDINARIO` : `${weekdayNames.ES[day]} DE LA SEMANA ${roman} DEL TIEMPO ORDINARIO`;
            if (lang === 'DE') return sunday ? `${roman}. SONNTAG IM JAHRESKREIS` : `${weekdayNames.DE[day]} DER ${roman}. WOCHE IM JAHRESKREIS`;
        }
        if (season === 'advent') {
            if (lang === 'KR') return sunday ? `대림 제${week}주일` : `대림 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Mùa Vọng` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Vọng`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Advent` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Advent`;
            if (lang === 'JP') return sunday ? `待降節第${week}主日` : `待降節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Adventus` : `${weekdayNames.LA[day]} hebdomadae ${roman} Adventus`;
            if (lang === 'ZH') return sunday ? `將臨期第${week}主日` : `將臨期第${week}週${weekdayNames.ZH[day]}`;
            if (lang === 'IT') return sunday ? `${roman} DOMENICA DI AVVENTO` : `${weekdayNames.IT[day]} DELLA ${roman} SETTIMANA DI AVVENTO`;
            if (lang === 'PT') return sunday ? `DOMINGO ${roman} DO ADVENTO` : `${weekdayNames.PT[day]} DA SEMANA ${roman} DO ADVENTO`;
            if (lang === 'ES') return sunday ? `DOMINGO ${roman} DE ADVIENTO` : `${weekdayNames.ES[day]} DE LA SEMANA ${roman} DE ADVIENTO`;
            if (lang === 'DE') return sunday ? `${roman}. ADVENTSSONNTAG` : `${weekdayNames.DE[day]} DER ${roman}. ADVENTSWOCHE`;
        }
        if (season === 'lent') {
            if (lang === 'KR') return sunday ? `사순 제${week}주일` : `사순 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Mùa Chay` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Chay`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Lent` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Lent`;
            if (lang === 'JP') return sunday ? `四旬節第${week}主日` : `四旬節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Quadragesimae` : `${weekdayNames.LA[day]} hebdomadae ${roman} Quadragesimae`;
            if (lang === 'ZH') return sunday ? `四旬期第${week}主日` : `四旬期第${week}週${weekdayNames.ZH[day]}`;
            if (lang === 'IT') return sunday ? `${roman} DOMENICA DI QUARESIMA` : `${weekdayNames.IT[day]} DELLA ${roman} SETTIMANA DI QUARESIMA`;
            if (lang === 'PT') return sunday ? `DOMINGO ${roman} DA QUARESMA` : `${weekdayNames.PT[day]} DA SEMANA ${roman} DA QUARESMA`;
            if (lang === 'ES') return sunday ? `DOMINGO ${roman} DE CUARESMA` : `${weekdayNames.ES[day]} DE LA SEMANA ${roman} DE CUARESMA`;
            if (lang === 'DE') return sunday ? `${roman}. FASTENSONNTAG` : `${weekdayNames.DE[day]} DER ${roman}. FASTENWOCHE`;
        }
        if (season === 'easter') {
            if (lang === 'KR') return sunday ? `부활 제${week}주일` : `부활 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Phục Sinh` : `${weekdayNames.VN[day]} Tuần ${roman} Phục Sinh`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Easter` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Easter`;
            if (lang === 'JP') return sunday ? `復活節第${week}主日` : `復活節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Paschae` : `${weekdayNames.LA[day]} hebdomadae ${roman} Paschae`;
            if (lang === 'ZH') return sunday ? `復活期第${week}主日` : `復活期第${week}週${weekdayNames.ZH[day]}`;
            if (lang === 'IT') return sunday ? `${roman} DOMENICA DI PASQUA` : `${weekdayNames.IT[day]} DELLA ${roman} SETTIMANA DI PASQUA`;
            if (lang === 'PT') return sunday ? `DOMINGO ${roman} DA PÁSCOA` : `${weekdayNames.PT[day]} DA SEMANA ${roman} DA PÁSCOA`;
            if (lang === 'ES') return sunday ? `DOMINGO ${roman} DE PASCUA` : `${weekdayNames.ES[day]} DE LA SEMANA ${roman} DE PASCUA`;
            if (lang === 'DE') return sunday ? `${roman}. SONNTAG DER OSTERZEIT` : `${weekdayNames.DE[day]} DER ${roman}. OSTERWOCHE`;
        }
        if (lang === 'KR') return `성탄 시기 ${weekdayNames.KR[day]}`;
        if (lang === 'VN') return `${weekdayNames.VN[day]} Mùa Giáng Sinh`;
        if (lang === 'EN') return `${weekdayNames.EN[day]} of Christmas Time`;
        if (lang === 'JP') return `降誕節${weekdayNames.JP[day]}`;
        if (lang === 'ZH') return `聖誕期${weekdayNames.ZH[day]}`;
        if (lang === 'IT') return `${weekdayNames.IT[day]} DEL TEMPO DI NATALE`;
        if (lang === 'PT') return `${weekdayNames.PT[day]} DO TEMPO DO NATAL`;
        if (lang === 'ES') return `${weekdayNames.ES[day]} DEL TIEMPO DE NAVIDAD`;
        if (lang === 'DE') return `${weekdayNames.DE[day]} DER WEIHNACHTSZEIT`;
        return `${weekdayNames.LA[day]} tempore Nativitatis`;
    }

    const seasonalNames = Object.freeze({romanNumerals, weekdayNames, toRoman, formatSeasonalName});
    if (typeof module === 'object' && module.exports) module.exports = seasonalNames;
    else global.ordoLiturgicalSeasonalNames = seasonalNames;
})(globalThis);
