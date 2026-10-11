import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { z } from "zod";

import { buildSystemPrompt } from "@/content/chat-system-prompt";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const maxDuration = 30;

const MODEL = "gemini-2.5-flash";
const MAX_MESSAGES = 24;
const MAX_CHARS_PER_MESSAGE = 2000;

/**
 * Shape of the body sent by the AI SDK useChat client. We re-validate here
 * (defence in depth — the client already validates before send) so that a
 * malformed payload returns 400 instead of crashing the stream mid-flight.
 */
const partSchema = z.object({
  type: z.string(),
  text: z.string().optional(),
});

const uiMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant", "system"]),
  parts: z.array(partSchema),
});

const bodySchema = z.object({
  messages: z.array(uiMessageSchema).min(1).max(MAX_MESSAGES),
});

function textLength(message: z.infer<typeof uiMessageSchema>): number {
  return message.parts.reduce((sum, part) => {
    if (part.type === "text" && typeof part.text === "string") {
      return sum + part.text.length;
    }
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

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const { messages } = parsed.data;
  for (const message of messages) {
    if (textLength(message) > MAX_CHARS_PER_MESSAGE) {
      return Response.json(
        { error: "Message is too long. Please shorten it." },
        { status: 413 },
      );
    }
  }

  try {
    const result = streamText({
      model: google(MODEL),
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(messages as UIMessage[]),
      temperature: 0.4,
    });

    return result.toUIMessageStreamResponse({
      onError: () =>
        "Sorry, something went wrong. Please try again, or contact the clinic directly.",
    });
  } catch (err) {
    console.error("[chat] streamText failed", err);
    return Response.json(
      {
        error:
          "Sorry, something went wrong. Please try again, or contact the clinic directly.",
      },
      { status: 500 },
    );
  }
}
