import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div className="h-full w-full font-fell text-lg text-ink-black flex flex-col">
      {children}
    </div>
  );
}
