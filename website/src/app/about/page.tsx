import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { Heart, Compass, Anchor, Shield, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Captain Patrick",
  description:
    "Meet Captain Patrick — the Danish-born seafarer behind Captain Prive Malta. Learn about our story, values, and commitment to premium private sea experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="Our Story" title="About Captain Prive" />

      {/* Patrick's Story */}
      <section className="py-28 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <div className="relative">
                <div className="aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-navy-300 to-sea-400 shadow-2xl">
                  <div className="flex h-full items-center justify-center text-white/50 text-sm">
                    Captain Patrick Portrait
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-300/30 -z-10" />
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                  Meet Your Captain
                </span>
                <div className="mt-3 w-12 divider-gold" />
                <h2 className="mt-5 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                  Captain Patrick Wolter
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-300">
                  <p>
                    At the heart of Captain Prive Malta is Captain Patrick, a
                    Danish-born seafarer who has called Malta home for more than
                    five years. His journey began long before the company existed
                    — Patrick grew up sailing from a young age, spending
                    countless hours on the water and developing a natural
                    confidence, respect, and love for the sea.
                  </p>
                  <p>
                    When he moved to Malta, everything changed. He fell in love
                    not only with the island&apos;s coastline, but with its
                    culture, its people, and its rhythm. Malta became the place
                    where he built a life, met his wife, and welcomed his
                    daughter.
                  </p>
                  <p>
                    Patrick is known for his warm energy, great storytelling, and
                    ability to make guests feel instantly comfortable. Whether
                    he&apos;s guiding a couple through a proposal, sharing local
                    secrets about Malta&apos;s coastline, or capturing the
                    perfect photo, he brings a personal touch that transforms a
                    simple boat trip into something meaningful.
                  </p>
                  <blockquote className="border-l-2 border-gold-400 pl-5">
                    <p className="font-serif text-lg italic text-navy-400">
                      &ldquo;Every guest should leave feeling special, happy, and
                      connected — not just to the sea, but to Malta itself.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeading
              label="Our Values"
              title="What Guides Every Journey"
              description="These principles shape every experience we create — from the first message to the final goodbye."
            />
          </AnimatedReveal>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Personal Connection",
                description:
                  "Every trip is private, tailored, and hosted directly by the captain. Guests feel welcomed, recognized, and valued.",
              },
              {
                icon: Anchor,
                title: "Curated Simplicity",
                description:
                  "Luxury is expressed through ease — seamless service, effortless comfort, and thoughtful details.",
              },
              {
                icon: Award,
                title: "Exclusivity Over Volume",
                description:
                  "We prioritize quality, not quantity. Limited capacity ensures premium service and high guest satisfaction.",
              },
              {
                icon: Compass,
                title: "Local Authenticity",
                description:
                  "Experiences highlight Malta's true character — hidden coves, local stories, and unique coastal landscapes.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Fully licensed captain, comprehensive insurance, safety briefings, and strict passenger limits on every trip.",
              },
              {
                icon: Heart,
                title: "Emotion-Driven",
                description:
                  "Each package is designed to evoke emotion: romance, celebration, serenity, or discovery.",
              },
            ].map((value, i) => (
              <AnimatedReveal key={value.title} delay={i * 100}>
                <div className="group rounded-2xl border border-sand-200/50 bg-white p-8 transition-all duration-500 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-100/30">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-500 group-hover:via-gold-400/60" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold-200/50">
                    <value.icon className="h-6 w-6 text-gold-500 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-navy-500">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">
                    {value.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Boat */}
      <section className="py-28 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                  Your Vessel
                </span>
                <div className="mt-3 w-12 divider-gold" />
                <h2 className="mt-5 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                  The Boat
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-300">
                  <p>
                    Our carefully selected premium vessel is designed for comfort
                    and intimacy. Accommodating up to 8 guests, it provides the
                    perfect balance of space and coziness for an unforgettable
                    experience.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comfortable seating and sunbathing areas",
                      "Premium sound system for curated playlists",
                      "Shaded areas for relaxation",
                      "Snorkeling equipment onboard",
                      "Full safety equipment and certifications",
                      "Refreshment station",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-sea-300 to-navy-400 shadow-2xl">
                  <div className="flex h-full items-center justify-center text-white/50 text-sm">
                    The Boat
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-gold-300/30 -z-10" />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a2744_0%,_#0c1425_80%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 0H1440V40C1200 70 960 20 720 40C480 60 240 30 0 50V0Z" fill="var(--color-sand-50)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedReveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/80">
              Your Journey Awaits
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl">
              Experience It Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
              Step aboard and discover why our guests call it unforgettable.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/booking"
                className="rounded-full bg-gold-500 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
              >
                Book Your Experience
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-9 py-4 text-base font-semibold text-white/80 transition-all hover:border-gold-400/50 hover:text-gold-300 hover:bg-white/5"
              >
                Browse Experiences
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
