# Dasha Cabin

Site static pentru cabana de închiriat „Dasha Cabin". HTML/CSS simplu cu puțin JavaScript vanilla — fără build step.

## Rulare locală

- Dă dublu-click pe `index.html`, sau
- Servește folderul:

```bash
python3 -m http.server 8000
# deschide http://localhost:8000
```

## Structura site-ului

- `index.html` — acasă (hero, repere, apel la acțiune)
- `gallery.html` — grilă de fotografii cu lightbox (click pentru mărire)
- `amenities.html` — facilități, capacitate, regulile casei
- `location.html` — indicații rutiere și hartă încorporată
- `rates.html` — tabel de tarife + loc rezervat pentru booking
- `contact.html` — formular de contact (Formspree) + fallback mailto
- `css/styles.css` — stiluri comune pentru toate paginile
- `images/` — fotografii și favicon

## Înlocuirea textelor și pozelor

Tot textul de umplutură este marcat cu `[PLACEHOLDER]` — caută acest șir în repo pentru a găsi tot ce trebuie înlocuit (texte, telefon, email, tarife, indicații, descrieri de poze).

Fotografiile sunt în `images/` și sunt referite prin căi relative (ex. `images/hero.jpg`). Înlocuiește fișierele cu fotografii reale, păstrând aceleași nume, sau actualizează atributele `src`/`data-full`/`alt` din HTML. Păstrează textul `alt` descriptiv pentru accesibilitate.

Pentru a adăuga o poză în galerie, copiază un bloc `<figure>` din `gallery.html` și actualizează căile — lightbox-ul funcționează automat.

## Formularul de contact (Formspree)

Formularul trimite la un endpoint de umplutură. Pentru a-l activa:

1. Creează un formular gratuit pe [formspree.io](https://formspree.io) și obține ID-ul formularului.
2. În `contact.html`, înlocuiește `https://formspree.io/f/YOUR_FORM_ID` cu endpoint-ul tău real.
3. Linkul `mailto:` de sub formular funcționează ca rezervă — actualizează și adresa de email.

## Deploy pe Cloudflare Pages

1. Fă push la repo pe GitHub (deja făcut dacă citești asta pe GitHub).
2. În Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, alege `dashacabin`.
3. Setări de build: **Build command: none**, **Build output directory: `/`**.
4. Deploy — fiecare push pe `main` redeploy-ează automat.

Alternativ: trage folderul pe [Netlify Drop](https://app.netlify.com/drop) pentru un deploy instant.

## Domeniu propriu

- **Cloudflare Pages:** proiect → **Custom domains → Set up a custom domain**; dacă DNS-ul domeniului e pe Cloudflare, configurarea e automată. Altfel adaugă CNAME-ul indicat la providerul tău de DNS.
- **Netlify:** **Domain settings → Add custom domain**, apoi îndreaptă DNS-ul spre Netlify.

## Adăugarea rezervărilor / plăților mai târziu

`rates.html` conține un loc marcat:

```html
<!-- BOOKING WIDGET / STRIPE PAYMENT LINK GOES HERE -->
```

Pune aici embed-ul unui widget de booking (ex. Lodgify, Smoobu) sau un buton [Stripe Payment Link](https://docs.stripe.com/payment-links) în div-ul `booking-placeholder` — nu sunt necesare alte modificări.
