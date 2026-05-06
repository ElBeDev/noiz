"use client";

export default function GrainOverlay() {
  return (
    <>
      {/* SVG filter definition (hidden) */}
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ width: 0, height: 0, position: "absolute" }}
      >
        <defs>
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Grain layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-9999 animate-grain"
        style={{
          filter: "url(#grain-filter)",
          opacity: 0.055,
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
