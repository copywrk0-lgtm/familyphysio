# Family Physio Clinic

A premium, bilingual, single-page static site. Plain HTML, CSS and vanilla JavaScript; no build step, framework, backend, database or animation dependency.

## Files

```text
dist/
  index.html             Semantic page, inline critical CSS, initial metadata/schema
  style.css              Responsive design and reduced-motion styles
  script.js              Clinic config, body map, quiz, translation and motion logic
  translations.json      One English/Hindi translations object for all interface copy
  assets/
    clinic-logo.webp     Supplied clinic logo, lossless WebP for the header
    clinic-logo.png      Original supplied logo / favicon
    ceremony.webp        Supplied ceremony photo used beside About
    spine-home.webp      Supplied homepage illustration, lossless WebP
    spine-home.png       Original supplied illustration / PNG fallback
README.md
ASSETS.md
vercel.json
netlify.toml
```

## Replace these placeholders

Edit **`CLINIC_CONFIG` at the top of `dist/script.js`**. Existing contact and practitioner details are prefilled from the supplied screenshot and public profiles; confirm them with the clinic before using this as its official website.

| Config field | Exactly what to replace |
| --- | --- |
| `name.en`, `name.hi` | Official clinic name in English/Hindi |
| `phone`, `phoneDisplay` | Call number with country code; readable display number |
| `whatsapp` | WhatsApp number with country code, digits only |
| `address.label.en`, `.hi` | Visible address in both languages |
| Remaining `address` fields | Street, city, region, postcode and country for schema |
| `hours.confirmed`, `label.en`, `.hi` | Set `confirmed: true` only after owner confirmation. Until then, hours stay off the page and out of JSON-LD |
| `consultationFee.en`, `.hi` | Confirmed consultation fee; currently empty, so the page offers a fee enquiry via WhatsApp |
| `hours.days`, `opens`, `closes` | Schema days and 24-hour opening/closing times |
| `googleMapsLink` | Exact clinic listing/reviews/directions URL |
| `googleMapsEmbed` | Google Maps embed URL (`src` from Share → Embed a map); no API key needed |
| `siteUrl` | Final public domain, including `https://` |
| `practitioner.name`, `.bio`, `.qualifications` | Verified name, bio and qualifications, in English/Hindi |
| `photos.practitioner.src`, `.alt`, `.width`, `.height`, `.caption` | About photo, dimensions and bilingual alt/caption; currently the supplied ceremony group photo, without identifying anyone |
| `photos.logo.src`, `.alt`, `.width`, `.height` | Header logo and dimensions; replace the low-resolution supplied image with an original when available |
| `photos.clinic.src`, `.alt` | Reserved for a clean clinic interior photo; the gown/team banner image has been removed |
| `reviews` | Seven selected Google review excerpts are included. Add/edit genuine names, ratings 1–5, English text, optional Hindi translation, source URL and `excerpt` flag |

**Seven selected genuine reviews are included from your screenshots**. All seven cards quote contiguous, complete visible sentences and are marked as excerpts (`excerpt: true`). Repeated star text is excluded from the quoted passage. Individual review links appear only when a verified direct review URL is supplied; otherwise the section links to the clinic listing without claiming to open a specific review. Reviewer names, ratings, spelling and capitalization are preserved. `text.en` holds the original; `text.hi` holds a faithful translation that is labelled on the site. Do not invent missing text or an overall Google rating. Invalid or empty entries are excluded. If all entries are empty, clearly labelled reserved slots appear.

Use local WebP photos, ideally under 200 KB each. Empty or failed image paths show a labelled gradient slot. For different photo dimensions, set width/height in the photo config and mirror them in the static fallback HTML. Change visible interface copy in `translations.json`; keep the same keys and quiz answer IDs in both languages.

JavaScript updates visible config content, metadata and LocalBusiness JSON-LD from the config. Also mirror the final clinic facts in `index.html`'s English contact/address/hours fallback, title/description/Open Graph tags and initial `#clinic-schema` for visitors or crawlers without JavaScript. These are fallback copies, not additional interactive configuration.

## Deploy

**Vercel:** import/upload this folder. Framework preset: Other. Build command: leave empty. Output directory: `dist`. Included `vercel.json` declares the output directory. No install command is needed.

**Netlify:** import this folder, leave the build command empty and set publish directory to `dist`; `netlify.toml` is included. Alternatively, drag the **contents of `dist`** into Netlify Drop.

Use a static HTTP host for local testing; opening `index.html` as a `file://` document cannot fetch the translations JSON reliably. No environment variables or API keys are needed. Deploy from the root folder; only `dist` is public.

## Behaviour and quality

- Hero pain selections also prefill the quiz. “Continue pain check” opens question two; Back lets visitors change the selected area.
- The supplied curved-spine design floats on the cream hero background. A lightweight inline SVG colour filter makes its original cream strokes teal and its dark background transparent; the source file is unchanged. It is displayed in full, with three keyboard-accessible marker buttons plus five labelled pills, which open a native modal side panel / mobile bottom sheet. Escape closes it and focus returns to the hotspot.
- Native treatment disclosures work on tap/keyboard. Mouse hover previews an entry; clicking keeps it open.
- Five-question quiz, explicit continue, back/restart, translated WhatsApp summary and conservative assessment suggestions. It is not a diagnostic or validated triage tool. Concerning symptoms direct visitors to medical advice; the emergency result uses `tel:112` and omits routine booking.
- Hindi/English choice is saved in localStorage. Quiz answers remain in page memory; they are not stored or submitted automatically.
- Booking links use URL-encoded `wa.me` messages; all call links use `tel:`. No booking form, slot picker or automatic sending.
- Lazy map and clinic photos, preloaded homepage illustration, passive/rAF scroll work, IntersectionObserver reveals, and reduced-motion support. No autoplay review movement. The page opens directly, without a loader.
- Total external JavaScript is under 35 KB uncompressed, under the requested 50 KB budget. Bilingual copy is a separate JSON resource. Cormorant Garamond is reserved for English display headings; DM Sans handles body copy, reviews and controls. Noto Sans Devanagari loads only when Hindi is selected. All fonts use Google Fonts `display=swap` with system fallbacks. Heading sizes use bounded responsive scales, and text sizes use rem units.

Source checks cover translation-key parity, assets, HTML/ARIA targets, schema and JS size. Mock-DOM interaction checks cover body-map keyboard/focus flow, language persistence, the full quiz with back/restart and concern routing, message encoding, review validation/text safety and reduced motion. Browser visual QA and Lighthouse could not run in this environment. **90+ Lighthouse and a sub-2-second 4G load are targets, not measured results.** Test the deployed site on mobile before final client handoff.

## Before the clinic's official launch

Ask the owner to confirm the services/clinical copy, qualifications, consultation fee, appointment hours and publication of the selected patient review excerpts. Supply direct Google review URLs if individual review links are desired. Supply the original high-resolution logo and clean clinic-room photos. The current logo retains its original colours and small display size; it is not artificially redrawn.

No custom domain is connected. The working preview URL remains in `siteUrl`; change it only when the clinic supplies/chooses its domain and the domain is connected. The existing hosted Site has no supported slug-renaming operation, so no new domain or replacement Site has been invented.
