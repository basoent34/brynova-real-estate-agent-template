import { NextResponse } from "next/server";

import { getAgentConfig } from "@/lib/agent";
import { validateLeadPayload } from "@/lib/lead-schema";
import type { LeadSubmission } from "@/types/leads";

export const runtime = "nodejs";

async function deliverToWebhook(webhookUrl: string, lead: LeadSubmission) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead)
  });

  if (!response.ok) throw new Error(`CRM webhook returned ${response.status}`);
}

async function sendNotificationPlaceholders(lead: LeadSubmission) {
  if (process.env.LEAD_EMAIL_NOTIFICATIONS_ENABLED === "true") {
    console.info("Email notification placeholder", { to: process.env.LEAD_EMAIL_TO, leadId: lead.id, leadType: lead.leadType });
  }

  if (process.env.LEAD_SMS_NOTIFICATIONS_ENABLED === "true") {
    console.info("SMS notification placeholder", { to: process.env.LEAD_SMS_TO, leadId: lead.id, leadType: lead.leadType });
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const validation = validateLeadPayload(body);
  if (!validation.ok) return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });

  const agent = getAgentConfig();
  if (!agent.crmWebhookUrl) return NextResponse.json({ success: false, error: "CRM webhook is not configured." }, { status: 503 });

  const lead: LeadSubmission = {
    ...validation.data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "website",
    agent: {
      name: agent.name,
      brokerage: agent.brokerage,
      market: agent.market,
      email: agent.email,
      phone: agent.phone
    }
  };

  try {
    await deliverToWebhook(agent.crmWebhookUrl, lead);
    await sendNotificationPlaceholders(lead);
    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("Lead delivery failed", error);
    return NextResponse.json({ success: false, error: "Lead could not be delivered." }, { status: 502 });
  }
}
