"use client";

import Link from "next/link";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a2744_0%,_#0c1425_80%)]" />

      {/* Ambient light */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 0H1440V50C1200 80 960 30 720 50C480 70 240 20 0 60V0Z" fill="var(--color-navy-900)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <AnimatedReveal variant="scaleUp">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/80">
            Your Journey Awaits
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Set Sail?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
            Your private Mediterranean experience awaits. Choose your moment and
            let Captain Patrick create something unforgettable.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="group relative rounded-full bg-gold-500 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
            >
              Book Your Experience
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-9 py-4 text-base font-semibold text-white/80 transition-all hover:border-gold-400/50 hover:text-gold-300 hover:bg-white/5"
            >
              Get in Touch
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
