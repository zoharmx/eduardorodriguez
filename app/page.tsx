'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Code, Brain, Rocket, Phone, TrendingUp, Calendar, MessageSquare, ArrowRight } from 'lucide-react'
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

      {/* Story Chapter 1: The Question */}
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

        <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
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
      </StorySection>

      {/* Story Chapter 2: Tikun Olam - The Project */}
      <StorySection
        chapter={2}
        icon={<Code className="w-8 h-8" />}
        color="cyan"
        title="I created Tikun Olam: Observable Ethical AI"
        highlight="Tikun Olam"
      >
        <p className="text-xl text-slate-300 leading-relaxed mb-4">
          The first ethical AI pipeline with{' '}
          <span className="text-accent-cyan font-semibold">full observability in Datadog</span>.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm mb-8">
          Google Cloud x Datadog Winner
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '🔍', title: 'Bias Detection', desc: '73% biases detected between Western vs Eastern models' },
            { icon: '📊', title: 'Observability', desc: 'Real-time monitoring with Datadog and BinahSigma metrics' },
            { icon: '🧠', title: 'Multi-Model', desc: 'Vertex AI orchestration for civilizational comparison' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-slate-800/50 border border-accent-cyan/20 rounded-xl backdrop-blur-sm hover:border-accent-cyan/50 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white mb-2">{item.title}</div>
              <div className="text-sm text-slate-400">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 rounded-xl">
          <div className="text-accent-cyan font-semibold mb-3">Tech Stack</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'Google Cloud', 'DeepSeek'].map((tech) => (
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
      </StorySection>

      {/* Story Chapter 3: Real Problems */}
      <ProjectsShowcase />

      {/* Story Chapter 4: Enterprise Solutions */}
      <StorySection
        chapter={4}
        icon={<TrendingUp className="w-8 h-8" />}
        color="primary"
        title="Now I solve enterprise problems with AI"
        highlight="enterprise problems"
      >
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
          I combine <span className="text-primary-400 font-semibold">deep ethical principles</span> with{' '}
          <span className="text-accent-cyan font-semibold">cutting-edge technology</span> to create solutions
          that don&apos;t just work, but transform businesses.
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
            powered by <span className="text-amber-400 font-semibold">Tikun Olam</span>, <span className="text-primary-400 font-semibold">BinahSigma</span>, and <span className="text-accent-cyan font-semibold">EthicaAI</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-amber-500/20">
              <div className="text-amber-400 font-bold mb-2">Bias Detection</div>
              <p className="text-slate-400 text-sm">Identify and quantify civilizational and algorithmic biases in your AI systems</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-primary-500/20">
              <div className="text-primary-400 font-bold mb-2">Compliance Audits</div>
              <p className="text-slate-400 text-sm">EU AI Act, GDPR, and emerging regulatory frameworks compliance assessment</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-accent-cyan/20">
              <div className="text-accent-cyan font-bold mb-2">Governance Framework</div>
              <p className="text-slate-400 text-sm">Structured decision-making frameworks with full audit trails</p>
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
              Conversational agents that speak natural language, qualify leads and
              handle complex queries 24/7.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                ElevenLabs + Gemini + Twilio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Perfect number pronunciation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Customized intelligent routing
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
              Scalable web applications with React, Firebase and modern APIs
              that your clients can use from day 1.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                React + Next.js + Tailwind
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Firebase + REST APIs
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Real-time dashboards
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
