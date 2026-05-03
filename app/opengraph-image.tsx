import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          NOIZ
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            MARCAS
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#d5f317",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            QUE VENDEN.
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          CREAMOS · ESTRUCTURAMOS · ESCALAMOS
        </div>
      </div>
    ),
    size
  );
}
