# NIATEKS HOUSE — GLOBAL DESIGN SYSTEM

**Version:** 1.2 · **Status:** Binding for all future pages
**Sources:** AGENTS.md (project constitution) + UI/UX Design Director skill (experience layer) + Visual Art Director skill (imagery layer)

> This document merges the GLOBAL UI/UX SYSTEM and the GLOBAL VISUAL SYSTEM into one reference.
> Every future page, section and component must conform to it. Deviations must be flagged and justified, never silent.
> Where the three layers could ever conflict: **AGENTS.md > UI/UX system > Visual style preferences** — except that on purely photographic matters (subject, lighting, composition) the Visual Art Director's direction is final.

---

## 1. BRAND DESIGN DIRECTION

**Brand feeling.** NIATEKS HOUSE is a design-led boutique home and hospitality textile house: quiet authority, material sensitivity, editorial calm. The site should feel like a beautifully produced brand book from a small, confident house — not a store, not a brochure, not a factory tour.

**Premium level.** Understated premium. Quality is communicated through whitespace, typography, restraint and material photography — never through gold gradients, glow effects or "luxury stock" clichés.

**House character.** Confident, precise, trustworthy — a boutique house, not a faceless corporation. Real capabilities, real specifications, considered processes. No marketing inflation. Primary audiences: hoteliers, restaurateurs, interior designers, contract buyers and private clients.

**International character.** International English, clean and neutral in tone. Layout conventions recognizable to buyers in Europe, the US, the Gulf and Asia. No local-culture decoration.

**Editorial character.** Magazine-like rhythm: large imagery, generous margins, strong serif headlines, small restrained labels, asymmetric layouts where they serve hierarchy.

**Emotional tone.** Calm confidence. The visitor should feel: *"This house knows exactly what it is doing."*

**The brand must NEVER look like:**
- A cheap textile marketplace or Alibaba-style listing site
- An industrial fabric mill or factory-floor catalog
- A consumer e-commerce shop (carts, discount badges, countdowns)
- A generic AI-generated website
- A basic Bootstrap/WordPress template
- A crowded corporate site with 12 menu items and 4 competing CTAs
- A "luxury cliché" — gold everything, marble, bokeh, champagne glasses

**One-sentence test:** if a page looks like it could belong to any other company, it has failed.

---

## 2. COLOR SYSTEM

One warm-natural palette anchored to the Master Homepage Design Prompt (§32), with terracotta as the single UI accent and olive as a secondary display tone. No random colors; every color belongs here.

### Core palette

| Token | HEX | Purpose | Where it is used |
|---|---|---|---|
| `ivory` | `#F5F2EC` | Primary background | Page background, default section background |
| `sand` | `#DED7CA` | Secondary background | Alternating sections, quote/story bands |
| `white` | `#FFFFFF` | Surface | Cards, form fields, panels on ivory |
| `olive` | `#73765E` | Secondary natural tone | Display-size serif accents (≥24px) and non-text graphic moments; never small text |
| `charcoal` | `#252522` | Primary text & dark surface | Headlines, body text, primary buttons, dark sections, footer, mobile menu, hero overlays |
| `graphite` | `#4A463F` | Secondary text | Paragraphs, descriptions, inactive nav |
| `stone` | `#6E6A61` | Muted text | Metadata, captions, placeholders (5.0:1 on ivory — AA-safe) |
| `mist` | `#B8B2A6` | Muted text on dark | Secondary text on charcoal surfaces |
| `terracotta` | `#B66A4A` | Accent (single UI accent) | Non-text markers only: active nav underline, small bars, display-size numerals ≥24px. Never small text, never button surfaces |
| `terracotta-dark` | `#9E5A3E` | Accent hover | Hover/pressed state of terracotta accent elements (chips, tags) |
| `hairline` | `#DDD6C9` | Borders | Card borders, dividers, input borders |
| `error` | `#9C3D2E` | Error state | Form errors, destructive messaging |
| `success` | `#4A6B4F` | Success state | Form success, confirmation messaging |

### Usage rules

