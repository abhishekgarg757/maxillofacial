"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FAQ } from "@/lib/types";

interface FaqAccordionProps {
  items: FAQ[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("flex flex-col gap-3", className)}
    >
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl border border-ink-100 bg-white transition-colors data-[state=open]:border-accent-soft data-[state=open]:bg-accent-soft/30"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="text-base font-semibold text-ink-900 sm:text-lg">
                {item.question}
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink-100 text-ink-600 transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-accent group-data-[state=open]:text-white">
                <Plus className="size-4" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[acc-up_0.2s_ease] data-[state=open]:animate-[acc-down_0.25s_ease]">
            <p className="px-6 pb-6 pr-14 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
