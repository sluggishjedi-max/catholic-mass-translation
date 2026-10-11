import re
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the part where '1': [ starts in missa_data.js.
# Actually, since EP1 is large, let's just dump the whole '1' array.
# The structure is usually: variants_content: { '1': [ ... ], '2': [ ... ] }
match = re.search(r"'1':\s*\[\s*\{.*?\}\s*\]", content, re.DOTALL)
if match:
    with open('ep1_content.txt', 'w', encoding='utf-8') as f:
        f.write(match.group(0))
else:
    match2 = re.search(r"variants_content:\s*\{.*?\}", content, re.DOTALL)
    if match2:
        with open('ep1_content.txt', 'w', encoding='utf-8') as f:
            f.write(match2.group(0)[:10000])