- **Accent discipline:** terracotta is a marker, not a surface — active navigation underline, small bars, display-size numerals. **Measured constraint:** terracotta on ivory/white is only ~3.7:1, so terracotta never carries small text and never serves as a button background (the primary CTA is charcoal, §9). At 3.7:1 it still passes the 3:1 UI-component minimum for non-text markers. Olive (4.2:1) obeys the same rule. If terracotta appears everywhere, the design has failed.
- **Section rhythm:** default `ivory`; use `sand` or `charcoal` to alternate one section at a time. Never two dark sections adjacent.
- **Contrast floor (measured):** charcoal 13.5:1, graphite 8.4:1 and stone 4.8:1 on ivory — every text token passes AA 4.5:1 at body sizes. On `charcoal` dark surfaces, text is `ivory` (13.5:1) or `mist` (7.1:1). Focus rings: `charcoal` on light, `ivory` on dark.
- Error/success are for feedback only — never decoration.

---

## 3. TYPOGRAPHY SYSTEM

Two typefaces, no more.

- **Display face:** a refined editorial serif — **Cormorant Garamond** (self-hosted). Character: classical Garamond proportions, high-contrast, quietly poetic; controlled, never decorative. Use weights 500–600 only, always at generous sizes (its small x-height demands it).
- **Text face:** a neutral workhorse sans — **Inter** (variable, self-hosted). Character: invisible, highly legible, international.

All sizes below are fluid: desktop value via `clamp(min, vw-based, max)`.

| Style | Family | Desktop size | Mobile size | Weight | Line height | Letter spacing | Notes |
|---|---|---|---|---|---|---|---|
| Display | Fraunces | 72px (max) | 44px (min) | 500 | 1.05 | −0.02em | Hero headlines only; max ~8 words |
| H1 | Fraunces | 56px | 36px | 500 | 1.1 | −0.015em | One per page |
| H2 | Fraunces | 40px | 28px | 500 | 1.15 | −0.01em | Section titles |
| H3 | Inter | 24px | 20px | 600 | 1.3 | 0 | Sub-sections, card titles |
| Body | Inter | 18px | 17px | 400 | 1.7 | 0 | Paragraphs; max measure 68ch |
| Small | Inter | 15px | 15px | 400 | 1.6 | 0 | Supporting text |
| Navigation | Inter | 15px | — | 500 | 1 | 0.01em | Sentence case |
| Label | Inter | 12px | 12px | 600 | 1.2 | 0.14em | Uppercase eyebrows/kickers |
| Button | Inter | 13px | 14px | 600 | 1 | 0.12em | Uppercase; see §9 |
| Metadata | Inter | 13px | 13px | 400 | 1.4 | 0.04em | Captions, dates, codes; `stone` |

**Rules:** hierarchy is created primarily by size + serif/sans contrast, not by weight inflation. Never more than two families; never more than four weights per family in use. Uppercase is reserved for Labels and Buttons — never for headlines or body.

---

## 4. SPACING SYSTEM

Base unit **4px**. Only these tokens; no arbitrary pixel values.

| Token | Value | Typical use |
|---|---|---|
| `space-1` | 4px | Icon/text micro-gap |
| `space-2` | 8px | Element internal gap |
| `space-3` | 12px | Compact gaps, chip padding |
| `space-4` | 16px | Component padding, card inner gaps (mobile) |
| `space-5` | 24px | Card padding, grid gaps (mobile page margin) |
| `space-6` | 32px | Card padding (desktop), grid gaps (desktop) |
| `space-7` | 48px | Between related blocks, mobile section gap |
| `space-8` | 64px | Between subsections, desktop page margin |
| `space-9` | 96px | Section padding (mobile), subsection rhythm (desktop) |
| `space-10` | 128px | Section padding (desktop) |
| `space-11` | 160px | Hero vertical padding (desktop only) |

**Component spacing:** 16–32px inside components. **Card spacing:** 32px gaps between cards desktop / 24px mobile. **Section spacing:** 128px desktop, 96px mobile between sections; 160px desktop for hero. **Page padding:** 64px desktop, 40px tablet, 24px mobile (see §5 margins). **Vertical rhythm:** headings sit `space-6` above their section body; a section's label → title gap is `space-4`.

---

## 5. GRID SYSTEM

| Context | Definition |
|---|---|
| Max content width | 1280px (inner content), full-bleed allowed for hero/CTA imagery |
| Desktop grid (≥1024px) | 12 columns, 32px gutter, 64px page margin |
| Tablet grid (768–1023px) | 8 columns, 24px gutter, 40px page margin |
| Mobile grid (<768px) | 4 columns, 20px gutter, 24px page margin |

**Column behavior.** Desktop layouts may be symmetric (equal splits) or **asymmetric editorial** — the preferred mode: 5/7 or 7/5 splits with image and text alternating sides page-to-page. Content blocks may span fewer columns and sit offset (e.g., text in columns 2–9 of 12) to create deliberate whitespace.

