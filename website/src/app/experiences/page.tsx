"use client";

import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { Clock, Users, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        label="Choose Your Journey"
        title="Our Experiences"
        description="Each experience is built around emotion, atmosphere, and personal connection — not just a boat ride."
      />

      {/* Packages Grid */}
      <section className="py-28 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg, i) => (
              <AnimatedReveal key={pkg.slug} delay={i * 100} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={`/experiences/${pkg.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-sand-200/50 transition-shadow duration-500 hover:shadow-xl h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy-400 to-sea-500">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-navy-400 to-sea-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent z-10" />
                      <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                        <span className="inline-flex items-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
                          {formatPrice(pkg.price, pkg.priceMax)}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                          {pkg.category === "romantic"
                            ? "Romantic"
                            : pkg.category === "adventure"
                              ? "Adventure"
                              : pkg.category === "group"
                                ? "Group"
                                : "Custom"}
                        </span>
                        <h3 className="mt-2 font-serif text-xl font-bold text-navy-500 group-hover:text-gold-600 transition-colors duration-300">
                          {pkg.name}
                        </h3>
                        <p className="mt-2 text-sm text-navy-300 line-clamp-2">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-sand-100">
                        <div className="flex items-center gap-3 text-xs text-navy-300">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-gold-400" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-gold-400" />
                            Up to {pkg.maxGuests}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                          Details
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>

          {/* Custom CTA */}
          <AnimatedReveal variant="scaleUp">
            <div className="relative mt-20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-navy-900" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(58,143,183,0.15)_0%,_transparent_60%)]" />
              <div className="relative p-8 sm:p-12 text-center">
                <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Have Something Special in Mind?
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-base text-white/50">
                  Our Custom VIP Charter is fully tailored to your vision. Corporate
                  events, birthdays, photography sessions — tell us your idea.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
