import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="text-xs font-bold tracking-wider">
            <span style={{ color: "var(--text-primary)" }}>INTERVALL </span>
            <span style={{ color: "var(--accent-orange)" }}>&amp;</span>
            <span style={{ color: "var(--text-primary)" }}> TABATA COACH</span>
          </div>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            Intervall- und Tabata-Training für den DACH-Markt.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/agb" style={{ color: "var(--text-primary)" }} className="transition-colors hover:text-[var(--accent-orange)]">
            AGB
          </Link>
          <Link to="/datenschutz" style={{ color: "var(--text-primary)" }} className="transition-colors hover:text-[var(--accent-orange)]">
            Datenschutz
          </Link>
          <Link to="/impressum" style={{ color: "var(--text-primary)" }} className="transition-colors hover:text-[var(--accent-orange)]">
            Impressum
          </Link>
        </div>
        <div className="text-sm">
          <div style={{ color: "var(--text-primary)" }}>© 2025 Intervall &amp; Tabata Coach</div>
          <div className="mt-2" style={{ color: "var(--text-muted)" }}>
            Made in Germany
          </div>
        </div>
      </div>
    </footer>
  );
}
