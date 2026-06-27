import { useEffect, useState } from "react";
import { motion } from "motion/react";

const WORK_DURATION = 10;
const REST_DURATION = 5;
const TOTAL_ROUNDS = 4;

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

const EXERCISES_PER_ROUND = EXERCISES.length;
const TOTAL_EXERCISES = TOTAL_ROUNDS * EXERCISES_PER_ROUND;

const WORK_COLOR = "#f97316";
const REST_COLOR = "#0ea5e9";

export function TabataTimer() {
  const [phase, setPhase] = useState<"work" | "rest">("work");
  const [secondsLeft, setSecondsLeft] = useState(WORK_DURATION);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const round = Math.floor(exerciseIndex / EXERCISES_PER_ROUND) + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setPhase((currentPhase) => {
            if (currentPhase === "work") {
              return "rest";
            } else {
              setExerciseIndex((idx) => (idx + 1) % TOTAL_EXERCISES);
              return "work";
            }
          });
          return -1;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondsLeft === -1) {
      setSecondsLeft(phase === "work" ? WORK_DURATION : REST_DURATION);
    }
  }, [secondsLeft, phase]);

  const phaseDuration = phase === "work" ? WORK_DURATION : REST_DURATION;
  const progress = secondsLeft / phaseDuration;
  const ringColor = phase === "work" ? WORK_COLOR : REST_COLOR;

  const label =
    phase === "work"
      ? EXERCISES[exerciseIndex % EXERCISES_PER_ROUND].toUpperCase()
      : "REST";

  const SIZE = 320;
  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: secondsLeft === phaseDuration ? [1, 1.04, 1] : 1 }}
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
            stroke={ringColor}
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
              color: ringColor,
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            {label}
          </div>
        </div>
      </motion.div>
      <div
        className="mt-6 text-base uppercase tracking-[0.12em]"
        style={{ color: "var(--text-muted)" }}
      >
        Runde {round} / {TOTAL_ROUNDS}
      </div>
    </div>
  );
}
