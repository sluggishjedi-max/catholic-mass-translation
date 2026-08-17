from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path

import pypdfium2 as pdfium


ROOT = Path(__file__).resolve().parents[1]
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
CACHE = ROOT / "tmp" / "online-hymn-import" / "missing-hymn-sources"


LYRICS = {
    "vn-tcvn1-453": """1. Chúa đã đổ xuống lòng con nguồn hoan lạc lớn hơn cả những khi được lúa mới rượu ngon đầy tràn. [ĐK]

2. Chúa đã gìn giữ hồn con khỏi sa vực tăm tối. Chúa là chiến lũy con nương náu triền miên suốt đời. [ĐK]

3. Chúa đã chỉ lối hồn con đi giữa ngàn tươi sáng. Bên lòng Chúa yêu con sung sướng hạnh phúc yên hàn. [ĐK]

4. Con không tìm bước chạy theo đường danh vọng trần thế. Tâm hồn lắng yên như con thơ nghỉ bên lòng mẹ. [ĐK]

ĐK. Con vẫn cậy trông Chúa, là tình thương bao la của Người, là sức sống chan hòa.""",
    "vn-tcvn1-454": """1. Kìa Chiên Con hiển vinh giữa mây hồng, nhạc tấu vang thần thánh hát khải hoàn. Áo cẩm bào điểm nghìn sao sáng, trước ngai vàng vui mừng quỳ chúc tụng. [ĐK]

2. Kìa vinh sang các kẻ xưa trung thành, lòng sắt son đã quyết sống tinh toàn. Bên ngai vàng vui cùng bạn thánh, nghe Chúa Trời khen ngợi lòng khiết trinh. [ĐK]

3. Kìa vinh sang các kẻ xưa trung thành, lòng vững tin khẳng khái trước khổ hình. Áo huy hoàng một màu đỏ sáng, hưởng phúc lộc thiên đàng đời thánh thiêng. [ĐK]

4. Kìa vinh sang các kẻ sống hoàn toàn, đạp dưới chân quyền chức với vàng bạc. Xưa dương trần được quyền phán đoán, nay sân rồng ngỡ ngàng ngồi ngai vàng. [ĐK]

ĐK. Tôn kính chúc khen Chúa Ba Ngôi hằng sống, vinh hiển khải hoàn giữa các thánh cao sang. Tôn kính chúc khen Chúa Ba Ngôi hằng sống, xin phù hộ con cái Chúa nơi trần hoàn.""",
    "vn-tcvn2-025": """1. Hằng ngày con gặp được Chúa trong những anh em, trong những tha nhân cùng con đồng hành. Hằng ngày con gặp được Chúa trên các vỉa hè, trên đường phố trưa, trong quán chợ chiều. Hằng ngày con gặp được Chúa, con thấy vui hơn, con thấy yêu hơn, đời không lạc loài. Hằng ngày con tìm gặp Chúa, chia xớt ngọt bùi, san sẻ áo cơm, sưởi ấm lòng người. [ĐK]

2. Hằng ngày con gặp được Chúa nơi bác công nhân, trong bác nông dân ngày đêm miệt mài. Hằng ngày con gặp được Chúa trên các nẻo đường, ông bà mến thương, em bé đến trường. Hằng ngày con gặp được Chúa khi đám tang qua, em bé sinh ra, niềm vui tràn ngập. Hằng ngày con gặp được Chúa trong xóm nhà nghèo tiêu điều xác xơ, bình an phận người. [ĐK]

3. Hằng ngày con gặp được Chúa như ánh dương lên, chim hót hân hoan, ngày vui khởi đầu. Hằng ngày con gặp được Chúa khi đến nhà thờ, chuông chiều thiết tha như tiếng gọi mời. Hằng ngày con gặp được Chúa khi ánh trăng soi đưa lối con đi, màn đêm phủ đầy. Hằng ngày con gặp được Chúa trên ánh điện đường, im lìm phố đêm, buồn vui phận người. [ĐK]

ĐK. Lời Ngài con vẫn nhớ luôn: ai yêu tha nhân là chính yêu Ngài. Lời Ngài con không dám quên: yêu Ngài là yêu anh em.""",
    "vn-tcvn2-143": """1. Người là Gioan cao trọng hơn mọi người nam. Chúa đã kén chọn khi còn trong lòng mẫu thân. Từ nơi hoang vu sa mạc, mặc áo thú, ăn uống mật ong. Lầm than gian lao tu hành, làm nhân chứng cho Chúa từ nhân. [ĐK]

2. Người là Gioan cao trọng hơn mọi người nam. Chúa đã kén chọn nên người dẫn đạo thế nhân. Đã loan tin vui mọi miền, ơn cứu rỗi cho khắp toàn dân. Gọi kêu khai tâm mở đường để đón Đấng giải thoát trần gian. [ĐK]

ĐK. Người là Gioan, minh chứng ánh sáng cứu độ. Kêu gọi người mọi nơi đón chờ Chúa đến. Người là Gioan, ngôn sứ tiên phong mở đường. Tiếng kêu của Người còn mãi vang rền.""",
    "vn-tcvn2-287": "1. Chúng con kính thờ Mình và Máu Thánh Chúa.",
    "vn-tcvn2-343": """1. Sao Chúa lại gọi con làm nhân chứng cho Ngài trong cuộc trần này? Sao Chúa lại gọi con đem Tin Mừng cho người mọi nơi? Vì đời con có gì đâu, có đáng gì đâu để đem Tin Mừng. Biết rằng con nhỏ bé mà thôi, nhưng vững tin nơi Ngài, xin vâng bước theo Ngài. [ĐK]

2. Nay Chúa lại gần con và âu yếm ban lời lúc con ngủ say. Con ngỡ ngàng khi nghe tên con được đổi lại từ đây. Và Ngài đổi mới lòng con, thánh hóa đời con phút giây đăng trình. Thế rồi trong ánh nắng bình minh chan chứa bao ân tình, con gieo bước an bình. [ĐK]

3. Xin mãi một niềm tin, niềm yêu mến không hề phai tàn, Ngài ơi. Con biết cuộc đời con như chim đậu trên cành cây mới. Vì Ngài đã tháp vào con đôi cánh để bay khắp bốn phương trời. Dẫu cành cây đôi lúc oằn đi, chim vẫn ca vang lời cao rao Chúa muôn đời. [ĐK]

4. Chúa đã gọi tên con khi con đứng bên đường lúc chiều dần buông. Con cứ tưởng như mơ theo chân Ngài đi vào vườn nho. Dù rằng con biết tận căn với Chúa thời gian có chi muộn màng. Đáp lại ơn thiêng đã gọi con, xin mở tay thi hành theo như Chúa ban truyền. [ĐK]

ĐK. Này đàn lòng con vang lên, vang lên rộn rã. Ánh sáng soi dẫn con lên đường. Ý Chúa con dám đâu coi thường. Nguyện một đời luôn trung tín. Tâm tư ủ ấp bao tình mến. Ra đi minh chứng cho Lời Chúa, để muôn nơi tin nhận Nước Trời.""",
    "vn-tcvn2-344": """1. Vì từ đây con thuộc trọn về Ngài, hồn và xác, tâm tư cùng ước muốn. Vì từ nay trong muôn tình dấu ái, nguyện hiến trao riêng một Chúa thôi. [ĐK]

2. Vì đời con như nụ hồng diệu vời, được tỏa sáng trong ân tình Thiên Chúa. Niềm thành tín như hương trầm thơm ngát, từng phút giây dâng về Chúa thôi. [ĐK]

ĐK. Để trong tim nhắc lại không ngừng: Con muốn tin yêu một Chúa thôi! Để trong tim nhắc mãi không ngơi: Con muốn tin yêu một Chúa thôi!""",
    "jp-tenrei-ten086": """1. 神をほめたたえよ、イスラエルの神を。神は民を訪れてあがない、わたしたちのために力強い救い主を、しもべダビドの家にたてられた。

2. 神は昔、預言者によって語られたように、わたしたちに逆らう者、うらみをいだく者の手から、わたしたちを救い、祖先をあわれみ、とうとい契約を心に留められた。

3. 神は先祖アブラハムに約束されたとおり、逆らう者からわたしたちを救われた。生涯を清く正しく平和におくり、神に仕えることができるように。

4. 幼子よ、おまえも神の預言者と呼ばれ、主の前を歩み、その道をととのえ、罪のゆるしによる救いをその民に知らせる。すべては神のあわれみの心による。

5. 神の深いあわれみにより、夜明けの太陽はわたしたちにのぞみ、やみと死の陰にある人を照らし、わたしたちの歩みを平和にみちびく。

栄唱. 栄光は父と子と聖霊に。初めのように今もいつも、世々に。アーメン。""",
    "jp-tenrei-ten179": """[コーラス]
わたしは神をあがめ、神の救いに喜びおどる。

1. わたしは神をあがめ、わたしの心は神の救いに喜びおどる。

2. 神は卑しいはしためをかえりみられ、いつの代の人もわたしをしあわせな者とよぶ。

3. 神はわたしに偉大なわざを行われた。その名はとうとく、あわれみは代々、神をおそれ敬う人のうえに。

4. 神はその力をあらわし、思いあがる者を打ちくだき。

5. 権力をふるう者をその座からおろし、見捨てられた人を高められる。

6. 飢えに苦しむ人はよいもので満たされ、おごり暮らす者はむなしくなってかえる。

[コーラス]
神のあわれみは代々、神をおそれ敬う人のうえに。

7. 神はいつくしみを忘れることなく、しもべイスラエルを助けられた。わたしたちの祖先アブラハムと、その子孫に約束されたように。

栄唱. 栄光は父と子と聖霊に。初めのように今もいつも、世々に。アーメン。""",
    "jp-tenrei-ten181": """1. わたしは神をあがめ、わたしの心は神の救いに喜びおどる。

2. 神はいやしいはしためをかえりみられ、いつの代の人もわたしをしあわせな者と呼ぶ。

3. 神はわたしに偉大なわざを行われた。その名はとうとく、あわれみは代々、神をおそれ敬う人のうえに。

4. 神はその力をあらわし、思いあがる者を打ち砕き。

5. 権力をふるう者をその座からおろし、見捨てられた人を高められる。

6. 飢えに苦しむ人はよいもので満たされ、おごり暮らす者はむなしくなってかえる。

7. 神はいつくしみを忘れることなく、しもべイスラエルを助けられた。わたしたちの祖先アブラハムと、その子孫に約束されたように。

栄唱. 栄光は父と子と聖霊に。初めのように今もいつも、世々に。アーメン。""",
    "jp-tenrei-ten182": """1. わたしは神をあがめ、わたしの心は神の救いに喜びおどる。

2. 神はいやしいはしためをかえりみられ、いつの代の人もわたしをしあわせな者と呼ぶ。

3. 神はわたしに偉大なわざを行われた。その名はとうとく、あわれみは代々、神をおそれ敬う人のうえに。

4. 神はその力をあらわし、思いあがる者を打ち砕き。

5. 権力をふるう者をその座からおろし、見捨てられた人を高められる。

6. 飢えに苦しむ人はよいもので満たされ、おごり暮らす者はむなしくなってかえる。

7. 神はいつくしみを忘れることなく、しもべイスラエルを助けられた。わたしたちの祖先アブラハムと、その子孫に約束されたように。

栄唱. 栄光は父と子と聖霊に。初めのように今もいつも、世々に。アーメン。""",
    "jp-tenrei-tsei407": """1. マリアさまのこころ、それはあおぞら。わたしたちをつつむ、ひろいあおぞら。

2. マリアさまのこころ、それはかしのき。わたしたちをまもる、つよいかしのき。

3. マリアさまのこころ、それはうぐいす。わたしたちとうたう、もりのうぐいす。

4. マリアさまのこころ、それはやまゆり。わたしたちもほしい、しろいやまゆり。

5. マリアさまのこころ、それはサファイヤ。わたしたちをかざる、ひかるサファイヤ。""",
}


