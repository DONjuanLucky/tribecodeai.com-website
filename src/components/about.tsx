"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-32 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-white mb-6">
              Not a Software Company. A{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Results
              </span>{" "}
              Company.
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              TribeCode AI was born from a simple observation: businesses don't need more technology. 
              They need someone who sees where they're losing money — and fixes it fast.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We build intelligent digital workers — AI voice agents, automation systems, and 
              conversion-focused web experiences — that handle the tasks stealing your time and revenue.
              Based in Santa Cruz, we serve service businesses across California and beyond.
            </p>

            <div className="space-y-6">
              {[
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
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-cyan-500/15 blur-2xl" />

              <h3 className="text-2xl font-bold text-white mb-8 relative">Our Promise</h3>

              <div className="space-y-6 relative">
                {[
                  "Show you the real cost of inaction — in dollars",
                  "Build only what you need. No upsells. No bloat.",
                  "Stay until it works. If it doesn't perform, we fix it.",
                  "Make you more competitive than before we met.",
                ].map((promise, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-300 pt-1">{promise}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-sky-400 font-semibold italic">
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
