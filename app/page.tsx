import { EventCard } from "@/components/custom/event-card";
import { Hero } from "@/components/custom/hero";
import { Navbar } from "@/components/custom/navbar";
import { events } from "@/lib/data/event-data";

export default function Home() {
  return (

    <main>
      <div className="p-4">
        <Hero />
        <div className="w-full flex flex-col justify-center items-center gap-20">
          {events.map((event, i) => {
            return (
              <EventCard event={event} key={i} />
            )
          })}
        </div>
      </div>
    </main>
  );
}
