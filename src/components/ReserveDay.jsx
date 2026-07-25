import { motion } from "framer-motion";
import CalendarButton from "./CalendarButton.jsx";
import Lotus from "./botanical/Lotus.jsx";
import SectionDivider from "./SectionDivider.jsx";

export default function ReserveDay() {
  return (
    <section
      id="reserve"
      aria-label="Reserve the day"
      className="px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto flex max-w-sm flex-col items-center rounded-3xl border border-gold/25 bg-blush/10 px-8 py-12 shadow-card"
      >
        <Lotus className="h-10 w-10" strokeColor="#C8A26D" />
        <h2 className="section-heading mt-4">Reserve the Day</h2>
        <p className="mt-3 font-body text-sm text-muted">
          Save the date so you never miss a moment of the celebration.
        </p>
        <div className="mt-7">
          <CalendarButton />
        </div>
      </motion.div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
