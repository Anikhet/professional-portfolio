/**
 * /off-duty page body — hobbies (with icons) plus a "now playing" games list.
 * Rendered inside the shared editorial shell.
 */
import type { EditorialContent } from "@/types/editorial";
import { EditorialShell } from "@/components/editorial/editorial-shell";
import { OffDutyIcon } from "@/components/editorial/primitives";
import { GamesGrid } from "@/components/editorial/games-grid";

/** A double-rule small-caps section heading. */
function Heading({ children }: { children: string }) {
  return (
    <div
      className="ed-meta"
      style={{ borderTop: "3px double var(--ed-ink)", paddingTop: 10, marginBottom: 18, fontSize: "var(--ed-fs-cap)", letterSpacing: "3px" }}
    >
      {children}
    </div>
  );
}

export function OffDutyPage({ content }: { content: EditorialContent }) {
  const { nav, dateline, masthead, offDuty, games } = content;

  return (
    <EditorialShell nav={nav} dateline={dateline} masthead={masthead}>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 40 }}>
        <section>
          <Heading>OFF DUTY</Heading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 36px" }}>
            {offDuty.map((entry) => (
              <div key={entry.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--ed-fs-lead)" }}>
                <OffDutyIcon name={entry.icon} size={22} /> {entry.label}
              </div>
            ))}
          </div>
        </section>

        <section>
          <Heading>GAMES I LIKE</Heading>
          <GamesGrid games={games} />
        </section>
      </div>
    </EditorialShell>
  );
}
