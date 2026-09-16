# TEXORA — texora.jp

Bilingual (EN / JA) marketing site for TEXORA, a five-member software development
team based in Japan.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deploys to Vercel.

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en or /ja
npm run build
npm run start
npm run lint
```

## Design

The visual direction is **"Modern Japan, Global Technology"**: Japanese identity
through precision and restraint rather than decoration. The approved mockups live
at `texora.png` (dark) and `texora1.png` (light); the written brief is `chat.txt`.

Every colour, font stack, shadow and easing curve is a CSS custom property in
[`src/app/globals.css`](src/app/globals.css). Light mode is warm paper, dark mode
is a navy Tokyo night — never pure black. Change the tokens there and the whole
site follows; do not hard-code colours in components.

Two things to know about that file:

- Raw variables (`--bg`, `--link`, `--elevation-card`, `--serif-stack`) are defined
  on `:root` and overridden on `.dark`. The `@theme inline` block maps them onto
  Tailwind's names (`--color-bg`, `--shadow-card`, …). The two sets are named
  differently on purpose — a theme key defined in terms of itself becomes invalid.
- Use `text-link` for small text accents, not `text-primary`. `--primary` is tuned
  as a button fill and is too dark for small text on the dark navy surface.

Japanese motifs are the `.motif-seigaiha` and `.motif-shoji` background classes and
the `.vertical-jp` writing-mode helper.

### Typography

- **EB Garamond** (`next/font`, self-hosted) for Latin — the site is serif-led,
  matching the mockups.
- **Noto Sans JP / Noto Serif JP** from the Google Fonts CDN. This is deliberate:
  the CDN splits CJK into unicode-range chunks so a phone downloads only the glyphs
  the page actually uses. Self-hosting via `next/font` would ship the full families.
- `html[lang="ja"]` reorders `--serif-stack` / `--sans-stack` so Japanese leads.

### Motion

Reveal-on-scroll is [`<Reveal>`](src/components/ui/Reveal.tsx) (IntersectionObserver,
fires once). Theme changes cross-fade over 260ms. Everything collapses under
`prefers-reduced-motion: reduce`.

## Content

All copy lives in [`src/content/en.ts`](src/content/en.ts) and
[`src/content/ja.ts`](src/content/ja.ts) — no CMS. `en.ts` defines the shape;
`ja.ts` is typed `typeof en`, so **a missing Japanese key is a build error**.
Japanese copy is written by hand, never machine-translated.

To edit the site, you almost always want one of those two files.

## Routing and i18n

```
/                 → proxy.ts redirects using Accept-Language
/en, /ja          → src/app/[locale]/page.tsx
```

There is no `src/app/layout.tsx`: the root layout is `src/app/[locale]/layout.tsx`,
which is what lets `<html lang>` be per-locale. `src/proxy.ts` (Next 16's renamed
middleware) handles the bare `/` redirect.

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, `hreflang` and
`sitemap.xml` point at the real origin.

## Case studies

Lead case studies live in [`caseStudies.en.ts`](src/content/caseStudies.en.ts) and
[`caseStudies.ja.ts`](src/content/caseStudies.ja.ts), typed by `CaseStudy` in
[`types.ts`](src/content/types.ts).
[`FeaturedProject.tsx`](src/components/sections/FeaturedProject.tsx) breaks each
system out by layer, because naming the layers is what makes an engineering
portfolio credible. Reorder them by moving entries in the array — the first one
leads the section.

1. **Enterprise Beauty Commerce** — omnichannel beauty commerce for a cosmetics
   client. **The client is under NDA: never name or link them anywhere on this
   site, in any language.** Its layer blocks are a draft — see below.
2. **BizPilotAI** — a live commercial AI SaaS. Proves production readiness:
   billing, consent, rollback. Source: `bizdxai.com/en/portfolio/bizpilotai`.
3. **0120.co.jp** (株式会社課題解決プラットフォーム) — an AI-operated content
   platform that publishes itself. Proves measured outcomes.
   Source: `0120.co.jp/blog/aio-165/`.

### Cover images

Originals go in [`assets/projects/`](assets/projects/), **never** in `public/` —
anything under `public/` is downloadable at its URL whether or not a page links
to it. `npm run images` processes them into `public/projects/`, and runs
automatically before `npm run build`.

`beauty.png` is blurred and tinted at that step because the original carries the
NDA client's branding. A CSS filter would not be enough: the browser would still
receive the sharp file. See [`assets/projects/README.md`](assets/projects/README.md).

### Confidential engagements

A case study with no public links sets `liveHref` and `caseStudyHref` to `""` and
fills the optional `access` field instead. The component then hides the button
row and shows that line behind a lock icon, so the absence is explained rather
than looking unfinished. An empty `year` is hidden from the category line the
same way.

### The rule for numbers

`metrics` renders a figure strip; `metricsNote` says where and when it was
measured, and is shown directly underneath. **Both are required together** —
a number without a date is a marketing claim, not evidence.

Only publish figures the project genuinely supports:

- BizPilotAI has `metrics: []` **on purpose.** Its source page labels its ROI
  ranges "illustrative", so repeating them as measured results would be false.
  Its `result` line describes what shipped instead.
- Enterprise Beauty Commerce has none because none were supplied.
- 0120.co.jp's figures come from the published case study and are dated July 2026.
  They will go stale — re-check them against the live site before launch, and on
  a schedule after.

## Before launch

- [ ] **Confirm the Enterprise Beauty Commerce layer blocks.** They were drafted
      from the client's solution description, not from a technical brief, and are
      deliberately capability-level: no technology is named. Add an Architecture
      layer with the real stack once the client approves what can be disclosed,
      and set the delivery `year`.
- [ ] **Re-check the 0120.co.jp figures.** Page and article counts move; the
      published source said 500+ pages and 600+ articles in July 2026. Confirm
      the current numbers and update `metricsNote` with the new date.
- [ ] **Confirm "4 articles / day".** That figure came from the client directly,
      not from the published page — verify before it goes live.
- [ ] **Confirm how each project should be credited.** BizPilotAI is marked
      `client: "In-house product"` and 0120.co.jp is credited to 株式会社課題解決
      プラットフォーム. Correct these if the relationships are different.
- [ ] **Confirm the outbound links.** The cards link to `bizpilotai.jp`,
      `bizdxai.com` and `0120.co.jp`. Decide whether TEXORA should point at the
      BizDX AI brand publicly, or host the case studies on this site instead.
- [ ] **Team photographs.** `Portrait` in [`Team.tsx`](src/components/sections/Team.tsx)
      draws a placeholder tile with the member's surname character. The brief is
      explicit that real faces are what earn trust here.
- [ ] **Project imagery.** [`ProjectArt.tsx`](src/components/sections/ProjectArt.tsx) draws abstract covers and architecture diagrams; swap in real screenshots where the client allows.
- [ ] **Supporting materials.** The four tiles in the last section link to `#` —
      point them at the real PDFs, CV and GitHub org.
- [ ] **Contact address.** `materials.contact.email` is `hello@texora.jp`.
- [ ] **Technology marks.** The logos in `Icons.tsx` are geometric interpretations,
      not official brand assets. Replace them if the trademark guidelines allow it.
- [ ] **Case-study detail pages.** "View All Projects" currently jumps to contact.
- [ ] **Team links.** GitHub / LinkedIn per member, as the brief suggests.
