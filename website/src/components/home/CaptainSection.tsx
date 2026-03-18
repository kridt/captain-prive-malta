"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function CaptainSection() {
  return (
    <section className="relative py-28 bg-sand-50 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedReveal variant="fadeLeft">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-300 to-sea-400 shadow-2xl">
                {/* Captain photo placeholder */}
                <div className="flex h-full items-center justify-center text-white/50 text-sm">
                  Captain Patrick
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-300/30 -z-10" />
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="fadeRight" delay={200}>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                Meet Your Captain
              </span>
              <div className="mt-3 w-12 divider-gold" />
              <h2 className="mt-5 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                Captain Patrick
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-300">
                At the heart of Captain Prive Malta is Patrick — a Danish-born
                seafarer who has called Malta home for more than five years. His
                warm energy, great storytelling, and genuine passion for the sea
                create experiences that go far beyond a boat ride.
              </p>
              <blockquote className="mt-6 border-l-2 border-gold-400 pl-5">
                <p className="font-serif text-lg italic text-navy-400">
                  &ldquo;Every guest should leave feeling special, happy, and
                  connected — not just to the sea, but to Malta itself.&rdquo;
                </p>
              </blockquote>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600 group"
              >
                Read Patrick&apos;s Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
