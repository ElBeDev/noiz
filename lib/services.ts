export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  steps: ServiceStep[];
  result: string;
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
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
