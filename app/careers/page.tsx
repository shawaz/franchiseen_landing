"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Heart, Rocket, Smile } from "lucide-react";

const positions = [
  {
    title: "Product Designer",
    location: "Dubai, UAE / Remote",
    type: "Full-time",
    category: "Design",
  },
  {
    title: "Growth Lead",
    location: "Dubai, UAE",
    type: "Full-time",
    category: "Marketing",
  },
  {
    title: "Frontend Engineer (Next.js)",
    location: "Remote",
    type: "Freelance / Contract",
    category: "Engineering",
  },
  {
    title: "Operations Manager",
    location: "Ajman, UAE",
    type: "Full-time",
    category: "Operations",
  },
];

const benefits = [
  { title: "Impactful Work", description: "Build products that change how franchise discovery and deal management happens.", icon: Rocket },
  { title: "Flexibility", description: "We value output over hours. Work from where you&apos;re most productive.", icon: Smile },
  { title: "Health & Wellness", description: "Comprehensive health coverage for you and your family.", icon: Heart },
  { title: "Learning Fund", description: "Annual budget for books, courses, and conferences.", icon: Briefcase },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-yellow-500 text-stone-900 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/10 text-stone-900 text-xs font-bold uppercase tracking-wider mb-8 border border-stone-900/10"
          >
            Join the Revolution
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-8 tracking-tight"
          >
            BUILD THE FUTURE OF <br className="hidden sm:block" /> FRANCHISE MARKETPLACE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-800 max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re looking for ambitious minds to help us build the Middle East&apos;s most trusted franchise discovery and deal management platform.
          </motion.p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-24 bg-white dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-900 dark:text-stone-50">Why Join Us?</h2>
            <p className="text-stone-500 max-w-xl mx-auto">We provide more than just a paycheck. We offer a culture of growth and impact.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-white/5"
              >
                <div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 shadow-sm">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-50">{b.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-stone-50 dark:bg-stone-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-900 dark:text-stone-50">Open Positions</h2>
            <p className="text-stone-500">Find your next challenge and join our mission.</p>
          </div>
          
          <div className="space-y-4">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md mb-2 inline-block">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">{p.title}</h3>
                  <p className="text-sm text-stone-400">{p.location} • {p.type}</p>
                </div>
                <button className="px-6 py-3 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white dark:text-stone-300 text-sm font-bold group-hover:bg-yellow-500 group-hover:text-stone-900 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-12 rounded-[40px] bg-stone-900 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px]" />
            <h3 className="text-2xl font-bold text-white mb-4">Don&apos;t see a fit?</h3>
            <p className="text-stone-400 mb-8 max-w-sm mx-auto">We&apos;re always looking for talented people. Send us your CV and we&apos;ll keep you in mind.</p>
            <a href="mailto:careers@franchiseen.co" className="text-yellow-500 font-bold hover:underline">careers@franchiseen.co</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
