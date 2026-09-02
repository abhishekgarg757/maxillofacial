"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "What is orthognathic surgery?",
  "How long is recovery after dental implants?",
  "Do I need surgery for jaw clicking?",
  "How do I book a consultation?",
];

export function ChatWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [messages, busy, reduce]);

  function submit(text: string) {
    const value = text.trim();
    if (!value || busy) return;
    sendMessage({ text: value });
    setInput("");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Launcher */}
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open clinic assistant"
          aria-expanded={open}
          className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-accent text-white shadow-xl shadow-accent-soft/40 transition-all duration-300 hover:scale-105 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.18 }}
            >
              {open ? (
                <X className="size-6" />
              ) : (
                <MessageCircle className="size-6" />
              )}
            </motion.span>
          </AnimatePresence>
          {!open ? (
            <span className="absolute right-0 top-0 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex size-3.5 rounded-full bg-white" />
            </span>
          ) : null}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-clay-950/30 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-in [animation-direction:reverse]" />
        <Dialog.Content
          className="fixed bottom-24 right-4 z-40 flex h-[34rem] max-h-[calc(100dvh-7rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white text-ink-900 shadow-2xl shadow-ink-950/20 sm:right-6 data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-in [animation-duration:0.22s] focus:outline-none"
        >
          <Dialog.Title className="sr-only">Clinic assistant</Dialog.Title>
          <Dialog.Description className="sr-only">
            Ask questions about oral and maxillofacial procedures offered at
            Dr. Saloni Gupta&rsquo;s clinic. Not for medical advice or
            emergencies.
          </Dialog.Description>
          {/* Header */}
          <div className="relative shrink-0 overflow-hidden bg-clay-950 px-5 py-4 text-white">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="pointer-events-none absolute -right-6 -top-8 size-28 rounded-full bg-clay-500/30 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-clay-500 to-clay-700">
                <Bot className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-bold">Saloni Assistant</p>
                <p className="text-xs text-ink-100">
                  Answers about our procedures
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            aria-busy={busy}
            aria-label="Conversation with Saloni Assistant"
            className="flex-1 space-y-4 overflow-y-auto bg-ink-50/50 px-4 py-4"
          >
            {messages.length === 0 ? (
              <div className="flex flex-col gap-4">
                <div className="flex gap-2.5">
                  <Avatar />
                  <Bubble role="assistant">
                    Hi! I&apos;m here to help you learn about Dr. Gupta&apos;s
                    oral &amp; maxillofacial procedures and how to book a
                    consultation. How can I help?
                  </Bubble>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => submit(s)}
                      className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-left text-xs font-medium text-ink-600 transition-colors hover:border-accent-soft hover:text-accent"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              if (!text) return null;
              return (
                <div
                  key={m.id}
                  className={cn(
                    "flex gap-2.5",
                    m.role === "user" && "flex-row-reverse",
                  )}
                >
                  {m.role === "assistant" ? <Avatar /> : null}
                  <Bubble role={m.role === "user" ? "user" : "assistant"}>
                    {text}
                  </Bubble>
                </div>
              );
            })}

            {status === "submitted" ? (
              <div className="flex gap-2.5" aria-label="Assistant is typing">
                <Avatar />
                <Bubble role="assistant">
                  <TypingDots />
                </Bubble>
              </div>
            ) : null}

            {error ? (
              <div
                role="alert"
                aria-live="assertive"
                className="rounded-2xl bg-accent-50 px-4 py-3 text-xs text-accent-800"
              >
                Something went wrong. Please try again, or reach us via the{" "}
                <a href="/contact" className="font-semibold underline">
                  Contact page
                </a>
                .
              </div>
            ) : null}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="shrink-0 border-t border-ink-100 bg-white p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit(input);
                  }
                }}
                rows={1}
                aria-label="Ask the clinic assistant a question"
                placeholder="Ask about a procedure…"
                className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-accent focus:bg-white"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="size-4.5" />
              </button>
            </div>
            <p className="mt-2 flex items-center gap-1.5 px-1 text-[11px] leading-tight text-muted-foreground">
              <Sparkles className="size-3 shrink-0 text-accent" />
              AI assistant — general info only, not medical advice. In an
              emergency, call your local emergency number.
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Avatar() {
  return (
    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-clay-500 to-clay-700 text-white">
      <Bot className="size-4" />
    </span>
  );
}

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
        role === "user"
          ? "rounded-br-md bg-accent text-white"
          : "rounded-bl-md border border-ink-100 bg-white text-ink-800",
      )}
    >
      {children}
    </div>
  );
}

function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-bounce rounded-full bg-ink-400"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}
