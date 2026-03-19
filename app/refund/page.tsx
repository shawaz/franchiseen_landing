"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function RefundPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Refund & Cancellation</h1>
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
                Franchisee Responsibility
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  The Franchisee is the <span className="text-foreground font-bold italic font-serif">&quot;Merchant of Record.&quot;</span> Any request for a refund regarding products or services must be directed to the specific franchise location from which the purchase was made.
                </p>
                <div className="p-6 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20">
                   <p className="text-sm">
                     House Of Guzarishh FZE LLC provides the platform infrastructure but is not responsible for individual merchant fulfillment or service quality.
                   </p>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">2</span>
                Processing Refunds
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  Refunds initiated by the Franchisee will be credited back to the customer&apos;s original payment method via <strong>Stripe</strong>. 
                </p>
                <div className="flex items-center gap-4 p-4 bg-brand-50 dark:bg-brand-900/10 rounded-xl border border-brand-100 dark:border-brand-900/20">
                  <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <span className="font-bold">i</span>
                  </div>
                  <p className="text-sm font-medium">Please allow <strong>5-10 business days</strong> for the credit to appear on your statement.</p>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">3</span>
                Platform Fee Adjustments
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  If an order is cancelled or refunded, the Platform Fee previously collected by House Of Guzarishh FZE LLC <span className="text-foreground font-bold">will not</span> be returned to the Franchisee.
                </p>
                <p className="text-sm italic">
                  *Platform fees cover the cost of maintaining the digital infrastructure and facilitating the original transaction.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none text-center pt-8 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-2xl font-bold text-foreground mb-4">Merchant Support</h2>
              <p className="text-muted-foreground mb-8">If you are a franchisee needing assistance with refund processing tools.</p>
              <a 
                href="mailto:help@codelude.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-premium"
              >
                Contact Support
              </a>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
