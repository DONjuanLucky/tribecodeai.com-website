"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, ShieldCheck } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

const values = [
  {
    icon: Target,
    title: "Laser-Focused on Pain",
    desc: "We lead with your problems, not our products. If we can't solve it, we'll tell you.",
  },
  {
    icon: Eye,
    title: "Plain Speech",
    desc: "No tech jargon. No buzzwords. We talk like humans running a business.",
  },
  {
    icon: Heart,
    title: "Built on Empathy",
    desc: "We've been in your shoes. We know what it's like to miss that $3,000 call.",
  },
]

const promises = [
  "Show you the real cost of inaction — in dollars",
  "Build only what you need. No upsells. No bloat.",
  "Stay until it works. If it doesn't perform, we fix it.",
  "Make you more competitive than before we met.",
]

export function About() {
  useReveal()

  return (
    <section id="about" className="py-32 relative bg-[var(--bg-subtle)]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="reveal">
            <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
              About Us
            </span>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-display font-extrabold text-[var(--text-primary)] leading-[1.1] mb-8"
            >
              Not a software company.
              <br />
              <span className="text-accent-gradient">A results company.</span>
            </h2>

            {/* Pratfall Effect: admit a weakness to build trust */}
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              We're not the biggest agency — and we never want to be. TribeCode AI was born from a
              simple observation: businesses don't need more technology.{" "}
              <span className="text-[var(--text-primary)] font-medium">
                They need someone who sees where they're losing money — and fixes it fast.
              </span>
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              We build intelligent digital workers — AI voice agents, automation systems, and
              conversion-focused web experiences — that handle the tasks stealing your time and revenue.
              Based in Santa Cruz, serving businesses across California and beyond.
            </p>

            {/* Values — stagger reveal */}
            <div className="space-y-7 reveal-stagger">
              {values.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Promise card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:mt-16"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/25 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[var(--accent)]" />
                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                  Our Promise
                </h3>
              </div>

              <div className="space-y-6">
                {promises.map((promise, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <span className="text-white font-display font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-[var(--text-primary)] leading-relaxed">{promise}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <p className="text-[var(--accent)] font-display font-semibold italic text-lg">
                  "We see where you're bleeding money. We stop it. Fast."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
