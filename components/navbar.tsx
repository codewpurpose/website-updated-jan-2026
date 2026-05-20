"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/join", label: "Join Us" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

function navLinkActive(pathname: string, href: string) {
  if (href === "/courses") {
    return pathname === "/courses" || pathname.startsWith("/courses/")
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const frameRef = useRef<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max)

    const update = () => {
      frameRef.current = null
      setScrollProgress(clamp(window.scrollY / 72, 0, 1))
    }

    const onScroll = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const lerp = (from: number, to: number) =>
    from + (to - from) * scrollProgress

  const shellMaxWidth = `${lerp(1600, 1080)}px`
  const shellHeight = `${lerp(110, 74)}px`
  const shellPaddingX = `${lerp(20, 32)}px`
  const shellBorderAlpha = 0.08 + scrollProgress * 0.02
  const shellBackgroundAlpha = 0.52 + scrollProgress * 0.26
  const shellShadowAlpha = 0.14 + scrollProgress * 0.1
  const supportsBackgroundAlpha = 0.38 + scrollProgress * 0.28
  const navTrackMaxWidth = `${lerp(860, 620)}px`
  const shellShadow = `0 18px 45px -28px rgba(15,23,42,${shellShadowAlpha})`
  const shellBackground = `rgba(255,255,255,${shellBackgroundAlpha})`
  const supportsBackground = `rgba(255,255,255,${supportsBackgroundAlpha})`
  const shellBorder = `rgba(0,0,0,${shellBorderAlpha})`

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav aria-label="Primary" className="mx-auto max-w-[1600px]">
        <div className="mx-auto" style={{ maxWidth: shellMaxWidth }}>
          <div
            className="flex items-center justify-between gap-4 rounded-[2rem] border supports-[backdrop-filter]:backdrop-blur-xl"
            style={{
              height: shellHeight,
              paddingLeft: shellPaddingX,
              paddingRight: shellPaddingX,
              borderColor: shellBorder,
              backgroundColor: shellBackground,
              boxShadow: shellShadow,
            }}
          >
            <Link
              href="/"
              className={cn(
                "flex min-w-0 items-center gap-4 rounded-full outline-none",
                "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              )}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/8 bg-white shadow-[0_10px_28px_-18px_rgba(15,23,42,0.28)]">
                <Image
                  src="/codewp-logo.png"
                  alt="CodeWithPurpose home"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </span>
              <span className="flex min-w-0 flex-col leading-none">
                <span className="truncate font-serif text-[1.12rem] tracking-tight text-navy sm:text-[1.2rem]">
                  CodeWithPurpose
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-navy/36 sm:text-[0.78rem]">
                  Student-run nonprofit
                </span>
              </span>
            </Link>

            <div className="hidden md:flex min-w-0 flex-1 items-center justify-center px-2">
              <div
                className="flex w-full items-center gap-1 rounded-full border border-black/7 bg-white/72 p-1"
                style={{ maxWidth: navTrackMaxWidth }}
              >
                {navItems.map((item) => {
                  const active = navLinkActive(pathname, item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex-1 rounded-full px-3 py-2 text-center text-[14px] outline-none transition-all duration-200",
                        "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                        active
                          ? "bg-navy text-cream font-semibold shadow-[0_10px_22px_-14px_rgba(15,23,42,0.75)]"
                          : "text-navy/66 hover:bg-black/[0.045] hover:text-navy"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <Button
                asChild
                variant="brand"
                className="h-11 rounded-full px-6 text-[14px] font-semibold shadow-[0_16px_38px_-20px_rgba(15,23,42,0.55)]"
              >
                <Link href="/donate">Donate now</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-navy md:hidden",
                "outline-none focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              )}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div
              id="mobile-nav"
              className="animate-in slide-in-from-top-2 mt-3 rounded-[1.6rem] border border-black/8 bg-white/88 p-4 duration-200 supports-[backdrop-filter]:bg-white/78 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = navLinkActive(pathname, item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-[15px] outline-none transition-colors",
                        "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                        active
                          ? "border-navy/15 bg-navy text-cream font-semibold"
                          : "border-black/8 bg-white/80 text-navy/75 hover:bg-navy/[0.04] hover:text-navy"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="pt-3">
                  <Button
                    asChild
                    variant="brand"
                    className="h-12 w-full rounded-full text-[15px] font-semibold"
                  >
                    <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                      Donate now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
      <style jsx>{`
        @supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
          nav > div > div {
            background-color: ${supportsBackground};
          }
        }
      `}</style>
    </header>
  )
}
