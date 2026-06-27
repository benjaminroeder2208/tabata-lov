import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Intervall & Tabata Coach" },
      { name: "description", content: "Datenschutzerklärung von Intervall & Tabata Coach." },
      { property: "og:title", content: "Datenschutz — Intervall & Tabata Coach" },
      { property: "og:description", content: "Datenschutzerklärung von Intervall & Tabata Coach." },
      { property: "og:url", content: "https://intervallcoach.de/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "https://intervallcoach.de/datenschutz" }],
  }),
  component: () => (
    <LegalLayout title="Datenschutzerklärung" subtitle="Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO">
      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        1. Verantwortlicher
      </h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>Benjamin Röder</p>
      <p>Mainkurstraße 16</p>
      <p>63075 Offenbach am Main</p>
      <p>Deutschland</p>
      <p>
        E-Mail:{" "}
        <a href="mailto:benjamin@kontakt-2.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          benjamin@kontakt-2.de
        </a>
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        2. Allgemeines zur Datenverarbeitung
      </h2>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Umfang der Verarbeitung personenbezogener Daten
      </h3>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
      </p>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Rechtsgrundlagen
      </h3>
      <p>
        Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Zur Wahrung unserer berechtigten Interessen (z. B. Betrieb und Sicherheit der Plattform) dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
      </p>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Datenlöschung und Speicherdauer
      </h3>
      <p>
        Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus dann erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften vorgesehen wurde.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        3. Bereitstellung der Website — Serverdaten
      </h2>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Art und Umfang der Verarbeitung
      </h3>
      <p>
        Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>IP-Adresse des zugreifenden Rechners (anonymisiert)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
        <li>Verwendeter Browser und ggf. das Betriebssystem</li>
      </ul>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Zweck und Rechtsgrundlage
      </h3>
      <p>
        Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Die Rechtsgrundlage für die vorübergehende Speicherung ist Art. 6 Abs. 1 lit. f DSGVO. Logfiles werden nach spätestens 7 Tagen gelöscht.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        4. Nutzeraccounts (App-Registrierung)
      </h2>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Art und Umfang der Verarbeitung
      </h3>
      <p>
        Für die Nutzung der App Intervall & Tabata Coach unter https://app.intervallcoach.de ist eine Registrierung erforderlich. Dabei werden folgende Daten erhoben:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>E-Mail-Adresse</li>
        <li>Selbst gewähltes Passwort (verschlüsselt gespeichert, nicht im Klartext)</li>
      </ul>
      <p>Darüber hinaus speichert die App folgende nutzergenerierte Daten in der Cloud:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>Erstellte Workouts (Name, Intervallzeiten, Rundenanzahl)</li>
        <li>Trainingshistorie (Datum, Dauer, genutztes Workout)</li>
        <li>Streak- und Badge-Daten (Trainingsfortschritt)</li>
      </ul>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Zweck und Rechtsgrundlage
      </h3>
      <p>
        Die Verarbeitung dieser Daten ist zur Erfüllung des Nutzungsvertrags erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h3 style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
        Speicherdauer und Kontolöschung
      </h3>
      <p>
        Die Daten werden gespeichert, solange das Nutzerkonto besteht. Nach Löschung des Accounts werden alle personenbezogenen Daten innerhalb von 30 Tagen gelöscht. Eine Löschanfrage kann per E-Mail an{" "}
        <a href="mailto:benjamin@kontakt-2.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          benjamin@kontakt-2.de
        </a>{" "}
        gestellt werden.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        5. Cookies und lokale Speicherung
      </h2>
      <p>
        Die App und Website verwenden keine Tracking-Cookies. Folgende technisch notwendige Speichermechanismen kommen zum Einsatz:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>
          <strong style={{ color: "#cbd5e1" }}>localStorage / sessionStorage:</strong> Zur Speicherung von Sitzungsdaten (Login-Token), App-Einstellungen und temporären Trainingsdaten auf dem Gerät des Nutzers. Diese Daten verlassen das Gerät nicht, es sei denn, der Nutzer ist angemeldet und die Cloud-Sync-Funktion ist aktiv.
        </li>
      </ul>
      <p>
        Diese Speicherung ist für den Betrieb der App technisch erforderlich und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Es werden keine Analyse-, Werbe- oder Tracking-Cookies eingesetzt.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        6. Keine Weitergabe von Daten an Dritte
      </h2>
      <p>
        Wir verkaufen oder vermieten keine personenbezogenen Daten an Dritte. Eine Weitergabe erfolgt nur, wenn dies gesetzlich vorgeschrieben ist oder zur Durchsetzung unserer Nutzungsbedingungen erforderlich ist.
      </p>
      <p>
        Wir verwenden keine Dienste von Google Analytics, Facebook oder sonstigen Drittanbieter-Trackingdiensten auf dieser Website oder in der App.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        7. Serverstandort
      </h2>
      <p>
        Die Daten werden auf Servern in Deutschland gespeichert und verarbeitet. Es findet keine Übertragung in Drittländer außerhalb der EU/des EWR statt.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        8. Deine Rechte als betroffene Person
      </h2>
      <p>Du hast nach der DSGVO folgende Rechte:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO) — die App bietet hierfür eine Export-Funktion an</li>
        <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte wende dich bitte an:{" "}
        <a href="mailto:benjamin@kontakt-2.de" style={{ color: "var(--accent-orange)", textDecoration: "underline" }}>
          benjamin@kontakt-2.de
        </a>
      </p>
      <p>
        Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach deinem Wohnsitz in Deutschland.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        9. Datensicherheit
      </h2>
      <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um deine Daten zu schützen:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
        <li>Verschlüsselte Übertragung aller Daten via HTTPS/TLS</li>
        <li>Verschlüsselte Speicherung von Passwörtern (Hashing)</li>
        <li>Zugriffsbeschränkungen auf Serverebene</li>
      </ul>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, marginTop: 0, marginBottom: 12 }}>
        10. Aktualität dieser Datenschutzerklärung
      </h2>
      <p>
        Diese Datenschutzerklärung hat den Stand Juni 2026 und ist unter https://intervallcoach.de/datenschutz abrufbar. Bei wesentlichen Änderungen werden registrierte Nutzer per E-Mail informiert.
      </p>

      <hr style={{ borderTop: "1px solid #1e1e2e", margin: "32px 0", border: "none", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "#1e1e2e" }} />

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Stand: Juni 2026</p>
    </LegalLayout>
  ),
});
