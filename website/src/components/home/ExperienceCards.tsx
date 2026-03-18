import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { Clock, Users, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceCards() {
  const featured = PACKAGES.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            label="Our Experiences"
            title="Curated Moments at Sea"
            description="Each experience is designed around emotion, atmosphere, and storytelling — not just a boat ride."
          />
        </AnimatedReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featured.map((pkg, i) => (
            <AnimatedReveal key={pkg.slug} delay={i * 150}>
              <Link
                href={`/experiences/${pkg.slug}`}
                className="group block overflow-hidden rounded-2xl bg-sand-50 shadow-sm transition-all hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy-400 to-sea-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-gold-500/90 px-3 py-1 text-xs font-semibold text-white">
                      From {formatPrice(pkg.price)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-navy-500/0 transition-colors group-hover:bg-navy-500/10" />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-500 group-hover:text-gold-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 line-clamp-2">
                    {pkg.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-navy-300">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      Up to {pkg.maxGuests}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                    Discover
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal>
          <div className="mt-12 text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-200 px-8 py-3 text-sm font-semibold text-navy-500 transition-all hover:border-gold-500 hover:text-gold-600"
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
