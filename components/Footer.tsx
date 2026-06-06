import Link from "next/link";

import type { PublicAgentConfig } from "@/types/agent";

export function Footer({ agent }: { agent: PublicAgentConfig }) {
  const socials = Object.entries(agent.socialLinks).filter(([, href]) => Boolean(href));

  return (
    <footer className="bg-neutral-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">BRYNOVA AI</p>
          <h2 className="mt-3 text-2xl font-semibold">{agent.name}</h2>
          <p className="mt-2 text-sm text-white/62">
            {agent.brokerage} | {agent.market}
          </p>
          <p className="mt-4 text-sm text-white/62">
            <a href={`tel:${agent.phone}`} className="hover:text-white">
              {agent.phone}
            </a>{" "}
            |{" "}
            <a href={`mailto:${agent.email}`} className="hover:text-white">
              {agent.email}
            </a>
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/62 md:text-right">
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/buyers" className="hover:text-white">
              Buyers
            </Link>
            <Link href="/sellers" className="hover:text-white">
              Sellers
            </Link>
            <Link href="/open-house" className="hover:text-white">
              Open House
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
          {socials.length > 0 && (
            <div className="flex flex-wrap gap-4 md:justify-end">
              {socials.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="capitalize hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          )}
          <p className="text-xs text-white/35">
            Template by BRYNOVA AI. Customize per agent before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
