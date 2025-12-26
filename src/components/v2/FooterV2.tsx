"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

export function FooterV2() {
  return (
    <footer className="h-screen bg-black flex flex-col justify-between p-8 md:p-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />


      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10">
        {/* Code comment */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-neutral-600 mb-4"
        >
          {`// let's build something together`}
        </motion.p>

        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-green-400 font-mono">$</span>
          <span className="font-mono text-neutral-500">contact</span>
          <span className="text-cyan-400 font-mono">--init</span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="mailto:animulky@gmail.com"
            className="group relative inline-block"
          >
            <span className="text-5xl md:text-8xl font-bold text-white hover:text-cyan-400 transition-all duration-500">
              Let&apos;s Talk
            </span>
            {/* Underline animation */}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cyan-400 group-hover:w-full transition-all duration-500" />
          </Link>
        </motion.div>

        {/* Email display */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-neutral-600 mt-8 flex items-center gap-2"
        >
          <span className="text-cyan-400">{`>`}</span>
          <span>animulky@gmail.com</span>
          <span className="w-2 h-4 bg-cyan-400 cursor-blink" />
        </motion.p>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 pt-8">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {portfolioData.social.map((social, i) => (
            <Link
              key={i}
              href={social.url}
              target="_blank"
              className="group flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors font-mono text-sm"
            >
              <span className="text-neutral-700 group-hover:text-cyan-400 transition-colors">[</span>
              <span className="uppercase tracking-wider">{social.name}</span>
              <span className="text-neutral-700 group-hover:text-cyan-400 transition-colors">]</span>
            </Link>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 font-mono text-xs text-neutral-700"
        >
          <span className="text-neutral-600">{`/*`}</span>
          <span>© {new Date().getFullYear()} {portfolioData.profile.name}</span>
          <span className="text-neutral-600">{`*/`}</span>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-neutral-800" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-neutral-800" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-neutral-800" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-neutral-800" />

      {/* ASCII art decoration */}
      <div className="absolute bottom-1/3 left-8 font-mono text-[8px] text-neutral-800 leading-none hidden md:block">
        <pre>{`
  ██████╗ ██████╗ ██████╗ ███████╗
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 ██║     ██║   ██║██║  ██║█████╗
 ██║     ██║   ██║██║  ██║██╔══╝
 ╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
        `}</pre>
      </div>
    </footer>
  );
}
