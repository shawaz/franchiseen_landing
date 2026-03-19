"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-xs font-bold tracking-widest uppercase rounded-full border border-brand-100 dark:border-brand-800/50 inline-block mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 2025</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass shadow-premium rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-stone-800 space-y-12"
          >
            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">1</span>
                Acceptance of Terms
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  By accessing or using the Franchiseen mobile application or website (the &quot;Service&quot;),
                  you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to
                  these Terms, do not use the Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and <strong>House of Guzarishh FZE LLC</strong>,
                  registered in Ajman Free Zone, United Arab Emirates.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">2</span>
                Description of Service
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  Franchiseen is a platform that connects franchisees with verified franchise opportunities and franchisors.
                  The Service provides:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                  {[
                    "Marketplace for franchise opportunities",
                    "Tools for investor-franchisor connection",
                    "Portfolio tracking and management",
                    "Secure payment processing via Stripe"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 p-3 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-100 dark:border-stone-800">
                      <span className="text-brand-600 mt-1">✓</span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">3</span>
                Platform Disclaimer
              </h2>
              <div className="p-6 rounded-2xl border border-brand-100 dark:border-brand-900/20 bg-brand-50/30 dark:bg-brand-900/10 text-muted-foreground">
                <p className="font-bold text-foreground mb-2">Important Notice</p>
                <p className="text-sm">
                  Franchiseen is a marketplace platform and does not provide legal, or
                  financial advice. All business decisions are made at your own risk. You should conduct 
                  your own due diligence and consult qualified advisors before entering into any franchise agreements.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">4</span>
                Prohibited Uses
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <ul className="grid gap-3 list-none pl-0">
                  {[
                    "Use the Service for any unlawful purpose",
                    "Impersonate any person or entity",
                    "Attempt unauthorized access to the Service",
                    "Use automated bots or scrapers",
                    "Interfere with the integrity of the Service"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">5</span>
                Intellectual Property
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  The Service and its original content, features, and functionality are owned by
                  House of Guzarishh FZE LLC and are protected by international copyright and trademark laws.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">6</span>
                Termination
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  We reserve the right to suspend or terminate your access to the Service at our
                  discretion, with or without notice, for any reason including breach of these Terms.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none text-center pt-8 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-8">If you have any questions about these Terms, feel free to contact our team.</p>
              <a 
                href="mailto:hello@franchiseen.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-glow"
              >
                Contact Legal Team
              </a>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
