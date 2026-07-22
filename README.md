# MITEXTREM — Databáze dobrých praktik

Jednosouborová R Shiny aplikace pro správu databáze dobrých praktik mitigace dopadů meteorologických extrémů.

## Stav projektu
- Hlavní aplikace: `app.R`
- Lokální data: `databaze_mitextrem_clean.csv`
- Databázové schéma: `schema.sql`
- Lokální SQLite databáze: `mitextrem.db`
- Lokální credentials: `credentials.sqlite`

> Poznámka: tento pracovní adresář zatím neobsahuje `.git` repozitář.

## Běžné spuštění
Otevřete R v kořenové složce projektu a spusťte:

```r
shiny::runApp()
```

Nebo z příkazové řádky:

```bash
Rscript -e "shiny::runApp('app.R')"
```

## Požadované balíčky
Aplikace používá tyto balíčky:

- shiny
- shinydashboard
- DT
- DBI
- RSQLite
- dplyr
- leaflet
- plotly
- shinyWidgets
- shinymanager
- stringdist
- uuid
- htmltools
- jsonlite
- emayili (volitelně pro SMTP)
- httr (volitelně pro GitHub zálohy)

Pokud některý chybí, nainstalujte ho v R:

```r
install.packages(c(
  'shiny','shinydashboard','DT','DBI','RSQLite','dplyr',
  'leaflet','plotly','shinyWidgets','shinymanager','stringdist',
  'uuid','htmltools','jsonlite'))
```

## Potřebné soubory
- `app.R`
- `schema.sql`
- `databaze_mitextrem_clean.csv`
- `credentials.sqlite` (lokální, nemá být v Gitu)
- `mitextrem.db` (lokální, nemá být v Gitu)

## Důležité proměnné prostředí
Aplikace čte konfiguraci z proměnných prostředí:

- `MITEXTREM_CRED_PASS`
- `MITEXTREM_ADMIN_EMAIL`
- `MITEXTREM_APP_URL`
- `MITEXTREM_SMTP_HOST`
- `MITEXTREM_SMTP_PORT`
- `MITEXTREM_SMTP_USER`
- `MITEXTREM_SMTP_PASS`
- `MITEXTREM_GH_OWNER`
- `MITEXTREM_GH_REPO`
- `MITEXTREM_GH_BRANCH`
- `MITEXTREM_GH_DIR`
- `MITEXTREM_GH_TOKEN`

Pro produkční provoz nastavte minimálně:
- `MITEXTREM_ADMIN_EMAIL`
- `MITEXTREM_APP_URL`
- `MITEXTREM_GH_TOKEN`
- `MITEXTREM_GH_OWNER`
- `MITEXTREM_GH_REPO`

## Bezpečnostní upozornění
- `credentials.sqlite` a `.Renviron` jsou citlivé soubory a nemají být commitované.
- Výchozí hesla účtů jsou `admin123`, `editor123`, `host123`; změňte je při prvním přihlášení.
- Lokální databáze `mitextrem.db` a složka `backups/` jsou dočasné a nemají být verzovány.

## Licence
- Kód a dokumentace jsou poskytovány pod licencí MIT.
- Data v databázi jsou určena pro sdílení jako CC BY 4.0.

## Další poznámky
- Aplikace při prvním spuštění automaticky založí databázi a naimportuje CSV.
- Pokud je k dispozici token GitHubu a správně nastaveny proměnné prostředí, aplikace automaticky zálohuje data do repozitáře.
- Složka `www/uploads` se vytváří automaticky.
