/**
 * The portrait column — the lead photo plus a few candid shots, all rendered
 * as equal-sized tiles in one uniform 2-column grid. (The bio and its heading
 * live in the middle column.)
 *
 * Every tile is a fixed 3:4 box so images reserve their space and never shift
 * as they load (no CLS). Clicking a tile opens the full image in the shared
 * `Lightbox`, so it owns open-index state and is a client component.
 */
"use client";

import Image from "next/image";
import { useState } from "react";
import type { EditorialImage, Lead } from "@/types/editorial";
import { MediaPlaceholder } from "@/components/editorial/primitives";
import { Lightbox } from "@/components/editorial/lightbox";

/** One equal-sized, clickable photo tile in the lead grid. */
function PhotoTile({
  photo,
  priority,
  onOpen,
}: {
  photo: EditorialImage;
  priority?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${photo.alt}`}
      className="ed-radius-1"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        padding: 0,
        border: "1.5px solid var(--ed-line-strong)",
        background: "var(--ed-paper2)",
        cursor: "zoom-in",
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 40vw, 180px"
        style={{ objectFit: "cover" }}
      />
    </button>
  );
}

export function LeadColumn({ portrait, gallery }: Pick<Lead, "portrait" | "gallery">) {
  // Lead photo first, then the candids — all the same size in the grid.
  const photos = portrait ? [portrait, ...gallery] : gallery;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ flex: 1.3, minWidth: 0, borderRight: "1px solid var(--ed-line)", paddingRight: 22 }}>
      {photos.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {photos.map((photo, i) => (
            <PhotoTile key={photo.src} photo={photo} priority={i === 0} onOpen={() => setActiveIndex(i)} />
          ))}
        </div>
      ) : (
        <MediaPlaceholder height={300} label="portrait" radiusIndex={1} />
      )}

      <Lightbox items={photos} activeIndex={activeIndex} onChange={setActiveIndex} />
    </div>
  );
}
