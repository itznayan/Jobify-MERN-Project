import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { Button } from "./../ui/button";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="jobDetail page">
      <div className="container">
        <h3 className="text-center text-3xl font-bold">Job Details</h3>
        <div className="banner space-y-4 text-xl px-10 py-14 font-semibold">
          <p>
            Title: <span className="font-normal"> {job.title}</span>
          </p>
          <p>
            Category: <span className="font-normal">{job.category}</span>
          </p>
          <p>
            Country: <span className="font-normal">{job.country}</span>
          </p>
          <p>
            City: <span className="font-normal">{job.city}</span>
          </p>
          <p>
            Location: <span className="font-normal">{job.location}</span>
          </p>
          <p>
            Description: <span className="font-normal">{job.description}</span>
          </p>
          <p>
            Job Posted On:{" "}
            <span className="font-normal">{job.jobPostedOn}</span>
          </p>
          <p>
            Salary:{" "}
            {job.fixedSalary ? (
              <span className="font-normal">{job.fixedSalary}</span>
            ) : (
              <span className="font-normal">
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>
              <Button className="mt-10">Apply Now</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
