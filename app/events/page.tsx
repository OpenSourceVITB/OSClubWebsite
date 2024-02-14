import { EventCard } from "@/components/custom/event-card";
import { events } from "@/lib/data/event-data";

export default function EventPage() {
  return (
    <div className="p-4 py-12 flex flex-col justify-between items-center gap-12">
      {events.map((event, i) => {
        return (
          <EventCard event={event} key={i} />
        )
      })}
    </div>
  )
}