import re

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace getEucharistSongHintKey
old_getEucharistSongHintKey = r'''    function getEucharistSongHintKey\(item\) \{
        const hint = normalizePrefaceMatchText\(state\.liturgyInfo && state\.liturgyInfo\.prefaceHint\);
        if \(\!hint\) return '';
        const songs = getEucharistSongMap\(item\);
'''
new_getEucharistSongHintKey = '''    function getEucharistSongHintKey(item) {
        let hint = state.liturgyInfo && state.liturgyInfo.prefaceHint;
        if (!hint) return '';
        if (hint.includes('또는')) {
            hint = hint.split('또는')[0].trim();
        }
        hint = normalizePrefaceMatchText(hint);
        if (!hint) return '';
        const songs = getEucharistSongMap(item);
'''
content = re.sub(old_getEucharistSongHintKey, new_getEucharistSongHintKey, content, count=1)

# Replace defaultPrefaceHintForLiturgyInfo
old_defaultPrefaceHint = r'    function defaultPrefaceHintForLiturgyInfo\(info, date = null\) \{.*?\n    \}'
new_defaultPrefaceHint = '''    function defaultPrefaceHintForLiturgyInfo(info, date = null) {
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
            return `사순 감사송 ${(meta.week % 4) || 4}`;
        }
        if (meta.season === 'easter') {
            if (meta.week === 1) return '부활 감사송 1';
            return `부활 감사송 ${((meta.week - 1) % 4) + 2}`;
        }
        
        if (info && info.isSunday) {
            return `연중 주일 감사송 ${(meta.week % 8) || 8}`;
        }
        return `공통 감사송 ${(meta.week % 6) || 6}`;
    }'''

content = re.sub(old_defaultPrefaceHint, new_defaultPrefaceHint, content, count=1, flags=re.DOTALL)

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Patched successfully!")
