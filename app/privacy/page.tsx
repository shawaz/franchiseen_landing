"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
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
                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 flex items-center justify-center text-sm font-bold">1</span>
                Introduction
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  This Privacy Policy describes how <strong>House of Guzarishh FZE LLC</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
                  registered in Ajman Free Zone, United Arab Emirates, collects, uses, and protects personal
                  information you provide through the Franchiseen mobile application and website (collectively,
                  the &quot;Service&quot;).
                </p>
                <p>
                  By using our Service, you agree to the collection and use of information in accordance with
                  this policy.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 flex items-center justify-center text-sm font-bold">2</span>
                Information Collection
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>We may collect several different types of information, including but not limited to:</p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Account information:</strong> Name, email address, and password when you create an account.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Profile information:</strong> Optional information such as phone number and nationality.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Financial information:</strong> Payment details for subscription or platform fees processed securely by Stripe. We do not store full card numbers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Usage data:</strong> Information about how you interact with our app, including pages viewed and features used.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 flex items-center justify-center text-sm font-bold">3</span>
                How We Use Your Information
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>We use the information we collect to:</p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                  {[
                    "Provide, maintain, and improve our Service",
                    "Process transactions and send confirmations",
                    "Send updates and security alerts",
                    "Respond to customer service requests",
                    "Analyze usage patterns",
                    "Comply with legal obligations"
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
                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 flex items-center justify-center text-sm font-bold">4</span>
                Third-Party Services
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>We use the following third-party services that may collect information:</p>
                <div className="grid gap-4">
                  <div className="p-5 rounded-2xl border border-brand-100 dark:border-brand-900/20 bg-brand-50/30 dark:bg-brand-900/5">
                    <p className="font-bold text-foreground mb-2">Stripe</p>
                    <p className="text-sm">Payment processing. Stripe&apos;s privacy policy is available at stripe.com/privacy.</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20">
                    <p className="font-bold text-foreground mb-2">Supabase</p>
                    <p className="text-sm">Secure authentication and database infrastructure.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none shadow-premium bg-stone-900 rounded-3xl p-8 text-white border border-white/5">
               <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
               <p className="text-white/70 leading-relaxed mb-6">
                 Under the UAE&apos;s Federal Decree-Law No. 45 of 2021 on Personal Data Protection (&quot;PDPL&quot;), 
                 you have the right to access, rectify, and delete your personal data.
               </p>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none bg-stone-50 dark:bg-stone-900/50 p-8 rounded-3xl border border-stone-100 dark:border-stone-800">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">6</span>
                Contact Us
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-bold text-foreground">House of Guzarishh FZE LLC</p>
                <p className="text-sm">Ajman Free Zone, United Arab Emirates</p>
                <a href="mailto:hello@franchiseen.com" className="text-brand-600 font-bold hover:underline block mt-2">
                  hello@franchiseen.com
                </a>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
