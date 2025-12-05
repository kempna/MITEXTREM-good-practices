# MITEXTREM-good-practices
# Databáze dobrých praktik pro mitigaci dopadů meteorologických extrémů

Tento repozitář obsahuje **otevřenou databázi dobrých praktik** zaměřených na:
- **mitigaci dopadů meteorologických extrémů** na bezpečnost, zdraví, činnosti a hmotné statky
- ve **městech a aglomeracích**

Databáze chápe „dobrou praxi“ ve smyslu **risk trade-off**:
- u každé praktiky jsou evidovány **přínosy/pozitiva**
- ale také **rizika, omezení a potenciálně negativní dopady**

Zdroje dobrých praktik:
- opatření zpracovaná v rámci projektu
- případové studie z partnerských měst
- zahraniční inspirace (např. UNDRR, OECD, Resilient Cities, aj.)

Databáze je:
- **veřejně dostupná** (open data)
- zveřejněná na **GitHubu** s otevřenou licencí
- prezentovaná také jako **webová stránka** pomocí GitHub Pages

---

## Struktura dat

Primární dataset je uložen v souboru:

- `data/databaze_mitextrem.csv`

Každý řádek reprezentuje **jednu dobrou praxi**.

Hlavní sloupce:

- `ID` – interní identifikátor
- `Název praktiky` – stručný název opatření
- `Typ extrému` – relevantní meteorologické extrémy (např. vlny veder, přívalové srážky, povodně, vítr…)
- `Měřítko aplikace` – úroveň opatření (budova, čtvrť, město, aglomerace, region)
- `Lokalita` – město / oblast, kde byla praxe realizována nebo pilotována
- `Zeměpisná šířka`, `Zeměpisná délka` – souřadnice (pokud jsou dostupné)
- `Relativní nákladnost` – odhadová kategorie nákladů (např. nízká / střední / vysoká)
- `Doba implementace cca` – orientační doba implementace
- `Popis praktiky` – textový popis opatření
- `Přínosy a výhody` – pozitivní dopady, co zlepšuje, jaké problémy řeší
- `Rizika a omezení` – negativní aspekty, limity, vedlejší efekty (risk trade-off)
- `Postup implementace` – stručný postup zavedení
- `Zdrojová organizace` – autor/organizace, která opatření implementovala nebo popsala
- `Kontaktní údaje` – kontakt, pokud je k dispozici
- `Reference a zdroje` – odkazy na guidelines, studie, weby (např. UNDRR, OECD, Resilient Cities)
- `Datum přidání` – datum vložení do databáze
- `Podpůrné soubory` – případné názvy přiložených souborů / odkazů

Podrobnější popis najdeš v `docs/index.html` (část „Nápověda“) a ve zdrojovém kódu.

---

## Webová prezentace (GitHub Pages)

Ve složce `docs/` se nachází jednoduchá webová aplikace, která:

- načítá JSON soubor `dobre_praktiky.json`
- umožňuje:
  - prohlížení všech záznamů v tabulce
  - filtrování podle typu extrému, měřítka aplikace a lokality
  - zobrazení detailu včetně **přínosů** a **rizik / omezení**

### Jak web zprovoznit

1. Lokálně spusť skript:

   ```bash
   python scripts/clean_and_export.py
