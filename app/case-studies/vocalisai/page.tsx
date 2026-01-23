import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Phone, CreditCard, Mic, Zap, DollarSign, Globe, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VocalisAI - Voice Agent with Payments | Case Study',
  description: 'Agente telefonico autonomo capaz de cerrar ventas con integracion Stripe Push-to-Link.',
}

export default function VocalisAICaseStudy() {
  const metrics = [
    { icon: <Mic className="w-6 h-6" />, value: 'Voice-to-Pay', label: 'Flujo Completo' },
    { icon: <CreditCard className="w-6 h-6" />, value: 'Push-to-Link', label: 'Stripe Integration' },
    { icon: <Zap className="w-6 h-6" />, value: '<3s', label: 'Latencia de Pago' },
    { icon: <DollarSign className="w-6 h-6" />, value: 'Autonomo', label: 'Cierre de Ventas' },
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

          {/* Live Demo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Demo en Vivo Disponible
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['ElevenLabs', 'Twilio', 'Stripe API', 'FastAPI', 'Python'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              VocalisAI: Voice Agent with Payments
            </h1>

            <p className="text-xl text-slate-300">
              Agente telefonico autonomo capaz de cerrar ventas. Integra ElevenLabs para conversacion
              natural y Stripe para generar enlaces de pago "Push-to-Link" en tiempo real durante llamadas.
            </p>
          </div>

          {/* Live Demo CTA - Dual Region */}
          <div className="mb-12 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Talk to Sofia Live</h3>
              <p className="text-slate-300">
                Call now and experience a real-time conversation with our AI voice agent
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Mexico Version */}
              <div className="p-6 bg-slate-800/50 border border-purple-500/30 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🇲🇽</span>
                  <span className="text-lg font-semibold text-white">Mexico (Spanish)</span>
                </div>
                <a
                  href="tel:+528141661014"
                  className="btn-primary inline-flex items-center gap-3 text-lg px-6 py-4 w-full justify-center"
                >
                  <Phone className="w-6 h-6" />
                  +52 814 166 1014
                </a>
                <p className="text-slate-400 text-sm mt-3">Sofia speaks fluent Latin American Spanish</p>
              </div>

              {/* USA Version */}
              <div className="p-6 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-lg font-semibold text-white">United States (English)</span>
                </div>
                <a
                  href="tel:+18884306777"
                  className="inline-flex items-center gap-3 text-lg px-6 py-4 w-full justify-center bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <Globe className="w-6 h-6" />
                  +1 888 430 6777
                </a>
                <p className="text-slate-400 text-sm mt-3">Toll-Free - Sofia in American English</p>
              </div>
            </div>
          </div>

          {/* Visual References Gallery */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Platform Screenshots</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-purple-500/20 bg-slate-800/50">
                <img
                  src="/images/vocalis/vocalis-1.png"
                  alt="VocalisAI Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Agent Configuration</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-purple-500/20 bg-slate-800/50">
                <img
                  src="/images/vocalis/vocalis-2.png"
                  alt="VocalisAI Call Flow"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Call Flow Designer</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-purple-500/20 bg-slate-800/50">
                <img
                  src="/images/vocalis/vocalis-3.png"
                  alt="VocalisAI Analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
                  <p className="text-sm text-white font-semibold">Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/P5h2ZCzYw3c"
                title="VocalisAI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Demo de Sofia procesando un pago via llamada telefonica</p>
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
                  Los voice agents actuales pueden <strong className="text-white">conversar</strong> pero no pueden
                  <strong className="text-white"> cerrar ventas</strong>. El momento critico de pago requiere
                  intervencion humana, perdiendo el momentum de la llamada.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Voice agents que solo cualifican pero no cierran</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Transferencia a humano para procesar pagos (perdida de conversion)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Friccion entre "quiero comprar" y "pago completado"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sin integracion nativa de pasarelas de pago en sistemas de voz</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                La Solucion: Sofia AI
              </h2>

              <p className="text-slate-300 mb-6">
                <strong className="text-purple-400">Sofia</strong> es un agente de voz que puede llevar
                una venta desde el primer "hola" hasta el pago completado, sin intervencion humana.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Conversacion Natural</h3>
                  <p className="text-slate-300 text-sm">
                    ElevenLabs proporciona voz hiper-realista con emociones,
                    pausas naturales y entonacion contextual en espanol.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Push-to-Link Payments</h3>
                  <p className="text-slate-300 text-sm">
                    Genera enlaces de pago Stripe en tiempo real y los envia
                    por SMS durante la llamada. El cliente paga sin colgar.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Confirmacion en Vivo</h3>
                  <p className="text-slate-300 text-sm">
                    Webhooks de Stripe notifican al agente cuando el pago se completa.
                    Sofia confirma la compra en la misma llamada.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Manejo de Objeciones</h3>
                  <p className="text-slate-300 text-sm">
                    Entrenada para manejar objeciones comunes: precio, tiempo,
                    necesidad de consultar. Ofrece alternativas y cierra.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Stack Tecnico</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <strong className="text-white">Voice AI:</strong> ElevenLabs Conversational AI
                  </div>
                  <div>
                    <strong className="text-white">Telefonia:</strong> Twilio Programmable Voice
                  </div>
                  <div>
                    <strong className="text-white">Pagos:</strong> Stripe Payment Links + Webhooks
                  </div>
                  <div>
                    <strong className="text-white">Backend:</strong> FastAPI + Python Asyncio
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Flujo de Venta Completo
              </h2>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Llamada Entrante', desc: 'Cliente llama interesado en un producto/servicio' },
                  { step: '2', title: 'Cualificacion', desc: 'Sofia identifica necesidades y presenta opciones' },
                  { step: '3', title: 'Propuesta', desc: 'Presenta precio y beneficios, maneja objeciones' },
                  { step: '4', title: 'Push-to-Link', desc: 'Genera link Stripe y envia SMS sin colgar' },
                  { step: '5', title: 'Pago', desc: 'Cliente abre link y paga desde su telefono' },
                  { step: '6', title: 'Confirmacion', desc: 'Sofia recibe webhook y confirma la compra en vivo' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-slate-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Resultados Esperados
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Beneficios</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-green-400">24/7</strong> capacidad de cerrar ventas</li>
                    <li><strong className="text-green-400">0</strong> intervencion humana requerida</li>
                    <li><strong className="text-green-400">&lt;3s</strong> de "quiero comprar" a link de pago</li>
                    <li><strong className="text-green-400">100%</strong> trazabilidad de conversiones</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Casos de Uso</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Venta de cursos y capacitaciones</li>
                    <li>Reservaciones con deposito</li>
                    <li>Suscripciones y membresías</li>
                    <li>Productos de ticket medio ($50-$500)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Experimenta Sofia en Vivo
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Llama ahora y vive la experiencia de comprar por telefono con IA.
              Sin compromisos, solo curiosidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+528141661014"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar: +52 814 166 1014
              </a>
              <Link href="/#contacto" className="btn-secondary inline-flex justify-center items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Implementar en tu Negocio
              </Link>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Mas Proyectos</h3>
            <div className="grid md:grid-cols-2 gap-6">
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

              <Link
                href="/case-studies/signaflow"
                className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  SignaFlow - Legal Tech SaaS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Plataforma de firma digital con IA
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
