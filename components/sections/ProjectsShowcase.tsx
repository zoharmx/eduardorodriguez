'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import StorySection from './StorySection'

type ColorKey = 'emerald' | 'cyan' | 'purple'

interface Project {
  id: string
  title: string
  company: string
  metric: string
  metricLabel: string
  impact: string
  color: ColorKey
  tags: string[]
  description: string
}

const projects: Project[] = [
  {
    id: 'tikun-olam',
    title: 'Tikun Olam - Observable Ethical AI',
    company: 'Google Cloud x Datadog Winner',
    metric: '73%',
    metricLabel: 'Bias Detected',
    impact: 'Primera pipeline de IA ética con observabilidad total en Datadog',
    color: 'emerald',
    tags: ['Python', 'Vertex AI', 'Datadog', 'BinahSigma'],
    description: 'Detecta desviaciones civilizatorias comparando modelos Occidentales vs Orientales. Arquitectura de observabilidad que monitorea sesgos en tiempo real.',
  },
  {
    id: 'vocalisai',
    title: 'VocalisAI - Voice Agent with Payments',
    company: 'Automated Sales',
    metric: 'Voice-to-Pay',
    metricLabel: 'Push-to-Link',
    impact: 'Agente telefónico autónomo capaz de cerrar ventas',
    color: 'purple',
    tags: ['ElevenLabs', 'Twilio', 'Stripe API', 'FastAPI'],
    description: 'Integra ElevenLabs para conversación natural y Stripe para generar enlaces de pago "Push-to-Link" en tiempo real durante llamadas.',
  },
  {
    id: 'hoymismo-gps',
    title: 'HoyMismoGPS - IoT Infrastructure',
    company: 'Logística Enterprise',
    metric: '500+',
    metricLabel: 'Assets Monitoreados',
    impact: 'Sistema de rastreo de alta concurrencia con latencia sub-segundo',
    color: 'cyan',
    tags: ['Python Asyncio', 'TCP/IP', 'Redis', 'Mapbox GL'],
    description: 'Procesa protocolos binarios TCP/IP para monitoreo en tiempo real de flotas masivas con arquitectura de alta disponibilidad.',
  },
  {
    id: 'signaflow',
    title: 'SignaFlow - Legal Tech SaaS',
    company: 'SaaS Platform',
    metric: 'SHA-256',
    metricLabel: 'Audit Trail',
    impact: 'Plataforma de firma digital con validez legal',
    color: 'purple',
    tags: ['React 19', 'Gemini Pro', 'Firebase Auth', 'Canvas API'],
    description: 'Utiliza IA (Gemini) para redactar contratos y Canvas API para firmas biométricas con sello de auditoría criptográfico.',
  },
  {
    id: 'ethica-ai',
    title: 'Ethica.AI Framework',
    company: 'Decision Systems',
    metric: '10-Layer',
    metricLabel: 'Pipeline',
    impact: 'Arquitectura Multi-Proveedor para decisiones corporativas',
    color: 'emerald',
    tags: ['Multi-LLM Orch', 'GraphQL', 'Python SDK', 'Pydantic'],
    description: 'Orquesta Gemini, Mistral y DeepSeek para eliminar sesgos en la toma de decisiones corporativas críticas.',
  },
  {
    id: 'enterprise-logistics',
    title: 'Enterprise Logistics OS',
    company: 'HoyMismo Paquetería',
    metric: 'All-in-One',
    metricLabel: 'CRM + AI',
    impact: 'Sistema operativo completo para logística internacional',
    color: 'cyan',
    tags: ['Next.js 14', 'Firebase', 'Tailwind', 'Recharts'],
    description: 'Integra CRM, facturación, tracking y asistente de IA en un dashboard unificado para operaciones de paquetería.',
  }
]

const colorStyles: Record<ColorKey, { border: string; text: string; bg: string }> = {
  emerald: {
    border: 'border-primary-500/20 hover:border-primary-500/50',
    text: 'text-primary-400',
    bg: 'bg-primary-500/10',
  },
  cyan: {
    border: 'border-accent-cyan/20 hover:border-accent-cyan/50',
    text: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
  },
  purple: {
    border: 'border-accent-purple/20 hover:border-accent-purple/50',
    text: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  }
}

export default function ProjectsShowcase() {
  return (
    <StorySection
      id="proyectos"
      chapter={3}
      icon={<Rocket className="w-8 h-8" />}
      color="purple"
      title="Después lo apliqué a problemas reales"
      highlight="problemas reales"
    >
      <p className="text-xl text-slate-300 leading-relaxed mb-12">
        La teoría es hermosa, pero los negocios necesitan{' '}
        <span className="text-accent-purple font-semibold">resultados tangibles</span>. 
        Tomé todo lo aprendido y comencé a resolver problemas empresariales reales.
      </p>

      <div className="space-y-6">
        {projects.map((project, i) => {
          const styles = colorStyles[project.color]
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`group p-6 bg-slate-800/50 border ${styles.border} rounded-xl backdrop-blur-sm transition-all cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className={`${styles.text} text-sm mb-3`}>
                    {project.company}
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${styles.bg} ${styles.text} text-xs rounded-full border ${styles.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center md:text-right min-w-[140px]">
                  <div className={`text-3xl md:text-4xl font-bold ${styles.text} font-display`}>
                    {project.metric}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="text-slate-400 text-sm">
                  💡 {project.impact}
                </div>
                <Link
                  href={`/case-studies/${project.id}`}
                  className={`inline-flex items-center gap-2 ${styles.text} text-sm font-medium group-hover:gap-3 transition-all`}
                >
                  Ver caso de estudio completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* View All Projects Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-primary-500/30 rounded-lg hover:border-primary-500/50 hover:bg-slate-800/70 transition-all group"
        >
          Ver todos los proyectos
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </StorySection>
  )
}
