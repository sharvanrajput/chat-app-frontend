import type { DataTableFeatures } from "@/components/shared/data-table-features";
import { DataTable } from "@/components/shared/DataTable";
import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { createColumnHelper } from "@tanstack/react-table";

export type Users = {
  id: string;
  avatar: string;
  name: string;
  totleMembers: number;
  members: string[];
  totalMessages: number;
  creater: { avatar: string; name: string };
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
  columnHelper.accessor("totleMembers", {
    header: "Total Members",
  }),
  columnHelper.accessor("members", {
    header: "Members",
    cell: ({ row }) => {
      return (
        <AvatarGroup>
          {row.original?.members?.map((ele) => (
            <Avatar>
              <AvatarImage src={ele}></AvatarImage>
            </Avatar>
          ))}
        </AvatarGroup>
      );
    },
  }),
  columnHelper.accessor("totalMessages", {
    header: "Total Messages",
  }),
  columnHelper.accessor("creater", {
    header: "Created By",
    cell: ({ row }) => {
      return (
        <div className="text-center"  >
          <Avatar className={"mx-auto"}>
            <AvatarImage src={row.original?.creater?.avatar}></AvatarImage>
          </Avatar>
          <p> {row.original?.creater?.name} </p>
        </div>
      );
    },
  }),
]);

export default function Chats() {
  const groups: Users[] = [
    {
      id: "1",
      avatar: "https://github.com/shadcn.png",
      name: "MERN Stack Developers",
      totleMembers: 25,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 1250,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Sharvan",
      },
    },
    {
      id: "2",
      avatar: "https://github.com/shadcn.png",
      name: "React Developers",
      totleMembers: 18,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 845,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Rahul",
      },
    },
    {
      id: "3",
      avatar: "https://github.com/shadcn.png",
      name: "Node.js Community",
      totleMembers: 32,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2140,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Aman",
      },
    },
    {
      id: "4",
      avatar: "https://github.com/shadcn.png",
      name: "JavaScript Learners",
      totleMembers: 40,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 3250,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Priya",
      },
    },
    {
      id: "5",
      avatar: "https://github.com/shadcn.png",
      name: "TypeScript Developers",
      totleMembers: 22,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 1680,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Neha",
      },
    },
    {
      id: "6",
      avatar: "https://github.com/shadcn.png",
      name: "Frontend Masters",
      totleMembers: 35,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2890,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Rohit",
      },
    },
    {
      id: "7",
      avatar: "https://github.com/shadcn.png",
      name: "Backend Engineers",
      totleMembers: 28,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 1925,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Vikash",
      },
    },
    {
      id: "8",
      avatar: "https://github.com/shadcn.png",
      name: "MongoDB Community",
      totleMembers: 31,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2415,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Anjali",
      },
    },
    {
      id: "9",
      avatar: "https://github.com/shadcn.png",
      name: "Express.js Developers",
      totleMembers: 19,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 980,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Arjun",
      },
    },
    {
      id: "10",
      avatar: "https://github.com/shadcn.png",
      name: "Full Stack Developers",
      totleMembers: 45,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 4120,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Karan",
      },
    },
    {
      id: "11",
      avatar: "https://github.com/shadcn.png",
      name: "Web Development",
      totleMembers: 37,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2760,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Pooja",
      },
    },
    {
      id: "12",
      avatar: "https://github.com/shadcn.png",
      name: "Coding Beginners",
      totleMembers: 52,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 5200,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Sahil",
      },
    },
    {
      id: "13",
      avatar: "https://github.com/shadcn.png",
      name: "Software Engineers",
      totleMembers: 29,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2380,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Simran",
      },
    },
    {
      id: "14",
      avatar: "https://github.com/shadcn.png",
      name: "Next.js Developers",
      totleMembers: 24,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 1850,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Nikhil",
      },
    },
    {
      id: "15",
      avatar: "https://github.com/shadcn.png",
      name: "UI UX Designers",
      totleMembers: 33,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2940,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Akash",
      },
    },
    {
      id: "16",
      avatar: "https://github.com/shadcn.png",
      name: "AWS Developers",
      totleMembers: 21,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 1430,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Sneha",
      },
    },
    {
      id: "17",
      avatar: "https://github.com/shadcn.png",
      name: "Docker Community",
      totleMembers: 27,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 2075,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Varun",
      },
    },
    {
      id: "18",
      avatar: "https://github.com/shadcn.png",
      name: "DSA Practice",
      totleMembers: 48,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 3650,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Riya",
      },
    },
    {
      id: "19",
      avatar: "https://github.com/shadcn.png",
      name: "Tech Discussions",
      totleMembers: 41,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 3180,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Mohit",
      },
    },
    {
      id: "20",
      avatar: "https://github.com/shadcn.png",
      name: "Developers Hub",
      totleMembers: 60,
      members: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
      totalMessages: 6450,
      creater: {
        avatar: "https://github.com/shadcn.png",
        name: "Divya",
      },
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-2"> All Chats</h1>
      <DataTable data={groups} columns={columns} />
    </div>
  );
}
