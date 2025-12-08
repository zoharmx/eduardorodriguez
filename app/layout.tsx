import { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Lexend } from 'next/font/google'
import './globals.css'

// Tipografía distintiva y moderna
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eduardorodriguez.site'), // 
  title: {
    default: 'Eduardo Rodriguez Dev | Voice AI & Full-Stack Solutions',
    template: '%s | Eduardo Rodriguez Dev'
  },
  description: 'Desarrollo agentes  de IA conversacionales que atienden 500+ llamadas/mes mientras duermes. Especializado en Voice AI, React y soluciones empresariales que transforman negocios.',
  keywords: ['Voice AI', 'Full Stack Developer', 'React', 'Next.js', 'ElevenLabs', 'Gemini', 'Twilio', 'Firebase', 'AI Solutions', 'Importación Vehículos', 'Web Development', 'México'],
  authors: [{ name: 'Eduardo Rodriguez Dev' }],
  creator: 'Eduardo Rodriguez Dev',
  publisher: 'Eduardo Rodriguez Dev',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://eduardorodriguez.site',
    title: 'Eduardo Rodriguez Dev | Voice AI & Full-Stack Solutions',
    description: 'Agentes de IA que trabajan 24/7 • 500K+ llamadas procesadas • 7 años desarrollando AI ética',
    siteName: 'Eduardo Rodriguez Dev Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eduardo Rodriguez Dev - Voice AI Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduardo Rodriguez Dev | Voice AI & Full-Stack Solutions',
    description: 'Desarrollo agentes de IA que atienden 500+ llamadas/mes',
    images: ['/og-image.jpg'],
    creator: '@harrydev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion', // Añadir Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${lexend.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
