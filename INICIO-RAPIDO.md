# 🚀 Guía de Inicio Rápido - Tu Portfolio Next.js

## ¡Bienvenido Harry! 👋

Has recibido un portafolio completo y production-ready. Aquí está todo lo que necesitas saber para ponerlo en marcha en **menos de 10 minutos**.

---

## 📋 Checklist de Primeros Pasos

### ✅ 1. Instalar Dependencias (2 minutos)

```bash
cd portfolio-nextjs
npm install
```

### ✅ 2. Correr en Local (30 segundos)

```bash
npm run dev
```

Abre http://localhost:3000 - ¡Deberías ver tu portfolio funcionando!

### ✅ 3. Personalizar Contenido Básico (5 minutos)

**A. Tu Nombre y Branding**

Archivo: `/app/layout.tsx` (líneas 32-45)
```typescript
title: 'Tu Nombre | Tu Tagline'  // ← Cambia esto
description: 'Tu descripción...'  // ← Y esto
```

Archivo: `/components/Navigation.tsx` (línea 49)
```typescript
<Link href="/" className="...">
  TuNombre  {/* ← Cambia "HarryDev" */}
</Link>
```

**B. Métricas del Hero**

Archivo: `/components/sections/HeroSection.tsx` (líneas 15-20)
```typescript
const metrics = [
  { number: 500000, suffix: '+', label: 'Tus métricas' },
  // ← Actualiza con tus números reales
]
```

**C. Tus Proyectos**

Archivo: `/components/sections/ProjectsShowcase.tsx` (líneas 7-40)
```typescript
const projects = [
  {
    id: 'tu-proyecto',
    title: 'Título del Proyecto',
    // ← Reemplaza con tus proyectos reales
  }
]
```

### ✅ 4. Configurar Formulario de Contacto (3 minutos)

**Opción Más Fácil: Formspree**

1. Ve a https://formspree.io
2. Crea cuenta gratis
3. Copia tu Form ID

Archivo: `/app/contact/page.tsx` (línea 34)
```typescript
const response = await fetch('https://formspre.io/f/TU_FORM_ID', {
  // ← Pega tu Form ID aquí
```

¡Listo! Tu formulario funcionará.

---

## 🎨 Personalización Avanzada (Opcional)

### Colores

Archivo: `/tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#10b981',  // ← Tu color principal
  },
  accent: {
    cyan: '#06b6d4',  // ← Tus acentos
  }
}
```

### Fuentes

Archivo: `/app/layout.tsx` (líneas 6-20)
```typescript
// Cambia Space_Grotesk por otra fuente de Google Fonts
import { Tu_Fuente } from 'next/font/google'
```

### Links Sociales

Archivo: `/components/Footer.tsx` (líneas 11-15)
```typescript
social: [
  { name: 'LinkedIn', href: 'TU_LINKEDIN' },
  // ← Actualiza tus links
]
```

---

## 🚀 Deploy a Producción (5 minutos)

### Opción A: Vercel (Recomendada)

