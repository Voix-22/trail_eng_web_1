import Lotus from "./botanical/Lotus.jsx";

/**
 * A quiet ornamental break between sections: two hairlines flanking a
 * small lotus glyph. Encodes "a new chapter of the invitation begins"
 * without resorting to numbered markers, which would imply a sequence
 * this content doesn't have.
 */
export default function SectionDivider() {
  return (
    <div
      className="mx-auto flex max-w-[220px] items-center gap-4 py-2"
      role="presentation"
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <Lotus className="h-6 w-6 shrink-0" strokeColor="#C8A26D" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