**Editorial use of the grid.**
- Hero: text block occupies ~5 columns on one side; hero image full-bleed behind or 7 columns beside it — with reserved negative space for the headline (see §13).
- Section intros (label + H2 + lede) typically span 6–8 columns, never full width — this creates the magazine margin feel.
- One "breakout" moment per page is allowed: a full-bleed image or quote band spanning the viewport, between contained sections.
- Never fill all 12 columns edge-to-edge with content — emptiness is part of the design.

---

## 6. BREAKPOINTS

| Name | Range | What changes |
|---|---|---|
| Mobile | <480px | Single column; nav becomes hamburger menu; sections stack; type hits minimum sizes; section padding 96→64px; forms single column; buttons full-width in forms; grids 1–2 columns |
| Large mobile | 480–767px | Same as mobile but slightly larger type step; 2-col product grid allowed; page margin 24px |
| Tablet | 768–1023px | 8-col grid; collections/products 2–3 col; hero text over image with scrim; nav may stay horizontal if it fits, else hamburger at ≤1023px is acceptable (decide per-page, document it) |
| Desktop | 1024–1439px | 12-col grid; full desktop navbar; asymmetric editorial layouts; hero 16:9; section padding 128px |
| Large desktop | ≥1440px | Content capped at 1280px and centered; imagery capped at 2560px render width; whitespace grows, not density |

**Rule:** mobile is designed as its own experience (reordered content allowed, decorative elements may drop), never a squeezed desktop. Every section specifies its stacking order.

---

## 7. BORDER / RADIUS SYSTEM

The aesthetic is **sharp and editorial**. Rounded corners are the exception.

| Token | Value | Use |
|---|---|---|
| `radius-0` | 0 | Default. Cards, images, sections, inputs |
| `radius-sm` | 2px | Buttons, inputs, small images (barely-there softening) |
| `radius-md` | 4px | Tooltips, dropdown panels only |
| `radius-pill` | 999px | Small tags/chips and status dots only — never buttons or cards |

**Borders:** 1px `hairline` for cards, dividers, inputs. 1.5px for active/selected states. **No** 2px decorative borders around everything, **no** 8–24px rounded "SaaS cards," **no** border+shadow+radius combos. A card is: image + hairline or no border + typography. That's it.

---

## 8. SHADOW SYSTEM

Shadows exist for **elevation of functional layers only** — not for decoration. Cards, buttons and images get **no shadow**.

| Token | Value | Use |
|---|---|---|
| `shadow-1` | 0 2px 8px rgba(37,37,34,0.08) | Dropdowns, popovers, sticky nav on scroll |
| `shadow-2` | 0 16px 48px rgba(37,37,34,0.16) | Modals, mobile menu overlay |
| `shadow-3` | none | Reserved — do not use |

Card hover feedback = subtle image scale (§17) or hairline color shift, never a shadow lift.

---

## 9. BUTTON SYSTEM

Four variants. One primary CTA per view — never two competing primaries in one section.

### Primary
- Background `charcoal`, text `ivory`. Height 48px, padding 0 24px. Radius 2px.
- Type: Inter 600, 13px, uppercase, 0.12em tracking.
- Hover: `ink #171715` background, 200ms. Active: `#0F0F0E`. Focus: 2px `charcoal` ring, 2px offset (the ivory gap keeps the ring visible against the dark button). Disabled: 40% opacity, no pointer.
- Why not terracotta: ivory text on terracotta measures only 3.7:1 (fails AA for body text), and a full terracotta surface would contradict "terracotta is a spice" (§24.5). Charcoal/ivory is 13.5:1 and more editorial.
- Reserved for the page's single main action: *Explore the collection / Request an inquiry / Contact us*.

### Secondary
- Transparent, 1px `charcoal` border, `charcoal` text. Same metrics as Primary.
- Hover: `charcoal` background, `ivory` text (200ms). Active/focus/disabled as Primary.
- On dark surfaces: 1px `ivory` border, `ivory` text; hover fills `ivory` with `charcoal` text.

### Text button (link-style)
- Inter 500, 15px, sentence case, `charcoal`; inline trailing arrow `→`.
- Hover: underline appears (or arrow translates 4px right, 200ms). Focus: visible ring. Used for "View details," "Explore collection" in cards.

### Icon button
- 40×40px (44×44 touch minimum), transparent, icon 20–24px `charcoal`.
- Hover: `sand` background circle. Focus ring as Primary. Used for menu, close, carousel arrows.

