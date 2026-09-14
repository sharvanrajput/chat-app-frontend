import { Navigate, Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import Header from "./Header";
import { AppSidebar } from "./AppSidebar";

export default function Layout({
  user,
  path,
}: {
  user: boolean;
  path: string;
}) {
  return (
    <div>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "10rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <main className="w-full">
          <Header />
          {user ? <Outlet /> : <Navigate to={path} />}
        </main>
      </SidebarProvider>
    </div>
  );
}
