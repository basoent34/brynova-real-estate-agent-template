import { BookingCTA } from "@/components/BookingCTA";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function ContactPage() {
  const agent = getPublicAgentConfig();

  return (
    <main>
      <Hero
        agent={agent}
        eyebrow="Contact"
        title={`Talk with ${agent.name}`}
        description={`Have a question about buying, selling, or timing a move in ${agent.market}? Send a note or book directly.`}
        primaryCta={{ href: "#contact-form", label: "Send a message" }}
        secondaryCta={{ href: agent.bookingUrl, label: "Book a time" }}
      />

      <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">
              Direct details
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
              Reach out whenever the move starts to feel real.
            </h2>
            <div className="mt-8 grid gap-3 text-sm text-neutral-700">
              <p className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Phone</span>
                <a className="mt-1 inline-block font-semibold text-[var(--brand)]" href={`tel:${agent.phone}`}>
                  {agent.phone}
                </a>
              </p>
              <p className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Email</span>
                <a className="mt-1 inline-block font-semibold text-[var(--brand)]" href={`mailto:${agent.email}`}>
                  {agent.email}
                </a>
              </p>
              <p className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Market</span>
                <span className="mt-1 inline-block font-semibold text-neutral-950">{agent.market}</span>
              </p>
              <p className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Brokerage</span>
                <span className="mt-1 inline-block font-semibold text-neutral-950">{agent.brokerage}</span>
              </p>
            </div>
          </div>
          <div id="contact-form">
            <LeadForm
              agentName={agent.name}
              leadType="contact"
              title="Contact form"
              description={`Send a message and ${agent.name} will follow up.`}
            />
          </div>
        </div>
      </section>

      <BookingCTA agent={agent} />
    </main>
  );
}
