import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Brain, Shield, Scale, BarChart3, CheckCircle, Database, Server } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Binah-Σ - Cognitive Decision Engine | Case Study',
  description: 'Enterprise API for structured, auditable decision evaluation. Built with FastAPI, Pydantic, and OpenAI SDK for governance, ESG compliance, and policy analysis.',
}

export default function BinahSigmaCaseStudy() {
  const metrics = [
    { icon: <Brain className="w-6 h-6" />, value: '0.92', label: 'Avg Binah-Σ Index' },
    { icon: <Shield className="w-6 h-6" />, value: '100%', label: 'Schema Validated' },
    { icon: <BarChart3 className="w-6 h-6" />, value: '<2s', label: 'Response Time' },
    { icon: <Database className="w-6 h-6" />, value: 'Full', label: 'Audit Trail' },
  ]

  const outputSchema = {
    binah_sigma_index: '0.0-1.0',
    binah_sigma_confidence: '0.0-1.0',
    decision_coherence: 'Low|Medium|High',
    ethical_alignment: 'Aligned|Partial|Misaligned',
    systemic_risk: 'Low|Medium|High|Critical',
    key_tensions: '["string"]',
    unintended_consequences: '["string"]',
    binah_recommendation: 'string',
    explanation_summary: 'string',
  }

  const useCases = [
    { name: 'Corporate Governance', desc: 'M&A decisions, strategic planning, risk assessment' },
    { name: 'ESG & Compliance', desc: 'Policy evaluation, regulatory alignment, EU AI Act' },
    { name: 'Public Sector', desc: 'Policy analysis, public program impact assessment' },
    { name: 'Financial Institutions', desc: 'High-impact investment decisions, portfolio ethics' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['FastAPI', 'Pydantic', 'OpenAI SDK', 'Docker', 'Railway'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Binah-Σ: Cognitive Decision Engine
            </h1>

            <p className="text-xl text-slate-300">
              Enterprise-grade API for structured decision evaluation. Unlike generative chat systems,
              Binah-Σ produces <strong className="text-emerald-400">auditable, structured outputs</strong> suitable
              for enterprise governance, ESG compliance, and policy analysis.
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mb-12 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Live API Available</h3>
                <p className="text-slate-300 text-sm">Production-ready cognitive decision infrastructure</p>
              </div>
              <a
                href="https://binahsigma.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                View Binah-Σ
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
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Problem
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  Traditional AI tools produce <strong className="text-white">text output that cannot be audited</strong>.
                  For critical decisions in governance, compliance, and finance, organizations need
                  <strong className="text-white"> structured, measurable outputs</strong> that can be reviewed,
                  compared, and traced.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Chatbots produce text, not actionable metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No audit trail for regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Cannot compare decisions systematically over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Consulting is expensive ($50K+) and slow (6 weeks)</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Solution: Structured Decision Evaluation
              </h2>

              <p className="text-slate-300 mb-6">
                Binah-Σ is <strong className="text-emerald-400">not a chatbot</strong>. It&apos;s a cognitive
                infrastructure that decomposes complexity (Binah) and synthesizes coherence (Σ) into
                measurable outputs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Traditional AI</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Produces text</li>
                    <li>• Not auditable</li>
                    <li>• No metrics</li>
                    <li>• Conversational use case</li>
                  </ul>
                </div>

                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Binah-Σ</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Structured evaluation</li>
                    <li>• Native auditability</li>
                    <li>• Numerical indices (0-1)</li>
                    <li>• Critical decision-making</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Architecture
              </h2>

              <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl mb-8">
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`┌─────────────────┐
│   Client/API    │
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│  FastAPI Gateway     │
│  - CORS              │
│  - Rate Limiting     │
│  - Validation        │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│  Binah-Σ Engine      │
│  - Prompt Orchestr.  │
│  - LLM Call          │
│  - JSON Enforcement  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│  Pydantic Validation │
│  - Schema Check      │
│  - Type Enforcement  │
└────────┬─────────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌─────────┐
│Logging │ │ Metrics │
└────────┘ └─────────┘`}</pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <Server className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-semibold text-blue-400 mb-2">FastAPI + Async</div>
                  <div className="text-slate-400 text-sm">High concurrency, non-blocking</div>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="font-semibold text-green-400 mb-2">Pydantic Validation</div>
                  <div className="text-slate-400 text-sm">Strict schema enforcement</div>
                </div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
                  <Scale className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="font-semibold text-amber-400 mb-2">LLM Agnostic</div>
                  <div className="text-slate-400 text-sm">Swap OpenAI, Anthropic, local</div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                API Response Schema
              </h2>

              <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                <div className="font-mono text-sm overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 text-emerald-400">Field</th>
                        <th className="py-2 text-emerald-400">Type</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {Object.entries(outputSchema).map(([key, value]) => (
                        <tr key={key} className="border-b border-slate-800">
                          <td className="py-2 text-white">{key}</td>
                          <td className="py-2 text-slate-400">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Primary Use Cases
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white mb-1">{useCase.name}</div>
                        <div className="text-slate-400 text-sm">{useCase.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Competitive Advantages
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Technical</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-emerald-400">Schema-First:</strong> Outputs are contracts, not suggestions</li>
                    <li><strong className="text-emerald-400">Vendor Agnostic:</strong> Swap LLM providers easily</li>
                    <li><strong className="text-emerald-400">Audit Trail:</strong> Every decision is logged</li>
                    <li><strong className="text-emerald-400">Metrics:</strong> Build longitudinal quality datasets</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Business</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-blue-400">Not a Chatbot:</strong> Critical infrastructure positioning</li>
                    <li><strong className="text-blue-400">Compliance-Ready:</strong> Structured for regulatory review</li>
                    <li><strong className="text-blue-400">Scalable:</strong> Metered API, not seat-based</li>
                    <li><strong className="text-blue-400">Data Moat:</strong> Aggregated decision benchmarks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Example Request
              </h2>

              <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`POST /binah-sigma/analyze

{
  "context": "Tech company considering mass layoffs",
  "decision_question": "Should we lay off 30% of workforce?",
  "stakeholders": ["employees", "investors", "customers"],
  "constraints": ["budget deficit", "market pressure"],
  "time_horizon": "6 months"
}`}</pre>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Auditable AI Decisions?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Binah-Σ is production-ready. Integrate structured decision evaluation into your enterprise workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://binahsigma.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View API Docs
              </a>
              <Link href="/contact" className="btn-secondary inline-flex justify-center items-center gap-2">
                Request Demo
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
                  Tikun Olam - Observable Ethical AI
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Ethical AI pipeline with full observability in Datadog
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/ethica-ai"
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Ethica.AI Framework
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Multi-LLM orchestration for bias-free decisions
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
