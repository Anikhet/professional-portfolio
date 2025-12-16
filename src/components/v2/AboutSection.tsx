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
    <section ref={container} className="min-h-screen flex items-center justify-center px-4 md:px-20 bg-zinc-950 py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <motion.div style={{ opacity, y }} className="max-w-5xl relative z-10">
        {/* Code comment header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-neutral-600 mb-4"
        >
          {`// about.tsx`}
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-12">
          <span className="text-purple-400 font-mono text-3xl md:text-4xl">const</span>{" "}
          <span className="gradient-text-cyber">aboutMe</span>{" "}
          <span className="text-neutral-500 font-mono text-3xl md:text-4xl">=</span>{" "}
          <span className="text-neutral-500 font-mono text-3xl md:text-4xl">{`{`}</span>
        </h2>

        <div className="space-y-8 pl-4 md:pl-8 border-l-2 border-neutral-800">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <span className="font-mono text-cyan-400 text-sm">background:</span>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-2 pl-4">
              Software Engineer with a{" "}
              <span className="text-white font-medium border-b border-cyan-500/50 pb-0.5">startup hustle mindset</span>,
              currently building full-stack products with{" "}
              <span className="text-cyan-400 font-mono">AI at the core</span>.
              From migrating frontends to Next.js and integrating LLM APIs, to scaling backend architectures —
              I enjoy solving tough problems and shipping fast, reliable code.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <span className="font-mono text-cyan-400 text-sm">experience:</span>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-2 pl-4">
              My experience spans{" "}
              <span className="text-purple-400">scrappy startups</span> to{" "}
              <span className="text-purple-400">structured engineering teams</span>,
              with a focus on modern web tech (
              <code className="text-green-400 font-mono text-base">Next.js</code>,{" "}
              <code className="text-green-400 font-mono text-base">TypeScript</code>,{" "}
              <code className="text-green-400 font-mono text-base">Go</code>),
              automation, and cloud-native development (
              <code className="text-green-400 font-mono text-base">AWS</code>).
            </p>
          </motion.div>

          {/* Current */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <span className="font-mono text-cyan-400 text-sm">current:</span>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-2 pl-4">
              Pursuing my{" "}
              <span className="text-white font-medium">Master&apos;s in Computer Science at RIT</span>,
              looking to join a team where I can push technical boundaries and learn from strong builders.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <span className="font-mono text-cyan-400 text-sm">interests:</span>
            <div className="flex flex-wrap gap-2 mt-3 pl-4">
              {["AI/ML", "Product", "Video Games", "FL Studio", "Visual Astronomy"].map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-4 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
                >
                  &quot;{interest}&quot;
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing brace */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-neutral-500 font-mono text-3xl md:text-4xl mt-8"
        >
          {`};`}
        </motion.div>
      </motion.div>
    </section>
  );
}
