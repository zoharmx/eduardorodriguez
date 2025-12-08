'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Code, Brain, Rocket, Phone, TrendingUp, Calendar, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import StorySection from '@/components/sections/StorySection'
import ProjectsShowcase from '@/components/sections/ProjectsShowcase'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.story-section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSection />

      {/* Story Chapter 1: La Pregunta */}
      <StorySection
        id="historia"
        chapter={1}
        icon={<Sparkles className="w-8 h-8" />}
        color="emerald"
        title="Todo comenzó con una pregunta"
        highlight="una pregunta"
        subtitle="¿Puede la inteligencia artificial tomar decisiones éticas?"
      >
        <p className="text-lg text-slate-400 leading-relaxed mb-6">
          Mientras otros desarrolladores se enfocaban en hacer que la IA fuera más rápida o más precisa,
          yo me obsesioné con algo más profundo: ¿cómo puede una máquina entender el bien y el mal?
        </p>

        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          No era suficiente crear sistemas que funcionaran. Necesitaba crear sistemas que{' '}
          <span className="text-primary-400 font-semibold">hicieran lo correcto</span>.
        </p>

        <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <Brain className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-primary-400 mb-2">El Insight</div>
              <div className="text-slate-300">
                La respuesta estaba en un lugar inesperado: principios cabalísticos milenarios 
                aplicados a sistemas computacionales modernos.
              </div>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Story Chapter 2: El Framework */}
      <StorySection
        chapter={2}
        icon={<Code className="w-8 h-8" />}
        color="cyan"
        title="Construí el Framework Tikún"
        highlight="Framework Tikún"
      >
        <p className="text-xl text-slate-300 leading-relaxed mb-8">
          <span className="text-accent-cyan font-semibold">7 años</span> de investigación, 
          desarrollo y validación. No es solo código, es una filosofía.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '🌳', title: 'Árbol de Vida', desc: 'Estructura de decisiones basada en Sefirot' },
            { icon: '⚖️', title: 'Balance Ético', desc: 'Sistema de pesos morales dinámicos' },
            { icon: '🔄', title: 'Rectificación', desc: 'Aprendizaje y corrección continua' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-slate-800/50 border border-accent-cyan/20 rounded-xl backdrop-blur-sm hover:border-accent-cyan/50 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white mb-2">{item.title}</div>
              <div className="text-sm text-slate-400">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 rounded-xl">
          <div className="text-accent-cyan font-semibold mb-3">Resultados de Validación</div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-slate-400">Precisión en dilemas éticos complejos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-slate-400">Consistencia en principios fundamentales</div>
            </div>
          </div>
          <Link 
            href="/case-studies/tikun-framework" 
            className="inline-flex items-center gap-2 text-accent-cyan hover:gap-3 transition-all mt-4"
          >
            Leer caso de estudio completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </StorySection>

      {/* Story Chapter 3: Problemas Reales */}
      <ProjectsShowcase />

      {/* Story Chapter 4: Soluciones Empresariales */}
      <StorySection
        chapter={4}
        icon={<TrendingUp className="w-8 h-8" />}
        color="primary"
        title="Ahora resuelvo problemas empresariales con IA"
        highlight="problemas empresariales"
      >
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
          Combino <span className="text-primary-400 font-semibold">principios éticos profundos</span> con{' '}
          <span className="text-accent-cyan font-semibold">tecnología de punta</span> para crear soluciones 
          que no solo funcionan, sino que transforman negocios.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-2xl"
          >
            <Phone className="w-12 h-12 text-primary-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Voice AI Agents</h3>
            <p className="text-slate-300 mb-4">
              Agentes conversacionales que hablan español natural, cualifican leads y 
              manejan consultas complejas 24/7.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                ElevenLabs + Gemini + Twilio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Pronunciación perfecta de números
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Routing inteligente personalizado
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 rounded-2xl"
          >
            <Code className="w-12 h-12 text-accent-cyan mb-4" />
            <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
            <p className="text-slate-300 mb-4">
              Aplicaciones web escalables con React, Firebase y APIs modernas 
              que tus clientes pueden usar desde el día 1.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                React + Next.js + Tailwind
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Firebase + APIs REST
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                Dashboards en tiempo real
              </li>
            </ul>
          </motion.div>
        </div>
      </StorySection>

      <CTASection />
      <Footer />
    </main>
  )
}
