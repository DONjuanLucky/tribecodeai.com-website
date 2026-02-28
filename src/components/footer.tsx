"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

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
  resources: [
    { name: "ROI Calculator", href: "#contact" },
    { name: "Case Studies", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
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
    <footer className="bg-slate-950 border-t border-slate-800" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4" aria-label="TribeCode AI Home">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">TribeCode</span>
                <span className="text-sky-400 font-bold text-lg">AI</span>
              </div>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Intelligent solutions for modern businesses. AI voice agents, 
              automation, and web experiences that scale.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+18313458935" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors" aria-label="Call us at (831) 345-8935">
                <Phone className="w-4 h-4" />
                <span>(831) 345-8935</span>
              </a>
              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors" aria-label="Email us at info@tribecodeai.com">
                <Mail className="w-4 h-4" />
                <span>info@tribecodeai.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400" aria-label="Located in Santa Cruz, California">
                <MapPin className="w-4 h-4" />
                <span>Santa Cruz, CA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TribeCode AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-slate-500 hover:text-sky-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-500 hover:text-sky-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Stop Losing Revenue?
          </h3>
          <p className="text-slate-400 mb-6">
            Book a free discovery call. We'll show you exactly what those missed calls are costing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-shadow"
          >
            Get Your Free ROI Analysis
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