1. **Sube a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin TU_REPO
git push -u origin main
```

2. **Deploy en Vercel**
   - Ve a https://vercel.com
   - Click "Import Project"
   - Selecciona tu repo
   - Click "Deploy"

3. **¡Listo!** Tu sitio está en: `tu-proyecto.vercel.app`

4. **Dominio Custom** (opcional)
   - Settings > Domains
   - Agregar tu dominio
   - Seguir instrucciones DNS

### Opción B: Netlify

```bash
npm run build
```

Arrastra carpeta `.next` a Netlify Drop.

---

## 📝 Crear Nuevos Case Studies

1. **Duplicar Ejemplo**
```bash
cp -r app/case-studies/voice-ai-hoymismo app/case-studies/mi-proyecto
```

2. **Editar Contenido**

Archivo: `/app/case-studies/mi-proyecto/page.tsx`
- Cambia metadata (líneas 6-8)
- Actualiza título (línea 31)
- Modifica secciones (El Problema, Solución, etc.)

3. **Agregar a Showcase**

Archivo: `/components/sections/ProjectsShowcase.tsx`
```typescript
projects.push({
  id: 'mi-proyecto',
  title: 'Mi Nuevo Proyecto',
  // ...
})
```

---

## 🎯 Checklist Pre-Launch

Antes de compartir tu portfolio, verifica:

### Contenido
- [ ] Nombre y branding actualizados
- [ ] Métricas reales (no ejemplos)
- [ ] Al menos 3 proyectos con case studies
- [ ] Links sociales funcionando
- [ ] Formulario de contacto conectado

### SEO
- [ ] Title y description personalizados
- [ ] OpenGraph image creada (1200x630px)
- [ ] Favicon agregado en `/public/favicon.ico`
- [ ] Google Analytics configurado (opcional)

### Testing
- [ ] Probado en mobile
- [ ] Formulario envía emails
- [ ] Todos los links funcionan
- [ ] Velocidad > 90 en PageSpeed Insights

---

## 🐛 Troubleshooting

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 is already in use"
```bash
# Mata el proceso
lsof -ti:3000 | xargs kill -9

# O usa otro puerto
npm run dev -- -p 3001
```

### Build Error
```bash
# Limpia cache
rm -rf .next
npm run build
```

---

## 📚 Estructura del Proyecto

```
portfolio-nextjs/
├── app/                      # Páginas (App Router)
│   ├── layout.tsx           # Layout principal + SEO
│   ├── page.tsx             # Homepage
│   ├── contact/             # Página de contacto
│   │   └── page.tsx
│   └── case-studies/        # Case studies
│       └── [proyecto]/
│           └── page.tsx
├── components/              # Componentes React
│   ├── Navigation.tsx       # Navbar
│   ├── Footer.tsx          # Footer
│   └── sections/           # Secciones del home
│       ├── HeroSection.tsx
│       ├── StorySection.tsx
│       ├── ProjectsShowcase.tsx
│       └── CTASection.tsx
├── public/                  # Assets estáticos
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── images/
├── styles/                  # Estilos globales
├── tailwind.config.js      # Configuración Tailwind
├── next.config.js          # Configuración Next.js
└── package.json            # Dependencias
```

---

## 💡 Pro Tips

### 1. Actualiza Contenido Regularmente
- Agrega nuevos proyectos cada 2-3 meses
- Actualiza métricas (llamadas procesadas, clientes, etc.)
- Mantén blog activo (1-2 posts/mes = mejor SEO)

### 2. Optimiza Para Conversión
- A/B testing de CTAs diferentes
- Analytics para ver qué proyectos generan más interés
- Heatmaps (Hotjar) para ver dónde hacen click

### 3. SEO Continuo
- Google Search Console: monitorea keywords
- Backlinks: comparte en redes, Medium, dev.to
- Velocidad: mantén Lighthouse score > 90

### 4. Captura Leads
- Usa Calendly para llamadas
- Lead magnet: "Guía: 5 Formas de Implementar AI" (PDF)
- Newsletter: MailChimp o ConvertKit

---

## 🆘 Necesitas Ayuda?

- **Documentación**: Lee el README.md completo
- **Issues Comunes**: Revisa troubleshooting arriba
- **Chat GPT**: Pregúntale sobre Next.js/React
- **Comunidad**: r/nextjs en Reddit

---

## 🎉 ¡Felicidades!

Ahora tienes un portfolio profesional que:
- ✅ Se ve increíble en cualquier dispositivo
- ✅ Está optimizado para SEO
- ✅ Cuenta tu historia de forma única
- ✅ Convierte visitantes en clientes
- ✅ Es fácil de actualizar

**Siguiente paso:** ¡Compartelo en LinkedIn y comienza a recibir leads! 🚀

---

*Desarrollado con 💚 para Harry Dev*  
*¿Preguntas? Revisa el README.md principal*
