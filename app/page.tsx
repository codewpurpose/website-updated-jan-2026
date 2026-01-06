import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Code, Users, BookOpen, Heart, ArrowRight } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 font-light antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-green-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-green-800 tracking-tight">Trusted by over 100+ countries</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Learn to code. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Change the world.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              We're a non-profit coding bootcamp where your education funds local charities. Master modern tech skills while making a real difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-14 px-8 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                <Link href="#courses">Start Learning Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-gray-200 hover:bg-white hover:border-gray-300 text-gray-900 text-lg font-medium bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-300" asChild>
                <Link href="/about">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">
                <NumberTicker value={1500} suffix="+" />
              </div>
              <p className="text-gray-600 font-light">students have started their coding journey with us</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">
                <NumberTicker value={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-light">countries reached through our programs</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">
                <NumberTicker value={4000} suffix="+" />
              </div>
              <p className="text-gray-600 font-light">hours of quality education delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-light mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Our Courses</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Ready to make a difference through code?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Let's be honest - every enrollment helps fund local charities while you build the skills that will shape
              your future. It's learning with purpose, literally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Python 3 Course */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center">
                <Image
                  src="/python-course.png"
                  alt="Python Course"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-light">
                    Perfect for Beginners
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  Python for Complete Beginners
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Never coded before? No worries! This course takes you from "What's Python?" to building your first
                  real projects. We'll walk through everything step-by-step, and honestly, you'll be amazed at what you
                  can create.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Start from absolute zero - no experience needed
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Build real projects you can actually show off
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Join a supportive community of learners
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    The satisfaction of helping others while you learn
                  </div>
                </div>

                <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                  <Link
                    href="https://www.udemy.com/course/introduction-to-python-bootcamp/?kw=Introduction+To+Python+for+Complete+Beginners%21&src=sac"
                    target="_blank"
                  >
                    Enroll Now on Udemy
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vibecoding 101 Course */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <Image
                  src="/vibecoding-course.png"
                  alt="Vibecoding Course"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-light">
                    Creative & Fun
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">Vibecoding 101</h3>

                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Who says coding has to be boring? This course brings creativity and personality to programming. You'll
                  learn modern development while building projects that actually reflect who you are. It's coding with
                  personality.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Express yourself through code
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Learn the tools developers actually use
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Create projects that wow your friends
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Connect with a creative coding community
                  </div>
                </div>

                <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                  <Link href="https://www.udemy.com/course/vibecoding-101/?kw=Vibecoding+101&src=sac" target="_blank">
                    Enroll Now on Udemy
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 font-light">
              Both courses include lifetime access, community support, and the warm feeling of making a difference
            </p>
            <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 font-light" asChild>
              <Link href="/programs">
                View All Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-light mb-4">
              <Heart className="w-4 h-4" />
              <span>Why we're different</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Learning that creates lasting change in your community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We're not just another coding bootcamp. We're a movement that believes education should lift up entire
              communities, not just individuals. Here's what makes us genuinely different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Real Skills, Real Support</h3>
              <p className="text-gray-600 font-light">
                We don't just throw videos at you and hope for the best. Our courses are designed by people who actually
                care about your success, with real support when you get stuck. We're real people who genuinely care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Purpose-Driven Learning</h3>
              <p className="text-gray-600 font-light">
                Every time you enroll, 50% goes directly to local charities. You're not just learning to code - you're
                funding food banks, supporting education, and making your community stronger. That's the CodeWithPurpose
                difference.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Community That Actually Cares</h3>
              <p className="text-gray-600 font-light">
                Join a group of learners who are here for the right reasons. We celebrate each other's wins and help
                each other through the tough parts. No egos, just genuine support and encouragement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 tracking-tight">
            Ready to code with purpose?
          </h2>
          <p className="text-xl text-green-200 mb-8 font-light">
            Your coding journey starts here, and so does your impact on the community. Let's build something meaningful
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light">
              Start Learning Today
            </Button>
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light" asChild>
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}
