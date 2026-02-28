"use client"

import { motion } from "framer-motion"
import { Mic, Workflow, Palette, Brain, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Intelligent phone agents that answer 24/7, book appointments, qualify leads, and handle customer inquiries with human-like conversation.",
    features: ["Round-the-clock availability", "Natural conversation flow", "Calendar integration", "Lead qualification"],
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Custom workflows that eliminate repetitive tasks — lead follow-up, appointment reminders, payment chasing, and internal notifications.",
    features: ["Instant lead response", "Automated reminders", "Payment follow-ups", "Custom triggers"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "Web Experiences",
    description: "Conversion-focused websites and landing pages that don't just look stunning — they turn visitors into paying customers.",
    features: ["Mobile-first design", "SEO optimized", "Lightning fast", "AI chat integration"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Comprehensive audits identifying your highest-ROI automation opportunities with a clear implementation roadmap.",
    features: ["Process mapping", "ROI analysis", "Vendor recommendations", "Implementation support"],
    gradient: "from-emerald-500 to-green-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium"
          >
            <Brain className="w-4 h-4" />
            <span>Our Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Solutions That{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From AI voice agents to complete automation stacks — we build what your business needs to scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/30 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
