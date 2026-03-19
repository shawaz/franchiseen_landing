"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ShippingPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Shipping & Delivery</h1>
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
                Fulfillment
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  Shipping and delivery of physical goods are the <span className="text-foreground font-bold">sole responsibility</span> of the individual Franchisee using the platform.
                </p>
                <div className="p-6 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                  <p className="text-sm italic">
                    House Of Guzarishh FZE LLC does not maintain inventory or handle the logistics of shipping for individual franchise outlets.
                  </p>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">2</span>
                International Shipping (Import/Export)
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  As our license covers Import & Export, some goods may be shipped internationally. Customers are responsible for any <strong>local customs duties, taxes, or import fees</strong> applicable in their respective countries.
                </p>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-xl">
                  <p className="text-xs text-yellow-800 dark:text-yellow-400 font-bold uppercase mb-1">Important Notice</p>
                  <p className="text-sm">Deliveries across international borders may be subject to inspection and delays by customs authorities.</p>
                </div>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 flex items-center justify-center text-sm font-bold">3</span>
                Delivery Timelines
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 px-1">
                <p>
                  Estimated delivery dates are provided by the Franchisee at the time of checkout. <strong>House Of Guzarishh FZE LLC</strong> is not liable for delays caused by shipping carriers or customs clearance.
                </p>
              </div>
            </section>

            <section className="prose prose-stone dark:prose-invert max-w-none text-center pt-8 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-2xl font-bold text-foreground mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-8">For tracking information, please refer to the email confirmation sent by the merchant.</p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
