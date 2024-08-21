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

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
        Welcome To Jobify
      </h1>
      <img className="sm:hidden " src="/Register.jpg" alt="Login form" />

      <div className="grid items-center grid-cols-2 px-10 authPage">
        <div className=" items-center border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] z-10 max-sm:col-span-2 h-fit rounded-2xl">
          <div className="p-6 header">
            <h3 className="p-2 text-4xl font-semibold text-start">
              Create A New Account
            </h3>
            <form className=" max-w-fit border drop-shadow-sm rounded-xl">
              <div className="flex items-center justify-center gap-10 p-2 inputTag">
                <Label className="flex items-center gap-2">
                  <FaRegUser /> Register As:{" "}
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
                <div className="">
                  <Label className="p-2">Name</Label>
                  <div className="p-1">
                    <Input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
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
                <div className="">
                  <Label className="p-2">Phone Number</Label>
                  <div className="p-1">
                    <Input
                      required
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
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
                  onClick={handleRegister}
                  type="submit"
                >
                  Register
                </Button>
                <Link to={"/login"}>
                  <Button>Log In</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img className="max-sm:hidden" src="/Register.jpg" alt="Form image" />
        </div>
      </div>
    </>
  );
};

export default Register;
