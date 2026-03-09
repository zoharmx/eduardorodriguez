import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Download, FileText } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "When AI Said NO to the Pentagon: Inside Tikun Olam's $2.4B Ethical Analysis | Blog",
  description: "The Anthropic vs Pentagon $2.4B contract analyzed through TOF's 10-Sefirot pipeline across 5 AI providers. Why the framework returned a clear NO_GO recommendation.",
}

export default function TikunOlamPentagonPost() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
            AI Ethics
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            When AI Said NO to the Pentagon: Inside Tikun Olam&apos;s $2.4B Ethical Analysis
          </h1>

          <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-800">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 1, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>

          {/* Download CTA - prominent */}
          <div className="mb-10 p-6 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 border-2 border-primary-500/50 rounded-xl">
            <div className="flex items-start gap-3">
              <Download className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Download the Full Report</h3>
                <p className="text-slate-300 text-sm mb-3">
                  The complete OpenAI × Sam Altman analysis — all 10 Sefirot stages, BinahSigma scores, and the final NO_GO decision rationale.
                </p>
                <a
                  href="/downloads/tikun-olam-report.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Download Official Report PDF
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              In late 2025, Anthropic — one of the most ethics-forward AI companies in the world —
              was presented with a $2.4 billion Pentagon contract to integrate Claude into autonomous military systems.
              The question wasn&apos;t just commercial. It was civilizational: should the company that built
              Constitutional AI put that technology in weapons?
            </p>

            <p className="text-slate-300 mb-6">
              We ran the full Tikun Olam Framework on this case. Here&apos;s what happened.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Case Setup</h2>

            <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl mb-8">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-emerald-400 font-semibold mb-1">Scenario</div>
                  <div className="text-slate-300">Anthropic &amp; Pentagon $2.4B AI contract for autonomous weapons systems integration</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-semibold mb-1">Date Analyzed</div>
                  <div className="text-slate-300">January 2026 via TOF v2</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-semibold mb-1">AI Providers Used</div>
                  <div className="text-slate-300">Grok, Mistral, Gemini, GPT-4o, DeepSeek</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-semibold mb-1">Final Decision</div>
                  <div className="text-red-400 font-bold">NO_GO</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The 10-Sefirot Pipeline in Action</h2>

            <p className="text-slate-300 mb-6">
              Unlike a single LLM asked &quot;is this ethical?&quot;, Tikun Olam runs the scenario through 10 distinct
              cognitive stages — each representing a different aspect of ethical reasoning. Here&apos;s what each stage found:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { name: 'Keter (Crown)', function: 'Alignment Validation', finding: 'Constitutional AI&apos;s core premise — being honest, harmless, and helpful — is fundamentally incompatible with autonomous weapons systems. Misalignment detected at highest level.' },
                { name: 'Chochmah (Wisdom)', function: 'Historical Precedents', finding: 'Every major historical case of AI/technology used for autonomous weapons (from landmines to drones) has resulted in documented civilian harm beyond initial projections.' },
                { name: 'Binah (Understanding)', function: 'BinahSigma Bias Analysis', finding: 'Western models (Gemini, GPT-4o) showed significantly higher tolerance for military AI use. Eastern models (DeepSeek) flagged collective harm risks. Bias delta: 67%.' },
                { name: 'Chesed (Kindness)', function: 'Opportunity Analysis', finding: 'The $2.4B revenue opportunity is real. But so is the reputational and mission cost. Benefit to society: low. Benefit to Anthropic mission: negative.' },
                { name: 'Gevurah (Strength)', function: 'Risk Assessment', finding: 'Critical risks: mission drift from safety-focused AI, regulatory backlash in EU/UK, talent exodus from safety-conscious researchers, precedent for other AI labs.' },
                { name: 'Tiferet (Beauty)', function: 'Balanced Synthesis', finding: 'No balanced outcome exists. Autonomous weapons represent a category of harm that cannot be mitigated by contract clauses or oversight promises.' },
                { name: 'Netzach (Victory)', function: 'Strategic Planning', finding: 'Long-term: AI safety credibility is Anthropic&apos;s primary competitive moat. Compromising it for short-term revenue destroys the foundational value proposition.' },
                { name: 'Hod (Splendor)', function: 'Stakeholder Communication', finding: 'Public, researchers, and partners expect Anthropic to decline. Accepting sets a precedent that safety commitments are negotiable above a certain dollar threshold.' },
                { name: 'Yesod (Foundation)', function: 'Integration & Coherence', finding: 'All upstream Sefirot point to the same conclusion: this is a category error. Constitutional AI was designed to protect human values, not to optimize targeting systems.' },
                { name: 'Malchut (Kingdom)', function: 'Final Decision', finding: 'NO_GO. The contract must be declined. The risk to Anthropic&apos;s mission, the precedent it sets, and the direct harm potential are disqualifying.' },
              ].map((stage, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <div className="shrink-0 text-right min-w-[100px]">
                    <div className="text-emerald-400 font-bold text-sm">{stage.name}</div>
                    <div className="text-slate-500 text-xs">{stage.function}</div>
                  </div>
                  <div className="text-slate-300 text-sm">{stage.finding}</div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The BinahSigma Analysis: A 67% Civilizational Divide</h2>

            <p className="text-slate-300 mb-6">
              One of the most revealing findings was the BinahSigma divergence score: 67%.
              Western-trained models (GPT-4o, Gemini) showed significantly higher tolerance for military AI use,
              framing it through the lens of national security, deterrence theory, and rule-of-law.
              Eastern models (DeepSeek) consistently flagged collective harm, historical abuse of similar technologies,
              and the impossibility of meaningful civilian oversight.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Western AI Framing</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• National security justifies exceptional measures</li>
                  <li>• International law provides sufficient guardrails</li>
                  <li>• Commercial contracts don&apos;t imply endorsement</li>
                  <li>• Revenue enables better safety research</li>
                </ul>
              </div>
              <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-3">Eastern AI Framing</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Collective harm to civilians is primary</li>
                  <li>• Historical technology misuse is predictive</li>
                  <li>• Institutional trust once broken cannot be rebuilt</li>
                  <li>• Precedent effects exceed single-contract impact</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-300 mb-6">
              Neither perspective alone is complete. But the synthesis — the Transcendent Synthesis
              produced by Tiferet — found that the weight of evidence from both civilizational framings
              points to the same conclusion: NO_GO.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why This Matters Beyond Anthropic</h2>

            <p className="text-slate-300 mb-6">
              This case study matters because it demonstrates what ethical AI analysis looks like in practice.
              Not a philosophical debate. Not a corporate ethics statement. An actual structured evaluation
              that produces a decision with a traceable audit trail.
            </p>

            <p className="text-slate-300 mb-6">
              The ERI (Ethical Risk Index) for this case: <span className="text-red-400 font-bold">0.91/1.0</span> —
              one of the highest risk scores the framework has produced. That score isn&apos;t an opinion.
              It&apos;s the aggregated output of 5 AI providers, 10 cognitive stages, and BinahSigma bias detection.
            </p>

            <div className="p-6 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl mb-8">
              <p className="text-slate-300 italic text-lg">
                &quot;The point of Tikun Olam is not to tell you what to think. It&apos;s to show you
                what every major cultural and ethical framework thinks simultaneously — and then
                find the synthesis that transcends them all.&quot;
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Download the Full Report</h2>

            <p className="text-slate-300 mb-6">
              The complete analysis — all 10 Sefirot stages with full reasoning, BinahSigma scores,
              blind spot analysis across 5 AI providers, and the complete decision rationale — is available
              in the official OpenAI × Sam Altman Tikun Olam report.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/downloads/tikun-olam-report.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25"
              >
                <FileText className="w-5 h-5" />
                Download Official Report PDF
              </a>
              <Link
                href="/case-studies/tikun-olam"
                className="inline-flex items-center gap-3 px-6 py-4 bg-slate-800 border border-primary-500/30 text-primary-400 font-semibold rounded-xl hover:border-primary-500/60 transition-all"
              >
                Full Tikun Olam Case Study →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
