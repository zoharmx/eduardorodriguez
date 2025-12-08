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
    id: 'voice-ai-hoymismo',
    title: 'Voice AI para Importación de Vehículos',
    company: 'Agencia HoyMismo',
    metric: '80%',
    metricLabel: 'de consultas automatizadas',
    impact: 'De 6 empleados saturados a un agente IA 24/7',
    color: 'emerald',
    tags: ['ElevenLabs', 'Gemini', 'Twilio', 'Firebase'],
    description: 'Sistema de voice agent que maneja consultas sobre importación de vehículos desde USA a México, con routing inteligente basado en ubicación de aduana.',
  },
  {
    id: 'hoymismo-gps',
    title: 'Plataforma de Rastreo GPS',
    company: 'HoyMismoGPS',
    metric: '1,500+',
    metricLabel: 'vehículos monitoreados',
    impact: 'Dashboard en tiempo real con Firebase',
    color: 'cyan',
    tags: ['React', 'Firebase', 'Google Maps API', 'Real-time'],
    description: 'Sistema completo de rastreo vehicular con dashboard administrativo, notificaciones en tiempo real y reportes automatizados.',
  },
  {
    id: 'logistics-dashboards',
    title: 'Dashboards de Logística',
    company: 'Múltiples Clientes',
    metric: '73%',
    metricLabel: 'reducción en tiempo de respuesta',
    impact: 'React + APIs inteligentes',
    color: 'purple',
    tags: ['React', 'Next.js', 'Chart.js', 'API Integration'],
    description: 'Dashboards personalizados para empresas de logística con métricas en tiempo real, análisis predictivo y reportes automatizados.',
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
