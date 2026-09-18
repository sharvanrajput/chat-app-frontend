import { sampleUsers } from "@/components/data/SampleData";
import UserItem from "@/components/shared/UserItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { transformImage } from "@/lib/features";
import { ArrowLeft, Edit, Minus, Plus, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Group() {
  const navigate = useNavigate();
  const [IsEdit, setIsEdit] = useState(false);
  const [GroupName, setGroupName] = useState("Group Name");
  const groupid = useSearchParams()[0].get("groupid");

  const [users, setUsers] = useState(sampleUsers);

  useEffect(() => {
    setGroupName(`group name ${groupid}`);

    return ()=>{
      setGroupName("")
      setIsEdit(false)
    }
  }, [groupid]);

  const [selectedMember, setSelectedMembers] = useState<string[]>([]);

  const handleSelectMembers = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((str) => id !== str) : [...prev, id],
    );
  };

  return (
    <div>
      <Button onClick={() => navigate("/")}>
        <ArrowLeft />
      </Button>
      {groupid ? (
        <>
          <div className="flex justify-evenly mb-3">
            <div>
              {IsEdit ? (
                <>
                  <div className="flex gap-5">
                    <Input
                      value={GroupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                    <Button onClick={() => setIsEdit(false)}>
                      <Save />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex gap-5">
                  <h2 className="text-2xl font-bold">{GroupName}</h2>
                  <Button onClick={() => setIsEdit(true)}>
                    <Edit />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="w-[60%] mx-auto">
              <ScrollArea className="h-[60vh] mb-3 p-2 w-full rounded-md border border-violet-500">
                <div className="space-y-2.5">
                  {users.map((user) => (
                    <div className=" flex justify-between p-1 border-2 rounded-lg">
                      <div className="flex gap-2 items-center">
                        <Avatar>
                          <AvatarImage
                            src={transformImage(user.avatar, 100)}
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className=" text-black ">
                            {user.name || "user name"}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <Button
                          onClick={() => handleSelectMembers(user._id)}
                          className="bg-violet-500 rounded-full"
                        >
                          <Minus />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex justify-between">
                <Button variant={"destructive"}> Delete Group</Button>

                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button className={"text-white bg-violet-500"}>
                      Add Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Members</DialogTitle>
                    </DialogHeader>

                    <ScrollArea className="max-h-[300px]  rounded-md border p-4">
                      <div className="space-y-2.5">
                        {users.map((user) => (
                          <div className=" flex justify-between p-1 border-2 rounded-lg">
                            <div className="flex gap-2 items-center">
                              <Avatar>
                                <AvatarImage
                                  src={transformImage(user.avatar, 100)}
                                  alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className=" text-black ">
                                  {user.name || "user name"}
                                </h3>
                              </div>
                            </div>
                            <div>
                              <Button
                                onClick={() => handleSelectMembers(user._id)}
                                className="bg-violet-500 rounded-full"
                              >
                                {selectedMember.includes(user._id) ? (
                                  <Minus />
                                ) : (
                                  <Plus />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex justify-between">
                      <Button variant={"destructive"}>Cancle</Button>
                      <Button className={"bg-violet-500"}>Sumit Changes</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[60vh] grid place-content-center ">
            <h2>Select a group to edit</h2>
          </div>
        </>
      )}
    </div>
  );
}
