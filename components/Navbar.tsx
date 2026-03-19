"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        scrolled ? "top-2" : "top-0"
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto transition-all duration-300 rounded-2xl",
          scrolled ? "glass shadow-premium px-4 sm:px-6 py-2" : "bg-transparent py-2"
        )}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="Logo" width={28} height={28} />
            <span className="font-bold text-foreground text-xl tracking-tight">
              FRANCHISEEN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          {/* <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#download"
              className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 hover:shadow-glow transition-all flex items-center gap-2 group"
            >
              Download App
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-foreground/70 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-premium p-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium text-foreground/70 active:text-brand-600 active:bg-brand-50 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-stone-100 dark:border-stone-800" />
              <div className="flex items-center justify-between px-4 py-2 bg-stone-50 dark:bg-stone-900/50 rounded-xl mb-2">
                <span className="text-sm font-medium text-foreground/70">Switch Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/#download"
                className="w-full text-center px-4 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-glow"
                onClick={() => setIsOpen(false)}
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
