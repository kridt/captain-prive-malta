"use client";
import { Suspense } from "react";
import { ConfirmationPageContent } from "./ConfirmationPageContent";

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-gold-500 border-t-transparent" /></div>}>
      <ConfirmationPageContent />
    </Suspense>
  );
}
