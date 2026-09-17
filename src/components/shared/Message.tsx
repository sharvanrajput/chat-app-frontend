import type { userType } from "@/pages/Chat";
import type { msgType } from "../data/SampleData";
import moment from "moment";
import { fileFormat } from "@/lib/features";
import RanderAttachment from "./RanderAttachment";
export default function Message({
  message,
  user,
}: {
  message: msgType;
  user: userType;
}) {
  const { sender, conatent, attachments, createdAt } = message;

  const isMyMessage = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      className={`w-full flex ${isMyMessage ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl flex flex-col ${
          isMyMessage
            ? "bg-violet-500 text-white rounded-br-none"
            : "bg-gray-200 text-black rounded-bl-none"
        }`}
      >
        <p className="text-violet-500 text-[11px] font-bold">
          {!isMyMessage && sender.name}
        </p>
        {conatent && <p> {conatent} </p>}

        {attachments.length > 0 &&
          attachments.map((i, index) => {
            const url = i.url;
            const file = fileFormat(url);
            return (
              <div key={index}>
                <a href="" target="_blank" download className="text-black">
                  {RanderAttachment(file, url)}
                </a>
              </div>
            );
          })}

        {timeAgo && <p className="text-[10px]"> {timeAgo}</p>}
      </div>
    </div>
  );
}
