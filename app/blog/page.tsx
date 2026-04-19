import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-12">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">Thoughts & Insights</p>
        <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4rem)] leading-[1.1] text-[#1C2B3A] mb-5 max-w-2xl">
          Tech for everyone.<br />Written by students.
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg max-w-xl leading-relaxed mb-6">
          We write about technology, coding, and the future of education — to inform, inspire, and push back on the idea that tech is only for the privileged few.
        </p>
        <Link
          href="https://codewithpurpose.substack.com"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1C2B3A]/60 hover:text-[#1C2B3A] transition-colors"
        >
          Open full Substack <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* Subscribe embed + why we write */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — Substack embed */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1C2B3A]/40 mb-4">Subscribe</p>
          <h2 className="font-serif text-2xl text-[#1C2B3A] mb-6 leading-snug">
            Get new posts straight to your inbox
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[#E8DDD6] shadow-sm">
            <iframe
              src="https://codewithpurpose.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: "none", background: "white", display: "block" }}
              frameBorder="0"
              scrolling="no"
            />
          </div>
          <p className="text-[#1C2B3A]/40 text-xs mt-3">No spam. Unsubscribe any time.</p>
        </div>

        {/* Right — why we write */}
        <div className="space-y-8 pt-2">
          <p className="text-xs uppercase tracking-[0.15em] text-[#1C2B3A]/40">What we write about</p>
          {[
            {
              num: "01",
              title: "Technology & Society",
              body: "How AI, automation, and the internet are reshaping opportunity — and what that means for the next generation.",
            },
            {
              num: "02",
              title: "Learning to Code",
              body: "Honest tutorials, tips, and project ideas from students who've been exactly where you are.",
            },
            {
              num: "03",
              title: "Education Access",
              body: "Stories and perspectives on why free, open education is one of the most important problems of our time.",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <p className="text-[#1C2B3A]/20 text-sm font-medium pt-0.5 flex-shrink-0">{item.num}</p>
              <div>
                <p className="font-serif text-lg text-[#1C2B3A] mb-1">{item.title}</p>
                <p className="text-[#1C2B3A]/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-[#1C2B3A] px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <p className="font-serif text-2xl text-[#FDF4EE] mb-1">Want to write with us?</p>
            <p className="text-[#FDF4EE]/55 text-sm">We welcome student contributors. Join the team.</p>
          </div>
          <div className="flex gap-3 md:ml-auto flex-shrink-0">
            <Link
              href="/join"
              className="flex items-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Join Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://codewithpurpose.substack.com"
              target="_blank"
              className="flex items-center gap-2 border border-[#FDF4EE]/30 text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#FDF4EE]/60 transition-colors"
            >
              Read on Substack
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
