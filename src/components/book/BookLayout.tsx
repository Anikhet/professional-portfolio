import React, { ReactNode } from "react";

export function BookLayout({ children }: { children: ReactNode }) {
  const pages = React.Children.toArray(children);

  return (
    <div className="w-full max-w-[90vw] lg:max-w-7xl aspect-[0.8] md:aspect-[1.5/1] bg-parchment-texture border-manuscript relative flex flex-col md:flex-row mx-auto">
      {/* Binder shadow */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-20 -ml-10 bg-gradient-to-r from-transparent via-black/30 to-transparent pointer-events-none z-10" />
      
      {/* Left Page */}
      <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto no-scrollbar border-b md:border-b-0 md:border-r border-black/20 relative">
        {pages[0] || <div />}
      </div>
      
      {/* Right Page */}
      <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto no-scrollbar relative">
        {pages[1] || <div />}
      </div>
    </div>
  );
}
