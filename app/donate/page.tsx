import Link from "next/link"
import { ArrowRight, ShieldCheck, Globe, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"

const whys = [
  {
    icon: Globe,
    title: "Reach stays free",
    body: "Every dollar keeps our courses free for students in 110+ countries who can't afford $15,000 bootcamps.",
  },
  {
    icon: Zap,
    title: "Builds new courses",
    body: "Donations fund curriculum development, hosting, and the tools our student volunteers use every day.",
  },
  {
    icon: ShieldCheck,
    title: "Fiscally sponsored by HCB",
    body: "We operate under Hack Club Bank's 501(c)(3) umbrella — your gift is tax-deductible in the US.",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FDF4EE] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-12">
        <p className="italic text-[#1C2B3A]/50 text-sm mb-3">Support free education</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-[#1C2B3A] mb-4 max-w-2xl">
          Education is a right,<br />not a privilege.
        </h1>
        <p className="text-[#1C2B3A]/60 text-lg leading-relaxed max-w-xl">
          Help us keep every course completely free for every student — forever.
        </p>
      </section>

      <div className="border-t border-[#E8DDD6]" />

      {/* Why donate */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {whys.map((w) => (
            <div key={w.title} className="bg-white rounded-2xl border border-[#E8DDD6] p-7">
              <w.icon className="w-5 h-5 text-[#1C2B3A]/50 mb-4" />
              <p className="font-serif text-lg text-[#1C2B3A] mb-2">{w.title}</p>
              <p className="text-[#1C2B3A]/60 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>

        {/* Donate iframe */}
        <div className="bg-white rounded-2xl border border-[#E8DDD6] overflow-hidden flex items-center justify-center p-4">
          <iframe
            src="https://hcb.hackclub.com/donations/start/code-with-purpose"
            style={{ border: "none", borderRadius: "0.75rem" }}
            name="donateFrame"
            scrolling="no"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            height="850px"
            width="100%"
            className="max-w-[512px]"
            allowFullScreen
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8DDD6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#1C2B3A]/35">
          <p>© {new Date().getFullYear()} CodeWithPurpose · 501(c)(3) nonprofit · Fiscally sponsored by Hack Club Bank.</p>
          <Link href="/" className="hover:text-[#1C2B3A]/60 transition-colors">← Back to home</Link>
        </div>
      </footer>
    </div>
  )
}
