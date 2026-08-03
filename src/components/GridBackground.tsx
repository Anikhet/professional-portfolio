import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function GridBackground() {
  return (
    <>
      <InteractiveGridPattern
        width={36}
        height={36}
        squares={[60, 40]}
        className={cn("fixed inset-0 h-full w-full overflow-hidden border-none")}
        squaresClassName="stroke-neutral-200"
      />
      <div className="vignette pointer-events-none fixed inset-0" />
    </>
  );
}
