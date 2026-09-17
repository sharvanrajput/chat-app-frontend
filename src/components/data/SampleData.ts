export type chatType = {
  avatar: string[],
  name: string,
  _id: string,
  groupChat: boolean,
  members: string[]
}

export const chats: chatType[] = [
  {
    avatar: [
      "https://github.com/shadcn.png",
      "https://github.com/shadcn.png",
    ],
    name: "Sharvan",
    _id: "1",
    groupChat: true,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=1",
    ],
    name: "Rahul",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=2",
    ],
    name: "Aman",
    _id: "3",
    groupChat: false,
    members: ["1", "3"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
    ],
    name: "Development Team",
    _id: "4",
    groupChat: true,
    members: ["1", "2", "3", "4"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=5",
    ],
    name: "Priya",
    _id: "5",
    groupChat: false,
    members: ["1", "5"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=6",
    ],
    name: "Ankit",
    _id: "6",
    groupChat: false,
    members: ["1", "6"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=7",
      "https://i.pravatar.cc/150?img=8",
    ],
    name: "Friends Group",
    _id: "7",
    groupChat: true,
    members: ["1", "2", "5", "6"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=9",
    ],
    name: "Neha",
    _id: "8",
    groupChat: false,
    members: ["1", "8"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=10",
    ],
    name: "Vikas",
    _id: "9",
    groupChat: false,
    members: ["1", "9"],
  },
  {
    avatar: [
      "https://i.pravatar.cc/150?img=11",
      "https://i.pravatar.cc/150?img=12",
    ],
    name: "Office Team",
    _id: "10",
    groupChat: true,
    members: ["1", "3", "6", "9"],
  },
];


type sampleUsersTypes = {
  avatar: string;
  name: string;
  _id: string;
};

export const sampleUsers: sampleUsersTypes[] = [
  {
    avatar: "https://github.com/shadcn.png",
    name: "Sharvan",
    _id: "1",

  },
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "rahul",
    _id: "2",

  },
  {
    avatar: "https://github.com/shadcn.png",
    name: "Sharvan",
    _id: "3",

  },
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "rahul",
    _id: "4",

  },
];

export interface sampleNofificationType {
  _id: string,
  sender: {
    avatar: string,
    name: string
  }
}

export const sampleNofification: sampleNofificationType[] = [
  {
    _id: "1",
    sender: {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "rahul",
    }
  },
  {
    _id: "2",
    sender: {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "rahul",
    }
  },
  {
    _id: "3",
    sender: {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "rahul",
    }
  },
]