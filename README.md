# Dasha Cabin

Site premium pentru închirierea cabanei Dasha Cabin — Next.js (export static), TypeScript, Tailwind CSS, Framer Motion, bilingv RO/EN.

## Tehnologii

- **Next.js 15** cu `output: "export"` → site 100% static în `out/`
- **TypeScript**, **Tailwind CSS**, **Framer Motion**
- Două limbi: `/ro/` (implicit) și `/en/`
- SEO: metadate per limbă, JSON-LD `VacationRental`, `sitemap.xml`, `robots.txt`, Open Graph, canonical + hreflang

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:3000
```

Build + preview static (exact ce ajunge pe hosting):

```bash
npm run build      # generează out/
npx serve out      # sau: cd out && python3 -m http.server 8000
```

## Structura conținutului (editare fără cod)

Tot textul site-ului și datele reale sunt în două fișiere:

- `lib/site.ts` — date factual: nume, domeniu, email, telefon, WhatsApp, link Google Maps, coordonate, localitate, capacitate, **tarifele pe sezoane**, endpoint Formspree.
- `lib/content.ts` — toate textele în română și engleză (titluri, descrieri, butoane, amenități, pagina Poveste, texte legale).

Caută `[PLACEHOLDER]` în ambele fișiere pentru tot ce trebuie completat cu date reale.

Imaginile sunt în `public/images/`. Înlocuiește fișierele păstrând aceleași nume (sau actualizează căile în `lib/content.ts`).

## Formularul de rezervare

Pagina **Disponibilitate & Rezervări** are un formular de cerere (fără rezervare instantanee). Opțiuni:

1. **Formspree**: creează un formular pe formspree.io și înlocuiește `https://formspree.io/f/YOUR_FORM_ID` în `lib/site.ts` (`formspree`).
2. **Mailto fallback**: dacă `formspree` rămâne pe placeholder, formularul deschide un email precompletat către `site.email`.
3. **WhatsApp**: butonul WhatsApp folosește numărul din `site.whatsapp`.

Slot pentru widget de booking / Stripe Payment Link: pe pagina de rezervări există zona marcată (`{b.futureSlot}` în `app/[lang]/rezervari/page.tsx`).

## Deploy pe Cloudflare Pages

1. Pages → Create project → Connect to Git → alege `alexandramd38/dashacabin`
2. **Build command:** `npm run build`
3. **Build output directory:** `out`
4. Deploy. Site-ul se publică la `https://<proiect>.pages.dev` (rădăcina redirecționează spre `/ro/`).

Aceleași setări merg și pe Netlify (`build` + `out`).

## Domeniu propriu

După ce cumperi domeniul: adaugă-l în Cloudflare Pages → Custom domains, apoi setează `site.domain` în `lib/site.ts` — canonical, sitemap și OG URLs se regenerează automat.

## Checklist înainte de lansare

- [ ] Înlocuiește toate `[PLACEHOLDER]` din `lib/site.ts` și `lib/content.ts` (email, telefon, WhatsApp, domeniu, capacitate, tarife, texte legale)
- [ ] Fotografii reale în `public/images/` (imaginile actuale sunt generate ilustrativ, nu fotografii ale proprietății)
- [ ] Endpoint Formspree real
- [ ] Recenzii reale — secțiunea de testimoniale e goală intenționat (nu inventa recenzii)
- [ ] Verifică că nu publici adresa exactă fără acord
- [ ] Test Lighthouse (țintă ≥90) după imaginile finale

## Informații care încă lipsesc

- Email, telefon, WhatsApp, domeniu real
- Capacitate reală (camere/băi/oaspeți), reguli casei, taxe
- Tarife finale și politica de anulare
- Texte legale reale (GDPR, cookies, termeni)
