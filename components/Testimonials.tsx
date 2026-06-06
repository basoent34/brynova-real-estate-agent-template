import type { PublicAgentConfig } from "@/types/agent";

export function Testimonials({ agent }: { agent: PublicAgentConfig }) {
  const testimonials = [
    {
      quote: `${agent.name} made the search feel organized and kept the next step obvious.`,
      name: "Buyer client"
    },
    {
      quote: `The pricing conversation was practical, direct, and grounded in the ${agent.market} market.`,
      name: "Seller client"
    },
    {
      quote: "Follow-up after the open house was fast, personal, and easy to act on.",
      name: "Open house visitor"
    }
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
          A client experience designed around clarity.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg border border-neutral-200 bg-[var(--paper)] p-6 shadow-sm">
              <blockquote className="text-sm leading-6 text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-neutral-950">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
