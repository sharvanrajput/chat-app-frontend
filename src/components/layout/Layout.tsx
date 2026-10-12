import { Navigate, Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import Header from "./Header";
import { AppSidebar } from "./AppSidebar";
import type { User } from "@/redux/slices/auth";

export default function Layout({ user, path }: { user: User | null; path: string }) {

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
        <AppSidebar />
        <main className="w-full h-[calc(90vh)]">
          <Header />
          {user ? <Outlet /> : <Navigate to={path} />}
        </main>
      </SidebarProvider>
    </>
  );
}
