"use client";

const items = [
  "CREAMOS",
  "·",
  "ESTRUCTURAMOS",
  "·",
  "ESCALAMOS",
  "·",
  "MARCAS QUE VENDEN",
  "·",
  "BRANDING",
  "·",
  "ESTRATEGIA DIGITAL",
  "·",
  "PUBLICIDAD",
  "·",
  "CONTENIDO",
  "·",
];

export default function Marquee() {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative border-y border-border py-5 overflow-hidden w-full">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`
              shrink-0 px-4 font-display font-bold text-sm md:text-base uppercase tracking-[0.15em]
              ${item === "·" ? "text-accent" : "text-white/60"}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
