import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Target, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Samanyu Goyal",
      role: "Chief Operations Officer",
      description: "Focused on spreading awareness about our mission and connecting with communities to maximize our educational and charitable impact.",
      initials: "SG",
      color: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      name: "Bruhatt Rao",
      role: "Co-Founder",
      description: "Dedicated to empowering learners through innovative educational approaches and fostering a community-driven learning environment.",
      initials: "BR",
      color: "bg-teal-100",
      textColor: "text-teal-800",
    },
    {
      name: "Shreyan Mitra",
      role: "Co-Founder",
      description: "Passionate about creating accessible coding education and building meaningful connections between technology and community impact.",
      initials: "SM",
      color: "bg-green-100",
      textColor: "text-green-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-light tracking-tight antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6">What is CodeWithPurpose?</h1>
            <p className="text-xl text-green-600 leading-relaxed">
              We're more than just a coding bootcamp. We're a movement that believes education and giving back should go
              hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Our Foundation</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our organization is built on the idea that education and philanthropy can go hand-in-hand. We offer a
                  virtual tech-focused bootcamp designed to equip students with the latest skills and knowledge in
                  technology. By enrolling in our bootcamp, students not only gain valuable expertise but also
                  contribute to the greater good.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is centered on our dedication to the community. We allocate 50% of the revenue from course
                  fees to local charities, ensuring that our impact extends beyond the classroom. This approach creates
                  a unique and exciting blend of learning and giving back.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">The Impact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Through this initiative, students can develop their technical skills while knowing that they are
                  making a positive difference in their community. Every line of code you write, every project you
                  complete, and every skill you master contributes to something bigger than yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-green-600">The values that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Purpose Over Profit</h3>
              <p className="text-gray-600">
                We measure success not just by what our students learn, but by the positive impact we create together in
                our communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Community First</h3>
              <p className="text-gray-600">
                Every decision we make is filtered through one question: "How does this serve our community better?"
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Real Impact</h3>
              <p className="text-gray-600">
                We're not interested in feel-good gestures. We track our donations, measure our impact, and ensure every
                dollar makes a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-green-600">The passionate individuals behind our mission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden text-center">
                <CardHeader className="pt-8 pb-4">
                  <Avatar className={`mx-auto w-24 h-24 mb-6 ${member.color}`}>
                    <AvatarImage src={`/${member.name.toLowerCase().replace(" ", "-")}.png`} alt={member.name} />
                    <AvatarFallback className={`${member.textColor} text-3xl font-medium`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl font-medium text-gray-900">{member.name}</CardTitle>
                  <p className="text-green-600 font-medium tracking-wide text-sm uppercase mt-1">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <p className="text-gray-600 leading-relaxed font-light">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">Ready to be part of something bigger?</h2>
          <p className="text-xl text-green-600 mb-8">
            Join our community of learners who are changing their lives while changing their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white" asChild>
              <Link href="/programs">View Our Programs</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-800 text-green-800 hover:bg-teal-50" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
