'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    projects: [
      { name: 'Tikun Olam', href: '/case-studies/tikun-olam' },
      { name: 'VocalisAI', href: '/case-studies/vocalisai' },
      { name: 'HoyMismoGPS', href: '/case-studies/hoymismo-gps' },
      { name: 'View all', href: '/#projects' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/#projects' },
      { name: 'Download CV', href: '/cv.pdf' },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/eduardo-rodriguez-dev', icon: <Linkedin className="w-5 h-5" /> },
      { name: 'GitHub', href: 'https://github.com/zoharmx', icon: <Github className="w-5 h-5" /> },
      { name: 'Email', href: 'mailto:jesuseduardorodriguezsaucedo@outlook.com', icon: <Mail className="w-5 h-5" /> },
    ],
  }

  return (
    <footer className="border-t border-primary-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-display font-bold gradient-text inline-block mb-4">
              Eduardo Rdz
            </Link>
            <p className="text-slate-400 text-sm mb-6">
              From millennial ethical principles to modern AI solutions.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 border border-primary-500/20 rounded-lg hover:border-primary-500/50 hover:bg-slate-800/70 transition-all group"
                  aria-label={link.name}
                >
                  <span className="text-slate-400 group-hover:text-primary-400 transition-colors">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <p className="text-slate-400 text-sm mb-3">
              Have a project in mind?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-400 hover:gap-3 transition-all text-sm font-medium"
            >
              Schedule a call
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Eduardo Rdz. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Tech Stack Credit */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-xs">
            Built with{' '}
            <span className="text-primary-400">React + Next.js + Tailwind + Framer Motion</span>
            {' • '}
            Deployed on <span className="text-primary-400">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
