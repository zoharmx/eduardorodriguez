import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code, Brain, Rocket, Phone, TrendingUp, MessageSquare, Calendar } from 'lucide-react';

const PortfolioStorytelling = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('.story-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = (speed) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            HarryDev
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#story" className="hover:text-emerald-400 transition-colors">Historia</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl" style={parallaxStyle(0.2)}>
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
            ✨ Desarrollador Full-Stack • AI Specialist
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Desarrollo{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Agentes de IA
            </span>
            <br />
            que Trabajan 24/7
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Mientras tú duermes, mis Voice Agents atienden <span className="text-emerald-400 font-semibold">500+ llamadas/mes</span>,
            cualifican leads y automatizan tu negocio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Agenda una Llamada Estratégica
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 border border-emerald-500/50 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all">
              Ver Demo en Vivo
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '500K+', label: 'Llamadas Procesadas' },
              { number: '23', label: 'Proyectos 2024' },
              { number: '98%', label: 'Clientes Recurrentes' },
              { number: '7 años', label: 'Desarrollando AI Ética' }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{metric.number}</div>
                <div className="text-sm text-slate-400 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-emerald-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Story Section 1: La Pregunta */}
      <section className="story-section min-h-screen flex items-center justify-center relative py-20 px-6" id="story">
        <div className="absolute inset-0 opacity-20" style={parallaxStyle(0.3)}>
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl relative z-10" style={parallaxStyle(0.1)}>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Capítulo 1</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Todo comenzó con{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              una pregunta
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
            "¿Puede la inteligencia artificial tomar decisiones <span className="text-emerald-400 font-semibold">éticas</span>?"
          </p>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Mientras otros desarrolladores se enfocaban en hacer que la IA fuera más rápida o más precisa,
            yo me obsesioné con algo más profundo: ¿cómo puede una máquina entender el bien y el mal?
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            No era suficiente crear sistemas que funcionaran. Necesitaba crear sistemas que 
            <span className="text-emerald-400 font-semibold"> hicieran lo correcto</span>.
          </p>

          <div className="mt-12 p-6 bg-slate-800/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-emerald-400 mb-2">El Insight</div>
                <div className="text-slate-300">
                  La respuesta estaba en un lugar inesperado: principios cabalísticos milenarios 
                  aplicados a sistemas computacionales modernos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: El Framework */}
      <section className="story-section min-h-screen flex items-center justify-center relative py-20 px-6">
        <div className="absolute inset-0 opacity-20" style={parallaxStyle(0.4)}>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[140px]" />
        </div>
        
        <div className="max-w-4xl relative z-10" style={parallaxStyle(0.15)}>
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Capítulo 2</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Construí el{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Framework Tikún
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            <span className="text-cyan-400 font-semibold">7 años</span> de investigación, 
            desarrollo y validación. No es solo código, es una filosofía.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '🌳', title: 'Árbol de Vida', desc: 'Estructura de decisiones basada en Sefirot' },
              { icon: '⚖️', title: 'Balance Ético', desc: 'Sistema de pesos morales dinámicos' },
              { icon: '🔄', title: 'Rectificación', desc: 'Aprendizaje y corrección continua' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-semibold text-white mb-2">{item.title}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
            <div className="text-cyan-400 font-semibold mb-3">Resultados de Validación</div>
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
          </div>
        </div>
      </section>

      {/* Story Section 3: Aplicación Real */}
      <section className="story-section min-h-screen flex items-center justify-center relative py-20 px-6">
        <div className="absolute inset-0 opacity-20" style={parallaxStyle(0.35)}>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-[130px]" />
        </div>
        
        <div className="max-w-4xl relative z-10" style={parallaxStyle(0.12)}>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-purple-400" />
            <span className="text-purple-400 font-semibold">Capítulo 3</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Después lo apliqué a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              problemas reales
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            La teoría es hermosa, pero los negocios necesitan <span className="text-purple-400 font-semibold">resultados tangibles</span>. 
            Tomé todo lo aprendido y comencé a resolver problemas empresariales reales.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Voice AI para Importación de Vehículos',
                company: 'Agencia HoyMismo',
                metric: '80% de consultas automatizadas',
                impact: 'De 6 empleados saturados a un agente IA 24/7',
                color: 'emerald'
              },
              {
                title: 'Plataforma de Rastreo GPS',
                company: 'HoyMismoGPS',
                metric: '1,500+ vehículos monitoreados',
                impact: 'Dashboard en tiempo real con Firebase',
                color: 'cyan'
              },
              {
                title: 'Dashboards de Logística',
                company: 'Múltiples Clientes',
                metric: '73% reducción en tiempo de respuesta',
                impact: 'React + APIs inteligentes',
                color: 'purple'
              }
            ].map((project, i) => (
              <div key={i} className={`p-6 bg-slate-800/50 border border-${project.color}-500/20 rounded-xl backdrop-blur-sm hover:border-${project.color}-500/50 transition-all group cursor-pointer`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-semibold text-lg text-white mb-1">{project.title}</div>
                    <div className={`text-${project.color}-400 text-sm`}>{project.company}</div>
                  </div>
                  <div className={`text-2xl font-bold text-${project.color}-400`}>{project.metric}</div>
                </div>
                <div className="text-slate-400">{project.impact}</div>
                <div className="mt-3 text-sm text-emerald-400 group-hover:translate-x-2 transition-transform inline-block">
                  Ver caso de estudio completo →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section 4: Ahora */}
      <section className="story-section min-h-screen flex items-center justify-center relative py-20 px-6">
        <div className="absolute inset-0 opacity-20" style={parallaxStyle(0.25)}>
          <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-5xl relative z-10" style={parallaxStyle(0.08)}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Capítulo 4</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ahora resuelvo{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              problemas empresariales
            </span>{' '}
            con IA
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
            Combino <span className="text-emerald-400 font-semibold">principios éticos profundos</span> con 
            <span className="text-cyan-400 font-semibold"> tecnología de punta</span> para crear soluciones 
            que no solo funcionan, sino que transforman negocios.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl">
              <Phone className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Voice AI Agents</h3>
              <p className="text-slate-300 mb-4">
                Agentes conversacionales que hablan español natural, cualifican leads y 
                manejan consultas complejas 24/7.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  ElevenLabs + Gemini + Twilio
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Pronunciación perfecta de números
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Routing inteligente personalizado
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-slate-300 mb-4">
                Aplicaciones web escalables con React, Firebase y APIs modernas 
                que tus clientes pueden usar desde el día 1.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  React + Next.js + Tailwind
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Firebase + APIs REST
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Dashboards en tiempo real
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full">
              <span className="text-emerald-400 font-semibold">✨ ¿Listo para transformar tu negocio?</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Convirtamos tu desafío en una{' '}
              <span className="text-emerald-400">solución automatizada</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Agenda Llamada de Estrategia (30 min gratis)
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 border border-emerald-500/50 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Descarga Case Studies (PDF)
              </button>
            </div>

            <p className="text-slate-400 text-sm">
              💬 También disponible en: 
              <a href="#" className="text-emerald-400 hover:underline ml-1">LinkedIn</a> • 
              <a href="#" className="text-emerald-400 hover:underline ml-1">GitHub</a> • 
              <a href="#" className="text-emerald-400 hover:underline ml-1">Upwork</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-4">
            Desarrollado con <span className="text-emerald-400">React + Tailwind + Framer Motion</span>
          </p>
          <p className="text-sm">
            © 2024 Harry Dev. De principios éticos milenarios a soluciones de IA modernas.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioStorytelling;