import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { SpinningGlobe } from "@/components/spinning-globe"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "2,000+", label: "Students reached" },
  { value: "110+", label: "Countries learning with us" },
  { value: "20+", label: "Subjects and tracks taught" },
  { value: "Free", label: "Access model, always" },
] as const

const courses = [
  {
    href: "https://www.udemy.com/course/introduction-to-python-bootcamp/",
    image: "/python-course.png",
    alt: "Python course artwork",
    title: "Python for Complete Beginners",
    tag: "Start here",
    summary:
      "From zero to practical Python with projects, clear explanations, and no paywall.",
  },
  {
    href: "https://www.udemy.com/course/vibecoding-101/",
    image: "/vibecoding-course.png",
    alt: "Vibecoding course artwork",
    title: "Vibecoding 101",
    tag: "Creative AI",
    summary:
      "Use modern AI tools to build expressive apps faster without losing your own point of view.",
  },
  {
    href: "https://www.udemy.com/course/health-iin-tech/?referralCode=22B81FDEAF9000EAC672",
    image: "/health-in-tech-udemy.jpg",
    alt: "Health in Tech course thumbnail",
    title: "Health in Tech",
    tag: "Cross-disciplinary",
    summary:
      "A clear introduction to digital health, AI in medicine, telemedicine, and health data.",
  },
] as const

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full bg-black/[0.04] blur-3xl" />
        <div className="absolute right-[-10rem] top-[24rem] h-[26rem] w-[26rem] rounded-full bg-black/[0.06] blur-3xl" />
      </div>

      <Navbar />

      <main className="pb-24">
        <section className="section-shell pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="section-label">Free education for collective change</span>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-navy/38">
                Student-run nonprofit · global classroom
              </p>
              <h1 className="section-title max-w-3xl">
                Teach real skills.
                <span className="block text-navy/74">Open real doors.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/62">
                CodeWithPurpose gives students everywhere access to practical coding education
                without tuition barriers, bootcamp pricing, or gatekept opportunity.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="brand"
                  size="lg"
                  className="h-12 rounded-full px-7 text-[15px] font-semibold"
                >
                  <Link href="/courses">
                    Start learning free
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-black/10 bg-white/65 px-7 text-[15px] font-semibold text-navy shadow-none hover:bg-white"
                >
                  <Link href="/about">Read our story</Link>
                </Button>
              </div>
            </div>

            <div className="editorial-card relative overflow-hidden p-5">
              <div className="grid-overlay absolute inset-0 opacity-35" />
              <div className="relative grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
                <div className="flex flex-col justify-between rounded-[1.5rem] bg-navy p-6 text-cream">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/55">
                      Why it matters
                    </p>
                    <p className="mt-4 font-serif text-[2.2rem] leading-none">Education should scale farther than wealth.</p>
                  </div>
                  <p className="mt-8 text-sm leading-relaxed text-cream/68">
                    We build clear, practical courses so students can begin wherever they are.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/Images/IMG_2629.jpeg"
                    alt="Student smiling while learning to code"
                    width={700}
                    height={900}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-6">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="editorial-card p-6">
                <p className="font-serif text-4xl tracking-tight text-navy">{item.value}</p>
                <p className="mt-3 text-sm leading-snug text-navy/55">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-navy p-7 text-cream shadow-[0_40px_110px_-60px_rgba(15,23,42,0.9)] md:p-10">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                Mission
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.35rem)] leading-[1.05]">
                Access first. Clarity second. Cost never.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/68">
                We started this because too many students were being told the future costs
                thousands of dollars. It does not. Good teaching can be rigorous, beautiful,
                practical, and free.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="editorial-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-navy/40">
                  Recognized
                </p>
                <p className="mt-4 font-serif text-2xl leading-tight text-navy">
                  Honored by the U.S. House of Representatives
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/58">
                  Congressional recognition validated the mission, but the core proof is still
                  student reach and useful learning outcomes.
                </p>
              </article>
              <article className="editorial-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-navy/40">
                  Built by students
                </p>
                <p className="mt-4 font-serif text-2xl leading-tight text-navy">
                  We teach from recent experience, not distance.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/58">
                  The content stays practical because the team still remembers what early
                  learning friction actually feels like.
                </p>
              </article>
              <article className="editorial-card p-6 sm:col-span-2">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-navy/40">
                      Community footage
                    </p>
                    <p className="mt-3 font-serif text-2xl leading-tight text-navy">
                      See the classrooms, workshops, and moments the mission is built on.
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-black/10 bg-white/65 px-5 text-sm font-semibold shadow-none hover:bg-white"
                  >
                    <Link href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Recognition letter
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-4 rounded-[2rem] bg-navy text-cream md:mx-6 lg:mx-8">
          <div className="section-shell py-16 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  In the classroom
                </span>
                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
                  A global nonprofit with a quieter, more human center of gravity.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/66">
                  The work is global, but the scenes are personal: one student, one lesson, one
                  unlocked path at a time.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.5rem] sm:col-span-2">
                  <Image
                    src="/Images/IMG_2625.jpeg"
                    alt="Students learning together in a CodeWithPurpose workshop"
                    width={1200}
                    height={700}
                    className="h-64 w-full object-cover md:h-72"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/Images/IMG_2784.jpg"
                    alt="Students focused on a classroom session"
                    width={500}
                    height={650}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/Images/IMG_2631.jpeg"
                    alt="Busy workshop room with students gathered together"
                    width={500}
                    height={650}
                    className="h-56 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="section-label">Courses</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] text-navy">
                Clear paths for curious students.
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-black/10 bg-white/65 px-5 font-semibold shadow-none hover:bg-white"
            >
              <Link href="/courses">
                Browse all courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.title} className="editorial-card overflow-hidden">
                <div className="relative h-56 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,238,231,0.98))]">
                  <div className="absolute left-4 top-4 rounded-full border border-black/8 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/55 backdrop-blur-sm">
                    {course.tag}
                  </div>
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className={course.image.endsWith(".png") ? "object-contain p-10" : "object-cover"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.9rem] leading-tight text-navy">{course.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/58">{course.summary}</p>
                  <Link
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-opacity hover:opacity-70"
                  >
                    Enroll free
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="section-label">Global Reach</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] text-navy">
                A classroom network spread across the world.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/60">
                Every dot represents access opened for someone who may not have had a free path
                into tech otherwise. The mission scales because the teaching stays usable.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "110+", label: "Countries" },
                  { value: "2,000+", label: "Students" },
                  { value: "Forever free", label: "Model" },
                ].map((item) => (
                  <div key={item.label} className="editorial-card p-5">
                    <p className="font-serif text-2xl text-navy">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-navy/42">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <SpinningGlobe />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-cream shadow-[0_40px_110px_-60px_rgba(15,23,42,0.9)] md:px-10 md:py-12">
            <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-white/6 blur-3xl" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  Join the mission
                </span>
                <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.06]">
                  Education is a right, not a premium feature.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/65">
                  Learn with us, volunteer with us, or fund the students who come next.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="secondary"
                  className="h-12 rounded-full bg-cream px-6 font-semibold text-navy hover:bg-white"
                >
                  <Link href="/join">Volunteer</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/20 bg-transparent px-6 font-semibold text-cream hover:bg-white/10 hover:text-cream"
                >
                  <Link href="/donate">Support our mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
