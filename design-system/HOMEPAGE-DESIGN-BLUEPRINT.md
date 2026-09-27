# NIATEKS HOUSE — HOMEPAGE DESIGN BLUEPRINT

**Version:** 1.1 · **Status:** APPROVED (user, implementation authorized) — locked categories: Kitchen · Table · Bath · Hospitality
**Governs:** Homepage structure, hierarchy, imagery, copy and responsive behavior
**Sources:** Master Homepage Design Prompt §01–50 + GLOBAL DESIGN SYSTEM v1.2 + AGENTS.md + both skills

---

## A. SECTION HIERARCHY

Narrative order (Master Prompt §07, adjusted in two places with reasons):

| # | Section | Purpose | Visual weight |
|---|---|---|---|
| 1 | **Navigation** | Orientation, always present | Level 5 — quiet, must not dominate the hero |
| 2 | **Hero** | Instant brand definition + first CTA | **Level 1 — the loudest moment on the page** |
| 3 | **Brand introduction** | What the house is, in three sentences | Level 3 |
| 4 | **Collections** | Primary discovery path | **Level 2 — second loudest** |
| 5 | **Material / design story** | Textiles are designed products, not commodities | Level 3 |
| 6 | **Craftsmanship** | Precision + craft, human presence without nostalgia | Level 3 |
| 7 | **Private label / OEM** | B2B capability, concept → production | Level 4 |
| 8 | **Product showcase** | Curated proof of the collections | Level 3 |
| 9 | **Editorial statement** | Breathing point; typography only | Level 3 (moment of stillness) |
| 10 | **About teaser** | Curiosity, not duplication | Level 4 |
| 11 | **Inquiry CTA** | B2B conversion | Level 2 |
| 12 | **Footer** | Orientation, trust, contact | Level 5 |

**Deliberate order change from the master prompt:** the editorial statement moves from #9 to between Craftsmanship and Private Label, and Product Showcase moves after it — rationale: the statement works as a palate cleanser between the two photographic story sections (§5–6), and the refreshed visitor then meets proof (products) before capability (private label) and invitation (inquiry). Both changes follow §07's allowance ("adjust the order if UX analysis demonstrates a better narrative").

---

## B. VISUAL HIERARCHY & PAGE RHYTHM

Background rhythm across the scroll (per Design System §2 section-rhythm rule — never two dark sections adjacent):

```text
Hero (image, dark scrim)        ← Level 1
ivory   — Brand introduction
ivory   — Collections (uneven editorial grid)
sand    — Material / design story
charcoal— Craftsmanship (light-on-dark photo band)
sand    — Editorial statement (typography only)
ivory   — Private label / OEM
ivory   — Product showcase (on white surfaces)
sand    — About teaser
charcoal— Inquiry CTA
charcoal— Footer (continuous, separated by hairline)
```

Level 1–2 sections get full-bleed or large imagery; Level 3–4 sections are contained, typographic, image-supported. One breakout moment per half-page (§5 grid rule).

---

## C. TYPOGRAPHY HIERARCHY

Per Design System §3 with Cormorant Garamond (v1.2):

| Moment | Style | Notes |
|---|---|---|
| Hero headline | Display — Cormorant Garamond 500, clamp 44→72px, lh 1.05 | Max 8 words, two lines, reserved safe zone |
| Section titles (Collections, Craft, Private Label…) | H2 — Cormorant 500, 40px desktop / 28px mobile | Preceded by uppercase Label eyebrow (Inter 12px, 0.14em, terracotta or charcoal) |
| Brand introduction headline | H2 or Display-downsized, ~48px | One thought |
| Editorial statement | Display-scale serif italic, clamp 36→56px | §24 master prompt: "No unnecessary imagery if typography alone is stronger" |
| Body / ledes | Inter 18/17px, lh 1.7, max 68ch | |
| Card titles, H3s | Inter 600 20–24px | |
| Metadata, eyebrows | Inter 12–13px | Stone/terracotta per rules |

All-caps reserved for Labels and Buttons only. One H1 per page (hero).

---

## D. IMAGE REQUIREMENTS (Visual Art Director pass, per section)

All images obey one photographic language (Design System §14): soft directional daylight, warm-neutral ~4000–4500K, low-medium contrast, generous negative space, medium-format aesthetic, materials and finished dressed pieces as protagonists, humans rare and purposeful, never industrial.

