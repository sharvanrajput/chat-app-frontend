import { memo, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "../ui/avatar";
import { transformImage } from "@/lib/features";
import { useSidebar } from "../ui/sidebar";
type newMessageAlertType = {
  chatId: string;
  count: number;
};
interface ChatItemType {
  avatar: string[];
  name: string;
  _id: string;
  groupChat: boolean;
  sameSander: boolean;
  isOnline: boolean;
  newMessageAlert?: newMessageAlertType;
  index: number;
  handleDeleteChat: (
    e: MouseEvent<HTMLAnchorElement>,
    _id: String,
    groupChat: boolean,
  ) => void;
}

function ChatItem({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSander = false,
  isOnline = true,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}: ChatItemType) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      onClick={() => isMobile && openMobile && setOpenMobile(false)}
    >
      <div
        className={`flex gap-2 items-center rounded-lg px-3 hover:bg-violet-100 hover:text-violet-400 py-2 ${sameSander ? "bg-violet-600 text-white" : "bg-gray-50 text-black"} `}
      >
        <AvatarGroup>
          {avatar.map((obj) => (
            <Avatar>
              <AvatarImage src={transformImage(obj, 100)} alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
              {isOnline && !groupChat && (
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
              )}
            </Avatar>
          ))}
        </AvatarGroup>
        <div>
          <h2>{name || "Sharvan"}</h2>
          {newMessageAlert && <p>{newMessageAlert.chatId} new message</p>}
        </div>
      </div>
    </Link>
  );
}
export default memo(ChatItem);
