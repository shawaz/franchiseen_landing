import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  company: [
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ]
  // resources: [
  //   { name: "Features", href: "#features" },
  //   { name: "How It Works", href: "#how-it-works" },
  //   { name: "Success Stories", href: "/stories" },
  // ]
};

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Instagram, href: "#", name: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-yellow-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Brand & Mission */}
        <div className="mb-12">
          <Link href="/" className="flex items-center justify-center gap-2 mb-6 group">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="font-black text-white text-2xl tracking-tight">FRANCHISEEN</span>
          </Link>
          <p className="text-stone-500 leading-relaxed max-w-lg mx-auto mb-8">
            The premier marketplace for franchise discovery and deal management across the Middle East.
          </p>

          {/* Quick Links Horizontal */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-semibold uppercase tracking-wider hover:text-yellow-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition-all group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-600">
          <p>© {new Date().getFullYear()} House of Guzarishh FZE LLC</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-stone-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* <div className="flex gap-8">
            <span>Regulated Platform</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
