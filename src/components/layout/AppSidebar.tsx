import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import ChatList from "../specfic/ChatList";
import { chats } from "../data/SampleData";
import { useParams } from "react-router-dom";

export function AppSidebar() {
  const { id } = useParams();
  const handleDeleteChat = (e: any, _id: String, groupChat: boolean) => {
    e.preventDefault();
    console.log("chat deleted", _id);
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <ChatList
              chats={chats}
              chatId={id}
              newMessagesAlert={[
                {
                  chatId: "1",
                  count: 5,
                },
                {
                  chatId: "3",
                  count: 1,
                },
              ]}
              onlineUsers={["2", "3"]}
              handleDeleteChat={handleDeleteChat}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
