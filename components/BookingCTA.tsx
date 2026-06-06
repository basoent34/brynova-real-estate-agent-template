import type { PublicAgentConfig } from "@/types/agent";

export function BookingCTA({ agent }: { agent: PublicAgentConfig }) {
  return (
    <section className="bg-[var(--paper)] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 rounded-lg border border-neutral-200 bg-white p-7 shadow-soft md:flex-row md:items-center md:justify-between lg:p-10">
        <div>
          <p className="eyebrow">
            Book a consultation
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">
            Get a clear next step with {agent.name}.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
            Choose a time to talk through goals, timing, financing, valuation, or open-house follow-up.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a
            href={agent.bookingUrl}
            className="focus-ring inline-flex shrink-0 items-center justify-center rounded-lg bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Book now
          </a>
          <a
            href={`tel:${agent.phone}`}
            className="focus-ring inline-flex shrink-0 items-center justify-center rounded-lg border border-neutral-200 px-6 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950"
          >
            Call first
          </a>
        </div>
      </div>
    </section>
  );
}
