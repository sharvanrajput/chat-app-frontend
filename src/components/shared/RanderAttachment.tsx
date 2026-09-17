import { transformImage } from "@/lib/features";
import { File } from "lucide-react";
import type { ReactNode } from "react";

function RanderAttachment(file: string, url: string): ReactNode {
  switch (file) {
    case "video":
      console.log(file);
      return <video src={url} controls preload="none" width={"200px"} />;

    case "image":
      console.log(file);
      return (
        <img
          src={transformImage(url, 200)}
          alt="attachment"
          className="h-50 w-35 object-contain"
        />
      );

    case "audio":
      console.log(file);
      return <audio src={url} controls preload="none" />;

    default:
      return <File />;
  }
}
export default RanderAttachment;
