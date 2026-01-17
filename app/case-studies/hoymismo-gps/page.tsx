import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, MapPin, Wifi, Server, Clock, Activity } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HoyMismoGPS - IoT Infrastructure | Case Study',
  description: 'Sistema de rastreo de alta concurrencia con latencia sub-segundo para flotas masivas.',
}

export default function HoyMismoGPSCaseStudy() {
  const metrics = [
    { icon: <MapPin className="w-6 h-6" />, value: '500+', label: 'Assets Monitoreados' },
    { icon: <Clock className="w-6 h-6" />, value: '<1s', label: 'Latencia' },
    { icon: <Wifi className="w-6 h-6" />, value: 'TCP/IP', label: 'Protocolo Binario' },
    { icon: <Activity className="w-6 h-6" />, value: '99.9%', label: 'Uptime' },
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
              {['Python Asyncio', 'TCP/IP', 'Redis', 'Mapbox GL', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              HoyMismoGPS: IoT Infrastructure
            </h1>

            <p className="text-xl text-slate-300">
              Sistema de rastreo de alta concurrencia con latencia sub-segundo.
              Procesa protocolos binarios TCP/IP para monitoreo en tiempo real de flotas masivas.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-cyan-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IV-poCcGtaU"
                title="HoyMismoGPS Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Dashboard de rastreo en tiempo real con Mapbox GL</p>
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
                  Rastrear <strong className="text-white">500+ vehiculos simultaneamente</strong> con actualizaciones
                  cada 10 segundos requiere una arquitectura que maneje <strong className="text-white">miles de conexiones
                  TCP concurrentes</strong> y procese datos en tiempo real sin perder un solo paquete.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Dispositivos GPS envian protocolos binarios propietarios (no JSON/REST)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Conexiones TCP persistentes que deben mantenerse 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Latencia critica: operadores necesitan ver posicion actual, no de hace 5 minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Geocercas y alertas que deben dispararse en milisegundos</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Arquitectura de Alta Disponibilidad
              </h2>

              <p className="text-slate-300 mb-6">
                Disenada para <strong className="text-cyan-400">99.9% uptime</strong> con failover automatico
                y escalabilidad horizontal.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">TCP Server Asyncio</h3>
                  <p className="text-slate-300 text-sm">
                    Servidor TCP en Python con asyncio que maneja 1000+ conexiones
                    concurrentes en un solo proceso. Non-blocking I/O para maxima eficiencia.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Protocol Decoders</h3>
                  <p className="text-slate-300 text-sm">
                    Parsers binarios para GT06, TK103, Coban y otros protocolos GPS.
                    Extrae coordenadas, velocidad, combustible, estado de puertas.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Redis Pub/Sub</h3>
                  <p className="text-slate-300 text-sm">
                    Broker de mensajes para distribuir actualizaciones a todos los
                    clientes web conectados. Latencia &lt;10ms del dispositivo al mapa.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Mapbox GL Frontend</h3>
                  <p className="text-slate-300 text-sm">
                    Visualizacion de alta performance con WebGL. Renderiza miles de
                    marcadores con animaciones fluidas y geocercas interactivas.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <h4 className="font-semibold text-cyan-400 mb-3">Flujo de Datos</h4>
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`GPS Device (TCP Binary)
    |
    v
TCP Server (Python Asyncio)
    |
    v
Protocol Decoder (GT06/TK103)
    |
    +---> PostgreSQL (Historico)
    |
    +---> Redis Pub/Sub (Real-time)
              |
              v
         WebSocket Server
              |
              v
         Mapbox GL (Browser)`}</pre>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Capacidades del Sistema
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Rastreo en Tiempo Real',
                    desc: 'Posicion actualizada cada 10 segundos con historial de recorridos',
                    icon: <MapPin className="w-5 h-5" />
                  },
                  {
                    title: 'Geocercas Inteligentes',
                    desc: 'Alertas instantaneas cuando vehiculos entran/salen de zonas definidas',
                    icon: <Server className="w-5 h-5" />
                  },
                  {
                    title: 'Reportes de Flota',
                    desc: 'Kilometraje, tiempo de motor, excesos de velocidad, paradas',
                    icon: <Activity className="w-5 h-5" />
                  },
                  {
                    title: 'Comandos Remotos',
                    desc: 'Apagado de motor, bloqueo de puertas via comandos TCP al dispositivo',
                    icon: <Wifi className="w-5 h-5" />
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                      {item.icon}
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
                Metricas de Performance
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">&lt;100ms</div>
                  <div className="text-slate-300 text-sm">Latencia dispositivo a mapa</div>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
                  <div className="text-slate-300 text-sm">Conexiones TCP concurrentes</div>
                </div>

                <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">50M+</div>
                  <div className="text-slate-300 text-sm">Puntos GPS almacenados</div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Necesitas Rastreo GPS Enterprise?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Puedo implementar una solucion similar para tu flota,
              adaptada a tus dispositivos y necesidades especificas.
            </p>
            <Link href="/#contacto" className="btn-primary inline-flex justify-center items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Consulta Gratuita
            </Link>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Mas Proyectos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/enterprise-logistics"
                className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Enterprise Logistics OS
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Sistema operativo completo para logistica internacional
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
