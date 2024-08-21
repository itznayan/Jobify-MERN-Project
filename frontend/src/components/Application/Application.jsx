import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigate("");
    }
  }, [isAuthorized, user, navigate]);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const applicationHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "https://jobify-mern-x3g5.onrender.com/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCoverLetter("");
      setResume(null);
      toast.success(data.message);
      navigate("/job/getall");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="application py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Application Form
        </h2>
        <form
          onSubmit={applicationHandler}
          className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg"
        >
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Input
                type="text"
                label="Your Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Input
                type="email"
                label="Your Email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Input
                type="tel"
                label="Your Phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Input
                type="text"
                label="Your Address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Textarea
                label="Cover Letter"
                placeholder="Write your cover letter here"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2">
              <Input
                type="file"
                label="Upload Resume"
                placeholder="Upload your resume"
                onChange={handleFileChange}
                required
                accept=" .jpg, .png, .webp"
                className="w-fit"
              />
            </div>
          </div>
          <div className="text-center">
            <Button type="submit" color="blue" className="w-full sm:w-auto">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Application;
