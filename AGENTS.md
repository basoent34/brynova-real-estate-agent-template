# BRYNOVA AI Real Estate Agent Template Instructions

- Keep the app on Next.js App Router, TypeScript, and Tailwind CSS.
- Keep visible agent-specific content sourced from `config/agent.json` or `config/agent.example.json`.
- Do not expose CRM webhook URLs, notification destinations, or other secrets to browser components or page output.
- Keep lead capture routed through the reusable `components/LeadForm.tsx` component and `app/api/leads/route.ts`.
- Validate lead submissions on the server before delivering them to the CRM webhook.
- Keep new client setup documented in `README.md`, `SETUP.md`, `CLIENT_ONBOARDING.md`, and `DEPLOYMENT.md`.
- Before handing off changes, run `npm run lint`, `npm run typecheck`, and `npm run build` when dependencies are available.
