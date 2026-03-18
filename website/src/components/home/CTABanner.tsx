import Link from "next/link";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-500 to-sea-500" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <AnimatedReveal>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Set Sail?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Your private Mediterranean experience awaits. Choose your moment and
            let Captain Patrick create something unforgettable.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Book Your Experience
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
