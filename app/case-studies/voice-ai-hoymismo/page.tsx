import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Calendar, TrendingUp, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Voice AI para Importación de Vehículos | Case Study',
  description: 'Cómo automaticé 80% de las consultas de importación de vehículos con un Voice Agent inteligente',
}

export default function VoiceAICaseStudy() {
  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '80%', label: 'Consultas Automatizadas' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Disponibilidad' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Llamadas/Mes' },
    { icon: <Calendar className="w-6 h-6" />, value: '2 min', label: 'Tiempo de Respuesta' },
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
              {['ElevenLabs', 'Gemini', 'Twilio', 'Firebase'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Voice AI para Importación de Vehículos
            </h1>
            
            <p className="text-xl text-slate-300">
              Transformando la atención telefónica de Agencia HoyMismo con un agente de IA conversacional
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-primary-400 flex justify-center mb-3">
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
                El Problema 🚨
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-slate-300">
                  Agencia HoyMismo recibía más de <strong className="text-white">60 llamadas diarias</strong> sobre 
                  el mismo proceso de importación de vehículos desde USA a México.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>6 empleados saturados respondiendo preguntas repetitivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Clientes esperando hasta 4 horas para hablar con un asesor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Leads perdidos fuera de horario laboral (40% de llamadas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Información inconsistente según quién atendiera</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                La Solución 💡
              </h2>
              
              <p className="text-slate-300 mb-6">
                Diseñé e implementé un <strong className="text-primary-400">Voice Agent</strong> completo 
                que maneja automáticamente consultas sobre importación de vehículos con las siguientes capacidades:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">🗣️ Conversación Natural</h3>
                  <p className="text-slate-300 text-sm">
                    Pronunciación perfecta de números en español. Maneja interrupciones, preguntas 
                    fuera de orden y conversaciones naturales como un humano.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">🎯 Routing Inteligente</h3>
                  <p className="text-slate-300 text-sm">
                    Identifica automáticamente la aduana (Laredo, Tijuana, Nogales) y transfiere 
                    al especialista correcto solo cuando es necesario.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">📋 Cualificación de Leads</h3>
                  <p className="text-slate-300 text-sm">
                    Recopila información clave: tipo de vehículo, año, ubicación, urgencia. 
                    Todo guardado en CRM automáticamente.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">📊 Analytics en Tiempo Real</h3>
                  <p className="text-slate-300 text-sm">
                    Dashboard con métricas de llamadas, transcripciones, temas recurrentes 
                    y puntos de fricción en el proceso.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-primary-500/10 border border-primary-500/30 rounded-xl">
                <h4 className="font-semibold text-primary-400 mb-3">Stack Técnico</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <strong className="text-white">Voice AI:</strong> ElevenLabs (TTS), Google Gemini (LLM)
                  </div>
                  <div>
                    <strong className="text-white">Telefonía:</strong> Twilio Programmable Voice
                  </div>
                  <div>
                    <strong className="text-white">Backend:</strong> Node.js + Firebase Functions
                  </div>
                  <div>
                    <strong className="text-white">Database:</strong> Firestore + Real-time DB
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                El Proceso ⚙️
              </h2>

              <div className="space-y-6">
                {[
                  {
                    week: 'Semana 1',
                    title: 'Discovery & Diseño',
                    tasks: [
                      'Análisis de 50+ llamadas reales para identificar patrones',
                      'Mapeo de flujo de conversación con todos los casos edge',
                      'Definición de personalidad del agente (tono, estilo, límites)',
                    ]
                  },
                  {
                    week: 'Semana 2-3',
                    title: 'Desarrollo Core',
                    tasks: [
                      'Integración ElevenLabs + Gemini con streaming bidireccional',
                      'Implementación de lógica de routing por ubicación',
                      'Sistema de pronunciación de números (ej: "$15,000" → "quince mil dólares")',
                    ]
                  },
                  {
                    week: 'Semana 4',
                    title: 'Testing & Optimización',
                    tasks: [
                      '100+ llamadas de prueba con diferentes escenarios',
                      'Ajuste de prompts para reducir errores de interpretación',
                      'Optimización de latencia (respuesta < 1.5 segundos)',
                    ]
                  },
                  {
                    week: 'Semana 5',
                    title: 'Deploy & Monitoreo',
                    tasks: [
                      'Lanzamiento gradual (20% del tráfico → 100%)',
                      'Dashboard de analytics en tiempo real',
                      '2 semanas de ajustes basados en feedback real',
                    ]
                  },
                ].map((phase, i) => (
                  <div key={i} className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm text-primary-400 font-semibold">{phase.week}</div>
                        <div className="text-white font-semibold">{phase.title}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm ml-11">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                El Impacto 📈
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">✅ Resultados Cuantitativos</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-green-400">80%</strong> de consultas resueltas sin intervención humana</li>
                    <li><strong className="text-green-400">De 4 horas a 2 minutos</strong> tiempo de primera respuesta</li>
                    <li><strong className="text-green-400">34%</strong> aumento en tasa de conversión</li>
                    <li><strong className="text-green-400">6 empleados</strong> liberados para enfocarse en cierres</li>
                    <li><strong className="text-green-400">ROI recuperado</strong> en menos de 2 meses</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">💬 Feedback del Cliente</h3>
                  <blockquote className="text-slate-300 text-sm italic mb-4">
                    "Harry no solo construyó un voice agent, transformó completamente cómo operamos. 
                    Ahora captamos leads mientras dormimos y el equipo puede enfocarse en lo que 
                    realmente genera ingresos: cerrar ventas."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">
                      JP
                    </div>
                    <div>
                      <div className="font-semibold text-white">Juan Pérez</div>
                      <div className="text-sm text-slate-400">CEO, Agencia HoyMismo</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Lecciones Aprendidas 🎓
              </h2>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-primary-400">1. La pronunciación importa MÁS de lo que crees:</strong> {' '}
                  Pasé 3 días solo ajustando cómo el agente dice números y cantidades en español. 
                  Esos detalles son la diferencia entre "suena como IA" y "suena profesional".
                </p>
                
                <p>
                  <strong className="text-primary-400">2. El contexto local es crucial:</strong> {' '}
                  No es lo mismo importar por Laredo que por Tijuana. El agente necesitaba entender 
                  geografía, procesos específicos por aduana y hasta horarios de operación diferentes.
                </p>
                
                <p>
                  <strong className="text-primary-400">3. Los edge cases son el 80% del trabajo:</strong> {' '}
                  El caso feliz (cliente pregunta A, agente responde B) toma 20% del tiempo. 
                  El otro 80% es: qué pasa cuando interrumpen, cuando preguntan algo fuera de contexto, 
                  cuando quieren cambiar de tema, etc.
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para automatizar tu atención telefónica?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Si tienes un negocio que recibe llamadas repetitivas, podemos implementar 
              un sistema similar en 2-4 semanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex justify-center">
                <Calendar className="w-5 h-5" />
                Agenda una Consulta Gratuita
              </Link>
              <a href="/voice-ai-case-study.pdf" download className="btn-secondary inline-flex justify-center">
                <ExternalLink className="w-5 h-5" />
                Descargar PDF Completo
              </a>
            </div>
          </div>

          {/* More Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Más Proyectos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/hoymismo-gps"
                className="p-6 bg-slate-800/50 border border-accent-cyan/20 rounded-xl hover:border-accent-cyan/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  HoyMismoGPS Platform
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Sistema completo de rastreo vehicular en tiempo real
                </p>
                <span className="text-accent-cyan text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver caso de estudio <ArrowLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>

              <Link
                href="/case-studies/tikun-framework"
                className="p-6 bg-slate-800/50 border border-accent-purple/20 rounded-xl hover:border-accent-purple/50 transition-all group"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-purple transition-colors">
                  Tikún Framework
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  7 años desarrollando IA con principios éticos cabalísticos
                </p>
                <span className="text-accent-purple text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
