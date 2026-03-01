"use client"

import { Star, Quote } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { CountUp } from "@/components/ui/count-up"

const testimonials = [
    {
        quote:
            "We used to miss 4–5 calls a day. TribeCode's AI voice agent now answers every single one — nights, weekends, doesn't matter. We booked $18k in new jobs in the first month.",
        name: "Marcus Rodriguez",
        business: "Coastal Flow Plumbing",
        location: "Capitola, CA",
        type: "Plumbing & Drain",
        rating: 5,
        initial: "C",
        result: "+$18k first month",
    },
    {
        quote:
            "I was skeptical — I thought it would sound robotic and scare clients off. It doesn't. My front desk used to spend 3 hours a day on the phone. Now she focuses on the clients in the chair.",
        name: "Priya Sharma",
        business: "Pacific Edge Salons",
        location: "Scotts Valley, CA",
        type: "Hair & Beauty",
        rating: 5,
        initial: "P",
        result: "3hrs/day saved",
    },
    {
        quote:
            "The follow-up automation alone paid for everything. We were losing leads who never heard back within 24 hours. Now they get a text in under 2 minutes and we close 40% more estimates.",
        name: "Derek Callahan",
        business: "Santa Cruz Custom Builds",
        location: "Santa Cruz, CA",
        type: "General Contractor",
        rating: 5,
        initial: "S",
        result: "+40% closed estimates",
    },
]

export function Testimonials() {
    useReveal()

    return (
        <section
            id="testimonials"
            className="py-32 relative overflow-hidden"
            aria-labelledby="testimonials-heading"
        >
            {/* Subtle warmth */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, var(--amber), transparent 70%)" }}
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 max-w-3xl reveal">
                    <span className="text-[var(--accent)] font-mono text-sm tracking-[0.15em] uppercase mb-4 block">
                        Local Results
                    </span>
                    <h2
                        id="testimonials-heading"
                        className="text-4xl md:text-5xl font-display font-extrabold text-[var(--text-primary)] leading-[1.05]"
                    >
                        Santa Cruz businesses that stopped
                        <br />
                        <span className="text-accent-gradient">leaving money on the table.</span>
                    </h2>
                </div>

                {/* Liquid glass testimonial cards */}
                <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
                    {testimonials.map((t) => (
                        <div
                            key={t.business}
                            className="glass-card group cursor-default flex flex-col"
                        >
                            <div className="relative z-10 p-8 flex flex-col h-full">
                                {/* Result badge */}
                                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/20">
                                    <span className="text-[var(--accent)] text-xs font-medium">{t.result}</span>
                                </div>

                                {/* Coral quote mark */}
                                <Quote
                                    className="w-10 h-10 text-[var(--accent)] mb-5 opacity-70 fill-[var(--accent)]"
                                    strokeWidth={0}
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star
                                            key={j}
                                            className="w-4 h-4 text-[var(--amber)] fill-[var(--amber)]"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <blockquote className="flex-1 text-[var(--text-secondary)] leading-relaxed text-base mb-8 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                {/* Attribution */}
                                <footer className="flex items-center gap-4 pt-6 border-t border-[var(--glass-border)]">
                                    <div className="w-11 h-11 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                                        <span className="text-[var(--accent)] group-hover:text-white font-display font-bold text-sm transition-colors duration-300">
                                            {t.initial}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[var(--text-primary)] font-semibold text-sm">{t.name}</p>
                                        <p className="text-[var(--accent)] text-sm font-medium">{t.business}</p>
                                        <p className="text-[var(--text-muted)] text-xs mt-0.5">
                                            {t.type} · {t.location}
                                        </p>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats bar with animated counters */}
                <div className="mt-16 pt-12 border-t border-[var(--border)] grid grid-cols-3 gap-8 text-center reveal">
                    <div>
                        <p className="text-3xl font-display font-extrabold text-[var(--accent)] mb-1">
                            4.9★
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">Average client rating</p>
                    </div>
                    <div>
                        <p className="text-3xl font-display font-extrabold text-[var(--accent)] mb-1">
                            {"< 2 min"}
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">Lead response time</p>
                    </div>
                    <div>
                        <p className="text-3xl font-display font-extrabold text-[var(--accent)] mb-1">
                            <CountUp end={40} suffix="%" duration={1800} />
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">More closed estimates</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
