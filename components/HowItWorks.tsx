"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Franchise Discovery",
    description: "Discover premium franchise brands vetted for high profitability and sustainable growth.",
    image: "/intro-1.svg",
    color: "bg-yellow-500",
  },
  {
    step: "02",
    title: "Select Location",
    description: "Choose from prime real estate locations optimized for maximum foot traffic and market reach.",
    image: "/intro-2.svg",
    color: "bg-stone-500",
  },
  {
    step: "03",
    title: "Deal Management",
    description: "Manage your onboarding, documents, and deal flow with our structured platform.",
    image: "/intro-3.svg",
    color: "bg-yellow-600",
  },
  {
    step: "04",
    title: "Launch Your Franchise",
    description: "Open your doors to success and start generating revenue with a proven business model.",
    image: "/intro-4.svg",
    color: "bg-stone-800",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            The Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground tracking-tight"
          >
            How Franchiseen Works
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative z-10 w-full aspect-square mb-8 p-4 flex items-center justify-center">
                {/* Background Glow */}
                <div className={`absolute inset-0 ${s.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Image Container */}
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute top-2 right-2 w-10 h-10 bg-yellow-500 text-stone-950 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  {s.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm px-4">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
