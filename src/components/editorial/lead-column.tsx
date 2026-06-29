/**
 * "THE LEAD" column — the front-page lede: portrait, body copy, and the
 * handwritten accent pull-quote.
 *
 * The portrait uses next/image with a fixed aspect box so it reserves layout
 * space and never shifts as it loads. Body copy is the real bio, set in
 * justified newspaper columns so it reads like a front-page lede.
 */
import Image from "next/image";
import type { Lead } from "@/types/editorial";
import { EditorialColumn } from "@/components/editorial/editorial-column";
import { MediaPlaceholder } from "@/components/editorial/primitives";

export function LeadColumn({ portrait, body, micro }: Lead) {
  return (
    <EditorialColumn
      title="THE LEAD"
      style={{ flex: 1.3, borderRight: "1px solid rgba(43,38,34,.25)", paddingRight: 22 }}
    >
      {/* Portrait — fixed-height box; image cover-fills it (no CLS).
          Falls back to the labeled crossed placeholder when no asset exists. */}
      {portrait ? (
        <div
          className="ed-radius-1"
          style={{
            position: "relative",
            width: "100%",
            height: 220,
            marginBottom: 12,
            overflow: "hidden",
            border: "1.5px solid rgba(44,39,34,.5)",
            background: "var(--ed-paper2)",
          }}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 420px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      ) : (
        <MediaPlaceholder height={220} label="portrait" radiusIndex={1} style={{ marginBottom: 12 }} />
      )}

      {/* Real bio — justified newspaper body, first line dropped-in. */}
      <div className="ed-body" style={{ fontSize: 13.5, lineHeight: 1.5, textAlign: "justify" }}>
        {body.map((para, i) => (
          <p key={para.slice(0, 24)} style={{ margin: i ? "8px 0 0" : 0 }}>
            {para}
          </p>
        ))}
      </div>

      <div className="ed-hand" style={{ marginTop: 12, fontSize: 15, color: "var(--ed-accent)" }}>
        “{micro}”
      </div>
    </EditorialColumn>
  );
}
