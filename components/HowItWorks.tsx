const steps = [
  {
    step: "01",
    title: "Browse Brands",
    description:
      "Explore a curated list of verified franchise brands across food, retail, fitness, and more. Filter by investment size, region, and industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Connect & Invest",
    description:
      "Review detailed brand profiles, connect directly with franchisors, and initiate your investment — all through the Franchiseen app.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Grow & Earn",
    description:
      "Track your franchise investments, monitor performance, and grow your portfolio. Real-time updates keep you in control.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How Franchiseen Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-200 to-blue-200" />

          {steps.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center p-6">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-blue-400 tracking-widest mb-2">
                STEP {s.step}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
