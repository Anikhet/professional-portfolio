"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function TechTicker() {
  const skills = portfolioData.skills;

  return (
    <section className="py-16 bg-black overflow-hidden relative">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Section label */}
      <div className="max-w-6xl mx-auto px-4 md:px-20 mb-8">
        <span className="font-mono text-xs text-neutral-600 flex items-center gap-2">
          <span className="text-cyan-400">{`<`}</span>
          tech-stack
          <span className="text-cyan-400">{`/>`}</span>
        </span>
      </div>

      {/* First row - scrolling left */}
      <div className="flex whitespace-nowrap mb-4">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex gap-8 items-center"
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-cyan-400 hover:text-glow-cyan transition-all duration-300 cursor-default font-mono"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Second row - scrolling right with different skills highlight */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
          className="flex gap-8 items-center"
        >
          {[...skills.slice().reverse(), ...skills.slice().reverse(), ...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-purple-400 hover:text-glow-purple transition-all duration-300 cursor-default font-mono"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </section>
  );
}
