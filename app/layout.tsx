import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franchiseen — Invest in Franchise Brands",
  description:
    "Discover and invest in verified franchise opportunities across the UAE and beyond. Browse brands, connect with franchisors, and grow your portfolio with Franchiseen.",
  metadataBase: new URL("https://franchiseen.com"),
  openGraph: {
    title: "Franchiseen — Invest in Franchise Brands",
    description:
      "Discover and invest in verified franchise opportunities across the UAE and beyond.",
    url: "https://franchiseen.com",
    siteName: "Franchiseen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchiseen — Invest in Franchise Brands",
    description:
      "Discover and invest in verified franchise opportunities across the UAE and beyond.",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
