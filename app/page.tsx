import { AgentProfile, BookingCTA, FAQ, Hero, Testimonials } from "@/components/Sections";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function HomePage() {
  const agent = getPublicAgentConfig();
  return (
    <main>
      <Hero agent={agent} eyebrow={`${agent.market} real estate guidance`} title={agent.name} description={`Personalized buying, selling, and open-house follow-up for clients across ${agent.market}, backed by ${agent.brokerage}.`} primaryCta={{ href: "/buyers", label: "Start buying" }} secondaryCta={{ href: "/sellers", label: "Plan a sale" }} />
      <AgentProfile agent={agent} />
      <section className="bg-slate-950 px-6 py-20 text-white lg:px-8"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Lead capture</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Two clear paths for new clients.</h2><p className="mt-4 max-w-xl text-slate-300">Buyers and sellers can raise their hand from the first visit, and every submission is ready for CRM routing.</p></div><div className="grid gap-6"><LeadForm agentName={agent.name} leadType="buyer" title="Buyer consultation" description={`Tell ${agent.name} where you want to buy and what matters most.`} /><LeadForm agentName={agent.name} leadType="seller" title="Seller valuation request" description={`Share the property details and timeline for a ${agent.market} sale.`} /></div></div></section>
      <Testimonials agent={agent} />
      <FAQ agent={agent} />
      <BookingCTA agent={agent} />
    </main>
  );
}
