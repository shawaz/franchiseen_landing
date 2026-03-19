"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Zap } from "lucide-react";

const values = [
  {
    title: "Transparency",
    description: "We believe in clear, data-driven insights for every franchise opportunity.",
    icon: ShieldCheck,
  },
  {
    title: "Growth",
    description: "Our focus is on identifying sustainable, high-yield brands for our investors.",
    icon: Zap,
  },
  {
    title: "Community",
    description: "Building a network of empowered investors across the Middle East.",
    icon: Users,
  },
  {
    title: "Precision",
    description: "Every brand on our platform undergoes a rigorous verification process.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-8 tracking-tight"
          >
            DEMOCRATIZING <span className="text-yellow-500">INVESTMENT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            Franchiseen is on a mission to make high-growth franchise ownership accessible to everyone through fractional investment.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-stone-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-stone-50">Our Story</h2>
              <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
                <p>
                  Founded in Dubai, Franchiseen was born from a simple observation: while the Middle East is home to some of the world's fastest-growing franchises, the barrier to entry for individual investors is often too high.
                </p>
                <p>
                  We set out to bridge this gap by creating a platform that allows anyone to own a piece of a verified, profitable franchise starting with accessible capital.
                </p>
                <p>
                  Today, we are proud to be the region's premier destination for fractional franchise investment, regulated and built for the modern investor.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-stone-200 dark:bg-stone-800 rounded-3xl overflow-hidden relative border border-stone-200 dark:border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-stone-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Innovation in Dubai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-900 dark:text-stone-50">Our Core Values</h2>
            <p className="text-stone-500 max-w-xl mx-auto">The principles that guide everything we do at Franchiseen.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-premium border border-stone-100 dark:border-white/5"
              >
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-900 dark:text-stone-50">{v.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
