# Portfolio – Luka Gosseye

Portfoliowebsite gemaakt voor het vak Webtechnologie aan AP Hogeschool Antwerpen (Graduaat SNB/IoT).

Live: [gosseye-luka.netlify.app](https://gosseye-luka.netlify.app)

---

## Versies

| Library | Versie |
|---|---|
| Bootstrap CSS + JS | **5.3.8** |
| Bootstrap Icons | **1.13.1** |
| Leaflet.js | **1.9.4** |

---

## Mappenstructuur

```
portfolio/
├── index.html
├── portfolio.html
├── overmij.html
├── contact.html
├── webtechnologie.html
├── netwerken.html
├── iot.html
├── database.html
├── linux.html
├── eindproject.html
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   └── kaart.js
└── assets/
    └── images/
        ├── logo.png
        ├── fotozelf.jpg
        ├── sfeerbeeld1.jpg
        ├── sfeerbeeld2.jpg
        └── sfeerbeeld3.jpg
```

---

## Samenvatting per bestand

### index.html — Homepagina

Drie secties:

**Intro** (`<section class="intro-sectie">`)
- Twee kolommen: links tekst (h1 + lead + twee knoppen), rechts profielfoto
- `<h1>` met `<span>` voor het gedeelte in oranje (gestyled via `.intro-sectie h1 span` in CSS)
- Foto gewrapped in `<figure>` + `<figcaption>`, class `profiel` → rond, oranje rand via CSS

**Over mij** (`<section class="over-mij">`)
- Links: twee alinea's tekst + knop "Meer over mij"
- Rechts: `<aside>` met een `<ul>` van vaardigheden met Bootstrap Icons (`bi-check-circle-fill`)

**CTA** (`<section class="cta text-center">`)
- Donkerblauwe achtergrond (via CSS), witte tekst, grote knop naar portfolio

---

### portfolio.html — Projectenoverzicht

**Pagina-intro** (`<section class="pagina-intro">`)
- `<h1>` + `<p class="lead">` met korte intro

**Projectgrid** (`<section class="py-5">`)
- Bootstrap grid: `row g-4` met 6 kolommen (`col-sm-6 col-lg-4`)
- Elk project = `<article class="card h-100">` met:
  - `card-img-top` (vaste hoogte via CSS: 200px, object-fit cover)
  - `card-body d-flex flex-column` met titel, tekst en badges
  - `card-footer` met knop "Meer info" → linkt naar de detailpagina

---

### overmij.html — Over mij

**Pagina-intro** (`<section class="pagina-intro">`)
- Twee kolommen: links profielfoto (`img.profiel`), rechts naam + lead + knop

**Inhoud** (`<section class="py-5">`)
- Links: vaardigheden als `<ul>` met per item een Bootstrap `progress` balk (oranje via `.progress-bar` in CSS)
- Rechts (`<aside>`): opleiding als `<ul class="tijdlijn">` (oranje left-border per item), gevolgd door interesses als `<ul class="interesses">` met iconen

---

### contact.html — Contactpagina

Layout: `container > row` met twee kolommen.

**Formulier** (`<section class="col-md-8">`)
- Netlify Forms: `data-netlify="true"`, hidden `form-name` field, honeypot spam-bescherming
- Twee `<fieldset class="row g-3 mb-3">` blokken:
  1. Persoonlijke gegevens: voornaam, achternaam, e-mail, telefoon
  2. Bericht: onderwerp (select), berichtveld (textarea)
- Akkoord-checkbox + knop "Verstuur bericht" met `bi-send` icoon

**Aside** (`<aside class="col-md-4">`)
- Contactgegevens met inline iconen
- LinkedIn en GitHub links

**Leaflet-kaart** (`<div id="kaart">`)
- Interactieve kaart via `js/kaart.js`, gecentreerd op Lint, België
- Marker (`L.marker`) met popup "Lint, België"
- Kaartdata: OpenStreetMap
- Script geladen vóór `</body>` zodat de DOM klaar is

---

### Detailpagina's — Per topic

Alle zes hebben dezelfde structuur:

**Pagina-intro** (`<section class="pagina-intro">`)
- Terugknop naar portfolio + `<h1>` met projecttitel + `<p class="lead">`

**Project detail** (`<section class="project-detail">`)
- Twee kolommen: links `<figure>` met afbeelding en `<figcaption>`, rechts `<aside>` met beschrijving, periode en badges
- Tekstblok: "Wat heb ik geleerd?" + "Uitdagingen"
- Navigatie: "Vorig project" / "Volgend project" knoppen

| Bestand | Topic | Afbeelding | Badges |
|---|---|---|---|
| webtechnologie.html | Webtechnologie | sfeerbeeld1.jpg | HTML5, CSS3, Bootstrap 5, JavaScript, Leaflet.js, Netlify |
| netwerken.html | Netwerken | sfeerbeeld2.jpg | TCP/IP, OSI-model, Wireshark, IPv4/IPv6, Cisco Packet Tracer |
| iot.html | IoT Toepassing | sfeerbeeld3.jpg | IoT, Sensoren, MQTT, Dashboard, Microcontroller |
| database.html | Database | sfeerbeeld1.jpg | MySQL, SQL, PHP, ER-diagram |
| linux.html | Linux & Scripting | sfeerbeeld2.jpg | Linux, Bash, Cron, SSH, Ubuntu Server |
| eindproject.html | Eindproject | sfeerbeeld3.jpg | HTML5, CSS3, Bootstrap, PHP, MySQL, Git, Linux |

---

### js/kaart.js — Leaflet kaart

Initialiseert een Leaflet-kaart in `<div id="kaart">` op `contact.html`.  
Gecentreerd op Lint, België (51.12, 4.50) met een `L.marker` en popup.  
Gebruikt OpenStreetMap als tile-provider.

---

### css/style.css — Eigen stijlen

Kleurenpalet via CSS-variabelen:

```css
:root {
  --kleur-primair:   #E4572E;  /* oranje-rood */
  --kleur-secundair: #29335C;  /* donkerblauw */
  --kleur-accent:    #E4572E;  /* oranje-rood */
  --kleur-licht:     #F8F8F8;  /* lichtgrijs  */
}
```

| Selector | Wat het doet |
|---|---|
| `body` | `flex-direction: column; min-height: 100vh` zodat footer altijd onderaan staat |
| `h1, h2, h3` | Donkerblauwe tekstkleur |
| `header` | Donkerblauwe achtergrond |
| `header .nav-link` | Witte tekst, oranje bij hover/active |
| `header .navbar-toggler-icon` | `filter: invert(1)` → wit hamburgericoon |
| `footer` | Donkerblauwe achtergrond, witte tekst en links |
| `.btn-primary` | Oranje achtergrond (overschrijft Bootstrap) |
| `.intro-sectie` | Lichtgrijze achtergrond, ruime padding |
| `.intro-sectie h1 span` | Oranje tekst |
| `.over-mij` | Witte achtergrond, padding |
| `.cta` | Donkerblauwe achtergrond, witte tekst |
| `.pagina-intro` | Lichtgrijze achtergrond met oranje border-bottom |
| `.badge` | Oranje achtergrond (overschrijft Bootstrap) |
| `.card` | Geen border, subtiele schaduw, hover-effect |
| `.card img` | Vaste hoogte 200px, object-fit cover |
| `main img.profiel` | Ronde profielfoto met oranje rand |
| `.progress-bar` | Oranje kleur |
| `.tijdlijn li` | Oranje left-border, inspringing |
| `.tijdlijn span` | Klein oranje vetgedrukt jaartal |
| `.interesses li i` | Oranje iconen |
| `aside` | Left-border + padding-left |
| `aside h2` | Uppercase, vet, klein |
| `aside ul li` | `display: inline` voor horizontale socials |
| `legend` | Uppercase, donkerblauw, klein |
| `.project-detail` | Padding, aside zonder extra border |
| `.project-detail aside h3` | Uppercase, klein, vet |
