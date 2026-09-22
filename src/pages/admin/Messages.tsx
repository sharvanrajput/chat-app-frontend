import type { DataTableFeatures } from "@/components/shared/data-table-features";
import { DataTable } from "@/components/shared/DataTable";
import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

export type Users = {
  id: string;
  avatar: string;
  attachments: string[];
  content: string;
  sender: {
    avatar: string;
    name: string;
  };
  chat: number;
  groupChat: number;
  createdAt: number;
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
  columnHelper.accessor("attachments", {
    header: "Attachments",
    cell: ({ row }) => {
      return (
        <div>
          {row.original?.attachments[0] ? (
            <img
              src={row.original?.attachments[0]}
              className="size-20"
              alt=""
            />
          ) : (
            <p>NO Attachment</p>
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("content", {
    header: "Content",
  }),
  columnHelper.accessor("sender", {
    header: "Sender",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <Avatar className={"mx-auto"}>
            <AvatarImage src={row.original?.sender?.avatar}></AvatarImage>
          </Avatar>
          <p> {row.original?.sender?.name} </p>
        </div>
      );
    },
  }),
  columnHelper.accessor("chat", {
    header: "Chat",
  }),
  columnHelper.accessor("groupChat", {
    header: "Created By",
  }),
  columnHelper.accessor("createdAt", {
    header: "Created ",
    cell: ({ row }) => {
      return moment(row.original.createdAt).fromNow();
    },
  }),
]);
export default function Messages() {
  const payments: Users[] = [
    {
      id: "1",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Hello, how are you?",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Sharvan",
      },
      chat: 12,
      groupChat: 3,
      createdAt: 1726742400000,
    },
    {
      id: "2",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/file1.pdf"],
      content: "Here is the project document.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Rahul",
      },
      chat: 18,
      groupChat: 5,
      createdAt: 1726828800000,
    },
    {
      id: "3",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Can you check this code?",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Aman",
      },
      chat: 8,
      groupChat: 2,
      createdAt: 1726915200000,
    },
    {
      id: "4",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/image1.jpg"],
      content: "I have shared the design.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Priya",
      },
      chat: 25,
      groupChat: 7,
      createdAt: 1727001600000,
    },
    {
      id: "5",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Let's discuss this tomorrow.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Neha",
      },
      chat: 15,
      groupChat: 4,
      createdAt: 1727088000000,
    },
    {
      id: "6",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "The meeting has been scheduled.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Vikash",
      },
      chat: 10,
      groupChat: 3,
      createdAt: 1727174400000,
    },
    {
      id: "7",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/report.pdf"],
      content: "Please review the report.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Rohit",
      },
      chat: 20,
      groupChat: 8,
      createdAt: 1727260800000,
    },
    {
      id: "8",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Good morning everyone!",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Anjali",
      },
      chat: 32,
      groupChat: 9,
      createdAt: 1727347200000,
    },
    {
      id: "9",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "I will complete this task today.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Arjun",
      },
      chat: 14,
      groupChat: 5,
      createdAt: 1727433600000,
    },
    {
      id: "10",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/video.mp4"],
      content: "Check this video.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Karan",
      },
      chat: 22,
      groupChat: 6,
      createdAt: 1727520000000,
    },
    {
      id: "11",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "The new update is working perfectly.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Pooja",
      },
      chat: 19,
      groupChat: 7,
      createdAt: 1727606400000,
    },
    {
      id: "12",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/design.png"],
      content: "Here is the final design.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Sahil",
      },
      chat: 17,
      groupChat: 4,
      createdAt: 1727692800000,
    },
    {
      id: "13",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Please send me the API details.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Simran",
      },
      chat: 29,
      groupChat: 10,
      createdAt: 1727779200000,
    },
    {
      id: "14",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "The server is running successfully.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Nikhil",
      },
      chat: 11,
      groupChat: 3,
      createdAt: 1727865600000,
    },
    {
      id: "15",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/document.docx"],
      content: "I have uploaded the document.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Akash",
      },
      chat: 24,
      groupChat: 8,
      createdAt: 1727952000000,
    },
    {
      id: "16",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Can we have a quick call?",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Sneha",
      },
      chat: 35,
      groupChat: 12,
      createdAt: 1728038400000,
    },
    {
      id: "17",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "Everything is ready for deployment.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Varun",
      },
      chat: 16,
      groupChat: 5,
      createdAt: 1728124800000,
    },
    {
      id: "18",
      avatar: "https://github.com/shadcn.png",
      attachments: ["https://example.com/photo.jpg"],
      content: "Sharing the latest screenshot.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Riya",
      },
      chat: 27,
      groupChat: 9,
      createdAt: 1728211200000,
    },
    {
      id: "19",
      avatar: "https://github.com/shadcn.png",
      attachments: [],
      content: "I have fixed the issue.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Mohit",
      },
      chat: 9,
      groupChat: 2,
      createdAt: 1728297600000,
    },
    {
      id: "20",
      avatar: "https://github.com/shadcn.png",
      attachments: [
        "https://example.com/file1.pdf",
        "https://example.com/image1.jpg",
      ],
      content: "Here are all the required files.",
      sender: {
        avatar: "https://github.com/shadcn.png",
        name: "Divya",
      },
      chat: 31,
      groupChat: 11,
      createdAt: 1728384000000,
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-2"> All Chats</h1>
      <DataTable data={payments} columns={columns} />
    </div>
  );
}
