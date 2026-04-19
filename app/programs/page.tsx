import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, Award, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-green-900 mb-6 font-light tracking-tight">
              Our Programs
            </h1>
            <p className="text-xl text-green-600 leading-relaxed max-w-3xl mx-auto font-light tracking-tight">
              Every course you take helps fund local charities. Choose your path and start making a difference today.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Python Course */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center">
                <Image
                  src="/python-course.png"
                  alt="Python Course"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium font-light tracking-tight">
                    Beginner Friendly
                  </span>
                  <div className="flex items-center text-sm text-green-600 font-light tracking-tight">
                    <Clock className="w-4 h-4 mr-1" />
                    Self-paced
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-green-900 mb-4 font-light tracking-tight">
                  Python for Complete Beginners
                </h2>

                <p className="text-green-600 mb-6 leading-relaxed font-light tracking-tight">
                  So, you wanna learn Python? Awesome! This course is designed to take you from zero to Python hero,
                  even if you've never touched code before. We'll break down the basics and get you building cool stuff
                  in no time.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-green-900 font-light tracking-tight">What you'll learn:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Python fundamentals and syntax from scratch
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Data structures, loops, and functions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Object-oriented programming concepts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Building real-world projects and applications
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-sm text-green-600 font-light tracking-tight">1500+ students enrolled</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-sm text-green-600 font-light tracking-tight">Lifetime access</span>
                  </div>
                </div>

                <Button className="w-full bg-green-700 hover:bg-green-800 text-white" asChild>
                  <Link
                    href="https://www.udemy.com/course/introduction-to-python-bootcamp/?kw=Introduction+To+Python+for+Complete+Beginners%21&src=sac"
                    target="_blank"
                    className="flex items-center justify-center font-light tracking-tight"
                  >
                    Enroll Now on Udemy
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vibecoding Course */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <Image
                  src="/vibecoding-course.png"
                  alt="Vibecoding Course"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium font-light tracking-tight">
                    Creative & Modern
                  </span>
                  <div className="flex items-center text-sm text-green-600 font-light tracking-tight">
                    <Clock className="w-4 h-4 mr-1" />
                    Self-paced
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-green-900 mb-4 font-light tracking-tight">Vibecoding 101</h2>

                <p className="text-green-600 mb-6 leading-relaxed font-light tracking-tight">
                  Ready to ditch the boring coding tutorials? This course is all about bringing your personality and
                  creativity to the world of programming. Let's build projects that are as unique as you are!
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-green-900 font-light tracking-tight">What you'll learn:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Creative approaches to problem-solving with code
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Modern development tools and workflows
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Building interactive and visually appealing projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-green-600 font-light tracking-tight">
                        Expressing your personality through programming
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-sm text-green-600 font-light tracking-tight">200+ creative coders</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-sm text-green-600 font-light tracking-tight">Portfolio projects</span>
                  </div>
                </div>

                <Button className="w-full bg-green-700 hover:bg-green-800 text-white" asChild>
                  <Link
                    href="https://www.udemy.com/course/vibecoding-101/?kw=Vibecoding+101&src=sac"
                    target="_blank"
                    className="flex items-center justify-center font-light tracking-tight"
                  >
                    Enroll Now on Udemy
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Impact Message */}
          <div className="mt-16 bg-green-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-light tracking-tight">Every Enrollment Makes a Difference</h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto font-light tracking-tight">
              When you enroll in any of our courses, 50% of the revenue goes directly to local charities. You're not
              just learning to code - you're helping to feed families, support education, and strengthen communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2 font-light tracking-tight">1500+</div>
                <div className="text-green-100 font-light tracking-tight">Students across 100+ countries</div>
              </div>
              <div className="bg-green-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2 font-light tracking-tight">4000+</div>
                <div className="text-green-100 font-light tracking-tight">Hours of quality education</div>
              </div>
              <div className="bg-green-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2 font-light tracking-tight">50%</div>
                <div className="text-green-100 font-light tracking-tight">Revenue donated to charities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
