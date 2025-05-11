import { TbDotsVertical } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteOutline } from "react-icons/md";

export const ChatHeader = ({ user }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };
  return (
    <div className="flex items-center justify-between p-4 border-b">
      {user && (
        <>
          <div className="flex items-center gap-2 flex-1">
            <div className="relative">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage
                  src={user?.avatar || "/placeholder.svg"}
                  alt={user?.name}
                />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(
                  user?.status
                )}`}
              />
            </div>

            <div>
              <h2 className="font-semibold">{user?.name}</h2>
              <p className="text-xs text-muted-foreground capitalize">
                {user?.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              className={cn(
                buttonVariants(
                  { variant: "ghost", size: "icon" },
                  "border-none outline-none"
                ),
                "rounded-full"
              )}>
              <AiOutlinePhone />
            </Button>
            <Button
              className={cn(
                buttonVariants(
                  { variant: "ghost", size: "icon" },
                  "border-none outline-none"
                ),
                "rounded-full"
              )}>
              <IoVideocamOutline />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full ring-0"
                  )}>
                  <TbDotsVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24" align="end" sideOffset={5}>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
                      <IoMdNotificationsOutline />
                      <span className="text-sm">Mute</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
                      <MdDeleteOutline />
                      <span className="text-sm">Delete</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </div>
  );
};
