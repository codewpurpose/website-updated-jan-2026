"use client"

import { useEffect, useState } from "react"

interface NumberTickerProps {
    value: number
    duration?: number
    className?: string
    suffix?: string
}

export function NumberTicker({
    value,
    duration = 2000,
    className = "",
    suffix = "",
}: NumberTickerProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTimestamp: number | null = null
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
                window.requestAnimationFrame(step)
            }
        }
        window.requestAnimationFrame(step)
    }, [value, duration])

    return (
        <span className={className}>
            {count}
            {suffix}
        </span>
    )
}
