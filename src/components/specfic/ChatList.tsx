import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Newmsgtype = {
  chatId: string;
  count: number;
};

type ChatType = {
  chats: [];
  chadId: string;
  onlineUsers: number;
  newMessage: Newmsgtype[];
  handleDeleteChat: () => void;
};

type chatitemtype = {
  avatar: [];
  name: string;
  _id: string;
  groupChat: boolean;
  sameSender: boolean;
  isOnline: boolean;
  index: number;
  newMessage: boolean;
  handleDelchatOpen: () => void;
};

export default function ChatList({
  chats,
  chadId,
  onlineUsers,
  newMessage,
  handleDeleteChat,
}: ChatType) {
  return <div><ChatItem /></div>;
}

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDelchatOpen,
}: chatitemtype) => {
  return (
    <Link to={""}>
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <p>{name || "sharvan"}</p>
        </div>
      </div>
    </Link>
  );
};
