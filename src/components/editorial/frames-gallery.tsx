/**
 * Client-side FRAMES masonry with a lightbox. The grid is a borderless masonry
 * with varied row spans; clicking a tile opens the full image in the shared
 * `Lightbox` overlay so cover-cropped thumbnails can be seen whole.
 *
 * Kept as a client component (it owns the open-index state) and fed `pictures`
 * as a prop from the server-rendered FramesPage; no data fetching happens here.
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] auto-rows-[130px] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:auto-rows-[150px] sm:gap-3.5">
        {pictures.map((pic, index) => (
          <figure
            key={pic.src}
            className="relative m-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100"
            style={{ gridRow: `span ${pic.span}`, cursor: "zoom-in" }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${pic.caption}`}
              className="absolute inset-0 h-full w-full border-none bg-transparent p-0"
              style={{ cursor: "zoom-in" }}
            >
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 300px"
                style={{ objectFit: "cover" }}
              />
            </button>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2 pt-4 font-mono text-[10px] tracking-wide text-neutral-100">
              {pic.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <Lightbox items={items} activeIndex={activeIndex} onChange={setActiveIndex} />
    </>
  );
}
