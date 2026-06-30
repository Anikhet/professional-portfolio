/**
 * /work page body — the full project catalog laid out as a responsive grid of
 * front-page story cards. Rendered inside the shared editorial shell.
 */
import type { EditorialContent } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";
import { SelectedWork } from "@/components/editorial/selected-work";

export function WorkPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, allWork } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ marginTop: 28 }}>
        <SelectedWork work={allWork} variant="grid" heading="SELECTED WORK" />
      </div>
    </EditorialShell>
  );
}
