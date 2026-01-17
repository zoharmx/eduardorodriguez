import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, FileSignature, Shield, Sparkles, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SignaFlow - Legal Tech SaaS | Case Study',
  description: 'Plataforma de firma digital con validez legal, generacion de contratos con IA y audit trail SHA-256.',
}

export default function SignaFlowCaseStudy() {
  const metrics = [
    { icon: <FileSignature className="w-6 h-6" />, value: '30s', label: 'Contrato con IA' },
    { icon: <Shield className="w-6 h-6" />, value: 'SHA-256', label: 'Audit Trail' },
    { icon: <Clock className="w-6 h-6" />, value: '98%', label: 'Ahorro de Tiempo' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '100%', label: 'Validez Legal' },
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

          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            En Produccion
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['React 19', 'Gemini Pro', 'Firebase Auth', 'Canvas API', 'TypeScript'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              SignaFlow: Legal Tech SaaS
            </h1>

            <p className="text-xl text-slate-300">
              Plataforma de firma digital con validez legal. Utiliza IA (Gemini) para redactar
              contratos y Canvas API para firmas biometricas con sello de auditoria criptografico.
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Plataforma en Produccion</h3>
                <p className="text-slate-300 text-sm">Prueba SignaFlow con una cuenta gratuita</p>
              </div>
              <a
                href="https://contratossignaflow.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                Visitar SignaFlow
              </a>
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
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                El Problema
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  Crear y firmar contratos tradicionalmente toma <strong className="text-white">dias o semanas</strong>.
                  Esperar firmas fisicas, escanear documentos, y la falta de trazabilidad generan
                  friccion y riesgos legales.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>2+ horas para crear un contrato personalizado manualmente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Dias esperando firmas fisicas de clientes remotos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sin prueba de cuando y quien firmo (riesgo de repudio)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Documentos fisicos vulnerables a perdida y falsificacion</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                La Solucion SignaFlow
              </h2>

              <p className="text-slate-300 mb-6">
                Plataforma completa que reduce el ciclo de <strong className="text-purple-400">creacion-firma-archivo</strong>
                de dias a minutos, con validez legal garantizada.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Generacion con IA
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Describe tu contrato en lenguaje natural y Gemini Pro genera
                    un documento profesional con clausulas estandar en 30 segundos.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileSignature className="w-5 h-5 text-purple-400" />
                    Firma Digital Biometrica
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Canvas interactivo para firma a mano alzada o firma tipografica.
                    Funciona en cualquier dispositivo, tactil o con mouse.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    Audit Trail Inmutable
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Cada accion queda registrada: timestamp, IP, user agent, hash SHA-256.
                    Imposible negar la firma (no repudio legal).
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    PDF Profesional
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Genera PDF con logo de empresa, firma visual, y sello de auditoria
                    con todos los metadatos para referencia legal.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Stack Tecnologico</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <strong className="text-white">Frontend:</strong> React 19 + TypeScript + Vite 6
                  </div>
                  <div>
                    <strong className="text-white">IA:</strong> Google Gemini 2.0 Flash
                  </div>
                  <div>
                    <strong className="text-white">Backend:</strong> Firebase (Auth, Firestore, Storage)
                  </div>
                  <div>
                    <strong className="text-white">PDF:</strong> jsPDF + html2canvas
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ciclo de Vida del Contrato
              </h2>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Crear', desc: 'IA genera contrato desde descripcion o sube tu plantilla', status: 'DRAFT' },
                  { step: '2', title: 'Revisar', desc: 'Edita, ajusta clausulas, agrega metadatos del proyecto', status: 'DRAFT' },
                  { step: '3', title: 'Enviar', desc: 'Cliente recibe link unico por email para revisar y firmar', status: 'SENT' },
                  { step: '4', title: 'Ver', desc: 'Se detecta automaticamente cuando el cliente abre el documento', status: 'VIEWED' },
                  { step: '5', title: 'Firmar', desc: 'Cliente dibuja firma en canvas, se capturan todos los metadatos', status: 'SIGNED' },
                  { step: '6', title: 'Descargar', desc: 'PDF profesional con firma y sello de auditoria listo', status: 'COMPLETE' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">{item.status}</span>
                      </div>
                      <div className="text-slate-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Impacto Medible
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Ahorro de Tiempo</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Creacion de contrato: <strong className="text-green-400">2h a 30s</strong> (98% reduccion)</li>
                    <li>Ciclo de firma: <strong className="text-green-400">5-7 dias a minutos</strong></li>
                    <li>40+ horas/semana ahorradas en consultorias</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Seguridad Legal</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-blue-400">100%</strong> trazabilidad con timestamps</li>
                    <li>No repudio garantizado (IP + fingerprint)</li>
                    <li>Cumplimiento de estandares de firma electronica</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prueba SignaFlow Gratis
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Crea tu primer contrato con IA y envíalo a firmar en menos de 5 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://contratossignaflow.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Ir a SignaFlow
              </a>
              <Link href="/#contacto" className="btn-secondary inline-flex justify-center items-center gap-2">
                Solicitar Demo Personalizada
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Mas Proyectos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/ethica-ai"
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Ethica.AI Framework
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Arquitectura Multi-LLM para decisiones corporativas
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver caso de estudio <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/tikun-olam"
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Tikun Olam - Observable Ethical AI
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Pipeline de IA etica con observabilidad en Datadog
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
