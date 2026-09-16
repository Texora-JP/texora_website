import { clsx } from "@/lib/clsx";

/**
 * Placeholder cover art for each case study.
 *
 * The approved mockup uses photography here. Until real product screenshots
 * exist these are drawn in the same geometric language as the rest of the
 * site, so the section reads as designed rather than as a missing asset.
 */

type ProjectArtProps = {
  variant: string;
  /**
   * "slice" fills the panel and crops — right for the decorative covers.
   * "meet" keeps the whole drawing visible, which the architecture diagram
   * on the featured case study needs.
   */
  fit?: "slice" | "meet";
  className?: string;
};

const dotGrid = Array.from({ length: 7 * 12 }, (_, index) => ({
  x: 18 + (index % 12) * 30,
  y: 20 + Math.floor(index / 12) * 30,
}));

export function ProjectArt({ variant, fit = "slice", className }: ProjectArtProps) {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio={`xMidYMid ${fit}`}
      aria-hidden
      className={clsx("h-full w-full", className)}
    >
      <rect width="400" height="260" className="fill-bg-alt" />
      <g className="fill-primary/10">
        {dotGrid.map((dot) => (
          <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="1.4" />
        ))}
      </g>

      {variant === "beauty" && (
        <g>
          <rect width="400" height="260" className="fill-coral/8" />

          {/* Two channels converging on one customer view, then fanning out
              into the four parts of the experience. */}
          <g className="fill-surface/85 stroke-coral/45" strokeWidth="1.2">
            <rect x="96" y="20" width="80" height="26" rx="13" />
            <rect x="224" y="20" width="80" height="26" rx="13" />
          </g>
          <g className="fill-coral/50">
            <circle cx="116" cy="33" r="4" />
            <circle cx="244" cy="33" r="4" />
          </g>

          <g fill="none" strokeLinecap="round" className="stroke-coral/45" strokeWidth="1.3">
            <path d="M136 46c0 28 28 24 60 44" />
            <path d="M264 46c0 28-28 24-60 44" />
          </g>

          {/* Unified customer view, drawn as a blossom — five petals, matching
              the sakura in the hero rather than reading as a plus sign. */}
          <circle
            cx="200"
            cy="120"
            r="34"
            className="fill-surface/90 stroke-coral/55"
            strokeWidth="1.3"
          />
          <g className="fill-coral/55" transform="translate(200 120)">
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse key={angle} rx="6.5" ry="11" cy="-10" transform={`rotate(${angle})`} />
            ))}
          </g>
          <circle cx="200" cy="120" r="4" className="fill-coral" />

          <g fill="none" strokeLinecap="round" className="stroke-primary/40" strokeWidth="1.2">
            <path d="M176 144 128 186" />
            <path d="M192 154v32" />
            <path d="M208 154v32" />
            <path d="M224 144l48 42" />
          </g>

          <g className="fill-surface/85 stroke-primary/45" strokeWidth="1.2">
            {[26, 118, 210, 302].map((x) => (
              <rect key={x} x={x} y="196" width="72" height="42" rx="7" />
            ))}
          </g>
          <g className="fill-primary/45">
            {[26, 118, 210, 302].map((x) => (
              <rect key={x} x={x + 12} y="210" width="34" height="6" rx="3" />
            ))}
          </g>
          <g className="fill-matcha/55">
            {[26, 118, 210, 302].map((x) => (
              <rect key={x} x={x + 12} y="222" width="20" height="6" rx="3" />
            ))}
          </g>
        </g>
      )}

      {variant === "bizpilotai" && (
        <g>
          <rect width="400" height="260" className="fill-primary/8" />

          {/* Three tiers: clients, application, persistence and revenue.
              The point of the card is that the architecture is documented. */}
          <g strokeWidth="1.2" fill="none" className="stroke-primary/45">
            <path d="M92 74v34M200 74v34M308 74v34" />
            <path d="M120 152v30M280 152v30" />
          </g>

          <g className="fill-surface/85 stroke-primary/50" strokeWidth="1.2">
            {[38, 146, 254].map((x) => (
              <rect key={x} x={x} y="42" width="108" height="32" rx="7" />
            ))}
            <rect x="38" y="108" width="324" height="44" rx="9" />
            <rect x="38" y="182" width="156" height="36" rx="7" />
            <rect x="206" y="182" width="156" height="36" rx="7" />
          </g>

          {/* Service nodes inside the application tier */}
          <g className="fill-primary/60">
            <circle cx="92" cy="130" r="5" />
            <circle cx="200" cy="130" r="5" />
            <circle cx="308" cy="130" r="5" />
          </g>
          <g strokeWidth="1.1" className="stroke-primary/35">
            <path d="M97 130h98M205 130h98" />
          </g>

          {/* Billing tier gets the accent, security tier the seal red */}
          <g className="fill-matcha/70">
            <rect x="60" y="195" width="34" height="10" rx="3" />
            <rect x="102" y="195" width="18" height="10" rx="3" />
          </g>
          <g className="fill-coral/70">
            <rect x="228" y="195" width="24" height="10" rx="3" />
            <rect x="260" y="195" width="30" height="10" rx="3" />
          </g>

          <g fill="none" strokeWidth="1.3" className="stroke-coral/70">
            <path d="M336 30v-6a8 8 0 0 1 16 0v6" />
            <rect x="330" y="30" width="28" height="20" rx="4" className="fill-surface/80" />
          </g>
        </g>
      )}

      {variant === "kadai" && (
        <g>
          <rect width="400" height="260" className="fill-matcha/10" />

          {/* Drafts on the left, feeding a scheduled pipeline, into a published
              corpus on the right. The loop is the product. */}
          <g className="fill-surface/85 stroke-matcha/55" strokeWidth="1.2">
            {[46, 86, 126].map((y, index) => (
              <rect key={y} x={30 + index * 6} y={y} width="72" height="28" rx="5" />
            ))}
          </g>
          <g className="stroke-matcha/50" strokeWidth="1" strokeLinecap="round">
            <path d="M40 58h44M40 66h32M50 98h44M50 106h28M60 138h44M60 146h36" />
          </g>

          {/* Scheduled pipeline */}
          <g fill="none" strokeLinecap="round">
            <path d="M118 100h42" className="stroke-matcha/60" strokeWidth="1.4" />
            <path d="M196 62a42 42 0 1 1-30 12" className="stroke-primary/60" strokeWidth="2" />
            <path d="m160 66 8 10 12-4" className="stroke-primary/60" strokeWidth="2" />
          </g>
          <g className="fill-primary/70">
            <circle cx="198" cy="104" r="4" />
          </g>
          <g className="stroke-primary/60" strokeWidth="1.6" strokeLinecap="round" fill="none">
            <path d="M198 104v-14M198 104l10 7" />
          </g>

          {/* Published pages */}
          <path
            d="M252 100h34"
            className="stroke-matcha/60"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <g className="fill-surface/85 stroke-matcha/45" strokeWidth="1">
            {Array.from({ length: 12 }, (_, index) => (
              <rect
                key={index}
                x={292 + (index % 4) * 24}
                y={56 + Math.floor(index / 4) * 30}
                width="18"
                height="24"
                rx="3"
              />
            ))}
          </g>

          {/* Core Web Vitals: a fast, stable reading */}
          <g transform="translate(30 178)">
            <rect
              width="340"
              height="52"
              rx="8"
              className="fill-surface/80 stroke-line"
              strokeWidth="1"
            />
            <path
              d="M22 36a26 26 0 0 1 52 0"
              fill="none"
              className="stroke-matcha/70"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M48 36l16-14"
              className="stroke-coral/80"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <g className="fill-matcha/60">
              <rect x="100" y="18" width="58" height="7" rx="3.5" />
              <rect x="100" y="32" width="38" height="7" rx="3.5" />
              <rect x="176" y="18" width="46" height="7" rx="3.5" />
              <rect x="176" y="32" width="66" height="7" rx="3.5" />
              <rect x="258" y="18" width="52" height="7" rx="3.5" />
              <rect x="258" y="32" width="30" height="7" rx="3.5" />
            </g>
          </g>
        </g>
      )}
    </svg>
  );
}
