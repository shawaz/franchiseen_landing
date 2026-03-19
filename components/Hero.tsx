"use client";

import { motion, AnimatePresence } from "framer-motion";
import { } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const previewImage = theme === "dark" ? "/previews/app-dark.png" : "/previews/app-light.png";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/20 dark:bg-yellow-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-stone-200/50 dark:bg-stone-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold uppercase tracking-wider mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Now Live in UAE
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 dark:text-stone-50 leading-[1.1] mb-8 tracking-tight"
            >
              BUILD YOUR FRANCHISE EMPIRE
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Franchiseen is the Middle East&apos;s premier marketplace for franchise discovery and deal management.
              Connect with verified brands and manage your expansion journey in one secure platform.
            </motion.p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex-1 relative"
          >
            <div className="relative mx-auto w-[270px] h-[588px] sm:w-[310px] sm:h-[674px] group">
              {/* Outer Shadow */}
              <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Phone Body */}
              <div className="absolute inset-0 bg-stone-800 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-stone-900 overflow-hidden ring-1 ring-white/10">
                {/* Screen */}
                <div className="absolute inset-0 bg-white dark:bg-stone-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {mounted ? (
                      <motion.img
                        key={theme}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={previewImage}
                        alt="Franchiseen App Preview"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-100 dark:bg-stone-900 animate-pulse" />
                    )}
                  </AnimatePresence>
                </div>

                {/* Reflection */}
                <div className="absolute top-0 left-0 w-full h-[50%] bg-white/5 skew-y-[-20deg] pointer-events-none" />
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-stone-900 rounded-2xl z-20 flex items-center justify-center gap-1.5 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
