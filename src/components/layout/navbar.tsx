"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-clay-500 to-clay-700 text-white shadow-lg shadow-clay-600/25">
        <span className="font-aesthetic text-base font-extrabold tracking-tight">
          SG
        </span>
        <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-clay-400/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-aesthetic text-[15px] font-extrabold tracking-tight",
            onDark ? "text-white" : "text-clay-900",
          )}
        >
          Dr. Saloni Gupta
        </span>
        <span
          className={cn(
            "mt-0.5 text-[11px] font-medium tracking-wide",
            onDark ? "text-clay-300" : "text-clay-700",
          )}
        >
          Oral & Maxillofacial Surgery
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-clay-100 bg-clay-50/80 backdrop-blur-xl supports-[backdrop-filter]:bg-clay-50/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-50",
                  active
                    ? "bg-clay-100 text-clay-900"
                    : "text-clay-700 hover:bg-clay-100 hover:text-clay-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={`tel:${site.phoneE164}`}>
              <Phone />
              Call
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">
              <CalendarCheck />
              Book consult
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              aria-label="Open menu"
              className="inline-grid size-11 place-items-center rounded-xl border border-clay-200 bg-clay-50/70 text-clay-600 backdrop-blur lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-clay-950/40 backdrop-blur-sm animate-fade-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col gap-6 overflow-y-auto bg-clay-50 p-6 shadow-2xl outline-none animate-slide-in-right">
              <div className="flex items-center justify-between">
                <Logo />
                <Dialog.Close
                  aria-label="Close menu"
                  className="inline-grid size-10 place-items-center rounded-xl border border-clay-200 text-clay-700"
                >
                  <X className="size-5" />
                </Dialog.Close>
              </div>
              <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
              <nav className="flex flex-col gap-1">
                {site.nav.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        active
                          ? "bg-clay-100 text-clay-900"
                          : "text-clay-600 hover:bg-clay-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${site.phoneE164}`}>
                    <Phone />
                    {site.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="lg">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <CalendarCheck />
                    Book a consultation
                  </Link>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </header>
  );
}