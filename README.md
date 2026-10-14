# Fady George — Personal Brand Landing Page

A responsive, Arabic RTL personal-brand website for **Fady George**, presenter of **كلام بفلوس**.

## Status

**Pre-launch draft.** The website intentionally makes no unverified claims about fees, coaching packages, credentials, client results or bookable services. **The contact form is disabled until an official receiving address and a privacy policy are approved.** Do not tell users the form collects leads yet.

## Stack

Static HTML + CSS + vanilla JavaScript. No npm, no bundling, no secrets. Deploy the repository root as-is to **Cloudflare Pages** (Build command: blank, Output directory: `/` / project root) or run `npx wrangler pages deploy . --project-name=fady-george` after creating the project.

## Contents

- `index.html` — semantic landing page content, media, FAQs and form UI
- `styles.css` — responsive desktop/mobile design
- `script.js` — mobile navigation, year display and disabled submit guard
- `assets/fady-portrait.webp` — portrait cropped from supplied programme artwork
- `assets/program-poster.webp` — original artwork supplied by client
- `assets/favicon.svg` — placeholder lettermark
- `_headers` — security headers for Cloudflare Pages

## Before public production launch

1. Confirm Fady's bio, professional qualifications and coaching services.
2. Replace the cropped low-resolution poster portrait with an authorized high-resolution image.
3. Obtain an official contact email or number, approve privacy policy and connect a tested backend; **only then enable the form**.
4. Confirm copyright/branding permissions for the TV station, programme artwork and YouTube thumbnails.
5. Attach an approved domain and verify all links and metadata.
6. Wire analytics when appropriate, after consent/privacy review. No analytics scripts are presently embedded.

## Local preview

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`.
