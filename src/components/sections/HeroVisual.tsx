import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";

/**
 * Abstract "Japan × software × global connectivity" illustration.
 *
 * Drawn rather than photographed so it can be recoloured per theme and stays
 * a few kilobytes on mobile. Everything is deterministic — no Math.random —
 * so the server and client markup match.
 */

/** Deterministic pseudo-random, so the skyline looks organic but never shifts. */
function seeded(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1103515245 + 12345) % 2147483648;
    return value / 2147483648;
  };
}

const rand = seeded(20260916);

type Building = {
  x: number;
  width: number;
  height: number;
  windows: Array<{ x: number; y: number }>;
};

const buildings: Building[] = Array.from({ length: 26 }, (_, index) => {
  const x = 12 + index * 30.5;
  const width = 16 + Math.round(rand() * 12);
  const height = 42 + Math.round(rand() * 118);
  const windows: Array<{ x: number; y: number }> = [];
  const cols = Math.max(1, Math.floor(width / 7));
  const rows = Math.max(1, Math.floor(height / 14));
  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      if (rand() > 0.52) {
        windows.push({ x: x + 3 + c * 7, y: 520 - height + 8 + r * 14 });
      }
    }
  }
  return { x, width, height, windows };
});

/* The panel is cropped with `slice`, so everything that has to stay legible
   lives inside roughly x 100–700 of the 800-wide viewBox. */
const nodePositions = {
  europe: { x: 196, y: 110 },
  usa: { x: 624, y: 96 },
  japan: { x: 430, y: 192 },
};

const blossoms = [
  { x: 626, y: 322, r: 13, rotate: 8 },
  { x: 592, y: 372, r: 9, rotate: -22 },
  { x: 664, y: 388, r: 11, rotate: 34 },
  { x: 618, y: 432, r: 7, rotate: 12 },
  { x: 672, y: 464, r: 9, rotate: -8 },
];

type HeroVisualProps = {
  dict: Dictionary;
  className?: string;
};

