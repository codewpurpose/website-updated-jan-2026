import Link from "next/link"
import { ArrowRight, Mail, Users, Megaphone } from "lucide-react"
import { Navbar } from "@/components/navbar"

const channels = [
  {
    icon: Mail,
    label: "Email us",
    heading: "Say hello directly",
    body: "Questions about courses, partnerships, or just want to share what you've built? We read every email personally.",
    action: "mailto:codewithpurpose2@gmail.com",
    cta: "codewithpurpose2@gmail.com",
    dark: true,
  },
  {
    icon: Users,
    label: "Volunteer",
    heading: "Join the team",
    body: "We're always looking for mentors, instructors, and builders who believe education should be free.",
    action: "/join",
    cta: "See open roles →",
    dark: false,
  },
  {
    icon: Megaphone,
    label: "Partnerships",
    heading: "Work with us",
    body: "Schools, nonprofits, companies — if you share our mission we'd love to collaborate.",
    action: "mailto:codewithpurpose2@gmail.com",
    cta: "Get in touch →",
    dark: false,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-12">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">Get in touch</p>
        <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4rem)] leading-[1.1] text-[#1C2B3A] mb-5 max-w-2xl">
          We&apos;re real people.<br />Let&apos;s talk.
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg max-w-xl leading-relaxed">
          No bots, no ticket queues. Reach out and a real human on our team will get back to you — usually within 24 hours.
        </p>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((c) => (
            <Link
              key={c.label}
              href={c.action}
              className={`group rounded-2xl p-8 flex flex-col gap-5 transition-all hover:-translate-y-1 hover:shadow-md ${
                c.dark
                  ? "bg-[#1C2B3A] text-[#FDF4EE]"
                  : "bg-white border border-[#E8DDD6] hover:border-[#1C2B3A]/20 text-[#1C2B3A]"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                c.dark ? "bg-[#FDF4EE]/10" : "bg-[#F0EAE3]"
              }`}>
                <c.icon className={`w-5 h-5 ${c.dark ? "text-[#FDF4EE]" : "text-[#1C2B3A]"}`} />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-[0.15em] mb-2 ${c.dark ? "text-[#FDF4EE]/40" : "text-[#1C2B3A]/40"}`}>
                  {c.label}
                </p>
                <p className={`font-serif text-xl leading-snug mb-3 ${c.dark ? "text-[#FDF4EE]" : "text-[#1C2B3A]"}`}>
                  {c.heading}
                </p>
                <p className={`text-sm leading-relaxed ${c.dark ? "text-[#FDF4EE]/60" : "text-[#1C2B3A]/55"}`}>
                  {c.body}
                </p>
              </div>
              <p className={`mt-auto text-sm font-medium pt-4 border-t ${
                c.dark
                  ? "border-[#FDF4EE]/10 text-[#FDF4EE]/70 group-hover:text-[#FDF4EE]"
                  : "border-[#E8DDD6] text-[#1C2B3A]/50 group-hover:text-[#1C2B3A]"
              } transition-colors`}>
                {c.cta}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* "We respond personally" strip */}
      <section className="border-t border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          {[
            { n: "24 hrs", l: "Typical response time", d: "On weekdays we aim to reply within a day." },
            { n: "Real humans", l: "No automated replies", d: "Every message goes to an actual team member." },
            { n: "Free. Always.", l: "No hidden agenda", d: "We're a nonprofit. We just want to help." },
          ].map((item) => (
            <div key={item.l}>
              <p className="font-serif text-2xl text-[#1C2B3A] mb-1">{item.n}</p>
              <p className="text-[#1C2B3A]/55 text-xs uppercase tracking-wider mb-2">{item.l}</p>
              <p className="text-[#1C2B3A]/50 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-[#1C2B3A] px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <p className="font-serif text-2xl text-[#FDF4EE] mb-1">Ready to start learning?</p>
            <p className="text-[#FDF4EE]/55 text-sm">Courses are free. No signup required.</p>
          </div>
          <div className="flex gap-3 md:ml-auto flex-shrink-0">
            <Link
              href="/courses"
              className="flex items-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Browse Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 border border-[#FDF4EE]/30 text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#FDF4EE]/60 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#1C2B3A]/35">
          <p>© {new Date().getFullYear()} CodeWithPurpose · 501(c)(3) nonprofit · Made by students, for students.</p>
          <Link href="/" className="hover:text-[#1C2B3A]/60 transition-colors">← Back to home</Link>
        </div>
      </footer>
    </div>
  )
}
