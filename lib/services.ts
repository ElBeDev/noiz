export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceContent {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  steps: ServiceStep[];
  result: string;
}

export interface Service extends ServiceContent {
  number: string;
  slug: string;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    number: "01",
    slug: "creacion-de-marca",
    name: "Creación de Marca",
    tagline: "Tu marca, desde cero.",
    description: "Naming, concepto, branding e identidad desde cero.",
    longDescription:
      "Una marca no es solo un logo. Es la forma en que el mundo te percibe, te recuerda y decide comprarte a ti y no a tu competencia. En NOIZ construimos marcas con carácter, coherencia y propósito desde el primer día.",
    deliverables: [
      "Naming estratégico",
      "Concepto de marca y propósito",
      "Identidad visual completa (logo, tipografía, paleta, iconografía)",
      "Manual de marca",
      "Voz y tono de comunicación",
      "Moodboard y sistema visual",
    ],
    steps: [
      {
        title: "Diagnóstico e investigación",
        description:
          "Analizamos tu mercado, competencia y audiencia objetivo para encontrar el espacio en donde tu marca puede dominar.",
      },
      {
        title: "Concepto y naming",
        description:
          "Desarrollamos el nombre y el concepto que define quién eres, qué vendes y por qué te deben elegir a ti.",
      },
      {
        title: "Identidad visual",
        description:
          "Diseñamos el sistema visual completo: logo, paleta de color, tipografía y todos los elementos que hacen tu marca reconocible.",
      },
      {
        title: "Manual y entrega",
        description:
          "Documentamos cada elemento para que tu marca sea consistente en cualquier canal, ahora y siempre.",
      },
    ],
    result:
      "Una marca sólida, diferenciada y lista para crecer. Con identidad propia y reglas claras para escalar.",
    en: {
      name: "Brand Creation",
      tagline: "Your brand, from scratch.",
      description: "Naming, concept, branding and identity from the ground up.",
      longDescription:
        "A brand is more than just a logo. It's the way the world perceives you, remembers you, and chooses you over the competition. At NOIZ we build brands with character, coherence and purpose from day one.",
      deliverables: [
        "Strategic naming",
        "Brand concept and purpose",
        "Full visual identity (logo, typography, palette, iconography)",
        "Brand guidelines",
        "Voice and tone of communication",
        "Moodboard and visual system",
      ],
      steps: [
        {
          title: "Research & diagnosis",
          description:
            "We analyze your market, competition and target audience to find the space where your brand can dominate.",
        },
        {
          title: "Concept & naming",
          description:
            "We develop the name and concept that defines who you are, what you sell and why they should choose you.",
        },
        {
          title: "Visual identity",
          description:
            "We design the complete visual system: logo, color palette, typography and all the elements that make your brand recognizable.",
        },
        {
          title: "Guidelines & delivery",
          description:
            "We document every element so your brand stays consistent across every channel, now and always.",
        },
      ],
      result:
        "A solid, differentiated brand ready to grow. With its own identity and clear rules to scale.",
    },
  },
  {
    number: "02",
    slug: "estructura-de-negocio",
    name: "Estructura de Negocio",
    tagline: "Sin estructura, no hay escala.",
    description: "Modelo de negocio, oferta, pricing y embudo de ventas.",
    longDescription:
      "Muchas marcas tienen buen producto pero mal negocio. En NOIZ estructuramos cómo vendes, cuánto cobras y cómo conviertes desconocidos en clientes de alto valor. Construimos el sistema que hace crecer tu empresa.",
    deliverables: [
      "Modelo de negocio documentado",
      "Definición y afinación de oferta",
      "Estrategia de pricing y niveles de servicio",
      "Embudo de ventas end-to-end",
      "Customer journey map",
      "Proyección de ingresos",
    ],
    steps: [
      {
        title: "Auditoría de negocio",
        description:
          "Revisamos dónde estás hoy: ingresos, canales de venta, oferta actual y puntos de fuga de clientes.",
      },
      {
        title: "Diseño de oferta",
        description:
          "Definimos qué vendes, cómo lo empaquetas y cómo lo presentas para maximizar conversión y ticket promedio.",
      },
      {
        title: "Estrategia de pricing",
        description:
          "Estructuramos tus niveles de precios de forma que sean competitivos, rentables y fáciles de vender.",
      },
      {
        title: "Embudo de ventas",
        description:
          "Mapeamos cada etapa del recorrido del cliente desde que te descubre hasta que te compra y te recomienda.",
      },
    ],
    result:
      "Un negocio con estructura clara, oferta irresistible y un embudo que convierte de forma consistente.",
    en: {
      name: "Business Structure",
      tagline: "No structure, no scale.",
      description: "Business model, offer, pricing and sales funnel.",
      longDescription:
        "Many brands have a great product but a poor business. At NOIZ we structure how you sell, how much you charge and how you convert strangers into high-value clients. We build the system that grows your company.",
      deliverables: [
        "Documented business model",
        "Offer definition and refinement",
        "Pricing strategy and service tiers",
        "End-to-end sales funnel",
        "Customer journey map",
        "Revenue projection",
      ],
      steps: [
        {
          title: "Business audit",
          description:
            "We review where you are today: revenue, sales channels, current offer and customer leak points.",
        },
        {
          title: "Offer design",
          description:
            "We define what you sell, how you package it and how you present it to maximize conversion and average ticket.",
        },
        {
          title: "Pricing strategy",
          description:
            "We structure your price tiers to be competitive, profitable and easy to sell.",
        },
        {
          title: "Sales funnel",
          description:
            "We map every stage of the customer journey from discovery to purchase to referral.",
        },
      ],
      result:
        "A business with clear structure, an irresistible offer and a funnel that converts consistently.",
    },
  },
  {
    number: "03",
    slug: "posicionamiento-de-marca",
    name: "Posicionamiento de Marca",
    tagline: "Ser el primero en la mente de tu cliente.",
    description:
      "Estrategia, mensaje clave y diferenciación que te hace destacar.",
    longDescription:
      "En un mercado saturado, el posicionamiento es lo que decide quién gana. No basta con ser bueno, tienes que ser la opción obvia. En NOIZ construimos la estrategia que pone tu marca en el lugar correcto, en la mente correcta, en el momento correcto.",
    deliverables: [
      "Análisis competitivo profundo",
      "Propuesta única de valor (PUV)",
      "Mensaje central de marca",
      "Arquetipo y personalidad de marca",
      "Estrategia de diferenciación",
      "Guía de comunicación externa",
    ],
    steps: [
      {
        title: "Análisis del entorno",
        description:
          "Mapeamos a tus competidores directos e indirectos para encontrar el espacio donde tu marca puede dominar sin competir por precio.",
      },
      {
        title: "Definición de audiencia",
        description:
          "Identificamos con precisión quirúrgica a quién le hablas, qué le duele y qué tiene que escuchar para decidirse.",
      },
      {
        title: "Mensaje y diferenciación",
        description:
          "Construimos el mensaje que te distingue y el relato de marca que conecta con tu audiencia de forma auténtica.",
      },
      {
        title: "Estrategia de presencia",
        description:
          "Definimos en qué canales debes estar, con qué tono y con qué frecuencia para que tu posicionamiento sea consistente.",
      },
    ],
    result:
      "Una marca con posición clara en el mercado, mensaje poderoso y la estrategia para mantener ese lugar.",
    en: {
      name: "Brand Positioning",
      tagline: "Be the first in your customer's mind.",
      description: "Strategy, key message and differentiation that makes you stand out.",
      longDescription:
        "In a saturated market, positioning is what decides who wins. Being good isn't enough — you have to be the obvious choice. At NOIZ we build the strategy that puts your brand in the right place, in the right mind, at the right time.",
      deliverables: [
        "Deep competitive analysis",
        "Unique value proposition (UVP)",
        "Core brand message",
        "Brand archetype and personality",
        "Differentiation strategy",
        "External communication guide",
      ],
      steps: [
        {
          title: "Environment analysis",
          description:
            "We map your direct and indirect competitors to find the space where your brand can dominate without competing on price.",
        },
        {
          title: "Audience definition",
          description:
            "We identify with surgical precision who you're talking to, what pains them and what they need to hear to decide.",
        },
        {
          title: "Message & differentiation",
          description:
            "We build the message that sets you apart and the brand story that connects with your audience authentically.",
        },
        {
          title: "Presence strategy",
          description:
            "We define which channels you should be on, with what tone and frequency to keep your positioning consistent.",
        },
      ],
      result:
        "A brand with a clear market position, a powerful message and the strategy to maintain that position.",
    },
  },
  {
    number: "04",
    slug: "ecosistema-digital",
    name: "Ecosistema Digital",
    tagline: "Tu presencia digital, sin huecos.",
    description:
      "Redes sociales, página web, automatización e IA para optimizar y escalar.",
    longDescription:
      "Tu ecosistema digital es la suma de todos los puntos de contacto que tiene un cliente contigo en internet. En NOIZ lo construimos de forma integrada para que cada canal trabaje en favor del siguiente y todo el sistema escale solo.",
    deliverables: [
      "Estrategia de ecosistema digital",
      "Diseño y desarrollo de sitio web",
      "Setup de redes sociales optimizado",
      "Integración de herramientas y CRM",
      "Automatizaciones de captación y seguimiento",
      "Dashboard de métricas unificado",
    ],
    steps: [
      {
        title: "Mapa del ecosistema",
        description:
          "Trazamos todos los canales digitales relevantes para tu marca y cómo deben estar conectados entre sí.",
      },
      {
        title: "Desarrollo web",
        description:
          "Construimos tu sitio web como el centro del ecosistema: rápido, orientado a conversión y alineado con tu identidad.",
      },
      {
        title: "Activación de canales",
        description:
          "Configuramos y optimizamos cada canal: bio, links, formularios, píxeles, catálogos y todo lo que necesitas para captar.",
      },
      {
        title: "Automatización e integración",
        description:
          "Conectamos tus herramientas para que el seguimiento, la nutrición de leads y el análisis sucedan solos.",
      },
    ],
    result:
      "Un ecosistema digital funcional, integrado y listo para escalar sin necesitar más personal.",
    en: {
      name: "Digital Ecosystem",
      tagline: "Your digital presence, no gaps.",
      description: "Social media, website, automation and AI to optimize and scale.",
      longDescription:
        "Your digital ecosystem is the sum of every touchpoint a customer has with you online. At NOIZ we build it in an integrated way so each channel feeds the next and the whole system scales on its own.",
      deliverables: [
        "Digital ecosystem strategy",
        "Website design and development",
        "Optimized social media setup",
        "Tool and CRM integration",
        "Capture and follow-up automations",
        "Unified metrics dashboard",
      ],
      steps: [
        {
          title: "Ecosystem map",
          description:
            "We chart all the relevant digital channels for your brand and how they should be connected to each other.",
        },
        {
          title: "Web development",
          description:
            "We build your website as the center of the ecosystem: fast, conversion-oriented and aligned with your identity.",
        },
        {
          title: "Channel activation",
          description:
            "We configure and optimize every channel: bio, links, forms, pixels, catalogs and everything you need to capture leads.",
        },
        {
          title: "Automation & integration",
          description:
            "We connect your tools so that follow-up, lead nurturing and analysis happen automatically.",
        },
      ],
      result:
        "A functional, integrated digital ecosystem ready to scale without needing more staff.",
    },
  },
  {
    number: "05",
    slug: "campanas-de-publicidad",
    name: "Campañas de Publicidad",
    tagline: "Inversión que se convierte en ventas.",
    description:
      "Estrategia y gestión de campañas en Meta, Google y más.",
    longDescription:
      "La publicidad pagada es el acelerador, no el motor. En NOIZ diseñamos campañas que tienen estrategia detrás: el mensaje correcto, para la persona correcta, en el momento correcto. Gestionamos tu inversión para que cada peso trabaje.",
    deliverables: [
      "Estrategia de paid media",
      "Segmentación de audiencias",
      "Creación de copys y creativos",
      "Setup y lanzamiento de campañas",
      "Optimización continua",
      "Reportes de performance mensuales",
    ],
    steps: [
      {
        title: "Estrategia y objetivos",
        description:
          "Definimos qué queremos lograr, a quién le hablamos y cuánto estamos dispuestos a invertir por cada conversión.",
      },
      {
        title: "Creativos y copys",
        description:
          "Producimos los materiales que van a ver tus clientes: anuncios que paran el scroll y generan acción.",
      },
      {
        title: "Setup y lanzamiento",
        description:
          "Configuramos las campañas con la estructura correcta de adsets, audiencias, presupuestos y objetivos de optimización.",
      },
      {
        title: "Optimización y escala",
        description:
          "Monitoremos resultados en tiempo real y ajustamos para reducir el costo por lead y aumentar el ROAS.",
      },
    ],
    result:
      "Campañas que generan resultados medibles, con estrategia clara y optimización constante para escalar.",
    en: {
      name: "Advertising Campaigns",
      tagline: "Investment that becomes sales.",
      description: "Strategy and management of campaigns on Meta, Google and more.",
      longDescription:
        "Paid advertising is the accelerator, not the engine. At NOIZ we design campaigns with strategy behind them: the right message, for the right person, at the right moment. We manage your investment so every dollar works.",
      deliverables: [
        "Paid media strategy",
        "Audience segmentation",
        "Copy and creative production",
        "Campaign setup and launch",
        "Continuous optimization",
        "Monthly performance reports",
      ],
      steps: [
        {
          title: "Strategy & goals",
          description:
            "We define what we want to achieve, who we're talking to and how much we're willing to invest per conversion.",
        },
        {
          title: "Creatives & copy",
          description:
            "We produce the materials your customers will see: ads that stop the scroll and generate action.",
        },
        {
          title: "Setup & launch",
          description:
            "We configure campaigns with the right structure of ad sets, audiences, budgets and optimization objectives.",
        },
        {
          title: "Optimization & scale",
          description:
            "We monitor results in real time and adjust to lower cost per lead and increase ROAS.",
        },
      ],
      result:
        "Campaigns that generate measurable results, with clear strategy and constant optimization to scale.",
    },
  },
  {
    number: "06",
    slug: "contenido-estrategico",
    name: "Contenido Estratégico",
    tagline: "Contenido que vende sin vender.",
    description:
      "Contenido que conecta, posiciona y convierte en clientes.",
    longDescription:
      "El contenido sin estrategia es solo ruido. En NOIZ producimos contenido con propósito: cada post, video o artículo está diseñado para construir autoridad, generar confianza y mover a tu audiencia hacia la decisión de compra.",
    deliverables: [
      "Estrategia de contenido por canal",
      "Calendario editorial mensual",
      "Producción de contenido (texto, diseño, video)",
      "Guión y dirección de reels/videos cortos",
      "Copywriting para redes y web",
      "Análisis de rendimiento de contenido",
    ],
    steps: [
      {
        title: "Estrategia editorial",
        description:
          "Definimos los pilares de contenido, la frecuencia, los formatos y el tono que van a dominar tu comunicación.",
      },
      {
        title: "Planeación mensual",
        description:
          "Construimos el calendario editorial con los temas, formatos y objetivos de cada pieza antes de producir.",
      },
      {
        title: "Producción",
        description:
          "Creamos el contenido: diseño, copy, edición de video y todos los formatos que necesita tu estrategia.",
      },
      {
        title: "Publicación y análisis",
        description:
          "Publicamos, monitoreamos métricas y ajustamos la estrategia según lo que realmente conecta con tu audiencia.",
      },
    ],
    result:
      "Una presencia de contenido consistente, estratégica y que construye autoridad mes a mes.",
    en: {
      name: "Strategic Content",
      tagline: "Content that sells without selling.",
      description: "Content that connects, positions and converts into customers.",
      longDescription:
        "Content without strategy is just noise. At NOIZ we produce content with purpose: every post, video or article is designed to build authority, generate trust and move your audience toward the buying decision.",
      deliverables: [
        "Content strategy by channel",
        "Monthly editorial calendar",
        "Content production (text, design, video)",
        "Reel/short video script and direction",
        "Copywriting for social media and web",
        "Content performance analysis",
      ],
      steps: [
        {
          title: "Editorial strategy",
          description:
            "We define the content pillars, frequency, formats and tone that will dominate your communication.",
        },
        {
          title: "Monthly planning",
          description:
            "We build the editorial calendar with topics, formats and goals for each piece before producing.",
        },
        {
          title: "Production",
          description:
            "We create the content: design, copy, video editing and all the formats your strategy needs.",
        },
        {
          title: "Publishing & analysis",
          description:
            "We publish, track metrics and adjust the strategy based on what truly connects with your audience.",
        },
      ],
      result:
        "A consistent, strategic content presence that builds authority month by month.",
    },
  },
  {
    number: "07",
    slug: "automatizacion-con-ia",
    name: "Automatización con IA",
    tagline: "Escala sin contratar más.",
    description:
      "Implementamos herramientas de IA para hacer tu marca más eficiente.",
    longDescription:
      "La inteligencia artificial ya no es el futuro, es la ventaja competitiva del presente. En NOIZ implementamos soluciones de IA que automatizan los procesos repetitivos de tu negocio para que tu equipo se enfoque en lo que realmente importa.",
    deliverables: [
      "Auditoría de procesos automatizables",
      "Implementación de chatbots con IA",
      "Automatización de atención al cliente",
      "Flujos de seguimiento automático",
      "Generación asistida de contenido",
      "Integración con herramientas existentes",
    ],
    steps: [
      {
        title: "Mapeo de procesos",
        description:
          "Identificamos qué tareas se repiten en tu negocio, cuánto tiempo consumen y cuáles tienen mayor impacto al automatizarse.",
      },
      {
        title: "Diseño de soluciones",
        description:
          "Elegimos las herramientas y tecnologías de IA más adecuadas para cada proceso: chatbots, flujos, generación de contenido, análisis.",
      },
      {
        title: "Implementación",
        description:
          "Construimos e integramos las automatizaciones con las herramientas que ya usas: CRM, redes sociales, correo, WhatsApp.",
      },
      {
        title: "Capacitación y monitoreo",
        description:
          "Entrenamos a tu equipo para sacar el máximo provecho y monitoreamos que los sistemas funcionen correctamente.",
      },
    ],
    result:
      "Un negocio que opera más eficiente, responde más rápido y escala sin necesitar más personal.",
    en: {
      name: "AI Automation",
      tagline: "Scale without hiring more.",
      description: "We implement AI tools to make your brand more efficient.",
      longDescription:
        "Artificial intelligence is no longer the future — it's today's competitive edge. At NOIZ we implement AI solutions that automate the repetitive processes in your business so your team can focus on what truly matters.",
      deliverables: [
        "Automatable process audit",
        "AI chatbot implementation",
        "Customer service automation",
        "Automatic follow-up flows",
        "AI-assisted content generation",
        "Integration with existing tools",
      ],
      steps: [
        {
          title: "Process mapping",
          description:
            "We identify which tasks repeat in your business, how much time they consume and which have the greatest impact when automated.",
        },
        {
          title: "Solution design",
          description:
            "We choose the most suitable AI tools and technologies for each process: chatbots, flows, content generation, analysis.",
        },
        {
          title: "Implementation",
          description:
            "We build and integrate the automations with the tools you already use: CRM, social media, email, WhatsApp.",
        },
        {
          title: "Training & monitoring",
          description:
            "We train your team to get maximum value and monitor that the systems work correctly.",
        },
      ],
      result:
        "A business that operates more efficiently, responds faster and scales without needing more staff.",
    },
  },
  {
    number: "08",
    slug: "expansion-y-escalamiento",
    name: "Expansión y Escalamiento",
    tagline: "Crecer sin límites.",
    description:
      "Apps, medios tradicionales y estrategias para crecer sin límites.",
    longDescription:
      "Cuando tu marca ya tiene base, es momento de expandir. En NOIZ diseñamos las estrategias para llevar tu negocio al siguiente nivel: nuevos mercados, nuevos canales, medios masivos y tecnología propia.",
    deliverables: [
      "Estrategia de expansión de mercado",
      "Planificación y desarrollo de apps móviles",
      "Gestión de relaciones con medios tradicionales",
      "Campañas en medios masivos (TV, radio, OOH)",
      "Estrategia de franquicias o licencias",
      "Roadmap de crecimiento a 12-24 meses",
    ],
    steps: [
      {
        title: "Diagnóstico de escala",
        description:
          "Evaluamos en qué punto está tu negocio y qué condiciones se necesitan para expandir sin perder calidad ni rentabilidad.",
      },
      {
        title: "Estrategia de expansión",
        description:
          "Definimos los mercados, canales y formatos en los que tu marca puede crecer con menor riesgo y mayor impacto.",
      },
      {
        title: "Ejecución multicanal",
        description:
          "Activamos los canales de expansión: medios tradicionales, desarrollo de app, nuevas geografías o verticales de negocio.",
      },
      {
        title: "Escalamiento sostenible",
        description:
          "Construimos los sistemas, procesos y alianzas para que tu crecimiento sea consistente, medible y sostenible en el tiempo.",
      },
    ],
    result:
      "Una marca que crece de forma estructurada, con presencia en más canales y mayor penetración de mercado.",
    en: {
      name: "Expansion & Scaling",
      tagline: "Grow without limits.",
      description: "Apps, traditional media and strategies to grow without limits.",
      longDescription:
        "When your brand already has a foundation, it's time to expand. At NOIZ we design the strategies to take your business to the next level: new markets, new channels, mass media and proprietary technology.",
      deliverables: [
        "Market expansion strategy",
        "Mobile app planning and development",
        "Traditional media relations management",
        "Mass media campaigns (TV, radio, OOH)",
        "Franchise or licensing strategy",
        "12-24 month growth roadmap",
      ],
      steps: [
        {
          title: "Scale diagnosis",
          description:
            "We evaluate where your business is and what conditions are needed to expand without losing quality or profitability.",
        },
        {
          title: "Expansion strategy",
          description:
            "We define the markets, channels and formats where your brand can grow with lower risk and greater impact.",
        },
        {
          title: "Multichannel execution",
          description:
            "We activate expansion channels: traditional media, app development, new geographies or business verticals.",
        },
        {
          title: "Sustainable scaling",
          description:
            "We build the systems, processes and partnerships for your growth to be consistent, measurable and sustainable over time.",
        },
      ],
      result:
        "A brand that grows in a structured way, with presence in more channels and greater market penetration.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
