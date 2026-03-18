import type { Metadata } from "next";
import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { Clock, Users, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Explore our curated private boat experiences in Malta — from romantic sunset cruises to private Blue Lagoon escapes. Each journey is unique.",
};

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-500 to-sea-500" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
            Choose Your Journey
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Our Experiences
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Each experience is built around emotion, atmosphere, and personal
            connection — not just a boat ride.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg, i) => (
              <AnimatedReveal key={pkg.slug} delay={i * 100}>
                <Link
                  href={`/experiences/${pkg.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy-400 to-sea-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="rounded-full bg-gold-500/90 px-3 py-1 text-xs font-semibold text-white">
                        {formatPrice(pkg.price, pkg.priceMax)}
                      </span>
                      <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-navy-500/0 transition-colors group-hover:bg-navy-500/10" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-gold-500">
                        {pkg.category === "romantic"
                          ? "Romantic"
                          : pkg.category === "adventure"
                            ? "Adventure"
                            : pkg.category === "group"
                              ? "Group"
                              : "Custom"}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-bold text-navy-500 group-hover:text-gold-600 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="mt-2 text-sm text-navy-300 line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-sand-100">
                      <div className="flex items-center gap-3 text-xs text-navy-300">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          Up to {pkg.maxGuests}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                        Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>

          {/* Custom CTA */}
          <AnimatedReveal>
            <div className="mt-16 rounded-2xl bg-navy-500 p-8 sm:p-12 text-center">
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Have Something Special in Mind?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-base text-white/70">
                Our Custom VIP Charter is fully tailored to your vision. Corporate
                events, birthdays, photography sessions — tell us your idea.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
