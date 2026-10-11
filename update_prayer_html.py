import re

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4_antigravity.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace prayerSourceText to remove '기도문' fallback
prayer_source_pattern = r"return localizedPrayerValueStrict\(entry && entry\.source, langCode\) \|\| localizedPrayerValue\(entry && entry\.source, otherLangCode\) \|\| localizedPrayerValue\(entry && entry\.source, langCode\) \|\| '기도문';"
content = re.sub(
    prayer_source_pattern,
    r"return localizedPrayerValueStrict(entry && entry.source, langCode) || localizedPrayerValue(entry && entry.source, otherLangCode) || localizedPrayerValue(entry && entry.source, langCode);",
    content
)

# Replace prayerTitleHtml
old_title_html = """function prayerTitleHtml(entry, langCode, otherLangCode) {
        const directTitle = localizedPrayerValueStrict(entry.titles, langCode);
        const fallbackTitle = localizedPrayerValue(entry.titles, langCode) || localizedPrayerValue(entry.titles, otherLangCode) || '기도문';
        const category = prayerOfficialCategory(entry, langCode);
        const missingTag = directTitle ? '' : '<span class="aux-prayer-tag">AI 번역</span>';
        const officialTag = category ? `<span class="aux-prayer-tag">${escapeHtml(category)}</span>` : '';
        return `${escapeHtml(directTitle || fallbackTitle)}${officialTag}${missingTag}`;
    }"""

new_title_html = """function prayerTitleHtml(entry, langCode, otherLangCode, isTranslation = false) {
        const directTitle = localizedPrayerValueStrict(entry.titles, langCode);
        if (isTranslation) return directTitle ? escapeHtml(directTitle) : '';
        const fallbackTitle = localizedPrayerValue(entry.titles, langCode) || localizedPrayerValue(entry.titles, otherLangCode) || '기도문';
        const category = prayerOfficialCategory(entry, langCode);
        const missingTag = directTitle ? '' : '<span class="aux-prayer-tag">AI 번역</span>';
        const officialTag = category ? `<span class="aux-prayer-tag">${escapeHtml(category)}</span>` : '';
        return `${escapeHtml(directTitle || fallbackTitle)}${officialTag}${missingTag}`;
    }"""
content = content.replace(old_title_html, new_title_html)

# Replace renderPrayerPanel
old_render_prayer_panel_map = """        root.innerHTML = rows.map(entry => {
            const leftTitle = prayerTitleHtml(entry, leftLang, rightLang);
            const rightTitle = prayerTitleHtml(entry, rightLang, leftLang);
            const leftBody = prayerBodyHtml(entry, leftLang, rightLang);
            const rightBody = prayerBodyHtml(entry, rightLang, leftLang);
            return [
                '<article class="aux-card">',
                `<div class="aux-result-meta">${prayerMetaHtml(entry, leftLang, rightLang)}</div>`,
                '<div class="aux-two-column">',
                `<div class="aux-language-block"><div class="aux-language-label">${escapeHtml(appLanguageName(leftLang))}</div><div class="aux-prayer-title">${leftTitle}</div><div class="aux-prayer-body">${leftBody}</div></div>`,
                `<div class="aux-language-block"><div class="aux-language-label">${escapeHtml(appLanguageName(rightLang))}</div><div class="aux-prayer-title">${rightTitle}</div><div class="aux-prayer-body">${rightBody}</div></div>`,
                '</div>',
                '</article>'
            ].join('');
        }).join('');"""

new_render_prayer_panel_map = """        root.innerHTML = rows.map(entry => {
            const leftTitle = prayerTitleHtml(entry, leftLang, rightLang, false);
            const rightTitle = prayerTitleHtml(entry, rightLang, leftLang, true);
            const translatedTitleHtml = rightTitle ? ` <span class="aux-prayer-translation-title" style="opacity: 0.6; font-size: 0.85em; font-weight: normal; margin-left: 8px;">${rightTitle}</span>` : '';
            
            const leftBodyText = localizedPrayerValueStrict(entry.texts, leftLang);
            const rightBodyText = localizedPrayerValueStrict(entry.texts, rightLang);
            let bodyHtml = '';
            
            if (!leftBodyText && !rightBodyText) {
                bodyHtml = `<div class="aux-prayer-body" style="margin-top: 10px;">${prayerBodyHtml(entry, leftLang, rightLang)}</div>`;
            } else {
                const leftLines = (leftBodyText || '').split(/\\r?\\n/).filter(t => t.trim());
                const rightLines = (rightBodyText || '').split(/\\r?\\n/).filter(t => t.trim());
                const maxLines = Math.max(leftLines.length, rightLines.length);
                const combinedLines = [];
                for (let i = 0; i < maxLines; i++) {
                    if (i < leftLines.length) combinedLines.push(`<div class="prayer-line-left" style="margin-bottom: 4px; color: var(--text-color);">${formatPrayerMarkupHtml(leftLines[i])}</div>`);
                    if (i < rightLines.length) combinedLines.push(`<div class="prayer-line-right" style="margin-bottom: 12px; color: var(--primary-color); font-size: 0.95em;">${formatPrayerMarkupHtml(rightLines[i])}</div>`);
                }
                if (combinedLines.length === 0) {
                    bodyHtml = `<div class="aux-prayer-body" style="margin-top: 10px;">${prayerBodyHtml(entry, leftLang, rightLang)}</div>`;
                } else {
                    bodyHtml = `<div class="aux-prayer-body" style="margin-top: 10px;">${combinedLines.join('')}</div>`;
                }
            }

            return [
                '<article class="aux-card" style="display: flex; flex-direction: column; gap: 4px;">',
                `<div class="aux-result-meta">${prayerMetaHtml(entry, leftLang, rightLang)}</div>`,
                `<div class="aux-prayer-title" style="font-size: 1.1em; font-weight: bold; color: var(--text-color); margin-top: 4px;">${leftTitle}${translatedTitleHtml}</div>`,
                bodyHtml,
                '</article>'
            ].join('');
        }).join('');"""
content = content.replace(old_render_prayer_panel_map, new_render_prayer_panel_map)

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4_antigravity.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated V22.4_antigravity.html for Prayers.")
