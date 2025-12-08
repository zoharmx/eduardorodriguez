# 🚀 Harry Dev Portfolio - Professional Next.js Site

Portfolio profesional con storytelling parallax, case studies detallados, blog con MDX y formulario de contacto funcional.

## ✨ Características

- **🎨 Diseño Storytelling Immersivo**: Narrativa en 4 capítulos con efecto parallax
- **⚡ Next.js 14**: App Router, Server Components, optimización automática
- **🎭 Animaciones Fluidas**: Framer Motion para transiciones cinematográficas
- **📱 Totalmente Responsive**: Mobile-first, optimizado para todos los dispositivos
- **🎯 SEO Optimizado**: Meta tags, OpenGraph, sitemap automático
- **📝 Blog con MDX**: Sistema de blog con Markdown enriquecido
- **📬 Formulario de Contacto**: Validación, múltiples estados, integración lista
- **🎨 Tailwind CSS**: Utilidades customizadas, tema consistente
- **♿ Accesible**: ARIA labels, navegación por teclado, contraste adecuado

## 🛠️ Stack Tecnológico

```
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- MDX (para blog)
- Lucide Icons
```

## 📦 Instalación

### Pre-requisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Paso 1: Clonar/Copiar archivos

```bash
cd portfolio-nextjs
```

### Paso 2: Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### Paso 3: Configurar variables de entorno

Crea un archivo `.env.local` en la raíz:

```env
# Sitio
NEXT_PUBLIC_SITE_URL=https://tudominio.com

# API de Contacto (opcional - configura según tu backend)
NEXT_PUBLIC_CONTACT_API=/api/contact

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Paso 4: Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### 1. Información Personal

Edita `/app/layout.tsx` para cambiar:
- Metadata SEO
- Título del sitio
- Descripción
- Keywords
- OpenGraph images

```typescript
export const metadata: Metadata = {
  title: 'Tu Nombre | Tu Tagline',
  description: 'Tu descripción...',
  // ...
}
```

### 2. Contenido Principal

**Hero Section** - `/components/sections/HeroSection.tsx`:
- Título principal
- Métricas
- CTAs

**Proyectos** - `/components/sections/ProjectsShowcase.tsx`:
- Array `projects` con tus proyectos
- Links a case studies

**Colores** - `/tailwind.config.js`:
```javascript
colors: {
  primary: { /* tus colores */ },
  accent: { /* tus acentos */ }
}
```

### 3. Case Studies

Duplica `/app/case-studies/voice-ai-hoymismo/page.tsx` para crear nuevos:

```bash
cp -r app/case-studies/voice-ai-hoymismo app/case-studies/tu-proyecto
```

Edita el contenido y metadata según tu proyecto.

### 4. Formulario de Contacto

El formulario en `/app/contact/page.tsx` necesita un endpoint de API.

**Opción A: Formspree (más fácil)**

```typescript
const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

**Opción B: API Route de Next.js**

Crea `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Enviar email con Resend, SendGrid, etc.
  
  return NextResponse.json({ success: true })
}
```

**Opción C: EmailJS**

```bash
npm install @emailjs/browser
```

### 5. Blog (Próximamente)

El sistema de blog usará MDX. Los posts irán en `/content/blog/`:

```markdown
---
title: "Mi Post"
date: "2024-12-01"
tags: ["AI", "React"]
---

Contenido del post...
```

## 🚀 Deployment

### Vercel (Recomendado - 100% Gratis)

1. Sube tu código a GitHub

2. Conecta con Vercel:
   - Ve a [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Selecciona tu repositorio
   - Deploy automático

3. Configura dominio custom en Settings > Domains

### Netlify

```bash
npm run build
```

Arrastra la carpeta `.next` a Netlify.

### Docker (Auto-hosting)

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📊 Analytics

### Google Analytics 4

1. Crea propiedad en [analytics.google.com](https://analytics.google.com)

2. Instala paquete:
```bash
npm install @next/third-parties
```

3. Agrega a `/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Plausible (Alternativa privacy-first)

Más ligero y sin cookies:

```typescript
<Script
  defer
  data-domain="tudominio.com"
  src="https://plausible.io/js/script.js"
/>
```

## 🔍 SEO Checklist

- [x] Meta tags configurados
- [x] OpenGraph para redes sociales
- [x] Sitemap.xml (auto-generado por Next.js)
- [ ] robots.txt personalizado
- [ ] Favicon y app icons
- [ ] Google Search Console verificado
- [ ] Schema.org markup (JSON-LD)
- [ ] Velocidad optimizada (Lighthouse score 90+)

### Generar Sitemap

Next.js 14 genera automáticamente. Para customizar, crea `/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://tudominio.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... más URLs
  ]
}
```

## 🎯 Performance

### Optimizaciones Implementadas

- ✅ Code splitting automático (Next.js)
- ✅ Image optimization con next/image
- ✅ Font optimization (next/font)
- ✅ Lazy loading de componentes
- ✅ CSS modules y Tailwind purge
- ✅ Compresión gzip/brotli
- ✅ CDN edge caching (Vercel)

### Lighthouse Score Objetivo

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

## 📱 PWA (Opcional)

Convierte en Progressive Web App:

```bash
npm install next-pwa
```

## 🔐 Seguridad

Headers de seguridad ya configurados en `next.config.js`:

- X-Frame-Options
- X-DNS-Prefetch-Control
- Content Security Policy (agregar si es necesario)

## 📄 Licencia

Código del portafolio: MIT  
Contenido personal: © Harry Dev 2024

## 🤝 Soporte

¿Preguntas sobre el setup?

- 📧 Email: harry@harrydev.com
- 💬 LinkedIn: [linkedin.com/in/harrydev](https://linkedin.com/in/harrydev)
- 🐙 GitHub Issues: Abre un issue

## 🎓 Recursos Adicionales

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Desarrollado con 💚 por Harry Dev**  
*De principios éticos milenarios a soluciones de IA modernas*
