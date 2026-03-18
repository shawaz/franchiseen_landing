export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start your franchise journey today
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Join thousands of investors already using Franchiseen to discover and invest in verified franchise opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on the</div>
              <div className="text-base font-bold">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zM5 6.49v11.02l7.51-5.51L5 6.49z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500">Get it on</div>
              <div className="text-base font-bold">Google Play</div>
            </div>
          </a>
        </div>

        <p className="mt-8 text-blue-200 text-sm">
          Free to download · Available worldwide
        </p>
      </div>
    </section>
  );
}
