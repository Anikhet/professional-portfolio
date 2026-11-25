"use client";

import { Children, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** Renders the first `initial` children; the rest unfold behind a "Show all N" pill. */
export default function ShowMore({ initial, children }: { initial: number; children: ReactNode }) {
  const items = Children.toArray(children);
  const [open, setOpen] = useState(false);
  const hidden = items.length - initial;

  return (
    <>
      <div className="space-y-6">{open ? items : items.slice(0, initial)}</div>
      {hidden > 0 && (
        <div className="relative mt-6 flex justify-center">
          {!open && (
            <div className="pointer-events-none absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg)] to-transparent" />
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2 text-sm text-[var(--fg)] transition-colors hover:bg-[var(--hover)]"
          >
            {open ? "Show less" : `Show all ${items.length}`}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </>
  );
}
