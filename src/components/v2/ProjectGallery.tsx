"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function ProjectGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="w-[20vw] flex items-center justify-center shrink-0">
             <h2 className="text-6xl md:text-8xl font-bold text-white writing-vertical-rl rotate-180">
                Selected Works
             </h2>
          </div>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof portfolioData.projects[0] }) {
  return (
    <div className="group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden bg-neutral-200 shrink-0">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-xl text-neutral-300 mb-6 max-w-xl">{project.description}</p>
        <Link 
            href={project.link} 
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-colors"
        >
            View Project
        </Link>
      </div>
    </div>
  );
}
