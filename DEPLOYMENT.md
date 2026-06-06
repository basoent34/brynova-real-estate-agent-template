# Deployment Guide

This template is designed for Vercel.

## Vercel Project Setup

1. Push the cloned client repo to GitHub, GitLab, or Bitbucket.
2. Create a new Vercel project from the repository.
3. Use the default Next.js framework preset.
4. Set production environment variables.

## Required Environment Variables

```bash
AGENT_CONFIG_PATH=./config/agent.json
CRM_WEBHOOK_URL=https://your-production-crm-webhook
```

## Optional Environment Variables

```bash
LEAD_EMAIL_NOTIFICATIONS_ENABLED=false
LEAD_EMAIL_TO=
LEAD_SMS_NOTIFICATIONS_ENABLED=false
LEAD_SMS_TO=
```

## Production Checks

```bash
npm run typecheck
npm run build
```

After deployment, open all pages, submit each lead type, confirm CRM delivery, and confirm no webhook URL appears in browser page source or client-side network responses.
