/**
 * "SELECTED WORK" band — three projects laid out as front-page stories, each
 * with a clickable headline, the real description dek, and tag chips.
 */
import type { WorkStory } from "@/types/editorial";
import { Chip } from "@/components/editorial/primitives";

/** The project headline — a clickable external link with "↗" when a URL exists. */
function WorkHeadline({ name, url }: { name: string; url?: string }) {
  const headingStyle = { fontWeight: 400, fontSize: 19, margin: "8px 0 5px", lineHeight: 1.15 } as const;
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

/** One project story card — headline, dek, and tag chips (no cover image). */
function WorkStoryCard({ story }: { story: WorkStory }) {
  return (
    <>
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

/** The small-caps section heading above a work layout. */
function WorkHeading({ children }: { children: string }) {
  return (
    <div
      className="ed-meta"
      style={{
        marginBottom: 16,
        fontSize: "var(--ed-fs-cap)",
        letterSpacing: "1px",
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
      <WorkHeading>{heading}</WorkHeading>

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
