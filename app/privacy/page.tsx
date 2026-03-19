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
            <p className="text-muted-foreground">Last updated: March 2026</p>
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
                Data Collection
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  <strong>House Of Guzarishh FZE LLC</strong> collects data necessary to facilitate franchise operations. This includes:
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-3 p-4 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-100 dark:border-stone-800">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Franchisee Information:</strong> Business licenses, identity documents of the owner, and banking information for payouts.</span>
                  </li>
                  <li className="flex gap-3 p-4 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-100 dark:border-stone-800">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Customer Information:</strong> When a customer buys from a franchisee, we process names, emails, and shipping addresses to facilitate the order.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">2</span>
                Financial Data Security
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  We utilize <strong>Stripe</strong> for all financial transactions. House Of Guzarishh FZE LLC does not store sensitive credit card data. All such data is encrypted and handled by Stripe in accordance with global security standards.
                </p>
                <div className="p-6 rounded-2xl border border-brand-100 dark:border-brand-900/20 bg-brand-50/30 dark:bg-brand-900/10 text-center">
                   <p className="text-sm font-medium text-brand-800 dark:text-brand-300">
                     Your financial security is our priority. All payments are processed through Stripe&apos;s PCI-compliant infrastructure.
                   </p>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">3</span>
                Data Sharing
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  We share transaction data with the respective Franchisee to allow them to fulfill your order. <strong>We do not sell user data to third parties.</strong>
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none bg-stone-50 dark:bg-stone-900/50 p-8 rounded-3xl border border-stone-100 dark:border-stone-800">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center text-sm font-bold">?</span>
                Contact Us
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-bold text-foreground">House Of Guzarishh FZE LLC</p>
                <p className="text-sm">BC-889215, Amber Gem Tower, Ajman, UAE</p>
                <a href="mailto:help@codelude.com" className="text-brand-600 font-bold hover:underline block mt-2">
                  help@codelude.com
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
