import pandas as pd
import json
import re

# Read Excel file
df = pd.read_excel(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\참고자료\미사\전례력\2026_Liturgical_Calendar_completed.xlsx')

mapping = {}

# Process rows to build mapping
for index, row in df.iterrows():
    kr_preface = str(row.get('한국 기준 감사송명', ''))
    if kr_preface == 'nan' or not kr_preface.strip():
        continue
    
    kr_prefaces = [p.replace('또는', '').strip() for p in kr_preface.split('\n')]
    jp_prefaces = [p.replace('または', '').strip() for p in str(row.get('일본 기준 감사송명', '')).split('\n')]
    en_prefaces = [p.replace('or', '').strip() for p in str(row.get('영어 감사송명', '')).split('\n')]
    vn_prefaces = [p.replace('hoặc', '').strip() for p in str(row.get('베트남어 감사송명', '')).split('\n')]
    la_prefaces = [p.replace('vel', '').strip() for p in str(row.get('라틴어 감사송명', '')).split('\n')]
    
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

print(f"Loaded {len(mapping)} mappings.")

# Now read missa_data.js
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace titles in the songs object
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

def replace_title(m):
    original_block = m.group(0)
    kr_title_m = re.search(r'kr:\s*"([^"]+)"', original_block)
    if not kr_title_m: return original_block
    kr_title = kr_title_m.group(1).strip()
    
    # We want to match kr_title with the best key in mapping
    best_match = None
    for full_kr in mapping.keys():
        # Check if the title starts with the base name (e.g. '대림 감사송 1' matches '대림 감사송 1 : ...')
        if kr_title in full_kr:
            best_match = mapping[full_kr]
            break
            
    if best_match:
        return f'title: {{ kr: "{best_match["kr"]}", vn: "{best_match["vn"]}", en: "{best_match["en"]}", jp: "{best_match["jp"]}", la: "{best_match["la"]}" }}'
    return original_block

new_songs_content = re.sub(r'title:\s*\{.*?\}', replace_title, songs_content, flags=re.DOTALL)

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'w', encoding='utf-8') as f:
    f.write(content[:start_idx] + new_songs_content + content[end_idx:])

print("Successfully updated missa_data.js prefaces.")
