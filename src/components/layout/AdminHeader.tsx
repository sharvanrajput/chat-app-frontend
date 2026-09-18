import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  LogOut,
  Minus,
  Plus,
  Search,
  Settings,
  SidebarCloseIcon,
  SidebarOpenIcon,
  User,
  UserGroup,
  Users2,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { sampleNofification, sampleUsers } from "../data/SampleData";
import NotificationITem from "../shared/NotificationITem";
import UserItem from "../shared/UserItem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { useSidebar } from "../ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { transformImage } from "@/lib/features";
type DilogProviderProps = {
  Icon: LucideIcon;
  children: ReactNode;
};

export default function AdminHeader() {
  const { toggleSidebar, open, openMobile } = useSidebar();
  const [users, setUsers] = useState(sampleUsers);
  const [notification, setNotification] = useState(sampleNofification);
  const navigate = useNavigate();
  const handleAddFriend = (id: string) => {};
  const isLoadingFriendReq = false;
  const sendReqHanler = (_id: string, accept: boolean): void => {};
  const [selectedMember, setSelectedMembers] = useState<string[]>([]);
  const handleSelectMembers = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((str) => id !== str) : [...prev, id],
    );
  };
  const handleCrateGroup = () => {};
  console.log(selectedMember);
  return (
    <nav className="flex justify-between items-baseline bg-violet-500 text-white px-3 py-2">
      <div>
        <span onClick={() => toggleSidebar()}>
          {open || openMobile ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
        </span>
      </div>
      <div className="flex gap-2 items-baseline">
     

        <Tooltip>
          <TooltipTrigger>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <Settings /> Setting
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Button variant={"destructive"} className={"w-full"}>
                    {" "}
                    <LogOut /> Logout
                  </Button>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
export const DilogProvider = ({ Icon, children }: DilogProviderProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-black  p-2  rounded-full">
          <Icon className="size-4" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
