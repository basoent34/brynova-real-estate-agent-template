import { AgentProfile } from "@/components/AgentProfile";
import { BookingCTA } from "@/components/BookingCTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Testimonials } from "@/components/Testimonials";
import { getPublicAgentConfig } from "@/lib/agent";

export default function HomePage() {
  const agent = getPublicAgentConfig();

  return (
    <main>
      <Hero
        agent={agent}
        eyebrow={`${agent.market} real estate guidance`}
        title={agent.name}
        description={`Personalized buying, selling, and open-house follow-up for clients across ${agent.market}, backed by ${agent.brokerage}.`}
        primaryCta={{ href: "/buyers", label: "Start buying" }}
        secondaryCta={{ href: "/sellers", label: "Plan a sale" }}
      />

      <section className="border-y border-neutral-200 bg-white">
        <div className="luxury-shell grid gap-4 py-6 sm:grid-cols-3">
          {[
            ["Buyer clarity", "Search strategy, budget fit, and offer prep."],
            ["Seller confidence", "Pricing, prep, and launch planning."],
            ["Follow-up built in", "Leads route to CRM for fast response."]
          ].map(([label, copy]) => (
            <div key={label} className="rounded-lg bg-[var(--paper)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                {label}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Start here</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
              Choose the move you are planning.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Buy a home",
                copy: `Build a focused search plan with ${agent.name} for ${agent.market}.`,
                href: "/buyers",
                action: "Start buyer plan"
              },
              {
                title: "Sell a property",
                copy: "Get pricing, prep, launch, and follow-up aligned before going live.",
                href: "/sellers",
                action: "Request seller plan"
              }
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-lg border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  {card.action}
                </p>
                <h3 className="mt-5 text-3xl font-semibold text-neutral-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{card.copy}</p>
                <span className="mt-7 inline-flex rounded-lg bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[var(--brand)]">
                  Continue
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AgentProfile agent={agent} />

      <section className="bg-neutral-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Lead capture
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">
              Two clear paths for new clients.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Buyers and sellers can raise their hand from the first visit, and every submission is ready for CRM routing.
            </p>
          </div>
          <div className="grid gap-6">
            <LeadForm
              agentName={agent.name}
              leadType="buyer"
              title="Buyer consultation"
              description={`Tell ${agent.name} where you want to buy and what matters most.`}
            />
            <LeadForm
              agentName={agent.name}
              leadType="seller"
              title="Seller valuation request"
              description={`Share the property details and timeline for a ${agent.market} sale.`}
            />
          </div>
        </div>
      </section>

      <Testimonials agent={agent} />
      <FAQ agent={agent} />
      <BookingCTA agent={agent} />
    </main>
  );
}
