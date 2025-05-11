import { useState } from "react";
import { ChatInterface } from "./chat-interface";
import { UserList } from "./user-list";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <section className="w-full h-full bg-gray-50">
      <div className="px-6 pt-6">
        <HeaderWithBreadcrumb
          title={`Chat Management`}
          breadcrumbs={[{ title: "Chat" }]}>
          <Button className="btn-primary btn-lg">
            <UserPlus className="mr-1 h-4 w-4" />
            Add User
          </Button>
        </HeaderWithBreadcrumb>
      </div>
      <section className="flex items-center p-6 m-6 gap-6 border rounded-2xl">
        <div className="max-w-xl">
          <UserList
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
        <div className="grow flex-1 flex items-center justify-center">
          <ChatInterface selectedUser={selectedUser} />
        </div>
      </section>
    </section>
  );
};
