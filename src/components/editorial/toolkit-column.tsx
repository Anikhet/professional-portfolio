/**
 * "THE TOOLKIT" column — the tech stack grouped into labeled sections (AI &
 * Agents, Languages, Frontend, etc.), followed by a row of sketch-button
 * contact links. (OFF DUTY lives in the sidebar.)
 */
import type { CSSProperties } from "react";
import type { LinkEntry, Stack } from "@/types/editorial";
import { EditorialColumn } from "@/components/editorial/editorial-column";
import { Chip, LinkIcon, radiusClass } from "@/components/editorial/primitives";

/** A small-caps section label above a chip group. */
function TierLabel({ children, style }: { children: string; style?: CSSProperties }) {
  return (
    <div
      className="ed-meta"
      style={{ fontSize: "var(--ed-fs-meta)", letterSpacing: "1px", marginBottom: 8, opacity: 0.75, ...style }}
    >
      {children}
    </div>
  );
}

/** A wrapping row of chips for one stack section; `muted` dims the row. */
function ChipGroup({ skills, muted = false }: { skills: string[]; muted?: boolean }) {
  return (
    <div
      className={`ed-toolkit-chips${muted ? " ed-chips-muted" : ""}`}
      style={{ display: "flex", flexWrap: "wrap", gap: 5 }}
    >
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
      {stack.map((section, i) => (
        <div key={section.label}>
          <TierLabel style={i ? { marginTop: 12 } : undefined}>{section.label}</TierLabel>
          <ChipGroup skills={section.skills} muted={section.muted} />
        </div>
      ))}

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
