import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChatInput } from "./chat-input";
import { TypingTime } from "./typing-time";
import { Message } from "./message";
import { ChatHeader } from "./chat-header";
import { Send } from "lucide-react";

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
];

const messageList = [
  {
    id: "1",
    sender: "user",
    timestamp: "2025-05-03T10:30:00Z",
    send: true,
    viewed: true,
    content: {
      type: "text",
      value: "Hey, how are you today?",
    },
    metadata: {
      status: "read",
      reactions: ["👍", "❤️"],
      threadId: "thread_123",
      isEdited: false,
    },
  },
  {
    id: "2",
    sender: "friend",
    timestamp: "2025-05-03T10:31:00Z",
    send: true,
    viewed: false,
    content: {
      type: "image",
      value: "https://example.com/images/sunset.jpg",
      thumbnail: "https://example.com/images/sunset-thumb.jpg",
      caption: "Check out this beautiful sunset!",
    },
    metadata: {
      status: "delivered",
      reactions: ["😍"],
      threadId: "thread_123",
      isEdited: false,
    },
  },
  {
    id: "3",
    sender: "user",
    timestamp: "2025-05-03T10:32:00Z",
    send: true,
    viewed: false,
    content: {
      type: "video",
      value: "https://cdn.pixabay.com/video/2025/04/10/271161_large.mp4",
      thumbnail: "https://example.com/videos/funny-cat-thumb.jpg",
      duration: 45,
      caption: "This cat video cracked me up!",
    },
    metadata: {
      status: "delivered",
      reactions: ["😂", "🐾"],
      threadId: "thread_123",
      isEdited: false,
    },
  },
  {
    id: "4",
    sender: "friend",
    timestamp: "2025-05-03T10:33:00Z",
    send: true,
    viewed: true,
    content: {
      type: "audio",
      value: "https://example.com/audio/voice-note.mp3",
      duration: 30,
      caption: "Listen to this voice note!",
    },
    metadata: {
      status: "read",
      reactions: ["🎙️"],
      threadId: "thread_123",
      isEdited: false,
    },
  },
  {
    id: "5",
    sender: "user",
    timestamp: "2025-05-03T10:34:00Z",
    send: true,
    viewed: false,
    content: {
      type: "pdf",
      value: "https://example.com/documents/report.pdf",
      filename: "Annual-Report-2025.pdf",
      size: "3.2MB",
      preview: "https://example.com/documents/report-preview.png",
    },
    metadata: {
      status: "delivered",
      reactions: ["📄"],
      threadId: "thread_123",
      isEdited: false,
    },
  },
];

export const ChatInterface = ({ selectedUser }) => {
  const [messages, setMessages] = useState(messageList);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const selectedUserData = selectedUser
    ? users.find((user) => user.id === selectedUser)
    : null;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      viewed: false,
      send: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        send: false,
        viewed: false,
        content: `I received your message: "${inputValue}"`,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <article className="w-full h-[85vh] rounded-2xl overflow-hidden border border-gray-200">
      <section className="flex flex-col h-full bg-background">
        <>
          {selectedUser ? (
            <>
              <ChatHeader user={selectedUserData} />
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <Message key={message?.id} message={message} />
                  ))}

                  {isTyping && <TypingTime />}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <ChatInput
                inputValue={inputValue}
                onChangeInput={handleChange}
                onSendMessage={handleSendMessage}
              />
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <Send className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
              <p className="text-muted-foreground max-w-xs">
                Select a conversation or start a new one to begin messaging
              </p>
            </div>
          )}
        </>
      </section>
    </article>
  );
};
