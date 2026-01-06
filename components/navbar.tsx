"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/codewp-logo.png" alt="CodeWithPurpose Logo" width={32} height={32} className="w-8 h-8" />
                            <span className="text-xl font-medium text-gray-800 tracking-tight">CodeWithPurpose</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/programs" className="text-gray-700 hover:text-green-800 transition-colors font-light">
                            Programs
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-green-800 transition-colors font-light">
                            About
                        </Link>
                        <Link href="/donate" className="text-gray-700 hover:text-green-800 transition-colors font-light">
                            Donate
                        </Link>
                        <Link href="/#impact" className="text-gray-700 hover:text-green-800 transition-colors font-light">
                            Impact
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-green-800 transition-colors font-light">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <Button className="bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                            <Link href="/join">Join Our Mission</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-green-800 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link
                            href="/programs"
                            className="block px-3 py-2 text-base font-light text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Programs
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-base font-light text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/donate"
                            className="block px-3 py-2 text-base font-light text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Donate
                        </Link>
                        <Link
                            href="/#impact"
                            className="block px-3 py-2 text-base font-light text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Impact
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 text-base font-light text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="pt-2">
                            <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                                <Link href="/join" onClick={() => setIsMenuOpen(false)}>Join Our Mission</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
