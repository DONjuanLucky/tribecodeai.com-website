"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, Building2, Users, DollarSign, Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitted(true)
      }
    })
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Fill out the qualification form. We'll review your needs and schedule a targeted 
              discovery call to discuss your custom solution and ROI.
            </p>

            <div className="space-y-6 mb-12">
              <a href="tel:+18313458935" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Us</div>
                  <div className="text-lg font-bold text-white">(831) 345-8935</div>
                </div>
              </a>

              <a href="mailto:info@tribecodeai.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Us</div>
                  <div className="text-lg font-bold text-white">info@tribecodeai.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="text-lg font-bold text-white">Santa Cruz, CA</div>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="space-y-4">
              {[
                "Free qualification & ROI analysis",
                "No pressure consultation",
                "Custom solution roadmap",
                "Transparent pricing",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Application Received</h3>
                <p className="text-slate-400 mb-6">
                  We'll review your qualification and reach out within 24 hours to schedule your discovery call.
                </p>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Qualification Form</h3>
                  <p className="text-slate-400 text-sm">Help us understand your needs for a targeted solution.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Name *</Label>
                  <Input id="business" placeholder="Smith Plumbing Co." required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="(831) 555-0123" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select required>
                    <SelectTrigger>
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
                  <Label htmlFor="employees">Company Size *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-20">6-20 employees</SelectItem>
                      <SelectItem value="21-50">21-50 employees</SelectItem>
                      <SelectItem value="50+">50+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="revenue">Annual Revenue *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500k">Under $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m+">$5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">Biggest Challenge *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="What's your main pain point?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="missed-calls">Missing calls / leads</SelectItem>
                      <SelectItem value="followup">Poor follow-up system</SelectItem>
                      <SelectItem value="scheduling">Scheduling chaos</SelectItem>
                      <SelectItem value="no-shows">No-shows / cancellations</SelectItem>
                      <SelectItem value="admin">Too much admin work</SelectItem>
                      <SelectItem value="website">Website not converting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Investment Budget *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-3k">$1K - $3K</SelectItem>
                      <SelectItem value="3k-5k">$3K - $5K</SelectItem>
                      <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                      <SelectItem value="10k+">$10K+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="researching">Just researching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Input id="message" placeholder="Tell us more about your specific needs..." />
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isPending}>
                  {isPending ? (
                    <>
                      Submitting...
                      <Loader2 className="w-4 h-4 animate-spin ml-2" />
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-slate-500 text-xs text-center">
                  We respect your privacy. Your information is secure and will only be used to contact you about your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
