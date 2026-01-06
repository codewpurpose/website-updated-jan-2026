import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { TeamNotePopup } from "@/components/team-note-popup"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "CodeWithPurpose - Learn to Code While Changing Lives",
  description:
    "Join our unique coding bootcamp where every course helps fund local charities. Learn Python, web development, and more while making a real impact in your community.",
  icons: {
    icon: "/codewp-logo.png",
    shortcut: "/codewp-logo.png",
    apple: "/codewp-logo.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-light antialiased tracking-tight`}>
        {children}
        <TeamNotePopup />
      </body>
    </html>
  )
}
