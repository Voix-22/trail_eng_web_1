import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Garland from "./botanical/Garland.jsx";
import Lotus from "./botanical/Lotus.jsx";
import LeafBranch from "./botanical/LeafBranch.jsx";
import { site } from "../config/site.js";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Engagement announcement"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center"
    >
      {/* Ambient floating botanicals — very subtle, per brief */}
      <LeafBranch
        className="pointer-events-none absolute -left-6 top-24 h-16 w-32 rotate-[210deg] opacity-40 animate-float-slow"
      />
      <LeafBranch
        className="pointer-events-none absolute -right-6 bottom-28 h-16 w-32 -rotate-[30deg] opacity-40 animate-float"
      />

      {/* Hanging garland along the top edge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 h-24 w-full"
      >
        <Garland className="h-full w-full" />
      </motion.div>

      {/* Soft arch frame containing the names */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="relative mt-16 flex w-full max-w-sm flex-col items-center rounded-arch border border-gold/30 bg-blush/10 px-8 pb-14 pt-16 shadow-soft"
        style={{ borderRadius: "50% 50% 8% 8% / 30% 30% 4% 4%" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="eyebrow"
        >
          Together with our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 font-script text-6xl leading-[1.15] text-heading sm:text-7xl"
        >
          {site.bride}
          <span className="mx-2 inline-block font-display italic text-gold">&</span>
          {site.groom}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold/50" />
          <Lotus className="h-5 w-5" strokeColor="#C8A26D" />
          <span className="h-px w-8 bg-gold/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 font-display text-xl text-heading/90"
        >
          are getting engaged
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-2 font-ui text-sm tracking-wide text-muted"
        >
          {site.eventDayDisplay}, {site.eventDateDisplay}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 1 },
          y: { delay: 2.2, duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-muted"
        aria-hidden="true"
      >
        <span className="font-ui text-[0.65rem] uppercase tracking-[0.28em]">Scroll</span>
        <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
