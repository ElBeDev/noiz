"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&!*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration of the scramble animation in ms */
  duration?: number;
  /** Whether to trigger on hover instead of mount */
  triggerOnHover?: boolean;
}

export default function ScrambleText({
  text,
  className,
  delay = 0,
  duration = 1200,
  triggerOnHover = false,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(triggerOnHover ? text : "");
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runScramble = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * text.length);

      const scrambled = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (triggerOnHover) return;

    timeoutRef.current = setTimeout(runScramble, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, triggerOnHover, delay]);

  if (triggerOnHover) {
    return (
      <span
        className={className}
        onMouseEnter={runScramble}
        onFocus={runScramble}
      >
        {display}
      </span>
    );
  }

  return <span className={className}>{display}</span>;
}
