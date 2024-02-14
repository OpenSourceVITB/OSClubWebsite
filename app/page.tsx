import { EventCard } from "@/components/custom/event-card";
import { Hero } from "@/components/custom/hero";
import { Navbar } from "@/components/custom/navbar";
import { events } from "@/lib/data/event-data";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link";

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
        <div className="w-full flex flex-col justify-center items-center my-16">
          <h1 className="text-xl text-slate-400">The Open-Source Club</h1>
          <div className="flex justify-between items-center gap-2">
            <Link href={"https://www.linkedin.com/company/opensourcevitb/"} target="_blank">
              <LinkedInLogoIcon className="text-purple-800" height={20} width={20} />
            </Link>
            <Link href={"https://github.com/OpenSourceVITB"} target="_blank">
              <GitHubLogoIcon className="text-purple-800" height={20} width={20} />
            </Link>
            <Link href={"https://www.instagram.com/opensourcevitb"} target="_blank">
              <InstagramLogoIcon className="text-purple-800" height={20} width={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


