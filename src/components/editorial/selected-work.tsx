/**
 * "SELECTED WORK" band — three projects laid out as front-page stories, each
 * with a real cover image, headline, placeholder dek, and tag chips.
 *
 * Each cover sits in a fixed 66px-tall box so images reserve their space and
 * don't shift the band as they load.
 */
import Image from "next/image";
import type { WorkStory } from "@/types/editorial";
import { Chip, MediaPlaceholder, TextBars } from "@/components/editorial/primitives";

export function SelectedWork({ work }: { work: WorkStory[] }) {
  return (
    <>
      <div
        className="ed-meta"
        style={{
          borderTop: "3px double var(--ed-ink)",
          marginTop: 22,
          paddingTop: 10,
          marginBottom: 12,
          fontSize: 12,
          letterSpacing: "3px",
        }}
      >
        SELECTED WORK ——————————————————————————
      </div>

      <div style={{ display: "flex", gap: 18 }}>
        {work.map((story, i) => (
          <article
            key={story.name}
            style={{
              flex: 1,
              borderLeft: i ? "1px solid rgba(43,38,34,.25)" : "none",
              paddingLeft: i ? 18 : 0,
            }}
          >
            {story.image ? (
              <div
                className="ed-img ed-radius-0"
                style={{ position: "relative", width: "100%", height: 66, overflow: "hidden" }}
              >
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  sizes="(max-width: 1024px) 30vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <MediaPlaceholder height={66} radiusIndex={0} />
            )}

            <h3
              className="ed-serif"
              style={{ fontWeight: 700, fontSize: 16, margin: "8px 0 5px", lineHeight: 1.1 }}
            >
              {story.name}
            </h3>

            <TextBars count={2} widths={["100%", "80%"]} height={7} gap={6} />

            <div style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}>
              {story.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
