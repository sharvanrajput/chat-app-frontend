import { memo } from "react";
import type { chatType } from "../data/SampleData";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "../ui/avatar";
import { transformImage } from "@/lib/features";
import { Link } from "react-router-dom";

export default function GroupLIst({
  myGroup,
  Chatid,
}: {
  myGroup: chatType[];
  Chatid: string | null;
}) {    
        console.log(Chatid)
  return (
    <div>
      {myGroup.length > 0 ? (
        myGroup.map((i) => <GroupItem group={i} Chatid={Chatid} />)
      ) : (
        <p>NO Group Found</p>
      )}
    </div>
  );
}

const GroupItem = memo(
  ({ group, Chatid }: { group: chatType; Chatid: string | null }) => {
    const { avatar, name, _id } = group;
    const sameSander = Chatid === _id;
 
    return (
      <div>
        <Link
          to={`/group?group=true&groupid=${_id}`}
          onClick={(e) => {
            if (sameSander) {
                
              e.preventDefault();
            }
          }}
        >
          <div
            className={`flex gap-2 items-center rounded-lg px-3 hover:bg-violet-100 hover:text-violet-400 py-2 ${sameSander ? "bg-violet-600 text-white" : "bg-gray-50 text-black"} `}
          >
            <AvatarGroup>
              {avatar.map((obj) => (
                <Avatar>
                  <AvatarImage
                    src={transformImage(obj, 100)}
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <div>
              <h2>{name || "Sharvan"}</h2>
            </div>
          </div>
        </Link>
      </div>
    );
  },
);
