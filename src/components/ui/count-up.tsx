"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
    end: number
    prefix?: string
    suffix?: string
    duration?: number
    className?: string
}

/**
 * Animated counter that counts up when it enters view.
 * Uses IntersectionObserver + requestAnimationFrame for smooth counting.
 */
export function CountUp({
    end,
    prefix = "",
    suffix = "",
    duration = 2000,
    className = "",
}: CountUpProps) {
    const [value, setValue] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return
        const start = performance.now()

        const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, [hasStarted, end, duration])

    return (
        <span ref={ref} className={className}>
            {prefix}{value}{suffix}
        </span>
    )
}
