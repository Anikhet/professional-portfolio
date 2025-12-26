"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { TextScramble } from "@/components/ui/text-scramble";
import { useEffect, useState } from "react";

export function HeroV2() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-black text-white px-4 md:px-20 tech-grid noise">

      <motion.div style={{ y, opacity }} className="z-10 flex flex-col items-start max-w-7xl w-full">
        {/* Terminal-style role */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-cyan-400 font-mono text-sm">$</span>
          <span className="font-mono text-sm text-neutral-500">whoami</span>
          <span className="text-cyan-400 font-mono text-sm">→</span>
          <span className="font-mono text-lg text-cyan-400">{portfolioData.profile.role}</span>
          <span className="w-2 h-5 bg-cyan-400 cursor-blink" />
        </motion.div>

        {/* Name with scramble effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          {mounted ? (
            <TextScramble
              as="h1"
              className="text-6xl md:text-[8rem] font-bold tracking-tight leading-[0.9] text-white"
              duration={1.5}
              characterSet="01<>{}[]#@$%&*"
            >
              {portfolioData.profile.name}
            </TextScramble>
          ) : (
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight leading-[0.9] text-white">
              {portfolioData.profile.name}
            </h1>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed"
        >
          <span className="text-neutral-400">{`{ `}</span>
          <span className="text-cyan-400 font-medium">{portfolioData.profile.tagline}</span>
          <span className="text-neutral-400">{` }`}</span>
        </motion.p>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex gap-6 items-center"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="font-mono text-xs text-green-400 uppercase tracking-wider">Available for work</span>
          </div>
          <div className="h-4 w-px bg-neutral-700" />
          <p className="text-neutral-500 text-xs uppercase tracking-widest font-mono">Based in New York</p>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {["TypeScript", "React", "Next.js", "AWS", "Python"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="px-3 py-1 text-xs font-mono border border-neutral-800 text-neutral-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-cyan-400/50"
        />
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-mono">Scroll</p>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-neutral-800" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-neutral-800" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-neutral-800" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-neutral-800" />
    </section>
  );
}
