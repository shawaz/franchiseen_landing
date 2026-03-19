"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, Lock, Globe } from "lucide-react";

const features = [
  {
    title: "Verified Brands",
    description:
      "Every franchise on Franchiseen is reviewed and verified. No scams, no guesswork — only legitimate, established franchise opportunities.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Real-time Updates",
    description:
      "Stay ahead of the market with live brand updates, new franchise opportunities, and deal notifications pushed straight to your device.",
    icon: Bell,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Secure Payments",
    description:
      "Powered by Stripe, all transactions on Franchiseen are encrypted and secure. Your financial data is always protected.",
    icon: Lock,
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "Multi-currency",
    description:
      "Pay in AED, USD, or other major currencies. Franchiseen handles conversions transparently so you can manage deals globally.",
    icon: Globe,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            Why Franchiseen
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6"
          >
            Everything you need for your franchise journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Built for franchisees in the UAE and beyond, Franchiseen gives you the tools and confidence to make the right franchise expansion decisions.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-premium border border-stone-100 dark:border-white/5 transition-all group"
            >
              <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center ${f.color} mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
