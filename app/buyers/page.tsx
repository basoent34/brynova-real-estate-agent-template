import { BookingCTA } from "@/components/BookingCTA";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function BuyersPage() {
  const agent = getPublicAgentConfig();

  return (
    <main>
      <Hero
        agent={agent}
        eyebrow="Buyer representation"
        title={`Buy with confidence in ${agent.market}`}
        description={`${agent.name} helps buyers compare neighborhoods, understand payment comfort, and move quickly when the right home appears.`}
        primaryCta={{ href: "#buyer-form", label: "Share your goals" }}
        secondaryCta={{ href: agent.bookingUrl, label: "Book a consult" }}
      />

      <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">
              Buying process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
              A practical plan before the search gets noisy.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
              The buyer page is built to turn browsing traffic into qualified conversations.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Map your preferred areas, commute needs, and must-have features.",
                "Align budget, lender readiness, and offer strategy before tours.",
                "Track new listings and next steps through automated follow-up."
              ].map((item, index) => (
                <div key={item} className="rounded-lg border border-neutral-200 bg-white p-5 text-sm leading-6 text-neutral-700 shadow-sm">
                  <span className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-[var(--brand)] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="buyer-form">
            <LeadForm
              agentName={agent.name}
              leadType="buyer"
              title="Buyer lead form"
              description={`Send ${agent.name} your search criteria and buying timeline.`}
            />
          </div>
        </div>
      </section>

      <BookingCTA agent={agent} />
    </main>
  );
}
