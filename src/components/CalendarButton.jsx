import { CalendarPlus } from "lucide-react";
import { buildGoogleCalendarLink } from "../utils/calendar.js";
import { site } from "../config/site.js";

export default function CalendarButton() {
  const href = buildGoogleCalendarLink({
    title: `${site.bride} & ${site.groom}'s Engagement`,
    description: site.invitationMessage,
    location: `${site.venueName}, ${site.venueAddress}`,
    startISO: site.eventDateISO,
    durationMinutes: 180,
  });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary">
      <CalendarPlus className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      Add to Google Calendar
    </a>
  );
}
