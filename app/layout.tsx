import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Display, DM_Sans } from "next/font/google"
import "./globals.css"

import { SiteIntroLoader } from "@/components/site-intro-loader"
import { TeamNotePopup } from "@/components/team-note-popup"

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CodeWithPurpose — Free Education for Every Student, Everywhere",
  description:
    "A student-run nonprofit building free coding courses for students across 110+ countries. We believe education is a right, not a privilege.",
  icons: {
    icon: "/codewp-logo.png",
    shortcut: "/codewp-logo.png",
    apple: "/codewp-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteIntroLoader />
        {children}
        <TeamNotePopup />
      </body>
    </html>
  )
}
