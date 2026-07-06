/**
 * Client-side FRAMES masonry with a lightbox. The grid is a borderless masonry
 * with varied row spans; clicking a tile opens the full image in the shared
 * `Lightbox` overlay so cover-cropped thumbnails can be seen whole.
 *
 * Kept as a client component (it owns the open-index state) and fed `pictures`
 * as a prop from the server-rendered FramesPage — no data fetching happens here.
 */
"use client";

import Image from "next/image";
import { useState } from "react";
import type { Picture } from "@/types/editorial";
import { Lightbox } from "@/components/editorial/lightbox";

export function FramesGallery({ pictures }: { pictures: Picture[] }) {
  // Track the open picture by index; `null` means the lightbox is closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = pictures.map((p) => ({ src: p.src, alt: p.alt, caption: p.caption }));

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gridAutoRows: 150,
          gap: 14,
        }}
      >
        {pictures.map((pic, index) => (
          <figure
            key={pic.src}
            className="ed-radius-2 ed-frame"
            style={{
              position: "relative",
              overflow: "hidden",
              gridRow: `span ${pic.span}`,
              background: "var(--ed-paper2)",
              margin: 0,
              cursor: "zoom-in",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${pic.caption}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                padding: 0,
                border: "none",
                background: "transparent",
                cursor: "zoom-in",
              }}
            >
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 300px"
                style={{ objectFit: "cover" }}
              />
            </button>
            <figcaption className="ed-frame-caption mono">{pic.caption}</figcaption>
          </figure>
        ))}
      </div>

      <Lightbox items={items} activeIndex={activeIndex} onChange={setActiveIndex} />
    </>
  );
}
