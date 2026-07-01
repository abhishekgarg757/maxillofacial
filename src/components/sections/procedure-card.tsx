import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { cn } from "@/lib/utils";
import type { Procedure } from "@/lib/types";

interface ProcedureCardProps {
  procedure: Procedure;
  index?: number;
  className?: string;
}

/** Bold, hover-reactive card linking to a procedure detail page. */
export function ProcedureCard({ procedure, className }: ProcedureCardProps) {
  return (
    <Link
      href={`/procedures/${procedure.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br from-brand-100 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-105">
        <DynamicIcon name={procedure.icon} className="size-7" />
      </div>

      <h3 className="relative text-xl font-bold tracking-tight text-ink-900">
        {procedure.title}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {procedure.tagline}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
