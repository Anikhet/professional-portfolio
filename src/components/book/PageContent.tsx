import React, { forwardRef } from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="page bg-parchment-texture border-manuscript shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] h-full overflow-hidden flex flex-col font-fell text-lg text-ink-black">
      <div className="manuscript-inner-frame m-2 sm:m-4 md:m-8 lg:m-12 h-auto min-h-[calc(100%-1rem)] sm:min-h-[calc(100%-2rem)] md:min-h-[calc(100%-4rem)] overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
});
PageContent.displayName = 'PageContent';
