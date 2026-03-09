import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VocalisAI V3: When Every Call Gets Its Own AI Team | Blog',
  description: 'How we built a full multi-agent orchestration platform with Akiva as meta-agent, 6 specialized agents, and TOF ethical layer on every call using Google Gemini Live API.',
}

export default function VocalisV3MultiAgentPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
            Voice AI
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            VocalisAI V3: When Every Call Gets Its Own AI Team
          </h1>

          <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-800">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 5, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              14 min read
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              In 2024, VocalisAI V1 was a single voice agent named Sofia. She could qualify leads,
              answer questions, and close sales via Stripe Push-to-Link. It was impressive. But it was also limiting.
              One agent trying to be everything — in healthcare, logistics, legal, e-commerce — meant
              constant compromise on domain expertise.
            </p>

            <p className="text-slate-300 mb-6">
              V3 changes that entirely. Instead of one generalist, every call now gets a team.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Core Problem with Single-Agent Voice AI</h2>

            <p className="text-slate-300 mb-6">
              When you train a single voice agent to handle every possible call scenario, you&apos;re making
              a fundamental architectural mistake. A billing dispute requires different cognitive patterns
              than an emergency escalation. A sales pitch in Mexico requires different cultural calibration
              than one in the United States.
            </p>

            <p className="text-slate-300 mb-6">
              The solution isn&apos;t a better single agent. The solution is the right agent for the right call.
            </p>

            <div className="p-6 bg-accent-purple/10 border border-accent-purple/30 rounded-xl mb-8">
              <p className="text-slate-300 italic">
                "Specialization is not a luxury in voice AI — it&apos;s the difference between an agent
                that handles a call and one that resolves it."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Enter Akiva: The Meta-Agent Supervisor</h2>

            <p className="text-slate-300 mb-6">
              Akiva is not a voice agent. Akiva never speaks to a customer. Akiva&apos;s job is to listen to the
              first few seconds of a call, classify the intent, select the optimal specialist from the pool of 6 agents,
              and then monitor the entire interaction.
            </p>

            <p className="text-slate-300 mb-6">
              Classification happens across several dimensions:
            </p>

            <ul className="space-y-3 text-slate-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">→</span>
                <span><strong className="text-white">Language & Region:</strong> ES-MX routes to Alex, EN-US routes to Nova</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">→</span>
                <span><strong className="text-white">Urgency Level:</strong> Any distress signals trigger Diana (Emergency) immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">→</span>
                <span><strong className="text-white">Topic Domain:</strong> Payment queries go to Marco, retention signals activate Sara</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">→</span>
                <span><strong className="text-white">Call Type:</strong> Inbound vs outbound determines the starting agent pool</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Google Gemini Live API: The Voice Layer</h2>

            <p className="text-slate-300 mb-6">
              VocalisAI V3 was built for the Google Gemini Live Hackathon. The Gemini Live API enables
              true real-time conversational AI — not the traditional request/response cycle that adds latency
              to every turn. The model listens continuously, understands context across the full conversation,
              and responds with sub-second latency.
            </p>

            <p className="text-slate-300 mb-6">
              Combined with ElevenLabs for voice synthesis (emotional, natural, regionally calibrated),
              the result is a conversation that feels genuinely human. Not because we&apos;re trying to deceive —
              the agents identify as AI when asked — but because natural conversation flow reduces friction
              and helps customers get what they need faster.
            </p>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl mb-8 font-mono text-sm">
              <div className="text-slate-400 mb-2">// Simplified Akiva routing logic</div>
              <div className="text-green-400">incoming_call = await twilio.receive()</div>
              <div className="text-slate-300">intent = await akiva.classify(incoming_call.audio_stream)</div>
              <div className="text-slate-300">agent = akiva.select_specialist(intent)</div>
              <div className="text-slate-300">session = await agent.connect(incoming_call, gemini_live_api)</div>
              <div className="text-slate-300">akiva.monitor(session)  <span className="text-slate-500"># async supervision</span></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The TOF Ethical Layer: Why It&apos;s Non-Negotiable</h2>

            <p className="text-slate-300 mb-6">
              Every interaction in VocalisAI V3 passes through the Tikun Olam Framework before any agent
              responds. This is not optional. It&apos;s not a compliance checkbox. It&apos;s the infrastructure.
            </p>

            <p className="text-slate-300 mb-6">
              Voice AI that&apos;s optimized purely for conversion becomes a manipulation engine.
              Marco (Billing) could theoretically push customers toward payment plans that
              maximize revenue but hurt the customer. Sara (Follow-up) could exploit emotional
              vulnerability to prevent cancellations. Diana (Emergency) could under-escalate
              to keep call times short.
            </p>

            <p className="text-slate-300 mb-6">
              The 5 Sefirotic dimensions evaluated on every interaction prevent this:
            </p>

            <div className="grid md:grid-cols-5 gap-3 mb-8">
              {[
                { name: 'Chesed', q: 'Is this genuinely helpful?' },
                { name: 'Gevurah', q: 'Are limits respected?' },
                { name: 'Tiferet', q: 'Is it balanced?' },
                { name: 'Netzach', q: 'Long-term wellbeing?' },
                { name: 'Hod', q: 'Honest and clear?' },
              ].map((s, i) => (
                <div key={i} className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-lg text-center">
                  <div className="text-primary-400 font-bold text-sm mb-1">{s.name}</div>
                  <div className="text-slate-400 text-xs">{s.q}</div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Results & What&apos;s Next</h2>

            <p className="text-slate-300 mb-6">
              After 12,000+ calls processed across the V1-V3 arc, the patterns are clear:
              specialized agents resolve calls faster, with higher customer satisfaction, and fewer
              escalations. The TOF layer has caught and prevented several edge cases where an
              agent would have acted against the customer&apos;s best interest.
            </p>

            <p className="text-slate-300 mb-6">
              V4 is on the roadmap: inter-agent collaboration (Alex and Marco working the same call),
              full memory across sessions (Sara remembering a customer from 3 months ago),
              and deeper TOF integration at the Akiva classification level.
            </p>

            <div className="mt-12 p-6 bg-gradient-to-r from-accent-purple/10 to-pink-500/10 border border-accent-purple/30 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">Experience It Live</h3>
              <p className="text-slate-300 mb-4">
                Call now and experience VocalisAI V3 — ask for Alex (ES-MX) or Nova (EN-US).
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+528141661014" className="inline-flex items-center gap-2 text-accent-purple hover:underline font-semibold">
                  +52 814 166 1014 (MX)
                </a>
                <a href="tel:+18884306777" className="inline-flex items-center gap-2 text-accent-cyan hover:underline font-semibold">
                  +1 888 430 6777 (US)
                </a>
                <Link href="/case-studies/vocalisai" className="inline-flex items-center gap-2 text-primary-400 hover:underline font-semibold">
                  Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
