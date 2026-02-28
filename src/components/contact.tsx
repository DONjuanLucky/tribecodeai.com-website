"use client"

import { useState } from "react"
import { CheckCircle2, Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const valueProps = [
  "Free qualification & ROI analysis",
  "No pressure, no commitment",
  "Custom solution roadmap",
  "Transparent, honest pricing",
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 relative" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
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
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              Fill out the form and we'll review your needs within 24 hours.
              Then we'll schedule a targeted discovery call to show you exactly where you're losing money — and how to stop it.
            </p>

            <address className="not-italic space-y-5 mb-10">
              <a href="tel:+18313458935" className="flex items-center gap-4 group" aria-label="Call us at (831) 345-8935">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">(831) 345-8935</div>
                </div>
              </a>

              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-4 group" aria-label="Email us at info@tribecodeai.com">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">info@tribecodeai.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4" aria-label="Located in Santa Cruz, California">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">Location</div>
                  <div className="text-lg font-display font-bold text-[var(--text-primary)]">Santa Cruz, CA</div>
                </div>
              </div>
            </address>

            <div className="space-y-3">
              {valueProps.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Application Received</h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  We'll review your details and reach out within 24 hours to schedule your discovery call.
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
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-1">Qualification Form</h3>
                  <p className="text-[var(--text-muted)] text-sm">Tell us about your needs for a targeted solution.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-firstName">First Name *</Label>
                    <Input id="contact-firstName" placeholder="John" required autoComplete="given-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-lastName">Last Name *</Label>
                    <Input id="contact-lastName" placeholder="Smith" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-business">Business Name *</Label>
                  <Input id="contact-business" placeholder="Smith Plumbing Co." required autoComplete="organization" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone *</Label>
                    <Input id="contact-phone" type="tel" placeholder="(831) 555-0123" required autoComplete="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" placeholder="john@example.com" required autoComplete="email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-industry">Industry *</Label>
                  <Select required>
                    <SelectTrigger id="contact-industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing / HVAC</SelectItem>
                      <SelectItem value="contractor">General Contractor</SelectItem>
                      <SelectItem value="salon">Salon / Spa</SelectItem>
                      <SelectItem value="auto">Auto Services</SelectItem>
                      <SelectItem value="restaurant">Restaurant / Food</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-challenge">Biggest Challenge *</Label>
                  <Select required>
                    <SelectTrigger id="contact-challenge">
                      <SelectValue placeholder="Main pain point" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="missed-calls">Missing calls / leads</SelectItem>
                      <SelectItem value="followup">Poor follow-up</SelectItem>
                      <SelectItem value="scheduling">Scheduling chaos</SelectItem>
                      <SelectItem value="no-shows">No-shows</SelectItem>
                      <SelectItem value="admin">Too much admin</SelectItem>
                      <SelectItem value="website">Website not converting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Get Your Free ROI Analysis
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-[var(--text-muted)] text-xs text-center">
                  Your information is secure and used only to contact you about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
