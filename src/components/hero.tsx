"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextBlockAnimation from "@/components/ui/text-block-animation"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* Single warm accent glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Tag */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            AI-Powered Business Automation
          </span>
        </div>

        {/* Main Headline — GSAP block wipe reveal */}
        <div className="mb-8">
          <TextBlockAnimation
            animateOnScroll={false}
            delay={0.3}
            blockColor="#ff6b35"
            duration={0.6}
            stagger={0.08}
          >
            <h1
              className="font-display font-extrabold tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              <span className="text-[var(--text-primary)]">Automate the</span>
              {"\n"}
              <span className="text-accent-gradient">Impossible.</span>
            </h1>
          </TextBlockAnimation>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mb-14 leading-relaxed font-light animate-fade-in" style={{ animationDelay: "1s" }}>
          AI voice agents that never sleep. Automation that scales infinitely.{" "}
          <span className="text-[var(--text-primary)] font-medium">Built for businesses ready to dominate.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 items-start mb-20 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <Button
            size="lg"
            className="group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How It Works
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Trust */}
        <div className="pt-10 border-t border-[var(--border)] animate-fade-in" style={{ animationDelay: "1.3s" }}>
          <p className="text-[var(--text-muted)] text-xs mb-5 font-mono uppercase tracking-[0.2em]">
            Trusted across California
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {["Santa Cruz", "Silicon Valley", "San Francisco", "Los Angeles", "New York"].map((city) => (
              <span key={city} className="text-[var(--text-secondary)] text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator — pure CSS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="w-5 h-9 rounded-full border border-[var(--border)] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--accent)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
