import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#d5f317",
            fontFamily: "sans-serif",
            letterSpacing: "-0.05em",
          }}
        >
          N
        </div>
      </div>
    ),
    size
  );
}
