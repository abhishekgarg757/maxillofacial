/**
 * Section 2: Trust Strip
 * Thin horizontal credibility statement between hero and content.
 * Replaces StatsBand's widget-like card with something editorial.
 */

interface TrustItem {
  label: string;
  /** Optional icon name resolved by DynamicIcon. */
  icon?: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

/** Thin credibility strip between hero and content sections. */
export function TrustStrip({ items }: TrustStripProps) {
  return (
    <div className="border-b border-ink-100 bg-background">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 lg:max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm md:justify-start">
          {items.map((item, i) => (
            <>
              {i > 0 && (
                <span className="hidden sm:inline-block h-4 w-px shrink-0 bg-ink-200" />
              )}
              <span className="flex items-center gap-2 text-ink-700">
                {item.icon && (
                  <span className="shrink-0 text-brand-600">{item.icon}</span>
                )}
                {item.label}
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
