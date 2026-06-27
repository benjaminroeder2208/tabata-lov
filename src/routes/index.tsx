import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Timer,
  Volume2,
  History,
  Flame,
  Cloud,
  Smartphone,
  Users,
  Download,
  Youtube,
  UserPlus,
  ListChecks,
  Play,
  Shield,
  Server,
  Zap,
  ChevronRight,
  Check,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { TabataTimer } from "@/components/landing/TabataTimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intervall & Tabata Coach — Trainings-App für HIIT und Tabata" },
      {
        name: "description",
        content:
          "Kostenlose PWA für Tabata und Intervall-Training. Deutsche Sprachausgabe, Cloud-Sync, Streaks & Badges. DSGVO-konform. Jetzt kostenlos starten.",
      },
      { property: "og:title", content: "Intervall & Tabata Coach" },
      {
        property: "og:description",
        content: "Tabata und HIIT Training App — kostenlos, PWA, auf Deutsch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://intervallcoach.de" },
    ],
    links: [{ rel: "canonical", href: "https://intervallcoach.de" }],
  }),
  component: Index,
});

const APP_URL = "https://app.intervallcoach.de";

const features = [
  { icon: Timer, color: "var(--accent-orange)", name: "Tabata & Intervall Timer", desc: "Frei konfigurierbare Workouts — Rundenanzahl, Arbeits- und Pausenzeit bis auf die Sekunde." },
  { icon: Volume2, color: "var(--accent-green)", name: "Deutsche Sprachausgabe", desc: "Die App zählt auf Deutsch an, kündigt Phasen an und motiviert — kein Blick aufs Display nötig." },
  { icon: History, color: "var(--accent-blue)", name: "Trainingshistorie", desc: "7-Tage-Übersicht deiner Workouts. Sieh auf einen Blick, wann du zuletzt trainiert hast." },
  { icon: Flame, color: "var(--accent-orange)", name: "Streaks & Badges", desc: "10 freischaltbare Badges und ein Streak-System — bleib dran und werde belohnt." },
  { icon: Cloud, color: "var(--accent-blue)", name: "Cloud-Sync", desc: "Deine Workouts auf allen Geräten. Trainiere zuhause, melde dich unterwegs an — alles da." },
  { icon: Smartphone, color: "var(--accent-purple)", name: "PWA — Wie eine native App", desc: "Installierbar auf iOS und Android. Läuft wie eine App, braucht keinen App Store." },
  { icon: Users, color: "var(--accent-green)", name: "Eigener Account", desc: "Jeder Nutzer hat seinen eigenen sicheren Account mit persönlichen Workouts und Daten." },
  { icon: Download, color: "var(--accent-purple)", name: "Export & Import", desc: "Exportiere deine Trainingsdaten. Volle Kontrolle über deine eigenen Daten." },
  { icon: Youtube, color: "var(--accent-orange)", name: "YouTube-Integration", desc: "Lege Musik im Hintergrund auf — der Timer läuft, YouTube spielt." },
];

const steps = [
  { icon: UserPlus, name: "Registrieren", desc: "Kostenlos anmelden unter app.intervallcoach.de — kein Abo, keine Kreditkarte." },
  { icon: ListChecks, name: "Workout wählen", desc: "Wähle ein Tabata-Preset oder erstelle dein eigenes Intervall-Workout mit beliebigen Runden und Zeiten." },
  { icon: Play, name: "Trainieren", desc: "Starte. Die App spricht mit dir auf Deutsch. Keine Ablenkung, kein Bildschirm-Starren." },
];

const trustItems = [
  { icon: Shield, title: "DSGVO-konform", desc: "Vollständig konform mit der europäischen Datenschutzgrundverordnung." },
  { icon: Server, title: "Deutsche Server", desc: "Deine Trainingsdaten liegen auf Servern in Deutschland." },
  { icon: Zap, title: "Keine Tracker", desc: "Kein Google Analytics, kein Facebook Pixel — deine Daten bleiben deine Daten." },
];

