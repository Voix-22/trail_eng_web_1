import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider.jsx";

// Replace these with the couple's real photography before deploying.
// "span" controls the editorial rhythm: large / small / small / large...
const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000&q=80", alt: "The couple sharing a quiet moment outdoors", span: "large" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80", alt: "Detail of hands and mehndi", span: "small" },
  { src: "https://images.unsplash.com/photo-1583312838996-3c4cd6a3f4a7?w=700&q=80", alt: "Floral decor detail", span: "small" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1000&q=80", alt: "The couple laughing together", span: "large" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80", alt: "Traditional lamp and flowers", span: "small" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=700&q=80", alt: "Close portrait of the couple", span: "small" },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Photo gallery" className="px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="eyebrow">In Frame</p>
        <h2 className="section-heading mt-3">Gallery</h2>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:gap-4">
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: "easeOut" }}
            className={`group overflow-hidden rounded-2xl border border-gold/15 shadow-card ${
              photo.span === "large" ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-square"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.figure>
        ))}
      </div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
