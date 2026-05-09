"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-warm-border/80 bg-cream/80 backdrop-blur-md supports-[backdrop-filter]:bg-cream/70">
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[4.25rem]">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2.5 rounded-md outline-none",
              "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            )}
          >
            <Image
              src="/codewp-logo.png"
              alt="CodeWithPurpose home"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-serif text-lg text-navy tracking-tight">
              CodeWithPurpose
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = navLinkActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-full text-[15px] transition-colors duration-200 outline-none",
                    "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                    active
                      ? "text-navy font-semibold bg-navy/[0.06]"
                      : "text-navy/70 hover:text-navy hover:bg-navy/[0.04]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="brand"
              className="rounded-full h-10 px-5 text-[14px] font-semibold shadow-none"
            >
              <Link href="/donate">Donate now</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className={cn(
              "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-navy",
              "outline-none focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            )}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-warm-border/80 bg-cream pb-4 animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-0.5 pt-2">
              {navItems.map((item) => {
                const active = navLinkActive(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-3 text-[15px] outline-none transition-colors",
                      "focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                      active
                        ? "bg-navy/[0.07] text-navy font-semibold"
                        : "text-navy/75 hover:bg-navy/[0.04] hover:text-navy"
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
                  className="w-full rounded-full h-12 text-[15px] font-semibold"
                >
                  <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                    Donate now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
