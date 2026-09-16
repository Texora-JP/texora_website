import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";

/**
 * Dot-matrix world map.
 *
 * Deliberately coarse: it should read as reach and collaboration, not as a
 * claim that TEXORA has offices abroad. Land is described as row spans on a
 * 60 x 25 equirectangular grid (6° per column, 5° per row, from 78°N).
 */

type Span = [row: number, from: number, to: number];

const land: Span[] = [
  // North America
  [1, 3, 20], [2, 3, 21], [3, 4, 21], [4, 5, 21], [5, 6, 21],
  [6, 7, 21], [7, 9, 21], [8, 10, 20], [9, 12, 19], [10, 14, 18],
  [11, 15, 18], [12, 16, 18],
  // Greenland
  [0, 22, 26], [1, 22, 27], [2, 22, 27], [3, 23, 27], [4, 24, 26],
  // South America
  [13, 17, 21], [14, 16, 23], [15, 16, 24], [16, 16, 24], [17, 17, 23],
  [18, 17, 23], [19, 18, 22], [20, 18, 22], [21, 19, 21], [22, 19, 21],
  [23, 19, 20], [24, 19, 20],
  // Europe
  [1, 30, 38], [2, 28, 39], [3, 28, 40], [4, 28, 40], [5, 28, 39],
  [6, 29, 38], [7, 30, 37],
  // Africa
  [8, 28, 37], [9, 27, 38], [10, 27, 39], [11, 27, 39], [12, 28, 38],
  [13, 29, 37], [14, 29, 36], [15, 29, 36], [16, 30, 36], [17, 30, 35],
  [18, 30, 35], [19, 31, 34], [20, 31, 34], [21, 32, 34],
  // Asia
  [0, 40, 56], [1, 40, 57], [2, 40, 58], [3, 41, 58], [4, 41, 57],
  [5, 40, 56], [6, 40, 55], [7, 41, 54], [8, 41, 53], [9, 42, 52],
  [10, 43, 51], [11, 45, 51], [12, 46, 52], [13, 47, 52], [14, 49, 52],
  // Australia and New Zealand
  [18, 50, 55], [19, 49, 56], [20, 49, 56], [21, 50, 55], [22, 51, 54],
  [22, 57, 58], [23, 57, 58],
];

const STEP = 8;
const COLS = 60;
const ROWS = 25;

const dots: Array<{ x: number; y: number }> = (() => {
  const grid = new Set<string>();
  for (const [row, from, to] of land) {
    for (let col = from; col <= to; col += 1) {
      grid.add(`${col},${row}`);
    }
  }
  return [...grid].map((key) => {
    const [col, row] = key.split(",").map(Number);
    return { x: col * STEP + STEP / 2, y: row * STEP + STEP / 2 };
  });
})();

/** lon/lat to the same grid coordinates. */
function project(lon: number, lat: number) {
  return {
    x: ((lon + 180) / 6) * STEP + STEP / 2,
    y: ((78 - lat) / 5) * STEP + STEP / 2,
  };
}

const points = {
  europe: project(4, 48),
  us: project(-77, 39),
  japan: project(139.7, 35.7),
};

type WorldMapProps = {
  dict: Dictionary;
  className?: string;
};

export function WorldMap({ dict, className }: WorldMapProps) {
  const [europe, us, japan] = dict.partnership.nodes;

  const arc = (from: { x: number; y: number }, lift: number) =>
    `M${from.x} ${from.y} Q ${(from.x + points.japan.x) / 2} ${Math.min(from.y, points.japan.y) - lift}, ${points.japan.x} ${points.japan.y}`;

  return (
    <svg
      viewBox={`16 0 ${COLS * STEP - 16} ${ROWS * STEP}`}
      role="img"
      aria-label={dict.partnership.headingEn}
      className={clsx("h-full w-full", className)}
    >
      <g className="fill-ink/25">
        {dots.map((dot) => (
          <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="1.7" />
        ))}
      </g>

      <g fill="none" strokeLinecap="round" className="stroke-link/85">
        <path d={arc(points.europe, 56)} strokeWidth="1.3" />
        <path d={arc(points.us, 76)} strokeWidth="1.3" />
        <path
          d={arc(points.europe, 56)}
          strokeWidth="2"
          strokeDasharray="6 200"
          style={{ animation: "drift 6s linear infinite" }}
        />
        <path
          d={arc(points.us, 76)}
          strokeWidth="2"
          strokeDasharray="6 200"
          style={{ animation: "drift 6s linear infinite 1.8s" }}
        />
      </g>

      {(
        [
          [points.europe, europe, "start"],
          // Anchored left so it never runs into the Europe label.
          [points.us, us, "end"],
          [points.japan, japan, "end"],
        ] as const
      ).map(([point, node, anchor], index) => {
        const dx = anchor === "end" ? -10 : 10;
        const isJapan = index === 2;
        return (
          <g key={node.id}>
            {isJapan && (
              <circle
                cx={point.x}
                cy={point.y}
                r="7"
                className="fill-coral/30"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: "pulse-node 3.2s ease-in-out infinite",
                }}
              />
            )}
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              className={isJapan ? "fill-coral" : "fill-link"}
            />
            <text
              x={point.x + dx}
              y={point.y - 3}
              textAnchor={anchor}
              fontSize="11"
              className="fill-ink font-sans"
            >
              {node.label}
            </text>
            <text
              x={point.x + dx}
              y={point.y + 9.5}
              textAnchor={anchor}
              fontSize="9"
              className="fill-muted font-serif"
            >
              {node.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
