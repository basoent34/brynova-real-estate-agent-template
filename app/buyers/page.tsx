import { BookingCTA, Hero } from "@/components/Sections";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function BuyersPage() {
  const agent = getPublicAgentConfig();
  return <main><Hero agent={agent} eyebrow="Buyer representation" title={`Buy with confidence in ${agent.market}`} description={`${agent.name} helps buyers compare neighborhoods, understand payment comfort, and move quickly when the right home appears.`} primaryCta={{ href: "#buyer-form", label: "Share your goals" }} secondaryCta={{ href: agent.bookingUrl, label: "Book a consult" }} /><section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Buying process</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">A practical plan before the search gets noisy.</h2><p className="mt-4 text-slate-600">Map your areas, budget comfort, lender readiness, and offer strategy before tours.</p></div><div id="buyer-form"><LeadForm agentName={agent.name} leadType="buyer" title="Buyer lead form" description={`Send ${agent.name} your search criteria and buying timeline.`} /></div></div></section><BookingCTA agent={agent} /></main>;
}
