"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
}

export function BentoCard({ children, className, title, icon }: BentoCardProps) {
  return (
    <div className={cn(
      "bg-white border border-black/5 shadow-sm rounded-3xl p-6 relative overflow-hidden group hover:border-black/10 transition-all duration-300",
      className
    )}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4 text-zinc-500">
          {icon}
          {title && <span className="text-xs font-mono uppercase tracking-wider">{title}</span>}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min", className)}>
      {children}
    </div>
  );
}
