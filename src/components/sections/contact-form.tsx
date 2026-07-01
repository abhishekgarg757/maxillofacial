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
  "w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

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
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-brand-600 text-white">
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
        <Field label="Name" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className={fieldClass}
            {...register("phone")}
          />
        </Field>
        <Field label="I'm interested in" error={errors.subject?.message}>
          <select className={cn(fieldClass, "appearance-none")} {...register("subject")}>
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

      <Field label="Message" error={errors.message?.message} required>
        <textarea
          rows={5}
          placeholder="How can we help? Please share any relevant details."
          className={cn(fieldClass, "resize-y")}
          {...register("message")}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          className="mt-0.5 size-4.5 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
          {...register("consent")}
        />
        <span>
          I agree to be contacted about my enquiry and have read the{" "}
          <a href="/privacy" className="font-medium text-brand-700 underline">
            privacy policy
          </a>
          .
        </span>
      </label>
      {errors.consent?.message ? (
        <p className="-mt-3 text-xs text-accent-700">{errors.consent.message}</p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-2xl bg-accent-50 px-4 py-3 text-sm text-accent-800">
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
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink-800">
        {label}
        {required ? <span className="text-accent-600"> *</span> : null}
      </span>
      {children}
      {error ? <span className="text-xs text-accent-700">{error}</span> : null}
    </label>
  );
}
