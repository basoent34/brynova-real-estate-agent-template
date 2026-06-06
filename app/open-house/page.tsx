import { BookingCTA } from "@/components/BookingCTA";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { getPublicAgentConfig } from "@/lib/agent";

export default function OpenHousePage() {
  const agent = getPublicAgentConfig();

  return (
    <main>
      <Hero
        agent={agent}
        eyebrow="Open house QR form"
        title="Visitor sign-in built for fast follow-up"
        description={`Capture open-house visitors for ${agent.name} and send every lead into the follow-up workflow.`}
        primaryCta={{ href: "#open-house-form", label: "Open sign-in" }}
        secondaryCta={{ href: `tel:${agent.phone}`, label: "Call agent" }}
      />

      <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">
              QR ready
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
              Clone this page for each listing.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
              Add the property address and showing date to the form, then place this page behind a QR code at the listing.
            </p>
            <div className="mt-8 rounded-lg bg-neutral-950 p-6 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Recommended use</p>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Use a unique URL or campaign tag per property in the CRM webhook so follow-up can reference the correct open house.
              </p>
            </div>
          </div>
          <div id="open-house-form">
            <LeadForm
              agentName={agent.name}
              leadType="open_house"
              title="Open house visitor form"
              description={`Sign in with ${agent.name} for property details, offer updates, and showing follow-up.`}
            />
          </div>
        </div>
      </section>
      <BookingCTA agent={agent} />
    </main>
  );
}
