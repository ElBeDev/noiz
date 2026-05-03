"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Dot follows instantly
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const isHovering = useRef(false);
  const scaleMotion = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        isHovering.current = true;
        scaleMotion.set(2.2);
      }
    };

    const handleLeave = () => {
      isHovering.current = false;
      scaleMotion.set(1);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleEnter);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleEnter);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [cursorX, cursorY, dotX, dotY, scaleMotion]);

  return (
    <>
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-99999 w-8 h-8 rounded-full border border-white/40 mix-blend-difference"
        style={{ x, y, scale: scaleMotion }}
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-99999 w-1.5 h-1.5 rounded-full bg-accent"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
