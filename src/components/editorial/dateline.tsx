/** The top dateline row — publication and origin framed by newspaper rules. */
import type { Dateline as DatelineModel } from "@/types/editorial";

export function Dateline({ publication, origin }: DatelineModel) {
  return (
    <div
      className="ed-meta"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "3px double var(--ed-ink)",
        borderBottom: "1px solid var(--ed-ink)",
        padding: "6px 0",
        fontSize: 11,
      }}
    >
      <span>{publication}</span>
      <span>{origin}</span>
    </div>
  );
}
