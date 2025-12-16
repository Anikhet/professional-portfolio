"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function HeroV2() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black text-white px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black z-0" />
      
      <div className="z-10 flex flex-col items-center max-w-4xl">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-bold tracking-tighter text-center mb-4"
        >
          {portfolioData.profile.name}
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-xl md:text-3xl text-neutral-400 font-light tracking-wide uppercase text-center">
            {portfolioData.profile.role}
          </p>
          
          <div className="h-px w-24 bg-neutral-800" />
          
          <p className="text-neutral-500 text-sm md:text-base max-w-md text-center leading-relaxed">
             Based in New York. Specializing in building exceptional digital experiences with modern technologies.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <p className="text-neutral-600 text-xs uppercase tracking-widest">Scroll to explore</p>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent" />
      </motion.div>
    </section>
  );
}
