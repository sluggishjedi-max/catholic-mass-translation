import re

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Eucharistic Prayer I starts around line 1074 but its actual content might be inside `eucharistic_prayer_1` or under `variants['1']`.
match = re.search(r'// 감사 기도 제1양식.*?// 감사 기도 제2양식', content, re.DOTALL)
if match:
    with open('ep1_dump.txt', 'w', encoding='utf-8') as f2:
        f2.write(match.group(0))
else:
    # Maybe it's defined separately?
    matches = re.finditer(r'variants: \{.*?\n        \},', content, re.DOTALL)
    for m in matches:
        with open('ep1_dump.txt', 'a', encoding='utf-8') as f2:
            f2.write("Found variants\n")
