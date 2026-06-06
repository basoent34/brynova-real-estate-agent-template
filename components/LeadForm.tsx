"use client";

import { FormEvent, useState } from "react";

import { timelineOptions, validateLeadPayload } from "@/lib/lead-schema";
import type { LeadType } from "@/types/leads";

type LeadFormProps = {
  agentName: string;
  leadType: LeadType;
  title: string;
  description: string;
};

const labels: Record<LeadType, string> = {
  buyer: "Buyer",
  seller: "Seller",
  open_house: "Open house",
  contact: "Contact"
};

function inputClass(hasError?: boolean) {
  return [
    "focus-ring mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-neutral-950 shadow-sm transition placeholder:text-neutral-400",
    hasError ? "border-red-400" : "border-neutral-200 hover:border-neutral-300"
  ].join(" ");
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1.5 text-xs font-medium text-red-600">{message}</p>;
}

export function LeadForm({ agentName, leadType, title, description }: LeadFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setServerMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.leadType = leadType;

    const validation = validateLeadPayload(payload);

    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("idle");
      return;
    }

    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(validation.data)
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "The form could not be submitted.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setServerMessage(`Thanks. ${agentName} will follow up shortly.`);
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "The form could not be submitted.");
    }
  }

  const showBudget = leadType === "buyer";
  const showPropertyAddress = leadType === "seller" || leadType === "open_house";
  const showShowingDate = leadType === "open_house";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-neutral-200 bg-white p-5 text-neutral-950 shadow-soft sm:p-7">
      <input type="hidden" name="leadType" value={leadType} />
      <div>
        <p className="eyebrow">
          {labels[leadType]} lead
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-normal">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-neutral-700">
          Name
          <input name="name" autoComplete="name" className={inputClass(Boolean(errors.name))} placeholder="Full name" />
          <FieldError message={errors.name} />
        </label>
        <label className="text-sm font-semibold text-neutral-700">
          Email
          <input name="email" type="email" autoComplete="email" className={inputClass(Boolean(errors.email))} placeholder="name@example.com" />
          <FieldError message={errors.email} />
        </label>
        <label className="text-sm font-semibold text-neutral-700">
          Phone
          <input name="phone" autoComplete="tel" className={inputClass(Boolean(errors.phone))} placeholder="(555) 555-5555" />
          <FieldError message={errors.phone} />
        </label>
        <label className="text-sm font-semibold text-neutral-700">
          City or area
          <input name="cityOrArea" className={inputClass(Boolean(errors.cityOrArea))} placeholder="Neighborhood, city, or ZIP" />
          <FieldError message={errors.cityOrArea} />
        </label>
        <label className="text-sm font-semibold text-neutral-700">
          Timeline
          <select name="timeline" defaultValue="" className={inputClass(Boolean(errors.timeline))}>
            <option value="" disabled>
              Select one
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError message={errors.timeline} />
        </label>
        {showBudget && (
          <label className="text-sm font-semibold text-neutral-700">
            Budget
            <input name="budget" className={inputClass(Boolean(errors.budget))} placeholder="$650,000" />
            <FieldError message={errors.budget} />
          </label>
        )}
        {showPropertyAddress && (
          <label className="text-sm font-semibold text-neutral-700 sm:col-span-2">
            Property address
            <input name="propertyAddress" className={inputClass(Boolean(errors.propertyAddress))} placeholder="123 Main Street" />
            <FieldError message={errors.propertyAddress} />
          </label>
        )}
        {showShowingDate && (
          <label className="text-sm font-semibold text-neutral-700">
            Showing date
            <input name="showingDate" type="date" className={inputClass(Boolean(errors.showingDate))} />
            <FieldError message={errors.showingDate} />
          </label>
        )}
        <label className="text-sm font-semibold text-neutral-700 sm:col-span-2">
          Message
          <textarea name="message" rows={4} className={inputClass(Boolean(errors.message))} placeholder="Share goals, questions, or timing notes." />
          <FieldError message={errors.message} />
        </label>
      </div>

      {serverMessage && (
        <div
          className={[
            "mt-5 rounded-lg border px-4 py-3 text-sm",
            status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"
          ].join(" ")}
          role="status"
        >
          {serverMessage}
        </div>
      )}

      {errors.form && <FieldError message={errors.form} />}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit lead"}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
        Your details go directly to {agentName}&rsquo;s follow-up workflow.
      </p>
    </form>
  );
}
