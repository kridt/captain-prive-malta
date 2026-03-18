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
  Shield,
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

                {/* Stripe Elements placeholder */}
                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-dashed border-sand-300 bg-sand-50 p-8 text-center">
                    <Lock className="h-8 w-8 mx-auto text-navy-300" />
                    <p className="mt-3 text-sm font-medium text-navy-400">
                      Stripe Payment Element
                    </p>
                    <p className="mt-1 text-xs text-navy-300">
                      Card, Apple Pay, Google Pay — will be integrated in Phase 3
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-navy-300">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>
                      Your payment is secured with 256-bit SSL encryption via
                      Stripe
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    href={`/booking/confirmation?package=${packageSlug}&date=${date}&time=${time}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-gold-500 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg w-full"
                  >
                    <Lock className="h-4 w-4" />
                    Pay {formatPrice(total || pkg?.price || 0)}
                  </Link>
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
