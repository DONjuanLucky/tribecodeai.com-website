"use client"

import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Instagram, Facebook, ArrowRight } from "lucide-react"

const footerLinks = {
  solutions: [
    { name: "AI Voice Agents", href: "#services" },
    { name: "Business Automation", href: "#services" },
    { name: "Web Experiences", href: "#services" },
    { name: "AI Strategy", href: "#services" },
  ],
  industries: [
    { name: "Home Services", href: "#industries" },
    { name: "Contractors", href: "#industries" },
    { name: "Salons & Spas", href: "#industries" },
    { name: "Auto Services", href: "#industries" },
    { name: "Restaurants", href: "#industries" },
    { name: "Professional Services", href: "#industries" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/tribecode-ai", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/tribecodeai", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/tribecodeai", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/tribecodeai", icon: Facebook },
  { name: "GitHub", href: "https://github.com/tribecodeai", icon: Github },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-subtle)] border-t border-[var(--border)]" role="contentinfo" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Final CTA */}
        <div className="mb-16 p-8 md:p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--text-primary)] mb-2">
              Ready to stop losing revenue?
            </h3>
            <p className="text-[var(--text-secondary)]">
              Book a free discovery call. We'll show you exactly what those missed calls are costing.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-display font-bold rounded-xl hover:bg-[var(--accent-hover)] transition-colors flex-shrink-0"
          >
            Get Your Free Analysis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Links grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4" aria-label="TribeCode AI Home">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-sm">T</span>
              </div>
              <div className="font-display font-bold">
                <span className="text-[var(--text-primary)]">TribeCode</span>
                <span className="text-[var(--accent)]">AI</span>
              </div>
            </a>
            <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-xs leading-relaxed">
              Intelligent solutions for modern businesses. AI voice agents,
              automation, and web experiences that scale.
            </p>

            <address className="not-italic space-y-2 mb-6 text-sm">
              <a href="tel:+18313458935" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Call (831) 345-8935">
                <Phone className="w-3.5 h-3.5" />
                <span>(831) 345-8935</span>
              </a>
              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Email info@tribecodeai.com">
                <Mail className="w-3.5 h-3.5" />
                <span>info@tribecodeai.com</span>
              </a>
              <div className="flex items-center gap-2 text-[var(--text-muted)]" aria-label="Located in Santa Cruz, California">
                <MapPin className="w-3.5 h-3.5" />
                <span>Santa Cruz, CA</span>
              </div>
            </address>

            <nav className="flex items-center gap-2" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="Solutions links">
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries links">
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-4 text-sm">Industries</h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} TribeCode AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="/privacy" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
