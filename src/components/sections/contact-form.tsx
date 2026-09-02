"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { procedures } from "@/content/procedures";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent-soft";

/** Maps a `react-hook-form` field name to a stable DOM id for the error span. */
const fieldId = (name: keyof ContactInput) => `contact-${name}-error`;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      company: "",
      consent: false,
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-clay-200 bg-clay-50/50 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-clay-600 text-white">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-bold text-ink-900">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible. For anything urgent, please call the clinic directly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      {/* Honeypot (visually hidden, not for real users) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          htmlFor="contact-name"
          required
          error={errors.name?.message}
          errorId={fieldId("name")}
        >
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? fieldId("name") : undefined}
            className={fieldClass}
            {...register("name")}
          />
        </Field>
        <Field
          label="Email"
          htmlFor="contact-email"
          required
          error={errors.email?.message}
          errorId={fieldId("email")}
        >
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-required="true"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? fieldId("email") : undefined}
            className={fieldClass}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          htmlFor="contact-phone"
          error={errors.phone?.message}
          errorId={fieldId("phone")}
        >
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? fieldId("phone") : undefined}
            className={fieldClass}
            {...register("phone")}
          />
        </Field>
        <Field
          label="I'm interested in"
          htmlFor="contact-subject"
          error={errors.subject?.message}
          errorId={fieldId("subject")}
        >
          <select
            id="contact-subject"
            className={cn(fieldClass, "appearance-none")}
            aria-invalid={errors.subject ? "true" : undefined}
            aria-describedby={errors.subject ? fieldId("subject") : undefined}
            {...register("subject")}
          >
            <option value="">General enquiry</option>
            {procedures.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <Field
        label="Message"
        htmlFor="contact-message"
        required
        error={errors.message?.message}
        errorId={fieldId("message")}
      >
        <textarea
          id="contact-message"
          rows={5}
          placeholder="How can we help? Please share any relevant details."
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? fieldId("message") : undefined}
          className={cn(fieldClass, "resize-y")}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-consent" className="flex items-start gap-3 text-sm text-ink-600">
          <input
            id="contact-consent"
            type="checkbox"
            aria-required="true"
            aria-invalid={errors.consent ? "true" : undefined}
            aria-describedby={errors.consent ? fieldId("consent") : undefined}
            className="mt-0.5 size-4.5 rounded border-ink-300 text-accent focus-visible:ring-2 focus-visible:ring-accent"
            {...register("consent")}
          />
          <span>
            I agree to be contacted about my enquiry and have read the{" "}
            <a href="/privacy" className="font-medium text-accent underline">
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent?.message ? (
          <p id={fieldId("consent")} className="text-xs text-accent-700">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-2xl bg-accent-50 px-4 py-3 text-sm text-accent-800"
        >
          Sorry, something went wrong sending your message. Please try again, or
          contact the clinic directly by phone or WhatsApp.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send />
            Send message
          </>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        For medical emergencies, do not use this form — call your local emergency
        number immediately.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  errorId,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  /** id used by the child's `aria-describedby` to point at the error <p>. */
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-800">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent-600">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-xs text-accent-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
