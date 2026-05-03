import Link from "next/link";
import ScrambleText from "@/components/ScrambleText";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-display font-extrabold text-white/2 select-none leading-none"
          style={{ fontSize: "clamp(12rem, 35vw, 32rem)" }}
        >
          404
        </span>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
          Error 404
        </p>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white uppercase leading-none tracking-tight">
          <ScrambleText text="PÁGINA NO ENCONTRADA" delay={200} duration={1200} />
        </h1>

        <p className="font-light text-base text-white/40 max-w-sm leading-relaxed">
          Esta URL no existe o fue movida. Vuelve al inicio.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-display font-bold text-sm tracking-[0.2em] uppercase text-white hover:border-accent hover:bg-accent hover:text-black transition-all duration-300"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
