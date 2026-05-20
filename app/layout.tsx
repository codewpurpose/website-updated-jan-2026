import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { SiteIntroLoader } from "@/components/site-intro-loader"
import { TeamNotePopup } from "@/components/team-note-popup"

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteIntroLoader />
        {children}
        <TeamNotePopup />
      </body>
    </html>
  )
}
