import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalLayout({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <Nav />
      <main className="mx-auto px-6 py-20" style={{ maxWidth: 760, background: "#0d0d14" }}>
        <h1
          style={{
            color: "#e2e8f0",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: 48 }}>
            {subtitle}
          </p>
        )}
        <div
          className="space-y-4 text-base"
          style={{ color: "#94a3b8", lineHeight: 1.8 }}
        >
          {children ?? <p>[Hier kommt der rechtliche Text]</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
