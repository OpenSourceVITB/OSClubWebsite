import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { MapPin, CalendarCheck, UserRound, Clock1, IndianRupee } from "lucide-react"
import Link from "next/link"

export const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="flex justify-start gap-0 flex-col md:flex-row w-[27rem] md:w-[60rem]">
      <img src={event.image_url} alt="Event banner" className="h-[350px] md:h-[450px] w-[27rem] md:w-[350px]" />
      <Card className="bg-[#231942] ">
        <CardHeader>
          <CardTitle>{event.name}</CardTitle>
          <CardDescription className="text-slate-300/90">{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm flex flex-col justify-start items-start gap-1
        ">
          {event.prize && <p className="text-lg pb-2 text-purple-100">Prize Pool : {event.prize}</p>}
          <EventContent icon={<MapPin />} name={event.venue} property="Venue" />
          <EventContent icon={<CalendarCheck />} name={event.date} property={"Date"} />
          <EventContent icon={<Clock1 />} name={event.time} property="Duration" />
          <EventContent icon={<IndianRupee />} name={event.registrationCost} property="Registration Fee" />
          <EventContent icon={<UserRound />} name={event.faculty} property="Faculty Coordinator" />
        </CardContent>
        <CardFooter>
          {event.is_for_external_students ? <div className="w-full flex justify-start flex-col sm:flex-row items-center gap-3">
            <Link href={event.formLinkVIT} target="_blank">
              <Button className="w-[25rem] md:w-auto">Register {"(VIT Students)"}</Button>
            </Link>
            <Link href={event.formLinkExt} target="_blank">
              <Button className="w-[25rem] md:w-auto">Register{" (External Students)"}</Button>
            </Link>
          </div> : <Link href={event.formLinkVIT} target="_blank">
            <Button className="w-[25rem] md:w-auto">Regsiter {"(VIT Students)"}</Button></Link>}
        </CardFooter>
      </Card>
    </div>
  )
}


const EventContent = ({ name, icon, property }: { name: string, icon: React.ReactNode, property: string }) => {
  return (
    <div className="flex text-slate-300/80 justify-start items-center gap-2">
      <div>{icon}</div>
      <p>{property}{" :"} {name}</p>
    </div>
  )
}