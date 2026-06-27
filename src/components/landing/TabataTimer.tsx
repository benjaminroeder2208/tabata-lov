import { useEffect, useState } from "react";
import { motion } from "motion/react";

const WORK_DURATION = 8;
const REST_DURATION = 10;
const TOTAL_ROUNDS = 8;

export function TabataTimer() {
  const [phase, setPhase] = useState<"work" | "rest">("work");
  const [secondsLeft, setSecondsLeft] = useState(WORK_DURATION);
  const [round, setRound] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setPhase((p) => {
            const next = p === "work" ? "rest" : "work";
            if (p === "rest") {
              setRound((r) => (r >= TOTAL_ROUNDS ? 1 : r + 1));
            }
            return next;
          });
          return phase === "work" ? REST_DURATION : WORK_DURATION;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  const total = phase === "work" ? WORK_DURATION : REST_DURATION;
  const progress = secondsLeft / total;
  const color = "var(--accent-orange)";
  const label = phase === "work" ? "WORK" : "REST";
  const labelColor = phase === "work" ? "var(--accent-orange)" : "var(--accent-blue)";

  const radius = 130;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: secondsLeft === total ? [1, 1.04, 1] : 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: 300, height: 300 }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300">
          <circle
            cx="150"
            cy="150"
            r={radius}
            fill="var(--bg-surface)"
            stroke="var(--border-default)"
            strokeWidth="2"
          />
          <motion.circle
            cx="150"
            cy="150"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            initial={false}
            animate={{ strokeDashoffset: circumference * (1 - progress) }}
            transition={{ duration: 1, ease: "linear" }}
            transform="rotate(-90 150 150)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="text-7xl font-bold tabular-nums"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {String(secondsLeft).padStart(2, "0")}
          </div>
          <div
            className="mt-2 text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: labelColor }}
          >
            {label}
          </div>
        </div>
      </motion.div>
      <div
        className="mt-6 text-sm uppercase tracking-[0.15em]"
        style={{ color: "var(--text-muted)" }}
      >
        Runde {round} / {TOTAL_ROUNDS}
      </div>
    </div>
  );
}
