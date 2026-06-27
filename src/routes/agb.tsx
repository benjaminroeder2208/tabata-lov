import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — Intervall & Tabata Coach" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Intervall & Tabata Coach." },
      { property: "og:title", content: "AGB — Intervall & Tabata Coach" },
      { property: "og:description", content: "Allgemeine Geschäftsbedingungen von Intervall & Tabata Coach." },
      { property: "og:url", content: "https://intervallcoach.de/agb" },
    ],
    links: [{ rel: "canonical", href: "https://intervallcoach.de/agb" }],
  }),
  component: () => (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" subtitle="Nutzungsbedingungen für Intervall & Tabata Coach">
      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 1 Geltungsbereich
      </h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Web-App Intervall & Tabata Coach, erreichbar unter https://app.intervallcoach.de, sowie der zugehörigen Website https://intervallcoach.de (nachfolgend „App" oder „Dienst").
      </p>
      <p>
        Anbieter ist Benjamin Röder, Mainkurstraße 16, 63075 Offenbach am Main (nachfolgend „Anbieter"). Mit der Registrierung oder Nutzung des Dienstes erklärt der Nutzer sein Einverständnis mit diesen AGB.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 2 Leistungsbeschreibung
      </h2>
      <p>
        Der Anbieter stellt eine Progressive Web App für Intervall- und Tabata-Training zur Verfügung. Der Funktionsumfang umfasst unter anderem:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>Erstellung und Verwaltung von Intervall- und Tabata-Workouts</li>
        <li>Trainingshistorie und Statistiken</li>
        <li>Streak- und Badge-System</li>
        <li>Cloud-Synchronisation der Trainingsdaten</li>
        <li>Deutsche Sprachausgabe während des Trainings</li>
      </ul>
      <p>
        Der Anbieter behält sich vor, den Funktionsumfang jederzeit zu erweitern, zu ändern oder einzelne Funktionen einzustellen. Ein Rechtsanspruch auf einen bestimmten Funktionsumfang besteht nicht.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 3 Registrierung und Nutzerkonto
      </h2>
      <p>
        Die Nutzung des Dienstes setzt eine Registrierung mit einer gültigen E-Mail-Adresse und einem Passwort voraus. Der Nutzer ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln und den Anbieter unverzüglich zu informieren, wenn ein Missbrauch des Kontos bekannt wird.
      </p>
      <p>
        Pro Person ist ein Nutzerkonto zulässig. Eine Weitergabe des Kontos an Dritte ist nicht gestattet.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 4 Kostenlose Nutzung und zukünftige Bezahlmodelle
      </h2>
      <p>
        Der Dienst ist derzeit kostenlos nutzbar. Der Anbieter plant die Einführung eines kostenpflichtigen Pro-Tarifs. Bestehende Nutzer werden vor Einführung kostenpflichtiger Funktionen rechtzeitig und transparent informiert. Die Nutzung kostenloser Funktionen bleibt davon unberührt.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 5 Pflichten des Nutzers
      </h2>
      <p>
        Der Nutzer verpflichtet sich, den Dienst ausschließlich für private, nicht-kommerzielle Zwecke zu nutzen und keine Inhalte einzustellen oder Handlungen vorzunehmen, die gegen geltendes Recht oder die Rechte Dritter verstoßen.
      </p>
      <p>
        Eine automatisierte Nutzung des Dienstes (z. B. durch Bots oder Scraping) ist nicht gestattet.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 6 Verfügbarkeit
      </h2>
      <p>
        Der Anbieter bemüht sich um eine möglichst unterbrechungsfreie Verfügbarkeit des Dienstes, übernimmt jedoch keine Garantie für eine bestimmte Verfügbarkeit. Wartungsarbeiten, technische Störungen oder Umstände außerhalb des Einflussbereichs des Anbieters können zu vorübergehenden Einschränkungen führen.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 7 Haftungsbeschränkung
      </h2>
      <p>
        Der Anbieter haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Die Haftung für leichte Fahrlässigkeit ist — soweit gesetzlich zulässig — ausgeschlossen, es sei denn, es werden wesentliche Vertragspflichten (Kardinalpflichten) verletzt.
      </p>
      <p>
        Der Dienst dient ausschließlich der Unterstützung beim Sport. Der Anbieter übernimmt keine Haftung für gesundheitliche Schäden, die im Zusammenhang mit der Nutzung entstehen. Nutzer mit gesundheitlichen Einschränkungen sollten vor der Nutzung ärztlichen Rat einholen.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 8 Kündigung und Kontolöschung
      </h2>
      <p>
        Der Nutzer kann sein Konto jederzeit und ohne Angabe von Gründen löschen lassen. Eine Löschanfrage ist per E-Mail an{" "}
        <a href="mailto:benjamin@kontakt-2.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          benjamin@kontakt-2.de
        </a>{" "}
        zu richten. Das Konto und alle zugehörigen Daten werden innerhalb von 30 Tagen gelöscht.
      </p>
      <p>
        Der Anbieter ist berechtigt, Nutzerkonten bei schwerwiegendem Verstoß gegen diese AGB zu sperren oder zu löschen.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 9 Änderungen der AGB
      </h2>
      <p>
        Der Anbieter behält sich vor, diese AGB mit angemessener Vorankündigungsfrist zu ändern. Registrierte Nutzer werden per E-Mail informiert. Widerspricht der Nutzer den geänderten AGB nicht innerhalb von 30 Tagen nach Bekanntgabe, gelten die neuen AGB als akzeptiert. Auf dieses Widerspruchsrecht wird in der Benachrichtigung ausdrücklich hingewiesen.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 10 Anwendbares Recht und Gerichtsstand
      </h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für Streitigkeiten mit Nutzern, die keinen allgemeinen Gerichtsstand in Deutschland haben, ist Offenbach am Main.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        § 11 Kontakt
      </h2>
      <p>Benjamin Röder</p>
      <p>Mainkurstraße 16</p>
      <p>63075 Offenbach am Main</p>
      <p>
        E-Mail:{" "}
        <a href="mailto:benjamin@kontakt-2.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          benjamin@kontakt-2.de
        </a>
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Stand: Juni 2026</p>
    </LegalLayout>
  ),
});
