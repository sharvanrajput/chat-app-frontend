import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bell,
  LogOut,
  Search,
  Settings,
  SidebarCloseIcon,
  SidebarOpenIcon,
  User,
  UserGroup,
  Users2,
  type LucideIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSidebar } from "../ui/sidebar";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
type DilogProviderProps = {
  Icon: LucideIcon;
  children: ReactNode;
};

export default function Header() {
  const { toggleSidebar, open, openMobile } = useSidebar();
  const navigate = useNavigate();
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
            <DilogProvider Icon={Search}>
              <p>lorem </p>
            </DilogProvider>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <DilogProvider Icon={Users2}>
              <p>lorem </p>
            </DilogProvider>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <div
              className="bg-black  p-2  rounded-full"
              onClick={() => navigate("/group")}
            >
              <UserGroup className="size-4" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="bg-black  p-2  rounded-full">
                  <Bell className="size-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings /> Setting
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

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
                    {" "}
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

const DilogProvider = ({ Icon, children }: DilogProviderProps) => {
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