export function HeroVisual({ dict, className }: HeroVisualProps) {
  const nodes = dict.hero.nodes;

  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={dict.hero.titleEn}
      className={clsx("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="hv-sky" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="var(--hv-sky-1)" />
          <stop offset="55%" stopColor="var(--hv-sky-2)" />
          <stop offset="100%" stopColor="var(--hv-sky-3)" />
        </linearGradient>

        <linearGradient id="hv-fuji" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--hv-fuji-1)" />
          <stop offset="100%" stopColor="var(--hv-fuji-2)" />
        </linearGradient>

        <linearGradient id="hv-city" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--hv-city-1)" />
          <stop offset="100%" stopColor="var(--hv-city-2)" />
        </linearGradient>

        <radialGradient id="hv-glow" cx="0.56" cy="0.34" r="0.55">
          <stop offset="0%" stopColor="var(--hv-glow)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--hv-glow)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hv-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--hv-line)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--hv-line)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--hv-line)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect width="800" height="520" fill="url(#hv-sky)" />
      <rect width="800" height="520" fill="url(#hv-glow)" />

      {/* Globe — latitude and longitude, kept faint */}
      <g stroke="var(--hv-line)" fill="none" opacity="0.28">
        <circle cx="430" cy="172" r="176" strokeWidth="0.8" />
        <ellipse cx="430" cy="172" rx="176" ry="66" strokeWidth="0.7" />
        <ellipse cx="430" cy="172" rx="176" ry="126" strokeWidth="0.7" />
        <ellipse cx="430" cy="172" rx="68" ry="176" strokeWidth="0.7" />
        <ellipse cx="430" cy="172" rx="128" ry="176" strokeWidth="0.7" />
        <line x1="254" y1="172" x2="606" y2="172" strokeWidth="0.7" />
      </g>

      {/* Connection arcs, drawn from Japan outward */}
      <g fill="none" stroke="url(#hv-arc)" strokeLinecap="round">
        <path d="M430 192 C 360 52, 268 38, 196 110" strokeWidth="1.5" />
        <path d="M430 192 C 512 50, 566 34, 624 96" strokeWidth="1.5" />
        <path d="M196 110 C 330 -24, 500 -22, 624 96" strokeWidth="1" opacity="0.6" />
        <path
          d="M430 192 C 360 52, 268 38, 196 110"
          strokeWidth="2.2"
          strokeDasharray="10 250"
          style={{ animation: "drift 7s linear infinite" }}
        />
        <path
          d="M430 192 C 512 50, 566 34, 624 96"
          strokeWidth="2.2"
          strokeDasharray="10 250"
          style={{ animation: "drift 7s linear infinite 2.2s" }}
        />
      </g>

      {/* Mount Fuji — ridges keep it from reading as a flat triangle */}
      <g>
        <path d="M244 404 L 378 232 Q 392 218, 406 232 L 540 404 Z" fill="url(#hv-fuji)" />
        <path
          d="M350 272 L 378 232 Q 392 218, 406 232 L 434 272 L 418 264 L 406 276 L 392 262 L 376 274 L 362 264 Z"
          fill="var(--hv-snow)"
        />
        <g stroke="var(--hv-snow)" strokeWidth="0.9" fill="none" opacity="0.22">
          <path d="M392 240 L 356 324" />
          <path d="M396 244 L 438 330" />
        </g>
      </g>

      {/* Skyline */}
      <g fill="url(#hv-city)">
        {buildings.map((building) => (
          <rect
            key={building.x}
            x={building.x}
            y={520 - building.height}
            width={building.width}
            height={building.height}
            rx="1"
          />
        ))}
      </g>

      {/* Lit windows */}
      <g fill="var(--hv-window)">
        {buildings.flatMap((building) =>
          building.windows.map((window) => (
            <rect
              key={`${window.x}-${window.y}`}
              x={window.x}
              y={window.y}
              width="2.4"
              height="3.6"
              rx="0.4"
            />
          )),
        )}
      </g>

      {/* Tokyo Tower — a lattice silhouette, not a literal drawing */}
      <g stroke="var(--hv-tower)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M506 520 L 530 330 L 554 520" />
        <path d="M524 362 L 536 362 M 518 400 L 542 400 M 512 444 L 548 444" />
        <path d="M530 330 L 530 298" />
      </g>

      {/* Skytree — a single spire on the left, kept cooler than Tokyo Tower */}
      <g stroke="var(--hv-spire)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M172 520 L 180 306 L 188 520" />
        <path d="M180 306 L 180 266" />
        <circle cx="180" cy="336" r="9" strokeWidth="1" />
      </g>

      {/* Sakura branch, suggested rather than illustrated */}
      <g
        fill="none"
        stroke="var(--hv-branch)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      >
        <path d="M800 286 C 730 296, 686 330, 648 372 C 626 398, 614 428, 606 462" />
        <path d="M694 318 L 662 386" strokeWidth="1.1" />
        <path d="M652 366 L 676 462" strokeWidth="1.1" />
      </g>

      <g fill="var(--hv-sakura)" opacity="0.7">
        {blossoms.map((blossom) => (
          <g
            key={`${blossom.x}-${blossom.y}`}
            transform={`translate(${blossom.x} ${blossom.y}) rotate(${blossom.rotate})`}
          >
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse
                key={angle}
                rx={blossom.r * 0.42}
                ry={blossom.r * 0.72}
                cy={-blossom.r * 0.5}
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        ))}
      </g>

      {/* Location nodes */}
      <g className="hidden sm:block">
        {(
          [
            ["europe", nodes[0]],
            ["usa", nodes[1]],
            ["japan", nodes[2]],
          ] as const
        ).map(([key, node], index) => {
          const point = nodePositions[key];
          const anchor = key === "usa" ? "end" : "start";
          const dx = key === "usa" ? -14 : 14;
          return (
            <g key={key}>
              <circle
                cx={point.x}
                cy={point.y}
                r="9"
                fill="var(--hv-node)"
                opacity="0.25"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `pulse-node 3.6s ease-in-out ${index * 1.1}s infinite`,
                }}
              />
              <circle cx={point.x} cy={point.y} r="3.4" fill="var(--hv-node)" />
              <text
                x={point.x + dx}
                y={point.y - 1}
                textAnchor={anchor}
                fill="var(--hv-label)"
                fontSize="11"
                letterSpacing="1.6"
                className="font-sans"
              >
                {node.label}
              </text>
              <text
                x={point.x + dx}
                y={point.y + 14}
                textAnchor={anchor}
                fill="var(--hv-label-soft)"
                fontSize="10"
                className="font-serif"
              >
                {node.note}
              </text>
            </g>
          );
        })}
      </g>

    </svg>
  );
}
