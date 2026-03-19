import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import { Briefcase, Coins, ShieldCheck, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Franchise Brands", icon: Briefcase },
  { value: "AED 100M+", label: "Capital Deployed", icon: Coins },
  { value: "UAE", label: "Regulated Platform", icon: ShieldCheck },
  { value: "4.8★", label: "Investor Rating", icon: Star },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
