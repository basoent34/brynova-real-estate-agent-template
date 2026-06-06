import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPublicAgentConfig } from "@/lib/agent";

type BrandStyle = CSSProperties & {
  "--brand": string;
};

export function generateMetadata(): Metadata {
  const agent = getPublicAgentConfig();

  return {
    title: `${agent.name} | ${agent.market} Real Estate`,
    description: `${agent.name} helps buyers and sellers move confidently across ${agent.market}.`
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const agent = getPublicAgentConfig();

  return (
    <html lang="en">
      <body style={{ "--brand": agent.brandColor } as BrandStyle}>
        <Header agent={agent} />
        {children}
        <Footer agent={agent} />
      </body>
    </html>
  );
}
