/**
 * Reusable full-screen image lightbox, shared by the FRAMES masonry and the
 * home-page LEAD photo grid. It owns only the *overlay*; the parent owns which
 * image is open (via `activeIndex`) and passes the flat `items` list.
 *
 * Inside the overlay you can surf with the on-screen ‹ / › arrows or the
 * Left/Right arrow keys (navigation wraps). It closes on backdrop click, the
 * close button, or Escape, and locks body scroll while open.
 */
"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

/** One openable image. `caption` is shown under the picture when present. */
export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({
  items,
  activeIndex,
  onChange,
}: {
  items: LightboxItem[];
  /** Index of the open image, or `null` when the lightbox is closed. */
  activeIndex: number | null;
  /** Called with the next index, or `null` to close. */
  onChange: (index: number | null) => void;
}) {
  const close = useCallback(() => onChange(null), [onChange]);

  // Step by ±1 with wrap-around. No-op when nothing is open.
  const step = useCallback(
    (delta: number) => {
      if (activeIndex === null) return;
      const count = items.length;
      onChange((activeIndex + delta + count) % count);
    },
    [activeIndex, items.length, onChange]
  );

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

  const active = activeIndex === null ? null : items[activeIndex];
  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.caption ?? active.alt}
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

      {items.length > 1 && (
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
          {(activeIndex ?? 0) + 1} / {items.length}
          {active.caption ? ` · ${active.caption}` : ""}
        </figcaption>
      </figure>

      {items.length > 1 && (
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
