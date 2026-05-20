import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Sparkles } from "lucide-react"

import { Navbar } from "@/components/navbar"

const team = [
  {
    name: "Shreyan Mitra",
    role: "Co-Founder",
    img: "/shreyan.jpg",
    quote:
      "Started coding at 14 and realized most kids couldn't access the same resources I had. That didn't sit right with me.",
    linkedin: "https://www.linkedin.com/in/shreyan-m-8910172b7/",
  },
  {
    name: "Bruhatt Rao",
    role: "Co-Founder",
    img: "/bhim.jpeg",
    quote:
      "Watched my cousins in India struggle to find quality tech education. Built this so no one else has to.",
    linkedin: "https://www.linkedin.com/in/bruhatt-rao/",
  },
  {
    name: "Samanyu Goyal",
    role: "Co-Founder",
    img: "/samanyu.jpeg",
    quote:
      "Every dollar we raise goes to education, not overhead. I make sure of that.",
    linkedin: "https://www.linkedin.com/in/samanyu-goyal/",
  },
  {
    name: "Naman Jain",
    role: "Director of Outreach",
    img: "/naman.png",
    quote:
      "Connecting students everywhere with the tools they need to build a better future.",
    linkedin: "https://www.linkedin.com/in/naman-jain-9276593a5/",
  },
  {
    name: "Prithvi Jai Sudharsan",
    role: "Director of Media",
    img: "/prithvi.png",
    quote:
      "My goal is to promote financial literacy and technology education to students worldwide.",
    linkedin: "https://www.linkedin.com/in/prithvi-jai/",
  },
] as const

const beliefs = [
  {
    num: "01",
    title: "Education is a right",
    body: "Not a privilege, not a premium product. Access to useful skills should not depend on where a student was born or what their family can afford.",
  },
  {
    num: "02",
    title: "Students teach differently",
    body: "We still remember the confusion, the dead ends, and the gaps. That gives our teaching clarity and urgency.",
  },
  {
    num: "03",
    title: "Reach matters",
    body: "A course is only meaningful if it gets into the hands of students who actually need it. Scale is part of the mission.",
  },
] as const

const timeline = [
  {
    title: "The frustration",
    body: "We kept seeing coding bootcamps priced like college tuition while students everywhere were trying to learn from scattered free videos.",
  },
  {
    title: "The first build",
    body: "We recorded our first lessons with basic gear, cut out the fluff, and focused on practical explanations that would actually help beginners move.",
  },
  {
    title: "The proof",
    body: "Students across 110+ countries started enrolling. The mission stopped being an idea and became infrastructure for access.",
  },
] as const

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-12rem] top-[12rem] h-[26rem] w-[26rem] rounded-full bg-brand/[0.10] blur-3xl" />
        <div className="absolute right-[-10rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-navy/[0.08] blur-3xl" />
      </div>

      <Navbar />

      <main className="pb-24">
        <section className="section-shell pt-10 pb-16 md:pt-14 md:pb-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <span className="section-label">Our Story</span>
              <h1 className="section-title max-w-3xl">
                We built the kind of learning access we wished already existed.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/66">
                CodeWithPurpose started with a simple reaction: it should not cost thousands
                of dollars to learn skills that can change a student&apos;s future. So we built a
                student-run nonprofit around free, practical teaching.
              </p>
            </div>

            <div className="editorial-card relative overflow-hidden p-5">
              <div className="grid-overlay absolute inset-0 opacity-40" />
              <div className="relative grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/Images/IMG_2785.jpg"
                    alt="CodeWithPurpose volunteer helping a student"
                    width={700}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.35rem] bg-navy p-5 text-cream">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/55">
                      Founded by students
                    </p>
                    <p className="mt-3 font-serif text-4xl">2022</p>
                    <p className="mt-3 text-sm leading-relaxed text-cream/68">
                      Built to remove cost as a barrier to quality tech education.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-warm-border/90 bg-white/80 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/45">
                      Focus
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-navy/65">
                      Clear lessons, global access, and practical outcomes instead of
                      expensive gatekeeping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-8 md:py-10">
          <div className="editorial-card overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-navy px-6 py-10 text-cream sm:px-8 lg:px-10 lg:py-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/60">
                  <Sparkles className="size-3" />
                  Why it started
                </span>
                <h2 className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]">
                  We saw too many students priced out before they even began.
                </h2>
                <div className="mt-6 space-y-4 text-cream/68">
                  <p>
                    We taught ourselves through YouTube, experiments, and trial-and-error.
                    That worked for us, but it also made the gap obvious: many students do not
                    have the same time, support, or stable access.
                  </p>
                  <p>
                    Meanwhile, bootcamps were charging five figures for skills that should be
                    broadly available. The mismatch was hard to ignore.
                  </p>
                  <p className="text-cream">
                    The question became practical, not philosophical: if we know how to teach
                    this, why not teach it for free?
                  </p>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(252,244,238,0.98))] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
                <div className="space-y-5">
                  {timeline.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[1.35rem] border border-warm-border/90 bg-white/85 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/70">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy/62">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <span className="section-label">What We Stand For</span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-navy">
              Principles that shape every course and decision.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {beliefs.map((belief) => (
              <article key={belief.num} className="editorial-card p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand/65">
                  {belief.num}
                </p>
                <h3 className="mt-5 font-serif text-[1.65rem] leading-tight text-navy">
                  {belief.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/62">{belief.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative py-16 md:py-20">
          <div className="section-shell">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="section-label">The Team</span>
                <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-navy">
                  The mission is real because the people behind it are.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-navy/56">
                Students, operators, and builders working on access first.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="editorial-card group overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-[1.35rem] bg-surface-muted">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl leading-tight text-navy">{member.name}</h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/42">
                        {member.role}
                      </p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-warm-border/90 bg-white text-navy/50 transition-colors hover:text-navy"
                    >
                      <Linkedin className="size-4" />
                    </Link>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy/62">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-8 md:py-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "2,000+", label: "Students reached" },
              { num: "110+", label: "Countries" },
              { num: "20+", label: "Languages taught" },
              { num: "8,000+", label: "Minutes of teaching" },
            ].map((item) => (
              <div key={item.label} className="editorial-card p-6">
                <p className="font-serif text-4xl tracking-tight text-navy">{item.num}</p>
                <p className="mt-2 text-sm text-navy/55">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell pt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-cream shadow-[0_40px_120px_-56px_rgba(28,43,58,0.72)] sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  Join the mission
                </span>
                <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08]">
                  Want to help build free education that actually reaches people?
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#courses"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-cream px-6 text-sm font-semibold text-navy transition-colors hover:bg-white"
                >
                  Start learning free
                </Link>
                <Link
                  href="/join"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-cream transition-colors hover:bg-white/8"
                >
                  Volunteer with us
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
