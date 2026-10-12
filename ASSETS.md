# Assets and content provenance

## Clinic imagery

The gown/team photograph with the baked-in red heading has been removed from the page and source assets. The supplied ceremony photo remains beside About with a neutral caption; no staff roster or clinical credential is inferred from it. A clean reception or treatment-room photo is still needed.

## Clinic facts and placeholders

Phone +91 98710 19716 and clinic identity come from the user-provided WhatsApp screenshot. Dr. Shehzad, BPTh/BPT, and the B-13 Chand Bagh / Bhajanpura address were recorded from the [Practo clinic profile](https://www.practo.com/delhi/clinic/family-physio-clinic-1-bhajanpura-2/about) and [practitioner profile](https://www.practo.com/delhi/doctor/shehzad-physiotherapist?practice_id=1571673&specialization=Physiotherapist).

Unconfirmed opening hours are removed from the visible page, static schema and generated JSON-LD. The consultation fee is not supplied; the page offers a fee/availability enquiry instead of guessing a price. Confirm all clinic facts, services, fees and hours with the owner before official adoption.

Seven selected genuine Google reviews were transcribed from the user's screenshots (853)–(856), supplied on 11 October 2026. Names, capitalization, ratings and visible wording are preserved, including original spelling. All seven cards now use labelled excerpts. Each English passage is a contiguous, verbatim portion of the supplied screenshot transcription; the Ujjwal review is shortened at a full sentence and the Suraj Rajput quote starts after the duplicated inline star/rating prefix. Individual review URLs were not supplied, so the cards have no fabricated direct-review link. The section links to the exact clinic listing using its original Maps CID. Missing text after “More” was not reconstructed. Hindi versions are faithful translations and explicitly labelled. Individual patient claims remain quotes and do not add clinic services or outcome promises. No overall rating or review count is inferred from this sample.

## General care information

Reviewed against primary patient information on 11 October 2026:

- [NHS: back pain](https://www.nhs.uk/conditions/back-pain/)
- [NHS: neck pain](https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/)
- [NHS: shoulder pain](https://www.nhs.uk/symptoms/shoulder-pain/)
- [NHS: knee pain](https://www.nhs.uk/symptoms/knee-pain/)
- [NHS: ankle pain](https://www.nhs.uk/symptoms/foot-pain/ankle-pain/)
- [NCCIH: spinal manipulation](https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know)
- [NCCIH: cupping](https://www.nccih.nih.gov/health/cupping)
- [Government of India: Emergency Response Support System 112](https://112.gov.in/)

Copy describes possible common causes and approaches to discuss; it does not diagnose, claim a cure, promise relief or establish suitability. Hijama is described as wet cupping with limited evidence and relevant risks. The quiz is an enquiry aid, not a validated diagnostic/triage tool, and does not automatically recommend hijama. Clinical copy and routing should be reviewed by the clinic practitioner before official use.

## Fonts and dependency footprint

Cormorant Garamond (regular 400/500 and italic 400) and DM Sans via Google Fonts, `display=swap`, with Georgia/Arial/system fallbacks. Noto Sans Devanagari (400/500/600) is requested only when Hindi is used; Nirmala UI/Mangal/system fonts provide its fallback. Reviews use the body typeface for readability, headings have bounded responsive scales, and Devanagari headings use normal tracking and upright emphasis. The site has no JavaScript libraries, npm packages, build dependencies or tracking scripts. The Google Maps iframe is the only embedded third-party UI and is lazy-loaded.

## Supplied homepage spine illustration

The user supplied `image(20261011-171752).png` on 11 October 2026 and requested it for the homepage. The 356 × 728 RGBA image is preserved as `dist/assets/spine-home.png` and losslessly converted to `dist/assets/spine-home.webp`. The source is unchanged. For the user's later request to combine the curved design with the open, cream presentation, an inline SVG colour matrix filters the original image at render time: dark background becomes transparent and visible linework becomes teal. Gold marker cores and rings are HTML/CSS overlays at the original coordinates. No redraw, image generation or extra crop is used. It is displayed at its full aspect ratio. The supplied image itself cuts off the uppermost segment; that original framing is retained.

The old full-body and spine-only SVG artwork are removed from the hero. Three HTML buttons align with the supplied gold markers for neck, general back/spine concerns and lower back. Five labelled pills still open the existing info panel. All image markers are illustrative navigation aids, not diagnostic anatomy. The visual fades on load; the raster image no longer uses SVG stroke-drawing. Reduced motion disables the fade and pulse. Browser layout QA remains unavailable.

## Logo and About photograph supplied on 12 October 2026

`image(20261012-065132).png` (246 × 225) is preserved as `dist/assets/clinic-logo.png` for the favicon and losslessly converted to `clinic-logo.webp` for the header. The original lettering, colours and background remain intact. It is a low-resolution reference; request the clinic's original logo before final handoff. The former concept mark is no longer used.

`image(20261012-065215).png` (1291 × 959) is converted to `dist/assets/ceremony.webp` at quality 88. Its full framing and colours are retained. It appears beside About with the neutral bilingual caption “Convocation ceremony”. No person is identified from appearance, and no degree, award title or endorsement is inferred from the picture. The new photo is lazy-loaded with explicit dimensions and shown without an additional crop. These are the references the user selected after the Justdial gallery review.

## Conversion and navigation audit, 12 October 2026

Removed the loader, made the header/mobile bar opaque, increased supporting-text contrast, replaced the service icons with a matching joint/spine/cup set, and linked pain-area choices to the quiz. Patient copy names back pain, neck pain, knee pain and sciatica and focuses on assessment, treatment and movement without promising a cure. General sciatica/physiotherapy information was checked against NHS patient information (https://www.nhs.uk/conditions/sciatica/) and the NICE NG59 manual-therapy/exercise recommendation (https://www.nice.org.uk/guidance/NG59/chapter/recommendations). Cupping evidence and risks remain visible in the treatment details, consistent with NCCIH (https://www.nccih.nih.gov/health/cupping). This is not a legal clearance for health-service advertising; owner approval of the clinical copy and testimonial publication is outstanding.

Two further screenshots supplied on 12 October 2026 add Ravi kumar (4 stars) and afsana Parveen (5 stars). Ravi’s visible review body is reproduced; Afsana’s first complete sentence is used as a labelled excerpt, omitting the isolated initial “D” and the remaining sentences. Ratings and reviewer names are preserved. Hindi text is a labelled translation. No direct review URLs were supplied.
