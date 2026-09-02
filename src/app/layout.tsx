import type { Metadata, Viewport } from "next";
import { Inter, Sora, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidgetLoader } from "@/components/chat/chat-widget-loader";
import { site } from "@/content/site";
import { jsonLdScript, organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

/** Fraunces serif font — used as `font-aesthetic` site-wide for headings /
 * editorial text, matching the aesthetic/testimonials page design. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.doctorName} — ${site.tagline}`,
    template: `%s · ${site.doctorName}`,
  },
  description: site.description,
  keywords: [
    "oral and maxillofacial surgeon Delhi",
    "jaw surgery Delhi",
    "orthognathic surgery India",
    "dental implants Delhi",
    "facial trauma surgery",
    "TMJ surgery",
    "corrective jaw surgery",
    "Dr Saloni Gupta",
  ],
  authors: [{ name: site.doctorName }],
  creator: site.doctorName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script {...jsonLdScript(organizationJsonLd())} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-inter">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-clay-950 focus:px-3 focus:py-2 focus:text-sm focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidgetLoader />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
