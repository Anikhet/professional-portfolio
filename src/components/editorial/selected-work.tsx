/**
 * "SELECTED WORK" band — three projects laid out as front-page stories, each
 * with a cover image, a clickable headline, the real description dek, and tag
 * chips.
 *
 * Each cover sits in a fixed-height box so images reserve their space and
 * don't shift the band as they load.
 */
import Image from "next/image";
import type { WorkStory } from "@/types/editorial";
import { Chip, MediaPlaceholder } from "@/components/editorial/primitives";

/** The project headline — a clickable external link with "↗" when a URL exists. */
function WorkHeadline({ name, url }: { name: string; url?: string }) {
  const headingStyle = { fontWeight: 700, fontSize: "var(--ed-fs-title)", margin: "8px 0 5px", lineHeight: 1.1 } as const;
  if (!url) {
    return (
      <h3 className="ed-serif" style={headingStyle}>
        {name}
      </h3>
    );
  }
  return (
    <h3 className="ed-serif" style={headingStyle}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ed-job-link"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        {name}
        <span aria-hidden="true" style={{ fontSize: "var(--ed-fs-meta)", marginLeft: 4, opacity: 0.6 }}>
          ↗
        </span>
      </a>
    </h3>
  );
}

/** One project story card — cover, headline, dek, and tag chips. */
function WorkStoryCard({ story }: { story: WorkStory }) {
  return (
    <>
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

      <WorkHeadline name={story.name} url={story.url} />

      <p className="ed-body" style={{ fontSize: "var(--ed-fs-role)", lineHeight: 1.45, margin: "0 0 8px" }}>
        {story.blurb}
      </p>

      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {story.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </>
  );
}

/** The double-rule small-caps heading above a work layout. */
function WorkHeading({ children }: { children: string }) {
  return (
    <div
      className="ed-meta"
      style={{
        borderTop: "3px double var(--ed-ink)",
        paddingTop: 10,
        marginBottom: 16,
        fontSize: "var(--ed-fs-cap)",
        letterSpacing: "3px",
      }}
    >
      {children}
    </div>
  );
}

/**
 * SELECTED WORK. `band` (default) is the full-width horizontal three-column
 * layout; `grid` is a responsive card grid for the dedicated /work page.
 */
export function SelectedWork({
  work,
  variant = "band",
  heading = "SELECTED WORK",
}: {
  work: WorkStory[];
  variant?: "band" | "grid";
  heading?: string;
}) {
  if (variant === "grid") {
    return (
      <div>
        <WorkHeading>{heading}</WorkHeading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "28px 24px",
          }}
        >
          {work.map((story) => (
            <article key={story.name}>
              <WorkStoryCard story={story} />
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <WorkHeading>{`${heading} ——————————————————————————`}</WorkHeading>

      <div style={{ display: "flex", gap: 18 }}>
        {work.map((story, i) => (
          <article
            key={story.name}
            style={{
              flex: 1,
              borderLeft: i ? "1px solid var(--ed-line)" : "none",
              paddingLeft: i ? 18 : 0,
            }}
          >
            <WorkStoryCard story={story} />
          </article>
        ))}
      </div>
    </>
  );
}
