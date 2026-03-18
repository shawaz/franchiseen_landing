import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Franchiseen",
  description: "Terms of Service for Franchiseen, operated by House of Guzarishh FZE LLC.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 2025</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Franchiseen mobile application or website (the "Service"),
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to
                these Terms, do not use the Service.
              </p>
              <p className="mt-3">
                These Terms constitute a legally binding agreement between you and{" "}
                <strong>House of Guzarishh FZE LLC</strong>, registered in Ajman Free Zone,
                United Arab Emirates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
              <p>
                Franchiseen is a platform that connects investors with verified franchise opportunities.
                The Service provides:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>A marketplace for browsing franchise investment opportunities</li>
                <li>Tools for connecting investors with franchisors</li>
                <li>Portfolio tracking and management features</li>
                <li>Secure payment processing via Stripe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Eligibility</h2>
              <p>To use the Service, you must:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into contracts</li>
                <li>Not be prohibited from using the Service under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Account Registration</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. You agree to notify us immediately
                of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Prohibited Uses</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the Service for any unlawful purpose or in violation of any laws</li>
                <li>Impersonate any person or entity</li>
                <li>Transmit unsolicited commercial communications</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Use the Service to engage in fraudulent activity</li>
                <li>Interfere with or disrupt the integrity of the Service</li>
                <li>Use automated bots or scrapers to access the Service</li>
                <li>Post false, misleading, or defamatory content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Investment Disclaimer</h2>
              <p>
                Franchiseen is a marketplace platform and does not provide investment, legal, or
                financial advice. All investment decisions are made at your own risk. Past performance
                of any franchise brand does not guarantee future results. You should conduct your own
                due diligence and consult qualified advisors before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Fees and Payments</h2>
              <p>
                Certain features of the Service may require payment. All payments are processed
                securely through Stripe. You agree to pay all applicable fees in accordance with
                the pricing presented at the time of purchase. All fees are stated in the applicable
                currency and are non-refundable unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by
                House of Guzarishh FZE LLC and are protected by international copyright, trademark,
                and other intellectual property laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, House of Guzarishh FZE LLC shall
                not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, or goodwill, arising from your
                use of or inability to use the Service.
              </p>
              <p className="mt-3">
                Our total liability to you for any claims arising under these Terms shall not exceed
                the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Disclaimers</h2>
              <p>
                The Service is provided "as is" and "as available" without warranties of any kind,
                either express or implied. We do not warrant that the Service will be uninterrupted,
                error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                United Arab Emirates, specifically the laws applicable in Ajman Free Zone. Any
                disputes arising under or in connection with these Terms shall be subject to the
                exclusive jurisdiction of the courts of the United Arab Emirates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service at our
                discretion, with or without notice, for any reason including breach of these Terms.
                Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify you of material changes
                by posting the new Terms on this page. Your continued use of the Service after
                any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Contact</h2>
              <address className="not-italic text-sm text-gray-600">
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
