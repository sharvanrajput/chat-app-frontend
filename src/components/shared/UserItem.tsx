import { Check, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { memo } from "react";
import { transformImage } from "@/lib/features";

type usertype = {
  _id: string;
  name: string;
};

function UserItem({
  user,
  handler,
  handlerIsLoading,
}: {
  user: usertype;
  handler: (_id: string) => void;
  handlerIsLoading: boolean;
}) {
  const url = "https://github.com/shadcn.png";
  return (
    <div
      className=" flex justify-between p-1 border-2 rounded-lg"
      onClick={() => handler(user._id)}
    >
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={transformImage(url, 100)} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className=" text-black ">{user.name || "user name"}</h3>
        </div>
      </div>
      <div>
        <Button
          className={"bg-violet-500 rounded-full"}
          disabled={handlerIsLoading}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
export default memo(UserItem);
