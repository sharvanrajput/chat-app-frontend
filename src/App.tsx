import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Layout from "./components/layout/Layout";
import Loading from "./components/shared/Loading";
import Chats from "./pages/admin/Chats";
import Dashboard from "./pages/admin/Dashboard";
import Messages from "./pages/admin/Messages";
import Users from "./pages/admin/Users";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { userExist } from "./redux/slices/auth";
import { api } from "./api/api";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));

export default function App() {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const fetchMe = async () => {
    const me = await api.get("/user/me");
    console.log(me.data.user);
    dispatch(userExist(me.data.user));
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout user={user} path="/login" />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>

          {/* <Route path="/" element={<Layout user={!user} path="/" />}> */}
          <Route path="/login" element={<Login />} />
          {/* </Route> */}

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