| # | Slot | Type | Subject | Composition / safe zone | Ratio (desktop → mobile) | Source strategy | Priority |
|---|---|---|---|---|---|---|---|
| 1 | **Hero** | Photography (campaign image) | Linen table setting in a minimal contemporary dining space, morning daylight | Subject right-of-center; **left third reserved for headline safe zone**; low, quiet horizon | 16:9 → 4:5 (separate mobile crop) | AI generation (stock rarely has the exact negative-space composition); §15 house prompt | **MUST HAVE** |
| 2 | Brand introduction | Photography | Macro: folded linen stack, weave visible, window light | Close-up, texture-first, subject right | 4:5 | Stock (Adobe/Shutterstock, licensed) | **MUST HAVE** |
| 3 | Collections — lead cards | Photography | Kitchen textiles; table textiles; bath textiles — finished pieces styled in minimal interiors | 3–5 uneven grid; hero-card 3:2, others 3:4/4:5 | 3:2 / 3:4 mixed | Stock per collection; consistent campaign edit | **MUST HAVE** |
| 4 | Material story | Photography | Two-image pairing: textile on loom detail + finished drape in a room | 4:5 pair, side by side desktop, stacked mobile | 4:5 ×2 | Stock | RECOMMENDED |
| 5 | Craftsmanship | Photography | Hands: stitching, folding, pressing, final inspection — atelier daylight | Charcoal band; light falls on hands and fabric; no faces centered | 16:9 full-bleed → 4:5 | Stock | **MUST HAVE** |
| 6 | Private label | **None** — typographic + numbered process (01–06) | — | — | — | — | DON'T USE |
| 7 | Product showcase | Product photography | 3–4 finished pieces (bed, table, bath) on seamless ivory backdrops | Catalogue-plate framing | 3:4 | Stock/product campaign | **MUST HAVE** |
| 8 | About teaser | Photography | The atelier or studio space, materials on shelves, single human presence distant | Medium shot, architectural | 3:2 → 4:3 | Stock | RECOMMENDED |
| 9 | Inquiry CTA | **None** — typography on charcoal | — | — | — | — | DON'T USE |

Total: **7 photographs, 2 image-free sections.** Every image logged with source + license; AI-generated hero must pass the §14 style review.

---

## E. CTA HIERARCHY

One primary CTA per view (Design System §9):

| View | Primary | Secondary |
|---|---|---|
| Hero | **Explore collections** (charcoal button) | Work with us — text button → contact |
| Collections section | Explore links per card (text buttons) | View all collections — secondary button |
| Private label | **Discuss your project** (charcoal button) | — |
| Inquiry section | **Start an inquiry** (ivory button on charcoal) | Contact us — text button |
| Navbar | Contact us (compact primary) | — |

No e-commerce language anywhere (no Buy/Shop/Order/Shop Now). All CTA copy verb-first per §19.

---

## F. RESPONSIVE BEHAVIOR (key decisions)

| Section | Desktop | Tablet (8-col) | Mobile (4-col) |
|---|---|---|---|
| Hero | Full-bleed 16:9, headline left safe zone | Same composition, scrim | 4:5 crop, headline lower third over scrim, stacked CTAs full-width |
| Brand intro | 7/5 split, image right | 6/6 | Stacked: label → headline → text → image |
| Collections | Uneven editorial grid, 5 cards, varying spans | 2-col mixed spans | Single column, large images, 48px gaps |
| Material story | 4:5 pair side-by-side with offset text | Pair + text below | Stacked images, text between |
| Craftsmanship | Full-bleed 16:9 charcoal band | Full-bleed | 4:5 crop, focal hands centered |
| Editorial statement | Centered, 10-col, italic serif | Same | Same, min 36px |
| Private label | 2-col: process left, text right; numbered 01–06 | Same | Stacked; numbers inline |
| Showcase | 3-col product cards | 2-col | 2-col (large mobile) → 1-col |
| About teaser | 5/7 split image left | 6/6 | Stacked |
| Inquiry | Centered on charcoal | Same | Same; buttons full-width |
| Navigation | Horizontal 72px bar | Hamburger ≤1023px | Overlay menu (§11) |

Mobile is recomposed, not compressed: no horizontal overflow, intentional crops, sections reordered where the narrative demands (message before imagery in Brand intro).

---

## G. INTERACTION BEHAVIOR

