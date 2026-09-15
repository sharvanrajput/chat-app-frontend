import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/shared/Loading";

const Home = lazy(() => import("./pages/Home")); 
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));

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
        </Routes>
      </Suspense>
    </>
  );
}
