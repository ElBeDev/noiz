"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/services";
import ScrambleText from "./ScrambleText";
import { services } from "@/lib/services";

interface Props {
  service: Service;
}

export default function ServicePage({ service }: Props) {
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null;
  const next =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-black">
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <Link
          href="/"
          className="font-display font-extrabold text-xl tracking-tight text-white uppercase"
        >
          <ScrambleText text="NOIZ" duration={900} triggerOnHover />
        </Link>
        <Link
          href="/#servicios"
          className="group text-xs font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Servicios
        </Link>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 border-b border-border overflow-hidden">
        {/* Background watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-end overflow-hidden"
        >
          <span
            className="font-display font-extrabold text-white/2.5 leading-none tracking-tight select-none translate-y-1/4"
            style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
          >
            {service.number}
          </span>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.p
            className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.number} — Servicio
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              {service.name}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.p
              className="font-display font-semibold text-2xl md:text-3xl text-accent uppercase tracking-tight"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              {service.tagline}
            </motion.p>
          </div>

          <motion.p
            className="font-light text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.longDescription}
          </motion.p>
        </div>
      </section>

      {/* ── Deliverables + Steps ─────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-16 md:gap-24 border-b border-border">
        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-8">
            Qué incluye
          </p>
          <ul className="space-y-0">
            {service.deliverables.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-accent text-sm mt-0.5 shrink-0">→</span>
                <span className="font-light text-sm md:text-base text-white/80 leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-8">
            Cómo lo hacemos
          </p>
          <div className="space-y-8">
            {service.steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="font-display font-bold text-xs text-accent tabular-nums mt-1 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="font-light text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Result ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-24 border-b border-border">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-6">
            Resultado
          </p>
          <p className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-snug tracking-tight">
            {service.result}
          </p>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-border">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-4">
              ¿Listo para empezar?
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white uppercase leading-none tracking-tight">
              Hablemos de tu
              <br />
              <span className="text-accent">proyecto.</span>
            </h2>
          </div>

          <a
            href="mailto:hola@noiz.com.mx"
            className="group inline-flex items-center gap-4 border border-white/20 px-8 py-5 font-display font-bold text-sm tracking-[0.2em] uppercase text-white hover:border-accent hover:text-black hover:bg-accent transition-all duration-300 shrink-0"
          >
            <span>Contactar</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </section>

      {/* ── Prev / Next ──────────────────────────────────────────── */}
      <section className="grid grid-cols-2 border-b border-border">
        {prev ? (
          <Link
            href={`/servicios/${prev.slug}`}
            className="group flex flex-col gap-2 px-6 md:px-12 py-10 border-r border-border hover:bg-white/2 transition-colors duration-300"
          >
            <span className="text-xs tracking-[0.2em] text-white/30 uppercase font-light">
              ← Anterior
            </span>
            <span className="font-display font-bold text-lg md:text-2xl text-white uppercase leading-tight tracking-tight group-hover:text-accent transition-colors duration-300">
              {prev.name}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/servicios/${next.slug}`}
            className="group flex flex-col gap-2 items-end text-right px-6 md:px-12 py-10 hover:bg-white/2 transition-colors duration-300"
          >
            <span className="text-xs tracking-[0.2em] text-white/30 uppercase font-light">
              Siguiente →
            </span>
            <span className="font-display font-bold text-lg md:text-2xl text-white uppercase leading-tight tracking-tight group-hover:text-accent transition-colors duration-300">
              {next.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-display font-extrabold text-base text-white/20 uppercase tracking-tight">
            NOIZ
          </span>
          <p className="text-xs font-light text-white/20 tracking-[0.15em] uppercase">
            © 2026 — Marcas que venden.
          </p>
        </div>
      </footer>
    </main>
  );
}
