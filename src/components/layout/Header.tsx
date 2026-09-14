import React from "react";
import { useSidebar } from "../ui/sidebar";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";

export default function Header() {
  const { toggleSidebar, open, openMobile } = useSidebar();
  return (
    <nav className="flex justify-between bg-violet-500 text-white px-3 py-2" >
      <div>
        <span onClick={() => toggleSidebar()}>
          {open || openMobile ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
        </span>
      </div>
      <div>
        asdfadsf
      </div>
    </nav>
  );
}
