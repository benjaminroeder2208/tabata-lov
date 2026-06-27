import { useEffect, useState } from "react";
import { motion } from "motion/react";

const EXERCISE_DURATION = 10;
const TOTAL_ROUNDS = 8;

const EXERCISES = [
  "Burpees",
  "Jump Squats",
  "Mountain Climbers",
  "High Knees",
  "Push-Ups",
  "Jumping Jacks",
  "Plank Taps",
  "Squat Jumps",
];

const RING_COLOR = "#f97316";

export function TabataTimer() {
  const [secondsLeft, setSecondsLeft] = useState(EXERCISE_DURATION);
  const [round, setRound] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setRound((r) => (r >= TOTAL_ROUNDS ? 1 : r + 1));
          return EXERCISE_DURATION;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const progress = secondsLeft / EXERCISE_DURATION;
  const label = EXERCISES[(round - 1) % EXERCISES.length].toUpperCase();

  const SIZE = 320;
  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: secondsLeft === EXERCISE_DURATION ? [1, 1.04, 1] : 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: SIZE, height: SIZE }}
      >
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            fill="var(--bg-surface)"
            stroke="var(--border-default)"
            strokeWidth="2"
          />
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            fill="none"
            stroke={RING_COLOR}
            strokeWidth="6"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            initial={false}
            animate={{ strokeDashoffset: circumference * (1 - progress) }}
            transition={{ duration: 1, ease: "linear" }}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div
            className="text-7xl font-bold tabular-nums"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {String(secondsLeft).padStart(2, "0")}
          </div>
          <div
            className="mt-3 font-bold uppercase"
            style={{
              color: RING_COLOR,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
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
