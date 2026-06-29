/**
 * Editorial Front Page (Direction A) — a magazine-masthead portfolio layout.
 *
 * Composes the dateline, nameplate, three-column body (THE LEAD / ON THE JOB /
 * THE TOOLKIT), and the SELECTED WORK band from an `EditorialContent`
 * view-model. Purely presentational: it receives the fully-mapped model and
 * renders it, so it carries no data-fetching or business logic.
 */
import type { EditorialContent } from "@/types/editorial";
import { Dateline } from "@/components/editorial/dateline";
import { Masthead } from "@/components/editorial/masthead";
import { LeadColumn } from "@/components/editorial/lead-column";
import { JobColumn } from "@/components/editorial/job-column";
import { ToolkitColumn } from "@/components/editorial/toolkit-column";
import { SelectedWork } from "@/components/editorial/selected-work";

export function EditorialFrontPage({ content }: { content: EditorialContent }) {
  const { dateline, masthead, lead, jobs, schooling, stack, offDuty, links, work } = content;

  return (
    <main style={{ minHeight: "100vh", background: "#d8d2c4", padding: "40px 20px" }}>
      <div
        className="editorial"
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "30px 40px 40px",
          boxShadow: "0 20px 60px rgba(0,0,0,.18)",
        }}
      >
        <Dateline {...dateline} />
        <Masthead {...masthead} />

        <div style={{ display: "flex", gap: 26 }}>
          <LeadColumn {...lead} />
          <JobColumn jobs={jobs} schooling={schooling} />
          <ToolkitColumn stack={stack} offDuty={offDuty} links={links} />
        </div>

        <SelectedWork work={work} />
      </div>
    </main>
  );
}
