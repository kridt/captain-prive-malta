"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PACKAGES, ADD_ONS, formatPrice } from "@/lib/constants";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { ArrowRight, ArrowLeft, Calendar, Clock, Check, Plus, Minus } from "lucide-react";

export function DetailsPageContent() {
  const searchParams = useSearchParams();
  const packageSlug = searchParams.get("package") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const pkg = PACKAGES.find((p) => p.slug === packageSlug);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    guests: 2,
    occasion: "",
    specialRequests: "",
  });

  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addOnsTotal = ADD_ONS.filter((a) => selectedAddOns[a.id]).reduce(
    (sum, a) => sum + a.price,
    0
  );
  const total = (pkg?.price || 0) + addOnsTotal;

  const isFormValid =
    form.firstName && form.lastName && form.email && form.phone && form.guests > 0;

  const inputClasses =
    "mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm";

  return (
    <>
      {/* Step Indicator */}
      <section className="bg-white border-b border-sand-200/50 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            {["Experience & Date", "Your Details", "Payment", "Confirmation"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      i < 1
                        ? "bg-gold-500 text-white"
                        : i === 1
                          ? "bg-gold-500 text-white shadow-md shadow-gold-500/30"
                          : "bg-sand-200 text-navy-300"
                    }`}
                  >
                    {i < 1 ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  <span
                    className={`hidden sm:inline ${
                      i === 1 ? "font-medium text-navy-500" : "text-navy-300"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Guest Details */}
              <AnimatedReveal>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-sand-200/50 sm:p-8">
                  <h2 className="font-serif text-xl font-bold text-navy-500">
                    Guest Details
                  </h2>
                  <p className="mt-1 text-sm text-navy-300">
                    Tell us about you so we can personalize your experience.
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) =>
                            setForm({ ...form, firstName: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="Patrick"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) =>
                            setForm({ ...form, lastName: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="Wolter"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="hello@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="+44 7911 123456"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3">
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Country
                        </label>
                        <input
                          type="text"
                          value={form.country}
                          onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="United Kingdom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Number of Guests *
                        </label>
                        <div className="mt-1 flex items-center gap-3">
                          <button
                            onClick={() =>
                              setForm({
                                ...form,
                                guests: Math.max(1, form.guests - 1),
                              })
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-sand-200 text-navy-400 hover:bg-sand-50 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-lg font-bold text-navy-500 w-8 text-center">
                            {form.guests}
                          </span>
                          <button
                            onClick={() =>
                              setForm({
                                ...form,
                                guests: Math.min(
                                  pkg?.maxGuests || 8,
                                  form.guests + 1
                                ),
                              })
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-sand-200 text-navy-400 hover:bg-sand-50 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Occasion
                        </label>
                        <select
                          value={form.occasion}
                          onChange={(e) =>
                            setForm({ ...form, occasion: e.target.value })
                          }
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="proposal">Proposal</option>
                          <option value="birthday">Birthday</option>
                          <option value="honeymoon">Honeymoon</option>
                          <option value="celebration">Celebration</option>
                          <option value="corporate">Corporate</option>
                          <option value="other">Just for fun!</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-500">
                        Special Requests
                      </label>
                      <textarea
                        rows={3}
                        value={form.specialRequests}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            specialRequests: e.target.value,
                          })
                        }
                        className={`${inputClasses} resize-none`}
                        placeholder="Dietary requirements, accessibility needs, surprise plans..."
                      />
                    </div>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Add-ons */}
              <AnimatedReveal delay={100}>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-sand-200/50 sm:p-8">
                  <h2 className="font-serif text-xl font-bold text-navy-500">
                    Enhance Your Experience
                  </h2>
                  <p className="mt-1 text-sm text-navy-300">
                    Optional add-ons to make your journey extra special.
                  </p>

                  <div className="mt-6 space-y-3">
                    {ADD_ONS.map((addon) => (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                          selectedAddOns[addon.id]
                            ? "border-gold-500 bg-gold-50/50 shadow-md shadow-gold-500/10"
                            : "border-sand-200 hover:border-navy-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-300 ${
                              selectedAddOns[addon.id]
                                ? "border-gold-500 bg-gold-500"
                                : "border-sand-300"
                            }`}
                          >
                            {selectedAddOns[addon.id] && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy-500">
                              {addon.name}
                            </p>
                            <p className="text-xs text-navy-300">
                              {addon.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gold-500 shrink-0 ml-4">
                          +{formatPrice(addon.price, addon.priceMax)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedReveal>
                  <div className="rounded-2xl bg-white p-6 shadow-lg border border-sand-200/50">
                    <h3 className="font-serif text-lg font-bold text-navy-500">
                      Booking Summary
                    </h3>

                    {pkg && (
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="rounded-xl bg-sand-50 p-3">
                          <p className="font-semibold text-navy-500">
                            {pkg.name}
                          </p>
                          <p className="text-xs text-navy-300">
                            {pkg.duration}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-navy-400">
                          <Calendar className="h-4 w-4 text-gold-500" />
                          <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy-400">
                          <Clock className="h-4 w-4 text-gold-500" />
                          <span>{time}</span>
                        </div>

                        <div className="border-t border-sand-100 pt-3 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-navy-300">Base price</span>
                            <span className="text-navy-500">
                              {formatPrice(pkg.price)}
                            </span>
                          </div>
                          {ADD_ONS.filter((a) => selectedAddOns[a.id]).map(
                            (addon) => (
                              <div
                                key={addon.id}
                                className="flex justify-between"
                              >
                                <span className="text-navy-300">
                                  {addon.name}
                                </span>
                                <span className="text-navy-500">
                                  +{formatPrice(addon.price)}
                                </span>
                              </div>
                            )
                          )}
                        </div>

                        <div className="border-t border-sand-200 pt-3">
                          <div className="flex justify-between text-base">
                            <span className="font-semibold text-navy-500">
                              Total
                            </span>
                            <span className="font-bold text-gold-500 text-xl">
                              {formatPrice(total)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 space-y-3">
                      <Link
                        href={
                          isFormValid
                            ? `/booking/payment?package=${packageSlug}&date=${date}&time=${time}&total=${total}`
                            : "#"
                        }
                        onClick={(e) => !isFormValid && e.preventDefault()}
                        className={`flex items-center justify-center gap-2 rounded-full py-3.5 text-base font-semibold text-white transition-all duration-300 w-full ${
                          isFormValid
                            ? "bg-gold-500 hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
                            : "bg-navy-200 cursor-not-allowed"
                        }`}
                      >
                        Continue to Payment
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/booking?package=${packageSlug}`}
                        className="flex items-center justify-center gap-2 text-sm text-navy-400 hover:text-navy-500 transition-colors"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back
                      </Link>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
