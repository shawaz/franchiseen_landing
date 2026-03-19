"use client";

import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-stone-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-accent-600/20" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Star className="w-3 h-3 fill-current" />
              Rated 4.9/5 by 10k+ Users
            </motion.div> */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-[1.1]"
            >
              Start your <br />
              <span className="text-gradient">franchise journey</span> today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Join thousands of users already using Franchiseen to discover and manage verified franchise deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* App Store */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-2xl hover:scale-105 transition-all shadow-premium group"
              >
                <Apple className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on the</div>
                  <div className="text-lg font-black leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-stone-800 text-white rounded-2xl border border-white/10 hover:scale-105 transition-all shadow-premium group"
              >
                <Play className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</div>
                  <div className="text-lg font-black leading-tight">Google Play</div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-stone-500 text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                Free to download
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                Available worldwide
              </div>
            </motion.div>
          </div>

          {/* Right Mockups (Angled Phones) */}
          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-10 right-0 w-[280px] h-[580px] rounded-[3rem] bg-stone-800 border-[8px] border-stone-700 shadow-2xl origin-bottom overflow-hidden"
            >
              {/* Mock App UI */}
              <div className="p-6 pt-12 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500" />
                <div className="w-full h-4 rounded-full bg-stone-700" />
                <div className="w-2/3 h-4 rounded-full bg-stone-700" />
                <div className="grid grid-cols-2 gap-3 mt-8">
                  <div className="aspect-square rounded-2xl bg-stone-700/50" />
                  <div className="aspect-square rounded-2xl bg-stone-700/50" />
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-stone-700/30 border border-white/5">
                  <div className="w-1/2 h-3 rounded-full bg-stone-600 mb-2" />
                  <div className="w-full h-8 rounded-xl bg-brand-500/20 border border-brand-500/30" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150, rotate: 20 }}
              whileInView={{ opacity: 1, x: 60, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 right-0 w-[280px] h-[580px] rounded-[3rem] bg-stone-900 border-[8px] border-stone-800 shadow-2xl origin-bottom overflow-hidden z-20"
            >
              {/* Mock App UI 2 */}
              <div className="p-6 pt-12 space-y-4">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-stone-800" />
                  <div className="w-24 h-4 rounded-full bg-stone-800" />
                </div>
                <div className="w-full h-40 rounded-3xl bg-stone-800" />
                <div className="space-y-2">
                  <div className="w-full h-4 rounded-full bg-stone-800" />
                  <div className="w-full h-4 rounded-full bg-stone-800" />
                  <div className="w-3/4 h-4 rounded-full bg-stone-800" />
                </div>
                <div className="mt-8 h-12 rounded-2xl bg-white shadow-lg" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
