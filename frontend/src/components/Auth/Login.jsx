import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

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
      <h1 className=" mt-4 sm:mb-10 text-5xl font-bold text-center max-sm:text-2xl ">
        Welcome Back To Jobify
      </h1>
      <img className="sm:hidden " src="/Login.jpg" alt="Login form" />

      <div className="grid items-center grid-cols-2 px-10 authPage">
        <div className=" items-center border shadow-[5px_5px_0px_0px_rgba(109,40,217)] z-10 max-sm:col-span-2 h-fit rounded-2xl">
          <div className="p-6 header">
            <h3 className="p-2 text-4xl font-semibold text-start">
              Login To Your Account
            </h3>
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

              <div className="grid items-center grid-cols-2 gap-4 p-2 inputTag max-sm:grid-cols-1 ">
                <div>
                  <Label className="p-2">Email Address</Label>
                  <div className="p-1">
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

              <div className="grid items-center grid-cols-2 gap-4 p-2 inputTag max-sm:grid-cols-1 ">
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
                  <Button>Register</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img className="max-sm:hidden" src="/Login.jpg" alt="Form image" />
        </div>
      </div>
    </>
  );
};

export default Login;
