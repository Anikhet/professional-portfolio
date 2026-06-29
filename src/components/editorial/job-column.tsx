/** "ON THE JOB" column — work history followed by a SCHOOLING sub-section. */
import type { JobEntry, SchoolEntry } from "@/types/editorial";
import { EditorialColumn, SectionRule } from "@/components/editorial/editorial-column";

/**
 * The company name — a clickable external link with an "↗" affordance when the
 * role has a public URL, otherwise plain bold text.
 */
function CompanyName({ company, url }: { company: string; url?: string }) {
  if (!url) return <div style={{ fontWeight: 700, fontSize: 16 }}>{company}</div>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="ed-job-link"
      style={{ fontWeight: 700, fontSize: 16, color: "inherit", textDecoration: "none" }}
    >
      {company}
      <span aria-hidden="true" style={{ fontSize: 11, marginLeft: 4, opacity: 0.6 }}>
        ↗
      </span>
    </a>
  );
}

export function JobColumn({ jobs, schooling }: { jobs: JobEntry[]; schooling: SchoolEntry[] }) {
  return (
    <EditorialColumn title="ON THE JOB">
      {jobs.map((job) => (
        <div key={`${job.company}-${job.when}`} style={{ marginBottom: 16 }}>
          <CompanyName company={job.company} url={job.url} />
          <div style={{ fontSize: 13, opacity: 0.8 }}>{job.role}</div>
          <div className="ed-meta" style={{ fontSize: 10.5, marginTop: 3 }}>
            {job.when}
          </div>
        </div>
      ))}

      <SectionRule style={{ paddingBottom: 6, margin: "8px 0 12px" }}>SCHOOLING</SectionRule>

      {schooling.map((entry) => (
        <div key={entry.school} style={{ marginBottom: 11 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{entry.school}</div>
          <div style={{ fontSize: 12, opacity: 0.8 }}>{entry.degree}</div>
        </div>
      ))}
    </EditorialColumn>
  );
}
