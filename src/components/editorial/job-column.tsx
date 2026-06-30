/** Middle column — BIO at the top, then ON THE JOB and SCHOOLING. */
import type { JobEntry, SchoolEntry } from "@/types/editorial";
import { EditorialColumn, SectionRule } from "@/components/editorial/editorial-column";

/** A role is "current" when its date range runs to the present. */
function isCurrentRole(when: string): boolean {
  return /present/i.test(when);
}

/** Small accent pill flagging the present role. */
function CurrentBadge() {
  return (
    <span
      className="ed-meta"
      style={{
        marginLeft: 8,
        padding: "1px 7px",
        fontSize: "var(--ed-fs-badge)",
        letterSpacing: "1.5px",
        background: "var(--ed-accent)",
        color: "#fff",
        borderRadius: 40,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
      }}
    >
      Current
    </span>
  );
}

/**
 * The company name — a clickable external link with an "↗" affordance when the
 * role has a public URL, otherwise plain bold text. A "Current" badge is shown
 * for the present role.
 */
function CompanyName({ company, url, current }: { company: string; url?: string; current: boolean }) {
  const inner = (
    <>
      {company}
      {url ? (
        <span aria-hidden="true" style={{ fontSize: "var(--ed-fs-cap)", marginLeft: 4, opacity: 0.6 }}>
          ↗
        </span>
      ) : null}
    </>
  );

  return (
    <div style={{ fontWeight: 400, fontSize: "var(--ed-fs-title)", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="ed-job-link"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {inner}
        </a>
      ) : (
        <span>{inner}</span>
      )}
      {current ? <CurrentBadge /> : null}
    </div>
  );
}

export function JobColumn({
  jobs,
  schooling,
  bio = [],
}: {
  jobs: JobEntry[];
  schooling: SchoolEntry[];
  /** Bio paragraphs rendered above the work history. */
  bio?: string[];
}) {
  return (
    <EditorialColumn title="BIO">
      {bio.length > 0 && (
        <div
          className="ed-body"
          style={{ fontSize: "var(--ed-fs-body)", lineHeight: 1.5, marginBottom: 18, opacity: 0.85 }}
        >
          {bio.map((para, i) => (
            <p key={para.slice(0, 24)} style={{ margin: i ? "8px 0 0" : 0 }}>
              {para}
            </p>
          ))}
        </div>
      )}

      <SectionRule style={{ paddingBottom: 6, margin: "8px 0 14px" }}>ON THE JOB</SectionRule>

      {jobs.map((job) => (
        <div key={`${job.company}-${job.when}`} style={{ marginBottom: 16 }}>
          <CompanyName company={job.company} url={job.url} current={isCurrentRole(job.when)} />
          <div style={{ fontSize: "var(--ed-fs-role)", opacity: 0.8 }}>{job.role}</div>
          <div className="ed-meta" style={{ fontSize: "var(--ed-fs-meta)", marginTop: 3 }}>
            {job.when}
          </div>
        </div>
      ))}

      <SectionRule style={{ paddingBottom: 6, margin: "8px 0 12px" }}>SCHOOLING</SectionRule>

      {schooling.map((entry) => (
        <div key={entry.school} style={{ marginBottom: 11 }}>
          <div style={{ fontWeight: 400, fontSize: "var(--ed-fs-role)" }}>{entry.school}</div>
          <div style={{ fontSize: "var(--ed-fs-cap)", opacity: 0.8 }}>{entry.degree}</div>
        </div>
      ))}
    </EditorialColumn>
  );
}
