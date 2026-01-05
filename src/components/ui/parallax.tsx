"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * factor, -100 * speed * factor]);
  const smoothY = useSpring(y, { damping: 50, stiffness: 100 });

  return (
    <motion.div ref={ref} className={className} style={{ y: smoothY }}>
      {children}
    </motion.div>
  );
}

interface ParallaxTextProps {
  children: string;
  className?: string;
  baseVelocity?: number;
}

export function ParallaxMarquee({
  children,
  className = "",
  baseVelocity = 1,
}: ParallaxTextProps) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -200 * baseVelocity]);

  return (
    <motion.div className={`flex whitespace-nowrap ${className}`} style={{ x }}>
      {children}
    </motion.div>
  );
}

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export function Floating({
  children,
  className = "",
  duration = 3,
  distance = 10,
  delay = 0,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnScroll({ children, className = "" }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} className={className} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
}

interface RotateOnScrollProps {
  children: ReactNode;
  className?: string;
  degrees?: number;
}

export function RotateOnScroll({
  children,
  className = "",
  degrees = 360,
}: RotateOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees]);

  return (
    <motion.div ref={ref} className={className} style={{ rotate }}>
      {children}
    </motion.div>
  );
}