---

## 10. FORM SYSTEM

Premium B2B: short, labeled, calm. The inquiry form never exceeds ~6 fields.

| Element | Definition |
|---|---|
| Input | 48px height, white bg, 1px `hairline` border, radius 2px, Inter 16px (prevents iOS zoom), padding 0 16px; focus: 1.5px `charcoal` border + 2px `charcoal` focus ring (identical for all fields) |
| Textarea | Same, min-height 120px |
| Select | Same as input, custom chevron icon, no native multiple |
| Checkbox | 20px square, 1px border, `charcoal` fill when checked with white check; 44px touch row |
| Radio | 20px circle, same logic |
| Labels | Above field, Inter 500 14px `charcoal`; required marked with `*`; optional fields say "(optional)" |
| Help text | Inter 400 13px `stone`, below field |
| Validation | On blur + on submit; never validate mid-typing |
| Error | Border `error`, message 13px `error` below with warning icon; linked via `aria-describedby` |
| Success | Inline confirmation band (`success` text on `sand`), plus button becomes disabled "Sent" |
| Loading | 16px spinner in button, label "Sending…", button disabled |

**Layout:** single column; max 2 columns only on desktop for short field pairs (first/last name). Error/success colors never used as decoration.

---

## 11. NAVIGATION SYSTEM

Four items only: **Home · Collections · About · Contact**. No dropdowns in v1.

| Aspect | Definition |
|---|---|
| Desktop navbar | 72px height, transparent over hero (text `ivory`), switches to solid `ivory` bg + `hairline` bottom border after scroll; logo left, links center/right, compact primary CTA "Contact us" right |
| Active state | Inter 500 + 1.5px `bronze` underline, 8px below text |
| Hover state | Underline animates in from left, 200ms |
| Focus state | 2px ring, 2px offset (color per background) |
| Sticky behavior | Sticky always; solid-on-scroll as above |
| Mobile navbar | 64px bar, logo + 44px hamburger; opens full-screen `charcoal` overlay menu: serif 32px links stacked, 16px gap, contact email + CTA at bottom; closes via X (44px) or Escape; focus is trapped while open; body scroll locked |
| Mobile menu animation | 300ms fade + 8px upward shift, staggered links 40ms apart |

---

## 12. CARD SYSTEM

Four card types. No more. All follow: **image + typography + whitespace**; hairline border only where listed; no shadows, no icon rows, no badge clusters.

| Card | Anatomy | Image | Use when |
|---|---|---|---|
| **Collection card** | 3:4 image; below: Label ("COLLECTION") + serif title + one-line description + text button "Explore" | Full-bleed in card, hover scale 1.03 | Collections overview, homepage featured collections |
| **Product card** | 3:4 image; below: product name (Inter 500 16px) + one metadata line (composition · weight · colorways, `stone`) + optional text button "View product" | Full-bleed, hover scale 1.03 | Product grids inside a collection |
| **Editorial card** | 3:2 image; kicker label + serif title + 2-line excerpt + text button | Full-bleed | Journal/insights, about-page stories |
| **Information card** | No image. 1px top border `hairline`, icon 24px, H3 title, ≤2-line body | none | Capabilities, values, process steps, contact info blocks |

**Anti-duplication rule:** before adding a fifth card type, force the content into one of these four. If it truly doesn't fit, propose the change and document it here first.

---

## 13. IMAGE RATIO SYSTEM

Merges the Visual Art Director's ratio guidance with the layout system. Aspect ratios are enforced in layout (CSS `aspect-ratio`) so pages never shift while loading.

| Context | Ratio (desktop) | Ratio (mobile) | Intended usage |
|---|---|---|---|
| Hero | 16:9 full-bleed | 4:5 | Homepage + interior page heroes; text sits in reserved negative space |
| Collection | 3:4 | 3:4 | Collection cards, collection detail lead image |
| Product | 3:4 | 3:4 (grid) | Product cards; product detail gallery 3:4 lead + 4:3 detail crops |
| Editorial | 3:2 | 4:3 | Editorial cards, story sections, about page |
| CTA band | 21:9 full-bleed | 1:1 | Pre-footer CTA imagery (optional — may be typographic instead) |
| Pairing | two 4:5 images side by side | stacked | Visual storytelling sections |