SOURCES = {
    "vn-tcvn1-453": "https://thanhcavietnam.org/FilesLoiNhac/TuyenTapTCVN1/TuyenTapTCVN1.pdf",
    "vn-tcvn1-454": "https://thanhcavietnam.org/FilesLoiNhac/TacGia/TacGiaKhac-TH/LeCacThanh_JBVang.pdf",
    "vn-tcvn2-025": "https://truongca.com/images/sheet/pdf/con/con-gap-chua-lm-pham-quang-truongca.com.pdf",
    "vn-tcvn2-143": "https://thanhcavietnam.org/FilesLoiNhac/TacGia/TacGiaKhac-TH/NguoiLaGioan_DaMinh.pdf",
    "vn-tcvn2-287": "https://hdgmvietnam.com/chi-tiet/tuyen-tap-thanh-ca-viet-nam-quyen-2",
    "vn-tcvn2-343": "https://loinhacthanhcablog.wordpress.com/wp-content/uploads/2025/09/sao-chua-goi-con-nguyen-duy.pdf",
    "vn-tcvn2-344": "https://thanhcavietnam.org/FilesLoiNhac/TacGia/Sr.TramHuong/CaNguyen/TinYeuMotChua-SrTramHuong-IMP.pdf",
}


SCORES = {
    "vn-tcvn1-453": (SOURCES["vn-tcvn1-453"], 45, "assets/hymns/vn-tcvn1/453-con-tin-nhiem-noi-chua-pham-minh-cong-01.webp"),
    "vn-tcvn1-454": (SOURCES["vn-tcvn1-454"], 0, "assets/hymns/vn-tcvn1/454-le-cac-thanh-jb-vang-01.webp"),
    "vn-tcvn2-025": (SOURCES["vn-tcvn2-025"], 0, "assets/hymns/vn-tcvn2/025-con-gap-chua-pham-quang-01.webp"),
    "vn-tcvn2-143": (SOURCES["vn-tcvn2-143"], 0, "assets/hymns/vn-tcvn2/143-nguoi-la-gioan-da-minh-01.webp"),
    "vn-tcvn2-343": (SOURCES["vn-tcvn2-343"], 0, "assets/hymns/vn-tcvn2/343-sao-chua-goi-con-nguyen-duy-01.webp"),
    "vn-tcvn2-344": (SOURCES["vn-tcvn2-344"], 0, "assets/hymns/vn-tcvn2/344-tin-yeu-mot-chua-tram-huong-01.webp"),
}


