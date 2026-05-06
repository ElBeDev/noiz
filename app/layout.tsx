import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOIZ — Marcas que Venden",
  description:
    "Creamos, estructuramos y escalamos marcas que venden. Branding, estrategia digital, campañas y más.",
  metadataBase: new URL("https://noiz.mx"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://noiz.mx",
    siteName: "NOIZ",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`} style={{ overflowX: "hidden" }}>
      <body style={{ overflowX: "hidden" }}>
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
