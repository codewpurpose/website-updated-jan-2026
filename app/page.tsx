import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { SpinningGlobe } from "@/components/spinning-globe"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stats = [
  { num: "2,000+", label: "Students reached" },
  { num: "110+", label: "Countries" },
  { num: "20+", label: "Languages taught" },
  { num: "8,000+", label: "Minutes of teaching" },
] as const

const courses = [
  {
    href: "https://www.udemy.com/course/introduction-to-python-bootcamp/",
    image: "/python-course.png",
    imageAlt: "Python course artwork",
    contain: true,
    badges: ["Beginner", "Most popular"],
    title: "Python for Complete Beginners",
    description:
      "Zero experience? Perfect. Go from nothing to building real projects — loved by 800+ students across 50+ countries.",
  },
  {
    href: "https://www.udemy.com/course/vibecoding-101/",
    image: "/vibecoding-course.png",
    imageAlt: "Vibecoding course artwork",
    contain: true,
    badges: ["Creative", "AI-powered"],
    title: "Vibecoding 101",
    description:
      "Build real apps using AI tools like Cursor and Copilot. Learn to build fast, creatively, and with purpose.",
  },
  {
    href: "https://www.udemy.com/course/health-iin-tech/?referralCode=22B81FDEAF9000EAC672",
    image: "/health-in-tech-udemy.jpg",
    imageAlt: "Health in Tech course thumbnail",
    contain: false,
    badges: ["Health", "Tech"],
    title: "Health in Tech: An Introduction",
    description:
      "EHRs, wearables, AI in medicine, telemedicine, and cybersecurity — the digital transformation of healthcare in plain language.",
  },
  {
    href: "https://www.udemy.com/course/vibecoding-the-mastery/?referralCode=844D5860F1B3F724BB70",
    image: "/intro-vibe-coding-udemy.jpg",
    imageAlt: "Intro to Vibe Coding thumbnail",
    contain: false,
    badges: ["Creative", "Next step"],
    title: "Intro to Vibe Coding",
    description:
      "The follow-up to Vibecoding 101 — MCP, databases, auth, UI tools, and a deployable full-stack project with AI-assisted development.",
  },
] as const

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cream font-sans text-navy">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-40 right-[-12%] h-[min(28rem,90vw)] w-[min(28rem,90vw)] rounded-full bg-brand/[0.09] blur-3xl" />
        <div className="absolute top-[38%] left-[-18%] h-[22rem] w-[22rem] rounded-full bg-navy/[0.045] blur-3xl" />
      </div>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-12 md:pb-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="max-w-xl lg:max-w-none animate-fade-up opacity-0 [animation-delay:40ms]">
              <p className="eyebrow mb-4">Free education for collective change</p>
              <h1 className="font-serif text-balance text-[clamp(2.5rem,6vw,4.35rem)] leading-[1.06] text-navy mb-6">
                Together in learning,
                <span className="block mt-1">stronger in purpose</span>
              </h1>
              <p className="text-navy/65 text-lg md:text-[1.125rem] leading-relaxed mb-9 max-w-lg">
                A student-run nonprofit teaching real coding skills to students in 110+
                countries — completely free, forever.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  variant="brand"
                  size="lg"
                  className="rounded-full h-12 px-7 text-[15px] font-semibold"
                >
                  <Link href="/courses">
                    Start learning free
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full h-12 px-7 text-[15px] font-semibold border-navy/20 text-navy bg-white/50 hover:bg-white hover:border-navy/35 shadow-none"
                >
                  <Link href="#mission">Our story</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up opacity-0 [animation-delay:120ms]">
              <div className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-brand/15 via-transparent to-navy/[0.07] blur-2xl" aria-hidden />
              <figure className="relative rounded-2xl overflow-hidden ring-1 ring-navy/[0.08] shadow-[0_24px_80px_-24px_rgba(28,43,58,0.35)] h-[min(32rem,78vh)] lg:h-[min(36rem,82vh)] bg-surface-muted">
                <Image
                  src="/Images/IMG_2629.jpeg"
                  alt="Student smiling while learning to code at CodeWithPurpose"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover object-top"
                  priority
                  fetchPriority="high"
                  loading="eager"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative border-y border-warm-border/90 bg-surface-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-warm-border/90 bg-surface-elevated px-5 py-6 md:px-6 md:py-7 shadow-none"
                >
                  <p className="font-serif text-3xl sm:text-4xl text-navy tabular-nums tracking-tight">
                    {s.num}
                  </p>
                  <p className="text-navy/55 text-sm mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium text-navy/50 mb-3">2,000+ students worldwide</p>
              <div className="flex -space-x-3 mb-8">
                {["#C9B8A8", "#B5A898", "#A89888", "#9B8B7B"].map((c, i) => (
                  <div
                    key={c}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream text-[11px] font-semibold text-white ring-1 ring-navy/10"
                    style={{ backgroundColor: c }}
                  >
                    {["SM", "BR", "SG", "K+"][i]}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-navy/[0.08] bg-surface-muted h-[min(28rem,70vh)] lg:h-[30rem]">
                <Image
                  src="/Images/IMG_2785.jpg"
                  alt="Volunteer leaning in to help a young student at their laptop"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:pt-4">
              <h2 className="font-serif text-balance text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.15] text-navy mb-6">
                Our mission to bring knowledge where it&apos;s needed most
              </h2>
              <p className="text-navy/65 leading-relaxed mb-4 max-w-prose">
                We are a community of students united by one belief — that quality coding
                education should cost nothing. What began as a frustration with $15,000
                bootcamps has grown into a movement of free courses, real skills, and
                unwavering commitment.
              </p>
              <p className="text-navy/65 leading-relaxed mb-10 max-w-prose">
                Recognized by the U.S. House of Representatives, we work every day to reach
                students in 110+ countries — from rural villages in India to classrooms in
                Nigeria — and give them the same opportunities as anyone else.
              </p>
              <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 text-[15px]">
                {[
                  { href: "/about", label: "About us" },
                  { href: "/about#mission", label: "Our mission" },
                  { href: "/courses", label: "Free courses" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "inline-flex items-center gap-2 text-navy font-medium",
                        "underline-offset-4 hover:underline decoration-brand/50",
                        "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                      )}
                    >
                      {l.label}
                      <ArrowRight className="size-4 text-brand" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 md:mt-20 rounded-2xl md:rounded-3xl bg-navy px-6 py-9 md:px-10 md:py-11 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 ring-1 ring-white/10">
            <p className="font-serif text-5xl sm:text-6xl text-cream tabular-nums leading-none shrink-0">
              110+
            </p>
            <p className="text-cream/65 leading-relaxed max-w-md flex-1 text-[1.05rem]">
              Countries where students are already learning with us — for free, with no
              strings attached.
            </p>
            <Button
              asChild
              variant="secondary"
              className="shrink-0 rounded-full h-11 px-6 font-semibold bg-cream text-navy hover:bg-white shadow-none"
            >
              <Link href="#courses" className="gap-2">
                Join them
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </section>

        {/* Recognition */}
        <section className="relative border-y border-warm-border/90 overflow-hidden bg-surface-muted/25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-12 lg:gap-16 items-center">
              <div>
                <p className="eyebrow mb-6">Congressional recognition · 2026</p>
                <blockquote className="font-serif text-balance text-[clamp(1.65rem,3.6vw,2.65rem)] text-navy leading-[1.18] mb-8">
                  &ldquo;Tremendous leadership and service to your community.&rdquo;
                </blockquote>
                <div className="h-px w-12 bg-navy/20 mb-6" aria-hidden />
                <p className="text-navy/60 text-sm leading-relaxed mb-1">
                  — Representative{" "}
                  <span className="text-navy/85 font-semibold">Mark DeSaulnier</span>
                </p>
                <p className="text-navy/45 text-xs mb-10">
                  U.S. House of Representatives · March 4, 2026
                </p>
                <Button
                  asChild
                  variant="brand"
                  className="rounded-full h-11 px-6 font-semibold gap-2"
                >
                  <Link
                    href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the letter
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>

              <Link
                href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative block overflow-hidden rounded-2xl border border-warm-border bg-surface-elevated",
                  "shadow-none transition-all duration-300 hover:border-navy/20 hover:shadow-[0_28px_90px_-40px_rgba(28,43,58,0.45)]",
                  "outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  "h-[min(24rem,55vh)] lg:h-[440px]"
                )}
              >
                <Image
                  src="/HOR.png"
                  alt="Letter from Representative Mark DeSaulnier recognizing CodeWithPurpose"
                  width={800}
                  height={900}
                  className="h-[calc(100%+6rem)] w-full object-cover object-top -mt-20 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="sr-only">Open recognition letter (Google Drive)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="relative bg-navy text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <p className="text-sm font-medium text-cream/50 mb-3">Watch our story</p>
            <h2 className="font-serif text-balance text-[clamp(1.85rem,4vw,2.85rem)] leading-tight mb-8 max-w-2xl">
              See what CodeWithPurpose looks like in action
            </h2>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black aspect-video shadow-[0_32px_120px_-48px_rgba(0,0,0,0.75)]">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/Images/IMG_2624.jpeg"
              >
                <source src="/promo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Photo mosaic — responsive, no cramped 4×3 on small screens */}
        <section className="relative bg-navy pb-16 pt-6 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-cream/45 mb-5">In the classroom</p>

            <div className="flex flex-col gap-2 sm:gap-3 lg:hidden">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="col-span-2 aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/Images/IMG_2625.jpeg"
                    alt="Hands-on learning in a CodeWithPurpose session"
                    width={800}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/Images/IMG_2629.jpeg"
                    alt="Smiling student at a laptop"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/Images/IMG_2784.jpg"
                    alt="Students working on code together"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/Images/IMG_2631.jpeg"
                    alt="Crowded workshop room"
                    width={900}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-3 lg:h-[640px]"
              aria-label="Classroom photo collage"
            >
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2625.jpeg"
                  alt=""
                  width={600}
                  height={500}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2629.jpeg"
                  alt=""
                  width={300}
                  height={240}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="row-span-2 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2784.jpg"
                  alt=""
                  width={300}
                  height={480}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2782.jpg"
                  alt=""
                  width={300}
                  height={240}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2789.jpg"
                  alt=""
                  width={300}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2631.jpeg"
                  alt=""
                  width={600}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/Images/IMG_2795.jpg"
                  alt=""
                  width={300}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 lg:mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-navy/50 mb-2">Start today — it costs nothing</p>
              <h2 className="font-serif text-balance text-[clamp(1.85rem,4vw,2.9rem)] text-navy leading-tight">
                Courses built for the curious
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="self-start rounded-full h-11 px-5 font-semibold border-navy/20 text-navy bg-white/60 hover:bg-white shadow-none"
            >
              <Link href="/courses" className="gap-2">
                Browse all courses
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course) => (
              <Card
                key={course.title}
                className="group flex flex-col overflow-hidden border-warm-border bg-surface-elevated shadow-none transition-colors hover:border-navy/18"
              >
                <div
                  className={cn(
                    "relative h-52 bg-surface-muted",
                    course.contain ? "flex items-center justify-center" : ""
                  )}
                >
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={course.contain ? 180 : 750}
                    height={course.contain ? 180 : 422}
                    className={
                      course.contain
                        ? "h-auto w-auto max-h-full max-w-full object-contain"
                        : "h-full w-full object-cover"
                    }
                    style={
                      course.contain
                        ? { width: "auto", height: "auto" }
                        : undefined
                    }
                  />
                </div>
                <CardHeader className="space-y-4 pb-2 pt-6 px-6 md:px-7">
                  <div className="flex flex-wrap gap-2">
                    {course.badges.map((b) => (
                      <Badge
                        key={b}
                        variant="outline"
                        className="border-navy/12 bg-white/80 text-navy/70 font-medium shadow-none"
                      >
                        {b}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="font-serif text-2xl md:text-[1.65rem] font-normal text-navy leading-snug">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-7 pb-2 flex-1">
                  <p className="text-navy/60 text-[0.98rem] leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 md:px-7 pb-7 pt-4">
                  <Button
                    asChild
                    variant="brand"
                    className="rounded-full h-11 px-6 font-semibold gap-2"
                  >
                    <Link href={course.href} target="_blank" rel="noopener noreferrer">
                      Enroll free
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-navy/[0.08] h-52 md:h-60 bg-surface-muted">
            <Image
              src="/Images/IMG_3652.jpeg"
              alt="Advanced Python code written by a student at a CodeWithPurpose workshop"
              width={1200}
              height={280}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="rounded-3xl overflow-hidden bg-navy ring-1 ring-white/10 shadow-[0_40px_120px_-50px_rgba(28,43,58,0.65)]">
            <div className="grid lg:grid-cols-2">
              <div className="px-8 lg:px-14 py-12 lg:py-16 flex flex-col justify-center">
                <h2 className="font-serif text-balance text-[clamp(2rem,4.2vw,3.15rem)] text-cream leading-[1.12] mb-5">
                  Education is a right,
                  <span className="block">not a privilege.</span>
                </h2>
                <p className="text-cream/55 max-w-md leading-relaxed mb-9 text-[1.05rem]">
                  Join 2,000+ students across 110 countries already learning with us. Free.
                  Forever.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="rounded-full h-12 px-7 font-semibold bg-cream text-navy hover:bg-white shadow-none"
                  >
                    <Link href="#courses">Start learning free</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full h-12 px-7 font-semibold border-cream/30 text-cream bg-transparent hover:bg-white/10 hover:text-cream shadow-none"
                  >
                    <Link href="/donate">Support our mission</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block min-h-[20rem]">
                <Image
                  src="/Images/IMG_2782.jpg"
                  alt="Volunteer presenting CodeWithPurpose curriculum to students"
                  width={720}
                  height={520}
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.72]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" aria-hidden />
              </div>
            </div>
          </div>
        </section>

        {/* Globe */}
        <section className="relative border-t border-warm-border/90 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="eyebrow mb-5">Global reach</p>
                <h2 className="font-serif text-balance text-[clamp(2rem,4.2vw,3.05rem)] text-navy leading-[1.12] mb-6">
                  Students on every corner of the Earth
                </h2>
                <p className="text-navy/60 leading-relaxed mb-10 max-w-prose text-[1.05rem]">
                  From San Francisco to Lagos, Bangalore to São Paulo — over 110 countries
                  and counting. Every dot is a student who got access to free, real education
                  because of this community.
                </p>
                <div className="flex flex-wrap gap-10 pt-8 border-t border-warm-border/90">
                  {(
                    [
                      { n: "110+", s: "Countries" },
                      { n: "2,000+", s: "Students" },
                      { n: "Free", s: "Always" },
                    ] as const
                  ).map((x) => (
                    <div key={x.n}>
                      <p className="font-serif text-2xl md:text-3xl text-navy tabular-nums">
                        {x.n}
                      </p>
                      <p className="text-navy/45 text-xs mt-1 font-medium uppercase tracking-wider">
                        {x.s}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md lg:max-w-none">
                  <SpinningGlobe />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-warm-border/90 bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2 max-w-md">
              <p className="font-serif text-2xl text-navy mb-3">CodeWithPurpose</p>
              <p className="text-navy/55 text-[0.98rem] leading-relaxed">
                A student-run nonprofit making tech education free and accessible for
                everyone, everywhere.
              </p>
              <p className="text-navy/40 text-xs mt-5">
                Recognized by the U.S. House of Representatives
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy mb-4">Learn</p>
              <ul className="space-y-3 text-[0.98rem] text-navy/60">
                <li>
                  <Link
                    href="/courses"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    All courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    Free courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    Our story
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy mb-4">Get involved</p>
              <ul className="space-y-3 text-[0.98rem] text-navy/60">
                <li>
                  <Link
                    href="/join"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donate"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-navy outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-border/90 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-navy/45">
            <p>© {new Date().getFullYear()} CodeWithPurpose. Made by students, for students.</p>
            <p className="md:text-right">
              A 501(c)(3) nonprofit · Free education for every student, everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
