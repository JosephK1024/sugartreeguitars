import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SugarTree Guitars — Nothing Extra. Nothing Missing.",
    template: "%s · SugarTree Guitars",
  },
  description:
    "Eight handcrafted acoustic guitars a year. Four extraordinary instruments given annually to musicians who deserve them. Built in Amelia, Ohio.",
  icons: {
    icon: "/brand/sugartree-mark.svg",
  },
  openGraph: {
    title: "SugarTree Guitars",
    description: "Eight guitars a year. Every one of them extraordinary.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
