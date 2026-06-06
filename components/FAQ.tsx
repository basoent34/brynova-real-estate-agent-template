import type { PublicAgentConfig } from "@/types/agent";

export function FAQ({ agent }: { agent: PublicAgentConfig }) {
  const faqs = [
    {
      question: "How fast are leads delivered?",
      answer: "Submissions post to the configured CRM webhook immediately after server-side validation."
    },
    {
      question: "Can this template be cloned for another agent?",
      answer: "Yes. Create a new agent config file, set environment variables, update the CRM webhook, and deploy the clone."
    },
    {
      question: "Does this support open-house QR codes?",
      answer: "Yes. Use the open house page URL as the QR destination and route submissions by lead type."
    },
    {
      question: `What market does ${agent.name} serve?`,
      answer: `${agent.name} currently serves ${agent.market} through ${agent.brokerage}.`
    }
  ];

  return (
    <section className="bg-[var(--paper)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
          Common setup and client questions.
        </h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-neutral-950">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
