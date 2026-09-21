import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Group,
  MessageCircle,
  ShieldEllipsis,
  User,
  type LucideIcon,
} from "lucide-react";
import moment from "moment";

export const description = "A line chart with a label";
export default function Dashboard() {
  return (
    <div className="p-3">
      <Card>
        <CardContent>
          <div className="flex  items-center">
            <div className="flex w-[25%] gap-2 items-center">
              <ShieldEllipsis className="size-12" />
              <Input />
              <Button>Search</Button>
            </div>
            <div>{moment().format(" dddd , MMMM Do yyyy ")} </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Widget Icon={User} title={"Users"} value={34} />
        <Widget Icon={MessageCircle} title={"Chats"} value={3} />
        <Widget Icon={Group} title={"Messages"} value={100} />
      </div>
    </div>
  );
}

const Widget = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value: number;
  Icon: LucideIcon;
}) => {
  return (
    <Card>
      <CardContent>
        <div className="">
          <div className="border-4 mx-auto  border-black size-15 flex justify-center items-center  rounded-full">
            {value}
          </div>
          <div className="flex gap-2 items-center ">
            <Icon size={15} />
            <p>{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

