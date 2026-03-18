"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">Franchiseen</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </a>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="#download"
              className="w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
