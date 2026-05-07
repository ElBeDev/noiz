"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const taglineLines = ["CREAMOS,", "ESTRUCTURAMOS", "Y ESCALAMOS", "MARCAS QUE VENDEN."];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&!*";
const WORD = ["N", "O", "I", "Z"];

function rand() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function NoizWordmark() {
  // Start with random chars so there's no layout shift on mount
  const [chars, setChars] = useState<string[]>(() => WORD.map(() => rand()));
  const [showDot, setShowDot] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Lock letters one by one as progress advances
      const locked = Math.floor(progress * WORD.length);
      setChars(WORD.map((ch, i) => (i < locked ? ch : rand())));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setChars([...WORD]);
        setShowDot(true);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {WORD.map((targetChar, i) => {
        if (i !== 2) {
          return (
            <span key={i} className="relative inline-block">
              <span className="invisible">{targetChar}</span>
              <span className="absolute inset-0 flex items-center justify-center">
                {chars[i]}
              </span>
            </span>
          );
        }
        // "I" slot — wrapper span handles position+centering, motion.span only animates
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{targetChar}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              {/* plain span: translateX(-50%) won't be touched by Framer Motion */}
              <span style={{ position: "absolute", top: "-0.38em", left: "50%", transform: "translateX(-50%)" }}>
                <motion.span
                  className="bg-accent rounded-full block"
                  style={{ width: "0.3em", height: "0.3em" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={showDot ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              {chars[i]}
            </span>
          </span>
        );
      })}
    </>
  );
}

// --- dead SVG code removed ---


export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-12 pt-24 md:pt-28 pb-8 md:pb-10 overflow-hidden w-full">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30 select-none"
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black/40 pointer-events-none" />

      {/* Tagline */}
      <div className="relative flex flex-col gap-0.5 max-w-2xl">
        {taglineLines.map((line, i) => (
          <motion.p
            key={line}
            className="font-display font-semibold text-lg md:text-2xl lg:text-3xl text-white/80 leading-tight uppercase tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.4 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* NOIZ wordmark */}
      <div className="relative my-2 -mx-6 md:-mx-12">
        <motion.div
          className="absolute bottom-2 left-0 h-px bg-white/10 w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
        <h1
          className="font-display font-extrabold leading-none tracking-[-0.03em] text-white select-none text-center w-full px-2 md:px-4"
          style={{ fontSize: "clamp(5.5rem, 22vw, 22rem)" }}
        >
          <NoizWordmark />
        </h1>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="relative flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span className="text-xs tracking-[0.25em] text-white/30 uppercase font-light">
          Est. 2024
        </span>
        <div className="flex items-center gap-3 text-white/30">
          <span className="text-xs tracking-[0.25em] uppercase font-light">Scroll</span>
          <motion.div
            className="w-px h-8 md:h-10 bg-white/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 2.4 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px bg-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
}
