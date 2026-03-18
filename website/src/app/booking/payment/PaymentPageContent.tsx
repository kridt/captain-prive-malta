"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Check,
  Lock,
  CreditCard,
} from "lucide-react";

export function PaymentPageContent() {
  const searchParams = useSearchParams();
  const packageSlug = searchParams.get("package") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const total = Number(searchParams.get("total")) || 0;

  const pkg = PACKAGES.find((p) => p.slug === packageSlug);

  return (
    <>
      {/* Step Indicator */}
      <section className="bg-white border-b border-sand-200 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            {["Experience & Date", "Your Details", "Payment", "Confirmation"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                      i < 2
                        ? "bg-gold-500 text-white"
                        : i === 2
                          ? "bg-gold-500 text-white"
                          : "bg-sand-200 text-navy-300"
                    }`}
                  >
                    {i < 2 ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  <span
                    className={`hidden sm:inline ${
                      i === 2 ? "font-medium text-navy-500" : "text-navy-300"
                    }`}
                  >
                    {step}
                  </span>
                  {i < 3 && <div className="w-8 h-px bg-sand-200 mx-1" />}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-sand-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Summary */}
            <AnimatedReveal>
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-serif text-xl font-bold text-navy-500">
                  Review Your Booking
                </h2>

                {pkg && (
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="rounded-xl bg-sand-50 p-4">
                      <p className="text-lg font-bold text-navy-500">
                        {pkg.name}
                      </p>
                      <p className="text-sm text-navy-300">{pkg.tagline}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-3 rounded-xl bg-sand-50 p-3">
                        <Calendar className="h-4 w-4 text-gold-500" />
                        <div>
                          <p className="text-xs text-navy-300">Date</p>
                          <p className="font-medium text-navy-500">{date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-sand-50 p-3">
                        <Clock className="h-4 w-4 text-gold-500" />
                        <div>
                          <p className="text-xs text-navy-300">Time</p>
                          <p className="font-medium text-navy-500">{time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-sand-200 pt-4 flex justify-between text-lg">
                      <span className="font-semibold text-navy-500">
                        Total
                      </span>
                      <span className="font-bold text-gold-500">
                        {formatPrice(total || pkg.price)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedReveal>

            {/* Payment Form Placeholder */}
            <AnimatedReveal delay={100}>
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-5 w-5 text-navy-500" />
                  <h2 className="font-serif text-xl font-bold text-navy-500">
                    Payment Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-dashed border-gold-300 bg-gold-50 p-8 text-center">
                    <Lock className="h-8 w-8 mx-auto text-gold-500" />
                    <p className="mt-3 text-base font-semibold text-navy-500">
                      Demo Mode
                    </p>
                    <p className="mt-1 text-sm text-navy-400">
                      Online booking is coming soon. To book your experience, please contact us directly via WhatsApp or email.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="https://wa.me/35679000000?text=Hi%20Captain%20Patrick%2C%20I%27d%20like%20to%20book%20an%20experience!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-green-600 py-3.5 text-base font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg w-full"
                  >
                    Contact via WhatsApp
                  </a>
                  <Link
                    href={`/booking/details?package=${packageSlug}&date=${date}&time=${time}`}
                    className="flex items-center justify-center gap-2 text-sm text-navy-400 hover:text-navy-500 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Details
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
