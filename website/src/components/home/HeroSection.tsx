import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Layered premium background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a2744_0%,_#0c1425_70%)]" />

      {/* Ambient floating orbs — pure CSS */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sea-500 opacity-20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500 opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sea-300 opacity-20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Horizontal gold line accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Elegant bottom transition — curved SVG wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 120V60C240 20 480 0 720 10C960 20 1200 60 1440 40V120H0Z" fill="var(--color-sand-50)" />
        </svg>
      </div>

      {/* Content — no entrance animations, instantly visible */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            Premium Private Charters
          </span>
        </div>

        <h1 className="mt-8 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Private Sea Experiences
          <br />
          <span className="text-gold-shimmer">in Malta</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg text-white/60 sm:text-xl">
          Curated moments on the Mediterranean. Intimate, personal, unforgettable.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/experiences"
            className="rounded-full bg-gold-500 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
          >
            Explore Experiences
          </Link>
          <Link
            href="/booking"
            className="rounded-full border border-white/20 px-9 py-4 text-base font-semibold text-white/90 transition-all hover:border-gold-400/50 hover:text-gold-300 hover:bg-white/5"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <ChevronDown className="h-4 w-4 text-white/30" />
        </div>
      </div>
    </section>
  );
}
