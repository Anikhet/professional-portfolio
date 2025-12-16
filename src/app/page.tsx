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
      <HeroV2 />
      <AboutSection />
      <ExperienceV2 />
      <TechTicker />
      <ProjectGallery />
      <FooterV2 />
      <SplashCursor />
    </main>
  );
}