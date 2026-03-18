"use client";
import { Suspense } from "react";
import { PaymentPageContent } from "./PaymentPageContent";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-gold-500 border-t-transparent" /></div>}>
      <PaymentPageContent />
    </Suspense>
  );
}
