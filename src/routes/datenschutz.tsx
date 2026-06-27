import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Intervall & Tabata Coach" },
      { name: "description", content: "Datenschutzerklärung von Intervall & Tabata Coach." },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: () => <LegalLayout title="Datenschutz" />,
});
