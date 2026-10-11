/**
 * Section 2: Trust Strip
 * Hairline editorial credibility row between hero and content.
 */

interface TrustItem {
  label: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

/** Thin hairline credibility strip with dot markers. */
export function TrustStrip({ items }: TrustStripProps) {
  return (
    <div className="border-b border-ink-900/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
          {items.map((item, i) => (
            <li
              key={`${item.label}-${i}`}
              className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-ink-600"
            >
              <span
                aria-hidden="true"
                className="size-1 shrink-0 rounded-full bg-clay-500"
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
