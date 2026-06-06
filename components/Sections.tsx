import Image from "next/image";
import Link from "next/link";

import type { PublicAgentConfig } from "@/types/agent";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/open-house", label: "Open House" },
  { href: "/contact", label: "Contact" }
];

export function Header({ agent }: { agent: PublicAgentConfig }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="min-w-0"><p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">BRYNOVA AI</p><p className="truncate text-base font-semibold text-slate-950">{agent.name}</p></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand)]">{item.label}</Link>)}</nav>
        <a href={agent.bookingUrl} className="focus-ring shrink-0 bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">Book</a>
      </div>
    </header>
  );
}

export function Footer({ agent }: { agent: PublicAgentConfig }) {
  const socials = Object.entries(agent.socialLinks).filter(([, href]) => Boolean(href));
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto]">
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">BRYNOVA AI</p><h2 className="mt-3 text-2xl font-semibold">{agent.name}</h2><p className="mt-2 text-sm text-slate-300">{agent.brokerage} | {agent.market}</p><p className="mt-4 text-sm text-slate-300"><a href={`tel:${agent.phone}`} className="hover:text-white">{agent.phone}</a> | <a href={`mailto:${agent.email}`} className="hover:text-white">{agent.email}</a></p></div>
        <div className="grid gap-4 text-sm text-slate-300 md:text-right"><div className="flex flex-wrap gap-4 md:justify-end">{navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}</div>{socials.length > 0 && <div className="flex flex-wrap gap-4 md:justify-end">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="capitalize hover:text-white">{label}</a>)}</div>}<p className="text-xs text-slate-500">Template by BRYNOVA AI. Customize per agent before launch.</p></div>
      </div>
    </footer>
  );
}

export function Hero({ agent, eyebrow, title, description, primaryCta, secondaryCta }: { agent: PublicAgentConfig; eyebrow: string; title: string; description: string; primaryCta: { href: string; label: string }; secondaryCta: { href: string; label: string } }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80" alt="" fill priority sizes="100vw" className="absolute inset-0 -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-slate-950/68" />
      <div className="mx-auto grid min-h-[72svh] max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">{description}</p><div className="mt-8 flex flex-wrap gap-3"><a href={primaryCta.href} className="focus-ring bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">{primaryCta.label}</a><a href={secondaryCta.href} className="focus-ring border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950">{secondaryCta.label}</a></div></div>
        <div className="justify-self-start lg:justify-self-end"><div className="w-full max-w-sm border border-white/25 bg-white/10 p-4 backdrop-blur"><Image src={agent.headshotUrl} alt={agent.name} width={900} height={1125} className="aspect-[4/5] w-full object-cover" /><div className="mt-4"><p className="text-lg font-semibold">{agent.name}</p><p className="text-sm text-slate-200">{agent.brokerage}</p><p className="mt-2 text-sm text-cyan-100">{agent.market}</p></div></div></div>
      </div>
    </section>
  );
}

export function AgentProfile({ agent }: { agent: PublicAgentConfig }) {
  return <section className="bg-slate-50 px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><Image src={agent.headshotUrl} alt={agent.name} width={900} height={1125} className="aspect-[4/5] w-full object-cover shadow-soft" /><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Agent profile</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{agent.name} brings local clarity to every move.</h2><p className="mt-5 text-lg leading-8 text-slate-600">As a {agent.brokerage} agent serving {agent.market}, {agent.name} helps clients make measured decisions with clear next steps, responsive communication, and structured follow-up.</p></div></div></section>;
}

export function BookingCTA({ agent }: { agent: PublicAgentConfig }) {
  return <section className="bg-white px-6 py-16 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-6 border border-slate-200 bg-slate-50 p-8 shadow-soft md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Book a consultation</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Get a clear next step with {agent.name}.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Choose a time to talk through goals, timing, financing, valuation, or open-house follow-up.</p></div><a href={agent.bookingUrl} className="focus-ring inline-flex shrink-0 items-center justify-center bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">Book now</a></div></section>;
}

export function Testimonials({ agent }: { agent: PublicAgentConfig }) {
  const testimonials = [`${agent.name} made the search feel organized and kept the next step obvious.`, `The pricing conversation was practical, direct, and grounded in the ${agent.market} market.`, "Follow-up after the open house was fast, personal, and easy to act on."];
  return <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Testimonials</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">A client experience designed around clarity.</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.map((quote) => <figure key={quote} className="border border-slate-200 bg-slate-50 p-6"><blockquote className="text-sm leading-6 text-slate-700">&ldquo;{quote}&rdquo;</blockquote></figure>)}</div></div></section>;
}

export function FAQ({ agent }: { agent: PublicAgentConfig }) {
  const faqs = [
    ["How fast are leads delivered?", "Submissions post to the configured CRM webhook immediately after server-side validation."],
    ["Can this template be cloned for another agent?", "Yes. Create a new agent config file, set environment variables, update the CRM webhook, and deploy the clone."],
    ["Does this support open-house QR codes?", "Yes. Use the open house page URL as the QR destination and route submissions by lead type."],
    [`What market does ${agent.name} serve?`, `${agent.name} currently serves ${agent.market} through ${agent.brokerage}.`]
  ];
  return <section className="bg-slate-50 px-6 py-20 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">FAQ</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Common setup and client questions.</h2><div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none text-base font-semibold text-slate-950">{question}</summary><p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div></div></section>;
}
