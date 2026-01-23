import { Metadata } from 'next'
import { ArrowRight, Calendar, Clock, Tag, Brain, Code, Phone, Shield, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | AI, Ethics & Engineering Insights',
  description: 'Technical insights on AI ethics, voice agents, full-stack development, and enterprise AI solutions. Deep dives into Tikun Olam, BinahSigma, and more.',
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
  icon: React.ReactNode
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 'civilizational-bias-ai',
    title: 'The Hidden Bias: Why Your AI Thinks Like a Westerner',
    excerpt: 'How civilizational assumptions embedded in training data create systematic blind spots in AI decision-making, and why comparing Western vs Eastern models reveals 73% divergence on critical ethical questions.',
    category: 'AI Ethics',
    date: '2026-01-20',
    readTime: '8 min read',
    featured: true,
    icon: <Brain className="w-6 h-6" />,
    tags: ['AI Ethics', 'BinahSigma', 'Tikun Olam', 'Bias Detection'],
  },
  {
    id: 'building-voice-agents',
    title: 'Building Voice Agents That Close Sales: A Technical Deep Dive',
    excerpt: 'From conversation to payment in one call. How we integrated ElevenLabs, Twilio, and Stripe to create autonomous voice agents that generate $50K+ in monthly revenue.',
    category: 'Voice AI',
    date: '2026-01-18',
    readTime: '12 min read',
    featured: true,
    icon: <Phone className="w-6 h-6" />,
    tags: ['Voice AI', 'ElevenLabs', 'Twilio', 'Stripe', 'Automation'],
  },
  {
    id: 'structured-decision-systems',
    title: 'Beyond Chatbots: Building Auditable AI Decision Systems',
    excerpt: 'Why traditional AI outputs are useless for compliance, and how Binah-Σ produces structured, measurable evaluations suitable for enterprise governance.',
    category: 'Enterprise AI',
    date: '2026-01-15',
    readTime: '10 min read',
    icon: <Shield className="w-6 h-6" />,
    tags: ['Enterprise AI', 'Compliance', 'Pydantic', 'FastAPI'],
  },
  {
    id: 'iot-realtime-tracking',
    title: 'Sub-Second Fleet Tracking: Building High-Concurrency IoT Systems',
    excerpt: 'How we handle 500+ simultaneous GPS devices with Python Asyncio, TCP binary protocols, and Redis pub/sub for real-time logistics monitoring.',
    category: 'IoT & Infrastructure',
    date: '2026-01-12',
    readTime: '15 min read',
    icon: <Zap className="w-6 h-6" />,
    tags: ['IoT', 'Python Asyncio', 'TCP/IP', 'Redis', 'Real-time'],
  },
  {
    id: 'ai-governance-framework',
    title: 'AI Governance: A 10-Layer Framework for Ethical Decisions',
    excerpt: 'How the Kabbalistic Tree of Life inspired a computational architecture for ethical AI reasoning, and why separating ethical functions prevents moral collapse.',
    category: 'AI Ethics',
    date: '2026-01-10',
    readTime: '14 min read',
    icon: <Brain className="w-6 h-6" />,
    tags: ['AI Ethics', 'Governance', 'Tikun Olam', 'Framework'],
  },
  {
    id: 'serverless-ecommerce',
    title: 'Zero to E-Commerce in 30 Days: A Firebase Case Study',
    excerpt: 'Building a complete food delivery platform with PWA, Stripe payments, WhatsApp notifications, and kitchen display system using only serverless technologies.',
    category: 'Full-Stack',
    date: '2026-01-08',
    readTime: '11 min read',
    icon: <Code className="w-6 h-6" />,
    tags: ['Firebase', 'PWA', 'Stripe', 'Twilio', 'Serverless'],
  },
  {
    id: 'eu-ai-act-compliance',
    title: 'EU AI Act: What Developers Need to Know in 2026',
    excerpt: 'A practical guide to AI compliance requirements, risk classifications, and how to audit your AI systems before regulators do it for you.',
    category: 'Compliance',
    date: '2026-01-05',
    readTime: '9 min read',
    icon: <Shield className="w-6 h-6" />,
    tags: ['EU AI Act', 'Compliance', 'Regulation', 'Risk Assessment'],
  },
  {
    id: 'multi-llm-orchestration',
    title: 'Multi-LLM Orchestration: Reducing Bias Through Model Diversity',
    excerpt: 'Why using a single LLM is like asking one expert. How orchestrating Gemini, DeepSeek, and Mistral produces more balanced, bias-aware outputs.',
    category: 'AI Architecture',
    date: '2026-01-03',
    readTime: '13 min read',
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ['LLM', 'Orchestration', 'Bias', 'Architecture'],
  },
]

const categoryColors: Record<string, string> = {
  'AI Ethics': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Voice AI': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  'Enterprise AI': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'IoT & Infrastructure': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Full-Stack': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'Compliance': 'text-red-400 bg-red-500/10 border-red-500/20',
  'AI Architecture': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Insights & <span className="gradient-text">Deep Dives</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Technical explorations of AI ethics, voice automation, enterprise systems, and full-stack development.
              Lessons learned from building production systems that handle millions of requests.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-slate-800/50 border border-primary-500/20 hover:border-primary-500/50 rounded-2xl overflow-hidden transition-all"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${categoryColors[post.category] || 'bg-slate-700'}`}>
                        {post.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category] || 'bg-slate-700'}`}>
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-primary-400 font-medium hover:gap-3 transition-all"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-slate-800/30 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
                >
                  <div className={`shrink-0 p-4 rounded-xl ${categoryColors[post.category] || 'bg-slate-700'} self-start`}>
                    {post.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${categoryColors[post.category] || 'bg-slate-700'}`}>
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-700/30 text-slate-500 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on AI & Ethics
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get notified when new articles are published. Deep technical content on AI ethics,
              voice automation, and enterprise systems delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
