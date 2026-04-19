"use client"

import { useState } from "react"
import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TeamNotePopup() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* The Popup Content */}
            <div
                className={`bg-[#1C2B3A] text-[#FDF4EE] p-6 rounded-2xl shadow-2xl mb-4 w-[calc(100vw-3rem)] sm:w-96 transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl text-[#FDF4EE]">A Note From Our Team</h3>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#FDF4EE]/60 hover:text-[#FDF4EE] hover:bg-white/10 h-6 w-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-[#FDF4EE]/70 font-light leading-relaxed italic mb-4">
                  &ldquo;Every dollar helps us build a more inclusive future where code is a tool for good. Whether it&apos;s $5 or $500, you&apos;re helping a student start their journey today.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1C2B3A]">
                            <Image src="/shreyan.jpg" alt="Shreyan" width={32} height={32} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1C2B3A]">
                            <Image src="/samanyu.jpeg" alt="Samanyu" width={32} height={32} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className="text-[#FDF4EE]/70 text-xs">Shreyan, Samanyu &amp; Bruhatt</p>
                </div>
            </div>

            {/* The Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-[#1C2B3A] hover:bg-[#2D3F52] text-[#FDF4EE] shadow-lg flex items-center justify-center transition-transform hover:scale-105 border border-[#FDF4EE]/10"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>
        </div>
    )
}
