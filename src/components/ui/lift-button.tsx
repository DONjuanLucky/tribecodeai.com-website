"use client"

import React, { forwardRef } from "react"

interface LiftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: "primary" | "glass"
}

/**
 * Simple lift-on-hover button — no cursor tracking.
 * Rises 4px on hover with a deeper shadow, snaps back cleanly.
 * variant="primary" → solid accent bg
 * variant="glass"   → liquid glass (backdrop blur + border)
 */
export const LiftButton = forwardRef<HTMLButtonElement, LiftButtonProps>(
    function LiftButton({ children, className = "", variant = "primary", ...props }, ref) {
        const base = [
            "inline-flex items-center justify-center gap-3",
            "font-display font-bold cursor-pointer select-none",
            "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "hover:-translate-y-1.5 active:translate-y-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        ].join(" ")

        const variants = {
            primary: [
                "px-8 py-4 rounded-xl text-white text-lg",
                "bg-[var(--accent)] hover:bg-[var(--accent-hover,#e85e28)]",
                "shadow-[0_4px_24px_rgba(255,107,53,0.35)]",
                "hover:shadow-[0_12px_36px_rgba(255,107,53,0.5)]",
            ].join(" "),
            glass: [
                "px-6 py-4 rounded-full text-base",
                "bg-[rgba(255,255,255,0.06)] backdrop-blur-md",
                "border border-[rgba(255,255,255,0.12)]",
                "hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(245,158,11,0.5)]",
                "text-[var(--text-secondary)] hover:text-[var(--amber)]",
                // Liquid glass shine on hover via background
                "relative overflow-hidden",
                "before:content-[''] before:absolute before:inset-0",
                "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,transparent_50%)]",
                "before:opacity-0 hover:before:opacity-100",
                "before:transition-opacity before:duration-300",
                "shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
                "hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]",
            ].join(" "),
        }

        return (
            <button
                ref={ref}
                className={`${base} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)
