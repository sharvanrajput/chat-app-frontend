import { Navigate, Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import type { User } from "@/redux/slices/auth";

export default function AdminLayout({
  user,
  path,
}: {
  user: User | null | boolean;
  path: string;
}) {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "10rem",
          } as React.CSSProperties
        }
      >
        <AdminSidebar />
       <main className="w-full h-[calc(90vh)] ">
          <AdminHeader />
          {user ? <Outlet /> : <Navigate to={path} />}
        </main>
      </SidebarProvider>
    </>
  );
}
