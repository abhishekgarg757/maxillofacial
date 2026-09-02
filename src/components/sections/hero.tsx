import Link from "next/link";
import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { BeforeAfterSliderLazy } from "@/components/sections/before-after-slider-lazy";
import { beforeAfterCases } from "@/content/before-after";

const trustPoints = [
  { icon: ShieldCheck, label: "Evidence-based care" },
  { icon: Sparkles, label: "3D surgical planning" },
  { icon: Star, label: "Patient-first approach" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-clay-950 pt-28 pb-20 text-white sm:pt-36 sm:pb-28">
      {/* Aurora + grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-32 -top-24 size-[34rem] rounded-full bg-clay-600/30 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-24 top-20 size-[30rem] rounded-full bg-clay-400/20 blur-3xl animate-aurora [animation-delay:-6s]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-clay-950 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <div className="flex flex-col items-start gap-6">
                <Badge variant="glass">
                  <span className="size-1.5 rounded-full bg-clay-400" />
                  Oral &amp; Maxillofacial Surgeon · New Delhi
                </Badge>
                <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                  Restoring{" "}
                  <span className="text-clay-200">faces, jaws</span>
                  <br className="hidden sm:block" /> and confidence.
                </h1>
                <p className="max-w-xl text-pretty text-base leading-relaxed text-ink-100 sm:text-lg">
                  I&apos;m{" "}
                  <span className="font-semibold text-white">Dr. Saloni Gupta</span>{" "}
                  — a Delhi-based oral &amp; maxillofacial surgeon offering jaw
                  reconstruction, corrective jaw surgery, dental implants, facial
                  trauma care and TMJ treatment with precision and genuine warmth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild variant="accent" size="lg">
                    <Link href="/contact">
                      <CalendarCheck />
                      Book a consultation
                    </Link>
                  </Button>
                  <Button asChild variant="glass" size="lg">
                    <Link href="/procedures">
                      Explore procedures
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {trustPoints.map((t) => (
                    <li
                      key={t.label}
                      className="flex items-center gap-2 text-sm text-ink-100"
                    >
                      <t.icon className="size-4.5 text-clay-400" />
                      {t.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Before/after showcase card */}
          <Reveal direction="left" delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-clay-500/20 to-clay-700/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <BeforeAfterSliderLazy
                  cases={[beforeAfterCases[0]]}
                  selectable={false}
                  showCaption={false}
                />
                <div className="flex items-center justify-between px-3 py-3">
                  <p className="text-xs text-ink-100">
                    Real before / after gallery inside
                  </p>
                  <Link
                    href="/before-after"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-clay-200 hover:text-white"
                  >
                    View gallery
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
