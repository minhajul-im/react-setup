import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiGmail } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  EllipsisVertical,
  Grip,
  Inbox,
  Pencil,
  RotateCcw,
  Search,
  Settings,
  Star,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const MailInboxPage = () => {
  return (
    <section className="bg-slate-200 p-4 h-screen flex flex-col overflow-hidden">
      <section className="flex flex-col overflow-hidden">
        <MailNavbar />
        <article className="h-full w-full grid grid-cols-10">
          <MailAsideBar />

          <section className="bg-white h-full col-span-10 md:col-span-8 rounded-2xl mx-2 flex flex-col">
            <div className="bg-white rounded-t-2xl w-full sticky top-0 py-3">
              <MailBoxAction />
              <MailBoxTabs />
            </div>

            <ScrollArea className={cn("max-h-[20%] rounded-b-2xl mb-6")}>
              <MailList />
            </ScrollArea>
          </section>
        </article>
      </section>
    </section>
  );
};

export const MailNavbar = () => {
  return (
    <nav className="w-full py-2 flex px-4 text-muted-foreground justify-between">
      <div className="flex items-center w-[70%] justify-between gap-3">
        <div className="h-9">
          <SiGmail className="text-3xl" />
        </div>

        <div className=" hidden group md:flex h-full items-center rounded-full p-1 bg-[#e5f1ff] gap-2 w-[80%] max-w-2xl hover:drop-shadow-xl hover:bg-white">
          <span className="ml-2 text-muted-foreground">
            <Search size={20} />
          </span>

          <input
            className="h-full focus:outline-none bg-[#e5f1ff] py-2 w-full group-hover:bg-white rounded-r-full"
            type="text"
            name="saerch"
            id="saerch"
            placeholder="Search mail"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 p-2"
          )}>
          <CircleHelp size={20} />
        </Button>
        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 p-2"
          )}>
          <Settings size={20} />
        </Button>
        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 p-2"
          )}>
          <Grip size={20} />
        </Button>
        <Avatar className="h-10 w-10 flex-shrink-0 cursor-pointer">
          <AvatarImage src={"/placeholder.svg"} alt={"dsfdsf"} />
          <AvatarFallback>{"John".charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export const MailAsideBar = () => {
  return (
    <aside className="self-start sticky top-0 col-span-2 h-full mr-2 hidden md:block">
      <Button
        className={cn(
          "flex gap-4 py-4 px-5 items-center bg-sky-200 text-muted-foreground ml-2 mt-2 rounded-2xl hover:drop-shadow-md"
        )}>
        <Pencil size={20} />
        <p className="text-sm font-semibold">Compose</p>
      </Button>

      <ul className="w-full text-sm my-3">
        <li className="w-full">
          <div className=" font-semibold w-full flex leading-none bg-blue-200 pl-6 py-2.5 gap-3 items-center rounded-e-full pr-2">
            <Inbox size={18} />
            <p className="flex w-full justify-between pr-1">
              Inbox <span>346</span>
            </p>
          </div>
        </li>
        <li className="w-full text-muted-foreground">
          <div className=" font-semibold w-full flex leading-none hover:bg-gray-200 pl-6 py-2.5 gap-3 items-center rounded-e-full pr-2">
            <Star size={18} />
            <p className="flex w-full justify-between pr-1">
              Starred <span>56</span>
            </p>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export const MailBoxAction = () => {
  return (
    <div className="flex justify-between items-center text-muted-foreground text-[0.7rem] px-4">
      <div className="flex gap-1.5 items-center">
        <div
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <input
            className="py-auto px-2"
            type="checkbox"
            name="select"
            id="select"
          />
        </div>

        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <IoMdArrowDropdown size={20} />
        </Button>
        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <RotateCcw size={16} />
        </Button>
        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <EllipsisVertical size={16} />
        </Button>
      </div>

      <div className="flex gap-1.5 items-center">
        <div className="flex items-center py-1 text-sm rounded-md px-2 cursor-pointer hover:bg-gray-200">
          <span>1-50 of 4,814</span>
        </div>

        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <ChevronLeft size={20} />
        </Button>

        <Button
          className={cn(
            "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
          )}>
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export const MailBoxTabs = () => {
  return (
    <div className="hidden md:flex h-12 text-sm font-medium leading-none text-gray-600 border-b border-gray-200">
      <button className="flex h-full w-52 items-center px-4 gap-4 text-blue-600 border-b-[3px] border-blue-600">
        <i className="fa-solid fa-inbox"></i>
        <p>Primary</p>
      </button>

      <button className="flex h-full w-52 items-center px-4 gap-4 hover:bg-gray-200">
        <i className="fa-solid fa-receipt"></i>
        <p>Promotions</p>
      </button>

      <button className="flex h-full w-52 items-center px-4 gap-4 hover:bg-gray-200 overflow-hidden text-ellipsis whitespace-nowrap">
        <i className="fa-solid fa-receipt"></i>
        <div className="flex flex-col text-start">
          <p>
            Social{" "}
            <span className="text-xs px-1 leading-none bg-blue-600 text-white rounded-full">
              5 new
            </span>
          </p>
          <p className="text-xs font-normal text-gray-400">
            Facebook, LinkedI, Twit..
          </p>
        </div>
      </button>
    </div>
  );
};

export const MailList = () => {
  return (
    <div className="flex flex-col h-full">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="flex w-full h-12 px-2 items-center text-sm border-b border-gray-200 hover:shadow-lg cursor-pointer md:py-4 py-6">
          <div className="flex text-muted-foreground h-full leading-none items-center font-semibold w-2/12 py-1">
            <div
              className={cn(
                "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
              )}>
              <input
                className="py-auto px-2 cursor-pointer"
                type="checkbox"
                name="select"
                id="select"
              />
            </div>
            <Button
              className={cn(
                "grid place-content-center rounded-full hover:bg-gray-200 text-muted-foreground px-1 h-8 w-8"
              )}>
              <Star size={16} />
            </Button>

            <p className="text-black ml-1">PW Skills</p>
          </div>

          <div className="flex leading-none items-center py-1 px-2 w-9/12 h-full">
            <div className="flex w-[98%] overflow-hidden text-ellipsis whitespace-nowrap">
              <p className="text-black font-semibold">
                Join Our Live Dear Students, I hope this mes
              </p>
              <p className="text-black">
                - Dear Students, I hope this mes Dear Students, I hope this mes
                r Studentsr Students....
              </p>
            </div>
          </div>

          <div className="flex leading-none items-center py-1 px-2 w-1/12 h-full font-semibold text-black justify-end">
            <p>07:00 pm</p>
          </div>
        </div>
      ))}
      <div className="h-20 rounded-b-2xl bg-red-600">
        <div>sldfjlksdfj</div>
      </div>
    </div>
  );
};
