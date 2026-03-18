import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-sand-50 px-4">
      <div className="text-center">
        <Compass className="mx-auto h-16 w-16 text-navy-200" />
        <h1 className="mt-6 font-serif text-5xl font-bold text-navy-500">
          Off Course
        </h1>
        <p className="mt-4 text-lg text-navy-300">
          It seems you&apos;ve drifted into uncharted waters. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-gold-500 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-gold-600"
          >
            Back to Home
          </Link>
          <Link
            href="/experiences"
            className="rounded-full border-2 border-navy-200 px-8 py-3 text-base font-semibold text-navy-500 transition-all hover:border-gold-500"
          >
            Explore Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
