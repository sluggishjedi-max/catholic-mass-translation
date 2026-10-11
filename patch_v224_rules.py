import re

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_func = r'    function defaultPrefaceHintForLiturgyInfo\(info, date = null\) \{.*?\n    \}'
new_func = '''    function defaultPrefaceHintForLiturgyInfo(info, date = null) {
        const explicit = explicitPrefaceHintFromLiturgyInfo(info);
        if (explicit) {
            if (explicit.includes('또는')) return explicit.split('또는')[0].trim();
            return explicit;
        }
        
        const activeDate = date ? toDateOnly(date) : getActiveLiturgicalSourceDate();
        const meta = (info && info.meta && info.meta.season) ? info.meta : getSeasonMeta(activeDate);
        
        const m = activeDate.getMonth() + 1; // 1-12
        const d = activeDate.getDate();

        // 12월 29일 ~ 1월 2일: 성탄 2번 감사송
        if ((m === 12 && d >= 29 && d <= 31) || (m === 1 && d >= 1 && d <= 2)) {
            return '성탄 감사송 2';
        }

        if (meta.season === 'advent') {
            return activeDate.getMonth() === 11 && activeDate.getDate() >= 17 ? '대림 감사송 2' : '대림 감사송 1';
        }
        if (meta.season === 'christmas') return '성탄 감사송 1';
        if (meta.season === 'lent') {
            if (meta.week === 6) return activeDate.getDay() === 0 ? '주님 수난 성지 주일 감사송' : '주의 수난 감사송 2';
            if (activeDate.getDay() === 0 && meta.week >= 1 && meta.week <= 5) {
                return `사순 제${meta.week}주일 감사송`;
            }
            if (meta.week === 5) return '주의 수난 감사송 1';
            return '사순 감사송 1'; // 사순 1~4주 평일
        }
        if (meta.season === 'easter') {
            if (meta.week === 7) return '승천 감사송 1'; // 부활 7주 (승천)
            return '부활 감사송 1'; // 부활 1~6주
        }
        
        if (info && info.isSunday) {
            // 연중 주일 감사송 2026년 배정 맵핑
            const ordinarySundayMap = {
                2: 1, 3: 1, 4: 1, 5: 1, 6: 2,
                11: 2, 12: 2, 13: 2,
                15: 3, 16: 6, 17: 6, 18: 6, 19: 6, 20: 6,
                21: 8, 22: 7, 23: 7, 24: 7,
                26: 6, 27: 6, 28: 6, 30: 6, 32: 6, 33: 3
            };
            const cycle = ordinarySundayMap[meta.week] || 1;
            return `연중 주일 감사송 ${cycle}`;
        }
        return '공통 감사송 1'; // 연중 평일
    }'''

content = re.sub(old_func, new_func, content, count=1, flags=re.DOTALL)

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Patched defaultPrefaceHintForLiturgyInfo successfully!")
