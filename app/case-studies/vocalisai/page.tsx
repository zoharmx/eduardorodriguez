import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Phone, Mic, Zap, Users, Shield, Brain, Play } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VocalisAI V3 - Multi-Agent Voice Intelligence | Case Study',
  description: 'VocalisAI V3: Akiva meta-agent supervising 6 specialized AI agents with TOF ethical layer on every call. Google Gemini Live Hackathon Finalist.',
}

export default function VocalisAICaseStudy() {
  const metrics = [
    { icon: <Users className="w-6 h-6" />, value: '6', label: 'Specialized Agents' },
    { icon: <Shield className="w-6 h-6" />, value: '5', label: 'Sefirotic Dimensions' },
    { icon: <Zap className="w-6 h-6" />, value: 'Real-Time', label: 'Voice AI (Gemini Live)' },
    { icon: <Phone className="w-6 h-6" />, value: '12K+', label: 'Calls Processed' },
  ]

  const agents = [
    { name: 'Akiva', role: 'Meta-Agent Supervisor', desc: 'The orchestrator brain. Classifies every incoming call, selects the optimal specialist agent, and supervises the full interaction lifecycle.', color: 'border-accent-purple/50 text-accent-purple', badge: 'SUPERVISOR' },
    { name: 'Alex', role: 'Spanish General Agent (ES-MX)', desc: 'Primary agent for Latin American markets. Handles general inquiries, qualification flows, and service information in natural Mexican Spanish.', color: 'border-primary-500/50 text-primary-400', badge: 'GENERAL' },
    { name: 'Nova', role: 'English General Agent (EN-US)', desc: 'American English counterpart to Alex. Handles US market calls with culturally appropriate tone and fluency.', color: 'border-accent-cyan/50 text-accent-cyan', badge: 'GENERAL' },
    { name: 'Diana', role: 'Emergency Response Agent', desc: 'Specialized for urgent and crisis scenarios. Priority routing, calm de-escalation protocols, emergency service coordination.', color: 'border-red-500/50 text-red-400', badge: 'EMERGENCY' },
    { name: 'Marco', role: 'Billing & Payments Agent', desc: 'Handles all financial interactions: payment processing via Stripe Push-to-Link, invoicing, billing disputes, and subscription management.', color: 'border-amber-500/50 text-amber-400', badge: 'BILLING' },
    { name: 'Sara', role: 'Follow-up & Retention Agent', desc: 'Post-call follow-up, appointment reminders, churn prevention flows, and satisfaction surveys. Keeps customers engaged.', color: 'border-green-500/50 text-green-400', badge: 'FOLLOW-UP' },
    { name: 'Raul', role: 'Outbound Sales Agent', desc: 'Proactive outbound campaigns. Lead warming, reactivation calls, upselling flows, and appointment setting for the sales team.', color: 'border-orange-500/50 text-orange-400', badge: 'OUTBOUND' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
            </span>
            Google Gemini Live Hackathon Finalist
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Google Gemini Live API', 'FastAPI', 'Twilio', 'ElevenLabs', 'Stripe', 'TOF Ethical Layer', 'Python'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              VocalisAI V3: Multi-Agent Voice Intelligence
            </h1>

            <p className="text-xl text-slate-300 mb-8">
              From a simple voice bot to an orchestrated platform of 6 specialized agents under Akiva —
              the meta-agent supervisor. Every call evaluated through TOF&apos;s ethical layer.
              Real-time voice AI powered by Google Gemini Live API.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-accent-purple/30 shadow-lg shadow-accent-purple/10">
            <img
              src="/images/vocalis/v3-hero.png"
              alt="VocalisAI V3 — Multi-Agent Platform"
              className="w-full h-auto"
            />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-accent-purple/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-accent-purple flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white font-display mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* YouTube Video */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              See VocalisAI V3 in Action
            </h2>
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
            <p className="text-sm text-slate-400 mt-3 text-center">VocalisAI V3 — Google Gemini Live Hackathon submission</p>
          </div>

          {/* Second Video */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              VocalisAI in a Real Call — Live Demo
            </h2>
            <div className="rounded-xl overflow-hidden border border-accent-purple/30 shadow-lg shadow-accent-purple/10">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/mtZ3mxJlQgk"
                title="VocalisAI — Real Call Live Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              />
            </div>
            <p className="text-sm text-slate-400 mt-3 text-center">Watch a real conversation — VocalisAI handling an actual call from start to finish</p>
          </div>

          {/* The Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              The Evolution: V1 → V2 → V3
            </h2>
            <div className="space-y-6">
              {[
                { version: 'V1', title: 'Single Voice Bot', desc: 'Sofia — one agent handling all calls. Natural conversation, Stripe Push-to-Link payments. Proved the concept: voice AI can close sales autonomously.' },
                { version: 'V2', title: 'Agent Specialization', desc: 'Multiple specialized agents with domain expertise. Spanish and English versions. Stripe integration matured. But no ethical oversight layer.' },
                { version: 'V3', title: 'Orchestrated Multi-Agent Platform', desc: 'Akiva meta-agent as orchestrator. 6 specialists. Google Gemini Live API for real-time voice. TOF ethical layer on every interaction. Google Hackathon finalist.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 ${i === 2 ? 'bg-accent-purple text-white' : 'bg-slate-700 text-slate-300'}`}>
                    {item.version}
                  </div>
                  <div>
                    <div className={`font-semibold text-lg mb-1 ${i === 2 ? 'text-accent-purple' : 'text-white'}`}>{item.title}</div>
                    <div className="text-slate-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Akiva + Agents */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              The Team: Akiva + 6 Specialized Agents
            </h2>
            <p className="text-slate-300 mb-8">
              Akiva doesn&apos;t take calls — it routes them. The moment a call arrives, Akiva analyzes the intent,
              selects the optimal specialist, and monitors the entire interaction. If the agent needs help, Akiva intervenes.
            </p>
            <div className="space-y-4">
              {agents.map((agent, i) => (
                <div key={i} className={`p-6 bg-slate-800/50 border ${agent.color.split(' ')[0]} rounded-xl`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl font-bold ${agent.color.split(' ')[1]}`}>{agent.name}</div>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${agent.color.split(' ')[0]} border ${agent.color.split(' ')[1]} bg-slate-900/50`}>
                        {agent.badge}
                      </span>
                    </div>
                    <div className="text-slate-400 text-sm font-semibold">{agent.role}</div>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">{agent.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TOF Ethical Layer */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              The TOF Ethical Layer: Ethics as Infrastructure
            </h2>
            <div className="p-8 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-2xl mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Every Interaction Evaluated</h3>
                  <p className="text-slate-300">
                    Before any agent responds, the Tikun Olam Framework evaluates the interaction
                    across 5 Sefirotic ethical dimensions. This isn&apos;t a post-hoc review — it happens in real time,
                    shaping how each agent responds.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-5 gap-3">
                {[
                  { name: 'Chesed', desc: 'Kindness — Is the response genuinely helpful?' },
                  { name: 'Gevurah', desc: 'Strength — Are the boundaries respected?' },
                  { name: 'Tiferet', desc: 'Beauty — Is the response balanced and fair?' },
                  { name: 'Netzach', desc: 'Victory — Does it serve long-term wellbeing?' },
                  { name: 'Hod', desc: 'Splendor — Is communication honest and clear?' },
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-slate-800/50 rounded-xl text-center">
                    <div className="text-primary-400 font-bold text-sm mb-1">{s.name}</div>
                    <div className="text-slate-400 text-xs">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 rounded-xl">
              <Brain className="w-6 h-6 text-red-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Why This Matters for Voice AI</h4>
              <p className="text-slate-300 text-sm">
                Voice agents interact with real people in vulnerable moments — billing disputes, emergencies, sales pressure.
                Without ethical guardrails, an AI optimized purely for conversion becomes a manipulation engine.
                TOF ensures VocalisAI agents are always working <span className="text-white font-semibold">for</span> the caller, not against them.
              </p>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Technical Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 border border-accent-purple/20 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Voice & AI Stack</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li><strong className="text-accent-purple">Real-Time Voice:</strong> Google Gemini Live API</li>
                  <li><strong className="text-accent-purple">Voice Synthesis:</strong> ElevenLabs (natural, emotional)</li>
                  <li><strong className="text-accent-purple">Telephony:</strong> Twilio Programmable Voice</li>
                  <li><strong className="text-accent-purple">Meta-Agent:</strong> Akiva (custom orchestration layer)</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-800/50 border border-accent-purple/20 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Backend & Payments</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li><strong className="text-accent-purple">Backend:</strong> FastAPI + Python AsyncIO</li>
                  <li><strong className="text-accent-purple">Payments:</strong> Stripe Push-to-Link + Webhooks</li>
                  <li><strong className="text-accent-purple">Ethics Layer:</strong> TOF 10-Sefirot pipeline</li>
                  <li><strong className="text-accent-purple">Deploy:</strong> Google Cloud Run</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Multi-Industry Modules */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Multi-Industry Modules
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { industry: 'Healthcare', agents: 'Diana + Sara', use: 'Appointment booking, follow-up care, emergency triage' },
                { industry: 'Legal', agents: 'Alex + Nova', use: 'Client intake, consultation scheduling, document requests' },
                { industry: 'Logistics', agents: 'Alex + Marco', use: 'Shipment tracking, customs queries, billing resolution' },
                { industry: 'E-Commerce', agents: 'Nova + Marco + Raul', use: 'Order support, upsells, payment processing, win-back campaigns' },
                { industry: 'Real Estate', agents: 'Alex + Raul', use: 'Property inquiries, viewing scheduling, lead qualification' },
                { industry: 'Finance', agents: 'Marco + Nova', use: 'Account queries, payment plans, financial guidance' },
              ].map((mod, i) => (
                <div key={i} className="p-4 bg-slate-800/50 border border-accent-purple/20 rounded-xl">
                  <div className="text-accent-purple font-bold mb-1">{mod.industry}</div>
                  <div className="text-slate-400 text-xs font-semibold mb-2">{mod.agents}</div>
                  <div className="text-slate-400 text-sm">{mod.use}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Demo */}
          <section className="mb-16">
            <div className="p-8 bg-gradient-to-r from-accent-purple/10 to-pink-500/10 border border-accent-purple/30 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Talk to a VocalisAI Agent Live</h3>
              <p className="text-slate-300 mb-6">
                Call now and experience real-time conversation with our Spanish or English AI agent
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="p-6 bg-slate-800/50 border border-accent-purple/30 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">🇲🇽</span>
                    <span className="text-lg font-semibold text-white">Mexico</span>
                  </div>
                  <a
                    href="tel:+528141661014"
                    className="btn-primary inline-flex items-center gap-3 w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    +52 814 166 1014
                  </a>
                  <p className="text-slate-400 text-sm mt-2">Alex — ES-MX</p>
                </div>
                <div className="p-6 bg-slate-800/50 border border-accent-cyan/30 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-lg font-semibold text-white">United States</span>
                  </div>
                  <a
                    href="tel:+18884306777"
                    className="inline-flex items-center gap-3 w-full justify-center px-6 py-3 bg-accent-cyan text-slate-900 font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +1 888 430 6777
                  </a>
                  <p className="text-slate-400 text-sm mt-2">Nova — EN-US</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-8 p-8 bg-gradient-to-r from-accent-purple/10 to-pink-500/10 border border-accent-purple/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Deploy VocalisAI V3 for Your Business
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Custom agent configuration, industry module selection, TOF ethical layer included.
              From setup to first live call in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex justify-center items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Implementation Call
              </Link>
              <Link href="/#story" className="btn-secondary inline-flex justify-center items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Back to Story
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/tikun-olam"
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Tikun Olam — Observable Ethical AI
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  10-Sefirot pipeline with 5 AI providers. The ethical engine powering VocalisAI.
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/hoymismo-gps"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismoGPS V2 — Enterprise Fleet Management
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Google Cloud architecture (Cloud Run, BigQuery, Firestore) for enterprise logistics.
                </p>
                <span className="text-cyan-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
