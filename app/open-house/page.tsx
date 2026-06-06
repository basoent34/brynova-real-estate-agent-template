import { Hero } from "@/components/Sections";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function OpenHousePage() {
  const agent = getPublicAgentConfig();
  return <main><Hero agent={agent} eyebrow="Open house QR form" title="Visitor sign-in built for fast follow-up" description={`Capture open-house visitors for ${agent.name} and send every lead into the follow-up workflow.`} primaryCta={{ href: "#open-house-form", label: "Open sign-in" }} secondaryCta={{ href: `tel:${agent.phone}`, label: "Call agent" }} /><section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">QR ready</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Clone this page for each listing.</h2><p className="mt-4 text-slate-600">Use this page behind a QR code at the property so every visitor is ready for CRM follow-up.</p></div><div id="open-house-form"><LeadForm agentName={agent.name} leadType="open_house" title="Open house visitor form" description={`Sign in with ${agent.name} for property details, offer updates, and showing follow-up.`} /></div></div></section></main>;
}
