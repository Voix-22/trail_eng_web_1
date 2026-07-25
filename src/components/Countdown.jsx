import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown.js";
import { site } from "../config/site.js";
import SectionDivider from "./SectionDivider.jsx";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const timeLeft = useCountdown(site.eventDateISO);

  return (
    <section
      id="countdown"
      aria-label="Countdown to the engagement"
      className="px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="eyebrow">{timeLeft.isPast ? "The celebration begins" : "Counting down to"}</p>
        <h2 className="section-heading mt-3">
          {timeLeft.isPast ? "We're celebrating today!" : "Our Special Day"}
        </h2>

        {!timeLeft.isPast && (
          <div
            className="mt-10 grid grid-cols-4 gap-3 sm:gap-5"
            role="timer"
            aria-live="polite"
            aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds remaining`}
          >
            {UNITS.map((unit, i) => (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center rounded-3xl border border-gold/25 bg-blush/10 px-2 py-5 shadow-card sm:px-4 sm:py-7"
              >
                <span className="font-display text-3xl text-heading sm:text-5xl">
                  {String(timeLeft[unit.key]).padStart(2, "0")}
                </span>
                <span className="mt-1 font-ui text-[0.6rem] uppercase tracking-[0.2em] text-muted sm:text-xs">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
