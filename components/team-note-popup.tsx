"use client"

import { useState } from "react"
import { Heart, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamNotePopup() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* The Popup Content */}
            <div
                className={`bg-green-800 text-white p-6 rounded-2xl shadow-2xl mb-4 w-[calc(100vw-3rem)] sm:w-96 transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium">A Note From Our Team</h3>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-100 hover:text-white hover:bg-green-700 h-6 w-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-green-100 font-light leading-relaxed italic mb-4">
                    "Every dollar helps us build a more inclusive future where code is a tool for good. Whether it's $5 or $500,
                    you're helping a student start their journey today."
                </p>
                <p className="font-medium text-sm">— Shreyan, Samanyu & Bruhatt</p>
            </div>

            {/* The Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-green-800 hover:bg-green-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>
        </div>
    )
}
