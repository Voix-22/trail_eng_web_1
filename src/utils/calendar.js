/**
 * Builds a "Add to Google Calendar" link using only URL parameters —
 * no backend, no API calls. https://calendar.google.com/calendar/render
 */
function toGoogleUTC(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function buildGoogleCalendarLink({
  title,
  description,
  location,
  startISO,
  durationMinutes = 180,
}) {
  const start = new Date(startISO);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toGoogleUTC(start)}/${toGoogleUTC(end)}`,
    details: description,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
