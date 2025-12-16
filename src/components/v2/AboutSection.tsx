"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={container} className="min-h-[80vh] flex items-center justify-center px-4 md:px-20 bg-zinc-950">
      <motion.div style={{ opacity, y }} className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          <span className="text-neutral-500">I craft </span>
          digital experiences
          <span className="text-neutral-500"> that merge </span>
          art
          <span className="text-neutral-500"> with </span>
          engineering.
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
          {portfolioData.profile.bio}
        </p>
      </motion.div>
    </section>
  );
}
