import { BookingCTA, Hero } from "@/components/Sections";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function SellersPage() {
  const agent = getPublicAgentConfig();
  return <main><Hero agent={agent} eyebrow="Seller strategy" title={`Sell thoughtfully in ${agent.market}`} description={`${agent.name} helps homeowners price, prepare, launch, and follow up with a clear plan from first conversation to closing.`} primaryCta={{ href: "#seller-form", label: "Request valuation" }} secondaryCta={{ href: agent.bookingUrl, label: "Book a consult" }} /><section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Listing readiness</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Prep the launch before the sign goes up.</h2><p className="mt-4 text-slate-600">Review pricing, presentation, launch timing, open house workflow, and negotiation strategy.</p></div><div id="seller-form"><LeadForm agentName={agent.name} leadType="seller" title="Seller lead form" description={`Share the property address and timeline for a custom plan with ${agent.name}.`} /></div></div></section><BookingCTA agent={agent} /></main>;
}
