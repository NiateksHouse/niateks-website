# NIATEKS HOUSE — Homepage Image Sourcing List

**Companion to:** `GLOBAL-DESIGN-SYSTEM.md` (§13–15) · `HOMEPAGE-DESIGN-BLUEPRINT.md`
**Scope:** the 13 image slots currently implemented as placeholders in `index.html`.
**Goal:** replace every gradient slot with real photography without changing a single layout rule.

---

## How to use this document

1. Source or generate each image using the **Keywords** and **Composition** rows.
2. Save it under `assets/images/` with the exact **Filename** listed.
3. Tell me the files are in — I will swap the placeholder markup for real `<img>` elements (srcset, AVIF/WebP, lazy-loading below the fold, hero `fetchpriority="high"`).

**Delivery spec:** minimum widths per row below · sRGB · highest-quality JPG or PNG (I convert to AVIF/WebP) · no watermarks, no borders, no baked-in text.

**Licensing rules:**

- Unsplash / Pexels licenses permit commercial use without attribution; record the source URL per image anyway.
- **Avoid identifiable faces.** Prefer hands-only, from-behind, or faceless crops — brand-safe and more editorial. The Craft band especially must be hands-only.
- **Product slots (#10–12) are on hold** for real NIATEKS product photography — do not fill them with stock (see row).

**Global avoid-list (every slot):** watermarks · logos · any text in image · CGI/plastic sheen · HDR oversaturation · cool blue color cast · gold/marble/chandelier luxury clichés · factory floors, machinery, giant fabric rolls · people looking at camera · cluttered propping.

---

## The 13 slots

### 1 · HERO — full-bleed background · `hero__placeholder--table` · 🎯 AI-GENERATE

| | |
|---|---|
| **Slot** | Hero, first viewport. Decorative layer (`aria-hidden`) — label in markup is documentation only. |
| **Ratio** | 16:9 desktop (≥2400px wide) · **separate 4:5 mobile crop** (≥1600px tall) — do not crop the 16:9 down |
| **Subject** | Dressed washed-linen table setting: stoneware plates, ceramic carafe, folded napkins, single olive branch; lime-plaster wall, pale oak floor |
| **Composition** | Table setting occupies the **right half**; **left 45% is calm empty wall** — this is the typography zone; low quiet horizon; subject never crosses the midline |
| **Focal point** | `object-position: 100% 55%` desktop · mobile crop centers the setting, wall above for text |
| **Final prompt** | Ready to paste — see `HOMEPAGE-DESIGN-BLUEPRINT.md` §Hero (includes the negative prompt) |
| **Filename** | `hero/hero-table-morning-2400.avif` (+1600, +1080) · `hero/hero-table-morning-mobile-4x5.avif` |
| **Priority** | **MUST HAVE — the single most important image on the site** |
| **Backup keywords** | `linen table setting morning light` · `natural linen tablecloth ceramics` · `minimal dining tablescape linen` · `editorial table styling neutral` · `quiet luxury table setting` |

### 2 · INTRODUCTION — `imgslot--intro` · 4:5 portrait

| | |
|---|---|
| **Subject** | Folded stack of natural linen in soft window light — texture and quiet folds, not a styled scene |
| **Composition** | Vertical stack fills the lower two-thirds; generous calm wall above; side-light raking across the folds |
| **Focal point** | `object-position: 50% 65%` |
| **Alt text (final)** | `Folded natural linen textiles in soft window light` |
| **Filename** | `intro/intro-linen-stack.jpg` (≥1400px wide) |
| **Priority** | RECOMMENDED |
| **Keywords** | `folded linen stack` · `stack of natural linen fabrics` · `linen folded window light` · `neutral linen textile stack` · `folded fabrics beige minimal` |

### 3 · COLLECTION CARD — Kitchen · `imgslot--kitchen` · 3:2 landscape (lead card)

| | |
|---|---|
| **Subject** | Kitchen textiles in use: linen tea towel draped over an oven rail or counter edge, linen apron, wooden surface |
| **Composition** | Horizontal, subject right-of-center, breathing space left; one hero prop, not a busy flat-lay |
| **Focal point** | `object-position: 60% 50%` |
| **Alt text (final)** | `Natural linen kitchen textiles on a wooden counter` |
| **Filename** | `collections/collection-kitchen.jpg` (≥1600px wide) |
| **Priority** | **MUST HAVE** |
| **Keywords** | `linen tea towel kitchen` · `linen apron minimal kitchen` · `kitchen linen textile detail` · `natural linen kitchen styling` · `waffle linen kitchen towel` |

### 4 · COLLECTION CARD — Table · `imgslot--table` · 3:4 portrait

| | |
|---|---|
| **Subject** | Dressed table from a slight angle: linen tablecloth, ceramic plates, linen napkin — different frame from the hero (no olive branch, tighter crop) |
| **Composition** | Vertical; table edge running low in frame; place setting upper half |
| **Focal point** | `object-position: 50% 45%` |
| **Alt text (final)** | `Dressed table setting in natural linen` |
| **Filename** | `collections/collection-table.jpg` (≥1300px wide) |
| **Priority** | **MUST HAVE** |
| **Keywords** | `linen table setting` · `linen napkin plate setting` · `minimal tablescape neutral` · `linen tablecloth ceramics` · `editorial dinner table linen` |

### 5 · COLLECTION CARD — Bath · `imgslot--bath` · 3:4 portrait

| | |
|---|---|
| **Subject** | Folded/rolled cotton and waffle towels in warm neutral tones — on a bench or shelf, or stacked on a tub edge; NO spa clichés (no orchids, no candles, no stone Buddha) |
| **Composition** | Vertical; stack lower two-thirds; calm wall above |
| **Focal point** | `object-position: 50% 60%` |
| **Alt text (final)** | `Folded cotton bath towels in warm neutral tones` |
| **Filename** | `collections/collection-bath.jpg` (≥1300px wide) |
| **Priority** | **MUST HAVE** |
| **Keywords** | `folded cotton towels` · `stack of beige towels` · `waffle cotton towel` · `linen bath towels minimal` · `natural cotton towels neutral` |

### 6 · COLLECTION CARD — Hospitality · `imgslot--hospitality` · 4:3 landscape (wide card)

| | |
|---|---|
| **Subject** | Restaurant or hotel table dressed in linen for service — covers, folded napkins, glassware; empty room, no guests, no staff |
| **Composition** | Horizontal; table runs diagonally or fills lower half; visible room depth conveys *contract scale* |
| **Focal point** | `object-position: 50% 55%` |
| **Alt text (final)** | `Restaurant table dressed with natural linen` |
| **Filename** | `collections/collection-hospitality.jpg` (≥1600px wide) |
| **Priority** | **MUST HAVE** |
| **Keywords** | `restaurant table linen setting` · `hotel restaurant tablecloth` · `hospitality table linen napkin` · `empty restaurant table natural linen` · `banquet table minimal linen` |

### 7 · MATERIAL — Weave macro · `imgslot--weave` · 4:5 portrait

| | |
|---|---|
| **Subject** | Extreme close-up of linen weave — visible thread structure, slubs, tactile surface. The "material is a designed product" proof |
| **Composition** | Macro fills the whole frame edge to edge; raking side-light to reveal relief |
| **Focal point** | `object-position: 50% 50%` |
| **Alt text (final)** | `Close-up of natural linen weave` |
| **Filename** | `material/material-weave.jpg` (≥1300px wide) |
| **Priority** | RECOMMENDED |
| **Keywords** | `linen fabric macro` · `linen weave close up` · `linen texture detail` · `natural fabric threads macro` · `beige woven textile close-up` |

### 8 · MATERIAL — Drape · `imgslot--drape` · 4:5 portrait

| | |
|---|---|
| **Subject** | Linen curtain/drapery with daylight passing through — how the material lives in a room |
| **Composition** | Vertical; fabric fills two-thirds of frame; soft window glow behind; gentle folds, no furniture needed |
| **Focal point** | `object-position: 40% 50%` |
| **Alt text (final)** | `Natural linen drapery in daylight` |
| **Filename** | `material/material-drape.jpg` (≥1300px wide) |
| **Priority** | RECOMMENDED |
| **Keywords** | `linen curtain window light` · `sheer linen drapery` · `light through linen curtain` · `natural linen curtain interior` · `linen fabric hanging folds` |

### 9 · CRAFT BAND — full-bleed dark section · `hero__placeholder--craft` · 🎯 AI-GENERATE (or licensed hands-only shot)

| | |
|---|---|
| **Slot** | Full-bleed background behind the dark Craftsmanship band; sits under a charcoal scrim — needs mid-tone depth, not a bright image |
| **Ratio** | 16:9 (≥2400px wide) · mobile: hands remain centered in the tighter 4:5 crop |
| **Subject** | Hands-only: stitching, pressing or finishing natural linen in atelier daylight. **No faces** (also avoids model-release issues) |
| **Composition** | Hands lower-right third; calm workbench space upper-left where the section heading sits over the scrim |
| **Focal point** | `object-position: 70% 60%` |
| **AI prompt** | GDS §15 house style — *hands-only atelier scene, linen, soft directional daylight, ivory/sand palette, shallow depth of field, medium format, photorealistic*; negative prompt from the blueprint hero |
| **Filename** | `craft/craft-atelier-2400.avif` (+1600, +1080) |
| **Priority** | **MUST HAVE** |
| **Backup keywords** | `sewing linen hands atelier` · `hands stitching fabric natural light` · `tailor hands linen` · `pressing fabric workshop` · `textile craft hands detail` |

### 10–12 · PRODUCT CARDS — Kitchen / Table / Bath · `imgslot--p1/p2/p3` · 3:4 portrait · ⏸ ON HOLD

| | |
|---|---|
| **Status** | **Do not source.** These must become real NIATEKS product photography when product names and data arrive — stock here would put fake products on the homepage. |
| **Interim** | Current labeled placeholders stay. The alt text will be finalized with the real product names. |
| **When ready** | Single piece on ivory/sand seamless backdrop, soft directional light, `object-position: 50% 50%`, ≥1300px wide, filenames `products/product-kitchen.jpg` / `product-table.jpg` / `product-bath.jpg` |
| **Priority** | **DEFER — awaiting real product data** |

### 13 · ABOUT TEASER — `imgslot--atelier` · 3:2 landscape

| | |
|---|---|
| **Subject** | The studio: open shelving with material library — fabric rolls *(small, styled — not factory-scale)*, swatches, samples in warm tones |
| **Composition** | Horizontal; shelves fill the frame with rhythm; warm light; no people, no desks with computers |
| **Focal point** | `object-position: 50% 45%` |
| **Alt text (final)** | `Material library in the Niateks House studio` |
| **Filename** | `about/about-studio.jpg` (≥1600px wide) |
| **Priority** | RECOMMENDED |
| **Keywords** | `textile design studio shelves` · `fabric samples shelf` · `material library design studio` · `textile studio workspace minimal` · `fabric swatches organized` |

---

## Summary table

| # | Slot | Ratio | Source | Priority |
|---|---|---|---|---|
| 1 | Hero | 16:9 → 4:5 | **AI-generate** (prompt ready) | MUST HAVE |
| 2 | Intro linen stack | 4:5 | Stock | RECOMMENDED |
| 3 | Kitchen card | 3:2 | Stock | MUST HAVE |
| 4 | Table card | 3:4 | Stock | MUST HAVE |
| 5 | Bath card | 3:4 | Stock | MUST HAVE |
| 6 | Hospitality card | 4:3 | Stock | MUST HAVE |
| 7 | Weave macro | 4:5 | Stock | RECOMMENDED |
| 8 | Drape | 4:5 | Stock | RECOMMENDED |
| 9 | Craft band | 16:9 | **AI-generate** or hands-only stock | MUST HAVE |
| 10–12 | Product cards | 3:4 | **HOLD — real product photography** | DEFER |
| 13 | Studio shelves | 3:2 | Stock | RECOMMENDED |

**BEN OLSAM:** Generate #1 and #9 (full control of negative space, scrim behavior and no-license risk), stock the eight editorial slots, and hold the three product frames for real product photography — that gets the homepage to final quality with zero fabricated content and no licensing exposure.
