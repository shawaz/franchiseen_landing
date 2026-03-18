import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+", label: "Franchise Brands" },
  { value: "AED 100M+", label: "Investment Deals" },
  { value: "UAE", label: "Registered & Regulated" },
  { value: "4.8★", label: "App Store Rating" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Stats bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
