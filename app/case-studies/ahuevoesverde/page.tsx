import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Zap, ShoppingCart, Bell, BarChart3, Clock, TrendingUp, Smartphone, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'A Huevo Es Verde — Food Delivery E-Commerce PWA | Case Study',
  description: 'Plataforma digital de pedidos y entregas de desayunos en Nogales, Sonora. PWA con pagos Stripe + Google Pay, Kitchen Display System y automatización al 80%.',
}

export default function AhuevoEsVerdeCaseStudy() {
  const metrics = [
    { icon: <Clock className="w-6 h-6" />, value: '<20 min', label: 'Entrega a zonas de aduana' },
    { icon: <Zap className="w-6 h-6" />, value: '80%', label: 'Operaciones automatizadas' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '95.5%', label: 'Reducción en costos operativos' },
    { icon: <BarChart3 className="w-6 h-6" />, value: '2,228%', label: 'ROI proyectado' },
  ]

  const cloudFunctions = [
    { name: 'onNewOrder', trigger: 'Database Write', desc: 'Notifica cocina + confirma cliente vía WhatsApp', sla: '<2s' },
    { name: 'onOrderStatusChange', trigger: 'Database Update', desc: 'Envía actualización de estado al cliente', sla: '<1s' },
    { name: 'createPaymentIntent', trigger: 'HTTP Callable', desc: 'Genera PaymentIntent de Stripe para checkout', sla: '<500ms' },
    { name: 'processGooglePay', trigger: 'HTTP Callable', desc: 'Procesa pagos de Google Pay', sla: '<1s' },
    { name: 'sendInvoice', trigger: 'Database Write', desc: 'Genera factura Stripe al completar entrega', sla: '<3s' },
    { name: 'dailySalesReport', trigger: 'Scheduled 11PM', desc: 'Reporte WhatsApp con ventas del día', sla: 'N/A' },
    { name: 'cleanupOldOrders', trigger: 'Scheduled Dom 2AM', desc: 'Archiva pedidos >30 días automáticamente', sla: 'N/A' },
  ]

  const orderStates = [
    { state: 'pending', label: 'Pedido recibido', desc: 'Notificación instantánea a cocina', color: 'text-yellow-400' },
    { state: 'preparing', label: 'En preparación', desc: 'Timer automático de 15 minutos', color: 'text-blue-400' },
    { state: 'delivering', label: 'En camino', desc: 'Notificación WhatsApp al cliente', color: 'text-primary-400' },
    { state: 'delivered', label: 'Entregado', desc: 'Factura Stripe enviada automáticamente', color: 'text-emerald-400' },
  ]

  const costComparison = [
    { concept: 'Personal de recepción', traditional: '$800/mes', digital: '$0', saving: '100%' },
    { concept: 'Software POS', traditional: '$50-100/mes', digital: '$0 (Firebase free)', saving: '100%' },
    { concept: 'Líneas telefónicas', traditional: '$30/mes', digital: '$0 (WhatsApp)', saving: '100%' },
    { concept: 'Impresión de menús', traditional: '$50/mes', digital: '$0 (digital)', saving: '100%' },
    { concept: 'Notificaciones SMS', traditional: '$100/mes', digital: '$5/mes (Twilio)', saving: '95%' },
    { concept: 'Errores de pedidos', traditional: '~$468/mes', digital: '~$62/mes', saving: '87%' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Back */}
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Live · ahuevoesverde.web.app
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Firebase', 'Stripe', 'Google Pay', 'Twilio', 'PWA', 'Tailwind CSS', 'Node.js 20'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              A Huevo Es Verde
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Plataforma cloud-native de pedidos y entregas de desayunos para el mercado fronterizo de{' '}
              <span className="text-amber-400 font-semibold">Nogales, Sonora</span>. PWA instalable, pagos duales, Kitchen Display System y automatización del 80% de operaciones mediante 7 Cloud Functions.
            </p>
            <p className="text-slate-400 mb-8">
              Diseñada para el nicho más exigente: trabajadores de aduana que necesitan desayuno en{' '}
              <span className="text-white font-semibold">menos de 20 minutos</span> en zonas de acceso restringido.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://ahuevoesverde.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Demo en Vivo
              </a>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((m, i) => (
              <div key={i} className="p-5 bg-slate-800/50 border border-amber-500/20 rounded-xl text-center">
                <div className="text-amber-400 flex justify-center mb-2">{m.icon}</div>
                <div className="text-2xl font-bold text-amber-400 font-display">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">El Desafío</h2>
            <div className="p-6 bg-slate-800/50 border border-amber-500/20 rounded-xl">
              <p className="text-slate-300 leading-relaxed mb-4">
                Los trabajadores de las aduanas en Nogales, Sonora enfrentan un problema diario: necesitan desayunar en sus turnos pero las zonas aduanales son de acceso restringido y los restaurantes tradicionales no tienen presencia digital. Los pedidos se hacían por teléfono, con errores frecuentes, sin seguimiento y sin pago digital.
              </p>
              <p className="text-slate-300 leading-relaxed">
                La competencia local usaba solo WhatsApp y llamadas telefónicas. <span className="text-amber-400 font-semibold">A Huevo Es Verde</span> se convirtió en la única plataforma digital especializada en desayunos con entrega a zonas de aduana en menos de 20 minutos.
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Arquitectura Cloud-Native</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Frontend', value: 'HTML5 + Tailwind CSS + Vanilla JS (zero dependencies)', icon: '🌐' },
                { label: 'Backend', value: 'Firebase Cloud Functions (Node.js 20) — Serverless', icon: '⚡' },
                { label: 'Base de Datos', value: 'Firebase Realtime Database — WebSocket <200ms latency', icon: '🗄️' },
                { label: 'Pagos', value: 'Stripe API v3 + Google Pay — PCI-DSS Level 1', icon: '💳' },
                { label: 'Notificaciones', value: 'Twilio WhatsApp Business + SMS fallback', icon: '📲' },
                { label: 'Hosting', value: 'Firebase Hosting con CDN global — 99.95% SLA', icon: '🚀' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-amber-400 font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-slate-300 text-sm">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { metric: '< 1.5s', label: 'Carga inicial' },
                { metric: '< 100ms', label: 'Añadir al carrito' },
                { metric: '< 200ms', label: 'Sync en tiempo real' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl text-center">
                  <div className="text-xl font-bold text-amber-400 font-display">{item.metric}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PWA */}
          <div className="mb-16 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <Smartphone className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Progressive Web App (PWA)</h2>
                <p className="text-slate-300">Instalable desde el navegador sin pasar por App Store ni Play Store. Experiencia nativa en iOS y Android.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Instalable', desc: 'Icono en home screen como app nativa' },
                { label: 'Offline-ready', desc: 'Página offline.html y caché de assets' },
                { label: 'Bilingüe', desc: 'ES/EN para trabajadores fronterizos' },
                { label: 'Costo $0', desc: 'vs. $15K-$30K de app nativa (React Native/Flutter)' },
                { label: 'Sin stores', desc: 'Disponible inmediatamente, sin revisión de 2 semanas' },
                { label: '3x más instalaciones', desc: 'Sin fricción de descargar 50MB' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-slate-800/50 rounded-lg">
                  <div className="text-amber-400 font-semibold text-sm mb-1">✅ {item.label}</div>
                  <div className="text-slate-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Flow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Seguimiento de Pedidos en Tiempo Real</h2>
            <div className="flex flex-col md:flex-row gap-4">
              {orderStates.map((s, i) => (
                <div key={i} className="flex-1 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl relative">
                  {i < orderStates.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-slate-600 text-lg">→</div>
                  )}
                  <div className={`text-xs font-mono font-bold mb-2 ${s.color}`}>{s.state}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-slate-400 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Display System */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Kitchen Display System</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-300 mb-4">Panel de cocina en tiempo real con alertas sonoras al recibir pedidos, timers automáticos y acceso directo al WhatsApp del cliente.</p>
                <div className="space-y-3">
                  {[
                    { icon: '🔔', label: 'Alertas sonoras', desc: 'Notificación de audio en cada pedido nuevo' },
                    { icon: '⏱️', label: 'Timer automático', desc: 'Cuenta regresiva desde aceptación hasta entrega' },
                    { icon: '📱', label: 'Un clic WhatsApp', desc: 'Contactar al cliente directamente' },
                    { icon: '📊', label: 'Estadísticas del día', desc: 'Ventas totales, ticket promedio, pedidos por hora' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.label}</div>
                        <div className="text-slate-400 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-3 text-xs">
                  <span>📊 Kitchen Dashboard</span>
                  <span className="text-yellow-400">🔔 Nuevos: 3</span>
                </div>
                <div className="text-slate-300 mb-3">Pedidos hoy: 24 &nbsp;|&nbsp; Total: $312 &nbsp;|&nbsp; Prom: $13</div>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-2">
                  <div className="text-yellow-400 font-bold mb-1">🆕 NUEVO — Pedido #1234</div>
                  <div className="text-slate-300">👤 Juan Pérez</div>
                  <div className="text-slate-300">📦 2x Ahuevo Sonora, 1x Café de Olla</div>
                  <div className="text-emerald-400">💰 $30.00 — Pagado (Stripe)</div>
                  <div className="text-slate-400">📍 Aduana Mariposa — Garita 3</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-emerald-500 text-white rounded text-xs">ACEPTAR</span>
                    <span className="px-2 py-0.5 bg-red-500/30 text-red-400 rounded text-xs border border-red-500/30">RECHAZAR</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-blue-400 font-bold mb-1">🍳 EN PREP — #1233 (12:34 restantes)</div>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30">MARCAR LISTO</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7 Cloud Functions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">7 Cloud Functions — Automatización Total</h2>
            <p className="text-slate-400 mb-6">Cero intervención humana en 7 procesos críticos. Ahorro estimado: 15 horas/semana (~$600/mes en labor).</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 font-normal pb-3 pr-4">Función</th>
                    <th className="text-left text-slate-400 font-normal pb-3 pr-4">Trigger</th>
                    <th className="text-left text-slate-400 font-normal pb-3 pr-4 hidden md:table-cell">Descripción</th>
                    <th className="text-left text-amber-400 font-normal pb-3">SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {cloudFunctions.map((fn, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-mono text-amber-400 text-xs">{fn.name}</td>
                      <td className="py-3 pr-4 text-slate-400 text-xs">{fn.trigger}</td>
                      <td className="py-3 pr-4 text-slate-300 text-xs hidden md:table-cell">{fn.desc}</td>
                      <td className="py-3 text-emerald-400 text-xs font-mono">{fn.sla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dual Payments */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Sistema de Pagos Dual</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 border border-emerald-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Stripe + Google Pay</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✅ Visa, Mastercard, Amex, Google Pay</li>
                  <li>✅ PCI-DSS Level 1 (máxima seguridad)</li>
                  <li>✅ 3D Secure para pagos &gt;$50 USD</li>
                  <li>✅ Factura automática al entregar</li>
                  <li>✅ Webhooks para confirmación asíncrona</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-800/50 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-bold text-white">WhatsApp + Efectivo</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✅ Link con pedido pre-formateado</li>
                  <li>✅ Pago efectivo contra entrega</li>
                  <li>✅ +40% conversión en adultos mayores</li>
                  <li>✅ Sin necesidad de tarjeta bancaria</li>
                  <li>✅ Costo: $0.005 por mensaje (WhatsApp)</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4 text-center">
              El canal dual incrementa la conversión en <span className="text-amber-400 font-semibold">+65%</span> vs. solo Stripe.
            </p>
          </div>

          {/* Cost Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Impacto Económico</h2>
            <p className="text-slate-400 mb-6">Operación tradicional vs. plataforma digital.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left text-slate-400 font-normal p-4">Concepto</th>
                    <th className="text-left text-red-400 font-normal p-4">Tradicional</th>
                    <th className="text-left text-emerald-400 font-normal p-4">Con Plataforma</th>
                    <th className="text-left text-amber-400 font-normal p-4">Ahorro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {costComparison.map((row, i) => (
                    <tr key={i} className="bg-slate-900/30">
                      <td className="p-4 text-slate-300">{row.concept}</td>
                      <td className="p-4 text-red-400">{row.traditional}</td>
                      <td className="p-4 text-emerald-400">{row.digital}</td>
                      <td className="p-4 text-amber-400 font-bold">{row.saving}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-800/50 font-bold">
                    <td className="p-4 text-white">TOTAL MENSUAL</td>
                    <td className="p-4 text-red-400">$1,498</td>
                    <td className="p-4 text-emerald-400">$67</td>
                    <td className="p-4 text-amber-400">95.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Scalability */}
          <div className="mb-16 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <ShoppingCart className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Potencial de Escalabilidad</h2>
                <p className="text-slate-300">Arquitectura diseñada para crecer sin fricción.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: '10 → 10,000', desc: 'Pedidos/día sin cambios en infraestructura' },
                { label: '5 sucursales', desc: '4-6 horas de trabajo para expandir (vs. $5K+ reconstruir)' },
                { label: 'White-label', desc: '$2,000 setup + $150/mes por franquicia restaurantera' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-xl text-center">
                  <div className="text-amber-400 font-bold text-lg mb-1">{item.label}</div>
                  <div className="text-slate-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <div className="text-emerald-400 font-semibold mb-2">Proyección conservadora con plataforma:</div>
              <div className="text-slate-300 text-sm">
                300 pedidos/mes actuales → +40% digital = <span className="text-white font-semibold">420 pedidos/mes</span>{' '}
                × $13 ticket promedio = <span className="text-emerald-400 font-bold">+$1,560/mes en ingresos adicionales</span>
              </div>
            </div>
          </div>

          {/* Tech stack summary */}
          <div className="mb-12 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">Stack Completo</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'HTML5', 'Tailwind CSS', 'Vanilla JavaScript', 'Firebase Realtime DB',
                'Firebase Cloud Functions', 'Firebase Hosting', 'Firebase Analytics',
                'Stripe API v3', 'Google Pay', 'Twilio WhatsApp', 'Twilio SMS',
                'Node.js 20', 'PWA / Service Worker', 'CDN Global'
              ].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ahuevoesverde.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Demo en Vivo
            </a>
            <Link href="/case-studies" className="btn-secondary inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Todos los proyectos
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
