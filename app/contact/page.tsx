'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Calendar, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type FormData = {
  name: string
  email: string
  company?: string
  phone?: string
  project: string
  budget: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    // Aquí conectarías con tu backend o servicio de email
    // Por ejemplo: Formspree, EmailJS, o tu propio API endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Hablemos de tu{' '}
              <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cuéntame qué necesitas y veamos cómo puedo ayudarte a automatizar y 
              escalar tu negocio con IA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <Calendar className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Agenda una Llamada</h3>
                <p className="text-slate-400 text-sm mb-4">
                  30 minutos gratis para discutir tu proyecto
                </p>
                <a
                  href="https://calendly.com/harrydev/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline text-sm font-medium"
                >
                  Ver disponibilidad →
                </a>
              </div>

              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <Mail className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Directo</h3>
                <a
                  href="mailto:harry@harrydev.com"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  harry@harrydev.com
                </a>
              </div>

              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <MessageSquare className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Respuesta Rápida</h3>
                <p className="text-slate-400 text-sm">
                  Respondo en menos de 24 horas
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl">
                <p className="text-sm text-slate-300 mb-3">
                  <span className="font-semibold text-primary-400">¿Proyecto urgente?</span>
                </p>
                <p className="text-sm text-slate-400">
                  Puedo comenzar en menos de 1 semana para proyectos prioritarios.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2"
            >
              {isSubmitted ? (
                <div className="p-12 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm text-center">
                  <CheckCircle className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Gracias por contactarme. Te responderé en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary inline-flex"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-8 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'El nombre es requerido' })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'El email es requerido',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email inválido',
                          },
                        })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="+52 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      {...register('project', { required: 'Selecciona un tipo de proyecto' })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="voice-ai">Voice AI Agent</option>
                      <option value="web-app">Aplicación Web</option>
                      <option value="dashboard">Dashboard / Panel Admin</option>
                      <option value="integration">Integración de APIs</option>
                      <option value="consulting">Consultoría / Auditoría</option>
                      <option value="other">Otro</option>
                    </select>
                    {errors.project && (
                      <p className="text-red-400 text-sm mt-1">{errors.project.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Presupuesto Estimado *
                    </label>
                    <select
                      {...register('budget', { required: 'Selecciona un rango de presupuesto' })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="< $2,500 USD">Menos de $2,500 USD</option>
                      <option value="$2,500 - $5,000 USD">$2,500 - $5,000 USD</option>
                      <option value="$5,000 - $10,000 USD">$5,000 - $10,000 USD</option>
                      <option value="$10,000 - $25,000 USD">$10,000 - $25,000 USD</option>
                      <option value="> $25,000 USD">Más de $25,000 USD</option>
                      <option value="No definido">Aún no lo sé</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Cuéntame sobre tu proyecto *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Por favor describe tu proyecto',
                        minLength: {
                          value: 20,
                          message: 'Describe tu proyecto con al menos 20 caracteres',
                        },
                      })}
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white resize-none"
                      placeholder="Describe tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    Al enviar este formulario, aceptas que pueda contactarte sobre tu proyecto.
                    No compartiré tu información con terceros.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
