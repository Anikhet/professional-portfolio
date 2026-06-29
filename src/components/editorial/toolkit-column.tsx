/**
 * "THE TOOLKIT" column — the tech-stack chips (split into a "CORE" tier of the
 * current daily stack and a "FAMILIAR" tier of brushing-up languages), an OFF
 * DUTY list, and a row of sketch-button contact links.
 */
import type { CSSProperties } from "react";
import type { LinkEntry, OffDutyEntry, Stack } from "@/types/editorial";
import { EditorialColumn, SectionRule } from "@/components/editorial/editorial-column";
import { Chip, LinkIcon, OffDutyIcon, radiusClass } from "@/components/editorial/primitives";

/** A small-caps tier label (CORE / FAMILIAR) above a chip group. */
function TierLabel({ children, style }: { children: string; style?: CSSProperties }) {
  return (
    <div
      className="ed-meta"
      style={{ fontSize: 10, letterSpacing: "2px", marginBottom: 8, opacity: 0.75, ...style }}
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
  offDuty,
  links,
}: {
  stack: Stack;
  offDuty: OffDutyEntry[];
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

      <SectionRule style={{ margin: "18px 0 12px" }}>OFF DUTY</SectionRule>
      {offDuty.map((entry) => (
        <div
          key={entry.label}
          style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9, fontSize: 14 }}
        >
          <OffDutyIcon name={entry.icon} /> {entry.label}
        </div>
      ))}

      <div style={{ display: "flex", gap: 7, marginTop: 16, flexWrap: "wrap" }}>
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`ed-sk ed-btn ${radiusClass(i)}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <LinkIcon name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </EditorialColumn>
  );
}
