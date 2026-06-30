/**
 * Lo-fi wireframe primitives for the Editorial Front Page.
 *
 * These are the reusable building blocks shared across the editorial columns:
 * the wobbly sketch radii, tag chips, text-bar placeholders, the crossed
 * media placeholder, and the small stroke icons. All are presentational and
 * stateless — they take only the data they render.
 */
import type { CSSProperties, ComponentType, ReactNode } from "react";
import { Telescope, Music4, Gamepad2, Trophy, type LucideProps } from "lucide-react";
import type { LinkIconName, OffDutyIconName } from "@/types/editorial";

/** The three cycled wobbly-corner classes (see globals.css). */
const RADIUS_CLASS = ["ed-radius-0", "ed-radius-1", "ed-radius-2"] as const;

/** Returns the wobbly-radius utility class for a given index. */
export function radiusClass(i: number): string {
  return RADIUS_CLASS[i % RADIUS_CLASS.length];
}

/** A tag chip — plain by default; fills with the accent colour on hover/focus. */
export function Chip({ children }: { children: ReactNode }) {
  return <span className="ed-chip">{children}</span>;
}

/** A row of gray placeholder "text" bars. */
export function TextBars({
  count,
  widths,
  height = 9,
  gap = 9,
}: {
  count: number;
  widths: string[];
  height?: number;
  gap?: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {Array.from({ length: count }).map((_, k) => (
        <div
          key={`bar-${k}-${widths[k % widths.length]}`}
          className="ed-bar"
          style={{ width: widths[k % widths.length], height }}
        />
      ))}
    </div>
  );
}

/**
 * Crossed media placeholder — a bordered box with the diagonal "X" and an
 * optional centered caption. Height is fixed by the caller to reserve layout
 * space (avoids CLS).
 */
export function MediaPlaceholder({
  height,
  label,
  radiusIndex = 0,
  style,
}: {
  height: number;
  label?: string;
  radiusIndex?: number;
  style?: CSSProperties;
}) {
  return (
    <div className={`ed-img ${radiusClass(radiusIndex)}`} style={{ width: "100%", height, ...style }}>
      {label ? <span className="ed-img-label">{label}</span> : null}
    </div>
  );
}

/** Shared SVG stroke style for the small editorial icons. */
const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Off-duty pursuit icons, keyed by `OffDutyIconName` — crisp Lucide glyphs. */
const OFF_DUTY_ICONS: Record<OffDutyIconName, ComponentType<LucideProps>> = {
  telescope: Telescope,
  music: Music4,
  game: Gamepad2,
  trophy: Trophy,
};

/** Link / contact icons, keyed by `LinkIconName`. */
const LINK_PATHS: Record<LinkIconName, ReactNode> = {
  mail: (
    <g {...STROKE}>
      <rect x="3" y="5" width="16" height="12" rx="2" />
      <path d="M3 7l8 5 8-5" />
    </g>
  ),
  link: (
    <g {...STROKE}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="12" y="12" width="6" height="6" rx="1.5" />
    </g>
  ),
  git: (
    <g {...STROKE}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="15" cy="9" r="2" />
      <path d="M6 8v6M15 11v1a3 3 0 01-3 3H8" />
    </g>
  ),
  doc: (
    <g {...STROKE}>
      <path d="M6 3h7l4 4v12H6z" />
      <path d="M13 3v4h4M9 12h6M9 15h6" />
    </g>
  ),
};

/** Renders an off-duty pursuit icon. */
export function OffDutyIcon({ name, size = 18 }: { name: OffDutyIconName; size?: number }) {
  const Icon = OFF_DUTY_ICONS[name];
  return (
    <Icon width={size} height={size} strokeWidth={1.6} aria-hidden="true" style={{ flex: "0 0 auto" }} />
  );
}

/** Renders a link / contact icon. */
export function LinkIcon({ name, size = 14 }: { name: LinkIconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true" style={{ flex: "0 0 auto" }}>
      {LINK_PATHS[name]}
    </svg>
  );
}
