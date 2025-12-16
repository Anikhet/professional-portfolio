"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function TechTicker() {
  return (
    <section className="py-20 bg-black overflow-hidden border-y border-neutral-900">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-16 items-center"
        >
          {[...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
            <span key={i} className="text-6xl md:text-8xl font-bold text-neutral-800 uppercase hover:text-white transition-colors duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
