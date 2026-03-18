"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PACKAGES, SITE_CONFIG } from "@/lib/constants";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import {
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Download,
  Check,
} from "lucide-react";

export function ConfirmationPageContent() {
  const searchParams = useSearchParams();
  const packageSlug = searchParams.get("package") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const pkg = PACKAGES.find((p) => p.slug === packageSlug);
  const referenceCode = `CPM-2027-${String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0")}`;

  return (
    <>
      {/* Step Indicator */}
      <section className="bg-white border-b border-sand-200 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            {["Experience & Date", "Your Details", "Payment", "Confirmation"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-white text-xs font-bold">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="hidden sm:inline text-navy-300">
                    {step}
                  </span>
                  {i < 3 && <div className="w-8 h-px bg-gold-300 mx-1" />}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="mt-6 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                Booking Confirmed!
              </h1>
              <p className="mt-3 text-lg text-navy-300">
                Your experience has been booked. We can&apos;t wait to welcome you
                aboard.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={200}>
            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {/* Reference */}
              <div className="text-center border-b border-sand-200 pb-6">
                <p className="text-xs font-medium uppercase tracking-wider text-navy-300">
                  Booking Reference
                </p>
                <p className="mt-1 font-mono text-2xl font-bold text-navy-500 tracking-wider">
                  {referenceCode}
                </p>
              </div>

              {/* Details */}
              {pkg && (
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-sand-50 p-4">
                    <p className="text-lg font-bold text-navy-500">
                      {pkg.name}
                    </p>
                    <p className="text-sm text-navy-300">{pkg.tagline}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-xl bg-sand-50 p-3">
                      <Calendar className="h-4 w-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-xs text-navy-300">Date</p>
                        <p className="text-sm font-medium text-navy-500">
                          {date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-sand-50 p-3">
                      <Clock className="h-4 w-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-xs text-navy-300">Time</p>
                        <p className="text-sm font-medium text-navy-500">
                          {time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-sand-50 p-3">
                      <MapPin className="h-4 w-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-xs text-navy-300">Meeting Point</p>
                        <p className="text-sm font-medium text-navy-500">
                          Bugibba Harbour
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 space-y-3">
                <p className="text-center text-sm text-navy-300">
                  A confirmation email has been sent with all the details.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Captain%20Patrick!%20I've%20just%20booked%20${encodeURIComponent(pkg?.name || "")}%20(ref:%20${referenceCode}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white transition-all hover:bg-[#20bd5a]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message Captain Patrick
                  </a>
                  <button className="flex items-center justify-center gap-2 rounded-xl border border-sand-200 py-3 text-sm font-semibold text-navy-500 transition-all hover:bg-sand-50">
                    <Download className="h-4 w-4" />
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={400}>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
