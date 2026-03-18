import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Captain Prive Malta | Premium Private Sea Experiences",
    template: "%s | Captain Prive Malta",
  },
  description:
    "Curated, intimate private boat charter experiences in Malta. Sunset cruises, proposals, hidden coves & more. Led personally by Captain Patrick.",
  keywords: [
    "Malta boat charter",
    "private boat tour Malta",
    "sunset cruise Malta",
    "proposal boat Malta",
    "Blue Lagoon private charter",
    "luxury boat experience Malta",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Captain Prive Malta",
    title: "Captain Prive Malta | Premium Private Sea Experiences",
    description:
      "Curated, intimate private boat charter experiences in Malta. Led personally by Captain Patrick.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="bg-navy-500 text-white text-center text-sm py-2 px-4 font-medium">
          Demo Site — This is a preview. Booking is not yet available.
        </div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
