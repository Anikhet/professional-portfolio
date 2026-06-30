/** The top dateline row — the origin line with the theme toggle on its right. */
import type { Dateline as DatelineModel } from "@/types/editorial";
import { ThemeToggle } from "@/components/editorial/theme-toggle";

export function Dateline({ origin }: DatelineModel) {
  return (
    <div
      className="ed-meta"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 14,
        padding: "6px 0",
        fontSize: "var(--ed-fs-cap)",
      }}
    >
      <span>{origin}</span>
      <ThemeToggle />
    </div>
  );
}
