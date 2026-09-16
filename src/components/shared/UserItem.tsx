import { Check, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function UserItem({
  _id,
  handler,
  handlerIsLoading,
}: {
  _id: string;
  handler: (_id: string) => void;
  handlerIsLoading: boolean;
}) {
  return (
    <div
      className=" flex justify-between p-1 border-2 rounded-lg"
      onClick={() => handler(_id)}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <Button disabled={handlerIsLoading}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
