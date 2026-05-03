"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border">
      <motion.div
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="font-display font-extrabold text-base text-white/30 uppercase tracking-tight">
          NOIZ
        </span>

        <p className="text-xs font-light text-white/20 tracking-[0.15em] uppercase">
          © 2026 — Marcas que venden.
        </p>

        <div className="flex gap-6">
          <a
            href="#servicios"
            className="text-xs font-light text-white/30 hover:text-white transition-colors tracking-[0.15em] uppercase"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="text-xs font-light text-white/30 hover:text-white transition-colors tracking-[0.15em] uppercase"
          >
            Contacto
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
