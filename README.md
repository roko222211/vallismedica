# Poliklinika Vallis Medica — website

Web stranica Poliklinike Vallis Medica izgrađena u Astro frameworku. Stranice su statičke, a sadržaj (specijalnosti, novosti, obavijesna traka, kontakt/radno vrijeme) uređuje se kroz Git-based CMS (Pages CMS).

- **Domena:** https://poliklinikavm.hr
- **Hosting:** GitHub Pages (deploy preko GitHub Actions)
- **CMS:** [Pages CMS](https://app.pagescms.org/)
- **Dizajn:** editorial „klinički žurnal" — Newsreader + Hanken Grotesk + IBM Plex Mono, brend plava `#12698E` + siva `#717578` (iz logotipa)

## Sadržaj kroz CMS

- **Specijalnosti** — `src/content/specijalnosti/*.mdoc` (naziv, redoslijed, kratki opis, popis usluga, tekst)
- **Novosti** — `src/content/novosti/*.mdoc`
- **Obavijesna traka** — `src/data/obavijest.json`
- **Kontakt i radno vrijeme** — `src/data/kontakt.json`

## Lokalni razvoj

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

Workflow `.github/workflows/deploy-pages.yml` gradi i objavljuje svaki commit na `main` (Pages source = GitHub Actions), uz repo varijable `ENABLE_GITHUB_PAGES=true`, `PAGES_BASE_PATH`, `PAGES_SITE_URL`.

Za prelazak na `poliklinikavm.hr`: custom domena u Settings → Pages, `PAGES_BASE_PATH` prazan, `PAGES_SITE_URL=https://poliklinikavm.hr`.

> Napomena: vlasništvo repozitorija predviđeno je za prijenos na zaseban GitHub račun/organizaciju poliklinike; nakon prijenosa ažurirati CMS URL u `src/pages/admin.astro`.
