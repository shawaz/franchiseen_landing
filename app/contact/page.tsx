import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Franchiseen",
  description: "Get in touch with Franchiseen — operated by House of Guzarishh FZE LLC, Ajman Free Zone, UAE.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have a question about Franchiseen? We&apos;d love to hear from you.
              Reach out and our team will get back to you within 1–2 business days.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Company info */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Company Information</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Company Name</dt>
                    <dd className="text-gray-900 font-medium">House of Guzarishh FZE LLC</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Registered In</dt>
                    <dd className="text-gray-900 font-medium">Ajman Free Zone, United Arab Emirates</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Platform</dt>
                    <dd className="text-gray-900 font-medium">Franchiseen</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="font-bold text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a
                        href="mailto:hello@franchiseen.com"
                        className="text-blue-600 font-medium text-sm hover:underline"
                      >
                        hello@franchiseen.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-gray-900 text-sm font-medium">
                        Ajman Free Zone<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-6">Send a Message</h2>
              <form
                action="mailto:hello@franchiseen.com"
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  This will open your default email client.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
