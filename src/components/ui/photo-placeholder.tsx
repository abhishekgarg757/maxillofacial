import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  /** Shown within the placeholder so you know what image goes here. */
  label?: string;
  /** Subtext explaining what photography is needed. */
  note?: string;
  className?: string;
  /** CSS aspect-ratio value, e.g. "16 / 9", "4 / 5". Default "4 / 3". */
  ratio?: string;
  /** If true, renders as an <img>-compatible wrapper for next/image fallback. */
  imgCompatible?: boolean;
}

/**
 * Visual placeholder used wherever real clinical or doctor photography
 * has not been commissioned or provided yet.
 *
 * Styling: dark slate background, muted text — never blends into the
 * final layout so you always remember it needs replacing.
 */
export function PhotoPlaceholder({
  label = "Photography required",
  note,
  className,
  ratio = "4 / 3",
}: PhotoPlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-ink-900",
        className,
      )}
    >
      {/* Pattern grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <pattern id="ph-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ph-grid)" />
        </svg>
      </div>

      {/* Icon */}
      <svg
        className="size-8 text-ink-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
        />
      </svg>

      {/* Label */}
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
        {label}
      </span>

      {/* Note */}
      {note && (
        <span className="max-w-xs text-center text-[11px] leading-snug text-ink-500">
          {note}
        </span>
      )}
    </div>
  );
}
