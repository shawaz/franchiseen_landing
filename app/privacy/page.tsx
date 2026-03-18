import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Franchiseen",
  description: "Privacy Policy for Franchiseen, operated by House of Guzarishh FZE LLC.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 2025</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy describes how <strong>House of Guzarishh FZE LLC</strong> ("we", "our", or "us"),
                registered in Ajman Free Zone, United Arab Emirates, collects, uses, and protects personal
                information you provide through the Franchiseen mobile application and website (collectively,
                the "Service").
              </p>
              <p className="mt-3">
                By using our Service, you agree to the collection and use of information in accordance with
                this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Account information:</strong> Name, email address, and password when you create an account.
                </li>
                <li>
                  <strong>Profile information:</strong> Optional information such as phone number and nationality.
                </li>
                <li>
                  <strong>Financial information:</strong> Payment details processed securely by Stripe. We do not
                  store full card numbers.
                </li>
                <li>
                  <strong>Usage data:</strong> Information about how you interact with our app, including pages
                  viewed, features used, and time spent.
                </li>
                <li>
                  <strong>Device information:</strong> Device type, operating system, and unique device identifiers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information including confirmations and receipts</li>
                <li>Send administrative messages, updates, and security alerts</li>
                <li>Respond to customer service requests</li>
                <li>Monitor and analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
              <p>We use the following third-party services that may collect information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Stripe:</strong> Payment processing. Stripe's privacy policy is available at
                  stripe.com/privacy.
                </li>
                <li>
                  <strong>Supabase / Authentication providers:</strong> For secure authentication and database
                  services.
                </li>
                <li>
                  <strong>Analytics providers:</strong> We may use analytics tools to understand app usage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as needed to provide
                you services. You may request deletion of your data by contacting us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information,
                including encryption in transit (TLS) and at rest. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:hello@franchiseen.com" className="text-blue-600 hover:underline">
                  hello@franchiseen.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the UAE.
                We ensure appropriate safeguards are in place for such transfers in accordance with
                applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p>
                Our Service is not directed to individuals under the age of 18. We do not knowingly
                collect personal information from minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <address className="not-italic mt-3 text-sm text-gray-600">
                <p><strong>House of Guzarishh FZE LLC</strong></p>
                <p>Ajman Free Zone, United Arab Emirates</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@franchiseen.com" className="text-blue-600 hover:underline">
                    hello@franchiseen.com
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