Within Design System §17 limits: image hover scale 1.03 (400ms), text-button arrow shift 4px, nav underline grow-from-left 200ms, scroll-in reveal 600ms once per element, mobile menu 300ms with 40ms stagger. **No** parallax, autoplay video, marquee, or scroll-hijacking. Reduced-motion honored globally.

---

## H. CONTENT REQUIREMENTS (copy direction)

- **Hero eyebrow:** NIATEKS HOUSE · **Headline:** "Designed with purpose. Crafted with detail." · **Support:** "Contemporary home and hospitality textiles developed with thoughtful design, natural materials and flexible manufacturing." *(master prompt §11 baseline; open to a stronger final polish at implementation)*
- **Brand introduction:** ~3 sentences — what the house is, how it works, for whom. Ends with text button "Our approach."
- **Collection cards:** name + one-line descriptor + "Explore →" (master prompt §17 pattern).
- **Craftsmanship:** one lede sentence + 3 supporting captions (stitching / pressing / inspection).
- **Private label:** headline + 2 sentences + six-step process (Idea → Design → Material → Sample → Production → Finishing), numbered, typographic.
- **Editorial statement:** "Material tells a story. Design gives it purpose. Craftsmanship makes it last." (§24, three lines).
- **About teaser:** two lines + "Discover our story →".
- **Inquiry:** "Let's create something together." + support line + Start an inquiry / Contact us.
- All copy: international English, no clichés, no unverifiable claims (§39–40).

---

## I. MISSING INFORMATION (placeholders, clearly flagged)

No product/company data exists in the project yet, so per §40 nothing is invented:

| Missing | Handling in blueprint |
|---|---|
| Real collection names & structure | Blueprint uses §15 category direction: Kitchen Textiles · Table Textiles · Bath Textiles · Hospitality (+ Private Label presented as a capability, not a collection) — **flagged for confirmation** |
| Real product names, specs, images | Product showcase uses 3–4 unnamed "collection pieces" placeholders — **flagged** |
| Company facts (year, size, capacity, countries, certifications) | **Omitted entirely** — no StatBlock on v1 homepage (§39–40 forbid fabrication) |
| Logo | Wordmark "NIATEKS HOUSE" in Cormorant + letterspaced Inter label as temporary brand mark — **flagged** |
| Social links, legal pages, contact details | Footer uses structural placeholders (Privacy, Terms, info@niatekshouse.com) — **flagged** |
| Photography | All 7 slots use licensed stock initially; sources logged; AI hero prompt ready — **flagged as interim** |

**These placeholders are intentional and visible; none will be presented as fact.**

---

## MISSING CONTENT / IMAGES / DATA SUMMARY (§46)

- **Missing content:** collection names, product data, company facts, contact details, legal text.
- **Missing images:** all 7 slots (stock sourcing list with keywords ready per slot; AI prompt ready for hero).
- **Missing business information:** everything in the §40 list — homepage v1 proceeds with zero unverifiable claims.
- **Decision needed from you:** confirm the four collection categories (or supply the real structure) before implementation, and approve interim wordmark + placeholder contact details.

---

## BEN OLSAM TEST (§42)

If I were Creative Director of NIATEKS HOUSE, would I approve this homepage?

- **Brand authenticity:** ✅ design-led house narrative, zero factory imagery, zero fabricated credibility.
- **Visual sophistication:** ✅ one campaign, 7 images, 2 typographic breathing sections, uneven editorial grid.
- **Typography / photography:** ✅ Cormorant Garamond display over Inter, one warm daylight language.
- **UX / B2B clarity:** ✅ discovery (collections) → trust (craft, proof) → capability (private label) → action (inquiry); one primary CTA per view.
- **Collection discovery:** ✅ Level-2 placement, editorial grid, per-card explore links.
- **Mobile:** ✅ recomposed, intentional crops, designed at 375px.
- **Differentiation:** ✅ passes the one-sentence test — it could only belong to NIATEKS HOUSE.

**BEN OLSAM:** I would approve this blueprint and proceed to implementation — but only after you confirm the collection categories, because the Collections section is the homepage's discovery engine and every downstream page (collection detail, products, product detail) inherits its structure. I would also start the hero image sourcing in parallel, as it is the single highest-risk visual dependency.

---

**STOPPED FOR APPROVAL (§47).** No code written. On approval, implementation order will be: project scaffold → design tokens → shared components (§18 inventory) → sections in narrative order → SEO/performance/a11y pass → full QA checklist.

---

*End of HOMEPAGE DESIGN BLUEPRINT v1.0.*
