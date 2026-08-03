import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function GridBackground() {
  return (
    <>
      {/* Mobile: fewer squares, lighter on low-power devices. */}
      <InteractiveGridPattern
        width={48}
        height={48}
        squares={[40, 28]}
        className={cn("fixed inset-0 h-full w-full overflow-hidden border-none sm:hidden")}
        squaresClassName="stroke-neutral-200"
      />
      {/* Desktop: original density. */}
      <InteractiveGridPattern
        width={36}
        height={36}
        squares={[60, 40]}
        className={cn("fixed inset-0 hidden h-full w-full overflow-hidden border-none sm:block")}
        squaresClassName="stroke-neutral-200"
      />
      <div className="vignette pointer-events-none fixed inset-0" />
    </>
  );
}
