'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowRight, ExternalLink, Star } from 'lucide-react'
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
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'tikun-olam',
    title: 'Tikun Olam v2 - Observable Ethical AI',
    company: 'Finalist — Google Cloud x Datadog Hackathon',
    metric: '73%',
    metricLabel: 'Bias Detected',
    impact: '10-Sefirot pipeline with 5 AI providers. NO_GO on Anthropic×Pentagon $2.4B contract.',
    color: 'emerald',
    tags: ['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'GPT-4o', 'Grok', 'Mistral'],
    description: 'v2: 10-Sefirot pipeline comparing 5 AI providers simultaneously. BinahSigma civilizational bias detection + ERI (Ethical Risk Index) on every decision.',
    featured: true,
  },
  {
    id: 'vocalisai',
    title: 'VocalisAI V3 - Multi-Agent Voice Intelligence',
    company: 'Google Gemini Live Hackathon Finalist',
    metric: '6+1',
    metricLabel: 'Agents (Akiva)',
    impact: 'Akiva meta-agent orchestrating 6 specialists with TOF ethical layer on every call',
    color: 'purple',
    tags: ['Gemini Live API', 'ElevenLabs', 'Twilio', 'Stripe', 'TOF Layer'],
    description: 'Akiva meta-agent supervises Alex, Nova, Diana, Marco, Sara & Raul. Every interaction evaluated through 5 Sefirotic ethical dimensions in real time.',
    featured: true,
  },
  {
    id: 'hoymismo-gps',
    title: 'HoyMismoGPS V2 - Enterprise Fleet Management',
    company: 'Enterprise Logistics',
    metric: '500+',
    metricLabel: 'Assets Monitored',
    impact: 'Google Cloud architecture: Cloud Run, BigQuery, Firestore, Pub/Sub for enterprise fleet',
    color: 'cyan',
    tags: ['Cloud Run', 'BigQuery', 'Firestore', 'Pub/Sub', 'Python Asyncio'],
    description: 'V2: Full Google Cloud architecture. Cloud Run for APIs, BigQuery for analytics, Firestore for real-time state, Pub/Sub for event streaming. Enterprise fleet management.',
  },
  {
    id: 'hoymismo-dashboard',
    title: 'HoyMismo Dashboard Agencia',
    company: 'HoyMismo Platform',
    metric: 'All-in-One',
    metricLabel: 'OS Agencias',
    impact: 'Sistema operativo para agencias aduanales e importación vehicular',
    color: 'cyan',
    tags: ['Next.js 14', 'Firebase', 'Google Cloud', 'Tailwind'],
    description: 'Sistema operativo completo para agencias aduanales e importación vehicular: CRM, gestión de expedientes, tracking de importaciones, facturación y BI.',
  },
  {
    id: 'signaflow',
    title: 'SignaFlow - Legal Tech SaaS',
    company: 'SaaS Platform',
    metric: 'SHA-256',
    metricLabel: 'Audit Trail',
    impact: 'Digital signature platform with legal validity',
    color: 'purple',
    tags: ['React 19', 'Gemini Pro', 'Firebase Auth', 'Canvas API'],
    description: 'Uses AI (Gemini) for contract drafting and Canvas API for biometric signatures with cryptographic audit seals.',
  },
  {
    id: 'binah-sigma',
    title: 'Binah-Σ - Cognitive Decision Engine',
    company: 'Enterprise API',
    metric: '0.92',
    metricLabel: 'Binah-Σ Index',
    impact: 'Auditable AI infrastructure for structured decision evaluation',
    color: 'emerald',
    tags: ['FastAPI', 'Pydantic', 'OpenAI SDK', 'Docker', 'Railway'],
    description: 'Cognitive evaluation engine that produces structured, auditable outputs for enterprise governance, ESG compliance, and policy analysis.',
    featured: true,
  },
  {
    id: 'ethica-ai',
    title: 'Ethica.AI Framework',
    company: 'Decision Systems',
    metric: '10-Layer',
    metricLabel: 'Pipeline',
    impact: 'Multi-Provider architecture for corporate decisions',
    color: 'emerald',
    tags: ['Multi-LLM Orch', 'GraphQL', 'Python SDK', 'Pydantic'],
    description: 'Orchestrates Gemini, Mistral and DeepSeek to eliminate biases in critical corporate decision-making.',
  },
  {
    id: 'enterprise-logistics',
    title: 'Enterprise Logistics OS',
    company: 'HoyMismo Courier',
    metric: 'All-in-One',
    metricLabel: 'CRM + AI',
    impact: 'Complete operating system for international logistics',
    color: 'cyan',
    tags: ['Next.js 14', 'Firebase', 'Tailwind', 'Recharts'],
    description: 'Integrates CRM, billing, tracking and AI assistant in a unified dashboard for courier operations.',
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
      id="projects"
      chapter={4}
      icon={<Rocket className="w-8 h-8" />}
      color="purple"
      title="Then I applied it to real problems"
      highlight="real problems"
    >
      <p className="text-xl text-slate-300 leading-relaxed mb-12">
        Theory is beautiful, but businesses need{' '}
        <span className="text-accent-purple font-semibold">tangible results</span>.
        I took everything I learned and started solving real business problems.
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
              className={`group p-6 bg-slate-800/50 border ${styles.border} rounded-xl backdrop-blur-sm transition-all cursor-pointer ${project.featured ? 'ring-2 ring-primary-500/30' : ''}`}
            >
              {project.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
                  <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider">Featured Project</span>
                </div>
              )}
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
                <div className="text-slate-400 text-sm">
                  {project.impact}
                </div>
                <Link
                  href={`/case-studies/${project.id}`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 ${styles.bg} ${styles.text} border-2 ${styles.border} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg`}
                >
                  View Full Case Study
                  <ArrowRight className="w-5 h-5" />
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
          View all projects
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </StorySection>
  )
}
