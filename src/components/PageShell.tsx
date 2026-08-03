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

      <div className="relative z-10 mx-auto flex max-w-6xl gap-12 px-6 py-16 md:py-24">
        <Sidebar />
        <main className={`flex-1 ${maxWidth}`}>{children}</main>
      </div>
    </div>
  );
}
