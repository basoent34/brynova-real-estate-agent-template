# BRYNOVA AI Real Estate Agent Website Template

Reusable Next.js template for solo real estate agents. It includes buyer, seller, open house, and contact lead capture pages, a configurable agent profile, CRM webhook delivery, and placeholders for optional email/SMS notifications.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment
- `/api/leads` form endpoint
- Configurable CRM webhook delivery

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create the agent config:

   ```bash
   cp config/agent.example.json config/agent.json
   ```

3. Create local environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Add a test webhook to `.env.local`:

   ```bash
   CRM_WEBHOOK_URL=https://webhook.site/your-test-url
   ```

5. Run the site:

   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000`.

## Customize for a New Agent

For each client clone, create `config/agent.json` from `config/agent.example.json` and update agent name, brokerage, market, phone, email, booking URL, brand color, headshot URL, and social links.

Keep production secrets in environment variables, especially:

```bash
CRM_WEBHOOK_URL=https://your-crm-or-automation-webhook
```

`config/agent.json` is ignored by Git so each client can have private local settings. The public site receives only non-secret agent fields.

## Pages

- Home
- Buyers
- Sellers
- Open House
- Contact

## Lead Flow

All forms use `components/LeadForm.tsx` and submit to `app/api/leads/route.ts`. The API route validates input, enriches the payload with agent metadata, sends the lead to the configured CRM webhook, and returns JSON.

## Pre-Launch Checklist

```bash
npm run lint
npm run typecheck
npm run build
```

Then submit test buyer, seller, open house, and contact leads with a test webhook before switching to the production CRM webhook.