function Eyebrow({ children, color = "var(--accent-orange)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      className="text-xs font-bold uppercase tracking-[0.15em]"
      style={{ color }}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ href, children, full }: { href: string; children: React.ReactNode; full?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-colors ${full ? "w-full" : ""}`}
      style={{ background: "var(--accent-orange)", color: "var(--bg-base)", borderRadius: "2px" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-orange-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-orange)")}
    >
      {children}
    </a>
  );
}

function GhostButton({
  href,
  children,
  borderColor = "var(--border-default)",
  textColor = "var(--text-primary)",
  full,
}: {
  href: string;
  children: React.ReactNode;
  borderColor?: string;
  textColor?: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-opacity hover:opacity-80 ${full ? "w-full" : ""}`}
      style={{
        background: "transparent",
        color: textColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "2px",
      }}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      <Nav />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Eyebrow>// TRAINING APP</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 font-bold"
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Intervall-Training.<br />Kein Schnickschnack.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-base md:text-lg"
              style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
            >
              Tabata, HIIT und Custom-Intervalle — mit Sprachausgabe, Trainingshistorie und Streak-System. Kostenlos. Auf deinem Smartphone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <PrimaryButton href={APP_URL}>Jetzt kostenlos starten →</PrimaryButton>
              <GhostButton href="#features">Features ansehen ↓</GhostButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              <span>✓ Kein Abo nötig</span>
              <span>✓ DSGVO-konform</span>
              <span>✓ Läuft offline</span>
            </motion.div>
          </div>
          <div className="hidden md:col-span-2 md:flex md:justify-center">
            <TabataTimer />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>// FEATURES</Eyebrow>
          <h2
            className="mt-4 font-bold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Alles drin. Nichts überflüssig.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "4px",
                }}
              >
                <Icon size={28} style={{ color: f.color }} />
                <h3 className="mt-4 text-base font-bold" style={{ color: "var(--text-primary)" }}>
                  {f.name}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>// SO FUNKTIONIERT'S</Eyebrow>
          <h2
            className="mt-4 font-bold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            In drei Schritten zum Training
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <>
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 p-6"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "4px",
                  }}
                >
                  <Icon size={28} style={{ color: "var(--accent-orange)" }} />
                  <h3 className="mt-4 text-base font-bold" style={{ color: "var(--text-primary)" }}>
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div
                    key={`arrow-${i}`}
                    className="flex items-center justify-center"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    <ChevronRight size={32} className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>// PREISE</Eyebrow>
          <h2
            className="mt-4 font-bold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Jetzt kostenlos. Bald mehr.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* FREE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col p-8"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--accent-green)",
              borderRadius: "4px",
            }}
          >
            <div
              className="inline-block self-start px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-green)", border: "1px solid var(--accent-green)", borderRadius: "2px" }}
            >
              Jetzt verfügbar
            </div>
            <h3 className="mt-6 text-xl font-bold" style={{ color: "var(--text-primary)" }}>Free</h3>
            <div className="mt-4 text-5xl font-bold" style={{ color: "var(--text-primary)" }}>0 €</div>
            <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Für immer kostenlos</div>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {["Alle Timer-Features", "Trainingshistorie", "Streaks & Badges", "Cloud-Sync", "PWA (installierbar)", "YouTube-Integration"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2" style={{ color: "var(--text-primary)" }}>
                    <Check size={16} style={{ color: "var(--accent-green)" }} className="mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <div className="mt-8">
              <PrimaryButton href={APP_URL} full>Kostenlos starten →</PrimaryButton>
            </div>
          </motion.div>

          {/* PRO */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col p-8"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--accent-purple)",
              borderRadius: "4px",
              opacity: 0.95,
            }}
          >
            <div
              className="inline-block self-start px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-purple)", border: "1px solid var(--accent-purple)", borderRadius: "2px", opacity: 0.8 }}
            >
              Demnächst
            </div>
            <h3 className="mt-6 text-xl font-bold" style={{ color: "var(--text-primary)" }}>Pro</h3>
            <div className="mt-4 text-5xl font-bold" style={{ color: "var(--text-muted)" }}>Demnächst</div>
            <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Für ernsthafte Athleten</div>
            <ul className="mt-6 flex-1 space-y-3 text-sm" style={{ opacity: 0.85 }}>
              {["Erweiterte Statistiken", "KI-basierte Trainingspläne", "Prioritäts-Support", "Weitere Features in Planung"].map((item) => (
                <li key={item} className="flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent-purple)" }} className="mt-0.5">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GhostButton
                href="mailto:hello@intervallcoach.de?subject=Pro%20Update"
                borderColor="var(--accent-purple)"
                textColor="var(--accent-purple)"
                full
              >
                Benachrichtige mich
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section
        style={{
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-default)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 text-center md:grid-cols-3"
          >
            {trustItems.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="flex flex-col items-center">
                  <Icon size={28} style={{ color: "var(--accent-orange)" }} />
                  <div className="mt-4 text-base font-bold" style={{ color: "var(--text-primary)" }}>
                    {t.title}
                  </div>
                  <p className="mt-2 max-w-xs text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Bereit zum Training?
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            Kostenlos registrieren. In 60 Sekunden startklar.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href={APP_URL}>Jetzt kostenlos starten →</PrimaryButton>
          </div>
          <div className="mt-4 text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
            Kein Abo · Keine Kreditkarte · Jederzeit kündbar
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
