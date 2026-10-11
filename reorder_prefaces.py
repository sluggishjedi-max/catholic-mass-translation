import re

# Read missa_data.js
with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

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

top_level = []
current_block = ""
current_key = None
brace_depth = 0

lines = songs_content.split('\n')
i = 0
while i < len(lines):
    line = lines[i]
    current_block += line + '\n'
    brace_depth += line.count('{') - line.count('}')
    
    if brace_depth == 0 and '": {' in current_block:
        # End of a block
        m = re.search(r'"([^"]+)":\s*\{', current_block)
        if m:
            key = m.group(1)
            if current_block.strip().endswith(','):
                current_block = current_block.rstrip()[:-1] + '\n'
            top_level.append((key, current_block))
        current_block = ""
    i += 1

def get_sort_weight(key):
    if key.startswith('kr_'):
        m = re.search(r'\d+', key)
        return 1000 + (int(m.group()) if m else 0)
    if key.startswith('vn_'):
        return 2000
    if key.startswith('us_'):
        return 3000
    if key.startswith('jp_'):
        return 4000
    return 0

ordered = sorted(top_level, key=lambda x: get_sort_weight(x[0]))

new_songs_content = ",\n".join(b[1].rstrip('\n, ') for b in ordered) + '\n'

with open(r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\JS file\missa_data.js', 'w', encoding='utf-8') as f:
    f.write(content[:start_idx] + '\n' + new_songs_content + '    ' + content[end_idx:])

print(f"Reordered {len(ordered)} prefaces.")
