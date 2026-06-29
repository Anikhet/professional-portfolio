/** The centered nameplate ("Anikhet Mulky") with its spaced-caps strapline. */
import type { Masthead as MastheadModel } from "@/types/editorial";

export function Masthead({ name, strapline }: MastheadModel) {
  return (
    <>
      <div style={{ textAlign: "center", margin: "16px 0 6px", position: "relative" }}>
        <h1
          className="ed-serif"
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-1px",
            margin: 0,
          }}
        >
          {name}
        </h1>
        <div className="ed-meta" style={{ fontSize: 13, marginTop: 10, letterSpacing: "5px" }}>
          {strapline}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--ed-ink)",
          borderBottom: "3px double var(--ed-ink)",
          height: 5,
          margin: "10px 0 20px",
        }}
      />
    </>
  );
}
