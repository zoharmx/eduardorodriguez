import { Metadata } from 'next'
import { ArrowRight, Star, ExternalLink, Rocket, Code, Phone, MapPin, FileSignature, Brain, Shield, Truck, Calculator, Mic } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'All Projects | Eduardo Rodriguez Portfolio',
  description: 'Complete portfolio of AI, Voice Agents, IoT, and Full-Stack projects. Ethical AI, Voice Commerce, GPS Tracking, Legal Tech and more.',
}

type ColorKey = 'emerald' | 'cyan' | 'purple' | 'blue' | 'amber'

interface Project {
  id: string
  title: string
  company: string
  metric: string
  metricLabel: string
  description: string
  tags: string[]
  color: ColorKey
  icon: React.ReactNode
  featured?: boolean
  liveUrl?: string
}

const allProjects: Project[] = [
  {
    id: 'tikun-olam',
    title: 'Tikun Olam - Observable Ethical AI',
    company: 'Google Cloud x Datadog Winner',
    metric: '73%',
    metricLabel: 'Bias Detected',
    description: 'First ethical AI pipeline with full observability. Detects civilizational biases by comparing Western vs Eastern AI models.',
    tags: ['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'DeepSeek'],
    color: 'emerald',
    icon: <Brain className="w-6 h-6" />,
    featured: true,
    liveUrl: 'https://tikun.pro',
  },
  {
    id: 'binah-sigma',
    title: 'Binah-Σ - Cognitive Decision Engine',
    company: 'Enterprise API',
    metric: '0.92',
    metricLabel: 'Binah-Σ Index',
    description: 'Cognitive evaluation engine producing structured, auditable outputs for enterprise governance, ESG compliance, and policy analysis.',
    tags: ['FastAPI', 'Pydantic', 'OpenAI SDK', 'Docker', 'Railway'],
    color: 'emerald',
    icon: <Shield className="w-6 h-6" />,
    featured: true,
    liveUrl: 'https://binahsigma.pro',
  },
  {
    id: 'vocalisai',
    title: 'VocalisAI - Voice Agent with Payments',
    company: 'Automated Sales',
    metric: 'Voice-to-Pay',
    metricLabel: 'Push-to-Link',
    description: 'Autonomous phone agent capable of closing sales. Integrates ElevenLabs for natural conversation and Stripe for real-time payment generation.',
    tags: ['ElevenLabs', 'Twilio', 'Stripe API', 'FastAPI'],
    color: 'purple',
    icon: <Phone className="w-6 h-6" />,
  },
  {
    id: 'hoymismo-gps',
    title: 'HoyMismoGPS - IoT Infrastructure',
    company: 'Enterprise Logistics',
    metric: '500+',
    metricLabel: 'Assets Monitored',
    description: 'High-concurrency tracking system with sub-second latency. Processes TCP/IP binary protocols for real-time fleet monitoring.',
    tags: ['Python Asyncio', 'TCP/IP', 'Redis', 'Mapbox GL'],
    color: 'cyan',
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    id: 'signaflow',
    title: 'SignaFlow - Legal Tech SaaS',
    company: 'SaaS Platform',
    metric: 'SHA-256',
    metricLabel: 'Audit Trail',
    description: 'Digital signature platform with legal validity. Uses AI (Gemini) for contract drafting and Canvas API for biometric signatures.',
    tags: ['React 19', 'Gemini Pro', 'Firebase Auth', 'Canvas API'],
    color: 'purple',
    icon: <FileSignature className="w-6 h-6" />,
    liveUrl: 'https://contratossignaflow.web.app/',
  },
  {
    id: 'ethica-ai',
    title: 'Ethica.AI Framework',
    company: 'Decision Systems',
    metric: '10-Layer',
    metricLabel: 'Pipeline',
    description: 'Multi-Provider architecture for corporate decisions. Orchestrates Gemini, Mistral and DeepSeek to eliminate biases.',
    tags: ['Multi-LLM Orch', 'GraphQL', 'Python SDK', 'Pydantic'],
    color: 'emerald',
    icon: <Brain className="w-6 h-6" />,
  },
  {
    id: 'enterprise-logistics',
    title: 'Enterprise Logistics OS',
    company: 'HoyMismo Courier',
    metric: 'All-in-One',
    metricLabel: 'CRM + AI',
    description: 'Complete operating system for international logistics. Integrates CRM, billing, tracking and AI assistant in unified dashboard.',
    tags: ['Next.js 14', 'Firebase', 'Tailwind', 'Recharts'],
    color: 'cyan',
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: 'ahuevoesverde',
    title: 'A Huevo Es Verde - E-Commerce PWA',
    company: 'Food Delivery',
    metric: '$22K',
    metricLabel: 'Dev Value',
    description: 'Complete e-commerce platform for food delivery with Stripe payments, WhatsApp notifications, and kitchen display system.',
    tags: ['Firebase', 'Stripe', 'Twilio', 'PWA', 'Tailwind'],
    color: 'amber',
    icon: <Code className="w-6 h-6" />,
    liveUrl: 'https://ahuevoesverde.web.app',
  },
  {
    id: 'yectospro',
    title: 'YectosPro - Project Management',
    company: 'SaaS Platform',
    metric: 'All-in-One',
    metricLabel: 'Projects + Finance',
    description: 'Professional project management and invoicing platform for freelancers and agencies. PWA with offline capabilities.',
    tags: ['React', 'Firebase', 'PWA', 'Analytics'],
    color: 'blue',
    icon: <Rocket className="w-6 h-6" />,
    liveUrl: 'https://yectospro.web.app',
  },
  {
    id: 'calculadora-twilio',
    title: 'Twilio Cost Calculator',
    company: 'Developer Tool',
    metric: 'Real-time',
    metricLabel: 'Cost Estimation',
    description: 'Voice agent cost calculator with Twilio pricing. Helps businesses estimate costs for voice AI deployments.',
    tags: ['React', 'Twilio API', 'Cost Analysis'],
    color: 'purple',
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    id: 'whisper-openai',
    title: 'Whisper AI Transcription',
    company: 'AI Tool',
    metric: '95%+',
    metricLabel: 'Accuracy',
    description: 'Speech-to-text transcription service using OpenAI Whisper. Supports multiple languages and audio formats.',
    tags: ['OpenAI Whisper', 'Python', 'FastAPI', 'Audio Processing'],
    color: 'cyan',
    icon: <Mic className="w-6 h-6" />,
  },
]

const colorStyles: Record<ColorKey, { border: string; text: string; bg: string; hoverBorder: string }> = {
  emerald: {
    border: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/50',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  cyan: {
    border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/50',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  purple: {
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/50',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  blue: {
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/50',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  amber: {
    border: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/50',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
}

export default function AllProjectsPage() {
  const featuredProjects = allProjects.filter(p => p.featured)
  const otherProjects = allProjects.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A complete portfolio of AI systems, voice agents, IoT infrastructure, and full-stack applications.
              Each project represents a unique solution to real business challenges.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-primary-400 fill-primary-400" />
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => {
                const styles = colorStyles[project.color]
                return (
                  <div
                    key={project.id}
                    className={`group p-6 bg-slate-800/50 border ${styles.border} ${styles.hoverBorder} rounded-xl backdrop-blur-sm transition-all ring-2 ring-primary-500/20`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${styles.bg}`}>
                        <div className={styles.text}>{project.icon}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${styles.text} font-display`}>
                          {project.metric}
                        </div>
                        <div className="text-sm text-slate-400">{project.metricLabel}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className={`${styles.text} text-sm mb-3`}>{project.company}</div>
                    <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${styles.bg} ${styles.text} text-xs rounded-full border ${styles.border}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                      <Link
                        href={`/case-studies/${project.id}`}
                        className={`inline-flex items-center gap-2 ${styles.text} text-sm font-medium group-hover:gap-3 transition-all`}
                      >
                        View Full Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => {
                const styles = colorStyles[project.color]
                return (
                  <div
                    key={project.id}
                    className={`group p-5 bg-slate-800/50 border ${styles.border} ${styles.hoverBorder} rounded-xl backdrop-blur-sm transition-all`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${styles.bg}`}>
                        <div className={styles.text}>{project.icon}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${styles.text} font-display`}>
                          {project.metric}
                        </div>
                        <div className="text-xs text-slate-400">{project.metricLabel}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className={`${styles.text} text-xs mb-2`}>{project.company}</div>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 ${styles.bg} ${styles.text} text-xs rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-slate-500 text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                      <Link
                        href={`/case-studies/${project.id}`}
                        className={`inline-flex items-center gap-1 ${styles.text} text-xs font-medium hover:gap-2 transition-all`}
                      >
                        Case Study <ArrowRight className="w-3 h-3" />
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-500 hover:text-white text-xs transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I specialize in AI systems, voice agents, and full-stack development.
              Let&apos;s discuss how I can help bring your vision to life.
            </p>
            <a
              href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule a Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
