import Image from "next/image";

import type { PublicAgentConfig } from "@/types/agent";

export function AgentProfile({ agent }: { agent: PublicAgentConfig }) {
  return (
    <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Image
            src={agent.headshotUrl}
            alt={agent.name}
            width={900}
            height={1125}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
          />
        </div>
        <div>
          <p className="eyebrow">
            Agent profile
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
            {agent.name} brings local clarity to every move.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            As a {agent.brokerage} agent serving {agent.market}, {agent.name} helps clients make measured decisions with clear next steps, responsive communication, and structured follow-up.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Market", agent.market],
              ["Brokerage", agent.brokerage],
              ["Contact", agent.phone]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
                <p className="mt-2 text-sm font-semibold text-neutral-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
