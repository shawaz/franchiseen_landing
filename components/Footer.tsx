import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
    // { name: "Shipping Policy", href: "/shipping" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  company: [
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-yellow-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Brand & Mission */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 group">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="font-black text-white text-2xl tracking-tight">FRANCHISEEN</span>
          </div>
          <p className="text-stone-500 leading-relaxed max-w-lg mx-auto mb-8">
            The premier marketplace for franchise discovery and deal management across the Middle East.
          </p>

          {/* Quick Links Horizontal */}
          {/* <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-semibold uppercase tracking-wider hover:text-yellow-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* <div className="flex justify-center gap-4">
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
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-600">
            <p>© {new Date().getFullYear()} House of Guzarishh FZE LLC</p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-stone-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mandatory Legal Notice */}
          <div className="max-w-3xl border border-white/5 bg-white/5 p-4 rounded-xl text-[9px] leading-relaxed uppercase tracking-wider text-stone-500">
            <p>
              <span className="text-stone-400 font-bold">Legal Notice:</span> House Of Guzarishh FZE LLC is an Ajman NuVentures Centre Free Zone establishment, established according to the Amiri Decree No.15 of 2023. Registered Capital: AED 100,000. Address: BC-889215, Amber Gem Tower, Ajman, UAE. Manager: Shabnaz Sharif Hameed Shareef.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
