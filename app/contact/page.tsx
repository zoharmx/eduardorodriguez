'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Calendar, Mail, MessageSquare, CheckCircle, Phone } from 'lucide-react'
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
      console.error('Error sending form:', error)
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
              Let&apos;s talk about your{' '}
              <span className="gradient-text">project</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tell me what you need and let&apos;s see how I can help you automate and
              scale your business with AI.
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
                <h3 className="font-semibold text-white mb-2">Schedule a Call</h3>
                <p className="text-slate-400 text-sm mb-4">
                  30 free minutes to discuss your project
                </p>
                <a
                  href="https://cal.com/eduardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline text-sm font-medium"
                >
                  View availability →
                </a>
              </div>

              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <Mail className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Direct Email</h3>
                <a
                  href="mailto:jesuseduardorodriguezsaucedo@outlook.com"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm break-all"
                >
                  jesuseduardorodriguezsaucedo@outlook.com
                </a>
              </div>

              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <Phone className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">AI Voice Agent</h3>
                <a
                  href="tel:+16192573672"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  +1 619 257 3672
                </a>
                <p className="text-slate-500 text-xs mt-1">Call my AI assistant</p>
              </div>

              <div className="p-6 bg-slate-800/50 border border-primary-500/20 rounded-xl backdrop-blur-sm">
                <MessageSquare className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Fast Response</h3>
                <p className="text-slate-400 text-sm">
                  I respond within 24 hours
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl">
                <p className="text-sm text-slate-300 mb-3">
                  <span className="font-semibold text-primary-400">Urgent project?</span>
                </p>
                <p className="text-sm text-slate-400">
                  I can start in less than 1 week for priority projects.
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
                    Message Sent!
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Thanks for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary inline-flex"
                  >
                    Send another message
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
                        Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="Your name"
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
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email',
                          },
                        })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                        placeholder="+1 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      {...register('project', { required: 'Select a project type' })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="voice-ai">Voice AI Agent</option>
                      <option value="web-app">Web Application</option>
                      <option value="dashboard">Dashboard / Admin Panel</option>
                      <option value="integration">API Integration</option>
                      <option value="consulting">Consulting / Audit</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.project && (
                      <p className="text-red-400 text-sm mt-1">{errors.project.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Estimated Budget *
                    </label>
                    <select
                      {...register('budget', { required: 'Select a budget range' })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white"
                    >
                      <option value="">Select a range</option>
                      <option value="< $2,500 USD">Less than $2,500 USD</option>
                      <option value="$2,500 - $5,000 USD">$2,500 - $5,000 USD</option>
                      <option value="$5,000 - $10,000 USD">$5,000 - $10,000 USD</option>
                      <option value="$10,000 - $25,000 USD">$10,000 - $25,000 USD</option>
                      <option value="> $25,000 USD">More than $25,000 USD</option>
                      <option value="Not defined">Not sure yet</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Please describe your project',
                        minLength: {
                          value: 20,
                          message: 'Describe your project with at least 20 characters',
                        },
                      })}
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-white resize-none"
                      placeholder="Describe your project, goals, timeline and any relevant details..."
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
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    By submitting this form, you agree that I may contact you about your project.
                    I will not share your information with third parties.
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
