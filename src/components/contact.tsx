"use client"

import { useState } from "react"
import { CheckCircle2, Phone, Mail, MapPin, Send, Lock, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useReveal } from "@/hooks/useReveal"

// form-cro: clear value prop above form, "what you get" section, response time expectation
const valueProps = [
  "Free ROI analysis — see your real revenue gaps",
  "No pressure, no commitment required",
  "Custom solution roadmap for your business",
  "Transparent, honest pricing with no hidden fees",
]

// Honest value props near form
const socialProofStats = [
  { icon: Star, value: "Free", label: "Consultation" },
  { icon: Clock, value: "< 24h", label: "Response time" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 relative" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div className="reveal">
            <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
              Get Started
            </span>
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-display font-extrabold text-[var(--text-primary)] leading-[1.1] mb-6"
            >
              Let's build your
              <br />
              <span className="text-accent-gradient">unfair advantage.</span>
            </h2>
            {/* Loss aversion + hyperbolic discounting */}
            <p className="text-lg text-[var(--text-secondary)] mb-4 leading-relaxed">
              Fill out the form and we'll respond within{" "}
              <span className="text-[var(--text-primary)] font-medium">24 hours</span> to schedule
              your targeted discovery call.
            </p>
            <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
              We'll show you{" "}
              <span className="text-[var(--accent)] font-semibold">exactly</span> where you're
              leaving money on the table — and what it would take to stop it.
            </p>

            {/* Contact channels */}
            <address className="not-italic space-y-5 mb-8">
              <a
                href="tel:+18313458935"
                className="flex items-center gap-4 group"
                aria-label="Call us at (831) 345-8935"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                    Call Us
                  </div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">
                    (831) 345-8935
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@tribecodeai.com"
                className="flex items-center gap-4 group"
                aria-label="Email us at info@tribecodeai.com"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                    Email Us
                  </div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">
                    info@tribecodeai.com
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4"
                aria-label="Located in Santa Cruz, California"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">
                    Santa Cruz, CA
                  </div>
                </div>
              </div>
            </address>

            {/* Value checklist */}
            <div className="space-y-3 mb-8">
              {valueProps.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof stats near form — bandwagon effect */}
            <div className="flex items-center gap-8 pt-6 border-t border-[var(--border)]">
              {socialProofStats.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <s.icon className="w-4 h-4 text-[var(--amber)]" />
                  <span className="text-[var(--text-primary)] font-display font-bold">
                    {s.value}
                  </span>
                  <span className="text-[var(--text-muted)] text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--accent)]/25 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">
                  Application Received!
                </h3>
                <p className="text-[var(--text-secondary)] mb-2">
                  We'll review your details and reach out within{" "}
                  <strong className="text-[var(--text-primary)]">24 hours</strong>.
                </p>
                <p className="text-[var(--text-muted)] text-sm mb-6">
                  Check your email for a confirmation.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] space-y-5"
                aria-label="Qualification form"
              >
                <div>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-1">
                    Get Your Free ROI Analysis
                  </h3>
                  {/* Activation Energy: "Takes 90 seconds" reduces perceived effort */}
                  <p className="text-[var(--text-muted)] text-sm">
                    Takes 90 seconds · No credit card or commitment needed.
                  </p>
                </div>

                {/* form-cro: Name single field, not first/last split — reduces friction */}
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name *</Label>
                  <Input
                    id="contact-name"
                    placeholder="John Smith"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="(831) 555-0123"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-business">Business Name *</Label>
                  <Input
                    id="contact-business"
                    placeholder="Smith Plumbing Co."
                    required
                    autoComplete="organization"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-challenge">Biggest Challenge *</Label>
                  <Select required>
                    <SelectTrigger id="contact-challenge">
                      <SelectValue placeholder="What's your #1 pain point?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="missed-calls">Missing calls / leads</SelectItem>
                      <SelectItem value="followup">Poor follow-up speed</SelectItem>
                      <SelectItem value="scheduling">Scheduling chaos</SelectItem>
                      <SelectItem value="no-shows">No-shows & cancellations</SelectItem>
                      <SelectItem value="admin">Too much admin time</SelectItem>
                      <SelectItem value="website">Website not converting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Honest response time expectation */}
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
                  <Clock className="w-4 h-4 text-[var(--amber)] flex-shrink-0" />
                  <p className="text-[var(--text-muted)] text-xs font-medium">
                    We respond to every inquiry within 24 hours — usually much sooner.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full group btn-primary">
                  Get My Free ROI Analysis
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust + security near submit — Regret Aversion */}
                <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-xs">
                  <Lock className="w-3 h-3" />
                  <span>Secure & private. We never share your information.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
