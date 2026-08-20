import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExportBar } from "@/components/proposal/ExportBar";
import { ProposalDocument } from "@/components/proposal/ProposalDocument";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokenized RWAs for ZEEX | Ribbon Protocol Proposal" },
      {
        name: "description",
        content:
          "Ribbon Protocol proposal to ZSE Holdings: onchain capital markets infrastructure, $ZIG stablecoin, global liquidity and Base Ecosystem funding for ZEEX.",
      },
      { property: "og:title", content: "Tokenized RWAs for ZEEX | Ribbon Protocol Proposal" },
      {
        property: "og:description",
        content:
          "Onchain capital markets infrastructure, global liquidity and Base Ecosystem funding for the Zimbabwe Entrepreneurship Exchange.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-mist pb-10">
      <ExportBar />
      <ProposalDocument />
    </main>
  );
}
