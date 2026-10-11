import re
import json

def get_mapping_from_dump(dump_path):
    mapping = {}
    with open(dump_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines:
            if line.startswith('ROW'):
                try:
                    data = json.loads(line.split(': ', 1)[1])
                    kr_preface = data.get('한국 기준 감사송명', '')
                    if not kr_preface or kr_preface == 'nan': continue
                    # Sometimes there are multiple prefaces separated by "또는" or "\n또는"
                    kr_prefaces = [p.replace('또는', '').strip() for p in kr_preface.split('\n')]
                    jp_prefaces = [p.replace('または', '').strip() for p in str(data.get('일본 기준 감사송명', '')).split('\n')]
                    en_prefaces = [p.replace('or', '').strip() for p in str(data.get('영어 감사송명', '')).split('\n')]
                    vn_prefaces = [p.replace('hoặc', '').strip() for p in str(data.get('베트남어 감사송명', '')).split('\n')]
                    la_prefaces = [p.replace('vel', '').strip() for p in str(data.get('라틴어 감사송명', '')).split('\n')]
                    
                    for idx, kr in enumerate(kr_prefaces):
                        if kr and kr != 'nan' and kr != '없음':
                            if kr not in mapping:
                                mapping[kr] = {
                                    'kr': kr,
                                    'jp': jp_prefaces[idx] if idx < len(jp_prefaces) and jp_prefaces[idx] != 'nan' else '',
                                    'en': en_prefaces[idx] if idx < len(en_prefaces) and en_prefaces[idx] != 'nan' else '',
                                    'vn': vn_prefaces[idx] if idx < len(vn_prefaces) and vn_prefaces[idx] != 'nan' else '',
                                    'la': la_prefaces[idx] if idx < len(la_prefaces) and la_prefaces[idx] != 'nan' else ''
                                }
                except Exception as e:
                    pass
    return mapping

mapping = get_mapping_from_dump(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\excel_dump_utf8.txt')

# Now read missa_data.js
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the `songs: { ... }` block.
# Actually, the songs block is huge.
match = re.search(r'songs:\s*\{', content)
if not match:
    print("Cannot find songs: {")
    exit(1)

start_idx = match.end()
open_braces = 1
end_idx = start_idx
for i in range(start_idx, len(content)):
    if content[i] == '{':
        open_braces += 1
    elif content[i] == '}':
        open_braces -= 1
        if open_braces == 0:
            end_idx = i
            break

songs_content = content[start_idx:end_idx]

# To manipulate it properly, maybe we just use regex to replace titles.
# Let's find each title block:
# title: { kr: "대림 감사송 1", vn: "Kinh Tiền Tụng Mùa Vọng I", en: "Preface of Advent I", jp: "待降節の叙唱 I", la: "Praefatio I de Adventu" }
# We want to match `kr: "대림 감사송 1"` and see if it maps to any key in `mapping` (e.g. `대림 감사송 1 : 그리스도의 두 차례 오심`)
def replace_title(m):
    original_block = m.group(0)
    kr_title_m = re.search(r'kr:\s*"([^"]+)"', original_block)
    if not kr_title_m: return original_block
    kr_title = kr_title_m.group(1)
    
    # find the matching full kr title
    best_match = None
    for full_kr in mapping.keys():
        if kr_title in full_kr:
            best_match = mapping[full_kr]
            break
            
    if best_match:
        return f'title: {{ kr: "{best_match["kr"]}", vn: "{best_match["vn"]}", en: "{best_match["en"]}", jp: "{best_match["jp"]}", la: "{best_match["la"]}" }}'
    return original_block

new_songs_content = re.sub(r'title:\s*\{.*?\}', replace_title, songs_content, flags=re.DOTALL)

with open('updated_missa_data.js', 'w', encoding='utf-8') as f:
    f.write(content[:start_idx] + new_songs_content + content[end_idx:])
print("Successfully generated updated_missa_data.js")
