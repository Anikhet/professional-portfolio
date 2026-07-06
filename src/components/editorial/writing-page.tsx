/**
 * /writing page body — a list of published articles, each linking out to the
 * full piece on Medium, with a link to the full profile at the bottom.
 * Rendered inside the shared editorial shell.
 */
import type { EditorialContent, WritingEntry } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";
import { Chip } from "@/components/editorial/primitives";

/** A double-rule small-caps section heading. */
function Heading({ children }: { children: string }) {
  return (
    <div
      className="ed-heading"
      style={{ borderTop: "3px double var(--ed-ink)", paddingTop: 10, marginBottom: 20, letterSpacing: "1px" }}
    >
      {children}
    </div>
  );
}

/** One article: a linked headline, a dek, and topic chips. */
function ArticleCard({ entry }: { entry: WritingEntry }) {
  return (
    <article>
      <h3 className="ed-serif" style={{ fontWeight: 700, fontSize: "var(--ed-fs-title)", margin: "0 0 6px", lineHeight: 1.2 }}>
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ed-job-link"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {entry.title}
          <span aria-hidden="true" style={{ fontSize: "var(--ed-fs-meta)", marginLeft: 5, opacity: 0.6 }}>
            ↗
          </span>
        </a>
      </h3>
      <p className="ed-body" style={{ fontSize: "var(--ed-fs-role)", lineHeight: 1.45, margin: "0 0 8px", opacity: 0.85 }}>
        {entry.blurb}
      </p>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {entry.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}

export function WritingPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, writing, writingProfileUrl } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ marginTop: 28 }}>
        <Heading>WRITING</Heading>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
          {writing.map((entry) => (
            <ArticleCard key={entry.url} entry={entry} />
          ))}
        </div>

        <a
          href={writingProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ed-job-link ed-meta"
          style={{
            display: "inline-block",
            marginTop: 28,
            fontSize: "var(--ed-fs-meta)",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          All posts on Medium ↗
        </a>
      </div>
    </EditorialShell>
  );
}
