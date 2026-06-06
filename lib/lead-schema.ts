import type { LeadPayload, LeadType } from "@/types/leads";

export const leadTypes = ["buyer", "seller", "open_house", "contact"] as const;

export const timelineOptions = [
  "ASAP",
  "0-3 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Just researching"
];

type ValidationResult =
  | { ok: true; data: LeadPayload }
  | { ok: false; errors: Record<string, string> };

function valueFrom(input: Record<string, unknown>, key: string) {
  const value = input[key];
  return typeof value === "string" ? value.trim() : "";
}

function isLeadType(value: string): value is LeadType {
  return leadTypes.includes(value as LeadType);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateLeadPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Please submit the lead form again." } };
  }

  const raw = input as Record<string, unknown>;
  const leadType = valueFrom(raw, "leadType");
  const data: LeadPayload = {
    name: valueFrom(raw, "name"),
    email: valueFrom(raw, "email"),
    phone: valueFrom(raw, "phone"),
    leadType: isLeadType(leadType) ? leadType : "contact",
    cityOrArea: valueFrom(raw, "cityOrArea"),
    timeline: valueFrom(raw, "timeline"),
    message: valueFrom(raw, "message"),
    propertyAddress: valueFrom(raw, "propertyAddress") || undefined,
    budget: valueFrom(raw, "budget") || undefined,
    showingDate: valueFrom(raw, "showingDate") || undefined
  };

  const errors: Record<string, string> = {};

  if (data.name.length < 2) errors.name = "Enter a full name.";
  if (!isEmail(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
  if (!isLeadType(leadType)) errors.leadType = "Choose a valid lead type.";
  if (!data.cityOrArea) errors.cityOrArea = "Enter a city or area.";
  if (!data.timeline) errors.timeline = "Choose a timeline.";
  if (data.leadType === "seller" && !data.propertyAddress) errors.propertyAddress = "Enter the property address.";
  if (data.leadType === "open_house") {
    if (!data.propertyAddress) errors.propertyAddress = "Enter the open house property address.";
    if (!data.showingDate) errors.showingDate = "Enter the showing date.";
  }

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, data };
}
