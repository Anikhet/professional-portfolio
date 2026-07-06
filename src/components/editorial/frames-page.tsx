/**
 * /frames page body — the picture masonry given full width. Rendered inside the
 * shared editorial shell. Tiles are borderless with varied row spans.
 */
import type { EditorialContent } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";
import { FramesGallery } from "@/components/editorial/frames-gallery";

export function FramesPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, pictures } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ marginTop: 28 }}>
        <div
          className="ed-heading"
          style={{ marginBottom: 18, letterSpacing: "1px" }}
        >
          FRAMES
        </div>
        <FramesGallery pictures={pictures} />
      </div>
    </EditorialShell>
  );
}
