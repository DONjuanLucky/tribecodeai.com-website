"use client"

import { motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="TribeCode AI Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-display font-extrabold text-lg">T</span>
            </div>
            <div className="font-display font-bold text-lg tracking-tight">
              <span className="text-[var(--text-primary)]">TribeCode</span>
              <span className="text-[var(--accent)]">AI</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="smooth-underline text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+18313458935"
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group"
              aria-label="Call (831) 345-8935"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">(831) 345-8935</span>
            </a>
            {/* btn-primary + btn-pulse on the primary nav CTA */}
            <Button
              size="sm"
              className="btn-primary btn-pulse"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Your Free Analysis
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-[var(--bg-elevated)] border-b border-[var(--border)]"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium py-2 text-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--border)] space-y-4">
              <a
                href="tel:+18313458935"
                className="flex items-center gap-2 text-[var(--text-muted)]"
              >
                <Phone className="w-4 h-4" />
                <span>(831) 345-8935</span>
              </a>
              <Button
                className="w-full btn-primary"
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get Your Free Analysis
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
