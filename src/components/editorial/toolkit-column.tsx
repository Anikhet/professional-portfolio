/**
 * "THE TOOLKIT" column — the tech-stack chips (split into a "CORE" tier of the
 * current daily stack and a "FAMILIAR" tier of brushing-up languages) and a row
 * of sketch-button contact links. (OFF DUTY lives in the sidebar.)
 */
import type { CSSProperties } from "react";
import type { LinkEntry, Stack } from "@/types/editorial";
import { EditorialColumn } from "@/components/editorial/editorial-column";
import { Chip, LinkIcon, radiusClass } from "@/components/editorial/primitives";

/** A small-caps tier label (CORE / FAMILIAR) above a chip group. */
function TierLabel({ children, style }: { children: string; style?: CSSProperties }) {
  return (
    <div
      className="ed-meta"
      style={{ fontSize: "var(--ed-fs-meta)", letterSpacing: "2px", marginBottom: 8, opacity: 0.75, ...style }}
    >
      {children}
    </div>
  );
}

/** A wrapping row of chips for one stack tier; `muted` dims the row. */
function ChipGroup({ skills, muted = false }: { skills: string[]; muted?: boolean }) {
  return (
    <div className={muted ? "ed-chips-muted" : undefined} style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {skills.map((skill) => (
        <Chip key={skill}>{skill}</Chip>
      ))}
    </div>
  );
}

export function ToolkitColumn({
  stack,
  links,
}: {
  stack: Stack;
  links: LinkEntry[];
}) {
  return (
    <EditorialColumn title="THE TOOLKIT">
      <TierLabel>CORE</TierLabel>
      <ChipGroup skills={stack.core} />

      {stack.familiar.length > 0 && (
        <>
          <TierLabel style={{ marginTop: 16 }}>FAMILIAR</TierLabel>
          <ChipGroup skills={stack.familiar} muted />
        </>
      )}

      <div style={{ display: "flex", gap: 7, marginTop: 22, flexWrap: "wrap" }}>
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`ed-sk ed-btn ${radiusClass(i)}`}
            style={{ textDecoration: "none" }}
          >
            <LinkIcon name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </EditorialColumn>
  );
}
