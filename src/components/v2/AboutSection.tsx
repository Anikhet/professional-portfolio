"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center px-4 md:px-20 bg-zinc-950 py-20">
      <motion.div style={{ opacity, y }} className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-12">
          <span className="text-neutral-500">About </span>
          Me
        </h2>
        
        <div className="space-y-8 text-lg md:text-2xl text-neutral-400 leading-relaxed font-light font-sans">
          <p>
            I&apos;m a <span className="text-white font-medium">Software Engineer</span> with a startup hustle mindset, currently building full-stack products with <span className="text-white border-b border-neutral-700 pb-1">AI at the core</span>. From migrating frontends to <span className="text-white">Next.js</span> and integrating LLM APIs, to scaling backend architectures — I enjoy solving tough problems and shipping fast, reliable code.
          </p>
          <p>
            My experience spans scrappy startups to structured engineering teams, with a focus on modern web tech (<span className="text-white">Next.js, TypeScript, Go</span>), automation, and cloud-native development (<span className="text-white">AWS</span>). I’ve led projects involving lead scraping, AI-driven personalization, and data workflows that power real-world impact.
          </p>
          <p>
            Currently pursuing my <span className="text-white">Master’s in Computer Science at RIT</span>, I’m looking to join a team where I can push technical boundaries and learn from strong builders. Let’s connect if you&apos;re working on something cool — or want to jam about product, AI, video games, music (I&apos;ve worked a ton with <span className="text-white">FL Studio</span>) or engineering systems that scale or perhaps my current hobby - <span className="text-white">visual astronomy</span>!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