**Composition rules carried over from the Visual Art Director:**
- Every text-overlay image is art-directed with the text zone decided *first* (usually left or lower third) and photographed/generated with that negative space.
- Subject placement follows the focal-point rule: key subject toward center or the stated side; safe under mobile re-crop.
- Minimum capture/render widths: hero 2560px, collection/product 1600px, editorial 1600px.
- The same image may be reused across sections when it is the strongest choice (documented); never two visually unrelated photo styles on one page.

---

## 14. PHOTOGRAPHY DIRECTION

One photographic language for the entire site — as if shot by one photographer on one commission.

- **Lighting:** soft directional daylight (large window / overcast). Gentle falloff, no harsh studio flash, no HDR.
- **Contrast:** low-to-medium; lifted shadows, controlled highlights. Airy, not moody — except deliberate low-key `charcoal` hero, which stays soft-edged.
- **Color temperature:** warm-neutral (~4000–4500K), consistent with ivory/charcoal palette. No cool blue casts, no orange over-warming.
- **Composition:** generous negative space; rule-of-thirds; straight horizons; subject anchored per the §13 focal rules; series feel via repeated angles and distances.
- **Camera style:** medium-format aesthetic, 50–85mm equivalent for scenes, 90–100mm macro for materials; f/4–f/8 product, f/2.8 lifestyle.
- **Depth:** shallow depth for texture close-ups; deep focus for environments (atelier, design studio, hotel suite, restaurant table, showroom).
- **Backgrounds:** seamless ivory/warm-grey studio backdrops for product; real but minimal hospitality interiors and atelier spaces (natural wood, stone, linen, plaster) for story — always uncluttered, never industrial.
- **Human presence:** rare and purposeful — hands folding, pressing, arranging, dressing a bed or setting a table; makers mid-craft; never posed handshakes, never smiling-at-camera stock models. Faces secondary, material primary.
- **Materials:** recurring macro textile series (linen, cotton, wool, silk — weave, drape, fold, pile) is a signature motif — texture is our brand texture. Finished pieces (bed, bath, table, drapery) are shown dressed and in use, not as raw fabric rolls.
- **Avoid:** generic stock look, oversaturation, cold corporate blue, factory-floor and industrial-machinery clichés, exaggerated bokeh, watermarks/logos in frame, AI-plastic skin and distorted hands.
- **Sources:** licensed hospitality/craft photography from Adobe Stock or Shutterstock for production use; Unsplash/Pexels acceptable for mood exploration but rarely unique enough for a boutique brand; commissioned photography is the gold standard when available. Every image is logged with source + license.

---

## 15. AI IMAGE GENERATION STYLE

Used when stock cannot deliver the exact composition (e.g., hero negative space). All AI prompts follow this house style so generated images are indistinguishable from the photographic language in §14.

**Prompt skeleton (always all elements):**
> *Subject + environment · composition & camera angle · lighting · color palette · mood · aspect ratio · negative-space note · "editorial medium-format photograph, photorealistic, natural textures"*

**House style values:**
- **Camera aesthetic:** medium-format editorial photograph, 50–85mm, photorealistic
- **Lighting:** soft directional window light, gentle shadow falloff
- **Color palette:** warm neutrals — ivory `#F7F5F0`, charcoal `#1C1A17`, sand, terracotta accents `#B66A4A`
- **Composition:** minimalist, generous negative space, subject per focal rule
- **Realism:** photorealistic, true fabric behavior (drape, weave, fray), natural skin texture when hands appear
- **Texture:** visible weave/fiber detail; materials are the hero
- **Environment:** minimal atelier or hospitality interior (suite, table setting, showroom) / seamless studio backdrop — never a factory floor
- **Aspect ratio:** exactly the §13 ratio of its slot

**Negative prompt (always appended):**
> *text, watermark, logo, oversaturated colors, HDR glow, harsh flash, cluttered background, distorted hands, plastic skin, mannequin look, lens flare, fisheye, generic stock photo, busy office, cheap fabric, blurry*

**Rule:** generated images are reviewed against §14 before use. If a generated image needs disclaimers ("it's almost right"), it is rejected — stock or a reshoot of the prompt wins.

---

## 16. ICONOGRAPHY

Minimal. Icons explain function; they never decorate.

- **Style:** outline, 24px grid, 1.5px stroke, round caps and joins, geometric-consistent set (one library — e.g., Lucide — never mixed libraries)
- **Size:** 20px inline, 24px standalone
- **Color:** `charcoal` on light, `ivory` on dark; `stone` when disabled
- **Usage:** contact channels, capability/feature markers, form feedback, UI controls (menu, close, chevron, arrow)
- **Hover:** color shifts to full `charcoal` + 200ms; no scale, no bounce
- **Never:** filled icons, multicolor icons, emoji, clipart, 3D icons
- **Illustrations:** none in this brand system. Photography and typography carry all visual storytelling; decorative illustration is blacklisted (§23). If a future need is proven, it becomes a documented system change first.

