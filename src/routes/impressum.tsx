import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Intervall & Tabata Coach" },
      { name: "description", content: "Impressum von Intervall & Tabata Coach. Rechtliche Angaben gemäß § 5 DDG und Kontaktdaten." },
      { property: "og:title", content: "Impressum — Intervall & Tabata Coach" },
      { property: "og:description", content: "Impressum von Intervall & Tabata Coach." },
      { property: "og:url", content: "https://intervallcoach.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://intervallcoach.de/impressum" }],
  }),
  component: () => (
    <LegalLayout title="Impressum" subtitle="Angaben gemäß § 5 DDG">
      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        Angaben gemäß § 5 DDG
      </h2>
      <p>Benjamin Röder</p>
      <p>Mainkurstraße 16</p>
      <p>63075 Offenbach am Main</p>
      <p>Deutschland</p>

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
        Kontakt
      </h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:info@intervallcoach.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          info@intervallcoach.de
        </a>
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h2>
      <p>Benjamin Röder</p>
      <p>Mainkurstraße 16</p>
      <p>63075 Offenbach am Main</p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        Haftungsausschluss
      </h2>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Haftung für Inhalte
      </h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Haftung für Links
      </h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Stand: Juni 2026</p>
    </LegalLayout>
  ),
});
