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
import { useParams, useSearchParams } from "react-router-dom";
import GroupLIst from "../specfic/GroupLIst";

export function AppSidebar() {
  const { id } = useParams();
  const handleDeleteChat = (e: any, _id: String, groupChat: boolean) => {
    e.preventDefault();
    console.log("chat deleted", _id);
  };

  const isGroup = useSearchParams()[0].get("group"); 
  const groupid = useSearchParams()[0].get("groupid"); 
 

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {!isGroup ? (
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
            ) : (
              <GroupLIst myGroup={chats} Chatid={groupid} />
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
