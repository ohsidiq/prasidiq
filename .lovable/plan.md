# Sidiq Prayoga — Swiss HSE Portfolio

A premium single-page portfolio in International Typographic Style. Dark text on white, deep corporate blue accents, strict 12-column grid, editorial typography, restrained motion.

## Design system (src/styles.css)

Replace the default shadcn tokens with the Swiss palette using `oklch()`:

- `--background` Pure White `#FFFFFF`
- `--foreground` Dark Gray `#111827`
- `--primary` Deep Corporate Blue `#0A2540`
- `--secondary` Royal Blue `#2563EB`
- `--accent` Sky Blue `#60A5FA`
- `--muted` Light Gray `#F5F7FA`
- `--border` Medium Gray `#D1D5DB`
- Radius: `0.125rem` (Swiss = sharp corners, minimal rounding)

Typography via `<link>` in `src/routes/__root.tsx` (Google Fonts):

- Display/body: **Inter** (400/500/700/900)
- Mono accents (section numbers, labels): **JetBrains Mono** 400/500

Tokens in `@theme`:

- `--font-sans: "Inter", "Helvetica Neue", system-ui, sans-serif`
- `--font-mono: "JetBrains Mono", monospace`

Reusable utility class `.swiss-container` → `max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16` and `.swiss-grid` → `grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6`.

## Routing

Single page at `src/routes/index.tsx`. Replace placeholder Index. Update `head()` with proper SEO:

- title: `Sidiq Prayoga — HSE • Risk • Compliance`
- description: ~155 chars summarizing experience
- og:title / og:description / twitter:card

Hash anchors (`#about`, `#experience`, etc.) for in-page nav (allowed per guidance for ToC-style scrolling on a single page).

## Component structure

All under `src/components/portfolio/`:

- `Nav.tsx` — sticky top bar. Left: `SIDIQ PRAYOGA` wordmark in tight tracking. Right: hash links (Work, About, Experience, Skills, Contact) + small "Download CV" outline button. White bg, hairline bottom border on scroll.
- `Hero.tsx` — 12-col asymmetric split. Left 7 cols: tiny mono label `01 — Introduction`, massive `SIDIQ PRAYOGA` (clamp 56–128px, font-black, tight leading), role line in mono uppercase, tagline in serif-weight Inter, intro paragraph, three CTAs (primary filled blue, two outline). Right 5 cols: monochrome portrait placeholder block (grayscale image generated with imagegen) with mono caption `Fig. 01 / Portrait`.
- `Achievements.tsx` — `Selected Achievements` header + 8 grid cards (2 / 4 cols responsive). Each card: large mono number (`01`–`08`) top-left, hairline divider, achievement text. Hover: subtle border color shift to primary.
- `About.tsx` — two-column: left sticky H2 `About`, right body copy with expertise bullet list rendered as a two-column dense list.
- `Experience.tsx` — vertical timeline. Each role: left column shows mono year range + company, right column shows title + highlight bullets. Hairline left border with small square markers.
- `Certifications.tsx` — 7 cards in responsive grid (1/2/3 cols). Each: mono index, certification name, issuing body inferred from text (BNSP, etc.).
- `Skills.tsx` — 4 category columns; category title in mono uppercase, items listed with hairline dividers between rows.
- `Community.tsx` — 4 items in 2x2 grid, role/org pairs.
- `Contact.tsx` — large editorial heading `Let's Build Safer Workplaces Together`, asymmetric layout: contact details on left (phone, email, location as definition-list rows), social links as text-only with arrow glyphs on right.
- `Footer.tsx` — minimal: wordmark left, tagline center, copyright right, single hairline border top.

`index.tsx` composes Nav + sections + Footer inside a `<main>` with `scroll-smooth` on `<html>` (added via Tailwind on root or inline style).

## Image

One generated asset: `src/assets/portrait.jpg` — monochrome editorial portrait of a professional in business attire, neutral background, high-contrast B&W, Swiss editorial style, 800×1000.

## Motion

Minimal. CSS-only:

- Nav: border-bottom fades in on scroll (IntersectionObserver on a sentinel).
- Section reveal: subtle 200ms fade + 8px translateY on enter, once. Use a tiny custom hook with IntersectionObserver — no framer-motion needed to keep things lean.

## Responsive rules

Follow the responsive-layout-patterns guidance:

- Nav uses `grid-cols-[minmax(0,1fr)_auto]` on mobile, flex on `sm:`.
- Hero stacks: portrait below text on mobile; side-by-side from `lg:`.
- All multi-col grids collapse to single column < `md`.

## Accessibility & SEO

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Single `<h1>` (Hero name); each section has its own `<h2>`.
- `alt` text on portrait.
- Color contrast: all text on white uses `#111827` or `#0A2540`.
- `prefers-reduced-motion` disables reveal animations.

## Files to create / modify

```text
src/styles.css                              (rewrite tokens + add utilities)
src/routes/__root.tsx                       (add font <link>s, default title)
src/routes/index.tsx                        (replace placeholder)
src/components/portfolio/Nav.tsx
src/components/portfolio/Hero.tsx
src/components/portfolio/Achievements.tsx
src/components/portfolio/About.tsx
src/components/portfolio/Experience.tsx
src/components/portfolio/Certifications.tsx
src/components/portfolio/Skills.tsx
src/components/portfolio/Community.tsx
src/components/portfolio/Contact.tsx
src/components/portfolio/Footer.tsx
src/components/portfolio/Reveal.tsx          (IntersectionObserver wrapper)
src/assets/portrait.jpg                      (generated)
```

No backend, no Cloud — purely presentational. CV download button links to `/cv.pdf` placeholder (`<a href="/cv.pdf" download>`); user can drop the real PDF into `public/` later.

## Out of scope

- CMS / data fetching
- Dark mode (Swiss spec is white-only)
- Contact form submission (mailto: link instead)
