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
            className="px-4 py-2 text-xs font-bold transition-colors md:text-sm"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-default)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-orange)";
              e.currentTarget.style.color = "var(--accent-orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Login
          </a>
          <a
            href="https://app.intervallcoach.de"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold transition-colors md:text-sm"
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
