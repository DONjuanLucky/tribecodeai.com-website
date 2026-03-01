"use client"

import { useEffect, useRef } from "react"

/**
 * Lightweight IntersectionObserver hook that adds the CSS class .visible
 * to any element with .reveal or .reveal-stagger, triggering CSS transitions.
 * Much lighter than Framer Motion — no JS animation engine, zero JS per-frame cost.
 */
export function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")
                        observer.unobserve(entry.target) // once only
                    }
                })
            },
            { rootMargin: "-60px 0px", threshold: 0.1 }
        )

        const targets = document.querySelectorAll(".reveal, .reveal-stagger")
        targets.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
