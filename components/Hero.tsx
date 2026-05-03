"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const taglineLines = ["CREAMOS,", "ESTRUCTURAMOS", "Y ESCALAMOS", "MARCAS QUE VENDEN."];

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden px-6 md:px-12 pt-28 pb-10">
      {/* Background image — dark overlay keeps text legible */}
      <Image
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30 select-none"
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-black/70 to-black/40 pointer-events-none" />
      {/* Tagline — reveals line by line */}
      <div className="relative flex flex-col gap-1 max-w-2xl">
        {taglineLines.map((line, i) => (
          <div key={line} className="overflow-hidden">
            <motion.p
              className="font-display font-semibold text-xl md:text-2xl lg:text-3xl text-white/80 leading-tight uppercase tracking-tight"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.6 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Massive NOIZ wordmark */}
      <div className="relative -mx-1 md:-mx-2 overflow-hidden">
        {/* Subtle accent bar behind text */}
        <motion.div
          className="absolute bottom-4 left-0 h-px bg-white/10 w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />

        <motion.h1
          className="font-display font-extrabold leading-none tracking-[-0.03em] text-white select-none"
          style={{ fontSize: "clamp(9rem, 24vw, 22rem)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ScrambleText text="NOIZ" delay={200} duration={1400} />
        </motion.h1>
      </div>

      {/* Bottom bar: year + scroll */}
      <motion.div
        className="relative flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <span className="text-xs tracking-[0.25em] text-white/30 uppercase font-light">
          Est. 2024
        </span>

        <div className="flex items-center gap-3 text-white/30">
          <span className="text-xs tracking-[0.25em] uppercase font-light">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-white/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 2.6 }}
          />
        </div>
      </motion.div>

      {/* Subtle horizontal accent line across the page */}
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
