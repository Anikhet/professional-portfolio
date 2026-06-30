/**
 * The portrait column — just the photo, no heading or rule above it. (The bio
 * and its heading live in the middle column.)
 *
 * The portrait uses next/image with a fixed aspect box so it reserves layout
 * space and never shifts as it loads.
 */
import Image from "next/image";
import type { Lead } from "@/types/editorial";
import { MediaPlaceholder } from "@/components/editorial/primitives";

export function LeadColumn({ portrait }: Pick<Lead, "portrait">) {
  return (
    <div style={{ flex: 1.3, minWidth: 0, borderRight: "1px solid var(--ed-line)", paddingRight: 22 }}>
      {/* Portrait — fixed-height box; image cover-fills it (no CLS).
          Falls back to the labeled crossed placeholder when no asset exists. */}
      {portrait ? (
        <div
          className="ed-radius-1"
          style={{
            position: "relative",
            width: "100%",
            // Portrait-friendly box (4:5) so a tall photo fits without
            // clipping the subject down to a sliver of sky.
            aspectRatio: "4 / 5",
            marginBottom: 12,
            overflow: "hidden",
            border: "1.5px solid var(--ed-line-strong)",
            background: "var(--ed-paper2)",
          }}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 420px"
            style={{ objectFit: "cover", objectPosition: "center 65%" }}
          />
        </div>
      ) : (
        <MediaPlaceholder height={300} label="portrait" radiusIndex={1} style={{ marginBottom: 12 }} />
      )}
    </div>
  );
}
