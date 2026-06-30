/**
 * The nameplate ("Anikhet Mulky") with its spaced-caps strapline, left-aligned
 * so it can share the top header row with the dateline (location + toggle).
 */
import type { Masthead as MastheadModel } from "@/types/editorial";

export function Masthead({ name, strapline }: MastheadModel) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
      <h1
        className="ed-serif"
        style={{ fontSize: "var(--ed-fs-name)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.75px", margin: 0 }}
      >
        {name}
      </h1>
      <div className="ed-meta" style={{ fontSize: "var(--ed-fs-meta)" }}>
        {strapline}
      </div>
    </div>
  );
}
