import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function CaptainSection() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedReveal>
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-300 to-sea-400 shadow-lg">
              {/* Captain photo placeholder */}
              <div className="flex h-full items-center justify-center text-white/50 text-sm">
                Captain Patrick
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={200}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
                Meet Your Captain
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                Captain Patrick
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-300">
                At the heart of Captain Prive Malta is Patrick — a Danish-born
                seafarer who has called Malta home for more than five years. His
                warm energy, great storytelling, and genuine passion for the sea
                create experiences that go far beyond a boat ride.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-navy-300">
                &ldquo;Every guest should leave feeling special, happy, and
                connected — not just to the sea, but to Malta itself.&rdquo;
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600"
              >
                Read Patrick&apos;s Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
