import re
import json

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4_antigravity.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract the EP1 lines from missa_data.js
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\ep1_content.txt', 'r', encoding='utf-8') as f:
    ep1_content = f.read()

# Let's write a JS script that we can run in Node to test filterRomanCanonSeasonalLines
js_code = """
const fs = require('fs');

// Stub cleanNodeText and romanCanonLineText
function cleanNodeText(str) {
    if (!str) return '';
    return str.replace(/<[^>]*>/g, '').trim();
}

function combinedLineText(line) {
    return ['kr', 'vn', 'en', 'jp', 'la']
        .map(lower => [line && line['sp_' + lower], line && line['text_' + lower]])
        .flat()
        .filter(Boolean)
        .map(cleanNodeText)
        .join(' ');
}

function romanCanonLineText(line) {
    if (!line) return '';
    return ['kr', 'vn', 'en', 'jp', 'la']
        .map(lower => line['text_' + lower])
        .filter(Boolean)
        .map(cleanNodeText)
        .join(' ');
}

const romanCanonSeasonalMarkers = [
    { key: 'ordinary', marker: '우리 주 천주 예수 그리스도의 어머니이시며' },
    { key: 'christmas', marker: '복되신 마리아께서 동정의 순결한 몸으로' },
    { key: 'epiphany', marker: '아버지의 영광을 영원히 함께 누리시는 외아들 그리스도께서' },
    { key: 'easter', marker: '우리 주 그리스도께서 육신으로 부활하신' },
    { key: 'ascension', marker: '저희의 연약한 육신을 취하신 성자 우리 주님께서' },
    { key: 'pentecost', marker: '성령께서 사도들에게 혀 모양의 불길로 나타나신' }
];

function romanCanonSeasonalBlockRanges(lines) {
    const ranges = romanCanonSeasonalMarkers.map(marker => {
        const start = lines.findIndex((line, index) => {
            const text = romanCanonLineText(line);
            const nextText = romanCanonLineText(lines[index + 1]);
            return text === '저희는 온 교회와 일치하여' && nextText.includes(marker.marker);
        });
        return Object.assign({}, marker, { start });
    });
    if (ranges.some(range => range.start < 0)) return [];
    ranges.sort((a, b) => a.start - b.start);
    const afterLast = lines.findIndex((line, index) =>
        index > ranges[ranges.length - 1].start &&
        romanCanonLineText(line).includes('주 하느님, 이 예물을 너그러이 받아들이고 강복하시어')
    );
    ranges.forEach((range, index) => {
        range.end = index + 1 < ranges.length
            ? ranges[index + 1].start
            : (afterLast > range.start ? afterLast : lines.length);
    });
    return ranges;
}

const lines = """ + f"[{ep1_content}];" + """

const ranges = romanCanonSeasonalBlockRanges(lines);
console.log(JSON.stringify(ranges, null, 2));

const ordinaryLines = lines.filter((line, index) =>
    index < ranges[0].start ||
    index >= Math.max(...ranges.map(r => r.end)) ||
    (index >= ranges[0].start && index < ranges[0].end)
);

// console.log(ordinaryLines.map(l => l.text_kr).filter(Boolean).join('\\n'));
"""

with open('test_ep1_logic.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
