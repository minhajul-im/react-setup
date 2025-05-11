import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/header";
import { siteConfig } from "@/config";

export const BaseLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <ScrollArea>
          <Outlet context={siteConfig} />
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};
