import { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Lexend } from 'next/font/google'
import './globals.css'
import VoiceAgentButton from '@/components/VoiceAgentButton'

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
  metadataBase: new URL('https://eduardorodriguez.site'),
  title: {
    default: 'Eduardo Rdz | Voice AI & Full-Stack Solutions',
    template: '%s | Eduardo Rdz'
  },
  description: 'I build conversational AI agents that handle 500+ calls/month while you sleep. Specialized in Voice AI, React, and enterprise solutions that transform businesses.',
  keywords: ['Voice AI', 'Full Stack Developer', 'React', 'Next.js', 'ElevenLabs', 'Gemini', 'Twilio', 'Firebase', 'AI Solutions', 'Ethical AI', 'Tikun Olam', 'BinahSigma'],
  authors: [{ name: 'Eduardo Rodriguez' }],
  creator: 'Eduardo Rodriguez',
  publisher: 'Eduardo Rodriguez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eduardorodriguez.site',
    title: 'Eduardo Rdz | Voice AI & Full-Stack Solutions',
    description: 'AI agents working 24/7 • 500K+ calls processed • 7 years developing Ethical AI',
    siteName: 'Eduardo Rdz Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eduardo Rdz - Voice AI Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduardo Rdz | Voice AI & Full-Stack Solutions',
    description: 'I build AI agents that handle 500+ calls/month',
    images: ['/og-image.jpg'],
    creator: '@eduardordz',
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
    google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lexend.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {children}
        <VoiceAgentButton />
      </body>
    </html>
  )
}
