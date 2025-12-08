'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-container py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 border border-primary-500/30 rounded-full"
        >
          <span className="text-primary-400 font-semibold">
            ✨ ¿Listo para transformar tu negocio?
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance"
        >
          Convirtamos tu desafío en una{' '}
          <span className="gradient-text">solución automatizada</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Desde Voice Agents que atienden miles de llamadas hasta dashboards en tiempo real,
          creo soluciones que escalan tu negocio mientras duermes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/contact" className="group btn-primary justify-center">
            <Calendar className="w-5 h-5" />
            Agenda Llamada de Estrategia
            <span className="text-sm opacity-75">(30 min gratis)</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          
          <a
            href="/case-studies-full.pdf"
            download
            className="btn-secondary justify-center"
          >
            <FileText className="w-5 h-5" />
            Descarga Case Studies (PDF)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: <Calendar className="w-6 h-6" />,
              title: 'Consulta Gratuita',
              description: '30 minutos para analizar tu proyecto'
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: 'Propuesta Detallada',
              description: 'Documento técnico en 48 horas'
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: 'Implementación',
              description: 'Desde 2 semanas para MVP'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/30 border border-primary-500/10 rounded-xl backdrop-blur-sm"
            >
              <div className="text-primary-400 mb-3 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm mt-12"
        >
          💬 También disponible en:{' '}
          <a href="https://linkedin.com/in/harrydev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
            LinkedIn
          </a>
          {' • '}
          <a href="https://github.com/harrydev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
            GitHub
          </a>
          {' • '}
          <a href="https://upwork.com/fl/harrydev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
            Upwork
          </a>
        </motion.p>
      </div>
    </section>
  )
}
