import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalLayout({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <Nav />
      <main className="mx-auto px-6 py-20" style={{ maxWidth: 760, background: "var(--bg-surface)" }}>
        <h1
          className="mb-8 text-3xl font-bold md:text-4xl"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        <div
          className="mb-8 border p-4 text-sm"
          style={{
            borderColor: "var(--accent-orange)",
            background: "var(--bg-elevated)",
            color: "var(--text-primary)",
            borderRadius: "4px",
          }}
        >
          ⚠️ Dieser Text ist ein Platzhalter. Bitte ersetze ihn mit deinen rechtsgültigen{" "}
          {title}.
        </div>
        <div
          className="space-y-4 text-base"
          style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
        >
          {children ?? <p>[Hier kommt der rechtliche Text]</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
