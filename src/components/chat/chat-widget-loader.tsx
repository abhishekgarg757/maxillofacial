"use client";

import dynamic from "next/dynamic";
import * as React from "react";

/**
 * Client-side loader for the chat widget. Wrapping `next/dynamic` in a
 * Client Component lets the root layout (a Server Component) avoid
 * shipping the widget's bundle (AI SDK, motion, Radix Dialog) in the
 * initial chunk, while still keeping `ssr: false` valid.
 *
 * The render is gated behind `requestIdleCallback` (with a setTimeout
 * fallback) so the chunk is only fetched once the main thread is idle,
 * not on mount. This keeps the 150KB widget bundle out of the
 * above-the-fold critical path.
 */
const ChatWidget = dynamic(
  () => import("@/components/chat/chat-widget").then((m) => m.ChatWidget),
  { ssr: false },
);

export function ChatWidgetLoader() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const wake = () => setReady(true);
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const handle = w.requestIdleCallback(wake, { timeout: 2000 });
      return () => {
        w.cancelIdleCallback?.(handle);
      };
    }

    const handle = window.setTimeout(wake, 2000);
    return () => window.clearTimeout(handle);
  }, []);

  if (!ready) return null;
  return <ChatWidget />;
}