def array_bounds(source: str) -> tuple[int, int]:
    start = source.index("[", source.index("const hymnData"))
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(source)):
        character = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                in_string = False
            continue
        if character == '"':
            in_string = True
        elif character == "[":
            depth += 1
        elif character == "]":
            depth -= 1
            if depth == 0:
                return start, index + 1
    raise ValueError("Could not locate hymnData")


def first_line(lyrics: str) -> str:
    for line in lyrics.splitlines():
        line = line.strip()
        if line and line not in {"[ĐK]", "[コーラス]"}:
            return re.sub(r"^\d+\.\s*", "", line)
    return ""


def download(url: str, destination: Path) -> Path:
    if destination.is_file() and destination.stat().st_size > 1000:
        return destination
    destination.parent.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=180) as response:
        with destination.open("wb") as handle:
            while chunk := response.read(1024 * 1024):
                if chunk:
                    handle.write(chunk)
    return destination


def render_scores() -> dict[str, str]:
    rendered = {}
    for identifier, (url, page_index, relative) in SCORES.items():
        cache_pdf = CACHE / f"{identifier}.pdf"
        if identifier == "vn-tcvn1-453":
            existing = ROOT / "tmp" / "online-hymn-import" / "TuyenTapTCVN1.pdf"
            pdf_path = existing if existing.is_file() else download(url, cache_pdf)
        elif identifier == "vn-tcvn1-454":
            existing = ROOT / "tmp" / "online-hymn-import" / "LeCacThanh_JBVang.pdf"
            pdf_path = existing if existing.is_file() else download(url, cache_pdf)
        else:
            pdf_path = download(url, cache_pdf)
        document = pdfium.PdfDocument(pdf_path)
        image = document[page_index].render(scale=2.2).to_pil().convert("RGB")
        destination = ROOT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=92, method=6)
        rendered[identifier] = relative
    return rendered


def main() -> None:
    rendered = render_scores()
    source = HYMN_DATA.read_text(encoding="utf-8")
    start, end = array_bounds(source)
    entries = json.loads(source[start:end])
    changed = 0
    for entry in entries:
        identifier = str(entry.get("id", ""))
        lyrics = LYRICS.get(identifier)
        if not lyrics:
            continue
        entry["lyrics"] = lyrics
        entry["text"] = lyrics
        entry["firstLine"] = first_line(lyrics)
        entry["lyricsExtraction"] = "Verified against the linked public score or source text."
        if identifier in SOURCES:
            entry["sourceUrl"] = SOURCES[identifier]
        if identifier in rendered:
            entry["scoreImages"] = [{"src": rendered[identifier], "label": "1"}]
        if identifier == "vn-tcvn2-287":
            entry["sourceNote"] = "The official PDF export is blank; only the indexed first line is recoverable from the public source."
        changed += 1
    body = json.dumps(entries, ensure_ascii=False, indent=2).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    HYMN_DATA.write_text(source[:start] + body + source[end:], encoding="utf-8")
    print(json.dumps({"updated": changed, "renderedScores": len(rendered)}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
