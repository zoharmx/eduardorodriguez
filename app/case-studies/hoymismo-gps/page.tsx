import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, MapPin, Wifi, Server, Clock, Activity, Database, Cloud, Zap, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HoyMismoGPS V2 — Enterprise Fleet Management Platform | Case Study',
  description: 'Architectural transformation from Python/Redis to full Google Cloud Platform: 500+ assets, <1s GPS latency, 99.9% uptime enterprise fleet management.',
}

export default function HoyMismoGPSCaseStudy() {
  const metrics = [
    { icon: <MapPin className="w-6 h-6" />, value: '500+', label: 'Assets Monitored' },
    { icon: <Clock className="w-6 h-6" />, value: '<1s', label: 'GPS Update Latency' },
    { icon: <Activity className="w-6 h-6" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '$70-100', label: 'Monthly GCP Cost' },
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

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Enterprise Production — GCP Architecture
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Google Cloud Platform', 'FastAPI', 'Cloud Run', 'Firestore', 'BigQuery', 'Pub/Sub', 'React 18', 'Teltonika FMB920'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              HoyMismoGPS V2: Enterprise Fleet Management
            </h1>

            <p className="text-xl text-slate-300">
              A complete architectural overhaul — from a Python Asyncio prototype to a full Google Cloud Platform enterprise system capable of monitoring 500+ vehicles with sub-second GPS updates, executive-grade analytics, and 99.9% uptime SLA.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-cyan-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IV-poCcGtaU"
                title="HoyMismoGPS V2 Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Live demo — real-time tracking, route replay, and executive dashboard</p>
          </div>

          {/* Platform Screenshots */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Platform Interface</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-800/50">
                <img
                  src="/images/hoymismo/interfaz.png"
                  alt="HoyMismoGPS Executive Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Executive Dashboard</p>
                  <p className="text-xs text-slate-300">KPIs, alerts, fleet overview</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-800/50">
                <img
                  src="/images/hoymismo/rastreo.png"
                  alt="HoyMismoGPS Real-Time Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Real-Time Map</p>
                  <p className="text-xs text-slate-300">Animated vehicle markers</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-800/50">
                <img
                  src="/images/hoymismo/vehiculos.png"
                  alt="HoyMismoGPS Vehicle List"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Fleet Management</p>
                  <p className="text-xs text-slate-300">Status, driver scores, alerts</p>
                </div>
              </div>
            </div>
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

            {/* V1 vs V2 */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                The Architectural Transformation: V1 → V2
              </h2>
              <p className="text-slate-300 mb-6">
                V1 was built as a proof-of-concept: a Python Asyncio TCP server that decoded Teltonika binary packets, pushed coordinates to Redis, and rendered them on a Mapbox GL map. It worked — but it couldn&apos;t scale, had no analytics, no alerting pipeline, and required manual server management. V2 is a complete reimagination on Google Cloud Platform.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">V1 — Prototype Limitations</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Python Asyncio + single VPS (no auto-scaling)</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Redis for pub/sub (self-managed, no SLA)</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> PostgreSQL for history (no BigQuery analytics)</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Mapbox GL only (no traffic, no Street View)</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> No driver scoring, no automated reports</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Single-tenant, no white-label support</li>
                  </ul>
                </div>

                <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">V2 — Enterprise GCP Architecture</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Cloud Run (auto-scaling, zero-downtime deploys)</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Cloud Memorystore (managed Redis with 99.9% SLA)</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Firestore (real-time) + BigQuery (analytics/history)</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Google Maps Platform (live traffic, Street View)</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Driver scoring, smart alerts, automated PDF reports</li>
                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span> Multi-tenant architecture with role-based access</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Flow */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Data Pipeline: Device to Dashboard
              </h2>

              <p className="text-slate-300 mb-6">
                Every GPS ping from a Teltonika FMB920 or FMB140 device travels through a cloud-native event pipeline before appearing on the map in under one second. The architecture uses Pub/Sub as the backbone so that multiple consumers (real-time map, alert engine, analytics writer) can process the same event independently and at scale.
              </p>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-6">
                <h4 className="font-semibold text-cyan-400 mb-4">Full Data Flow</h4>
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`Teltonika FMB920/FMB140
   TCP Port 5000 (Codec 8 / Codec 8 Extended)
        |
        v
GPS Server — Cloud Run (auto-scaling)
   Decodes binary packet → validates IMEI → extracts:
   { lat, lng, speed, ignition, odometer, fuel, ... }
        |
        v
   Cloud Pub/Sub — Topic: "gps-events"
        |
        +──────────────────────────────────────────+
        |                     |                    |
        v                     v                    v
Cloud Function:        Cloud Function:       Cloud Function:
save-location          check-alerts          update-stats
   |                        |                    |
   +──> Firestore       +──> FCM Push        +──> BigQuery
   (real-time pos)     (speeding alert)     (daily analytics)
   +──> Memorystore     +──> Firestore       +──> Firestore
   (cache last pos)    (alert record)       (KPI counters)`}</pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <Cloud className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Cloud Run</div>
                  <div className="text-xs text-slate-400">GPS Server auto-scales 0→100 instances on traffic spikes</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Pub/Sub</div>
                  <div className="text-xs text-slate-400">Decouples GPS ingestion from alerting, storage, and analytics</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <Database className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">BigQuery</div>
                  <div className="text-xs text-slate-400">SQL analytics on 50M+ GPS points with sub-second queries</div>
                </div>
              </div>
            </section>

            {/* Platform Features */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Enterprise Platform Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Real-Time Tracking Map',
                    desc: 'Google Maps Platform with animated vehicle markers, live traffic overlay, and Street View integration. Vehicles update every 10–30 seconds depending on ignition state.',
                  },
                  {
                    icon: <Activity className="w-5 h-5" />,
                    title: 'Executive KPI Dashboard',
                    desc: 'At-a-glance view of fleet health: active/idle/offline vehicle counts, daily kilometers driven, open alerts, and driver score trends. Powered by Firestore real-time listeners.',
                  },
                  {
                    icon: <Server className="w-5 h-5" />,
                    title: 'Route Replay',
                    desc: 'Play back any vehicle\'s journey with animation controls (play, pause, 1×/2×/4× speed). Renders the exact path driven with color-coded speed segments from BigQuery history.',
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: 'Smart Geofences',
                    desc: 'Draw polygon, circle, or route-corridor geofences. Entry/exit events trigger immediate FCM push notifications and create Firestore alert records.',
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: 'Driver Scoring System',
                    desc: 'Automated scoring based on speeding events, harsh braking (accelerometer data), late-night driving, and geofence compliance. Leaderboard view for fleet managers.',
                  },
                  {
                    icon: <Wifi className="w-5 h-5" />,
                    title: 'Premium Reports & Automation',
                    desc: 'Trips, fuel consumption, driver performance in PDF/Excel/CSV. Automated daily, weekly, and monthly reports delivered via email — zero manual work for fleet operators.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
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

            {/* Full Tech Stack */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Full Technology Stack
              </h2>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
                  <div><strong className="text-white">Frontend:</strong> React 18 + Vite + Shadcn/UI + Tailwind CSS (dark mode default)</div>
                  <div><strong className="text-white">Maps:</strong> Google Maps Platform — Traffic API, Street View, Directions API</div>
                  <div><strong className="text-white">Backend API:</strong> FastAPI on Cloud Run (auto-scaling, 0 cold starts)</div>
                  <div><strong className="text-white">GPS Server:</strong> Cloud Run + TCP Codec — Teltonika FMB920 / FMB140</div>
                  <div><strong className="text-white">Messaging:</strong> Google Cloud Pub/Sub (GPS event bus)</div>
                  <div><strong className="text-white">Real-time DB:</strong> Firestore (live positions, alerts, KPIs)</div>
                  <div><strong className="text-white">Analytics DB:</strong> BigQuery (GPS history, trip reports, SQL analytics)</div>
                  <div><strong className="text-white">Cache:</strong> Cloud Memorystore — Managed Redis 6.x</div>
                  <div><strong className="text-white">Storage:</strong> Cloud Storage (PDF reports, CSV exports)</div>
                  <div><strong className="text-white">Push Notifications:</strong> Firebase Cloud Messaging (FCM)</div>
                  <div><strong className="text-white">Serverless:</strong> Cloud Functions (alert processing, stats aggregation)</div>
                  <div><strong className="text-white">Multi-tenant:</strong> Firestore security rules + custom RBAC per organization</div>
                </div>
              </div>
            </section>

            {/* Cost Analysis */}
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Enterprise-Grade at SMB Pricing
              </h2>

              <p className="text-slate-300 mb-6">
                One of the key design goals for V2 was cost efficiency without sacrificing reliability. By leveraging serverless Cloud Run (pay-per-request), managed Firestore (pay-per-read/write), and BigQuery&apos;s free tier for analytics queries under 1TB/month, the platform achieves enterprise-grade SLA at a fraction of traditional fleet management software costs.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$70-100</div>
                  <div className="text-slate-300 text-sm">GCP cost/month for 20 vehicles</div>
                </div>
                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-slate-300 text-sm">Uptime backed by Cloud Run SLA</div>
                </div>
                <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">&lt;1s</div>
                  <div className="text-slate-300 text-sm">GPS event-to-map latency</div>
                </div>
              </div>

              <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-xl">
                <p className="text-slate-300 text-sm">
                  <strong className="text-cyan-400">Comparison:</strong> Traditional fleet management platforms (Samsara, Verizon Connect) charge $25–50/vehicle/month. The V2 GCP architecture delivers comparable features at roughly $3.50–5/vehicle/month for a 20-vehicle fleet, with the cost-per-vehicle dropping significantly as the fleet grows.
                </p>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Enterprise GPS Fleet Management?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I can build a similar system for your fleet — from hardware integration (Teltonika, Concox, Queclink) to a fully branded dashboard with your company&apos;s branding and custom alert rules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all">
                <ExternalLink className="w-5 h-5" />
                Request a Free Consultation
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
                href="/case-studies/enterprise-logistics"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismo Paquetería — Logistics OS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Complete operating system for courier companies with CRM, billing, and AI assistant
                </p>
                <span className="text-cyan-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
