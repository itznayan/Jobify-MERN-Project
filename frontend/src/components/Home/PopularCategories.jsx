import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, useAnimation, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect, useRef } from "react";

const PopularCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      Controls.start("visible");
    }
  }, [isInView]);

  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      img: "https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      img: "https://www.techmango.net/wp-content/uploads/2022/04/mobile-app-development.png",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      img: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Frontend-Development.jpg",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqRBZDIfbld6UIhCjOBxqE3TEiSNCrVW8cA&s",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      img: "https://www.xibms.com/blog/wp-content/uploads/2020/11/finance-vs-accounting.jpg",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s  ",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiK6pYtUzhakZyC4i1stU0dLICn6WwhnL8g&s",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5mm1x7Y9q39UwJiayLfFCDtlCKJltgtKw&s",
      icon: <IoGameController />,
    },
  ];
  return (
    <>
      <div ref={ref} className="relative categories text-white  ">
        <motion.div
          variants={{
            hidden: { paddingLeft: "100vw" },
            visible: { paddingLeft: "0vw" },         
          }}
          initial="hidden"
          animate={Controls}
          transition={{ duration: 1 }}
          className="inline-block textentry max-sm:hidden absolute top-14 right-80 h-24  bg-zinc-900"
        ></motion.div>
        <h3 className="font-['verdana'] p-16 text-4xl md:text-6xl xl:text-8xl ">
          POPULAR CATEGORIES
        </h3>

        <div className="banner p-10 grid max-sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 lg:grid-cols-2 items-center ">
          {categories.map((item, index) => (
            <div key={index}>
              <Tilt>
                <Card className="mt-6 w-96 bg-zinc-950 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                  <CardHeader
                    color="blue-gray"
                    className="relative h-56  flex justify-center items-center"
                  >
                    <img
                      className="w-full object-contain object-center"
                      src={item.img}
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      <div className="flex items-center gap-2 ">
                        {item.icon}
                        {item.title}
                      </div>
                    </Typography>
                    <Typography>{item.subTitle}</Typography>
                  </CardBody>

                  <CardFooter className="-ml-6">
                    <Button>Apply Now</Button>
                  </CardFooter>
                </Card>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
