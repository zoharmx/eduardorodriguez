import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Phone, Clock, TrendingUp, Users, MessageSquare, Zap, Bot, BarChart3, CheckCircle, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Voice AI for Vehicle Import — HoyMismo AutoTransport | Case Study',
  description: 'Automated Spanish-language phone agent that handles 80% of vehicle import queries 24/7, reducing response time from 20+ minutes to under 2 minutes.',
}

export default function VoiceAICaseStudy() {
  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '80%', label: 'Queries Automated (No Human Needed)' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Availability (vs 9am–6pm before)' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Calls Handled Monthly' },
    { icon: <Zap className="w-6 h-6" />, value: '<2 min', label: 'Response Time (vs 20+ min holds)' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
            <Phone className="w-4 h-4" />
            Production Voice AI — HoyMismo AutoTransport
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['VocalisAI', 'Gemini Live API', 'ElevenLabs', 'Twilio', 'FastAPI', 'Firebase', 'WhatsApp API'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Voice AI for Vehicle Import: Automating 500+ Monthly Calls
            </h1>

            <p className="text-xl text-slate-300">
              Vehicle import agencies in Mexico receive hundreds of repetitive phone inquiries every week. This is the story of how a VocalisAI-powered phone agent — speaking fluent Mexican Spanish, understanding vehicle specs, checking import status by folio number, and qualifying leads — eliminated 80% of routine call handling and made the agency available 24 hours a day.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-purple-400 flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white font-display mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-16">

            {/* The Problem */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Problem: Repetitive Calls Drowning a Specialist Team
              </h2>

              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  HoyMismo AutoTransport handles vehicle imports from the USA to Mexico — a process that involves customs valuations, required documents, tariff calculations, and coordination with multiple authorities. The agency received <strong className="text-white">hundreds of calls per week</strong>, but the vast majority were asking the same 4 questions: How much does it cost? What documents do I need? What is the status of my import? How long does it take? Answering these consumed <strong className="text-white">4–6 hours of specialist staff time daily</strong> — time that could have been spent on complex cases that actually required human expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">The 4 Most Common Queries</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">1.</span> &quot;How much does it cost to import a [year] [make] [model]?&quot;</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">2.</span> &quot;What documents do I need to bring?&quot;</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">3.</span> &quot;What is the status of my import? My folio is XXXX-XXXX&quot;</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">4.</span> &quot;What are the customs requirements for my specific vehicle?&quot;</li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">Before the Voice Agent</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> 4–6 hours/day of specialist time on routine queries</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> 20+ minute hold times during peak hours</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Zero availability outside 9am–6pm Monday–Friday</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> 40% of calls arriving after hours — all leads lost</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Inconsistent answers depending on which staff member answered</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Solution: A Voice AI Agent Built for Mexican Vehicle Import
              </h2>

              <p className="text-slate-300 mb-6">
                The agent was designed ground-up for the specific context of Mexican vehicle imports from the USA — not a generic customer service bot. It speaks in a professional Mexican Spanish accent, understands vehicle year/make/model combinations, knows customs regulations for different vehicle types and import corridors (Laredo, Tijuana, Nogales), and integrates with the agency&apos;s Firebase backend to check real folio status.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    Natural Mexican Spanish
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    ElevenLabs voice synthesis with a professional Mexican Spanish voice. Perfect pronunciation of currency amounts (&quot;quince mil pesos&quot; not &quot;15,000&quot;), vehicle terminology, and customs jargon. The agent handles interruptions, topic changes, and conversational repairs exactly like a trained human receptionist.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                    Accurate Import Quotes
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The agent collects vehicle year, make, and model, then queries the pricing database to give an accurate import cost estimate based on current customs valuations. It explains what the cost includes: customs duties, agency fees, paperwork, and plates — no hidden surprises.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Document Requirements by Vehicle Type
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Rather than reading a generic list, the agent tailors the document checklist based on the caller&apos;s specific vehicle type, origin state, and customs corridor. It can explain each document&apos;s purpose, where to obtain it, and what happens if it&apos;s missing.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    Live Status Lookup by Folio
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Callers can say their folio number and the agent queries Firebase in real time to report the current stage of their import process. It explains what each stage means and provides a realistic timeline for the next steps — reducing follow-up &quot;where is my vehicle?&quot; calls by 60%.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Lead Qualification + CRM
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    For new prospects, the agent qualifies key information: vehicle type, current location, urgency, budget awareness, and preferred customs corridor. All data is saved to Firebase and flagged for the sales team with a lead score — so specialists focus only on qualified, ready-to-buy prospects.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    WhatsApp Follow-Up
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    After a call, the agent sends a WhatsApp summary to the caller: quote estimate, document checklist, or status update — depending on what was discussed. This drives a 40% improvement in lead conversion since prospects have the information in writing.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-4">Technology Stack</h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
                  <div><strong className="text-white">Voice Framework:</strong> VocalisAI (conversation orchestration)</div>
                  <div><strong className="text-white">LLM:</strong> Gemini Live API (real-time streaming inference)</div>
                  <div><strong className="text-white">Voice Synthesis:</strong> ElevenLabs (Mexican Spanish, professional female voice)</div>
                  <div><strong className="text-white">Telephony:</strong> Twilio Programmable Voice (inbound call handling)</div>
                  <div><strong className="text-white">Backend:</strong> FastAPI (WebSocket for real-time audio streaming)</div>
                  <div><strong className="text-white">Database:</strong> Firebase Firestore (folio lookup, lead storage)</div>
                  <div><strong className="text-white">Messaging:</strong> WhatsApp Business API (post-call summaries)</div>
                  <div><strong className="text-white">Analytics:</strong> Firebase Analytics + custom dashboard (call metrics)</div>
                </div>
              </div>
            </section>

            {/* Implementation Process */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Implementation in 5 Weeks
              </h2>

              <div className="space-y-4">
                {[
                  {
                    week: 'Week 1',
                    title: 'Discovery & Conversation Design',
                    tasks: [
                      'Analyzed 50+ real call recordings to identify every conversation pattern and edge case',
                      'Mapped the full conversation flow: 12 main intents, 40+ sub-branches',
                      'Defined agent personality: professional, warm, knowledgeable — not robotic',
                      'Built the vehicle-to-pricing lookup table from customs valuation data',
                    ]
                  },
                  {
                    week: 'Weeks 2–3',
                    title: 'Core Development',
                    tasks: [
                      'VocalisAI + Gemini Live API integration with bidirectional audio streaming',
                      'ElevenLabs voice tuning: pronunciation rules for currency, vehicle models, customs terms',
                      'Firebase integration for folio status lookup and lead data storage',
                      'WhatsApp Business API for post-call summaries and document checklists',
                    ]
                  },
                  {
                    week: 'Week 4',
                    title: 'Testing & Optimization',
                    tasks: [
                      '100+ test calls covering all identified patterns and edge cases',
                      'Latency optimization: reduced response time from 3.2s to under 1.5s',
                      'Prompt refinement to reduce misinterpretation rate below 3%',
                      'Fallback logic for complex queries that require human transfer',
                    ]
                  },
                  {
                    week: 'Week 5',
                    title: 'Gradual Rollout & Calibration',
                    tasks: [
                      'Launched at 20% traffic — monitored call quality scores and escalation rate',
                      'Expanded to 100% after 3 days with satisfactory metrics',
                      'Built real-time analytics dashboard for call volume, topics, and satisfaction',
                      'Two weeks of post-launch refinement based on live call data',
                    ]
                  },
                ].map((phase, i) => (
                  <div key={i} className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-semibold">{phase.week}</div>
                        <div className="text-white font-semibold">{phase.title}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm ml-11">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 shrink-0">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Business Impact & ROI
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Quantitative Results
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-green-400">80%</strong> of routine queries resolved without human intervention</li>
                    <li>Response time: <strong className="text-green-400">20+ min hold → under 2 minutes</strong></li>
                    <li>Availability: <strong className="text-green-400">9am–6pm → 24/7/365</strong></li>
                    <li>Lead qualification rate: <strong className="text-green-400">+40%</strong> (structured data capture)</li>
                    <li>After-hours leads captured: <strong className="text-green-400">+60%</strong> (previously 0)</li>
                    <li>ROI: <strong className="text-green-400">Recovered in under 2 months</strong></li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    Team Impact
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Specialists redirected from <strong className="text-blue-400">routine calls to complex cases</strong></li>
                    <li>Call-handling stress reduced — team focuses on <strong className="text-blue-400">high-value consultations</strong></li>
                    <li>Consistent information delivery — <strong className="text-blue-400">zero variation</strong> between agents</li>
                    <li>Sales pipeline: leads arrive <strong className="text-blue-400">pre-qualified with structured data</strong>, not as cold calls</li>
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <blockquote className="text-slate-300 text-base italic mb-4 leading-relaxed">
                  &quot;Harry didn&apos;t just build a voice agent — he transformed how we operate. We now capture leads while we sleep, and the team can focus on what actually generates revenue: closing sales. The agent knows our business better than most new hires.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 font-bold text-sm">
                    JP
                  </div>
                  <div>
                    <div className="font-semibold text-white">Operations Director</div>
                    <div className="text-sm text-slate-400">HoyMismo AutoTransport</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Learnings */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Key Technical Learnings
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-purple-400 mb-2">Pronunciation engineering matters more than the LLM</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Three days were spent exclusively on how the agent pronounces currency amounts, vehicle year ranges, and customs terminology in Mexican Spanish. &quot;$15,000 USD&quot; needs to sound like &quot;quince mil dólares&quot; — not a robotic digit-by-digit reading. Getting this right is what separates &quot;sounds like AI&quot; from &quot;sounds professional.&quot;
                  </p>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-purple-400 mb-2">Domain specificity is the agent&apos;s competitive advantage</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Generic voice AI would fail here. The agent needed to know that importing through Laredo requires different paperwork than Tijuana, that TSURU models have different valuation rules than pickup trucks, and that a &quot;pedimento&quot; is a specific customs document — not a generic word for request. This domain knowledge is what makes the agent genuinely useful versus merely functional.
                  </p>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-purple-400 mb-2">Edge cases are 80% of the engineering work</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The happy path — caller asks A, agent answers B — takes 20% of development time. The other 80% covers: interruptions mid-sentence, topic pivots mid-conversation, unclear vehicle descriptions, callers who want to negotiate on the call, callers who speak too fast or with regional accents, and graceful escalation to a human when confidence is low.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Inbound Calls?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If your business receives repetitive phone calls — import agencies, real estate, logistics, legal intake — a domain-specific voice agent can be deployed in 4–6 weeks with measurable ROI from the first month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all">
                <ExternalLink className="w-5 h-5" />
                Book a Free Consultation
              </Link>
              <Link href="/case-studies" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all">
                View All Case Studies
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/hoymismo-dashboard"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismo Dashboard — Customs Agency OS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Complete digital operating system for vehicle import agencies in Mexico
                </p>
                <span className="text-cyan-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/hoymismo-gps"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismoGPS V2 — Enterprise Fleet Tracking
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Full GCP architecture with 500+ assets, BigQuery analytics, and sub-second GPS updates
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
