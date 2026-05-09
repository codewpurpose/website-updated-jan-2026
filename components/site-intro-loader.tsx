"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const SESSION_KEY = "cwp-site-intro-seen"

/** Full-viewport intro: `<` `>` bracket in, then heart logo fills. Once per session; respects reduced motion. */
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
      if (window.sessionStorage.getItem(SESSION_KEY)) {
        return () => {}
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        try {
          window.sessionStorage.setItem(SESSION_KEY, "1")
        } catch {
          /* ignore */
        }
        return () => {}
      }
    } catch {
      /* ignore */
    }

    setShow(true)

    exitTimer = window.setTimeout(() => setExiting(true), 1250)
    doneTimer = window.setTimeout(() => {
      setShow(false)
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1")
      } catch {
        /* ignore */
      }
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
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        <span
          className={cn(
            "font-mono text-[clamp(2rem,8vw,3.25rem)] font-light leading-none text-navy",
            "cwp-intro-bracket-left"
          )}
        >
          &lt;
        </span>

        <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0">
          <Image
            src="/codewp-logo.png"
            alt=""
            width={64}
            height={64}
            className="h-full w-full object-contain opacity-[0.22] saturate-[0.85]"
            priority
          />
          <div
            className="absolute inset-0 overflow-hidden cwp-intro-heart-fill"
            aria-hidden
          >
            <Image
              src="/codewp-logo.png"
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>

        <span
          className={cn(
            "font-mono text-[clamp(2rem,8vw,3.25rem)] font-light leading-none text-navy",
            "cwp-intro-bracket-right"
          )}
        >
          &gt;
        </span>
      </div>
    </div>
  )
}
