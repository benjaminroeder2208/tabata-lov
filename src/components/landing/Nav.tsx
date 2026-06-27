import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: "var(--bg-base)",
        borderBottom: "1px solid var(--border-default)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="text-xs font-bold tracking-wider md:text-sm">
          <span style={{ color: "var(--text-primary)" }}>INTERVALL </span>
          <span style={{ color: "var(--accent-orange)" }}>&amp;</span>
          <span style={{ color: "var(--text-primary)" }}> TABATA COACH</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://app.intervallcoach.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Login — Intervall & Tabata Coach App (öffnet in neuem Tab)"
            className="px-4 py-2 text-xs font-bold transition-colors hover:text-[var(--accent-orange)] focus-visible:text-[var(--accent-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:text-sm"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-default)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
          >
            Login
          </a>
          <a
            href="https://app.intervallcoach.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kostenlos starten — Intervall & Tabata Coach App (öffnet in neuem Tab)"
            className="px-4 py-2 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:text-sm"
            style={{
              background: "var(--accent-orange)",
              color: "var(--bg-base)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-orange-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-orange)")}
          >
            Kostenlos starten →
          </a>
        </div>
      </div>
    </nav>
  );
}
