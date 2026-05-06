"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { services, type Service } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-12 py-24 md:py-32">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-display font-extrabold text-white uppercase leading-none tracking-tight" style={{ fontSize: "clamp(1.8rem, 8vw, 4rem)" }}>
            Servicios
          </h2>
        </motion.div>

        <motion.span
          className="hidden md:block text-xs tracking-[0.2em] text-white/30 uppercase font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          08 servicios
        </motion.span>
      </div>

      {/* Services list */}
      <div>
        {services.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border transition-colors duration-300 group-hover:bg-white/20" />

      <Link
        href={`/servicios/${service.slug}`}
        className="flex items-start md:items-center gap-4 md:gap-8 py-7 md:py-8"
      >
        {/* Number */}
        <span className="font-display font-semibold text-xs md:text-sm text-accent tabular-nums shrink-0 mt-1 md:mt-0">
          {service.number}
        </span>

        {/* Service name */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white uppercase leading-tight tracking-tight group-hover:text-accent transition-colors duration-300">
            <ScrambleText
              text={service.name.toUpperCase()}
              duration={600}
              triggerOnHover
            />
          </h3>
        </div>

        {/* Description — desktop only */}
        <p className="hidden md:block font-light text-sm text-white/40 max-w-xs text-right leading-relaxed shrink-0 group-hover:text-white/70 transition-colors duration-300">
          {service.description}
        </p>

        {/* Arrow */}
        <span className="shrink-0 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 font-light text-lg">
          →
        </span>
      </Link>

      {/* Description — mobile only */}
      <p className="md:hidden font-light text-sm text-white/40 pb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Bottom border for last item */}
      {index === services.length - 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      )}
    </motion.div>
  );
}

