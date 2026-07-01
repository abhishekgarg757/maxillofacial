import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { doctor } from "@/content/doctor";

export function AboutTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-accent-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-ink-100 bg-ink-950 shadow-2xl">
                <Image
                  src={doctor.portrait}
                  alt={`Portrait of ${doctor.name}`}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/90 px-5 py-4 shadow-xl backdrop-blur sm:right-6">
                <BadgeCheck className="size-8 text-brand-600" />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink-900">{doctor.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {doctor.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <Badge>Meet your surgeon</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance text-3xl font-bold leading-tight text-ink-900 sm:text-4xl md:text-5xl">
                {doctor.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {doctor.intro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {doctor.philosophy.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-center gap-2.5 text-sm font-medium text-ink-700"
                  >
                    <BadgeCheck className="size-5 shrink-0 text-brand-600" />
                    {p.title}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  More about Dr. Gupta
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
