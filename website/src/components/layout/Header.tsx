"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-navy-500" : "text-white"
              }`}
            >
              Captain Prive
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-500 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? "text-navy-500" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/booking"
                className="hidden rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)] md:inline-block"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden transition-colors duration-300 ${
                  isScrolled ? "text-navy-500" : "text-white"
                }`}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-lg font-bold text-navy-500">
              Captain Prive
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-1 hover:bg-sand-100 transition-colors"
            >
              <X className="h-5 w-5 text-navy-400" />
            </button>
          </div>
          <nav className="flex flex-col px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-sand-100 py-4 text-lg font-medium text-navy-500 transition-colors hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-8">
            <Link
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full rounded-full bg-gold-500 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
