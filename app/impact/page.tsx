import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"

const stats = [
  { number: "2,000+", label: "Students", sub: "Taught worldwide" },
  { number: "110+",   label: "Countries", sub: "Reached globally" },
  { number: "Free",   label: "Always",    sub: "Zero cost. Forever." },
]

const timeline = [
  { year: "2022", event: "CodeWithPurpose founded by high school students frustrated by $15k bootcamps" },
  { year: "2023", event: "First Python course launched on Udemy; reached students in 50+ countries" },
  { year: "2024", event: "Expanded to 110+ countries; launched Vibecoding 101 and Machine Learning series; recognized by Rep. Mark DeSaulnier" },
  { year: "2025", event: "2,000+ students taught; Financial Literacy added; featured in Danville San Ramon newspaper" },
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-12">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">By the numbers</p>
        <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4rem)] leading-[1.1] text-[#1C2B3A] mb-4 max-w-2xl">
          The impact of free education
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg max-w-xl leading-relaxed">
          Every enrollment, every student, every country — here&apos;s what happens when knowledge is free.
        </p>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* 3 Stats */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-3 gap-px bg-[#E8DDD6] rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#FDF4EE] p-10 flex flex-col">
              <p className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] text-[#1C2B3A] leading-none mb-3">{s.number}</p>
              <p className="text-[#1C2B3A] text-base font-medium mb-1">{s.label}</p>
              <p className="text-[#1C2B3A]/45 text-sm">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognitions */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#1C2B3A] mb-8">Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">

          {/* Mark DeSaulnier */}
          <Link
            href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing"
            target="_blank"
            className="group bg-[#1C2B3A] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-44 overflow-hidden">
              <Image
                src="/HOR.png"
                alt="U.S. House of Representatives recognition letter"
                width={600}
                height={176}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8 flex items-start justify-between gap-4">
              <div>
                <p className="font-serif text-xl text-[#FDF4EE] mb-2">U.S. House of Representatives</p>
                <p className="text-[#FDF4EE]/65 text-sm leading-relaxed">
                  Representative <span className="text-[#FDF4EE]/90 font-medium">Mark DeSaulnier</span> honored CodeWithPurpose for our commitment to making free, accessible coding education available to students worldwide.
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#FDF4EE]/30 group-hover:text-[#FDF4EE]/70 transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>

          {/* Danville Newspaper */}
          <Link
            href="https://www.danvillesanramon.com/letters-to-the-editor/2026/03/13/letters-main-street-revitalization-keep-bart-running-codewithpurpose-pfas-questions-need-answers-aspiregen/"
            target="_blank"
            className="group bg-white rounded-2xl border border-[#E8DDD6] hover:border-[#1C2B3A]/30 transition-colors overflow-hidden flex flex-col"
          >
            <div className="h-44 overflow-hidden bg-[#E0D8D0]">
              <Image
                src="/DanvillSanRamon.png"
                alt="Danville San Ramon newspaper feature"
                width={600}
                height={176}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-serif text-lg text-[#1C2B3A] mb-1">Featured in Danville San Ramon</p>
                <p className="text-[#1C2B3A]/55 text-sm leading-relaxed">
                  CodeWithPurpose featured in the Danville San Ramon newspaper — March 2026.
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#1C2B3A]/30 group-hover:text-[#1C2B3A]/60 transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>

        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-[#E8DDD6] max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#1C2B3A] mb-12">Our journey</h2>
        <div className="relative">
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-[#E8DDD6]" />
          <div className="space-y-10">
            {timeline.map((t) => (
              <div key={t.year} className="flex items-start gap-8">
                <div className="w-[60px] flex-shrink-0 text-right">
                  <span className="font-serif text-base text-[#1C2B3A]/40">{t.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-3 h-3 rounded-full bg-[#1C2B3A] border-2 border-[#FDF4EE] ring-1 ring-[#1C2B3A]" />
                  <p className="text-[#1C2B3A]/70 leading-relaxed pl-4">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-[#1C2B3A] px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <p className="font-serif text-2xl text-[#FDF4EE] mb-1">Help us reach the next 2,000.</p>
            <p className="text-[#FDF4EE]/55 text-sm">Every dollar keeps education free for another student.</p>
          </div>
          <div className="flex gap-3 md:ml-auto flex-shrink-0">
            <Link
              href="/donate"
              className="flex items-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Donate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/join"
              className="flex items-center gap-2 border border-[#FDF4EE]/30 text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#FDF4EE]/60 transition-colors"
            >
              Join Us
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
