"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We map your business processes and identify revenue leaks. No pitch — just honest analysis.",
    duration: "30-45 min",
  },
  {
    num: "02",
    title: "ROI Proposal",
    desc: "We show the dollar cost of inaction and present a clear solution with expected returns.",
    duration: "Within 48 hours",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "Custom AI agent or automation built to your specs, rigorously tested before launch.",
    duration: "1-2 weeks",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Go live with monitoring and continuous optimization. Regular reports showing real results.",
    duration: "Ongoing",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 relative" aria-labelledby="process-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 id="process-heading" className="text-4xl md:text-6xl font-black text-white mb-6">
            From{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Pain
            </span>{" "}
            To{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Profit
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A clear path to stopping revenue leaks in 4 steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-cyan-500 to-emerald-500" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`lg:flex items-center gap-12 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-5xl font-black bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{step.num}</span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-sm font-medium">{step.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="hidden lg:flex w-4 h-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-slate-950" />
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
