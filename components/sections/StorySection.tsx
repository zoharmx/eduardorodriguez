'use client'

import { ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface StorySectionProps {
  id?: string
  chapter: number
  icon: ReactNode
  color: 'emerald' | 'cyan' | 'purple' | 'primary'
  title: string
  highlight?: string
  subtitle?: string
  children: ReactNode
}

const colorMap = {
  emerald: {
    text: 'text-primary-400',
    gradient: 'from-primary-400 to-accent-cyan',
    bg: 'bg-primary-500',
    border: 'border-primary-500/20',
  },
  cyan: {
    text: 'text-accent-cyan',
    gradient: 'from-accent-cyan to-accent-blue',
    bg: 'bg-accent-cyan',
    border: 'border-accent-cyan/20',
  },
  purple: {
    text: 'text-accent-purple',
    gradient: 'from-accent-purple to-pink-400',
    bg: 'bg-accent-purple',
    border: 'border-accent-purple/20',
  },
  primary: {
    text: 'text-primary-400',
    gradient: 'from-primary-400 via-accent-cyan to-accent-blue',
    bg: 'bg-primary-500',
    border: 'border-primary-500/20',
  }
}

export default function StorySection({
  id,
  chapter,
  icon,
  color,
  title,
  highlight,
  subtitle,
  children
}: StorySectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const colors = colorMap[color]

  // Split title by highlight word
  const titleParts = highlight 
    ? title.split(highlight)
    : [title]

  return (
    <section 
      id={id}
      ref={ref}
      className="story-section min-h-screen flex items-center justify-center relative py-20 px-6"
    >
      {/* Animated Background Blur */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className={`absolute ${
          chapter % 2 === 0 ? 'top-20 right-20' : 'bottom-20 left-20'
        } w-72 h-72 ${colors.bg} rounded-full blur-[120px]`} />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className={colors.text}>{icon}</div>
          <span className={`${colors.text} font-semibold`}>Capítulo {chapter}</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
        >
          {titleParts[0]}
          {highlight && (
            <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              {highlight}
            </span>
          )}
          {titleParts[1]}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8"
          >
            "{subtitle}"
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
}
