import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChartScatter,
  LayoutDashboard,
  MessageCircle,
  MessagesSquare,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const adminSideData = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/admin/users",
    name: "Users",
    icon: Users,
  },
  {
    path: "/admin/chats",
    name: "Chats",
    icon: MessageCircle,
  },
  {
    path: "/admin/messages",
    name: "Messages",
    icon: MessagesSquare,
  },
];

export default function AdminSidebar() {
  const { pathname } = useLocation();

  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminSideData.map((obj) => {
                  const Icon = obj.icon;
                  return (
                    <SidebarMenuItem key={obj.name}>
                      <SidebarMenuButton
                        className={`${pathname === obj.path && "bg-violet-500 text-white hover:bg-violet-400"} hover:bg-violet-200     `}
                        render={
                          <Link to={obj.path}>
                            <Icon /> {obj.name}
                          </Link>
                        }
                      />
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
