import { sampleMsg } from "@/components/data/SampleData";
import Message from "@/components/shared/Message";
import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";
import { useRef, useState, type ChangeEvent } from "react";
export type userType = {
  _id: string;
  name: string;
};
const user = { 
  _id:"123",
  name:"sharvan"
}
export default function Chat() {
  const msgsRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) return;

    console.log("Message:", message);

    setMessage("");
  };

  const handleAttachment = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    console.log("Selected files:", files);
  };

  return (
    <div className="w-full h-full px-2">
      {/* Messages */}
      <div ref={msgsRef} className="w-full h-[80vh] overflow-y-auto p-2 ">

      {

        sampleMsg.map(i => (
          <Message key={i._id} message={i} user={user} />
        )) 
      }


      </div>

      {/* Chat Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-violet-100 border border-violet-500 w-full rounded-full">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="p-3 pr-28 rounded-full w-full bg-transparent outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleAttachment}
        />

        {/* Buttons */}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {/* Attachment */}
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
            className="size-10 rounded-full text-violet-500 hover:bg-violet-200"
          >
            <Paperclip size={20} />
          </Button>

          {/* Send */}
          <Button
            type="submit"
            size="icon"
            className="size-11 bg-violet-500 hover:bg-violet-600 rounded-full"
          >
            <Send size={20} />
          </Button>
        </div>
      </form>
    </div>
  );
}
