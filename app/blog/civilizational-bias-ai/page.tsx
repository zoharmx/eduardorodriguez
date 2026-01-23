import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Brain, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Hidden Bias: Why Your AI Thinks Like a Westerner | Blog',
  description: 'How civilizational assumptions in AI training data create systematic blind spots, and why comparing Western vs Eastern models reveals 73% divergence.',
}

export default function CivilizationalBiasArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
                AI Ethics
              </span>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  January 20, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              The Hidden Bias: Why Your AI Thinks Like a Westerner
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              How civilizational assumptions embedded in training data create systematic blind spots
              in AI decision-making, and why comparing Western vs Eastern models reveals 73% divergence
              on critical ethical questions.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>The Problem No One Talks About</h2>

            <p>
              When we discuss AI bias, we typically focus on demographic factors: gender, race, age.
              These are important. But there&apos;s a deeper, more pervasive bias that affects every AI
              system trained predominantly on Western data: <strong>civilizational bias</strong>.
            </p>

            <p>
              This isn&apos;t about political correctness. It&apos;s about the fact that an AI trained
              primarily on English-language, Western-perspective data will systematically underweight
              entire value systems held by billions of people.
            </p>

            <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl my-8">
              <p className="text-amber-400 font-semibold mb-2">Key Insight</p>
              <p className="text-slate-300 mb-0">
                When we tested the same ethical scenario through both Western (Gemini) and Eastern (DeepSeek)
                models, we found <strong className="text-white">73% divergence</strong> in their value
                frameworks and recommendations. Neither was wrong. They were operating from
                fundamentally different assumptions about what matters.
              </p>
            </div>

            <h2>What BinahSigma Revealed</h2>

            <p>
              BinahSigma is our algorithm for measuring civilizational bias in AI outputs. Rather than
              trying to eliminate bias (which is impossible), we treat it as information.
            </p>

            <p>
              Here&apos;s what happens when you ask both models about a complex ethical scenario:
            </p>

            <h3>Case Study: Nvidia-Groq $20B Acquisition</h3>

            <p>
              We asked both models: &quot;Should the FTC approve Nvidia&apos;s $20B licensing deal with Groq?&quot;
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Western Model (Gemini)</h4>
                <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                  <li>Focused on market competition dynamics</li>
                  <li>Emphasized consumer welfare standard</li>
                  <li>Prioritized innovation incentives</li>
                  <li>Assumed regulatory process sufficiency</li>
                </ul>
                <p className="text-blue-400 text-sm mt-3 font-semibold">Recommendation: Approve with conditions</p>
              </div>

              <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-3">Eastern Model (DeepSeek)</h4>
                <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                  <li>Focused on national strategic implications</li>
                  <li>Emphasized collective technological sovereignty</li>
                  <li>Prioritized long-term stability over short-term gains</li>
                  <li>Questioned Western regulatory frameworks</li>
                </ul>
                <p className="text-amber-400 text-sm mt-3 font-semibold">Recommendation: Extensive review required</p>
              </div>
            </div>

            <h3>The Blind Spots</h3>

            <p>
              Neither model was aware of its own blind spots. BinahSigma identified:
            </p>

            <p><strong>Western AI Blind Spots (6 identified):</strong></p>
            <ul>
              <li>Overemphasis on process over outcome</li>
              <li>National-centric regulatory focus</li>
              <li>Consumer welfare standard limitations</li>
              <li>Assumes market mechanisms are universally valid</li>
              <li>Underweights state coordination benefits</li>
              <li>Short-term innovation bias</li>
            </ul>

            <p><strong>Eastern AI Blind Spots (8 identified):</strong></p>
            <ul>
              <li>Undervalues disruptive innovation</li>
              <li>Dismisses individual entrepreneurial reward</li>
              <li>Prefers deliberation over speed</li>
              <li>State-centric solution bias</li>
              <li>Underweights decentralized governance models</li>
              <li>Assumes Western institutions are inherently adversarial</li>
              <li>Collective harmony may suppress legitimate dissent</li>
              <li>Historical grievance framing</li>
            </ul>

            <h2>Why This Matters for Your Business</h2>

            <p>
              If your AI system makes decisions that affect people from different cultural backgrounds,
              you have a civilizational bias problem. This includes:
            </p>

            <ul>
              <li>Hiring algorithms evaluating international candidates</li>
              <li>Content moderation across global platforms</li>
              <li>Financial risk assessment in emerging markets</li>
              <li>Healthcare recommendations for diverse populations</li>
              <li>Any decision system used across cultural boundaries</li>
            </ul>

            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl my-8">
              <p className="text-emerald-400 font-semibold mb-2">The Solution</p>
              <p className="text-slate-300 mb-0">
                Tikun Olam treats bias as signal, not noise. By explicitly modeling civilizational
                perspectives and measuring their divergence, we can produce <strong className="text-white">
                transcendent syntheses</strong> that neither perspective could reach alone.
              </p>
            </div>

            <h2>Transcendent Synthesis</h2>

            <p>
              For the Nvidia-Groq case, BinahSigma produced a novel recommendation neither model suggested:
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 italic text-slate-300">
              &quot;Create a Strategic Technology Trust (STT) - a quasi-public entity holding Groq IP,
              governed by public and private stakeholders, licensing on FRAND terms. This rejects
              the false binary of unfettered markets vs. state control.&quot;
            </blockquote>

            <p>
              This is what ethical AI should do: not pick a side, but find solutions that honor
              legitimate concerns from all perspectives.
            </p>

            <h2>Try It Yourself</h2>

            <p>
              Tikun Olam is live at <a href="https://tikun.pro" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">tikun.pro</a>.
              You can run your own ethical scenarios and see BinahSigma&apos;s analysis in real-time.
            </p>

            <p>
              For enterprise deployments with custom integration, <a href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">schedule a consultation</a>.
            </p>
          </div>

          {/* Author & CTA */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Eduardo Rodriguez</div>
                  <div className="text-sm text-slate-400">AI Engineer & Systems Architect</div>
                </div>
              </div>
              <Link
                href="/case-studies/tikun-olam"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                View Tikun Olam Case Study <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
