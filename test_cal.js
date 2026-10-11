
        const window = {};
        const document = {};
        

        const startDate = new Date(2026, 5, 23); // 2026-06-23
        const endDate = new Date(2026, 6, 7);   // 2026-07-07
        const langs = ['KR', 'VN', 'EN', 'JP', 'LA'];
        
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateObj = new Date(d);
            const iso = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000).toISOString().split('T')[0];
            
            const override = getDynamicCalendarOverride(dateObj) || {};
            const meta = getSeasonMeta(dateObj);
            
            let out = iso + ' | ';
            for (const lang of langs) {
                let name = '';
                if (override && override.names && override.names[lang]) {
                    name = override.names[lang];
                } else {
                    name = formatSeasonalName(lang, meta.season, meta.week, meta.day, meta.sundayCycle);
                }
                out += lang + ': ' + name + ' | ';
            }
            console.log(out);
        }
    