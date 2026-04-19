import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SpinningGlobe } from "@/components/spinning-globe"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="italic text-[#1C2B3A]/55 text-sm mb-5">
              Free Education for Collective Change
            </p>
            <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.1] text-[#1C2B3A] mb-6">
              Together in Learning,<br />Stronger in Purpose
            </h1>
            <p className="text-[#1C2B3A]/60 text-lg leading-relaxed mb-8 max-w-md">
              A student-run nonprofit teaching real coding skills to students in 110+ countries — completely free, forever.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="flex items-center gap-2 bg-[#1C2B3A] text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D3F52] transition-colors"
              >
                Start Learning Free
              </Link>
              <Link
                href="#mission"
                className="flex items-center gap-2 border border-[#1C2B3A]/30 text-[#1C2B3A] text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#1C2B3A] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C2B3A]"></span>
                Our Story
              </Link>
            </div>
          </div>
          {/* Right — tall hero photo */}
          <div className="rounded-2xl overflow-hidden h-[480px] lg:h-[580px] bg-[#E0D8D0]">
            <Image
              src="/Images/IMG_2629.jpeg"
              alt="Student smiling while learning to code at CodeWithPurpose"
              width={600}
              height={800}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "2,000+", label: "Students Reached" },
            { num: "110+",   label: "Countries" },
            { num: "20+",    label: "Languages Taught" },
            { num: "8,000+", label: "Minutes of Teaching" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl text-[#1C2B3A]">{s.num}</p>
              <p className="text-[#1C2B3A]/60 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — real photos */}
          <div>
            <p className="text-[#1C2B3A]/45 text-sm mb-3">2,000+ Students worldwide</p>
            <div className="flex -space-x-3 mb-8">
              {["#C9B8A8","#B5A898","#A89888","#9B8B7B"].map((c, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-[#FDF4EE] flex items-center justify-center text-white font-medium text-xs"
                  style={{ backgroundColor: c }}
                >
                  {["SM","BR","SG","K+"][i]}
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-[480px] bg-[#E0D8D0]">
              <Image
                src="/Images/IMG_2785.jpg"
                alt="Volunteer leaning in to help a young student at their laptop"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right — mission text */}
          <div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-[#1C2B3A] mb-6">
              Our Mission to Bring Knowledge Where It's Needed Most
            </h2>
            <p className="text-[#1C2B3A]/65 leading-relaxed mb-4">
              We are a community of students united by one belief — that quality coding education should cost nothing. What began as a frustration with $15,000 bootcamps has grown into a movement of free courses, real skills, and unwavering commitment.
            </p>
            <p className="text-[#1C2B3A]/65 leading-relaxed mb-8">
              Recognized by the U.S. House of Representatives, we work every day to reach students in 110+ countries — from rural villages in India to classrooms in Nigeria — and give them the same opportunities as anyone else.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#1C2B3A]">
              <Link href="/about" className="flex items-center gap-2 hover:gap-3 transition-all">
                <ArrowRight className="w-4 h-4" /> About Us
              </Link>
              <Link href="/about#mission" className="flex items-center gap-2 hover:gap-3 transition-all">
                <ArrowRight className="w-4 h-4" /> Our Mission
              </Link>
              <Link href="/courses" className="flex items-center gap-2 hover:gap-3 transition-all">
                <ArrowRight className="w-4 h-4" /> Free Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Stat callout below */}
        <div className="mt-16 rounded-2xl bg-[#1C2B3A] px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
          <p className="font-serif text-5xl text-[#FDF4EE] flex-shrink-0">110+</p>
          <p className="text-[#FDF4EE]/60 leading-relaxed max-w-sm">
            Countries where students are already learning with us — for free, with no strings attached.
          </p>
          <Link
            href="#courses"
            className="flex-shrink-0 ml-auto flex items-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Join them <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="border-y border-[#E8DDD6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

            {/* Pull-quote side */}
            <div>
              <p className="text-[#1C2B3A]/40 text-xs uppercase tracking-[0.2em] mb-8">Congressional Recognition · 2026</p>
              <blockquote className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] text-[#1C2B3A] leading-[1.2] mb-8">
                &ldquo;Tremendous leadership and service to your community.&rdquo;
              </blockquote>
              <div className="w-10 h-px bg-[#1C2B3A]/25 mb-6" />
              <p className="text-[#1C2B3A]/55 text-sm leading-relaxed mb-2">
                — Representative <span className="text-[#1C2B3A]/80 font-medium">Mark DeSaulnier</span>
              </p>
              <p className="text-[#1C2B3A]/40 text-xs mb-10">U.S. House of Representatives · March 4, 2026</p>
              <Link
                href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#1C2B3A] text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D3F52] transition-colors"
              >
                Read the letter <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Letter image — crop the blank top */}
            <Link
              href="https://drive.google.com/file/d/1jWQNoSwYOo9GRvRxcg5XVl8bnvAJf6vj/view?usp=sharing"
              target="_blank"
              className="group block rounded-2xl overflow-hidden border border-[#E8DDD6] hover:border-[#1C2B3A]/30 transition-all hover:shadow-lg"
              style={{ height: "440px" }}
            >
              <Image
                src="/HOR.png"
                alt="Letter from Representative Mark DeSaulnier recognizing CodeWithPurpose"
                width={800}
                height={900}
                className="w-full h-[calc(100%+96px)] object-cover object-top -mt-24 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </Link>

          </div>
        </div>
      </section>

      {/* ── PROMO VIDEO ── */}
      <section className="bg-[#1C2B3A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="italic text-[#FDF4EE]/50 text-sm mb-3">Watch our story</p>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#FDF4EE] mb-8 max-w-xl">
            See what CodeWithPurpose looks like in action
          </h2>
          <div className="rounded-2xl overflow-hidden aspect-video bg-black">
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

      {/* ── PHOTO BENTO ── */}
      <section className="bg-[#1C2B3A] py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="italic text-[#FDF4EE]/40 text-sm mb-6">In the classroom</p>
          <div className="grid grid-cols-4 grid-rows-3 gap-2.5" style={{ height: "640px" }}>
            {/* Large — top-left */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2625.jpeg" alt="Hands-on learning" width={600} height={500} loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Top-right pair */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2629.jpeg" alt="Smiling student" width={300} height={240} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2784.jpg" alt="Students coding" width={300} height={480} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2782.jpg" alt="Volunteer presenting" width={300} height={240} loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Bottom row */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2789.jpg" alt="Students at booth" width={300} height={200} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2631.jpeg" alt="Crowded workshop" width={600} height={200} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <Image src="/Images/IMG_2795.jpg" alt="End of session" width={300} height={200} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#1C2B3A]/50 text-sm mb-2 italic">Start today — it costs nothing</p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C2B3A]">
              Courses built for the curious
            </h2>
          </div>
          <Link
            href="/courses"
            className="self-start flex items-center gap-2 text-sm text-[#1C2B3A] border border-[#1C2B3A]/30 px-4 py-2 rounded-full hover:border-[#1C2B3A] transition-colors"
          >
            All courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Python */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DDD6] hover:border-[#1C2B3A]/30 transition-colors flex flex-col">
            <div className="h-52 bg-[#EBE5E0] flex items-center justify-center">
              <Image src="/python-course.png" alt="Python Course" width={180} height={180} className="object-contain" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs border border-[#1C2B3A]/20 text-[#1C2B3A]/60 px-2.5 py-1 rounded-full">Beginner</span>
                <span className="text-xs border border-[#1C2B3A]/20 text-[#1C2B3A]/60 px-2.5 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C2B3A] mb-2">Python for Complete Beginners</h3>
              <p className="text-[#1C2B3A]/60 text-sm leading-relaxed mb-6 flex-1">
                Zero experience? Perfect. Go from nothing to building real projects — loved by 800+ students across 50+ countries.
              </p>
              <Link
                href="https://www.udemy.com/course/introduction-to-python-bootcamp/"
                target="_blank"
                className="self-start inline-flex items-center gap-2 bg-[#1C2B3A] text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D3F52] transition-colors"
              >
                Enroll Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Vibecoding */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DDD6] hover:border-[#1C2B3A]/30 transition-colors flex flex-col">
            <div className="h-52 bg-[#EBE5E0] flex items-center justify-center">
              <Image src="/vibecoding-course.png" alt="Vibecoding Course" width={180} height={180} className="object-contain" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs border border-[#1C2B3A]/20 text-[#1C2B3A]/60 px-2.5 py-1 rounded-full">Creative</span>
                <span className="text-xs border border-[#1C2B3A]/20 text-[#1C2B3A]/60 px-2.5 py-1 rounded-full">AI-Powered</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C2B3A] mb-2">Vibecoding 101</h3>
              <p className="text-[#1C2B3A]/60 text-sm leading-relaxed mb-6 flex-1">
                Build real apps using AI tools like Cursor and Copilot. The future of coding — learn to build fast, creatively, and with purpose.
              </p>
              <Link
                href="https://www.udemy.com/course/vibecoding-101/"
                target="_blank"
                className="self-start inline-flex items-center gap-2 bg-[#1C2B3A] text-[#FDF4EE] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D3F52] transition-colors"
              >
                Enroll Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Code poster accent */}
        <div className="mt-6 rounded-2xl overflow-hidden h-56 bg-[#E0D8D0]">
          <Image
            src="/Images/IMG_3652.jpeg"
            alt="Advanced Python code written by a student at a CodeWithPurpose workshop"
            width={1200}
            height={224}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="rounded-3xl bg-[#1C2B3A] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="px-8 lg:px-14 py-12 lg:py-16 flex flex-col justify-center">
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#FDF4EE] leading-tight mb-4">
                Education is a right,<br />not a privilege.
              </h2>
              <p className="text-[#FDF4EE]/55 max-w-sm leading-relaxed mb-8">
                Join 2,000+ students across 110 countries already learning with us. Free. Forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#courses"
                  className="flex items-center justify-center gap-2 bg-[#FDF4EE] text-[#1C2B3A] text-sm font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
                >
                  Start Learning Free
                </Link>
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 border border-[#FDF4EE]/25 text-[#FDF4EE] text-sm font-medium px-6 py-3 rounded-full hover:border-[#FDF4EE]/50 transition-colors"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>
            <div className="hidden lg:block bg-[#0F1923]">
              <Image
                src="/Images/IMG_2782.jpg"
                alt="Volunteer presenting CodeWithPurpose curriculum to students"
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBE ── */}
      <section className="border-t border-[#E8DDD6] bg-[#FDF4EE]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[#1C2B3A]/40 text-xs uppercase tracking-[0.2em] mb-6">Global reach</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1C2B3A] leading-[1.15] mb-6">
                Students on every<br />corner of the Earth.
              </h2>
              <p className="text-[#1C2B3A]/60 leading-relaxed mb-8 max-w-md">
                From San Francisco to Lagos, Bangalore to São Paulo — over 110 countries and counting.
                Every dot is a student who got access to free, real education because of this community.
              </p>
              <div className="flex gap-10 pt-8 border-t border-[#E8DDD6]">
                {(["110+", "2,000+", "Free"] as const).map((n, i) => (
                  <div key={n}>
                    <p className="font-serif text-2xl text-[#1C2B3A]">{n}</p>
                    <p className="text-[#1C2B3A]/45 text-xs mt-0.5">{["Countries", "Students", "Always"][i]}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Globe */}
            <div className="flex items-center justify-center">
              <SpinningGlobe />
            </div>
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
              <p className="text-[#1C2B3A]/35 text-xs mt-4">Recognized by the U.S. House of Representatives</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1C2B3A] mb-4">Learn</p>
              <ul className="space-y-2.5 text-sm text-[#1C2B3A]/60">
                <li><Link href="/courses" className="hover:text-[#1C2B3A] transition-colors">All Courses</Link></li>
                <li><Link href="#courses" className="hover:text-[#1C2B3A] transition-colors">Free Courses</Link></li>
                <li><Link href="/about" className="hover:text-[#1C2B3A] transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1C2B3A] mb-4">Get Involved</p>
              <ul className="space-y-2.5 text-sm text-[#1C2B3A]/60">
                <li><Link href="/join" className="hover:text-[#1C2B3A] transition-colors">Volunteer</Link></li>
                <li><Link href="/donate" className="hover:text-[#1C2B3A] transition-colors">Donate</Link></li>
                <li><Link href="/contact" className="hover:text-[#1C2B3A] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E8DDD6] mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#1C2B3A]/40">
            <p>© {new Date().getFullYear()} CodeWithPurpose. Made by students, for students.</p>
            <p>A 501(c)(3) nonprofit · Free education for every student, everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

