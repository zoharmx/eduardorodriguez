import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Brain, Layers, Scale, Target, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ethica.AI Framework - Multi-LLM Orchestration | Case Study',
  description: 'Arquitectura Multi-Proveedor que orquesta Gemini, Mistral y DeepSeek para eliminar sesgos en decisiones corporativas.',
}

export default function EthicaAICaseStudy() {
  const metrics = [
    { icon: <Layers className="w-6 h-6" />, value: '10', label: 'Modulos de Analisis' },
    { icon: <Brain className="w-6 h-6" />, value: '3', label: 'LLM Providers' },
    { icon: <Scale className="w-6 h-6" />, value: 'Multi', label: 'Perspectivas' },
    { icon: <Target className="w-6 h-6" />, value: '48h', label: 'Tiempo de Analisis' },
  ]

  const analysisResults = [
    { scenario: 'Longevidad Biologica', score: 65, confidence: 60, decision: 'CONDITIONAL', color: 'amber' },
    { scenario: 'Ingreso Basico Universal', score: 61, confidence: 75, decision: 'CONDITIONAL', color: 'amber' },
    { scenario: 'Vigilancia con IA', score: 58, confidence: 70, decision: 'REJECTED', color: 'red' },
    { scenario: 'Cloud Seeding FIFA 2026', score: 30, confidence: 100, decision: 'REJECTED', color: 'red' },
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
              {['Multi-LLM Orch', 'GraphQL', 'Python SDK', 'Pydantic', 'FastAPI'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Ethica.AI: Multi-LLM Framework
            </h1>

            <p className="text-xl text-slate-300">
              Sistema empresarial que analiza implicaciones eticas de sistemas de IA y decisiones
              corporativas. Orquesta Gemini, Mistral y DeepSeek para detectar sesgos desde multiples perspectivas.
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mb-12 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Demo Disponible</h3>
                <p className="text-slate-300 text-sm">Prueba el framework con escenarios de ejemplo</p>
              </div>
              <a
                href="https://ethical-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                Probar Ethica.AI
              </a>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-emerald-400 flex justify-center mb-3">
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
                  Las organizaciones enfrentan riesgos significativos al implementar IA:
                  <strong className="text-white"> demandas por discriminacion algoritmica</strong>,
                  multas regulatorias (EU AI Act), y crisis de reputacion.
                  El costo promedio de un fallo etico en IA: <strong className="text-white">$5M - $50M USD</strong>.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Analisis etico actual es manual, lento (6 semanas) y caro ($50K+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Un solo modelo de IA tiene sesgos que no puede detectar en si mismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sin metricas cuantificables para comparar escenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Decisiones eticas basadas en opinion, no en framework sistematico</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Arquitectura Multi-Provider
              </h2>

              <p className="text-slate-300 mb-6">
                A diferencia de sistemas tradicionales, Ethica.AI usa <strong className="text-emerald-400">tres proveedores
                simultaneamente</strong> para eliminar sesgos:
              </p>

              <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl mb-8">
                <div className="font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre>{`         MISTRAL AI (Neutral)
              Insight Generation
                    |
         +----------+----------+
         |                     |
    GOOGLE GEMINI         DEEPSEEK
   (Individual Ethics)  (Collective Ethics)
    Western Perspective  Eastern Perspective
         |                     |
         +----------+----------+
                    |
            SYNTHESIS ENGINE
            Balanced Analysis`}</pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <div className="font-semibold text-blue-400 mb-2">Mistral AI</div>
                  <div className="text-slate-400 text-sm">Arbitro neutral para insights imparciales</div>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <div className="font-semibold text-green-400 mb-2">Google Gemini</div>
                  <div className="text-slate-400 text-sm">Perspectiva individual (derechos)</div>
                </div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
                  <div className="font-semibold text-amber-400 mb-2">DeepSeek</div>
                  <div className="text-slate-400 text-sm">Perspectiva colectiva (bien comun)</div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Pipeline de 10 Modulos
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { layer: 'ESTRATEGICA', modules: ['Purpose Validator', 'Insight Generator', 'Context Analyzer'] },
                  { layer: 'OPERACIONAL', modules: ['Opportunity Identifier', 'Risk Assessor', 'Conflict Resolver'] },
                  { layer: 'TACTICA', modules: ['Sustainability Evaluator', 'Implementation Planner'] },
                  { layer: 'EJECUCION', modules: ['Integration Engine', 'Decision Orchestrator'] },
                ].map((layer, i) => (
                  <div key={i} className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                    <div className="text-xs text-emerald-400 font-semibold mb-2">CAPA {layer.layer}</div>
                    <ul className="space-y-1">
                      {layer.modules.map((mod, j) => (
                        <li key={j} className="text-slate-300 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Resultados de Validacion
              </h2>

              <div className="space-y-4">
                {analysisResults.map((result, i) => (
                  <div key={i} className="p-4 bg-slate-800/30 border border-slate-700 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {result.decision === 'REJECTED' ? (
                        <XCircle className="w-6 h-6 text-red-400" />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-amber-400" />
                      )}
                      <div>
                        <div className="font-semibold text-white">{result.scenario}</div>
                        <div className="text-slate-400 text-sm">
                          Impact: {result.score}% | Confidence: {result.confidence}%
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      result.decision === 'REJECTED'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {result.decision}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="text-sm text-slate-300">
                  <strong className="text-emerald-400">23%</strong> de casos mostraron divergencia cultural significativa,
                  donde un solo modelo hubiera dado una respuesta sesgada.
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Valor Comercial
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">vs Consultorias</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-green-400">10x</strong> mas rapido (48h vs 6 semanas)</li>
                    <li><strong className="text-green-400">10x</strong> mas barato ($3.5K vs $50K)</li>
                    <li>Resultados reproducibles y cuantificables</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Casos de Uso</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Pre-launch audits de modelos ML</li>
                    <li>EU AI Act compliance</li>
                    <li>ESG reporting para inversores</li>
                    <li>Policy impact assessment (gobierno)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Analiza tu Escenario de IA
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Envia tu caso de uso y recibe un analisis etico completo en 48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ethical-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Probar Demo
              </a>
              <Link href="/#contacto" className="btn-secondary inline-flex justify-center items-center gap-2">
                Solicitar Analisis Completo
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
