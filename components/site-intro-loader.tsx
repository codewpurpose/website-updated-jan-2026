"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/** Full-viewport intro: `<` `>` bracket in, then heart fills. Respects reduced motion. */
export function SiteIntroLoader() {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let exitTimer: ReturnType<typeof setTimeout> | undefined
    let doneTimer: ReturnType<typeof setTimeout> | undefined

    try {
      if (typeof window === "undefined") {
        return () => {}
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return () => {}
      }
    } catch {
      /* ignore */
    }

    setShow(true)

    exitTimer = window.setTimeout(() => setExiting(true), 1250)
    doneTimer = window.setTimeout(() => {
      setShow(false)
    }, 1580)

    return () => {
      if (exitTimer !== undefined) window.clearTimeout(exitTimer)
      if (doneTimer !== undefined) window.clearTimeout(doneTimer)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-cream",
        "transition-opacity duration-300 ease-out motion-reduce:transition-none",
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <span
          className={cn(
            "font-mono text-[clamp(2.9rem,11vw,5rem)] font-light leading-none text-navy",
            "cwp-intro-bracket-left"
          )}
        >
          &lt;
        </span>

        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28">
          <span
            className="select-none font-serif text-[clamp(3rem,10vw,5.2rem)] leading-none text-navy/20"
            aria-hidden
          >
            ♥
          </span>
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden cwp-intro-heart-fill"
            aria-hidden
          >
            <span className="select-none font-serif text-[clamp(3rem,10vw,5.2rem)] leading-none text-navy">
              ♥
            </span>
          </div>
        </div>

        <span
          className={cn(
            "font-mono text-[clamp(2.9rem,11vw,5rem)] font-light leading-none text-navy",
            "cwp-intro-bracket-right"
          )}
        >
          &gt;
        </span>
      </div>
    </div>
  )
}
