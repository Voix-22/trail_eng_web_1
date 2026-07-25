import { motion } from "framer-motion";
import Lotus from "./botanical/Lotus.jsx";
import { site } from "../config/site.js";
import SectionDivider from "./SectionDivider.jsx";

export default function InvitationMessage() {
  return (
    <section
      id="invitation"
      aria-label="Invitation message"
      className="px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-md"
      >
        <Lotus className="mx-auto h-9 w-9" strokeColor="#EBC8D3" />
        <p className="mt-6 font-display text-2xl italic leading-relaxed text-heading sm:text-3xl">
          "{site.invitationMessage}"
        </p>
        <p className="mt-6 font-ui text-sm tracking-wide text-muted">{site.familyLine}</p>
      </motion.div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
