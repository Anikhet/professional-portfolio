/** A titled body column with an underlined small-caps heading. */
import type { CSSProperties, ReactNode } from "react";

export function EditorialColumn({
  title,
  children,
  style,
}: {
  title: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ flex: 1, minWidth: 0, ...style }}>
      <SectionRule>{title}</SectionRule>
      {children}
    </div>
  );
}

/** A small-caps section heading with an underline rule. Reused mid-column. */
export function SectionRule({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="ed-heading"
      style={{
        borderBottom: "2px solid var(--ed-ink)",
        paddingBottom: 6,
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
