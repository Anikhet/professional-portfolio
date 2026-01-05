"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode | ((progress: MotionValue<number>) => ReactNode);
  start: number; // Start position in window heights (e.g., 0, 1, 2.5)
  duration: number; // Duration in window heights (e.g., 1, 1.5)
  scrollY: MotionValue<number>;
}

export function ScrollSection({ children, start, duration, scrollY }: ScrollSectionProps) {
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  
  const startPx = start * windowHeight;
  const endPx = (start + duration) * windowHeight;
  
  // Opacity Transition Logic
  // We want to fade IN when the previous section is finishing its duration.
  // And fade OUT when this section is finishing.
  // Using a small overlap (0.5 screen height) for smoothness.
  
  const fadeInStart = startPx - 0.5 * windowHeight;
  const fadeInEnd = startPx;
  const fadeOutStart = endPx - 0.5 * windowHeight;
  const fadeOutEnd = endPx;
  
  const opacity = useTransform(
    scrollY,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );
  
  // Special case: First section starts fully visible
  const isFirst = start === 0;
  const opacityFirst = useTransform(scrollY, [startPx, startPx + 0.5 * windowHeight], [1, 0]);
  
  const activeOpacity = isFirst ? opacityFirst : opacity;
  
  // Pointer events logic
  const pointerEvents = useTransform(activeOpacity, (v) => v > 0.5 ? "auto" : "none");

  // Local Progress Calculation (0 to 1) for the child
  const localProgress = useTransform(
    scrollY,
    [startPx, endPx],
    [0, 1]
  );

  return (
    <motion.div
      style={{ opacity: activeOpacity, pointerEvents }}
      className="fixed inset-0 w-full h-full bg-black z-10"
    >
        <div className="w-full h-full relative">
            {typeof children === "function" ? children(localProgress) : children}
        </div>
    </motion.div>
  );
}
