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
                About the Company
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  The website <span className="text-foreground font-semibold">franchiseen.com</span> is operated by <strong>House Of Guzarishh FZE LLC</strong>, 
                  a Limited Liability Establishment (F.Z.E. L.L.C.) incorporated in the Ajman NuVentures Centre Free Zone (Amiri Decree No.15 of 2023).
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-100 dark:border-stone-800">
                    <p className="text-xs text-stone-500 uppercase font-bold mb-1">Registered Capital</p>
                    <p className="text-foreground font-bold italic tracking-tight">AED 100,000</p>
                  </div>
                  <div className="p-4 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-100 dark:border-stone-800">
                    <p className="text-xs text-stone-500 uppercase font-bold mb-1">Manager</p>
                    <p className="text-foreground font-bold">Shabnaz Sharif Hameed Shareef</p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  <span className="font-bold text-foreground">Office Address:</span> BC-889215, Amber Gem Tower, Ajman, UAE.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">2</span>
                Nature of Service
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  The Company provides a franchise management platform. We are a software service provider and do not own or operate the individual franchise outlets. 
                  Each Franchisee is an independent legal entity responsible for its own operations and customer fulfillment.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">3</span>
                Platform Fees & Deductions
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  By using our platform, the Franchisee agrees to pay a Platform Fee for every transaction processed.
                </p>
                <div className="p-6 rounded-2xl border border-brand-100 dark:border-brand-900/20 bg-brand-50/30 dark:bg-brand-900/10 mb-4 text-center">
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-black uppercase tracking-widest mb-1">Current Platform Fee</p>
                  <p className="text-3xl font-black text-brand-700 dark:text-brand-400 italic">5% <span className="text-sm font-normal">per transaction</span></p>
                </div>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Collection:</strong> You expressly authorize House Of Guzarishh FZE LLC to instruct Stripe to deduct this fee automatically from your sales revenue before the remaining funds are paid out to your bank account.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Non-Refundability:</strong> Platform fees are charged for the use of the software and are generally non-refundable, even if the Franchisee refunds the end customer.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">4</span>
                Payment Processing
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  Payment processing services for Franchisees on our platform are provided by <strong>Stripe</strong> and are subject to the Stripe Connected Account Agreement.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">5</span>
                Governing Law
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  These terms are governed by the laws of the <span className="text-foreground font-bold">Emirate of Ajman, United Arab Emirates</span>. Any disputes shall be settled in the courts of Ajman.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none text-center pt-8 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-8">If you have any questions about these Terms, feel free to contact our team.</p>
              <a 
                href="mailto:help@codelude.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-premium"
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
