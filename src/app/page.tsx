"use client";

import { HeroV2 } from "@/components/v2/HeroV2";
import { AboutSection } from "@/components/v2/AboutSection";
import { ExperienceV2 } from "@/components/v2/ExperienceV2";
import { GravityTechStack } from "@/components/v2/GravityTechStack";
import { ProjectGallery } from "@/components/v2/ProjectGallery";
import { FooterV2 } from "@/components/v2/FooterV2";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ScrollSection } from "@/components/layout/ScrollSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate total height needed based on number of sections
  // We define a configuration for our sections:
  const sectionConfig = [
    { id: "hero", duration: 1, component: <HeroV2 /> },
    { id: "about", duration: 1, component: (p: any) => <AboutSection progress={p} /> },
    { 
      id: "experience", 
      duration: 1, 
      component: (p: any) => {
        const [isActive, setIsActive] = useState(false);
        useMotionValueEvent(p, "change", (latest: number) => {
          if (latest > 0 && latest < 1) setIsActive(true);
          else setIsActive(false);
        });
        return <ExperienceV2 isActive={isActive} />;
      }
    },
    { id: "tech", duration: 1, component: <GravityTechStack /> },
    { id: "projects", duration: 3, component: (p: any) => <ProjectGallery progress={p} /> },
    { id: "footer", duration: 1, component: <FooterV2 /> },
  ];

  // Calculate total height and start positions
  const totalDuration = sectionConfig.reduce((acc, section) => acc + section.duration, 0);
  
  // Helper to get start position for a section
  const getStart = (index: number) => {
    return sectionConfig.slice(0, index).reduce((acc, section) => acc + section.duration, 0);
  };

  return (
    <main className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      
      {/* Scroll Spacer - Drives the animation */}
      <div 
        ref={containerRef}
        className="w-full relative"
        style={{ height: `${totalDuration * 100}vh` }}
      />
      
      {/* Fixed Content Stack */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {sectionConfig.map((config, index) => (
          <ScrollSection 
            key={config.id}
            start={getStart(index)}
            duration={config.duration}
            scrollY={scrollY}
          >
            {config.component}
          </ScrollSection>
        ))}
      </div>

      <SplashCursor />
    </main>
  );
}