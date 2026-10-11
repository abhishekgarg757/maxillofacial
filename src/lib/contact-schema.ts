import { z } from "zod";

/** Shared contact form schema (used by the client form and the API route). */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  email: z.email("Please enter a valid email").max(160),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail (min. 10 characters)")
    .max(2000, "Message is too long (max. 2000 characters)"),
  // Honeypot: real users never see or fill this. We accept any string so
  // bots that *do* fill it get a 200 (handler silently drops) instead of a
  // 422, which would tell a smart bot the field's special.
  company: z.string().max(200).optional(),
  // Consent checkbox.
  consent: z
    .boolean()
    .refine((v) => v === true, "Please confirm you agree to be contacted"),
});

export type ContactInput = z.infer<typeof contactSchema>;
