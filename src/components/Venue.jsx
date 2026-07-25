import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { site } from "../config/site.js";
import SectionDivider from "./SectionDivider.jsx";

export default function Venue() {
  return (
    <section id="location" aria-label="Venue location" className="px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="eyebrow">Find Your Way</p>
        <h2 className="section-heading mt-3">Location</h2>
        <p className="mx-auto mt-4 max-w-sm font-body text-muted">
          {site.venueName}, {site.venueAddress}
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto mt-8 aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-gold/25 shadow-card sm:aspect-video"
        >
          <iframe
            title={`Map showing ${site.venueName}`}
            src={site.mapsEmbedSrc}
            className="h-full w-full grayscale-[15%] contrast-[0.95]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        <a
          href={site.mapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <Navigation className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          Open in Google Maps
        </a>
      </motion.div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
