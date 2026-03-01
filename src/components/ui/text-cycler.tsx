"use client"

import { useState, useEffect, useCallback } from "react"

interface TextCyclerProps {
    words: string[]
    interval?: number
    className?: string
}

/**
 * Premium text cycling component.
 * Smooth slide + fade animation to cycle through an array of words.
 * The first word shows immediately — no blank flash on mount.
 */
export function TextCycler({ words, interval = 3000, className = "" }: TextCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    const cycle = useCallback(() => {
        // Fade out
        setVisible(false)
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length)
            // Fade back in
            setVisible(true)
        }, 380)
    }, [words.length])

    useEffect(() => {
        const timer = setInterval(cycle, interval)
        return () => clearInterval(timer)
    }, [cycle, interval])

    return (
        <span
            className={`inline-block ${className}`}
            style={{
                // Never let this element collapse — always shows the text width
                minWidth: "4ch",
                transition: "opacity 380ms ease, transform 380ms ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-12px)",
            }}
        >
            {words[currentIndex]}
        </span>
    )
}
