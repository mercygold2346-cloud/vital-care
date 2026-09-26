"use client";

import { FormEvent, useId, useState } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: FieldErrors = {};

    if (name.length < 2) next.name = "Enter your name.";
    if (!isValidEmail(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Enter a message of at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === "success" ? (
        <p
          role="status"
          className="rounded-xl border border-primary/20 bg-ice px-4 py-3 text-sm text-navy"
        >
          Thank you. Your message has been sent. We will reply as soon as we can.
        </p>
      ) : null}

      <div>
        <label htmlFor={`${formId}-name`} className="field-label">
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          className="field-input"
        />
        {errors.name ? (
          <p id={`${formId}-name-error`} role="alert" className="mt-1.5 text-sm text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="field-label">
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className="field-input"
        />
        {errors.email ? (
          <p id={`${formId}-email-error`} role="alert" className="mt-1.5 text-sm text-red-700">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="field-label">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="field-input min-h-32 resize-y"
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} role="alert" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn-primary">
        Send message
      </button>
    </form>
  );
}
