import { Fraunces } from "next/font/google";

/**
 * /aesthetic route layout.
 *
 * Loads Fraunces (serif) as the editorial accent font for the aesthetic page
 * only, exposing it as `--font-fraunces` so the `font-aesthetic` utility
 * resolves within this subtree. Limited weight set + latin subset keep the
 * payload small; the font is self-hosted via next/font.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function AestheticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={fraunces.variable}>{children}</div>;
}
