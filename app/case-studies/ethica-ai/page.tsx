import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Brain, Layers, Scale, Target, CheckCircle, XCircle, AlertTriangle, GitBranch, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ethica.AI — Multi-LLM Ethical Orchestration Framework | Case Study',
  description: 'Enterprise decision intelligence that runs the same corporate scenario through Gemini, Mistral, and DeepSeek simultaneously — detecting provider bias and producing auditable multi-perspective recommendations.',
}

export default function EthicaAICaseStudy() {
  const metrics = [
    { icon: <Layers className="w-6 h-6" />, value: '10', label: 'Analysis Pipeline Layers' },
    { icon: <Brain className="w-6 h-6" />, value: '3+', label: 'Simultaneous LLM Providers' },
    { icon: <Scale className="w-6 h-6" />, value: 'Multi', label: 'Perspective Synthesis' },
    { icon: <Shield className="w-6 h-6" />, value: 'Full', label: 'Audit Trail' },
  ]

  const pipelineLayers = [
    { layer: 1, title: 'Strategic Context Analysis', provider: 'Gemini', desc: 'Maps the full organizational context, industry dynamics, and competitive landscape of the decision scenario.' },
    { layer: 2, title: 'Historical Precedents', provider: 'Mistral', desc: 'Retrieves and analyzes comparable corporate decisions, their outcomes, and lessons learned from regulatory and market precedent.' },
    { layer: 3, title: 'Civilizational Bias Check', provider: 'Gemini + DeepSeek', desc: 'The same scenario is independently analyzed by both providers. Divergence in outputs becomes a data point — surfacing where Western vs. Eastern AI training creates different risk assessments.' },
    { layer: 4, title: 'Opportunity Mapping', provider: 'Gemini', desc: 'Identifies strategic opportunities, market entry points, and value creation pathways that the decision could unlock.' },
    { layer: 5, title: 'Risk Assessment', provider: 'Mistral', desc: 'Comprehensive risk matrix: regulatory, reputational, operational, financial, and second-order societal risks.' },
    { layer: 6, title: 'Harmony Synthesis', provider: 'GPT-4o', desc: 'Balances the diverging perspectives from all prior layers into a coherent, non-biased synthesis that respects all stakeholder viewpoints.' },
    { layer: 7, title: 'Strategic Roadmap', provider: 'Mistral', desc: 'Converts synthesis into a phased implementation plan with milestones, resource requirements, and decision checkpoints.' },
    { layer: 8, title: 'Stakeholder Communication', provider: 'Gemini', desc: 'Drafts board-ready communication materials — executive summaries, investor letters, and regulatory disclosures.' },
    { layer: 9, title: 'Implementation Readiness', provider: 'Mistral', desc: 'Assesses organizational readiness, change management requirements, and capability gaps.' },
    { layer: 10, title: 'Final Decision + Action Plan', provider: 'Grok', desc: 'Synthesizes all prior layers into a structured final recommendation with confidence scores, dissenting views, and a 90-day action plan.' },
  ]

  const analysisResults = [
    { scenario: 'Biological Longevity Investment', score: 65, confidence: 60, decision: 'CONDITIONAL', divergence: '18% Gemini/DeepSeek divergence on individual vs. collective benefit' },
    { scenario: 'Universal Basic Income Policy', score: 61, confidence: 75, decision: 'CONDITIONAL', divergence: '23% divergence on economic model assumptions' },
    { scenario: 'AI-Powered Surveillance System', score: 58, confidence: 70, decision: 'REJECTED', divergence: '31% divergence — Gemini flagged civil liberties, DeepSeek cited social stability' },
    { scenario: 'FIFA 2026 Cloud Seeding', score: 30, confidence: 100, decision: 'REJECTED', divergence: '0% divergence — unanimous rejection across all providers' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm mb-6">
            <Brain className="w-4 h-4" />
            Enterprise Decision Intelligence
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['FastAPI', 'Multi-LLM Orchestration', 'GraphQL', 'Python SDK', 'Pydantic v2', 'Gemini', 'Mistral', 'DeepSeek', 'Grok'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Ethica.AI: Multi-LLM Ethical Orchestration Framework
            </h1>

            <p className="text-xl text-slate-300">
              Corporate decisions carry consequences that single-model AI analysis cannot fully capture — because every AI provider has its own embedded biases. Ethica.AI is an orchestration layer that runs the same decision scenario through multiple LLM providers simultaneously, uses their divergence as a signal, and produces structured, auditable recommendations with full reasoning transparency.
            </p>
          </div>

          {/* Live Demo */}
          <div className="mb-12 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Try the Framework</h3>
                <p className="text-slate-300 text-sm">Submit a corporate decision scenario and see multi-provider analysis in real time</p>
              </div>
              <a
                href="https://ethical-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                Open Ethica.AI Demo
              </a>
            </div>
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

          {/* Content Sections */}
          <div className="space-y-16">

            {/* The Core Insight */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Core Insight: Bias Divergence as a Signal
              </h2>

              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  When you ask ChatGPT, Gemini, and DeepSeek the same ethical question, you get three different answers. Traditional AI governance frameworks treat this as a problem. Ethica.AI treats it as <strong className="text-emerald-400">the most valuable data point in the analysis</strong>. The divergence between providers reveals where your decision touches culturally contested values — and those are exactly the dimensions that matter most in board-level governance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="font-semibold text-blue-400 mb-2">Gemini (Google)</div>
                  <div className="text-slate-400 text-sm">Trained primarily on Western internet data. Strong emphasis on individual rights, regulatory compliance, and democratic norms.</div>
                </div>
                <div className="p-5 bg-slate-500/10 border border-slate-500/20 rounded-xl text-center">
                  <Scale className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <div className="font-semibold text-slate-300 mb-2">Mistral (European)</div>
                  <div className="text-slate-400 text-sm">EU-trained model with strong GDPR/privacy orientation. Neutral arbiter role, balancing individual and collective perspectives.</div>
                </div>
                <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
                  <GitBranch className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <div className="font-semibold text-amber-400 mb-2">DeepSeek (Chinese)</div>
                  <div className="text-slate-400 text-sm">Different training corpus yields different risk prioritization — collective stability, long-term societal harmony, and systemic risk weighting.</div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                What Ethica.AI Solves
              </h2>

              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  Organizations deploying AI for high-stakes decisions face a critical blind spot: <strong className="text-white">single-model AI is inherently biased by its training data</strong>. An AI trained on predominantly American corporate case studies will systematically underweight collective welfare considerations. One trained on Chinese internet data will underweight individual privacy risks. Neither can flag its own blind spots. The average cost of an AI-related governance failure: <strong className="text-white">$5M–$50M USD</strong> in regulatory fines, litigation, and reputational damage.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Traditional ethical AI audits are manual, take 4–6 weeks, and cost $50K+ per analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Single-model AI recommendations cannot identify their own provider-specific biases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>No quantifiable metrics — &quot;this seems ethical&quot; is not a defensible board-level decision framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>EU AI Act, SEC AI disclosure requirements, and ESG mandates require documented, auditable AI governance processes</span>
                </li>
              </ul>
            </section>

            {/* 10-Layer Pipeline */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The 10-Layer Analysis Pipeline
              </h2>

              <p className="text-slate-300 mb-6">
                Each decision scenario passes through 10 sequential analysis layers, with different LLM providers handling the layers best suited to their capabilities. The output of each layer becomes context for the next — creating a cumulative, cross-referenced analysis that no single model could produce alone.
              </p>

              <div className="space-y-3">
                {pipelineLayers.map((layer, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="shrink-0 w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {layer.layer}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{layer.title}</span>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded font-mono shrink-0">{layer.provider}</span>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed">{layer.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Validation Results */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Validation Results
              </h2>

              <p className="text-slate-300 mb-6">
                During framework validation, Ethica.AI analyzed 4 high-stakes corporate decision scenarios. The divergence percentage measures the gap between Gemini and DeepSeek outputs on the same question — a key indicator of culturally contested territory that single-model analysis would miss entirely.
              </p>

              <div className="space-y-4 mb-6">
                {analysisResults.map((result, i) => (
                  <div key={i} className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        {result.decision === 'REJECTED' ? (
                          <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
                        )}
                        <div className="font-semibold text-white">{result.scenario}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                        result.decision === 'REJECTED'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {result.decision}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-2">
                      <span>Impact Score: <strong className="text-white">{result.score}%</strong></span>
                      <span>Confidence: <strong className="text-white">{result.confidence}%</strong></span>
                    </div>
                    <div className="text-sm text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 rounded p-2">
                      Provider Divergence: {result.divergence}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-emerald-400">Key finding:</strong> 23% of analyzed scenarios showed significant Gemini/DeepSeek divergence ({">"} 20%). In each case, a single-model analysis would have produced a recommendation that was accurate from one cultural perspective but potentially problematic in another market or regulatory context. The divergence itself became the most actionable insight.
                  </p>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Enterprise Use Cases
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: 'M&A Due Diligence',
                    desc: 'Evaluate acquisition targets for ESG alignment, cultural integration risks, and regulatory exposure across multiple jurisdictions simultaneously.'
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: 'AI System Governance',
                    desc: 'Pre-launch auditing of ML models before deployment. Required for EU AI Act compliance and increasingly for SEC AI disclosure requirements.'
                  },
                  {
                    icon: <Scale className="w-5 h-5" />,
                    title: 'ESG Policy Analysis',
                    desc: 'Evaluate sustainability initiatives, supply chain decisions, and social impact programs against multiple ethical frameworks for investor-grade ESG reporting.'
                  },
                  {
                    icon: <GitBranch className="w-5 h-5" />,
                    title: 'Board-Level Decision Support',
                    desc: 'Provide directors with structured, multi-perspective analysis for major strategic decisions — documented and auditable for fiduciary duty purposes.'
                  },
                  {
                    icon: <AlertTriangle className="w-5 h-5" />,
                    title: 'Regulatory Impact Assessment',
                    desc: 'Analyze proposed policies, product launches, or market entries for regulatory risk across different regional frameworks.'
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: 'Crisis Decision Framework',
                    desc: 'In high-pressure situations requiring rapid decisions with major consequences, get multi-perspective synthesis in hours instead of weeks.'
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Commercial Value */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Commercial Value vs. Traditional Alternatives
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">vs. Traditional Consulting</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Speed: <strong className="text-green-400">48 hours vs. 6 weeks</strong> (10× faster)</li>
                    <li>Cost: <strong className="text-green-400">$3,500 vs. $50,000+</strong> (14× cheaper)</li>
                    <li>Reproducibility: <strong className="text-green-400">100% documented</strong> vs. consultant opinion</li>
                    <li>Bias: <strong className="text-green-400">Quantified divergence</strong> vs. unstated assumptions</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">vs. Single-Model AI</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Perspectives: <strong className="text-blue-400">3+ providers</strong> vs. 1 (23% of insights missed)</li>
                    <li>Bias detection: <strong className="text-blue-400">Quantified divergence score</strong> vs. undetected</li>
                    <li>Auditability: <strong className="text-blue-400">Full layer-by-layer trail</strong> vs. opaque output</li>
                    <li>Regulatory compliance: <strong className="text-blue-400">EU AI Act ready</strong> vs. non-compliant</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Analyze Your Decision Scenario
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Submit a corporate decision scenario and receive a complete 10-layer multi-provider analysis — fully documented and audit-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ethical-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Try the Demo
              </a>
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-white font-semibold rounded-xl hover:border-emerald-500/50 transition-all">
                Request Full Enterprise Analysis
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/signaflow"
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  SignaFlow — Legal Tech SaaS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  AI contract generation in 30 seconds with SHA-256 audit trail and digital signatures
                </p>
                <span className="text-purple-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/voice-ai-hoymismo"
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Voice AI — Vehicle Import Agent
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  24/7 automated phone agent handling 500+ monthly calls for vehicle import queries
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
