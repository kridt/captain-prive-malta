"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PACKAGES, formatPrice } from "@/lib/constants";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PageHero } from "@/components/shared/PageHero";
import {
  Calendar,
  Clock,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TIME_SLOTS = [
  { time: "09:00", label: "Morning" },
  { time: "12:00", label: "Midday" },
  { time: "15:00", label: "Afternoon" },
  { time: "17:30", label: "Sunset" },
];

export function BookingPageContent() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get("package");

  const [selectedPackage, setSelectedPackage] = useState<string>(
    preselectedPackage || ""
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const pkg = PACKAGES.find((p) => p.slug === selectedPackage);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = getDaysInMonth(calendarMonth.year, calendarMonth.month);
  const firstDay = getFirstDayOfMonth(calendarMonth.year, calendarMonth.month);

  const isDateAvailable = (day: number) => {
    const date = new Date(calendarMonth.year, calendarMonth.month, day);
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 2);
    if (date < minDate) return false;
    const month = date.getMonth();
    if (month < 3 || month > 9) return false;
    return true;
  };

  const canContinue = selectedPackage && selectedDate && selectedTime;

  useEffect(() => {
    if (preselectedPackage) {
      setSelectedPackage(preselectedPackage);
    }
  }, [preselectedPackage]);

  return (
    <>
      <PageHero
        title="Book Your Experience"
        description="Choose your experience, pick a date, and we'll take care of the rest."
      />

      {/* Step Indicator */}
      <section className="bg-white border-b border-sand-200/50">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            {["Experience & Date", "Your Details", "Payment", "Confirmation"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      i === 0
                        ? "bg-gold-500 text-white shadow-md shadow-gold-500/30"
                        : "bg-sand-200 text-navy-300"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`hidden sm:inline ${
                      i === 0 ? "font-medium text-navy-500" : "text-navy-300"
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
            <div className="lg:col-span-2 space-y-8">
              {/* Package Selection */}
              <AnimatedReveal>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-sand-200/50 sm:p-8">
                  <h2 className="font-serif text-xl font-bold text-navy-500">
                    1. Choose Your Experience
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PACKAGES.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => setSelectedPackage(p.slug)}
                        className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                          selectedPackage === p.slug
                            ? "border-gold-500 bg-gold-50/50 shadow-md shadow-gold-500/10"
                            : "border-sand-200 hover:border-navy-200"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            selectedPackage === p.slug
                              ? "border-gold-500 bg-gold-500"
                              : "border-sand-300"
                          }`}
                        >
                          {selectedPackage === p.slug && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy-500">
                            {p.name}
                          </p>
                          <p className="mt-0.5 text-xs text-navy-300">
                            {p.duration} &middot; Up to {p.maxGuests} guests
                          </p>
                          <p className="mt-1 text-sm font-bold text-gold-500">
                            {formatPrice(p.price, p.priceMax)}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>

              {/* Date Selection */}
              <AnimatedReveal delay={100}>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-sand-200/50 sm:p-8">
                  <h2 className="font-serif text-xl font-bold text-navy-500">
                    2. Pick a Date
                  </h2>
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => {
                          const newMonth = calendarMonth.month - 1;
                          if (newMonth < 0)
                            setCalendarMonth({ year: calendarMonth.year - 1, month: 11 });
                          else
                            setCalendarMonth({ ...calendarMonth, month: newMonth });
                        }}
                        className="rounded-full p-2 hover:bg-sand-100 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5 text-navy-400" />
                      </button>
                      <h3 className="text-base font-semibold text-navy-500">
                        {MONTHS[calendarMonth.month]} {calendarMonth.year}
                      </h3>
                      <button
                        onClick={() => {
                          const newMonth = calendarMonth.month + 1;
                          if (newMonth > 11)
                            setCalendarMonth({ year: calendarMonth.year + 1, month: 0 });
                          else
                            setCalendarMonth({ ...calendarMonth, month: newMonth });
                        }}
                        className="rounded-full p-2 hover:bg-sand-100 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5 text-navy-400" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d} className="py-2 text-xs font-medium text-navy-300">
                          {d}
                        </div>
                      ))}
                      {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const dateStr = `${calendarMonth.year}-${String(calendarMonth.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        const available = isDateAvailable(day);
                        const isSelected = selectedDate === dateStr;
                        return (
                          <button
                            key={day}
                            disabled={!available}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`rounded-lg py-2.5 text-sm transition-all duration-300 ${
                              isSelected
                                ? "bg-gold-500 text-white font-bold shadow-md shadow-gold-500/30"
                                : available
                                  ? "text-navy-500 hover:bg-gold-50 font-medium"
                                  : "text-navy-200 cursor-not-allowed"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Time Selection */}
              {selectedDate && (
                <AnimatedReveal delay={200}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-sand-200/50 sm:p-8">
                    <h2 className="font-serif text-xl font-bold text-navy-500">
                      3. Choose a Time
                    </h2>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                            selectedTime === slot.time
                              ? "border-gold-500 bg-gold-50/50 shadow-md shadow-gold-500/10"
                              : "border-sand-200 hover:border-navy-200"
                          }`}
                        >
                          <p className="text-lg font-bold text-navy-500">{slot.time}</p>
                          <p className="text-xs text-navy-300">{slot.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </AnimatedReveal>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedReveal>
                  <div className="rounded-2xl bg-white p-6 shadow-lg border border-sand-200/50">
                    <h3 className="font-serif text-lg font-bold text-navy-500">
                      Booking Summary
                    </h3>
                    <div className="mt-4 space-y-3 text-sm">
                      {pkg ? (
                        <>
                          <div className="flex items-start gap-3 rounded-xl bg-sand-50 p-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100">
                              <Calendar className="h-4 w-4 text-gold-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-navy-500">{pkg.name}</p>
                              <p className="text-xs text-navy-300">
                                {pkg.duration} &middot; Up to {pkg.maxGuests} guests
                              </p>
                            </div>
                          </div>
                          {selectedDate && (
                            <div className="flex items-center gap-3 text-navy-400">
                              <Calendar className="h-4 w-4 text-gold-500" />
                              <span>{selectedDate}</span>
                            </div>
                          )}
                          {selectedTime && (
                            <div className="flex items-center gap-3 text-navy-400">
                              <Clock className="h-4 w-4 text-gold-500" />
                              <span>
                                {selectedTime} ({TIME_SLOTS.find((s) => s.time === selectedTime)?.label})
                              </span>
                            </div>
                          )}
                          <div className="border-t border-sand-100 pt-3 mt-3">
                            <div className="flex items-center justify-between">
                              <span className="text-navy-300">Base price</span>
                              <span className="font-bold text-navy-500">{formatPrice(pkg.price)}</span>
                            </div>
                          </div>
                          <div className="border-t border-sand-200 pt-3">
                            <div className="flex items-center justify-between text-base">
                              <span className="font-semibold text-navy-500">Total</span>
                              <span className="font-bold text-gold-500 text-xl">{formatPrice(pkg.price)}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <p className="text-navy-300 text-center py-4">
                          Select an experience to see your summary.
                        </p>
                      )}
                    </div>
                    <Link
                      href={
                        canContinue
                          ? `/booking/details?package=${selectedPackage}&date=${selectedDate}&time=${selectedTime}`
                          : "#"
                      }
                      className={`mt-6 flex items-center justify-center gap-2 rounded-full py-3.5 text-base font-semibold text-white transition-all duration-300 w-full ${
                        canContinue
                          ? "bg-gold-500 hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
                          : "bg-navy-200 cursor-not-allowed"
                      }`}
                      onClick={(e) => !canContinue && e.preventDefault()}
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
