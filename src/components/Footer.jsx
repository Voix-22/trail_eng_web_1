import { motion } from "framer-motion";
import Lotus from "./botanical/Lotus.jsx";
import { site } from "../config/site.js";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center gap-4 px-6 pb-16 pt-6 text-center"
    >
      <Lotus className="h-7 w-7" strokeColor="#9AA88F" />
      <p className="font-script text-3xl text-heading">
        {site.bride} &amp; {site.groom}
      </p>
      <p className="max-w-xs font-body text-sm text-muted">
        Thank you for being a part of our story. We can't wait to celebrate with you.
      </p>
      <p className="mt-2 font-ui text-[0.65rem] uppercase tracking-[0.28em] text-muted/70">
        {site.eventDateDisplay}
      </p>
    </motion.footer>
  );
}
