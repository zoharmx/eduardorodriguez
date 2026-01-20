import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Github, TrendingUp, Eye, Brain, Shield, Download, Play, Clock, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tikun Olam - Observable Ethical AI | Case Study',
  description: 'The first ethical AI pipeline with full observability in Datadog. Winner of Google Cloud x Datadog Hackathon.',
}

export default function TikunOlamCaseStudy() {
  const metrics = [
    { icon: <Eye className="w-6 h-6" />, value: '73%', label: 'Bias Delta Detected' },
    { icon: <Brain className="w-6 h-6" />, value: '14', label: 'Blind Spots Found' },
    { icon: <Clock className="w-6 h-6" />, value: '8.8min', label: 'Analysis Time' },
    { icon: <TrendingUp className="w-6 h-6" />, value: 'Winner', label: 'Google Cloud x Datadog' },
  ]

  const sefirotPipeline = [
    { name: 'Keter', translation: 'Crown', function: 'Ethical Alignment Validation', duration: '42.68s' },
    { name: 'Chochmah', translation: 'Wisdom', function: 'Historical Precedents Analysis', duration: '49.71s' },
    { name: 'Binah', translation: 'Understanding', function: 'BinahSigma Bias Detection', duration: '129.28s' },
    { name: 'Chesed', translation: 'Kindness', function: 'Opportunity Identification', duration: '~50s' },
    { name: 'Gevurah', translation: 'Strength', function: 'Risk Assessment', duration: '56.56s' },
    { name: 'Tiferet', translation: 'Beauty', function: 'Balanced Synthesis', duration: '45.22s' },
    { name: 'Netzach', translation: 'Victory', function: 'Strategic Planning', duration: '35.99s' },
    { name: 'Hod', translation: 'Splendor', function: 'Stakeholder Communication', duration: '41.63s' },
    { name: 'Yesod', translation: 'Foundation', function: 'Integration & Coherence', duration: '43.85s' },
    { name: 'Malchut', translation: 'Kingdom', function: 'Final Decision', duration: '44.94s' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Google Cloud x Datadog Hackathon Winner
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'DeepSeek', 'Google Cloud'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Tikun Olam: Observable Ethical AI
            </h1>

            <p className="text-xl text-slate-300 mb-6">
              The first ethical AI pipeline with full observability. Detects civilizational biases
              by comparing Western vs Eastern AI models in real-time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://devpost.com/software/tikun-olam-observable-ethical-ai-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="https://github.com/zoharmx/TikunOlam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-emerald-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/E6s9vGI7hLw"
                title="Tikun Olam Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Hackathon presentation video - Tikun Olam in action</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-emerald-400 flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white font-display mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* The Story */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Question That Started Everything
              </h2>
              <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl mb-6">
                <p className="text-2xl text-white italic text-center mb-4">
                  "Can artificial intelligence make ethical decisions?"
                </p>
                <p className="text-slate-300 text-center">
                  While other developers focused on making AI faster or more accurate, I became obsessed with
                  something deeper: <strong className="text-emerald-400">How can a machine understand right and wrong?</strong>
                </p>
              </div>

              <p className="text-slate-300 mb-6">
                It wasn't enough to create systems that worked. I needed to create systems that <strong className="text-white">did the right thing</strong>.
              </p>

              <p className="text-slate-300">
                The answer was in an unexpected place: <strong className="text-emerald-400">millennial Kabbalistic principles</strong> applied
                to modern computational systems.
              </p>
            </section>

            {/* BinahSigma Algorithm */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                BinahSigma: The Proprietary Algorithm
              </h2>

              <p className="text-slate-300 mb-6">
                BinahSigma is the core innovation of Tikun Olam - the <strong className="text-emerald-400">only AI alignment
                framework that treats bias as information, not noise</strong>.
              </p>

              <div className="p-6 bg-slate-900 border border-emerald-500/30 rounded-xl mb-8 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`Input: Ethical Scenario
       │
       ▼
┌──────────────────────────────────────────────┐
│           BINAH SIGMA ENGINE                 │
├──────────────────────────────────────────────┤
│                                              │
│  ┌──────────────┐    ┌──────────────┐       │
│  │ WESTERN AI   │    │ EASTERN AI   │       │
│  │ (Gemini 2.5) │    │ (DeepSeek)   │       │
│  └──────┬───────┘    └──────┬───────┘       │
│         │                   │                │
│         ▼                   ▼                │
│  ┌──────────────┐    ┌──────────────┐       │
│  │ Western      │    │ Eastern      │       │
│  │ Values:      │    │ Values:      │       │
│  │ - Free mkt   │    │ - Collective │       │
│  │ - Individual │    │ - Harmony    │       │
│  │ - Compete    │    │ - Stability  │       │
│  └──────┬───────┘    └──────┬───────┘       │
│         │                   │                │
│         └─────────┬─────────┘                │
│                   ▼                          │
│         ┌─────────────────┐                 │
│         │ DIVERGENCE Δ    │                 │
│         │ (0% - 100%)     │                 │
│         └────────┬────────┘                 │
│                  ▼                          │
│  ┌──────────────────────────────────────┐  │
│  │     TRANSCENDENT SYNTHESIS           │  │
│  │ Novel solution neither side saw      │  │
│  └──────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
       │
       ▼
Output: Ethical Decision + Audit Trail`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Western Model (Gemini 2.5)</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Trained on Western corpus</li>
                    <li>• Values: Free markets, individual rights</li>
                    <li>• Focus: Competition, rule of law</li>
                    <li>• Blind spot: Process over outcome</li>
                  </ul>
                </div>

                <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Eastern Model (DeepSeek R1)</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Trained on Chinese corpus</li>
                    <li>• Values: Collective harmony, stability</li>
                    <li>• Focus: Long-term welfare, stewardship</li>
                    <li>• Blind spot: Undervalues disruption</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10-Sefirot Pipeline */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The 10-Sefirot Pipeline
              </h2>

              <p className="text-slate-300 mb-6">
                Instead of collapsing ethics into a single objective function, Tikun Olam models ethical reasoning
                as a <strong className="text-emerald-400">10-stage process</strong> inspired by the Kabbalistic Tree of Life.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-emerald-400">Sefirah</th>
                      <th className="text-left py-3 px-4 text-slate-400">Translation</th>
                      <th className="text-left py-3 px-4 text-slate-400">Function</th>
                      <th className="text-right py-3 px-4 text-slate-400">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sefirotPipeline.map((stage, i) => (
                      <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-white">{stage.name}</td>
                        <td className="py-3 px-4 text-slate-400">{stage.translation}</td>
                        <td className="py-3 px-4 text-slate-300">{stage.function}</td>
                        <td className="py-3 px-4 text-right text-emerald-400 font-mono">{stage.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Real Demo: Nvidia-Groq */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Real-World Demo: Nvidia-Groq $20B Acquisition
              </h2>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">Live Analysis</span>
                  <span className="text-slate-400 text-sm">December 26, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Case: Should the FTC approve Nvidia's $20B "licensing deal" with Groq?
                </h3>
                <p className="text-slate-300 text-sm">
                  48 hours after Nvidia announced the unprecedented deal, we ran the full 10-Sefirot analysis
                  to demonstrate BinahSigma's capabilities on a real, high-stakes scenario.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">73%</div>
                  <div className="text-sm text-slate-400">BinahSigma Bias Delta</div>
                  <div className="text-xs text-emerald-400 mt-1">HIGH civilizational divergence</div>
                </div>
                <div className="p-6 bg-slate-800/50 border border-blue-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">14</div>
                  <div className="text-sm text-slate-400">Blind Spots Detected</div>
                  <div className="text-xs text-blue-400 mt-1">6 Western + 8 Eastern</div>
                </div>
                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">CONDITIONAL</div>
                  <div className="text-sm text-slate-400">Final Decision</div>
                  <div className="text-xs text-purple-400 mt-1">Balanced synthesis achieved</div>
                </div>
              </div>

              {/* Western vs Eastern Blind Spots */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Western AI Blind Spots</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Overemphasis on process over outcome</li>
                    <li>• National-centric regulatory focus</li>
                    <li>• Consumer welfare standard limitations</li>
                  </ul>
                </div>
                <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-amber-400 mb-4">Eastern AI Blind Spots</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Undervalues disruptive innovation</li>
                    <li>• Dismisses individual entrepreneurial reward</li>
                    <li>• Prefers deliberation over speed</li>
                  </ul>
                </div>
              </div>

              {/* Transcendent Synthesis */}
              <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Transcendent Synthesis
                </h4>
                <p className="text-slate-300 italic mb-4">
                  "Rejecting the false binary of 'unfettered markets vs. state control,' the synthesis mandates
                  a <strong className="text-white">Strategic Technology Trust (STT)</strong> - a novel quasi-public entity
                  holding Groq IP, governed by public and private stakeholders, licensing on FRAND terms."
                </p>
                <p className="text-emerald-400 font-semibold">
                  Neither the Western nor Eastern perspective could see this solution alone.
                </p>
              </div>

              {/* Download Results */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/downloads/tikun_nvidia_groq_analysis.json"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-emerald-500/50 transition-colors text-sm"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  Download Full JSON (136KB)
                </a>
                <a
                  href="/downloads/tikun_nvidia_groq_summary.txt"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-emerald-500/50 transition-colors text-sm"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  Download Summary (TXT)
                </a>
              </div>
            </section>

            {/* Technical Architecture */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Technical Architecture
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Backend Stack</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li><strong className="text-emerald-400">Runtime:</strong> Python 3.11 + FastAPI</li>
                    <li><strong className="text-emerald-400">Async:</strong> AsyncIO for parallel model calls</li>
                    <li><strong className="text-emerald-400">Storage:</strong> Google Cloud Storage + Firebase</li>
                    <li><strong className="text-emerald-400">Deploy:</strong> Google Cloud Run (tikun.pro)</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">AI & Observability</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li><strong className="text-emerald-400">Western:</strong> Vertex AI Gemini 2.5 Pro</li>
                    <li><strong className="text-emerald-400">Eastern:</strong> DeepSeek R1 Chat</li>
                    <li><strong className="text-emerald-400">APM:</strong> Datadog with custom metrics</li>
                    <li><strong className="text-emerald-400">Metrics:</strong> bias_delta, alignment_score</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Validation Results */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Validation Results
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-emerald-400">Test Case</th>
                      <th className="text-left py-3 px-4 text-slate-400">Type</th>
                      <th className="text-center py-3 px-4 text-slate-400">Alignment</th>
                      <th className="text-center py-3 px-4 text-slate-400">BinahSigma Δ</th>
                      <th className="text-center py-3 px-4 text-slate-400">Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Nvidia-Groq $20B M&A</td>
                      <td className="py-3 px-4 text-slate-400">Antitrust</td>
                      <td className="py-3 px-4 text-center text-yellow-400">15%</td>
                      <td className="py-3 px-4 text-center text-red-400">73%</td>
                      <td className="py-3 px-4 text-center text-purple-400">CONDITIONAL</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">UBI-DAO Governance</td>
                      <td className="py-3 px-4 text-slate-400">Economic</td>
                      <td className="py-3 px-4 text-center text-green-400">89%</td>
                      <td className="py-3 px-4 text-center text-yellow-400">43%</td>
                      <td className="py-3 px-4 text-center text-purple-400">CONDITIONAL</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Desalination Infrastructure</td>
                      <td className="py-3 px-4 text-slate-400">Resource</td>
                      <td className="py-3 px-4 text-center text-green-400">95%</td>
                      <td className="py-3 px-4 text-center text-green-400">18%</td>
                      <td className="py-3 px-4 text-center text-green-400">GO</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Turritopsis Research</td>
                      <td className="py-3 px-4 text-slate-400">Existential</td>
                      <td className="py-3 px-4 text-center text-yellow-400">69%</td>
                      <td className="py-3 px-4 text-center text-green-400">12%</td>
                      <td className="py-3 px-4 text-center text-red-400">NO_GO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore the Project
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Tikun Olam is open-source. You can explore the code, contribute,
              or implement it in your own infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://devpost.com/software/tikun-olam-observable-ethical-ai-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View on Devpost
              </a>
              <a
                href="https://github.com/zoharmx/TikunOlam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex justify-center items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/ethica-ai"
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Ethica.AI Framework
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Multi-LLM architecture for ethical corporate decisions
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/vocalisai"
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  VocalisAI - Voice Agent with Payments
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Autonomous phone agent with Stripe integration
                </p>
                <span className="text-purple-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
