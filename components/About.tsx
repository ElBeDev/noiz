"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Servicios" },
  { value: "100%", label: "Resultados" },
  { value: "360°", label: "Visión" },
];

export default function About() {
  return (
    <section id="nosotros" className="border-t border-border overflow-hidden">
      <div className="grid md:grid-cols-[3fr_2fr] min-h-170">

        {/* Left — all text content */}
        <div className="flex flex-col justify-between px-6 md:px-12 py-24 md:py-32">
          <div>
            <motion.p
              className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Quiénes somos
            </motion.p>

            <motion.h2
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Somos NOIZ.
            </motion.h2>

            <motion.div
              className="space-y-4 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-light text-base md:text-lg text-white/60 leading-relaxed">
                Somos una agencia de marca y estrategia digital que transforma
                negocios en marcas que venden. No hacemos solo diseño, ni solo
                publicidad. Hacemos el todo.
              </p>
              <p className="font-light text-base md:text-lg text-white/60 leading-relaxed">
                Desde el naming hasta las campañas de escala, acompañamos a cada
                cliente con una visión completa: marca sólida, negocio
                estructurado y ecosistema digital que crece solo.
              </p>
              <p className="font-light text-sm text-white/30 leading-relaxed">
                Querétaro · Nacional · Internacional
              </p>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 md:gap-16 mt-16 pt-10 border-t border-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display font-extrabold text-4xl md:text-5xl text-accent leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-[0.2em] mt-2 font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — full-height image */}
        <motion.div
          className="relative hidden md:block border-l border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Equipo NOIZ"
            fill
            sizes="40vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Accent label */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs text-accent/70 uppercase tracking-[0.3em] font-medium">
              Agencia de marca · Est. 2024
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
