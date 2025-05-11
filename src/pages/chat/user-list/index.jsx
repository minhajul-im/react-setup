import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SingleUesr } from "./single-user";

const users = [
  {
    id: "1",
    name: "Emma Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 3,
    lastMessage: "Hey, how's it going?",
  },
  {
    id: "2",
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 0,
    lastMessage: "Can we discuss the project?",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 0,
    lastMessage: "Thanks for your help!",
  },
  {
    id: "4",
    name: "Liam Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 1,
    lastMessage: "I'll send you the files later",
  },
  {
    id: "5",
    name: "Olivia Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 0,
    lastMessage: "Let's meet tomorrow",
  },
  {
    id: "6",
    name: "Ethan Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 5,
    lastMessage: "Need to talk about the code review.",
  },
  {
    id: "7",
    name: "Mia Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 2,
    lastMessage: "Can we reschedule the meeting?",
  },
  {
    id: "8",
    name: "Lucas Martinez",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 0,
    lastMessage: "Got the documents, thanks!",
  },
  {
    id: "9",
    name: "Charlotte Hernandez",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 1,
    lastMessage: "How's the project going?",
  },
  {
    id: "10",
    name: "Benjamin Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 0,
    lastMessage: "Waiting for your response.",
  },
  {
    id: "11",
    name: "Amelia Clark",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 4,
    lastMessage: "I have a few updates for you.",
  },
  {
    id: "12",
    name: "Alexander Lewis",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 0,
    lastMessage: "Let's catch up soon.",
  },
  {
    id: "13",
    name: "Chloe Walker",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 3,
    lastMessage: "Let me know when you're available.",
  },
  {
    id: "14",
    name: "Matthew Young",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 0,
    lastMessage: "I'll review the docs tonight.",
  },
  {
    id: "15",
    name: "Harper King",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 6,
    lastMessage: "Can you send me the updated version?",
  },
  {
    id: "16",
    name: "Jack Scott",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 2,
    lastMessage: "Don't forget to send the contract.",
  },
  {
    id: "17",
    name: "Scarlett Hall",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 1,
    lastMessage: "I need some clarifications on the task.",
  },
  {
    id: "18",
    name: "Oliver Adams",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 0,
    lastMessage: "Checking the status of the report.",
  },
  {
    id: "19",
    name: "Isabella Allen",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 0,
    lastMessage: "The meeting was rescheduled to next week.",
  },
  {
    id: "20",
    name: "Amos Carter",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 2,
    lastMessage: "Let's talk after lunch.",
  },
];

export const UserList = ({ onSelectUser, selectedUser }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const messagesEndRef = useRef(null);
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const handleSearchUser = (e) => setSearchQuery(e.target.value);

  return (
    <section className="h-[85vh] flex flex-col">
      <div className="relative mb-4 mr-6">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          className="pl-8 rounded-lg"
          value={searchQuery}
          onChange={handleSearchUser}
        />
      </div>

      <ScrollArea className="flex-1 overflow-auto">
        <div className="flex flex-col gap-4 mr-6">
          {filteredUsers.map((user) => (
            <SingleUesr
              key={user?.id}
              user={user}
              selectedUser={selectedUser}
              onSelectUser={onSelectUser}
            />
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};