---

## 17. ANIMATION SYSTEM

Subtle, fast, purposeful. Motion confirms interaction or guides attention — nothing moves "because it can."

| Pattern | Spec |
|---|---|
| Hover transitions | 150–200ms, ease-out |
| Standard transition | 300ms, `cubic-bezier(0.22, 1, 0.36, 1)` |
| Reveal (scroll-in) | 600ms fade + 12px rise, once per element, IntersectionObserver |
| Image hover | scale 1.03, 400ms, overflow hidden |
| Menu open/close | 300ms fade + shift; links stagger 40ms |
| Page transitions | None (instant navigation); optional 200ms content fade-in on first paint only |
| Carousel (if ever) | Manual controls only, 500ms ease; no autoplay |

**Hard limits:** animate only `opacity` and `transform`. No parallax, no autoplaying video, no scroll-hijacking, no infinite marquees. **Reduced motion:** `prefers-reduced-motion: reduce` disables transforms and reveals — content appears instantly; hovers degrade to color changes only.

**Non-motion states (completing the interaction set):** empty grids/lists (no products, no results) use a quiet one-line typographic message in `stone` with an optional secondary text button — never an illustration or icon cluster. Loading placeholders are `sand` blocks matching the final content geometry with a slow 1.6s opacity pulse; spinners exist only inside buttons.

---

## 18. COMPONENT INVENTORY

Initial reusable set. One component, one purpose; no near-duplicates.

| Component | Purpose |
|---|---|
| Navbar | Global navigation, desktop; active/hover/focus states per §11 |
| MobileMenu | Full-screen overlay navigation per §11 |
| Hero | Page-opening statement + imagery, per §13 ratios |
| PageHeader | Interior-page hero (smaller than homepage Hero): label + H1 + optional lede |
| SectionHeading | Eyebrow label + H2 + optional lede; the standard section opener |
| CollectionCard | Entry point to a collection (§12) |
| ProductCard | Entry point to a product (§12) |
| EditorialCard | Story/journal entry (§12) |
| InfoCard | Capabilities/values/contact info blocks (§12) |
| Button | Primary / Secondary / Text / Icon variants (§9) |
| CTABanner | Pre-footer conversion band; single primary CTA |
| Breadcrumb | Context in collection/product hierarchy |
| Gallery | Product detail image set (lead + thumbnails) |
| Accordion | Specifications, FAQ — controlled, accessible |
| Modal / Lightbox | Rare, functional only: product gallery zoom and image inspection; `shadow-2`, Escape-closable, focus-trapped |
| StatBlock | Numbered facts (experience, countries served, projects delivered, certifications) — typographic, no icons required |
| ContactForm | B2B inquiry form per §10 |
| Input / Select / Textarea / Checkbox | Form primitives per §10 |
| Footer | `charcoal`, sitemap links, contact, legal; ends every page |
| Table (spec) | Technical product data — hairline rows, tabular numbers |

---

## 19. UX WRITING SYSTEM

- **Tone:** clear, short, confident, international English. No hype, no exclamation marks, no "revolutionary/world-class/synergy."
- **CTA style:** verb-first, literal. "Explore the collection" · "View products" · "Request an inquiry" · "Contact us". Never "Submit," never "Click here," never "Learn more" as a primary CTA.
- **Navigation language:** single words. Home, Collections, About, Contact.
- **Product language:** Name (descriptive, not SKU-jargon) + one metadata line (composition · weight · colorways). Description ≤ 2 short sentences — where the piece lives (bed, table, bath, window) and why it feels right. Specifications in the table, not prose.
- **Collection language:** 1–2 sentence editorial introduction — what unites the pieces, the spaces they are made for, and who it serves.
- **Contact language:** welcoming and precise. State what happens after sending ("Our team replies within two business days").
- **Mechanics:** sentence case everywhere except Labels/Buttons; numbers in specs use tabular figures; no ALL-CAPS sentences.

---

## 20. RESPONSIVE RULES

Explicit changes per property — "it's responsive" is not a spec.

