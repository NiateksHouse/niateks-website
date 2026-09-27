# NIATEKS HOUSE — Homepage (v1)

Design-led boutique home & hospitality textile house. This is the **homepage only** —
Collections, About and Contact pages are intentionally not built yet.

## Stack

Static HTML + CSS + vanilla JS. No frameworks, no build step, no unnecessary dependencies
(per AGENTS.md §9 and Master Prompt §44). Serve any static file server from the project root.

## Architecture

```
index.html          Homepage (12 sections per HOMEPAGE-DESIGN-BLUEPRINT.md)
css/styles.css      Global Design System v1.2 tokens + components
js/main.js          Navigation, mobile menu, scroll reveal (§11, §17, §21)
robots.txt          Crawler rules + sitemap pointer
sitemap.xml         Real-URL routes (/collections, /collections/<slug>, /about, /contact…)
AGENTS.md           Project constitution (rules)
skills/             UI/UX + Visual Art Director instruction layers
design-system/      GLOBAL-DESIGN-SYSTEM.md (v1.2) + HOMEPAGE-DESIGN-BLUEPRINT.md (approved)
```

## Governing documents

1. `AGENTS.md`
2. `design-system/GLOBAL-DESIGN-SYSTEM.md` (v1.2 — Cormorant Garamond, approved palette)
3. `skills/ui-ux/SKILL.md`
4. `skills/visual-art-director/SKILL.md`

## Approved content decisions

- Collection categories (user-approved): **Kitchen Textiles · Table Textiles · Bath Textiles · Hospitality**
- Fonts: Cormorant Garamond (display serif) + Inter (text sans), via Google Fonts
- Palette: `#F5F2EC` ivory · `#252522` charcoal · `#DED7CA` sand · `#73765E` olive · `#B66A4A` terracotta

## Intentional placeholders (NOT real data — replace when verified)

Per Master Prompt §39–40, nothing is fabricated. The following are marked placeholders:

- **All imagery**: filled with **interim original SVG artwork** (`assets/images/**`) art-directed in the house visual language (warm ivory/sand, soft directional light, no faces, no logos) — every file validates via `node scripts/validate-svg.js`.
  These are placeholders-for-photography: each slot swaps 1:1 for licensed photography or AI-generated images per `design-system/IMAGE-SOURCING-LIST.md` (keywords, crops, focal points, filenames) and the hero AI brief in `design-system/HOMEPAGE-DESIGN-BLUEPRINT.md`.
- **Product slots 10–12 intentionally remain labeled placeholders** (`imgslot--pending`) — they must become real NIATEKS product photography, never stock.
- **Product showcase**: "Collection piece — Kitchen/Table/Bath" with "Final product names & data pending" (cards + image slots).
- **Contact email** `hello@niatekshouse.com` (schema.org, footer, mobile menu) — interim.
- **Footer**: social links and legal page targets (`/privacy`, `/terms`) pending real content.
- **Domain** `www.niatekshouse.com` in canonical/OG/sitemap — interim pending the real domain.
- No statistics, certifications, customer logos, awards or testimonials are present — by design.

## Next steps (not started, per instruction)

Collections overview → Collection detail → Products → Product detail → Inquiry/Contact pages,
About page, then replace placeholders with verified NIATEKS data and real photography.
