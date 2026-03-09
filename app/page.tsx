'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Sparkles, Code, Brain, Rocket, Phone, TrendingUp, Calendar, MessageSquare, ArrowRight, Download, FileText, Play, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import StorySection from '@/components/sections/StorySection'
import ProjectsShowcase from '@/components/sections/ProjectsShowcase'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.story-section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSection />

      {/* Chapter 1: The Question */}
      <StorySection
        id="story"
        chapter={1}
        icon={<Sparkles className="w-8 h-8" />}
        color="emerald"
        title="It all started with a question"
        highlight="a question"
        subtitle="Can artificial intelligence make ethical decisions?"
      >
        <p className="text-lg text-slate-400 leading-relaxed mb-6">
          While other developers focused on making AI faster or more accurate,
          I became obsessed with something deeper: how can a machine understand right and wrong?
        </p>

        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          It wasn&apos;t enough to create systems that worked. I needed to create systems that{' '}
          <span className="text-primary-400 font-semibold">did the right thing</span>.
        </p>

        <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm mb-8">
          <div className="flex items-start gap-4">
            <Brain className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-primary-400 mb-2">The Insight</div>
              <div className="text-slate-300">
                The answer was in an unexpected place: millennial Kabbalistic principles
                applied to modern computational systems.
              </div>
            </div>
          </div>
        </div>

        {/* TOF v2 + VocalisIA v3 advances teaser */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl"
          >
            <div className="text-primary-400 font-bold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Tikun Olam v2
            </div>
            <p className="text-slate-300 text-sm">
              10-Sefirot pipeline with <span className="text-primary-400 font-semibold">5 AI providers</span> (Grok, Mistral, Gemini, GPT-4o, DeepSeek).
              BinahSigma civilizational bias detection. ERI (Ethical Risk Index) on every decision.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 rounded-xl"
          >
            <div className="text-accent-cyan font-bold mb-2 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              VocalisIA v3
            </div>
            <p className="text-slate-300 text-sm">
              Akiva meta-agent supervising <span className="text-accent-cyan font-semibold">6 specialized agents</span> + TOF ethical layer
              evaluating every call. Google Gemini Live API for real-time voice AI.
            </p>
          </motion.div>
        </div>
      </StorySection>

      {/* Chapter 2: Tikun Olam */}
      <StorySection
        chapter={2}
        icon={<Code className="w-8 h-8" />}
        color="cyan"
        title="Tikun Olam: The Ethical AI Engine That Changes the Game"
        highlight="Tikun Olam"
      >
        <p className="text-xl text-slate-300 leading-relaxed mb-4">
          The first ethical AI pipeline with{' '}
          <span className="text-accent-cyan font-semibold">full observability in Datadog</span>.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm mb-8">
          Finalist — Google Cloud x Datadog Hackathon
        </div>

        {/* v2 architecture highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: '🔗', title: '10-Sefirot Pipeline', desc: 'Full Tree of Life architecture: from Keter (alignment validation) to Malchut (final decision). Each stage a distinct cognitive function.' },
            { icon: '🤖', title: '5 AI Providers', desc: 'Grok, Mistral, Gemini, GPT-4o & DeepSeek compared simultaneously for civilizational bias detection.' },
            { icon: '🧠', title: 'BinahSigma + ERI', desc: 'Proprietary bias detection algorithm producing an Ethical Risk Index (ERI) on every analysis. 73% bias delta on Nvidia-Groq case.' },
            { icon: '🚫', title: 'Real Case: NO_GO', desc: 'Anthropic vs Pentagon $2.4B contract: TOF returned NO_GO recommendation — AI should not power autonomous weapons.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-slate-800/50 border border-accent-cyan/20 rounded-xl backdrop-blur-sm hover:border-accent-cyan/50 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white mb-2">{item.title}</div>
              <div className="text-sm text-slate-400">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 rounded-xl mb-8">
          <div className="text-accent-cyan font-semibold mb-3">Tech Stack</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'Google Cloud', 'DeepSeek', 'GPT-4o', 'Gemini', 'Grok', 'Mistral'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded-full border border-accent-cyan/20">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://tikun.pro"
              target="_blank"
              className="inline-flex items-center gap-2 text-accent-cyan hover:gap-3 transition-all"
            >
              Try Live Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/zoharmx/TikunOlam"
              target="_blank"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-accent-cyan transition-all"
            >
              View on GitHub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2x2 image grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">TOF v2 — Framework in Action</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/images/tikun/cap2-1.png', alt: 'TOF v2 pipeline overview' },
              { src: '/images/tikun/cap2-2.png', alt: 'BinahSigma bias analysis' },
              { src: '/images/tikun/cap2-3.png', alt: 'ERI dashboard metrics' },
              { src: '/images/tikun/cap2-4.png', alt: 'NO_GO decision output' },
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-accent-cyan/30 shadow-lg shadow-accent-cyan/10">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* PDF Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 border-2 border-primary-500/50 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-8 h-8 text-primary-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">Download Official Report</h3>
              <p className="text-slate-300">OpenAI × Sam Altman — Tikun Olam Ethical Analysis</p>
            </div>
          </div>
          <p className="text-slate-400 mb-6">
            The complete ethical analysis of the Anthropic vs Pentagon $2.4B contract case.
            See exactly how TOF&apos;s 10-Sefirot pipeline evaluates a real-world high-stakes scenario
            and reaches its NO_GO recommendation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/tikun-olam-report.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25"
            >
              <FileText className="w-6 h-6" />
              Download Official Report PDF — OpenAI × Sam Altman Analysis
            </a>
          </div>
          <Link
            href="/case-studies/tikun-olam"
            className="inline-flex items-center gap-2 mt-6 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
          >
            View Full Case Study with Architecture Details <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </StorySection>

      {/* Chapter 3: VocalisIA V3 */}
      <StorySection
        chapter={3}
        icon={<Phone className="w-8 h-8" />}
        color="purple"
        title="VocalisAI V3: Multi-Agent Voice Intelligence"
        highlight="VocalisAI V3"
      >
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          From a simple voice bot to an orchestrated platform of{' '}
          <span className="text-accent-purple font-semibold">6 specialized agents</span> under Akiva — the meta-agent supervisor —
          with TOF&apos;s ethical layer evaluating every call in real time.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple text-sm mb-8">
          Google Gemini Live Hackathon Finalist
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-2xl overflow-hidden border border-accent-purple/30 shadow-lg shadow-accent-purple/10"
        >
          <img
            src="/images/vocalis/v3-hero.png"
            alt="VocalisAI V3 — Multi-Agent Platform Hero"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Akiva + 6 agents */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Meet the Team: Akiva + 6 Specialists</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Akiva', role: 'Meta-Agent Supervisor', desc: 'Classifies, routes, and supervises all calls. The orchestrator brain.', color: 'text-accent-purple' },
              { name: 'Alex', role: 'ES-MX General Agent', desc: 'Primary Spanish-language agent for Mexico and LATAM markets.', color: 'text-primary-400' },
              { name: 'Nova', role: 'EN-US General Agent', desc: 'English-language agent for US market with American fluency.', color: 'text-accent-cyan' },
              { name: 'Diana', role: 'Emergency Agent', desc: 'Specialized for urgent and crisis call handling with priority routing.', color: 'text-red-400' },
              { name: 'Marco', role: 'Billing Agent', desc: 'Handles all payment flows, invoicing, and financial queries.', color: 'text-amber-400' },
              { name: 'Sara', role: 'Follow-up Agent', desc: 'Post-call follow-up, appointment reminders, and retention flows.', color: 'text-green-400' },
            ].map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-slate-800/50 border border-accent-purple/20 rounded-xl hover:border-accent-purple/50 transition-all"
              >
                <div className={`font-bold text-lg ${agent.color} mb-1`}>{agent.name}</div>
                <div className="text-slate-300 text-xs font-semibold mb-2">{agent.role}</div>
                <div className="text-slate-400 text-sm">{agent.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 border border-accent-purple/30 rounded-xl">
            <Shield className="w-6 h-6 text-accent-purple mb-3" />
            <h4 className="font-semibold text-white mb-2">TOF Ethical Layer on Every Call</h4>
            <p className="text-slate-400 text-sm">Every interaction is evaluated across 5 Sefirotic ethical dimensions before any action is taken. Ethics is not a feature — it&apos;s the infrastructure.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-accent-cyan/10 to-primary-500/10 border border-accent-cyan/30 rounded-xl">
            <Play className="w-6 h-6 text-accent-cyan mb-3" />
            <h4 className="font-semibold text-white mb-2">Real-Time Voice with Gemini Live API</h4>
            <p className="text-slate-400 text-sm">Google Gemini Live API powers sub-second voice interactions with natural language understanding. Submitted for Google Hackathon.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border border-primary-500/30 rounded-xl">
            <Users className="w-6 h-6 text-primary-400 mb-3" />
            <h4 className="font-semibold text-white mb-2">Multi-Industry Modules</h4>
            <p className="text-slate-400 text-sm">Healthcare, legal, logistics, e-commerce, real estate. Each industry module trained on domain-specific scenarios and compliance requirements.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-amber-500/10 to-primary-500/10 border border-amber-500/30 rounded-xl">
            <TrendingUp className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="font-semibold text-white mb-2">12,000+ Calls Processed</h4>
            <p className="text-slate-400 text-sm">Real production deployment with Twilio + ElevenLabs for natural voice synthesis and Stripe for autonomous payment flows during calls.</p>
          </div>
        </div>

        {/* YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">See VocalisAI V3 in Action</h3>
          <div className="rounded-xl overflow-hidden border border-accent-purple/30 shadow-lg shadow-accent-purple/10">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/MfRqxgbRR_c"
              title="VocalisAI V3 Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <div className="p-6 bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border border-accent-purple/30 rounded-xl">
          <div className="text-accent-purple font-semibold mb-3">Tech Stack</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Google Gemini Live API', 'FastAPI', 'Twilio', 'ElevenLabs', 'Stripe', 'TOF Ethical Layer', 'Python'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full border border-accent-purple/20">
                {tech}
              </span>
            ))}
          </div>
          <Link
            href="/case-studies/vocalisai"
            className="inline-flex items-center gap-2 text-accent-purple hover:gap-3 transition-all font-semibold"
          >
            View Full VocalisAI Case Study <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </StorySection>

      {/* Chapter 4: Projects */}
      <ProjectsShowcase />

      {/* Chapter 5: Enterprise Solutions */}
      <StorySection
        chapter={5}
        icon={<TrendingUp className="w-8 h-8" />}
        color="primary"
        title="Now I solve enterprise problems with AI"
        highlight="enterprise problems"
      >
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
          I combine <span className="text-primary-400 font-semibold">deep ethical principles</span> with{' '}
          <span className="text-accent-cyan font-semibold">cutting-edge technology</span> to create solutions
          that don&apos;t just work, but transform businesses — and set a new standard for{' '}
          <span className="text-accent-purple font-semibold">responsible AI deployment</span>.
        </p>

        {/* Featured Service: AI Ethics Consulting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 bg-gradient-to-r from-amber-500/10 via-primary-500/10 to-cyan-500/10 border-2 border-amber-500/50 rounded-2xl mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h3 className="text-2xl font-bold text-white">AI Ethics Consulting & Governance</h3>
              <p className="text-amber-400 font-semibold">Your Business Bulletproof Vest Against Multi-Million Dollar Lawsuits</p>
            </div>
          </div>
          <p className="text-slate-300 mb-6">
            Specialized audits and certifications in <span className="text-white font-semibold">AI Ethics, Alignment and Governance</span>.
            I help enterprises protect themselves from regulatory risks and reputational damage through comprehensive AI audits
            powered by <span className="text-amber-400 font-semibold">Tikun Olam v2</span>, <span className="text-primary-400 font-semibold">BinahSigma</span>, and <span className="text-accent-cyan font-semibold">EthicaAI</span>.
            When the EU AI Act enforcement begins, will your systems pass?
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-amber-500/20">
              <div className="text-amber-400 font-bold mb-2">Bias Detection</div>
              <p className="text-slate-400 text-sm">Identify and quantify civilizational and algorithmic biases across 5 AI providers simultaneously</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-primary-500/20">
              <div className="text-primary-400 font-bold mb-2">Compliance Audits</div>
              <p className="text-slate-400 text-sm">EU AI Act, GDPR, and emerging regulatory frameworks compliance assessment with full audit trail</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-accent-cyan/20">
              <div className="text-accent-cyan font-bold mb-2">Governance Framework</div>
              <p className="text-slate-400 text-sm">10-Sefirot structured decision-making with ERI scoring and complete observability in Datadog</p>
            </div>
          </div>
          <Link
            href="/case-studies/tikun-olam"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            See How Tikun Olam Works <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-2xl"
          >
            <Phone className="w-12 h-12 text-primary-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Voice AI Agents</h3>
            <p className="text-slate-300 mb-4">
              Multi-agent orchestrated platforms (VocalisAI V3 architecture) that qualify, route,
              and close — 24/7, at scale, with ethical oversight on every interaction.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Akiva meta-agent + 6 specialists
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Gemini Live + ElevenLabs + Twilio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                TOF ethical layer on every call
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 rounded-2xl"
          >
            <Code className="w-12 h-12 text-accent-cyan mb-4" />
            <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
            <p className="text-slate-300 mb-4">
              Scalable web applications and enterprise dashboards with Google Cloud architecture
              (Cloud Run, BigQuery, Firestore, Pub/Sub) that handle real enterprise loads.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                React + Next.js + Tailwind
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Google Cloud Run + BigQuery + Firestore
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Real-time fleet + logistics dashboards
              </li>
            </ul>
          </motion.div>
        </div>
      </StorySection>

      <CTASection />
      <Footer />
    </main>
  )
}
