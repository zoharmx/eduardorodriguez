import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Package, Users, FileText, Bot, BarChart3, Map } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Enterprise Logistics OS - HoyMismo Paqueteria | Case Study',
  description: 'Sistema operativo completo para logistica internacional. CRM, facturacion, tracking y asistente de IA.',
}

export default function EnterpriseLogisticsCaseStudy() {
  const metrics = [
    { icon: <Package className="w-6 h-6" />, value: 'All-in-One', label: 'Sistema Completo' },
    { icon: <Users className="w-6 h-6" />, value: 'CRM', label: 'Integrado' },
    { icon: <Bot className="w-6 h-6" />, value: 'AI', label: 'Asistente' },
    { icon: <Map className="w-6 h-6" />, value: 'Mapbox', label: 'Tracking Premium' },
  ]

  const modules = [
    { icon: <Package className="w-5 h-5" />, title: 'Gestion de Envios', desc: 'CRUD completo con 7 estados, historial y documentos automaticos' },
    { icon: <Users className="w-5 h-5" />, title: 'CRM Nativo', desc: 'Clientes individuales y empresas, historial, segmentacion RFM' },
    { icon: <FileText className="w-5 h-5" />, title: 'Facturacion', desc: 'Generacion automatica, IVA, descuentos, PDF profesional' },
    { icon: <Map className="w-5 h-5" />, title: 'Rastreo Premium', desc: 'Mapbox GL con rutas animadas, 50+ ciudades con GPS' },
    { icon: <Bot className="w-5 h-5" />, title: 'Asistente IA', desc: 'Consultas en lenguaje natural, analytics, ayuda contextual' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Reportes', desc: 'Ventas, envios, clientes, financiero. Export PDF/Excel/CSV' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Next.js 14', 'Firebase', 'Tailwind', 'Recharts', 'Mapbox GL', 'DeepSeek'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Enterprise Logistics OS
            </h1>

            <p className="text-xl text-slate-300">
              Sistema operativo completo para HoyMismo Paqueteria. Integra CRM, facturacion,
              tracking premium con Mapbox y asistente de IA en un dashboard unificado.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-cyan-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/R2dU7YyOLII"
                title="HoyMismo Dashboard Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Tour completo del dashboard administrativo</p>
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
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                El Desafio
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  Las paqueterias pequenas y medianas operan con <strong className="text-white">herramientas fragmentadas</strong>:
                  Excel para envios, WhatsApp para clientes, facturas manuales, y sin tracking real.
                  Competir con FedEx/UPS parece imposible.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Informacion dispersa en multiples sistemas desconectados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Tracking basico: "llame para saber donde esta su paquete"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Facturacion manual que toma horas y genera errores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sin visibilidad de metricas clave del negocio</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Solucion: Todo en Un Solo Lugar
              </h2>

              <p className="text-slate-300 mb-6">
                <strong className="text-cyan-400">HoyMismo Dashboard</strong> es un sistema operativo completo
                que da a paqueterias PYME las mismas capacidades que las grandes corporaciones.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {modules.map((mod, i) => (
                  <div key={i} className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                      {mod.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{mod.title}</div>
                      <div className="text-slate-400 text-sm">{mod.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Rastreo de Clase Mundial
              </h2>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-6">
                <p className="text-slate-300">
                  El sistema de tracking rivaliza con FedEx/UPS: <strong className="text-white">mapa interactivo Mapbox GL</strong>
                  con rutas animadas, linea de tiempo visual, historial completo, y un
                  <strong className="text-white"> boton "Explicar con IA"</strong> que describe el estado en lenguaje natural.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                  <div className="text-slate-400 text-sm">Ciudades con GPS</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">QR</div>
                  <div className="text-slate-400 text-sm">Compartir por codigo</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">Acceso sin login</div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Asistente de IA Integrado
              </h2>

              <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                <p className="text-slate-300 mb-4">
                  El chatbot entiende consultas en lenguaje natural y accede a toda la informacion del sistema:
                </p>
                <div className="space-y-3">
                  {[
                    '"Cuantos envios tengo hoy?"',
                    '"Quienes son mis top 5 clientes?"',
                    '"Cuanto he facturado este mes?"',
                    '"Donde esta el paquete de Juan Perez?"',
                  ].map((query, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <Bot className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300 text-sm italic">{query}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  Powered by DeepSeek + Mistral AI
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                ROI Calculado
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Ahorros</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Creacion envio: <strong className="text-green-400">10min a 2min</strong></li>
                    <li>Facturacion: <strong className="text-green-400">15min a automatico</strong></li>
                    <li>Consultas cliente: <strong className="text-green-400">5min a 30s</strong></li>
                    <li>Total: <strong className="text-green-400">~5 horas/dia</strong></li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Impacto</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Capacidad: <strong className="text-blue-400">2.5x</strong> sin mas personal</li>
                    <li>Errores: <strong className="text-blue-400">-85%</strong> con validacion</li>
                    <li>Retencion cliente: <strong className="text-blue-400">+30%</strong> con tracking</li>
                    <li>ROI: <strong className="text-blue-400">940%</strong> primer ano</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Stack Tecnologico
              </h2>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <strong className="text-white">Frontend:</strong> Next.js 14 (App Router) + TypeScript
                  </div>
                  <div>
                    <strong className="text-white">Styling:</strong> Tailwind CSS + Framer Motion
                  </div>
                  <div>
                    <strong className="text-white">Backend:</strong> Firebase (Firestore, Auth, Storage)
                  </div>
                  <div>
                    <strong className="text-white">Mapas:</strong> Mapbox GL JS
                  </div>
                  <div>
                    <strong className="text-white">Charts:</strong> Recharts
                  </div>
                  <div>
                    <strong className="text-white">IA:</strong> DeepSeek + Mistral API
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Digitaliza tu Paqueteria
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Puedo implementar un sistema similar adaptado a tu operacion.
              Desde MVP en 4 semanas hasta solucion enterprise completa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="btn-primary inline-flex justify-center items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Solicitar Cotizacion
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Mas Proyectos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/hoymismo-gps"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  HoyMismoGPS - IoT Infrastructure
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Sistema de rastreo de alta concurrencia
                </p>
                <span className="text-cyan-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver caso de estudio <ArrowLeft className="w-4 h-4 rotate-180" />
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
                  Agente telefonico autonomo con Stripe
                </p>
                <span className="text-purple-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver caso de estudio <ArrowLeft className="w-4 h-4 rotate-180" />
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
