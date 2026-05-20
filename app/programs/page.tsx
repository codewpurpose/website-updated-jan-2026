import Image from "next/image"
import Link from "next/link"
import { Award, Clock3, ExternalLink, Users } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { RecommendationEmailForm } from "@/components/recommendation-email-form"

const programs = [
  {
    title: "Python for Complete Beginners",
    tag: "Start here",
    image: "/python-course.png",
    alt: "Python course artwork",
    summary:
      "A practical beginner path into Python fundamentals, functions, data structures, and real projects.",
    learn: [
      "Python syntax and fundamentals from scratch",
      "Data structures, loops, and functions",
      "Object-oriented programming concepts",
      "Building real-world beginner projects",
    ],
    students: "1,500+ students",
    badge: "Lifetime access",
    href: "https://www.udemy.com/course/introduction-to-python-bootcamp/?kw=Introduction+To+Python+for+Complete+Beginners%21&src=sac",
    contain: true,
  },
  {
    title: "Vibecoding 101",
    tag: "Creative AI",
    image: "/vibecoding-course.png",
    alt: "Vibecoding course artwork",
    summary:
      "A more expressive coding track built around modern tools, AI-assisted workflows, and shipping creative projects.",
    learn: [
      "Creative problem-solving with code",
      "Modern development tools and workflows",
      "Interactive, visually engaging projects",
      "Building with more personality and range",
    ],
    students: "200+ builders",
    badge: "Portfolio projects",
    href: "https://www.udemy.com/course/vibecoding-101/?kw=Vibecoding+101&src=sac",
    contain: true,
  },
  {
    title: "Health in Tech: An Introduction",
    tag: "Health · Tech",
    image: "/health-in-tech-udemy.jpg",
    alt: "Health in Tech course artwork",
    summary:
      "A grounded introduction to digital health, AI in care, telemedicine, cybersecurity, and patient data systems.",
    learn: [
      "Electronic health records and patient data",
      "Wearables and remote monitoring",
      "AI in medicine and care delivery",
      "Telemedicine and health data protection",
    ],
    students: "Growing community",
    badge: "Certificate included",
    href: "https://www.udemy.com/course/health-iin-tech/?referralCode=22B81FDEAF9000EAC672",
    imageClassName: "object-cover scale-[0.9] object-center",
  },
  {
    title: "Intro to Vibe Coding",
    tag: "Full-stack AI",
    image: "/intro-vibe-coding-udemy.jpg",
    alt: "Intro to Vibe Coding course artwork",
    summary:
      "Go deeper with MCP, databases, authentication, UI tooling, and a deployable full-stack project.",
    learn: [
      "MCP servers and AI-connected workflows",
      "Choosing the right database stack",
      "Authentication and full-stack fundamentals",
      "A deployable portfolio-grade app build",
    ],
    students: "200+ builders",
    badge: "Hands-on projects",
    href: "https://www.udemy.com/course/vibecoding-the-mastery/?referralCode=844D5860F1B3F724BB70",
    imageClassName: "object-contain scale-[0.82]",
  },
] as const

export default function ProgramsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full bg-black/[0.04] blur-3xl" />
        <div className="absolute right-[-10rem] top-[32rem] h-[26rem] w-[26rem] rounded-full bg-black/[0.05] blur-3xl" />
      </div>

      <Navbar />

      <main className="pb-24">
        <section className="section-shell pt-10 pb-14 md:pt-16 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="section-label">Programs</span>
              <h1 className="section-title max-w-3xl">
                Learn something useful.
                <span className="block text-navy/74">Fund something meaningful.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/62">
                Each course is built for access and clarity. Revenue from enrollment helps fund
                local charities, so every student creates impact beyond their own learning path.
              </p>
            </div>

            <div className="editorial-card grid gap-4 p-5 sm:grid-cols-3">
              {[
                { value: "4", label: "Highlighted programs" },
                { value: "50%", label: "Revenue donated" },
                { value: "110+", label: "Countries reached" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.3rem] border border-black/8 bg-white/72 p-5">
                  <p className="font-serif text-4xl text-navy">{item.value}</p>
                  <p className="mt-3 text-sm leading-snug text-navy/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pb-16">
          <div className="space-y-7">
            {programs.map((program, index) => (
              <article key={program.title} className="editorial-card overflow-hidden">
                <div className="grid lg:grid-cols-[340px_1fr]">
                  <div className="relative min-h-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,238,231,0.98))]">
                    <div className="absolute left-5 top-5 z-10 rounded-full border border-black/8 bg-white/76 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/55 backdrop-blur-sm">
                      {program.tag}
                    </div>
                    <div className="absolute bottom-5 left-5 z-10 rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream">
                      0{index + 1}
                    </div>
                    {program.contain ? (
                      <div className="relative flex h-full items-center justify-center p-10">
                        <Image
                          src={program.image}
                          alt={program.alt}
                          width={220}
                          height={220}
                          className="h-auto max-h-[220px] w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={program.image}
                          alt={program.alt}
                          fill
                          className={program.imageClassName ?? "object-cover"}
                          sizes="(min-width: 1024px) 340px, 100vw"
                        />
                      </div>
                    )}
                  </div>

                  <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-navy/52">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-4" />
                        Self-paced
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="size-4" />
                        {program.students}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Award className="size-4" />
                        {program.badge}
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.08] text-navy">
                      {program.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-navy/62">
                      {program.summary}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {program.learn.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-black/8 bg-white/72 px-4 py-3 text-sm leading-relaxed text-navy/64"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-sm text-navy/50">
                        Practical learning with visible social impact built into the model.
                      </p>
                      <Link
                        href={program.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
                      >
                        Enroll on Udemy
                        <ExternalLink className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-cream shadow-[0_40px_110px_-60px_rgba(15,23,42,0.9)] sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute left-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-white/6 blur-3xl" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  Impact model
                </span>
                <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.06]">
                  Every enrollment helps fund work beyond the screen.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/65">
                  Students gain durable skills, and local charities receive a share of the
                  revenue. Learning and giving are intentionally linked.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "1,500+", label: "Students enrolled" },
                  { value: "4,000+", label: "Hours of education" },
                  { value: "50%", label: "Revenue donated" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4">
                    <p className="font-serif text-3xl text-cream">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/58">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-cream shadow-[0_40px_110px_-60px_rgba(15,23,42,0.9)] sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-white/6 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="max-w-lg">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  Recommendations
                </span>
                <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.06]">
                  Have a course idea or something we should improve?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cream/65">
                  Send the team a recommendation directly from this page. We&apos;ll prefill the
                  message to Samanyu, Shreyan, and Bruhaat.
                </p>
              </div>

              <RecommendationEmailForm
                recipients={[
                  "samanyu.goyal2010@gmail.com",
                  "shreyan.mitra09@gmail.com",
                  "bruhaat.rao@gmail.com",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
