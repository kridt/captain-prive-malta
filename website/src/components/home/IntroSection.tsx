"use client";

import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Anchor, Heart, Compass } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Intimate & Personal",
    description:
      "Every charter is private. Every route is tailored. You receive the full attention of your captain.",
  },
  {
    icon: Compass,
    title: "Authentically Maltese",
    description:
      "Hidden coves, local stories, and unique coastal landscapes that only a local captain can share.",
  },
  {
    icon: Anchor,
    title: "Effortless Luxury",
    description:
      "From chilled drinks on arrival to seamless navigation — designed to feel smooth, calm, and beautifully simple.",
  },
];

export function IntroSection() {
  return (
    <section className="relative py-28 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedReveal variant="blurIn">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
              Your Private Escape
            </span>
            <div className="mx-auto mt-4 w-12 divider-gold" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-navy-500 sm:text-4xl lg:text-5xl">
              Where Luxury Meets the Sea
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-300">
              Captain Prive Malta delivers exclusive, high-quality private sea
              experiences that blend luxury, authenticity, and personal
              connection. Every journey is hosted personally by Captain Patrick
              — creating moments that stay with you long after you return to
              shore.
            </p>
          </div>
        </AnimatedReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 150} variant="scaleUp">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl bg-white p-8 text-center shadow-sm border border-sand-200/50"
              >
                {/* Subtle gold accent on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-500 group-hover:via-gold-400/60" />

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold-200/50">
                  <item.icon className="h-7 w-7 text-gold-500 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
