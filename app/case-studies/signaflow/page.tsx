import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, FileSignature, Shield, Sparkles, Clock, CheckCircle, Play, Lock, FileText, Users } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SignaFlow — Legal Tech SaaS for Digital Contracts | Case Study',
  description: 'AI-powered contract creation in 30 seconds, digital signatures with SHA-256 audit trail, and full contract lifecycle management. 100% production-ready.',
}

export default function SignaFlowCaseStudy() {
  const metrics = [
    { icon: <Sparkles className="w-6 h-6" />, value: '30s', label: 'Contract Creation (vs 2h manual)' },
    { icon: <Shield className="w-6 h-6" />, value: 'SHA-256', label: 'Cryptographic Audit Trail' },
    { icon: <Clock className="w-6 h-6" />, value: '98%', label: 'Time Savings' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '100%', label: 'Legal Validity' },
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

          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live in Production — 100% Ready
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['React 19', 'Gemini 2.0 Flash', 'Firebase Auth', 'Firestore', 'Canvas API', 'jsPDF', 'SHA-256'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              SignaFlow: Legal Tech SaaS for Digital Contracts
            </h1>

            <p className="text-xl text-slate-300">
              A production-ready legal tech platform that compresses the entire contract lifecycle — from drafting to signed PDF — from days of back-and-forth into under 5 minutes. Powered by Gemini 2.0 Flash for AI generation and Canvas API for legally valid digital signatures with an immutable SHA-256 audit trail.
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mb-12 p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Try SignaFlow Live</h3>
              <p className="text-slate-300">Create a contract with AI and send it for signature — free account, no credit card</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://contratossignaflow.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-xl hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/25"
              >
                <ExternalLink className="w-6 h-6" />
                Launch SignaFlow Platform
              </a>
            </div>
          </div>

          {/* Video Presentation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Platform Walkthrough</h3>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xyGlBNzg20Q"
                title="SignaFlow Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Complete walkthrough: AI contract generation → digital signature → audit-sealed PDF</p>
          </div>

          {/* Platform Screenshots */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Platform Interface</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20 bg-slate-800/50">
                <img
                  src="/images/signaflow/signaflow-1.png"
                  alt="SignaFlow AI Contract Editor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">AI Contract Editor</p>
                  <p className="text-xs text-slate-300">Describe your contract, get professional legal text in 30s</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20 bg-slate-800/50">
                <img
                  src="/images/signaflow/signaflow-2.png"
                  alt="SignaFlow Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Contract Dashboard</p>
                  <p className="text-xs text-slate-300">Real-time status: drafts, sent, viewed, signed</p>
                </div>
              </div>
            </div>
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
                The Problem: Contracts Are Broken
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  For freelancers, consultancies, and small businesses, contracts are a daily pain point. Writing a custom contract from scratch takes <strong className="text-white">2+ hours</strong> — and that&apos;s before the back-and-forth of chasing signatures. Physical paper, scanned PDFs, and email threads introduce delays measured in days, and leave zero legally defensible audit trail if a dispute arises.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>2+ hours to draft a single contract manually, even with templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>5–7 days average signature turnaround (print → sign → scan → email)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>No proof of when the document was opened, read, or signed — zero non-repudiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Physical documents can be falsified, lost, or altered without a digital hash to detect tampering</span>
                </li>
              </ul>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The SignaFlow Solution
              </h2>

              <p className="text-slate-300 mb-6">
                SignaFlow compresses the full contract lifecycle — CREATE → SAVE → SEND → VIEW → SIGN → DOWNLOAD — into a single, seamless flow that takes minutes, not days. The platform combines AI generation, cryptographic audit trails, and a professional PDF engine into a product any business can use without legal expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    AI Contract Generation
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Describe your contract in plain language — &quot;service agreement for 3-month web development project, $5,000, with IP transfer clause&quot; — and Gemini 2.0 Flash generates a complete professional legal contract in under 30 seconds. Includes standard clauses, obligations, dispute resolution, and signature blocks.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileSignature className="w-5 h-5 text-purple-400" />
                    Digital Signature System
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Canvas API-based signature capture supporting both mouse and multi-touch. Signers can draw their handwritten signature or choose from multiple professional font styles for a typed signature — all captured as a PNG and embedded in the final PDF with precise metadata.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    SHA-256 Audit Trail
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Every action is captured with millisecond-precision timestamp, IP address, browser fingerprint, device info, and signer identity. A SHA-256 hash is computed over all this data and embedded in the document — making falsification cryptographically impossible and providing full non-repudiation for legal disputes.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Professional PDF Output
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The signed contract is auto-generated as a professional PDF with your company logo, full contract body, the signer&apos;s signature image, and a tamper-evident audit seal showing the verification ID, timestamp, and cryptographic hash. Ready for immediate legal use.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-4">Audit Trail Data Captured Per Signature</h4>
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`{
  "verification_id": "SF-2025-A1B2C3D4",
  "timestamp": "2025-03-08T14:23:45.892Z",        // millisecond precision
  "signer_name": "John Smith",
  "signer_email": "john@example.com",
  "ip_address": "201.175.42.X",
  "browser_fingerprint": "Mozilla/5.0 ... Chrome/120",
  "device_type": "desktop",
  "document_hash": "sha256:e3b0c44298fc1c149a...",  // full document SHA-256
  "action": "SIGNED",
  "geolocation": "Mexico City, MX"                  // optional
}`}</pre>
                </div>
              </div>
            </section>

            {/* Contract Lifecycle */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Complete Contract Lifecycle
              </h2>

              <div className="space-y-3">
                {[
                  { step: '1', title: 'Create', desc: 'Describe your contract in plain English or fill out a structured form. Gemini 2.0 Flash generates professional legal text in 30 seconds. Edit any clause before saving.', status: 'DRAFT' },
                  { step: '2', title: 'Save as Draft', desc: 'Contract is stored in Firestore under your account with full version history. Only you can see your own documents — enforced by Firestore security rules.', status: 'DRAFT' },
                  { step: '3', title: 'Send to Client', desc: 'Generate a unique signing link and send it via email or WhatsApp. The link is tied to a specific contract ID and signer email — no account needed for the recipient.', status: 'SENT' },
                  { step: '4', title: 'Client Views', desc: 'When the recipient opens the link, SignaFlow automatically records the view event with timestamp and device info. You see the status change to VIEWED in real time.', status: 'VIEWED' },
                  { step: '5', title: 'Digital Signature', desc: 'The client draws or types their signature on the interactive Canvas. On submit, the full audit trail is captured and SHA-256 hash is computed over all data.', status: 'SIGNED' },
                  { step: '6', title: 'Download PDF', desc: 'Both parties instantly get the professionally formatted PDF with embedded signature image, audit seal, and verification ID for future legal reference.', status: 'COMPLETE' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded font-mono">{item.status}</span>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Architecture */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Security Architecture
              </h2>

              <p className="text-slate-300 mb-6">
                SignaFlow was built with a security-first architecture. The Firestore rules enforce strict ownership boundaries at the database level — no middleware can be bypassed. Client-facing links expose only the minimum necessary data for signing, with no access to other users&apos; contracts.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <Lock className="w-6 h-6 text-purple-400 mb-3" />
                  <div className="font-semibold text-white mb-2">Firestore Rules</div>
                  <div className="text-slate-400 text-sm">Users can only read/write their own documents. Clients accessing a signing link can only see the specific contract they were sent, with status limited to SENT or VIEWED.</div>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <Shield className="w-6 h-6 text-purple-400 mb-3" />
                  <div className="font-semibold text-white mb-2">Field-Level Permissions</div>
                  <div className="text-slate-400 text-sm">Signature images are limited to 2MB in Storage rules. Firestore rules validate required fields on write. Audit trail fields cannot be overwritten once set.</div>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-400 mb-3" />
                  <div className="font-semibold text-white mb-2">Non-Repudiation</div>
                  <div className="text-slate-400 text-sm">SHA-256 hash over document content + signer metadata + timestamp. Any post-sign modification changes the hash, making document tampering detectable.</div>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Measurable Impact
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" />
                    Time Savings
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Contract creation: <strong className="text-green-400">2 hours → 30 seconds</strong> (98% reduction)</li>
                    <li>Signature collection: <strong className="text-green-400">5-7 days → minutes</strong></li>
                    <li>A consultancy closing 3 contracts/week saves <strong className="text-green-400">40+ hours/month</strong></li>
                    <li>No legal review needed for standard contracts — AI handles clause selection</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Legal Certainty
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-blue-400">100%</strong> audit trail — every event timestamped and hashed</li>
                    <li>0 falsification possible — SHA-256 non-repudiation guarantee</li>
                    <li>Signer IP, device, and browser fingerprint captured on every signature</li>
                    <li>Compliant with electronic signature standards for business contracts</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Try SignaFlow Free
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Create your first AI-generated contract and send it for signature in under 5 minutes — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://contratossignaflow.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Launch SignaFlow
              </a>
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all">
                Request a Custom Demo
              </Link>
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
                  Ethica.AI — Multi-LLM Orchestration
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Enterprise decision intelligence that runs scenarios through multiple AI providers to detect bias
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
