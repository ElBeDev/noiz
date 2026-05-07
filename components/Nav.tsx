"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  const links = [
    { label: t.nav.services, href: "/#servicios" },
    { label: t.nav.about, href: "/#nosotros" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-sm" : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="NOIZ"
            width={120}
            height={68}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group relative text-xs font-medium tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300"
            >
              {l.label}
              <span className="block absolute -bottom-px left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-400" />
            </Link>
          ))}
          {/* Language toggle */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-8">
            <button
              onClick={() => setLang("es")}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${lang === "es" ? "text-accent" : "text-white/30 hover:text-white/60"}`}
            >
              ES
            </button>
            <span className="text-white/15 text-xs">·</span>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${lang === "en" ? "text-accent" : "text-white/30 hover:text-white/60"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
        >
          <motion.span
            className="block h-px bg-white origin-right"
            animate={{ width: open ? "100%" : "100%", rotate: open ? -45 : 0, y: open ? 5 : 0 }}
            style={{ width: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="block h-px bg-white"
            style={{ width: "70%" }}
            animate={{ opacity: open ? 0 : 1, x: open ? 10 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px bg-white origin-right"
            animate={{ width: open ? "100%" : "100%", rotate: open ? 45 : 0, y: open ? -5 : 0 }}
            style={{ width: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between px-6 py-24 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display font-extrabold text-5xl uppercase text-white/80 hover:text-accent transition-colors duration-300 py-3 leading-none"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <span className="text-xs font-light text-white/20 tracking-[0.2em] uppercase">
                {t.nav.mobileFooter}
              </span>
              {/* Mobile lang toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setLang("es"); setOpen(false); }}
                  className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${lang === "es" ? "text-accent" : "text-white/30"}`}
                >
                  ES
                </button>
                <span className="text-white/15 text-xs">·</span>
                <button
                  onClick={() => { setLang("en"); setOpen(false); }}
                  className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${lang === "en" ? "text-accent" : "text-white/30"}`}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
