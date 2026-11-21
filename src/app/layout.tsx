
import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GANN | The Gambia Neuroscience Network",
    template: "%s | GANN",
  },
  description:
    "The Gambia Neuroscience Network (GANN) is an emerging interdisciplinary initiative advancing neuroscience, computational neuroscience, machine learning, and NeuroAI in The Gambia.",
  keywords: [
    "GANN",
    "The Gambia Neuroscience Network",
    "Neuroscience",
    "Computational Neuroscience",
    "Machine Learning",
    "NeuroAI",
    "The Gambia",
  ],
  icons: {
    icon: [
      {
        url: "/images/gann-logo.webp",
        type: "image/webp",
      },
    ],
    shortcut: "/images/gann-logo.webp",
    apple: "/images/gann-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>

        {children}

        <Footer />
      </body>
    </html>
  );
}
