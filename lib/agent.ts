import "server-only";

import fs from "node:fs";
import path from "node:path";

import agentExample from "@/config/agent.example.json";
import type { AgentConfig, PublicAgentConfig } from "@/types/agent";

function resolveConfigPath() {
  const configuredPath = process.env.AGENT_CONFIG_PATH ?? "./config/agent.json";
  return path.isAbsolute(configuredPath) ? configuredPath : path.join(process.cwd(), configuredPath);
}

function readAgentConfigFile(): AgentConfig {
  const configPath = resolveConfigPath();

  if (!fs.existsSync(configPath)) {
    return agentExample as AgentConfig;
  }

  return JSON.parse(fs.readFileSync(configPath, "utf8")) as AgentConfig;
}

export function getAgentConfig(): AgentConfig {
  const fileConfig = readAgentConfigFile();
  return {
    ...fileConfig,
    crmWebhookUrl: process.env.CRM_WEBHOOK_URL || fileConfig.crmWebhookUrl || ""
  };
}

export function getPublicAgentConfig(): PublicAgentConfig {
  const agent = getAgentConfig();
  return {
    name: agent.name,
    brokerage: agent.brokerage,
    market: agent.market,
    phone: agent.phone,
    email: agent.email,
    bookingUrl: agent.bookingUrl,
    brandColor: agent.brandColor,
    headshotUrl: agent.headshotUrl,
    socialLinks: agent.socialLinks
  };
}
