import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [seconds, setSeconds] = useState(5); // Initial countdown seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup function to clear interval
  }, [seconds]);

  // Redirect function when seconds reach 0
  useEffect(() => {
    if (seconds === 0) {
      window.location.href = "/"; // Redirect to homepage
    }
  }, [seconds]);

  return (
    <section className="bg-black">
      <div className="flex justify-center items-center w-full h-[100vh]">
        <img
          className="max-sm:h-[100vw] max-sm:w-[100vw] object-contain max-sm:object-fill"
          src="./404.jpg"
          alt=""
        />
        <div className="absolute left-[62%] bottom-[20%] max-sm:bottom-[28%] max-sm:left-[55%] ">
          <Link to="/">
            <Button className="max-sm:scale-75">Goto Homepage</Button>
          </Link>
        </div>
        <div className="absolute top-[10%] right-[10%] bg-red-600 shadow-lg rounded-l-full shadow-gray-600 p-4 text-white  text-2xl">
          Redirecting in {seconds} seconds...
        </div>
      </div>
    </section>
  );
};

export default NotFound;
