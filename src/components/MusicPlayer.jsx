import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { site } from "../config/site.js";

/**
 * Floating music toggle, bottom-right. No autoplay — browsers block it
 * anyway, and it respects the guest's choice. The note icon pulses
 * gently every few seconds to invite a tap without being showy.
 */
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio?.addEventListener("ended", handleEnded);
    return () => audio?.removeEventListener("ended", handleEnded);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        // Autoplay-policy or missing-file safeguard: fail silently in UI.
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={site.musicSrc} loop preload="none" />
      <motion.button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-paper/90 text-heading shadow-soft backdrop-blur-sm"
      >
        <motion.span
          animate={isPlaying ? {} : { scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" strokeWidth={1.6} />
          ) : (
            <Music className="h-5 w-5" strokeWidth={1.6} />
          )}
        </motion.span>
      </motion.button>
    </>
  );
}
