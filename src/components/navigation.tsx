"use client"

import { motion } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Solutions", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl rotate-6 opacity-50 blur-sm" />
              <div className="relative w-full h-full bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">T</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-white">TribeCode</span>
              <span className="text-sky-400 font-bold text-xl">AI</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-sky-400 transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18313458935"
              className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(831) 345-8935</span>
            </a>
            <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get Qualified
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-400 hover:text-sky-400 transition-colors font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a href="tel:+18313458935" className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>(831) 345-8935</span>
              </a>
              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>info@tribecodeai.com</span>
              </a>
              <Button className="w-full" onClick={() => {
                setIsOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}>
                Get Qualified
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
