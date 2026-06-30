/**
 * Home page body — masthead lives in the shell; this renders the three-column
 * editorial (THE LEAD portrait, ON THE JOB with the bio on top, THE TOOLKIT).
 * Work, off-duty, and frames now have their own routes, so the home page stays
 * a clean landing.
 */
import type { EditorialContent } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";
import { LeadColumn } from "@/components/editorial/lead-column";
import { JobColumn } from "@/components/editorial/job-column";
import { ToolkitColumn } from "@/components/editorial/toolkit-column";

export function EditorialFrontPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, lead, jobs, schooling, stack, links } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ display: "flex", gap: 30 }}>
        <LeadColumn {...lead} />
        <JobColumn jobs={jobs} schooling={schooling} bio={lead.body} />
        <ToolkitColumn stack={stack} links={links} />
      </div>
    </EditorialShell>
  );
}
