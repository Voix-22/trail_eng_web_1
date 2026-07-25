import { useEffect, useState } from "react";

/**
 * Returns a live-updating breakdown of time remaining until targetISO.
 * Ticks once a second; clamps to zero once the date has passed.
 */
export function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime();

  const calculate = () => {
    const diff = Math.max(target - Date.now(), 0);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: diff <= 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetISO]);

  return timeLeft;
}