| Property | Desktop → Mobile behavior |
|---|---|
| Typography | Fluid via clamp() between the §3 min/max values; Display drops 72→44; body 18→17 |
| Images | Ratio switches defined in §13 (hero 16:9→4:5, CTA 21:9→1:1, editorial 3:2→4:3); focal point preserved on re-crop; `srcset` serves ≤ device width |
| Grids | 12-col → 8-col (tablet) → 4-col; asymmetric splits collapse to full-width stacked |
| Cards | Collections: 3-col → 2-col (tablet) → 1-col; products: 3 → 2 → 2 (large mobile) → 1 if needed; editorial: 3 → 2 → 1 |
| Navigation | ≥1024: horizontal bar; <1024: hamburger + overlay menu |
| Buttons | Inline desktop; full-width inside forms and mobile CTAs on ≤480px |
| Forms | Two-column field pairs stack to one column <768px; inputs 48px everywhere |
| Spacing | Section padding 128→96 (mobile) →64 (small mobile); page margin 64→40→24; grid gaps 32→24 |
| Content order | Mobile may reorder (message before supporting imagery) — decided per section, documented |

---

## 21. ACCESSIBILITY

Accessibility is part of the design, not a final patch.

- **Contrast:** body text ≥ 4.5:1, large text ≥ 3:1, UI components/graphics ≥ 3:1 — measured for every token pair used: charcoal 13.5:1, graphite 8.4:1, stone 4.8:1 on ivory/white; ivory 13.5:1, mist 7.1:1 on charcoal. Terracotta (3.7:1) and olive (4.2:1) are never used for small text.
- **Focus:** always visible — 2px ring, 2px offset (`charcoal` light / `ivory` dark); never `outline: none` without replacement; logical tab order.
- **Keyboard:** everything operable by keyboard; mobile menu traps focus and closes on Escape; accordions/galleries are arrow-key navigable.
- **Touch targets:** minimum 44×44px.
- **Forms:** every input labeled; errors announced via `aria-describedby`; no color-only error signaling (icon + text); autocomplete attributes on identity fields.
- **Motion:** full reduced-motion support (§17).
- **Typography:** body ≥ 16px rendered; no justified text; line length ≤ 68ch; no text below 12px.
- **Images:** informative images get meaningful alt; decorative images get empty alt; hero text-overlay contrast verified at every breakpoint.
- **Screen readers:** semantic landmarks (header/nav/main/footer), one H1 per page, strict heading order, visible text labels for icon-only controls (`aria-label`).

---

## 22. PERFORMANCE

- **Formats:** AVIF first, WebP fallback, JPEG last resort; quality ~80.
- **Sizes:** render width ≤ slot × 2 (DPR); hero ≤ 2560px, cards ≤ 1600px; images compressed before commit.
- **Responsive images:** `srcset` + `sizes` on all content images; art-directed mobile crops as separate assets where the composition demands it.
- **Lazy loading:** native `loading="lazy"` below the fold; LCP image (hero) `fetchpriority="high"`, never lazy.
- **Above-the-fold priority:** hero image + headline + primary CTA only; nothing heavy blocks first paint.
- **Layout stability:** every image slot reserves space via `aspect-ratio` (zero CLS from imagery); fonts sized with fallback metrics.
- **Fonts:** self-hosted variable WOFF2, two families max, `font-display: swap`, preload the two main files only.
- **Animation limits:** opacity/transform only (GPU-friendly); no JS animation libraries for v1; no autoplaying video.

---

## 23. DO NOT USE

Blacklist. Anything here is rejected in review, no discussion.

**Visual patterns**
- Generic SaaS cards (icon + title + text in a rounded shadow box)
- Excessive gradients; gradient text/buttons
- Large rounded corners (≥8px on cards/buttons); pill-shaped buttons
- Drop shadows on cards/buttons/images
- Glassmorphism, neon, glow effects
- Random decorative illustrations, 3D blobs, abstract AI art
- Patterns/background textures behind text
- Marquee text, scroll-hijacking, parallax, autoplaying video
- Cursor-follow effects, confetti, emoji in UI

**Commerce/UX patterns**
- Shopping cart, discount badges, countdown timers, price-flash styling (unless explicitly requested later)
- Popup/modal on page load, newsletter interstitials
- Multiple competing primary CTAs in one view
- Dropdown mega-menus in v1
- Long B2B forms (>6 fields)

**Imagery**
- Generic stock photography (handshakes, call-center headsets, smiling team pointing at whiteboard)
- Cold blue corporate photography; oversaturated HDR imagery
- AI-looking images: plastic skin, distorted hands, impossible fabric physics
- Watermarked/logoed images; image collages; drop-shadowed polaroid frames
- More than one photographic language on the site

