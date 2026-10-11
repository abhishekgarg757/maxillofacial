import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";

/**
 * Floating WhatsApp launcher.
 *
 * Replaces the AI chat widget. Clicking opens WhatsApp in a new tab — the
 * desktop app or web WhatsApp, depending on the user's device — with a
 * pre-filled message so Dr. Gupta's team knows where the lead came from.
 *
 * URL format: `https://api.whatsapp.com/send/?phone=<digits>&text=<msg>`
 * — this is the same shape dr-uma-site uses, and works across mobile
 * WhatsApp, desktop WhatsApp, and the web WhatsApp fallback.
 *
 * The button is intentionally NOT a "use client" component — it is a
 * plain anchor with a fixed-position style, so it ships zero JS to the
 * client and renders immediately in the static HTML.
 *
 * Accessibility:
 *   - The anchor has a descriptive `aria-label` that includes the doctor's
 *     name (screen readers won't read WhatsApp's destination URL).
 *   - `target="_blank" rel="noopener noreferrer"` is mandatory for
 *     `target="_blank"` to avoid reverse-tabnabbing.
 *   - The ping ring is `aria-hidden` and decorative.
 *   - Focus ring is inherited from the global `focus-visible:ring` token.
 */
export function WhatsAppLauncher() {
  const href =
    `https://api.whatsapp.com/send/?phone=${site.whatsappDigits}` +
    `&text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}` +
    `&type=phone_number&app_absent=0`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.doctorName} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-green-500 opacity-25 animate-ping"
      />
      <span
        className="relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl shadow-green-900/20 ring-4 ring-white transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-clay-500 group-focus-visible:ring-offset-2 sm:size-16"
      >
        <WhatsAppGlyph className="size-7 text-white sm:size-8" />
      </span>
      <span className="sr-only">
        Opens WhatsApp with a pre-filled message asking about a consultation.
      </span>
    </a>
  );
}

/**
 * Inline WhatsApp glyph (the speech-bubble-with-a-checkmark mark).
 * Rendering it inline avoids a network request and keeps the launcher
 * visible in the prerendered HTML. Path data is from the official
 * WhatsApp brand asset (CC0-style public reference geometry).
 */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4C9.373 4 4 9.373 4 16c0 2.385.696 4.605 1.896 6.49L4 28l5.665-1.852A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Zm0 21.6a9.55 9.55 0 0 1-4.866-1.331l-.349-.207-3.36 1.099 1.115-3.273-.227-.36A9.6 9.6 0 1 1 25.6 16 9.61 9.61 0 0 1 16 25.6Zm5.546-7.18c-.303-.152-1.794-.886-2.072-.987-.278-.1-.481-.152-.683.152-.202.303-.784.987-.961 1.189-.177.202-.354.227-.657.076-.303-.152-1.279-.471-2.436-1.502-.901-.803-1.509-1.795-1.686-2.098-.177-.303-.019-.467.133-.618.137-.136.303-.354.455-.531.152-.177.202-.303.303-.506.1-.202.05-.379-.025-.531-.076-.152-.683-1.645-.936-2.252-.247-.591-.498-.51-.683-.52-.177-.008-.379-.01-.582-.01a1.12 1.12 0 0 0-.81.379c-.278.303-1.062 1.038-1.062 2.531 0 1.493 1.088 2.937 1.24 3.139.152.202 2.143 3.272 5.193 4.587.726.313 1.293.5 1.736.64.73.232 1.394.199 1.919.121.586-.087 1.794-.733 2.047-1.441.253-.708.253-1.315.177-1.441-.076-.126-.278-.202-.581-.354Z"
      />
    </svg>
  );
}
