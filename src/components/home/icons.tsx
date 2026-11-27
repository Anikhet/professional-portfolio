/**
 * Hand-drawn monoline glyphs for the homepage (24x24, 1.5 stroke, currentColor).
 * Each one is drawn for a specific project rather than picked from an icon set.
 */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Glyph({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Personal mark: a ringed planet, after the Saturn shot from my telescope. */
export function SaturnMark(props: P) {
  return (
    <Glyph {...props}>
      <g transform="rotate(-22 12 12)">
        <ellipse cx="12" cy="12" rx="10.5" ry="3.4" />
        <circle cx="12" cy="12" r="5.6" fill="var(--bg)" />
        <path d="M1.5 12a10.5 3.4 0 0 0 21 0" />
      </g>
    </Glyph>
  );
}

/** Snoozy: a crescent moon with a voice wave (bedtime + cloned voice). */
export function SnoozyGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M13 4.2A7.6 7.6 0 1 0 19.4 15a6 6 0 0 1-6.4-10.8z" />
      <path d="M18.2 5.2v3.6M20.6 4v6M15.8 6.2v1.6" />
    </Glyph>
  );
}

/** AstroAgent: a phone aimed at a star, with the line of sight. */
export function AstroGlyph(props: P) {
  return (
    <Glyph {...props}>
      <rect x="3.5" y="10" width="7.5" height="11.5" rx="1.6" transform="rotate(-18 7.25 15.75)" />
      <path d="M9.5 9 14 6" strokeDasharray="1.2 2" />
      <path d="M18 2.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" />
    </Glyph>
  );
}

/** DevInterview.AI: a camera frame with someone in it. */
export function InterviewGlyph(props: P) {
  return (
    <Glyph {...props}>
      <rect x="2.5" y="5" width="14" height="13" rx="2.2" />
      <circle cx="9.5" cy="10" r="2.2" />
      <path d="M5.8 16.2a3.9 3.9 0 0 1 7.4 0" />
      <path d="M16.5 9.5l5-2.5v9l-5-2.5" />
    </Glyph>
  );
}

/** Drip: a hanger with a single drop. */
export function DripGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M10.2 5.2a1.9 1.9 0 1 1 1.8 2.4v1.4" />
      <path d="M12 9 3 15h18z" />
      <path d="M12 17.6s-1.7 1.9-1.7 3a1.7 1.7 0 0 0 3.4 0c0-1.1-1.7-3-1.7-3z" />
    </Glyph>
  );
}

/** Racing RL: a car on a stadium track, casting its sensor rays ahead. */
export function RacingGlyph(props: P) {
  return (
    <Glyph {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="7" />
      <circle cx="8.5" cy="19" r="1.7" fill="currentColor" stroke="none" />
      <path d="M10.6 17.6l2.6-2.4M11 19h3.4M10.6 20.4" strokeDasharray="1 1.6" />
    </Glyph>
  );
}

/** Discord RAG bot: a chat bubble holding a page of notes. */
export function KnowledgeGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M4 4.5h16a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H10l-4.5 3.8V16H4a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1z" />
      <path d="M7.5 8.5h9M7.5 12h5.5" />
    </Glyph>
  );
}

/** MicroCart: three services wired into one. */
export function ServicesGlyph(props: P) {
  return (
    <Glyph {...props}>
      <rect x="2.5" y="3" width="6" height="6" rx="1.2" />
      <rect x="15.5" y="3" width="6" height="6" rx="1.2" />
      <rect x="9" y="15" width="6" height="6" rx="1.2" />
      <path d="M5.5 9v1.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9M12 12.5V15" />
    </Glyph>
  );
}

/** Scraper: a small web. */
export function WebGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path d="M12 7.5l3.9 2.25v4.5L12 16.5l-3.9-2.25v-4.5z" />
    </Glyph>
  );
}

/** Distance visualizer: two points and the arc between them. */
export function DistanceGlyph(props: P) {
  return (
    <Glyph {...props}>
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="7" r="2" />
      <path d="M6.5 16.6C8 11 12 7.6 17 7" strokeDasharray="1.2 2.2" />
    </Glyph>
  );
}

/** ROI calculator: a line that goes up. */
export function GrowthGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M3.5 3.5v17h17" />
      <path d="M7 15.5l4-4 3 3 5.5-6" />
      <path d="M16.5 8.5h3v3" />
    </Glyph>
  );
}

/** Airbnb clone: a house with an open door. */
export function HomeGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M3.5 11 12 3.8l8.5 7.2v9.5h-17z" />
      <path d="M10 20.5v-5.5h4v5.5" />
    </Glyph>
  );
}

/** Fallback: angle brackets. */
export function CodeGlyph(props: P) {
  return (
    <Glyph {...props}>
      <path d="M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5" />
    </Glyph>
  );
}

export const PROJECT_GLYPHS: Record<string, (props: P) => React.JSX.Element> = {
  Snoozy: SnoozyGlyph,
  AstroAgent: AstroGlyph,
  "DevInterview.AI": InterviewGlyph,
  Drip: DripGlyph,
  "Racing Car Reinforcement Learning": RacingGlyph,
  "Discord Knowledge Bot": KnowledgeGlyph,
  MicroCart: ServicesGlyph,
  "Apify Web Scraper": WebGlyph,
  "Distance Visualizer": DistanceGlyph,
  "ROI Calculator": GrowthGlyph,
  "AirBnb Clone": HomeGlyph,
};
