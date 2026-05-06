"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-28 md:py-40 overflow-hidden border-t border-border"
    >
      {/* Background text watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span
          className="font-display font-extrabold text-white/2 select-none leading-none tracking-tight"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        >
          NOIZ
        </span>
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Siguiente paso
        </motion.p>

        {/* Big headline */}
        <motion.h2
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          ¿Listos para
        </motion.h2>
        <motion.h2
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-accent uppercase leading-none tracking-tight mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          escalar?
        </motion.h2>

        {/* Description + CTA */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-light text-base md:text-lg text-white/50 max-w-md leading-relaxed">
            Cuéntanos tu proyecto. En NOIZ construimos contigo desde la idea
            hasta la escalabilidad.
          </p>

          <a
            href="mailto:hola@noiz.com.mx"
            className="group relative inline-flex items-center gap-4 border border-white/20 px-8 py-5 font-display font-bold text-sm tracking-[0.2em] uppercase text-white hover:border-accent hover:text-black hover:bg-accent transition-all duration-300 shrink-0"
          >
            <span>Hablemos</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
