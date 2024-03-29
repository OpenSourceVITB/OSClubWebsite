import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export const Navbar = () => {
  return (
    <div className="py-2 px-6 sm:px-16 flex justify-between items-center">
      <Link href={"/"}>
        <div className="flex justify-start items-center gap-3">
          <img src="/images/logo.png" className="w-[2.5rem] h-[2.5rem] sm:w-12 sm:h-12 text-white" alt="Open source club logo" />
          <div className="hidden md:block">
            <p className="-space-y-2">Open Source</p>
            <p className="">Club</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center gap-2">
        <Link href={"/"}>
          <Button variant={"ghost"} className="rounded-full hover:bg-purple-950">Home</Button>
        </Link>
        <Link href={"/events"}>
          <Button variant={"ghost"} className="rounded-full hover:bg-purple-950">Events</Button>
        </Link>
        <Link href={"https://github.com/OpenSourceVITB"} target="_blank">
          <Button className="rounded-full hover:bg-purple-950" variant={"ghost"}>Github</Button>
        </Link>
      </div>
    </div>
  )
}