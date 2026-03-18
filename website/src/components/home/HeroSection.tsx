import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder — gradient for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-500 to-sea-500" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated wave pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300 animate-fade-in">
          Premium Private Charters
        </p>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
          Private Sea Experiences
          <br />
          <span className="text-gold-400">in Malta</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 sm:text-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Curated moments on the Mediterranean. Intimate, personal, unforgettable.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Link
            href="/experiences"
            className="rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Explore Experiences
          </Link>
          <Link
            href="/booking"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}
