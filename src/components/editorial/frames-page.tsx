/**
 * /frames page body — the picture masonry given full width. Rendered inside the
 * shared editorial shell. Tiles are borderless with varied row spans.
 */
import Image from "next/image";
import type { EditorialContent } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";

export function FramesPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, pictures } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ marginTop: 28 }}>
        <div
          className="ed-meta"
          style={{ borderTop: "3px double var(--ed-ink)", paddingTop: 10, marginBottom: 18, fontSize: "var(--ed-fs-cap)", letterSpacing: "3px" }}
        >
          FRAMES
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gridAutoRows: 150,
            gap: 14,
          }}
        >
          {pictures.map((pic) => (
            <figure
              key={pic.src}
              className="ed-radius-2 ed-frame"
              style={{
                position: "relative",
                overflow: "hidden",
                gridRow: `span ${pic.span}`,
                background: "var(--ed-paper2)",
                margin: 0,
              }}
            >
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 300px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="ed-frame-caption mono">{pic.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </EditorialShell>
  );
}
