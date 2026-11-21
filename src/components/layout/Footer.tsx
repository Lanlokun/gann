
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { label: "About GANN", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Training", href: "/training" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "News & Events", href: "/news" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071d40] text-white">
      <div className="container-main grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-3">
        <div>
         
            <Link href="/" className="flex items-center gap-4">
            {/* Logo with white background */}
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                <Image
                src="/images/gann-logo.webp"
                alt="GANN logo"
                width={64}
                height={64}
                className="h-auto w-[64px] object-contain"
                />
            </div>

            {/* Network name */}
            <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-white">
                GANN
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                The Gambia Neuroscience Network
                </p>
            </div>
            </Link>

          <p className="mt-7 max-w-sm text-sm leading-8 text-slate-300">
            Connecting minds and advancing neuroscience,
            computational research, machine learning, and
            responsible AI in The Gambia.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-200">
            Network in Formation
          </p>
        </div>

        <div>
          <h3 className="mb-7 text-base font-bold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-7 text-base font-bold">
            Connect With Us
          </h3>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <MapPin size={18} />
            The Gambia, West Africa
          </div>

          <p className="mt-6 text-sm leading-8 text-slate-300">
            Interested in research, training, membership,
            or institutional collaboration? We would love
            to hear from you.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-200"
          >
            Get in Touch
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-wrap justify-between gap-4 py-6 text-xs text-slate-400">
          <p>
          © 2026 The Gambia Neuroscience Network.            All rights reserved.
          </p>

          <p>
            Brain Science · Machine Learning · NeuroAI
          </p>
        </div>
      </div>
    </footer>
  );
}
