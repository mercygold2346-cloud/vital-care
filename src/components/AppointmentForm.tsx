"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import { services } from "@/data/services";

type FieldErrors = Partial<
  Record<
    "fullName" | "email" | "phone" | "service" | "date" | "time" | "message",
    string
  >
>;

const timeOptions = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^[+\d][\d\s().-]{6,}$/.test(value);
}

export function AppointmentForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: FieldErrors = {};

    if (fullName.length < 2) next.fullName = "Enter your full name.";
    if (!isValidEmail(email)) next.email = "Enter a valid email address.";
    if (!isValidPhone(phone)) next.phone = "Enter a valid phone number.";
    if (!service) next.service = "Choose a service.";
    if (!date) next.date = "Choose a preferred date.";
    if (date && date < today) next.date = "Choose today or a future date.";
    if (!time) next.time = "Choose a preferred time.";
    if (message.length > 500) next.message = "Keep your message under 500 characters.";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={`${formId}-note`}
    >
      {status === "success" ? (
        <p
          role="status"
          className="rounded-xl border border-primary/20 bg-ice px-4 py-3 text-sm text-navy"
        >
          Thank you. Your appointment request has been received. Our team will
          contact you to confirm.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          name="fullName"
          label="Full name"
          autoComplete="name"
          error={errors.fullName}
        />
        <Field
          id={`${formId}-email`}
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
        <Field
          id={`${formId}-phone`}
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
        <div>
          <label htmlFor={`${formId}-service`} className="field-label">
            Service
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            defaultValue=""
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${formId}-service-error` : undefined}
            className="field-input"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
          <FieldError id={`${formId}-service-error`} message={errors.service} />
        </div>
        <Field
          id={`${formId}-date`}
          name="date"
          label="Preferred date"
          type="date"
          min={today}
          error={errors.date}
        />
        <div>
          <label htmlFor={`${formId}-time`} className="field-label">
            Preferred time
          </label>
          <select
            id={`${formId}-time`}
            name="time"
            defaultValue=""
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? `${formId}-time-error` : undefined}
            className="field-input"
          >
            <option value="" disabled>
              Select a time
            </option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id={`${formId}-time-error`} message={errors.time} />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="field-label">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="field-input min-h-28 resize-y"
        />
        <FieldError id={`${formId}-message-error`} message={errors.message} />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Request appointment
      </button>

      <p id={`${formId}-note`} className="text-sm leading-6 text-muted">
        For urgent or emergency medical needs, use your local emergency services
        rather than this form.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  min,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  min?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        min={min}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field-input"
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-700">
      {message}
    </p>
  );
}
