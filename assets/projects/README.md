# Project cover images — originals

**Save your PNGs here**, not in `public/`.

Anything under `public/` is downloadable at its URL whether or not a page links
to it. These originals stay out of it. `npm run images` reads this folder,
applies any per-image treatment, and writes the published versions into
`public/projects/`.

```
assets/projects/beauty.png      ← you save here (private)
        │  npm run images
        ▼
public/projects/beauty.png      ← generated, blurred, served
```

Name the file after the case study's `id`:

| Case study                 | `id`         | File                             |
| -------------------------- | ------------ | -------------------------------- |
| Enterprise Beauty Commerce | `beauty`     | `assets/projects/beauty.png`     |
| BizPilotAI                 | `bizpilotai` | `assets/projects/bizpilotai.png` |
| 0120.co.jp                 | `kadai`      | `assets/projects/kadai.png`      |

After adding a file, run `npm run images`, then point the case study at the
**published** path in `src/content/caseStudies.en.ts` and `caseStudies.ja.ts`:

```ts
image: "/projects/beauty.png",
imageAlt: "…",
```

`imageAlt` is per-language — write it in each file's own language. Without
`image`, the card falls back to the drawn diagram in `ProjectArt.tsx`.

The script also runs automatically before `npm run build`, so a deploy always
publishes from the current originals.

## Treatments

Per-image settings live in the `treatments` map in
`scripts/process-project-images.mjs`. Files not listed there are passed through
at up to 1600px wide.

`beauty.png` is set to `blur: 28` with a blue tint. That is a **redaction, not a
style**: the original is the client's own site and carries their logo, and they
are under NDA. The blur is baked into the published file on purpose — a CSS
filter would not do, because the browser would still receive the sharp image.

If you raise or lower the blur, open `public/projects/beauty.png` at full size
afterwards and confirm no logo or text is readable.

## Format

- **Wide is fine.** Browser screenshots around 2:1 work well; the panel is 16:10
  and crops from the top, so the header and hero survive.
- **Type:** PNG for UI screenshots, JPG or WebP for photography.
- **Weight:** the script resizes and re-encodes, so the original can be large.
- **Legibility:** a dark gradient sits over the lower third for the project
  title. Avoid putting fine detail down there.

## Note on version control

These originals are committed to the repository. That keeps builds reproducible,
but it does mean the unblurred `beauty.png` exists in git history. If this repo
is ever made public, remove it from history first.
