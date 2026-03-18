import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-white text-lg">Franchiseen</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Connecting investors with verified franchise opportunities across the UAE and beyond.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Operated by House of Guzarishh FZE LLC<br />
              Ajman Free Zone, UAE
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#features" className="text-sm hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} House of Guzarishh FZE LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Ajman Free Zone, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
