import { Check, X } from "lucide-react";
import { memo } from "react";
import type { sampleNofificationType } from "../data/SampleData";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
interface handleType extends sampleNofificationType {
  handler: (id: string, accept: boolean) => void;
}
function NotificationITem({ sender, _id, handler }: handleType) {
  return (
    <div className=" flex justify-between p-1 border-2 rounded-lg">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className=" text-black ">{sender.name || "user name"}</h3>
        </div>
      </div>
      <div>
        <Button
          className={"bg-violet-500 rounded-full"}
          onClick={() => handler(_id, true)}
        >
          <Check />
        </Button>
        <Button
          variant={"destructive"}
          className={" rounded-full"}
          onClick={() => handler(_id, false)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
export default memo(NotificationITem);