**Typography/structure**
- A third typeface; more than four weights per family
- ALL-CAPS paragraphs; underlined non-link text
- Heading levels skipped for visual reasons
- Hash-based URLs (`#/collections`) — real URLs only

---

## 24. GLOBAL DESIGN PRINCIPLES

1. **Whitespace is the luxury.** When in doubt, remove.
2. **One primary CTA per view.** Everything else is secondary or text.
3. **Typography carries the hierarchy.** Size and serif/sans do the work; weight and color whisper.
4. **Every image earns its place** — and obeys one photographic language.
5. **Terracotta is a spice, not a sauce.** Accent sparingly or not at all.
6. **Sharp edges, soft light.** Editorial geometry, photographic warmth.
7. **Editorial before e-commerce.** A boutique house serving hospitality and interior professionals, always.
8. **Content is the interface.** The material — textile — is the protagonist.
9. **Motion is seasoning.** Fast, subtle, purposeful — or none.
10. **The same brand at 375px and 2560px.** Mobile is designed, not squeezed.
11. **Accessibility and performance are design quality,** not checkboxes.
12. **System over novelty.** Reuse the component; extend the system deliberately, in writing.
13. **Every decision has a stated reason.** If we can't say why, we don't ship it.
14. **Decide like an art director.** Give a clear recommendation ("BEN OLSAM"), not a menu of options.

---

## 25. FINAL DESIGN QA CHECKLIST

Run before any page or section is declared complete.

**Structure & hierarchy**
- [ ] Page purpose and primary user action are obvious within seconds
- [ ] Page is visually balanced; every section and component has a clear reason to exist; no unnecessary content
- [ ] Information hierarchy is explicit (primary → secondary → support) and matches the page's design spec
- [ ] Exactly one primary CTA per view; CTA copy follows §19
- [ ] Navigation shows current location (active state); breadcrumbs where deep

**System compliance**
- [ ] Only color tokens from §2; accent discipline respected
- [ ] Only type styles from §3; heading order correct; one H1
- [ ] Only spacing tokens from §4; no arbitrary values
- [ ] Components from §18 reused (no near-duplicates invented)
- [ ] Nothing from the §23 blacklist appears

**Imagery**
- [ ] Ratios match §13 per slot; focal point survives mobile crop
- [ ] Text-over-image contrast verified at every breakpoint
- [ ] One photographic language (§14); alt text meaningful or empty (decorative)

**Responsive**
- [ ] Checked at 375 / 768 / 1024 / 1440 widths
- [ ] Stacking order intentional; mobile nav works; touch targets ≥ 44px

**Quality gates**
- [ ] Keyboard operable end-to-end; focus visible everywhere
- [ ] Contrast AA verified; reduced-motion honored
- [ ] Forms: labels, validation, error, success, loading states present
- [ ] No console errors; no layout shift from imagery (CLS ≈ 0)
- [ ] LCP image optimized and prioritized; lazy loading below fold
- [ ] SEO: title, meta description, Open Graph, canonical, semantic HTML, heading order, alt text, real URLs (robots.txt, sitemap.xml and structured data verified at site level)
- [ ] UX writing tone per §19; no marketing clichés
- [ ] The page passes the one-sentence test in §1 — it could only belong to NIATEKS HOUSE

---

*End of GLOBAL DESIGN SYSTEM v1.2. All future pages reference this document. Changes require an explicit version bump and a written reason.*

---

**Changelog**

- **v1.2 — Homepage master-prompt reconciliation.** Display typeface changed Fraunces → Cormorant Garamond (Master Homepage Design Prompt §31). Palette re-anchored to the master prompt values (§32): ivory `#F5F2EC`, sand `#DED7CA`, charcoal `#252522`, olive `#73765E`, terracotta `#B66A4A`; bronze retired, olive added as secondary display tone, onyx merged into charcoal. All contrast ratios re-measured and updated (§2, §9, §21). No structural or component changes.
- **v1.1 — Final consistency audit.** Brand repositioned from generic textile manufacturer to design-led boutique home & hospitality textile house (§1, §12, §14, §15, §18, §19, §24): atelier and hospitality environments replace factory imagery, finished dressed pieces replace raw fabric rolls, product metadata and statistics vocabulary de-industrialized, "company" language becomes "house." QA checklist information-hierarchy reference clarified (§25). No layout, color, type, or component changes — v1.0 foundations verified and retained.
- **v1.0 — Initial unified system.**
