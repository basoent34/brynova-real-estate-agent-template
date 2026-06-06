# Setup Guide

## 1. Clone for a New Agent

```bash
git clone <template-repo-url> agent-name-website
cd agent-name-website
npm install
```

## 2. Configure Agent Content

Copy the example config:

```bash
cp config/agent.example.json config/agent.json
```

Update every field in `config/agent.json`. Visible agent-specific content is loaded from this config. The server strips `crmWebhookUrl` before sending config data to the browser.

## 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Set:

```bash
AGENT_CONFIG_PATH=./config/agent.json
CRM_WEBHOOK_URL=https://your-crm-or-automation-webhook
```

Use `CRM_WEBHOOK_URL` for production secrets.

## 4. Run Local Checks

```bash
npm run dev
npm run typecheck
npm run build
```

## 5. Test Lead Delivery

Use a temporary webhook URL and submit buyer, seller, open house, and contact forms.
