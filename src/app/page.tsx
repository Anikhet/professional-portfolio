"use client";

import { HeroV2 } from "@/components/v2/HeroV2";
import { AboutSection } from "@/components/v2/AboutSection";
import { ExperienceV2 } from "@/components/v2/ExperienceV2";
import { TechTicker } from "@/components/v2/TechTicker";
import { ProjectGallery } from "@/components/v2/ProjectGallery";
import { FooterV2 } from "@/components/v2/FooterV2";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      
      {/* Hero Section - Relative Flow */}
      <div className="relative z-10 bg-black">
        <HeroV2 />
      </div>

      {/* Scrolling Content - Z-10 to cover Footer */}
      <div className="relative z-10 bg-black mb-[100vh] shadow-2xl shadow-black">
        <AboutSection />
        <ExperienceV2 />
        <TechTicker />
        <ProjectGallery />
      </div>

      {/* Fixed Footer - Revealed at bottom */}
      <div className="fixed bottom-0 left-0 w-full h-screen z-0">
        <FooterV2 />
      </div>

      <SplashCursor />
    </main>
  );
}