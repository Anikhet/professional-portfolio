import React, { ReactNode } from "react";

export function BookLayout({ children }: { children: ReactNode }) {
  const pages = React.Children.toArray(children);

  return (
    <div className="w-full max-w-[95vw] lg:max-w-7xl mx-auto bg-parchment-texture border-manuscript relative shadow-2xl flex flex-col md:flex-row">
      {/* Binder shadow */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-20 -ml-10 bg-gradient-to-r from-transparent via-black/30 to-transparent pointer-events-none z-10" />
      
      {/* Left Page */}
      <div className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black/20">
        <div className="manuscript-inner-frame h-full">
          {pages[0] || <div />}
        </div>
      </div>
      
      {/* Right Page */}
      <div className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="manuscript-inner-frame h-full">
          {pages[1] || <div />}
        </div>
      </div>
    </div>
  );
}
