import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MessageCircle, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-green-900 mb-6">Let's Connect</h1>
            <p className="text-xl text-green-600 leading-relaxed font-medium">
              We're real people passionate about helping you succeed. Have questions about our courses or our mission?
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-2xl font-semibold text-green-900 mb-4">Send us an Email</h2>
              <p className="text-green-600 mb-6 font-medium">
                Got questions about our courses, our mission, or just want to say hi? We read every email and respond
                personally.
              </p>
              <Button className="bg-green-700 hover:bg-green-800 text-white font-medium" asChild>
                <Link href="mailto:codewithpurpose2@gmail.com">Email Us</Link>
              </Button>
            </div>

            {/* General Inquiries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-2xl font-semibold text-green-900 mb-4">General Inquiries</h2>
              <p className="text-green-600 mb-6 font-medium">
                Whether you're a potential student, partner organization, or just curious about what we do, we're here
                to help.
              </p>
              <Button
                variant="outline"
                className="border-green-700 text-green-700 hover:bg-green-50 font-medium"
                asChild
              >
                <Link href="mailto:codewithpurpose2@gmail.com">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-green-700 mr-2" />
              <h3 className="text-xl font-semibold text-green-900">We're Here to Help</h3>
            </div>
            <p className="text-green-700 max-w-2xl mx-auto font-medium">
              At CodeWithPurpose, we believe in building genuine relationships with our community. When you reach out,
              you're not just getting an automated response - you're connecting with real people who care about your
              success and the impact we can make together.
            </p>
          </div>

          {/* Response Time */}
          <div className="mt-8 text-center">
            <p className="text-green-600 font-medium">
              <strong>Response Time:</strong> We typically respond within 24 hours during weekdays. Thanks for your
              patience as we personally read and respond to every message.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8 font-medium">
            Don't wait to begin making a difference. Check out our courses and join our community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-medium" asChild>
              <Link href="/programs">View Our Programs</Link>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white font-medium" asChild>
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
