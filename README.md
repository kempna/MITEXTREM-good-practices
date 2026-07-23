# MITEXTREM – Databáze dobrých praktik v mitigaci dopadů meteorologických extrémů

Veřejná, otevřená databáze ověřených **dobrých praktik pro mitigaci dopadů meteorologických extrémů** — zvláště vln veder, dále přívalových dešťů, povodní, sucha a větru — ve městech a aglomeracích. U každé praktiky jsou uvedeny **přínosy i rizika/omezení** (princip *risk trade-off*).

Výsledek projektu **SS07020449** (TA ČR, program *Prostředí pro život*), řešitel Ostravská univerzita.

## 🔗 Odkazy
- **Interaktivní aplikace:** https://disasters.shinyapps.io/MITEXTREM_Database/
- **Rozcestník (GitHub Pages):** https://kempna.github.io/MITEXTREM-good-practices/
- **Otevřená data:** CSV a JSON ve složce [`data/`](data/)

## 📂 Obsah repozitáře
| Cesta | Popis |
|---|---|
| `data/practices_latest.csv` | Aktuální datová sada praktik (UTF-8 s BOM, oddělovač `,`) |
| `data/practices_latest.json` | Táž data ve formátu JSON |
| `data/trash/` | Archiv odstraněných záznamů |
| `docs/` | Zdroj statické rozcestníkové stránky (GitHub Pages) |
| `scripts/` | Pomocný skript pro čištění a export dat |

Data se aktualizují automaticky z aplikace při každé změně.

## 🧭 Datový slovník (sloupce)
`ID`, `Název praktiky`, `Typ extrému`, `Měřítko aplikace`, `Lokalita`, `Zeměpisná šířka`, `Zeměpisná délka`, `Relativní nákladnost`, `Doba implementace cca`, `Popis praktiky`, `Přínosy a výhody`, `Rizika a omezení`, `Postup implementace`, `Zdrojová organizace`, `Kontaktní údaje`, `Reference a zdroje`, `Datum přidání`, `Podpůrné soubory`, `Oblast dopadu`, `Typ opatření`, `Fáze krize`, `Provenience`, `Úroveň ověření`, `Stav`, `Kanonický klíč`.

Vícehodnotová pole (**Typ extrému**, **Oblast dopadu**, **Fáze krize**) jsou oddělena čárkou.

## 📜 Licence
Data jsou zveřejněna pod licencí **CC BY 4.0**. Při použití prosím uveďte zdroj.

## 📎 Jak citovat
> MITEXTREM – Databáze dobrých praktik v mitigaci dopadů meteorologických extrémů. Ostravská univerzita, 2026. Projekt TA ČR č. SS07020449. Dostupné z: https://kempna.github.io/MITEXTREM-good-practices/
>
> DOI: *(bude doplněno – Zenodo)*

## 🙏 Financování
Tento výsledek vznikl za finanční podpory **Technologické agentury ČR**, program **Prostředí pro život**, projekt č. **SS07020449**. Autoři: Kamila Kempná, Pavel Danihelka (Ostravská univerzita).

## ✉️ Kontakt
Ostravská univerzita — *(doplňte kontaktní e-mail)*
