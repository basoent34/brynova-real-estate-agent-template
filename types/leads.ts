export type LeadType = "buyer" | "seller" | "open_house" | "contact";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  leadType: LeadType;
  cityOrArea: string;
  timeline: string;
  message: string;
  propertyAddress?: string;
  budget?: string;
  showingDate?: string;
};

export type LeadSubmission = LeadPayload & {
  id: string;
  createdAt: string;
  source: "website";
  agent: {
    name: string;
    brokerage: string;
    market: string;
    email: string;
    phone: string;
  };
};
