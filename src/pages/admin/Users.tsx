import type { DataTableFeatures } from "@/components/shared/data-table-features";
import { DataTable } from "@/components/shared/DataTable";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { createColumnHelper } from "@tanstack/react-table";

export type Users = {
  id: string;
  avatar: string;
  name: string;
  username: string;
  friends: number;
  groups: number;
};

const columnHelper = createColumnHelper<DataTableFeatures, Users>();

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "id",
  }),
  columnHelper.accessor("avatar", {
    header: "Avatar",
    cell: ({ row }) => {
    
      return (
        <Avatar>
          <AvatarImage src={`${row.original.avatar}`}></AvatarImage>
        </Avatar>
      );
    },
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("friends", {
    header: "Friends",
  }),
  columnHelper.accessor("groups", {
    header: "Groups",
  }),
]);

export default function Users() {
  const payments: Users[] = [
    {
      id: "1",
      avatar: "https://github.com/shadcn.png",
      name: "Sharvan",
      username: "Sharvan",
      friends: 5,
      groups: 5,
    },
    {
      id: "2",
      avatar: "https://github.com/shadcn.png",
      name: "Rahul",
      username: "Rahul",
      friends: 12,
      groups: 3,
    },
    {
      id: "3",
      avatar: "https://github.com/shadcn.png",
      name: "Aman",
      username: "Aman",
      friends: 8,
      groups: 6,
    },
    {
      id: "4",
      avatar: "https://github.com/shadcn.png",
      name: "Priya",
      username: "Priya",
      friends: 15,
      groups: 4,
    },
    {
      id: "5",
      avatar: "https://github.com/shadcn.png",
      name: "Neha",
      username: "Neha",
      friends: 21,
      groups: 8,
    },
    {
      id: "6",
      avatar: "https://github.com/shadcn.png",
      name: "Vikash",
      username: "Vikash",
      friends: 9,
      groups: 2,
    },
    {
      id: "7",
      avatar: "https://github.com/shadcn.png",
      name: "Rohit",
      username: "Rohit",
      friends: 18,
      groups: 7,
    },
    {
      id: "8",
      avatar: "https://github.com/shadcn.png",
      name: "Anjali",
      username: "Anjali",
      friends: 25,
      groups: 9,
    },
    {
      id: "9",
      avatar: "https://github.com/shadcn.png",
      name: "Arjun",
      username: "Arjun",
      friends: 11,
      groups: 5,
    },
    {
      id: "10",
      avatar: "https://github.com/shadcn.png",
      name: "Karan",
      username: "Karan",
      friends: 7,
      groups: 3,
    },
    {
      id: "11",
      avatar: "https://github.com/shadcn.png",
      name: "Pooja",
      username: "Pooja",
      friends: 19,
      groups: 6,
    },
    {
      id: "12",
      avatar: "https://github.com/shadcn.png",
      name: "Sahil",
      username: "Sahil",
      friends: 14,
      groups: 4,
    },
    {
      id: "13",
      avatar: "https://github.com/shadcn.png",
      name: "Simran",
      username: "Simran",
      friends: 23,
      groups: 10,
    },
    {
      id: "14",
      avatar: "https://github.com/shadcn.png",
      name: "Nikhil",
      username: "Nikhil",
      friends: 10,
      groups: 5,
    },
    {
      id: "15",
      avatar: "https://github.com/shadcn.png",
      name: "Akash",
      username: "Akash",
      friends: 16,
      groups: 7,
    },
    {
      id: "16",
      avatar: "https://github.com/shadcn.png",
      name: "Sneha",
      username: "Sneha",
      friends: 28,
      groups: 11,
    },
    {
      id: "17",
      avatar: "https://github.com/shadcn.png",
      name: "Varun",
      username: "Varun",
      friends: 13,
      groups: 4,
    },
    {
      id: "18",
      avatar: "https://github.com/shadcn.png",
      name: "Riya",
      username: "Riya",
      friends: 20,
      groups: 8,
    },
    {
      id: "19",
      avatar: "https://github.com/shadcn.png",
      name: "Mohit",
      username: "Mohit",
      friends: 6,
      groups: 2,
    },
    {
      id: "20",
      avatar: "https://github.com/shadcn.png",
      name: "Divya",
      username: "Divya",
      friends: 17,
      groups: 6,
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-2"> All Users</h1>
      <DataTable data={payments} columns={columns} />
    </div>
  );
}
