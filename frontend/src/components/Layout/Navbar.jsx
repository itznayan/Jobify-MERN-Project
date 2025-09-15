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
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
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
  return (
    <>
      {/* <nav className={isAuthorized ? "block " : "hidden "}> */}
      <nav className="bg-transparent backdrop-blur-md fixed w-screen z-10 ">
        <div className="px-4 bg-black/10">
          <div className="flex justify-between">
            <div className="w-48">
              <Link to={"/"}>
                <img
                  className="max-sm:w-48 lg:w-48 object-fill"
                  src="./Logo.png"
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
                    ) : (
                      <></>
                    )}
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
    </>
  );
};

export default Navbar;
