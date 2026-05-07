"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&!*";
const WORD = ["N", "O", "I", "Z"];

function rand() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

// Centers (x, y) of each letter in viewBox 0 0 1500 375
const LETTER_CX = [240, 698, 1002, 1284];

function NoizWordmark() {
  const [chars, setChars] = useState<string[]>(() => WORD.map(() => rand()));
  const [locked, setLocked] = useState([false, false, false, false]);
  const [showDot, setShowDot] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const lockedCount = Math.floor(progress * WORD.length);
      setChars(WORD.map((ch, i) => (i < lockedCount ? ch : rand())));
      setLocked(WORD.map((_, i) => i < lockedCount));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setChars([...WORD]);
        setLocked([true, true, true, true]);
        setShowDot(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 374.999991"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="NOIZ"
      role="img"
    >
      {/* N — path fades in when locked, scramble text fades out */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: locked[0] ? 1 : 0 }} transition={{ duration: 0.15 }}>
        <path fill="#fff" d="M 386.996094 286.636719 L 354.613281 305.082031 L 354.613281 132.058594 L 441.652344 132.058594 L 441.652344 354.863281 L 354.613281 354.863281 L 92.472656 203.074219 L 124.855469 184.273438 L 124.855469 354.851562 L 37.820312 354.851562 L 37.820312 132.050781 L 124.855469 132.050781 L 386.996094 286.617188 Z" />
      </motion.g>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: locked[0] ? 0 : 1 }} transition={{ duration: 0.15 }}>
        <text x={LETTER_CX[0]} y="243" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="310" fontWeight="900" fontFamily="sans-serif">{chars[0]}</text>
      </motion.g>

      {/* O */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: locked[1] ? 1 : 0 }} transition={{ duration: 0.15 }}>
        <path fill="#fff" d="M 697.53125 361.828125 C 646.929688 361.828125 606.195312 357.355469 575.335938 348.425781 C 544.464844 339.496094 522.015625 326.269531 507.972656 308.734375 C 493.933594 291.207031 486.917969 269.453125 486.917969 243.460938 C 486.917969 217.46875 493.933594 195.714844 507.972656 178.1875 C 522.015625 160.664062 544.464844 147.4375 575.335938 138.496094 C 606.195312 129.566406 646.929688 125.09375 697.53125 125.09375 C 748.132812 125.09375 788.855469 129.566406 819.726562 138.496094 C 850.585938 147.4375 873.046875 160.664062 887.089844 178.1875 C 901.132812 195.714844 908.148438 217.476562 908.148438 243.460938 C 908.148438 269.445312 901.121094 291.21875 887.089844 308.734375 C 873.046875 326.257812 850.585938 339.484375 819.726562 348.425781 C 788.855469 357.355469 748.125 361.828125 697.53125 361.828125 Z M 697.53125 295.683594 C 721.433594 295.683594 742.089844 294.242188 759.496094 291.335938 C 776.90625 288.429688 790.359375 283.210938 799.875 275.664062 C 809.394531 268.128906 814.152344 257.386719 814.152344 243.460938 C 814.152344 229.535156 809.394531 218.800781 799.875 211.257812 C 790.359375 203.71875 776.894531 198.5 759.496094 195.585938 C 742.089844 192.691406 721.433594 191.238281 697.53125 191.238281 C 673.628906 191.238281 652.679688 192.691406 634.691406 195.585938 C 616.707031 198.488281 602.664062 203.710938 592.566406 211.257812 C 582.46875 218.800781 577.425781 229.535156 577.425781 243.460938 C 577.425781 257.386719 582.46875 268.121094 592.566406 275.664062 C 602.664062 283.210938 616.707031 288.429688 634.691406 291.335938 C 652.679688 294.242188 673.617188 295.683594 697.53125 295.683594 Z" />
      </motion.g>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: locked[1] ? 0 : 1 }} transition={{ duration: 0.15 }}>
        <text x={LETTER_CX[1]} y="243" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="310" fontWeight="900" fontFamily="sans-serif">{chars[1]}</text>
      </motion.g>

      {/* I */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: locked[2] ? 1 : 0 }} transition={{ duration: 0.15 }}>
        <path fill="#fff" d="M 958.621094 132.058594 L 1045.660156 132.058594 L 1045.660156 354.863281 L 958.621094 354.863281 Z" />
      </motion.g>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: locked[2] ? 0 : 1 }} transition={{ duration: 0.15 }}>
        <text x={LETTER_CX[2]} y="243" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="310" fontWeight="900" fontFamily="sans-serif">{chars[2]}</text>
      </motion.g>

      {/* Z */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: locked[3] ? 1 : 0 }} transition={{ duration: 0.15 }}>
        <path fill="#fff" d="M 1099.609375 132.058594 L 1468.625 132.058594 L 1468.625 198.207031 L 1215.1875 302.992188 L 1212.402344 288.714844 L 1468.625 288.714844 L 1468.625 354.863281 L 1099.609375 354.863281 L 1099.609375 288.714844 L 1354.09375 183.929688 L 1356.882812 198.207031 L 1099.617188 198.207031 Z" />
      </motion.g>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: locked[3] ? 0 : 1 }} transition={{ duration: 0.15 }}>
        <text x={LETTER_CX[3]} y="243" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="310" fontWeight="900" fontFamily="sans-serif">{chars[3]}</text>
      </motion.g>

      {/* Dot — exact coordinates from the original SVG */}
      <motion.circle
        fill="#d5f318"
        cx="1001.875"
        cy="63.3125"
        r="49.0625"
        initial={{ scale: 0, opacity: 0 }}
        animate={showDot ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        style={{ transformOrigin: "1001.875px 63.3125px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}



export default function Hero() {
  const { t } = useLang();
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
        {t.hero.tagline.map((line, i) => (
          <motion.p
            key={i}
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
        <h1 className="select-none w-full">
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
          <span className="text-xs tracking-[0.25em] uppercase font-light">{t.hero.scroll}</span>
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
