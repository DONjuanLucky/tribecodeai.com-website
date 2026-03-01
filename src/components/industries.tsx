"use client"

import { Building2, Home, Scissors, Car, UtensilsCrossed, Scale } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { TextCycler } from "@/components/ui/text-cycler"

const industries = [
  { icon: Home, name: "Home Services", tagline: "Plumbers · HVAC · Electricians" },
  { icon: Building2, name: "Contractors", tagline: "General · Roofing · Landscaping" },
  { icon: Scissors, name: "Salons & Spas", tagline: "Hair · Nails · Massage" },
  { icon: Car, name: "Auto Services", tagline: "Mechanics · Detailing · Towing" },
  { icon: UtensilsCrossed, name: "Restaurants", tagline: "Dining · Catering · Cafes" },
  { icon: Scale, name: "Professional", tagline: "Law · Accounting · Consulting" },
]

const marqueeItems = [...industries, ...industries]

export function Industries() {
  useReveal()

  return (
    <section
      id="industries"
      className="py-32 relative overflow-hidden bg-[var(--bg-subtle)]"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="reveal">
          <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
            Who We Serve
          </span>
          <h2
            id="industries-heading"
            className="text-4xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] leading-[1.05] max-w-3xl"
          >
            Built for{" "}
            <TextCycler
              words={["service", "local", "growing", "ambitious"]}
              interval={2800}
              className="text-accent-gradient"
            />
            <br />
            businesses like yours.
          </h2>
        </div>
      </div>

      {/* Marquee with glass cards */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-subtle)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-subtle)] to-transparent z-10" />

        <div className="flex animate-marquee w-max gap-6">
          {marqueeItems.map((industry, i) => (
            <div
              key={`${industry.name}-${i}`}
              className="glass-card group flex-shrink-0 w-64 cursor-default"
            >
              <div className="relative z-10 p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">{industry.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
