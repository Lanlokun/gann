
import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
