import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Intervall & Tabata Coach" },
      { name: "description", content: "Impressum von Intervall & Tabata Coach." },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: () => <LegalLayout title="Impressum" />,
});
