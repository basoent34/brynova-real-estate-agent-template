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
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/92 shadow-sm backdrop-blur-xl">
      <div className="luxury-shell flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-neutral-950 text-sm font-semibold text-white">
            {agent.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              BRYNOVA AI
            </span>
            <span className="block truncate text-sm font-semibold text-neutral-950 sm:text-base">
              {agent.name}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${agent.phone}`}
            className="focus-ring hidden rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950 sm:inline-flex"
          >
            Call
          </a>
          <a
            href={agent.bookingUrl}
            className="focus-ring inline-flex rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Book
          </a>
        </div>

        <nav
          aria-label="Main navigation"
          className="order-last -mx-1 flex w-full gap-1 overflow-x-auto pb-1 text-sm font-semibold text-neutral-600 md:order-none md:mx-0 md:w-auto md:pb-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-3 py-2 transition hover:bg-neutral-100 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
