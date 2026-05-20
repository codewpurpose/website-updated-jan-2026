import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock3, Users } from "lucide-react"

import { Navbar } from "@/components/navbar"

const courses = [
  {
    img: "/python-course.png",
    alt: "Python for Complete Beginners",
    tag: "Beginner",
    tint: "from-[#efe2d4] to-[#f7efe8]",
    title: "Python for Complete Beginners",
    description:
      "Zero experience? Start here. Learn the core of Python and get to real projects without wasting time on filler.",
    learn: [
      "Python syntax and fundamentals from scratch",
      "Data structures, loops, and functions",
      "Object-oriented programming concepts",
      "Building practical beginner projects",
    ],
    students: "600+",
    badge: "Lifetime access",
    href: "https://www.udemy.com/course/introduction-to-python-bootcamp/",
  },
  {
    img: "/vibecoding-course.png",
    alt: "Vibecoding 101",
    tag: "Creative · AI",
    tint: "from-[#eadbce] to-[#f6efe8]",
    title: "Vibecoding 101",
    description:
      "Build with AI tools like Cursor and Copilot while keeping your own taste, ideas, and product instincts intact.",
    learn: [
      "Creative approaches to problem-solving with code",
      "Modern AI-assisted development workflows",
      "Building interactive projects fast",
      "Turning loose ideas into shippable apps",
    ],
    students: "700+",
    badge: "Portfolio projects",
    href: "https://www.udemy.com/course/vibecoding-101/",
  },
  {
    img: "/2.png",
    alt: "Intro to Machine Learning: Concepts",
    tag: "Intermediate",
    tint: "from-[#e4dfef] to-[#f6f3fb]",
    title: "Intro to Machine Learning: Concepts",
    description:
      "Understand what machine learning actually is, where it fits, and how the major model categories work in practice.",
    learn: [
      "Supervised vs. unsupervised learning",
      "Regression, classification, and clustering",
      "Model evaluation and validation techniques",
      "Real-world applications of ML systems",
    ],
    students: "New",
    badge: "Certificate included",
    href: "https://www.udemy.com/course/intro-to-machine-learning-part-1/",
  },
  {
    img: "/3.png",
    alt: "Intro to Machine Learning: Projects",
    tag: "Intermediate",
    tint: "from-[#e2ddf0] to-[#f4f1fb]",
    title: "Intro to Machine Learning: Projects",
    description:
      "Move from theory into hands-on implementation with real datasets and a full beginner-friendly ML workflow.",
    learn: [
      "End-to-end ML project workflow",
      "Data cleaning and preprocessing",
      "Training and fine-tuning models",
      "Deploying your first ML application",
    ],
    students: "New",
    badge: "Hands-on projects",
    href: "https://www.udemy.com/course/intro-to-machine-learning-part-2/",
  },
  {
    img: "/4.png",
    alt: "Financial Literacy: The Basics",
    tag: "All Levels",
    tint: "from-[#dfe9dc] to-[#f4f8f2]",
    title: "Financial Literacy: The Basics",
    description:
      "Learn the money fundamentals students are rarely taught clearly: budgeting, credit, saving, investing, and long-term habits.",
    learn: [
      "Budgeting and managing personal finances",
      "Understanding credit, debt, and interest",
      "Introduction to saving and investing",
      "Building long-term financial habits",
    ],
    students: "500+",
    badge: "Lifetime access",
    href: "https://www.udemy.com/course/financial-literacy-the-basics/",
  },
  {
    img: "/health-in-tech-udemy.jpg",
    alt: "Health in Tech: An Introduction",
    tag: "Health · Tech",
    tint: "from-[#dceae7] to-[#f1f8f7]",
    title: "Health in Tech: An Introduction",
    description:
      "Get a grounded introduction to digital health, from EHRs and telemedicine to AI systems and health data security.",
    learn: [
      "Electronic health records and patient data",
      "Wearables and remote monitoring",
      "AI in diagnosis and care delivery",
      "Telemedicine and protecting health data",
    ],
    students: "New",
    badge: "Certificate included",
    href: "https://www.udemy.com/course/health-iin-tech/?referralCode=22B81FDEAF9000EAC672",
    imageCover: true,
  },
  {
    img: "/intro-vibe-coding-udemy.jpg",
    alt: "Intro to Vibe Coding",
    tag: "Creative · Advanced AI",
    tint: "from-[#eadbce] to-[#f7efe7]",
    title: "Intro to Vibe Coding",
    description:
      "Go beyond the intro with MCP, auth, databases, UI tooling, and a deployable full-stack project built with AI-assisted workflows.",
    learn: [
      "MCP servers and real tool integrations",
      "Choosing the right database for a project",
      "Authentication and full-stack foundations",
      "Shipping a complete public-facing app",
    ],
    students: "200+",
    badge: "Hands-on projects",
    href: "https://www.udemy.com/course/vibecoding-the-mastery/?referralCode=844D5860F1B3F724BB70",
    imageCover: true,
  },
] as const

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-12rem] top-[16rem] h-[24rem] w-[24rem] rounded-full bg-brand/[0.10] blur-3xl" />
        <div className="absolute right-[-10rem] top-[32rem] h-[28rem] w-[28rem] rounded-full bg-navy/[0.08] blur-3xl" />
      </div>

      <Navbar />

      <main className="pb-24">
        <section className="section-shell pt-10 pb-14 md:pt-14 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="section-label">Free · Self-paced · Forever</span>
              <h1 className="section-title max-w-3xl">
                Courses designed to get students moving, not just watching.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/66">
                Every course is free, globally accessible, and built for practical momentum.
                Start from zero or sharpen an existing skill without paywalls.
              </p>
            </div>

            <div className="editorial-card grid gap-4 p-5 sm:grid-cols-3">
              {[
                { value: "7", label: "Free courses" },
                { value: "2,000+", label: "Students learning" },
                { value: "110+", label: "Countries reached" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.3rem] border border-warm-border/80 bg-white/75 p-5"
                >
                  <p className="font-serif text-4xl leading-none text-navy">{item.value}</p>
                  <p className="mt-3 text-sm leading-snug text-navy/56">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pb-16">
          <div className="space-y-7">
            {courses.map((course, index) => (
              <article
                key={course.title}
                className="editorial-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-[340px_1fr]">
                  <div className={`relative min-h-[250px] bg-gradient-to-br ${course.tint}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_35%)]" />
                    {course.imageCover ? (
                      <Image
                        src={course.img}
                        alt={course.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 340px, 100vw"
                      />
                    ) : (
                      <div className="relative flex h-full items-center justify-center p-10">
                        <Image
                          src={course.img}
                          alt={course.alt}
                          width={220}
                          height={220}
                          className="h-auto max-h-[220px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(28,43,58,0.12)]"
                        />
                      </div>
                    )}
                    <div className="absolute left-5 top-5 rounded-full border border-navy/10 bg-white/78 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/60 backdrop-blur-sm">
                      {course.tag}
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream shadow-[0_12px_24px_-14px_rgba(28,43,58,0.72)]">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-navy/52">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-4" />
                        Self-paced
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="size-4" />
                        {course.students} students
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Award className="size-4" />
                        {course.badge}
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.08] text-navy">
                      {course.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-navy/62">
                      {course.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {course.learn.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-warm-border/85 bg-white/72 px-4 py-3 text-sm leading-relaxed text-navy/64"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-sm text-navy/50">
                        Free forever. Structured enough for beginners, practical enough to
                        ship something meaningful.
                      </p>
                      <Link
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
                      >
                        Enroll free
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-cream shadow-[0_40px_120px_-56px_rgba(28,43,58,0.72)] sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute left-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/58">
                  No paywalls
                </span>
                <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.15rem)] leading-[1.08]">
                  Learning stays free because the mission is funded, not monetized.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/65">
                  If you want to keep these courses accessible to the next student, support
                  the nonprofit behind them.
                </p>
              </div>
              <Link
                href="/donate"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-navy transition-colors hover:bg-white"
              >
                Support our mission
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
