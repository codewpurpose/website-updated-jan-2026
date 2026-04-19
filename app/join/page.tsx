import Image from "next/image"
import Link from "next/link"
import { BookOpen, Globe, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"

const roles = [
  {
    icon: BookOpen,
    title: "Course Instructor",
    body: "Help build and teach free courses in coding, finance, or any skill that changes lives.",
  },
  {
    icon: Globe,
    title: "Community Ambassador",
    body: "Spread the word in your school, city, or country. Help students find us who need us most.",
  },
  {
    icon: Users,
    title: "Volunteer Mentor",
    body: "Work directly with students during live sessions and workshops. Give an hour, change a future.",
  },
]

const team = [
  {
    name: "Shreyan Mitra",
    role: "Co-founder",
    img: "/shreyan.jpg",
  },
  {
    name: "Bruhatt Rao",
    role: "Co-founder",
    img: "/bhim.jpeg",
  },
]

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-12">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">Become part of the mission</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-[#1C2B3A] mb-4 max-w-2xl">
          Join us in making education free for everyone
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg leading-relaxed max-w-xl">
          We&apos;re a student-run nonprofit and we&apos;re always looking for passionate people to help teach, build, and grow with us.
        </p>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* Who we are */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#1C2B3A] mb-8">Meet the founders</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-xl">
          {team.map((member) => (
            <div key={member.name} className="flex items-center gap-4 bg-white rounded-2xl border border-[#E8DDD6] p-5">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#E0D8D0]">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[#1C2B3A] text-lg leading-tight">{member.name}</p>
                <p className="text-[#1C2B3A]/50 text-sm mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#1C2B3A] mb-8">Ways to get involved</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {roles.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl border border-[#E8DDD6] p-7">
              <r.icon className="w-5 h-5 text-[#1C2B3A]/50 mb-4" />
              <p className="font-serif text-lg text-[#1C2B3A] mb-2">{r.title}</p>
              <p className="text-[#1C2B3A]/60 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[#1C2B3A] mb-6">Apply to join</h2>
        <div className="bg-white rounded-2xl border border-[#E8DDD6] overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSds7PfwABn6UvSnUP_P_AW5EZ4vx74k98YOJw0K0fTAZMzIGw/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="w-full"
          >
            Loading…
          </iframe>
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
