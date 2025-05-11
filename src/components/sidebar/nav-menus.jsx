import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ChevronRight,
  Users,
  Settings,
  Package2,
  BarChart2,
  Settings2,
  Mail,
  Ticket,
} from "lucide-react";
import { FaRegFolderOpen } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

const dashboardItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart2,
  },
  {
    title: "File Manager",
    url: "/file-manager",
    icon: FaRegFolderOpen,
  },

  {
    title: "Products",
    url: "",
    icon: Package2,
    items: [
      { title: "All Products", url: "/products/list" },
      { title: "Add Product", url: "/products/create" },
    ],
  },
  {
    title: "Users",
    url: "",
    icon: Users,
    items: [
      { title: "User List", url: "/users/list" },
      { title: "Create User", url: "/users/create" },
    ],
  },
  {
    title: "Chat",
    url: "/chat",
    icon: BsChatDots,
  },
  {
    title: "Mail",
    url: "",
    icon: Mail,
    items: [
      {
        title: "Inbox",
        url: "/mail/inbox",
      },
      {
        title: "Sent",
        url: "/mail/sent",
      },
    ],
  },
  {
    title: "Support Ticket",
    url: "",
    icon: Ticket,

    items: [
      {
        title: "Overview",
        url: "/support-ticket/overview",
      },
      {
        title: "Ticket list",
        url: "/support-ticket/list",
      },
      {
        title: "Create ticket",
        url: "/support-ticket/create",
      },
    ],
  },
  {
    title: "All Pages",
    url: "",
    icon: Settings2,
    items: [
      {
        title: "Auth page",
        url: "",
        items: [
          {
            title: "Signin Page",
            url: "/pages/signin",
          },
          {
            title: "Signup Page",
            url: "/pages/signup",
          },
        ],
      },

      {
        title: "Widgets",
        url: "/pages/widgets",
      },
    ],
  },
  {
    title: "Settings",
    url: "",
    icon: Settings,
    items: [
      { title: "General Settings", url: "/settings/general" },
      { title: "Profile Settings", url: "/settings/profile" },
      { title: "Site Settings", url: "/settings/site-settings" },
      { title: "System Settings", url: "/settings/system-settings" },
    ],
  },
];

const generateKey = (item, parentKey = "", index) => {
  return `${parentKey}${item.title}-${index}`;
};

export const NavMenus = () => {
  const { pathname } = useLocation();
  const { toggleSidebar, isMobile } = useSidebar();
  const [openStates, setOpenStates] = React.useState({});

  const isMenuActive = (item) => {
    if (!item.url) return false;
    if (pathname === item.url) return true;
    if (item.url === "/") return false;
    if (pathname.startsWith(item.url)) return true;
    return false;
  };

  const hasActiveChild = (item) => {
    if (!item.items) return false;
    return item.items.some(
      (child) => isMenuActive(child) || hasActiveChild(child)
    );
  };

  React.useEffect(() => {
    const newOpenStates = {};

    const processItems = (items, parentKey = "") => {
      items.forEach((item, index) => {
        const key = generateKey(item, parentKey, index);
        newOpenStates[key] = isMenuActive(item) || hasActiveChild(item);

        if (item.items) {
          processItems(item.items, `${key}-`);
        }
      });
    };

    processItems(dashboardItems);
  }, [pathname]);

  const handleToggle = (key, parentKey) => {
    setOpenStates((prev) => {
      const newStates = { ...prev };

      if (parentKey) {
        Object.keys(prev).forEach((k) => {
          if (k.startsWith(parentKey) && k !== key) {
            newStates[k] = false;
          }
        });
      }
      newStates[key] = !prev[key];
      return newStates;
    });
  };

  const renderNavItems = (items, parentKey = "") => {
    return items.map((item, index) => {
      const isActive = isMenuActive(item);
      const key = generateKey(item, parentKey, index);
      const hasActiveChildItem = hasActiveChild(item);
      const hasSubmenu = item?.items && item.items.length > 0;
      const showAsActive = isActive || hasActiveChildItem;

      return (
        <Collapsible
          key={key}
          asChild
          open={openStates[key] ?? false}
          onOpenChange={() => handleToggle(key, parentKey)}
          className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              {hasSubmenu ? (
                <SidebarMenuButton
                  tooltip={item.title}
                  size="lg"
                  className={showAsActive ? "bg-muted text-primary" : ""}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight
                    className={`ml-auto transition-transform duration-200 ${
                      openStates[key]
                        ? "rotate-90 group-data-[state=open]/collapsible:rotate-90"
                        : ""
                    }`}
                  />
                </SidebarMenuButton>
              ) : (
                <NavLink to={item?.url}>
                  <SidebarMenuButton
                    size="lg"
                    onClick={isMobile ? toggleSidebar : undefined}
                    tooltip={item?.title}
                    className={isActive ? "bg-muted text-primary" : ""}>
                    {item?.icon && <item.icon />}
                    <span>{item?.title}</span>
                  </SidebarMenuButton>
                </NavLink>
              )}
            </CollapsibleTrigger>

            {hasSubmenu && (
              <CollapsibleContent
                className="overflow-hidden transition-all duration-300 ease-in-out
                  data-[state=closed]:animate-collapsible-up
                  data-[state=open]:animate-collapsible-down">
                <SidebarMenuSub className="border-none ml-1 outline-none mr-0 pr-0">
                  {renderNavItems(item.items, `${key}-`)}
                </SidebarMenuSub>
              </CollapsibleContent>
            )}
          </SidebarMenuItem>
        </Collapsible>
      );
    });
  };

  return (
    <SidebarGroup>
      <SidebarMenu>{renderNavItems(dashboardItems, "dashboard")}</SidebarMenu>
    </SidebarGroup>
  );
};
