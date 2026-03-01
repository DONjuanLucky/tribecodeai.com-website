"use client"

import { motion } from "framer-motion"
import TextBlockAnimation from "@/components/ui/text-block-animation"
import { useReveal } from "@/hooks/useReveal"

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We map your business processes, find where you're bleeding money, and give you an honest ROI analysis. No pitch, no pressure — just clarity.",
    duration: "30 min",
    result: "You see the real cost of inaction",
  },
  {
    num: "02",
    title: "Custom Proposal",
    desc: "Within 48 hours, you'll see the exact dollar cost of inaction and a clear solution with projected returns. Numbers, not promises.",
    duration: "48 hrs",
    result: "A clear ROI roadmap with your numbers",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build your custom AI agent or automation system, rigorously test every scenario, and make sure it works before it touches a single customer.",
    duration: "1–2 weeks",
    result: "Production-ready before going live",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Go live with full monitoring. We continuously optimize based on real data and send you regular reports showing measurable results.",
    duration: "Ongoing",
    result: "Monthly reports with measurable ROI",
  },
]

const stepVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" as const },
  }),
}

export function Process() {
  useReveal()

  return (
    <section id="process" className="py-32 relative" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 reveal">
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
          <p className="mt-6 text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed">
            Most clients see their first qualified lead captured within{" "}
            <span className="text-[var(--amber)] font-semibold">72 hours of going live.</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-px gradient-line" />

          <div className="space-y-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-8 md:gap-12 items-start group"
              >
                {/* Timeline dot with pulse on first step */}
                <div className="hidden md:flex flex-shrink-0 w-[55px] items-center justify-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] relative z-10 ${i === 0 ? "timeline-dot-active" : ""}`}
                  />
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-display font-extrabold text-[var(--accent)]">
                      {step.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] text-xs font-mono">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mb-4">
                    {step.desc}
                  </p>
                  {/* Goal-gradient: show tangible outcome of each step */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="text-[var(--accent)] text-xs font-medium">{step.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
