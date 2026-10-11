/**
 * Generates the site-wide OpenGraph / social share image.
 *
 * Renders an SVG (1200×630) that mirrors the hero section's design language —
 * ink-950 background, subtle grid, teal (brand) glow — and rasterizes it to
 * `src/app/opengraph-image.png` via sharp. Next.js 16's file-based metadata
 * convention picks it up automatically as the default og:image for all pages.
 *
 * Usage: node scripts/generate-og.mjs
 *
 * Fonts: static Sora TTFs are committed at scripts/fonts/ (Fontsource),
 * embedded into the SVG as data URIs so the image is self-contained.
 */
import { readFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "src/app/opengraph-image.png");

const FONTS = {
  400: readFileSync(resolve(__dirname, "fonts/sora-fs-400.ttf")).toString("base64"),
  700: readFileSync(resolve(__dirname, "fonts/sora-fs-700.ttf")).toString("base64"),
};

const W = 1200;
const H = 630;

// Tokens mirrored from globals.css / hero.tsx.
const INK_950 = "#0b1220";
const WHITE = "#ffffff";
const INK_300 = "#9caab5";
const BRAND_400 = "#109e9b";
const BRAND_600 = "#004d4c";
const ACCENT_400 = "#f97363";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family:"Sora"; font-weight:400; src:url(data:font/ttf;base64,${FONTS[400]}) format("truetype"); }
      @font-face { font-family:"Sora"; font-weight:700; src:url(data:font/ttf;base64,${FONTS[700]}) format("truetype"); }
    </style>
    <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="110"/>
    </filter>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${WHITE}" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${WHITE}"/>
      <stop offset="1" stop-color="${WHITE}" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <!-- Base -->
  <rect width="${W}" height="${H}" fill="${INK_950}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>

  <!-- Teal glow (left, matches hero bg-brand-600/30 + brand-400 blob) -->
  <circle cx="160" cy="150" r="340" fill="${BRAND_400}" opacity="0.18" filter="url(#glow)"/>
  <!-- Deep teal secondary glow -->
  <circle cx="300" cy="560" r="300" fill="${BRAND_600}" opacity="0.35" filter="url(#glow)"/>
  <!-- Subtle accent glow (right, hero echo) -->
  <circle cx="1080" cy="560" r="300" fill="${ACCENT_400}" opacity="0.10" filter="url(#glow)"/>

  <!-- Content (left-aligned, safe margins) -->
  <text x="80" y="266" font-family="Sora" font-weight="400" font-size="17"
        fill="${BRAND_400}" letter-spacing="5">ORAL &amp; MAXILLOFACIAL SURGERY</text>

  <rect x="80" y="286" width="52" height="4" rx="2" fill="${BRAND_400}"/>

  <text x="80" y="356" font-family="Sora" font-weight="700" font-size="58"
        fill="url(#nameGrad)" letter-spacing="-1">Dr. Saloni Gupta</text>

  <text x="80" y="402" font-family="Sora" font-weight="400" font-size="24"
        fill="${INK_300}">Advanced Oral &amp; Maxillofacial Surgery in Delhi</text>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });
await sharp(Buffer.from(svg), { density: 144 })
  .resize(W, H)
  .png()
  .toFile(OUT);

const stat = statSync(OUT);
console.log(`Wrote ${OUT} (${stat.size} bytes, ${W}×${H})`);
