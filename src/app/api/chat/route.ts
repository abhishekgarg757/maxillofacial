import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { buildSystemPrompt } from "@/content/chat-system-prompt";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const maxDuration = 30;

const MODEL = "gemini-2.5-flash";
const MAX_MESSAGES = 24;
const MAX_CHARS_PER_MESSAGE = 2000;

function textLength(message: UIMessage): number {
  return (message.parts ?? []).reduce((sum, part) => {
    if (part.type === "text") return sum + part.text.length;
    return sum;
  }, 0);
}

export async function POST(req: Request) {
  // Require configuration; fail gracefully if the key is missing.
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      {
        error:
          "The assistant isn't configured yet. Please contact the clinic directly via the Contact page.",
      },
      { status: 503 },
    );
  }

  // Basic per-IP rate limiting: 20 requests / minute.
  const ip = getClientIp(req.headers);
  const limited = rateLimit(`chat:${ip}`, 20, 60_000);
  if (!limited.success) {
    return Response.json(
      { error: "Too many messages. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }
  if (messages.length > MAX_MESSAGES) {
    return Response.json({ error: "Conversation too long." }, { status: 413 });
  }

  const typedMessages = messages as UIMessage[];
  for (const message of typedMessages) {
    if (textLength(message) > MAX_CHARS_PER_MESSAGE) {
      return Response.json(
        { error: "Message is too long. Please shorten it." },
        { status: 413 },
      );
    }
  }

  const result = streamText({
    model: google(MODEL),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(typedMessages),
    temperature: 0.4,
  });

  return result.toUIMessageStreamResponse({
    onError: () =>
      "Sorry, something went wrong. Please try again, or contact the clinic directly.",
  });
}
