"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
    onClick?: () => void
}

/**
 * Magnetic button: subtly follows the cursor on hover.
 * Adds premium feel to CTAs. Pure transform — GPU accelerated.
 */
export function MagneticButton({
    children,
    className = "",
    strength = 0.3,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)
    const [transform, setTransform] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * strength
        const deltaY = (e.clientY - centerY) * strength
        setTransform({ x: deltaX, y: deltaY })
    }

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 })
    }

    return (
        <button
            ref={ref}
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
                transition: transform.x === 0 ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            }}
        >
            {children}
        </button>
    )
}
