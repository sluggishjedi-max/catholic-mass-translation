"""Crib blessing at the conclusion of the Universal Prayer.

Only supplied original-language rite texts belong here; no generated translation.
Position: Book of Blessings 1563-1564; Archdiocese of Louisville Christmas
Season 2020-21, page 4. Only the in-Mass prayer is included, in its original English column.
"""

CHRISTMAS_CRIB = {
    "insertRites": [{
        "after": "universal",
        "replaceAnchorConclusion": True,
        "rite": "christmas_crib",
        "sourceOnly": True,
        "names": {"KR": "구유 경배 · 구유 축복 (선택)", "EN": "Veneration and Blessing of the Christmas Crib (Optional)"},
    }],
    "riteData": {
        "EN": {"christmas_crib": {"lines": [
            {"rubric": "With hands outstretched, the celebrant says the prayer of blessing:"},
            {"text": "God of every nation and people,\nfrom the very beginning of creation\nyou have made manifest your love:\nwhen our need for a Savior was great\nyou sent your Son to be born of the Virgin Mary.\nTo our lives he brings joy and peace,\njustice, mercy, and love.\n\nLord,\nbless all who look upon this manger;\nmay it remind us of the humble birth of Jesus,\nand raise our thoughts to him,\nwho is God-with-us and Savior of all,\nand who lives and reigns forever and ever."},
            {"sp": "R/.", "text": "Amen."},
        ]}},
    },
}
