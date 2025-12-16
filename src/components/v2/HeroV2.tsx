"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function HeroV2() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-black text-white px-4 md:px-20">
      
      <motion.div style={{ y, opacity }} className="z-10 flex flex-col items-start max-w-7xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 font-sans tracking-wide mb-4"
        >
          {portfolioData.profile.role}
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-7xl md:text-[9rem] font-serif font-medium tracking-tight leading-[0.9] mb-8 text-white"
        >
          {portfolioData.profile.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-neutral-300 font-sans font-light max-w-3xl leading-relaxed"
        >
          {portfolioData.profile.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex gap-4 items-center"
        >
           <div className="h-px w-12 bg-neutral-700" />
           <p className="text-neutral-500 text-xs uppercase tracking-widest font-sans">Based in New York</p>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-end gap-4"
      >
        <p className="text-neutral-600 text-xs uppercase tracking-widest writing-vertical-rl rotate-180 font-sans">Scroll</p>
      </motion.div>
    </section>
  );
}
