import Image from "next/image";

import type { PublicAgentConfig } from "@/types/agent";

type HeroCta = {
  href: string;
  label: string;
};

type HeroProps = {
  agent: PublicAgentConfig;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
};

export function Hero({ agent, eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,10,0.88),rgba(10,10,10,0.62),rgba(10,10,10,0.35))]" />
      <div className="luxury-shell grid min-h-[82svh] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryCta.href}
              className="focus-ring inline-flex items-center justify-center rounded-lg bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:opacity-90"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-neutral-950"
            >
              {secondaryCta.label}
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 text-sm text-white/78 sm:grid-cols-3">
            {[
              ["Market", agent.market],
              ["Brokerage", agent.brokerage],
              ["Response", "CRM-ready leads"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">{label}</p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-self-stretch lg:justify-self-end">
          <div className="rounded-lg border border-white/18 bg-white/12 p-3 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-4 lg:max-w-sm">
            <Image
              src={agent.headshotUrl}
              alt={agent.name}
              width={900}
              height={1125}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <div className="mt-4 rounded-lg bg-white p-4 text-neutral-950">
              <p className="text-lg font-semibold">{agent.name}</p>
              <p className="mt-1 text-sm text-neutral-600">{agent.brokerage}</p>
              <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row">
                <a href={`tel:${agent.phone}`} className="font-semibold text-[var(--brand)]">
                  {agent.phone}
                </a>
                <span className="hidden text-neutral-300 sm:inline">/</span>
                <a href={`mailto:${agent.email}`} className="font-semibold text-neutral-700">
                  {agent.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
