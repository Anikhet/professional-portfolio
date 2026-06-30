/**
 * Shared editorial page shell — the full-bleed grid with the sticky left nav
 * rail and the masthead, into which each page slots its own body.
 *
 * Every page (home, work, off duty, frames) renders the same chrome (rail +
 * dateline + nameplate) and supplies its `children` as the main content, so
 * the navigation and identity stay consistent across routes.
 */
import type { ReactNode } from "react";
import type { Dateline as DatelineModel, Masthead as MastheadModel, NavItem } from "@/types/editorial";
import { NavRail } from "@/components/editorial/nav-rail";
import { Dateline } from "@/components/editorial/dateline";
import { Masthead } from "@/components/editorial/masthead";

export function EditorialShell({
  nav,
  dateline,
  masthead,
  children,
}: {
  nav: NavItem[];
  dateline: DatelineModel;
  masthead: MastheadModel;
  children: ReactNode;
}) {
  return (
    <main
      id="top"
      className="editorial"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(150px, 200px) 1fr",
        gap: 40,
        padding: "30px 44px 56px",
        alignItems: "start",
      }}
    >
      <NavRail nav={nav} />

      <div style={{ minWidth: 0 }}>
        {/* Single header row: nameplate + strapline left, location + toggle right. */}
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Masthead {...masthead} />
          <Dateline {...dateline} />
        </header>
        <div
          style={{
            borderTop: "1px solid var(--ed-ink)",
            borderBottom: "3px double var(--ed-ink)",
            height: 5,
            margin: "12px 0 20px",
          }}
        />
        {children}
      </div>
    </main>
  );
}
