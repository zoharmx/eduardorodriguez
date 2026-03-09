import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, FileText, Users, Bot, BarChart3, Package, Building2, DollarSign, CheckCircle, Globe, TrendingUp, Database } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HoyMismo Dashboard Agencia — Operating System for Customs Agencies | Case Study',
  description: 'Complete digital operating system for agencias aduanales specializing in US-to-Mexico vehicle imports. AI-assisted, white-label SaaS replacing paper and Excel.',
}

export default function HoyMismoDashboardCaseStudy() {
  const metrics = [
    { icon: <Package className="w-6 h-6" />, value: 'All-in-One', label: 'Complete Customs Agency OS' },
    { icon: <Bot className="w-6 h-6" />, value: 'AI', label: 'Multi-Model Assistant' },
    { icon: <Globe className="w-6 h-6" />, value: 'White-Label', label: 'Ready for Resale' },
    { icon: <DollarSign className="w-6 h-6" />, value: '$150/mo', label: 'SaaS per Agency' },
  ]

  const statusFlow = [
    { key: 'Contact Created', color: 'bg-slate-600', desc: 'First inquiry received' },
    { key: 'Initial Docs', color: 'bg-blue-600', desc: 'Document collection started' },
    { key: 'Vehicle Validated', color: 'bg-indigo-600', desc: 'VIN and ownership confirmed' },
    { key: 'Deposit Received', color: 'bg-violet-600', desc: 'Initial payment processed' },
    { key: 'Processing', color: 'bg-purple-600', desc: 'Active customs processing' },
    { key: 'Pedimento Generated', color: 'bg-orange-600', desc: 'Customs declaration issued' },
    { key: 'Settlement', color: 'bg-amber-600', desc: 'Duties and fees paid' },
    { key: 'Finalized', color: 'bg-green-600', desc: 'Vehicle delivered to client' },
  ]

  const modules = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Expediente Management',
      desc: 'Complete import case tracking with 8-stage workflow. Every status transition is timestamped, documented, and tied to billing milestones. Full audit trail from first contact to vehicle delivery.',
      color: 'cyan',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Client Portal',
      desc: 'Public-facing tracking page where clients check their import status online with their folio number. Reduces inbound status calls by 60% — clients self-serve 24/7.',
      color: 'cyan',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'CRM',
      desc: 'Full client database with complete import history, vehicle records, contact information, and preference notes. Search and filter across all past clients instantly.',
      color: 'cyan',
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'Billing & Invoicing',
      desc: 'Automatic invoice generation tied to import milestones (deposit, customs duty, agency fee, delivery). Tracks payment status, generates professional PDF invoices, manages credit accounts.',
      color: 'cyan',
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Document Repository',
      desc: 'Digital storage for all import documents: vehicle titles, owner IDs, customs forms (pedimento), deposit receipts, and delivery photos. Organized by expediente, searchable.',
      color: 'cyan',
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: 'AI Assistant',
      desc: 'Natural language queries over all agency data. Ask "Which clients have open pedimentos older than 30 days?" or "What is the average processing time for trucks vs. cars?" — answered instantly.',
      color: 'cyan',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Analytics Dashboard',
      desc: 'Monthly imports processed, average processing time, revenue breakdown by service type, top clients by volume, and outstanding balance tracking. Export-ready reports.',
      color: 'cyan',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'White-Label Ready',
      desc: '100% rebrandable: logo, color scheme, agency name, email templates, and PDF headers. Designed from day one to be resold to other agencies with a $2,000 setup fee.',
      color: 'cyan',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
            <Building2 className="w-4 h-4" />
            SaaS Product — Customs Agencies Mexico
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Next.js 14', 'Firebase', 'Google Cloud', 'Tailwind CSS', 'Mistral AI', 'DeepSeek', 'Gemini', 'White-Label SaaS'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              HoyMismo Dashboard Agencia: OS for Customs Agencies
            </h1>

            <p className="text-xl text-slate-300">
              Agencias aduanales in Mexico were managing vehicle import operations with a combination of paper files, WhatsApp groups, and Excel spreadsheets. This platform digitizes the complete import lifecycle — from first client contact to vehicle delivery — in a single system with AI assistance, digital document management, and a client-facing tracking portal.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-cyan-400 flex justify-center mb-3">
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
                The Problem: Paper-Based Operations in a Complex Industry
              </h2>

              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  A typical agencia aduanal handling 20–50 vehicle imports per month juggles hundreds of documents, dozens of active cases, multiple client communications, and a complex sequence of customs procedures — all with legal and financial consequences for errors. Yet most were doing this entirely on paper and Excel. A misfiled document means a missed customs window. A forgotten client follow-up means a lost referral. A billing error means a compliance risk.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">Operational Chaos Before</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Physical folders for each import — easily lost or misfiled</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> WhatsApp as the primary client communication tool — no history</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Excel billing with manual calculations — error-prone and slow</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Zero visibility into business KPIs or processing bottlenecks</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">High-Stakes Consequences</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Missing customs deadlines costs clients thousands in penalties</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Duplicate import cases created from miscommunication</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> No audit trail — disputes with clients had no documentary evidence</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Scaling the operation meant hiring proportionally more staff</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The 8-Stage Workflow */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Core: 8-Stage Import Lifecycle Management
              </h2>

              <p className="text-slate-300 mb-6">
                The expediente system is the heart of the platform. Each import case (expediente) moves through 8 defined stages, with each transition requiring confirmation, optional document attachment, and auto-generation of client notifications. Every stage is timestamped and linked to the corresponding billing events.
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {statusFlow.map((stage, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/30 border border-slate-700 rounded-lg">
                    <span className={`${stage.color} text-white text-xs font-bold px-2 py-1 rounded shrink-0 min-w-[24px] text-center`}>
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm">{stage.key}</div>
                      <div className="text-slate-400 text-xs">{stage.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-slate-300 text-sm">
                  <strong className="text-cyan-400">Auto-triggers on each transition:</strong> Client receives WhatsApp/email notification with status update. Billing module is notified to generate the appropriate invoice (deposit, duty payment, agency fee, or final settlement). Timestamp is recorded for processing-time analytics.
                </p>
              </div>
            </section>

            {/* All 8 Modules */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                8 Integrated Modules
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((mod, i) => (
                  <div key={i} className="p-5 bg-slate-800/50 border border-cyan-500/20 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                      {mod.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{mod.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{mod.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Assistant */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                AI Assistant: Natural Language Over Agency Data
              </h2>

              <p className="text-slate-300 mb-6">
                Rather than forcing agents to navigate reports and filters, the AI assistant (powered by Mistral, DeepSeek, and Gemini) answers operational questions in plain Spanish or English directly against the live Firestore database. It understands the domain context — import stages, customs terminology, billing states — and gives actionable answers, not just data.
              </p>

              <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Sample Agency Queries</h4>
                <div className="space-y-3">
                  {[
                    {
                      q: '"Which expedientes have been stuck in Processing for more than 15 days?"',
                      a: 'Queries all active cases, filters by stage=Processing and days_in_stage > 15, returns list with contact info'
                    },
                    {
                      q: '"How many imports did we complete last month vs. the month before?"',
                      a: 'Aggregates Finalized status transitions by month, returns comparative count with % change'
                    },
                    {
                      q: '"What documents are missing for the Garcia-Mendoza expediente?"',
                      a: 'Checks required document checklist vs. uploaded documents for that specific case, lists missing items'
                    },
                    {
                      q: '"What is our total outstanding balance from clients right now?"',
                      a: 'Sums all unpaid invoice amounts across all active clients, groups by client for follow-up priority'
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex items-start gap-3 mb-1">
                        <Bot className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-sm italic">{item.q}</span>
                      </div>
                      <div className="text-slate-500 text-xs ml-7">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* White-Label SaaS Model */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                White-Label SaaS Revenue Model
              </h2>

              <p className="text-slate-300 mb-6">
                The platform was architected from the start for white-label resale. The market for agencias aduanales specializing in US vehicle imports in Mexico represents hundreds of potential agency customers — all currently operating without dedicated software. The white-label model allows reselling to any agency with full branding customization.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 mb-1">$2,000</div>
                  <div className="text-slate-400 text-sm">One-time setup fee per agency</div>
                </div>
                <div className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">$150/mo</div>
                  <div className="text-slate-400 text-sm">Recurring SaaS per agency</div>
                </div>
                <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                  <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">10 agencies</div>
                  <div className="text-slate-400 text-sm">= $1,500/mo recurring revenue</div>
                </div>
              </div>

              <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                <h4 className="font-semibold text-white mb-3">What White-Label Includes</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Custom logo and color scheme</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Agency name on all PDF outputs</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Custom subdomain (agencia.hoymismodashboard.app)</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Email templates with agency branding</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> WhatsApp notification templates</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Isolated data (no cross-agency visibility)</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Onboarding and staff training included</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> Ongoing feature updates for all agencies</div>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Technology Stack
              </h2>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
                  <div><strong className="text-white">Frontend:</strong> Next.js 14 (App Router) + TypeScript</div>
                  <div><strong className="text-white">Styling:</strong> Tailwind CSS + Shadcn/UI components</div>
                  <div><strong className="text-white">Auth:</strong> Firebase Authentication (multi-tenant with agency isolation)</div>
                  <div><strong className="text-white">Database:</strong> Firestore (real-time expediente tracking)</div>
                  <div><strong className="text-white">Storage:</strong> Firebase Storage (document repository)</div>
                  <div><strong className="text-white">Hosting:</strong> Google Cloud / Firebase Hosting</div>
                  <div><strong className="text-white">AI:</strong> Mistral API + DeepSeek API + Gemini API</div>
                  <div><strong className="text-white">PDF:</strong> jsPDF (invoices, expediente summaries, reports)</div>
                  <div><strong className="text-white">Notifications:</strong> WhatsApp Business API + Firebase Cloud Messaging</div>
                  <div><strong className="text-white">Analytics:</strong> Custom dashboard on Firestore aggregations</div>
                </div>
              </div>
            </section>

            {/* Market Opportunity */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Market Opportunity
              </h2>

              <p className="text-slate-300 mb-6">
                The US-to-Mexico vehicle import market processes hundreds of thousands of vehicles annually through dozens of border crossings. There are an estimated 500–800 agencias aduanales specializing in vehicle imports across northern Mexico. Nearly all of them operate without purpose-built software. The white-label model creates a sustainable SaaS business targeting a market with virtually no existing competition.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">Target Customer Profile</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> Agencias aduanales in Monterrey, Laredo corridor, Tijuana, Nogales</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> 10–100 active import cases per month</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> 2–10 staff members who need role-based access</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> Currently using paper + Excel + WhatsApp</li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">Value Proposition to Agencies</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> No expensive software consultant or IT team required</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> Handles 2× the case volume without additional staff</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> Professional client portal differentiates them from competitors</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span> Full audit trail protects against client disputes</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Own a Customs Agency or Know One?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re an agency ready to digitize your operation or a reseller looking for a proven white-label SaaS product for the Mexican customs market — let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all">
                <ExternalLink className="w-5 h-5" />
                Request a Demo
              </Link>
              <Link href="/case-studies" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-white font-semibold rounded-xl hover:border-cyan-500/50 transition-all">
                View All Case Studies
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/voice-ai-hoymismo"
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Voice AI — Vehicle Import Agent
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Automated phone agent handling 500+ monthly calls for vehicle import queries at HoyMismo AutoTransport
                </p>
                <span className="text-purple-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/enterprise-logistics"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismo Paquetería — Logistics OS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Complete courier company operating system with CRM, billing, AI assistant, and Mapbox tracking
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
