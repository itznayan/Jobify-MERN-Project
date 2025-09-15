import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import ResumeModal from "./ResumeModal";
import { Button } from "../ui/button";
import noJob from "../../../public/no-job.png";
import Layer from "../../utils/Layer";

const MyApplication = () => {
  const [applications, setApplications] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const endpoint =
          user && user.role === "Employer"
            ? "employer/getall"
            : "jobseeker/getall";

        const res = await axios.get(
          `http://localhost:4000/api/v1/application/${endpoint}`,
          {
            withCredentials: true,
          }
        );
        setApplications(res.data.applications);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    };

    fetchApplications();
  }, [user]);

  const deleteApplication = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/application/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);

      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const openModel = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModelOpen(true);
  };

  const closeModel = () => {
    setModelOpen(false);
  };

  return (
    <section className="my_application_page">
      {user && user.role === "Job Seeker" ? (
        <div className="container">
          <h3 className="text-3xl text-center font-bold mb-10">
            My Application
          </h3>
          {applications.length <= 0 ? (
            <p className="text-center text-2xl mb-10">No Applications Found</p>
          ) : (
            applications.map((elem) => (
              <JobSeekerCard
                key={elem._id}
                elem={elem}
                deleteApplication={deleteApplication}
                openModel={openModel}
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <h3 className="text-3xl text-center max-sm:mb-10">
            Applications from Job Seekers
          </h3>
          {applications.length <= 0 ? (
            <div className="text-center p-2 text-white w-full text-xl ">
              <div className="h-96 ">
                <img
                  src={noJob}
                  className="w-full mix-blend-multiply h-full object-contain"
                  alt=""
                />
              </div>
              <p className="text-center p-2 rounded-xl bg-gray-500">
                There are no applicant submissions at this time.
              </p>
            </div>
          ) : (
            <div>
              {" "}
              {applications.map((elem) => (
                <EmployerCard
                  key={elem._id}
                  elem={elem}
                  openModel={openModel}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {modelOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModel} />
      )}
    </section>
  );
};

export default Layer(MyApplication);

const JobSeekerCard = ({ elem, deleteApplication, openModel }) => {
  return (
    <div className="job_seeker_card flex flex-wrap max-sm:flex-col mb-10">
      <div className="resume max-sm:size-full size-96">
        <img
          src={elem.resume.url}
          alt="resume"
          onClick={() => openModel(elem.resume.url)}
        />
      </div>
      <div className="detail flex justify-center flex-col space-y-4">
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Name: </span>
          {elem.name}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Phone: </span>
          {elem.phone}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Email: </span>
          {elem.email}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Address: </span>
          {elem.address}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Cover Letter: </span>
          {elem.coverLetter}
        </p>
        <Button
          className="w-fit px-4 py-1"
          onClick={() => deleteApplication(elem._id)}
        >
          Delete Application
        </Button>
      </div>
    </div>
  );
};

const EmployerCard = ({ elem, openModel }) => {
  return (
    <div className="job_seeker_card flex flex-wrap max-sm:flex-col mb-10">
      <div className="resume max-sm:size-full size-96">
        <img
          src={elem.resume.url}
          alt="resume"
          onClick={() => openModel(elem.resume.url)}
        />
      </div>
      <div className="detail flex justify-center flex-col space-y-4">
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Name: </span>
          {elem.name}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Phone: </span>
          {elem.phone}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Email: </span>
          {elem.email}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Address: </span>
          {elem.address}
        </p>
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Cover Letter: </span>
          {elem.coverLetter}
        </p>
      </div>
    </div>
  );
};
