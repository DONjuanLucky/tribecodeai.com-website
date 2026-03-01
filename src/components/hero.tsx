"use client"

import Image from "next/image"
import { useReveal } from "@/hooks/useReveal"
import { TextCycler } from "@/components/ui/text-cycler"
import { LiftButton } from "@/components/ui/lift-button"
import { ArrowRight, Play, PhoneCall, Zap, Shield, Clock } from "lucide-react"

export function Hero() {
  useReveal()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Aurora gradient background */}
      <div className="aurora-bg" aria-hidden="true" />

      {/* Grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* "T" watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold leading-none"
          style={{
            fontSize: "clamp(16rem, 40vw, 40rem)",
            WebkitTextStroke: "1.5px var(--amber)",
            color: "transparent",
            opacity: 0.03,
          }}
        >
          T
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">

        {/* Logo — prominently placed above tag */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0s" }}>
          <Image
            src="/logo.svg"
            alt="TribeCode AI — Intelligent Solutions"
            width={320}
            height={80}
            priority
            className="h-14 w-auto opacity-90"
          />
        </div>

        {/* Tag */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-muted)] text-sm font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            AI-Powered Business Automation — Santa Cruz, CA
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h1
            className="font-display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 1 }}
          >
            <span className="text-[var(--text-primary)] block mb-2">Automate the</span>
            {/* TextCycler on its own line — explicit display:block so it's never invisible */}
            <span className="block" style={{ minHeight: "1.1em" }}>
              <TextCycler
                words={["Impossible.", "Revenue.", "Growth.", "Future."]}
                interval={3200}
                className="text-shimmer"
              />
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mb-6 leading-relaxed font-light animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          Every missed call is a missed paycheck.{" "}
          <span className="text-[var(--text-primary)] font-medium">
            Our AI picks up 24/7 — nights, weekends, holidays.
          </span>
        </p>

        {/* Loss aversion stat */}
        <div
          className="flex items-center gap-3 mb-10 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <PhoneCall className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
          <p className="text-[var(--text-muted)] text-sm">
            Average service business misses{" "}
            <span className="text-[var(--amber)] font-semibold">4–6 calls/day</span> ·{" "}
            <span className="text-[var(--accent)] font-semibold">$72k–$180k in lost revenue/year</span>
          </p>
        </div>

        {/* CTA Row — lift buttons only */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-start mb-16 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <LiftButton
            variant="primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get My Free ROI Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </LiftButton>

          <LiftButton
            variant="glass"
            onClick={() =>
              document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center flex-shrink-0">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            Watch the Voice Agent Demo
          </LiftButton>
        </div>

        {/* Honest capability stats */}
        <div
          className="pt-10 border-t border-[var(--border)] animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-[var(--text-muted)] text-xs mb-6 font-mono uppercase tracking-[0.2em]">
            What our AI delivers
          </p>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                <Clock className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xl font-display font-extrabold text-[var(--accent)] mb-0">
                  {"< 2 sec"}
                </p>
                <p className="text-xs text-[var(--text-muted)]">Response time</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                <Shield className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xl font-display font-extrabold text-[var(--accent)] mb-0">
                  24/7
                </p>
                <p className="text-xs text-[var(--text-muted)]">Always-on coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xl font-display font-extrabold text-[var(--accent)] mb-0">
                  Instant
                </p>
                <p className="text-xs text-[var(--text-muted)]">Lead follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="w-5 h-9 rounded-full border border-[var(--glass-border)] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--accent)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
