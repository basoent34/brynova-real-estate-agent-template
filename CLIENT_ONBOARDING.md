# Client Onboarding

Use this checklist whenever BRYNOVA AI clones the template for a new real estate agent.

## Intake

Collect agent name, brokerage, market, phone, email, booking URL, CRM webhook URL, brand color, headshot URL, social links, testimonials, and open house workflow requirements.

## Build Steps

1. Clone the template into a new client repository.
2. Copy `config/agent.example.json` to `config/agent.json`.
3. Fill in every agent field.
4. Add `.env.local` for local testing.
5. Test buyer, seller, open house, and contact forms with a webhook test URL.
6. Replace the test webhook with the client's CRM webhook.
7. Add production environment variables in Vercel.
8. Run a final production build before launch.

## CRM Setup Notes

Map lead ID, created at, lead type, name, email, phone, city or area, timeline, message, buyer budget, property address, showing date, and agent metadata.

## Follow-Up Automation

Use lead type to trigger buyer, seller, open house, and contact follow-up sequences. Email and SMS notification placeholders are wired in `app/api/leads/route.ts`.
