import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { LiaCheckDoubleSolid, LiaCheckSolid } from "react-icons/lia";
import { TbDotsVertical } from "react-icons/tb";
import { MdDeleteOutline, MdOutlineAddReaction } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineReply } from "react-icons/md";
import { Angry, Frown, Heart, ThumbsUp } from "lucide-react";

const reactions = [Angry, Frown, Heart, ThumbsUp];

// export const Message = ({ message }) => {
//   console.log(message);

//   const isUser = message.sender === "user";
//   const isViewed = message.send && message.viewed;

//   const time = useMemo(() => {
//     return message.timestamp.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   }, [message.timestamp]);

//   const hoverButton = () => (
//     <div className="opacity-0 group-hover:opacity-100 transition-opacity items-center flex">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             className={cn(
//               buttonVariants({ variant: "ghost", size: "icon" }),
//               "rounded-full ring-0"
//             )}>
//             <MdOutlineAddReaction />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           side="top"
//           className="w-40"
//           sideOffset={4}
//           align="center">
//           <div className="flex justify-center items-center gap-2">
//             {reactions?.map((Icon, index) => (
//               <span key={index}>
//                 <Icon
//                   size={20}
//                   className="cursor-pointer text-muted-foreground m-1 hover:scale-125 transition-all duration-75"
//                 />
//               </span>
//             ))}
//           </div>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             className={cn(
//               buttonVariants({ variant: "ghost", size: "icon" }),
//               "rounded-full ring-0"
//             )}>
//             <TbDotsVertical />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           side="top"
//           className="w-16"
//           sideOffset={4}
//           align="center">
//           <DropdownMenuGroup className="cursor-pointer">
//             <DropdownMenuItem>
//               <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
//                 <MdOutlineReply />
//                 <span className="text-sm">Reply</span>
//               </div>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
//                 <MdDeleteOutline />
//                 <span className="text-sm">Delete</span>
//               </div>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );

//   return (
//     <div
//       key={message.id}
//       className={cn(
//         "group flex items-center gap-2",
//         isUser ? "justify-end" : "justify-start"
//       )}>
//       {isUser && hoverButton()}

//       <div
//         className={cn(
//           "max-w-[80%] rounded-2xl px-4 py-2",
//           isUser
//             ? "bg-primary text-primary-foreground"
//             : "bg-muted-foreground/10"
//         )}>
//         <p>{message.content}</p>

//         <div
//           className={cn(
//             "flex justify-end items-center gap-2 text-xs mt-1",
//             message.send ? (isViewed ? "text-primary" : "text-success") : ""
//           )}>
//           <span>{time}</span>
//           {message.send ? (
//             <LiaCheckDoubleSolid size={16} />
//           ) : (
//             <LiaCheckSolid size={16} />
//           )}
//         </div>
//       </div>

//       {!isUser && hoverButton()}
//     </div>
//   );
// };

export const Message = ({ message }) => {
  const isUser = message.sender === "user";
  const isViewed = message.send && message.viewed;

  const time = useMemo(() => {
    return new Date(message.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [message.timestamp]);

  const hoverButton = () => (
    <div className="opacity-0 group-hover:opacity-100 transition-opacity items-center flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full ring-0"
            )}>
            <MdOutlineAddReaction />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          className="w-40"
          sideOffset={4}
          align="center">
          <div className="flex justify-center items-center gap-2">
            {reactions?.map((Icon, index) => (
              <span key={index}>
                <Icon
                  size={20}
                  className="cursor-pointer text-muted-foreground m-1 hover:scale-125 transition-all duration-75"
                />
              </span>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
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
        <DropdownMenuContent
          side="top"
          className="w-16"
          sideOffset={4}
          align="center">
          <DropdownMenuGroup className="cursor-pointer">
            <DropdownMenuItem>
              <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
                <MdOutlineReply />
                <span className="text-sm">Reply</span>
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
  );

  const renderContent = () => {
    switch (message.content.type) {
      case "text":
        return <p>{message.content.value}</p>;
      case "image":
        return (
          <div>
            <div className="relative max-w-xs h-[200px] rounded-lg">
              <img
                src={message.content.value}
                alt={message.content.caption || "Image"}
                className="absolute w-full h-full object-cover rounded-lg"
              />
            </div>
            {message.content.caption && (
              <p className="text-sm mt-1">{message.content.caption}</p>
            )}
          </div>
        );
      case "video":
        return (
          <div>
            <div className="relative max-w-xs max-h-[200px] rounded-lg">
              <video
                controls
                src={message.content.value}
                className="absolute w-full h-full rounded-lg"
              />
            </div>
            {message.content.caption && (
              <p className="text-sm mt-1">{message.content.caption}</p>
            )}
          </div>
        );
      case "audio":
        return (
          <div>
            <audio controls src={message.content.value} className="w-full" />
            {message.content.caption && (
              <p className="text-sm mt-1">{message.content.caption}</p>
            )}
          </div>
        );
      case "pdf":
        return (
          <div>
            <a
              href={message.content.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline">
              {message.content.filename} ({message.content.size})
            </a>
            {message.content.preview && (
              <img
                src={message.content.preview}
                alt="PDF Preview"
                className="max-w-[100px] mt-2 rounded-lg"
              />
            )}
          </div>
        );
      default:
        return <p>Unsupported message type</p>;
    }
  };

  return (
    <div
      key={message.id}
      className={cn(
        "group flex items-center gap-2 relative",
        isUser ? "justify-end" : "justify-start"
      )}>
      {isUser && hoverButton()}

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted-foreground/10"
        )}>
        {renderContent()}
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-1">
            {message.metadata.reactions?.length > 0 && (
              <span className="text-xs">
                {message.metadata.reactions.join(" ")}
              </span>
            )}
            {message.metadata.isEdited && (
              <span className="text-xs text-gray-500 italic"> (Edited)</span>
            )}
          </div>
          <div
            className={cn(
              "flex justify-end items-center gap-2 text-xs",
              message.send ? (isViewed ? "text-primary" : "text-white") : ""
            )}>
            <span>{time}</span>
            {message.send ? (
              <LiaCheckDoubleSolid size={16} />
            ) : (
              <LiaCheckSolid size={16} />
            )}
          </div>
        </div>
      </div>

      {!isUser && hoverButton()}
    </div>
  );
};
