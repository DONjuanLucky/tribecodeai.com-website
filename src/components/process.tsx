"use client"

import { motion } from "framer-motion"
import TextBlockAnimation from "@/components/ui/text-block-animation"

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We map your business processes, find where you're bleeding money, and give you an honest ROI analysis. No pitch, no pressure — just clarity.",
    duration: "30 min",
  },
  {
    num: "02",
    title: "Custom Proposal",
    desc: "Within 48 hours, you'll see the exact dollar cost of inaction and a clear solution with projected returns. Numbers, not promises.",
    duration: "48 hrs",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build your custom AI agent or automation system, rigorously test every scenario, and make sure it works before it touches a single customer.",
    duration: "1–2 weeks",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Go live with full monitoring. We continuously optimize based on real data and send you regular reports showing measurable results.",
    duration: "Ongoing",
  },
]

const stepVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
}

export function Process() {
  return (
    <section id="process" className="py-32 relative" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
            How It Works
          </span>
          <TextBlockAnimation blockColor="#f5f0e8" stagger={0.06} duration={0.5}>
            <h2
              id="process-heading"
              className="text-4xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] leading-[1.05] max-w-3xl"
            >
              From first call to{"\n"}measurable results.
            </h2>
          </TextBlockAnimation>
        </div>

        {/* Timeline — static line, no scroll tracking */}
        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-px gradient-line" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-8 md:gap-12 items-start"
              >
                <div className="hidden md:flex flex-shrink-0 w-[55px] items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] relative z-10" />
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-display font-extrabold text-[var(--accent)]">{step.num}</span>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] text-xs font-mono">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
