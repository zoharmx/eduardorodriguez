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
    title: 'Tikun Olam - Observable Ethical AI',
    company: 'Google Cloud x Datadog Winner',
    metric: '73%',
    metricLabel: 'Bias Detected',
    impact: 'First ethical AI pipeline with full observability in Datadog',
    color: 'emerald',
    tags: ['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'DeepSeek'],
    description: 'Detects civilizational biases by comparing Western vs Eastern AI models. Real-time bias monitoring architecture with custom metrics.',
    featured: true,
  },
  {
    id: 'vocalisai',
    title: 'VocalisAI - Voice Agent with Payments',
    company: 'Automated Sales',
    metric: 'Voice-to-Pay',
    metricLabel: 'Push-to-Link',
    impact: 'Autonomous phone agent capable of closing sales',
    color: 'purple',
    tags: ['ElevenLabs', 'Twilio', 'Stripe API', 'FastAPI'],
    description: 'Integrates ElevenLabs for natural conversation and Stripe for real-time "Push-to-Link" payment generation during calls.',
  },
  {
    id: 'hoymismo-gps',
    title: 'HoyMismoGPS - IoT Infrastructure',
    company: 'Enterprise Logistics',
    metric: '500+',
    metricLabel: 'Assets Monitored',
    impact: 'High-concurrency tracking system with sub-second latency',
    color: 'cyan',
    tags: ['Python Asyncio', 'TCP/IP', 'Redis', 'Mapbox GL'],
    description: 'Processes TCP/IP binary protocols for real-time monitoring of massive fleets with high-availability architecture.',
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
      chapter={3}
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

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="text-slate-400 text-sm">
                  {project.impact}
                </div>
                <Link
                  href={`/case-studies/${project.id}`}
                  className={`inline-flex items-center gap-2 ${styles.text} text-sm font-medium group-hover:gap-3 transition-all`}
                >
                  View full case study
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
          View all projects
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </StorySection>
  )
}
