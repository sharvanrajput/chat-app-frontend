import type { chatType } from "../data/SampleData";
import ChatItem from "./ChatItem";

type newMessageAlertType = {
  chatId: string;
  count: number;
};

type ChatItemType = {
  chats: chatType[];
  chatId?: string;
  onlineUsers: string[];
  newMessagesAlert?: newMessageAlertType[];
  handleDeleteChat: (e: any, _id: String, groupChat: boolean) => void;
};

export default function ChatList({
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "as",
      count: 0,
    },
  ],
  handleDeleteChat,
}: ChatItemType) {

  

  return (
    <div>
      {chats.map((data) => {
        const { avatar, name, _id, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id,
        );
        const isOnline = members?.some(() => onlineUsers.includes(_id));

        return (
          <ChatItem
            index={1}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSander={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </div>
  );
}
