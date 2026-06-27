import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Intervall & Tabata Coach" },
      { name: "description", content: "Datenschutzerklärung von Intervall & Tabata Coach." },
      { property: "og:title", content: "Datenschutz — Intervall & Tabata Coach" },
      { property: "og:description", content: "Datenschutzerklärung von Intervall & Tabata Coach." },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: () => <LegalLayout title="Datenschutz" />,
});
