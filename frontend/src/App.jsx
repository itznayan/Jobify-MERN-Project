import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplication";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import { useEffect, useContext, useState } from "react";
import { Context } from "./main";
import { Toaster } from "react-hot-toast";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Preloader from "./components/Layout/Preloader";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/job/getall"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/application/:id"
          element={
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applications/me"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job/post"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job/me"
          element={
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  new LocomotiveScroll();
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  const [isChatOpen, setIsChatOpen] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responce = await axios.get(
          "https://jobify-mern-x3g5.onrender.com/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(responce.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized, setIsAuthorized, setUser]);

  return (
    <>
      <CopilotKit publicApiKey={"ck_pub_f25b842eb5489ed5a976ab29abe167dd"}>
        <BrowserRouter>
          <Navbar />

          <div className="h-20">
            {/* <h1 className="mt-20 z-[1000] text-center text-9xl w-full text-red-700 fixed">
              Under Maintanance
            </h1> */}
          </div>
          <AnimatedRoutes />
          <Preloader />
          <button
            type="button"
            onClick={() => setIsChatOpen((v) => !v)}
            aria-label={isChatOpen ? "Close chat" : "Open chat"}
            className="fixed bottom-5 right-5 z-[9999] rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 h-12 w-12 flex items-center justify-center"
            title={isChatOpen ? "Close chat" : "Open chat"}
          >
            {isChatOpen ? (
              <span style={{ fontSize: 18 }}>✕</span>
            ) : (
              <span style={{ fontSize: 20 }}>💬</span>
            )}
          </button>
          {isChatOpen && (
            <div className="z-[99999]">
              <CopilotSidebar
                defaultOpen
                open={isChatOpen}
                onSetOpen={setIsChatOpen}
                labels={{
                  title: "Jack",
                  initial: "Hi you! 👋 I can help you with jobify",
                }}
                instructions="You are a helpful assistant inside a Jobify job platform. Help the user navigate the app and answer questions about jobs, applications, and features."
              />
            </div>
          )}

          <Footer />
          <Toaster />
        </BrowserRouter>
      </CopilotKit>
    </>
  );
}

export default App;
