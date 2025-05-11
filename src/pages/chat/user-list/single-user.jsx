import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const SingleUesr = ({ user, selectedUser, onSelectUser }) => {
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
    <div
      key={user.id}
      className={cn(
        "flex items-center gap-3 p-3 rounded-2xl text-left transition-colors hover:bg-muted-foreground/20 cursor-pointer",
        selectedUser === user.id && "bg-muted-foreground/20"
      )}
      onClick={() => onSelectUser(user.id)}>
      <div className="relative">
        <Avatar className="h-10 w-10 flex-shrink-0">
          <AvatarImage
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
          />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(
            user.status
          )}`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <span className="font-medium truncate">{user.name}</span>
          {user.unread > 0 && (
            <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex justify-center items-center">
              {user.unread}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {user.lastMessage}
        </p>
      </div>
    </div>
  );
};
