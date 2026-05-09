import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  const team = [
    {
      name: "Shreyan Mitra",
      role: "Co-Founder",
      img: "/shreyan.jpg",
      quote: "Started coding at 14 and realized most kids couldn't access the same resources I had. That didn't sit right with me.",
      linkedin: "https://www.linkedin.com/in/shreyan-m-8910172b7/",
    },
    {
      name: "Bruhatt Rao",
      role: "Co-Founder",
      img: "/bhim.jpeg",
      quote: "Watched my cousins in India struggle to find quality tech education. Built this so no one else has to.",
      linkedin: "https://www.linkedin.com/in/bruhatt-rao/",
    },
    {
      name: "Samanyu Goyal",
      role: "Co-Founder",
      img: "/samanyu.jpeg",
      quote: "Every dollar we raise goes to education, not overhead. I make sure of that.",
      linkedin: "https://www.linkedin.com/in/samanyu-goyal/",
    },
    {
      name: "Naman Jain",
      role: "Director of Outreach",
      img: "/naman.png",
      quote: "Connecting students everywhere with the tools they need to build a better future.",
      linkedin: "https://www.linkedin.com/in/naman-jain-9276593a5/",
    },
    {
      name: "Prithvi Jai Sudharsan",
      role: "Director of Media",
      img: "/prithvi.png",
      quote: "My goal is to promote financial literacy and technology education to students worldwide.",
      linkedin: "https://www.linkedin.com/in/prithvi-jai/",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <p className="italic text-[#1C2B3A]/55 text-sm mb-5">Our Story</p>
        <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[1.1] text-[#1C2B3A] max-w-2xl mb-8">
          We're just students who got frustrated
        </h1>
        <p className="text-[#1C2B3A]/65 text-lg leading-relaxed max-w-2xl">
          Frustrated that a kid's future could be determined by their parents' bank account.
          Frustrated that knowledge was locked behind $15,000 paywalls.
          So we did something about it.
        </p>
      </section>

      {/* ── ORIGIN ── */}
      <section className="border-y border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#1C2B3A]/40 text-sm mb-4">— Since 2022</p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C2B3A] leading-snug mb-6">
              It started with a simple question
            </h2>
            <div className="space-y-4 text-[#1C2B3A]/65 leading-relaxed">
              <p><em>"Why does learning to code cost so much?"</em></p>
              <p>
                We were high school students who'd taught ourselves to code through YouTube and trial and error.
                We knew not everyone had that luxury — time, guidance, or reliable internet.
              </p>
              <p>
                The bootcamps we saw charged $10,000, $15,000, even $20,000. For what?
                Knowledge that should be free. Skills that could change someone's life.
              </p>
              <p className="text-[#1C2B3A] font-medium">
                We thought: what if we just taught people for free? What's stopping us?
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { icon: "💡", title: "The idea", body: "Create courses. Make them free. Teach anyone who wants to learn." },
              { icon: "🎥", title: "The first course", body: "Recorded in our bedrooms with basic equipment. But the content? Solid." },
              { icon: "🌍", title: "The result", body: "2,000+ students from 110+ countries — and we're just getting started." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-[#E8DDD6]">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-medium text-[#1C2B3A] mb-1">{item.title}</p>
                  <p className="text-[#1C2B3A]/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="bg-[#1C2B3A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="w-14 h-14 rounded-full bg-[#FDF4EE]/10 flex items-center justify-center flex-shrink-0 text-[#FDF4EE] text-2xl">
            ★
          </div>
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] text-[#FDF4EE] leading-snug mb-3">
              Recognized by the U.S. House of Representatives
            </h2>
            <p className="text-[#FDF4EE]/60 leading-relaxed max-w-2xl">
              Representative <span className="text-[#FDF4EE]/90 font-medium">Mark DeSaulnier</span> honored
              CodeWithPurpose for our commitment to making free, accessible coding education available to students worldwide.
              It's not about the award. It's proof that this mission matters.
            </p>
          </div>
        </div>
      </section>

      {/* ── BELIEFS ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="italic text-[#1C2B3A]/55 text-sm mb-2">What drives us</p>
        <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C2B3A] mb-14">
          This is what we stand for
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#E8DDD6]">
          {[
            {
              num: "01",
              title: "Education is a right",
              body: "Not a privilege. Not a commodity. Every person deserves access to knowledge, regardless of where they were born or how much money their parents have.",
            },
            {
              num: "02",
              title: "Students teaching students",
              body: "We're not professors in ivory towers. We're students who remember what it's like to learn for the first time. That makes us better teachers.",
            },
            {
              num: "03",
              title: "No borders for knowledge",
              body: "A student in Lagos and a student in San Francisco deserve the same opportunities. Geography shouldn't determine destiny.",
            },
          ].map((b) => (
            <div key={b.num} className="bg-[#FDF4EE] p-8 lg:p-10">
              <p className="text-[#1C2B3A]/25 text-sm font-medium mb-6">{b.num}</p>
              <h3 className="font-serif text-xl text-[#1C2B3A] mb-3">{b.title}</h3>
              <p className="text-[#1C2B3A]/60 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="border-t border-[#E8DDD6] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="italic text-[#1C2B3A]/55 text-sm mb-2">The people behind this</p>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C2B3A] mb-14">
            Real people. Real stories.
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="border border-[#E8DDD6] rounded-2xl p-7">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-5 bg-[#E0D8D0] flex items-center justify-center">
                  {member.img ? (
                    <Image src={member.img} alt={member.name} width={64} height={64} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#1C2B3A]/50 font-medium text-lg">{member.name.split(" ").map((n: string) => n[0]).join("")}</span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-[#1C2B3A]">{member.name}</p>
                  <Link href={member.linkedin} target="_blank" className="text-[#1C2B3A]/30 hover:text-[#1C2B3A]/70 transition-colors flex-shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-[#1C2B3A]/45 text-xs uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-[#1C2B3A]/65 text-sm leading-relaxed italic">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "2,000+", label: "Students" },
            { num: "110+",   label: "Countries" },
            { num: "20+",    label: "Languages Taught" },
            { num: "8,000+", label: "Minutes of Teaching" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl text-[#1C2B3A]">{s.num}</p>
              <p className="text-[#1C2B3A]/55 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="rounded-3xl bg-[#1C2B3A] px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#FDF4EE] leading-snug max-w-md">
            Want to be part of something real?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/#courses"
              className="flex items-center justify-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Start Learning Free
            </Link>
            <Link
              href="/join"
              className="flex items-center justify-center gap-2 border border-[#FDF4EE]/30 text-[#FDF4EE] text-sm font-medium px-6 py-3 rounded-full hover:border-[#FDF4EE]/60 transition-colors"
            >
              Volunteer with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <p className="font-serif text-xl text-[#1C2B3A] mb-2">CodeWithPurpose</p>
              <p className="text-[#1C2B3A]/55 text-sm leading-relaxed max-w-xs">
                A student-run nonprofit making tech education free and accessible for everyone, everywhere.
              </p>
              <p className="text-[#1C2B3A]/30 text-xs mt-4">Recognized by the U.S. House of Representatives</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1C2B3A] mb-4">Learn</p>
              <ul className="space-y-2.5 text-sm text-[#1C2B3A]/55">
                <li><Link href="/courses" className="hover:text-[#1C2B3A] transition-colors">All Courses</Link></li>
                <li><Link href="/#courses" className="hover:text-[#1C2B3A] transition-colors">Free Courses</Link></li>
                <li><Link href="/about" className="hover:text-[#1C2B3A] transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1C2B3A] mb-4">Get Involved</p>
              <ul className="space-y-2.5 text-sm text-[#1C2B3A]/55">
                <li><Link href="/join" className="hover:text-[#1C2B3A] transition-colors">Volunteer</Link></li>
                <li><Link href="/donate" className="hover:text-[#1C2B3A] transition-colors">Donate</Link></li>
                <li><Link href="/contact" className="hover:text-[#1C2B3A] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E8DDD6] mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#1C2B3A]/35">
            <p>© {new Date().getFullYear()} CodeWithPurpose · 501(c)(3) nonprofit · Made by students, for students.</p>
            <p>Free education for every student, everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
