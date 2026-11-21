
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Training", href: "/training" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container-main flex h-[88px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/gann-logo.webp"
            alt="GANN logo"
            width={58}
            height={58}
            className="h-auto w-[58px] object-contain"
            priority
          />

          <div className="text-[#092653]">
            <span className="block text-[27px] font-extrabold leading-none tracking-tight">
              GANN
            </span>

            <span className="mt-1 block text-[10px] font-semibold leading-[1.35]">
              The Gambia
              <br />
              Neuroscience Network
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[13px] font-semibold transition-colors ${
                  active
                    ? "text-blue-800"
                    : "text-slate-600 hover:text-blue-800"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-green-500" />
                )}
              </Link>
            );
          })}

          <Link
            href="/join"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#092653] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-blue-800"
          >
            Join GANN
            <ArrowUpRight size={15} />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-[#092653] transition hover:bg-slate-100 xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-100 bg-white px-6 py-6 xl:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-[#092653] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Join GANN
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
