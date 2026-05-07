"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const avatars = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
];

export default function SocialProof() {
  const { t } = useLang();
  const { socialProof } = t;
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="flex items-end justify-between mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
            {socialProof.eyebrow}
          </p>
          <h2 className="font-display font-extrabold text-white uppercase leading-none tracking-tight" style={{ fontSize: "clamp(1.8rem, 8vw, 4rem)" }}>
            {socialProof.heading}
          </h2>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {socialProof.testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-6 p-8 border border-border md:border-r-0 md:last:border-r md:first:border-l hover:bg-white/2 transition-colors duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Quote mark */}
            <span className="font-display font-extrabold text-5xl text-accent/30 leading-none group-hover:text-accent/60 transition-colors duration-300">
              "
            </span>

            <p className="font-light text-base text-white/70 leading-relaxed flex-1">
              {item.quote}
            </p>

            <div className="pt-4 border-t border-border flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                <Image
                  src={avatars[i]}
                  alt={item.author}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-light text-white/30 tracking-widest uppercase leading-relaxed">
                {item.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
