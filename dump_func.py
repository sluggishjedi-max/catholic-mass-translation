import re
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\V22.4.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'function defaultPrefaceHintForLiturgyInfo.*?\n    \}', content, re.DOTALL)
if match:
    with open('func_dump_utf8.txt', 'w', encoding='utf-8') as out:
        out.write(match.group(0))
