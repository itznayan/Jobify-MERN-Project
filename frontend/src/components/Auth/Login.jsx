import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { Button } from "../ui/button";
import Magnetic from "./../../utils/Magnetic";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Layer from "../../utils/Layer";
import Lottie from "lottie-react";
import animationData from "../../../public/Login.json";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);

      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <img
        className="sm:hidden size-[0.65]  "
        src="/Login.jpg"
        alt="Login form"
      />

      <div className="grid items-center m-6  grid-cols-2 px-10 authPage">
        <div className="justify-center items-center flex ">
          {/* <img
            className="max-sm:hidden relative"
            src="/Login.jpg"
            alt="Form image"
          /> */}
          <Lottie
            animationData={animationData}
            loop={true} // ✅ repeat forever
            autoplay={true} // ✅ start automatically
            style={{ width: 480, height: 500 }}
          />
        </div>{" "}
        <div className=" mt-20 items-center border max-sm:col-span-2 h-fit rounded-2xl">
          <h3 className="p-2 text-4xl relative bottom-14 text-center  font-semibold ">
            Login To Your Account
          </h3>
          <div className="p-6 header flex justify-center">
            <form className=" max-w-fit border drop-shadow-sm rounded-xl">
              <div className="flex items-center justify-center gap-10 p-2 inputTag">
                <Label className="flex items-center gap-2">
                  <FaRegUser /> Login As:{" "}
                </Label>
                <div>
                  <select
                    className="border p-2 rounded-xl"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option className="p-2 bg-gray-300 m-4" value="">
                      Select Role
                    </option>
                    <option className="p-2 bg-gray-300 m-4" value="Employer">
                      Employer
                    </option>
                    <option className="p-2 bg-gray-300 m-4" value="Job Seeker">
                      Job Seeker
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid  items-center  w-full  grid-cols-1 p-2 inputTag max-sm:grid-cols-1 ">
                <div>
                  <Label className="p-2   ">Email Address</Label>
                  <div className="p-1 w-full ">
                    <Input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid items-center  gap-4 p-2 inputTag max-sm:grid-cols-1 ">
                <div>
                  <Label className="p-2">Password</Label>
                  <div className="p-1">
                    <Input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                    />
                  </div>
                </div>
              </div>
              <div className="grid justify-between grid-cols-3 gap-10 p-4">
                <Button
                  className="col-span-2 bg-black col"
                  onClick={handleLogin}
                  type="submit"
                >
                  Login
                </Button>
                <Link to={"/register"}>
                  <Magnetic>
                    <Button>Register</Button>
                  </Magnetic>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer(Login);
