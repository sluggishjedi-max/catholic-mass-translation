import pandas as pd

file_path = r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\참고자료\미사\전례력\2026_Liturgical_Calendar_completed.xlsx'
df = pd.read_excel(file_path)

with open('calendar_prefaces.txt', 'w', encoding='utf-8') as f:
    for i, row in df.iterrows():
        date = row['날짜']
        name = row['한국 전례명']
        preface = row['한국 기준 감사송명']
        f.write(f"{date} | {name} | {preface}\n")
