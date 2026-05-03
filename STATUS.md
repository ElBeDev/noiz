# NOIZ — Estado del proyecto

## Stack
- Next.js 16.2.4 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion 12
- Lenis 1.3 (smooth scroll)
- Google Fonts: Syne (display) + Inter (body)

---

## Lo que está hecho

### Estructura
- `app/layout.tsx` — Root layout con fuentes, GrainOverlay y SmoothScroll
- `app/page.tsx` — Landing page principal
- `app/servicios/[slug]/page.tsx` — Ruta dinámica por servicio (SSG con `generateStaticParams`)
- `lib/services.ts` — Data centralizada de los 8 servicios (slug, name, tagline, description, deliverables, steps, result)

### Componentes (`/components`)
- `Nav.tsx` — Navbar fija con scroll-aware bg, links desktop, hamburger mobile con overlay fullscreen animado
- `Hero.tsx` — Sección hero fullscreen: wordmark NOIZ enorme con scramble al cargar, tagline line-by-line reveal, scroll indicator
- `Marquee.tsx` — Ticker infinito: CREAMOS · ESTRUCTURAMOS · ESCALAMOS · ...
- `About.tsx` — Sección quiénes somos: copy 2 columnas + stats animados (`8+`, `100%`, `360°`)
- `Services.tsx` — Lista de 8 servicios con animación whileInView, scramble on hover, links a `/servicios/[slug]`
- `SocialProof.tsx` — 3 testimonios en grid con border y hover
- `ContactForm.tsx` — Formulario completo con Server Action, validación, select de servicios, estado success animado
- `ServicePage.tsx` — Página completa de cada servicio (hero, entregables, proceso, resultado, CTA, prev/next)
- `PageTransition.tsx` — Framer Motion `AnimatePresence` fade+slide entre rutas
- `CustomCursor.tsx` — Ring con spring lag + dot accent, escala en hover de links/botones
- `GrainOverlay.tsx` — Noise/grain texture con SVG feTurbulence animado
- `SmoothScroll.tsx` — Wrapper de Lenis
- `ScrambleText.tsx` — Componente reutilizable de scramble (mount o triggerOnHover)
- `Footer.tsx` — Footer mínimo con links
- `CTA.tsx` — (disponible, reemplazado en home por ContactForm)

### Rutas especiales (`/app`)
- `not-found.tsx` — 404 custom con scramble y botón volver
- `opengraph-image.tsx` — OG image generada con `ImageResponse` (negro + accent)
- `icon.tsx` — Favicon generado con `ImageResponse` (N en `#d5f317`)
- `robots.ts` — robots.txt apuntando a noiz.mx
- `sitemap.ts` — sitemap.xml con home + 8 rutas de servicios

### Server Actions (`/app/actions`)
- `contact.ts` — Validación de formulario, lista para conectar a Resend u otro proveedor de email

### Diseño
- Color accent: `#d5f317`
- Fondo: negro puro `#000`
- Cursor del sistema oculto en desktop (`pointer: fine`), reemplazado por cursor custom
- Scrollbar custom, `::selection` con accent
- Animación grain en `globals.css`
- Marquee CSS en `globals.css`

---

## Lo que falta

### Funcional
- [ ] Conectar formulario a proveedor de email (Resend) — ver `app/actions/contact.ts`, agregar `RESEND_API_KEY`
- [ ] Información de contacto real (teléfono, Instagram, LinkedIn) en `ContactForm.tsx` y `Footer.tsx`

### Contenido
- [ ] Fotos o assets visuales reales (hoy es todo tipografía/layout)
- [ ] Testimonios reales en `SocialProof.tsx`
- [ ] Precios o paquetes (si aplica)

### Producción
- [ ] Variable de entorno `RESEND_API_KEY` (o el proveedor elegido)
- [ ] Deploy en Vercel con dominio `noiz.mx`
