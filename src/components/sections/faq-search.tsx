"use client";

import { Search } from "lucide-react";
import * as React from "react";

import { FaqAccordion } from "@/components/sections/faq-accordion";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/lib/types";

export function FaqSearch({
  faqs,
  categories,
}: {
  faqs: FAQ[];
  categories: string[];
}) {
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<string>("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const inCategory = active === "All" || f.category === active;
      const inQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [faqs, query, active]);

  const tabs = ["All", ...categories];

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          aria-label="Search frequently asked questions"
          className="h-13 w-full rounded-2xl border border-ink-200 bg-white pl-12 pr-4 text-base text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-ink-200 text-ink-600 hover:border-brand-300 hover:text-ink-900",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <FaqAccordion items={filtered} />
      ) : (
        <p className="rounded-2xl border border-ink-100 bg-ink-50 px-5 py-8 text-center text-sm text-muted-foreground">
          No questions match your search. Try a different term, or{" "}
          <a href="/contact" className="font-semibold text-brand-700 underline">
            ask us directly
          </a>
          .
        </p>
      )}
    </div>
  );
}
