/**
 * Client-side FRAMES masonry with a lightbox. The grid is the same borderless
 * masonry as before; clicking a tile opens the full image in a fixed overlay so
 * cover-cropped thumbnails can be seen whole. Inside the lightbox you can surf
 * between pictures with the on-screen ‹ / › arrows or the Left/Right arrow keys
 * (navigation wraps around). The overlay closes on backdrop click, the close
 * button, or Escape.
 *
 * Kept as a client component (it owns interaction state) and fed `pictures` as a
 * prop from the server-rendered FramesPage — no data fetching happens here.
 */
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Picture } from "@/types/editorial";

export function FramesGallery({ pictures }: { pictures: Picture[] }) {
  // Track the open picture by index so prev/next is a simple modular step.
  // `null` means the lightbox is closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  // Step by ±1 with wrap-around. No-op when nothing is open.
  const step = useCallback(
    (delta: number) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        const count = pictures.length;
        return (current + delta + count) % count;
      });
    },
    [pictures.length]
  );

  const active = activeIndex === null ? null : pictures[activeIndex];

  // Keyboard: Escape closes, Left/Right surf. Also lock body scroll while open.
  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, close, step]);

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

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(10, 10, 10, 0.88)",
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="mono"
            style={{
              position: "absolute",
              top: 16,
              right: 20,
              border: "none",
              background: "transparent",
              color: "var(--ed-paper)",
              fontSize: 28,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          {pictures.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous picture"
              className="mono"
              style={{ ...arrowStyle, left: 16 }}
            >
              ‹
            </button>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              margin: 0,
              maxWidth: "min(92vw, 1100px)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              // key forces a fresh element per picture so the new image paints
              // instead of cross-fading from the previous one's cache box.
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={1100}
              height={825}
              sizes="92vw"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "min(92vw, 1100px)",
                maxHeight: "82vh",
                objectFit: "contain",
              }}
            />
            <figcaption className="mono" style={{ color: "var(--ed-paper)", fontSize: "var(--ed-fs-cap)", letterSpacing: "1px" }}>
              {(activeIndex ?? 0) + 1} / {pictures.length} · {active.caption}
            </figcaption>
          </figure>

          {pictures.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next picture"
              className="mono"
              style={{ ...arrowStyle, right: 16 }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

/** Shared look for the prev/next arrow buttons; `left`/`right` set per side. */
const arrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "transparent",
  color: "var(--ed-paper)",
  fontSize: 48,
  lineHeight: 1,
  padding: "8px 12px",
  cursor: "pointer",
};
