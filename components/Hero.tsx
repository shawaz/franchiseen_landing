import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-60 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Now available on iOS & Android
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Invest in{" "}
              <span className="text-blue-600">Franchise</span>{" "}
              Brands You Believe In
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Franchiseen connects ambitious investors with verified franchise opportunities across the UAE.
              Browse brands, compare investments, and grow your portfolio — all from your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* App Store */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zM5 6.49v11.02l7.51-5.51L5 6.49z"/>
                </svg>
                <div>
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-[500px] sm:w-72 sm:h-[560px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-4 border-gray-800">
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">F</span>
                  </div>
                  <p className="text-white font-bold text-xl mb-1">Franchiseen</p>
                  <p className="text-blue-200 text-sm text-center">Your franchise investment platform</p>

                  <div className="mt-8 w-full space-y-3">
                    {["McDonald's • $500K", "Subway • $180K", "KFC • $425K"].map((item) => (
                      <div key={item} className="bg-white/15 backdrop-blur rounded-xl px-4 py-3">
                        <p className="text-white text-sm font-medium">{item}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          <p className="text-blue-200 text-xs">Verified Brand</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
