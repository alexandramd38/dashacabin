# Dasha Cabin

Static website for the Dasha Cabin rental. Plain HTML/CSS with minimal vanilla JS — no build step.

## Run locally

- Double-click `index.html`, or
- Serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Site structure

- `index.html` — home (hero, highlights, call-to-action)
- `gallery.html` — photo grid with a click-to-enlarge lightbox
- `amenities.html` — amenities, capacity, house rules
- `location.html` — directions and embedded map
- `rates.html` — rates table + booking placeholder
- `contact.html` — contact form (Formspree) + mailto fallback
- `css/styles.css` — shared styles for every page
- `images/` — photos and the favicon

## Replacing text and photos

All placeholder copy is marked with `[PLACEHOLDER]` — search the repo for that string to find everything that needs real content (text, phone, email, rates, directions, photo captions).

Photos live in `images/` and are referenced by relative paths (e.g. `images/hero.jpg`). Replace the files with real photos, keeping the same filenames, or update the `src`/`data-full`/`alt` attributes in the HTML. Keep `alt` text descriptive for accessibility.

To add a photo to the gallery, copy a `<figure>` block in `gallery.html` and update its paths — the lightbox works automatically.

## Contact form (Formspree)

The form posts to a placeholder endpoint. To make it live:

1. Create a free form at [formspree.io](https://formspree.io) and get your form ID.
2. In `contact.html`, replace `https://formspree.io/f/YOUR_FORM_ID` with your real endpoint.
3. The `mailto:` link below the form works as a fallback — update the email address too.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, pick `dashacabin`.
3. Build settings: **Build command: none**, **Build output directory: `/`**.
4. Deploy — every push to `main` redeploys automatically.

Alternative: drag this folder onto [Netlify Drop](https://app.netlify.com/drop) for an instant deploy.

## Custom domain

- **Cloudflare Pages:** project → **Custom domains → Set up a custom domain**; if the domain's DNS is on Cloudflare, it's automatic. Otherwise add the CNAME they show you at your DNS provider.
- **Netlify:** **Domain settings → Add custom domain**, then point DNS to Netlify.

## Adding booking / payments later

`rates.html` contains a marked slot:

```html
<!-- BOOKING WIDGET / STRIPE PAYMENT LINK GOES HERE -->
```

Drop a booking widget embed (e.g. Lodgify, Smoobu) or a [Stripe Payment Link](https://docs.stripe.com/payment-links) button in that `booking-placeholder` div — no other changes needed.
