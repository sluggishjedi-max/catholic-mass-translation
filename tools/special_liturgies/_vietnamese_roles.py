"""Keep Vietnamese speaker cues separate from the supplied original wording."""
import re

PURE_RUBRICS = {'palm_form', 'thursday_intro', 'thursday_end_form', 'friday_intro',
                'friday_communion_intro', 'vigil_intro', 'vigil_eucharist_intro',
                'baptism', 'holy_saturday_rest', 'vigil_blessing'}
NARRATION = re.compile(r'^(?:\d+[.)-]\s*)?(?:Linh mục|Phó tế|Chủ tế(?!:)|Sau (?:đó|khi|bài)|'
                       r'Rồi |Đoạn |Tiếp |Nếu |Khi |Trong (?:lúc|trường)|Trước |Tùy nghi|'
                       r'Mọi người|Và mọi người|Hội [Đđ]ồng|Người cầm|Hai ca viên|Dứt |'
                       r'Làm phép|Để kính|Bắt đầu phụng vụ|Đọc kinh|[Tt]ất cả)', re.I)
LABEL = re.compile(r'^(?:Lời (?:nguyện|chủ tế)|Điệp ca|Thánh vịnh|Kinh cầu|Hoặc|Cách thứ|Hình thức)', re.I)
MARKER = re.compile(r'^(?:(Chủ tế|Linh mục|Phó tế|Cộng đoàn|Giáo dân|Mọi người|Xướng|Đáp|Thưa|X|[ĐÐ]|R)\s*(?:[:.]|/\.)\s*|([╋◎○●])\s*)', re.I)


def normalize_lines(lines, key):
    def raw(line):
        if 'rubric' in line:
            return '<' + line['rubric'] + '>'
        prefix = line.get('sp', '')
        return (prefix + ' ' if prefix else '') + line.get('text', '')
    text = '\n'.join(raw(line) for line in lines)
    if key == 'litany':
        # A trailing Đ. in the printed litany repeats the last written response.
        # Expand the notation into an assembly row; do not read it as prose.
        original = text.splitlines()
        expanded, response = [], ''
        for index, line in enumerate(original):
            explicit = re.match(r'^[ĐÐ]\.\s*(.+)', line.strip())
            if explicit:
                response = explicit[1]
            repeat = re.search(r'\s*[ĐÐ]\.\s*$', line)
            if repeat and not explicit:
                expanded.append('X. ' + line[:repeat.start()].strip())
                following = next((value.strip() for value in original[index+1:] if value.strip()), '')
                if response and not re.match(r'^[ĐÐ]\.', following):
                    expanded.append('Đ. ' + response)
            else:
                expanded.append(line)
        text = '\n'.join(expanded)
    if key in PURE_RUBRICS:
        return [{'rubric': ' '.join(text.replace('<', '').replace('>', '').split())}] if text.strip() else []
    default = 'N.' if re.search(r'vigil_reading_|vigil_epistle', key) else 'X.' if re.search(r'psalm|alleluia|litany', key) else 'CĐ.' if key == 'palm_antiphon' else 'PT.' if key in ('exsultet','light_procession') else 'CT.'
    result, speaker = [], default
    def append(value, sp=None):
        field = 'rubric' if sp is None else 'text'
        value = value.strip()
        if not value:
            return
        if result and field in result[-1] and (sp is None or result[-1].get('sp') == sp):
            result[-1][field] += ' ' + value
        else:
            result.append({field:value, **({'sp':sp} if sp is not None else {})})
    for chunk in re.split(r'(<[\s\S]*?>)', text):
        if chunk.startswith('<') and chunk.endswith('>'):
            append(' '.join(chunk[1:-1].split())); speaker = default
            continue
        for raw_line in chunk.splitlines():
            line = raw_line.strip().lstrip('<').rstrip('>')
            if not line:
                continue
            marker = MARKER.match(line)
            if marker:
                cue = (marker[1] or marker[2]).casefold()
                speaker = 'CĐ.' if cue in ('cộng đoàn','giáo dân','mọi người','đáp','thưa','đ','ð','r','◎','●') else 'X.' if cue in ('x','xướng','○') else 'PT.' if cue == 'phó tế' else 'CT.'
                line = line[marker.end():]
            elif NARRATION.match(line) or LABEL.match(line) or (line == line.upper() and re.search(r'[A-ZÀ-Ỹ]', line)):
                append(line)
                speaker = 'CĐ.' if re.match(r'^(?:Và )?mọi người.*thưa', line, re.I) else None
                if re.match(r'^Điệp ca|^Thánh vịnh', line, re.I): speaker = 'X.'
                continue
            elif re.match(r'^(?:A[- ]?men|Amen)\.?$', line, re.I):
                speaker = 'CĐ.'
            elif re.match(r'^\d+\)', line):
                speaker = 'X.'
            elif re.match(r'^(?:Bài\s*trích|Trích |Tin Mừng)', line, re.I):
                speaker = default
            elif re.match(r'^-?\s*(?:Anh \(?chị\)? em|Anh chị em|Lạy (?:Chúa|Thiên Chúa)|Ta hãy cầu|Chúng ta hãy cầu)', line):
                speaker = default if default == 'N.' else 'PT.' if key.startswith('friday_intercession') and not line.startswith('Lạy') else 'CT.'
            elif re.match(r'^-?\s*Ánh sáng Chúa', line):
                speaker = 'PT.'
            elif re.match(r'^-?\s*(?:Tạ ơn Chúa|Thưa |Chúng tôi|Tôi tin)', line):
                speaker = 'CĐ.'
            append(line.removeprefix('- ').strip(), speaker)
            if speaker == 'CĐ.' and re.match(r'^(?:A[- ]?men|Amen)\.?$', line, re.I): speaker = default
    return result


def normalize_profile(profile):
    def visit(part, key):
        if 'lines' in part:
            part['lines'] = normalize_lines(part['lines'], key)
        for field in ('variants', 'byCycle'):
            for nested in part.get(field, {}).values():
                visit(nested, key)
    for kind in ('celebrations', 'vigils'):
        for entry in profile[kind]:
            for key, part in entry.get('riteData', {}).get('VN', {}).items():
                visit(part, key)
