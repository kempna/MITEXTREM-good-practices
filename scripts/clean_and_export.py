import pandas as pd
from pathlib import Path

# Cesty k souborům
DATA_DIR = Path("data")
DOCS_DIR = Path("docs")

INPUT_CSV = DATA_DIR / "databaze_mitextrem.csv"
CLEAN_CSV = DATA_DIR / "databaze_mitextrem_clean.csv"
OUTPUT_JSON = DOCS_DIR / "dobre_praktiky.json"


def main():
    # Načtení původního CSV (oddělovač ; - dle exportu z Excelu)
    df = pd.read_csv(INPUT_CSV, sep=";", dtype=str)

    # 1) Odstranění prvního řádku (obsahuje jen nápovědu typu "*text", "*výběr kategorie"...)
    df_clean = df.iloc[1:].copy()

    # 2) Odstranění prázdných sloupců "Unnamed"
    df_clean = df_clean.drop(
        columns=[c for c in df_clean.columns if c.startswith("Unnamed")],
        errors="ignore",
    )

    # 3) Oříznutí mezer kolem textů
    for col in df_clean.columns:
        df_clean[col] = df_clean[col].astype(str).str.strip().replace({"nan": ""})

    # 4) Uložení vyčištěné verze CSV (volitelné)
    CLEAN_CSV.parent.mkdir(parents=True, exist_ok=True)
    df_clean.to_csv(CLEAN_CSV, index=False, sep=";")

    # 5) Export do JSON pro web (pole objektů)
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    df_clean.to_json(OUTPUT_JSON, orient="records", force_ascii=False, indent=2)

    print(f"Vyčištěný CSV uložen do: {CLEAN_CSV}")
    print(f"JSON pro web uložen do: {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
