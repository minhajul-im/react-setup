import { IoMdNotifications } from "react-icons/io";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 gap-2 border-b bg-background px-4 py-2">
      <nav className="flex-1 w-full">
        <div className="flex justify-between items-center">
          <SidebarTrigger />
          <ul className="flex gap-4 items-center">
            <li className="bg-secondary p-2 rounded-full hover:bg-secondary-foreground/10 cursor-pointer">
              <IoMdNotifications size={20} />
            </li>
            <li className="cursor-pointer">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
