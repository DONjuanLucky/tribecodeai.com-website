"use client"

import { Check, ArrowRight, Star, MessageSquareText, Phone, Bot } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useReveal } from "@/hooks/useReveal"

const tiers = [
    {
        name: "Review Agent",
        price: "$100",
        period: "/month",
        description:
            "AI-powered reputation management. Every incoming review gets a thoughtful, on-brand response — automatically.",
        icon: MessageSquareText,
        accent: false,
        features: [
            "Monitors all incoming reviews",
            "Auto-responds in your brand voice",
            "Sentiment analysis dashboard",
            "Review data & trend reports",
            "Works across Google, Yelp, & more",
            "Response tone customization",
        ],
        cta: "Start Managing Reviews",
        note: null,
    },
    {
        name: "Voice Agent",
        price: "Custom",
        period: "",
        description:
            "An AI receptionist that answers calls, qualifies leads, and books appointments — 24/7, with natural-sounding conversation.",
        icon: Phone,
        accent: true,
        features: [
            "24/7 live call answering",
            "Lead qualification & scoring",
            "Appointment scheduling",
            "Custom conversation flows",
            "CRM & calendar integrations",
            "Call recordings & transcripts",
        ],
        cta: "Get a Custom Quote",
        note: "Pricing based on call volume & functionality",
    },
    {
        name: "Full Service Agent",
        price: "Custom",
        period: "",
        description:
            "A complete digital employee — handles calls, reviews, follow-ups, scheduling, and more. Your all-in-one AI team member.",
        icon: Bot,
        accent: false,
        features: [
            "Everything in Voice Agent",
            "Everything in Review Agent",
            "Automated lead follow-up",
            "Payment & invoice reminders",
            "Multi-channel communication",
            "Custom workflow automation",
        ],
        cta: "Let's Design Your Agent",
        note: "Scoped per business — we'll build exactly what you need",
    },
]

export function Pricing() {
    useReveal()

    return (
        <section id="pricing" className="py-32 relative overflow-hidden" aria-labelledby="pricing-heading">
            {/* Warm glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, var(--amber), transparent 70%)" }}
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 max-w-3xl reveal">
                    <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
                        Simple Pricing
                    </span>
                    <h2
                        id="pricing-heading"
                        className="text-4xl md:text-5xl font-display font-extrabold text-[var(--text-primary)] leading-[1.05] mb-4"
                    >
                        Solutions that fit
                        <br />
                        <span className="text-accent-gradient">your business, not ours.</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        Transparent pricing with no hidden fees. Start small or go all-in — every plan includes setup, training, and ongoing support.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`glass-card group flex flex-col cursor-default ${tier.accent ? "ring-1 ring-[var(--accent)]/30" : ""
                                }`}
                        >
                            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                                {/* Popular badge for accent tier */}
                                {tier.accent && (
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] transition-colors duration-300">
                                    <tier.icon className="w-6 h-6 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                                    {tier.name}
                                </h3>

                                {/* Price */}
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-display font-extrabold text-[var(--text-primary)]">
                                        {tier.price}
                                    </span>
                                    {tier.period && (
                                        <span className="text-[var(--text-muted)] text-base">{tier.period}</span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                    {tier.description}
                                </p>

                                {/* Note for custom pricing */}
                                {tier.note && (
                                    <p className="text-xs text-[var(--amber)] font-mono mb-6 px-3 py-2 rounded-lg bg-[var(--amber)]/5 border border-[var(--amber)]/10">
                                        {tier.note}
                                    </p>
                                )}

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                                            <Check className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <MagneticButton
                                    className={`w-full py-3.5 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${tier.accent
                                            ? "bg-[var(--accent)] text-white btn-primary"
                                            : "bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                        }`}
                                    strength={0.15}
                                    onClick={() =>
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    {tier.cta}
                                    <ArrowRight className="w-4 h-4" />
                                </MagneticButton>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-12 text-center reveal">
                    <p className="text-[var(--text-muted)] text-sm">
                        Not sure which plan is right? <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-[var(--accent)] font-medium hover:underline cursor-pointer">Book a free call</button> and we'll map your needs together — no pressure, no sales pitch.
                    </p>
                </div>
            </div>
        </section>
    )
}
