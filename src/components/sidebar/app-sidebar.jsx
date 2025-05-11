import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMenus } from "./nav-menus";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import { siteConfig } from "@/config";

export const AppSidebar = ({ ...props }) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square relative size-8 items-center justify-center rounded-lg">
                <img
                  src={siteConfig?.logo}
                  alt={siteConfig?.name}
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="ml-2 text-sm font-semibold truncate">
                {siteConfig?.name}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="w-full h-full">
          <NavMenus />
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
};
