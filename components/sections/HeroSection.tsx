'use client'

import { motion } from 'framer-motion'
import { Calendar, Play } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    { number: 500000, suffix: '+', label: 'Calls Processed' },
    { number: 23, suffix: '', label: 'Projects 2024' },
    { number: 98, suffix: '%', label: 'Recurring Clients' },
    { number: 7, suffix: ' yrs', label: 'Building Ethical AI' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Blurs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[150px] opacity-20 animate-pulse animation-delay-400" />

      <div className="relative z-10 text-center px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          AI Engineer • Systems Architect
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Engineering{' '}
          <span className="gradient-text">
            Ethical AI
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
            & Mission Critical
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-balance"
        >
          From <span className="text-white font-semibold">Voice Agents</span> that invoice autonomously to{' '}
          <span className="text-white font-semibold">IoT Architectures</span> at scale.{' '}
          I build technology that is <span className="text-primary-400 font-semibold">auditable and profitable</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact" className="group btn-primary">
            <Calendar className="w-5 h-5" />
            Schedule a Strategy Call
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          <a
            href="https://tikunolam-mmwy8fmm.manus.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            View Live Demo
          </a>
          <a
            href="https://devpost.com/software/tikun-olam-observable-ethical-ai-framework?ref_content=user-portfolio&ref_feature=in_progress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
          >
            View on Devpost →
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center p-4 rounded-xl bg-slate-900/50 border border-primary-500/10 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-400 font-display">
                {inView && (
                  <CountUp
                    end={metric.number}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                  />
                )}
              </div>
              <div className="text-sm text-slate-400 mt-2">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
