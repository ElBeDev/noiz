"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

interface Translations {
  nav: {
    services: string;
    about: string;
    contact: string;
    closeMenu: string;
    openMenu: string;
    mobileFooter: string;
  };
  hero: {
    tagline: string[];
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    location: string;
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    eyebrow: string;
    heading: string;
    count: string;
  };
  socialProof: {
    eyebrow: string;
    heading: string;
    testimonials: Array<{ quote: string; author: string }>;
  };
  contact: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    labelName: string;
    placeholderName: string;
    labelCompany: string;
    placeholderCompany: string;
    placeholderOptional: string;
    labelEmail: string;
    labelService: string;
    placeholderService: string;
    labelMessage: string;
    placeholderMessage: string;
    labelMultiple: string;
    submitting: string;
    submit: string;
    successTitle: string;
    successBody: string;
  };
  footer: {
    copyright: string;
    services: string;
    contact: string;
  };
  servicePage: {
    service: string;
    includes: string;
    howWeDoIt: string;
    result: string;
    readyToStart: string;
    ctaLine1: string;
    ctaLine2: string;
    ctaButton: string;
    prev: string;
    next: string;
    copyright: string;
    backToServices: string;
  };
}

const es: Translations = {
  nav: {
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    mobileFooter: "© 2026 NOIZ — Marcas que venden.",
  },
  hero: {
    tagline: ["CREAMOS,", "ESTRUCTURAMOS", "Y ESCALAMOS", "MARCAS QUE VENDEN."],
    scroll: "Scroll",
  },
  about: {
    eyebrow: "Quiénes somos",
    heading: "Somos NOIZ.",
    p1: "Somos una agencia de marca y estrategia digital que transforma negocios en marcas que venden. No hacemos solo diseño, ni solo publicidad. Hacemos el todo.",
    p2: "Desde el naming hasta las campañas de escala, acompañamos a cada cliente con una visión completa: marca sólida, negocio estructurado y ecosistema digital que crece solo.",
    location: "Querétaro · Nacional · Internacional",
    stats: [
      { value: "8+", label: "Servicios" },
      { value: "100%", label: "Resultados" },
      { value: "360°", label: "Visión" },
    ],
  },
  services: {
    eyebrow: "Lo que hacemos",
    heading: "Servicios",
    count: "08 servicios",
  },
  socialProof: {
    eyebrow: "Lo que dicen",
    heading: "Resultados",
    testimonials: [
      {
        quote: "NOIZ transformó por completo cómo nos percibe el mercado. Pasamos de ser 'otro negocio más' a ser la referencia en nuestro sector.",
        author: "Fundador, empresa de tecnología — Querétaro",
      },
      {
        quote: "En tres meses estructuraron nuestra oferta, lanzaron las campañas y el ticket promedio subió 40%. No esperaba resultados tan rápidos.",
        author: "Directora, clínica de estética — CDMX",
      },
      {
        quote: "Lo que más valoro es que piensan como socios, no como proveedores. Cada decisión tiene estrategia detrás.",
        author: "CEO, consultora financiera — Monterrey",
      },
    ],
  },
  contact: {
    eyebrow: "Hablemos",
    headingLine1: "Tu marca,",
    headingLine2: "nuestro trabajo.",
    body: "Cuéntanos qué necesitas. Respondemos en menos de 24 horas.",
    labelName: "Nombre *",
    placeholderName: "Tu nombre",
    labelCompany: "Empresa",
    placeholderCompany: "Tu empresa",
    placeholderOptional: "Opcional",
    labelEmail: "Email *",
    labelService: "Servicio de interés",
    placeholderService: "Seleccionar...",
    labelMessage: "Mensaje *",
    placeholderMessage: "Cuéntanos de tu proyecto...",
    labelMultiple: "Varios servicios",
    submitting: "Enviando...",
    submit: "Enviar mensaje",
    successTitle: "¡Listo!",
    successBody: "Recibimos tu mensaje. Te contactaremos pronto.",
  },
  footer: {
    copyright: "© 2026 — Marcas que venden.",
    services: "Servicios",
    contact: "Contacto",
  },
  servicePage: {
    service: "Servicio",
    includes: "Qué incluye",
    howWeDoIt: "Cómo lo hacemos",
    result: "Resultado",
    readyToStart: "¿Listo para empezar?",
    ctaLine1: "Hablemos de tu",
    ctaLine2: "proyecto.",
    ctaButton: "Contactar",
    prev: "← Anterior",
    next: "Siguiente →",
    copyright: "© 2026 — Marcas que venden.",
    backToServices: "Servicios",
  },
};

const en: Translations = {
  nav: {
    services: "Services",
    about: "About",
    contact: "Contact",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    mobileFooter: "© 2026 NOIZ — Brands that sell.",
  },
  hero: {
    tagline: ["WE CREATE,", "STRUCTURE", "AND SCALE", "BRANDS THAT SELL."],
    scroll: "Scroll",
  },
  about: {
    eyebrow: "Who we are",
    heading: "We are NOIZ.",
    p1: "We are a brand and digital strategy agency that transforms businesses into brands that sell. We don't just do design, or just advertising. We do the whole thing.",
    p2: "From naming to scaling campaigns, we guide every client with a complete vision: solid brand, structured business and a digital ecosystem that grows on its own.",
    location: "Querétaro · National · International",
    stats: [
      { value: "8+", label: "Services" },
      { value: "100%", label: "Results" },
      { value: "360°", label: "Vision" },
    ],
  },
  services: {
    eyebrow: "What we do",
    heading: "Services",
    count: "08 services",
  },
  socialProof: {
    eyebrow: "What they say",
    heading: "Results",
    testimonials: [
      {
        quote: "NOIZ completely transformed how the market perceives us. We went from being 'just another business' to being the benchmark in our sector.",
        author: "Founder, tech company — Querétaro",
      },
      {
        quote: "In three months they structured our offer, launched the campaigns, and our average ticket went up 40%. I didn't expect results that fast.",
        author: "Director, aesthetics clinic — CDMX",
      },
      {
        quote: "What I value most is that they think like partners, not vendors. Every decision has strategy behind it.",
        author: "CEO, financial consultancy — Monterrey",
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    headingLine1: "Your brand,",
    headingLine2: "our work.",
    body: "Tell us what you need. We respond in less than 24 hours.",
    labelName: "Name *",
    placeholderName: "Your name",
    labelCompany: "Company",
    placeholderCompany: "Your company",
    placeholderOptional: "Optional",
    labelEmail: "Email *",
    labelService: "Service of interest",
    placeholderService: "Select...",
    labelMessage: "Message *",
    placeholderMessage: "Tell us about your project...",
    labelMultiple: "Multiple services",
    submitting: "Sending...",
    submit: "Send message",
    successTitle: "Done!",
    successBody: "We received your message. We'll be in touch soon.",
  },
  footer: {
    copyright: "© 2026 — Brands that sell.",
    services: "Services",
    contact: "Contact",
  },
  servicePage: {
    service: "Service",
    includes: "What's included",
    howWeDoIt: "How we do it",
    result: "Result",
    readyToStart: "Ready to start?",
    ctaLine1: "Let's talk about",
    ctaLine2: "your project.",
    ctaButton: "Get in touch",
    prev: "← Previous",
    next: "Next →",
    copyright: "© 2026 — Brands that sell.",
    backToServices: "Services",
  },
};

export const translations: Record<Lang, Translations> = { es, en };

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
