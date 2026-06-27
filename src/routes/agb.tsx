import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — Intervall & Tabata Coach" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Intervall & Tabata Coach." },
      { property: "og:title", content: "AGB — Intervall & Tabata Coach" },
      { property: "og:description", content: "Allgemeine Geschäftsbedingungen von Intervall & Tabata Coach." },
      { property: "og:url", content: "/agb" },
    ],
    links: [{ rel: "canonical", href: "/agb" }],
  }),
  component: () => <LegalLayout title="AGB" />,
});
