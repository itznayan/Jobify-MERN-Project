import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import noJob from "../../../public/no-job.png";
import Layer from "../../utils/Layer";
const Jobs = () => {
  const motoinVarients = {
    initial: { opacity: 0, scale: 0.4, x: 100, y: 50 },
    animate: { opacity: 1, scale: 1, x: 0, y: 0 },
  };
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className=" jobs-page py-10 px-20">
      <h1 className="text-3xl uppercase font-semibold">
        {"All Availble Jobs".split(" ").map((item, index) => (
          <motion.span
            variants={motoinVarients}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.25 * index }}
            key={index}
          >
            {item}&nbsp;
          </motion.span>
        ))}
      </h1>
      {jobs.length == 0 ? (
        <div className="text-center p-2 text-white w-full text-xl ">
          <div className="h-96 ">
            <img
              src={noJob}
              className="w-full mix-blend-multiply h-full object-contain"
              alt=""
            />
          </div>
          <p className="text-center p-2 text-2xl rounded-xl bg-gray-500">
            Currently, there are no available job opportunities !
          </p>
        </div>
      ) : (
        <div className="flex gap-10 max-sm:flex-col px-10 py-20">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div
                  className="card py-8 px-4 flex flex-col justify-center lg:w-[30%] items-center rounded-3xl border-2 shadow-2xl "
                  key={element._id}
                >
                  <h2 className="text-4xl text-center text-black py-2">
                    {element.title}
                  </h2>
                  <p className="text-xl py-2">{element.category}</p>
                  <p className="text-lg py-2">{element.country}</p>

                  <Link to={`/job/${element._id}`}>
                    <Button className="bg-black font-light text-white px-4 py-2 ">
                      Job Details
                    </Button>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Layer(Jobs);
