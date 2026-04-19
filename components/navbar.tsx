"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-[#FDF4EE] sticky top-0 z-40 border-b border-[#E8DDD6]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src="/codewp-logo.png" alt="CodeWithPurpose" width={28} height={28} className="w-7 h-7" />
                        <span className="font-serif text-lg text-navy tracking-tight">CodeWithPurpose</span>
                    </Link>

                    {/* Desktop Navigation — centered */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/courses" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            Courses
                        </Link>
                        <Link href="/about" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            About Us
                        </Link>
                        <Link href="/join" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            Join Us
                        </Link>
                        <Link href="/impact" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            Impact
                        </Link>
                        <Link href="/blog" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-[15px] text-navy/70 hover:text-navy transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop CTA — dark pill */}
                    <div className="hidden md:flex">
                        <Link
                            href="/donate"
                            className="flex items-center gap-2 bg-navy text-[#FDF4EE] text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-navy-light transition-colors"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FDF4EE]"></span>
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-navy"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#FDF4EE] border-t border-[#E8DDD6] absolute w-full left-0 shadow-lg">
                    <div className="px-6 py-4 space-y-1">
                        {[
                            { href: "/courses", label: "Courses" },
                            { href: "/about", label: "About Us" },
                            { href: "/join", label: "Join Us" },
                            { href: "/impact", label: "Impact" },
                            { href: "/blog", label: "Blog" },
                            { href: "/contact", label: "Contact" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2.5 text-navy/70 hover:text-navy transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-3">
                            <Link
                                href="/donate"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-navy text-[#FDF4EE] text-sm font-medium px-5 py-3 rounded-full w-full"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FDF4EE]"></span>
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
