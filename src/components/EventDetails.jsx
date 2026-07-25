import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { site } from "../config/site.js";
import SectionDivider from "./SectionDivider.jsx";

const DETAILS = [
  {
    icon: CalendarDays,
    label: "Date",
    value: `${site.eventDayDisplay}, ${site.eventDateDisplay}`,
  },
  {
    icon: Clock,
    label: "Time",
    value: site.eventTimeDisplay,
  },
  {
    icon: MapPin,
    label: "Venue",
    value: site.venueName,
    sub: site.venueAddress,
  },
];

export default function EventDetails() {
  return (
    <section
      id="details"
      aria-label="Event details"
      className="px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="eyebrow">The Particulars</p>
        <h2 className="section-heading mt-3">Event Details</h2>

        <dl className="mx-auto mt-12 flex max-w-md flex-col gap-8">
          {DETAILS.map((detail, i) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 border-b border-gold/15 pb-8 last:border-none"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-blush/10 text-gold">
                <detail.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <dt className="font-ui text-[0.65rem] uppercase tracking-[0.28em] text-muted">
                {detail.label}
              </dt>
              <dd className="font-display text-2xl text-heading">{detail.value}</dd>
              {detail.sub && (
                <dd className="max-w-xs font-body text-sm text-muted">{detail.sub}</dd>
              )}
            </motion.div>
          ))}
        </dl>
      </motion.div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
