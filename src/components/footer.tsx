"use client"

import { Phone, Mail, MapPin } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
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
            <div className="space-y-3">
              <a href="tel:+18313458935" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(831) 345-8935</span>
              </a>
              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@tribecodeai.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Santa Cruz, CA</span>
              </div>
            </div>
          </div>

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
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TribeCode AI. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Quick. Adaptable. Built for a rapidly changing world.
          </p>
        </div>
      </div>
    </footer>
  )
}
