"use client";

import { HeroV3 } from "@/components/v3/HeroV3";
import { ExperienceList } from "@/components/v3/ExperienceList";
import { ProjectList } from "@/components/v3/ProjectList";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-cyan-500/30 px-6 md:px-12 py-12 md:py-20">
      
      <div className="max-w-3xl mx-auto">
         <HeroV3 />
         
         <div className="border-t border-neutral-900 my-20" />
         
         <ProjectList />
         
         <div className="border-t border-neutral-900 my-20" />
         
         <ExperienceList />

         <div className="mt-32 mb-12 text-sm text-neutral-600 font-mono">
           © {new Date().getFullYear()} Anikhet Mulky. Built with Next.js and Tailwind.
         </div>
      </div>

      <SplashCursor />
    </main>
  );
}