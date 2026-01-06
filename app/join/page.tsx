import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Sparkles, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-green-50 font-light tracking-tight antialiased">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


                    <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6">Join Our Mission</h1>
                    <p className="text-xl text-green-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Ready to make a difference? Fill out the form below to get started with CodeWithPurpose. We can't wait to have you on board!
                    </p>
                </div>
            </section>

            {/* Form Container */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full">
                        {/* The Form */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-[800px] flex items-center justify-center">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSds7PfwABn6UvSnUP_P_AW5EZ4vx74k98YOJw0K0fTAZMzIGw/viewform?embedded=true"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                className="w-full h-full"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
