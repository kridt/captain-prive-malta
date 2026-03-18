import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { Clock, Users, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceCards() {
  const featured = PACKAGES.slice(0, 3);

  return (
    <section className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            label="Our Experiences"
            title="Curated Moments at Sea"
            description="Each experience is designed around emotion, atmosphere, and storytelling — not just a boat ride."
          />
        </AnimatedReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {featured.map((pkg, i) => (
            <AnimatedReveal key={pkg.slug} delay={i * 100}>
              <Link
                href={`/experiences/${pkg.slug}`}
                className="card-premium group block overflow-hidden rounded-2xl bg-sand-50 shadow-sm border border-sand-200/50"
              >
                {/* Image placeholder with hover zoom */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-navy-400 to-sea-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
                      From {formatPrice(pkg.price)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-500 group-hover:text-gold-600 transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 line-clamp-2">
                    {pkg.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-navy-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold-400" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-gold-400" />
                      Up to {pkg.maxGuests}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                    Discover
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal>
          <div className="mt-14 text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-200 px-8 py-3.5 text-sm font-semibold text-navy-500 transition-all duration-300 hover:border-gold-500 hover:text-gold-600 hover:shadow-lg hover:shadow-gold-500/10"
            >
              View All Experiences
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
