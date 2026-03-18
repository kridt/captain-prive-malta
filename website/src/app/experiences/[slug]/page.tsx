import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PACKAGES, ADD_ONS, formatPrice } from "@/lib/constants";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PageHero } from "@/components/shared/PageHero";
import { Clock, Users, Check, ArrowRight, Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: pkg.name,
    description: pkg.description,
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const otherPackages = PACKAGES.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        label={
          pkg.category === "romantic"
            ? "Romantic"
            : pkg.category === "adventure"
              ? "Adventure"
              : pkg.category === "group"
                ? "Group Experience"
                : "Custom"
        }
        title={pkg.name}
        description={pkg.tagline}
        size="large"
      >
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Up to {pkg.maxGuests} guests
          </span>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            5.0
          </span>
        </div>
      </PageHero>

      {/* Content */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedReveal>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-500">
                    The Experience
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy-300">
                    {pkg.longDescription}
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={100}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-500">
                    What&apos;s Included
                  </h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {pkg.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-sand-200/50 transition-all duration-300 hover:shadow-md hover:border-gold-200/50"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100">
                          <Check className="h-3 w-3 text-gold-600" />
                        </div>
                        <span className="text-sm text-navy-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={200}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-500">
                    Highlights
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {pkg.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-xl border border-sand-200/50 bg-white p-4 transition-all duration-300 hover:border-gold-200/50 hover:shadow-sm"
                      >
                        <div className="h-2 w-2 rounded-full bg-gold-400 shrink-0" />
                        <span className="text-sm font-medium text-navy-400">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={300}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-500">
                    Enhance Your Experience
                  </h2>
                  <p className="mt-2 text-sm text-navy-300">
                    Optional add-ons to make your journey even more special.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {ADD_ONS.map((addon) => (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-sand-200/50 transition-all duration-300 hover:shadow-md hover:border-gold-200/50"
                      >
                        <div>
                          <p className="text-sm font-medium text-navy-500">
                            {addon.name}
                          </p>
                          <p className="text-xs text-navy-300">
                            {addon.description}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-gold-500 shrink-0 ml-4">
                          {formatPrice(addon.price, addon.priceMax)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedReveal>
                  <div className="rounded-2xl bg-white p-6 shadow-lg border border-sand-200/50">
                    <div className="text-center">
                      <p className="text-sm text-navy-300">Starting from</p>
                      <p className="mt-1 font-serif text-3xl font-bold text-navy-500">
                        {formatPrice(pkg.price, pkg.priceMax)}
                      </p>
                      <p className="text-xs text-navy-300">per experience</p>
                    </div>

                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex items-center justify-between py-2 border-b border-sand-100">
                        <span className="text-navy-300">Duration</span>
                        <span className="font-medium text-navy-500">
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-sand-100">
                        <span className="text-navy-300">Max guests</span>
                        <span className="font-medium text-navy-500">
                          {pkg.maxGuests}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-sand-100">
                        <span className="text-navy-300">Season</span>
                        <span className="font-medium text-navy-500">
                          April - October
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-navy-300">Departure</span>
                        <span className="font-medium text-navy-500">
                          Bugibba, Malta
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/booking?package=${pkg.slug}`}
                      className="mt-6 block w-full rounded-full bg-gold-500 py-3.5 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
                    >
                      Book This Experience
                    </Link>

                    <p className="mt-4 text-center text-xs text-navy-300">
                      Free cancellation up to 48 hours before departure
                    </p>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-24">
            <AnimatedReveal>
              <h2 className="font-serif text-2xl font-bold text-navy-500">
                You Might Also Love
              </h2>
            </AnimatedReveal>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {otherPackages.map((other, i) => (
                <AnimatedReveal key={other.slug} delay={i * 100}>
                  <Link
                    href={`/experiences/${other.slug}`}
                    className="card-premium group flex overflow-hidden rounded-2xl bg-white shadow-sm border border-sand-200/50"
                  >
                    <div className="w-1/3 bg-gradient-to-br from-navy-400 to-sea-500 shrink-0" />
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-navy-500 group-hover:text-gold-600 transition-colors duration-300">
                        {other.name}
                      </h3>
                      <p className="mt-1 text-sm text-navy-300 line-clamp-2">
                        {other.tagline}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-sm font-medium text-gold-500">
                        From {formatPrice(other.price)}
                        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
