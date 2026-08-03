import type { ReactNode } from "react";
import GridBackground from "@/components/GridBackground";
import Sidebar from "@/components/Sidebar";

/** Shared chrome for every route: interactive grid background + sticky sidebar. */
export default function PageShell({
  children,
  maxWidth = "max-w-2xl",
}: {
  children: ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <GridBackground />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-8 pt-3 sm:px-6 md:flex-row md:gap-12 md:py-24">
        <Sidebar />
        <main className={`min-w-0 flex-1 ${maxWidth}`}>{children}</main>
      </div>
    </div>
  );
}
