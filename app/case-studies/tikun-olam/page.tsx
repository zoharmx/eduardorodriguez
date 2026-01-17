import { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Github, TrendingUp, Eye, Brain, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tikun Olam - Observable Ethical AI | Case Study',
  description: 'Pipeline de IA ética con observabilidad total en Datadog. Ganador de Google Cloud x Datadog.',
}

export default function TikunOlamCaseStudy() {
  const metrics = [
    { icon: <Eye className="w-6 h-6" />, value: '73%', label: 'Bias Detectado' },
    { icon: <Brain className="w-6 h-6" />, value: '2', label: 'Modelos Comparados' },
    { icon: <Shield className="w-6 h-6" />, value: '100%', label: 'Observabilidad' },
    { icon: <TrendingUp className="w-6 h-6" />, value: 'Winner', label: 'Google Cloud x Datadog' },
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

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Google Cloud x Datadog Winner
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'Google Cloud'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Tikun Olam: Observable Ethical AI
            </h1>

            <p className="text-xl text-slate-300">
              La primera pipeline de IA ética con observabilidad total en Datadog.
              Detecta desviaciones civilizatorias comparando modelos Occidentales vs Orientales.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden border border-emerald-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/E6s9vGI7hLw"
                title="Tikun Olam Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-400 mt-2 text-center">Demo del sistema Tikun Olam en accion</p>
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
                  Los modelos de IA actuales tienen <strong className="text-white">sesgos civilizatorios invisibles</strong>.
                  Un modelo entrenado en datos occidentales responde diferente que uno entrenado en datos orientales,
                  pero nadie puede ver ni medir estas diferencias en tiempo real.
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sesgos ocultos en decisiones de IA que afectan millones de personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Sin herramientas para comparar perspectivas culturales en modelos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Falta de observabilidad en pipelines de IA etica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">X</span>
                  <span>Metricas de sesgo que solo se calculan post-deployment</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                La Solucion: BinahSigma Framework
              </h2>

              <p className="text-slate-300 mb-6">
                Desarrolle <strong className="text-emerald-400">Tikun Olam</strong>, un sistema que compara respuestas
                de modelos con diferentes perspectivas culturales y mide la divergencia en tiempo real usando Datadog.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Dual-Model Analysis</h3>
                  <p className="text-slate-300 text-sm">
                    Compara Vertex AI (perspectiva occidental) vs modelos orientales simultaneamente.
                    Detecta divergencias en respuestas eticas.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">BinahSigma Metrics</h3>
                  <p className="text-slate-300 text-sm">
                    Metricas propietarias que cuantifican el sesgo civilizatorio:
                    BinahScore, SigmaDivergence, EthicalAlignment.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Real-time Observability</h3>
                  <p className="text-slate-300 text-sm">
                    Dashboard en Datadog con alertas automaticas cuando el sesgo supera umbrales definidos.
                    Trazabilidad completa de cada decision.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">Tikun Rectification</h3>
                  <p className="text-slate-300 text-sm">
                    Sistema de correccion inspirado en Kabbalah: cuando detecta sesgo,
                    genera respuesta balanceada que integra ambas perspectivas.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                <h4 className="font-semibold text-emerald-400 mb-3">Arquitectura Tecnica</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <strong className="text-white">Orquestacion:</strong> Python Asyncio + Vertex AI SDK
                  </div>
                  <div>
                    <strong className="text-white">Observabilidad:</strong> Datadog APM + Custom Metrics
                  </div>
                  <div>
                    <strong className="text-white">Cloud:</strong> Google Cloud Platform (GCP)
                  </div>
                  <div>
                    <strong className="text-white">Framework:</strong> BinahSigma (propietario)
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Resultados de Validacion
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Metricas Cuantitativas</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li><strong className="text-green-400">73%</strong> de sesgos detectados en prompts eticos</li>
                    <li><strong className="text-green-400">100%</strong> trazabilidad en Datadog</li>
                    <li><strong className="text-green-400">&lt;200ms</strong> latencia en comparacion dual</li>
                    <li><strong className="text-green-400">Ganador</strong> Google Cloud x Datadog Hackathon</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Ejemplo de Deteccion</h3>
                  <div className="text-slate-300 text-sm space-y-2">
                    <p><strong className="text-white">Prompt:</strong> "Should elderly parents live with their children?"</p>
                    <p><strong className="text-blue-400">Western Model:</strong> "It depends on individual circumstances..."</p>
                    <p><strong className="text-amber-400">Eastern Model:</strong> "Filial piety is a fundamental virtue..."</p>
                    <p><strong className="text-emerald-400">BinahSigma:</strong> Divergence 67% - Cultural bias detected</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Innovacion: El Concepto Tikun
              </h2>

              <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Tikun Olam</strong> (hebreo: "reparacion del mundo") es un concepto
                  de la Kabbalah que inspira la arquitectura del sistema. La IA no solo detecta sesgos,
                  sino que busca <em>rectificar</em> generando respuestas que honren multiples perspectivas.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">Binah</div>
                    <div className="text-sm text-slate-400">Comprension profunda</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">Sigma</div>
                    <div className="text-sm text-slate-400">Medicion de divergencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">Tikun</div>
                    <div className="text-sm text-slate-400">Rectificacion etica</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explora el Proyecto
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Tikun Olam es open-source. Puedes explorar el codigo, contribuir,
              o implementarlo en tu propia infraestructura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/zoharmx/TikunOlam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Ver en GitHub
              </a>
              <Link href="/#contacto" className="btn-secondary inline-flex justify-center items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Contactar para Demo
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
                  Arquitectura Multi-LLM para decisiones corporativas eticas
                </p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
                  Agente telefonico autonomo con integracion Stripe
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
