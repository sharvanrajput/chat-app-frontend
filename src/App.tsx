import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/shared/Loading";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Chats from "./pages/admin/Chats";
import Message from "./components/shared/Message";
import Messages from "./pages/admin/Messages";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));

export default function App() {
  const user = true;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout user={user} path="/login" />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>

          <Route path="/" element={<Layout user={!user} path="/" />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route
            path="/admin"
            element={<AdminLayout user={user} path="/admin/login" />}
          >
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/chats" element={<Chats />} />
            <Route path="/admin/messages" element={<Messages />} />
          </Route>

          <Route
            path="/admin"
            element={<AdminLayout user={!user} path="/admin" />}
          >
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>



        </Routes>
      </Suspense>
    </>
  );
}
