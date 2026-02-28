"use client"

import { Mic, Workflow, Palette, Brain, ArrowUpRight } from "lucide-react"
import TextBlockAnimation from "@/components/ui/text-block-animation"
import { Ripple } from "@/components/ui/material-design-3-ripple"

const services = [
  {
    num: "01",
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Never miss another $3,000 call. Our voice agents answer 24/7, qualify leads, and book appointments — with conversations so natural, callers won't know the difference.",
    features: ["Always-on availability", "Natural conversation", "Calendar sync", "Lead scoring"],
  },
  {
    num: "02",
    icon: Workflow,
    title: "Business Automation",
    description:
      "Stop losing leads to slow follow-up. Custom workflows that respond to inquiries in seconds, chase payments automatically, and give you 20+ hours back every week.",
    features: ["Instant lead response", "Smart reminders", "Payment follow-ups", "Custom triggers"],
  },
  {
    num: "03",
    icon: Palette,
    title: "Web Experiences",
    description:
      "Your website should close deals, not just look pretty. Conversion-focused sites that turn visitors into paying customers — mobile-first, blazing fast, SEO-ready.",
    features: ["Mobile-first", "SEO optimized", "Fast loading", "AI chat ready"],
  },
  {
    num: "04",
    icon: Brain,
    title: "AI Strategy",
    description:
      "Know exactly where you're bleeding money — and how to stop it. We audit your processes, map the gaps, and hand you a clear roadmap with projected ROI.",
    features: ["Process mapping", "ROI analysis", "Vendor guidance", "Implementation plan"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
            What We Build
          </span>
          <TextBlockAnimation blockColor="var(--amber)" stagger={0.06} duration={0.5}>
            <h2
              id="services-heading"
              className="text-4xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] leading-[1.05] max-w-3xl"
            >
              Solutions that stop{"\n"}revenue leaks.
            </h2>
          </TextBlockAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative bg-[var(--bg)] cursor-pointer"
            >
              <Ripple color="text-[var(--accent)]" opacity={0.1}>
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-display font-extrabold text-[var(--border)]">
                      {service.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-[var(--accent)] opacity-50" />
                  </h3>

                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Ripple>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
