import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"

const courses = [
  {
    img: "/python-course.png",
    alt: "Python for Complete Beginners",
    tag: "Beginner",
    tagColor: "bg-[#E8DDD6] text-[#1C2B3A]",
    title: "Python for Complete Beginners",
    description:
      "Zero experience? Perfect. Go from nothing to building real projects. We break down the fundamentals and get you writing working code fast.",
    learn: [
      "Python syntax and fundamentals from scratch",
      "Data structures, loops, and functions",
      "Object-oriented programming concepts",
      "Building real-world projects and applications",
    ],
    students: "600+",
    badge: "Lifetime access",
    href: "https://www.udemy.com/course/introduction-to-python-bootcamp/",
  },
  {
    img: "/vibecoding-course.png",
    alt: "Vibecoding 101",
    tag: "Creative · AI-Powered",
    tagColor: "bg-[#E0D8D0] text-[#1C2B3A]",
    title: "Vibecoding 101",
    description:
      "Build real apps using AI tools like Cursor and Copilot. Bring your creativity to coding and ship projects that are uniquely yours.",
    learn: [
      "Creative approaches to problem-solving with code",
      "Modern AI-assisted development workflows",
      "Building interactive and visually appealing projects",
      "Expressing your ideas through programming",
    ],
    students: "700+",
    badge: "Portfolio projects",
    href: "https://www.udemy.com/course/vibecoding-101/",
  },
  {
    img: "/2.png",
    alt: "Intro to Machine Learning: Concepts",
    tag: "Intermediate",
    tagColor: "bg-[#DDD6E8] text-[#1C2B3A]",
    title: "Intro to Machine Learning: Concepts",
    description:
      "Demystify machine learning. Understand how algorithms learn from data, explore key concepts like regression, classification, and clustering — no PhD required.",
    learn: [
      "Core ML concepts: supervised vs. unsupervised learning",
      "Regression, classification, and clustering",
      "Model evaluation and validation techniques",
      "Real-world applications of machine learning",
    ],
    students: "New",
    badge: "Certificate included",
    href: "https://www.udemy.com/course/intro-to-machine-learning-part-1/",
  },
  {
    img: "/3.png",
    alt: "Intro to Machine Learning: Projects",
    tag: "Intermediate",
    tagColor: "bg-[#DDD6E8] text-[#1C2B3A]",
    title: "Intro to Machine Learning: Projects",
    description:
      "Put theory into practice. Build hands-on ML projects using real datasets — from data preprocessing to model deployment.",
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
    tagColor: "bg-[#D6E8D6] text-[#1C2B3A]",
    title: "Financial Literacy: The Basics",
    description:
      "Money skills nobody teaches in school. Learn budgeting, saving, investing fundamentals, and how to build wealth from any starting point.",
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
    img: "/vibecoding-mastery-course.png",
    alt: "Vibecoding: The Mastery",
    tag: "Advanced · AI-Powered",
    tagColor: "bg-[#D8D0E8] text-[#1C2B3A]",
    title: "Vibecoding: The Mastery",
    description:
      "Level up from hobbyist to builder. Ship production-ready apps using cutting-edge AI workflows — Cursor, v0, Bolt, and beyond. Master the full vibe-to-deploy pipeline.",
    learn: [
      "Advanced AI-assisted development with Cursor & Bolt",
      "Architecting and shipping full-stack applications",
      "Prompt engineering for complex software tasks",
      "Production-grade deployment and iteration workflows",
    ],
    students: "New",
    badge: "Portfolio projects",
    href: "https://www.udemy.com/course/vibecoding-the-mastery/",
  },
  {
    img: "/health-in-tech-course.png",
    alt: "Health in Tech: An Introduction",
    tag: "All Levels · Healthcare",
    tagColor: "bg-[#D0E8E4] text-[#1C2B3A]",
    title: "Health in Tech: An Introduction",
    description:
      "Where biology meets bytes. Discover how AI, data science, and software are transforming medicine — from diagnostics to wearables to digital health platforms.",
    learn: [
      "How AI and ML are reshaping modern healthcare",
      "Key concepts in biomedical data and informatics",
      "Wearables, telemedicine, and digital health tools",
      "Career pathways in health tech and bioengineering",
    ],
    students: "New",
    badge: "Lifetime access",
    href: "https://www.udemy.com/course/health-iin-tech/",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">Free · Self-paced · Forever</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-[#1C2B3A] mb-4 max-w-2xl">
          Courses built for the curious
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg leading-relaxed max-w-xl">
          Seven courses, zero cost. Whether you&apos;re starting from scratch or leveling up, there&apos;s a path for you.
        </p>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* Courses list */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 space-y-8">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white rounded-2xl border border-[#E8DDD6] hover:border-[#1C2B3A]/20 transition-colors overflow-hidden"
          >
            <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
              {/* Image panel */}
              <div className="bg-[#EBE5E0] flex items-center justify-center p-10 min-h-[200px]">
                <Image
                  src={course.img}
                  alt={course.alt}
                  width={200}
                  height={200}
                  className="object-contain max-h-40"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${course.tagColor}`}>
                    {course.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#1C2B3A]/50">
                    <Clock className="w-3 h-3" /> Self-paced
                  </span>
                </div>

                <h2 className="font-serif text-2xl lg:text-3xl text-[#1C2B3A] mb-3">{course.title}</h2>
                <p className="text-[#1C2B3A]/60 leading-relaxed mb-6">{course.description}</p>

                <div className="mb-6">
                  <p className="text-xs font-medium text-[#1C2B3A] uppercase tracking-wider mb-3">What you&apos;ll learn</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {course.learn.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1C2B3A]/65">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C2B3A]/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4 text-sm text-[#1C2B3A]/55">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> {course.students} students
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> {course.badge}
                    </span>
                  </div>
                  <Link
                    href={course.href}
                    target="_blank"
                    className="ml-auto flex items-center gap-2 bg-[#1C2B3A] text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D3F52] transition-colors"
                  >
                    Enroll Free <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-[#1C2B3A] px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <p className="font-serif text-2xl text-[#FDF4EE] mb-1">All courses are completely free.</p>
            <p className="text-[#FDF4EE]/55 text-sm">No paywalls. No subscriptions. Just learning.</p>
          </div>
          <Link
            href="/donate"
            className="flex-shrink-0 md:ml-auto flex items-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Support Our Mission <ArrowRight className="w-4 h-4" />
          </Link>
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
