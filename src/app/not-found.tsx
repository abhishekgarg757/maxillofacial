import Link from "next/link";
import { ArrowLeft, Home, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-20 size-96 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-accent-600/15 blur-3xl" />
      <Container className="relative text-center">
        <p className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-300">
          The page may have moved or no longer exists. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/">
              <Home />
              Back home
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link href="/procedures">
              <Stethoscope />
              View procedures
            </Link>
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200"
        >
          <ArrowLeft className="size-4" />
          Or contact the clinic
        </Link>
      </Container>
    </section>
  );
}
