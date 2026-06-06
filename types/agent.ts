export type SocialLinks = {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  x?: string;
};

export type AgentConfig = {
  name: string;
  brokerage: string;
  market: string;
  phone: string;
  email: string;
  bookingUrl: string;
  crmWebhookUrl: string;
  brandColor: string;
  headshotUrl: string;
  socialLinks: SocialLinks;
};

export type PublicAgentConfig = Omit<AgentConfig, "crmWebhookUrl">;
