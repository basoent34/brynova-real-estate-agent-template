import { BookingCTA } from "@/components/BookingCTA";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function SellersPage() {
  const agent = getPublicAgentConfig();

  return (
    <main>
      <Hero
        agent={agent}
        eyebrow="Seller strategy"
        title={`Sell thoughtfully in ${agent.market}`}
        description={`${agent.name} helps homeowners price, prepare, launch, and follow up with a clear plan from first conversation to closing.`}
        primaryCta={{ href: "#seller-form", label: "Request valuation" }}
        secondaryCta={{ href: agent.bookingUrl, label: "Book a consult" }}
      />

      <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">
              Listing readiness
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
              Prep the launch before the sign goes up.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
              Seller traffic needs a strong reason to share an address and timeline. This section frames the value clearly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Pricing", "Recent comps, market pace, and buyer demand."],
                ["Presentation", "Prep, photography, and showing readiness."],
                ["Launch", "Listing, open house, and lead follow-up workflows."],
                ["Negotiation", "Offer comparison and closing coordination."]
              ].map(([label, copy]) => (
                <div key={label} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-neutral-950">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="seller-form">
            <LeadForm
              agentName={agent.name}
              leadType="seller"
              title="Seller lead form"
              description={`Share the property address and timeline for a custom plan with ${agent.name}.`}
            />
          </div>
        </div>
      </section>

      <BookingCTA agent={agent} />
    </main>
  );
}
