"use client"

import { motion } from "framer-motion"
import { Building2, Home, Scissors, Car, UtensilsCrossed, Scale } from "lucide-react"

const industries = [
  { icon: Home, name: "Home Services", examples: "Plumbers, HVAC, Electricians", pain: "Missed calls = lost jobs", solution: "24/7 AI answering & booking" },
  { icon: Building2, name: "Contractors", examples: "General, Roofing, Landscaping", pain: "Quote follow-up chaos", solution: "Automated lead nurture" },
  { icon: Scissors, name: "Salons & Spas", examples: "Hair, Nails, Massage", pain: "No-shows & double bookings", solution: "Smart reminders & booking" },
  { icon: Car, name: "Auto Services", examples: "Mechanics, Detailing, Towing", pain: "Can't answer while working", solution: "Voice agent takes appointments" },
  { icon: UtensilsCrossed, name: "Restaurants", examples: "Fine Dining, Catering, Cafes", pain: "Missed reservations at peak", solution: "AI handles bookings & orders" },
  { icon: Scale, name: "Professional Services", examples: "Law, Accounting, Consulting", pain: "Intake calls after hours", solution: "Qualified lead capture 24/7" },
]

export function Industries() {
  return (
    <section id="industries" className="py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Built For{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We understand the unique challenges of service businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-sky-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-sky-500/30 group-hover:to-cyan-500/30 transition-colors">
                <industry.icon className="w-6 h-6 text-sky-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{industry.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{industry.examples}</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-xs text-red-400 font-semibold">PAIN</span>
                  <p className="text-sm text-slate-400">{industry.pain}</p>
                </div>
                <div>
                  <span className="text-xs text-sky-400 font-semibold">SOLUTION</span>
                  <p className="text-sm text-slate-300">{industry.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
