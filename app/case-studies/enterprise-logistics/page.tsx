import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Package, Users, FileText, Bot, BarChart3, Map, Globe, Building2, Truck, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HoyMismo Paquetería — Complete Logistics Operating System | Case Study',
  description: 'All-in-one logistics OS for courier companies: CRM, billing, real-time Mapbox tracking, AI assistant, and client portal. Built on Next.js + Firebase.',
}

export default function EnterpriseLogisticsCaseStudy() {
  const metrics = [
    { icon: <Package className="w-6 h-6" />, value: '5', label: 'Integrated Components' },
    { icon: <Truck className="w-6 h-6" />, value: '7', label: 'Shipment Statuses' },
    { icon: <Bot className="w-6 h-6" />, value: '3', label: 'AI Models (Mistral, DeepSeek, Gemini)' },
    { icon: <Map className="w-6 h-6" />, value: 'Mapbox', label: 'Premium Real-Time Tracking' },
  ]

  const modules = [
    {
      icon: <Package className="w-5 h-5" />,
      title: 'Shipment Management',
      desc: '7 statuses (Pending → Delivered), auto-generated tracking numbers (HM-YYYY-XXXXXXX), ETA calculation, document attachments, and bulk operations.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Integrated CRM',
      desc: 'Individual and business client profiles with RFC tax records, complete shipment history, payment history, credit lines, and RFM segmentation.'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Billing & Invoicing',
      desc: 'Automatic invoice generation tied to shipment events. Multiple payment methods, IVA handling, discount rules, and PDF professional output.'
    },
    {
      icon: <Map className="w-5 h-5" />,
      title: 'Premium GPS Tracking',
      desc: 'Mapbox GL real-time maps with animated route history. Public tracking link (no login) and QR code sharing for customers.'
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: 'AI Assistant',
      desc: 'Multi-model chatbot (Mistral + DeepSeek + Gemini) answering natural language queries about shipments, revenue, clients, and delivery performance.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Reports & Analytics',
      desc: 'Daily/weekly/monthly reports: revenue trends, top clients, delivery performance, driver efficiency. Export as PDF, Excel, or CSV.'
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

          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live — hoymismodashboard.vercel.app
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Next.js + TypeScript', 'Firebase', 'Mapbox GL', 'Mistral AI', 'DeepSeek', 'Gemini', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              HoyMismo Paquetería: Complete Logistics Operating System
            </h1>

            <p className="text-xl text-slate-300">
              Small and mid-size courier companies don&apos;t need a stack of disconnected tools. They need one platform that does everything. HoyMismo Paquetería is exactly that — a full logistics operating system with CRM, billing, AI-powered tracking, and a multi-model AI assistant, giving SMBs the same operational capabilities as FedEx or DHL.
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mb-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Live Platform</h3>
                <p className="text-slate-300 text-sm">Explore the full admin dashboard with demo data</p>
              </div>
              <a
                href="https://hoymismodashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                Open Live Dashboard
              </a>
            </div>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-cyan-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/R2dU7YyOLII"
                title="HoyMismo Paquetería Dashboard Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Full platform walkthrough — shipment creation, tracking, CRM, and AI assistant</p>
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
                The Problem: Fragmented Tools for a Complex Operation
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  A typical mid-size paquetería in Mexico operates with a patchwork of tools: Excel for shipment tracking, WhatsApp for customer updates, manual invoicing in Word, and a basic phone number for package status inquiries. The result is data scattered across five systems, hours lost to manual work, and a customer experience that makes them look like a 1990s operation compared to national carriers.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Customer service reps spending 5+ minutes per call looking up shipment status across spreadsheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Manual invoicing taking 15–30 minutes per client, with frequent errors on tax calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>No real tracking for customers — &quot;Call us to find out where your package is&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Zero business intelligence — no way to know which clients drive revenue, which routes are most efficient</span>
                </li>
              </ul>
            </section>

            {/* 5 Components */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                5 Integrated Components, One Platform
              </h2>

              <p className="text-slate-300 mb-8">
                Rather than building a single-purpose tool, HoyMismo Paquetería was designed as a complete operating system with five tightly integrated components — each built for a different stakeholder in the logistics workflow.
              </p>

              <div className="grid md:grid-cols-1 gap-4 mb-8">
                {[
                  {
                    num: '01',
                    icon: <Globe className="w-5 h-5" />,
                    title: 'Public Website',
                    desc: 'Corporate site with quote calculator and public shipment tracking. Customers enter their tracking number (HM-YYYY-XXXXXXX) and get full status history — no account required.',
                    color: 'cyan',
                  },
                  {
                    num: '02',
                    icon: <Building2 className="w-5 h-5" />,
                    title: 'Admin Dashboard',
                    desc: 'Full control panel with CRM, shipment management, billing, analytics, and user roles. Role-based access: Admin sees everything, Manager sees all except settings, Driver sees only their route.',
                    color: 'cyan',
                  },
                  {
                    num: '03',
                    icon: <Users className="w-5 h-5" />,
                    title: 'Client Portal',
                    desc: 'Self-service portal for registered business clients. Track all their shipments, view invoices, download documents, and request pickups — without contacting support.',
                    color: 'cyan',
                  },
                  {
                    num: '04',
                    icon: <Bot className="w-5 h-5" />,
                    title: 'AI Assistant',
                    desc: 'Multi-model chatbot built on Mistral, DeepSeek, and Gemini APIs. Answers natural language queries like "How many deliveries happened in Monterrey last week?" or "Who are my top 5 clients by revenue?" with real database context.',
                    color: 'cyan',
                  },
                  {
                    num: '05',
                    icon: <Map className="w-5 h-5" />,
                    title: 'Premium Tracking',
                    desc: 'Real-time Mapbox GL maps with animated markers showing package location, route history, and delivery confirmation with photo. Shareable via QR code or direct link.',
                    color: 'cyan',
                  },
                ].map((comp, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="shrink-0 text-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-1">
                        {comp.icon}
                      </div>
                      <div className="text-xs text-cyan-400 font-mono font-bold">{comp.num}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg mb-1">{comp.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{comp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Modules */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Core Operational Modules
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
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

              {/* Shipment Status Flow */}
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <h4 className="font-semibold text-cyan-400 mb-4">7-Status Shipment Lifecycle</h4>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {[
                    { status: 'Pending', color: 'bg-slate-600' },
                    { status: '→', color: '' },
                    { status: 'In Transit', color: 'bg-blue-600' },
                    { status: '→', color: '' },
                    { status: 'In Customs', color: 'bg-yellow-600' },
                    { status: '→', color: '' },
                    { status: 'Distribution', color: 'bg-orange-600' },
                    { status: '→', color: '' },
                    { status: 'On Route', color: 'bg-cyan-600' },
                    { status: '→', color: '' },
                    { status: 'Delivered', color: 'bg-green-600' },
                    { status: '/', color: '' },
                    { status: 'Cancelled', color: 'bg-red-600' },
                  ].map((item, i) => (
                    item.color ? (
                      <span key={i} className={`px-2 py-1 ${item.color} text-white rounded text-xs font-semibold`}>
                        {item.status}
                      </span>
                    ) : (
                      <span key={i} className="text-slate-500 font-bold">{item.status}</span>
                    )
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-3">Each status transition auto-triggers: client notification, ETA recalculation, billing event (if applicable), and Firestore timestamp for full audit trail.</p>
              </div>
            </section>

            {/* AI Assistant Deep Dive */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Multi-Model AI Assistant
              </h2>

              <p className="text-slate-300 mb-6">
                The AI assistant is more than a chatbot — it&apos;s a business intelligence layer that connects directly to the live Firestore database and answers operational questions in natural language. The multi-model architecture routes queries to the best model based on complexity: DeepSeek for data analysis, Gemini for summaries, Mistral for operational guidance.
              </p>

              <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Sample AI Queries</h4>
                <div className="space-y-3">
                  {[
                    { q: '"How many shipments are currently in transit?"', a: 'Queries Firestore for status=IN_TRANSIT count, returns real-time number' },
                    { q: '"Which clients haven\'t shipped in 60 days?"', a: 'Runs temporal analysis on CRM data, returns list with last order date' },
                    { q: '"What\'s my revenue trend for Q1?"', a: 'Aggregates billing records by month, generates natural language summary' },
                    { q: '"Where is the package for Empresa Constructora SA?"', a: 'Looks up latest shipment, returns status with last GPS coordinates' },
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

            {/* ROI */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Democratizing Enterprise Logistics
              </h2>

              <p className="text-slate-300 mb-6">
                Enterprise logistics software (SAP, Oracle TMS, WMS systems) costs $50K–500K to implement and requires dedicated IT teams. HoyMismo Paquetería delivers the same core capabilities at a fraction of the cost — purpose-built for the Mexican SMB logistics market.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Operational Savings
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Shipment creation: <strong className="text-green-400">10 min → 2 min</strong></li>
                    <li>Invoice generation: <strong className="text-green-400">15 min → automatic</strong></li>
                    <li>Customer status queries: <strong className="text-green-400">5 min → 30 seconds</strong></li>
                    <li>Estimated total: <strong className="text-green-400">~5 hours/day recovered</strong></li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    Business Impact
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Processing capacity: <strong className="text-blue-400">2.5× without adding staff</strong></li>
                    <li>Data entry errors: <strong className="text-blue-400">-85%</strong> with auto-validation</li>
                    <li>Customer retention: <strong className="text-blue-400">+30%</strong> with real tracking</li>
                    <li>First-year ROI: <strong className="text-blue-400">940%</strong> estimated</li>
                  </ul>
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
                  <div><strong className="text-white">Frontend:</strong> Next.js + TypeScript (App Router)</div>
                  <div><strong className="text-white">Styling:</strong> Tailwind CSS + Framer Motion</div>
                  <div><strong className="text-white">Database:</strong> Firebase Firestore (real-time)</div>
                  <div><strong className="text-white">Auth:</strong> Firebase Authentication + RBAC</div>
                  <div><strong className="text-white">Storage:</strong> Firebase Storage (documents, photos)</div>
                  <div><strong className="text-white">Hosting:</strong> Vercel (frontend) + Firebase Hosting (public site)</div>
                  <div><strong className="text-white">Maps:</strong> Mapbox GL JS with custom markers</div>
                  <div><strong className="text-white">Charts:</strong> Recharts (analytics dashboard)</div>
                  <div><strong className="text-white">AI:</strong> Mistral API + DeepSeek API + Gemini API</div>
                  <div><strong className="text-white">PDF:</strong> jsPDF + html2canvas (invoices, reports)</div>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Digitize Your Logistics Operation
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I can build a similar system tailored to your specific operation — from MVP in 4 weeks to a complete enterprise platform. White-label ready for resale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://hoymismodashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Dashboard
              </a>
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-white font-semibold rounded-xl hover:border-cyan-500/50 transition-all">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/hoymismo-gps"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismoGPS V2 — Enterprise Fleet Tracking
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Full GCP architecture with Teltonika GPS, BigQuery analytics, and &lt;1s latency
                </p>
                <span className="text-cyan-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
                  Complete digital OS for vehicle import agencies, white-label SaaS
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
