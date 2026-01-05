"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function ProjectGallery({ progress }: { progress?: MotionValue<number> }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const activeProgress = progress || scrollYProgress;

  const x = useTransform(activeProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      {/* Background grid */}
      <div className="fixed inset-0 tech-grid-dense opacity-20 pointer-events-none" />

      {/* Section transition at top */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-30" style={{ background: "linear-gradient(to bottom, rgb(24,24,27) 0%, transparent 100%)" }} />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {/* Section header */}
          <div className="w-[25vw] flex flex-col items-center justify-center shrink-0 px-8">
            <span className="font-mono text-xs text-neutral-600 mb-4">{`// projects.map()`}</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white writing-vertical-rl rotate-180">
              <span className="text-cyan-400">Selected</span>
              <br />
              <span className="text-white">Works</span>
            </h2>
            <div className="mt-8 w-px h-20" style={{ background: "linear-gradient(to bottom, rgb(6,182,212) 0%, transparent 100%)" }} />
          </div>

          {/* Project cards */}
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative h-[75vh] w-[75vw] md:w-[55vw] overflow-hidden shrink-0"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card container with gradient border on hover */}
      <div className="relative h-full w-full bg-neutral-950 border border-neutral-800 group-hover:border-cyan-500/30 transition-colors duration-500">
        {/* Project number */}
        <div className="absolute top-4 left-4 z-20 font-mono text-sm text-neutral-600">
          <span className="text-cyan-400">0{index + 1}</span>
          <span className="mx-2">/</span>
          <span>0{portfolioData.projects.length}</span>
        </div>

        {/* Terminal dots */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-red-500/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-yellow-500/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-green-500/80 transition-colors" />
        </div>

        {/* Image */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />

          {/* Scanline overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)",
            }}
          />

          {/* Dark overlay - fades from bottom for content readability */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, black 0%, black 20%, transparent 60%)" }} />

          {/* Glitch effect lines on hover */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/4 left-0 right-0 h-px bg-cyan-500/50 origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-1/2 left-0 right-0 h-px bg-purple-500/50 origin-right"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute top-3/4 left-0 right-0 h-px bg-cyan-500/50 origin-left"
          />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          {/* Tags */}
          {project.tags && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-mono bg-black/50 border border-neutral-700 text-neutral-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-white mb-3"
            animate={{
              textShadow: isHovered
                ? "0 0 20px rgba(0,255,255,0.3)"
                : "none",
            }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="text-lg text-neutral-400 mb-6 max-w-xl font-light">
            {project.description}
          </p>

          {/* CTA Button */}
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-white/20 text-white font-mono text-sm hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-300 group/btn"
          >
            <span>View Project</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-cyan-400 group-hover/btn:text-black"
            >
              →
            </motion.span>
          </Link>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
