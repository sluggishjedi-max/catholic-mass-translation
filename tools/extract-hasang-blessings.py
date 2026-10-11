#!/usr/bin/env python3
"""Extract Korean solemn blessings from the connected Catholic Hasang app.

The script only reads the Android accessibility hierarchy and sends ordinary
tap/swipe gestures.  It does not modify the app, its private storage, or the
phone.  Open this screen before running it:

    매일 미사 > 미사통상문 > 마침
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import time
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable


DEFAULT_ADB = Path(
    r"C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Ssutzpah"
    r"\android\tools\android-sdk\platform-tools\adb.exe"
)
REMOTE_XML = "/sdcard/codex_hasang_window.xml"
PACKAGE = "kr.catholic.hasangapp"

CATEGORIES = ("시기별", "성인 축일", "기타", "백성을 위한 기도")
BLESSING_GROUPS = {
    "seasonal": {
        "category": "시기별",
        "items": [
            ("advent", "대림"),
            ("christmas", "주님성탄"),
            ("new_year", "새해"),
            ("epiphany", "주님공현"),
            ("passion", "주님수난"),
            ("easter", "부활"),
            ("ascension", "주님승천"),
            ("pentecost", "성령강림"),
            ("ordinary_1", "연중1"),
            ("ordinary_2", "연중2"),
            ("ordinary_3", "연중3"),
            ("ordinary_4", "연중4"),
            ("ordinary_5", "연중5"),
            ("ordinary_6", "연중6"),
        ],
    },
    "saints": {
        "category": "성인 축일",
        "items": [
            ("blessed_virgin_mary", "복되신 동정마리아"),
            ("peter_and_paul", "성 베드로와 성 바오로"),
            ("apostles", "사도"),
            ("all_saints", "모든성인"),
        ],
    },
    "other": {
        "category": "기타",
        "items": [
            ("church_dedication", "성당봉헌"),
            ("for_the_dead", "위령"),
        ],
    },
}

BOUNDS_RE = re.compile(r"\[(\d+),(\-?\d+)\]\[(\d+),(\-?\d+)\]")
PRAYER_NUMBER_RE = re.compile(r"^(\d+)\.\s*(.+)$", re.S)


@dataclass(frozen=True)
class UiNode:
    text: str
    bounds: tuple[int, int, int, int]

    @property
    def center(self) -> tuple[int, int]:
        x1, y1, x2, y2 = self.bounds
        return ((x1 + x2) // 2, (y1 + y2) // 2)


class HasangExtractor:
    def __init__(self, adb: Path, pause: float = 0.25) -> None:
        self.adb = adb
        self.pause = pause

    def run(self, *args: str, check: bool = True) -> subprocess.CompletedProcess[bytes]:
        return subprocess.run(
            [str(self.adb), *args],
            check=check,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )

    def shell(self, *args: str) -> None:
        self.run("shell", *args)

    def verify_device_and_screen(self) -> None:
        devices = self.run("devices").stdout.decode("utf-8", "replace")
        active = [line for line in devices.splitlines()[1:] if line.strip().endswith("\tdevice")]
        if not active:
            raise RuntimeError("승인된 Android 기기를 찾지 못했습니다.")
        focus = self.run("shell", "dumpsys", "window").stdout.decode("utf-8", "replace")
        if PACKAGE not in focus:
            raise RuntimeError("가톨릭하상 앱이 전면에 열려 있지 않습니다.")
        nodes = self.dump_nodes()
        texts = {node.text for node in nodes}
        if "매일 미사" not in texts and "매일미사" not in texts:
            raise RuntimeError("가톨릭하상의 매일 미사 화면을 찾지 못했습니다.")

    def dump_nodes(self) -> list[UiNode]:
        self.run("shell", "uiautomator", "dump", REMOTE_XML)
        raw = self.run("exec-out", "cat", REMOTE_XML).stdout
        root = ET.fromstring(raw.decode("utf-8", "replace").lstrip("\ufeff"))
        nodes: list[UiNode] = []
        for element in root.iter("node"):
            text = " ".join((element.attrib.get("text") or "").split())
            match = BOUNDS_RE.fullmatch(element.attrib.get("bounds", ""))
            if not text or not match:
                continue
            nodes.append(UiNode(text=text, bounds=tuple(map(int, match.groups()))))
        return nodes

    def tap(self, node: UiNode) -> None:
        x, y = node.center
        self.shell("input", "tap", str(x), str(y))
        time.sleep(self.pause)

    def swipe(self, x1: int, y1: int, x2: int, y2: int, duration: int = 350) -> None:
        self.shell(
            "input", "swipe", str(x1), str(y1), str(x2), str(y2), str(duration)
        )
        time.sleep(self.pause)

    @staticmethod
    def exact(nodes: Iterable[UiNode], label: str) -> list[UiNode]:
        return [node for node in nodes if node.text == label]

    def scroll_to_tabs(self) -> list[UiNode]:
        # Return to the beginning of the conclusion, then land on the fixed tab row.
        for _ in range(5):
            self.swipe(720, 650, 720, 2550, 220)
        for _ in range(4):
            nodes = self.dump_nodes()
            if all(self.exact(nodes, label) for label in CATEGORIES):
                return nodes
            self.swipe(720, 2350, 720, 850, 330)
        raise RuntimeError("장엄 강복 선택 탭을 찾지 못했습니다.")

    def choose_category(self, label: str) -> tuple[list[UiNode], UiNode]:
        nodes = self.scroll_to_tabs()
        # React Native preserves the horizontal offset when the active category
        # is tapped again.  Briefly switching categories recreates the subrow at
        # its first item, which makes every run deterministic.
        alternate = next(candidate for candidate in CATEGORIES if candidate != label)
        alternate_matches = self.exact(nodes, alternate)
        if alternate_matches:
            self.tap(sorted(alternate_matches, key=lambda item: item.bounds[1])[0])
            nodes = self.dump_nodes()
        matches = self.exact(nodes, label)
        if not matches:
            raise RuntimeError(f"분류 탭을 찾지 못했습니다: {label}")
        category_node = sorted(matches, key=lambda item: item.bounds[1])[0]
        self.tap(category_node)
        selected_nodes = self.dump_nodes()
        selected_category = sorted(
            self.exact(selected_nodes, label), key=lambda item: item.bounds[1]
        )[0]
        return selected_nodes, selected_category

    def choose_subitem(self, category: str, label: str) -> tuple[list[UiNode], UiNode]:
        _, category_node = self.choose_category(category)
        category_bottom = category_node.bounds[3]
        subrow_y = min(category_bottom + 115, 2700)
        for attempt in range(10):
            nodes = self.dump_nodes()
            candidates = [
                node
                for node in self.exact(nodes, label)
                if node.bounds[1] >= category_bottom + 20
                and node.bounds[3] <= category_bottom + 350
            ]
            if candidates:
                target = max(candidates, key=lambda item: item.bounds[2] - item.bounds[0])
                self.tap(target)
                selected_nodes = self.dump_nodes()
                selected_matches = [
                    node
                    for node in self.exact(selected_nodes, label)
                    if node.bounds[1] >= category_bottom + 20
                    and node.bounds[3] <= category_bottom + 350
                ]
                return selected_nodes, (selected_matches[0] if selected_matches else target)
            if attempt < 9:
                # A short gesture advances roughly two items and avoids
                # skipping narrow labels such as "부활".
                self.swipe(1200, subrow_y, 750, subrow_y, 300)
        raise RuntimeError(f"강복 항목을 찾지 못했습니다: {category} / {label}")

    @staticmethod
    def clean_body_text(text: str) -> str:
        return re.sub(r"\s+", " ", text).strip()

    @staticmethod
    def is_chrome_text(text: str) -> bool:
        return text in {
            "매일 미사",
            "매일미사",
            "본문크기",
            "마침",
            "마침 예식",
            *CATEGORIES,
        } or (len(text) == 1 and not text.isalnum())

    def extract_selected_blessing(
        self, category: str, key: str, label: str
    ) -> dict[str, object]:
        nodes, selected = self.choose_subitem(category, label)
        lines: list[str] = []
        seen: set[str] = set()
        reached_body = False
        reached_dismissal = False

        for scroll_index in range(7):
            if scroll_index:
                self.swipe(720, 2450, 720, 650, 330)
                nodes = self.dump_nodes()

            for node in sorted(nodes, key=lambda item: (item.bounds[1], item.bounds[0])):
                text = self.clean_body_text(node.text)
                if text == label and node.bounds[1] >= selected.bounds[1] - 100:
                    reached_body = True
                    continue
                if not reached_body and scroll_index == 0:
                    continue
                if text == "파견":
                    reached_dismissal = True
                    break
                if self.is_chrome_text(text) or text in seen:
                    continue
                # On subsequent screens the title tabs have scrolled away; body
                # text occupies the main column, while the app header stays above.
                if scroll_index and node.bounds[1] < 285:
                    continue
                seen.add(text)
                lines.append(text)
            if reached_dismissal:
                break

        # A few app releases expose a tab but leave its body empty.  Preserve
        # that fact so the official missal PDF can supply the missing text.
        # A valid one-prayer blessing (for example, Ordinary Time 2) can have
        # only the prayer, its response, the final blessing and its response.
        available = any(re.match(r"^[╋＋✚+]\s*", line) for line in lines)
        if not available:
            print(
                f"  주의: 앱 본문이 비어 있어 PDF 대조 필요 ({len(lines)}줄)",
                flush=True,
            )
        return {
            "key": key,
            "label": label,
            "availableInApp": available,
            "lines": lines if available else [],
        }

    def extract_prayers_over_people(self) -> list[dict[str, object]]:
        self.choose_category("백성을 위한 기도")
        prayers: dict[int, str] = {}
        stagnant = 0
        for _ in range(24):
            nodes = self.dump_nodes()
            before = len(prayers)
            for node in nodes:
                match = PRAYER_NUMBER_RE.match(self.clean_body_text(node.text))
                if match:
                    prayers[int(match.group(1))] = match.group(2).strip()
            if len(prayers) == before:
                stagnant += 1
            else:
                stagnant = 0
            if max(prayers, default=0) >= 28 or stagnant >= 3:
                break
            self.swipe(720, 2500, 720, 650, 330)
        missing = [number for number in range(1, 29) if number not in prayers]
        if missing:
            raise RuntimeError(f"백성을 위한 기도 누락: {missing}")
        return [
            {"number": number, "text": prayers[number]}
            for number in sorted(prayers)
        ]

    def extract_all(self) -> dict[str, object]:
        self.verify_device_and_screen()
        result: dict[str, object] = {
            "source": {
                "app": "가톨릭하상",
                "package": PACKAGE,
                "screen": "매일 미사 > 미사통상문 > 마침",
                "extractedAt": datetime.now(timezone.utc).isoformat(),
            },
            "solemnBlessings": {},
        }
        blessings: dict[str, list[dict[str, object]]] = {}
        for group_key, group in BLESSING_GROUPS.items():
            category = str(group["category"])
            entries: list[dict[str, object]] = []
            for key, label in group["items"]:
                print(f"[{group_key}] {label}", flush=True)
                entries.append(self.extract_selected_blessing(category, key, label))
            blessings[group_key] = entries
        result["solemnBlessings"] = blessings
        # The app exposes a general collection of 28 prayers, but the web app
        # must never present that collection as choices for a single Mass.
        # Date-specific prayers are sourced from the Missal PDF instead.
        result["prayersOverPeople"] = []
        result["generalPrayerCollectionExtracted"] = False
        return result

    def cleanup(self) -> None:
        self.run("shell", "rm", "-f", REMOTE_XML, check=False)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--adb", type=Path, default=DEFAULT_ADB)
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("tmp/hasang-app/hasang_blessings.json"),
    )
    args = parser.parse_args()
    if not args.adb.is_file():
        parser.error(f"adb.exe를 찾지 못했습니다: {args.adb}")

    extractor = HasangExtractor(args.adb)
    try:
        data = extractor.extract_all()
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"완료: {args.output}", flush=True)
        return 0
    finally:
        extractor.cleanup()


if __name__ == "__main__":
    sys.exit(main())
