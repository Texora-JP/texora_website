import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/**
 * Builds the served cover images in public/projects from the originals in
 * assets/projects.
 *
 * Why this exists: anything under public/ is downloadable at its URL whether or
 * not a page links to it. Confidential originals therefore must not live there.
 * A CSS filter would not help either — the browser still receives the sharp
 * file. So the treatment is baked in here, and only the output is published.
 *
 * Run with `npm run images`. It also runs automatically before `npm run build`.
 */

const SOURCE_DIR = path.join(process.cwd(), "assets", "projects");
const OUTPUT_DIR = path.join(process.cwd(), "public", "projects");

/** Longest edge of the published file. The panel is never wider than ~700px. */
const MAX_WIDTH = 1600;

/**
 * Per-image treatment, keyed by file name.
 *
 * `blur` is a redaction, not a style: the sigma has to be high enough that
 * logos and body text are unreadable at full size, because the published file
 * is what a curious visitor downloads.
 */
const treatments = {
  "beauty.png": {
    // NDA client. The blur must destroy the wordmark; the tint pulls the
    // brand's red towards the site's indigo so it reads as an abstract.
    blur: 28,
    tint: "#3f6da8",
    saturation: 0.55,
    note: "redacted: blurred and tinted for NDA",
  },
};

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(SOURCE_DIR)).filter((name) => /\.(png|jpe?g|webp)$/i.test(name));

  if (files.length === 0) {
    console.log("No source images in assets/projects — nothing to do.");
    return;
  }

  for (const file of files) {
    const treatment = treatments[file];
    let pipeline = sharp(path.join(SOURCE_DIR, file)).resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });

    if (treatment?.blur) pipeline = pipeline.blur(treatment.blur);
    if (treatment?.saturation) pipeline = pipeline.modulate({ saturation: treatment.saturation });
    if (treatment?.tint) pipeline = pipeline.tint(treatment.tint);

    const output = path.join(OUTPUT_DIR, file);
    const { width, height, size } = await pipeline.png({ quality: 82 }).toFile(output);

    console.log(
      `${file.padEnd(18)} ${width}x${height}  ${(size / 1024).toFixed(0)} KB` +
        (treatment?.note ? `  (${treatment.note})` : ""),
    );
  }

  // Leaves a trail in the output folder so nobody mistakes it for a place to
  // hand-edit files.
  await writeFile(
    path.join(OUTPUT_DIR, "GENERATED.md"),
    [
      "# Generated — do not edit",
      "",
      "These files are built from `assets/projects/` by",
      "`scripts/process-project-images.mjs`. Edit the originals there and run",
      "`npm run images`.",
      "",
      "`beauty.png` is deliberately blurred: the original identifies an NDA client.",
      "",
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
