import { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import logo from "../../../public/Logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, setUser, user } = useContext(Context);

  const navigateTo = useNavigate();

  // 🔹 Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://jobify-mern-x3g5.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );
      toast(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  // 🔹 Open Resume Modal
  const handleOpenResume = () => {
    setUrl("https://resume-builder-for-all.vercel.app");
    setIsOpen(true);
    setShow(false); // close mobile menu if open
  };

  return (
    <>
      <nav className="bg-transparent backdrop-blur-md fixed w-screen z-10 ">
        <div className="px-4 bg-white/20">
          <div className="flex justify-between">
            <div className="w-48">
              <Link to={"/"}>
                <img
                  className="max-sm:w-48 lg:w-48 object-fill"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex">
              <motion.ul
                initial={{ x: 150 }}
                animate={{ x: 0 }}
                className={
                  !show
                    ? "menu  max-lg:hidden flex items-center p-6 gap-10"
                    : "max-lg:block bg-white absolute right-20 z-10 border mt-6 rounded-xl shadow-md space-y-4 show-menu menu p-4 "
                }
              >
                <li>
                  <Link
                    className="letterSpace"
                    to={"/"}
                    onClick={() => setShow(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {/* 🔹 Changed from Link → Button that opens modal */}
                  <button className="letterSpace" onClick={handleOpenResume}>
                    Generate Resume
                  </button>
                </li>
                {isAuthorized ? (
                  <>
                    <li>
                      <Link
                        className="letterSpace"
                        to={"/job/getall"}
                        onClick={() => setShow(false)}
                      >
                        All Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="letterSpace"
                        to={"/applications/me"}
                        onClick={() => setShow(false)}
                      >
                        {user && user.role === "Employer"
                          ? "Applicants Application"
                          : "Applications"}
                      </Link>
                    </li>
                    {user && user.role === "Employer" ? (
                      <>
                        <li>
                          <Link
                            className="letterSpace"
                            to={"/job/post"}
                            onClick={() => setShow(false)}
                          >
                            Post New Job
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="letterSpace"
                            to={"/job/me"}
                            onClick={() => setShow(false)}
                          >
                            View Your Jobs
                          </Link>
                        </li>
                      </>
                    ) : null}
                    <Button onClick={handleLogout}>Log Out</Button>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        className="letterSpace"
                        to={"/login"}
                        onClick={() => setShow(false)}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="letterSpace"
                        to={"/register"}
                        onClick={() => setShow(false)}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </motion.ul>
              <div className="hamburger px-4 lg:hidden mt-6 cursor-pointer">
                <HamburgerMenuIcon
                  onClick={() => setShow(!show)}
                  className="size-8 mb-2 hover:rotate-180 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔹 Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60  backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 h-5/6 rounded-lg shadow-lg relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              ✕
            </button>

            {/* Iframe */}
            <iframe
              src={url}
              title="Generated Resume"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
